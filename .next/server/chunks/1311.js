exports.id=1311,exports.ids=[1311],exports.modules={21394:(e,s,t)=>{Promise.resolve().then(t.bind(t,80350))},54325:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},82484:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12704,23)),Promise.resolve().then(t.bind(t,18671))},16271:(e,s,t)=>{"use strict";t.d(s,{Z:()=>j});var a=t(95344),i=t(3729);let n={src:"/_next/static/media/logo.79a82f19.png",height:490,width:509,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHkvTm7lzjctTfgoEPjuzvatToSEgwKCggCAgQxKhTswjwMCgUAAADqwDvSrjdKPRjatDhmViDlvjrfuDiliS3UrzXRrTWTeijVrzfCnTDmwFSYAAAAG3RSTlMAahjxApEpC3C2OHGUg7GiPrZtW9OL48l5jirpqIgbAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAP0lEQVR4nCXIRw6AQAwAsdlGkm30+v+HIsHNMkTcQISID+lHSeNXssw+C6Atuaogdq19MkFrf+7SFNvDeWzZXjIhAg7aPQfJAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var r=t(89410),l=t(56506),o=t(8428),c=t(18671);(function(){var e=Error("Cannot find module 'next-themes'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module 'sonner'");throw e.code="MODULE_NOT_FOUND",e}();let d=({...e})=>{let{theme:s="system"}=Object(function(){var e=Error("Cannot find module 'next-themes'");throw e.code="MODULE_NOT_FOUND",e}())();return a.jsx(Object(function(){var e=Error("Cannot find module 'sonner'");throw e.code="MODULE_NOT_FOUND",e}()),{theme:s,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};!function(){var e=Error("Cannot find module 'sonner'");throw e.code="MODULE_NOT_FOUND",e}();let m=(e,s,t,a)=>{Object(function(){var e=Error("Cannot find module 'sonner'");throw e.code="MODULE_NOT_FOUND",e}())(e,{description:s,actionButtonStyle:{backgroundColor:"#E5BE39"},dismissible:!1,duration:1/0,action:{label:t,onClick:a}})};var u=t(8014),h=t(59045),x=t(87208);function f({user:e,close:s,handleLogout:t}){let[n,r]=(0,i.useState)("translateX(-100%)"),[c,d]=(0,i.useState)(0);return(0,o.usePathname)(),(0,i.useEffect)(()=>{r("translateX(0px)"),d(1)},[]),a.jsx("div",{style:{transform:n},className:"fixed duration-500 w-full top-0 left-0 h-[100dvh] bg-white z-50 ",children:(0,a.jsxs)("div",{className:"absolute bg-transparent  w-full h-[calc(100%-80px)] top-[80px] z-60 flex flex-col justify-center items-center gap-10",children:[(0,a.jsxs)(l.default,{style:{opacity:c,transitionDelay:"0.5s"},href:"/dashboard",className:" duration-500 text-base font-semibold flex items-center gap-2",children:[a.jsx("span",{className:"text-black/80",children:"Dashboard"}),a.jsx("i",{className:"fas fa-border-all text-black/80 text-sm"})]}),(0,a.jsxs)(l.default,{style:{opacity:c,transitionDelay:"0.7s"},href:"/tools/hire",className:" duration-500 text-base font-semibold flex items-center gap-2",children:[a.jsx("span",{className:"text-black/80",children:"Hire Talents"})," ",a.jsx("i",{className:"fas fa-users text-black/80 text-sm"})]}),(0,a.jsxs)(l.default,{style:{opacity:c,transitionDelay:"0.9s"},href:"/tools/vet",className:" text-base duration-500 font-semibold flex items-center gap-2",children:[a.jsx("span",{className:"text-black/80",children:"Vetting System"})," ",a.jsx("i",{className:"fa-brands fa-teamspeak text-black/80 text-sm"})]}),e?.role=="admin"&&(0,a.jsxs)(l.default,{style:{opacity:c,transitionDelay:"1.1s"},href:"/dashboard/users",className:" text-base duration-500 font-semibold flex items-center gap-2",children:[a.jsx("span",{className:"text-black/80",children:"Users"})," ",a.jsx("i",{className:"fas fa-users text-black/80 text-sm"})]}),(0,a.jsxs)("button",{onClick:t,type:"button",style:{opacity:c,transitionDelay:`${"admin"==e.role?"1.3s":"1.1s"}`},className:" text-base duration-500 font-semibold flex items-center gap-2",children:[a.jsx("span",{className:"text-red-600",children:"LogOut"}),a.jsx("i",{className:"fas fa-right-from-bracket text-red-600 text-sm"})]})]})})}var g=t(69282),p=t(47224);function j({header:e,children:s}){let j=(0,o.usePathname)(),b=(0,o.useRouter)(),[N,v]=(0,i.useState)(null),[y,w]=(0,i.useState)(!1),[A,k]=(0,i.useState)(!1),[S,D]=(0,i.useState)(""),[O,C]=(0,i.useState)(!1);async function E(){let e=t(59460),s={url:"https://api.analogueshifts.com/api/logout",method:"POST",headers:{Authorization:"Bearer "+N?.token}};C(!0),e.request(s).then(e=>{u.Z.remove("analogueshifts"),window.location.href="/login"}).catch(e=>{C(!1),c.toast.error(e.message,p.D)})}function T(){let e=t(59460),s={url:"https://api.analogueshifts.com/api/email/verification-notification",method:"POST",headers:{Authorization:"Bearer "+N?.token}};C(!0),e.request(s).then(e=>{C(!1),b.push("/email-verification")}).catch(e=>{C(!1),c.toast.error(e.message,p.D)})}let U=e=>{document.querySelector(".sidebar").classList.toggle(e)},L=()=>{A?(D(""),k(e=>!e)):(D("open"),k(e=>!e))};return(0,i.useEffect)(()=>{let e=u.Z.get("analogueshifts");if(null==e)return u.Z.set("RedirectionLink",j),window.location.href="/login",null;v(JSON.parse(e));let s=document.querySelector(".sidebar");return window.addEventListener("resize",()=>{window.innerWidth<768&&s.classList.add("hide")}),window.innerWidth<768&&s.classList.add("hide"),window.addEventListener("resize",()=>{k(!1),D("")}),window.removeEventListener("resize",()=>{k(!1),D("")})},[]),(0,i.useEffect)(()=>{console.log(N),N&&!N.email_verified_at&&m("Unverified Email","Your email address is not verified","Verify Email",T)},[N]),(0,a.jsxs)("main",{className:"body",children:[O&&a.jsx(h.Z,{}),a.jsx(g.Z,{close:()=>w(!1),open:y,action:()=>{w(!1),E()},title:"Log Out",description:"Are you sure you want to sign out of your account? You can always sign in at anytime."}),(0,a.jsxs)("section",{className:"sidebar",children:[(0,a.jsxs)("div",{className:"logo fixed sm:static",children:[a.jsx(l.default,{href:"https://www.analogueshifts.com",className:"icon sm:flex hidden",children:a.jsx(r.default,{src:n,alt:"Logo",className:"w-6 h-6"})}),a.jsx("div",{className:"text pt-1.5",children:e})]}),(0,a.jsxs)("ul",{className:"side-menu top",children:[a.jsx("li",{className:`${"/dashboard"===j?"active":""}`,children:(0,a.jsxs)(l.default,{href:"/dashboard",className:"nav-link",children:[a.jsx("i",{className:"fas fa-border-all"}),a.jsx("span",{className:"text hidden sm:flex",children:"Dashboard"})]})}),a.jsx("li",{className:`${j.startsWith("/tools/hire")?"active":""}`,children:(0,a.jsxs)(l.default,{href:"/tools/hire",className:"nav-link",children:[a.jsx("i",{className:"fas fa-users"}),a.jsx("span",{className:"text hidden sm:flex",children:"Hire Talents"})]})}),a.jsx("li",{className:`${j.startsWith("/tools/vet")?"active":""}`,children:(0,a.jsxs)(l.default,{href:"/tools/vet",className:"nav-link",children:[a.jsx("i",{className:"fa-brands fa-teamspeak"}),a.jsx("span",{className:"text hidden sm:flex",children:"Vetting System"})]})}),N?.role=="admin"&&a.jsx("li",{className:`${""===j?"active":""}`,children:(0,a.jsxs)(l.default,{href:"",className:"nav-link",children:[a.jsx("i",{className:"fas fa-users"}),a.jsx("span",{className:"text hidden sm:flex",children:"Users"})]})})]}),a.jsx("ul",{className:"side-menu",children:a.jsx("li",{children:(0,a.jsxs)("button",{onClick:()=>{w(!0)},className:"logout",children:[a.jsx("i",{className:"fas fa-right-from-bracket"}),a.jsx("span",{className:"text hidden sm:flex",children:"Logout"})]})})})]}),(0,a.jsxs)("section",{className:"content",children:[(0,a.jsxs)("nav",{className:" justify-between z-50",children:[a.jsx("i",{onClick:()=>U("hide"),className:"fas fa-bars menu-btn"}),a.jsx(l.default,{href:"https://www.analogueshifts.com",className:"sm:hidden flex",children:a.jsx(x.Z,{})}),(0,a.jsxs)("button",{className:`${S} block z-60 hamburger sm:hidden outline-none`,type:"button",onClick:L,children:[a.jsx("span",{className:`hamburger-top ${A?"bg-black/80":"bg-[#342e37]"}`}),a.jsx("span",{className:`hamburger-middle ${A?"bg-black/80":"bg-[#342e37]"}`}),a.jsx("span",{className:`hamburger-bottom ${A?"bg-black/80":"bg-[#342e37]"}`})]}),A&&a.jsx(f,{user:N,close:()=>k(!1),handleLogout:()=>{L(),w(!0)}})]}),a.jsx("main",{className:"p-7 h-[calc(100dvh-56px)] overflow-y-auto",children:s})]}),a.jsx(d,{})]})}},80350:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(95344),i=t(8428),n=t(3729);function r(){let e=(0,i.useRouter)();return(0,n.useEffect)(()=>{e.push("/404")},[]),a.jsx(a.Fragment,{})}},87208:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(95344);let i=()=>(0,a.jsxs)("div",{className:"flex gap-3",children:[a.jsx("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,a.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[a.jsx("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),a.jsx("br",{}),a.jsx("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},59045:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(95344);function i(){return a.jsx("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-80",children:(0,a.jsxs)("div",{className:"lds-roller",children:[a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{})]})})}},69282:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var a=t(95344),i=t(3729),n=t(3463),r=t(22012);function l({title:e,description:s,open:t,action:l,close:o}){let c=(0,i.useRef)(null);return a.jsx(n.u.Root,{show:t,as:i.Fragment,children:(0,a.jsxs)(r.V,{as:"div",className:"relative z-10",initialFocus:c,onClose:o,children:[a.jsx(n.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{className:"fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"})}),a.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:a.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:a.jsx(n.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(r.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[a.jsx("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,a.jsxs)("div",{className:"sm:flex sm:items-start",children:[a.jsx("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:a.jsx("i",{className:" text-red-600 fas fa-triangle-exclamation","aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[a.jsx(r.V.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:e}),a.jsx("div",{className:"mt-2",children:a.jsx("p",{className:"text-sm text-gray-500",children:s})})]})]})}),(0,a.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[a.jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:l,children:e}),a.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:o,ref:c,children:"Cancel"})]})]})})})})]})})}},47224:(e,s,t)=>{"use strict";t.d(s,{D:()=>a});let a={position:"top-right",autoClose:3e3}},18045:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m,metadata:()=>d});var a=t(25036),i=t(12412),n=t.n(i);t(67272),t(97151);var r=t(95411),l=t(70990),o=t(95132),c=t(23222);t(97001);let d={title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"https://www.analogueshifts.com"},verification:{google:"SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k"}};function m({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[a.jsx("head",{children:a.jsx("link",{rel:"icon",href:"https://www.analogueshifts.com/logo.png",sizes:"any"})}),(0,a.jsxs)("body",{className:function(...e){return(0,o.m)((0,l.W)(e))}("",n().className),children:[" ",a.jsx(c.Ix,{position:"top-center"}),e]}),a.jsx(r.default,{src:"https://kit.fontawesome.com/39a80cd06c.js",crossorigin:"anonymous"})]})}},46178:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>i,default:()=>r});let a=(0,t(86843).createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\not-found.js`),{__esModule:i,$$typeof:n}=a,r=a.default},57481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var a=t(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{},97151:()=>{}};