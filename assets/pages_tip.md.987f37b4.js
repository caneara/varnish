import{M as h}from"./chunks/modal.c127083a.js";import{B as u}from"./chunks/button.333b2c5a.js";import{U as m}from"./chunks/Utilities.fd907a34.js";import{_ as g,d as l,o as r,l as C,w as y,a,e as o,j as v,c as f,k as c,f as F,u as b}from"./app.65403d2d.js";import"./chunks/Foundation.9cb0dd39.js";const A={mixins:[m],components:{"v-button":u,"v-modal":h},emits:["close"],props:{message:{type:String,default:""},visible:{type:Boolean,default:!1}}},x={class:"flex flex-col md:flex-row md:-m-6 md:-mb-7"},_=a("div",{class:"varnish-circle bg-purple-500/[.30] dark:bg-purple-600/[.50] h-[60px] w-[60px] min-w-[60px] flex justify-center items-center mx-auto md:mx-0 rounded-full"},[a("i",{class:"varnish-icon fas fa-info text-[30px] text-purple-600 dark:text-purple-400 relative left-[0.5px] -top-[1px]"})],-1),k={class:"w-full mt-6 md:ml-7 md:mt-0"},w=["innerHTML"],B={class:"varnish-actions flex flex-col-reverse md:flex-row justify-end gap-x-4"};function T(t,s,e,n,p,i){const d=l("v-button"),D=l("v-modal");return r(),C(D,{dismiss:!1,visible:e.visible,class:"varnish-tip"},{default:y(()=>[a("div",x,[_,a("div",k,[a("div",{innerHTML:e.message,class:"varnish-message text-[17px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[1.6rem] md:mr-7 mb-8"},null,8,w),a("div",B,[o(d,{color:"blue",label:"Close",mode:"outline",id:"dialog_tip_close",onClick:s[0]||(s[0]=j=>t.$emit("close"))})])])])]),_:1},8,["visible"])}const E=g(A,[["render",T]]),S=F('<h1 id="tip" tabindex="-1">Tip <a class="header-anchor" href="#tip" aria-hidden="true">#</a></h1><p>A popup component used to provide additional context and information.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Configure message text</li><li>Easily handle closure using events</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes.</p>',6),q={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},$=F(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><blockquote><p>While you are free to use the approach below, you are probably looking for the <a href="#inlining">inline option</a> which does not require adding components to a template.</p></blockquote><p>Begin by importing the component and registering it like so:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> TipComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/src/components/tip.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-tip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">TipComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li></ul><p>Specify the content / body text to display within the component.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Eating an apple each day keeps the doctor away</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Specify whether the component should be visible to the user.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>The following <code>events</code> are exposed by the component.</p><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-hidden="true">#</a></h3><ul><li><code>$event</code> - not provided.</li></ul><p>Fired when the user clicks the close button.</p><p>You will likely want to register a listener for this event so that you can update the <a href="#visible">visible</a> property to <code>false</code>.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@close</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show = false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="inlining" tabindex="-1">Inlining <a class="header-anchor" href="#inlining" aria-hidden="true">#</a></h2><p>It can be cumbersome to have to add the component everywhere that you want to use it, which is why an inline option is available that allows you to simply call a method and wait for the user to close the component.</p><p>To achieve this, first add the <code>Dialog</code> mixin to your component:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Dialog </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/src/mixins/Dialog</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">mixins</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">Dialog</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Then call the <code>tip</code> method provided by the mixin (you will need to use <code>async / await</code>):</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">async </span><span style="color:#82AAFF;">adviseUser</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">tip</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This action cannot be undone because of...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><p>The <code>tip</code> method accepts one parameter, which is used to set the <a href="#message">message</a> property of the component.</p><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selectors:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-message</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-actions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes the message text size to 30 pixels:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-message</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-[30px] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,34),O=JSON.parse('{"title":"Tip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"message","slug":"message","link":"#message","children":[]},{"level":3,"title":"visible","slug":"visible","link":"#visible","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[{"level":3,"title":"close","slug":"close","link":"#close","children":[]}]},{"level":2,"title":"Inlining","slug":"inlining","link":"#inlining","children":[]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/tip.md"}'),I={name:"pages/tip.md"},H=Object.assign(I,{setup(t){let s=v(!1);return(e,n)=>{const p=l("ClientOnly");return r(),f("div",null,[S,a("div",q,[o(p,null,{default:y(()=>[o(E,{visible:b(s),onClose:n[0]||(n[0]=i=>c(s)?s.value=!1:s=!1),message:"Eating an apple each day keeps the doctor away, but eat more than one and you might feel ill."},null,8,["visible"])]),_:1}),a("button",{onClick:n[1]||(n[1]=i=>c(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Tip ")]),$])}}});export{O as __pageData,H as default};