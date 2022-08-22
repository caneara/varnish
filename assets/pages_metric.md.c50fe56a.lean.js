import{_ as d,o as i,c as y,a as s,t as l,n as c,r as u,b as o,w as h,d as F}from"./app.aa448a5c.js";const C={data(){return{trends:{down:{color:"bg-rose-50 text-rose-600/[.90] dark:bg-rose-500/[.50] dark:text-rose-100",icon:"fa-arrow-trend-down"},same:{color:"bg-sky-50 text-sky-500 dark:bg-sky-500/[.40] dark:text-sky-100",icon:"fa-arrows-rotate"},up:{color:"bg-emerald-50 text-emerald-600/[.90] dark:bg-emerald-500/[.40] dark:text-emerald-100",icon:"fa-arrow-trend-up"}}}},props:{id:{type:String,default:""},currency:{type:String,default:"USD"},current:{type:Number,default:0},label:{type:String,default:"Label"},locale:{type:String,default:"en-US"},period:{type:String,default:""},previous:{type:Number,default:0},type:{type:String,default:"integer"}},computed:{direction(){return this.percentage===0?"same":this.percentage>0?"up":"down"},formatted(){let a={compactDisplay:"short",notation:"compact"};return this.type==="financial"&&(a.currency=this.currency,a.style="currency"),new Intl.NumberFormat(this.locale,a).format(this.current)},percentage(){return(this.current-this.previous)/this.previous*100}}},m=["id","dusk"],g={class:"varnish-label font-medium text-[13px] text-gray-500/[.75] dark:text-gray-500 uppercase mb-4"},v={class:"varnish-summary flex items-center"},A={class:"varnish-current font-semibold text-[35px] text-gray-700 dark:text-gray-300 mr-6"},f={class:"varnish-performance flex flex-col"},b={class:"varnish-percentage text-[13px] whitespace-nowrap"},_={class:"varnish-period font-medium text-[12px] text-gray-400 dark:text-gray-500 pl-[2px] pt-[5px]"};function B(a,D,e,t,r,n){return i(),y("div",{id:e.id,dusk:e.id,class:"varnish-metric varnish-font bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full flex flex-col rounded-lg p-6 md:p-8"},[s("span",g,l(e.label),1),s("div",v,[s("span",A,l(n.formatted),1),s("div",f,[s("div",{class:c([r.trends[n.direction].color,"varnish-direction flex items-center gap-2 font-semibold rounded-full px-2 py-[3px]"])},[s("i",{class:c([r.trends[n.direction].icon,"varnish-icon fas text-[13px]"])},null,2),s("span",b,l(Math.abs(n.percentage)>999?"999":Math.abs(n.percentage))+"% ",1)],2),s("span",_," vs. "+l(e.period),1)])])],8,m)}var p=d(C,[["render",B]]);const x=F("",6),S={class:"bg-gray-100 dark:bg-black rounded-md p-6 mt-8"},T={class:"w-full grid grid-cols-1 md:grid-cols-2 gap-6"},w=F("",46),q=JSON.parse('{"title":"Metric","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"currency","slug":"currency"},{"level":3,"title":"current","slug":"current"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"label","slug":"label"},{"level":3,"title":"locale","slug":"locale"},{"level":3,"title":"period","slug":"period"},{"level":3,"title":"previous","slug":"previous"},{"level":3,"title":"type","slug":"type"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/metric.md"}'),k={name:"pages/metric.md"},M=Object.assign(k,{setup(a){return(D,e)=>{const t=u("ClientOnly");return i(),y("div",null,[x,s("div",S,[s("div",T,[o(t,null,{default:h(()=>[o(p,{label:"Current MRR",type:"financial",period:"May",current:534,previous:1e3}),o(p,{label:"Current MRR",type:"financial",period:"June",current:1e3,previous:1e3}),o(p,{label:"Current MRR",type:"financial",period:"July",current:2168,previous:1e3})]),_:1})])]),w])}}});export{q as __pageData,M as default};
