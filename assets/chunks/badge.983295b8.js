import{U as a}from"./Utilities.1320657d.js";import{_ as l,o as n,c as d,a as o,t as s,n as p,e as g}from"../app.ee44914a.js";const u={mixins:[a],data(){return{modes:{opaque:{blue:"bg-sky-500/[.15] dark:bg-sky-700 text-sky-700/[.80] dark:text-sky-200",green:"bg-emerald-500/[.15] dark:bg-emerald-700 text-emerald-700/[.80] dark:text-emerald-200",gray:"bg-gray-500/[.10] dark:bg-gray-700 text-gray-700/[.80] dark:text-gray-200",purple:"bg-purple-500/[.15] dark:bg-purple-700 text-purple-900/70 dark:text-purple-200",red:"bg-red-500/[.15] dark:bg-red-700 text-red-800/[.80] dark:text-red-200",yellow:"bg-yellow-500/[.15] dark:bg-yellow-600 text-yellow-700/[.80] dark:text-yellow-100"},transparent:{blue:"bg-transparent text-sky-600 dark:text-sky-400",green:"bg-transparent text-emerald-600 dark:text-emerald-400",gray:"bg-transparent text-gray-500 dark:text-gray-400",purple:"bg-transparent text-purple-600 dark:text-purple-400",red:"bg-transparent text-red-600 dark:text-red-400",yellow:"bg-transparent text-yellow-600 dark:text-yellow-400"}}}},props:{color:{type:String,default:"blue"},mode:{type:String,default:"opaque"},tooltip:{type:String,default:""},uppercase:{type:Boolean,default:!0},value:{type:String,default:""}}},x=["title"];function i(t,y,e,k,r,c){return t.blank(e.value)?g("",!0):(n(),d("div",{key:0,title:e.tooltip,class:"varnish-badge varnish-font"},[o("div",{class:p([[r.modes[e.mode][e.color],e.uppercase?"uppercase":""],"varnish-content inline-block rounded-full font-bold text-[11px] select-none whitespace-nowrap px-[10px] py-1"])},s(e.value),3)],8,x))}const f=l(u,[["render",i]]);export{f as B};