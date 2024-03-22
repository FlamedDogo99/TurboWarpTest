(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[61],{1575:function(e,t,a){var n=a(213);(e.exports=a(9)(!1)).push([e.i,'/* Change z-indexes to allow more than 3 tabs */\n[class*="gui_tab_"][class*="gui_is-selected_"] {\n  z-index: 10 !important;\n}\n[class*="gui_tab_"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*="gui_tab_"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*="gui_tab_"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*="gui_tab_"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url('+n(a(1576))+');\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n\n[dir="rtl"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager-too-big {\n  display: none;\n  cursor: pointer;\n  font: inherit;\n  font-style: italic;\n  color: inherit;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 8px;\n  opacity: 0.8;\n  width: 100%;\n  text-align: left;\n}\n.sa-var-manager-too-big:hover {\n  text-decoration: underline;\n}\n[data-too-big="true"] .sa-var-manager-too-big {\n  display: block;\n}\n[data-too-big="true"] .sa-var-manager-value-input {\n  display: none;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid var(--ui-black-transparent);\n  text-align: left;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n',""])},1576:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},1620:function(e,t,a){"use strict";a.r(t),a.d(t,"resources",(function(){return i}));var n=a(1575);const i={"userscript.js":async function(e){let{addon:t,console:a,msg:n}=e;const i=t.tab.traps.vm;let s=[],r=[],c=!1;const o=document.createElement("div");o.classList.add(t.tab.scratchClass("asset-panel_wrapper"),"sa-var-manager");const l=document.createElement("input");l.placeholder=n("search"),l.className=t.tab.scratchClass("input_input-form",{others:"sa-var-manager-searchbox"}),l.addEventListener("input",(e=>{for(const e of s)e.handleSearch(l.value);for(const e of r)e.handleSearch(l.value);I()})),o.appendChild(l);const d=document.createElement("div"),u=document.createElement("span"),g=document.createElement("table");u.className="sa-var-manager-heading",u.innerText=n("for-this-sprite"),d.appendChild(u),d.appendChild(g);const h=document.createElement("div"),p=document.createElement("span"),b=document.createElement("table");p.className="sa-var-manager-heading",p.innerText=n("for-all-sprites"),h.appendChild(p),h.appendChild(b),o.appendChild(d),o.appendChild(h);const M=document.createElement("li");t.tab.displayNoneWhileDisabled(M,{display:"flex"}),M.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab"),t.tab.scratchClass("gui_tab")),M.id="react-tabs-sa-variable-manager";const m=t.tab.recolorable();m.draggable=!1,m.src=t.self.getResource("/icon.svg");const v=document.createElement("span");function I(){let e=s.filter((e=>"none"!==e.row.style.display)),t=r.filter((e=>"none"!==e.row.style.display));u.style.display=0===e.length?"none":"",p.style.display=0===t.length?"none":""}v.innerText=n("variables"),M.appendChild(m),M.appendChild(v);const A=new WeakMap,x=new IntersectionObserver((e=>{for(const t of e){A.get(t.target).setVisible(t.isIntersecting)}}),{rootMargin:"100px"});class E{constructor(e,t){this.scratchVariable=e,this.target=t,this.visible=!1,this.ignoreTooBig=!1,this.buildDOM()}updateValue(e){if(!this.visible&&!e)return;let t,a;if("list"===this.scratchVariable.type?(t=this.scratchVariable.value.join("\n"),a=5e6):(t=this.scratchVariable.value,a=1e6),!this.ignoreTooBig&&t.length>a)return this.input.value="",void(this.row.dataset.tooBig=!0);this.row.dataset.tooBig=!1,t!==this.input.value&&(this.input.disabled=!1,this.input.value=t)}handleSearch(e){this.scratchVariable.name.toLowerCase().includes(e.toLowerCase())||!e?(this.row.style.display="",this.updateValue(!0)):this.row.style.display="none"}resizeInputIfList(){if("list"===this.scratchVariable.type){this.input.style.height="auto";const e=Math.min(1e3,this.input.scrollHeight);e>0&&(this.input.style.height=e+"px")}}setVisible(e){this.visible!==e&&(this.visible=e,e&&this.updateValue())}buildDOM(){const e="sa-variable-manager-".concat(this.scratchVariable.id),t=document.createElement("tr");this.row=t;const a=document.createElement("td");a.className="sa-var-manager-name";const s=document.createElement("input");s.value=this.scratchVariable.name,s.htmlFor=e;s.addEventListener("keydown",(e=>{"Enter"===e.key&&e.target.blur()})),s.addEventListener("focusout",(e=>{e.preventDefault();const t=Blockly.getMainWorkspace();let a=s.value;if(a===this.scratchVariable.name)return;this.scratchVariable.isCloud&&(a.startsWith("☁")?a.startsWith("☁ ")||(a=a.substring(0,1)+" "+a.substring(1)):a="☁ "+a);let n=!1;if(this.target.isStage){n=i.runtime.getAllVarNamesOfType(this.scratchVariable.type).includes(a)}else n=!!t.getVariable(a,this.scratchVariable.type);!a.trim()||n?s.value=this.scratchVariable.name:(t.renameVariableById(this.scratchVariable.id,a),s.value!==a&&(s.value=a))})),s.addEventListener("focus",(e=>{c=!0,o.classList.add("freeze")})),s.addEventListener("blur",(e=>{c=!1,o.classList.remove("freeze")})),a.appendChild(s),A.set(t,this),x.observe(t);const r=document.createElement("td");r.className="sa-var-manager-value";const d=document.createElement("button");let u;this.tooBigElement=d,d.textContent=n("too-big"),d.className="sa-var-manager-too-big",d.addEventListener("click",(()=>{this.ignoreTooBig=!0,this.updateValue(!0)})),u="list"===this.scratchVariable.type?document.createElement("textarea"):document.createElement("input"),u.className="sa-var-manager-value-input",u.id=e,this.input=u,this.updateValue(!0),"list"===this.scratchVariable.type&&this.input.addEventListener("input",(()=>this.resizeInputIfList()),!1);u.addEventListener("keydown",(e=>{"INPUT"===e.target.nodeName&&"Enter"===e.key&&e.target.blur()})),u.addEventListener("focusout",(e=>{e.preventDefault(),"list"===this.scratchVariable.type?i.setVariableValue(this.target.id,this.scratchVariable.id,u.value.split("\n")):i.setVariableValue(this.target.id,this.scratchVariable.id,u.value),u.blur()})),u.addEventListener("focus",(e=>{c=!0,o.classList.add("freeze")})),u.addEventListener("blur",(e=>{c=!1,o.classList.remove("freeze")})),r.appendChild(u),r.appendChild(d),t.appendChild(a),t.appendChild(r),this.handleSearch(l.value)}}function y(){var e,a,n;if(3!==(null===(e=t.tab.redux.state)||void 0===e||null===(a=e.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)||c)return;const o=i.runtime.getEditingTarget(),l=i.runtime.getTargetForStage();for(s=o.isStage?[]:Object.values(o.variables).filter((e=>""===e.type||"list"===e.type)).map((e=>new E(e,o))),r=Object.values(l.variables).filter((e=>""===e.type||"list"===e.type)).map((e=>new E(e,l))),I();g.firstChild;)g.removeChild(g.firstChild);for(;b.firstChild;)b.removeChild(b.firstChild);for(const e of s)g.appendChild(e.row),e.resizeInputIfList();for(const e of r)b.appendChild(e.row),e.resizeInputIfList()}function D(e){if(e){M.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected"));document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend",o),y()}else M.classList.remove(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected")),o.remove(),s=[],r=[]}M.addEventListener("click",(e=>{t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:3})})),t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",(e=>{let{detail:a}=e;if("scratch-gui/navigation/ACTIVATE_TAB"===a.action.type){const e=document.body.contains(o),t=3===a.action.activeTabIndex;e&&!t&&queueMicrotask((()=>window.dispatchEvent(new Event("resize")))),D(t)}else"scratch-gui/mode/SET_PLAYER"===a.action.type&&(a.action.isPlayerOnly||3!==t.tab.redux.state.scratchGui.editorTab.activeTabIndex||queueMicrotask((()=>D(!0))))})),i.runtime.on("PROJECT_LOADED",(()=>{try{y()}catch(e){a.error(e)}})),i.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE",(()=>{try{y()}catch(e){a.error(e)}}));const L=i.runtime._step;for(i.runtime._step=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const o=L.call(this,...n);try{!function(){var e,a,n;if(3===(null===(e=t.tab.redux.state)||void 0===e||null===(a=e.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)&&!c){for(const e of s)e.updateValue();for(const e of r)e.updateValue()}}()}catch(e){a.error(e)}return o},t.self.addEventListener("disabled",(()=>{3===t.tab.redux.state.scratchGui.editorTab.activeTabIndex&&t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:2})}));;)await t.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),t.tab.appendToSharedSpace({space:"afterSoundTab",element:M,order:3})},"style.css":a.n(n).a,"icon.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzg1NWNkNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo=","search.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="}}}]);
//# sourceMappingURL=addon-entry-variable-manager.fea7785e4f577a79b2c5.js.map