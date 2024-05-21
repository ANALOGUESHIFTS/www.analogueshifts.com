(()=>{var e={};e.id=4905,e.ids=[4905],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},89748:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>b,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var o=r(50482),a=r(69108),l=r(62563),s=r.n(l),n=r(68300),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);r.d(t,i);let d=["",{children:["tools",{children:["hire",{children:["create",{children:["job-information",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38116)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\tools\\hire\\create\\job-information\\page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,18045)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,46178)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\tools\\hire\\create\\job-information\\page.js"],c="/tools/hire/create/job-information/page",b={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/tools/hire/create/job-information/page",pathname:"/tools/hire/create/job-information",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92165:(e,t,r)=>{Promise.resolve().then(r.bind(r,64716))},64716:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var o=r(95344),a=r(3729),l=r(45237),s=r(8014),n=r(7917),i=r(8428);function d(){let e=new Date,t=(0,i.useRouter)(),[r,d]=(0,a.useState)(""),[u,c]=(0,a.useState)(null),[b,m]=(0,a.useState)(""),[x,p]=(0,a.useState)(""),[f,h]=(0,a.useState)(`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`),[g,j]=(0,a.useState)(!0),w=(0,a.useRef)();return(0,a.useEffect)(()=>{let e=s.Z.get("jobPostData");if(e){if(JSON.parse(e).jobInformation){var t=JSON.parse(e).jobInformation;d(t.title),c(t.description),m(t.identifierName),p(t.identifierValue),h(t.validThrough)}else c("")}else c("")},[]),(0,a.useEffect)(()=>{var e=!1;[r,u,f].forEach(t=>{""===t&&(e=!0)}),j(e)},[r,u,f]),(0,o.jsxs)(l.Z,{children:[(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault();let o=s.Z.get("jobPostData"),a={title:r,description:u,identifierName:b,identifierValue:x,validThrough:f};if(o){let e=JSON.parse(o);s.Z.set("jobPostData",JSON.stringify({...e,jobInformation:a}))}else s.Z.set("jobPostData",JSON.stringify({jobInformation:a}),{expires:7});t.push("/tools/hire/create/job-details")},className:"w-full flex flex-col gap-6",children:[(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"JOB TITLE"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"A Job posting must describe one position only"})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{required:!0,type:"text",value:r,onChange:e=>d(e.target.value),placeholder:"e.g “Product designer”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"JOB DESCRIPTION"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Provide a short description about the job. Keep it short and to the point."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:null!==u&&o.jsx(n.Z,{changed:e=>c(e),initialData:u})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"Identifier Name"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"A label for tracking the job internally."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:b,onChange:e=>m(e.target.value),placeholder:"e.g “JobID”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"Identifier Value"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"A corresponding code or value assigned to the identifier name, serving as a unique identifier"})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"text",value:x,onChange:e=>p(e.target.value),placeholder:"e.g “123456”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,o.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[o.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"Valid Through"}),o.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The deadline for applying for the job."})]}),o.jsx("div",{className:"w-full md:w-1/2",children:o.jsx("input",{type:"date",required:!0,value:f,onChange:e=>h(e.target.value),className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),o.jsx("input",{ref:w,type:"submit",className:"-z-10 opacity-0"})]}),o.jsx("div",{className:" flex w-full justify-end",children:(0,o.jsxs)("button",{onClick:()=>w.current.click(),type:"button",disabled:g,className:`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${g?"opacity-50":"opacity-100"}`,children:["Next ",o.jsx("i",{className:"fas fa-arrow-right "})]})})]})}},45237:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(95344),a=r(8428),l=r(3729),s=r(8014),n=r(16271);function i({children:e}){let t=(0,a.usePathname)(),[r,i]=(0,l.useState)(null),[d,u]=(0,l.useState)(["job-information"]);return(0,l.useEffect)(()=>{s.Z.get("analogueshifts")&&i(JSON.parse(s.Z.get("analogueshifts")))},[]),(0,l.useEffect)(()=>{"job-information"===t.slice(19,t.length)?u(["job-information"]):"job-details"===t.slice(19,t.length)?u(["job-information","job-details"]):"job-location"===t.slice(19,t.length)?u(["job-information","job-details","job-location"]):"organization-information"===t.slice(19,t.length)&&u(["job-information","job-details","job-location","organization-information"])},[t]),o.jsx(n.Z,{user:r,header:o.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:(0,o.jsxs)("section",{className:"bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl",children:[(0,o.jsxs)("div",{className:"w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center",children:[o.jsx("button",{className:`text-sm font-medium ${d.includes("job-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Information"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Details"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Location"}),o.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),o.jsx("button",{className:`text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Organization Information"})]}),e]})})}},7917:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var o=r(95344),a=r(3150);r(194);var l=r(57779),s=r(3938),n=r(60554),i=r(73542),d=r(3729);let u=({valueChanged:e})=>{let{editor:t}=(0,n.fi)();return(t.setOptions({editorProps:{attributes:{class:t.isFocused?"border-tremor-background-darkYellow outline-1 border-2 px-3 z-30 pt-2 text-sm max-h-[120px] text-tremor-brand-boulder950 min-h-[130px] overflow-y-auto w-full rounded-b-2xl outline-none ":"border-tremor-brand-boulder200 border px-3 z-30 pt-2 text-sm max-h-[120px] text-tremor-brand-boulder950 min-h-[130px] overflow-y-auto w-full rounded-b-2xl outline-none "}}}),(0,d.useEffect)(()=>{e(t.getHTML())},[t.getHTML()]),t)?(0,o.jsxs)("div",{className:`flex w-full overflow-x-auto gap-x-3 gap-y-3 px-3 py-3  top-0 z-40 bg-white  rounded-t-2xl border-b-0 ${t.isFocused?"border-tremor-background-darkYellow outline-1 border-2":"border-tremor-brand-boulder200 border"}`,children:[o.jsx("button",{type:"button",onClick:()=>t.chain().focus().toggleBold().run(),disabled:!t.can().chain().focus().toggleBold().run(),className:`${t.isActive("bold")?"border-tremor-brand-boulder950":"border-white"} px-3 py-1 rounded-lg border`,children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-bold"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().toggleItalic().run(),disabled:!t.can().chain().focus().toggleItalic().run(),className:`${t.isActive("italic")?"border-tremor-brand-boulder950":"border-white"} px-3 py-1 rounded-lg border`,children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-italic"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().setParagraph().run(),className:`${t.isActive("paragraph")?"border-tremor-brand-boulder950":"border-white"} px-3 py-1 rounded-lg border`,children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-p"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().toggleBulletList().run(),className:`${t.isActive("bulletList")?"border-tremor-brand-boulder950":"border-white"} px-3 py-1 rounded-lg border`,children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-list-ul"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().toggleOrderedList().run(),className:`${t.isActive("orderedList")?"border-tremor-brand-boulder950":"border-white"} px-3 py-1 rounded-lg border`,children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-list-ol"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().undo().run(),disabled:!t.can().chain().focus().undo().run(),children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-undo"})}),o.jsx("button",{type:"button",onClick:()=>t.chain().focus().redo().run(),disabled:!t.can().chain().focus().redo().run(),children:o.jsx("i",{className:"text-tremor-brand-boulder950 fas fa-redo"})})]}):null},c=[a.I.configure({types:[s.Z.name,l.Z.name]}),s.Z.configure({types:[l.Z.name]}),i.Z.configure({bulletList:{keepMarks:!0,keepAttributes:!1},orderedList:{keepMarks:!0,keepAttributes:!1}})],b=({changed:e,initialData:t})=>o.jsx(n.KU,{slotBefore:o.jsx(u,{valueChanged:t=>e(t)}),extensions:c,content:t})},38116:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>i});var o=r(25036);let a=(0,r(86843).createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\tools\hire\components\create\job-information.js`),{__esModule:l,$$typeof:s}=a,n=a.default,i={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire/talents",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire/talents"}};function d(){return o.jsx(n,{})}},194:()=>{}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[1638,6006,6506,9460,1900,9172,4306,1311],()=>r(89748));module.exports=o})();