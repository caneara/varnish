import{_ as D,o as t,c as r,a,m as d,j as l,d as h,e as o,w as u,f as c,u as p}from"./app.65403d2d.js";const g={props:{maximum:{type:Number,default:100},value:{type:Number,default:0}}},m={class:"varnish-progress relative"},C={class:"varnish-progress-bar bg-gray-200 dark:bg-gray-500 w-full h-[8px] overflow-hidden relative rounded-[4px]"};function v(i,e,s,y,F,n){return t(),r("div",m,[a("div",C,[a("div",{style:d(`width: ${Math.round(s.value/s.maximum*100)}%`),class:"varnish-progress-step bg-sky-600/[.70] dark:bg-sky-400 h-[8px] rounded-[4px] rounded-r-none absolute top-0 left-0 transition-all duration-300"},null,4)])])}const _=D(g,[["render",v]]),A=c("",6),f={class:"flex flex-col gap-y-6 mt-8"},b=c("",19),k=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"maximum","slug":"maximum","link":"#maximum","children":[]},{"level":3,"title":"value","slug":"value","link":"#value","children":[]}]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/progress.md"}'),x={name:"pages/progress.md"},T=Object.assign(x,{setup(i){let e=l(50),s=l(100);return(y,F)=>{const n=h("ClientOnly");return t(),r("div",null,[A,a("div",f,[o(n,null,{default:u(()=>[o(_,{value:p(e),maximum:p(s)},null,8,["value","maximum"])]),_:1})]),b])}}});export{k as __pageData,T as default};
