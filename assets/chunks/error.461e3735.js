import{U as o}from"./Utilities.fd907a34.js";import{_ as l,o as s,c as i,b as a}from"../app.8e352128.js";const c={mixins:[o],props:{beforeScroll:{type:Function,default:null},scrollDelay:{type:Number,default:0},value:{type:String,default:""}},computed:{content(){return this.value.replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;").replaceAll(`
`,"<br />")}},watch:{value:function(e,t){this.blank(e)||this.$nextTick(()=>this.handleRevisedContent())}},methods:{handleRevisedContent(){this.isFirstErrorOnPage()&&(this.beforeScroll!==null&&this.beforeScroll(),setTimeout(()=>this.scrollToInstance(),this.scrollDelay))},isFirstErrorOnPage(){return document.querySelector(".varnish-error").isSameNode(this.$el)},scrollToInstance(){this.$el.scrollIntoView({behavior:"smooth",block:"center"})}}},u=["innerHTML"];function h(e,t,r,p,d,n){return e.blank(r.value)?a("",!0):(s(),i("label",{key:0,innerHTML:n.content,class:"varnish-error varnish-font block font-sans font-semibold text-[13px] text-red-700 dark:text-red-300 text-right uppercase tracking-[.2px] my-2"},null,8,u))}const b=l(c,[["render",h]]);export{b as E};