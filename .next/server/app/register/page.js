(()=>{var e={};e.id=4011,e.ids=[4011],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},51941:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var s=r(50482),a=r(69108),n=r(62563),i=r.n(n),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,39779)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\register\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,18045)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,46178)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\register\\page.js"],d="/register/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},21394:(e,t,r)=>{Promise.resolve().then(r.bind(r,80350))},95787:(e,t,r)=>{Promise.resolve().then(r.bind(r,89332))},54325:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},82484:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12704,23)),Promise.resolve().then(r.bind(r,18671))},80350:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(95344),a=r(8428),n=r(3729);function i(){let e=(0,a.useRouter)();return(0,n.useEffect)(()=>{e.push("/404")},[]),s.jsx(s.Fragment,{})}},89332:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(95344),a=r(87777),n=r(7814),i=r(89410),o=r(87208),l=r(3729),c=r(56506),u=r(73163),d=r(18671),p=r(8014),m=r(47224),f=r(73616);function h(){let[e,t]=(0,l.useState)(""),[h,g]=(0,l.useState)(""),[x,A]=(0,l.useState)(""),[w,b]=(0,l.useState)(""),[v,j]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(p.Z.get("analogueshifts"))return window.location.href="/dashboard",null},[]),(0,s.jsxs)(s.Fragment,{children:[" ",v&&s.jsx(u.Z,{}),s.jsx("main",{className:"w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10",children:(0,s.jsxs)("section",{className:"max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center",children:[s.jsx(i.default,{src:a.Z,alt:"",className:"absolute"}),s.jsx(i.default,{src:n.Z,alt:""})]}),(0,s.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] flex flex-col",children:[s.jsx(o.Z,{}),(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();let s=r(59460),a=JSON.stringify({name:e,email:h,password:x,password_confirmation:w,device_token:crypto.randomUUID(),device_type:"web"});j(!0),s.request({method:"POST",url:"https://api.analogueshifts.com/api/register",headers:{"Content-Type":"application/json"},data:a}).then(async e=>{let t=JSON.stringify({...e.data[0].data.user,token:e.data[0].data.token});p.Z.set("analogueshifts",t),j(!1),d.toast.success("Account Created Successfully",m.D);let r=p.Z.get("RedirectionLink");window.location.href=r.trim().length?r:"/dashboard"}).catch(e=>{j(!1),d.toast.error(e.message,m.D)})},className:"pt-11 w-full flex flex-col",children:[s.jsx("p",{className:"font-medium text-lg text-tremor-content-grayText pb-4",children:"Welcome!"}),s.jsx("p",{className:"font-bold text-3xl text-[#292929] pb-5",children:"Join our Community"}),s.jsx(f.Z,{icon:"fa-solid fa-signature",type:"text",onChange:e=>t(e.target.value),label:"Name",placeholder:"Name",value:e}),s.jsx(f.Z,{icon:"fa-solid fa-envelope",type:"email",onChange:e=>g(e.target.value),label:"Email",placeholder:"Enter Email",value:h}),s.jsx(f.Z,{icon:"fa-solid fa-lock",type:"password",onChange:e=>A(e.target.value),label:"Password",placeholder:"Enter Password",value:x}),s.jsx(f.Z,{icon:"fa-solid fa-lock",type:"password",onChange:e=>b(e.target.value),label:"Confirm Password",placeholder:"Enter Password",value:w}),s.jsx("button",{type:"submit",className:"w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ",children:"Sign Up"}),(0,s.jsxs)("div",{className:"w-full pt-4 flex justify-center items-center gap-1",children:[s.jsx("p",{className:"font-normal text-sm text-black/90",children:"Already have an account?"}),s.jsx(c.default,{href:"/login",className:"font-normal text-sm text-tremor-background-darkYellow",children:"Sign In"})]})]})]})]})})]})}},87208:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(95344);let a=()=>(0,s.jsxs)("div",{className:"flex gap-3",children:[s.jsx("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,s.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[s.jsx("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),s.jsx("br",{}),s.jsx("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},73616:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(95344);let a=({label:e,icon:t,value:r,type:a,placeholder:n,onChange:i})=>(0,s.jsxs)("div",{className:"w-full pb-5 flex flex-col gap-2.5",children:[s.jsx("p",{className:"text-base font-normal text-tremor-content-grayText",children:e}),(0,s.jsxs)("div",{className:"w-full relative flex items-center h-12",children:[s.jsx("i",{className:"absolute left-5  text-base text-tremor-content-grayText w-8 "+t}),s.jsx("input",{className:" w-full rounded-2xl border border-black/10 outline-1 outline-tremor-background-darkYellow h-full pl-12 pr-4  text-base font-normal text-gray-400",placeholder:n,value:r,type:a,onChange:i,required:!0})]})]})},73163:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(95344);function a(){return s.jsx("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30",children:(0,s.jsxs)("div",{className:"lds-roller",children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]})})}},89410:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(37412),a=r.n(s)},37412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return o},default:function(){return l}});let s=r(39694),a=r(83855),n=r(31900),i=s._(r(74931)),o=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=n.Image},47224:(e,t,r)=>{"use strict";r.d(t,{D:()=>s});let s={position:"top-right",autoClose:3e3}},18045:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>u});var s=r(25036),a=r(12412),n=r.n(a);r(67272),r(97151);var i=r(95411),o=r(70990),l=r(95132),c=r(23222);r(97001);let u={title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"https://www.analogueshifts.com"},verification:{google:"SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k"}};function d({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[s.jsx("head",{children:s.jsx("link",{rel:"icon",href:"https://www.analogueshifts.com/logo.png",sizes:"any"})}),(0,s.jsxs)("body",{className:function(...e){return(0,l.m)((0,o.W)(e))}("",n().className),children:[" ",s.jsx(c.Ix,{position:"top-center"}),e]}),s.jsx(i.default,{src:"https://kit.fontawesome.com/39a80cd06c.js",crossorigin:"anonymous"})]})}},46178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\not-found.js`),{__esModule:a,$$typeof:n}=s,i=s.default},39779:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(25036);let a=(0,r(86843).createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\register\components\Register.js`),{__esModule:n,$$typeof:i}=a,o=a.default,l={title:"Sign Up | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/register",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/register"}};function c(){return s.jsx(o,{})}},7814:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={src:"/_next/static/media/avatar.9e508533.png",height:170,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEXGyv+siIa/xPcfEQ/5uTfysTfUjyb7w0DyqzHO1P9kY3qHVx6XlbXsx3o2LzFdOCSohnVUMBzTzOCpaBN1PwDJxebolRmbYy26hUjOnWyYXhh3c48KSzjWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nBXFRxLAIAwAsQVsbCC9l///MxNdBNShK0BMYwAodQ7x/03TAvv9nGo91+EiZrTVVU1oW3a3/AE34wH0Xi/XZAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},87777:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={src:"/_next/static/media/group.43634bce.png",height:538,width:478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEWViVzYqDWRjHXhcCbrMRbx2rHUuThMaXFVVVRERUT/7sT/AAZEODLu5uWw2tf///BkXEg2PDZXRTr///86NjT/AAD///+RnaD///9/sq//AAB6YEoJ8vs8AAAAG3RSTlMQLS0uEDY1AC81DzT9+P0jsVXqGHUrNa1XdBssEDwQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBhQHAMADDMBdTHvP/f06i91OkxBi3yJnnCsJa3sOrhECtXmXacM4rzzsxouVrGIPS2n5IIQIoDVqR/gAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{},97151:()=>{},8014:(e,t,r)=>{"use strict";/*! js-cookie v3.0.5 | MIT */function s(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)e[s]=r[s]}return e}r.d(t,{Z:()=>a});var a=function e(t,r){function a(e,a,n){if("undefined"!=typeof document){"number"==typeof(n=s({},r,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var o in n)n[o]&&(i+="; "+o,!0!==n[o]&&(i+="="+n[o].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+i}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],s={},a=0;a<r.length;a++){var n=r[a].split("="),i=n.slice(1).join("=");try{var o=decodeURIComponent(n[0]);if(s[o]=t.read(i,o),e===o)break}catch(e){}}return e?s[e]:s}},remove:function(e,t){a(e,"",s({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,s({},this.attributes,t))},withConverter:function(t){return e(s({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6006,6506,9460,1900],()=>r(51941));module.exports=s})();