import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "index.html",
        "base": "base/index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Stable name for the published base stylesheet; everything else keeps hashed names
          const names = assetInfo.names ?? [];
          const isBaseCss = names.some(
            (n) => n.startsWith("base") && n.endsWith(".css")
          );
          return isBaseCss
            ? "assets/base.css"
            : "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
