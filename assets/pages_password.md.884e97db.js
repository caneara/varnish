import{C}from"./chunks/clear.af886577.js";import{E as g}from"./chunks/error.461e3735.js";import{L as f}from"./chunks/label.eebde190.js";import{U as v}from"./chunks/Utilities.fd907a34.js";import{F as A}from"./chunks/Foundation.9cb0dd39.js";import{_ as w,d as p,o as r,c as i,a as o,n as y,e as l,h as b,b as F,g as B,t as k,j as x,w as _,f as h,u as T,k as V}from"./app.8e352128.js";import"./chunks/optional.1bdc96d4.js";const P={mixins:[v,A],components:{"v-clear":C,"v-error":g,"v-label":f},data(){return{characters:["abcdefghijklm","0123456789","!@%^&*_-+=","NOPQRSTUVWXYZ"],password:""}},props:{generate:{type:Boolean,default:!0}},methods:{clear(){this.password="",this.change("")},createRandomPassword(){this.clear(),this.characters.forEach(s=>{for(var a=0;a<5;a++)this.password+=s.charAt(Math.floor(Math.random()*s.length))}),this.password=[...this.password].sort(()=>Math.random()-.5).join(""),this.change(this.password)}}},S={class:"varnish-password varnish-font w-full min-w-[250px]"},E=["id","name","dusk","value","placeholder","autocomplete"],N={key:0,class:"varnish-generated font-semibold text-[14px] text-purple-700 dark:text-purple-300 mt-2"},M=o("span",{class:"text-gray-700 dark:text-gray-300 mr-[2px]"}," Password: ",-1);function j(s,a,d,c,t,n){const D=p("v-label"),u=p("v-clear"),m=p("v-error");return r(),i("div",S,[o("div",{onMouseover:a[5]||(a[5]=e=>s.hover=!0),onMouseout:a[6]||(a[6]=e=>s.hover=!1),class:"varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300"},[o("input",{id:s.name,name:s.name,dusk:s.name,type:"password",value:s.modelValue,onFocus:a[0]||(a[0]=e=>s.focus=!0),onFocusout:a[1]||(a[1]=e=>s.focus=!1),placeholder:s.placeholder,autocomplete:s.autocomplete,onInput:a[2]||(a[2]=e=>s.change(e.target.value)),class:y([s.hover||s.focus?"pr-[50px]":"pr-3","varnish-input w-full bg-inherit font-medium text-[17px] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[6px]"])},null,42,E),l(D,{icon:s.icon,value:s.label,focus:s.focus,optional:!1,filled:!s.blank(s.modelValue)},null,8,["icon","value","focus","filled"]),l(u,{focus:s.focus,hover:s.hover,onClick:a[3]||(a[3]=e=>n.clear()),filled:!s.blank(s.modelValue)},null,8,["focus","hover","filled"]),d.generate&&!s.automated()?(r(),i("div",{key:0,style:{transition:"all 0.4s ease, background-color 0s"},class:y(["varnish-generate w-[50px] h-[51px] flex justify-center items-center absolute top-0 right-0 rounded-r",s.focus&&s.blank(s.modelValue)||s.hover&&s.blank(s.modelValue)?"opacity-100 z-[2]":"opacity-0 pointer-events-none"])},[o("i",{title:"Generate a random password",onClick:a[4]||(a[4]=b(e=>n.createRandomPassword(),["stop"])),class:"varnish-icon fas fa-plus text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative top-[.5px] left-[1.5px] cursor-pointer transition duration-300"})],2)):F("",!0)],32),s.blank(t.password)?F("",!0):(r(),i("div",N,[M,B(k(t.password),1)])),l(m,{value:s.fault},null,8,["value"])])}const I=w(P,[["render",j]]),R=h('<h1 id="password" tabindex="-1">Password <a class="header-anchor" href="#password" aria-hidden="true">#</a></h1><p>A wrapper for the native password input.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Labels and icons</li><li>Display an error message</li><li>Generate a pseudo random password</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes.</p>',6),U={class:"bg-gray-100 dark:bg-black flex justify-center gap-x-3 rounded-md p-6 mt-8"},$=h(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Begin by importing the component and registering it like so:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-password</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-password</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PasswordComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/src/components/password.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">PasswordComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="mixins" tabindex="-1">Mixins <a class="header-anchor" href="#mixins" aria-hidden="true">#</a></h2><p>This component makes use of the following parts of the <a href="/pages/foundation.html">Foundation</a> mixin:</p><ul><li><a href="/pages/foundation.html#autocomplete">autocomplete</a></li><li><a href="/pages/foundation.html#change">change</a></li><li><a href="/pages/foundation.html#error">error</a></li><li><a href="/pages/foundation.html#focus">focus</a></li><li><a href="/pages/foundation.html#hover">hover</a></li><li><a href="/pages/foundation.html#icon">icon</a></li><li><a href="/pages/foundation.html#id">id</a></li><li><a href="/pages/foundation.html#label">label</a></li><li><a href="/pages/foundation.html#placeholder">placeholder</a></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>Set whether the component may offer the means to generate a random password.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:generate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-password</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selector:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-input</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-generate</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-generate</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-generated</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes a generated password&#39;s text color to purple:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-generated</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-purple-700 dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">text-purple-400 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,18),Q=JSON.parse('{"title":"Password","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"generate","slug":"generate","link":"#generate","children":[]}]},{"level":2,"title":"Custom styling","slug":"custom-styling","link":"#custom-styling","children":[]}],"relativePath":"pages/password.md"}'),q={name:"pages/password.md"},W=Object.assign(q,{setup(s){let a=x("");return(d,c)=>{const t=p("ClientOnly");return r(),i("div",null,[R,o("div",U,[l(t,null,{default:_(()=>[l(I,{icon:"fas fa-key",label:"Current password",modelValue:T(a),"onUpdate:modelValue":c[0]||(c[0]=n=>V(a)?a.value=n:a=n)},null,8,["modelValue"])]),_:1})]),$])}}});export{Q as __pageData,W as default};