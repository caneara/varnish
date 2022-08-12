import{M as h}from"./chunks/modal.72536aa8.js";import{U as d}from"./chunks/Utilities.0e2b559b.js";import{_ as A,r as i,o as F,j as v,w as y,a,g as u,c as g,b as r,i as c,d as D,u as B}from"./app.13598014.js";const m={mixins:[d],components:{"v-modal":h},emits:["closed"],props:{url:{type:String,default:""},visible:{type:Boolean,default:!1}},methods:{email(){window.location.href=`mailto:?body=${this.url}`},visit(e){let s=window.open("","_blank","width=550,height=420");s.opener=null,s.location=e}}},x=a("div",{class:"varnish-header font-[650] text-[21px] text-gray-900 dark:text-white text-center -tracking-[.6px] mb-5"}," Share a link with others ",-1),f=a("div",{class:"varnish-summary text-gray-700 dark:text-gray-400 text-center leading-[1.6rem] max-w-[475px] mb-8"}," Select one of the available platforms to share the link on. You can also send the link via email, or copy it to the clipboard. ",-1),b={class:"varnish-platforms grid grid-cols-1 md:grid-cols-2 gap-3"},_=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-twitter text-[18px] text-sky-500 -ml-4"},null,-1),k=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Twitter ",-1),w=[_,k],S=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-facebook text-[18px] text-blue-800/[.80] dark:text-blue-500 -ml-4"},null,-1),T=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Facebook ",-1),E=[S,T],$=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-reddit-alien text-[18px] text-red-700/[.80] dark:text-red-400 -ml-4"},null,-1),q=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on Reddit ",-1),I=[$,q],P=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fab fa-linkedin text-[18px] text-blue-800/[.80] dark:text-blue-500 -ml-4"},null,-1),V=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Share on LinkedIn ",-1),N=[P,V],O=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fas fa-envelope text-16px text-emerald-600/[.80] dark:text-emerald-500 relative top-1px -ml-4"},null,-1),R=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Send via email ",-1),U=[O,R],j=a("i",{class:"varnish-icon w-[31px] min-w-[31px] max-w-[31px] fa-fw fas fa-link text-14px text-gray-500 dark:text-gray-400 relative top-1px -ml-4"},null,-1),Y=a("span",{class:"varnish-text text-[15px] text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 ml-[5px]"}," Copy to clipboard ",-1),L=[j,Y];function M(e,s,n,p,t,l){const C=i("v-modal");return F(),v(C,{visible:n.visible,class:"varnish-share",onClosed:s[6]||(s[6]=o=>e.$emit("closed"))},{default:y(()=>[x,f,a("div",b,[a("div",{onClick:s[0]||(s[0]=o=>l.visit(`https://twitter.com/intent/tweet?url=${n.url}`)),class:"varnish-twitter bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},w),a("div",{onClick:s[1]||(s[1]=o=>l.visit(`https://www.facebook.com/sharer/sharer.php?u=${n.url}`)),class:"varnish-facebook bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},E),a("div",{onClick:s[2]||(s[2]=o=>l.visit(`https://reddit.com/submit?url=${n.url}`)),class:"varnish-reddit bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},I),a("div",{onClick:s[3]||(s[3]=o=>l.visit(`https://www.linkedin.com/shareArticle?mini=true&url=${n.url}`)),class:"varnish-linkedIn bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},N),a("div",{onClick:s[4]||(s[4]=o=>l.email()),class:"varnish-email bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},U),a("div",{onClick:s[5]||(s[5]=o=>e.copy(n.url)),class:"varnish-copy bg-white dark:bg-gray-600 hover:bg-orange-100/[.25] dark:hover:bg-orange-100 border border-gray-300 dark:border-gray-600 flex items-center transition duration-300 rounded-md cursor-pointer group px-6 py-3"},L)])]),_:1},8,["visible"])}var H=A(m,[["render",M]]);const J=D("",6),z={class:"bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8"},G=D("",26),Z=JSON.parse('{"title":"Share","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"url","slug":"url"},{"level":3,"title":"visible","slug":"visible"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"closed","slug":"closed"},{"level":2,"title":"Custom styling","slug":"custom-styling"}],"relativePath":"pages/share.md"}'),K={name:"pages/share.md"},ss=Object.assign(K,{setup(e){let s=u(!1);return(n,p)=>{const t=i("ClientOnly");return F(),g("div",null,[J,a("div",z,[r(t,null,{default:y(()=>[r(H,{visible:B(s),onClosed:p[0]||(p[0]=l=>c(s)?s.value=!1:s=!1)},null,8,["visible"])]),_:1}),a("button",{onClick:p[1]||(p[1]=l=>c(s)?s.value=!0:s=!0),class:"bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md"}," Show Share Sheet ")]),G])}}});export{Z as __pageData,ss as default};
