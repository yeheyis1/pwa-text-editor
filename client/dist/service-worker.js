if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const o=e=>s(e,r),f={module:{uri:r},exports:c,require:o};n[r]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-505fe7df"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"c72ec63fee39e15e675c7d040a27d1c6"},{url:"install.bundle.js",revision:"44253ca6fc339bf090c8174ff9957448"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"26f4130bf8c585cee1e0dcc028f4764b"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{}),e.registerRoute((({request:e})=>["style","script","worker"].includes(e.destination)),new e.StaleWhileRevalidate({cacheName:"asset-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3})]}),"GET")}));
