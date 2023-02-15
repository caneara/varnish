import{M as h}from"./chunks/modal.3a39ca5c.js";import{B as u}from"./chunks/button.0d912fe6.js";import{U as m}from"./chunks/Utilities.fd907a34.js";import{_ as g,d as l,o as r,l as C,w as y,a,e as o,j as v,c as f,k as c,f as F,u as b}from"./app.8e352128.js";import"./chunks/Foundation.9cb0dd39.js";const A={mixins:[m],components:{"v-button":u,"v-modal":h},emits:["close"],props:{message:{type:String,default:""},visible:{type:Boolean,default:!1}}},x={class:"flex flex-col md:flex-row md:-m-6 md:-mb-7"},_=a("div",{class:"varnish-circle bg-purple-500/[.30] dark:bg-purple-600/[.50] h-[60px] w-[60px] min-w-[60px] flex justify-center items-center mx-auto md:mx-0 rounded-full"},[a("i",{class:"varnish-icon fas fa-info text-[30px] text-purple-600 dark:text-purple-400 relative left-[0.5px] -top-[1px]"})],-1),k={class:"w-full mt-6 md:ml-7 md:mt-0"},w=["innerHTML"],B={class:"varnish-actions flex flex-col-reverse md:flex-row justify-end gap-x-4"};function T(t,s,e,n,p,i){const d=l("v-button"),D=l("v-modal");return r(),C(D,{dismiss:!1,visible:e.visible,class:"varnish-tip"},{default:y(()=>[a("div",x,[_,a("div",k,[a("div",{innerHTML:e.message,class:"varnish-message text-[17px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[1.6rem] md:mr-7 mb-8"},null,8,w),a("div",B,[o(d,{color:"blue",label:"Close",mode:"outline",id:"dialog_tip_close",onClick:s[0]||(s[0]=j=>t.$emit("close"))})])])])]),_:1},8,["visible"])}const E=g(A,[["render",T]]),S=F("",6),q={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},$=F("",34),O=JSON.parse('{"title":"Tip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"message","slug":"message","link":"#message","children":[]},{"level":3,"title":"visible","slug":"visible","link":"#visible","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[{"level":3,"title":"close","slug":"close","link":"#close","children":[]}]},{"level":2,"title":"Inlining","slug":"inlining","link":"#inlining","children":[]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/tip.md"}'),I={name:"pages/tip.md"},H=Object.assign(I,{setup(t){let s=v(!1);return(e,n)=>{const p=l("ClientOnly");return r(),f("div",null,[S,a("div",q,[o(p,null,{default:y(()=>[o(E,{visible:b(s),onClose:n[0]||(n[0]=i=>c(s)?s.value=!1:s=!1),message:"Eating an apple each day keeps the doctor away, but eat more than one and you might feel ill."},null,8,["visible"])]),_:1}),a("button",{onClick:n[1]||(n[1]=i=>c(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Tip ")]),$])}}});export{O as __pageData,H as default};