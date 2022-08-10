import{C as m}from"./clear.a2c7989b.js";import{E as v}from"./error.27f3643b.js";import{L as f}from"./label.ef0ceaa4.js";import{U as g}from"./Utilities.fc44013c.js";import{F as b}from"./Foundation.0c17c038.js";import{_ as k,r as a,o as l,c as t,a as h,n as y,e as i,b as s}from"../app.13dcf22a.js";const C={mixins:[g,b],components:{"v-clear":m,"v-error":v,"v-label":f},props:{lines:{type:Number,default:1}}},$={class:"varnish-textbox varnish-font w-full"},w=["id","name","value","placeholder","autocomplete"],V=["id","name","rows","value","placeholder","autocomplete"];function F(e,o,r,T,c,B){const u=a("v-label"),p=a("v-clear"),d=a("v-error");return l(),t("div",$,[h("div",{onMouseover:o[7]||(o[7]=n=>e.hover=!0),onMouseout:o[8]||(o[8]=n=>e.hover=!1),class:"varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300"},[r.lines===1?(l(),t("input",{key:0,id:e.name,type:"text",name:e.name,value:e.modelValue,onFocus:o[0]||(o[0]=n=>e.focus=!0),onFocusout:o[1]||(o[1]=n=>e.focus=!1),placeholder:e.placeholder,autocomplete:e.autocomplete,onInput:o[2]||(o[2]=n=>e.change(n.target.value)),class:y([e.hover||e.focus?"pr-[50px]":"pr-3","varnish-control varnish-input w-full bg-inherit font-[470] text-gray-900 dark:text-gray-400 -tracking-[0.2px] text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[7px]"])},null,42,w)):i("",!0),r.lines!==1?(l(),t("textarea",{key:1,id:e.name,name:e.name,rows:r.lines,value:e.modelValue,onFocus:o[3]||(o[3]=n=>e.focus=!0),onFocusout:o[4]||(o[4]=n=>e.focus=!1),placeholder:e.placeholder,autocomplete:e.autocomplete,onInput:o[5]||(o[5]=n=>e.change(n.target.value)),class:"varnish-control varnish-textarea w-full bg-inherit font-470 text-gray-900 dark:text-gray-400 leading-[24px] -tracking-[0.2px] rounded appearance-none resize-none pl-3 pr-11 pt-[25px]"},`
            `,40,V)):i("",!0),s(u,{icon:e.icon,value:e.label,focus:e.focus,optional:e.optional,optionalText:e.optionalText,filled:!e.blank(e.modelValue)},null,8,["icon","value","focus","optional","optionalText","filled"]),s(p,{focus:e.focus,hover:e.hover,onClick:o[6]||(o[6]=n=>e.change("")),filled:!e.blank(e.modelValue)},null,8,["focus","hover","filled"])],32),s(d,{value:e.fault},null,8,["value"])])}var U=k(C,[["render",F]]);export{U as T};
