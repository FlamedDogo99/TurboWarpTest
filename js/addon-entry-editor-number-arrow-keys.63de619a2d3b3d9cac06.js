(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[27],{1671:function(t,e,n){"use strict";n.r(e),n.d(e,"resources",(function(){return r}));const r={"userscript.js":async function(t){let{addon:e}=t;const n={none:0,hundredth:.01,tenth:.1,one:1,ten:10},r=new WeakMap,s=t=>t.includes(".")?t.toString().split(".")[1].length:0,i=(t,e)=>{const n="-"===t[0];let r=n?t.substring(1):t;for(let t=0;t<e;t++)if(-1===r.indexOf("."))r+=0;else if(r.indexOf(".")===r.length-2)r=r.replace(".","");else{const t=r.indexOf("."),e=Array.from(r.replace(".",""));e.splice(t+1,0,"."),r=e.join("")}return BigInt(r)*(n?-1n:1n)};document.body.addEventListener("keydown",(t=>{if(e.self.disabled)return;if(!["ArrowUp","ArrowDown"].includes(t.key))return;if(!((a=t.target).classList.contains("blocklyHtmlInput")||a.matches(".mediaRecorderPopupContent input[type=number]")||a.className.includes("input_input-form_")&&(a.matches("[class*=sprite-info_sprite-info_] [class*=input_input-small_]")||a.matches("[class*=paint-editor_editor-container-top_] input[type=number]"))))return;var a;if(!t.target.value)return;if(!(t=>{if(t.length>30)return!1;try{BigInt(t.replace(".",""))}catch(t){return!1}return!0})(t.target.value))return;t.preventDefault();let l="ArrowUp"===t.key?1:-1;if(e.settings.get("useCustom")){let n=t.shiftKey?e.settings.get("shiftCustom"):t.altKey?e.settings.get("altCustom"):e.settings.get("regularCustom");""===n&&(n=0);let r=parseFloat(n);if(r<0&&(r*=-1),Number.isNaN(r))return;if(!(0===r||r<1e8&&r>99e-8))return;l*=r}else l*=t.shiftKey?n[e.settings.get("shift")]:t.altKey?n[e.settings.get("alt")]:n[e.settings.get("regular")];const o=Math.max(s(t.target.value),s(l.toString())),u=((t,e)=>{const n="-"===t[0];let r=n?t.substring(1):t;for(let t=0;t<e;t++)if(0===r.indexOf("."))r=".0"+r.substring(1);else if(-1===r.indexOf(".")){const t=Array.from(r);t.splice(t.length-1,0,"."),r=t.join("")}else{const t=r.indexOf("."),e=Array.from(r.replace(".",""));e.splice(t-1,0,"."),r=e.join("")}return"."===r[0]&&(r="0"+r),r.includes(".")&&(r=r.replace(/0*$/,"")),r.endsWith(".")&&(r=r.slice(0,-1)),r?(n?"-":"")+r:0})((i(t.target.value,o)+i(l.toString(),o)).toString(),o);if(t.target.className.includes("input_input-form_")){Object.getOwnPropertyDescriptor(t.target.constructor.prototype,"value").set.call(t.target,u.toString()),t.target.dispatchEvent(new Event("input",{bubbles:!0}));const e=300,n=5,s=()=>t.target.dispatchEvent(new Event("blur",{bubbles:!0})),i=document.timeline.currentTime;r.has(t.target)||r.set(t.target,{time:null,steps:-1}),r.get(t.target).time=i;(r.get(t.target).steps+=1)===n?(s(),r.delete(t.target)):setTimeout((()=>{var e;(null===(e=r.get(t.target))||void 0===e?void 0:e.time)===i&&(s(),r.delete(t.target))}),e)}else t.target.value=u.toString()}))}}}}]);
//# sourceMappingURL=addon-entry-editor-number-arrow-keys.63de619a2d3b3d9cac06.js.map