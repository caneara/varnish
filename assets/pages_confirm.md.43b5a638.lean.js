import{M as m}from"./chunks/modal.2a029478.js";import{B as C}from"./chunks/button.a93da770.js";import{U as f}from"./chunks/Utilities.fd907a34.js";import{_ as g,d as c,o as F,l as v,w as D,a as n,t as y,e as l,j as b,c as A,k as p,f as d,u as x}from"./app.9a5f1f00.js";import"./chunks/Foundation.9cb0dd39.js";const _={mixins:[f],components:{"v-button":C,"v-modal":m},emits:["cancel","continue"],props:{summary:{type:String,default:"Note that in most cases, this action is not reversible. If you need some help, then please contact support."},title:{type:String,default:"Are you sure you wish to proceed?"},visible:{type:Boolean,default:!1}}},w={class:"flex flex-col md:flex-row md:-m-6 md:-ml-7 md:-mb-7"},k=n("div",{class:"varnish-circle bg-yellow-500/[.30] dark:bg-yellow-800/[.50] h-[60px] w-[60px] min-w-[60px] flex justify-center items-center mx-auto rounded-full"},[n("i",{class:"varnish-icon fas fa-exclamation text-[30px] text-yellow-600"})],-1),B={class:"w-full mt-6 md:ml-7 md:mt-0"},E={class:"varnish-font-native varnish-title font-semibold text-[21px] text-gray-900 dark:text-white text-center md:text-left leading-snug mb-3"},T={class:"varnish-summary text-[17px] text-gray-500 dark:text-gray-400 text-center md:text-left leading-[1.6rem] mb-8"},S={class:"varnish-actions flex flex-col-reverse md:flex-row justify-end gap-x-4"};function q(o,s,e,a,i,t){const r=c("v-button"),h=c("v-modal");return F(),v(h,{dismiss:!1,visible:e.visible,class:"varnish-confirm"},{default:D(()=>[n("div",w,[k,n("div",B,[n("div",E,y(e.title),1),n("div",T,y(e.summary),1),n("div",S,[l(r,{mode:"link",color:"gray",label:"Cancel",class:"mt-1 md:mt-0",onClick:s[0]||(s[0]=u=>o.$emit("cancel")),id:"dialog_confirm_cancel"}),l(r,{color:"blue",mode:"outline",label:"Continue",onClick:s[1]||(s[1]=u=>o.$emit("continue")),id:"dialog_confirm_continue"})])])])]),_:1},8,["visible"])}const $=g(_,[["render",q]]),I=d("",6),N={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},j=d("",44),z=JSON.parse('{"title":"Confirm","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"summary","slug":"summary","link":"#summary","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"visible","slug":"visible","link":"#visible","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[{"level":3,"title":"cancel","slug":"cancel","link":"#cancel","children":[]},{"level":3,"title":"continue","slug":"continue","link":"#continue","children":[]}]},{"level":2,"title":"Inlining","slug":"inlining","link":"#inlining","children":[]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/confirm.md"}'),P={name:"pages/confirm.md"},H=Object.assign(P,{setup(o){let s=b(!1);return(e,a)=>{const i=c("ClientOnly");return F(),A("div",null,[I,n("div",N,[l(i,null,{default:D(()=>[l($,{visible:x(s),onCancel:a[0]||(a[0]=t=>p(s)?s.value=!1:s=!1),onContinue:a[1]||(a[1]=t=>p(s)?s.value=!1:s=!1)},null,8,["visible"])]),_:1}),n("button",{onClick:a[2]||(a[2]=t=>p(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Confirm ")]),j])}}});export{z as __pageData,H as default};