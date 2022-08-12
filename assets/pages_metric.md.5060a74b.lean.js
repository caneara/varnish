import{_ as d,o as i,c as y,a as s,t as l,n as c,r as u,b as o,w as h,d as F}from"./app.13598014.js";const C={data(){return{trends:{down:{color:"text-rose-700/[.90] dark:text-rose-400",icon:"fa-arrow-down"},same:{color:"text-sky-600 dark:text-sky-400",icon:"fa-arrows-rotate"},up:{color:"text-emerald-600 dark:text-emerald-400",icon:"fa-arrow-up"}}}},props:{id:{type:String,default:""},currency:{type:String,default:"USD"},current:{type:Number,default:0},label:{type:String,default:"Label"},locale:{type:String,default:"en-US"},period:{type:String,default:""},previous:{type:Number,default:0},type:{type:String,default:"integer"}},computed:{direction(){return this.percentage===0?"same":this.percentage>0?"up":"down"},formatted(){let a={compactDisplay:"short",notation:"compact"};return this.type==="financial"&&(a.currency=this.currency,a.style="currency"),new Intl.NumberFormat(this.locale,a).format(this.current)},percentage(){return(this.current-this.previous)/this.previous*100}}},m=["id","dusk"],g={class:"varnish-label font-medium text-[13px] text-gray-500/[.75] dark:text-gray-500 uppercase mb-[14px]"},v={class:"varnish-summary flex"},A={class:"varnish-current font-[550] text-[35px] text-gray-800 dark:text-gray-300 -tracking-[1px] mr-6"},f={class:"varnish-direction flex items-center font-semibold mb-[5px]"},b={class:"varnish-percentage text-[15px] whitespace-nowrap"},_={class:"varnish-period text-[12.5px] text-gray-600 dark:text-gray-500 -tracking-[.2px]"};function B(a,D,e,t,r,n){return i(),y("div",{id:e.id,dusk:e.id,class:"varnish-metric varnish-font bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full flex flex-col rounded-lg p-6 md:p-8"},[s("span",g,l(e.label),1),s("div",v,[s("span",A,l(n.formatted),1),s("div",{class:c([r.trends[n.direction].color,"varnish-performance flex flex-col"])},[s("div",f,[s("i",{class:c(["varnish-icon fas text-[13px] mr-1",r.trends[n.direction].icon])},null,2),s("span",b,l(Math.abs(n.percentage)>999?"999":Math.abs(n.percentage))+"% ",1)]),s("span",_," vs. "+l(e.period),1)],2)])],8,m)}var p=d(C,[["render",B]]);const x=F("",6),S={class:"bg-gray-100 dark:bg-black rounded-md p-6 mt-8"},T={class:"w-full grid grid-cols-2 gap-6"},w=F("",46),q=JSON.parse('{"title":"Metric","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"currency","slug":"currency"},{"level":3,"title":"current","slug":"current"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"label","slug":"label"},{"level":3,"title":"locale","slug":"locale"},{"level":3,"title":"period","slug":"period"},{"level":3,"title":"previous","slug":"previous"},{"level":3,"title":"type","slug":"type"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/metric.md"}'),k={name:"pages/metric.md"},M=Object.assign(k,{setup(a){return(D,e)=>{const t=u("ClientOnly");return i(),y("div",null,[x,s("div",S,[s("div",T,[o(t,null,{default:h(()=>[o(p,{label:"Current MRR",type:"financial",period:"May",current:534,previous:1e3}),o(p,{label:"Current MRR",type:"financial",period:"June",current:1e3,previous:1e3}),o(p,{label:"Current MRR",type:"financial",period:"July",current:2168,previous:1e3})]),_:1})])]),w])}}});export{q as __pageData,M as default};