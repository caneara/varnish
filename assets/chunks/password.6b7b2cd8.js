import{C as c}from"./clear.a2c7989b.js";import{E as g}from"./error.27f3643b.js";import{L as b}from"./label.ef0ceaa4.js";import{U as k}from"./Utilities.fc44013c.js";import{F as w}from"./Foundation.0c17c038.js";import{_ as y,r as s,o as t,c as n,a,n as p,b as l,f as C,e as u,k as V,t as M}from"../app.13dcf22a.js";const P={mixins:[k,w],components:{"v-clear":c,"v-error":g,"v-label":b},data(){return{characters:["abcdefghijklm","0123456789","!@%^&*_-+=","NOPQRSTUVWXYZ"],password:""}},props:{generate:{type:Boolean,default:!0}},methods:{clear(){this.password="",this.change("")},createRandomPassword(){this.clear(),this.characters.forEach(e=>{for(var o=0;o<5;o++)this.password+=e.charAt(Math.floor(Math.random()*e.length))}),this.password=[...this.password].sort(()=>Math.random()-.5).join(""),this.change(this.password)}}},N={class:"varnish-password varnish-font w-full"},T=["id","name","value","placeholder","autocomplete"],$={key:0,class:"varnish-generated font-[650] text-[14px] text-emerald-700 dark:text-emerald-300 -tracking-[0.2px] mt-2"},B=a("span",{class:"mr-1"}," Password: ",-1);function E(e,o,m,F,i,d){const v=s("v-label"),f=s("v-clear"),h=s("v-error");return t(),n("div",N,[a("div",{onMouseover:o[5]||(o[5]=r=>e.hover=!0),onMouseout:o[6]||(o[6]=r=>e.hover=!1),class:"varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300"},[a("input",{id:e.name,name:e.name,type:"password",value:e.modelValue,onFocus:o[0]||(o[0]=r=>e.focus=!0),onFocusout:o[1]||(o[1]=r=>e.focus=!1),placeholder:e.placeholder,autocomplete:e.autocomplete,onInput:o[2]||(o[2]=r=>e.change(r.target.value)),class:p([e.hover||e.focus?"pr-[50px]":"pr-3","varnish-input w-full bg-inherit font-[470] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[7px]"])},null,42,T),l(v,{icon:e.icon,value:e.label,focus:e.focus,optional:e.optional,optionalText:e.optionalText,filled:!e.blank(e.modelValue)},null,8,["icon","value","focus","optional","optionalText","filled"]),l(f,{focus:e.focus,hover:e.hover,onClick:o[3]||(o[3]=r=>d.clear()),filled:!e.blank(e.modelValue)},null,8,["focus","hover","filled"]),m.generate&&!e.automated()?(t(),n("div",{key:0,style:{transition:"all 0.4s ease, background-color 0s"},class:p(["varnish-generate w-[50px] h-[51px] flex justify-center items-center absolute top-0 right-0 rounded-r",e.focus&&e.blank(e.modelValue)||e.hover&&e.blank(e.modelValue)?"opacity-100 z-[2]":"opacity-0 pointer-events-none"])},[a("i",{title:"Generate a random password",onClick:o[4]||(o[4]=C(r=>d.createRandomPassword(),["stop"])),class:"varnish-icon fas fa-cog text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative top-[1.5px] left-[1.5px] cursor-pointer transition duration-300"})],2)):u("",!0)],32),e.blank(i.password)?u("",!0):(t(),n("div",$,[B,V(M(i.password),1)])),l(h,{value:e.fault},null,8,["value"])])}var A=y(P,[["render",E]]);export{A as P};
