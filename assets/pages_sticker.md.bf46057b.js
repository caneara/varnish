import{L as y}from"./chunks/label.eebde190.js";import{U as F}from"./chunks/Utilities.fd907a34.js";import{F as h}from"./chunks/Foundation.9cb0dd39.js";import{_ as D,d as o,o as p,c as r,a as e,e as n,j as u,w as m,f as c,u as C}from"./app.8e352128.js";import"./chunks/optional.1bdc96d4.js";const g={mixins:[F,h],components:{"v-label":y},props:{value:{type:String,default:""}}},f={class:"varnish-sticker varnish-font w-full"},v={class:"varnish-container bg-white dark:bg-gray-800 border border-dashed border-gray-400/[.80] dark:border-gray-500/[.80] rounded relative"},_=["id","name","value"];function A(s,l,a,i,t,T){const d=o("v-label");return p(),r("div",f,[e("div",v,[e("input",{id:s.name,type:"text",name:s.name,value:a.value,readonly:!0,class:"varnish-content w-full bg-inherit text-[17px] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none px-3 pt-[25px] pb-[6px]"},null,8,_),n(d,{value:s.label,focus:!1,filled:!s.blank(a.value)},null,8,["value","filled"])])])}const b=D(g,[["render",A]]),k=c('<h1 id="sticker" tabindex="-1">Sticker <a class="header-anchor" href="#sticker" aria-hidden="true">#</a></h1><p>A read-only text-box component used to display information.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Read-only display of content</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes.</p>',6),x={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},B=c(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Begin by importing the component and registering it like so:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-sticker</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-sticker</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> StickerComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/src/components/sticker.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-sticker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">StickerComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="mixins" tabindex="-1">Mixins <a class="header-anchor" href="#mixins" aria-hidden="true">#</a></h2><p>This component makes use of the following parts of the <a href="/pages/foundation.html">Foundation</a> mixin:</p><ul><li><a href="/pages/foundation.html#id">id</a></li><li><a href="/pages/foundation.html#label">label</a></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li></ul><p>The content that should be displayed by the component.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-sticker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Your API Key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-sticker</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selectors:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-sticker</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-sticker</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-sticker</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes the text color to purple:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-sticker</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-purple-700 dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">text-purple-400 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,18),N=JSON.parse('{"title":"Sticker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"value","slug":"value","link":"#value","children":[]}]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/sticker.md"}'),S={name:"pages/sticker.md"},q=Object.assign(S,{setup(s){let l=u("john@example.com");return(a,i)=>{const t=o("ClientOnly");return p(),r("div",null,[k,e("div",x,[n(t,null,{default:m(()=>[n(b,{label:"Email",value:C(l)},null,8,["value"])]),_:1})]),B])}}});export{N as __pageData,q as default};