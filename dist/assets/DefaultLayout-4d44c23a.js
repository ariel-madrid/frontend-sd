import{r as o,a as e,j as l,L as n,G as d,N as i,B as h,M as x,O as m}from"./index-261cd821.js";const g="/assets/logo-icon-cc979474.svg";function p(c,r){const[a,s]=o.useState(()=>{try{const t=window.localStorage.getItem(c);return t?JSON.parse(t):r}catch(t){return console.log(t),r}});return o.useEffect(()=>{try{const t=typeof a=="function"?a(a):a;window.localStorage.setItem(c,JSON.stringify(t))}catch(t){console.log(t)}},[c,a]),[a,s]}const C=()=>{const[c,r]=p("color-theme","light");return o.useEffect(()=>{const a="dark",s=window.document.body.classList;c==="dark"?s.add(a):s.remove(a)},[c]),[c,r]},f=()=>{const[c,r]=C();return e("li",{children:l("label",{className:`relative m-0 block h-7.5 w-14 rounded-full ${c==="dark"?"bg-primary":"bg-stroke"}`,children:[e("input",{type:"checkbox",onChange:()=>{typeof r=="function"&&r(c==="light"?"dark":"light")},className:"dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"}),l("span",{className:`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${c==="dark"&&"!right-[3px] !translate-x-full"}`,children:[e("span",{className:"dark:hidden",children:l("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z",fill:"#969AA1"}),e("path",{d:"M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z",fill:"#969AA1"})]})}),e("span",{className:"hidden dark:inline-block",children:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z",fill:"#969AA1"})})})]})]})})},u=()=>e("header",{className:"sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",children:l("div",{className:"flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11",children:[e("div",{className:"flex items-center gap-2 sm:gap-4 lg:hidden",children:e(n,{className:"block flex-shrink-0 lg:hidden",to:"/",children:e("img",{src:g,alt:"Logo"})})}),e("div",{className:"hidden sm:block",children:e("h3",{className:"text-black",children:"Aplicación Informativa de Eventos Fenomenologicos"})}),e("div",{className:"flex items-center gap-3 2xsm:gap-7",children:e("ul",{className:"flex items-center gap-2 2xsm:gap-4",children:e(f,{})})})]})});function y(c){return d({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.414 1.56L8.312 1h3.294l.818 1.575L10.236 6h1.781l.72 1.695L5.618 15l-1.602-1.163L6.119 10H4.898L4 8.56l3.414-7zM7.78 9L4.9 14.305 12.018 7H8.312l3.294-5H8.312L4.898 9H7.78z"}}]})(c)}function v(c){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]})(c)}const b=({sidebarOpen:c,setSidebarOpen:r})=>l("aside",{className:`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${c?"translate-x-0":"-translate-x-full"}`,children:[l("div",{className:"flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5",children:[e(i,{to:"/",children:l("div",{className:"flex flex-row items-center justify-center",children:[l("svg",{height:"92",viewBox:"0 0 110 92",width:"110",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"50.049",cy:"45",fill:"#0b3d91",r:"40.14"}),l("g",{fill:"#fff",children:[e("circle",{cx:"47.679",cy:"12.57",r:".45"}),e("circle",{cx:"52.299",cy:"13.17",r:".45"}),e("circle",{cx:"58.359",cy:"21.33",r:".45"}),e("circle",{cx:"25.119",cy:"63.33",r:".45"}),e("circle",{cx:"26.289",cy:"66.93",r:".45"}),e("circle",{cx:"20.709",cy:"63.87",r:".337"}),e("circle",{cx:"39.009",cy:"70.942",r:".338"}),e("circle",{cx:"67.711",cy:"64.98",r:".337"}),e("circle",{cx:"76.052",cy:"55.92",r:".338"}),e("circle",{cx:"35.169",cy:"23.962",r:".337"}),e("circle",{cx:"44.349",cy:"17.22",r:".337"}),e("circle",{cx:"43.352",cy:"16.56",r:".337"}),e("circle",{cx:"42.452",cy:"15.9",r:".337"}),e("circle",{cx:"36.609",cy:"25.703",r:".337"}),e("circle",{cx:"50.131",cy:"8.16",r:".337"}),e("circle",{cx:"52.352",cy:"17.88",r:".337"}),e("circle",{cx:"48.849",cy:"15.982",r:".337"}),e("circle",{cx:"42.849",cy:"18.563",r:".337"}),e("circle",{cx:"69.309",cy:"73.883",r:".337"}),e("circle",{cx:"24.549",cy:"65.61",r:".338"}),e("circle",{cx:"48.009",cy:"69.96",r:".338"}),e("circle",{cx:"31.531",cy:"65.34",r:".338"}),e("circle",{cx:"34.449",cy:"70.103",r:".338"}),e("circle",{cx:"55.929",cy:"67.103",r:".337"}),e("circle",{cx:"67.771",cy:"60.42",r:".337"}),e("circle",{cx:"76.749",cy:"64.522",r:".337"}),e("circle",{cx:"79.809",cy:"66.48",r:".337"}),e("circle",{cx:"80.312",cy:"61.14",r:".337"}),e("circle",{cx:"35.671",cy:"53.58",r:".337"}),e("circle",{cx:"35.799",cy:"61.32",r:".45"}),e("circle",{cx:"38.499",cy:"67.02",r:".45"}),e("circle",{cx:"70.839",cy:"61.08",r:".45"}),e("circle",{cx:"82.479",cy:"60.42",r:".45"}),e("circle",{cx:"76.719",cy:"57.96",r:".45"}),e("circle",{cx:"70.839",cy:"58.2",r:".45"}),e("path",{d:"M58.71 12.288l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.114-.064 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.061-1.146C58.507 12.651 58.671 12.492 58.71 12.288z"}),e("path",{d:"M39.824 24.746l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C39.622 25.11 39.786 24.95 39.824 24.746z"}),e("path",{d:"M81.659 57.684l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C81.456 58.048 81.62 57.889 81.659 57.684z"}),e("path",{d:"M36.044 74.906l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.113-.063 1.122c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.345.394.38l.104 1.148.062-1.146C35.841 75.27 36.006 75.11 36.044 74.906z"}),e("path",{d:"M78.104 66.506l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.122c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C77.901 66.87 78.066 66.71 78.104 66.506z"}),e("path",{d:"M59.568 35.385c-4.667 1.814-9.219 3.433-13.06 4.635-7.805 2.444-29.16 9.06-42.06 17.4l1.08.42c7.86-4.44 12.969-5.835 17.88-7.38 5.34-1.68 22.603-5.72 30.42-7.92 2.641-.743 5.734-1.716 9.01-2.9-.762-1.063-1.566-2.129-2.412-3.193C60.143 36.088 59.856 35.734 59.568 35.385zM65.27 43.244c-1.13.763-2.077 1.372-2.74 1.756-3.84 2.22-22.561 15-26.82 17.94s-16.08 14.1-19.56 17.34l-.12 1.319c11.22-10.08 14.74-12.566 19.2-15.959 5.52-4.2 16.939-11.97 20.82-14.46 3.71-2.38 7.056-4.569 10.059-6.572-.049-.082-.098-.164-.147-.247C65.736 43.99 65.505 43.618 65.27 43.244zM82.809 24.72c-5.466 3.204-14.081 7.071-22.439 10.352.2.245.399.492.597.741.934 1.176 1.815 2.36 2.644 3.545 6.57-2.42 13.779-5.668 19.499-9.599-2.725 2.582-11.734 9.315-17.227 13.068.283.461.557.922.822 1.381 8.322-5.569 13.922-9.668 17.185-12.409 4.5-3.78 14.76-12.24 18.66-23.58C95.709 16.92 87.621 21.899 82.809 24.72z",fill:"#fc3d21"}),e("path",{d:"M44.884 54.939c-.885-1.114-2.109-2.606-3.028-3.763-1.229-1.547-2.366-3.11-3.408-4.671-.34.085-.679.17-1.018.255 1.258 1.963 2.655 3.923 4.177 5.839 1.112 1.4 2.123 2.527 2.641 3.228.105.142.313.456.594.874.324-.22.651-.442.981-.666C45.504 55.688 45.189 55.323 44.884 54.939zM51.344 60.803c-.727-.688-2.49-1.837-4.325-3.561-.405.278-.814.56-1.224.844 1.185 1.67 2.799 3.721 4.063 4.319C51.762 63.307 52.275 61.685 51.344 60.803zM60.967 35.813c-10.492-13.206-23.309-20.461-28.835-16.07-4.292 3.41-2.53 13.376 3.386 23.845.306-.105.609-.208.909-.31-5.971-10.2-7.605-19.679-3.557-22.896 5.087-4.042 17.37 3.241 27.558 16.064 2.109 2.654 3.963 5.318 5.533 7.915 6.012 9.95 7.857 18.948 3.703 22.621-1.271 1.124-5.155 1.565-10.243-.725-.071.089.043.33.132.389 4.392 1.766 8.599 2.439 10.723.752C75.38 63.342 71.459 49.019 60.967 35.813z"}),e("path",{d:"M15.969 37.38h6.72l5.64 9.57c0 0 0-6.93 0-7.47 0-.84-1.065-1.935-1.44-2.1.45 0 4.38 0 4.65 0-.285.075-1.2 1.185-1.2 2.1 0 .45 0 10.5 0 10.98 0 .675.975 1.605 1.44 1.965h-6.48l-5.73-9.615c0 0 0 7.17 0 7.56 0 .75.735 1.47 1.5 2.085h-4.95c.705-.3 1.38-1.245 1.44-1.995s0-10.425 0-10.845C17.559 38.7 16.674 37.95 15.969 37.38z"}),e("path",{d:"M77.439 52.425h8.94c-.495-.12-1.05-.705-1.35-1.485-.3-.78-5.04-13.56-5.04-13.56H76.59c-.964.694-1.997 1.426-3.1 2.197-.003.028-.006.056-.011.083-.148.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815c-.48-.54-.87-1.065-.78-1.665.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65C78.624 51.255 77.994 51.945 77.439 52.425zM73.509 47.07l1.68-5.49 2.22 5.49H73.509zM72.752 37.928c.247-.182.495-.365.742-.548h-1.305C72.319 37.5 72.534 37.689 72.752 37.928z"}),e("path",{d:"M38.559 50.79c.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65.105.615-.525 1.305-1.08 1.785h7.871c.164-.11.327-.22.49-.329-.305-.27-.586-.675-.771-1.156-.3-.78-5.04-13.56-5.04-13.56h-7.8c.375.345 1.455 1.275 1.29 2.28-.147.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815C38.859 51.915 38.469 51.39 38.559 50.79zM41.049 41.58l2.22 5.49h-3.9L41.049 41.58z"}),e("path",{d:"M65.748 44.848c-1.468.978-3.017 1.999-4.649 3.065.732.355 1.315.801 1.371 1.377.104 1.082-2.07 1.605-4.035 1.38-.393-.045-.779-.148-1.147-.286-.408.263-.82.528-1.238.796-.425.273-.941.609-1.53.997v1.553c.39-.765 1.243-1.45 1.905-1.485.285-.015 1.275.9 5.355.675 1.98-.109 5.805-2.22 5.745-4.65C67.489 46.834 66.739 45.714 65.748 44.848zM54.519 48.6v1.582c.361-.241.717-.478 1.066-.709C55.036 49.091 54.647 48.734 54.519 48.6zM64.353 43.855c-.38-.225-.765-.422-1.134-.596-1.92-.9-3.93-1.065-4.35-2.28-.296-.857.54-1.65 2.58-1.62 2.04.03 3.93 1.245 4.44 1.68v-3.87c-.15.15-.808.905-1.41.78-1.155-.24-3.12-.553-5.37-.54-2.58.015-4.8 2.009-4.875 4.53-.105 3.525 2.715 4.485 4.305 5.04.164.057.351.118.554.183 1.525-.992 2.731-1.756 3.437-2.163C63.004 44.726 63.625 44.334 64.353 43.855z"})]})]}),e("p",{className:"text-white font-thin",children:"NASA - EONET"})]})}),e("button",{onClick:()=>r(!c),"aria-controls":"sidebar","aria-expanded":c,className:"block lg:hidden",children:e("svg",{className:"fill-current",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",fill:""})})})]}),e("div",{className:"no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",children:e("nav",{className:"mt-5 py-4 px-4 lg:mt-9 lg:px-6",children:l("div",{children:[e("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"MENU"}),l("ul",{className:"mb-6 flex flex-col gap-1.5",children:[e("li",{children:l(i,{to:"/",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 \r
                    bg-graydark dark:bg-meta-4`,children:[e(v,{}),"Inicio"]})}),e("li",{children:l(i,{to:"/map",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 \r
                    bg-graydark dark:bg-meta-4`,children:[e(h,{}),"Mapa"]})}),e("li",{children:l(i,{to:"/last-events",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4
                    }`,children:[e(y,{}),"Eventos pasados"]})}),e("li",{children:l(i,{to:"/alerts",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4
                    }`,children:[e(x,{}),"Alertas"]})})]})]})})})]}),k=()=>{const[c,r]=o.useState(!1);return e("div",{className:"dark:bg-boxdark-2 dark:text-bodydark",children:l("div",{className:"flex h-screen overflow-hidden",children:[e(b,{sidebarOpen:c,setSidebarOpen:r}),l("div",{className:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",children:[e(u,{}),e("main",{children:e("div",{className:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",children:e(m,{})})})]})]})})};export{k as default};
