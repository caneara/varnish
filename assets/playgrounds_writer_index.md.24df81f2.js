import{W as u}from"./chunks/writer.2fd2bb16.js";import{_ as c,r as a,o as i,c as l,b as n,a as _,w as g}from"./app.8a53bdf9.js";import"./chunks/error.24d1d460.js";import"./chunks/Utilities.fc44013c.js";import"./chunks/Foundation.0c17c038.js";const x={components:{"v-writer":u},data(){return{progress:0,text:`# Writer

A minimal, Markdown-based text editor with HTML rendering, fullscreen-mode and code syntax-highlighting.`}},methods:{upload(t){[10,20,30,40,50,60,70,80,90,100].forEach(e=>setTimeout(()=>this.progress=e,e*10)),setTimeout(()=>t("https://example.com/test.jpg"),1500)}}},h={class:"demo py-[40px] px-[64px]"},f=_("h1",{class:"text-[32px] font-semibold -tracking-[.7px] mb-10"}," Writer - Playground ",-1);function y(t,e,p,s,r,d){const m=a("v-writer");return i(),l("div",h,[f,n(m,{html:!0,height:600,modelValue:r.text,"onUpdate:modelValue":e[0]||(e[0]=o=>r.text=o),uploads:!0,lineNumbers:!0,progress:r.progress,onUpload:e[1]||(e[1]=o=>d.upload(o))},null,8,["modelValue","progress"])])}var w=c(x,[["render",y]]);const k=JSON.parse('{"title":"Writer Playground","description":"","frontmatter":{"title":"Writer Playground","layout":"page"},"headers":[],"relativePath":"playgrounds/writer/index.md"}'),v={name:"playgrounds/writer/index.md"},N=Object.assign(v,{setup(t){return(e,p)=>{const s=a("ClientOnly");return i(),l("div",null,[n(s,null,{default:g(()=>[n(w)]),_:1})])}}});export{k as __pageData,N as default};
