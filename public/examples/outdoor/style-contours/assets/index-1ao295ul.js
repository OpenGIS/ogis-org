(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))M(y);new MutationObserver(y=>{for(const g of y)if(g.type==="childList")for(const P of g.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&M(P)}).observe(document,{childList:!0,subtree:!0});function f(y){const g={};return y.integrity&&(g.integrity=y.integrity),y.referrerPolicy&&(g.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?g.credentials="include":y.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function M(y){if(y.ep)return;y.ep=!0;const g=f(y);fetch(y.href,g)}})();var _n,Nn,jn;function In(u,h){if(!_n)_n=h;else if(!Nn)Nn=h;else{var f="var sharedChunk = {}; ("+_n+")(sharedChunk); ("+Nn+")(sharedChunk);",M={};_n(M),jn=h(M),typeof window<"u"&&(jn.workerUrl=window.URL.createObjectURL(new Blob([f],{type:"text/javascript"})))}}In(["exports"],(function(u){class h{constructor(n,e){this.start=n,this.end=e,this.points=[],this.append=this.append.bind(this),this.prepend=this.prepend.bind(this)}append(n,e){this.points.push(Math.round(n),Math.round(e))}prepend(n,e){this.points.splice(0,0,Math.round(n),Math.round(e))}lineString(){return this.toArray()}isEmpty(){return this.points.length<2}appendFragment(n){this.points.push(...n.points),this.end=n.end}toArray(){return this.points}}const f=[[],[[[1,2],[0,1]]],[[[2,1],[1,2]]],[[[2,1],[0,1]]],[[[1,0],[2,1]]],[[[1,2],[0,1]],[[1,0],[2,1]]],[[[1,0],[1,2]]],[[[1,0],[0,1]]],[[[0,1],[1,0]]],[[[1,2],[1,0]]],[[[0,1],[1,0]],[[2,1],[1,2]]],[[[2,1],[1,0]]],[[[0,1],[2,1]]],[[[1,2],[2,1]]],[[[0,1],[1,2]]],[]];function M(t,n,e,i){return n=n*2+i[0],e=e*2+i[1],n+e*(t+1)*2}function y(t,n,e){return(n-t)/(e-t)}function g(t,n,e=4096,i=1){if(!t)return{};const o=e/(n.width-1);let l,a,r,s,c,p;const d={},m=new Map,F=new Map;function B(I,V,N){I[0]===0?N(o*(p-1),o*(c-y(r,V,l))):I[0]===2?N(o*p,o*(c-y(s,V,a))):I[1]===0?N(o*(p-y(a,V,l)),o*(c-1)):N(o*(p-y(s,V,r)),o*c)}for(c=1-i;c<n.height+i;c++){a=n.get(0,c-1),s=n.get(0,c);let I=Math.min(a,s),V=Math.max(a,s);for(p=1-i;p<n.width+i;p++){l=a,r=s,a=n.get(p,c-1),s=n.get(p,c);const N=I,U=V;if(I=Math.min(a,s),V=Math.max(a,s),isNaN(l)||isNaN(a)||isNaN(s)||isNaN(r))continue;const cn=Math.min(N,I),un=Math.max(U,V),L=Math.ceil(cn/t)*t,nn=Math.floor(un/t)*t;for(let v=L;v<=nn;v+=t){const Mn=l>v,q=a>v,tn=r>v,yn=s>v;for(const xn of f[(Mn?8:0)|(q?4:0)|(yn?2:0)|(tn?1:0)]){let J=m.get(v);J||m.set(v,J=new Map);let on=F.get(v);on||F.set(v,on=new Map);const Pn=xn[0],wn=xn[1],dn=M(n.width,p,c,Pn),an=M(n.width,p,c,wn);let j,bn;if(j=on.get(dn))if(on.delete(dn),bn=J.get(an))if(J.delete(an),j===bn){if(B(wn,v,j.append),!j.isEmpty()){let en=d[v];en||(d[v]=en=[]),en.push(j.lineString())}}else j.appendFragment(bn),on.set(j.end=bn.end,j);else B(wn,v,j.append),on.set(j.end=an,j);else if(j=J.get(an))J.delete(an),B(Pn,v,j.prepend),J.set(j.start=dn,j);else{const en=new h(dn,an);B(Pn,v,en.append),B(wn,v,en.append),J.set(dn,en),on.set(an,en)}}}}}for(const[I,V]of m.entries()){let N=null;for(const U of V.values())U.isEmpty()||(N==null&&(N=d[I]||(d[I]=[])),N.push(U.lineString()))}return d}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function P(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]]);return e}function S(t,n,e,i){function o(l){return l instanceof e?l:new e(function(a){a(l)})}return new(e||(e=Promise))(function(l,a){function r(p){try{c(i.next(p))}catch(d){a(d)}}function s(p){try{c(i.throw(p))}catch(d){a(d)}}function c(p){p.done?l(p.value):o(p.value).then(r,s)}c((i=i.apply(t,n||[])).next())})}function T(t){const n=Object.entries(t);return n.sort(([e],[i])=>e<i?-1:e>i?1:0),n}function W(t){return T(t).map(([n,e])=>[n,...typeof e=="number"?[e]:e].join("*")).join("~")}function Z(t){return Object.fromEntries(t.split("~").map(n=>n.split("*").map(Number)).map(([n,...e])=>[n,e]))}function _(t){var{thresholds:n}=t,e=P(t,["thresholds"]);return T(Object.assign({thresholds:W(n)},e)).map(([i,o])=>`${encodeURIComponent(i)}=${encodeURIComponent(o)}`).join("&")}function x(t){return Object.fromEntries(t.replace(/^.*\?/,"").split("&").map(n=>{const e=n.split("=").map(decodeURIComponent),i=e[0];let o=e[1];switch(i){case"thresholds":o=Z(o);break;case"extent":case"multiplier":case"overzoom":case"buffer":o=Number(o)}return[i,o]}))}function k(t){return T(t).map(([n,e])=>`${encodeURIComponent(n)}=${encodeURIComponent(e)}`).join(",")}function w(t,n){const{thresholds:e}=t,i=P(t,["thresholds"]);let o=[],l=-1/0;return Object.entries(e).forEach(([a,r])=>{const s=Number(a);s<=n&&s>l&&(l=s,o=typeof r=="number"?[r]:r)}),Object.assign({levels:o},i)}function b(t){const n=new ArrayBuffer(t.byteLength);return new Uint8Array(n).set(new Uint8Array(t)),n}function O(t,n){return t.then(e=>{var{data:i}=e,o=P(e,["data"]);let l=i;return n&&(l=new Float32Array(i.length),l.set(i)),Object.assign(Object.assign({},o),{data:l,transferrables:[l.buffer]})})}function K(t){return t.then(({arrayBuffer:n})=>{const e=b(n);return{arrayBuffer:e,transferrables:[e]}})}let C=null;function ln(){return C==null&&(C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")&&typeof createImageBitmap=="function"),C||!1}let A=null;function zn(){if(A==null&&(A=!1,ln()&&typeof VideoFrame<"u")){const e=new OffscreenCanvas(5,5).getContext("2d",{willReadFrequently:!0});if(e){for(let o=0;o<25;o++){const l=o*4;e.fillStyle=`rgb(${l},${l+1},${l+2})`,e.fillRect(o%5,Math.floor(o/5),1,1)}const i=e.getImageData(0,0,5,5).data;for(let o=0;o<100;o++)if(o%4!==3&&i[o]!==o){A=!0;break}}}return A||!1}function mn(t,n,e){let i=()=>{};const o=setTimeout(()=>{i(new Error("timed out")),e==null||e.abort()},t);z(e,()=>{i(new Error("aborted")),clearTimeout(o)});const l=new Promise((a,r)=>{i=r});return Promise.race([l,n.finally(()=>clearTimeout(o))])}function z(t,n){n&&(t==null||t.signal.addEventListener("abort",n))}function $(t){var n;return!!(!((n=t==null?void 0:t.signal)===null||n===void 0)&&n.aborted)}let H=0;class Y{constructor(n=100){this.size=()=>this.items.size,this.get=(e,i,o)=>{let l=this.items.get(e);if(l)l.lastUsed=++H,l.waiting++;else{const c=new AbortController,p=i(e,c);l={abortController:c,item:p,lastUsed:++H,waiting:1},this.items.set(e,l),this.prune()}const a=this.items,r=l.item.then(c=>c,c=>(a.delete(e),Promise.reject(c)));let s=!1;return z(o,()=>{var c;l&&l.abortController&&!s&&(s=!0,--l.waiting<=0&&((c=l.abortController)===null||c===void 0||c.abort(),a.delete(e)))}),r},this.clear=()=>this.items.clear(),this.maxSize=n,this.items=new Map}prune(){if(this.items.size>this.maxSize){let n,e=1/0;this.items.forEach((i,o)=>{i.lastUsed<e&&(e=i.lastUsed,n=o)}),typeof n<"u"&&this.items.delete(n)}}}let E,Q,G,D;function hn(t,n,e){return S(this,void 0,void 0,function*(){const i=yield createImageBitmap(t);return $(e)?null:Ln(i,n)})}function Ln(t,n){return E||(E=new OffscreenCanvas(t.width,t.height),Q=E.getContext("2d",{willReadFrequently:!0})),En(t,n,E,Q)}function An(t,n,e){return S(this,void 0,void 0,function*(){var i,o,l;const a=yield createImageBitmap(t);if($(e))return null;const r=new VideoFrame(a,{timestamp:0});try{if(!(((i=r==null?void 0:r.format)===null||i===void 0?void 0:i.startsWith("BGR"))||((o=r==null?void 0:r.format)===null||o===void 0?void 0:o.startsWith("RGB"))))throw new Error(`Unrecognized format: ${r==null?void 0:r.format}`);const c=(l=r==null?void 0:r.format)===null||l===void 0?void 0:l.startsWith("BGR"),p=r.allocationSize(),d=new Uint8ClampedArray(p);if(yield r.copyTo(d),c)for(let m=0;m<d.length;m+=4){const F=d[m];d[m]=d[m+2],d[m+2]=F}return kn(a.width,a.height,n,d)}catch{return $(e)?null:Ln(a,n)}finally{r.close()}})}function $n(t,n,e){return S(this,void 0,void 0,function*(){G||(G=document.createElement("canvas"),D=G.getContext("2d",{willReadFrequently:!0}));const i=new Image;z(e,()=>i.src="");const o=yield new Promise((l,a)=>{i.onload=()=>{$(e)||l(i),URL.revokeObjectURL(i.src),i.onload=null},i.onerror=()=>a(new Error("Could not load image.")),i.src=t.size?URL.createObjectURL(t):""});return En(o,n,G,D)})}function Gn(t,n,e){return self.actor.send("decodeImage",[],e,void 0,t,n)}function Jn(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}const On=zn()?An:ln()?hn:Jn()?Gn:$n;function En(t,n,e,i){if(e.width=t.width,e.height=t.height,!i)throw new Error("failed to get context");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height).data;return kn(t.width,t.height,n,o)}function kn(t,n,e,i){const o=e==="mapbox"?(a,r,s)=>-1e4+(a*256*256+r*256+s)*.1:(a,r,s)=>a*256+r+s/256-32768,l=new Float32Array(t*n);for(let a=0;a<i.length;a+=4)l[a/4]=o(i[a],i[a+1],i[a+2]);return{width:t,height:n,data:l}}const Wn=-12e3,Kn=9e3;function Yn(t){return!isNaN(t)&&t>=Wn&&t<=Kn}class R{constructor(n,e,i){this.split=(o,l,a)=>{if(o===0)return this;const r=1<<o,s=l*this.width/r,c=a*this.height/r;return new R(this.width/r,this.height/r,(p,d)=>this.get(p+s,d+c))},this.subsamplePixelCenters=o=>{const l=(s,c,p)=>isNaN(s)?c:isNaN(c)?s:s+(c-s)*p;if(o<=1)return this;const a=.5-1/(2*o),r=(s,c)=>{const p=s/o-a,d=c/o-a,m=Math.floor(p),F=Math.floor(d),B=this.get(m,F),I=this.get(m+1,F),V=this.get(m,F+1),N=this.get(m+1,F+1),U=p-m,cn=d-F,un=l(B,I,U),L=l(V,N,U);return l(un,L,cn)};return new R(this.width*o,this.height*o,r)},this.averagePixelCentersToGrid=(o=1)=>new R(this.width+1,this.height+1,(l,a)=>{let r=0,s=0,c=0;for(let p=l-o;p<l+o;p++)for(let d=a-o;d<a+o;d++)isNaN(c=this.get(p,d))||(s++,r+=c);return s===0?NaN:r/s}),this.scaleElevation=o=>o===1?this:new R(this.width,this.height,(l,a)=>this.get(l,a)*o),this.materialize=(o=2)=>{const l=this.width+2*o,a=new Float32Array(l*(this.height+2*o));let r=0;for(let s=-o;s<this.height+o;s++)for(let c=-o;c<this.width+o;c++)a[r++]=this.get(c,s);return new R(this.width,this.height,(s,c)=>a[(c+o)*l+s+o])},this.get=i,this.width=n,this.height=e}static fromRawDem(n){return new R(n.width,n.height,(e,i)=>{const o=n.data[i*n.width+e];return Yn(o)?o:NaN})}static combineNeighbors(n){if(n.length!==9)throw new Error("Must include a tile plus 8 neighbors");const e=n[4];if(!e)return;const i=e.width,o=e.height;return new R(i,o,(l,a)=>{let r=0;a<0?a+=o:a<o?r+=3:(a-=o,r+=6),l<0?l+=i:l<i?r+=1:(l-=i,r+=2);const s=n[r];return s?s.get(l,a):NaN})}}const vn=65536*65536,Vn=1/vn,Xn=12,Tn=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Sn=0,fn=1,pn=2,gn=5;class qn{constructor(n=new Uint8Array(16)){this.buf=ArrayBuffer.isView(n)?n:new Uint8Array(n),this.dataView=new DataView(this.buf.buffer),this.pos=0,this.type=0,this.length=this.buf.length}readFields(n,e,i=this.length){for(;this.pos<i;){const o=this.readVarint(),l=o>>3,a=this.pos;this.type=o&7,n(l,e,this),this.pos===a&&this.skip(o)}return e}readMessage(n,e){return this.readFields(n,e,this.readVarint()+this.pos)}readFixed32(){const n=this.dataView.getUint32(this.pos,!0);return this.pos+=4,n}readSFixed32(){const n=this.dataView.getInt32(this.pos,!0);return this.pos+=4,n}readFixed64(){const n=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*vn;return this.pos+=8,n}readSFixed64(){const n=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*vn;return this.pos+=8,n}readFloat(){const n=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,n}readDouble(){const n=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,n}readVarint(n){const e=this.buf;let i,o;return o=e[this.pos++],i=o&127,o<128||(o=e[this.pos++],i|=(o&127)<<7,o<128)||(o=e[this.pos++],i|=(o&127)<<14,o<128)||(o=e[this.pos++],i|=(o&127)<<21,o<128)?i:(o=e[this.pos],i|=(o&15)<<28,Zn(i,n,this))}readVarint64(){return this.readVarint(!0)}readSVarint(){const n=this.readVarint();return n%2===1?(n+1)/-2:n/2}readBoolean(){return!!this.readVarint()}readString(){const n=this.readVarint()+this.pos,e=this.pos;return this.pos=n,n-e>=Xn&&Tn?Tn.decode(this.buf.subarray(e,n)):pe(this.buf,e,n)}readBytes(){const n=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,n);return this.pos=n,e}readPackedVarint(n=[],e){const i=this.readPackedEnd();for(;this.pos<i;)n.push(this.readVarint(e));return n}readPackedSVarint(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readSVarint());return n}readPackedBoolean(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readBoolean());return n}readPackedFloat(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readFloat());return n}readPackedDouble(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readDouble());return n}readPackedFixed32(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readFixed32());return n}readPackedSFixed32(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readSFixed32());return n}readPackedFixed64(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readFixed64());return n}readPackedSFixed64(n=[]){const e=this.readPackedEnd();for(;this.pos<e;)n.push(this.readSFixed64());return n}readPackedEnd(){return this.type===pn?this.readVarint()+this.pos:this.pos+1}skip(n){const e=n&7;if(e===Sn)for(;this.buf[this.pos++]>127;);else if(e===pn)this.pos=this.readVarint()+this.pos;else if(e===gn)this.pos+=4;else if(e===fn)this.pos+=8;else throw new Error(`Unimplemented type: ${e}`)}writeTag(n,e){this.writeVarint(n<<3|e)}realloc(n){let e=this.length||16;for(;e<this.pos+n;)e*=2;if(e!==this.length){const i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.dataView=new DataView(i.buffer),this.length=e}}finish(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)}writeFixed32(n){this.realloc(4),this.dataView.setInt32(this.pos,n,!0),this.pos+=4}writeSFixed32(n){this.realloc(4),this.dataView.setInt32(this.pos,n,!0),this.pos+=4}writeFixed64(n){this.realloc(8),this.dataView.setInt32(this.pos,n&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(n*Vn),!0),this.pos+=8}writeSFixed64(n){this.realloc(8),this.dataView.setInt32(this.pos,n&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(n*Vn),!0),this.pos+=8}writeVarint(n){if(n=+n||0,n>268435455||n<0){Hn(n,this);return}this.realloc(4),this.buf[this.pos++]=n&127|(n>127?128:0),!(n<=127)&&(this.buf[this.pos++]=(n>>>=7)&127|(n>127?128:0),!(n<=127)&&(this.buf[this.pos++]=(n>>>=7)&127|(n>127?128:0),!(n<=127)&&(this.buf[this.pos++]=n>>>7&127)))}writeSVarint(n){this.writeVarint(n<0?-n*2-1:n*2)}writeBoolean(n){this.writeVarint(+n)}writeString(n){n=String(n),this.realloc(n.length*4),this.pos++;const e=this.pos;this.pos=ue(this.buf,n,this.pos);const i=this.pos-e;i>=128&&Dn(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i}writeFloat(n){this.realloc(4),this.dataView.setFloat32(this.pos,n,!0),this.pos+=4}writeDouble(n){this.realloc(8),this.dataView.setFloat64(this.pos,n,!0),this.pos+=8}writeBytes(n){const e=n.length;this.writeVarint(e),this.realloc(e);for(let i=0;i<e;i++)this.buf[this.pos++]=n[i]}writeRawMessage(n,e){this.pos++;const i=this.pos;n(e,this);const o=this.pos-i;o>=128&&Dn(i,o,this),this.pos=i-1,this.writeVarint(o),this.pos+=o}writeMessage(n,e,i){this.writeTag(n,pn),this.writeRawMessage(e,i)}writePackedVarint(n,e){e.length&&this.writeMessage(n,ee,e)}writePackedSVarint(n,e){e.length&&this.writeMessage(n,te,e)}writePackedBoolean(n,e){e.length&&this.writeMessage(n,ae,e)}writePackedFloat(n,e){e.length&&this.writeMessage(n,ie,e)}writePackedDouble(n,e){e.length&&this.writeMessage(n,oe,e)}writePackedFixed32(n,e){e.length&&this.writeMessage(n,le,e)}writePackedSFixed32(n,e){e.length&&this.writeMessage(n,re,e)}writePackedFixed64(n,e){e.length&&this.writeMessage(n,se,e)}writePackedSFixed64(n,e){e.length&&this.writeMessage(n,ce,e)}writeBytesField(n,e){this.writeTag(n,pn),this.writeBytes(e)}writeFixed32Field(n,e){this.writeTag(n,gn),this.writeFixed32(e)}writeSFixed32Field(n,e){this.writeTag(n,gn),this.writeSFixed32(e)}writeFixed64Field(n,e){this.writeTag(n,fn),this.writeFixed64(e)}writeSFixed64Field(n,e){this.writeTag(n,fn),this.writeSFixed64(e)}writeVarintField(n,e){this.writeTag(n,Sn),this.writeVarint(e)}writeSVarintField(n,e){this.writeTag(n,Sn),this.writeSVarint(e)}writeStringField(n,e){this.writeTag(n,pn),this.writeString(e)}writeFloatField(n,e){this.writeTag(n,gn),this.writeFloat(e)}writeDoubleField(n,e){this.writeTag(n,fn),this.writeDouble(e)}writeBooleanField(n,e){this.writeVarintField(n,+e)}}function Zn(t,n,e){const i=e.buf;let o,l;if(l=i[e.pos++],o=(l&112)>>4,l<128||(l=i[e.pos++],o|=(l&127)<<3,l<128)||(l=i[e.pos++],o|=(l&127)<<10,l<128)||(l=i[e.pos++],o|=(l&127)<<17,l<128)||(l=i[e.pos++],o|=(l&127)<<24,l<128)||(l=i[e.pos++],o|=(l&1)<<31,l<128))return rn(t,o,n);throw new Error("Expected varint not more than 10 bytes")}function rn(t,n,e){return e?n*4294967296+(t>>>0):(n>>>0)*4294967296+(t>>>0)}function Hn(t,n){let e,i;if(t>=0?(e=t%4294967296|0,i=t/4294967296|0):(e=~(-t%4294967296),i=~(-t/4294967296),e^4294967295?e=e+1|0:(e=0,i=i+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");n.realloc(10),Qn(e,i,n),ne(i,n)}function Qn(t,n,e){e.buf[e.pos++]=t&127|128,t>>>=7,e.buf[e.pos++]=t&127|128,t>>>=7,e.buf[e.pos++]=t&127|128,t>>>=7,e.buf[e.pos++]=t&127|128,t>>>=7,e.buf[e.pos]=t&127}function ne(t,n){const e=(t&7)<<4;n.buf[n.pos++]|=e|((t>>>=3)?128:0),t&&(n.buf[n.pos++]=t&127|((t>>>=7)?128:0),t&&(n.buf[n.pos++]=t&127|((t>>>=7)?128:0),t&&(n.buf[n.pos++]=t&127|((t>>>=7)?128:0),t&&(n.buf[n.pos++]=t&127|((t>>>=7)?128:0),t&&(n.buf[n.pos++]=t&127)))))}function Dn(t,n,e){const i=n<=16383?1:n<=2097151?2:n<=268435455?3:Math.floor(Math.log(n)/(Math.LN2*7));e.realloc(i);for(let o=e.pos-1;o>=t;o--)e.buf[o+i]=e.buf[o]}function ee(t,n){for(let e=0;e<t.length;e++)n.writeVarint(t[e])}function te(t,n){for(let e=0;e<t.length;e++)n.writeSVarint(t[e])}function ie(t,n){for(let e=0;e<t.length;e++)n.writeFloat(t[e])}function oe(t,n){for(let e=0;e<t.length;e++)n.writeDouble(t[e])}function ae(t,n){for(let e=0;e<t.length;e++)n.writeBoolean(t[e])}function le(t,n){for(let e=0;e<t.length;e++)n.writeFixed32(t[e])}function re(t,n){for(let e=0;e<t.length;e++)n.writeSFixed32(t[e])}function se(t,n){for(let e=0;e<t.length;e++)n.writeFixed64(t[e])}function ce(t,n){for(let e=0;e<t.length;e++)n.writeSFixed64(t[e])}function pe(t,n,e){let i="",o=n;for(;o<e;){const l=t[o];let a=null,r=l>239?4:l>223?3:l>191?2:1;if(o+r>e)break;let s,c,p;r===1?l<128&&(a=l):r===2?(s=t[o+1],(s&192)===128&&(a=(l&31)<<6|s&63,a<=127&&(a=null))):r===3?(s=t[o+1],c=t[o+2],(s&192)===128&&(c&192)===128&&(a=(l&15)<<12|(s&63)<<6|c&63,(a<=2047||a>=55296&&a<=57343)&&(a=null))):r===4&&(s=t[o+1],c=t[o+2],p=t[o+3],(s&192)===128&&(c&192)===128&&(p&192)===128&&(a=(l&15)<<18|(s&63)<<12|(c&63)<<6|p&63,(a<=65535||a>=1114112)&&(a=null))),a===null?(a=65533,r=1):a>65535&&(a-=65536,i+=String.fromCharCode(a>>>10&1023|55296),a=56320|a&1023),i+=String.fromCharCode(a),o+=r}return i}function ue(t,n,e){for(let i=0,o,l;i<n.length;i++){if(o=n.charCodeAt(i),o>55295&&o<57344)if(l)if(o<56320){t[e++]=239,t[e++]=191,t[e++]=189,l=o;continue}else o=l-55296<<10|o-56320|65536,l=null;else{o>56319||i+1===n.length?(t[e++]=239,t[e++]=191,t[e++]=189):l=o;continue}else l&&(t[e++]=239,t[e++]=191,t[e++]=189,l=null);o<128?t[e++]=o:(o<2048?t[e++]=o>>6|192:(o<65536?t[e++]=o>>12|224:(t[e++]=o>>18|240,t[e++]=o>>12&63|128),t[e++]=o>>6&63|128),t[e++]=o&63|128)}return e}var sn;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.POINT=1]="POINT",t[t.LINESTRING=2]="LINESTRING",t[t.POLYGON=3]="POLYGON"})(sn||(sn={}));function de(t){const n=new qn;for(const e in t.layers){const i=t.layers[e];i.extent||(i.extent=t.extent),n.writeMessage(3,me,Object.assign(Object.assign({},i),{id:e}))}return n.finish()}function me(t,n){if(!n)throw new Error("pbf undefined");n.writeVarintField(15,2),n.writeStringField(1,t.id||""),n.writeVarintField(5,t.extent||4096);const e={keys:[],values:[],keycache:{},valuecache:{}};for(const i of t.features)e.feature=i,n.writeMessage(2,he,e);for(const i of e.keys)n.writeStringField(3,i);for(const i of e.values)n.writeMessage(4,ye,i)}function he(t,n){const e=t.feature;if(!e||!n)throw new Error;n.writeMessage(2,fe,t),n.writeVarintField(3,e.type),n.writeMessage(4,ge,e)}function fe(t,n){const e=t.feature;if(!e||!n)throw new Error;const i=t.keys,o=t.values,l=t.keycache,a=t.valuecache;for(const r in e.properties){let s=e.properties[r],c=l[r];if(s===null)continue;typeof c>"u"&&(i.push(r),c=i.length-1,l[r]=c),n.writeVarint(c);const p=typeof s;p!=="string"&&p!=="boolean"&&p!=="number"&&(s=JSON.stringify(s));const d=`${p}:${s}`;let m=a[d];typeof m>"u"&&(o.push(s),m=o.length-1,a[d]=m),n.writeVarint(m)}}function Fn(t,n){return(n<<3)+(t&7)}function Bn(t){return t<<1^t>>31}function ge(t,n){if(!n)throw new Error;const e=t.geometry,i=t.type;let o=0,l=0;for(const a of e){let r=1;i===sn.POINT&&(r=a.length/2),n.writeVarint(Fn(1,r));const s=a.length/2,c=i===sn.POLYGON?s-1:s;for(let p=0;p<c;p++){p===1&&i!==1&&n.writeVarint(Fn(2,c-1));const d=a[p*2]-o,m=a[p*2+1]-l;n.writeVarint(Bn(d)),n.writeVarint(Bn(m)),o+=d,l+=m}i===sn.POLYGON&&n.writeVarint(Fn(7,1))}}function ye(t,n){if(!n)throw new Error;typeof t=="string"?n.writeStringField(1,t):typeof t=="boolean"?n.writeBooleanField(7,t):typeof t=="number"&&(t%1!==0?n.writeDoubleField(3,t):t<0?n.writeSVarintField(6,t):n.writeVarintField(5,t))}const X=typeof performance<"u"?performance:void 0,xe=X?X.timeOrigin||new Date().getTime()-X.now():new Date().getTime();function we(t){var n;return JSON.parse(JSON.stringify(((n=X==null?void 0:X.getEntriesByName)===null||n===void 0?void 0:n.call(X,t))||[]))}function Cn(){return X?X.now():new Date().getTime()}function be(t){const n=[];for(const e of t)n.push(...e);return n}class Rn{constructor(n){this.marks={},this.urls=[],this.fetched=[],this.resources=[],this.tilesFetched=0,this.timeOrigin=xe,this.finish=e=>{this.markFinish();const i=s=>{const c=this.marks[s]||[],p=Math.max(...c.map(m=>Math.max(...m))),d=Math.min(...c.map(m=>Math.min(...m)));return Number.isFinite(p)?p-d:void 0},o=i("main")||0,l=i("fetch"),a=i("decode"),r=i("isoline");return{url:e,tilesUsed:this.tilesFetched,origin:this.timeOrigin,marks:this.marks,resources:[...this.resources,...be(this.fetched.map(we))],duration:o,fetch:l,decode:a,process:r,wait:o-(l||0)-(a||0)-(r||0)}},this.error=e=>Object.assign(Object.assign({},this.finish(e)),{error:!0}),this.marker=e=>{var i;this.marks[e]||(this.marks[e]=[]);const o=[Cn()];return(i=this.marks[e])===null||i===void 0||i.push(o),()=>o.push(Cn())},this.useTile=e=>{this.urls.indexOf(e)<0&&(this.urls.push(e),this.tilesFetched++)},this.fetchTile=e=>{this.fetched.indexOf(e)<0&&this.fetched.push(e)},this.addAll=e=>{var i;this.tilesFetched+=e.tilesUsed;const o=e.origin-this.timeOrigin;for(const l in e.marks){const a=l;(this.marks[a]||(this.marks[a]=[])).push(...((i=e.marks[a])===null||i===void 0?void 0:i.map(s=>s.map(c=>c+o)))||[])}this.resources.push(...e.resources.map(l=>ze(l,o)))},this.markFinish=this.marker(n)}}const _e=/(Start$|End$|^start|^end)/;function ze(t,n){const e={};for(const i in t)t[i]!==0&&_e.test(i)?e[i]=Number(t[i])+n:e[i]=t[i];return e}const ke=(t,n)=>S(void 0,void 0,void 0,function*(){const e={signal:n.signal},i=yield fetch(t,e);if(!i.ok)throw new Error(`Bad response: ${i.status} for ${t}`);return{data:yield i.blob(),expires:i.headers.get("expires")||void 0,cacheControl:i.headers.get("cache-control")||void 0}});class ve{constructor(n){this.loaded=Promise.resolve(),this.fetchAndParseTile=(e,i,o,l,a)=>{const r=this,s=this.demUrlPattern.replace("{z}",e.toString()).replace("{x}",i.toString()).replace("{y}",o.toString());return a==null||a.useTile(s),this.parsedCache.get(s,(c,p)=>S(this,void 0,void 0,function*(){const d=yield r.fetchTile(e,i,o,p,a);if($(p))throw new Error("canceled");const m=r.decodeImage(d.data,r.encoding,p),F=a==null?void 0:a.marker("decode"),B=yield m;return F==null||F(),B}),l)},this.tileCache=new Y(n.cacheSize),this.parsedCache=new Y(n.cacheSize),this.contourCache=new Y(n.cacheSize),this.timeoutMs=n.timeoutMs,this.demUrlPattern=n.demUrlPattern,this.encoding=n.encoding,this.maxzoom=n.maxzoom,this.decodeImage=n.decodeImage||On,this.getTile=n.getTile||ke}fetchTile(n,e,i,o,l){const a=this.demUrlPattern.replace("{z}",n.toString()).replace("{x}",e.toString()).replace("{y}",i.toString());return l==null||l.useTile(a),this.tileCache.get(a,(r,s)=>{l==null||l.fetchTile(a);const c=l==null?void 0:l.marker("fetch");return mn(this.timeoutMs,this.getTile(a,s).finally(()=>c==null?void 0:c()),s)},o)}fetchDem(n,e,i,o,l,a){return S(this,void 0,void 0,function*(){const r=Math.min(n-(o.overzoom||0),this.maxzoom),s=n-r,c=1<<s,p=Math.floor(e/c),d=Math.floor(i/c),m=yield this.fetchAndParseTile(r,p,d,l,a);return R.fromRawDem(m).split(s,e%c,i%c)})}fetchContourTile(n,e,i,o,l,a){const{levels:r,multiplier:s=1,buffer:c=1,extent:p=4096,contourLayer:d="contours",elevationKey:m="ele",levelKey:F="level",subsampleBelow:B=100}=o;if(!r||r.length===0)return Promise.resolve({arrayBuffer:new ArrayBuffer(0)});const I=[n,e,i,k(o)].join("/");return this.contourCache.get(I,(V,N)=>S(this,void 0,void 0,function*(){const U=1<<n,cn=[];for(let q=i-1;q<=i+1;q++)for(let tn=e-1;tn<=e+1;tn++)cn.push(q<0||q>=U?void 0:this.fetchDem(n,(tn+U)%U,q,o,N,a));const un=yield Promise.all(cn);let L=R.combineNeighbors(un);if(!L||$(N))return{arrayBuffer:new Uint8Array().buffer};const nn=a==null?void 0:a.marker("isoline");if(L.width>=B)L=L.materialize(2);else for(;L.width<B;)L=L.subsamplePixelCenters(2).materialize(2);L=L.averagePixelCentersToGrid().scaleElevation(s).materialize(1);const v=g(r[0],L,p,c);nn==null||nn();const Mn=de({extent:p,layers:{[d]:{features:Object.entries(v).map(([q,tn])=>{const yn=Number(q);return{type:sn.LINESTRING,geometry:tn,properties:{[m]:yn,[F]:Math.max(...r.map((xn,J)=>yn%xn===0?J:0))}}})}}});return nn==null||nn(),{arrayBuffer:Mn.buffer}}),l)}}let Se=0;class Fe{constructor(n,e,i=2e4){this.callbacks={},this.cancels={},this.dest=n,this.timeoutMs=i,this.dest.onmessage=o=>S(this,[o],void 0,function*({data:l}){const a=l;if(a.type==="cancel"){const r=this.cancels[a.id];delete this.cancels[a.id],r==null||r.abort()}else if(a.type==="response"){const r=this.callbacks[a.id];delete this.callbacks[a.id],r&&r(a.error?new Error(a.error):void 0,a.response,a.timings)}else if(a.type==="request"){const r=new Rn("worker"),s=e[a.name],c=new AbortController,p=s.apply(s,[...a.args,c,r]),d=`${a.name}_${a.id}`;if(a.id&&p){this.cancels[a.id]=c;try{const m=yield p,F=m==null?void 0:m.transferrables;this.postMessage({id:a.id,type:"response",response:m,timings:r.finish(d)},F)}catch(m){this.postMessage({id:a.id,type:"response",error:(m==null?void 0:m.toString())||"error",timings:r.finish(d)})}delete this.cancels[a.id]}}})}postMessage(n,e){this.dest.postMessage(n,e||[])}send(n,e,i,o,...l){const a=++Se,r=new Promise((s,c)=>{this.postMessage({id:a,type:"request",name:n,args:l},e),this.callbacks[a]=(p,d,m)=>{o==null||o.addAll(m),p?c(p):s(d)}});return z(i,()=>{delete this.callbacks[a],this.postMessage({id:a,type:"cancel"})}),mn(this.timeoutMs,r,i)}}u.A=Fe,u.H=R,u.L=ve,u.T=Rn,u._=S,u.a=x,u.b=g,u.c=kn,u.d=On,u.e=_,u.f=K,u.g=w,u.p=O}));In(["./shared"],(function(u){const h=y=>Promise.reject(new Error(`No manager registered for ${y}`));class f{constructor(){this.managers={},this.init=(g,P)=>(this.managers[g.managerId]=new u.L(g),Promise.resolve()),this.fetchTile=(g,P,S,T,W,Z)=>{var _;return((_=this.managers[g])===null||_===void 0?void 0:_.fetchTile(P,S,T,W,Z))||h(g)},this.fetchAndParseTile=(g,P,S,T,W,Z)=>{var _;return u.p(((_=this.managers[g])===null||_===void 0?void 0:_.fetchAndParseTile(P,S,T,W,Z))||h(g),!0)},this.fetchContourTile=(g,P,S,T,W,Z,_)=>{var x;return u.f(((x=this.managers[g])===null||x===void 0?void 0:x.fetchContourTile(P,S,T,W,Z,_))||h(g))}}}const M=typeof self<"u"?self:typeof window<"u"?window:global;M.actor=new u.A(M,new f)}));In(["./shared"],(function(u){const h={workerUrl:""};let f,M=0;class y{constructor(){this.decodeImage=(x,k,w)=>u.p(u.d(x,k,w),!1)}}function g(){if(!f){const _=new Worker(h.workerUrl),x=new y;f=new u.A(_,x)}return f}class P{constructor(x){this.fetchTile=(w,b,O,K,C)=>this.actor.send("fetchTile",[],K,C,this.managerId,w,b,O),this.fetchAndParseTile=(w,b,O,K,C)=>this.actor.send("fetchAndParseTile",[],K,C,this.managerId,w,b,O),this.fetchContourTile=(w,b,O,K,C,ln)=>this.actor.send("fetchContourTile",[],C,ln,this.managerId,w,b,O,K);const k=this.managerId=++M;this.actor=x.actor||g(),this.loaded=this.actor.send("init",[],new AbortController,void 0,Object.assign(Object.assign({},x),{managerId:k}))}}Blob.prototype.arrayBuffer||(Blob.prototype.arrayBuffer=function(){return new Promise((x,k)=>{const w=new FileReader;w.onload=b=>{var O;return x((O=b.target)===null||O===void 0?void 0:O.result)},w.onerror=k,w.readAsArrayBuffer(this)})});const S=_=>(x,k)=>{if(k instanceof AbortController)return _(x,k);{const w=new AbortController;return _(x,w).then(b=>k(void 0,b.data,b.cacheControl,b.expires),b=>k(b)).catch(b=>k(b)),{cancel:()=>w.abort()}}},T=new Set;class W{constructor({url:x,cacheSize:k=100,id:w="dem",encoding:b="terrarium",maxzoom:O=12,worker:K=!0,timeoutMs:C=1e4,actor:ln}){this.timingCallbacks=[],this.onTiming=z=>{this.timingCallbacks.push(z)},this.setupMaplibre=z=>{z.addProtocol(this.sharedDemProtocolId,this.sharedDemProtocol),z.addProtocol(this.contourProtocolId,this.contourProtocol)},this.sharedDemProtocolV4=(z,$)=>u._(this,void 0,void 0,function*(){const[H,Y,E]=this.parseUrl(z.url),Q=new u.T("main");let G;try{const D=yield this.manager.fetchTile(H,Y,E,$,Q);return G=Q.finish(z.url),{data:yield D.data.arrayBuffer(),cacheControl:D.cacheControl,expires:D.expires}}catch(D){throw G=Q.error(z.url),D}finally{this.timingCallbacks.forEach(D=>D(G))}}),this.contourProtocolV4=(z,$)=>u._(this,void 0,void 0,function*(){const H=new u.T("main");let Y;try{const[E,Q,G]=this.parseUrl(z.url),D=u.a(z.url),hn=yield this.manager.fetchContourTile(E,Q,G,u.g(D,E),$,H);return Y=H.finish(z.url),{data:hn.arrayBuffer}}catch(E){throw Y=H.error(z.url),E}finally{this.timingCallbacks.forEach(E=>E(Y))}}),this.contourProtocol=S(this.contourProtocolV4),this.sharedDemProtocol=S(this.sharedDemProtocolV4),this.contourProtocolUrl=z=>`${this.contourProtocolUrlBase}?${u.e(z)}`;let A=w,zn=1;for(;T.has(A);)A=w+zn++;T.add(A),this.sharedDemProtocolId=`${A}-shared`,this.contourProtocolId=`${A}-contour`,this.sharedDemProtocolUrl=`${this.sharedDemProtocolId}://{z}/{x}/{y}`,this.contourProtocolUrlBase=`${this.contourProtocolId}://{z}/{x}/{y}`;const mn=K?P:u.L;this.manager=new mn({demUrlPattern:x,cacheSize:k,encoding:b,maxzoom:O,timeoutMs:C,actor:ln})}getDemTile(x,k,w,b){return this.manager.fetchAndParseTile(x,k,w,b||new AbortController)}parseUrl(x){const[,k,w,b]=/\/\/(\d+)\/(\d+)\/(\d+)/.exec(x)||[];return[Number(k),Number(w),Number(b)]}}return{generateIsolines:u.b,DemSource:W,HeightTile:u.H,LocalDemManager:u.L,decodeParsedImage:u.c,set workerUrl(_){h.workerUrl=_},get workerUrl(){return h.workerUrl}}}));var Me=jn;function Pe(u,h){const f=new maplibregl.Map({container:"left",style:u,center:[9,48],zoom:3,hash:!0}),M=new maplibregl.Map({container:"right",style:h,center:[9,48],zoom:3});window.leftMap=f,window.rightMap=M,window.compare=new maplibregl.Compare(f,M,"#compare",{}),f.once("idle",()=>{M.jumpTo({center:f.getCenter(),zoom:f.getZoom()})})}function Ne(u){const h=new Me.DemSource({url:"https://tiles.mapterhorn.com/{z}/{x}/{y}.webp",encoding:"terrarium",maxzoom:13,worker:!0});h.setupMaplibre(maplibregl);const f=h.contourProtocolUrl({thresholds:{0:[100,500],5:[50,250],10:[25,100],15:[25,100]},contourLayer:"contours",elevationKey:"ele",levelKey:"level",extent:4096,buffer:1});u.sources["contour-source"].tiles=[f]}const je="tiles.openfreemap.org";function Un(u){const h=u.replace(/__TILEJSON_DOMAIN__/g,je),f=JSON.parse(h);return delete f.bearing,delete f.center,delete f.zoom,delete f.pitch,delete f.metadata,delete f.name,delete f.id,f}const Ie=`{
  "version": 8,
  "sources": {
    "ne2_shaded": {
      "maxzoom": 6,
      "tileSize": 256,
      "tiles": [
        "https://__TILEJSON_DOMAIN__/natural_earth/ne2sr/{z}/{x}/{y}.png"
      ],
      "type": "raster"
    },
    "openmaptiles": {
      "type": "vector",
      "url": "https://__TILEJSON_DOMAIN__/planet"
    }
  },
  "sprite": "https://__TILEJSON_DOMAIN__/sprites/ofm_f384/ofm",
  "glyphs": "https://__TILEJSON_DOMAIN__/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {"background-color": "#f8f4f0"}
    },
    {
      "id": "natural_earth",
      "type": "raster",
      "source": "ne2_shaded",
      "maxzoom": 7,
      "paint": {
        "raster-opacity": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          0,
          0.6,
          6,
          0.1
        ]
      }
    },
    {
      "id": "park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 0.7,
        "fill-outline-color": "rgba(95, 208, 100, 1)"
      }
    },
    {
      "id": "park_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "line-color": "rgba(228, 241, 215, 1)",
        "line-dasharray": [1, 1.5]
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "maxzoom": 12,
      "filter": ["==", ["get", "class"], "residential"],
      "paint": {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          "hsla(0,3%,85%,0.84)",
          12,
          "hsla(35,57%,88%,0.49)"
        ]
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", ["get", "class"], "wood"],
      "paint": {
        "fill-antialias": false,
        "fill-color": "hsla(98,61%,72%,0.7)",
        "fill-opacity": 0.4
      }
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", ["get", "class"], "grass"],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(176, 213, 154, 1)",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "landcover_ice",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", ["get", "class"], "ice"],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(224, 236, 236, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landcover_wetland",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "minzoom": 12,
      "filter": ["==", ["get", "class"], "wetland"],
      "paint": {
        "fill-antialias": true,
        "fill-opacity": 0.8,
        "fill-pattern": "wetland_bg_11",
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "landuse_pitch",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", ["get", "class"], "pitch"],
      "paint": {"fill-color": "#DEE3CD"}
    },
    {
      "id": "landuse_track",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", ["get", "class"], "track"],
      "paint": {"fill-color": "#DEE3CD"}
    },
    {
      "id": "landuse_cemetery",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", ["get", "class"], "cemetery"],
      "paint": {"fill-color": "hsl(75,37%,81%)"}
    },
    {
      "id": "landuse_hospital",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", ["get", "class"], "hospital"],
      "paint": {"fill-color": "#fde"}
    },
    {
      "id": "landuse_school",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", ["get", "class"], "school"],
      "paint": {"fill-color": "rgb(236,238,204)"}
    },
    {
      "id": "waterway_tunnel",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": ["==", ["get", "brunnel"], "tunnel"],
      "paint": {
        "line-color": "#a0c8f0",
        "line-dasharray": [3, 3],
        "line-gap-width": ["interpolate", ["linear"], ["zoom"], 12, 0, 20, 6],
        "line-opacity": 1,
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          8,
          1,
          20,
          2
        ]
      }
    },
    {
      "id": "waterway_river",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["==", ["get", "class"], "river"],
        ["!=", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-cap": "round"},
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          11,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "waterway_other",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["!=", ["get", "class"], "river"],
        ["!=", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-cap": "round"},
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          13,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": ["!=", ["get", "brunnel"], "tunnel"],
      "paint": {"fill-color": "rgb(158,189,255)"}
    },
    {
      "id": "landcover_sand",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", ["get", "class"], "sand"],
      "paint": {"fill-color": "rgba(247, 239, 195, 1)"}
    },
    {
      "id": "aeroway_fill",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "match",
        ["geometry-type"],
        ["MultiPolygon", "Polygon"],
        true,
        false
      ],
      "paint": {"fill-color": "rgba(229, 228, 224, 1)", "fill-opacity": 0.7}
    },
    {
      "id": "aeroway_runway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["==", ["get", "class"], "runway"]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          11,
          3,
          20,
          16
        ]
      }
    },
    {
      "id": "aeroway_taxiway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["==", ["get", "class"], "taxiway"]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          11,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "tunnel_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-dasharray": [0.5, 0.25],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "tunnel_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["street", "street_limited"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 12.5, 1],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "tunnel_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "tunnel_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "tunnel_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["path", "pedestrian"], true, false]
      ],
      "paint": {
        "line-color": "hsl(0,0%,100%)",
        "line-dasharray": [1, 0.75],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          14,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "tunnel_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "tunnel_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["minor"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          13.5,
          0,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          6.5,
          0,
          7,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "tunnel_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "tunnel_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#ffdaa6",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "tunnel_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["rail"], true, false]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "tunnel_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["==", ["get", "class"], "rail"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "tunnel_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["match", ["get", "class"], ["transit"], true, false]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "tunnel_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "tunnel"],
        ["==", ["get", "class"], "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_area_pattern",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "match",
        ["geometry-type"],
        ["MultiPolygon", "Polygon"],
        true,
        false
      ],
      "paint": {"fill-pattern": "pedestrian_polygon"}
    },
    {
      "id": "road_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "road_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "road_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        [
          "match",
          ["get", "class"],
          ["motorway", "path", "pedestrian", "service", "track"],
          false,
          true
        ],
        ["==", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "road_minor_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["minor"], true, false],
        ["!=", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 12.5, 1],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          20
        ]
      }
    },
    {
      "id": "road_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        ["!=", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "road_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "road_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "road_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["path", "pedestrian"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(0,0%,100%)",
        "line-dasharray": [1, 0.7],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          14,
          1,
          20,
          10
        ]
      }
    },
    {
      "id": "road_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "road_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "road_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "ramp"], 1],
        [
          "match",
          ["get", "class"],
          ["motorway", "path", "pedestrian", "service", "track"],
          false,
          true
        ]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "road_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["minor"], true, false]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          13.5,
          0,
          14,
          2.5,
          20,
          18
        ]
      }
    },
    {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          6.5,
          0,
          8,
          0.5,
          20,
          13
        ]
      }
    },
    {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "road_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          5,
          "hsl(26,87%,62%)",
          6,
          "#fc8"
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "road_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "rail"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "road_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "rail"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "road_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["get", "brunnel"], ["bridge", "tunnel"], false, true],
        ["==", ["get", "class"], "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_one_way_arrow",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": ["==", ["get", "oneway"], 1],
      "layout": {"icon-image": "arrow", "symbol-placement": "line"}
    },
    {
      "id": "road_one_way_arrow_opposite",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": ["==", ["get", "oneway"], -1],
      "layout": {
        "icon-image": "arrow",
        "icon-rotate": 180,
        "symbol-placement": "line"
      }
    },
    {
      "id": "bridge_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "bridge_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "bridge_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "link"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "bridge_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["street", "street_limited"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(36,6%,74%)",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 12.5, 1],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          25
        ]
      }
    },
    {
      "id": "bridge_path_pedestrian_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["path", "pedestrian"], true, false]
      ],
      "paint": {
        "line-color": "hsl(35,6%,80%)",
        "line-dasharray": [1, 0],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          14,
          1.5,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "bridge_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "bridge_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "bridge_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["path", "pedestrian"], true, false]
      ],
      "paint": {
        "line-color": "hsl(0,0%,100%)",
        "line-dasharray": [1, 0.3],
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          14,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "bridge_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["==", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "bridge_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["service", "track"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "bridge_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "link"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "bridge_street",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["minor"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          13.5,
          0,
          14,
          2.5,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          6.5,
          0,
          7,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "bridge_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "brunnel"], "bridge"],
        ["match", ["get", "class"], ["primary", "trunk"], true, false]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "motorway"],
        ["!=", ["get", "ramp"], 1],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "rail"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "bridge_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "rail"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "bridge_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "transit"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "bridge_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", ["get", "class"], "transit"],
        ["==", ["get", "brunnel"], "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 13,
      "maxzoom": 14,
      "paint": {
        "fill-color": "hsl(35,8%,85%)",
        "fill-outline-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          "hsla(35,6%,79%,0.32)",
          14,
          "hsl(35,6%,79%)"
        ]
      }
    },
    {
      "id": "building-3d",
      "type": "fill-extrusion",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 14,
      "paint": {
        "fill-extrusion-base": ["get", "render_min_height"],
        "fill-extrusion-color": "hsl(35,8%,85%)",
        "fill-extrusion-height": ["get", "render_height"],
        "fill-extrusion-opacity": 0.8
      }
    },
    {
      "id": "boundary_3",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [">=", ["get", "admin_level"], 3],
        ["<=", ["get", "admin_level"], 6],
        ["!=", ["get", "maritime"], 1],
        ["!=", ["get", "disputed"], 1],
        ["!", ["has", "claimed_by"]]
      ],
      "paint": {
        "line-color": "hsl(0,0%,70%)",
        "line-dasharray": [1, 1],
        "line-width": ["interpolate", ["linear", 1], ["zoom"], 7, 1, 11, 2]
      }
    },
    {
      "id": "boundary_2",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        ["==", ["get", "admin_level"], 2],
        ["!=", ["get", "maritime"], 1],
        ["!=", ["get", "disputed"], 1],
        ["!", ["has", "claimed_by"]]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(248,1%,41%)",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 0, 0.4, 4, 1],
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 1, 5, 1.2, 12, 3]
      }
    },
    {
      "id": "boundary_disputed",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        ["!=", ["get", "maritime"], 1],
        ["==", ["get", "disputed"], 1]
      ],
      "paint": {
        "line-color": "hsl(248,1%,41%)",
        "line-dasharray": [1, 2],
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 1, 5, 1.2, 12, 3]
      }
    },
    {
      "id": "waterway_line_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "minzoom": 10,
      "filter": [
        "match",
        ["geometry-type"],
        ["LineString", "MultiLineString"],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], " ", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": 14
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "water_name_point_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "match",
        ["geometry-type"],
        ["MultiPoint", "Point"],
        true,
        false
      ],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": ["interpolate", ["linear"], ["zoom"], 0, 10, 8, 14]
      },
      "paint": {
        "text-color": "#495e91",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "water_name_line_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "match",
        ["geometry-type"],
        ["LineString", "MultiLineString"],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], " ", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": 14
      },
      "paint": {
        "text-color": "#495e91",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "poi_r20",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 17,
      "filter": [
        "all",
        ["match", ["geometry-type"], ["MultiPoint", "Point"], true, false],
        [">=", ["get", "rank"], 20]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "subclass"],
          ["florist", "furniture"],
          ["get", "subclass"],
          ["get", "class"]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_r7",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 16,
      "filter": [
        "all",
        ["match", ["geometry-type"], ["MultiPoint", "Point"], true, false],
        [">=", ["get", "rank"], 7],
        ["<", ["get", "rank"], 20]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "subclass"],
          ["florist", "furniture"],
          ["get", "subclass"],
          ["get", "class"]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_r1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        ["match", ["geometry-type"], ["MultiPoint", "Point"], true, false],
        [">=", ["get", "rank"], 1],
        ["<", ["get", "rank"], 7]
      ],
      "layout": {
        "icon-image": [
          "match",
          ["get", "subclass"],
          ["florist", "furniture"],
          ["get", "subclass"],
          ["get", "class"]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_transit",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "filter": [
        "match",
        ["get", "class"],
        ["airport", "bus", "rail"],
        true,
        false
      ],
      "layout": {
        "icon-image": ["to-string", ["get", "class"]],
        "icon-size": 0.7,
        "text-anchor": "left",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-max-width": 9,
        "text-offset": [0.9, 0],
        "text-size": 12
      },
      "paint": {
        "text-color": "#2e5a80",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-path",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15.5,
      "filter": ["==", ["get", "class"], "path"],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], " ", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "map",
        "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 14, 13]
      },
      "paint": {
        "text-color": "hsl(30,23%,62%)",
        "text-halo-color": "#f8f4f0",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "class"], ["minor", "service", "track"], true, false]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], " ", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "map",
        "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 14, 13]
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 12.2,
      "filter": [
        "match",
        ["get", "class"],
        ["primary", "secondary", "tertiary", "trunk"],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], " ", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "map",
        "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 14, 13]
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-shield-non-us",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        ["<=", ["get", "ref_length"], 6],
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        [
          "match",
          ["get", "network"],
          ["us-highway", "us-interstate", "us-state"],
          false,
          true
        ]
      ],
      "layout": {
        "icon-image": ["concat", "road_", ["get", "ref_length"]],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
        "symbol-spacing": 200,
        "text-field": ["to-string", ["get", "ref"]],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "highway-shield-us-interstate",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        ["<=", ["get", "ref_length"], 6],
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "network"], ["us-interstate"], true, false]
      ],
      "layout": {
        "icon-image": [
          "concat",
          ["get", "network"],
          "_",
          ["get", "ref_length"]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": ["step", ["zoom"], "point", 7, "line", 8, "line"],
        "symbol-spacing": 200,
        "text-field": ["to-string", ["get", "ref"]],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "road_shield_us",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 9,
      "filter": [
        "all",
        ["<=", ["get", "ref_length"], 6],
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false
        ],
        ["match", ["get", "network"], ["us-highway", "us-state"], true, false]
      ],
      "layout": {
        "icon-image": [
          "concat",
          ["get", "network"],
          "_",
          ["get", "ref_length"]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
        "symbol-spacing": 200,
        "text-field": ["to-string", ["get", "ref"]],
        "text-font": ["Noto Sans Regular"],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "airport",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "aerodrome_label",
      "minzoom": 10,
      "filter": ["all", ["has", "iata"]],
      "layout": {
        "icon-image": "airport_11",
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 9,
        "text-offset": [0, 0.6],
        "text-optional": true,
        "text-padding": 2,
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "filter": [
        "match",
        ["get", "class"],
        ["city", "continent", "country", "state", "town", "village"],
        false,
        true
      ],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": ["interpolate", ["linear"], ["zoom"], 8, 9, 12, 10],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_village",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 9,
      "filter": ["==", ["get", "class"], "village"],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": ["step", ["zoom"], "circle_11_black", 10, ""],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          7,
          10,
          11,
          12
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_town",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6,
      "filter": ["==", ["get", "class"], "town"],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": ["step", ["zoom"], "circle_11_black", 10, ""],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          7,
          12,
          11,
          14
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_state",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 8,
      "filter": ["==", ["get", "class"], "state"],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Italic"],
        "text-letter-spacing": 0.2,
        "text-max-width": 9,
        "text-size": ["interpolate", ["linear"], ["zoom"], 5, 10, 8, 14],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "filter": [
        "all",
        ["==", ["get", "class"], "city"],
        ["!=", ["get", "capital"], 2]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": ["step", ["zoom"], "circle_11_black", 9, ""],
        "icon-optional": false,
        "icon-size": 0.4,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 8,
        "text-offset": [0, -0.1],
        "text-size": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          4,
          11,
          7,
          13,
          11,
          18
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_city_capital",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "filter": [
        "all",
        ["==", ["get", "class"], "city"],
        ["==", ["get", "capital"], 2]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": ["step", ["zoom"], "circle_11_black", 9, ""],
        "icon-optional": false,
        "icon-size": 0.5,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Bold"],
        "text-max-width": 8,
        "text-offset": [0, -0.2],
        "text-size": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          4,
          12,
          7,
          14,
          11,
          20
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_3",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 2,
      "maxzoom": 9,
      "filter": [
        "all",
        ["==", ["get", "class"], "country"],
        [">=", ["get", "rank"], 3]
      ],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Bold"],
        "text-max-width": 6.25,
        "text-size": ["interpolate", ["linear"], ["zoom"], 3, 9, 7, 17]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 9,
      "filter": [
        "all",
        ["==", ["get", "class"], "country"],
        ["==", ["get", "rank"], 2]
      ],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Bold"],
        "text-max-width": 6.25,
        "text-size": ["interpolate", ["linear"], ["zoom"], 2, 9, 5, 17]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 9,
      "filter": [
        "all",
        ["==", ["get", "class"], "country"],
        ["==", ["get", "rank"], 1]
      ],
      "layout": {
        "text-field": [
          "case",
          ["has", "name:nonlatin"],
          ["concat", ["get", "name:latin"], "\\n", ["get", "name:nonlatin"]],
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-font": ["Noto Sans Bold"],
        "text-max-width": 6.25,
        "text-size": ["interpolate", ["linear"], ["zoom"], 1, 9, 4, 17]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    }
  ]
}
`,Le=`{
  "version": 8,
  "sources": {
    "ne2_shaded": {
      "maxzoom": 6,
      "tileSize": 256,
      "tiles": [
        "https://__TILEJSON_DOMAIN__/natural_earth/ne2sr/{z}/{x}/{y}.png"
      ],
      "type": "raster"
    },
    "openmaptiles": {
      "type": "vector",
      "url": "https://__TILEJSON_DOMAIN__/planet"
    },
    "terrainSource": {
      "type": "raster-dem",
      "tiles": [
        "https://tiles.mapterhorn.com/{z}/{x}/{y}.webp"
      ],
      "encoding": "terrarium",
      "tileSize": 512,
      "maxzoom": 15
    },
    "contour-source": {
      "type": "vector",
      "minzoom": 10,
      "tiles": [
        "mlcontour://placeholder/contours/{z}/{x}/{y}.pbf"
      ],
      "maxzoom": 15
    }
  },
  "sprite": "https://__TILEJSON_DOMAIN__/sprites/ofm_f384/ofm",
  "glyphs": "https://__TILEJSON_DOMAIN__/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#f8f4f0"
      }
    },
    {
      "id": "natural_earth",
      "type": "raster",
      "source": "ne2_shaded",
      "maxzoom": 7,
      "paint": {
        "raster-opacity": [
          "interpolate",
          [
            "exponential",
            1.5
          ],
          [
            "zoom"
          ],
          0,
          0.6,
          6,
          0.1
        ]
      }
    },
    {
      "id": "park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 0.7,
        "fill-outline-color": "rgba(95, 208, 100, 1)"
      }
    },
    {
      "id": "park_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "line-color": "rgba(228, 241, 215, 1)",
        "line-dasharray": [
          1,
          1.5
        ]
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "maxzoom": 12,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "residential"
      ],
      "paint": {
        "fill-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          9,
          "hsla(0,3%,85%,0.84)",
          12,
          "hsla(35,57%,88%,0.49)"
        ]
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "wood"
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "hsla(98,61%,72%,0.7)",
        "fill-opacity": 0.4
      }
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "grass"
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(176, 213, 154, 1)",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "landcover_ice",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "ice"
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(224, 236, 236, 1)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landcover_wetland",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "minzoom": 12,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "wetland"
      ],
      "paint": {
        "fill-antialias": true,
        "fill-opacity": 0.8,
        "fill-pattern": "wetland_bg_11",
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "landuse_pitch",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "pitch"
      ],
      "paint": {
        "fill-color": "#DEE3CD"
      }
    },
    {
      "id": "landuse_track",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "track"
      ],
      "paint": {
        "fill-color": "#DEE3CD"
      }
    },
    {
      "id": "landuse_cemetery",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "cemetery"
      ],
      "paint": {
        "fill-color": "hsl(75,37%,81%)"
      }
    },
    {
      "id": "landuse_hospital",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "hospital"
      ],
      "paint": {
        "fill-color": "#fde"
      }
    },
    {
      "id": "landuse_school",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "school"
      ],
      "paint": {
        "fill-color": "rgb(236,238,204)"
      }
    },
    {
      "id": "waterway_tunnel",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "==",
        [
          "get",
          "brunnel"
        ],
        "tunnel"
      ],
      "paint": {
        "line-color": "#a0c8f0",
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          0,
          20,
          6
        ],
        "line-opacity": 1,
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          8,
          1,
          20,
          2
        ]
      }
    },
    {
      "id": "waterway_river",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "river"
        ],
        [
          "!=",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "waterway_other",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "!=",
          [
            "get",
            "class"
          ],
          "river"
        ],
        [
          "!=",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.3
          ],
          [
            "zoom"
          ],
          13,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": [
        "!=",
        [
          "get",
          "brunnel"
        ],
        "tunnel"
      ],
      "paint": {
        "fill-color": "rgb(158,189,255)"
      }
    },
    {
      "id": "landcover_sand",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "sand"
      ],
      "paint": {
        "fill-color": "rgba(247, 239, 195, 1)"
      }
    },
    {
      "id": "aeroway_fill",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "match",
        [
          "geometry-type"
        ],
        [
          "MultiPolygon",
          "Polygon"
        ],
        true,
        false
      ],
      "paint": {
        "fill-color": "rgba(229, 228, 224, 1)",
        "fill-opacity": 0.7
      }
    },
    {
      "id": "aeroway_runway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "runway"
        ]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          3,
          20,
          16
        ]
      }
    },
    {
      "id": "aeroway_taxiway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "taxiway"
        ]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          0.5,
          20,
          6
        ]
      }
    },
    {
      "id": "tunnel_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "tunnel_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "street",
            "street_limited"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "tunnel_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "tunnel_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "tunnel_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "tunnel_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "path",
            "pedestrian"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "hsl(0,0%,100%)",
        "line-dasharray": [
          1,
          0.75
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          14,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "tunnel_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "tunnel_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          13.5,
          0,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "tunnel_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          6.5,
          0,
          7,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "tunnel_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "tunnel_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffdaa6",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "tunnel_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "rail"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "tunnel_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "tunnel_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "transit"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "tunnel_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_area_pattern",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "match",
        [
          "geometry-type"
        ],
        [
          "MultiPolygon",
          "Polygon"
        ],
        true,
        false
      ],
      "paint": {
        "fill-pattern": "pedestrian_polygon"
      }
    },
    {
      "id": "road_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "road_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "road_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "motorway",
            "path",
            "pedestrian",
            "service",
            "track"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "road_minor_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor"
          ],
          true,
          false
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          20
        ]
      }
    },
    {
      "id": "road_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "road_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "road_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "road_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "path",
            "pedestrian"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#c05a2a",
        "line-dasharray": [
          1,
          0.7
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          14,
          2,
          20,
          8
        ],
        "line-opacity": [
          "case",
          [
            "has",
            "mtb_scale"
          ],
          0,
          1
        ]
      },
      "maxzoom": 22
    },
    {
      "id": "road_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "road_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "road_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "motorway",
            "path",
            "pedestrian",
            "service",
            "track"
          ],
          false,
          true
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "road_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          13.5,
          0,
          14,
          2.5,
          20,
          18
        ]
      }
    },
    {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          6.5,
          0,
          8,
          0.5,
          20,
          13
        ]
      }
    },
    {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "road_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          "hsl(26,87%,62%)",
          6,
          "#fc8"
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "road_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "road_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "road_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "road_one_way_arrow",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "==",
        [
          "get",
          "oneway"
        ],
        1
      ],
      "layout": {
        "icon-image": "arrow",
        "symbol-placement": "line"
      }
    },
    {
      "id": "road_one_way_arrow_opposite",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "==",
        [
          "get",
          "oneway"
        ],
        -1
      ],
      "layout": {
        "icon-image": "arrow",
        "icon-rotate": 180,
        "symbol-placement": "line"
      }
    },
    {
      "id": "bridge_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "bridge_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    },
    {
      "id": "bridge_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "link"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          1,
          13,
          3,
          14,
          4,
          20,
          15
        ]
      }
    },
    {
      "id": "bridge_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "street",
            "street_limited"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(36,6%,74%)",
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12,
          0.5,
          13,
          1,
          14,
          4,
          20,
          25
        ]
      }
    },
    {
      "id": "bridge_path_pedestrian_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "path",
            "pedestrian"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "hsl(35,6%,80%)",
        "line-dasharray": [
          1,
          0
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          14,
          1.5,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          8,
          1.5,
          20,
          17
        ]
      }
    },
    {
      "id": "bridge_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "bridge_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0.4,
          6,
          0.7,
          7,
          1.75,
          20,
          22
        ]
      }
    },
    {
      "id": "bridge_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "path",
            "pedestrian"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "hsl(0,0%,100%)",
        "line-dasharray": [
          1,
          0.3
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          14,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "bridge_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "bridge_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    },
    {
      "id": "bridge_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "link"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    },
    {
      "id": "bridge_street",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          13.5,
          0,
          14,
          2.5,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          6.5,
          0,
          7,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "bridge_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "motorway"
        ],
        [
          "!=",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    },
    {
      "id": "bridge_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "bridge_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "bridge_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    },
    {
      "id": "bridge_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ],
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 13,
      "maxzoom": 14,
      "paint": {
        "fill-color": "hsl(35,8%,85%)",
        "fill-outline-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          "hsla(35,6%,79%,0.32)",
          14,
          "hsl(35,6%,79%)"
        ]
      }
    },
    {
      "id": "building-3d",
      "type": "fill-extrusion",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 14,
      "paint": {
        "fill-extrusion-base": [
          "get",
          "render_min_height"
        ],
        "fill-extrusion-color": "hsl(35,8%,85%)",
        "fill-extrusion-height": [
          "get",
          "render_height"
        ],
        "fill-extrusion-opacity": 0.8
      }
    },
    {
      "id": "boundary_3",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          ">=",
          [
            "get",
            "admin_level"
          ],
          3
        ],
        [
          "<=",
          [
            "get",
            "admin_level"
          ],
          6
        ],
        [
          "!=",
          [
            "get",
            "maritime"
          ],
          1
        ],
        [
          "!=",
          [
            "get",
            "disputed"
          ],
          1
        ],
        [
          "!",
          [
            "has",
            "claimed_by"
          ]
        ]
      ],
      "paint": {
        "line-color": "hsl(0,0%,70%)",
        "line-dasharray": [
          1,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "linear",
            1
          ],
          [
            "zoom"
          ],
          7,
          1,
          11,
          2
        ]
      }
    },
    {
      "id": "boundary_2",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "admin_level"
          ],
          2
        ],
        [
          "!=",
          [
            "get",
            "maritime"
          ],
          1
        ],
        [
          "!=",
          [
            "get",
            "disputed"
          ],
          1
        ],
        [
          "!",
          [
            "has",
            "claimed_by"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(248,1%,41%)",
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          0,
          0.4,
          4,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          1,
          5,
          1.2,
          12,
          3
        ]
      }
    },
    {
      "id": "boundary_disputed",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "!=",
          [
            "get",
            "maritime"
          ],
          1
        ],
        [
          "==",
          [
            "get",
            "disputed"
          ],
          1
        ]
      ],
      "paint": {
        "line-color": "hsl(248,1%,41%)",
        "line-dasharray": [
          1,
          2
        ],
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          1,
          5,
          1.2,
          12,
          3
        ]
      }
    },
    {
      "id": "waterway_line_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "minzoom": 10,
      "filter": [
        "match",
        [
          "geometry-type"
        ],
        [
          "LineString",
          "MultiLineString"
        ],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            " ",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": 14
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "water_name_point_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "match",
        [
          "geometry-type"
        ],
        [
          "MultiPoint",
          "Point"
        ],
        true,
        false
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          0,
          10,
          8,
          14
        ]
      },
      "paint": {
        "text-color": "#495e91",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "water_name_line_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "match",
        [
          "geometry-type"
        ],
        [
          "LineString",
          "MultiLineString"
        ],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            " ",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-max-width": 5,
        "text-size": 14
      },
      "paint": {
        "text-color": "#495e91",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "bicycle-access",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 0,
      "maxzoom": 22,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ],
        [
          "has",
          "bicycle"
        ],
        [
          "in",
          "class",
          "track"
        ]
      ],
      "paint": {
        "line-color": "#8c64bd",
        "line-opacity": 0.7,
        "line-width": 2
      }
    },
    {
      "id": "mtb_scale-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 0,
      "maxzoom": 22,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ],
        [
          "has",
          "mtb_scale"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": [
          "match",
          [
            "get",
            "mtb_scale"
          ],
          "1",
          "blue",
          "2",
          "red",
          "black"
        ],
        "line-opacity": 0.8,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              16,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "poi_r20",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 17,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "MultiPoint",
            "Point"
          ],
          true,
          false
        ],
        [
          ">=",
          [
            "get",
            "rank"
          ],
          20
        ]
      ],
      "layout": {
        "icon-image": [
          "match",
          [
            "get",
            "subclass"
          ],
          [
            "florist",
            "furniture"
          ],
          [
            "get",
            "subclass"
          ],
          [
            "get",
            "class"
          ]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_r7",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "MultiPoint",
            "Point"
          ],
          true,
          false
        ],
        [
          ">=",
          [
            "get",
            "rank"
          ],
          7
        ],
        [
          "<",
          [
            "get",
            "rank"
          ],
          20
        ]
      ],
      "layout": {
        "icon-image": [
          "match",
          [
            "get",
            "subclass"
          ],
          [
            "florist",
            "furniture"
          ],
          [
            "get",
            "subclass"
          ],
          [
            "get",
            "class"
          ]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_r1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "MultiPoint",
            "Point"
          ],
          true,
          false
        ],
        [
          ">=",
          [
            "get",
            "rank"
          ],
          1
        ],
        [
          "<",
          [
            "get",
            "rank"
          ],
          7
        ]
      ],
      "layout": {
        "icon-image": [
          "match",
          [
            "get",
            "subclass"
          ],
          [
            "florist",
            "furniture"
          ],
          [
            "get",
            "subclass"
          ],
          [
            "get",
            "class"
          ]
        ],
        "text-anchor": "top",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_transit",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "filter": [
        "match",
        [
          "get",
          "class"
        ],
        [
          "airport",
          "bus",
          "rail"
        ],
        true,
        false
      ],
      "layout": {
        "icon-image": [
          "to-string",
          [
            "get",
            "class"
          ]
        ],
        "icon-size": 0.7,
        "text-anchor": "left",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-max-width": 9,
        "text-offset": [
          0.9,
          0
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "#2e5a80",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-path",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 0,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "path"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            " ",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          12,
          14,
          13
        ]
      },
      "paint": {
        "text-color": "#c05a2a",
        "text-halo-color": "#f8f4f0",
        "text-halo-width": 0.5
      },
      "maxzoom": 22
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor",
            "service",
            "track"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            " ",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          12,
          14,
          13
        ]
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 12.2,
      "filter": [
        "match",
        [
          "get",
          "class"
        ],
        [
          "primary",
          "secondary",
          "tertiary",
          "trunk"
        ],
        true,
        false
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            " ",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          12,
          14,
          13
        ]
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-shield-non-us",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "<=",
          [
            "get",
            "ref_length"
          ],
          6
        ],
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "network"
          ],
          [
            "us-highway",
            "us-interstate",
            "us-state"
          ],
          false,
          true
        ]
      ],
      "layout": {
        "icon-image": [
          "concat",
          "road_",
          [
            "get",
            "ref_length"
          ]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": [
          "step",
          [
            "zoom"
          ],
          "point",
          11,
          "line"
        ],
        "symbol-spacing": 200,
        "text-field": [
          "to-string",
          [
            "get",
            "ref"
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "highway-shield-us-interstate",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "<=",
          [
            "get",
            "ref_length"
          ],
          6
        ],
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "network"
          ],
          [
            "us-interstate"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "icon-image": [
          "concat",
          [
            "get",
            "network"
          ],
          "_",
          [
            "get",
            "ref_length"
          ]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": [
          "step",
          [
            "zoom"
          ],
          "point",
          7,
          "line",
          8,
          "line"
        ],
        "symbol-spacing": 200,
        "text-field": [
          "to-string",
          [
            "get",
            "ref"
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "road_shield_us",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "<=",
          [
            "get",
            "ref_length"
          ],
          6
        ],
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "network"
          ],
          [
            "us-highway",
            "us-state"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "icon-image": [
          "concat",
          [
            "get",
            "network"
          ],
          "_",
          [
            "get",
            "ref_length"
          ]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": [
          "step",
          [
            "zoom"
          ],
          "point",
          11,
          "line"
        ],
        "symbol-spacing": 200,
        "text-field": [
          "to-string",
          [
            "get",
            "ref"
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    },
    {
      "id": "airport",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "aerodrome_label",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "has",
          "iata"
        ]
      ],
      "layout": {
        "icon-image": "airport_11",
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0.6
        ],
        "text-optional": true,
        "text-padding": 2,
        "text-size": 12
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "filter": [
        "match",
        [
          "get",
          "class"
        ],
        [
          "city",
          "continent",
          "country",
          "state",
          "town",
          "village"
        ],
        false,
        true
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          8,
          9,
          12,
          10
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_village",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 9,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "village"
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          10,
          ""
        ],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          7,
          10,
          11,
          12
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_town",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "town"
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          10,
          ""
        ],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          7,
          12,
          11,
          14
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_state",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 8,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "state"
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-max-width": 9,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          10,
          8,
          14
        ],
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "city"
        ],
        [
          "!=",
          [
            "get",
            "capital"
          ],
          2
        ]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          9,
          ""
        ],
        "icon-optional": false,
        "icon-size": 0.4,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 8,
        "text-offset": [
          0,
          -0.1
        ],
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          4,
          11,
          7,
          13,
          11,
          18
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_city_capital",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "city"
        ],
        [
          "==",
          [
            "get",
            "capital"
          ],
          2
        ]
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          9,
          ""
        ],
        "icon-optional": false,
        "icon-size": 0.5,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-max-width": 8,
        "text-offset": [
          0,
          -0.2
        ],
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          4,
          12,
          7,
          14,
          11,
          20
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_3",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 2,
      "maxzoom": 9,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "country"
        ],
        [
          ">=",
          [
            "get",
            "rank"
          ],
          3
        ]
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-max-width": 6.25,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          3,
          9,
          7,
          17
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 9,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "country"
        ],
        [
          "==",
          [
            "get",
            "rank"
          ],
          2
        ]
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-max-width": 6.25,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          2,
          9,
          5,
          17
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "label_country_1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 9,
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "country"
        ],
        [
          "==",
          [
            "get",
            "rank"
          ],
          1
        ]
      ],
      "layout": {
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-max-width": 6.25,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          1,
          9,
          4,
          17
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "hillshade-layer",
      "type": "hillshade",
      "source": "terrainSource",
      "paint": {
        "hillshade-exaggeration": 0.2
      }
    },
    {
      "id": "contour-lines",
      "type": "line",
      "source": "contour-source",
      "source-layer": "contours",
      "minzoom": 10,
      "filter": [
        "==",
        [
          "get",
          "level"
        ],
        0
      ],
      "paint": {
        "line-color": "rgb(126, 124, 121)",
        "line-opacity": 0.25,
        "line-width": 0.5
      }
    },
    {
      "id": "contour-lines-index",
      "type": "line",
      "source": "contour-source",
      "source-layer": "contours",
      "minzoom": 10,
      "filter": [
        ">",
        [
          "get",
          "level"
        ],
        0
      ],
      "paint": {
        "line-color": "rgb(124, 122, 121)",
        "line-opacity": 0.1,
        "line-width": 1
      }
    },
    {
      "id": "contour-labels",
      "type": "symbol",
      "source": "contour-source",
      "source-layer": "contours",
      "minzoom": 11,
      "filter": [
        ">",
        [
          "get",
          "level"
        ],
        0
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          6,
          18,
          10
        ],
        "text-field": [
          "concat",
          [
            "number-format",
            [
              "get",
              "ele"
            ],
            {}
          ],
          "m"
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-padding": 0
      },
      "paint": {
        "text-color": "#5c5c5c",
        "text-halo-color": "rgba(255, 255, 255, 0.85)",
        "text-halo-width": 1.25
      }
    }
  ],
  "terrain": {
    "source": "terrainSource",
    "exaggeration": 1.5
  }
}
`;(async()=>{let u,h;u=Un(Ie),h=Un(Le),Ne(h),Pe(u,h)})();
