import{_ as h,o as n,j as u,w as t,c as p,a as l,k as m,e as i,T as v,g,r as C,b as d,i as y,d as F,u as f,l as A}from"./app.56c3c256.js";const b={emits:["closed"],props:{dismiss:{type:Boolean,default:!0},visible:{type:Boolean,default:!1}},methods:{close(){this.dismiss&&this.$emit("closed")}}},_={class:"varnish-container bg-white/[.75] dark:bg-gray-700 border-y md:border-x border-gray-400/[.70] dark:border-gray-600 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] md:rounded-lg relative"},x={class:"varnish-slot min-h-[200px] p-10 md:p-20"};function B(r,s,o,a,c,e){return n(),u(v,{"leave-to-class":"opacity-0 scale-110","enter-from-class":"opacity-0 scale-110","enter-to-class":"opacity-100 scale-100","leave-from-class":"opacity-100 scale-100","enter-active-class":"transition duration-300","leave-active-class":"transition duration-300"},{default:t(()=>[o.visible?(n(),p("div",{key:0,onClick:s[1]||(s[1]=D=>e.close()),class:"varnish-modal varnish-font bg-gray-200 dark:bg-gray-800 flex justify-center items-center fixed inset-0 z-[9999]"},[l("div",_,[l("div",x,[m(r.$slots,"default")])]),o.dismiss?(n(),p("i",{key:0,ref:"close",onClick:s[0]||(s[0]=D=>e.close()),dusk:"modal-close",title:"Close the popup",class:"varnish-close fas fa-times text-[20px] text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer transition duration-300 absolute top-6 right-6"},null,512)):i("",!0)])):i("",!0)]),_:3})}var w=h(b,[["render",B]]);const k=F('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><p>A popup component used to focus the user&#39;s attention on a subsection of content.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Configure whether dismissable</li><li>Graceful animation on open and close</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.</p>',6),T={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},E=A(" I am some modal content "),S=F(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Begin by importing the component and registering it like so:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Modal Content</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ModalComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/components/modal.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-modal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">ModalComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="dismiss" tabindex="-1">dismiss <a class="header-anchor" href="#dismiss" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>Toggle whether the user is allowed to hide the component.</p><p>The user can hide the component either by clicking on its background overlay, or via the &#39;X&#39; icon at the top right of the viewport.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:dismiss</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Specify whether the component should be visible to the user.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>The following <code>events</code> are exposed by the component.</p><h3 id="closed" tabindex="-1">closed <a class="header-anchor" href="#closed" aria-hidden="true">#</a></h3><ul><li><code>$event</code> - not provided.</li></ul><p>Fired when the user closes the component.</p><p>You will likely want to register a listener for this event so that you can update the <a href="#visible">visible</a> property to <code>false</code>.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@closed</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show = false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selectors:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-modal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-modal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-modal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-slot</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-modal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-close</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes the close icon text size to 30 pixels:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-modal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-close</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-[30px] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,27),$=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"dismiss","slug":"dismiss"},{"level":3,"title":"visible","slug":"visible"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"closed","slug":"closed"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/modal.md"}'),q={name:"pages/modal.md"},N=Object.assign(q,{setup(r){let s=g(!1);return(o,a)=>{const c=C("ClientOnly");return n(),p("div",null,[k,l("div",T,[d(c,null,{default:t(()=>[d(w,{visible:f(s),onClosed:a[0]||(a[0]=e=>y(s)?s.value=!1:s=!1)},{default:t(()=>[E]),_:1},8,["visible"])]),_:1}),l("button",{onClick:a[1]||(a[1]=e=>y(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Modal ")]),S])}}});export{$ as __pageData,N as default};