import{_ as D,o as t,c as r,a as l,n as i,t as d,r as h,b as a,w as u,d as F}from"./app.867844b7.js";const m={data(){return{colors:{green:"varnish-green text-green-600 dark:text-green-500",yellow:"varnish-yellow text-yellow-600 dark:text-yellow-500",red:"varnish-red text-red-600 dark:text-red-500"}}},props:{maximum:{type:Number,default:100},value:{type:Number,default:0}},computed:{percentage(){let o=parseInt(this.value/this.maximum*100);return o>=100?100:o}}},C={class:"varnish-remaining varnish-font flex items-center justify-center overflow-hidden rounded-full"},g={class:"varnish-ring w-[30px] h-[30px]"},v=l("circle",{r:"12",cx:"15",cy:"15","stroke-width":"2",fill:"transparent",stroke:"currentColor",class:"varnish-track text-gray-300 dark:text-gray-600"},null,-1),A=["stroke-dasharray","stroke-dashoffset"];function f(o,y,p,c,s,n){return t(),r("div",C,[(t(),r("svg",g,[v,l("circle",{r:"12",cx:"15",cy:"15","stroke-width":"2",fill:"transparent",stroke:"currentColor",class:i(["varnish-indicator",n.percentage<=75?s.colors.green:n.percentage<=90?s.colors.yellow:s.colors.red]),transform:"rotate(-90 15 15)","stroke-dasharray":12*2*Math.PI,"stroke-dashoffset":(100-n.percentage)/100*(12*2*Math.PI)},null,10,A)])),l("span",{class:i(["varnish-figure font-semibold text-[12px] absolute",n.percentage<=75?s.colors.green:n.percentage<=90?s.colors.yellow:s.colors.red])},d(p.maximum-p.value),3)])}var e=D(m,[["render",f]]);const _=F("",7),B={class:"border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8"},x={class:"flex gap-3 relative min-h-[50px]"},b=F("",22),T=JSON.parse('{"title":"Remaining","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"maximum","slug":"maximum"},{"level":3,"title":"value","slug":"value"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/remaining.md"}'),w={name:"pages/remaining.md"},S=Object.assign(w,{setup(o){return(y,p)=>{const c=h("ClientOnly");return t(),r("div",null,[_,l("div",B,[l("div",x,[a(c,null,{default:u(()=>[a(e,{value:5,maximum:10}),a(e,{value:7,maximum:10}),a(e,{value:8,maximum:10}),a(e,{value:10,maximum:10}),a(e,{value:11,maximum:10})]),_:1})])]),b])}}});export{T as __pageData,S as default};
