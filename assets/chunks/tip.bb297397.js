import{M as n}from"./modal.c7998700.js";import{B as r}from"./button.706a27ad.js";import{U as m}from"./Utilities.fd907a34.js";import{_ as d,r as o,o as c,h as p,w as x,a as e,t as f,b as _}from"../app.79d107b1.js";const v={mixins:[m],components:{"v-button":r,"v-modal":n},emits:["close"],props:{message:{type:String,default:""},visible:{type:Boolean,default:!1}}},u={class:"flex flex-col md:flex-row md:-m-6 md:-mb-7"},b=e("div",{class:"varnish-circle bg-purple-500/[.30] dark:bg-purple-600/[.50] h-[60px] w-[60px] min-w-[60px] flex justify-center items-center mx-auto md:mx-0 rounded-full"},[e("i",{class:"varnish-icon fas fa-info text-[30px] text-purple-600 dark:text-purple-400 relative left-[0.5px] -top-[1px]"})],-1),g={class:"mt-6 md:ml-7 md:mt-0"},h={class:"varnish-message text-[17px] text-gray-500 dark:text-gray-400 text-center md:text-left leading-[1.6rem] md:mr-7 mb-8"},y={class:"varnish-actions flex flex-col-reverse md:flex-row justify-end gap-x-4"};function C(i,t,s,k,w,B){const a=o("v-button"),l=o("v-modal");return c(),p(l,{dismiss:!1,visible:s.visible,class:"varnish-tip"},{default:x(()=>[e("div",u,[b,e("div",g,[e("div",h,f(s.message),1),e("div",y,[_(a,{color:"blue",label:"Close",mode:"outline",id:"dialog_tip_close",onClick:t[0]||(t[0]=$=>i.$emit("close"))})])])])]),_:1},8,["visible"])}const T=d(v,[["render",C]]);export{T};
