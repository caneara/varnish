import{_ as u,o as c,c as r,F as g,k as b,a as l,n as t,g as C,r as v,b as d,w as m,d as D,u as F,i as y}from"./app.ee44914a.js";const A={emits:["change","update:modelValue"],props:{items:{type:Array,default:[]},modelValue:{type:String,default:""}},methods:{switchTab(a){a!=null&&a.action&&a.action(),this.$emit("change",a.id),this.$emit("update:modelValue",a.id)}}},f={class:"varnish-tabs varnish-font flex items-end overflow-x-auto"},B=["onClick","dusk"],_=["title"],x=["innerHTML"],k=l("div",{class:"varnish-track w-full h-[1px] bg-gray-300 dark:bg-gray-600 rounded-lg relative z-[2]"},null,-1);function w(a,n,e,h,o,i){return c(),r("div",f,[(c(!0),r(g,null,b(e.items.filter(s=>{var p;return(p=s==null?void 0:s.visible)!=null?p:!0}),(s,p)=>(c(),r("div",{onClick:H=>i.switchTab(s),dusk:`set-tab-${s.id}`,class:"varnish-tab group cursor-pointer whitespace-nowrap select-none transition duration-300 relative z-[1]"},[l("div",{class:t([p===0?"md:-ml-1 md:mr-1":"md:mx-1","varnish-content flex items-center px-4 md:px-3 py-3"])},[l("i",{title:s.label,class:t(["varnish-icon text-[16px] lg:text-[13px] transition duration-300 lg:mr-3",[s.icon,s.id===e.modelValue?"text-sky-600 dark:text-sky-400 mr-3":"text-gray-500/[.65] dark:text-gray-400"]])},null,10,_),l("span",{innerHTML:s.label,class:t(["varnish-label font-semibold text-[12px] uppercase transition duration-300",s.id===e.modelValue?"text-sky-600 dark:text-sky-400":"text-gray-600 dark:text-gray-400 hidden lg:inline"])},null,10,x)],2),l("div",{class:t(["varnish-border-top w-full h-[1px] transition duration-300 relative z-[1]",s.id===e.modelValue?"bg-sky-600/[.80] dark:bg-sky-400":"group-hover:bg-sky-600/[.80] dark:group-hover:bg-sky-400"])},null,2),l("div",{class:t(["varnish-border-bottom w-full h-[1px] transition duration-300 relative z-[1]",s.id===e.modelValue?"bg-sky-600/[.80] dark:bg-sky-400":"bg-gray-300 dark:bg-gray-600 group-hover:bg-sky-600/80 dark:group-hover:bg-sky-400"])},null,2)],8,B))),256)),k])}const T=u(A,[["render",w]]),q=D('<h1 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-hidden="true">#</a></h1><p>A navigation element that can be used to divide content on a site or page.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Supports text and icons</li><li>Includes automatic collapsing for small devices</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.</p>',6),E={class:"border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-10 pt-6 mt-8"},S=D(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Begin by importing the component and registering it like so:</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> TabsComponent </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/components/tabs.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-tabs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">TabsComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="items" tabindex="-1">items <a class="header-anchor" href="#items" aria-hidden="true">#</a></h3><ul><li>Type: <code>Array</code></li><li>Default: <code>[]</code></li></ul><p>Specify the items that are included within the tab component.</p><p>See <a href="#managing-tab-content">Managing tab content</a> for configuration options.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ id : &#39;home&#39;, icon : &#39;fas fa-home&#39;, label : &#39;Home&#39;, visible : true, &#39;action&#39; : () =&gt; alert(&#39;Clicked Home&#39;) }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li></ul><p>The two-way, data-bound value used to control the currently active tab.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>The following <code>events</code> are exposed by the component.</p><h3 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-hidden="true">#</a></h3><ul><li><code>$event</code> - the ID of the newly-selected tab.</li></ul><p>Fired when the component&#39;s value changes.</p><p>Note that, in many cases, you can rely on the two-way data-binding provided by <code>v-model</code> for this. However, if you need to react to changes, this is the best way.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console.log($event)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="managing-tab-content" tabindex="-1">Managing tab content <a class="header-anchor" href="#managing-tab-content" aria-hidden="true">#</a></h2><p>As outlined in <a href="#items">items</a>, the component&#39;s content is controlled by an <code>array</code> of <code>objects</code>. Each <code>object</code> has the following supported properties:</p><h3 id="action" tabindex="-1">action <a class="header-anchor" href="#action" aria-hidden="true">#</a></h3><ul><li>Type: <code>Function</code></li><li>Required: <code>false</code></li></ul><p>The closure that should be executed when the tab is selected.</p><p>Alternatively, you can listen for the <a href="#change">change</a> event and respond accordingly.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ action : () =&gt; alert(&#39;clicked&#39;) }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li><li>Required: <code>true</code></li></ul><p>The FontAwesome icon to display within the individual tab.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ icon : &#39;fas fa-home&#39; }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li><li>Required: <code>true</code></li></ul><p>The unique identifier for the individual tab.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ id : &#39;home&#39; }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="label" tabindex="-1">label <a class="header-anchor" href="#label" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li><li>Required: <code>true</code></li></ul><p>The text to display within the individual tab.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ label : &#39;Home&#39; }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Required: <code>false</code></li></ul><p>Control whether the tab should be displayed or not.</p><p>When the property is omitted, the tab will be shown.</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[{ visible : false }]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selectors:</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-border-top</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-border-bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-track</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes the tab text color to purple:</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tabs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-tab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-purple-500 dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">text-purple-700 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,51),I=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"items","slug":"items"},{"level":3,"title":"v-model","slug":"v-model"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"change","slug":"change"},{"level":2,"title":"Managing tab content","slug":"managing-tab-content"},{"level":3,"title":"action","slug":"action"},{"level":3,"title":"icon","slug":"icon"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"label","slug":"label"},{"level":3,"title":"visible","slug":"visible"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/tabs.md"}'),V={name:"pages/tabs.md"},N=Object.assign(V,{setup(a){let n=C("home"),e=[{id:"home",icon:"fas fa-home",label:"Home",visible:!0,action:()=>alert("Clicked Home")},{id:"account",icon:"fas fa-cog",label:"Account",action:()=>alert("Clicked Account")},{id:"delete",icon:"fas fa-trash",label:"Delete",visible:!1,action:()=>alert("Clicked Trash")}];return(h,o)=>{const i=v("ClientOnly");return c(),r("div",null,[q,l("div",E,[d(i,null,{default:m(()=>[d(T,{modelValue:F(n),"onUpdate:modelValue":o[0]||(o[0]=s=>y(n)?n.value=s:n=s),items:F(e),onChange:o[1]||(o[1]=s=>y(n)?n.value=s:n=s)},null,8,["modelValue","items"])]),_:1})]),S])}}});export{I as __pageData,N as default};