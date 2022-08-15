import{T as p}from"./chunks/textbox.abae17b5.js";import{_ as x,r as a,o as m,c as r,a as n,b as l,w as c}from"./app.5ad54664.js";import"./chunks/clear.dc238cd7.js";import"./chunks/Utilities.0e2b559b.js";import"./chunks/error.8dfb18c2.js";import"./chunks/label.b320dfbc.js";import"./chunks/optional.8cf49faf.js";import"./chunks/Foundation.ccff8032.js";const _={components:{"v-textbox":p},data(){return{one:"",two:"",three:"",four:"",input_content:"John",multi_line_content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, aperiam voluptas, labore error porro distinctio dolorem iure nam assumenda rerum laborum."}}},f={class:"demo py-[40px] px-[64px]"},b=n("h1",{class:"text-[32px] font-semibold -tracking-[.7px] mb-12"}," TextBox - Playground ",-1),V={class:"flex flex-col gap-y-4 max-w-[300px]"},h=n("h2",{class:"font-semibold mt-6"}," TextBox (plain) ",-1),B=n("h2",{class:"font-semibold mt-6"}," TextBox (with icon) ",-1),g=n("h2",{class:"font-semibold mt-6"}," TextBox (with custom label) ",-1),y=n("h2",{class:"font-semibold mt-6"}," TextBox (Multi Line) ",-1),T=n("h2",{class:"font-semibold mt-6"}," Populated TextBox (with custom label) ",-1),v=n("h2",{class:"font-semibold mt-6"}," Populated TextBox (Multi Line) ",-1);function w(u,e,d,i,o,C){const s=a("v-textbox");return m(),r("div",f,[b,n("div",V,[h,l(s,{modelValue:o.one,"onUpdate:modelValue":e[0]||(e[0]=t=>o.one=t)},null,8,["modelValue"]),B,l(s,{modelValue:o.two,"onUpdate:modelValue":e[1]||(e[1]=t=>o.two=t),icon:"fas fa-user"},null,8,["modelValue"]),g,l(s,{modelValue:o.three,"onUpdate:modelValue":e[2]||(e[2]=t=>o.three=t),label:"First name",icon:"fas fa-user"},null,8,["modelValue"]),y,l(s,{lines:5,modelValue:o.four,"onUpdate:modelValue":e[3]||(e[3]=t=>o.four=t),label:"Biography",icon:"fas fa-comment"},null,8,["modelValue"]),T,l(s,{label:"First name",icon:"fas fa-user",modelValue:o.input_content,"onUpdate:modelValue":e[4]||(e[4]=t=>o.input_content=t)},null,8,["modelValue"]),v,l(s,{lines:5,label:"Biography",icon:"fas fa-comment",modelValue:o.multi_line_content,"onUpdate:modelValue":e[5]||(e[5]=t=>o.multi_line_content=t)},null,8,["modelValue"])])])}var P=x(_,[["render",w]]);const D=JSON.parse('{"title":"TextBox Playground","description":"","frontmatter":{"title":"TextBox Playground","layout":"page"},"headers":[],"relativePath":"playgrounds/textbox/index.md"}'),U={name:"playgrounds/textbox/index.md"},E=Object.assign(U,{setup(u){return(e,d)=>{const i=a("ClientOnly");return m(),r("div",null,[l(i,null,{default:c(()=>[l(P)]),_:1})])}}});export{D as __pageData,E as default};
