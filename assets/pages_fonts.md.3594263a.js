import{_ as s,o as n,c as a,d as o}from"./app.13dcf22a.js";const d=JSON.parse('{"title":"Fonts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setting a custom font","slug":"setting-a-custom-font"},{"level":2,"title":"Recommendation","slug":"recommendation"},{"level":3,"title":"Can I use another font?","slug":"can-i-use-another-font"},{"level":2,"title":"Further tweaking","slug":"further-tweaking"}],"relativePath":"pages/fonts.md"}'),e={name:"pages/fonts.md"},t=o(`<h1 id="fonts" tabindex="-1">Fonts <a class="header-anchor" href="#fonts" aria-hidden="true">#</a></h1><p>Varnish&#39;s components include text in their markup. This text is not assigned a <code>font-family</code>. Therefore, the components will use the same font as your project.</p><p>Most of the time, you probably don&#39;t want this, as it would require you to spend time tweaking a component&#39;s styling before you could start using it.</p><p>The solution to this problem, is to instruct Varnish to use a custom font...</p><h2 id="setting-a-custom-font" tabindex="-1">Setting a custom font <a class="header-anchor" href="#setting-a-custom-font" aria-hidden="true">#</a></h2><p>Varnish adds a blank <code>varnish-font</code> CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-font</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Roboto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="recommendation" tabindex="-1">Recommendation <a class="header-anchor" href="#recommendation" aria-hidden="true">#</a></h2><p>Varnish is designed and built using the free, open-source <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter webfont</a>.</p><p>This font was chosen because it is specifically designed for use on computer screens, making it ideal for UI components.</p><p><a href="https://github.com/rsms/inter/raw/master/docs/font-files/Inter.var.woff2" target="_blank" rel="noopener noreferrer">Download it here</a>, then use the following CSS:</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@font-face</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Inter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-variant-numeric</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> proportional-nums</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/to/fonts/Inter.var.woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">varnish-font</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Inter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="can-i-use-another-font" tabindex="-1">Can I use another font? <a class="header-anchor" href="#can-i-use-another-font" aria-hidden="true">#</a></h3><p>Yes, however you should be aware that each of the Varnish components have been styled (padding, spacing, size etc.) in such a way as to take advantage of Inter&#39;s features, as well as to address its minor quirks.</p><p>Using another font will likely require that you spend additional time tweaking the styling so that it looks right. However, if you stick with Inter, it will just work.</p><h2 id="further-tweaking" tabindex="-1">Further tweaking <a class="header-anchor" href="#further-tweaking" aria-hidden="true">#</a></h2><p>Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component&#39;s documentation page includes a &#39;custom styling&#39; section.</p>`,17),l=[t];function p(r,c,i,D,y,h){return n(),a("div",null,l)}var f=s(e,[["render",p]]);export{d as __pageData,f as default};
