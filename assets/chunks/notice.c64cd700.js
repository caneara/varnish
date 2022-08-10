import{U as c}from"./Utilities.fc44013c.js";import{_ as b,o as a,c as d,a as n,n as r,t as s,e as o}from"../app.8a53bdf9.js";const m={mixins:[c],data(){return{display:!0,modes:{opaque:{danger:{border:"border-red-600/[.40] dark:border-none",content:"bg-red-500/[.05] dark:bg-red-700/[.30] text-red-700/[.90] dark:text-red-300",icon:"fa-circle-exclamation",tab:"bg-red-600/[.40] dark:bg-red-700/[.30]"},info:{border:"border-sky-600/[.40] dark:border-none",content:"bg-sky-500/[.05] dark:bg-sky-700/[.30] border-sky-500 text-sky-700/[.90] dark:text-blue-300",icon:"fa-circle-info",tab:"bg-sky-600/[.40] dark:bg-sky-700/[.30]"},success:{border:"border-emerald-600/[.40] dark:border-none",content:"bg-emerald-500/[.05] dark:bg-emerald-700/[.30] text-emerald-700/[.90] dark:text-emerald-400",icon:"fa-check-circle",tab:"bg-emerald-600/[.40] dark:bg-emerald-700/[.30]"},warning:{border:"border-yellow-600/[.40] dark:border-none",content:"bg-yellow-500/[.05] dark:bg-yellow-700/[.30] text-yellow-700 dark:text-orange-300",icon:"fa-triangle-exclamation",tab:"bg-yellow-600/[.40] dark:bg-yellow-700/[.30]"}},transparent:{danger:{content:"bg-transparent text-red-700 dark:text-red-300",border:"border-red-500/[.40] dark:border-red-700/[.60]",tab:"bg-red-600/[.40]",icon:"fa-circle-exclamation"},info:{border:"border-sky-600/[.40] dark:border-sky-700/[.60]",content:"bg-transparent text-sky-700 dark:text-blue-300",icon:"fa-circle-info",tab:"bg-sky-600/[.40]"},success:{border:"border-emerald-600/[.40] dark:border-emerald-700/[.60]",content:"bg-transparent text-emerald-700 dark:text-emerald-400",icon:"fa-check-circle",tab:"bg-emerald-600/[.40]"},warning:{border:"border-yellow-600/[.40] dark:border-yellow-700/[.60]",content:"bg-transparent text-yellow-700 dark:text-orange-300",icon:"fa-triangle-exclamation",tab:"bg-yellow-600/[.40]"}}}}},props:{dismiss:{type:Boolean,default:!1},format:{type:String,default:"tab"},id:{type:String,default:""},mode:{type:String,default:"opaque"},type:{type:String,default:"info"},value:{type:String,default:""}},created(){this.display=!localStorage.getItem(`varnish_hide_notice_${this.id}`)},methods:{hide(){!this.dismiss||(this.display=!1,localStorage.setItem(`varnish_hide_notice_${this.id}`,1))}}},g={key:0,class:"varnish-notice varnish-font"};function y(k,i,e,x,t,l){return t.display?(a(),d("div",g,[n("div",{class:r(["varnish-container border rounded-md relative",[t.modes[e.mode][e.type].border,`varnish-${e.type}`]])},[e.format==="tab"?(a(),d("span",{key:0,class:r([t.modes[e.mode][e.type].tab,"varnish-tab absolute top-0 left-3 rounded-b font-[650] text-[9.5px] text-white dark:text-gray-300 uppercase tracking-wider px-2 pt-[3px] pb-1"])},s(e.type),3)):o("",!0),n("div",{class:r([[t.modes[e.mode][e.type].content,e.format==="tab"?"px-5 pt-8 pb-4":"px-5 py-4"],"varnish-content rounded-md font-medium flex items-center -tracking-[.2px]"])},[e.format==="icon"?(a(),d("i",{key:0,class:r([t.modes[e.mode][e.type].icon,"varnish-icon fas text-[26px] opacity-[.50] ml-1 mr-[22px]"])},null,2)):o("",!0),n("div",{class:r(["leading-normal relative",e.format==="tab"?"":"top-[1px]"])},s(e.value),3)],2),e.dismiss?(a(),d("i",{key:1,onClick:i[0]||(i[0]=f=>l.hide()),title:"Hide this notice",class:"varnish-dismiss fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 absolute top-3 right-3 transition duration-300 cursor-pointer"})):o("",!0)],2)])):o("",!0)}var p=b(m,[["render",y]]);export{p as N};
