import{U as o}from"./Utilities.1320657d.js";import{_ as r,o as s,c as i,a as n,f as l,n as c,e as f}from"../app.9cb28df7.js";const d={mixins:[o],emits:["click"],props:{hover:{type:Boolean,default:!1},filled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1}}};function p(t,a,e,u,m,y){return t.automated()?f("",!0):(s(),i("div",{key:0,style:{transition:"all 0.4s ease, background-color 0s"},class:c([e.focus&&e.filled||e.hover&&e.filled?"opacity-100 z-[2]":"opacity-0 pointer-events-none","varnish-clear varnish-font w-[50px] h-[51px] flex justify-center items-center absolute top-0 right-0 transition duration-300 rounded-r"])},[n("i",{title:"Clear this field",onClick:a[0]||(a[0]=l(v=>t.$emit("click"),["stop"])),class:"varnish-icon fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative top-[.5px] left-[1.5px] cursor-pointer transition duration-300"})],2))}const k=r(d,[["render",p]]);export{k as C};
