// Full-page screenshot of the site at 1024px width.
// Spawns its own Vite dev server on a free port, captures via system Chrome,
// saves to SCREENSHOT.png, then cleans up.
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright-core";

const OUT_FILE = "SCREENSHOT.png";
const VIEWPORT_WIDTH = 1024;
const SERVER_START_TIMEOUT_MS = 30_000;
const PAGE_LOAD_TIMEOUT_MS = 60_000;

const vite = spawn("node_modules/.bin/vite", ["--port", "0"], {
  detached: true, // own process group so we can kill the whole tree
  stdio: ["ignore", "pipe", "pipe"],
});

let url = null;
try {
  url = await waitForServerUrl(vite, SERVER_START_TIMEOUT_MS);
  console.log(`Vite ready at ${url}`);

  const browser = await chromium.launch({ channel: "chrome" });
  try {
    const page = await browser.newPage({
      viewport: { width: VIEWPORT_WIDTH, height: 800 },
    });
    await page.goto(url, { waitUntil: "networkidle", timeout: PAGE_LOAD_TIMEOUT_MS });
    await page.screenshot({ path: OUT_FILE, fullPage: true });
    console.log(`Saved ${OUT_FILE}`);
  } finally {
    await browser.close();
  }
} finally {
  stopVite(vite);
}

/**
 * Waits for Vite to print its "Local:" URL, then confirms the server responds.
 * @param {import("node:child_process").ChildProcess} child
 * @param {number} timeoutMs
 * @returns {Promise<string>}
 */
function waitForServerUrl(child, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Vite did not start within ${timeoutMs}ms`));
    }, timeoutMs);

    child.stdout.on("data", (chunk) => {
      const match = chunk.toString().match(/Local:\s+http:\/\/localhost:(\d+)/);
      if (!match) return;
      clearTimeout(timer);
      const url = `http://localhost:${match[1]}/`;
      waitUntilResponding(url, timeoutMs)
        .then(() => resolve(url))
        .catch(reject);
    });

    child.on("error", reject);
    child.stderr.on("data", (chunk) => {
      const text = chunk.toString();
      if (/error|failed/i.test(text)) console.error(`[vite] ${text.trim()}`);
    });
    child.on("exit", (code) => {
      clearTimeout(timer);
      reject(new Error(`Vite exited before ready (code ${code})`));
    });
  });
}

/** Polls the URL until it returns an HTTP 200. */
async function waitUntilResponding(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet — retry
    }
    await sleep(250);
  }
  throw new Error(`Server at ${url} did not respond within ${timeoutMs}ms`);
}

/** Kills the Vite process group, with a SIGKILL fallback. */
function stopVite(child) {
  if (child.exitCode !== null) return; // already exited
  try {
    process.kill(-child.pid, "SIGTERM");
  } catch {
    child.kill("SIGTERM");
  }
  setTimeout(() => {
    try {
      process.kill(-child.pid, "SIGKILL");
    } catch {
      /* already gone */
    }
  }, 3_000).unref();
}
