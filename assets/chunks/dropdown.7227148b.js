import{C as v}from"./clear.dc238cd7.js";import{E as h}from"./error.8dfb18c2.js";import{L as g}from"./label.34028bd9.js";import{U as b}from"./Utilities.0e2b559b.js";import{F as V}from"./Foundation.ccff8032.js";import{_ as c,r as l,o as i,c as r,a,n as d,F as k,k as y,b as s,t as $}from"../app.5ad54664.js";const C={mixins:[b,V],components:{"v-clear":v,"v-error":h,"v-label":g},emits:["change"],props:{items:{type:[Array,Object],default:[]},itemTextKey:{type:String,default:""},itemValueKey:{type:String,default:""}},mounted(){if(typeof this.modelValue=="boolean"&&this.$emit("update:modelValue",this.modelValue?1:0),this.items.find(n=>n[this.itemValueKey]===this.modelValue)===void 0||[null,void 0].includes(this.modelValue))return this.change(""),this.$refs.input.selectedIndex=-1;this.modelValue.toString()===""&&(this.$refs.input.selectedIndex=-1)},methods:{change(e=void 0){var n,o;this.$refs.input.blur(),this.fault="",e!==void 0&&(!["",null].includes(e)&&!isNaN(e)&&(e=Number(e)),this.$emit("update:modelValue",e),this.$emit("change",{text:(o=(n=this.$refs.input[this.$refs.input.selectedIndex])==null?void 0:n.text)!=null?o:"",value:e}))}}},w={class:"varnish-dropdown varnish-font w-full"},F=["id","name","value"],K=["value","selected"];function N(e,n,o,T,D,u){const m=l("v-label"),p=l("v-clear"),f=l("v-error");return i(),r("div",w,[a("div",{onMouseover:n[4]||(n[4]=t=>e.hover=!0),onMouseout:n[5]||(n[5]=t=>e.hover=!1),class:"varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300"},[a("select",{id:e.name,ref:"input",name:e.name,value:e.modelValue,onFocus:n[0]||(n[0]=t=>e.focus=!0),onFocusout:n[1]||(n[1]=t=>e.focus=!1),onChange:n[2]||(n[2]=t=>u.change(t.target.value)),class:d([e.blank(e.modelValue)?"":"pt-[25px] pb-[6px]","varnish-input w-full h-[51px] bg-inherit font-[470] text-gray-900 dark:text-gray-400 -tracking-[.2px] align-middle text-ellipsis overflow-hidden rounded appearance-none cursor-pointer pl-3"]),style:{"line-height":"1.3","padding-right":"50px","-webkit-padding-end":"50px !important"}},[(i(!0),r(k,null,y(o.items,t=>(i(),r("option",{value:t[o.itemValueKey],selected:e.modelValue===t[o.itemValueKey]?"selected":""},$(t[o.itemTextKey]),9,K))),256))],42,F),s(m,{icon:e.icon,value:e.label,optional:e.optional,optionalText:e.optionalText,focus:!e.blank(e.modelValue),filled:!e.blank(e.modelValue)},null,8,["icon","value","optional","optionalText","focus","filled"]),a("i",{class:d([e.blank(e.modelValue)||!e.blank(e.modelValue)&&!e.hover?"opacity-100":"opacity-0","varnish-caret fas fa-caret-down text-gray-400 dark:text-gray-500 cursor-pointer pointer-events-none absolute top-[19px] right-[19px]"])},null,2),s(p,{focus:e.focus,hover:e.hover,onClick:n[3]||(n[3]=t=>u.change("")),filled:!e.blank(e.modelValue)},null,8,["focus","hover","filled"])],32),s(f,{value:e.fault},null,8,["value"])])}var U=c(C,[["render",N]]);export{U as D};