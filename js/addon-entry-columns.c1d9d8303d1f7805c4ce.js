(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[12],{1595:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'[class*="blocks_blocks_"] .blocklyToolboxDiv {\n  width: 310px;\n  height: auto !important;\n}\n\n.scratchCategoryMenu {\n  width: 100%;\n  columns: 2;\n  column-gap: 0.5rem;\n  padding: 0.25rem;\n}\n\n.scratchCategorySecondMenu {\n  columns: 1;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding-bottom: 2.25rem;\n}\n\n.scratchCategorySecondMenu:empty {\n  padding-top: 0;\n  padding-bottom: 2rem;\n}\n\n.scratchCategoryMenuItem {\n  display: inline-flex; /* inline so that it isn\'t split between both columns */\n  width: 100%;\n  padding: 0.25rem;\n  border-radius: 0.875rem;\n}\n\n.scratchCategoryItemBubble,\n.scratchCategoryItemIcon {\n  margin: 0;\n  margin-inline-end: 0.5rem;\n}\n\n.scratchCategoryMenuItemLabel {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n[class*="gui_extension-button-container_"] {\n  top: var(--sa-add-extension-button-y);\n  bottom: auto;\n  margin-inline-start: 0.5rem;\n  width: calc(308px - 1rem);\n  height: calc(1.75rem - 2px);\n  background-color: transparent;\n  border-color: var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n}\n\n/* [dir] is for specificity to override editor-stage-left */\n[dir] [class*="gui_extension-button-container_"] {\n  border-radius: 0.25rem;\n}\n\n[class*="gui_extension-button-container_"]:hover {\n  background-color: var(--editorDarkMode-accent, white);\n}\n\n[class*="gui_extension-button-container_"]::before {\n  display: none;\n}\n\n[class*="gui_extension-button_"] {\n  display: flex;\n  align-items: center;\n  padding-inline: 0;\n}\n\n[class*="gui_extension-button-icon_"] {\n  filter: var(--editorDarkMode-categoryMenu-invertedFilter, brightness(0.4));\n}\n\n[class*="gui_extension-button-container_"]:hover [class*="gui_extension-button-icon_"] {\n  filter: var(--editorDarkMode-accent-invertedFilter, brightness(0.4));\n}\n\n.sa-add-extension-label {\n  color: var(--editorDarkMode-categoryMenu-text, #575e75);\n  font-size: 0.65rem;\n}\n\n[class*="gui_extension-button-container_"]:hover .sa-add-extension-label {\n  color: var(--editorDarkMode-accent-text, #575e75);\n  font-size: 0.65rem;\n}\n\n/* hide-flyout compatibility */\n\n[class*="gui_tabs_"] {\n  --sa-flyout-width: 310px;\n  --sa-category-width: 0;\n}\n\n.sa-flyout-placeHolder {\n  top: calc(var(--sa-flyout-y));\n}\n',""])},1669:function(t,e,n){"use strict";n.r(e),n.d(e,"resources",(function(){return s}));var o=n(1595);const s={"userscript.js":async function(t){let{addon:e,msg:n,console:o}=t;const s=await e.tab.traps.getBlockly(),i=s.Toolbox.prototype.position;s.Toolbox.prototype.position=function(){i.call(this),this.HtmlDiv&&!this.HtmlDiv._observer&&(this.HtmlDiv._observer=new ResizeObserver((()=>{this.flyout_.position()})),this.HtmlDiv._observer.observe(this.HtmlDiv))};const a=s.VerticalFlyout.prototype.position;s.VerticalFlyout.prototype.position=function(){if(a.call(this),e.self.disabled||!this.isVisible())return;var t=this.targetWorkspace_.getMetrics();if(!t)return;var n=this.toolboxPosition_===s.TOOLBOX_AT_RIGHT?t.viewWidth-3:0,o=this.parentToolbox_.HtmlDiv.offsetHeight;this.width_=this.parentToolbox_.getWidth(),this.height_=Math.max(0,t.viewHeight-o),this.setBackgroundPath_(this.width_,this.height_),this.svgGroup_.setAttribute("width",this.width_),this.svgGroup_.setAttribute("height",this.height_);var i="translate("+n+"px,"+o+"px)";s.utils.setCssTransform(this.svgGroup_,i),this.scrollbar_&&(this.scrollbar_.setOrigin(n+(this.toolboxPosition_===s.TOOLBOX_AT_RIGHT?0:this.width_-this.getWidth()),o),this.scrollbar_.resize());const r=this.svgGroup_.closest("[class*='gui_tab-panel_']");r.style.setProperty("--sa-add-extension-button-y","".concat(o-33,"px")),r.parentElement.style.setProperty("--sa-flyout-y","".concat(o,"px"))};const r=s.VerticalFlyout.prototype.getWidth;s.VerticalFlyout.prototype.getWidth=function(){let t=r.call(this);return e.self.disabled||(t+=60),t};const l=s.Toolbox.CategoryMenu.prototype.createDom;s.Toolbox.CategoryMenu.prototype.createDom=function(){l.call(this),e.self.disabled||(this.secondTable=document.createElement("div"),this.secondTable.className="scratchCategorySecondMenu "+(this.parent_.horizontalLayout_?"scratchCategoryMenuHorizontal":"scratchCategoryMenu"),this.parentHtml_.appendChild(this.secondTable))};const c=s.Toolbox.CategoryMenu.prototype.populate;s.Toolbox.CategoryMenu.prototype.populate=function(t){if(!t)return;const n=["motion","looks","sound","events","control","sensing","operators","variables","lists","myBlocks"],o=[],i=t.cloneNode(!0);e.self.disabled||i.childNodes.forEach((t=>{"category"!==t.tagName||n.includes(t.id)||(o.push(t.cloneNode(!0)),t.remove())})),c.call(this,i);for(const t of o){const e=document.createElement("div");e.className="scratchCategoryMenuRow",this.secondTable.appendChild(e),t&&this.categories_.push(new s.Toolbox.Category(this,e,t))}e.self.disabled||(this.height_=this.table.offsetHeight+this.secondTable.offsetHeight)};const d=s.Toolbox.CategoryMenu.prototype.dispose;function u(){const t=s.getMainWorkspace(),n=t.getToolbox();if(!n)return;const o=n.categoryMenu_;o&&(o.secondTable&&!e.self.disabled||(o.dispose(),o.createDom(),n.populate_(t.options.languageTree),n.position()))}function h(){e.self.disabled?document.body.classList.remove("sa-columns-enabled"):document.body.classList.add("sa-columns-enabled")}for(s.Toolbox.CategoryMenu.prototype.dispose=function(){d.call(this),this.secondTable&&(this.secondTable.remove(),this.secondTable=null)},u(),e.self.addEventListener("disabled",u),e.self.addEventListener("reenabled",u),h(),e.self.addEventListener("disabled",h),e.self.addEventListener("reenabled",h);;){const t=await e.tab.waitForElement("[class*='gui_extension-button_']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],condition:()=>!e.tab.redux.state.scratchGui.mode.isPlayerOnly}),n=Object.assign(document.createElement("span"),{className:"sa-add-extension-label",innerText:e.tab.scratchMessage("gui.gui.addExtension")});e.tab.displayNoneWhileDisabled(n),t.appendChild(n),t.removeAttribute("title")}},"style.css":n.n(o).a}}}]);
//# sourceMappingURL=addon-entry-columns.c1d9d8303d1f7805c4ce.js.map