import{L as d}from"./chunks/label.66ef5e0d.js";import{_,r as a,o as n,c as i,a as e,b as t,w as m}from"./app.0695267d.js";import"./chunks/Utilities.fc44013c.js";import"./chunks/optional.ddb5d112.js";const p={components:{"v-label":d}},u={class:"demo py-[40px] px-[64px]"},h=e("h1",{class:"text-[32px] font-semibold tracking-[-0.7px] mb-12"}," Label - Playground ",-1),f=e("h2",{class:"font-semibold mt-10 mb-6"}," No Icon, Required ",-1),v={class:"relative min-h-[50px]"},b=e("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Required ",-1),x={class:"relative min-h-[50px]"},g=e("h2",{class:"font-semibold mt-10 mb-6"}," No Icon, Optional ",-1),y={class:"relative min-h-[50px]"},F=e("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional ",-1),O={class:"relative min-h-[50px]"},I=e("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Custom Text ",-1),C={class:"relative min-h-[50px]"},N=e("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Focused ",-1),L={class:"relative min-h-[50px]"},P=e("h2",{class:"font-semibold mt-10 mb-6"}," Icon, Optional, Filled ",-1),$={class:"relative min-h-[50px]"};function k(l,c,r,s,R,w){const o=a("v-label");return n(),i("div",u,[h,f,e("div",v,[t(o,{icon:"",value:"First name"})]),b,e("div",x,[t(o,{value:"First name",icon:"fas fa-user"})]),g,e("div",y,[t(o,{icon:"",optional:!0,value:"First name"})]),F,e("div",O,[t(o,{optional:!0,value:"First name",icon:"fas fa-user"})]),I,e("div",C,[t(o,{optional:!0,value:"First name",icon:"fas fa-user",optionalText:"Not Required"})]),N,e("div",L,[t(o,{focus:!0,optional:!0,value:"First name",icon:"fas fa-user"})]),P,e("div",$,[t(o,{filled:!0,optional:!0,value:"First name",icon:"fas fa-user"})])])}var q=_(p,[["render",k]]);const E=JSON.parse('{"title":"Label Playground","description":"","frontmatter":{"title":"Label Playground","layout":"page"},"headers":[],"relativePath":"playgrounds/label/index.md"}'),B={name:"playgrounds/label/index.md"},J=Object.assign(B,{setup(l){return(c,r)=>{const s=a("ClientOnly");return n(),i("div",null,[t(s,null,{default:m(()=>[t(q)]),_:1})])}}});export{E as __pageData,J as default};
