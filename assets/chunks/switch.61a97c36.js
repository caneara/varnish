import{E as o}from"./error.338bcd48.js";import{F as s}from"./Foundation.bb9efbfe.js";import{_ as i,r as l,o as d,c as u,a,t as c,f as p,n as f,b as m}from"../app.75163936.js";const v={mixins:[s],components:{"v-error":o},computed:{active(){return["1","true","yes","on",1,!0].includes(this.modelValue)}}},h={class:"varnish-switch varnish-font"},g={class:"varnish-container flex justify-between items-center"},b=["id","name","value"],_={class:"varnish-label font-semibold text-[13px] text-gray-600/[.75] dark:text-gray-400 tracking-wide uppercase mr-5"},k=["dusk","id"];function x(e,r,w,y,C,t){const n=l("v-error");return d(),u("div",h,[a("div",g,[a("input",{id:e.name,name:e.name,type:"hidden",value:t.active?1:0},null,8,b),a("label",_,c(e.label),1),a("button",{dusk:e.name,id:`toggle-${e.name}`,onClick:r[0]||(r[0]=p(B=>e.change(t.active?0:1),["prevent"])),class:f(["varnish-toggle w-[60px] h-[31px] relative transition-all duration-200 rounded-full cursor-pointer after:h-[25px] after:w-[25px] after:bg-white after:absolute after:transition-all after:duration-200 after:top-[3px] after:rounded-full",t.active?"varnish-active after:left-[32px] bg-emerald-600/[.80] dark:bg-emerald-600":"after:left-[3px] bg-gray-400/[.45] dark:bg-gray-700"])},null,10,k)]),m(n,{value:e.fault},null,8,["value"])])}var $=i(v,[["render",x]]);export{$ as S};