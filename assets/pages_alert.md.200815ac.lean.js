import{_ as u,o as p,c as r,a as i,n as o,t as g,b as c,r as m,d as C,e,w as a,f as F,g as t}from"./app.8e352128.js";const f={data(){return{display:!0,types:{danger:{background:"bg-red-500/[.12] dark:bg-red-700/[.40]",border:"border border-red-600/[.40] dark:border-none",content:"text-gray-600/[.90] dark:text-gray-400",icon:"fa-circle-exclamation text-red-600/80 dark:text-red-500",title:"text-gray-800 dark:text-gray-300"},info:{background:"bg-sky-500/10 dark:bg-sky-700/[.40]",border:"border border-sky-600/[.40] dark:border-none",content:"text-gray-600/[.90] dark:text-gray-400",icon:"fa-circle-info text-sky-600/80 dark:text-sky-500",title:"text-gray-800 dark:text-gray-300"},question:{background:"bg-purple-500/[.12] dark:bg-purple-700/[.40]",border:"border border-purple-700/[.30] dark:border-none",content:"text-gray-600/[.90] dark:text-gray-400",icon:"fa-question-circle text-purple-600/80 dark:text-purple-500",title:"text-gray-800 dark:text-gray-300"},success:{background:"bg-emerald-500/[.12] dark:bg-emerald-700/[.40]",border:"border border-emerald-600/[.40] dark:border-none",content:"text-gray-600/[.90] dark:text-gray-400",icon:"fa-check-circle text-emerald-600/80 dark:text-emerald-500",title:"text-gray-800 dark:text-gray-300"},warning:{background:"bg-orange-100/60 dark:bg-orange-700/[.40]",border:"border border-yellow-600/[.40] dark:border-none",content:"text-gray-600/[.90] dark:text-gray-400",icon:"fa-triangle-exclamation text-yellow-600/80 dark:text-yellow-500",title:"text-gray-800 dark:text-gray-300"}}}},props:{dismiss:{type:Boolean,default:!1},id:{type:String,default:""},title:{type:String,default:""},type:{type:String,default:"info"}},created(){this.display=!localStorage.getItem(`varnish_hide_alert_${this.id}`)},methods:{hide(){this.dismiss&&(this.display=!1,localStorage.setItem(`varnish_hide_alert_${this.id}`,1))}}},b={key:0,class:"varnish-header flex items-center text-gray-600 leading-normal px-6 mb-4"},v={class:"varnish-slot"};function x(y,d,s,h,l,D){return l.display?(p(),r("div",{key:0,class:o(["varnish-alert varnish-font relative rounded-md",[l.types[s.type].background,s.title?"py-6":"py-5",s.title?"":l.types[s.type].border]])},[s.title?(p(),r("div",b,[i("i",{class:o([l.types[s.type].icon,"varnish-icon fas text-[18px] relative top-[0.5px] mr-3"])},null,2),i("h6",{class:o([l.types[s.type].title,"varnish-title varnish-font-native text-[16px] mb-0"])},g(s.title),3)])):c("",!0),i("div",{class:o(["varnish-content text-left leading-normal -mb-[2px]",[l.types[s.type].content,s.title?"px-6":"flex items-center px-5"]])},[s.title?c("",!0):(p(),r("i",{key:0,class:o([l.types[s.type].icon,"varnish-icon fas text-[21px] relative mr-4"])},null,2)),i("div",v,[m(y.$slots,"default")])],2),s.dismiss?(p(),r("i",{key:1,onClick:d[0]||(d[0]=w=>D.hide()),title:"Hide this notice",class:"varnish-dismiss fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 absolute top-3 right-3 transition duration-300 cursor-pointer"})):c("",!0)],2)):c("",!0)}const n=u(f,[["render",x]]),A=F("",6),_={class:"flex flex-col gap-y-6 mt-8"},k=F("",34),T=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"dismiss","slug":"dismiss","link":"#dismiss","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]},{"level":2,"title":"Slot","slug":"slot","link":"#slot","children":[]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/alert.md"}'),B={name:"pages/alert.md"},q=Object.assign(B,{setup(y){return(d,s)=>{const h=C("ClientOnly");return p(),r("div",null,[A,i("div",_,[e(h,null,{default:a(()=>[e(n,{type:"info"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{type:"question"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{type:"success"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{type:"warning"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{type:"danger"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{title:"Information",type:"info"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{title:"Question",type:"question"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{title:"Success",type:"success"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{title:"Warning",type:"warning"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1}),e(n,{title:"Danger",type:"danger"},{default:a(()=>[t("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),_:1})]),_:1})]),k])}}});export{T as __pageData,q as default};
