import{L as d}from"./chunks/label.b7f7fcde.js";import{_,r as n,o as a,c as i,a as t,b as e,w as m}from"./app.f9f0b5f4.js";import"./chunks/optional.5f5548b9.js";const p={components:{"v-label":d}},h={class:"demo py-[40px] px-[64px]"},u=t("h1",{class:"text-[32px] font-semibold tracking-[-0.7px] mb-12"}," Label - Playground ",-1),f=t("h2",{class:"font-semibold mt-10 mb-6"}," No Icon, Required ",-1),x={class:"relative min-h-[50px]"},b=t("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Required ",-1),v={class:"relative min-h-[50px]"},g=t("h2",{class:"font-semibold mt-10 mb-6"}," No Icon, Optional ",-1),y={class:"relative min-h-[50px]"},F=t("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional ",-1),O={class:"relative min-h-[50px]"},I=t("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Custom Text ",-1),C={class:"relative min-h-[50px]"},N=t("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Focused ",-1),L={class:"relative min-h-[50px]"},P=t("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Filled ",-1),$={class:"relative min-h-[50px]"};function k(l,c,r,s,R,w){const o=n("v-label");return a(),i("div",h,[u,f,t("div",x,[e(o,{icon:"",text:"First name"})]),b,t("div",v,[e(o,{text:"First name",icon:"fas fa-user"})]),g,t("div",y,[e(o,{icon:"",optional:!0,text:"First name"})]),F,t("div",O,[e(o,{optional:!0,text:"First name",icon:"fas fa-user"})]),I,t("div",C,[e(o,{optional:!0,text:"First name",icon:"fas fa-user",optionalText:"Not Required"})]),N,t("div",L,[e(o,{focus:!0,optional:!0,text:"First name",icon:"fas fa-user"})]),P,t("div",$,[e(o,{filled:!0,optional:!0,text:"First name",icon:"fas fa-user"})])])}var q=_(p,[["render",k]]);const D=JSON.parse('{"title":"Label Playground","description":"","frontmatter":{"title":"Label Playground","layout":"page"},"headers":[],"relativePath":"playgrounds/label/index.md"}'),B={name:"playgrounds/label/index.md"},E=Object.assign(B,{setup(l){return(c,r)=>{const s=n("ClientOnly");return a(),i("div",null,[e(s,null,{default:m(()=>[e(q)]),_:1})])}}});export{D as __pageData,E as default};
