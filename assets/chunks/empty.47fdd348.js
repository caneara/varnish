import{U as l}from"./Utilities.fc44013c.js";import{_ as d,o as a,c as n,n as c,e as s,a as r,t as o}from"../app.d9edfcf8.js";const m={mixins:[l],props:{actionCommand:{type:Function,default:null},actionLabel:{type:String,default:""},icon:{type:String,default:"fas fa-cubes"},message:{type:String,default:"There are no items to display"},title:{type:String,default:"Nothing to show"},visible:{type:Boolean,default:!1}}},y={key:0,class:"varnish-empty varnish-font border border-dashed border-gray-300 dark:border-gray-500 w-full flex flex-col justify-center items-center rounded p-8 md:p-10"},x={class:"varnish-title font-semibold text-[20px] text-gray-900 dark:text-gray-300 tracking-tight mb-[5px]"},f={class:"varnish-message text-15px text-gray-700 dark:text-gray-400 text-center leading-normal max-w-450px"};function u(e,i,t,k,g,b){return t.visible?(a(),n("div",y,[e.blank(t.icon)?s("",!0):(a(),n("i",{key:0,class:c([t.icon,"varnish-icon text-[40px] text-sky-600/[.60] dark:text-sky-500/[.50] pt-1 mb-7"])},null,2)),r("span",x,o(t.title),1),r("span",f,o(t.message),1),!e.blank(t.actionLabel)&&!e.blank(t.actionCommand)?(a(),n("span",{key:1,onClick:i[0]||(i[0]=p=>t.actionCommand()),class:"varnish-action font-semibold text-sky-600 dark:text-sky-400 hover:text-rose-700 dark:hover:text-rose-400 cursor-pointer transition duration-300 mt-4"},o(t.actionLabel),1)):s("",!0)])):s("",!0)}var _=d(m,[["render",u]]);export{_ as E};
