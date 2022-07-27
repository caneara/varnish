import{_ as e,o as a,c as o,d as s}from"./app.14b338e1.js";const u=JSON.parse('{"title":"Light / Dark","description":"","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Projects that offer light and dark-mode","slug":"projects-that-offer-light-and-dark-mode"},{"level":3,"title":"Projects that only offer light-mode","slug":"projects-that-only-offer-light-mode"},{"level":3,"title":"Projects that only offer dark-mode","slug":"projects-that-only-offer-dark-mode"},{"level":2,"title":"Caveats","slug":"caveats"}],"relativePath":"pages/dark-mode.md","lastUpdated":1658919314000}'),t={name:"pages/dark-mode.md"},n=s(`<h1 id="light-dark" tabindex="-1">Light / Dark <a class="header-anchor" href="#light-dark" aria-hidden="true">#</a></h1><p>Now that dark-mode is a feature of many operating systems, it\u2019s becoming more common to include a dark version of your project.</p><p>The good news, is that Lumeno UI&#39;s components include support for both light and dark-mode out-of-the-box.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>Depending on whether your project offers light-mode, dark-mode or both, you may need to make some changes...</p><h3 id="projects-that-offer-light-and-dark-mode" tabindex="-1">Projects that offer light and dark-mode <a class="header-anchor" href="#projects-that-offer-light-and-dark-mode" aria-hidden="true">#</a></h3><p>If your project includes support for both light and dark-modes, then you don&#39;t need to do anything in terms of configuring Lumeno UI. The library will use the <code>prefers-color-scheme</code> CSS media feature to automatically determine the user&#39;s operating system preference and apply it accordingly (just as Tailwind does).</p><h3 id="projects-that-only-offer-light-mode" tabindex="-1">Projects that only offer light-mode <a class="header-anchor" href="#projects-that-only-offer-light-mode" aria-hidden="true">#</a></h3><p>In this scenario, you will want to ensure that (regardless of the user&#39;s operating system setting), both your project and Lumeno UI use light-mode.</p><p>To achieve this, you will need to <a href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually" target="_blank" rel="noopener noreferrer">configure Tailwind</a> to use a <code>class</code> strategy.</p><h3 id="projects-that-only-offer-dark-mode" tabindex="-1">Projects that only offer dark-mode <a class="header-anchor" href="#projects-that-only-offer-dark-mode" aria-hidden="true">#</a></h3><p>In this scenario, you will want to ensure that (regardless of the user&#39;s operating system setting), both your project and Lumeno UI use dark-mode.</p><p>To achieve this, you will need to <a href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually" target="_blank" rel="noopener noreferrer">configure Tailwind</a> to use a <code>class</code> strategy.</p><p>You will then need to add a <code>dark</code> class to the <code>html</code> tag on the page e.g.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- Content --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="caveats" tabindex="-1">Caveats <a class="header-anchor" href="#caveats" aria-hidden="true">#</a></h2><p>In addition to not supporting prefixes within Tailwind, Lumeno UI also does not support the use of a custom class name for dark-mode e.g.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Supported --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark:bg-gray-700</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Unsupported --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark-mode:bg-gray-700</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,18),r=[n];function l(p,d,c,i,h,g){return a(),o("div",null,r)}var f=e(t,[["render",l]]);export{u as __pageData,f as default};
