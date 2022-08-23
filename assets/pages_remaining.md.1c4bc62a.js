import{_ as D,o as t,c as r,a as l,n as i,t as d,r as h,b as a,w as u,d as F}from"./app.867844b7.js";const m={data(){return{colors:{green:"varnish-green text-green-600 dark:text-green-500",yellow:"varnish-yellow text-yellow-600 dark:text-yellow-500",red:"varnish-red text-red-600 dark:text-red-500"}}},props:{maximum:{type:Number,default:100},value:{type:Number,default:0}},computed:{percentage(){let o=parseInt(this.value/this.maximum*100);return o>=100?100:o}}},C={class:"varnish-remaining varnish-font flex items-center justify-center overflow-hidden rounded-full"},g={class:"varnish-ring w-[30px] h-[30px]"},v=l("circle",{r:"12",cx:"15",cy:"15","stroke-width":"2",fill:"transparent",stroke:"currentColor",class:"varnish-track text-gray-300 dark:text-gray-600"},null,-1),A=["stroke-dasharray","stroke-dashoffset"];function f(o,y,p,c,s,n){return t(),r("div",C,[(t(),r("svg",g,[v,l("circle",{r:"12",cx:"15",cy:"15","stroke-width":"2",fill:"transparent",stroke:"currentColor",class:i(["varnish-indicator",n.percentage<=75?s.colors.green:n.percentage<=90?s.colors.yellow:s.colors.red]),transform:"rotate(-90 15 15)","stroke-dasharray":12*2*Math.PI,"stroke-dashoffset":(100-n.percentage)/100*(12*2*Math.PI)},null,10,A)])),l("span",{class:i(["varnish-figure font-semibold text-[12px] absolute",n.percentage<=75?s.colors.green:n.percentage<=90?s.colors.yellow:s.colors.red])},d(p.maximum-p.value),3)])}var e=D(m,[["render",f]]);const _=F('<h1 id="remaining" tabindex="-1">Remaining <a class="header-anchor" href="#remaining" aria-hidden="true">#</a></h1><p>A Twitter-style indicator of the remaining number of allowed characters.</p><blockquote><p>This is a sub-component and is not really intended for direct use as-is. If you&#39;re only intending to use Varnish&#39;s &#39;full&#39; components e.g. a TextBox or DropDown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.</p></blockquote><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Control using current and maximum values</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.</p>',7),B={class:"border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8"},x={class:"flex gap-3 relative min-h-[50px]"},b=F(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Begin by importing the component and registering it like so:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> RemainingComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@caneara/varnish/components/remaining.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">components</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v-remaining</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> : </span><span style="color:#A6ACCD;">RemainingComponent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>The following <code>props</code> are exposed by the component.</p><h3 id="maximum" tabindex="-1">maximum <a class="header-anchor" href="#maximum" aria-hidden="true">#</a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>100</code></li></ul><p>Specify the component&#39;s maximum allowed value.</p><p>This should be equal to the maximum number of characters that the associated component e.g. a text box, is allowed to have.</p><p>When <a href="#value">value</a> exceeds this figure, a negative number is displayed.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:maximum</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-hidden="true">#</a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>0</code></li></ul><p>Specify the component&#39;s current value.</p><p>This should be equal to the number of characters that the associated component e.g. a text box, has entered into it.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-remaining</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-styling" tabindex="-1">Custom styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h2><p>If you want to override any of the component&#39;s default styling, then you can do so by using the following CSS selectors:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-track</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-indicator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-indicator</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-green</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-indicator</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-yellow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-indicator</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-red</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-figure</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Here&#39;s an example that changes the green color scheme to blue:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-remaining</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-ring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-indicator</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-green</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> @apply text-blue-600 dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">text-blue-500 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.</p></blockquote>`,22),T=JSON.parse('{"title":"Remaining","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"maximum","slug":"maximum"},{"level":3,"title":"value","slug":"value"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/remaining.md"}'),w={name:"pages/remaining.md"},S=Object.assign(w,{setup(o){return(y,p)=>{const c=h("ClientOnly");return t(),r("div",null,[_,l("div",B,[l("div",x,[a(c,null,{default:u(()=>[a(e,{value:5,maximum:10}),a(e,{value:7,maximum:10}),a(e,{value:8,maximum:10}),a(e,{value:10,maximum:10}),a(e,{value:11,maximum:10})]),_:1})])]),b])}}});export{T as __pageData,S as default};
