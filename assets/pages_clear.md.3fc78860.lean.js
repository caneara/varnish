import{U as c}from"./chunks/Utilities.fc44013c.js";import{_ as i,o as t,c as p,a as n,f as d,n as y,e as F,r as h,b as o,w as D,d as r}from"./app.6856244c.js";const u={mixins:[c],emits:["click"],props:{hover:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},filled:{type:Boolean,default:!1}}};function f(e,a,s,l,b,x){return e.automated()?F("",!0):(t(),p("div",{key:0,style:{transition:"all 0.4s ease, background-color 0s"},class:y([s.focus&&s.filled||s.hover&&s.filled?"opacity-100 z-[2]":"opacity-0 pointer-events-none","varnish-clear varnish-font w-[50px] h-[50px] bg-inherit flex justify-center items-center absolute top-0 right-0 rounded-r"])},[n("i",{title:"Clear this field",onClick:a[0]||(a[0]=d(w=>e.$emit("click"),["stop"])),class:"varnish-icon fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative left-[1.5px] cursor-pointer transition duration-300"})],2))}var g=i(u,[["render",f]]);const m=r("",7),v={class:"border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8"},C={class:"relative min-h-[50px] min-w-[50px]"},_=r("",32),T=JSON.parse('{"title":"Clear","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"filled","slug":"filled"},{"level":3,"title":"focus","slug":"focus"},{"level":3,"title":"hover","slug":"hover"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"click","slug":"click"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/clear.md"}'),A={name:"pages/clear.md"},q=Object.assign(A,{setup(e){return(a,s)=>{const l=h("ClientOnly");return t(),p("div",null,[m,n("div",v,[n("div",C,[o(l,null,{default:D(()=>[o(g,{focus:!0,filled:!0})]),_:1})])]),_])}}});export{T as __pageData,q as default};
