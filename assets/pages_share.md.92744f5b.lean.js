import{M as h}from"./chunks/modal.0a5c73c5.js";import{U as d}from"./chunks/Utilities.0e2b559b.js";import{_ as A,r as i,o as F,h as v,w as y,a,f as u,g,c as B,b as r,i as c,d as D,u as m}from"./app.5ad54664.js";const x={mixins:[d],components:{"v-modal":h},emits:["closed"],props:{url:{type:String,default:""},visible:{type:Boolean,default:!1}},methods:{email(){window.location.href=`mailto:?body=${this.url}`},visit(o){let s=window.open("","_blank","width=550,height=420");s.opener=null,s.location=o}}},f=a("div",{class:"varnish-header font-[650] text-[21px] text-gray-900 dark:text-white text-center -tracking-[.6px] mb-5"}," Share a link with others ",-1),b=a("div",{class:"varnish-summary text-gray-700 dark:text-gray-400 text-center leading-[1.6rem] max-w-[475px] mb-8"}," Select one of the available platforms to share the link on. You can also send the link via email, or copy it to the clipboard. ",-1),k={class:"varnish-platforms grid grid-cols-1 md:grid-cols-2 gap-3"},_=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-twitter text-[18px] text-sky-500 -ml-4"},null,-1),w=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Twitter ",-1),S=[_,w],T=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-facebook text-[18px] text-blue-800/[.80] dark:text-blue-500 -ml-4"},null,-1),E=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Facebook ",-1),$=[T,E],q=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-reddit-alien text-[18px] text-red-700/[.80] dark:text-red-400 -ml-4"},null,-1),I=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Reddit ",-1),P=[q,I],V=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-linkedin text-[18px] text-blue-800/[.80] dark:text-blue-500 -ml-4"},null,-1),N=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on LinkedIn ",-1),O=[V,N],R=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fas fa-envelope text-16px text-emerald-600/[.80] dark:text-emerald-500 relative top-1px -ml-4"},null,-1),M=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Send via email ",-1),U=[R,M],L=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fas fa-link text-14px text-gray-500 dark:text-gray-400 relative top-1px -ml-4"},null,-1),Y={ref:"copy_text",class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"};function j(o,s,n,e,t,l){const C=i("v-modal");return F(),v(C,{visible:n.visible,class:"varnish-share",onClosed:s[6]||(s[6]=p=>o.$emit("closed"))},{default:y(()=>[f,b,a("div",k,[a("div",{onClick:s[0]||(s[0]=p=>l.visit(`https://twitter.com/intent/tweet?url=${n.url}`)),class:"varnish-twitter bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},S),a("div",{onClick:s[1]||(s[1]=p=>l.visit(`https://www.facebook.com/sharer/sharer.php?u=${n.url}`)),class:"varnish-facebook bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},$),a("div",{onClick:s[2]||(s[2]=p=>l.visit(`https://reddit.com/submit?url=${n.url}`)),class:"varnish-reddit bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},P),a("div",{onClick:s[3]||(s[3]=p=>l.visit(`https://www.linkedin.com/shareArticle?mini=true&url=${n.url}`)),class:"varnish-linkedIn bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},O),a("div",{onClick:s[4]||(s[4]=p=>l.email()),class:"varnish-email bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},U),a("div",{onClick:s[5]||(s[5]=u(()=>{o.copy(n.url),o.$refs.copy_text.innerHTML="Copied!"},["stop"])),class:"varnish-copy bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},[L,a("span",Y," Copy to clipboard ",512)])])]),_:1},8,["visible"])}var H=A(x,[["render",j]]);const J=D("",6),z={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},G=D("",26),Z=JSON.parse('{"title":"Share","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"url","slug":"url"},{"level":3,"title":"visible","slug":"visible"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"closed","slug":"closed"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/share.md"}'),K={name:"pages/share.md"},ss=Object.assign(K,{setup(o){let s=g(!1);return(n,e)=>{const t=i("ClientOnly");return F(),B("div",null,[J,a("div",z,[r(t,null,{default:y(()=>[r(H,{visible:m(s),onClosed:e[0]||(e[0]=l=>c(s)?s.value=!1:s=!1)},null,8,["visible"])]),_:1}),a("button",{onClick:e[1]||(e[1]=l=>c(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Share Sheet ")]),G])}}});export{Z as __pageData,ss as default};
