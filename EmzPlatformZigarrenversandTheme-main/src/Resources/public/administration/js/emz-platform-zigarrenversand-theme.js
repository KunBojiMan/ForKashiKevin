!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/emzplatformzigarrenversandtheme/",n(n.s="Hoei")}({"3bn/":function(e,t,n){},"5YPu":function(e,t,n){var i=n("jFQ/");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("25b65213",i,!0,{})},"5aGK":function(e,t,n){var i=n("hquC");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("0895c5fc",i,!0,{})},"66NT":function(e,t,n){var i=n("HdaB");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("19af40c9",i,!0,{})},HdaB:function(e,t,n){},Hoei:function(e,t,n){"use strict";n.r(t);n("5aGK");Shopware.Component.register("sw-cms-block-emzimagetextblock",{template:'{% block sw_cms_block_emzimagetextblock_row %}\n<div class="sw-cms-block-emzimagetextblock-row">\n    <div class="sw-cms-block-emzimagetextblock-row__left">\n        <slot name="left-image"></slot>\n        <slot name="left-text"></slot>\n    </div>\n\n    <div class="sw-cms-block-emzimagetextblock-row__right">\n        <slot name="right-image"></slot>\n        <slot name="right-text"></slot>\n    </div>\n{% endblock %}'});n("yGD3");Shopware.Component.register("sw-cms-preview-emzimagetextblock",{template:'{% block sw_cms_block_emzimagetextblock_row_preview %}\n    <div class="sw-cms-preview-emzimagetextblock-row">\n        <div class="sw-cms-preview-emzimagetextblock-row__left">\n            <div class="sw-cms-preview-emzimagetextblock-row__image">\n                <img\n                    :src="\'/administration/static/img/cms/preview_camera_small.jpg\' | asset"\n                    alt=""\n                >\n            </div>\n            <div class="sw-cms-preview-emzimagetextblock-row__text">\n                <h2>Lorem</h2>\n                <p>Lorem ipsum dolor sit amet elitr.</p>\n            </div>\n        </div>\n\n        <div class="sw-cms-preview-emzimagetextblock-row__right">\n            <div class="sw-cms-preview-emzimagetextblock-row__image">\n                <img\n                    :src="\'/administration/static/img/cms/preview_glasses_small.jpg\' | asset"\n                    alt=""\n                >\n            </div>\n            <div class="sw-cms-preview-emzimagetextblock-row__text">\n                <h2>Dolor</h2>\n                <p>Lorem ipsum dolor sit amet elitr.</p>\n            </div>\n        </div>\n    </div>\n{% endblock %}\n'});var i=n("kXsj"),a=n("s83e");Shopware.Locale.extend("de-DE",i),Shopware.Locale.extend("en-GB",a),Shopware.Service("cmsService").registerCmsBlock({name:"emzimagetextblock",label:"sw-cms.blocks.emz-image-text-block.label",category:"text-image",component:"sw-cms-block-emzimagetextblock",previewComponent:"sw-cms-preview-emzimagetextblock",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{"left-image":"emzimageelement","left-text":"emztextelement","right-image":"emzimageelement","right-text":"emztextelement"}});n("no2i");var l=Shopware,o=l.Component,s=l.Mixin,m=l.Filter;o.register("sw-cms-el-emzimageelement",{template:'{% block sw_cms_element_emzimageelement %}\n    <div class="sw-cms-el-emzimageelement">\n        {% block sw_cms_element_emzimageelement_content %}\n            <img\n                :src="mediaUrl"\n                alt=""\n            >\n        {% endblock %}\n    </div>\n{% endblock %}\n',mixins:[s.getByName("cms-element")],computed:{mediaUrl:function(){var e=this.assetFilter("/administration/static/img/cms/preview_mountain_small.jpg"),t=this.element.data.media,n=this.element.config.media;if("mapped"===n.source){var i=this.getDemoValue(n.value);return null!=i&&i.url?i.url:e}if("default"===n.source){n.value.slice(n.value.lastIndexOf("/")+1);return this.assetFilter("/EmzPlatformZigarrenversandTheme-main/static/img/cms/preview_emzimagetexteditor_element.png")}return null!=t&&t.id?this.element.data.media.url:null!=t&&t.url?this.assetFilter(n.url):e},assetFilter:function(){return m.getByName("asset")},mediaConfigValue:function(){var e,t,n;return null===(e=this.element)||void 0===e||null===(t=e.config)||void 0===t||null===(n=t.sliderItems)||void 0===n?void 0:n.value}},watch:{cmsPageState:{deep:!0,handler:function(){this.$forceUpdate()}},mediaConfigValue:function(e){var t,n,i,a,l,o,s=null===(t=this.element)||void 0===t||null===(n=t.data)||void 0===n||null===(i=n.media)||void 0===i?void 0:i.id;"static"===(null===(a=this.element)||void 0===a||null===(l=a.config)||void 0===l||null===(o=l.media)||void 0===o?void 0:o.source)&&s&&e!==s&&(this.element.config.media.value=s)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("emzimageelement"),this.initElementData("emzimageelement")}}});n("bUlq");function c(e,t,n,i,a,l,o){try{var s=e[l](o),m=s.value}catch(e){return void n(e)}s.done?t(m):Promise.resolve(m).then(i,a)}Shopware.Component.register("sw-cms-el-config-emzimageelement",{template:'{% block sw_cms_element_emzimageelement_config %}\n    <div class="sw-cms-el-preview-emzimageelement">\n        <sw-cms-mapping-field valueTypes="entity"\n                              entity="media"\n                              v-model="element.config.media"\n                              class="sw-cms-el-config-emzimageelement_teaser-image">\n\n            <sw-media-upload-v2 variant="regular"\n                                :label="$tc(\'sw-cms.elements.emzimageelement.labelTeaserImage\')"\n                                :uploadTag="uploadTag"\n                                :source="previewSource"\n                                :allowMultiSelect="false"\n                                :defaultFolder="cmsPageState.pageEntityName"\n                                :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n                                @media-upload-sidebar-open="onOpenMediaModal"\n                                @media-upload-remove-image="onImageRemove">\n            </sw-media-upload-v2>\n\n            <div class="sw-cms-el-config-emzimageelement__mapping-preview" slot="preview" slot-scope="{ demoValue }">\n                <img :src="demoValue.url" v-if="demoValue.url">\n                <sw-alert class="sw-cms-el-config-emzimageelement__preview-info" variant="info" v-else>\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </sw-cms-mapping-field>\n\n        <sw-upload-listener\n            :uploadTag="uploadTag"\n            autoUpload\n            @media-upload-finish="onImageUpload">\n        </sw-upload-listener>\n\n        <sw-media-modal-v2\n            variant="regular"\n            v-if="mediaModalIsOpen"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            :entityContext="cmsPageState.entityName"\n            :allowMultiSelect="false"\n            :initialFolderId="cmsPageState.defaultMediaFolderId"\n            @media-upload-remove-image="onImageRemove"\n            @media-modal-selection-change="onSelectionChanges"\n            @modal-close="onCloseModal">\n        </sw-media-modal-v2>\n    </div>\n{% endblock %}\n',mixins:["cms-element"],inject:["repositoryFactory","cmsService"],data:function(){return{mediaModalIsOpen:!1}},computed:{uploadTag:function(){return"cms-element-media-config-".concat(this.element.id)},mediaRepository:function(){return this.repositoryFactory.create("media")},cmsPageState:function(){return Shopware.State.get("cmsPageState")},previewSource:function(){return this.element.data&&this.element.data.media&&this.element.data.media.id?this.element.data.media:this.element.config.media.value}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("emzimageelement")},onImageUpload:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.targetId,t.next=3,n.mediaRepository.get(i,Shopware.Context.api);case 3:a=t.sent,n.element.config.media.value=a.id,n.updateElementData(a),n.$emit("element-update",n.element);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,a){var l=t.apply(e,n);function o(e){c(l,i,a,o,s,"next",e)}function s(e){c(l,i,a,o,s,"throw",e)}o(void 0)}))})()},onImageRemove:function(){this.element.config.media.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onSelectionChanges:function(e){var t=e[0];this.element.config.media.value=t.id,this.updateElementData(t),this.$emit("element-update",this.element)},updateElementData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$set(this.element.data,"mediaId",null===e?null:e.id),this.$set(this.element.data,"media",e)},onCloseModal:function(){this.mediaModalIsOpen=!1},onOpenMediaModal:function(){this.mediaModalIsOpen=!0}}});n("66NT");Shopware.Component.register("sw-cms-el-preview-emzimageelement",{template:'{% block sw_cms_element_emzimageelement_preview %}\n    <div class="sw-cms-el-preview-emzimageelement">\n        <img :src="\'/EmzPlatformZigarrenversandTheme-main/static/img/cms/preview_emzimagetexteditor_element.png\' | asset">\n    </div>\n{% endblock %}\n\n'});var r=n("SqW3"),d=n("kreO");Shopware.Locale.extend("de-DE",r),Shopware.Locale.extend("en-GB",d),Shopware.Service("cmsService").registerCmsElement({name:"emzimageelement",label:"sw-cms.elements.emz-image-element.label",component:"sw-cms-el-emzimageelement",configComponent:"sw-cms-el-config-emzimageelement",previewComponent:"sw-cms-el-preview-emzimageelement",defaultConfig:{media:{source:"static",value:null,entity:{name:"media"}}}});n("ZcuM");var u=Shopware,p=u.Component,g=u.Mixin;p.register("sw-cms-el-emztextelement",{template:'\n{% block sw_cms_el_emztextelement %}\n<div class="sw-cms-el-emztextelement">\n    <div\n        v-if="element.config.content.source === \'mapped\'"\n        class="sw-cms-el-emz-text-element__mapping-preview content-editor"\n        v-html="$sanitize(demoValue)"\n    ></div>\n\n    <sw-text-editor\n        v-else\n        v-model="element.config.content.value"\n        :disabled="disabled"\n        :vertical-align="element.config.verticalAlign.value"\n        :allow-inline-data-mapping="true"\n        :is-inline-edit="true"\n        sanitize-input\n        @blur="onBlur"\n        @input="onInput"\n    />\n</div>\n{% endblock %}\n',mixins:[g.getByName("cms-element")],data:function(){return{editable:!0,demoValue:""}},watch:{cmsPageState:{deep:!0,handler:function(){this.updateDemoValue()}},"element.config.content.source":{handler:function(){this.updateDemoValue()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("text")},updateDemoValue:function(){"mapped"===this.element.config.content.source&&(this.demoValue=this.getDemoValue(this.element.config.content.value))},onBlur:function(e){this.emitChanges(e)},onInput:function(e){this.emitChanges(e)},emitChanges:function(e){e!==this.element.config.content.value&&(this.element.config.content.value=e,this.$emit("element-update",this.element))}}});var f=Shopware,v=f.Component,w=f.Mixin;v.register("sw-cms-el-config-emztextelement",{template:'\n{% block sw_cms_el_config_emztextelement %}\n<sw-tabs\n    position-identifier="sw-cms-element-config-emztextelement"\n    class="sw-cms-el-config-text__tabs"\n    default-item="content"\n>\n\n    <template slot-scope="{ active }">\n        {% block sw_cms_el_config_text_tab_content %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n            name="content"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n        </sw-tabs-item>\n        {% endblock %}\n        {% block sw_cms_el_text_config_tab_options %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n            name="settings"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </template>\n\n    <template\n        slot="content"\n        slot-scope="{ active }"\n    >\n        {% block sw_cms_el_text_config_content %}\n        <sw-container\n            v-if="active === \'content\'"\n            class="sw-cms-el-config-text__tab-content"\n        >\n            <sw-cms-mapping-field\n                v-model="element.config.content"\n                :label="$tc(\'sw-cms.elements.text.config.label.content\')"\n                value-types="string"\n            >\n                <sw-text-editor\n                    v-model="element.config.content.value"\n                    :allow-inline-data-mapping="true"\n                    sanitize-input\n                    @input="onInput"\n                    @blur="onBlur"\n                />\n\n                <div\n                    slot="preview"\n                    slot-scope="{ demoValue }"\n                    class="sw-cms-el-config-text__mapping-preview"\n                >\n                    <div v-html="$sanitize(demoValue)"></div>\n                </div>\n            </sw-cms-mapping-field>\n        </sw-container>\n        {% endblock %}\n\n        {% block sw_cms_el_text_config_settings %}\n        <sw-container\n            v-if="active === \'settings\'"\n            class="sw-cms-el-config-text__tab-settings"\n        >\n\n            {% block sw_cms_el_text_config_settings_vertical_align %}\n            <sw-select-field\n                v-model="element.config.verticalAlign.value"\n                :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n            >\n                <option value="flex-start">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                </option>\n                <option value="center">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                </option>\n                <option value="flex-end">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n</sw-tabs>\n{% endblock %}\n',mixins:[w.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("text")},onBlur:function(e){this.emitChanges(e)},onInput:function(e){this.emitChanges(e)},emitChanges:function(e){e!==this.element.config.content.value&&(this.element.config.content.value=e,this.$emit("element-update",this.element))}}});n("5YPu");Shopware.Component.register("sw-cms-el-preview-emztextelement",{template:'\n{% block sw_cms_element_emztextelement_preview %}\n<div class="sw-cms-el-preview-emztextelement">\n    <h2>Lorem ipsum dolor</h2>\n    <p>\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.\n    </p>\n</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"emztextelement",label:"sw-cms.elements.emz-text-element.label",component:"sw-cms-el-emztextelement",configComponent:"sw-cms-el-config-emztextelement",previewComponent:"sw-cms-el-preview-emztextelement",defaultConfig:{content:{source:"static",value:"\n                <h2> DAS PERFEKTE GESCHENK </h2>\n                <p>Sie suchen das passende Zigarren Geschenk? \n                Dann schauen Sie sich doch einmal in unserer \n                Geschenkabteilung um. Egal ob zu Geburtstag \n                oder Weihnachten - mit Zigarren treffen Sie \n                bei einem Liebhaber immer ins Schwarze.</p>\n            ".trim()},verticalAlign:{source:"static",value:null}}})},SZ7m:function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},a=0;a<t.length;a++){var l=t[a],o=l[0],s={id:e+":"+a,css:l[1],media:l[2],sourceMap:l[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return g}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,m=0,c=!1,r=function(){},d=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,a){c=n,d=a||{};var o=i(e,t);return f(o),function(t){for(var n=[],a=0;a<o.length;a++){var s=o[a];(m=l[s.id]).refs--,n.push(m)}t?f(o=i(e,t)):o=[];for(a=0;a<n.length;a++){var m;if(0===(m=n[a]).refs){for(var c=0;c<m.parts.length;c++)m.parts[c]();delete l[m.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],i=l[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(w(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(w(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function w(e){var t,n,i=document.querySelector("style["+u+'~="'+e.id+'"]');if(i){if(c)return r;i.parentNode.removeChild(i)}if(p){var a=m++;i=s||(s=v()),t=_.bind(null,i,a,!1),n=_.bind(null,i,a,!0)}else i=v(),t=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var h,b=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function _(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var l=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(l,o[t]):e.appendChild(l)}}function x(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),d.ssrId&&e.setAttribute(u,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},SqW3:function(e){e.exports=JSON.parse('{"sw-cms":{"elements":{"emz-image-element":{"label":"Bild Element"}}}}')},ZcuM:function(e,t,n){var i=n("dYrm");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("849fb130",i,!0,{})},bUlq:function(e,t,n){var i=n("hqpV");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("3d306ca5",i,!0,{})},dYrm:function(e,t,n){},hqpV:function(e,t,n){},hquC:function(e,t,n){},"jFQ/":function(e,t,n){},kXsj:function(e){e.exports=JSON.parse('{"sw-cms":{"blocks":{"emz-image-text-block":{"label":"Text Bild Block"}}}}')},kreO:function(e){e.exports=JSON.parse('{"sw-cms":{"elements":{"emz-image-element":{"label":"Image Element"}}}}')},no2i:function(e,t,n){var i=n("qNbY");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("5e4ee4d4",i,!0,{})},qNbY:function(e,t,n){},s83e:function(e){e.exports=JSON.parse('{"sw-cms":{"blocks":{"emz-image-text-block":{"label":"Text Image Block"}}}}')},yGD3:function(e,t,n){var i=n("3bn/");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("0e3ae0a7",i,!0,{})}});