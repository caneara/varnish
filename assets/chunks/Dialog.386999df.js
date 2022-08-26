import{_ as p,o as r,h as u,w as x,c as d,a,n as f,e as v,T as y,m as l}from"../app.ee44914a.js";import{P as m}from"./prompt.e9c44f6c.js";import{C as h}from"./confirm.bd36fb08.js";const _={data(){return{show:this.visible,types:{info:{class:"text-blue-700 dark:text-blue-400",svg:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},error:{class:"text-red-700 dark:text-red-400",svg:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},success:{class:"text-green-700 dark:text-green-400",svg:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}}},props:{message:{type:String,default:""},type:{type:String,default:"success"},visible:{type:Boolean,default:!1}},mounted(){setTimeout(()=>this.show=!0,50),setTimeout(()=>this.show=!1,3e3)}},w={key:0,class:"varnish-notification varnish-font min-w-[250px] max-w-[350px] fixed top-20 right-0 z-[1002]"},b={ref:"container",class:"varnish-container bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center shadow-sm rounded-lg relative z-[30] pl-[15px] pr-6 py-3 mr-[18px]"},C={class:"varnish-icon opacity-70 mr-3 relative top-[.5px] flex self-stretch"},k=["d"],D=["innerHTML"];function T(e,i,t,o,s,n){return r(),u(y,{"enter-to-class":"translate-x-0","leave-from-class":"translate-x-0","enter-active-class":"transition duration-500","leave-active-class":"transition duration-700","leave-to-class":"translate-x-[350px] md:translate-x-[450px]","enter-from-class":"translate-x-[350px] md:translate-x-[450px]"},{default:x(()=>[s.show?(r(),d("div",w,[a("div",b,[a("div",C,[(r(),d("svg",{width:"24",height:"24",style:{fill:"none"},viewBox:"0 0 24 24",class:f(["varnish-svg",s.types[t.type].class||""]),stroke:"currentColor"},[a("path",{"stroke-width":"2",d:s.types[t.type].svg||"","stroke-linecap":"round","stroke-linejoin":"round"},null,8,k)],2))]),a("span",{innerHTML:t.message,class:"varnish-message text-[14px] text-gray-800 dark:text-gray-300 leading-normal break-words relative top-[.5px]"},null,8,D)],512)])):v("",!0)]),_:1})}const g=p(_,[["render",T]]),P={components:{"v-confirm":h,"v-notification":g,"v-prompt":m},data(){return{dialog:{container:null,id:null}}},methods:{createDialogElement(){this.dialog.id=`dialog-${parseInt(performance.now())}`;let e=document.createElement("div");e.id=this.dialog.id,document.body.appendChild(e)},closeDialog(){this.dialog.container._instance.props.visible=!1,setTimeout(()=>{this.dialog.container.unmount(),this.dialog.container=void 0,document.body.removeChild(document.getElementById(this.dialog.id))},300)},confirm(e,i){return this.createDialogElement(),new Promise((t,o)=>{this.dialog.container=l(h,{summary:i,title:e,visible:!0,onCancel:()=>{t(!1),this.closeDialog()},onContinue:()=>{t(!0),this.closeDialog()}}),this.dialog.container.mount(`#${this.dialog.id}`)})},notify(e,i){this.createDialogElement(),this.dialog.container=l(g,{message:i,type:e}),this.dialog.container.mount(`#${this.dialog.id}`),setTimeout(()=>this.closeDialog(),3500)},prompt(e,i,t,o="",s=1){return this.createDialogElement(),new Promise((n,B)=>{this.dialog.container=l(m,{label:t,lines:s,summary:i,title:e,visible:!0,onCancel:()=>{n(o),this.closeDialog()},onContinue:c=>{n(["",null,void 0].includes(c)?o:c),this.closeDialog()}}),this.dialog.container.mount(`#${this.dialog.id}`)})}}};export{P as D};