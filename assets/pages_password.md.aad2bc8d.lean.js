import{C}from"./chunks/clear.d7ff4bb5.js";import{E as g}from"./chunks/error.6694ccd6.js";import{L as f}from"./chunks/label.eca9cc53.js";import{U as v}from"./chunks/Utilities.fd907a34.js";import{F as A}from"./chunks/Foundation.9cb0dd39.js";import{_ as w,d as p,o as r,c as i,a as o,n as y,e as l,h as b,b as F,g as B,t as k,j as x,w as _,f as h,u as T,k as V}from"./app.9a5f1f00.js";import"./chunks/optional.df99d86f.js";const P={mixins:[v,A],components:{"v-clear":C,"v-error":g,"v-label":f},data(){return{characters:["abcdefghijklm","0123456789","!@%^&*_-+=","NOPQRSTUVWXYZ"],password:""}},props:{generate:{type:Boolean,default:!0}},methods:{clear(){this.password="",this.change("")},createRandomPassword(){this.clear(),this.characters.forEach(s=>{for(var a=0;a<5;a++)this.password+=s.charAt(Math.floor(Math.random()*s.length))}),this.password=[...this.password].sort(()=>Math.random()-.5).join(""),this.change(this.password)}}},S={class:"varnish-password varnish-font w-full min-w-[250px]"},E=["id","name","dusk","value","placeholder","autocomplete"],N={key:0,class:"varnish-generated font-semibold text-[14px] text-purple-700 dark:text-purple-300 mt-2"},M=o("span",{class:"text-gray-700 dark:text-gray-300 mr-[2px]"}," Password: ",-1);function j(s,a,d,c,t,n){const D=p("v-label"),u=p("v-clear"),m=p("v-error");return r(),i("div",S,[o("div",{onMouseover:a[5]||(a[5]=e=>s.hover=!0),onMouseout:a[6]||(a[6]=e=>s.hover=!1),class:"varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300"},[o("input",{id:s.name,name:s.name,dusk:s.name,type:"password",value:s.modelValue,onFocus:a[0]||(a[0]=e=>s.focus=!0),onFocusout:a[1]||(a[1]=e=>s.focus=!1),placeholder:s.placeholder,autocomplete:s.autocomplete,onInput:a[2]||(a[2]=e=>s.change(e.target.value)),class:y([s.hover||s.focus?"pr-[50px]":"pr-3","varnish-input w-full bg-inherit font-medium text-[17px] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[6px]"])},null,42,E),l(D,{icon:s.icon,value:s.label,focus:s.focus,optional:!1,filled:!s.blank(s.modelValue)},null,8,["icon","value","focus","filled"]),l(u,{focus:s.focus,hover:s.hover,onClick:a[3]||(a[3]=e=>n.clear()),filled:!s.blank(s.modelValue)},null,8,["focus","hover","filled"]),d.generate&&!s.automated()?(r(),i("div",{key:0,style:{transition:"all 0.4s ease, background-color 0s"},class:y(["varnish-generate w-[50px] h-[51px] flex justify-center items-center absolute top-0 right-0 rounded-r",s.focus&&s.blank(s.modelValue)||s.hover&&s.blank(s.modelValue)?"opacity-100 z-[2]":"opacity-0 pointer-events-none"])},[o("i",{title:"Generate a random password",onClick:a[4]||(a[4]=b(e=>n.createRandomPassword(),["stop"])),class:"varnish-icon fas fa-plus text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative top-[.5px] left-[1.5px] cursor-pointer transition duration-300"})],2)):F("",!0)],32),s.blank(t.password)?F("",!0):(r(),i("div",N,[M,B(k(t.password),1)])),l(m,{value:s.fault},null,8,["value"])])}const I=w(P,[["render",j]]),R=h("",6),U={class:"bg-gray-100 dark:bg-black flex justify-center gap-x-3 rounded-md p-6 mt-8"},$=h("",18),Q=JSON.parse('{"title":"Password","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"generate","slug":"generate","link":"#generate","children":[]}]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/password.md"}'),q={name:"pages/password.md"},W=Object.assign(q,{setup(s){let a=x("");return(d,c)=>{const t=p("ClientOnly");return r(),i("div",null,[R,o("div",U,[l(t,null,{default:_(()=>[l(I,{icon:"fas fa-key",label:"Current password",modelValue:T(a),"onUpdate:modelValue":c[0]||(c[0]=n=>V(a)?a.value=n:a=n)},null,8,["modelValue"])]),_:1})]),$])}}});export{Q as __pageData,W as default};
