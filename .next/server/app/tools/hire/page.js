(()=>{var e={};e.id=1171,e.ids=[1171],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},7192:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=s(67096),r=s(16132),l=s(37284),i=s.n(l),n=s(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["tools",{children:["hire",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,12111)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,54062)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,21499)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\page.js"],u="/tools/hire/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/tools/hire/page",pathname:"/tools/hire",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},49305:(e,t,s)=>{Promise.resolve().then(s.bind(s,57270))},57270:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var a=s(53854),r=s(34218),l=s(23934),i=s(75548),n=s.n(i),o=s(30472),c=s(38318),d=s(73655),u=s(51018),x=s(861),m=s(3337);function h({currentPageInfo:e}){return a.jsx("div",{className:"w-max max-w-full overflow-x-auto h-max rounded-full scrollbar-hidden",children:a.jsx(m.tl,{className:" w-max",children:(0,a.jsxs)(m.ng,{className:"bg-transparent h-full",children:[a.jsx(m.nt,{children:a.jsx(m.dN,{href:e?.prev_page_url?"/tools/hire"+e?.prev_page_url?.slice(49):""})}),e?.links&&e.links.slice(1,e.links.length-1).map(e=>a.jsx(m.nt,{children:a.jsx(m.kN,{isActive:e.active,href:e.url?"/tools/hire"+e?.url?.slice(49):"",children:e.label})},crypto.randomUUID())),a.jsx(m.nt,{children:a.jsx(m.Dj,{})}),a.jsx(m.nt,{children:a.jsx(m.$0,{href:e?.next_page_url?"/tools/hire"+e?.next_page_url?.slice(49):""})})]})})})}var p=s(27264),f=s(41956),g=s.n(f),j=s(67796),v=s(80542),b=s(23133),w=s(6141);function y(){let[e,t]=(0,r.useState)(null),i=(0,u.useSearchParams)().getAll("page"),[m,f]=(0,r.useState)(null),[y,A]=(0,r.useState)(!1),[N,P]=(0,r.useState)(!1),[S,E]=(0,r.useState)(null),[k,_]=(0,r.useState)([]),[q,C]=(0,r.useState)(!1),Z=(0,u.useRouter)(),z=`https://api.analogueshifts.com/api/hire/dashboard${i.length?`?page=${i[0]}`:""}`,T=()=>{!function(e,t,a,r){let l=s(66575);l.request({method:"GET",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}(z,e.token,e=>{e?.data?.success&&(_(e.data.data.hires.data),f(e.data.data.hires)),C(!1),A(!1)},e=>{C(!1),(0,w.J)(e.message,e?.response?.data?.message||e.message||""),e?.response?.status===401&&(0,b.d)()})},U=async()=>{A(!0),function(e,t,a,r){let l=s(66575);l.request({method:"DELETE",url:e,headers:{Authorization:"Bearer "+t}}).then(a).catch(r)}("https://api.analogueshifts.com/api/hire/"+S,e.token,()=>{T(),o.toast.success("Job Deleted Successfully",x.D),E(null)},e=>{(0,w.J)("Error Deleting Job",e?.response?.data?.message||e.message||""),A(!1),e?.response?.status===401&&(0,b.d)()})};return(0,r.useEffect)(()=>{c.Z.get("analogueshifts")&&t(JSON.parse(c.Z.get("analogueshifts")))},[]),(0,r.useEffect)(()=>{e&&(C(!0),T())},[e]),(0,a.jsxs)(l.Z,{header:a.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:[a.jsx(d.Z,{title:"Delete Post",action:()=>{U(),P(!1)},close:()=>{E(null),P(!1)},description:"Are you sure you want to delete this Post? This  Job Post will not be  visible to Talents anymore. This action cannot be undone.",open:N}),y&&a.jsx(v.Z,{}),(0,a.jsxs)("div",{className:"w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]",children:[a.jsx("div",{className:"sticky top-0 z-20",children:(0,a.jsxs)("div",{className:"w-full relative h-60 md:h-max pb-6 md:rounded-2xl bg-tremor-background-brown flex justify-end",children:[a.jsx(g(),{src:p.Z,alt:"",className:"absolute z-10"}),(0,a.jsxs)("div",{className:"w-full flex-wrap gap-y-4 items-center flex justify-center  pt-8 px-5",children:[a.jsx("div",{className:"z-20 w-max max-w-full min-w-[50%]",children:(0,a.jsxs)("button",{onClick:()=>{c.Z.remove("jobPostData"),Z.push("/tools/hire/create/job-information")},type:"button",className:"h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 bg-white font-normal md:text-base text-sm bg-transparent text-tremor-background-brown",children:["Hire Talents",a.jsx("i",{className:"fas fa-plus"})]})}),a.jsx("div",{className:"z-20 w-max flex justify-end max-w-full min-w-[50%]",children:a.jsx(h,{currentPageInfo:m})})]})]})}),a.jsx("div",{className:"bg-white z-50 md:mt-6 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] py-5 h-max w-full px-5 pb-5 md:rounded-xl flex flex-col",children:q?(0,a.jsxs)("div",{className:"w-full h-max min-h-[200px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:[a.jsx(j.Z,{})," ",a.jsx(j.Z,{})," ",a.jsx(j.Z,{})]}):(0,a.jsxs)("div",{className:"w-full h-max min-h-full flex flex-wrap gap-6",children:[k&&k.map(e=>(0,a.jsxs)("div",{className:"w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2",children:[(0,a.jsxs)("div",{className:"flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center",children:[a.jsx("img",{src:e.hiringOrganization.logo&&e.hiringOrganization.logo.trim().length>0?e.hiringOrganization.logo:"/images/jobs/company_logo.JPG",alt:"LOGO",className:"md:w-max md:h-[100px] object-contain w-[156px] h-[100px]"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1.5 items-center md:items-center",children:[a.jsx("p",{className:"text-sm font-normal text-[#B0B0B0]",children:e.hiringOrganization.name}),a.jsx("p",{className:"text-xl font-semibold text-black/90",children:e.title}),a.jsx("p",{className:"text-[15px] font-normal text-[#7B7B7B] md:text-center",dangerouslySetInnerHTML:{__html:e.description.length>100?e.description.slice(0,100).concat("..."):e.description}}),(0,a.jsxs)("div",{className:"flex gap-1.5 flex-wrap",children:[a.jsx("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e.baseSalary.value.value+" "+e.baseSalary.currency+" Per "+e.baseSalary.value.unitText}),a.jsx("div",{className:"px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal",children:e.jobLocationType})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-2 mx-auto items-center md:mt-2 md:mx-auto",children:[a.jsx(n(),{href:`/tools/hire/edit/${e.uuid}`,className:"w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center",children:"Edit"}),a.jsx("a",{href:e.apply,className:"text-xs font-normal text-black/60",children:"Apply"}),a.jsx("button",{onClick:()=>{E(e.id),P(!0)},className:"text-xs font-normal text-red-500",children:"Delete"})]})]},e.id)),m&&0===k.length&&a.jsx("div",{className:"w-full mt-10 flex px-5 items-center justify-center",children:a.jsx("h3",{className:"text-tremor-brand-boulder950",children:"No Job Found"})})]})}),a.jsx("div",{className:"flex flex-col overflow-hidden"})]})]})}},67796:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(53854),r=s(71656);function l({className:e,...t}){return a.jsx("div",{className:(0,r.cn)("animate-pulse rounded-md bg-muted",e),...t})}function i(){return(0,a.jsxs)("div",{className:"flex items-center space-x-4 w-full",children:[a.jsx(l,{className:"h-12 w-12 rounded-full"}),(0,a.jsxs)("div",{className:"space-y-2 w-[calc(100%-62px)]",children:[a.jsx(l,{className:"h-4 w-full"}),a.jsx(l,{className:"h-4 w-[calc(100%-10px)]"}),a.jsx(l,{className:"h-4 w-[calc(100%-20px)]"})]})]})}},3337:(e,t,s)=>{"use strict";s.d(t,{tl:()=>u,ng:()=>x,Dj:()=>g,nt:()=>m,kN:()=>h,$0:()=>f,dN:()=>p});var a=s(53854),r=s(34218),l=s(81530);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,l.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),n=(0,l.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),o=(0,l.Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);s(75548);var c=s(71656),d=s(98749);let u=({className:e,...t})=>a.jsx("nav",{role:"navigation","aria-label":"pagination",className:(0,c.cn)("mx-auto flex w-full justify-center",e),...t});u.displayName="Pagination";let x=r.forwardRef(({className:e,...t},s)=>a.jsx("ul",{ref:s,className:(0,c.cn)("flex flex-row items-center gap-1",e),...t}));x.displayName="PaginationContent";let m=r.forwardRef(({className:e,...t},s)=>a.jsx("li",{ref:s,className:(0,c.cn)("",e),...t}));m.displayName="PaginationItem";let h=({className:e,isActive:t,size:s="icon",...r})=>a.jsx("a",{"aria-current":t?"page":void 0,className:(0,c.cn)((0,d.d)({variant:t?"outline":"ghost",size:s}),e),...r});h.displayName="PaginationLink";let p=({className:e,...t})=>(0,a.jsxs)(h,{"aria-label":"Go to previous page",size:"default",className:(0,c.cn)("gap-1 pl-2.5",e),...t,children:[a.jsx(i,{className:"h-4 w-4"}),a.jsx("span",{children:"Previous"})]});p.displayName="PaginationPrevious";let f=({className:e,...t})=>(0,a.jsxs)(h,{"aria-label":"Go to next page",size:"default",className:(0,c.cn)("gap-1 pr-2.5",e),...t,children:[a.jsx("span",{children:"Next"}),a.jsx(n,{className:"h-4 w-4"})]});f.displayName="PaginationNext";let g=({className:e,...t})=>(0,a.jsxs)("span",{"aria-hidden":!0,className:(0,c.cn)("flex h-9 w-9 items-center justify-center",e),...t,children:[a.jsx(o,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"More pages"})]});g.displayName="PaginationEllipsis"},6141:(e,t,s)=>{"use strict";s.d(t,{J:()=>l});var a=s(53854),r=s(30472);let l=(e,t)=>{r.toast.error((0,a.jsxs)("div",{children:[a.jsx("h4",{children:e}),a.jsx("p",{children:a.jsx("small",{children:t})})]}),{position:"top-right"})}},12111:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>u});var a=s(4656),r=s(3542),l=s(95153);let i=(0,l.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\analogueshifts.com\app\tools\hire\components\hire-home.js`),{__esModule:n,$$typeof:o}=i,c=i.default;var d=s(74790);let u={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire"}};function x(){return a.jsx(r.Suspense,{fallback:a.jsx(d.Z,{}),children:a.jsx(c,{})})}},74790:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(4656);function r(){return a.jsx("div",{style:{zIndex:3e3},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-80",children:(0,a.jsxs)("div",{className:"lds-roller",children:[a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{})]})})}},27264:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a={src:"/_next/static/media/curve.38b3c9b2.png",height:341,width:517,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEVMaXH///+a4ocPAAAAAnRSTlMAA++anIIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicY2AAA0ZGCA1lMDKCaAgJ5YI4AAFpABV4jECwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[3271,7237,5548,8469,6575,895,7557,1193],()=>s(7192));module.exports=a})();