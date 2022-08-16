import{L as d}from"./chunks/label.34028bd9.js";import{U as F}from"./chunks/Utilities.0e2b559b.js";import{F as D}from"./chunks/Foundation.ccff8032.js";import{_ as h,r as t,o as p,c as r,a as n,b as e,g as u,w as g,d as c,u as m}from"./app.5ad54664.js";import"./chunks/optional.8cf49faf.js";const C={mixins:[F,D],components:{"v-label":d},props:{value:{type:String,default:""}}},v={class:"varnish-sticker varnish-font w-full"},f={class:"varnish-container bg-white dark:bg-gray-800 border border-dashed border-gray-400/[.80] dark:border-gray-500/[.80] rounded relative"},_=["id","name","value"];function A(s,l,a,i,o,T){const y=t("v-label");return p(),r("div",v,[n("div",f,[n("input",{id:s.name,type:"text",name:s.name,value:a.value,readonly:!0,class:"varnish-content w-full bg-inherit font-[470] text-gray-900 dark:text-gray-400 -tracking-[.2px] text-ellipsis overflow-hidden rounded appearance-none px-3 pt-[25px] pb-[7px]"},null,8,_),e(y,{value:s.label,focus:!1,filled:!s.blank(a.value)},null,8,["value","filled"])])])}var b=h(C,[["render",A]]);const k=c("",6),x={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},B=c("",18),N=JSON.parse('{"title":"Sticker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Mixins","slug":"mixins"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"value","slug":"value"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/sticker.md"}'),S={name:"pages/sticker.md"},q=Object.assign(S,{setup(s){let l=u("john@example.com");return(a,i)=>{const o=t("ClientOnly");return p(),r("div",null,[k,n("div",x,[e(o,null,{default:g(()=>[e(b,{label:"Email",value:m(l)},null,8,["value"])]),_:1})]),B])}}});export{N as __pageData,q as default};