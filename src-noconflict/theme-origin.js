ace.define("ace/theme/origin",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-origin";
exports.cssText = ".ace-origin .ace_gutter {\
background: rgba(0, 0, 0, 0);\
color: #8F908A\
}\
.ace-origin .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-origin {\
background-color: #272822;\
color: #F8F8F2\
}\
.ace-origin .ace_cursor {\
color: #F8F8F0\
}\
.ace-origin .ace_marker-layer .ace_selection {\
background: rgba(73, 72, 62, 0.5)\
}\
.ace-origin.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-origin .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-origin .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-origin .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.2);\
}\
.ace-origin .ace_gutter-active-line {\
background-color: rgba(0, 0, 0, 0.2);\
}\
.ace-origin .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-origin .ace_invisible {\
color: #52524d\
}\
.ace-origin .ace_entity.ace_name.ace_tag,\
.ace-origin .ace_keyword,\
.ace-origin .ace_meta.ace_tag,\
.ace-origin .ace_storage {\
color: #FF2272\
}\
.ace-origin .ace_punctuation,\
.ace-origin .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-origin .ace_constant.ace_character,\
.ace-origin .ace_constant.ace_language,\
.ace-origin .ace_constant.ace_numeric,\
.ace-origin .ace_constant.ace_other {\
color: #7F77FF\
}\
.ace-origin .ace_invalid {\
color: #F8F8F0;\
background-color: #FF2272\
}\
.ace-origin .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #7F77FF\
}\
.ace-origin .ace_support.ace_constant,\
.ace-origin .ace_support.ace_function {\
color: #00D6FF\
}\
.ace-origin .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-origin .ace_storage.ace_type,\
.ace-origin .ace_support.ace_class,\
.ace-origin .ace_support.ace_type {\
font-style: italic;\
color: #00D6FF\
}\
.ace-origin .ace_entity.ace_name.ace_function,\
.ace-origin .ace_entity.ace_other,\
.ace-origin .ace_entity.ace_other.ace_attribute-name,\
.ace-origin .ace_variable {\
color: #A6E22E\
}\
.ace-origin .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-origin .ace_string {\
color: #E6DB74\
}\
.ace-origin .ace_comment {\
color: #75715E\
}\
.ace-origin .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/origin"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
