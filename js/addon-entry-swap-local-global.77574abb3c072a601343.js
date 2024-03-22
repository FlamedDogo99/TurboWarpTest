(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[54],{1593:function(e,t,a){(e.exports=a(9)(!1)).push([e.i,".sa-swap-local-global-hint {\n  padding-bottom: 1rem;\n}\n.sa-swap-local-global-stage {\n  /* resolves scratch class style conflict */\n  display: block;\n}\n",""])},1667:function(e,t,a){"use strict";a.r(t),a.d(t,"resources",(function(){return n}));var s=a(1593);const n={"userscript.js":async function(e){let{addon:t,msg:a,console:s}=e;const n=await t.tab.traps.getBlockly(),i=t.tab.traps.vm,l=e=>e.isStage?n.ScratchMsgs.translate("SENSING_OF_STAGE","Stage"):e.getName(),o=e=>i.editingTarget.lookupVariableById(e),r=()=>i.editingTarget.isStage,c=(e,t)=>{"string"==typeof t&&(t=e.getVariableById(t)),e.variableMap_.deleteVariable(t)};let d=null;const p=()=>{d&&(d(),d=null)},u=function(e){const t=this.getEventWorkspace_();e?(d=m(t,this.varId),c(t,this.varId)):(t.createVariable(this.varName,this.varType,this.varId,this.isLocal,this.isCloud),p())},g=function(e){const t=this.getEventWorkspace_();e?(t.createVariable(this.varName,this.varType,this.varId,this.isLocal,this.isCloud),p()):(d=m(t,this.varId),c(t,this.varId))},b=()=>n.Events.fireNow_(),m=(e,t)=>{const a=i.runtime._monitorState.get(t),s=o(t);return()=>{b();const n=o(t);if(n&&(n.value=s.value),a){a.visible&&i.runtime.monitorBlocks.changeBlock({id:t,element:"checkbox",value:!0});const e=!i.runtime.getTargetForStage().variables[t];let l=a;if(e){const e=i.editingTarget;l=l.set("targetId",e.id),l=l.set("spriteName",e.getName())}else l=l.set("targetId",null),l=l.set("spriteName",null);if(n.name!==s.name){const e=i.runtime.monitorBlocks,a=e.getBlock(t);a&&(l=l.set("params",e._getBlockParams(a)))}i.runtime.requestAddMonitor(l)}n.name!==s.name&&((e,t)=>{const a=e.getVariableById(t);for(const t of e.getAllBlocks())t.updateVarName(a)})(e,t)}},h=(e,t,s)=>{const o="☁ ",d=e.name,p=e.getId(),h=e.type,v=e.isLocal,f=e.isCloud;if(v===t&&f===s)return;if(s&&t)return void alert(a("cant-convert-cloud"));const k=i.editingTarget;if(v!==t)if(t){if(r())return void alert(a("cant-convert-stage"));const e=(e=>i.runtime.targets.filter((e=>e.isOriginal)).filter((t=>Object.values(t.blocks._blocks).find((t=>t.fields.LIST&&t.fields.LIST.id===e||t.fields.VARIABLE&&t.fields.VARIABLE.id===e)))))(p);if(!e.every((e=>e===k)))return void(e.length>1?alert(a("cant-convert-to-local",{sprites:e.map(l).join(", ")})):alert(a("cant-convert-used-elsewhere",{sprite:l(e[0])})))}else{const e=((e,t)=>i.runtime.targets.filter((a=>a.isOriginal&&a.lookupVariableByNameAndType(e,t,!0))))(d,h).filter((e=>e!==k));if(e.length>0)return void alert(a("cant-convert-conflict",{sprites:e.map(l).join(", ")}))}let y=d;f!==s&&(s?y=o+d:d.startsWith(o)&&(y=d.replace(o,"")));const C=e.workspace,E=m(C,p);n.Events.setGroup(!0);try{c(C,e),C.createVariable(y,h,p,t,s)}finally{n.Events.setGroup(!1)}b();const S=C.undoStack_,_=S[S.length-1],I=S[S.length-2];_ instanceof n.Events.VarCreate&&I instanceof n.Events.VarDelete&&(_.run=g,I.run=u),E()},v=e=>{if(t.self.disabled)return;const s=document.querySelector('[class^="prompt_body_"]');if(!s)return;const n=s.parentElement.querySelector('[class^="modal_header-item_"]');n&&(""===e.type?n.textContent=a("edit-variable-header"):n.textContent=a("edit-list-header"));const l=document.createElement("div");t.tab.displayNoneWhileDisabled(l);const o=(e,t)=>{const a=document.createElement("label"),s=document.createElement("input");"checkbox"===t?s.type="checkbox":(s.name="variableScopeOption",s.type="radio",s.value=t),a.appendChild(s);const n=document.createElement("span");return n.textContent=e,a.appendChild(n),{outer:a,label:n,input:s}},c=t.tab.scratchClass("prompt_disabled-label"),d=document.createElement("div");d.className=t.tab.scratchClass("prompt_info-message","prompt_cloud-option",{others:"sa-swap-local-global-stage"}),d.appendChild(Object.assign(document.createElement("span"),{textContent:t.tab.scratchMessage("gui.gui.variablePromptAllSpritesMessage")}));const p=document.createElement("div");p.className=t.tab.scratchClass("prompt_options-row","prompt_cloud-option");const u=o(t.tab.scratchMessage("gui.gui.variableScopeOptionAllSprites"),"global"),g=o(t.tab.scratchMessage("gui.gui.variableScopeOptionSpriteOnly"),"local");u.input.checked=!e.isLocal,g.input.checked=e.isLocal,p.appendChild(u.outer),p.appendChild(g.outer);const b=document.createElement("div");b.className=t.tab.scratchClass("prompt_cloud-option");const m=o(t.tab.scratchMessage("gui.gui.cloudVariableOption"),"checkbox");m.input.checked=e.isCloud,i.runtime.canAddCloudVariable()||e.isCloud||(m.input.disabled=!0,b.classList.add(c)),b.appendChild(m.outer);const h=()=>{const e=m.input.checked;g.input.disabled=e,g.label.classList.toggle(c,e),e&&u.input.click()};m.input.addEventListener("change",h),h();let v=!1;return r()?l.appendChild(d):(v=!0,l.appendChild(p)),""===e.type&&(()=>{const e=document.querySelector('[class^="gui_blocks-wrapper_"]');let a=e[t.tab.traps.getInternalKey(e)];for(;;){var s,n;if(!a)return!1;const e=null===(s=a.stateNode)||void 0===s||null===(n=s.props)||void 0===n?void 0:n.canUseCloud;if("boolean"==typeof e)return e;a=a.child}})()&&(v=!0,l.appendChild(b)),v&&l.prepend(Object.assign(document.createElement("div"),{textContent:a("edit"),className:"sa-swap-local-global-hint"})),s.insertBefore(l,s.lastChild),{isLocal:()=>g.input.checked,isCloud:()=>m.input.checked}},f=n.Variables.renameVariable;n.Variables.renameVariable=function(e,a,s){const n=f.call(this,e,a,(function(){s&&s(...arguments),!t.self.disabled&&i&&h(a,i.isLocal(),i.isCloud())})),i=v(a);return n},t.tab.createBlockContextMenu(((e,s)=>{if(!t.self.disabled&&("data"===s.getCategory()||"data-lists"===s.getCategory())){const t=s.workspace.getVariableById(s.getVars()[0]);t&&(e.length>0&&(e[0].text===n.ScratchMsgs.translate("RENAME_VARIABLE")?e[0].text=a("edit-variable-option"):e[0].text===n.ScratchMsgs.translate("RENAME_LIST")&&(e[0].text=a("edit-list-option"))),e.push({enabled:!0,separator:!0,text:a("to-".concat(t.isLocal?"global":"local")),callback:()=>h(t,!t.isLocal,t.isCloud)}))}return e}),{flyout:!0,blocks:!0})},"style.css":a.n(s).a}}}]);
//# sourceMappingURL=addon-entry-swap-local-global.77574abb3c072a601343.js.map