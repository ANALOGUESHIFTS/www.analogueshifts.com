(()=>{var e={};e.id=7702,e.ids=[7702],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},97887:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c});var a=s(50482),r=s(69108),i=s(62563),l=s.n(i),n=s(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,57014)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\dashboard\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,18045)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,46178)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\dashboard\\page.js"],u="/dashboard/page",x={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},69060:(e,t,s)=>{Promise.resolve().then(s.bind(s,1560))},1560:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var a=s(95344),r=s(3729),i=s(16271);let l={src:"/_next/static/media/curve.38b3c9b2.png",height:341,width:517,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEVMaXH///+a4ocPAAAAAnRSTlMAA++anIIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicY2AAA0ZGCA1lMDKCaAgJ5YI4AAFpABV4jECwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5};var n=s(89410),o=s(8014);let c={src:"/_next/static/media/profile_avatar.197037b0.JPG",height:1080,width:1080,blurWidth:0,blurHeight:0};var d=s(18671),u=s(47224),x=s(69172),h=s(59127);function p({className:e,...t}){return a.jsx("div",{className:(0,h.cn)("animate-pulse rounded-md bg-muted",e),...t})}function m(){return(0,a.jsxs)("div",{className:"flex items-center space-x-4 w-full",children:[a.jsx(p,{className:"h-12 w-12 rounded-full"}),(0,a.jsxs)("div",{className:"space-y-2 w-[calc(100%-62px)]",children:[a.jsx(p,{className:"h-4 w-full"}),a.jsx(p,{className:"h-4 w-[calc(100%-10px)]"}),a.jsx(p,{className:"h-4 w-[calc(100%-20px)]"})]})]})}var g=s(13536);function A(){let[e,t]=(0,r.useState)("Buy"),[s,h]=(0,r.useState)(!0),[p,A]=(0,r.useState)(0),[f,w]=(0,r.useState)(0),[b,j]=(0,r.useState)(null),v=()=>{try{(0,x.y)("https://api.analogueshifts.com/api/hire/dashboard",b.token,e=>{A(e.data.data.hires.total),(0,g.S)("https://api.analogueshifts.com/api/tools/form",b.token,e=>{w(e.data.data.forms.total),h(!1)},e=>{h(!1)})},e=>{h(!1)})}catch(e){h(!1),d.toast.error("Error Fetching Data",u.D)}};return(0,r.useEffect)(()=>{o.Z.get("analogueshifts")&&j(JSON.parse(o.Z.get("analogueshifts")))},[]),(0,r.useEffect)(()=>{b&&v()},[b]),a.jsx(i.Z,{header:a.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Dashboard"}),children:(0,a.jsxs)("div",{className:"w-full min-w-[300px] px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]",children:[a.jsx("div",{className:"w-full h-60 rounded-2xl bg-tremor-background-brown flex justify-end",children:a.jsx(n.default,{src:l,alt:""})}),(0,a.jsxs)("div",{className:"bg-white -translate-y-12 ml-5 h-max w-[calc(100%-40px)] px-5 pb-5 rounded-xl flex flex-col",children:[a.jsx(n.default,{src:c,alt:"Profile",className:"rounded-full h-28 w-28 -translate-y-12"}),(0,a.jsxs)("div",{className:"-translate-y-5",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:b?.name}),a.jsx("p",{className:"text-gray-600",children:b?.email})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ",children:[s?a.jsx(m,{}):(0,a.jsxs)("div",{className:"bg-white p-4 rounded-xl shadow-xl",children:[a.jsx("p",{className:"text-base truncate lg:text-xl font-bold text-blue-600",children:"Hire Talents"}),a.jsx("p",{className:"text-gray-600",children:p})]}),s?a.jsx(m,{}):(0,a.jsxs)("div",{className:"bg-white p-4 rounded-xl shadow-xl",children:[a.jsx("p",{className:"text-base truncate lg:text-xl font-bold text-green-600",children:"Vetting System"}),a.jsx("p",{className:"text-gray-600",children:f})]}),s?a.jsx(m,{}):(0,a.jsxs)("div",{className:"bg-white p-4 rounded-xl shadow-xl",children:[a.jsx("p",{className:"text-base truncate lg:text-xl font-bold text-yellow-600",children:"Recommendations"}),a.jsx("p",{className:"text-gray-600",children:"12"})]}),s?a.jsx(m,{}):(0,a.jsxs)("div",{className:"bg-white p-4 rounded-xl shadow-xl",children:[a.jsx("p",{className:"text-base truncate lg:text-xl font-bold text-red-600",children:"Projects"}),a.jsx("p",{className:"text-gray-600",children:"8"})]})]}),a.jsx("div",{className:"flex flex-col pt-12"})]}),a.jsx("div",{className:"flex flex-col overflow-hidden"})]})})}},59127:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var a=s(56815),r=s(58423);function i(...e){return(0,r.m)((0,a.W)(e))}},69172:(e,t,s)=>{"use strict";function a(e,t,a,r){s(59460).request({method:"GET",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}s.d(t,{y:()=>a})},13536:(e,t,s)=>{"use strict";function a(e,t,a,r){s(59460).request({method:"GET",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}s.d(t,{S:()=>a})},57014:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>o});var a=s(25036);let r=(0,s(86843).createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\dashboard\components\index.js`),{__esModule:i,$$typeof:l}=r,n=r.default,o={title:"Dashboard | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/dashboard",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/dashboard"}};function c(){return a.jsx(n,{})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[1638,6006,6506,9460,1900,9172,8423,1311],()=>s(97887));module.exports=a})();