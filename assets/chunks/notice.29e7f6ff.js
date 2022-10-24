import{U as c}from"./Utilities.1320657d.js";import{_ as b,o as t,c as a,a as n,n as o,t as m,e as d,j as g}from"../app.accd5b91.js";const k={mixins:[c],data(){return{display:!0,modes:{opaque:{danger:{border:"border-red-600/[.40] dark:border-none",content:"bg-red-500/[.05] dark:bg-red-700/[.30] text-red-700/[.90] dark:text-red-300",icon:"fa-circle-exclamation",tab:"bg-red-600/[.40] dark:bg-red-700/[.30]"},info:{border:"border-sky-600/[.40] dark:border-none",content:"bg-sky-500/[.05] dark:bg-sky-700/[.30] border-sky-500 text-sky-700/[.90] dark:text-blue-300",icon:"fa-circle-info",tab:"bg-sky-600/[.40] dark:bg-sky-700/[.30]"},question:{border:"border-purple-700/[.30] dark:border-none",content:"bg-purple-500/[.05] dark:bg-purple-700/[.30] text-purple-800/[.80] dark:text-purple-300",icon:"fa-question-circle",tab:"bg-purple-700/[.30] dark:bg-purple-700/[.30]"},success:{border:"border-emerald-600/[.40] dark:border-none",content:"bg-emerald-500/[.05] dark:bg-emerald-700/[.30] text-emerald-700/[.90] dark:text-emerald-400",icon:"fa-check-circle",tab:"bg-emerald-600/[.40] dark:bg-emerald-700/[.30]"},warning:{border:"border-yellow-600/[.40] dark:border-none",content:"bg-yellow-500/[.05] dark:bg-yellow-700/[.30] text-yellow-700 dark:text-orange-300",icon:"fa-triangle-exclamation",tab:"bg-yellow-600/[.40] dark:bg-yellow-700/[.30]"}},transparent:{danger:{content:"bg-transparent text-red-700 dark:text-red-300",border:"border-red-500/[.40] dark:border-red-700/[.60]",tab:"bg-red-600/[.40]",icon:"fa-circle-exclamation"},info:{border:"border-sky-600/[.40] dark:border-sky-700/[.60]",content:"bg-transparent text-sky-700 dark:text-blue-300",icon:"fa-circle-info",tab:"bg-sky-600/[.40]"},question:{border:"border-purple-700/[.30] dark:border-purple-700/[.60]",content:"bg-transparent text-purple-800/[.80] dark:text-purple-400",icon:"fa-question-circle",tab:"bg-purple-600/[.40]"},success:{border:"border-emerald-600/[.40] dark:border-emerald-700/[.60]",content:"bg-transparent text-emerald-700 dark:text-emerald-400",icon:"fa-check-circle",tab:"bg-emerald-600/[.40]"},warning:{border:"border-yellow-600/[.40] dark:border-yellow-700/[.60]",content:"bg-transparent text-yellow-700 dark:text-orange-300",icon:"fa-triangle-exclamation",tab:"bg-yellow-600/[.40]"}}}}},props:{dismiss:{type:Boolean,default:!1},format:{type:String,default:"tab"},id:{type:String,default:""},mode:{type:String,default:"opaque"},type:{type:String,default:"info"}},created(){this.display=!localStorage.getItem(`varnish_hide_notice_${this.id}`)},methods:{hide(){!this.dismiss||(this.display=!1,localStorage.setItem(`varnish_hide_notice_${this.id}`,1))}}},p={key:0,class:"varnish-notice varnish-font"},y={class:"text-gray-600 dark:text-gray-400 leading-normal relative"};function u(s,i,e,x,r,l){return r.display?(t(),a("div",p,[n("div",{class:o(["varnish-container border rounded-md relative",[r.modes[e.mode][e.type].border,`varnish-${e.type}`]])},[e.format==="tab"?(t(),a("span",{key:0,class:o([r.modes[e.mode][e.type].tab,"varnish-tab absolute top-0 left-3 rounded-b font-bold text-[10px] text-white dark:text-gray-300 uppercase select-none px-2 pt-[3px] dark:pt-1 pb-1"])},m(e.type),3)):d("",!0),n("div",{class:o(["varnish-content rounded-md flex items-center",[r.modes[e.mode][e.type].content,e.format==="tab"?"pt-8 pb-4":"py-4",e.dismiss?"pl-5 pr-10":"px-5"]])},[e.format==="icon"?(t(),a("i",{key:0,class:o([r.modes[e.mode][e.type].icon,"varnish-icon fas text-[26px] opacity-[.50] ml-1 mr-[22px]"])},null,2)):d("",!0),n("div",y,[g(s.$slots,"default")])],2),e.dismiss?(t(),a("i",{key:1,onClick:i[0]||(i[0]=f=>l.hide()),title:"Hide this notice",class:"varnish-dismiss fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 absolute top-3 right-3 transition duration-300 cursor-pointer"})):d("",!0)],2)])):d("",!0)}const _=b(k,[["render",u]]);export{_ as N};