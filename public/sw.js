if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>n(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/123-db82911660165258.js",revision:"db82911660165258"},{url:"/_next/static/chunks/167-8ba69fd238f979d7.js",revision:"8ba69fd238f979d7"},{url:"/_next/static/chunks/202-eeb596e14e53e72e.js",revision:"eeb596e14e53e72e"},{url:"/_next/static/chunks/694-b1107644540638c8.js",revision:"b1107644540638c8"},{url:"/_next/static/chunks/734-378e304bf4615de9.js",revision:"378e304bf4615de9"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-eea57491642184e0.js",revision:"eea57491642184e0"},{url:"/_next/static/chunks/pages/_app-2480dd622f62a8b7.js",revision:"2480dd622f62a8b7"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/activities-4c32fc9a665c754c.js",revision:"4c32fc9a665c754c"},{url:"/_next/static/chunks/pages/index-66911d4b2d435cd3.js",revision:"66911d4b2d435cd3"},{url:"/_next/static/chunks/pages/profile-13da35e500001135.js",revision:"13da35e500001135"},{url:"/_next/static/chunks/pages/register-f712f027378ecab6.js",revision:"f712f027378ecab6"},{url:"/_next/static/chunks/pages/users-7321e49dc796d482.js",revision:"7321e49dc796d482"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fa99431b15635937.js",revision:"fa99431b15635937"},{url:"/_next/static/css/36f1de3ad2349f9e.css",revision:"36f1de3ad2349f9e"},{url:"/_next/static/xLXaNlxS03CzIMMvAG4Xd/_buildManifest.js",revision:"03d7b253f9d877c42a5c4db1b2322dfe"},{url:"/_next/static/xLXaNlxS03CzIMMvAG4Xd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"5f73831a9565724fcbe40807f768e192"},{url:"/icon-256x256.png",revision:"358a7f4cefbf4d127e9cd233b7846fca"},{url:"/icon-384x384.png",revision:"8ee00380ed52239bb47ac2edb4605e22"},{url:"/icon-512x512.png",revision:"0c67ec2cdf985b96fc9b7939468388e2"},{url:"/icon.png",revision:"b38f338708e1f23b58a7d89033b0f6dd"},{url:"/manifest.json",revision:"548bde49194787cfc0815cce24027a07"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
