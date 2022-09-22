import{W as u}from"./chunks/writer.0b256203.js";import{_,r as i,o as p,c as a,a as l,b as s,w as g}from"./app.bed6644f.js";import"./chunks/_commonjsHelpers.f9a9caf5.js";import"./chunks/Dialog.2b150226.js";import"./chunks/share.79c9526d.js";import"./chunks/modal.8d04ec50.js";import"./chunks/Utilities.1320657d.js";import"./chunks/prompt.c98b41d1.js";import"./chunks/button.7616627b.js";import"./chunks/Foundation.d3ef9e4b.js";import"./chunks/textbox.07e86868.js";import"./chunks/clear.11a4f54c.js";import"./chunks/error.95f4610b.js";import"./chunks/label.b8426703.js";import"./chunks/optional.de297b09.js";import"./chunks/confirm.0369c032.js";import"./chunks/remaining.7db31c83.js";const x={components:{"v-writer":u},data(){return{progress:0,text:`# Writer

A minimal, Markdown-based text editor with HTML rendering, fullscreen-mode and code syntax-highlighting.`}},methods:{upload(e){[10,20,30,40,50,60,70,80,90,100].forEach(t=>setTimeout(()=>this.progress=t,t*10)),setTimeout(()=>e("https://example.com/test.jpg"),1500)}}},h={class:"demo py-[40px] px-[64px]"},f=l("h1",{class:"text-[32px] font-semibold -tracking-[.7px] mb-10"}," Writer - Playground ",-1),y={class:"bg-white dark:bg-gray-800"};function w(e,t,m,n,r,d){const c=i("v-writer");return p(),a("div",h,[f,l("div",y,[s(c,{html:!0,height:600,modelValue:r.text,"onUpdate:modelValue":t[0]||(t[0]=o=>r.text=o),uploads:!0,progress:r.progress,onUpload:t[1]||(t[1]=o=>d.upload(o))},null,8,["modelValue","progress"])])])}const v=_(x,[["render",w]]),L=JSON.parse('{"title":"Writer Playground","description":"","frontmatter":{"title":"Writer Playground","layout":"page"},"headers":[],"relativePath":"playgrounds/writer/index.md"}'),b={name:"playgrounds/writer/index.md"},S=Object.assign(b,{setup(e){return(t,m)=>{const n=i("ClientOnly");return p(),a("div",null,[s(n,null,{default:g(()=>[s(v)]),_:1})])}}});export{L as __pageData,S as default};