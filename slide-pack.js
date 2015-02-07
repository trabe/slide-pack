/*!
SlidePack, a simple slides generator & viewer
http://trabe.github.io/slide-pack/

Copyright (C) 2014 Trabe Soluciones S.L.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, api, executeHooks, hl, processor;

hl = require('highlightjs');

$ = require('zeptojs');

$(function() {
  if ($.os.phone || $.os.tablet) {
    return $('body').addClass('mobile');
  }
});

processor = require('./slide-pack-processor');

api = require('./slide-pack-api');

require('./slide-pack-navigation');

require('./slide-pack-ui');

executeHooks = function() {
  var f;
  if (f = window._slide_pack_process_slides) {
    return f($('section'));
  }
};

$('[data-slide-pack]').each(function() {
  var $article, $slide, $slidePack, slide, slides, _i, _len;
  $slidePack = $(this);
  slides = processor.process($slidePack.text());
  $article = $('<article></article>');
  for (_i = 0, _len = slides.length; _i < _len; _i++) {
    slide = slides[_i];
    $slide = $('<section></section>').addClass(slide.cssClass);
    $slide.html(slide.html);
    $article.append($slide);
  }
  $('body').append($article);
  $slidePack.attr('data-slide-pack-processed', '');
  $slidePack.removeAttr('data-slide-pack');
  return executeHooks();
});

api.init({
  slidePack: $('article')
});

hl.initHighlightingOnLoad();



},{"./slide-pack-api":11,"./slide-pack-navigation":12,"./slide-pack-processor":13,"./slide-pack-ui":14,"highlightjs":2,"zeptojs":3}],2:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function u(e){("start"==e.event?i:c)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");c[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\b[A-Za-z0-9_]+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":E.classPrefix,o='<span class="'+a,i=t?"":"</span>";return o+=e+'">',o+n+i}function d(){if(!w.k)return n(y);var e="",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),"continuous"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,"",!0):"";e.rB?(M+=r,y=""):e.eB?(M+=n(t)+r,y=""):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+="</span>"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y="",a.starts&&b(a.starts,""),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.cN||"<unnamed>")+'"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: "'+e+'"');u(x);for(var w=o||x,L={},M="",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,"",!0)+M);var y="",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+="</span>");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf("Illegal"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),r&&a.push(r),a.join(" ").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR="[a-zA-Z][a-zA-Z0-9_]*",e.UIR="[a-zA-Z_][a-zA-Z0-9_]*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.CLCM={cN:"comment",b:"//",e:"$",c:[e.PWM]},e.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM]},e.HCM={cN:"comment",b:"#",e:"$",c:[e.PWM]},e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("xml",function(){var t="[A-Za-z0-9\\._:-]+",e={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[e,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[e],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:"javascript"}},e,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}});hljs.registerLanguage("clojure-repl",function(){return{c:[{cN:"prompt",b:/^([\w.-]+|\s*#_)=>/,starts:{e:/$/,sL:"clojure",subLanguageMode:"continuous"}}]}});hljs.registerLanguage("cpp",function(t){var i={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","h","c++","h++"],k:i,i:"</",c:[t.CLCM,t.CBCM,t.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},t.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},t.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:i,c:["self"]},{b:t.IR+"::"},{bK:"new throw return",r:0},{cN:"function",b:"("+t.IR+"\\s+)+"+t.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:t.IR+"\\s*\\(",rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:i,r:0,c:[t.CBCM]},t.CLCM,t.CBCM]}]}});hljs.registerLanguage("haskell",function(e){var i={cN:"comment",v:[{b:"--",e:"$"},{b:"{-",e:"-}",c:["self"]}]},c={cN:"pragma",b:"{-#",e:"#-}"},a={cN:"preprocessor",b:"^#",e:"$"},n={cN:"type",b:"\\b[A-Z][\\w']*",r:0},l={cN:"container",b:"\\(",e:"\\)",i:'"',c:[c,i,a,{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TM,{b:"[_a-z][\\w']*"})]},t={cN:"container",b:"{",e:"}",c:l.c};return{aliases:["hs"],k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",c:[{cN:"module",b:"\\bmodule\\b",e:"where",k:"module where",c:[l,i],i:"\\W\\.|;"},{cN:"import",b:"\\bimport\\b",e:"$",k:"import|0 qualified as hiding",c:[l,i],i:"\\W\\.|;"},{cN:"class",b:"^(\\s*)?(class|instance)\\b",e:"where",k:"class family instance where",c:[n,l,i]},{cN:"typedef",b:"\\b(data|(new)?type)\\b",e:"$",k:"data family type newtype deriving",c:[c,i,n,l,t]},{cN:"default",bK:"default",e:"$",c:[n,l,i]},{cN:"infix",bK:"infix infixl infixr",e:"$",c:[e.CNM,i]},{cN:"foreign",b:"\\bforeign\\b",e:"$",k:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",c:[n,e.QSM,i]},{cN:"shebang",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},c,i,a,e.QSM,e.CNM,n,e.inherit(e.TM,{b:"^[_a-z][\\w']*"}),{b:"->|<-"}]}});hljs.registerLanguage("haml",function(){return{cI:!0,c:[{cN:"doctype",b:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",r:10},{cN:"comment",b:"^\\s*(!=#|=#|-#|/).*$",r:0},{b:"^\\s*(-|=|!=)(?!#)",starts:{e:"\\n",sL:"ruby"}},{cN:"tag",b:"^\\s*%",c:[{cN:"title",b:"\\w+"},{cN:"value",b:"[#\\.]\\w+"},{b:"{\\s*",e:"\\s*}",eE:!0,c:[{b:":\\w+\\s*=>",e:",\\s+",rB:!0,eW:!0,c:[{cN:"symbol",b:":\\w+"},{cN:"string",b:'"',e:'"'},{cN:"string",b:"'",e:"'"},{b:"\\w+",r:0}]}]},{b:"\\(\\s*",e:"\\s*\\)",eE:!0,c:[{b:"\\w+\\s*=",e:"\\s+",rB:!0,eW:!0,c:[{cN:"attribute",b:"\\w+",r:0},{cN:"string",b:'"',e:'"'},{cN:"string",b:"'",e:"'"},{b:"\\w+",r:0}]}]}]},{cN:"bullet",b:"^\\s*[=~]\\s*",r:0},{b:"#{",starts:{e:"}",sL:"ruby"}}]}});hljs.registerLanguage("processing",function(e){return{k:{keyword:"BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",constant:"P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",variable:"displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width",title:"setup draw",built_in:"size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"},c:[e.CLCM,e.CBCM,e.ASM,e.QSM,e.CNM]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage("erlang-repl",function(e){return{k:{special_functions:"spawn spawn_link self",reserved:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},c:[{cN:"prompt",b:"^[0-9]+> ",r:10},{cN:"comment",b:"%",e:"$"},{cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},e.ASM,e.QSM,{cN:"constant",b:"\\?(::)?([A-Z]\\w*(::)?)+"},{cN:"arrow",b:"->"},{cN:"ok",b:"ok"},{cN:"exclamation_mark",b:"!"},{cN:"function_or_atom",b:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",r:0},{cN:"variable",b:"[A-Z][a-zA-Z0-9_']*",r:0}]}});hljs.registerLanguage("stylus",function(t){var e={cN:"variable",b:"\\$"+t.IR},o={cN:"hexcolor",b:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",r:10},i=["charset","css","debug","extend","font-face","for","import","include","media","mixin","page","warn","while"],r=["after","before","first-letter","first-line","active","first-child","focus","hover","lang","link","visited"],n=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],a="[\\.\\s\\n\\[\\:,]",l=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-ligatures","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"],d=["\\{","\\}","\\?","(\\bReturn\\b)","(\\bEnd\\b)","(\\bend\\b)",";","#\\s","\\*\\s","===\\s","\\|"];return{aliases:["styl"],cI:!1,i:"("+d.join("|")+")",k:"if else for in",c:[t.QSM,t.ASM,t.CLCM,t.CBCM,o,{b:"\\.[a-zA-Z][a-zA-Z0-9_-]*"+a,rB:!0,c:[{cN:"class",b:"\\.[a-zA-Z][a-zA-Z0-9_-]*"}]},{b:"\\#[a-zA-Z][a-zA-Z0-9_-]*"+a,rB:!0,c:[{cN:"id",b:"\\#[a-zA-Z][a-zA-Z0-9_-]*"}]},{b:"\\b("+n.join("|")+")"+a,rB:!0,c:[{cN:"tag",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*"}]},{cN:"pseudo",b:"&?:?:\\b("+r.join("|")+")"+a},{cN:"at_rule",b:"@("+i.join("|")+")\\b"},e,t.CSSNM,t.NM,{cN:"function",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",i:"[\\n]",rB:!0,c:[{cN:"title",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*"},{cN:"params",b:/\(/,e:/\)/,c:[o,e,t.ASM,t.CSSNM,t.NM,t.QSM]}]},{cN:"attribute",b:"\\b("+l.reverse().join("|")+")\\b"}]}});hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})+",a=[],c=[],n=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},i=function(e,r,t){return{cN:e,b:r,r:t}},s=function(r,t,a){return e.inherit({cN:r,b:t+"\\(",e:"\\(",rB:!0,eE:!0,r:0},a)},b={b:"\\(",e:"\\)",c:c,r:0};c.push(e.CLCM,e.CBCM,n("'"),n('"'),e.CSSNM,i("hexcolor","#[0-9A-Fa-f]+\\b"),s("function","(url|data-uri)",{starts:{cN:"string",e:"[\\)\\n]",eE:!0}}),s("function",r),b,i("variable","@@?"+r,10),i("variable","@{"+r+"}"),i("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0});var o=c.concat({b:"{",e:"}",c:a}),u={bK:"when",eW:!0,c:[{bK:"and not"}].concat(c)},C={cN:"attribute",b:t,e:":",eE:!0,c:[e.CLCM,e.CBCM],i:/\S/,starts:{e:"[;}]",rE:!0,c:c,i:"[<=$]"}},l={cN:"at_rule",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:c,r:0}},d={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:o}},p={v:[{b:"[\\.#:&\\[]",e:"[;{}]"},{b:t+"[^;]*{",e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",c:[e.CLCM,e.CBCM,u,i("keyword","all\\b"),i("variable","@{"+r+"}"),i("tag",t+"%?",0),i("id","#"+t),i("class","\\."+t,0),i("keyword","&",0),s("pseudo",":not"),s("keyword",":extend"),i("pseudo","::?"+t),{cN:"attr_selector",b:"\\[",e:"\\]"},{b:"\\(",e:"\\)",c:o},{b:"!important"}]};return a.push(e.CLCM,e.CBCM,l,d,p,C),{cI:!0,i:"[=>'/<($\"]",c:a}});hljs.registerLanguage("scala",function(e){var t={cN:"annotation",b:"@[A-Za-z]+"},a={cN:"string",b:'u?r?"""',e:'"""',r:10},r={cN:"symbol",b:"'\\w[\\w\\d_]*(?!')"},c={cN:"type",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},i={cN:"title",b:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,r:0},l={cN:"class",bK:"class object trait type",e:/[:={\[(\n;]/,c:[{cN:"keyword",bK:"extends with",r:10},i]},n={cN:"function",bK:"def val",e:/[:={\[(\n;]/,c:[i]};return{k:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"},c:[e.CLCM,e.CBCM,a,e.QSM,r,c,n,l,e.CNM,t]}});hljs.registerLanguage("java",function(e){var a=e.UIR+"(<"+e.UIR+">)?",t="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",c="(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",r={cN:"number",b:c,r:0};return{aliases:["jsp"],k:t,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return",r:0},{cN:"function",b:"("+a+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("objectivec",function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},o=/[a-zA-Z@][a-zA-Z0-9_]*/,a="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],k:t,l:o,i:"</",c:[e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+a.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:a,l:o,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}});hljs.registerLanguage("handlebars",function(){var e="each in with if else unless bindattr action collection debugger log outlet template unbound view yield";return{aliases:["hbs","html.hbs","html.handlebars"],cI:!0,sL:"xml",subLanguageMode:"continuous",c:[{cN:"expression",b:"{{",e:"}}",c:[{cN:"begin-block",b:"#[a-zA-Z- .]+",k:e},{cN:"string",b:'"',e:'"'},{cN:"end-block",b:"\\/[a-zA-Z- .]+",k:e},{cN:"variable",b:"[a-zA-Z-.]+",k:e}]}]}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"preprocessor",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},i]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},i,c,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}});hljs.registerLanguage("matlab",function(e){var a=[e.CNM,{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]}],s={r:0,c:[{cN:"operator",b:/'['\.]*/}]};return{k:{keyword:"break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",built_in:"sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"},i:'(//|"|#|/\\*|\\s+/\\w+)',c:[{cN:"function",bK:"function",e:"$",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)"},{cN:"params",b:"\\[",e:"\\]"}]},{b:/[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,rB:!0,r:0,c:[{b:/[a-zA-Z_][a-zA-Z_0-9]*/,r:0},s.c[0]]},{cN:"matrix",b:"\\[",e:"\\]",c:a,r:0,starts:s},{cN:"cell",b:"\\{",e:/\}/,c:a,r:0,i:/:/,starts:s},{b:/\)/,r:0,starts:s},{cN:"comment",b:"\\%",e:"$"}].concat(a)}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",t={cN:"subst",b:/#\{/,e:/}/,k:c},r=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,t]},{b:/"/,e:/"/,c:[e.BE,t]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[t,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+n},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];t.c=r;var i=e.inherit(e.TM,{b:n}),s="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(r)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:r.concat([{cN:"comment",b:"###",e:"###",c:[e.PWM]},e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"attribute",b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}});hljs.registerLanguage("groovy",function(e){return{k:{typename:"byte short char int long boolean float double void",literal:"true false null",keyword:"def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},c:[e.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*//*",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CBCM,{cN:"string",b:'"""',e:'"""'},{cN:"string",b:"'''",e:"'''"},{cN:"string",b:"\\$/",e:"/\\$",r:10},e.ASM,{cN:"regexp",b:/~?\/[^\/\n]+\//,c:[e.BE]},e.QSM,{cN:"shebang",b:"^#!/usr/bin/env",e:"$",i:"\n"},e.BNM,{cN:"class",bK:"class interface trait enum",e:"{",i:":",c:[{bK:"extends implements"},e.UTM]},e.CNM,{cN:"annotation",b:"@[A-Za-z]+"},{cN:"string",b:/[^\?]{0}[A-Za-z0-9_$]+ *:/},{b:/\?/,e:/\:/},{cN:"label",b:"^\\s*[A-Za-z0-9_$]+:",r:0}]}});hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}]}});hljs.registerLanguage("elixir",function(e){var r="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",n="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",c={cN:"subst",b:"#\\{",e:"}",l:r,k:n},a={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/}]},s={eW:!0,rE:!0,l:r,k:n,r:0},i={cN:"function",bK:"def defmacro",e:/\bdo\b/,c:[e.inherit(e.TM,{b:b,starts:s})]},l=e.inherit(i,{cN:"class",bK:"defmodule defrecord",e:/\bdo\b|$|;/}),t=[a,e.HCM,l,i,{cN:"constant",b:"(\\b[A-Z_]\\w*(.)?)+",r:0},{cN:"symbol",b:":",c:[a,{b:b}],r:0},{cN:"symbol",b:r+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"->"},{b:"("+e.RSR+")\\s*",c:[e.HCM,{cN:"regexp",i:"\\n",c:[e.BE,c],v:[{b:"/",e:"/[a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];return c.c=t,s.c=t,{l:r,k:n,c:t}});hljs.registerLanguage("go",function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",constant:"true false iota nil",typename:"bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],k:t,i:"</",c:[e.CLCM,e.CBCM,e.QSM,{cN:"string",b:"'",e:"[^\\\\]'"},{cN:"string",b:"`",e:"`"},{cN:"number",b:e.CNR+"[dflsi]?",r:0},e.CNM]}});hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("tex",function(){var c={cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?"},e={cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]"},m={cN:"special",b:"[{}\\[\\]\\&#~]",r:0};return{c:[{b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",rB:!0,c:[c,e,{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:!0}],r:10},c,e,m,{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:[c,e,m],r:0},{cN:"formula",b:"\\$",e:"\\$",c:[c,e,m],r:0},{cN:"comment",b:"%",e:"$",r:0}]}});hljs.registerLanguage("http",function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}});hljs.registerLanguage("lisp",function(e){var b="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",c="\\|[^]*?\\|",r="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",t={cN:"shebang",b:"^#!",e:"$"},a={cN:"literal",b:"\\b(t{1}|nil)\\b"},i={cN:"number",v:[{b:r,r:0},{b:"#b[0-1]+(/[0-1]+)?"},{b:"#o[0-7]+(/[0-7]+)?"},{b:"#x[0-9a-f]+(/[0-9a-f]+)?"},{b:"#c\\("+r+" +"+r,e:"\\)"}]},l=e.inherit(e.QSM,{i:null}),n={cN:"comment",b:";",e:"$",r:0},N={cN:"variable",b:"\\*",e:"\\*"},d={cN:"keyword",b:"[:&]"+b},o={b:c},u={b:"\\(",e:"\\)",c:["self",a,l,i]},s={cN:"quoted",c:[i,l,N,d,u],v:[{b:"['`]\\(",e:"\\)"},{b:"\\(quote ",e:"\\)",k:"quote"},{b:"'"+c}]},f={cN:"quoted",b:"'"+b},v={cN:"list",b:"\\(",e:"\\)"},g={eW:!0,r:0};return v.c=[{cN:"keyword",v:[{b:b},{b:c}]},g],g.c=[s,f,v,a,i,l,n,N,d,o],{i:/\S/,c:[i,t,a,l,n,s,f,v]}});hljs.registerLanguage("erlang",function(e){var r="[a-z'][a-zA-Z0-9_']*",c="("+r+":"+r+"|"+r+")",a={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},n={cN:"comment",b:"%",e:"$"},b={cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},i={b:"fun\\s+"+r+"/\\d+"},o={b:c+"\\(",e:"\\)",rB:!0,r:0,c:[{cN:"function_name",b:c,r:0},{b:"\\(",e:"\\)",eW:!0,rE:!0,r:0}]},d={cN:"tuple",b:"{",e:"}",r:0},t={cN:"variable",b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0},l={cN:"variable",b:"[A-Z][a-zA-Z0-9_]*",r:0},f={b:"#"+e.UIR,r:0,rB:!0,c:[{cN:"record_name",b:"#"+e.UIR,r:0},{b:"{",e:"}",r:0}]},s={bK:"fun receive if try case",e:"end",k:a};s.c=[n,i,e.inherit(e.ASM,{cN:""}),s,o,e.QSM,b,d,t,l,f];var u=[n,i,s,o,e.QSM,b,d,t,l,f];o.c[1].c=u,d.c=u,f.c[1].c=u;var v={cN:"params",b:"\\(",e:"\\)",c:u};return{aliases:["erl"],k:a,i:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+r+"\\s*\\(",e:"->",rB:!0,i:"\\(|#|//|/\\*|\\\\|:|;",c:[v,e.inherit(e.TM,{b:r})],starts:{e:";|\\.",k:a,c:u}},n,{cN:"pp",b:"^-",e:"\\.",r:0,eE:!0,rB:!0,l:"-"+e.IR,k:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",c:[v]},b,e.QSM,f,t,l,d,{b:/\.$/}]}});hljs.registerLanguage("makefile",function(e){var a={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[a]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,a]}]}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@][^\s\w{]/,r:0}]},o={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},i=[e.BE,r,n],c=[n,e.HCM,o,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,o,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=c,s.c=c,{aliases:["pl"],k:t,c:c}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",c={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},s={cN:"comment",v:[{b:"#",e:"$",c:[c]},{b:"^\\=begin",e:"^\\=end",c:[c],r:10},{b:"^__END__",e:"\\n$"}]},n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},i={cN:"params",b:"\\(",e:"\\)",k:r},d=[t,a,s,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},s]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,s,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];n.c=d,i.c=d;var l="[>?]>",u="[\\w#]+\\(\\w+\\):\\d+:\\d+>",N="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",o=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:d}},{cN:"prompt",b:"^("+l+"|"+u+"|"+N+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage("erb",function(){return{sL:"xml",subLanguageMode:"continuous",c:[{cN:"comment",b:"<%#",e:"%>"},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0}]}});hljs.registerLanguage("apache",function(e){var r={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",r]},r,e.QSM]}}],i:/\S/}});hljs.registerLanguage("json",function(e){var t={literal:"true false null"},i=[e.QSM,e.CNM],l={cN:"value",e:",",eW:!0,eE:!0,c:i,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:l}],i:"\\S"},n={b:"\\[",e:"\\]",c:[e.inherit(l,{cN:null})],i:"\\S"};return i.splice(i.length,0,c,n),{c:i,k:t,i:"\\S"}});hljs.registerLanguage("clojure",function(e){var t={built_in:"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},r="a-zA-Z_\\-!.?+*=<>&#'",n="["+r+"]["+r+"0-9/;:]*",a="[-+]?\\d+(\\.\\d+)?",o={b:n,r:0},s={cN:"number",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:"comment",b:";",e:"$",r:0},d={cN:"literal",b:/\b(true|false|nil)\b/},l={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"},m={cN:"comment",b:"\\^"+n},p={cN:"comment",b:"\\^\\{",e:"\\}"},u={cN:"attribute",b:"[:]"+n},f={cN:"list",b:"\\(",e:"\\)"},h={eW:!0,r:0},y={k:t,l:n,cN:"keyword",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:"comment",b:"comment"},y,h],h.c=b,l.c=b,{aliases:["clj"],i:/\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("rust",function(e){var t=e.inherit(e.CBCM);return t.c.push("self"),{aliases:["rs"],k:{keyword:"alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self sizeof static struct super trait true type typeof unsafe unsized use virtual while yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",built_in:"assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!"},l:e.IR+"!?",i:"</",c:[e.CLCM,t,e.inherit(e.QSM,{i:null}),{cN:"string",b:/r(#*)".*?"\1(?!#)/},{cN:"string",b:/'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/},{b:/'[a-zA-Z_][a-zA-Z0-9_]*/},{cN:"number",b:/\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([uif](8|16|32|64)?)?/,r:0},{cN:"function",bK:"fn",e:"(\\(|<)",eE:!0,c:[e.UTM]},{cN:"preprocessor",b:"#\\[",e:"\\]"},{bK:"type",e:"(=|<)",c:[e.UTM],i:"\\S"},{bK:"trait enum",e:"({|<)",c:[e.UTM],i:"\\S"},{b:e.IR+"::"},{b:"->"}]}});hljs.registerLanguage("swift",function(e){var t={keyword:"class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"},i={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM,"self"]},r={cN:"subst",b:/\\\(/,e:"\\)",k:t,c:[]},s={cN:"number",b:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",r:0},o=e.inherit(e.QSM,{c:[r,e.BE]});return r.c=[s],{k:t,c:[o,e.CLCM,n,i,s,{cN:"func",bK:"func",e:"{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/,i:/\(/}),{cN:"generics",b:/\</,e:/\>/,i:/\>/},{cN:"params",b:/\(/,e:/\)/,k:t,c:["self",s,o,e.CBCM,{b:":"}],i:/["']/}],i:/\[|%/},{cN:"class",k:"struct protocol class extension enum",b:"(struct|protocol|class(?! (func|var))|extension|enum)",e:"\\{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/})]},{cN:"preprocessor",b:"(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"}]}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:b}],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("cs",function(e){var r="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",t=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:r,i:/::/,c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]},e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class namespace interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("diff",function(){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("vim",function(e){return{l:/[!#@\w]+/,k:{keyword:"N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",built_in:"abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"},i:/[{:]/,c:[e.NM,e.ASM,{cN:"string",b:/"((\\")|[^"\n])*("|\n)/},{cN:"variable",b:/[bwtglsav]:[\w\d_]*/},{cN:"function",bK:"function function!",e:"$",r:0,c:[e.TM,{cN:"params",b:"\\(",e:"\\)"}]}]}});hljs.registerLanguage("typescript",function(e){return{aliases:["ts"],k:{keyword:"in if for while finally var new function|0 do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private get set super interface extendsstatic constructor implements enum export import declare",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:0},e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/,r:0},{cN:"constructor",bK:"constructor",e:/\{/,eE:!0,r:10},{cN:"module",bK:"module",e:/\{/,eE:!0},{cN:"interface",bK:"interface",e:/\{/,eE:!0},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}});hljs.registerLanguage("javascript",function(r){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:"("+r.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[r.CLCM,r.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+r.IR,r:0}]}});hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[{cN:"comment",b:"--(?!"+t+")",e:"$"},{cN:"comment",b:"--"+t,e:a,c:[r],r:10}];return{l:e.UIR,k:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});hljs.registerLanguage("django",function(){var e={cN:"filter",b:/\|[A-Za-z]+\:?/,k:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",c:[{cN:"argument",b:/"/,e:/"/},{cN:"argument",b:/'/,e:/'/}]};return{aliases:["jinja"],cI:!0,sL:"xml",subLanguageMode:"continuous",c:[{cN:"comment",b:/\{%\s*comment\s*%}/,e:/\{%\s*endcomment\s*%}/},{cN:"comment",b:/\{#/,e:/#}/},{cN:"template_tag",b:/\{%/,e:/%}/,k:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",c:[e]},{cN:"variable",b:/\{\{/,e:/}}/,c:[e]}]}});hljs.registerLanguage("scheme",function(e){var t="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",r="(\\-|\\+)?\\d+([./]\\d+)?",i=r+"[+\\-]"+r+"i",a={built_in:"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"},n={cN:"shebang",b:"^#!",e:"$"},c={cN:"literal",b:"(#t|#f|#\\\\"+t+"|#\\\\.)"},l={cN:"number",v:[{b:r,r:0},{b:i,r:0},{b:"#b[0-1]+(/[0-1]+)?"},{b:"#o[0-7]+(/[0-7]+)?"},{b:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},s=e.QSM,o={cN:"comment",v:[{b:";",e:"$",r:0},{b:"#\\|",e:"\\|#"}]},u={b:t,r:0},p={cN:"variable",b:"'"+t},d={eW:!0,r:0},g={cN:"list",v:[{b:"\\(",e:"\\)"},{b:"\\[",e:"\\]"}],c:[{cN:"keyword",b:t,l:t,k:a},d]};return d.c=[c,l,s,o,u,p,g],{i:/\S/,c:[n,l,s,o,p,g]}});hljs.registerLanguage("ocaml",function(e){return{aliases:["ml"],k:{keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},i:/\/\/|>>/,l:"[a-z_]\\w*!?",c:[{cN:"literal",b:"\\[(\\|\\|)?\\]|\\(\\)"},{cN:"comment",b:"\\(\\*",e:"\\*\\)",c:["self"]},{cN:"symbol",b:"'[A-Za-z_](?!')[\\w']*"},{cN:"tag",b:"`[A-Z][\\w']*"},{cN:"type",b:"\\b[A-Z][\\w']*",r:0},{b:"[a-z_]\\w*'[\\w']*"},e.inherit(e.ASM,{cN:"char",r:0}),e.inherit(e.QSM,{i:null}),{cN:"number",b:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",r:0},{b:/[-=]>/}]}});hljs.registerLanguage("python",function(e){var r={cN:"prompt",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},l={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},c={cN:"params",b:/\(/,e:/\)/,c:["self",r,l,b]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[r,l,b,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n]/,c:[e.UTM,c]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("applescript",function(e){var t=e.inherit(e.QSM,{i:""}),r={cN:"params",b:"\\(",e:"\\)",c:["self",e.CNM,t]},o=[{cN:"comment",b:"--",e:"$"},{cN:"comment",b:"\\(\\*",e:"\\*\\)",c:["self",{b:"--",e:"$"}]},e.HCM];return{aliases:["osascript"],k:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",constant:"AppleScript false linefeed return pi quote result space tab true",type:"alias application boolean class constant date file integer list number real record string text",command:"activate beep count delay launch log offset read round run say summarize write",property:"character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"},c:[t,e.CNM,{cN:"type",b:"\\bPOSIX file\\b"},{cN:"command",b:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"},{cN:"constant",b:"\\b(text item delimiters|current application|missing value)\\b"},{cN:"keyword",b:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"},{cN:"property",b:"\\b(POSIX path|(date|time) string|quoted form)\\b"},{cN:"function_start",bK:"on",i:"[${=;\\n]",c:[e.UTM,r]}].concat(o),i:"//|->|=>"}});
; browserify_shim__define__module__export__(typeof hljs != "undefined" ? hljs : window.hljs);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    return new Z(dom, selector)
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
      slice.call(
        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }
  $.noop = function() {}

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    constructor: zepto.Z,
    length: 0,

    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function(){
      var i, value, args = []
      for (i = 0; i < arguments.length; i++) {
        value = arguments[i]
        args[i] = zepto.isZ(value) ? value.toArray() : value
      }
      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
    },

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var computedStyle, element = this[0]
        if(!element) return
        computedStyle = getComputedStyle(element, '')
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

// If `$` is not yet defined, point it to `Zepto`
window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  function detect(ua, platform){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
      osx = !!ua.match(/\(Macintosh\; Intel /),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      win = /Win\d{2}|Windows/.test(platform),
      wp = ua.match(/Windows Phone ([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/),
      firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
      ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
      webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
      safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
    if (wp) os.wp = true, os.version = wp[1]
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (bb10) os.bb10 = true, os.version = bb10[2]
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
    if (playbook) browser.playbook = true
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
    if (chrome) browser.chrome = true, browser.version = chrome[1]
    if (firefox) browser.firefox = true, browser.version = firefox[1]
    if (firefoxos) os.firefoxos = true, os.version = firefoxos[1]
    if (ie) browser.ie = true, browser.version = ie[1]
    if (safari && (osx || os.ios || win)) {
      browser.safari = true
      if (!os.ios) browser.version = safari[1]
    }
    if (webview) browser.webview = true

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
      (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
    os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
      (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
  }

  detect.call($, navigator.userAgent, navigator.platform)
  // make available to unit tests
  $.__detect = detect

})(Zepto)

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function(){
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})()

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)

; browserify_shim__define__module__export__(typeof $ != "undefined" ? $ : window.$);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],5:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],7:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],8:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":7,"_process":6,"inherits":5}],9:[function(require,module,exports){
(function (global){
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/--/g, '\u2014')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function() {
      var out, err;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
/**
 * Copyright 2012 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.1.2
 * @url craig.is/killing/mice
 */

  /**
   * mapping of special keycodes to their corresponding keys
   *
   * everything in this dictionary cannot use keypress events
   * so it has to be here to map to the correct keycodes for
   * keyup/keydown events
   *
   * @type {Object}
   */
  var _MAP = {
          8: 'backspace',
          9: 'tab',
          13: 'enter',
          16: 'shift',
          17: 'ctrl',
          18: 'alt',
          20: 'capslock',
          27: 'esc',
          32: 'space',
          33: 'pageup',
          34: 'pagedown',
          35: 'end',
          36: 'home',
          37: 'left',
          38: 'up',
          39: 'right',
          40: 'down',
          45: 'ins',
          46: 'del',
          91: 'meta',
          93: 'meta',
          224: 'meta'
      },

      /**
       * mapping for special characters so they can support
       *
       * this dictionary is only used incase you want to bind a
       * keyup or keydown event to one of these keys
       *
       * @type {Object}
       */
      _KEYCODE_MAP = {
          106: '*',
          107: '+',
          109: '-',
          110: '.',
          111 : '/',
          186: ';',
          187: '=',
          188: ',',
          189: '-',
          190: '.',
          191: '/',
          192: '`',
          219: '[',
          220: '\\',
          221: ']',
          222: '\''
      },

      /**
       * this is a mapping of keys that require shift on a US keypad
       * back to the non shift equivelents
       *
       * this is so you can use keyup events with these keys
       *
       * note that this will only work reliably on US keyboards
       *
       * @type {Object}
       */
      _SHIFT_MAP = {
          '~': '`',
          '!': '1',
          '@': '2',
          '#': '3',
          '$': '4',
          '%': '5',
          '^': '6',
          '&': '7',
          '*': '8',
          '(': '9',
          ')': '0',
          '_': '-',
          '+': '=',
          ':': ';',
          '\"': '\'',
          '<': ',',
          '>': '.',
          '?': '/',
          '|': '\\'
      },

      /**
       * this is a list of special strings you can use to map
       * to modifier keys when you specify your keyboard shortcuts
       *
       * @type {Object}
       */
      _SPECIAL_ALIASES = {
          'option': 'alt',
          'command': 'meta',
          'return': 'enter',
          'escape': 'esc'
      },

      /**
       * variable to store the flipped version of _MAP from above
       * needed to check if we should use keypress or not when no action
       * is specified
       *
       * @type {Object|undefined}
       */
      _REVERSE_MAP,

      /**
       * a list of all the callbacks setup via Mousetrap.bind()
       *
       * @type {Object}
       */
      _callbacks = {},

      /**
       * direct map of string combinations to callbacks used for trigger()
       *
       * @type {Object}
       */
      _direct_map = {},

      /**
       * keeps track of what level each sequence is at since multiple
       * sequences can start out with the same sequence
       *
       * @type {Object}
       */
      _sequence_levels = {},

      /**
       * variable to store the setTimeout call
       *
       * @type {null|number}
       */
      _reset_timer,

      /**
       * temporary state where we will ignore the next keyup
       *
       * @type {boolean|string}
       */
      _ignore_next_keyup = false,

      /**
       * are we currently inside of a sequence?
       * type of action ("keyup" or "keydown" or "keypress") or false
       *
       * @type {boolean|string}
       */
      _inside_sequence = false;

  /**
   * loop through the f keys, f1 to f19 and add them to the map
   * programatically
   */
  for (var i = 1; i < 20; ++i) {
      _MAP[111 + i] = 'f' + i;
  }

  /**
   * loop through to map numbers on the numeric keypad
   */
  for (i = 0; i <= 9; ++i) {
      _MAP[i + 96] = i;
  }

  /**
   * cross browser add event method
   *
   * @param {Element|HTMLDocument} object
   * @param {string} type
   * @param {Function} callback
   * @returns void
   */
  function _addEvent(object, type, callback) {
      if (object.addEventListener) {
          return object.addEventListener(type, callback, false);
      }

      object.attachEvent('on' + type, callback);
  }

  /**
   * takes the event and returns the key character
   *
   * @param {Event} e
   * @return {string}
   */
  function _characterFromEvent(e) {

      // for keypress events we should return the character as is
      if (e.type == 'keypress') {
          return String.fromCharCode(e.which);
      }

      // for non keypress events the special maps are needed
      if (_MAP[e.which]) {
          return _MAP[e.which];
      }

      if (_KEYCODE_MAP[e.which]) {
          return _KEYCODE_MAP[e.which];
      }

      // if it is not in the special map
      return String.fromCharCode(e.which).toLowerCase();
  }

  /**
   * should we stop this event before firing off callbacks
   *
   * @param {Event} e
   * @return {boolean}
   */
  function _stop(e) {
      var element = e.target || e.srcElement,
          tag_name = element.tagName;

      // if the element has the class "mousetrap" then no need to stop
      if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
          return false;
      }

      // stop for input, select, and textarea
      return tag_name == 'INPUT' || tag_name == 'SELECT' || tag_name == 'TEXTAREA' || (element.contentEditable && element.contentEditable == 'true');
  }

  /**
   * checks if two arrays are equal
   *
   * @param {Array} modifiers1
   * @param {Array} modifiers2
   * @returns {boolean}
   */
  function _modifiersMatch(modifiers1, modifiers2) {
      return modifiers1.sort().join(',') === modifiers2.sort().join(',');
  }

  /**
   * resets all sequence counters except for the ones passed in
   *
   * @param {Object} do_not_reset
   * @returns void
   */
  function _resetSequences(do_not_reset) {
      do_not_reset = do_not_reset || {};

      var active_sequences = false,
          key;

      for (key in _sequence_levels) {
          if (do_not_reset[key]) {
              active_sequences = true;
              continue;
          }
          _sequence_levels[key] = 0;
      }

      if (!active_sequences) {
          _inside_sequence = false;
      }
  }

  /**
   * finds all callbacks that match based on the keycode, modifiers,
   * and action
   *
   * @param {string} character
   * @param {Array} modifiers
   * @param {string} action
   * @param {boolean=} remove - should we remove any matches
   * @param {string=} combination
   * @returns {Array}
   */
  function _getMatches(character, modifiers, action, remove, combination) {
      var i,
          callback,
          matches = [];

      // if there are no events related to this keycode
      if (!_callbacks[character]) {
          return [];
      }

      // if a modifier key is coming up on its own we should allow it
      if (action == 'keyup' && _isModifier(character)) {
          modifiers = [character];
      }

      // loop through all callbacks for the key that was pressed
      // and see if any of them match
      for (i = 0; i < _callbacks[character].length; ++i) {
          callback = _callbacks[character][i];

          // if this is a sequence but it is not at the right level
          // then move onto the next match
          if (callback.seq && _sequence_levels[callback.seq] != callback.level) {
              continue;
          }

          // if the action we are looking for doesn't match the action we got
          // then we should keep going
          if (action != callback.action) {
              continue;
          }

          // if this is a keypress event that means that we need to only
          // look at the character, otherwise check the modifiers as
          // well
          if (action == 'keypress' || _modifiersMatch(modifiers, callback.modifiers)) {

              // remove is used so if you change your mind and call bind a
              // second time with a new function the first one is overwritten
              if (remove && callback.combo == combination) {
                  _callbacks[character].splice(i, 1);
              }

              matches.push(callback);
          }
      }

      return matches;
  }

  /**
   * takes a key event and figures out what the modifiers are
   *
   * @param {Event} e
   * @returns {Array}
   */
  function _eventModifiers(e) {
      var modifiers = [];

      if (e.shiftKey) {
          modifiers.push('shift');
      }

      if (e.altKey) {
          modifiers.push('alt');
      }

      if (e.ctrlKey) {
          modifiers.push('ctrl');
      }

      if (e.metaKey) {
          modifiers.push('meta');
      }

      return modifiers;
  }

  /**
   * actually calls the callback function
   *
   * if your callback function returns false this will use the jquery
   * convention - prevent default and stop propogation on the event
   *
   * @param {Function} callback
   * @param {Event} e
   * @returns void
   */
  function _fireCallback(callback, e) {
      if (callback(e) === false) {
          if (e.preventDefault) {
              e.preventDefault();
          }

          if (e.stopPropagation) {
              e.stopPropagation();
          }

          e.returnValue = false;
          e.cancelBubble = true;
      }
  }

  /**
   * handles a character key event
   *
   * @param {string} character
   * @param {Event} e
   * @returns void
   */
  function _handleCharacter(character, e) {

      // if this event should not happen stop here
      if (_stop(e)) {
          return;
      }

      var callbacks = _getMatches(character, _eventModifiers(e), e.type),
          i,
          do_not_reset = {},
          processed_sequence_callback = false;

      // loop through matching callbacks for this key event
      for (i = 0; i < callbacks.length; ++i) {

          // fire for all sequence callbacks
          // this is because if for example you have multiple sequences
          // bound such as "g i" and "g t" they both need to fire the
          // callback for matching g cause otherwise you can only ever
          // match the first one
          if (callbacks[i].seq) {
              processed_sequence_callback = true;

              // keep a list of which sequences were matches for later
              do_not_reset[callbacks[i].seq] = 1;
              _fireCallback(callbacks[i].callback, e);
              continue;
          }

          // if there were no sequence matches but we are still here
          // that means this is a regular match so we should fire that
          if (!processed_sequence_callback && !_inside_sequence) {
              _fireCallback(callbacks[i].callback, e);
          }
      }

      // if you are inside of a sequence and the key you are pressing
      // is not a modifier key then we should reset all sequences
      // that were not matched by this key event
      if (e.type == _inside_sequence && !_isModifier(character)) {
          _resetSequences(do_not_reset);
      }
  }

  /**
   * handles a keydown event
   *
   * @param {Event} e
   * @returns void
   */
  function _handleKey(e) {

      // normalize e.which for key events
      // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
      e.which = typeof e.which == "number" ? e.which : e.keyCode;

      var character = _characterFromEvent(e);

      // no character found then stop
      if (!character) {
          return;
      }

      if (e.type == 'keyup' && _ignore_next_keyup == character) {
          _ignore_next_keyup = false;
          return;
      }

      _handleCharacter(character, e);
  }

  /**
   * determines if the keycode specified is a modifier key or not
   *
   * @param {string} key
   * @returns {boolean}
   */
  function _isModifier(key) {
      return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
  }

  /**
   * called to set a 1 second timeout on the specified sequence
   *
   * this is so after each key press in the sequence you have 1 second
   * to press the next key before you have to start over
   *
   * @returns void
   */
  function _resetSequenceTimer() {
      clearTimeout(_reset_timer);
      _reset_timer = setTimeout(_resetSequences, 1000);
  }

  /**
   * reverses the map lookup so that we can look for specific keys
   * to see what can and can't use keypress
   *
   * @return {Object}
   */
  function _getReverseMap() {
      if (!_REVERSE_MAP) {
          _REVERSE_MAP = {};
          for (var key in _MAP) {

              // pull out the numeric keypad from here cause keypress should
              // be able to detect the keys from the character
              if (key > 95 && key < 112) {
                  continue;
              }

              if (_MAP.hasOwnProperty(key)) {
                  _REVERSE_MAP[_MAP[key]] = key;
              }
          }
      }
      return _REVERSE_MAP;
  }

  /**
   * picks the best action based on the key combination
   *
   * @param {string} key - character for key
   * @param {Array} modifiers
   * @param {string=} action passed in
   */
  function _pickBestAction(key, modifiers, action) {

      // if no action was picked in we should try to pick the one
      // that we think would work best for this key
      if (!action) {
          action = _getReverseMap()[key] ? 'keydown' : 'keypress';
      }

      // modifier keys don't work as expected with keypress,
      // switch to keydown
      if (action == 'keypress' && modifiers.length) {
          action = 'keydown';
      }

      return action;
  }

  /**
   * binds a key sequence to an event
   *
   * @param {string} combo - combo specified in bind call
   * @param {Array} keys
   * @param {Function} callback
   * @param {string=} action
   * @returns void
   */
  function _bindSequence(combo, keys, callback, action) {

      // start off by adding a sequence level record for this combination
      // and setting the level to 0
      _sequence_levels[combo] = 0;

      // if there is no action pick the best one for the first key
      // in the sequence
      if (!action) {
          action = _pickBestAction(keys[0], []);
      }

      /**
       * callback to increase the sequence level for this sequence and reset
       * all other sequences that were active
       *
       * @param {Event} e
       * @returns void
       */
      var _increaseSequence = function(e) {
              _inside_sequence = action;
              ++_sequence_levels[combo];
              _resetSequenceTimer();
          },

          /**
           * wraps the specified callback inside of another function in order
           * to reset all sequence counters as soon as this sequence is done
           *
           * @param {Event} e
           * @returns void
           */
          _callbackAndReset = function(e) {
              _fireCallback(callback, e);

              // we should ignore the next key up if the action is key down
              // or keypress.  this is so if you finish a sequence and
              // release the key the final key will not trigger a keyup
              if (action !== 'keyup') {
                  _ignore_next_keyup = _characterFromEvent(e);
              }

              // weird race condition if a sequence ends with the key
              // another sequence begins with
              setTimeout(_resetSequences, 10);
          },
          i;

      // loop through keys one at a time and bind the appropriate callback
      // function.  for any key leading up to the final one it should
      // increase the sequence. after the final, it should reset all sequences
      for (i = 0; i < keys.length; ++i) {
          _bindSingle(keys[i], i < keys.length - 1 ? _increaseSequence : _callbackAndReset, action, combo, i);
      }
  }

  /**
   * binds a single keyboard combination
   *
   * @param {string} combination
   * @param {Function} callback
   * @param {string=} action
   * @param {string=} sequence_name - name of sequence if part of sequence
   * @param {number=} level - what part of the sequence the command is
   * @returns void
   */
  function _bindSingle(combination, callback, action, sequence_name, level) {

      // make sure multiple spaces in a row become a single space
      combination = combination.replace(/\s+/g, ' ');

      var sequence = combination.split(' '),
          i,
          key,
          keys,
          modifiers = [];

      // if this pattern is a sequence of keys then run through this method
      // to reprocess each pattern one key at a time
      if (sequence.length > 1) {
          return _bindSequence(combination, sequence, callback, action);
      }

      // take the keys from this pattern and figure out what the actual
      // pattern is all about
      keys = combination === '+' ? ['+'] : combination.split('+');

      for (i = 0; i < keys.length; ++i) {
          key = keys[i];

          // normalize key names
          if (_SPECIAL_ALIASES[key]) {
              key = _SPECIAL_ALIASES[key];
          }

          // if this is not a keypress event then we should
          // be smart about using shift keys
          // this will only work for US keyboards however
          if (action && action != 'keypress' && _SHIFT_MAP[key]) {
              key = _SHIFT_MAP[key];
              modifiers.push('shift');
          }

          // if this key is a modifier then add it to the list of modifiers
          if (_isModifier(key)) {
              modifiers.push(key);
          }
      }

      // depending on what the key combination is
      // we will try to pick the best event for it
      action = _pickBestAction(key, modifiers, action);

      // make sure to initialize array if this is the first time
      // a callback is added for this key
      if (!_callbacks[key]) {
          _callbacks[key] = [];
      }

      // remove an existing match if there is one
      _getMatches(key, modifiers, action, !sequence_name, combination);

      // add this call back to the array
      // if it is a sequence put it at the beginning
      // if not put it at the end
      //
      // this is important because the way these are processed expects
      // the sequence ones to come first
      _callbacks[key][sequence_name ? 'unshift' : 'push']({
          callback: callback,
          modifiers: modifiers,
          action: action,
          seq: sequence_name,
          level: level,
          combo: combination
      });
  }

  /**
   * binds multiple combinations to the same callback
   *
   * @param {Array} combinations
   * @param {Function} callback
   * @param {string|undefined} action
   * @returns void
   */
  function _bindMultiple(combinations, callback, action) {
      for (var i = 0; i < combinations.length; ++i) {
          _bindSingle(combinations[i], callback, action);
      }
  }

  // start!
  _addEvent(document, 'keypress', _handleKey);
  _addEvent(document, 'keydown', _handleKey);
  _addEvent(document, 'keyup', _handleKey);

  var mousetrap = {

      /**
       * binds an event to mousetrap
       *
       * can be a single key, a combination of keys separated with +,
       * a comma separated list of keys, an array of keys, or
       * a sequence of keys separated by spaces
       *
       * be sure to list the modifier keys first to make sure that the
       * correct key ends up getting bound (the last key in the pattern)
       *
       * @param {string|Array} keys
       * @param {Function} callback
       * @param {string=} action - 'keypress', 'keydown', or 'keyup'
       * @returns void
       */
      bind: function(keys, callback, action) {
          _bindMultiple(keys instanceof Array ? keys : [keys], callback, action);
          _direct_map[keys + ':' + action] = callback;
          return this;
      },

      /**
       * unbinds an event to mousetrap
       *
       * the unbinding sets the callback function of the specified key combo
       * to an empty function and deletes the corresponding key in the
       * _direct_map dict.
       *
       * the keycombo+action has to be exactly the same as
       * it was defined in the bind method
       *
       * TODO: actually remove this from the _callbacks dictionary instead
       * of binding an empty function
       *
       * @param {string|Array} keys
       * @param {string} action
       * @returns void
       */
      unbind: function(keys, action) {
          if (_direct_map[keys + ':' + action]) {
              delete _direct_map[keys + ':' + action];
              this.bind(keys, function() {}, action);
          }
          return this;
      },

      /**
       * triggers an event that has already been bound
       *
       * @param {string} keys
       * @param {string=} action
       * @returns void
       */
      trigger: function(keys, action) {
          _direct_map[keys + ':' + action]();
          return this;
      },

      /**
       * resets the library back to its initial state.  this is useful
       * if you want to clear out the current keyboard shortcuts and bind
       * new ones - for example if you switch to another page
       *
       * @returns void
       */
      reset: function() {
          _callbacks = {};
          _direct_map = {};
          return this;
      }
  };

module.exports = mousetrap;


},{}],11:[function(require,module,exports){
var EventEmitter, api, hist, slide_prefix, util,
  __slice = [].slice;

hist = window.history;

slide_prefix = '#slide-';

EventEmitter = require('events').EventEmitter;

util = require('util');

api = (function() {
  var $slidePack, current, emitter, handleNavigation, init, installNavigationHandler, max, navigate, next, onEvent, prev, setupPager, show, status;
  emitter = new EventEmitter;
  onEvent = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return emitter.on.apply(emitter, args);
  };
  current = 1;
  max = 1;
  $slidePack = {};
  init = function(options) {
    $slidePack = options.slidePack;
    max = $slidePack.find('section').length;
    setupPager();
    installNavigationHandler();
    return show(current);
  };
  setupPager = function() {
    var state;
    if (state = hist.state) {
      return current = state.current;
    }
  };
  prev = function() {
    current -= 1;
    if (current < 1) {
      current = max;
    }
    return navigate();
  };
  next = function() {
    current += 1;
    if (current > max) {
      current = 1;
    }
    return navigate();
  };
  show = function(to) {
    $slidePack.find('section.active').removeClass('active');
    return $slidePack.find('section').eq(to - 1).addClass('active');
  };
  navigate = function() {
    show(current);
    emitter.emit('navigate');
    return hist.pushState({
      current: current
    }, "Slide " + current + " / " + max, "" + slide_prefix + current);
  };
  handleNavigation = function(event) {
    if (event.state) {
      return show(event.state.current);
    } else {
      current = Number(window.location.hash.replace(slide_prefix, ''));
      if (current) {
        return show(current);
      }
    }
  };
  installNavigationHandler = function() {
    return window.onpopstate = handleNavigation;
  };
  status = function() {
    return {
      total: max,
      current: current
    };
  };
  return {
    status: status,
    init: init,
    prev: prev,
    next: next,
    on: onEvent
  };
})();

module.exports = api;



},{"events":4,"util":8}],12:[function(require,module,exports){
var $, api, mousetrap, nav;

api = require('./slide-pack-api');

mousetrap = require('mousetrap');

$ = require('zeptojs');

mousetrap.bind(['left', 'up', 'k', 'h'], api.prev);

mousetrap.bind(['right', 'down', 'j', 'l'], api.next);

nav = $('<nav><a>←</a><a>→</a></nav>');

$('body').append(nav);

$(document).on('click', 'nav a:first-child', function(e) {
  return api.prev();
});

$(document).on('click', 'nav a:last-child', function(e) {
  return api.next();
});

$(document).on('swipeLeft', function() {
  return api.next();
});

$(document).on('swipeRight', function() {
  return api.prev();
});



},{"./slide-pack-api":11,"mousetrap":10,"zeptojs":3}],13:[function(require,module,exports){
var chop, doChop, generateSlide, getSlideClass, isNewSlideMark, markdown, slidePackProcessor, slider;

markdown = require('marked');

isNewSlideMark = function(node) {
  return node && node.type === "paragraph" && node.text.indexOf('--') === 0;
};

getSlideClass = function(node) {
  return node.text.substr(3);
};

doChop = function(slides, tokens) {
  var node, slide;
  if (tokens.length === 0) {
    return slides;
  }
  slide = [];
  slide.links = {};
  node = tokens.shift();
  if (isNewSlideMark(node)) {
    slide.slideClass = getSlideClass(node);
  }
  while (node = tokens.shift()) {
    if (isNewSlideMark(node)) {
      tokens.unshift(node);
      break;
    } else {
      slide.push(node);
    }
  }
  slides.push(slide);
  return doChop(slides, tokens);
};

chop = function(tokens) {
  return doChop([], tokens);
};

slider = function(md) {
  var tokens;
  tokens = markdown.lexer(md);
  return chop(tokens);
};

generateSlide = function(slide) {
  return {
    cssClass: slide.slideClass,
    html: markdown.parser(slide)
  };
};

slidePackProcessor = (function() {
  var process;
  process = function(md) {
    var slide, slides, _i, _len, _results;
    slides = slider(md);
    _results = [];
    for (_i = 0, _len = slides.length; _i < _len; _i++) {
      slide = slides[_i];
      _results.push(generateSlide(slide));
    }
    return _results;
  };
  return {
    process: process
  };
})();

module.exports = slidePackProcessor;



},{"marked":9}],14:[function(require,module,exports){
var $, api;

api = require('./slide-pack-api');

$ = require('zeptojs');

$(function() {
  var progress, updateProgress;
  progress = $('<progress></progress>');
  updateProgress = function() {
    var status;
    status = api.status();
    return progress.attr({
      max: status.total,
      value: status.current
    });
  };
  updateProgress();
  api.on('navigate', updateProgress);
  return $('body').append(progress);
});



},{"./slide-pack-api":11,"zeptojs":3}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXNpcy9jb2RlL3dvcmsvc2xpZGUtcGFjay9zcmMvaW5kZXguY29mZmVlIiwibGliL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5wYWNrLmpzIiwibGliL3plcHRvanMvemVwdG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIm5vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwiL1VzZXJzL2FzaXMvY29kZS93b3JrL3NsaWRlLXBhY2svc3JjL3NsaWRlLXBhY2stYXBpLmNvZmZlZSIsIi9Vc2Vycy9hc2lzL2NvZGUvd29yay9zbGlkZS1wYWNrL3NyYy9zbGlkZS1wYWNrLW5hdmlnYXRpb24uY29mZmVlIiwiL1VzZXJzL2FzaXMvY29kZS93b3JrL3NsaWRlLXBhY2svc3JjL3NsaWRlLXBhY2stcHJvY2Vzc29yLmNvZmZlZSIsIi9Vc2Vycy9hc2lzL2NvZGUvd29yay9zbGlkZS1wYWNrL3NyYy9zbGlkZS1wYWNrLXVpLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsbUNBQUE7O0FBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxhQUFSLENBQUwsQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFNBQVIsQ0FESixDQUFBOztBQUFBLENBR0EsQ0FBRSxTQUFBLEdBQUE7QUFDQSxFQUFBLElBQWdDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBTCxJQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBbkQ7V0FBQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsUUFBVixDQUFtQixRQUFuQixFQUFBO0dBREE7QUFBQSxDQUFGLENBSEEsQ0FBQTs7QUFBQSxTQU1BLEdBQVksT0FBQSxDQUFRLHdCQUFSLENBTlosQ0FBQTs7QUFBQSxHQU9BLEdBQU0sT0FBQSxDQUFRLGtCQUFSLENBUE4sQ0FBQTs7QUFBQSxPQVFBLENBQVEseUJBQVIsQ0FSQSxDQUFBOztBQUFBLE9BU0EsQ0FBUSxpQkFBUixDQVRBLENBQUE7O0FBQUEsWUFXQSxHQUFlLFNBQUEsR0FBQTtBQUNiLE1BQUEsQ0FBQTtBQUFBLEVBQUEsSUFBRyxDQUFBLEdBQUksTUFBTSxDQUFDLDBCQUFkO1dBQ0UsQ0FBQSxDQUFFLENBQUEsQ0FBRSxTQUFGLENBQUYsRUFERjtHQURhO0FBQUEsQ0FYZixDQUFBOztBQUFBLENBZ0JBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxJQUF2QixDQUE0QixTQUFBLEdBQUE7QUFDMUIsTUFBQSxxREFBQTtBQUFBLEVBQUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxJQUFGLENBQWIsQ0FBQTtBQUFBLEVBQ0EsTUFBQSxHQUFTLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFVBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBbEIsQ0FEVCxDQUFBO0FBQUEsRUFHQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLHFCQUFGLENBSFgsQ0FBQTtBQUlBLE9BQUEsNkNBQUE7dUJBQUE7QUFDRSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUscUJBQUYsQ0FDUCxDQUFDLFFBRE0sQ0FDRyxLQUFLLENBQUMsUUFEVCxDQUFULENBQUE7QUFBQSxJQUdBLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBSyxDQUFDLElBQWxCLENBSEEsQ0FBQTtBQUFBLElBS0EsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsTUFBaEIsQ0FMQSxDQURGO0FBQUEsR0FKQTtBQUFBLEVBWUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsUUFBakIsQ0FaQSxDQUFBO0FBQUEsRUFnQkEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsMkJBQWhCLEVBQTZDLEVBQTdDLENBaEJBLENBQUE7QUFBQSxFQWlCQSxVQUFVLENBQUMsVUFBWCxDQUFzQixpQkFBdEIsQ0FqQkEsQ0FBQTtTQW1CQSxZQUFBLENBQUEsRUFwQjBCO0FBQUEsQ0FBNUIsQ0FoQkEsQ0FBQTs7QUFBQSxHQXNDRyxDQUFDLElBQUosQ0FBUztBQUFBLEVBQUEsU0FBQSxFQUFZLENBQUEsQ0FBRSxTQUFGLENBQVo7Q0FBVCxDQXRDQSxDQUFBOztBQUFBLEVBd0NFLENBQUMsc0JBQUgsQ0FBQSxDQXhDQSxDQUFBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaGlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL3hCQSxJQUFBLDJDQUFBO0VBQUEsa0JBQUE7O0FBQUEsSUFBQSxHQUFlLE1BQU0sQ0FBQyxPQUF0QixDQUFBOztBQUFBLFlBQ0EsR0FBZSxTQURmLENBQUE7O0FBQUEsWUFFQSxHQUFlLE9BQUEsQ0FBUSxRQUFSLENBQWlCLENBQUMsWUFGakMsQ0FBQTs7QUFBQSxJQUdBLEdBQU8sT0FBQSxDQUFRLE1BQVIsQ0FIUCxDQUFBOztBQUFBLEdBS0EsR0FBUyxDQUFBLFNBQUEsR0FBQTtBQUVQLE1BQUEsNElBQUE7QUFBQSxFQUFBLE9BQUEsR0FBVSxHQUFBLENBQUEsWUFBVixDQUFBO0FBQUEsRUFHQSxPQUFBLEdBQVUsU0FBQSxHQUFBO0FBQWEsUUFBQSxJQUFBO0FBQUEsSUFBWiw4REFBWSxDQUFBO1dBQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFYLENBQWlCLE9BQWpCLEVBQTBCLElBQTFCLEVBQWI7RUFBQSxDQUhWLENBQUE7QUFBQSxFQUtBLE9BQUEsR0FBVyxDQUxYLENBQUE7QUFBQSxFQU1BLEdBQUEsR0FBVyxDQU5YLENBQUE7QUFBQSxFQU9BLFVBQUEsR0FBYSxFQVBiLENBQUE7QUFBQSxFQVNBLElBQUEsR0FBTyxTQUFDLE9BQUQsR0FBQTtBQUVMLElBQUEsVUFBQSxHQUFhLE9BQU8sQ0FBQyxTQUFyQixDQUFBO0FBQUEsSUFFQSxHQUFBLEdBQU0sVUFBVSxDQUFDLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBMEIsQ0FBQyxNQUZqQyxDQUFBO0FBQUEsSUFJQSxVQUFBLENBQUEsQ0FKQSxDQUFBO0FBQUEsSUFLQSx3QkFBQSxDQUFBLENBTEEsQ0FBQTtXQU9BLElBQUEsQ0FBSyxPQUFMLEVBVEs7RUFBQSxDQVRQLENBQUE7QUFBQSxFQW9CQSxVQUFBLEdBQWEsU0FBQSxHQUFBO0FBQ1gsUUFBQSxLQUFBO0FBQUEsSUFBQSxJQUFHLEtBQUEsR0FBUSxJQUFJLENBQUMsS0FBaEI7YUFDRSxPQUFBLEdBQVUsS0FBSyxDQUFDLFFBRGxCO0tBRFc7RUFBQSxDQXBCYixDQUFBO0FBQUEsRUF3QkEsSUFBQSxHQUFPLFNBQUEsR0FBQTtBQUNMLElBQUEsT0FBQSxJQUFXLENBQVgsQ0FBQTtBQUNBLElBQUEsSUFBaUIsT0FBQSxHQUFVLENBQTNCO0FBQUEsTUFBQSxPQUFBLEdBQVUsR0FBVixDQUFBO0tBREE7V0FFQSxRQUFBLENBQUEsRUFISztFQUFBLENBeEJQLENBQUE7QUFBQSxFQTZCQSxJQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsSUFBQSxPQUFBLElBQVcsQ0FBWCxDQUFBO0FBQ0EsSUFBQSxJQUFlLE9BQUEsR0FBVSxHQUF6QjtBQUFBLE1BQUEsT0FBQSxHQUFVLENBQVYsQ0FBQTtLQURBO1dBRUEsUUFBQSxDQUFBLEVBSEs7RUFBQSxDQTdCUCxDQUFBO0FBQUEsRUFrQ0EsSUFBQSxHQUFPLFNBQUMsRUFBRCxHQUFBO0FBQ0wsSUFBQSxVQUFVLENBQUMsSUFBWCxDQUFnQixnQkFBaEIsQ0FBaUMsQ0FBQyxXQUFsQyxDQUE4QyxRQUE5QyxDQUFBLENBQUE7V0FDQSxVQUFVLENBQUMsSUFBWCxDQUFnQixTQUFoQixDQUEwQixDQUFDLEVBQTNCLENBQThCLEVBQUEsR0FBSyxDQUFuQyxDQUFxQyxDQUFDLFFBQXRDLENBQStDLFFBQS9DLEVBRks7RUFBQSxDQWxDUCxDQUFBO0FBQUEsRUFzQ0EsUUFBQSxHQUFXLFNBQUEsR0FBQTtBQUNULElBQUEsSUFBQSxDQUFLLE9BQUwsQ0FBQSxDQUFBO0FBQUEsSUFDQSxPQUFPLENBQUMsSUFBUixDQUFhLFVBQWIsQ0FEQSxDQUFBO1dBRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZTtBQUFBLE1BQUEsT0FBQSxFQUFVLE9BQVY7S0FBZixFQUFtQyxRQUFBLEdBQVEsT0FBUixHQUFnQixLQUFoQixHQUFxQixHQUF4RCxFQUErRCxFQUFBLEdBQUcsWUFBSCxHQUFrQixPQUFqRixFQUhTO0VBQUEsQ0F0Q1gsQ0FBQTtBQUFBLEVBMkNBLGdCQUFBLEdBQW1CLFNBQUMsS0FBRCxHQUFBO0FBQ2pCLElBQUEsSUFBRyxLQUFLLENBQUMsS0FBVDthQUVFLElBQUEsQ0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQWpCLEVBRkY7S0FBQSxNQUFBO0FBS0UsTUFBQSxPQUFBLEdBQVcsTUFBRCxDQUFTLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQXJCLENBQTZCLFlBQTdCLEVBQTBDLEVBQTFDLENBQVQsQ0FBVixDQUFBO0FBQ0EsTUFBQSxJQUFpQixPQUFqQjtlQUFBLElBQUEsQ0FBSyxPQUFMLEVBQUE7T0FORjtLQURpQjtFQUFBLENBM0NuQixDQUFBO0FBQUEsRUFvREEsd0JBQUEsR0FBMkIsU0FBQSxHQUFBO1dBQ3pCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLGlCQURLO0VBQUEsQ0FwRDNCLENBQUE7QUFBQSxFQXVEQSxNQUFBLEdBQVMsU0FBQSxHQUFBO1dBQ1A7QUFBQSxNQUFBLEtBQUEsRUFBUSxHQUFSO0FBQUEsTUFDQSxPQUFBLEVBQVUsT0FEVjtNQURPO0VBQUEsQ0F2RFQsQ0FBQTtTQTJEQTtBQUFBLElBQUEsTUFBQSxFQUFTLE1BQVQ7QUFBQSxJQUNBLElBQUEsRUFBTyxJQURQO0FBQUEsSUFFQSxJQUFBLEVBQU8sSUFGUDtBQUFBLElBR0EsSUFBQSxFQUFPLElBSFA7QUFBQSxJQUlBLEVBQUEsRUFBSyxPQUpMO0lBN0RPO0FBQUEsQ0FBQSxDQUFILENBQUEsQ0FMTixDQUFBOztBQUFBLE1Bd0VNLENBQUMsT0FBUCxHQUFpQixHQXhFakIsQ0FBQTs7Ozs7QUNBQSxJQUFBLHNCQUFBOztBQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsa0JBQVIsQ0FBTixDQUFBOztBQUFBLFNBQ0EsR0FBWSxPQUFBLENBQVEsV0FBUixDQURaLENBQUE7O0FBQUEsQ0FFQSxHQUFJLE9BQUEsQ0FBUSxTQUFSLENBRkosQ0FBQTs7QUFBQSxTQU1TLENBQUMsSUFBVixDQUFlLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLENBQWYsRUFBeUMsR0FBRyxDQUFDLElBQTdDLENBTkEsQ0FBQTs7QUFBQSxTQU9TLENBQUMsSUFBVixDQUFlLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBZixFQUE0QyxHQUFHLENBQUMsSUFBaEQsQ0FQQSxDQUFBOztBQUFBLEdBVUEsR0FBTSxDQUFBLENBQUUsNkJBQUYsQ0FWTixDQUFBOztBQUFBLENBV0EsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLEdBQWpCLENBWEEsQ0FBQTs7QUFBQSxDQWFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsbUJBQXhCLEVBQTZDLFNBQUMsQ0FBRCxHQUFBO1NBQzNDLEdBQUcsQ0FBQyxJQUFKLENBQUEsRUFEMkM7QUFBQSxDQUE3QyxDQWJBLENBQUE7O0FBQUEsQ0FnQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixrQkFBeEIsRUFBNEMsU0FBQyxDQUFELEdBQUE7U0FDMUMsR0FBRyxDQUFDLElBQUosQ0FBQSxFQUQwQztBQUFBLENBQTVDLENBaEJBLENBQUE7O0FBQUEsQ0FtQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsV0FBZixFQUE0QixTQUFBLEdBQUE7U0FDMUIsR0FBRyxDQUFDLElBQUosQ0FBQSxFQUQwQjtBQUFBLENBQTVCLENBbkJBLENBQUE7O0FBQUEsQ0FzQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsWUFBZixFQUE2QixTQUFBLEdBQUE7U0FDM0IsR0FBRyxDQUFDLElBQUosQ0FBQSxFQUQyQjtBQUFBLENBQTdCLENBdEJBLENBQUE7Ozs7O0FDQUEsSUFBQSxnR0FBQTs7QUFBQSxRQUFBLEdBQVcsT0FBQSxDQUFRLFFBQVIsQ0FBWCxDQUFBOztBQUFBLGNBRUEsR0FBaUIsU0FBQyxJQUFELEdBQUE7U0FDZixJQUFBLElBQVEsSUFBSSxDQUFDLElBQUwsS0FBYSxXQUFyQixJQUFvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVYsQ0FBa0IsSUFBbEIsQ0FBQSxLQUEyQixFQURoRDtBQUFBLENBRmpCLENBQUE7O0FBQUEsYUFLQSxHQUFnQixTQUFDLElBQUQsR0FBQTtTQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBVixDQUFpQixDQUFqQixFQURjO0FBQUEsQ0FMaEIsQ0FBQTs7QUFBQSxNQVFBLEdBQVMsU0FBQyxNQUFELEVBQVMsTUFBVCxHQUFBO0FBQ1AsTUFBQSxXQUFBO0FBQUEsRUFBQSxJQUFpQixNQUFNLENBQUMsTUFBUCxLQUFpQixDQUFsQztBQUFBLFdBQU8sTUFBUCxDQUFBO0dBQUE7QUFBQSxFQUVBLEtBQUEsR0FBUSxFQUZSLENBQUE7QUFBQSxFQUdBLEtBQUssQ0FBQyxLQUFOLEdBQWMsRUFIZCxDQUFBO0FBQUEsRUFLQSxJQUFBLEdBQU8sTUFBTSxDQUFDLEtBQVAsQ0FBQSxDQUxQLENBQUE7QUFNQSxFQUFBLElBQUcsY0FBQSxDQUFlLElBQWYsQ0FBSDtBQUNFLElBQUEsS0FBSyxDQUFDLFVBQU4sR0FBbUIsYUFBQSxDQUFjLElBQWQsQ0FBbkIsQ0FERjtHQU5BO0FBU0EsU0FBTSxJQUFBLEdBQU8sTUFBTSxDQUFDLEtBQVAsQ0FBQSxDQUFiLEdBQUE7QUFDRSxJQUFBLElBQUcsY0FBQSxDQUFlLElBQWYsQ0FBSDtBQUNFLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLENBQUEsQ0FBQTtBQUNBLFlBRkY7S0FBQSxNQUFBO0FBSUUsTUFBQSxLQUFLLENBQUMsSUFBTixDQUFXLElBQVgsQ0FBQSxDQUpGO0tBREY7RUFBQSxDQVRBO0FBQUEsRUFnQkEsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBaEJBLENBQUE7U0FpQkEsTUFBQSxDQUFPLE1BQVAsRUFBZSxNQUFmLEVBbEJPO0FBQUEsQ0FSVCxDQUFBOztBQUFBLElBNEJBLEdBQU8sU0FBQyxNQUFELEdBQUE7U0FDTCxNQUFBLENBQU8sRUFBUCxFQUFXLE1BQVgsRUFESztBQUFBLENBNUJQLENBQUE7O0FBQUEsTUErQkEsR0FBUyxTQUFDLEVBQUQsR0FBQTtBQUNQLE1BQUEsTUFBQTtBQUFBLEVBQUEsTUFBQSxHQUFTLFFBQVEsQ0FBQyxLQUFULENBQWUsRUFBZixDQUFULENBQUE7U0FDQSxJQUFBLENBQUssTUFBTCxFQUZPO0FBQUEsQ0EvQlQsQ0FBQTs7QUFBQSxhQW1DQSxHQUFnQixTQUFDLEtBQUQsR0FBQTtTQUNkO0FBQUEsSUFBQSxRQUFBLEVBQVcsS0FBSyxDQUFDLFVBQWpCO0FBQUEsSUFDQSxJQUFBLEVBQU8sUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEIsQ0FEUDtJQURjO0FBQUEsQ0FuQ2hCLENBQUE7O0FBQUEsa0JBdUNBLEdBQXdCLENBQUEsU0FBQSxHQUFBO0FBRXRCLE1BQUEsT0FBQTtBQUFBLEVBQUEsT0FBQSxHQUFVLFNBQUMsRUFBRCxHQUFBO0FBQ1IsUUFBQSxpQ0FBQTtBQUFBLElBQUEsTUFBQSxHQUFTLE1BQUEsQ0FBTyxFQUFQLENBQVQsQ0FBQTtBQUVDO1NBQUEsNkNBQUE7eUJBQUE7QUFBQSxvQkFBQSxhQUFBLENBQWMsS0FBZCxFQUFBLENBQUE7QUFBQTtvQkFITztFQUFBLENBQVYsQ0FBQTtTQU1BO0FBQUEsSUFBQSxPQUFBLEVBQVUsT0FBVjtJQVJzQjtBQUFBLENBQUEsQ0FBSCxDQUFBLENBdkNyQixDQUFBOztBQUFBLE1BaURNLENBQUMsT0FBUCxHQUFpQixrQkFqRGpCLENBQUE7Ozs7O0FDQUEsSUFBQSxNQUFBOztBQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsa0JBQVIsQ0FBTixDQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsU0FBUixDQURKLENBQUE7O0FBQUEsQ0FHQSxDQUFFLFNBQUEsR0FBQTtBQUVBLE1BQUEsd0JBQUE7QUFBQSxFQUFBLFFBQUEsR0FBVyxDQUFBLENBQUUsdUJBQUYsQ0FBWCxDQUFBO0FBQUEsRUFFQSxjQUFBLEdBQWlCLFNBQUEsR0FBQTtBQUNmLFFBQUEsTUFBQTtBQUFBLElBQUEsTUFBQSxHQUFTLEdBQUcsQ0FBQyxNQUFKLENBQUEsQ0FBVCxDQUFBO1dBQ0EsUUFBUSxDQUFDLElBQVQsQ0FDRTtBQUFBLE1BQUEsR0FBQSxFQUFNLE1BQU0sQ0FBQyxLQUFiO0FBQUEsTUFDQSxLQUFBLEVBQVEsTUFBTSxDQUFDLE9BRGY7S0FERixFQUZlO0VBQUEsQ0FGakIsQ0FBQTtBQUFBLEVBUUEsY0FBQSxDQUFBLENBUkEsQ0FBQTtBQUFBLEVBVUEsR0FBRyxDQUFDLEVBQUosQ0FBTyxVQUFQLEVBQW1CLGNBQW5CLENBVkEsQ0FBQTtTQVlBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLFFBQWpCLEVBZEE7QUFBQSxDQUFGLENBSEEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJobCA9IHJlcXVpcmUgJ2hpZ2hsaWdodGpzJ1xuJCA9IHJlcXVpcmUgJ3plcHRvanMnXG5cbiQgLT5cbiAgJCgnYm9keScpLmFkZENsYXNzKCdtb2JpbGUnKSBpZiAkLm9zLnBob25lIHx8ICQub3MudGFibGV0XG5cbnByb2Nlc3NvciA9IHJlcXVpcmUgJy4vc2xpZGUtcGFjay1wcm9jZXNzb3InXG5hcGkgPSByZXF1aXJlICcuL3NsaWRlLXBhY2stYXBpJ1xucmVxdWlyZSAnLi9zbGlkZS1wYWNrLW5hdmlnYXRpb24nXG5yZXF1aXJlICcuL3NsaWRlLXBhY2stdWknXG5cbmV4ZWN1dGVIb29rcyA9IC0+XG4gIGlmIGYgPSB3aW5kb3cuX3NsaWRlX3BhY2tfcHJvY2Vzc19zbGlkZXNcbiAgICBmICQoJ3NlY3Rpb24nKVxuXG5cbiQoJ1tkYXRhLXNsaWRlLXBhY2tdJykuZWFjaCAtPlxuICAkc2xpZGVQYWNrID0gJChAKVxuICBzbGlkZXMgPSBwcm9jZXNzb3IucHJvY2VzcyAkc2xpZGVQYWNrLnRleHQoKVxuXG4gICRhcnRpY2xlID0gJCgnPGFydGljbGU+PC9hcnRpY2xlPicpXG4gIGZvciBzbGlkZSBpbiBzbGlkZXNcbiAgICAkc2xpZGUgPSAkKCc8c2VjdGlvbj48L3NlY3Rpb24+JylcbiAgICAgIC5hZGRDbGFzcyhzbGlkZS5jc3NDbGFzcylcblxuICAgICRzbGlkZS5odG1sKHNsaWRlLmh0bWwpXG5cbiAgICAkYXJ0aWNsZS5hcHBlbmQgJHNsaWRlXG5cbiAgJCgnYm9keScpLmFwcGVuZCAkYXJ0aWNsZVxuXG4gICMgUHJldmVudCBwcm9ibGVtcyB3aGVuIHNhdmluZyB0aGUgc2xpZGVzIGFzIGEgY29tcGxldGVcbiAgIyBIVE1MIHBhZ2UgXl9eXG4gICRzbGlkZVBhY2suYXR0cignZGF0YS1zbGlkZS1wYWNrLXByb2Nlc3NlZCcsICcnKVxuICAkc2xpZGVQYWNrLnJlbW92ZUF0dHIoJ2RhdGEtc2xpZGUtcGFjaycpXG5cbiAgZXhlY3V0ZUhvb2tzKClcblxuYXBpLmluaXQgc2xpZGVQYWNrIDogJCgnYXJ0aWNsZScpXG5cbmhsLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKVxuIiwiO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbiFmdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9lKGV4cG9ydHMpOih3aW5kb3cuaGxqcz1lKHt9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaGxqc30pKX0oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8mL2dtLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nbSxcIiZsdDtcIikucmVwbGFjZSgvPi9nbSxcIiZndDtcIil9ZnVuY3Rpb24gdChlKXtyZXR1cm4gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIHIoZSxuKXt2YXIgdD1lJiZlLmV4ZWMobik7cmV0dXJuIHQmJjA9PXQuaW5kZXh9ZnVuY3Rpb24gYShlKXt2YXIgbj0oZS5jbGFzc05hbWUrXCIgXCIrKGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuY2xhc3NOYW1lOlwiXCIpKS5zcGxpdCgvXFxzKy8pO3JldHVybiBuPW4ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15sYW5nKHVhZ2UpPy0vLFwiXCIpfSksbi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIE4oZSl8fC9ubygtPyloaWdobGlnaHQvLnRlc3QoZSl9KVswXX1mdW5jdGlvbiBvKGUsbil7dmFyIHQ9e307Zm9yKHZhciByIGluIGUpdFtyXT1lW3JdO2lmKG4pZm9yKHZhciByIGluIG4pdFtyXT1uW3JdO3JldHVybiB0fWZ1bmN0aW9uIGkoZSl7dmFyIG49W107cmV0dXJuIGZ1bmN0aW9uIHIoZSxhKXtmb3IodmFyIG89ZS5maXJzdENoaWxkO287bz1vLm5leHRTaWJsaW5nKTM9PW8ubm9kZVR5cGU/YSs9by5ub2RlVmFsdWUubGVuZ3RoOjE9PW8ubm9kZVR5cGUmJihuLnB1c2goe2V2ZW50Olwic3RhcnRcIixvZmZzZXQ6YSxub2RlOm99KSxhPXIobyxhKSx0KG8pLm1hdGNoKC9icnxocnxpbWd8aW5wdXQvKXx8bi5wdXNoKHtldmVudDpcInN0b3BcIixvZmZzZXQ6YSxub2RlOm99KSk7cmV0dXJuIGF9KGUsMCksbn1mdW5jdGlvbiBjKGUscixhKXtmdW5jdGlvbiBvKCl7cmV0dXJuIGUubGVuZ3RoJiZyLmxlbmd0aD9lWzBdLm9mZnNldCE9clswXS5vZmZzZXQ/ZVswXS5vZmZzZXQ8clswXS5vZmZzZXQ/ZTpyOlwic3RhcnRcIj09clswXS5ldmVudD9lOnI6ZS5sZW5ndGg/ZTpyfWZ1bmN0aW9uIGkoZSl7ZnVuY3Rpb24gcihlKXtyZXR1cm5cIiBcIitlLm5vZGVOYW1lKyc9XCInK24oZS52YWx1ZSkrJ1wiJ31sKz1cIjxcIit0KGUpK0FycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLmF0dHJpYnV0ZXMscikuam9pbihcIlwiKStcIj5cIn1mdW5jdGlvbiBjKGUpe2wrPVwiPC9cIit0KGUpK1wiPlwifWZ1bmN0aW9uIHUoZSl7KFwic3RhcnRcIj09ZS5ldmVudD9pOmMpKGUubm9kZSl9Zm9yKHZhciBzPTAsbD1cIlwiLGY9W107ZS5sZW5ndGh8fHIubGVuZ3RoOyl7dmFyIGc9bygpO2lmKGwrPW4oYS5zdWJzdHIocyxnWzBdLm9mZnNldC1zKSkscz1nWzBdLm9mZnNldCxnPT1lKXtmLnJldmVyc2UoKS5mb3JFYWNoKGMpO2RvIHUoZy5zcGxpY2UoMCwxKVswXSksZz1vKCk7d2hpbGUoZz09ZSYmZy5sZW5ndGgmJmdbMF0ub2Zmc2V0PT1zKTtmLnJldmVyc2UoKS5mb3JFYWNoKGkpfWVsc2VcInN0YXJ0XCI9PWdbMF0uZXZlbnQ/Zi5wdXNoKGdbMF0ubm9kZSk6Zi5wb3AoKSx1KGcuc3BsaWNlKDAsMSlbMF0pfXJldHVybiBsK24oYS5zdWJzdHIocykpfWZ1bmN0aW9uIHUoZSl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5zb3VyY2V8fGV9ZnVuY3Rpb24gdCh0LHIpe3JldHVybiBSZWdFeHAobih0KSxcIm1cIisoZS5jST9cImlcIjpcIlwiKSsocj9cImdcIjpcIlwiKSl9ZnVuY3Rpb24gcihhLGkpe2lmKCFhLmNvbXBpbGVkKXtpZihhLmNvbXBpbGVkPSEwLGEuaz1hLmt8fGEuYkssYS5rKXt2YXIgYz17fSx1PWZ1bmN0aW9uKG4sdCl7ZS5jSSYmKHQ9dC50b0xvd2VyQ2FzZSgpKSx0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCJ8XCIpO2NbdFswXV09W24sdFsxXT9OdW1iZXIodFsxXSk6MV19KX07XCJzdHJpbmdcIj09dHlwZW9mIGEuaz91KFwia2V5d29yZFwiLGEuayk6T2JqZWN0LmtleXMoYS5rKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3UoZSxhLmtbZV0pfSksYS5rPWN9YS5sUj10KGEubHx8L1xcYltBLVphLXowLTlfXStcXGIvLCEwKSxpJiYoYS5iSyYmKGEuYj1cIlxcXFxiKFwiK2EuYksuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKVxcXFxiXCIpLGEuYnx8KGEuYj0vXFxCfFxcYi8pLGEuYlI9dChhLmIpLGEuZXx8YS5lV3x8KGEuZT0vXFxCfFxcYi8pLGEuZSYmKGEuZVI9dChhLmUpKSxhLnRFPW4oYS5lKXx8XCJcIixhLmVXJiZpLnRFJiYoYS50RSs9KGEuZT9cInxcIjpcIlwiKStpLnRFKSksYS5pJiYoYS5pUj10KGEuaSkpLHZvaWQgMD09PWEuciYmKGEucj0xKSxhLmN8fChhLmM9W10pO3ZhciBzPVtdO2EuYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uudj9lLnYuZm9yRWFjaChmdW5jdGlvbihuKXtzLnB1c2gobyhlLG4pKX0pOnMucHVzaChcInNlbGZcIj09ZT9hOmUpfSksYS5jPXMsYS5jLmZvckVhY2goZnVuY3Rpb24oZSl7cihlLGEpfSksYS5zdGFydHMmJnIoYS5zdGFydHMsaSk7dmFyIGw9YS5jLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5iSz9cIlxcXFwuPyhcIitlLmIrXCIpXFxcXC4/XCI6ZS5ifSkuY29uY2F0KFthLnRFLGEuaV0pLm1hcChuKS5maWx0ZXIoQm9vbGVhbik7YS50PWwubGVuZ3RoP3QobC5qb2luKFwifFwiKSwhMCk6e2V4ZWM6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH19fX1yKGUpfWZ1bmN0aW9uIHMoZSx0LGEsbyl7ZnVuY3Rpb24gaShlLG4pe2Zvcih2YXIgdD0wO3Q8bi5jLmxlbmd0aDt0KyspaWYocihuLmNbdF0uYlIsZSkpcmV0dXJuIG4uY1t0XX1mdW5jdGlvbiBjKGUsbil7cmV0dXJuIHIoZS5lUixuKT9lOmUuZVc/YyhlLnBhcmVudCxuKTp2b2lkIDB9ZnVuY3Rpb24gZihlLG4pe3JldHVybiFhJiZyKG4uaVIsZSl9ZnVuY3Rpb24gZyhlLG4pe3ZhciB0PXguY0k/blswXS50b0xvd2VyQ2FzZSgpOm5bMF07cmV0dXJuIGUuay5oYXNPd25Qcm9wZXJ0eSh0KSYmZS5rW3RdfWZ1bmN0aW9uIHAoZSxuLHQscil7dmFyIGE9cj9cIlwiOkUuY2xhc3NQcmVmaXgsbz0nPHNwYW4gY2xhc3M9XCInK2EsaT10P1wiXCI6XCI8L3NwYW4+XCI7cmV0dXJuIG8rPWUrJ1wiPicsbytuK2l9ZnVuY3Rpb24gZCgpe2lmKCF3LmspcmV0dXJuIG4oeSk7dmFyIGU9XCJcIix0PTA7dy5sUi5sYXN0SW5kZXg9MDtmb3IodmFyIHI9dy5sUi5leGVjKHkpO3I7KXtlKz1uKHkuc3Vic3RyKHQsci5pbmRleC10KSk7dmFyIGE9Zyh3LHIpO2E/KEIrPWFbMV0sZSs9cChhWzBdLG4oclswXSkpKTplKz1uKHJbMF0pLHQ9dy5sUi5sYXN0SW5kZXgscj13LmxSLmV4ZWMoeSl9cmV0dXJuIGUrbih5LnN1YnN0cih0KSl9ZnVuY3Rpb24gaCgpe2lmKHcuc0wmJiFSW3cuc0xdKXJldHVybiBuKHkpO3ZhciBlPXcuc0w/cyh3LnNMLHksITAsTFt3LnNMXSk6bCh5KTtyZXR1cm4gdy5yPjAmJihCKz1lLnIpLFwiY29udGludW91c1wiPT13LnN1Ykxhbmd1YWdlTW9kZSYmKExbdy5zTF09ZS50b3ApLHAoZS5sYW5ndWFnZSxlLnZhbHVlLCExLCEwKX1mdW5jdGlvbiB2KCl7cmV0dXJuIHZvaWQgMCE9PXcuc0w/aCgpOmQoKX1mdW5jdGlvbiBiKGUsdCl7dmFyIHI9ZS5jTj9wKGUuY04sXCJcIiwhMCk6XCJcIjtlLnJCPyhNKz1yLHk9XCJcIik6ZS5lQj8oTSs9bih0KStyLHk9XCJcIik6KE0rPXIseT10KSx3PU9iamVjdC5jcmVhdGUoZSx7cGFyZW50Ont2YWx1ZTp3fX0pfWZ1bmN0aW9uIG0oZSx0KXtpZih5Kz1lLHZvaWQgMD09PXQpcmV0dXJuIE0rPXYoKSwwO3ZhciByPWkodCx3KTtpZihyKXJldHVybiBNKz12KCksYihyLHQpLHIuckI/MDp0Lmxlbmd0aDt2YXIgYT1jKHcsdCk7aWYoYSl7dmFyIG89dztvLnJFfHxvLmVFfHwoeSs9dCksTSs9digpO2RvIHcuY04mJihNKz1cIjwvc3Bhbj5cIiksQis9dy5yLHc9dy5wYXJlbnQ7d2hpbGUodyE9YS5wYXJlbnQpO3JldHVybiBvLmVFJiYoTSs9bih0KSkseT1cIlwiLGEuc3RhcnRzJiZiKGEuc3RhcnRzLFwiXCIpLG8uckU/MDp0Lmxlbmd0aH1pZihmKHQsdykpdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGxleGVtZSBcIicrdCsnXCIgZm9yIG1vZGUgXCInKyh3LmNOfHxcIjx1bm5hbWVkPlwiKSsnXCInKTtyZXR1cm4geSs9dCx0Lmxlbmd0aHx8MX12YXIgeD1OKGUpO2lmKCF4KXRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInK2UrJ1wiJyk7dSh4KTtmb3IodmFyIHc9b3x8eCxMPXt9LE09XCJcIixrPXc7ayE9eDtrPWsucGFyZW50KWsuY04mJihNPXAoay5jTixcIlwiLCEwKStNKTt2YXIgeT1cIlwiLEI9MDt0cnl7Zm9yKHZhciBDLGosST0wOzspe2lmKHcudC5sYXN0SW5kZXg9SSxDPXcudC5leGVjKHQpLCFDKWJyZWFrO2o9bSh0LnN1YnN0cihJLEMuaW5kZXgtSSksQ1swXSksST1DLmluZGV4K2p9bSh0LnN1YnN0cihJKSk7Zm9yKHZhciBrPXc7ay5wYXJlbnQ7az1rLnBhcmVudClrLmNOJiYoTSs9XCI8L3NwYW4+XCIpO3JldHVybntyOkIsdmFsdWU6TSxsYW5ndWFnZTplLHRvcDp3fX1jYXRjaChBKXtpZigtMSE9QS5tZXNzYWdlLmluZGV4T2YoXCJJbGxlZ2FsXCIpKXJldHVybntyOjAsdmFsdWU6bih0KX07dGhyb3cgQX19ZnVuY3Rpb24gbChlLHQpe3Q9dHx8RS5sYW5ndWFnZXN8fE9iamVjdC5rZXlzKFIpO3ZhciByPXtyOjAsdmFsdWU6bihlKX0sYT1yO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24obil7aWYoTihuKSl7dmFyIHQ9cyhuLGUsITEpO3QubGFuZ3VhZ2U9bix0LnI+YS5yJiYoYT10KSx0LnI+ci5yJiYoYT1yLHI9dCl9fSksYS5sYW5ndWFnZSYmKHIuc2Vjb25kX2Jlc3Q9YSkscn1mdW5jdGlvbiBmKGUpe3JldHVybiBFLnRhYlJlcGxhY2UmJihlPWUucmVwbGFjZSgvXigoPFtePl0rPnxcXHQpKykvZ20sZnVuY3Rpb24oZSxuKXtyZXR1cm4gbi5yZXBsYWNlKC9cXHQvZyxFLnRhYlJlcGxhY2UpfSkpLEUudXNlQlImJihlPWUucmVwbGFjZSgvXFxuL2csXCI8YnI+XCIpKSxlfWZ1bmN0aW9uIGcoZSxuLHQpe3ZhciByPW4/eFtuXTp0LGE9W2UudHJpbSgpXTtyZXR1cm4gZS5tYXRjaCgvKFxcc3xeKWhsanMoXFxzfCQpLyl8fGEucHVzaChcImhsanNcIiksciYmYS5wdXNoKHIpLGEuam9pbihcIiBcIikudHJpbSgpfWZ1bmN0aW9uIHAoZSl7dmFyIG49YShlKTtpZighL25vKC0/KWhpZ2hsaWdodC8udGVzdChuKSl7dmFyIHQ7RS51c2VCUj8odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJkaXZcIiksdC5pbm5lckhUTUw9ZS5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csXCJcIikucmVwbGFjZSgvPGJyWyBcXC9dKj4vZyxcIlxcblwiKSk6dD1lO3ZhciByPXQudGV4dENvbnRlbnQsbz1uP3MobixyLCEwKTpsKHIpLHU9aSh0KTtpZih1Lmxlbmd0aCl7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpO3AuaW5uZXJIVE1MPW8udmFsdWUsby52YWx1ZT1jKHUsaShwKSxyKX1vLnZhbHVlPWYoby52YWx1ZSksZS5pbm5lckhUTUw9by52YWx1ZSxlLmNsYXNzTmFtZT1nKGUuY2xhc3NOYW1lLG4sby5sYW5ndWFnZSksZS5yZXN1bHQ9e2xhbmd1YWdlOm8ubGFuZ3VhZ2UscmU6by5yfSxvLnNlY29uZF9iZXN0JiYoZS5zZWNvbmRfYmVzdD17bGFuZ3VhZ2U6by5zZWNvbmRfYmVzdC5sYW5ndWFnZSxyZTpvLnNlY29uZF9iZXN0LnJ9KX19ZnVuY3Rpb24gZChlKXtFPW8oRSxlKX1mdW5jdGlvbiBoKCl7aWYoIWguY2FsbGVkKXtoLmNhbGxlZD0hMDt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlIGNvZGVcIik7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLHApfX1mdW5jdGlvbiB2KCl7YWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixoLCExKSxhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGgsITEpfWZ1bmN0aW9uIGIobix0KXt2YXIgcj1SW25dPXQoZSk7ci5hbGlhc2VzJiZyLmFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbihlKXt4W2VdPW59KX1mdW5jdGlvbiBtKCl7cmV0dXJuIE9iamVjdC5rZXlzKFIpfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIFJbZV18fFJbeFtlXV19dmFyIEU9e2NsYXNzUHJlZml4OlwiaGxqcy1cIix0YWJSZXBsYWNlOm51bGwsdXNlQlI6ITEsbGFuZ3VhZ2VzOnZvaWQgMH0sUj17fSx4PXt9O3JldHVybiBlLmhpZ2hsaWdodD1zLGUuaGlnaGxpZ2h0QXV0bz1sLGUuZml4TWFya3VwPWYsZS5oaWdobGlnaHRCbG9jaz1wLGUuY29uZmlndXJlPWQsZS5pbml0SGlnaGxpZ2h0aW5nPWgsZS5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkPXYsZS5yZWdpc3Rlckxhbmd1YWdlPWIsZS5saXN0TGFuZ3VhZ2VzPW0sZS5nZXRMYW5ndWFnZT1OLGUuaW5oZXJpdD1vLGUuSVI9XCJbYS16QS1aXVthLXpBLVowLTlfXSpcIixlLlVJUj1cIlthLXpBLVpfXVthLXpBLVowLTlfXSpcIixlLk5SPVwiXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspP1wiLGUuQ05SPVwiKFxcXFxiMFt4WF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KVwiLGUuQk5SPVwiXFxcXGIoMGJbMDFdKylcIixlLlJTUj1cIiF8IT18IT09fCV8JT18JnwmJnwmPXxcXFxcKnxcXFxcKj18XFxcXCt8XFxcXCs9fCx8LXwtPXwvPXwvfDp8O3w8PHw8PD18PD18PHw9PT18PT18PXw+Pj49fD4+PXw+PXw+Pj58Pj58PnxcXFxcP3xcXFxcW3xcXFxce3xcXFxcKHxcXFxcXnxcXFxcXj18XFxcXHx8XFxcXHw9fFxcXFx8XFxcXHx8flwiLGUuQkU9e2I6XCJcXFxcXFxcXFtcXFxcc1xcXFxTXVwiLHI6MH0sZS5BU009e2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiJ1wiLGk6XCJcXFxcblwiLGM6W2UuQkVdfSxlLlFTTT17Y046XCJzdHJpbmdcIixiOidcIicsZTonXCInLGk6XCJcXFxcblwiLGM6W2UuQkVdfSxlLlBXTT17YjovXFxiKGF8YW58dGhlfGFyZXxJfEknbXxpc24ndHxkb24ndHxkb2Vzbid0fHdvbid0fGJ1dHxqdXN0fHNob3VsZHxwcmV0dHl8c2ltcGx5fGVub3VnaHxnb25uYXxnb2luZ3x3dGZ8c298c3VjaClcXGIvfSxlLkNMQ009e2NOOlwiY29tbWVudFwiLGI6XCIvL1wiLGU6XCIkXCIsYzpbZS5QV01dfSxlLkNCQ009e2NOOlwiY29tbWVudFwiLGI6XCIvXFxcXCpcIixlOlwiXFxcXCovXCIsYzpbZS5QV01dfSxlLkhDTT17Y046XCJjb21tZW50XCIsYjpcIiNcIixlOlwiJFwiLGM6W2UuUFdNXX0sZS5OTT17Y046XCJudW1iZXJcIixiOmUuTlIscjowfSxlLkNOTT17Y046XCJudW1iZXJcIixiOmUuQ05SLHI6MH0sZS5CTk09e2NOOlwibnVtYmVyXCIsYjplLkJOUixyOjB9LGUuQ1NTTk09e2NOOlwibnVtYmVyXCIsYjplLk5SK1wiKCV8ZW18ZXh8Y2h8cmVtfHZ3fHZofHZtaW58dm1heHxjbXxtbXxpbnxwdHxwY3xweHxkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenxkcGl8ZHBjbXxkcHB4KT9cIixyOjB9LGUuUk09e2NOOlwicmVnZXhwXCIsYjovXFwvLyxlOi9cXC9bZ2ltdXldKi8saTovXFxuLyxjOltlLkJFLHtiOi9cXFsvLGU6L1xcXS8scjowLGM6W2UuQkVdfV19LGUuVE09e2NOOlwidGl0bGVcIixiOmUuSVIscjowfSxlLlVUTT17Y046XCJ0aXRsZVwiLGI6ZS5VSVIscjowfSxlfSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwieG1sXCIsZnVuY3Rpb24oKXt2YXIgdD1cIltBLVphLXowLTlcXFxcLl86LV0rXCIsZT17YjovPFxcPyhwaHApPyg/IVxcdykvLGU6L1xcPz4vLHNMOlwicGhwXCIsc3ViTGFuZ3VhZ2VNb2RlOlwiY29udGludW91c1wifSxjPXtlVzohMCxpOi88LyxyOjAsYzpbZSx7Y046XCJhdHRyaWJ1dGVcIixiOnQscjowfSx7YjpcIj1cIixyOjAsYzpbe2NOOlwidmFsdWVcIixjOltlXSx2Olt7YjovXCIvLGU6L1wiL30se2I6LycvLGU6LycvfSx7YjovW15cXHNcXC8+XSsvfV19XX1dfTtyZXR1cm57YWxpYXNlczpbXCJodG1sXCIsXCJ4aHRtbFwiLFwicnNzXCIsXCJhdG9tXCIsXCJ4c2xcIixcInBsaXN0XCJdLGNJOiEwLGM6W3tjTjpcImRvY3R5cGVcIixiOlwiPCFET0NUWVBFXCIsZTpcIj5cIixyOjEwLGM6W3tiOlwiXFxcXFtcIixlOlwiXFxcXF1cIn1dfSx7Y046XCJjb21tZW50XCIsYjpcIjwhLS1cIixlOlwiLS0+XCIscjoxMH0se2NOOlwiY2RhdGFcIixiOlwiPFxcXFwhXFxcXFtDREFUQVxcXFxbXCIsZTpcIlxcXFxdXFxcXF0+XCIscjoxMH0se2NOOlwidGFnXCIsYjpcIjxzdHlsZSg/PVxcXFxzfD58JClcIixlOlwiPlwiLGs6e3RpdGxlOlwic3R5bGVcIn0sYzpbY10sc3RhcnRzOntlOlwiPC9zdHlsZT5cIixyRTohMCxzTDpcImNzc1wifX0se2NOOlwidGFnXCIsYjpcIjxzY3JpcHQoPz1cXFxcc3w+fCQpXCIsZTpcIj5cIixrOnt0aXRsZTpcInNjcmlwdFwifSxjOltjXSxzdGFydHM6e2U6XCI8L3NjcmlwdD5cIixyRTohMCxzTDpcImphdmFzY3JpcHRcIn19LGUse2NOOlwicGlcIixiOi88XFw/XFx3Ky8sZTovXFw/Pi8scjoxMH0se2NOOlwidGFnXCIsYjpcIjwvP1wiLGU6XCIvPz5cIixjOlt7Y046XCJ0aXRsZVwiLGI6L1teIFxcLz48XFxuXFx0XSsvLHI6MH0sY119XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJjbG9qdXJlLXJlcGxcIixmdW5jdGlvbigpe3JldHVybntjOlt7Y046XCJwcm9tcHRcIixiOi9eKFtcXHcuLV0rfFxccyojXyk9Pi8sc3RhcnRzOntlOi8kLyxzTDpcImNsb2p1cmVcIixzdWJMYW5ndWFnZU1vZGU6XCJjb250aW51b3VzXCJ9fV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY3BwXCIsZnVuY3Rpb24odCl7dmFyIGk9e2tleXdvcmQ6XCJmYWxzZSBpbnQgZmxvYXQgd2hpbGUgcHJpdmF0ZSBjaGFyIGNhdGNoIGV4cG9ydCB2aXJ0dWFsIG9wZXJhdG9yIHNpemVvZiBkeW5hbWljX2Nhc3R8MTAgdHlwZWRlZiBjb25zdF9jYXN0fDEwIGNvbnN0IHN0cnVjdCBmb3Igc3RhdGljX2Nhc3R8MTAgdW5pb24gbmFtZXNwYWNlIHVuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIHByb3RlY3RlZCBib29sIHRlbXBsYXRlIG11dGFibGUgaWYgcHVibGljIGZyaWVuZCBkbyBnb3RvIGF1dG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIHVzaW5nIHRydWUgY2xhc3MgYXNtIGNhc2UgdHlwZWlkIHNob3J0IHJlaW50ZXJwcmV0X2Nhc3R8MTAgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRyeSB0aGlzIHN3aXRjaCBjb250aW51ZSB3Y2hhcl90IGlubGluZSBkZWxldGUgYWxpZ25vZiBjaGFyMTZfdCBjaGFyMzJfdCBjb25zdGV4cHIgZGVjbHR5cGUgbm9leGNlcHQgbnVsbHB0ciBzdGF0aWNfYXNzZXJ0IHRocmVhZF9sb2NhbCByZXN0cmljdCBfQm9vbCBjb21wbGV4IF9Db21wbGV4IF9JbWFnaW5hcnlpbnRtYXhfdCB1aW50bWF4X3QgaW50OF90IHVpbnQ4X3QgaW50MTZfdCB1aW50MTZfdCBpbnQzMl90IHVpbnQzMl90ICBpbnQ2NF90IHVpbnQ2NF90aW50X2xlYXN0OF90IHVpbnRfbGVhc3Q4X3QgaW50X2xlYXN0MTZfdCB1aW50X2xlYXN0MTZfdCBpbnRfbGVhc3QzMl90IHVpbnRfbGVhc3QzMl90aW50X2xlYXN0NjRfdCB1aW50X2xlYXN0NjRfdCBpbnRfZmFzdDhfdCB1aW50X2Zhc3Q4X3QgaW50X2Zhc3QxNl90IHVpbnRfZmFzdDE2X3QgaW50X2Zhc3QzMl90dWludF9mYXN0MzJfdCBpbnRfZmFzdDY0X3QgdWludF9mYXN0NjRfdCBpbnRwdHJfdCB1aW50cHRyX3QgYXRvbWljX2Jvb2wgYXRvbWljX2NoYXIgYXRvbWljX3NjaGFyYXRvbWljX3VjaGFyIGF0b21pY19zaG9ydCBhdG9taWNfdXNob3J0IGF0b21pY19pbnQgYXRvbWljX3VpbnQgYXRvbWljX2xvbmcgYXRvbWljX3Vsb25nIGF0b21pY19sbG9uZ2F0b21pY191bGxvbmcgYXRvbWljX3djaGFyX3QgYXRvbWljX2NoYXIxNl90IGF0b21pY19jaGFyMzJfdCBhdG9taWNfaW50bWF4X3QgYXRvbWljX3VpbnRtYXhfdGF0b21pY19pbnRwdHJfdCBhdG9taWNfdWludHB0cl90IGF0b21pY19zaXplX3QgYXRvbWljX3B0cmRpZmZfdCBhdG9taWNfaW50X2xlYXN0OF90IGF0b21pY19pbnRfbGVhc3QxNl90YXRvbWljX2ludF9sZWFzdDMyX3QgYXRvbWljX2ludF9sZWFzdDY0X3QgYXRvbWljX3VpbnRfbGVhc3Q4X3QgYXRvbWljX3VpbnRfbGVhc3QxNl90IGF0b21pY191aW50X2xlYXN0MzJfdGF0b21pY191aW50X2xlYXN0NjRfdCBhdG9taWNfaW50X2Zhc3Q4X3QgYXRvbWljX2ludF9mYXN0MTZfdCBhdG9taWNfaW50X2Zhc3QzMl90IGF0b21pY19pbnRfZmFzdDY0X3RhdG9taWNfdWludF9mYXN0OF90IGF0b21pY191aW50X2Zhc3QxNl90IGF0b21pY191aW50X2Zhc3QzMl90IGF0b21pY191aW50X2Zhc3Q2NF90XCIsYnVpbHRfaW46XCJzdGQgc3RyaW5nIGNpbiBjb3V0IGNlcnIgY2xvZyBzdHJpbmdzdHJlYW0gaXN0cmluZ3N0cmVhbSBvc3RyaW5nc3RyZWFtIGF1dG9fcHRyIGRlcXVlIGxpc3QgcXVldWUgc3RhY2sgdmVjdG9yIG1hcCBzZXQgYml0c2V0IG11bHRpc2V0IG11bHRpbWFwIHVub3JkZXJlZF9zZXQgdW5vcmRlcmVkX21hcCB1bm9yZGVyZWRfbXVsdGlzZXQgdW5vcmRlcmVkX211bHRpbWFwIGFycmF5IHNoYXJlZF9wdHIgYWJvcnQgYWJzIGFjb3MgYXNpbiBhdGFuMiBhdGFuIGNhbGxvYyBjZWlsIGNvc2ggY29zIGV4aXQgZXhwIGZhYnMgZmxvb3IgZm1vZCBmcHJpbnRmIGZwdXRzIGZyZWUgZnJleHAgZnNjYW5mIGlzYWxudW0gaXNhbHBoYSBpc2NudHJsIGlzZGlnaXQgaXNncmFwaCBpc2xvd2VyIGlzcHJpbnQgaXNwdW5jdCBpc3NwYWNlIGlzdXBwZXIgaXN4ZGlnaXQgdG9sb3dlciB0b3VwcGVyIGxhYnMgbGRleHAgbG9nMTAgbG9nIG1hbGxvYyBtZW1jaHIgbWVtY21wIG1lbWNweSBtZW1zZXQgbW9kZiBwb3cgcHJpbnRmIHB1dGNoYXIgcHV0cyBzY2FuZiBzaW5oIHNpbiBzbnByaW50ZiBzcHJpbnRmIHNxcnQgc3NjYW5mIHN0cmNhdCBzdHJjaHIgc3RyY21wIHN0cmNweSBzdHJjc3BuIHN0cmxlbiBzdHJuY2F0IHN0cm5jbXAgc3RybmNweSBzdHJwYnJrIHN0cnJjaHIgc3Ryc3BuIHN0cnN0ciB0YW5oIHRhbiB2ZnByaW50ZiB2cHJpbnRmIHZzcHJpbnRmXCJ9O3JldHVybnthbGlhc2VzOltcImNcIixcImhcIixcImMrK1wiLFwiaCsrXCJdLGs6aSxpOlwiPC9cIixjOlt0LkNMQ00sdC5DQkNNLHQuUVNNLHtjTjpcInN0cmluZ1wiLGI6XCInXFxcXFxcXFw/LlwiLGU6XCInXCIsaTpcIi5cIn0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiKFxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKSh1fFV8bHxMfHVsfFVMfGZ8RilcIn0sdC5DTk0se2NOOlwicHJlcHJvY2Vzc29yXCIsYjpcIiNcIixlOlwiJFwiLGs6XCJpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSBwcmFnbWFcIixjOlt7YjonaW5jbHVkZVxcXFxzKls8XCJdJyxlOidbPlwiXScsazpcImluY2x1ZGVcIixpOlwiXFxcXG5cIn0sdC5DTENNXX0se2NOOlwic3RsX2NvbnRhaW5lclwiLGI6XCJcXFxcYihkZXF1ZXxsaXN0fHF1ZXVlfHN0YWNrfHZlY3RvcnxtYXB8c2V0fGJpdHNldHxtdWx0aXNldHxtdWx0aW1hcHx1bm9yZGVyZWRfbWFwfHVub3JkZXJlZF9zZXR8dW5vcmRlcmVkX211bHRpc2V0fHVub3JkZXJlZF9tdWx0aW1hcHxhcnJheSlcXFxccyo8XCIsZTpcIj5cIixrOmksYzpbXCJzZWxmXCJdfSx7Yjp0LklSK1wiOjpcIn0se2JLOlwibmV3IHRocm93IHJldHVyblwiLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiOlwiKFwiK3QuSVIrXCJcXFxccyspK1wiK3QuSVIrXCJcXFxccypcXFxcKFwiLHJCOiEwLGU6L1t7Oz1dLyxlRTohMCxrOmksYzpbe2I6dC5JUitcIlxcXFxzKlxcXFwoXCIsckI6ITAsYzpbdC5UTV0scjowfSx7Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sazppLHI6MCxjOlt0LkNCQ01dfSx0LkNMQ00sdC5DQkNNXX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImhhc2tlbGxcIixmdW5jdGlvbihlKXt2YXIgaT17Y046XCJjb21tZW50XCIsdjpbe2I6XCItLVwiLGU6XCIkXCJ9LHtiOlwiey1cIixlOlwiLX1cIixjOltcInNlbGZcIl19XX0sYz17Y046XCJwcmFnbWFcIixiOlwiey0jXCIsZTpcIiMtfVwifSxhPXtjTjpcInByZXByb2Nlc3NvclwiLGI6XCJeI1wiLGU6XCIkXCJ9LG49e2NOOlwidHlwZVwiLGI6XCJcXFxcYltBLVpdW1xcXFx3J10qXCIscjowfSxsPXtjTjpcImNvbnRhaW5lclwiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGk6J1wiJyxjOltjLGksYSx7Y046XCJ0eXBlXCIsYjpcIlxcXFxiW0EtWl1bXFxcXHddKihcXFxcKChcXFxcLlxcXFwufCx8XFxcXHcrKVxcXFwpKT9cIn0sZS5pbmhlcml0KGUuVE0se2I6XCJbX2Etel1bXFxcXHcnXSpcIn0pXX0sdD17Y046XCJjb250YWluZXJcIixiOlwie1wiLGU6XCJ9XCIsYzpsLmN9O3JldHVybnthbGlhc2VzOltcImhzXCJdLGs6XCJsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgZG8gbW9kdWxlIGltcG9ydCBoaWRpbmcgcXVhbGlmaWVkIHR5cGUgZGF0YSBuZXd0eXBlIGRlcml2aW5nIGNsYXNzIGluc3RhbmNlIGFzIGRlZmF1bHQgaW5maXggaW5maXhsIGluZml4ciBmb3JlaWduIGV4cG9ydCBjY2FsbCBzdGRjYWxsIGNwbHVzcGx1cyBqdm0gZG90bmV0IHNhZmUgdW5zYWZlIGZhbWlseSBmb3JhbGwgbWRvIHByb2MgcmVjXCIsYzpbe2NOOlwibW9kdWxlXCIsYjpcIlxcXFxibW9kdWxlXFxcXGJcIixlOlwid2hlcmVcIixrOlwibW9kdWxlIHdoZXJlXCIsYzpbbCxpXSxpOlwiXFxcXFdcXFxcLnw7XCJ9LHtjTjpcImltcG9ydFwiLGI6XCJcXFxcYmltcG9ydFxcXFxiXCIsZTpcIiRcIixrOlwiaW1wb3J0fDAgcXVhbGlmaWVkIGFzIGhpZGluZ1wiLGM6W2wsaV0saTpcIlxcXFxXXFxcXC58O1wifSx7Y046XCJjbGFzc1wiLGI6XCJeKFxcXFxzKik/KGNsYXNzfGluc3RhbmNlKVxcXFxiXCIsZTpcIndoZXJlXCIsazpcImNsYXNzIGZhbWlseSBpbnN0YW5jZSB3aGVyZVwiLGM6W24sbCxpXX0se2NOOlwidHlwZWRlZlwiLGI6XCJcXFxcYihkYXRhfChuZXcpP3R5cGUpXFxcXGJcIixlOlwiJFwiLGs6XCJkYXRhIGZhbWlseSB0eXBlIG5ld3R5cGUgZGVyaXZpbmdcIixjOltjLGksbixsLHRdfSx7Y046XCJkZWZhdWx0XCIsYks6XCJkZWZhdWx0XCIsZTpcIiRcIixjOltuLGwsaV19LHtjTjpcImluZml4XCIsYks6XCJpbmZpeCBpbmZpeGwgaW5maXhyXCIsZTpcIiRcIixjOltlLkNOTSxpXX0se2NOOlwiZm9yZWlnblwiLGI6XCJcXFxcYmZvcmVpZ25cXFxcYlwiLGU6XCIkXCIsazpcImZvcmVpZ24gaW1wb3J0IGV4cG9ydCBjY2FsbCBzdGRjYWxsIGNwbHVzcGx1cyBqdm0gZG90bmV0IHNhZmUgdW5zYWZlXCIsYzpbbixlLlFTTSxpXX0se2NOOlwic2hlYmFuZ1wiLGI6XCIjIVxcXFwvdXNyXFxcXC9iaW5cXFxcL2VudiBydW5oYXNrZWxsXCIsZTpcIiRcIn0sYyxpLGEsZS5RU00sZS5DTk0sbixlLmluaGVyaXQoZS5UTSx7YjpcIl5bX2Etel1bXFxcXHcnXSpcIn0pLHtiOlwiLT58PC1cIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImhhbWxcIixmdW5jdGlvbigpe3JldHVybntjSTohMCxjOlt7Y046XCJkb2N0eXBlXCIsYjpcIl4hISEoICg1fDFcXFxcLjF8U3RyaWN0fEZyYW1lc2V0fEJhc2ljfE1vYmlsZXxSREZhfFhNTFxcXFxiLiopKT8kXCIscjoxMH0se2NOOlwiY29tbWVudFwiLGI6XCJeXFxcXHMqKCE9I3w9I3wtI3wvKS4qJFwiLHI6MH0se2I6XCJeXFxcXHMqKC18PXwhPSkoPyEjKVwiLHN0YXJ0czp7ZTpcIlxcXFxuXCIsc0w6XCJydWJ5XCJ9fSx7Y046XCJ0YWdcIixiOlwiXlxcXFxzKiVcIixjOlt7Y046XCJ0aXRsZVwiLGI6XCJcXFxcdytcIn0se2NOOlwidmFsdWVcIixiOlwiWyNcXFxcLl1cXFxcdytcIn0se2I6XCJ7XFxcXHMqXCIsZTpcIlxcXFxzKn1cIixlRTohMCxjOlt7YjpcIjpcXFxcdytcXFxccyo9PlwiLGU6XCIsXFxcXHMrXCIsckI6ITAsZVc6ITAsYzpbe2NOOlwic3ltYm9sXCIsYjpcIjpcXFxcdytcIn0se2NOOlwic3RyaW5nXCIsYjonXCInLGU6J1wiJ30se2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiJ1wifSx7YjpcIlxcXFx3K1wiLHI6MH1dfV19LHtiOlwiXFxcXChcXFxccypcIixlOlwiXFxcXHMqXFxcXClcIixlRTohMCxjOlt7YjpcIlxcXFx3K1xcXFxzKj1cIixlOlwiXFxcXHMrXCIsckI6ITAsZVc6ITAsYzpbe2NOOlwiYXR0cmlidXRlXCIsYjpcIlxcXFx3K1wiLHI6MH0se2NOOlwic3RyaW5nXCIsYjonXCInLGU6J1wiJ30se2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiJ1wifSx7YjpcIlxcXFx3K1wiLHI6MH1dfV19XX0se2NOOlwiYnVsbGV0XCIsYjpcIl5cXFxccypbPX5dXFxcXHMqXCIscjowfSx7YjpcIiN7XCIsc3RhcnRzOntlOlwifVwiLHNMOlwicnVieVwifX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInByb2Nlc3NpbmdcIixmdW5jdGlvbihlKXtyZXR1cm57azp7a2V5d29yZDpcIkJ1ZmZlcmVkUmVhZGVyIFBWZWN0b3IgUEZvbnQgUEltYWdlIFBHcmFwaGljcyBIYXNoTWFwIGJvb2xlYW4gYnl0ZSBjaGFyIGNvbG9yIGRvdWJsZSBmbG9hdCBpbnQgbG9uZyBTdHJpbmcgQXJyYXkgRmxvYXREaWN0IEZsb2F0TGlzdCBJbnREaWN0IEludExpc3QgSlNPTkFycmF5IEpTT05PYmplY3QgT2JqZWN0IFN0cmluZ0RpY3QgU3RyaW5nTGlzdCBUYWJsZSBUYWJsZVJvdyBYTUwgZmFsc2Ugc3luY2hyb25pemVkIGludCBhYnN0cmFjdCBmbG9hdCBwcml2YXRlIGNoYXIgYm9vbGVhbiBzdGF0aWMgbnVsbCBpZiBjb25zdCBmb3IgdHJ1ZSB3aGlsZSBsb25nIHRocm93IHN0cmljdGZwIGZpbmFsbHkgcHJvdGVjdGVkIGltcG9ydCBuYXRpdmUgZmluYWwgcmV0dXJuIHZvaWQgZW51bSBlbHNlIGJyZWFrIHRyYW5zaWVudCBuZXcgY2F0Y2ggaW5zdGFuY2VvZiBieXRlIHN1cGVyIHZvbGF0aWxlIGNhc2UgYXNzZXJ0IHNob3J0IHBhY2thZ2UgZGVmYXVsdCBkb3VibGUgcHVibGljIHRyeSB0aGlzIHN3aXRjaCBjb250aW51ZSB0aHJvd3MgcHJvdGVjdGVkIHB1YmxpYyBwcml2YXRlXCIsY29uc3RhbnQ6XCJQMkQgUDNEIEhBTEZfUEkgUEkgUVVBUlRFUl9QSSBUQVUgVFdPX1BJXCIsdmFyaWFibGU6XCJkaXNwbGF5SGVpZ2h0IGRpc3BsYXlXaWR0aCBtb3VzZVkgbW91c2VYIG1vdXNlUHJlc3NlZCBwbW91c2VYIHBtb3VzZVkga2V5IGtleUNvZGUgcGl4ZWxzIGZvY3VzZWQgZnJhbWVDb3VudCBmcmFtZVJhdGUgaGVpZ2h0IHdpZHRoXCIsdGl0bGU6XCJzZXR1cCBkcmF3XCIsYnVpbHRfaW46XCJzaXplIGNyZWF0ZUdyYXBoaWNzIGJlZ2luRHJhdyBjcmVhdGVTaGFwZSBsb2FkU2hhcGUgUFNoYXBlIGFyYyBlbGxpcHNlIGxpbmUgcG9pbnQgcXVhZCByZWN0IHRyaWFuZ2xlIGJlemllciBiZXppZXJEZXRhaWwgYmV6aWVyUG9pbnQgYmV6aWVyVGFuZ2VudCBjdXJ2ZSBjdXJ2ZURldGFpbCBjdXJ2ZVBvaW50IGN1cnZlVGFuZ2VudCBjdXJ2ZVRpZ2h0bmVzcyBzaGFwZSBzaGFwZU1vZGUgYmVnaW5Db250b3VyIGJlZ2luU2hhcGUgYmV6aWVyVmVydGV4IGN1cnZlVmVydGV4IGVuZENvbnRvdXIgZW5kU2hhcGUgcXVhZHJhdGljVmVydGV4IHZlcnRleCBlbGxpcHNlTW9kZSBub1Ntb290aCByZWN0TW9kZSBzbW9vdGggc3Ryb2tlQ2FwIHN0cm9rZUpvaW4gc3Ryb2tlV2VpZ2h0IG1vdXNlQ2xpY2tlZCBtb3VzZURyYWdnZWQgbW91c2VNb3ZlZCBtb3VzZVByZXNzZWQgbW91c2VSZWxlYXNlZCBtb3VzZVdoZWVsIGtleVByZXNzZWQga2V5UHJlc3NlZGtleVJlbGVhc2VkIGtleVR5cGVkIHByaW50IHByaW50bG4gc2F2ZSBzYXZlRnJhbWUgZGF5IGhvdXIgbWlsbGlzIG1pbnV0ZSBtb250aCBzZWNvbmQgeWVhciBiYWNrZ3JvdW5kIGNsZWFyIGNvbG9yTW9kZSBmaWxsIG5vRmlsbCBub1N0cm9rZSBzdHJva2UgYWxwaGEgYmx1ZSBicmlnaHRuZXNzIGNvbG9yIGdyZWVuIGh1ZSBsZXJwQ29sb3IgcmVkIHNhdHVyYXRpb24gbW9kZWxYIG1vZGVsWSBtb2RlbFogc2NyZWVuWCBzY3JlZW5ZIHNjcmVlblogYW1iaWVudCBlbWlzc2l2ZSBzaGluaW5lc3Mgc3BlY3VsYXIgYWRkIGNyZWF0ZUltYWdlIGJlZ2luQ2FtZXJhIGNhbWVyYSBlbmRDYW1lcmEgZnJ1c3R1bSBvcnRobyBwZXJzcGVjdGl2ZSBwcmludENhbWVyYSBwcmludFByb2plY3Rpb24gY3Vyc29yIGZyYW1lUmF0ZSBub0N1cnNvciBleGl0IGxvb3Agbm9Mb29wIHBvcFN0eWxlIHB1c2hTdHlsZSByZWRyYXcgYmluYXJ5IGJvb2xlYW4gYnl0ZSBjaGFyIGZsb2F0IGhleCBpbnQgc3RyIHVuYmluYXJ5IHVuaGV4IGpvaW4gbWF0Y2ggbWF0Y2hBbGwgbmYgbmZjIG5mcCBuZnMgc3BsaXQgc3BsaXRUb2tlbnMgdHJpbSBhcHBlbmQgYXJyYXlDb3B5IGNvbmNhdCBleHBhbmQgcmV2ZXJzZSBzaG9ydGVuIHNvcnQgc3BsaWNlIHN1YnNldCBib3ggc3BoZXJlIHNwaGVyZURldGFpbCBjcmVhdGVJbnB1dCBjcmVhdGVSZWFkZXIgbG9hZEJ5dGVzIGxvYWRKU09OQXJyYXkgbG9hZEpTT05PYmplY3QgbG9hZFN0cmluZ3MgbG9hZFRhYmxlIGxvYWRYTUwgb3BlbiBwYXJzZVhNTCBzYXZlVGFibGUgc2VsZWN0Rm9sZGVyIHNlbGVjdElucHV0IGJlZ2luUmF3IGJlZ2luUmVjb3JkIGNyZWF0ZU91dHB1dCBjcmVhdGVXcml0ZXIgZW5kUmF3IGVuZFJlY29yZCBQcmludFdyaXRlcnNhdmVCeXRlcyBzYXZlSlNPTkFycmF5IHNhdmVKU09OT2JqZWN0IHNhdmVTdHJlYW0gc2F2ZVN0cmluZ3Mgc2F2ZVhNTCBzZWxlY3RPdXRwdXQgcG9wTWF0cml4IHByaW50TWF0cml4IHB1c2hNYXRyaXggcmVzZXRNYXRyaXggcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlIHNoZWFyWCBzaGVhclkgdHJhbnNsYXRlIGFtYmllbnRMaWdodCBkaXJlY3Rpb25hbExpZ2h0IGxpZ2h0RmFsbG9mZiBsaWdodHMgbGlnaHRTcGVjdWxhciBub0xpZ2h0cyBub3JtYWwgcG9pbnRMaWdodCBzcG90TGlnaHQgaW1hZ2UgaW1hZ2VNb2RlIGxvYWRJbWFnZSBub1RpbnQgcmVxdWVzdEltYWdlIHRpbnQgdGV4dHVyZSB0ZXh0dXJlTW9kZSB0ZXh0dXJlV3JhcCBibGVuZCBjb3B5IGZpbHRlciBnZXQgbG9hZFBpeGVscyBzZXQgdXBkYXRlUGl4ZWxzIGJsZW5kTW9kZSBsb2FkU2hhZGVyIFBTaGFkZXJyZXNldFNoYWRlciBzaGFkZXIgY3JlYXRlRm9udCBsb2FkRm9udCB0ZXh0IHRleHRGb250IHRleHRBbGlnbiB0ZXh0TGVhZGluZyB0ZXh0TW9kZSB0ZXh0U2l6ZSB0ZXh0V2lkdGggdGV4dEFzY2VudCB0ZXh0RGVzY2VudCBhYnMgY2VpbCBjb25zdHJhaW4gZGlzdCBleHAgZmxvb3IgbGVycCBsb2cgbWFnIG1hcCBtYXggbWluIG5vcm0gcG93IHJvdW5kIHNxIHNxcnQgYWNvcyBhc2luIGF0YW4gYXRhbjIgY29zIGRlZ3JlZXMgcmFkaWFucyBzaW4gdGFuIG5vaXNlIG5vaXNlRGV0YWlsIG5vaXNlU2VlZCByYW5kb20gcmFuZG9tR2F1c3NpYW4gcmFuZG9tU2VlZFwifSxjOltlLkNMQ00sZS5DQkNNLGUuQVNNLGUuUVNNLGUuQ05NXX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJiYXNoXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2NOOlwidmFyaWFibGVcIix2Olt7YjovXFwkW1xcd1xcZCNAXVtcXHdcXGRfXSovfSx7YjovXFwkXFx7KC4qPylcXH0vfV19LHM9e2NOOlwic3RyaW5nXCIsYjovXCIvLGU6L1wiLyxjOltlLkJFLHQse2NOOlwidmFyaWFibGVcIixiOi9cXCRcXCgvLGU6L1xcKS8sYzpbZS5CRV19XX0sYT17Y046XCJzdHJpbmdcIixiOi8nLyxlOi8nL307cmV0dXJue2FsaWFzZXM6W1wic2hcIixcInpzaFwiXSxsOi8tP1thLXpcXC5dKy8sazp7a2V5d29yZDpcImlmIHRoZW4gZWxzZSBlbGlmIGZpIGZvciB3aGlsZSBpbiBkbyBkb25lIGNhc2UgZXNhYyBmdW5jdGlvblwiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlXCIsYnVpbHRfaW46XCJicmVhayBjZCBjb250aW51ZSBldmFsIGV4ZWMgZXhpdCBleHBvcnQgZ2V0b3B0cyBoYXNoIHB3ZCByZWFkb25seSByZXR1cm4gc2hpZnQgdGVzdCB0aW1lcyB0cmFwIHVtYXNrIHVuc2V0IGFsaWFzIGJpbmQgYnVpbHRpbiBjYWxsZXIgY29tbWFuZCBkZWNsYXJlIGVjaG8gZW5hYmxlIGhlbHAgbGV0IGxvY2FsIGxvZ291dCBtYXBmaWxlIHByaW50ZiByZWFkIHJlYWRhcnJheSBzb3VyY2UgdHlwZSB0eXBlc2V0IHVsaW1pdCB1bmFsaWFzIHNldCBzaG9wdCBhdXRvbG9hZCBiZyBiaW5ka2V5IGJ5ZSBjYXAgY2hkaXIgY2xvbmUgY29tcGFyZ3VtZW50cyBjb21wY2FsbCBjb21wY3RsIGNvbXBkZXNjcmliZSBjb21wZmlsZXMgY29tcGdyb3VwcyBjb21wcXVvdGUgY29tcHRhZ3MgY29tcHRyeSBjb21wdmFsdWVzIGRpcnMgZGlzYWJsZSBkaXNvd24gZWNob3RjIGVjaG90aSBlbXVsYXRlIGZjIGZnIGZsb2F0IGZ1bmN0aW9ucyBnZXRjYXAgZ2V0bG4gaGlzdG9yeSBpbnRlZ2VyIGpvYnMga2lsbCBsaW1pdCBsb2cgbm9nbG9iIHBvcGQgcHJpbnQgcHVzaGQgcHVzaGxuIHJlaGFzaCBzY2hlZCBzZXRjYXAgc2V0b3B0IHN0YXQgc3VzcGVuZCB0dHljdGwgdW5mdW5jdGlvbiB1bmhhc2ggdW5saW1pdCB1bnNldG9wdCB2YXJlZCB3YWl0IHdoZW5jZSB3aGVyZSB3aGljaCB6Y29tcGlsZSB6Zm9ybWF0IHpmdHAgemxlIHptb2Rsb2FkIHpwYXJzZW9wdHMgenByb2YgenB0eSB6cmVnZXhwYXJzZSB6c29ja2V0IHpzdHlsZSB6dGNwXCIsb3BlcmF0b3I6XCItbmUgLWVxIC1sdCAtZ3QgLWYgLWQgLWUgLXMgLWwgLWFcIn0sYzpbe2NOOlwic2hlYmFuZ1wiLGI6L14jIVteXFxuXStzaFxccyokLyxyOjEwfSx7Y046XCJmdW5jdGlvblwiLGI6L1xcd1tcXHdcXGRfXSpcXHMqXFwoXFxzKlxcKVxccypcXHsvLHJCOiEwLGM6W2UuaW5oZXJpdChlLlRNLHtiOi9cXHdbXFx3XFxkX10qL30pXSxyOjB9LGUuSENNLGUuTk0scyxhLHRdfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImVybGFuZy1yZXBsXCIsZnVuY3Rpb24oZSl7cmV0dXJue2s6e3NwZWNpYWxfZnVuY3Rpb25zOlwic3Bhd24gc3Bhd25fbGluayBzZWxmXCIscmVzZXJ2ZWQ6XCJhZnRlciBhbmQgYW5kYWxzb3wxMCBiYW5kIGJlZ2luIGJub3QgYm9yIGJzbCBic3IgYnhvciBjYXNlIGNhdGNoIGNvbmQgZGl2IGVuZCBmdW4gaWYgbGV0IG5vdCBvZiBvciBvcmVsc2V8MTAgcXVlcnkgcmVjZWl2ZSByZW0gdHJ5IHdoZW4geG9yXCJ9LGM6W3tjTjpcInByb21wdFwiLGI6XCJeWzAtOV0rPiBcIixyOjEwfSx7Y046XCJjb21tZW50XCIsYjpcIiVcIixlOlwiJFwifSx7Y046XCJudW1iZXJcIixiOlwiXFxcXGIoXFxcXGQrI1thLWZBLUYwLTldK3xcXFxcZCsoXFxcXC5cXFxcZCspPyhbZUVdWy0rXT9cXFxcZCspPylcIixyOjB9LGUuQVNNLGUuUVNNLHtjTjpcImNvbnN0YW50XCIsYjpcIlxcXFw/KDo6KT8oW0EtWl1cXFxcdyooOjopPykrXCJ9LHtjTjpcImFycm93XCIsYjpcIi0+XCJ9LHtjTjpcIm9rXCIsYjpcIm9rXCJ9LHtjTjpcImV4Y2xhbWF0aW9uX21hcmtcIixiOlwiIVwifSx7Y046XCJmdW5jdGlvbl9vcl9hdG9tXCIsYjpcIihcXFxcYlthLXonXVthLXpBLVowLTlfJ10qOlthLXonXVthLXpBLVowLTlfJ10qKXwoXFxcXGJbYS16J11bYS16QS1aMC05XyddKilcIixyOjB9LHtjTjpcInZhcmlhYmxlXCIsYjpcIltBLVpdW2EtekEtWjAtOV8nXSpcIixyOjB9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJzdHlsdXNcIixmdW5jdGlvbih0KXt2YXIgZT17Y046XCJ2YXJpYWJsZVwiLGI6XCJcXFxcJFwiK3QuSVJ9LG89e2NOOlwiaGV4Y29sb3JcIixiOlwiIyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSlcIixyOjEwfSxpPVtcImNoYXJzZXRcIixcImNzc1wiLFwiZGVidWdcIixcImV4dGVuZFwiLFwiZm9udC1mYWNlXCIsXCJmb3JcIixcImltcG9ydFwiLFwiaW5jbHVkZVwiLFwibWVkaWFcIixcIm1peGluXCIsXCJwYWdlXCIsXCJ3YXJuXCIsXCJ3aGlsZVwiXSxyPVtcImFmdGVyXCIsXCJiZWZvcmVcIixcImZpcnN0LWxldHRlclwiLFwiZmlyc3QtbGluZVwiLFwiYWN0aXZlXCIsXCJmaXJzdC1jaGlsZFwiLFwiZm9jdXNcIixcImhvdmVyXCIsXCJsYW5nXCIsXCJsaW5rXCIsXCJ2aXNpdGVkXCJdLG49W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJidXR0b25cIixcImNhbnZhc1wiLFwiY2FwdGlvblwiLFwiY2l0ZVwiLFwiY29kZVwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaXZcIixcImRsXCIsXCJkdFwiLFwiZW1cIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJtYXJrXCIsXCJtZW51XCIsXCJuYXZcIixcIm9iamVjdFwiLFwib2xcIixcInBcIixcInFcIixcInF1b3RlXCIsXCJzYW1wXCIsXCJzZWN0aW9uXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRyXCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiXSxhPVwiW1xcXFwuXFxcXHNcXFxcblxcXFxbXFxcXDosXVwiLGw9W1wiYWxpZ24tY29udGVudFwiLFwiYWxpZ24taXRlbXNcIixcImFsaWduLXNlbGZcIixcImFuaW1hdGlvblwiLFwiYW5pbWF0aW9uLWRlbGF5XCIsXCJhbmltYXRpb24tZGlyZWN0aW9uXCIsXCJhbmltYXRpb24tZHVyYXRpb25cIixcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIixcImFuaW1hdGlvbi1uYW1lXCIsXCJhbmltYXRpb24tcGxheS1zdGF0ZVwiLFwiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFwiYXV0b1wiLFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiLFwiYmFja2dyb3VuZFwiLFwiYmFja2dyb3VuZC1hdHRhY2htZW50XCIsXCJiYWNrZ3JvdW5kLWNsaXBcIixcImJhY2tncm91bmQtY29sb3JcIixcImJhY2tncm91bmQtaW1hZ2VcIixcImJhY2tncm91bmQtb3JpZ2luXCIsXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXCJiYWNrZ3JvdW5kLXJlcGVhdFwiLFwiYmFja2dyb3VuZC1zaXplXCIsXCJib3JkZXJcIixcImJvcmRlci1ib3R0b21cIixcImJvcmRlci1ib3R0b20tY29sb3JcIixcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIixcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCIsXCJib3JkZXItYm90dG9tLXN0eWxlXCIsXCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJib3JkZXItY29sbGFwc2VcIixcImJvcmRlci1jb2xvclwiLFwiYm9yZGVyLWltYWdlXCIsXCJib3JkZXItaW1hZ2Utb3V0c2V0XCIsXCJib3JkZXItaW1hZ2UtcmVwZWF0XCIsXCJib3JkZXItaW1hZ2Utc2xpY2VcIixcImJvcmRlci1pbWFnZS1zb3VyY2VcIixcImJvcmRlci1pbWFnZS13aWR0aFwiLFwiYm9yZGVyLWxlZnRcIixcImJvcmRlci1sZWZ0LWNvbG9yXCIsXCJib3JkZXItbGVmdC1zdHlsZVwiLFwiYm9yZGVyLWxlZnQtd2lkdGhcIixcImJvcmRlci1yYWRpdXNcIixcImJvcmRlci1yaWdodFwiLFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXCJib3JkZXItcmlnaHQtc3R5bGVcIixcImJvcmRlci1yaWdodC13aWR0aFwiLFwiYm9yZGVyLXNwYWNpbmdcIixcImJvcmRlci1zdHlsZVwiLFwiYm9yZGVyLXRvcFwiLFwiYm9yZGVyLXRvcC1jb2xvclwiLFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIixcImJvcmRlci10b3Atc3R5bGVcIixcImJvcmRlci10b3Atd2lkdGhcIixcImJvcmRlci13aWR0aFwiLFwiYm90dG9tXCIsXCJib3gtZGVjb3JhdGlvbi1icmVha1wiLFwiYm94LXNoYWRvd1wiLFwiYm94LXNpemluZ1wiLFwiYnJlYWstYWZ0ZXJcIixcImJyZWFrLWJlZm9yZVwiLFwiYnJlYWstaW5zaWRlXCIsXCJjYXB0aW9uLXNpZGVcIixcImNsZWFyXCIsXCJjbGlwXCIsXCJjbGlwLXBhdGhcIixcImNvbG9yXCIsXCJjb2x1bW4tY291bnRcIixcImNvbHVtbi1maWxsXCIsXCJjb2x1bW4tZ2FwXCIsXCJjb2x1bW4tcnVsZVwiLFwiY29sdW1uLXJ1bGUtY29sb3JcIixcImNvbHVtbi1ydWxlLXN0eWxlXCIsXCJjb2x1bW4tcnVsZS13aWR0aFwiLFwiY29sdW1uLXNwYW5cIixcImNvbHVtbi13aWR0aFwiLFwiY29sdW1uc1wiLFwiY29udGVudFwiLFwiY291bnRlci1pbmNyZW1lbnRcIixcImNvdW50ZXItcmVzZXRcIixcImN1cnNvclwiLFwiZGlyZWN0aW9uXCIsXCJkaXNwbGF5XCIsXCJlbXB0eS1jZWxsc1wiLFwiZmlsdGVyXCIsXCJmbGV4XCIsXCJmbGV4LWJhc2lzXCIsXCJmbGV4LWRpcmVjdGlvblwiLFwiZmxleC1mbG93XCIsXCJmbGV4LWdyb3dcIixcImZsZXgtc2hyaW5rXCIsXCJmbGV4LXdyYXBcIixcImZsb2F0XCIsXCJmb250XCIsXCJmb250LWZhbWlseVwiLFwiZm9udC1mZWF0dXJlLXNldHRpbmdzXCIsXCJmb250LWtlcm5pbmdcIixcImZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGVcIixcImZvbnQtc2l6ZVwiLFwiZm9udC1zaXplLWFkanVzdFwiLFwiZm9udC1zdHJldGNoXCIsXCJmb250LXN0eWxlXCIsXCJmb250LXZhcmlhbnRcIixcImZvbnQtdmFyaWFudC1saWdhdHVyZXNcIixcImZvbnQtd2VpZ2h0XCIsXCJoZWlnaHRcIixcImh5cGhlbnNcIixcImljb25cIixcImltYWdlLW9yaWVudGF0aW9uXCIsXCJpbWFnZS1yZW5kZXJpbmdcIixcImltYWdlLXJlc29sdXRpb25cIixcImltZS1tb2RlXCIsXCJpbmhlcml0XCIsXCJpbml0aWFsXCIsXCJqdXN0aWZ5LWNvbnRlbnRcIixcImxlZnRcIixcImxldHRlci1zcGFjaW5nXCIsXCJsaW5lLWhlaWdodFwiLFwibGlzdC1zdHlsZVwiLFwibGlzdC1zdHlsZS1pbWFnZVwiLFwibGlzdC1zdHlsZS1wb3NpdGlvblwiLFwibGlzdC1zdHlsZS10eXBlXCIsXCJtYXJnaW5cIixcIm1hcmdpbi1ib3R0b21cIixcIm1hcmdpbi1sZWZ0XCIsXCJtYXJnaW4tcmlnaHRcIixcIm1hcmdpbi10b3BcIixcIm1hcmtzXCIsXCJtYXNrXCIsXCJtYXgtaGVpZ2h0XCIsXCJtYXgtd2lkdGhcIixcIm1pbi1oZWlnaHRcIixcIm1pbi13aWR0aFwiLFwibmF2LWRvd25cIixcIm5hdi1pbmRleFwiLFwibmF2LWxlZnRcIixcIm5hdi1yaWdodFwiLFwibmF2LXVwXCIsXCJub25lXCIsXCJub3JtYWxcIixcIm9iamVjdC1maXRcIixcIm9iamVjdC1wb3NpdGlvblwiLFwib3BhY2l0eVwiLFwib3JkZXJcIixcIm9ycGhhbnNcIixcIm91dGxpbmVcIixcIm91dGxpbmUtY29sb3JcIixcIm91dGxpbmUtb2Zmc2V0XCIsXCJvdXRsaW5lLXN0eWxlXCIsXCJvdXRsaW5lLXdpZHRoXCIsXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3ctd3JhcFwiLFwib3ZlcmZsb3cteFwiLFwib3ZlcmZsb3cteVwiLFwicGFkZGluZ1wiLFwicGFkZGluZy1ib3R0b21cIixcInBhZGRpbmctbGVmdFwiLFwicGFkZGluZy1yaWdodFwiLFwicGFkZGluZy10b3BcIixcInBhZ2UtYnJlYWstYWZ0ZXJcIixcInBhZ2UtYnJlYWstYmVmb3JlXCIsXCJwYWdlLWJyZWFrLWluc2lkZVwiLFwicGVyc3BlY3RpdmVcIixcInBlcnNwZWN0aXZlLW9yaWdpblwiLFwicG9pbnRlci1ldmVudHNcIixcInBvc2l0aW9uXCIsXCJxdW90ZXNcIixcInJlc2l6ZVwiLFwicmlnaHRcIixcInRhYi1zaXplXCIsXCJ0YWJsZS1sYXlvdXRcIixcInRleHQtYWxpZ25cIixcInRleHQtYWxpZ24tbGFzdFwiLFwidGV4dC1kZWNvcmF0aW9uXCIsXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcInRleHQtZGVjb3JhdGlvbi1saW5lXCIsXCJ0ZXh0LWRlY29yYXRpb24tc3R5bGVcIixcInRleHQtaW5kZW50XCIsXCJ0ZXh0LW92ZXJmbG93XCIsXCJ0ZXh0LXJlbmRlcmluZ1wiLFwidGV4dC1zaGFkb3dcIixcInRleHQtdHJhbnNmb3JtXCIsXCJ0ZXh0LXVuZGVybGluZS1wb3NpdGlvblwiLFwidG9wXCIsXCJ0cmFuc2Zvcm1cIixcInRyYW5zZm9ybS1vcmlnaW5cIixcInRyYW5zZm9ybS1zdHlsZVwiLFwidHJhbnNpdGlvblwiLFwidHJhbnNpdGlvbi1kZWxheVwiLFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiLFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIixcInVuaWNvZGUtYmlkaVwiLFwidmVydGljYWwtYWxpZ25cIixcInZpc2liaWxpdHlcIixcIndoaXRlLXNwYWNlXCIsXCJ3aWRvd3NcIixcIndpZHRoXCIsXCJ3b3JkLWJyZWFrXCIsXCJ3b3JkLXNwYWNpbmdcIixcIndvcmQtd3JhcFwiLFwiei1pbmRleFwiXSxkPVtcIlxcXFx7XCIsXCJcXFxcfVwiLFwiXFxcXD9cIixcIihcXFxcYlJldHVyblxcXFxiKVwiLFwiKFxcXFxiRW5kXFxcXGIpXCIsXCIoXFxcXGJlbmRcXFxcYilcIixcIjtcIixcIiNcXFxcc1wiLFwiXFxcXCpcXFxcc1wiLFwiPT09XFxcXHNcIixcIlxcXFx8XCJdO3JldHVybnthbGlhc2VzOltcInN0eWxcIl0sY0k6ITEsaTpcIihcIitkLmpvaW4oXCJ8XCIpK1wiKVwiLGs6XCJpZiBlbHNlIGZvciBpblwiLGM6W3QuUVNNLHQuQVNNLHQuQ0xDTSx0LkNCQ00sbyx7YjpcIlxcXFwuW2EtekEtWl1bYS16QS1aMC05Xy1dKlwiK2EsckI6ITAsYzpbe2NOOlwiY2xhc3NcIixiOlwiXFxcXC5bYS16QS1aXVthLXpBLVowLTlfLV0qXCJ9XX0se2I6XCJcXFxcI1thLXpBLVpdW2EtekEtWjAtOV8tXSpcIithLHJCOiEwLGM6W3tjTjpcImlkXCIsYjpcIlxcXFwjW2EtekEtWl1bYS16QS1aMC05Xy1dKlwifV19LHtiOlwiXFxcXGIoXCIrbi5qb2luKFwifFwiKStcIilcIithLHJCOiEwLGM6W3tjTjpcInRhZ1wiLGI6XCJcXFxcYlthLXpBLVpdW2EtekEtWjAtOV8tXSpcIn1dfSx7Y046XCJwc2V1ZG9cIixiOlwiJj86PzpcXFxcYihcIityLmpvaW4oXCJ8XCIpK1wiKVwiK2F9LHtjTjpcImF0X3J1bGVcIixiOlwiQChcIitpLmpvaW4oXCJ8XCIpK1wiKVxcXFxiXCJ9LGUsdC5DU1NOTSx0Lk5NLHtjTjpcImZ1bmN0aW9uXCIsYjpcIlxcXFxiW2EtekEtWl1bYS16QS1aMC05Xy1dKlxcXFwoLipcXFxcKVwiLGk6XCJbXFxcXG5dXCIsckI6ITAsYzpbe2NOOlwidGl0bGVcIixiOlwiXFxcXGJbYS16QS1aXVthLXpBLVowLTlfLV0qXCJ9LHtjTjpcInBhcmFtc1wiLGI6L1xcKC8sZTovXFwpLyxjOltvLGUsdC5BU00sdC5DU1NOTSx0Lk5NLHQuUVNNXX1dfSx7Y046XCJhdHRyaWJ1dGVcIixiOlwiXFxcXGIoXCIrbC5yZXZlcnNlKCkuam9pbihcInxcIikrXCIpXFxcXGJcIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImxlc3NcIixmdW5jdGlvbihlKXt2YXIgcj1cIltcXFxcdy1dK1wiLHQ9XCIoXCIrcitcInxAe1wiK3IrXCJ9KStcIixhPVtdLGM9W10sbj1mdW5jdGlvbihlKXtyZXR1cm57Y046XCJzdHJpbmdcIixiOlwifj9cIitlK1wiLio/XCIrZX19LGk9ZnVuY3Rpb24oZSxyLHQpe3JldHVybntjTjplLGI6cixyOnR9fSxzPWZ1bmN0aW9uKHIsdCxhKXtyZXR1cm4gZS5pbmhlcml0KHtjTjpyLGI6dCtcIlxcXFwoXCIsZTpcIlxcXFwoXCIsckI6ITAsZUU6ITAscjowfSxhKX0sYj17YjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzpjLHI6MH07Yy5wdXNoKGUuQ0xDTSxlLkNCQ00sbihcIidcIiksbignXCInKSxlLkNTU05NLGkoXCJoZXhjb2xvclwiLFwiI1swLTlBLUZhLWZdK1xcXFxiXCIpLHMoXCJmdW5jdGlvblwiLFwiKHVybHxkYXRhLXVyaSlcIix7c3RhcnRzOntjTjpcInN0cmluZ1wiLGU6XCJbXFxcXClcXFxcbl1cIixlRTohMH19KSxzKFwiZnVuY3Rpb25cIixyKSxiLGkoXCJ2YXJpYWJsZVwiLFwiQEA/XCIrciwxMCksaShcInZhcmlhYmxlXCIsXCJAe1wiK3IrXCJ9XCIpLGkoXCJidWlsdF9pblwiLFwifj9gW15gXSo/YFwiKSx7Y046XCJhdHRyaWJ1dGVcIixiOnIrXCJcXFxccyo6XCIsZTpcIjpcIixyQjohMCxlRTohMH0pO3ZhciBvPWMuY29uY2F0KHtiOlwie1wiLGU6XCJ9XCIsYzphfSksdT17Yks6XCJ3aGVuXCIsZVc6ITAsYzpbe2JLOlwiYW5kIG5vdFwifV0uY29uY2F0KGMpfSxDPXtjTjpcImF0dHJpYnV0ZVwiLGI6dCxlOlwiOlwiLGVFOiEwLGM6W2UuQ0xDTSxlLkNCQ01dLGk6L1xcUy8sc3RhcnRzOntlOlwiWzt9XVwiLHJFOiEwLGM6YyxpOlwiWzw9JF1cIn19LGw9e2NOOlwiYXRfcnVsZVwiLGI6XCJAKGltcG9ydHxtZWRpYXxjaGFyc2V0fGZvbnQtZmFjZXwoLVthLXpdKy0pP2tleWZyYW1lc3xzdXBwb3J0c3xkb2N1bWVudHxuYW1lc3BhY2V8cGFnZXx2aWV3cG9ydHxob3N0KVxcXFxiXCIsc3RhcnRzOntlOlwiWzt7fV1cIixyRTohMCxjOmMscjowfX0sZD17Y046XCJ2YXJpYWJsZVwiLHY6W3tiOlwiQFwiK3IrXCJcXFxccyo6XCIscjoxNX0se2I6XCJAXCIrcn1dLHN0YXJ0czp7ZTpcIls7fV1cIixyRTohMCxjOm99fSxwPXt2Olt7YjpcIltcXFxcLiM6JlxcXFxbXVwiLGU6XCJbO3t9XVwifSx7Yjp0K1wiW147XSp7XCIsZTpcIntcIn1dLHJCOiEwLHJFOiEwLGk6XCJbPD0nJFxcXCJdXCIsYzpbZS5DTENNLGUuQ0JDTSx1LGkoXCJrZXl3b3JkXCIsXCJhbGxcXFxcYlwiKSxpKFwidmFyaWFibGVcIixcIkB7XCIrcitcIn1cIiksaShcInRhZ1wiLHQrXCIlP1wiLDApLGkoXCJpZFwiLFwiI1wiK3QpLGkoXCJjbGFzc1wiLFwiXFxcXC5cIit0LDApLGkoXCJrZXl3b3JkXCIsXCImXCIsMCkscyhcInBzZXVkb1wiLFwiOm5vdFwiKSxzKFwia2V5d29yZFwiLFwiOmV4dGVuZFwiKSxpKFwicHNldWRvXCIsXCI6Oj9cIit0KSx7Y046XCJhdHRyX3NlbGVjdG9yXCIsYjpcIlxcXFxbXCIsZTpcIlxcXFxdXCJ9LHtiOlwiXFxcXChcIixlOlwiXFxcXClcIixjOm99LHtiOlwiIWltcG9ydGFudFwifV19O3JldHVybiBhLnB1c2goZS5DTENNLGUuQ0JDTSxsLGQscCxDKSx7Y0k6ITAsaTpcIls9PicvPCgkXFxcIl1cIixjOmF9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwic2NhbGFcIixmdW5jdGlvbihlKXt2YXIgdD17Y046XCJhbm5vdGF0aW9uXCIsYjpcIkBbQS1aYS16XStcIn0sYT17Y046XCJzdHJpbmdcIixiOid1P3I/XCJcIlwiJyxlOidcIlwiXCInLHI6MTB9LHI9e2NOOlwic3ltYm9sXCIsYjpcIidcXFxcd1tcXFxcd1xcXFxkX10qKD8hJylcIn0sYz17Y046XCJ0eXBlXCIsYjpcIlxcXFxiW0EtWl1bQS1aYS16MC05X10qXCIscjowfSxpPXtjTjpcInRpdGxlXCIsYjovW14wLTlcXG5cXHQgXCInKCksLmB7fVxcW1xcXTo7XVteXFxuXFx0IFwiJygpLC5ge31cXFtcXF06O10rfFteMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06Oz1dLyxyOjB9LGw9e2NOOlwiY2xhc3NcIixiSzpcImNsYXNzIG9iamVjdCB0cmFpdCB0eXBlXCIsZTovWzo9e1xcWyhcXG47XS8sYzpbe2NOOlwia2V5d29yZFwiLGJLOlwiZXh0ZW5kcyB3aXRoXCIscjoxMH0saV19LG49e2NOOlwiZnVuY3Rpb25cIixiSzpcImRlZiB2YWxcIixlOi9bOj17XFxbKFxcbjtdLyxjOltpXX07cmV0dXJue2s6e2xpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGxcIixrZXl3b3JkOlwidHlwZSB5aWVsZCBsYXp5IG92ZXJyaWRlIGRlZiB3aXRoIHZhbCB2YXIgc2VhbGVkIGFic3RyYWN0IHByaXZhdGUgdHJhaXQgb2JqZWN0IGlmIGZvclNvbWUgZm9yIHdoaWxlIHRocm93IGZpbmFsbHkgcHJvdGVjdGVkIGV4dGVuZHMgaW1wb3J0IGZpbmFsIHJldHVybiBlbHNlIGJyZWFrIG5ldyBjYXRjaCBzdXBlciBjbGFzcyBjYXNlIHBhY2thZ2UgZGVmYXVsdCB0cnkgdGhpcyBtYXRjaCBjb250aW51ZSB0aHJvd3MgaW1wbGljaXRcIn0sYzpbZS5DTENNLGUuQ0JDTSxhLGUuUVNNLHIsYyxuLGwsZS5DTk0sdF19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiamF2YVwiLGZ1bmN0aW9uKGUpe3ZhciBhPWUuVUlSK1wiKDxcIitlLlVJUitcIj4pP1wiLHQ9XCJmYWxzZSBzeW5jaHJvbml6ZWQgaW50IGFic3RyYWN0IGZsb2F0IHByaXZhdGUgY2hhciBib29sZWFuIHN0YXRpYyBudWxsIGlmIGNvbnN0IGZvciB0cnVlIHdoaWxlIGxvbmcgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCB2b2lkIGVudW0gZWxzZSBicmVhayB0cmFuc2llbnQgY2F0Y2ggaW5zdGFuY2VvZiBieXRlIHN1cGVyIHZvbGF0aWxlIGNhc2UgYXNzZXJ0IHNob3J0IHBhY2thZ2UgZGVmYXVsdCBkb3VibGUgcHVibGljIHRyeSB0aGlzIHN3aXRjaCBjb250aW51ZSB0aHJvd3MgcHJvdGVjdGVkIHB1YmxpYyBwcml2YXRlXCIsYz1cIihcXFxcYigwYlswMV9dKyl8XFxcXGIwW3hYXVthLWZBLUYwLTlfXSt8KFxcXFxiW1xcXFxkX10rKFxcXFwuW1xcXFxkX10qKT98XFxcXC5bXFxcXGRfXSspKFtlRV1bLStdP1xcXFxkKyk/KVtsTGZGXT9cIixyPXtjTjpcIm51bWJlclwiLGI6YyxyOjB9O3JldHVybnthbGlhc2VzOltcImpzcFwiXSxrOnQsaTovPFxcLy8sYzpbe2NOOlwiamF2YWRvY1wiLGI6XCIvXFxcXCpcXFxcKlwiLGU6XCJcXFxcKi9cIixyOjAsYzpbe2NOOlwiamF2YWRvY3RhZ1wiLGI6XCIoXnxcXFxccylAW0EtWmEtel0rXCJ9XX0sZS5DTENNLGUuQ0JDTSxlLkFTTSxlLlFTTSx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3MgaW50ZXJmYWNlXCIsZTovW3s7PV0vLGVFOiEwLGs6XCJjbGFzcyBpbnRlcmZhY2VcIixpOi9bOlwiXFxbXFxdXS8sYzpbe2JLOlwiZXh0ZW5kcyBpbXBsZW1lbnRzXCJ9LGUuVVRNXX0se2JLOlwibmV3IHRocm93IHJldHVyblwiLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiOlwiKFwiK2ErXCJcXFxccyspK1wiK2UuVUlSK1wiXFxcXHMqXFxcXChcIixyQjohMCxlOi9bezs9XS8sZUU6ITAsazp0LGM6W3tiOmUuVUlSK1wiXFxcXHMqXFxcXChcIixyQjohMCxyOjAsYzpbZS5VVE1dfSx7Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sazp0LHI6MCxjOltlLkFTTSxlLlFTTSxlLkNOTSxlLkNCQ01dfSxlLkNMQ00sZS5DQkNNXX0scix7Y046XCJhbm5vdGF0aW9uXCIsYjpcIkBbQS1aYS16XStcIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm9iamVjdGl2ZWNcIixmdW5jdGlvbihlKXt2YXIgdD17a2V5d29yZDpcImludCBmbG9hdCB3aGlsZSBjaGFyIGV4cG9ydCBzaXplb2YgdHlwZWRlZiBjb25zdCBzdHJ1Y3QgZm9yIHVuaW9uIHVuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIGJvb2wgbXV0YWJsZSBpZiBkbyByZXR1cm4gZ290byB2b2lkIGVudW0gZWxzZSBicmVhayBleHRlcm4gYXNtIGNhc2Ugc2hvcnQgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRoaXMgc3dpdGNoIGNvbnRpbnVlIHdjaGFyX3QgaW5saW5lIHJlYWRvbmx5IGFzc2lnbiByZWFkd3JpdGUgc2VsZiBAc3luY2hyb25pemVkIGlkIHR5cGVvZiBub25hdG9taWMgc3VwZXIgdW5pY2hhciBJQk91dGxldCBJQkFjdGlvbiBzdHJvbmcgd2VhayBjb3B5IGluIG91dCBpbm91dCBieWNvcHkgYnlyZWYgb25ld2F5IF9fc3Ryb25nIF9fd2VhayBfX2Jsb2NrIF9fYXV0b3JlbGVhc2luZyBAcHJpdmF0ZSBAcHJvdGVjdGVkIEBwdWJsaWMgQHRyeSBAcHJvcGVydHkgQGVuZCBAdGhyb3cgQGNhdGNoIEBmaW5hbGx5IEBhdXRvcmVsZWFzZXBvb2wgQHN5bnRoZXNpemUgQGR5bmFtaWMgQHNlbGVjdG9yIEBvcHRpb25hbCBAcmVxdWlyZWRcIixsaXRlcmFsOlwiZmFsc2UgdHJ1ZSBGQUxTRSBUUlVFIG5pbCBZRVMgTk8gTlVMTFwiLGJ1aWx0X2luOlwiTlNTdHJpbmcgTlNEYXRhIE5TRGljdGlvbmFyeSBDR1JlY3QgQ0dQb2ludCBVSUJ1dHRvbiBVSUxhYmVsIFVJVGV4dFZpZXcgVUlXZWJWaWV3IE1LTWFwVmlldyBOU1ZpZXcgTlNWaWV3Q29udHJvbGxlciBOU1dpbmRvdyBOU1dpbmRvd0NvbnRyb2xsZXIgTlNTZXQgTlNVVUlEIE5TSW5kZXhTZXQgVUlTZWdtZW50ZWRDb250cm9sIE5TT2JqZWN0IFVJVGFibGVWaWV3RGVsZWdhdGUgVUlUYWJsZVZpZXdEYXRhU291cmNlIE5TVGhyZWFkIFVJQWN0aXZpdHlJbmRpY2F0b3IgVUlUYWJiYXIgVUlUb29sQmFyIFVJQmFyQnV0dG9uSXRlbSBVSUltYWdlVmlldyBOU0F1dG9yZWxlYXNlUG9vbCBVSVRhYmxlVmlldyBCT09MIE5TSW50ZWdlciBDR0Zsb2F0IE5TRXhjZXB0aW9uIE5TTG9nIE5TTXV0YWJsZVN0cmluZyBOU011dGFibGVBcnJheSBOU011dGFibGVEaWN0aW9uYXJ5IE5TVVJMIE5TSW5kZXhQYXRoIENHU2l6ZSBVSVRhYmxlVmlld0NlbGwgVUlWaWV3IFVJVmlld0NvbnRyb2xsZXIgVUlOYXZpZ2F0aW9uQmFyIFVJTmF2aWdhdGlvbkNvbnRyb2xsZXIgVUlUYWJCYXJDb250cm9sbGVyIFVJUG9wb3ZlckNvbnRyb2xsZXIgVUlQb3BvdmVyQ29udHJvbGxlckRlbGVnYXRlIFVJSW1hZ2UgTlNOdW1iZXIgVUlTZWFyY2hCYXIgTlNGZXRjaGVkUmVzdWx0c0NvbnRyb2xsZXIgTlNGZXRjaGVkUmVzdWx0c0NoYW5nZVR5cGUgVUlTY3JvbGxWaWV3IFVJU2Nyb2xsVmlld0RlbGVnYXRlIFVJRWRnZUluc2V0cyBVSUNvbG9yIFVJRm9udCBVSUFwcGxpY2F0aW9uIE5TTm90Rm91bmQgTlNOb3RpZmljYXRpb25DZW50ZXIgTlNOb3RpZmljYXRpb24gVUlMb2NhbE5vdGlmaWNhdGlvbiBOU0J1bmRsZSBOU0ZpbGVNYW5hZ2VyIE5TVGltZUludGVydmFsIE5TRGF0ZSBOU0NhbGVuZGFyIE5TVXNlckRlZmF1bHRzIFVJV2luZG93IE5TUmFuZ2UgTlNBcnJheSBOU0Vycm9yIE5TVVJMUmVxdWVzdCBOU1VSTENvbm5lY3Rpb24gTlNVUkxTZXNzaW9uIE5TVVJMU2Vzc2lvbkRhdGFUYXNrIE5TVVJMU2Vzc2lvbkRvd25sb2FkVGFzayBOU1VSTFNlc3Npb25VcGxvYWRUYXNrIE5TVVJMUmVzcG9uc2VVSUludGVyZmFjZU9yaWVudGF0aW9uIE1QTW92aWVQbGF5ZXJDb250cm9sbGVyIGRpc3BhdGNoX29uY2VfdCBkaXNwYXRjaF9xdWV1ZV90IGRpc3BhdGNoX3N5bmMgZGlzcGF0Y2hfYXN5bmMgZGlzcGF0Y2hfb25jZVwifSxvPS9bYS16QS1aQF1bYS16QS1aMC05X10qLyxhPVwiQGludGVyZmFjZSBAY2xhc3MgQHByb3RvY29sIEBpbXBsZW1lbnRhdGlvblwiO3JldHVybnthbGlhc2VzOltcIm1cIixcIm1tXCIsXCJvYmpjXCIsXCJvYmotY1wiXSxrOnQsbDpvLGk6XCI8L1wiLGM6W2UuQ0xDTSxlLkNCQ00sZS5DTk0sZS5RU00se2NOOlwic3RyaW5nXCIsdjpbe2I6J0BcIicsZTonXCInLGk6XCJcXFxcblwiLGM6W2UuQkVdfSx7YjpcIidcIixlOlwiW15cXFxcXFxcXF0nXCIsaTpcIlteXFxcXFxcXFxdW14nXVwifV19LHtjTjpcInByZXByb2Nlc3NvclwiLGI6XCIjXCIsZTpcIiRcIixjOlt7Y046XCJ0aXRsZVwiLHY6W3tiOidcIicsZTonXCInfSx7YjpcIjxcIixlOlwiPlwifV19XX0se2NOOlwiY2xhc3NcIixiOlwiKFwiK2Euc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKVxcXFxiXCIsZTpcIih7fCQpXCIsZUU6ITAsazphLGw6byxjOltlLlVUTV19LHtjTjpcInZhcmlhYmxlXCIsYjpcIlxcXFwuXCIrZS5VSVIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiaGFuZGxlYmFyc1wiLGZ1bmN0aW9uKCl7dmFyIGU9XCJlYWNoIGluIHdpdGggaWYgZWxzZSB1bmxlc3MgYmluZGF0dHIgYWN0aW9uIGNvbGxlY3Rpb24gZGVidWdnZXIgbG9nIG91dGxldCB0ZW1wbGF0ZSB1bmJvdW5kIHZpZXcgeWllbGRcIjtyZXR1cm57YWxpYXNlczpbXCJoYnNcIixcImh0bWwuaGJzXCIsXCJodG1sLmhhbmRsZWJhcnNcIl0sY0k6ITAsc0w6XCJ4bWxcIixzdWJMYW5ndWFnZU1vZGU6XCJjb250aW51b3VzXCIsYzpbe2NOOlwiZXhwcmVzc2lvblwiLGI6XCJ7e1wiLGU6XCJ9fVwiLGM6W3tjTjpcImJlZ2luLWJsb2NrXCIsYjpcIiNbYS16QS1aLSAuXStcIixrOmV9LHtjTjpcInN0cmluZ1wiLGI6J1wiJyxlOidcIid9LHtjTjpcImVuZC1ibG9ja1wiLGI6XCJcXFxcL1thLXpBLVotIC5dK1wiLGs6ZX0se2NOOlwidmFyaWFibGVcIixiOlwiW2EtekEtWi0uXStcIixrOmV9XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInBocFwiLGZ1bmN0aW9uKGUpe3ZhciBjPXtjTjpcInZhcmlhYmxlXCIsYjpcIlxcXFwkK1thLXpBLVpffy3Dv11bYS16QS1aMC05X38tw79dKlwifSxpPXtjTjpcInByZXByb2Nlc3NvclwiLGI6LzxcXD8ocGhwKT98XFw/Pi99LGE9e2NOOlwic3RyaW5nXCIsYzpbZS5CRSxpXSx2Olt7YjonYlwiJyxlOidcIid9LHtiOlwiYidcIixlOlwiJ1wifSxlLmluaGVyaXQoZS5BU00se2k6bnVsbH0pLGUuaW5oZXJpdChlLlFTTSx7aTpudWxsfSldfSxuPXt2OltlLkJOTSxlLkNOTV19O3JldHVybnthbGlhc2VzOltcInBocDNcIixcInBocDRcIixcInBocDVcIixcInBocDZcIl0sY0k6ITAsazpcImFuZCBpbmNsdWRlX29uY2UgbGlzdCBhYnN0cmFjdCBnbG9iYWwgcHJpdmF0ZSBlY2hvIGludGVyZmFjZSBhcyBzdGF0aWMgZW5kc3dpdGNoIGFycmF5IG51bGwgaWYgZW5kd2hpbGUgb3IgY29uc3QgZm9yIGVuZGZvcmVhY2ggc2VsZiB2YXIgd2hpbGUgaXNzZXQgcHVibGljIHByb3RlY3RlZCBleGl0IGZvcmVhY2ggdGhyb3cgZWxzZWlmIGluY2x1ZGUgX19GSUxFX18gZW1wdHkgcmVxdWlyZV9vbmNlIGRvIHhvciByZXR1cm4gcGFyZW50IGNsb25lIHVzZSBfX0NMQVNTX18gX19MSU5FX18gZWxzZSBicmVhayBwcmludCBldmFsIG5ldyBjYXRjaCBfX01FVEhPRF9fIGNhc2UgZXhjZXB0aW9uIGRlZmF1bHQgZGllIHJlcXVpcmUgX19GVU5DVElPTl9fIGVuZGRlY2xhcmUgZmluYWwgdHJ5IHN3aXRjaCBjb250aW51ZSBlbmRmb3IgZW5kaWYgZGVjbGFyZSB1bnNldCB0cnVlIGZhbHNlIHRyYWl0IGdvdG8gaW5zdGFuY2VvZiBpbnN0ZWFkb2YgX19ESVJfXyBfX05BTUVTUEFDRV9fIHlpZWxkIGZpbmFsbHlcIixjOltlLkNMQ00sZS5IQ00se2NOOlwiY29tbWVudFwiLGI6XCIvXFxcXCpcIixlOlwiXFxcXCovXCIsYzpbe2NOOlwicGhwZG9jXCIsYjpcIlxcXFxzQFtBLVphLXpdK1wifSxpXX0se2NOOlwiY29tbWVudFwiLGI6XCJfX2hhbHRfY29tcGlsZXIuKz87XCIsZVc6ITAsazpcIl9faGFsdF9jb21waWxlclwiLGw6ZS5VSVJ9LHtjTjpcInN0cmluZ1wiLGI6XCI8PDxbJ1xcXCJdP1xcXFx3K1snXFxcIl0/JFwiLGU6XCJeXFxcXHcrO1wiLGM6W2UuQkVdfSxpLGMse2I6Ly0+K1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qL30se2NOOlwiZnVuY3Rpb25cIixiSzpcImZ1bmN0aW9uXCIsZTovWzt7XS8sZUU6ITAsaTpcIlxcXFwkfFxcXFxbfCVcIixjOltlLlVUTSx7Y046XCJwYXJhbXNcIixiOlwiXFxcXChcIixlOlwiXFxcXClcIixjOltcInNlbGZcIixjLGUuQ0JDTSxhLG5dfV19LHtjTjpcImNsYXNzXCIsYks6XCJjbGFzcyBpbnRlcmZhY2VcIixlOlwie1wiLGVFOiEwLGk6L1s6XFwoXFwkXCJdLyxjOlt7Yks6XCJleHRlbmRzIGltcGxlbWVudHNcIn0sZS5VVE1dfSx7Yks6XCJuYW1lc3BhY2VcIixlOlwiO1wiLGk6L1tcXC4nXS8sYzpbZS5VVE1dfSx7Yks6XCJ1c2VcIixlOlwiO1wiLGM6W2UuVVRNXX0se2I6XCI9PlwifSxhLG5dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm1hdGxhYlwiLGZ1bmN0aW9uKGUpe3ZhciBhPVtlLkNOTSx7Y046XCJzdHJpbmdcIixiOlwiJ1wiLGU6XCInXCIsYzpbZS5CRSx7YjpcIicnXCJ9XX1dLHM9e3I6MCxjOlt7Y046XCJvcGVyYXRvclwiLGI6LydbJ1xcLl0qL31dfTtyZXR1cm57azp7a2V5d29yZDpcImJyZWFrIGNhc2UgY2F0Y2ggY2xhc3NkZWYgY29udGludWUgZWxzZSBlbHNlaWYgZW5kIGVudW1lcmF0ZWQgZXZlbnRzIGZvciBmdW5jdGlvbiBnbG9iYWwgaWYgbWV0aG9kcyBvdGhlcndpc2UgcGFyZm9yIHBlcnNpc3RlbnQgcHJvcGVydGllcyByZXR1cm4gc3BtZCBzd2l0Y2ggdHJ5IHdoaWxlXCIsYnVpbHRfaW46XCJzaW4gc2luZCBzaW5oIGFzaW4gYXNpbmQgYXNpbmggY29zIGNvc2QgY29zaCBhY29zIGFjb3NkIGFjb3NoIHRhbiB0YW5kIHRhbmggYXRhbiBhdGFuZCBhdGFuMiBhdGFuaCBzZWMgc2VjZCBzZWNoIGFzZWMgYXNlY2QgYXNlY2ggY3NjIGNzY2QgY3NjaCBhY3NjIGFjc2NkIGFjc2NoIGNvdCBjb3RkIGNvdGggYWNvdCBhY290ZCBhY290aCBoeXBvdCBleHAgZXhwbTEgbG9nIGxvZzFwIGxvZzEwIGxvZzIgcG93MiByZWFscG93IHJlYWxsb2cgcmVhbHNxcnQgc3FydCBudGhyb290IG5leHRwb3cyIGFicyBhbmdsZSBjb21wbGV4IGNvbmogaW1hZyByZWFsIHVud3JhcCBpc3JlYWwgY3BseHBhaXIgZml4IGZsb29yIGNlaWwgcm91bmQgbW9kIHJlbSBzaWduIGFpcnkgYmVzc2VsaiBiZXNzZWx5IGJlc3NlbGggYmVzc2VsaSBiZXNzZWxrIGJldGEgYmV0YWluYyBiZXRhbG4gZWxsaXBqIGVsbGlwa2UgZXJmIGVyZmMgZXJmY3ggZXJmaW52IGV4cGludCBnYW1tYSBnYW1tYWluYyBnYW1tYWxuIHBzaSBsZWdlbmRyZSBjcm9zcyBkb3QgZmFjdG9yIGlzcHJpbWUgcHJpbWVzIGdjZCBsY20gcmF0IHJhdHMgcGVybXMgbmNob29zZWsgZmFjdG9yaWFsIGNhcnQyc3BoIGNhcnQycG9sIHBvbDJjYXJ0IHNwaDJjYXJ0IGhzdjJyZ2IgcmdiMmhzdiB6ZXJvcyBvbmVzIGV5ZSByZXBtYXQgcmFuZCByYW5kbiBsaW5zcGFjZSBsb2dzcGFjZSBmcmVxc3BhY2UgbWVzaGdyaWQgYWNjdW1hcnJheSBzaXplIGxlbmd0aCBuZGltcyBudW1lbCBkaXNwIGlzZW1wdHkgaXNlcXVhbCBpc2VxdWFsd2l0aGVxdWFsbmFucyBjYXQgcmVzaGFwZSBkaWFnIGJsa2RpYWcgdHJpbCB0cml1IGZsaXBsciBmbGlwdWQgZmxpcGRpbSByb3Q5MCBmaW5kIHN1YjJpbmQgaW5kMnN1YiBic3hmdW4gbmRncmlkIHBlcm11dGUgaXBlcm11dGUgc2hpZnRkaW0gY2lyY3NoaWZ0IHNxdWVlemUgaXNzY2FsYXIgaXN2ZWN0b3IgYW5zIGVwcyByZWFsbWF4IHJlYWxtaW4gcGkgaSBpbmYgbmFuIGlzbmFuIGlzaW5mIGlzZmluaXRlIGogd2h5IGNvbXBhbiBnYWxsZXJ5IGhhZGFtYXJkIGhhbmtlbCBoaWxiIGludmhpbGIgbWFnaWMgcGFzY2FsIHJvc3NlciB0b2VwbGl0eiB2YW5kZXIgd2lsa2luc29uXCJ9LGk6JygvL3xcInwjfC9cXFxcKnxcXFxccysvXFxcXHcrKScsYzpbe2NOOlwiZnVuY3Rpb25cIixiSzpcImZ1bmN0aW9uXCIsZTpcIiRcIixjOltlLlVUTSx7Y046XCJwYXJhbXNcIixiOlwiXFxcXChcIixlOlwiXFxcXClcIn0se2NOOlwicGFyYW1zXCIsYjpcIlxcXFxbXCIsZTpcIlxcXFxdXCJ9XX0se2I6L1thLXpBLVpfXVthLXpBLVpfMC05XSonWydcXC5dKi8sckI6ITAscjowLGM6W3tiOi9bYS16QS1aX11bYS16QS1aXzAtOV0qLyxyOjB9LHMuY1swXV19LHtjTjpcIm1hdHJpeFwiLGI6XCJcXFxcW1wiLGU6XCJcXFxcXVwiLGM6YSxyOjAsc3RhcnRzOnN9LHtjTjpcImNlbGxcIixiOlwiXFxcXHtcIixlOi9cXH0vLGM6YSxyOjAsaTovOi8sc3RhcnRzOnN9LHtiOi9cXCkvLHI6MCxzdGFydHM6c30se2NOOlwiY29tbWVudFwiLGI6XCJcXFxcJVwiLGU6XCIkXCJ9XS5jb25jYXQoYSl9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY29mZmVlc2NyaXB0XCIsZnVuY3Rpb24oZSl7dmFyIGM9e2tleXdvcmQ6XCJpbiBpZiBmb3Igd2hpbGUgZmluYWxseSBuZXcgZG8gcmV0dXJuIGVsc2UgYnJlYWsgY2F0Y2ggaW5zdGFuY2VvZiB0aHJvdyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSBkZWJ1Z2dlciBzdXBlciB0aGVuIHVubGVzcyB1bnRpbCBsb29wIG9mIGJ5IHdoZW4gYW5kIG9yIGlzIGlzbnQgbm90XCIsbGl0ZXJhbDpcInRydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgeWVzIG5vIG9uIG9mZlwiLHJlc2VydmVkOlwiY2FzZSBkZWZhdWx0IGZ1bmN0aW9uIHZhciB2b2lkIHdpdGggY29uc3QgbGV0IGVudW0gZXhwb3J0IGltcG9ydCBuYXRpdmUgX19oYXNQcm9wIF9fZXh0ZW5kcyBfX3NsaWNlIF9fYmluZCBfX2luZGV4T2ZcIixidWlsdF9pbjpcIm5wbSByZXF1aXJlIGNvbnNvbGUgcHJpbnQgbW9kdWxlIGdsb2JhbCB3aW5kb3cgZG9jdW1lbnRcIn0sbj1cIltBLVphLXokX11bMC05QS1aYS16JF9dKlwiLHQ9e2NOOlwic3Vic3RcIixiOi8jXFx7LyxlOi99LyxrOmN9LHI9W2UuQk5NLGUuaW5oZXJpdChlLkNOTSx7c3RhcnRzOntlOlwiKFxcXFxzKi8pP1wiLHI6MH19KSx7Y046XCJzdHJpbmdcIix2Olt7YjovJycnLyxlOi8nJycvLGM6W2UuQkVdfSx7YjovJy8sZTovJy8sYzpbZS5CRV19LHtiOi9cIlwiXCIvLGU6L1wiXCJcIi8sYzpbZS5CRSx0XX0se2I6L1wiLyxlOi9cIi8sYzpbZS5CRSx0XX1dfSx7Y046XCJyZWdleHBcIix2Olt7YjpcIi8vL1wiLGU6XCIvLy9cIixjOlt0LGUuSENNXX0se2I6XCIvL1tnaW1dKlwiLHI6MH0se2I6L1xcLyg/IVsgKl0pKFxcXFxcXC98LikqP1xcL1tnaW1dKig/PVxcV3wkKS99XX0se2NOOlwicHJvcGVydHlcIixiOlwiQFwiK259LHtiOlwiYFwiLGU6XCJgXCIsZUI6ITAsZUU6ITAsc0w6XCJqYXZhc2NyaXB0XCJ9XTt0LmM9cjt2YXIgaT1lLmluaGVyaXQoZS5UTSx7YjpufSkscz1cIihcXFxcKC4qXFxcXCkpP1xcXFxzKlxcXFxCWy09XT5cIixvPXtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFteXFxcXChdXCIsckI6ITAsYzpbe2I6L1xcKC8sZTovXFwpLyxrOmMsYzpbXCJzZWxmXCJdLmNvbmNhdChyKX1dfTtyZXR1cm57YWxpYXNlczpbXCJjb2ZmZWVcIixcImNzb25cIixcImljZWRcIl0sazpjLGk6L1xcL1xcKi8sYzpyLmNvbmNhdChbe2NOOlwiY29tbWVudFwiLGI6XCIjIyNcIixlOlwiIyMjXCIsYzpbZS5QV01dfSxlLkhDTSx7Y046XCJmdW5jdGlvblwiLGI6XCJeXFxcXHMqXCIrbitcIlxcXFxzKj1cXFxccypcIitzLGU6XCJbLT1dPlwiLHJCOiEwLGM6W2ksb119LHtiOi9bOlxcKCw9XVxccyovLHI6MCxjOlt7Y046XCJmdW5jdGlvblwiLGI6cyxlOlwiWy09XT5cIixyQjohMCxjOltvXX1dfSx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3NcIixlOlwiJFwiLGk6L1s6PVwiXFxbXFxdXS8sYzpbe2JLOlwiZXh0ZW5kc1wiLGVXOiEwLGk6L1s6PVwiXFxbXFxdXS8sYzpbaV19LGldfSx7Y046XCJhdHRyaWJ1dGVcIixiOm4rXCI6XCIsZTpcIjpcIixyQjohMCxyRTohMCxyOjB9XSl9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiaW5pXCIsZnVuY3Rpb24oZSl7cmV0dXJue2NJOiEwLGk6L1xcUy8sYzpbe2NOOlwiY29tbWVudFwiLGI6XCI7XCIsZTpcIiRcIn0se2NOOlwidGl0bGVcIixiOlwiXlxcXFxbXCIsZTpcIlxcXFxdXCJ9LHtjTjpcInNldHRpbmdcIixiOlwiXlthLXowLTlcXFxcW1xcXFxdXy1dK1sgXFxcXHRdKj1bIFxcXFx0XSpcIixlOlwiJFwiLGM6W3tjTjpcInZhbHVlXCIsZVc6ITAsazpcIm9uIG9mZiB0cnVlIGZhbHNlIHllcyBub1wiLGM6W2UuUVNNLGUuTk1dLHI6MH1dfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZ3Jvb3Z5XCIsZnVuY3Rpb24oZSl7cmV0dXJue2s6e3R5cGVuYW1lOlwiYnl0ZSBzaG9ydCBjaGFyIGludCBsb25nIGJvb2xlYW4gZmxvYXQgZG91YmxlIHZvaWRcIixsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsXCIsa2V5d29yZDpcImRlZiBhcyBpbiBhc3NlcnQgdHJhaXQgc3VwZXIgdGhpcyBhYnN0cmFjdCBzdGF0aWMgdm9sYXRpbGUgdHJhbnNpZW50IHB1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBzeW5jaHJvbml6ZWQgZmluYWwgY2xhc3MgaW50ZXJmYWNlIGVudW0gaWYgZWxzZSBmb3Igd2hpbGUgc3dpdGNoIGNhc2UgYnJlYWsgZGVmYXVsdCBjb250aW51ZSB0aHJvdyB0aHJvd3MgdHJ5IGNhdGNoIGZpbmFsbHkgaW1wbGVtZW50cyBleHRlbmRzIG5ldyBpbXBvcnQgcGFja2FnZSByZXR1cm4gaW5zdGFuY2VvZlwifSxjOltlLkNMQ00se2NOOlwiamF2YWRvY1wiLGI6XCIvXFxcXCpcXFxcKlwiLGU6XCJcXFxcKi8vKlwiLHI6MCxjOlt7Y046XCJqYXZhZG9jdGFnXCIsYjpcIihefFxcXFxzKUBbQS1aYS16XStcIn1dfSxlLkNCQ00se2NOOlwic3RyaW5nXCIsYjonXCJcIlwiJyxlOidcIlwiXCInfSx7Y046XCJzdHJpbmdcIixiOlwiJycnXCIsZTpcIicnJ1wifSx7Y046XCJzdHJpbmdcIixiOlwiXFxcXCQvXCIsZTpcIi9cXFxcJFwiLHI6MTB9LGUuQVNNLHtjTjpcInJlZ2V4cFwiLGI6L34/XFwvW15cXC9cXG5dK1xcLy8sYzpbZS5CRV19LGUuUVNNLHtjTjpcInNoZWJhbmdcIixiOlwiXiMhL3Vzci9iaW4vZW52XCIsZTpcIiRcIixpOlwiXFxuXCJ9LGUuQk5NLHtjTjpcImNsYXNzXCIsYks6XCJjbGFzcyBpbnRlcmZhY2UgdHJhaXQgZW51bVwiLGU6XCJ7XCIsaTpcIjpcIixjOlt7Yks6XCJleHRlbmRzIGltcGxlbWVudHNcIn0sZS5VVE1dfSxlLkNOTSx7Y046XCJhbm5vdGF0aW9uXCIsYjpcIkBbQS1aYS16XStcIn0se2NOOlwic3RyaW5nXCIsYjovW15cXD9dezB9W0EtWmEtejAtOV8kXSsgKjovfSx7YjovXFw/LyxlOi9cXDovfSx7Y046XCJsYWJlbFwiLGI6XCJeXFxcXHMqW0EtWmEtejAtOV8kXSs6XCIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiclwiLGZ1bmN0aW9uKGUpe3ZhciByPVwiKFthLXpBLVpdfFxcXFwuW2EtekEtWi5dKVthLXpBLVowLTkuX10qXCI7cmV0dXJue2M6W2UuSENNLHtiOnIsbDpyLGs6e2tleXdvcmQ6XCJmdW5jdGlvbiBpZiBpbiBicmVhayBuZXh0IHJlcGVhdCBlbHNlIGZvciByZXR1cm4gc3dpdGNoIHdoaWxlIHRyeSB0cnlDYXRjaHwxMCBzdG9wIHdhcm5pbmcgcmVxdWlyZSBsaWJyYXJ5IGF0dGFjaCBkZXRhY2ggc291cmNlIHNldE1ldGhvZCBzZXRHZW5lcmljIHNldEdyb3VwR2VuZXJpYyBzZXRDbGFzcyAuLi58MTBcIixsaXRlcmFsOlwiTlVMTCBOQSBUUlVFIEZBTFNFIFQgRiBJbmYgTmFOIE5BX2ludGVnZXJffDEwIE5BX3JlYWxffDEwIE5BX2NoYXJhY3Rlcl98MTAgTkFfY29tcGxleF98MTBcIn0scjowfSx7Y046XCJudW1iZXJcIixiOlwiMFt4WF1bMC05YS1mQS1GXStbTGldP1xcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXGQrKD86W2VFXVsrXFxcXC1dP1xcXFxkKik/TFxcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXGQrXFxcXC4oPyFcXFxcZCkoPzppXFxcXGIpP1wiLHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxkKyg/OlxcXFwuXFxcXGQqKT8oPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXC5cXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIscjowfSx7YjpcImBcIixlOlwiYFwiLHI6MH0se2NOOlwic3RyaW5nXCIsYzpbZS5CRV0sdjpbe2I6J1wiJyxlOidcIid9LHtiOlwiJ1wiLGU6XCInXCJ9XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImVsaXhpclwiLGZ1bmN0aW9uKGUpe3ZhciByPVwiW2EtekEtWl9dW2EtekEtWjAtOV9dKihcXFxcIXxcXFxcPyk/XCIsYj1cIlthLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XVxcXFxAfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT9cIixuPVwiYW5kIGZhbHNlIHRoZW4gZGVmaW5lZCBtb2R1bGUgaW4gcmV0dXJuIHJlZG8gcmV0cnkgZW5kIGZvciB0cnVlIHNlbGYgd2hlbiBuZXh0IHVudGlsIGRvIGJlZ2luIHVubGVzcyBuaWwgYnJlYWsgbm90IGNhc2UgY29uZCBhbGlhcyB3aGlsZSBlbnN1cmUgb3IgaW5jbHVkZSB1c2UgYWxpYXMgZm4gcXVvdGVcIixjPXtjTjpcInN1YnN0XCIsYjpcIiNcXFxce1wiLGU6XCJ9XCIsbDpyLGs6bn0sYT17Y046XCJzdHJpbmdcIixjOltlLkJFLGNdLHY6W3tiOi8nLyxlOi8nL30se2I6L1wiLyxlOi9cIi99XX0scz17ZVc6ITAsckU6ITAsbDpyLGs6bixyOjB9LGk9e2NOOlwiZnVuY3Rpb25cIixiSzpcImRlZiBkZWZtYWNyb1wiLGU6L1xcYmRvXFxiLyxjOltlLmluaGVyaXQoZS5UTSx7YjpiLHN0YXJ0czpzfSldfSxsPWUuaW5oZXJpdChpLHtjTjpcImNsYXNzXCIsYks6XCJkZWZtb2R1bGUgZGVmcmVjb3JkXCIsZTovXFxiZG9cXGJ8JHw7L30pLHQ9W2EsZS5IQ00sbCxpLHtjTjpcImNvbnN0YW50XCIsYjpcIihcXFxcYltBLVpfXVxcXFx3KiguKT8pK1wiLHI6MH0se2NOOlwic3ltYm9sXCIsYjpcIjpcIixjOlthLHtiOmJ9XSxyOjB9LHtjTjpcInN5bWJvbFwiLGI6citcIjpcIixyOjB9LHtjTjpcIm51bWJlclwiLGI6XCIoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYlwiLHI6MH0se2NOOlwidmFyaWFibGVcIixiOlwiKFxcXFwkXFxcXFcpfCgoXFxcXCR8XFxcXEBcXFxcQD8pKFxcXFx3KykpXCJ9LHtiOlwiLT5cIn0se2I6XCIoXCIrZS5SU1IrXCIpXFxcXHMqXCIsYzpbZS5IQ00se2NOOlwicmVnZXhwXCIsaTpcIlxcXFxuXCIsYzpbZS5CRSxjXSx2Olt7YjpcIi9cIixlOlwiL1thLXpdKlwifSx7YjpcIiVyXFxcXFtcIixlOlwiXFxcXF1bYS16XSpcIn1dfV0scjowfV07cmV0dXJuIGMuYz10LHMuYz10LHtsOnIsazpuLGM6dH19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJnb1wiLGZ1bmN0aW9uKGUpe3ZhciB0PXtrZXl3b3JkOlwiYnJlYWsgZGVmYXVsdCBmdW5jIGludGVyZmFjZSBzZWxlY3QgY2FzZSBtYXAgc3RydWN0IGNoYW4gZWxzZSBnb3RvIHBhY2thZ2Ugc3dpdGNoIGNvbnN0IGZhbGx0aHJvdWdoIGlmIHJhbmdlIHR5cGUgY29udGludWUgZm9yIGltcG9ydCByZXR1cm4gdmFyIGdvIGRlZmVyXCIsY29uc3RhbnQ6XCJ0cnVlIGZhbHNlIGlvdGEgbmlsXCIsdHlwZW5hbWU6XCJib29sIGJ5dGUgY29tcGxleDY0IGNvbXBsZXgxMjggZmxvYXQzMiBmbG9hdDY0IGludDggaW50MTYgaW50MzIgaW50NjQgc3RyaW5nIHVpbnQ4IHVpbnQxNiB1aW50MzIgdWludDY0IGludCB1aW50IHVpbnRwdHIgcnVuZVwiLGJ1aWx0X2luOlwiYXBwZW5kIGNhcCBjbG9zZSBjb21wbGV4IGNvcHkgaW1hZyBsZW4gbWFrZSBuZXcgcGFuaWMgcHJpbnQgcHJpbnRsbiByZWFsIHJlY292ZXIgZGVsZXRlXCJ9O3JldHVybnthbGlhc2VzOltcImdvbGFuZ1wiXSxrOnQsaTpcIjwvXCIsYzpbZS5DTENNLGUuQ0JDTSxlLlFTTSx7Y046XCJzdHJpbmdcIixiOlwiJ1wiLGU6XCJbXlxcXFxcXFxcXSdcIn0se2NOOlwic3RyaW5nXCIsYjpcImBcIixlOlwiYFwifSx7Y046XCJudW1iZXJcIixiOmUuQ05SK1wiW2RmbHNpXT9cIixyOjB9LGUuQ05NXX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJzcWxcIixmdW5jdGlvbihlKXt2YXIgdD17Y046XCJjb21tZW50XCIsYjpcIi0tXCIsZTpcIiRcIn07cmV0dXJue2NJOiEwLGk6L1s8Pl0vLGM6W3tjTjpcIm9wZXJhdG9yXCIsYks6XCJiZWdpbiBlbmQgc3RhcnQgY29tbWl0IHJvbGxiYWNrIHNhdmVwb2ludCBsb2NrIGFsdGVyIGNyZWF0ZSBkcm9wIHJlbmFtZSBjYWxsIGRlbGV0ZSBkbyBoYW5kbGVyIGluc2VydCBsb2FkIHJlcGxhY2Ugc2VsZWN0IHRydW5jYXRlIHVwZGF0ZSBzZXQgc2hvdyBwcmFnbWEgZ3JhbnQgbWVyZ2UgZGVzY3JpYmUgdXNlIGV4cGxhaW4gaGVscCBkZWNsYXJlIHByZXBhcmUgZXhlY3V0ZSBkZWFsbG9jYXRlIHNhdmVwb2ludCByZWxlYXNlIHVubG9jayBwdXJnZSByZXNldCBjaGFuZ2Ugc3RvcCBhbmFseXplIGNhY2hlIGZsdXNoIG9wdGltaXplIHJlcGFpciBraWxsIGluc3RhbGwgdW5pbnN0YWxsIGNoZWNrc3VtIHJlc3RvcmUgY2hlY2sgYmFja3VwXCIsZTovOy8sZVc6ITAsazp7a2V5d29yZDpcImFicyBhYnNvbHV0ZSBhY29zIGFjdGlvbiBhZGQgYWRkZGF0ZSBhZGR0aW1lIGFlc19kZWNyeXB0IGFlc19lbmNyeXB0IGFmdGVyIGFnZ3JlZ2F0ZSBhbGwgYWxsb2NhdGUgYWx0ZXIgYW5hbHl6ZSBhbmQgYW55IGFyZSBhcyBhc2MgYXNjaWkgYXNpbiBhc3NlcnRpb24gYXQgYXRhbiBhdGFuMiBhdG4yIGF1dGhvcml6YXRpb24gYXV0aG9ycyBhdmcgYmFja3VwIGJlZm9yZSBiZWdpbiBiZW5jaG1hcmsgYmV0d2VlbiBiaW4gYmlubG9nIGJpdF9hbmQgYml0X2NvdW50IGJpdF9sZW5ndGggYml0X29yIGJpdF94b3IgYm90aCBieSBjYWNoZSBjYWxsIGNhc2NhZGUgY2FzY2FkZWQgY2FzZSBjYXN0IGNhdGFsb2cgY2VpbCBjZWlsaW5nIGNoYWluIGNoYW5nZSBjaGFuZ2VkIGNoYXJfbGVuZ3RoIGNoYXJhY3Rlcl9sZW5ndGggY2hhcmluZGV4IGNoYXJzZXQgY2hlY2sgY2hlY2tzdW0gY2hlY2tzdW1fYWdnIGNob29zZSBjbG9zZSBjb2FsZXNjZSBjb2VyY2liaWxpdHkgY29sbGF0ZSBjb2xsYXRpb24gY29sbGF0aW9ucHJvcGVydHkgY29sdW1uIGNvbHVtbnMgY29sdW1uc191cGRhdGVkIGNvbW1pdCBjb21wcmVzcyBjb25jYXQgY29uY2F0X3dzIGNvbmN1cnJlbnQgY29ubmVjdCBjb25uZWN0aW9uIGNvbm5lY3Rpb25faWQgY29uc2lzdGVudCBjb25zdHJhaW50IGNvbnN0cmFpbnRzIGNvbnRpbnVlIGNvbnRyaWJ1dG9ycyBjb252IGNvbnZlcnQgY29udmVydF90eiBjb3JyZXNwb25kaW5nIGNvcyBjb3QgY291bnQgY291bnRfYmlnIGNyYzMyIGNyZWF0ZSBjcm9zcyBjdW1lX2Rpc3QgY3VyZGF0ZSBjdXJyZW50IGN1cnJlbnRfZGF0ZSBjdXJyZW50X3RpbWUgY3VycmVudF90aW1lc3RhbXAgY3VycmVudF91c2VyIGN1cnNvciBjdXJ0aW1lIGRhdGEgZGF0YWJhc2UgZGF0YWJhc2VzIGRhdGFsZW5ndGggZGF0ZV9hZGQgZGF0ZV9mb3JtYXQgZGF0ZV9zdWIgZGF0ZWFkZCBkYXRlZGlmZiBkYXRlZnJvbXBhcnRzIGRhdGVuYW1lIGRhdGVwYXJ0IGRhdGV0aW1lMmZyb21wYXJ0cyBkYXRldGltZW9mZnNldGZyb21wYXJ0cyBkYXkgZGF5bmFtZSBkYXlvZm1vbnRoIGRheW9md2VlayBkYXlvZnllYXIgZGVhbGxvY2F0ZSBkZWNsYXJlIGRlY29kZSBkZWZhdWx0IGRlZmVycmFibGUgZGVmZXJyZWQgZGVncmVlcyBkZWxheWVkIGRlbGV0ZSBkZXNfZGVjcnlwdCBkZXNfZW5jcnlwdCBkZXNfa2V5X2ZpbGUgZGVzYyBkZXNjcmliZSBkZXNjcmlwdG9yIGRpYWdub3N0aWNzIGRpZmZlcmVuY2UgZGlzY29ubmVjdCBkaXN0aW5jdCBkaXN0aW5jdHJvdyBkaXYgZG8gZG9tYWluIGRvdWJsZSBkcm9wIGR1bXBmaWxlIGVhY2ggZWxzZSBlbHQgZW5jbG9zZWQgZW5jb2RlIGVuY3J5cHQgZW5kIGVuZC1leGVjIGVuZ2luZSBlbmdpbmVzIGVvbW9udGggZXJyb3JzIGVzY2FwZSBlc2NhcGVkIGV2ZW50IGV2ZW50ZGF0YSBldmVudHMgZXhjZXB0IGV4Y2VwdGlvbiBleGVjIGV4ZWN1dGUgZXhpc3RzIGV4cCBleHBsYWluIGV4cG9ydF9zZXQgZXh0ZW5kZWQgZXh0ZXJuYWwgZXh0cmFjdCBmYXN0IGZldGNoIGZpZWxkIGZpZWxkcyBmaW5kX2luX3NldCBmaXJzdCBmaXJzdF92YWx1ZSBmbG9vciBmbHVzaCBmb3IgZm9yY2UgZm9yZWlnbiBmb3JtYXQgZm91bmQgZm91bmRfcm93cyBmcm9tIGZyb21fYmFzZTY0IGZyb21fZGF5cyBmcm9tX3VuaXh0aW1lIGZ1bGwgZnVuY3Rpb24gZ2V0IGdldF9mb3JtYXQgZ2V0X2xvY2sgZ2V0ZGF0ZSBnZXR1dGNkYXRlIGdsb2JhbCBnbyBnb3RvIGdyYW50IGdyYW50cyBncmVhdGVzdCBncm91cCBncm91cF9jb25jYXQgZ3JvdXBpbmcgZ3JvdXBpbmdfaWQgZ3RpZF9zdWJzZXQgZ3RpZF9zdWJ0cmFjdCBoYW5kbGVyIGhhdmluZyBoZWxwIGhleCBoaWdoX3ByaW9yaXR5IGhvc3RzIGhvdXIgaWRlbnRfY3VycmVudCBpZGVudF9pbmNyIGlkZW50X3NlZWQgaWRlbnRpZmllZCBpZGVudGl0eSBpZiBpZm51bGwgaWdub3JlIGlpZiBpbGlrZSBpbW1lZGlhdGUgaW4gaW5kZXggaW5kaWNhdG9yIGluZXQ2X2F0b24gaW5ldDZfbnRvYSBpbmV0X2F0b24gaW5ldF9udG9hIGluZmlsZSBpbml0aWFsbHkgaW5uZXIgaW5ub2RiIGlucHV0IGluc2VydCBpbnN0YWxsIGluc3RyIGludGVyc2VjdCBpbnRvIGlzIGlzX2ZyZWVfbG9jayBpc19pcHY0IGlzX2lwdjRfY29tcGF0IGlzX2lwdjRfbWFwcGVkIGlzX25vdCBpc19ub3RfbnVsbCBpc191c2VkX2xvY2sgaXNkYXRlIGlzbnVsbCBpc29sYXRpb24gam9pbiBrZXkga2lsbCBsYW5ndWFnZSBsYXN0IGxhc3RfZGF5IGxhc3RfaW5zZXJ0X2lkIGxhc3RfdmFsdWUgbGNhc2UgbGVhZCBsZWFkaW5nIGxlYXN0IGxlYXZlcyBsZWZ0IGxlbiBsZW5naHQgbGV2ZWwgbGlrZSBsaW1pdCBsaW5lcyBsbiBsb2FkIGxvYWRfZmlsZSBsb2NhbCBsb2NhbHRpbWUgbG9jYWx0aW1lc3RhbXAgbG9jYXRlIGxvY2sgbG9nIGxvZzEwIGxvZzIgbG9nZmlsZSBsb2dzIGxvd19wcmlvcml0eSBsb3dlciBscGFkIGx0cmltIG1ha2Vfc2V0IG1ha2VkYXRlIG1ha2V0aW1lIG1hc3RlciBtYXN0ZXJfcG9zX3dhaXQgbWF0Y2ggbWF0Y2hlZCBtYXggbWQ1IG1lZGl1bSBtZXJnZSBtaWNyb3NlY29uZCBtaWQgbWluIG1pbnV0ZSBtb2QgbW9kZSBtb2R1bGUgbW9udGggbW9udGhuYW1lIG11dGV4IG5hbWVfY29uc3QgbmFtZXMgbmF0aW9uYWwgbmF0dXJhbCBuY2hhciBuZXh0IG5vIG5vX3dyaXRlX3RvX2JpbmxvZyBub3Qgbm93IG51bGxpZiBudmFyY2hhciBvY3Qgb2N0ZXRfbGVuZ3RoIG9mIG9sZF9wYXNzd29yZCBvbiBvbmx5IG9wZW4gb3B0aW1pemUgb3B0aW9uIG9wdGlvbmFsbHkgb3Igb3JkIG9yZGVyIG91dGVyIG91dGZpbGUgb3V0cHV0IHBhZCBwYXJzZSBwYXJ0aWFsIHBhcnRpdGlvbiBwYXNzd29yZCBwYXRpbmRleCBwZXJjZW50X3JhbmsgcGVyY2VudGlsZV9jb250IHBlcmNlbnRpbGVfZGlzYyBwZXJpb2RfYWRkIHBlcmlvZF9kaWZmIHBpIHBsdWdpbiBwb3NpdGlvbiBwb3cgcG93ZXIgcHJhZ21hIHByZWNpc2lvbiBwcmVwYXJlIHByZXNlcnZlIHByaW1hcnkgcHJpb3IgcHJpdmlsZWdlcyBwcm9jZWR1cmUgcHJvY2VkdXJlX2FuYWx5emUgcHJvY2Vzc2xpc3QgcHJvZmlsZSBwcm9maWxlcyBwdWJsaWMgcHVibGlzaGluZ3NlcnZlcm5hbWUgcHVyZ2UgcXVhcnRlciBxdWVyeSBxdWljayBxdW90ZSBxdW90ZW5hbWUgcmFkaWFucyByYW5kIHJlYWQgcmVmZXJlbmNlcyByZWdleHAgcmVsYXRpdmUgcmVsYXlsb2cgcmVsZWFzZSByZWxlYXNlX2xvY2sgcmVuYW1lIHJlcGFpciByZXBlYXQgcmVwbGFjZSByZXBsaWNhdGUgcmVzZXQgcmVzdG9yZSByZXN0cmljdCByZXR1cm4gcmV0dXJucyByZXZlcnNlIHJldm9rZSByaWdodCBybGlrZSByb2xsYmFjayByb2xsdXAgcm91bmQgcm93IHJvd19jb3VudCByb3dzIHJwYWQgcnRyaW0gc2F2ZXBvaW50IHNjaGVtYSBzY3JvbGwgc2VjX3RvX3RpbWUgc2Vjb25kIHNlY3Rpb24gc2VsZWN0IHNlcmlhbGl6YWJsZSBzZXJ2ZXIgc2Vzc2lvbiBzZXNzaW9uX3VzZXIgc2V0IHNoYSBzaGExIHNoYTIgc2hhcmUgc2hvdyBzaWduIHNpbiBzaXplIHNsYXZlIHNsZWVwIHNtYWxsZGF0ZXRpbWVmcm9tcGFydHMgc25hcHNob3Qgc29tZSBzb25hbWUgc291bmRleCBzb3VuZHNfbGlrZSBzcGFjZSBzcWwgc3FsX2JpZ19yZXN1bHQgc3FsX2J1ZmZlcl9yZXN1bHQgc3FsX2NhY2hlIHNxbF9jYWxjX2ZvdW5kX3Jvd3Mgc3FsX25vX2NhY2hlIHNxbF9zbWFsbF9yZXN1bHQgc3FsX3ZhcmlhbnRfcHJvcGVydHkgc3Fsc3RhdGUgc3FydCBzcXVhcmUgc3RhcnQgc3RhcnRpbmcgc3RhdHVzIHN0ZCBzdGRkZXYgc3RkZGV2X3BvcCBzdGRkZXZfc2FtcCBzdGRldiBzdGRldnAgc3RvcCBzdHIgc3RyX3RvX2RhdGUgc3RyYWlnaHRfam9pbiBzdHJjbXAgc3RyaW5nIHN0dWZmIHN1YmRhdGUgc3Vic3RyIHN1YnN0cmluZyBzdWJ0aW1lIHN1YnRyaW5nX2luZGV4IHN1bSBzd2l0Y2hvZmZzZXQgc3lzZGF0ZSBzeXNkYXRldGltZSBzeXNkYXRldGltZW9mZnNldCBzeXN0ZW1fdXNlciBzeXN1dGNkYXRldGltZSB0YWJsZSB0YWJsZXMgdGFibGVzcGFjZSB0YW4gdGVtcG9yYXJ5IHRlcm1pbmF0ZWQgdGVydGlhcnlfd2VpZ2h0cyB0aGVuIHRpbWUgdGltZV9mb3JtYXQgdGltZV90b19zZWMgdGltZWRpZmYgdGltZWZyb21wYXJ0cyB0aW1lc3RhbXAgdGltZXN0YW1wYWRkIHRpbWVzdGFtcGRpZmYgdGltZXpvbmVfaG91ciB0aW1lem9uZV9taW51dGUgdG8gdG9fYmFzZTY0IHRvX2RheXMgdG9fc2Vjb25kcyB0b2RhdGV0aW1lb2Zmc2V0IHRyYWlsaW5nIHRyYW5zYWN0aW9uIHRyYW5zbGF0aW9uIHRyaWdnZXIgdHJpZ2dlcl9uZXN0bGV2ZWwgdHJpZ2dlcnMgdHJpbSB0cnVuY2F0ZSB0cnlfY2FzdCB0cnlfY29udmVydCB0cnlfcGFyc2UgdWNhc2UgdW5jb21wcmVzcyB1bmNvbXByZXNzZWRfbGVuZ3RoIHVuaGV4IHVuaWNvZGUgdW5pbnN0YWxsIHVuaW9uIHVuaXF1ZSB1bml4X3RpbWVzdGFtcCB1bmtub3duIHVubG9jayB1cGRhdGUgdXBncmFkZSB1cHBlZCB1cHBlciB1c2FnZSB1c2UgdXNlciB1c2VyX3Jlc291cmNlcyB1c2luZyB1dGNfZGF0ZSB1dGNfdGltZSB1dGNfdGltZXN0YW1wIHV1aWQgdXVpZF9zaG9ydCB2YWxpZGF0ZV9wYXNzd29yZF9zdHJlbmd0aCB2YWx1ZSB2YWx1ZXMgdmFyIHZhcl9wb3AgdmFyX3NhbXAgdmFyaWFibGVzIHZhcmlhbmNlIHZhcnAgdmVyc2lvbiB2aWV3IHdhcm5pbmdzIHdlZWsgd2Vla2RheSB3ZWVrb2Z5ZWFyIHdlaWdodF9zdHJpbmcgd2hlbiB3aGVuZXZlciB3aGVyZSB3aXRoIHdvcmsgd3JpdGUgeG1sIHhvciB5ZWFyIHllYXJ3ZWVrIHpvblwiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGxcIixidWlsdF9pbjpcImFycmF5IGJpZ2ludCBiaW5hcnkgYml0IGJsb2IgYm9vbGVhbiBjaGFyIGNoYXJhY3RlciBkYXRlIGRlYyBkZWNpbWFsIGZsb2F0IGludCBpbnRlZ2VyIGludGVydmFsIG51bWJlciBudW1lcmljIHJlYWwgc2VyaWFsIHNtYWxsaW50IHZhcmNoYXIgdmFyeWluZyBpbnQ4IHNlcmlhbDggdGV4dFwifSxjOlt7Y046XCJzdHJpbmdcIixiOlwiJ1wiLGU6XCInXCIsYzpbZS5CRSx7YjpcIicnXCJ9XX0se2NOOlwic3RyaW5nXCIsYjonXCInLGU6J1wiJyxjOltlLkJFLHtiOidcIlwiJ31dfSx7Y046XCJzdHJpbmdcIixiOlwiYFwiLGU6XCJgXCIsYzpbZS5CRV19LGUuQ05NLGUuQ0JDTSx0XX0sZS5DQkNNLHRdfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInRleFwiLGZ1bmN0aW9uKCl7dmFyIGM9e2NOOlwiY29tbWFuZFwiLGI6XCJcXFxcXFxcXFthLXpBLVrQsC3Rj9CQLdGPXStbXFxcXCpdP1wifSxlPXtjTjpcImNvbW1hbmRcIixiOlwiXFxcXFxcXFxbXmEtekEtWtCwLdGP0JAt0Y8wLTldXCJ9LG09e2NOOlwic3BlY2lhbFwiLGI6XCJbe31cXFxcW1xcXFxdXFxcXCYjfl1cIixyOjB9O3JldHVybntjOlt7YjpcIlxcXFxcXFxcW2EtekEtWtCwLdGP0JAt0Y9dK1tcXFxcKl0/ICo9ICotP1xcXFxkKlxcXFwuP1xcXFxkKyhwdHxwY3xtbXxjbXxpbnxkZHxjY3xleHxlbSk/XCIsckI6ITAsYzpbYyxlLHtjTjpcIm51bWJlclwiLGI6XCIgKj1cIixlOlwiLT9cXFxcZCpcXFxcLj9cXFxcZCsocHR8cGN8bW18Y218aW58ZGR8Y2N8ZXh8ZW0pP1wiLGVCOiEwfV0scjoxMH0sYyxlLG0se2NOOlwiZm9ybXVsYVwiLGI6XCJcXFxcJFxcXFwkXCIsZTpcIlxcXFwkXFxcXCRcIixjOltjLGUsbV0scjowfSx7Y046XCJmb3JtdWxhXCIsYjpcIlxcXFwkXCIsZTpcIlxcXFwkXCIsYzpbYyxlLG1dLHI6MH0se2NOOlwiY29tbWVudFwiLGI6XCIlXCIsZTpcIiRcIixyOjB9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJodHRwXCIsZnVuY3Rpb24oKXtyZXR1cm57aTpcIlxcXFxTXCIsYzpbe2NOOlwic3RhdHVzXCIsYjpcIl5IVFRQL1swLTlcXFxcLl0rXCIsZTpcIiRcIixjOlt7Y046XCJudW1iZXJcIixiOlwiXFxcXGJcXFxcZHszfVxcXFxiXCJ9XX0se2NOOlwicmVxdWVzdFwiLGI6XCJeW0EtWl0rICguKj8pIEhUVFAvWzAtOVxcXFwuXSskXCIsckI6ITAsZTpcIiRcIixjOlt7Y046XCJzdHJpbmdcIixiOlwiIFwiLGU6XCIgXCIsZUI6ITAsZUU6ITB9XX0se2NOOlwiYXR0cmlidXRlXCIsYjpcIl5cXFxcd1wiLGU6XCI6IFwiLGVFOiEwLGk6XCJcXFxcbnxcXFxcc3w9XCIsc3RhcnRzOntjTjpcInN0cmluZ1wiLGU6XCIkXCJ9fSx7YjpcIlxcXFxuXFxcXG5cIixzdGFydHM6e3NMOlwiXCIsZVc6ITB9fV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwibGlzcFwiLGZ1bmN0aW9uKGUpe3ZhciBiPVwiW2EtekEtWl9cXFxcLVxcXFwrXFxcXCpcXFxcL1xcXFw8XFxcXD1cXFxcPlxcXFwmXFxcXCNdW2EtekEtWjAtOV9cXFxcLVxcXFwrXFxcXCpcXFxcL1xcXFw8XFxcXD1cXFxcPlxcXFwmXFxcXCMhXSpcIixjPVwiXFxcXHxbXl0qP1xcXFx8XCIscj1cIihcXFxcLXxcXFxcKyk/XFxcXGQrKFxcXFwuXFxcXGQrfFxcXFwvXFxcXGQrKT8oKGR8ZXxmfGx8cykoXFxcXCt8XFxcXC0pP1xcXFxkKyk/XCIsdD17Y046XCJzaGViYW5nXCIsYjpcIl4jIVwiLGU6XCIkXCJ9LGE9e2NOOlwibGl0ZXJhbFwiLGI6XCJcXFxcYih0ezF9fG5pbClcXFxcYlwifSxpPXtjTjpcIm51bWJlclwiLHY6W3tiOnIscjowfSx7YjpcIiNiWzAtMV0rKC9bMC0xXSspP1wifSx7YjpcIiNvWzAtN10rKC9bMC03XSspP1wifSx7YjpcIiN4WzAtOWEtZl0rKC9bMC05YS1mXSspP1wifSx7YjpcIiNjXFxcXChcIityK1wiICtcIityLGU6XCJcXFxcKVwifV19LGw9ZS5pbmhlcml0KGUuUVNNLHtpOm51bGx9KSxuPXtjTjpcImNvbW1lbnRcIixiOlwiO1wiLGU6XCIkXCIscjowfSxOPXtjTjpcInZhcmlhYmxlXCIsYjpcIlxcXFwqXCIsZTpcIlxcXFwqXCJ9LGQ9e2NOOlwia2V5d29yZFwiLGI6XCJbOiZdXCIrYn0sbz17YjpjfSx1PXtiOlwiXFxcXChcIixlOlwiXFxcXClcIixjOltcInNlbGZcIixhLGwsaV19LHM9e2NOOlwicXVvdGVkXCIsYzpbaSxsLE4sZCx1XSx2Olt7YjpcIlsnYF1cXFxcKFwiLGU6XCJcXFxcKVwifSx7YjpcIlxcXFwocXVvdGUgXCIsZTpcIlxcXFwpXCIsazpcInF1b3RlXCJ9LHtiOlwiJ1wiK2N9XX0sZj17Y046XCJxdW90ZWRcIixiOlwiJ1wiK2J9LHY9e2NOOlwibGlzdFwiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwifSxnPXtlVzohMCxyOjB9O3JldHVybiB2LmM9W3tjTjpcImtleXdvcmRcIix2Olt7YjpifSx7YjpjfV19LGddLGcuYz1bcyxmLHYsYSxpLGwsbixOLGQsb10se2k6L1xcUy8sYzpbaSx0LGEsbCxuLHMsZix2XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJlcmxhbmdcIixmdW5jdGlvbihlKXt2YXIgcj1cIlthLXonXVthLXpBLVowLTlfJ10qXCIsYz1cIihcIityK1wiOlwiK3IrXCJ8XCIrcitcIilcIixhPXtrZXl3b3JkOlwiYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnpyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmIGxldCBub3Qgb2Ygb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvclwiLGxpdGVyYWw6XCJmYWxzZSB0cnVlXCJ9LG49e2NOOlwiY29tbWVudFwiLGI6XCIlXCIsZTpcIiRcIn0sYj17Y046XCJudW1iZXJcIixiOlwiXFxcXGIoXFxcXGQrI1thLWZBLUYwLTldK3xcXFxcZCsoXFxcXC5cXFxcZCspPyhbZUVdWy0rXT9cXFxcZCspPylcIixyOjB9LGk9e2I6XCJmdW5cXFxccytcIityK1wiL1xcXFxkK1wifSxvPXtiOmMrXCJcXFxcKFwiLGU6XCJcXFxcKVwiLHJCOiEwLHI6MCxjOlt7Y046XCJmdW5jdGlvbl9uYW1lXCIsYjpjLHI6MH0se2I6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGVXOiEwLHJFOiEwLHI6MH1dfSxkPXtjTjpcInR1cGxlXCIsYjpcIntcIixlOlwifVwiLHI6MH0sdD17Y046XCJ2YXJpYWJsZVwiLGI6XCJcXFxcYl8oW0EtWl1bQS1aYS16MC05X10qKT9cIixyOjB9LGw9e2NOOlwidmFyaWFibGVcIixiOlwiW0EtWl1bYS16QS1aMC05X10qXCIscjowfSxmPXtiOlwiI1wiK2UuVUlSLHI6MCxyQjohMCxjOlt7Y046XCJyZWNvcmRfbmFtZVwiLGI6XCIjXCIrZS5VSVIscjowfSx7YjpcIntcIixlOlwifVwiLHI6MH1dfSxzPXtiSzpcImZ1biByZWNlaXZlIGlmIHRyeSBjYXNlXCIsZTpcImVuZFwiLGs6YX07cy5jPVtuLGksZS5pbmhlcml0KGUuQVNNLHtjTjpcIlwifSkscyxvLGUuUVNNLGIsZCx0LGwsZl07dmFyIHU9W24saSxzLG8sZS5RU00sYixkLHQsbCxmXTtvLmNbMV0uYz11LGQuYz11LGYuY1sxXS5jPXU7dmFyIHY9e2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzp1fTtyZXR1cm57YWxpYXNlczpbXCJlcmxcIl0sazphLGk6XCIoPC98XFxcXCo9fFxcXFwrPXwtPXwvXFxcXCp8XFxcXCovfFxcXFwoXFxcXCp8XFxcXCpcXFxcKSlcIixjOlt7Y046XCJmdW5jdGlvblwiLGI6XCJeXCIrcitcIlxcXFxzKlxcXFwoXCIsZTpcIi0+XCIsckI6ITAsaTpcIlxcXFwofCN8Ly98L1xcXFwqfFxcXFxcXFxcfDp8O1wiLGM6W3YsZS5pbmhlcml0KGUuVE0se2I6cn0pXSxzdGFydHM6e2U6XCI7fFxcXFwuXCIsazphLGM6dX19LG4se2NOOlwicHBcIixiOlwiXi1cIixlOlwiXFxcXC5cIixyOjAsZUU6ITAsckI6ITAsbDpcIi1cIitlLklSLGs6XCItbW9kdWxlIC1yZWNvcmQgLXVuZGVmIC1leHBvcnQgLWlmZGVmIC1pZm5kZWYgLWF1dGhvciAtY29weXJpZ2h0IC1kb2MgLXZzbiAtaW1wb3J0IC1pbmNsdWRlIC1pbmNsdWRlX2xpYiAtY29tcGlsZSAtZGVmaW5lIC1lbHNlIC1lbmRpZiAtZmlsZSAtYmVoYXZpb3VyIC1iZWhhdmlvciAtc3BlY1wiLGM6W3ZdfSxiLGUuUVNNLGYsdCxsLGQse2I6L1xcLiQvfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwibWFrZWZpbGVcIixmdW5jdGlvbihlKXt2YXIgYT17Y046XCJ2YXJpYWJsZVwiLGI6L1xcJFxcKC8sZTovXFwpLyxjOltlLkJFXX07cmV0dXJue2FsaWFzZXM6W1wibWtcIixcIm1ha1wiXSxjOltlLkhDTSx7YjovXlxcdytcXHMqXFxXKj0vLHJCOiEwLHI6MCxzdGFydHM6e2NOOlwiY29uc3RhbnRcIixlOi9cXHMqXFxXKj0vLGVFOiEwLHN0YXJ0czp7ZTovJC8scjowLGM6W2FdfX19LHtjTjpcInRpdGxlXCIsYjovXltcXHddKzpcXHMqJC99LHtjTjpcInBob255XCIsYjovXlxcLlBIT05ZOi8sZTovJC8sazpcIi5QSE9OWVwiLGw6L1tcXC5cXHddKy99LHtiOi9eXFx0Ky8sZTovJC8scjowLGM6W2UuUVNNLGFdfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwicGVybFwiLGZ1bmN0aW9uKGUpe3ZhciB0PVwiZ2V0cHdlbnQgZ2V0c2VydmVudCBxdW90ZW1ldGEgbXNncmN2IHNjYWxhciBraWxsIGRibWNsb3NlIHVuZGVmIGxjIG1hIHN5c3dyaXRlIHRyIHNlbmQgdW1hc2sgc3lzb3BlbiBzaG13cml0ZSB2ZWMgcXggdXRpbWUgbG9jYWwgb2N0IHNlbWN0bCBsb2NhbHRpbWUgcmVhZHBpcGUgZG8gcmV0dXJuIGZvcm1hdCByZWFkIHNwcmludGYgZGJtb3BlbiBwb3AgZ2V0cGdycCBub3QgZ2V0cHduYW0gcmV3aW5kZGlyIHFxZmlsZW5vIHF3IGVuZHByb3RvZW50IHdhaXQgc2V0aG9zdGVudCBibGVzcyBzfDAgb3BlbmRpciBjb250aW51ZSBlYWNoIHNsZWVwIGVuZGdyZW50IHNodXRkb3duIGR1bXAgY2hvbXAgY29ubmVjdCBnZXRzb2NrbmFtZSBkaWUgc29ja2V0cGFpciBjbG9zZSBmbG9jayBleGlzdHMgaW5kZXggc2htZ2V0c3ViIGZvciBlbmRwd2VudCByZWRvIGxzdGF0IG1zZ2N0bCBzZXRwZ3JwIGFicyBleGl0IHNlbGVjdCBwcmludCByZWYgZ2V0aG9zdGJ5YWRkciB1bnNoaWZ0IGZjbnRsIHN5c2NhbGwgZ290byBnZXRuZXRieWFkZHIgam9pbiBnbXRpbWUgc3ltbGluayBzZW1nZXQgc3BsaWNlIHh8MCBnZXRwZWVybmFtZSByZWN2IGxvZyBzZXRzb2Nrb3B0IGNvcyBsYXN0IHJldmVyc2UgZ2V0aG9zdGJ5bmFtZSBnZXRncm5hbSBzdHVkeSBmb3JtbGluZSBlbmRob3N0ZW50IHRpbWVzIGNob3AgbGVuZ3RoIGdldGhvc3RlbnQgZ2V0bmV0ZW50IHBhY2sgZ2V0cHJvdG9lbnQgZ2V0c2VydmJ5bmFtZSByYW5kIG1rZGlyIHBvcyBjaG1vZCB5fDAgc3Vic3RyIGVuZG5ldGVudCBwcmludGYgbmV4dCBvcGVuIG1zZ3NuZCByZWFkZGlyIHVzZSB1bmxpbmsgZ2V0c29ja29wdCBnZXRwcmlvcml0eSByaW5kZXggd2FudGFycmF5IGhleCBzeXN0ZW0gZ2V0c2VydmJ5cG9ydCBlbmRzZXJ2ZW50IGludCBjaHIgdW50aWUgcm1kaXIgcHJvdG90eXBlIHRlbGwgbGlzdGVuIGZvcmsgc2htcmVhZCB1Y2ZpcnN0IHNldHByb3RvZW50IGVsc2Ugc3lzc2VlayBsaW5rIGdldGdyZ2lkIHNobWN0bCB3YWl0cGlkIHVucGFjayBnZXRuZXRieW5hbWUgcmVzZXQgY2hkaXIgZ3JlcCBzcGxpdCByZXF1aXJlIGNhbGxlciBsY2ZpcnN0IHVudGlsIHdhcm4gd2hpbGUgdmFsdWVzIHNoaWZ0IHRlbGxkaXIgZ2V0cHd1aWQgbXkgZ2V0cHJvdG9ieW51bWJlciBkZWxldGUgYW5kIHNvcnQgdWMgZGVmaW5lZCBzcmFuZCBhY2NlcHQgcGFja2FnZSBzZWVrZGlyIGdldHByb3RvYnluYW1lIHNlbW9wIG91ciByZW5hbWUgc2VlayBpZiBxfDAgY2hyb290IHN5c3JlYWQgc2V0cHdlbnQgbm8gY3J5cHQgZ2V0YyBjaG93biBzcXJ0IHdyaXRlIHNldG5ldGVudCBzZXRwcmlvcml0eSBmb3JlYWNoIHRpZSBzaW4gbXNnZ2V0IG1hcCBzdGF0IGdldGxvZ2luIHVubGVzcyBlbHNpZiB0cnVuY2F0ZSBleGVjIGtleXMgZ2xvYiB0aWVkIGNsb3NlZGlyaW9jdGwgc29ja2V0IHJlYWRsaW5rIGV2YWwgeG9yIHJlYWRsaW5lIGJpbm1vZGUgc2V0c2VydmVudCBlb2Ygb3JkIGJpbmQgYWxhcm0gcGlwZSBhdGFuMiBnZXRncmVudCBleHAgdGltZSBwdXNoIHNldGdyZW50IGd0IGx0IG9yIG5lIG18MCBicmVhayBnaXZlbiBzYXkgc3RhdGUgd2hlblwiLHI9e2NOOlwic3Vic3RcIixiOlwiWyRAXVxcXFx7XCIsZTpcIlxcXFx9XCIsazp0fSxzPXtiOlwiLT57XCIsZTpcIn1cIn0sbj17Y046XCJ2YXJpYWJsZVwiLHY6W3tiOi9cXCRcXGQvfSx7YjovW1xcJFxcJVxcQF0oXFxeXFx3XFxifCNcXHcrKFxcOlxcOlxcdyspKnx7XFx3K318XFx3KyhcXDpcXDpcXHcqKSopL30se2I6L1tcXCRcXCVcXEBdW15cXHNcXHd7XS8scjowfV19LG89e2NOOlwiY29tbWVudFwiLGI6XCJeKF9fRU5EX198X19EQVRBX18pXCIsZTpcIlxcXFxuJFwiLHI6NX0saT1bZS5CRSxyLG5dLGM9W24sZS5IQ00sbyx7Y046XCJjb21tZW50XCIsYjpcIl5cXFxcPVxcXFx3XCIsZTpcIlxcXFw9Y3V0XCIsZVc6ITB9LHMse2NOOlwic3RyaW5nXCIsYzppLHY6W3tiOlwicVtxd3hyXT9cXFxccypcXFxcKFwiLGU6XCJcXFxcKVwiLHI6NX0se2I6XCJxW3F3eHJdP1xcXFxzKlxcXFxbXCIsZTpcIlxcXFxdXCIscjo1fSx7YjpcInFbcXd4cl0/XFxcXHMqXFxcXHtcIixlOlwiXFxcXH1cIixyOjV9LHtiOlwicVtxd3hyXT9cXFxccypcXFxcfFwiLGU6XCJcXFxcfFwiLHI6NX0se2I6XCJxW3F3eHJdP1xcXFxzKlxcXFw8XCIsZTpcIlxcXFw+XCIscjo1fSx7YjpcInF3XFxcXHMrcVwiLGU6XCJxXCIscjo1fSx7YjpcIidcIixlOlwiJ1wiLGM6W2UuQkVdfSx7YjonXCInLGU6J1wiJ30se2I6XCJgXCIsZTpcImBcIixjOltlLkJFXX0se2I6XCJ7XFxcXHcrfVwiLGM6W10scjowfSx7YjpcIi0/XFxcXHcrXFxcXHMqXFxcXD1cXFxcPlwiLGM6W10scjowfV19LHtjTjpcIm51bWJlclwiLGI6XCIoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYlwiLHI6MH0se2I6XCIoXFxcXC9cXFxcL3xcIitlLlJTUitcInxcXFxcYihzcGxpdHxyZXR1cm58cHJpbnR8cmV2ZXJzZXxncmVwKVxcXFxiKVxcXFxzKlwiLGs6XCJzcGxpdCByZXR1cm4gcHJpbnQgcmV2ZXJzZSBncmVwXCIscjowLGM6W2UuSENNLG8se2NOOlwicmVnZXhwXCIsYjpcIihzfHRyfHkpLyhcXFxcXFxcXC58W14vXSkqLyhcXFxcXFxcXC58W14vXSkqL1thLXpdKlwiLHI6MTB9LHtjTjpcInJlZ2V4cFwiLGI6XCIobXxxcik/L1wiLGU6XCIvW2Etel0qXCIsYzpbZS5CRV0scjowfV19LHtjTjpcInN1YlwiLGJLOlwic3ViXCIsZTpcIihcXFxccypcXFxcKC4qP1xcXFwpKT9bO3tdXCIscjo1fSx7Y046XCJvcGVyYXRvclwiLGI6XCItXFxcXHdcXFxcYlwiLHI6MH1dO3JldHVybiByLmM9YyxzLmM9Yyx7YWxpYXNlczpbXCJwbFwiXSxrOnQsYzpjfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInJ1YnlcIixmdW5jdGlvbihlKXt2YXIgYj1cIlthLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XVxcXFxAfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT9cIixyPVwiYW5kIGZhbHNlIHRoZW4gZGVmaW5lZCBtb2R1bGUgaW4gcmV0dXJuIHJlZG8gaWYgQkVHSU4gcmV0cnkgZW5kIGZvciB0cnVlIHNlbGYgd2hlbiBuZXh0IHVudGlsIGRvIGJlZ2luIHVubGVzcyBFTkQgcmVzY3VlIG5pbCBlbHNlIGJyZWFrIHVuZGVmIG5vdCBzdXBlciBjbGFzcyBjYXNlIHJlcXVpcmUgeWllbGQgYWxpYXMgd2hpbGUgZW5zdXJlIGVsc2lmIG9yIGluY2x1ZGUgYXR0cl9yZWFkZXIgYXR0cl93cml0ZXIgYXR0cl9hY2Nlc3NvclwiLGM9e2NOOlwieWFyZG9jdGFnXCIsYjpcIkBbQS1aYS16XStcIn0sYT17Y046XCJ2YWx1ZVwiLGI6XCIjPFwiLGU6XCI+XCJ9LHM9e2NOOlwiY29tbWVudFwiLHY6W3tiOlwiI1wiLGU6XCIkXCIsYzpbY119LHtiOlwiXlxcXFw9YmVnaW5cIixlOlwiXlxcXFw9ZW5kXCIsYzpbY10scjoxMH0se2I6XCJeX19FTkRfX1wiLGU6XCJcXFxcbiRcIn1dfSxuPXtjTjpcInN1YnN0XCIsYjpcIiNcXFxce1wiLGU6XCJ9XCIsazpyfSx0PXtjTjpcInN0cmluZ1wiLGM6W2UuQkUsbl0sdjpbe2I6LycvLGU6LycvfSx7YjovXCIvLGU6L1wiL30se2I6L2AvLGU6L2AvfSx7YjpcIiVbcVF3V3hdP1xcXFwoXCIsZTpcIlxcXFwpXCJ9LHtiOlwiJVtxUXdXeF0/XFxcXFtcIixlOlwiXFxcXF1cIn0se2I6XCIlW3FRd1d4XT97XCIsZTpcIn1cIn0se2I6XCIlW3FRd1d4XT88XCIsZTpcIj5cIn0se2I6XCIlW3FRd1d4XT8vXCIsZTpcIi9cIn0se2I6XCIlW3FRd1d4XT8lXCIsZTpcIiVcIn0se2I6XCIlW3FRd1d4XT8tXCIsZTpcIi1cIn0se2I6XCIlW3FRd1d4XT9cXFxcfFwiLGU6XCJcXFxcfFwifSx7YjovXFxCXFw/KFxcXFxcXGR7MSwzfXxcXFxceFtBLUZhLWYwLTldezEsMn18XFxcXHVbQS1GYS1mMC05XXs0fXxcXFxcP1xcUylcXGIvfV19LGk9e2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsazpyfSxkPVt0LGEscyx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3MgbW9kdWxlXCIsZTpcIiR8O1wiLGk6Lz0vLGM6W2UuaW5oZXJpdChlLlRNLHtiOlwiW0EtWmEtel9dXFxcXHcqKDo6XFxcXHcrKSooXFxcXD98XFxcXCEpP1wifSkse2NOOlwiaW5oZXJpdGFuY2VcIixiOlwiPFxcXFxzKlwiLGM6W3tjTjpcInBhcmVudFwiLGI6XCIoXCIrZS5JUitcIjo6KT9cIitlLklSfV19LHNdfSx7Y046XCJmdW5jdGlvblwiLGJLOlwiZGVmXCIsZTpcIiB8JHw7XCIscjowLGM6W2UuaW5oZXJpdChlLlRNLHtiOmJ9KSxpLHNdfSx7Y046XCJjb25zdGFudFwiLGI6XCIoOjopPyhcXFxcYltBLVpdXFxcXHcqKDo6KT8pK1wiLHI6MH0se2NOOlwic3ltYm9sXCIsYjplLlVJUitcIihcXFxcIXxcXFxcPyk/OlwiLHI6MH0se2NOOlwic3ltYm9sXCIsYjpcIjpcIixjOlt0LHtiOmJ9XSxyOjB9LHtjTjpcIm51bWJlclwiLGI6XCIoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYlwiLHI6MH0se2NOOlwidmFyaWFibGVcIixiOlwiKFxcXFwkXFxcXFcpfCgoXFxcXCR8XFxcXEBcXFxcQD8pKFxcXFx3KykpXCJ9LHtiOlwiKFwiK2UuUlNSK1wiKVxcXFxzKlwiLGM6W2Escyx7Y046XCJyZWdleHBcIixjOltlLkJFLG5dLGk6L1xcbi8sdjpbe2I6XCIvXCIsZTpcIi9bYS16XSpcIn0se2I6XCIlcntcIixlOlwifVthLXpdKlwifSx7YjpcIiVyXFxcXChcIixlOlwiXFxcXClbYS16XSpcIn0se2I6XCIlciFcIixlOlwiIVthLXpdKlwifSx7YjpcIiVyXFxcXFtcIixlOlwiXFxcXF1bYS16XSpcIn1dfV0scjowfV07bi5jPWQsaS5jPWQ7dmFyIGw9XCJbPj9dPlwiLHU9XCJbXFxcXHcjXStcXFxcKFxcXFx3K1xcXFwpOlxcXFxkKzpcXFxcZCs+XCIsTj1cIihcXFxcdystKT9cXFxcZCtcXFxcLlxcXFxkK1xcXFwuXFxcXGQocFxcXFxkKyk/W14+XSs+XCIsbz1be2I6L15cXHMqPT4vLGNOOlwic3RhdHVzXCIsc3RhcnRzOntlOlwiJFwiLGM6ZH19LHtjTjpcInByb21wdFwiLGI6XCJeKFwiK2wrXCJ8XCIrdStcInxcIitOK1wiKVwiLHN0YXJ0czp7ZTpcIiRcIixjOmR9fV07cmV0dXJue2FsaWFzZXM6W1wicmJcIixcImdlbXNwZWNcIixcInBvZHNwZWNcIixcInRob3JcIixcImlyYlwiXSxrOnIsYzpbc10uY29uY2F0KG8pLmNvbmNhdChkKX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJlcmJcIixmdW5jdGlvbigpe3JldHVybntzTDpcInhtbFwiLHN1Ykxhbmd1YWdlTW9kZTpcImNvbnRpbnVvdXNcIixjOlt7Y046XCJjb21tZW50XCIsYjpcIjwlI1wiLGU6XCIlPlwifSx7YjpcIjwlWyU9LV0/XCIsZTpcIlslLV0/JT5cIixzTDpcInJ1YnlcIixlQjohMCxlRTohMH1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImFwYWNoZVwiLGZ1bmN0aW9uKGUpe3ZhciByPXtjTjpcIm51bWJlclwiLGI6XCJbXFxcXCQlXVxcXFxkK1wifTtyZXR1cm57YWxpYXNlczpbXCJhcGFjaGVjb25mXCJdLGNJOiEwLGM6W2UuSENNLHtjTjpcInRhZ1wiLGI6XCI8Lz9cIixlOlwiPlwifSx7Y046XCJrZXl3b3JkXCIsYjovXFx3Ky8scjowLGs6e2NvbW1vbjpcIm9yZGVyIGRlbnkgYWxsb3cgc2V0ZW52IHJld3JpdGVydWxlIHJld3JpdGVlbmdpbmUgcmV3cml0ZWNvbmQgZG9jdW1lbnRyb290IHNldGhhbmRsZXIgZXJyb3Jkb2N1bWVudCBsb2FkbW9kdWxlIG9wdGlvbnMgaGVhZGVyIGxpc3RlbiBzZXJ2ZXJyb290IHNlcnZlcm5hbWVcIn0sc3RhcnRzOntlOi8kLyxyOjAsazp7bGl0ZXJhbDpcIm9uIG9mZiBhbGxcIn0sYzpbe2NOOlwic3FicmFja2V0XCIsYjpcIlxcXFxzXFxcXFtcIixlOlwiXFxcXF0kXCJ9LHtjTjpcImNicmFja2V0XCIsYjpcIltcXFxcJCVdXFxcXHtcIixlOlwiXFxcXH1cIixjOltcInNlbGZcIixyXX0scixlLlFTTV19fV0saTovXFxTL319KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJqc29uXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2xpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGxcIn0saT1bZS5RU00sZS5DTk1dLGw9e2NOOlwidmFsdWVcIixlOlwiLFwiLGVXOiEwLGVFOiEwLGM6aSxrOnR9LGM9e2I6XCJ7XCIsZTpcIn1cIixjOlt7Y046XCJhdHRyaWJ1dGVcIixiOidcXFxccypcIicsZTonXCJcXFxccyo6XFxcXHMqJyxlQjohMCxlRTohMCxjOltlLkJFXSxpOlwiXFxcXG5cIixzdGFydHM6bH1dLGk6XCJcXFxcU1wifSxuPXtiOlwiXFxcXFtcIixlOlwiXFxcXF1cIixjOltlLmluaGVyaXQobCx7Y046bnVsbH0pXSxpOlwiXFxcXFNcIn07cmV0dXJuIGkuc3BsaWNlKGkubGVuZ3RoLDAsYyxuKSx7YzppLGs6dCxpOlwiXFxcXFNcIn19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJjbG9qdXJlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2J1aWx0X2luOlwiZGVmIGNvbmQgYXBwbHkgaWYtbm90IGlmLWxldCBpZiBub3Qgbm90PSA9IDwgPiA8PSA+PSA9PSArIC8gKiAtIHJlbSBxdW90IG5lZz8gcG9zPyBkZWxheT8gc3ltYm9sPyBrZXl3b3JkPyB0cnVlPyBmYWxzZT8gaW50ZWdlcj8gZW1wdHk/IGNvbGw/IGxpc3Q/IHNldD8gaWZuPyBmbj8gYXNzb2NpYXRpdmU/IHNlcXVlbnRpYWw/IHNvcnRlZD8gY291bnRlZD8gcmV2ZXJzaWJsZT8gbnVtYmVyPyBkZWNpbWFsPyBjbGFzcz8gZGlzdGluY3Q/IGlzYT8gZmxvYXQ/IHJhdGlvbmFsPyByZWR1Y2VkPyByYXRpbz8gb2RkPyBldmVuPyBjaGFyPyBzZXE/IHZlY3Rvcj8gc3RyaW5nPyBtYXA/IG5pbD8gY29udGFpbnM/IHplcm8/IGluc3RhbmNlPyBub3QtZXZlcnk/IG5vdC1hbnk/IGxpYnNwZWM/IC0+IC0+PiAuLiAuIGluYyBjb21wYXJlIGRvIGRvdGltZXMgbWFwY2F0IHRha2UgcmVtb3ZlIHRha2Utd2hpbGUgZHJvcCBsZXRmbiBkcm9wLWxhc3QgdGFrZS1sYXN0IGRyb3Atd2hpbGUgd2hpbGUgaW50ZXJuIGNvbmRwIGNhc2UgcmVkdWNlZCBjeWNsZSBzcGxpdC1hdCBzcGxpdC13aXRoIHJlcGVhdCByZXBsaWNhdGUgaXRlcmF0ZSByYW5nZSBtZXJnZSB6aXBtYXAgZGVjbGFyZSBsaW5lLXNlcSBzb3J0IGNvbXBhcmF0b3Igc29ydC1ieSBkb3J1biBkb2FsbCBudGhuZXh0IG50aHJlc3QgcGFydGl0aW9uIGV2YWwgZG9zZXEgYXdhaXQgYXdhaXQtZm9yIGxldCBhZ2VudCBhdG9tIHNlbmQgc2VuZC1vZmYgcmVsZWFzZS1wZW5kaW5nLXNlbmRzIGFkZC13YXRjaCBtYXB2IGZpbHRlcnYgcmVtb3ZlLXdhdGNoIGFnZW50LWVycm9yIHJlc3RhcnQtYWdlbnQgc2V0LWVycm9yLWhhbmRsZXIgZXJyb3ItaGFuZGxlciBzZXQtZXJyb3ItbW9kZSEgZXJyb3ItbW9kZSBzaHV0ZG93bi1hZ2VudHMgcXVvdGUgdmFyIGZuIGxvb3AgcmVjdXIgdGhyb3cgdHJ5IG1vbml0b3ItZW50ZXIgbW9uaXRvci1leGl0IGRlZm1hY3JvIGRlZm4gZGVmbi0gbWFjcm9leHBhbmQgbWFjcm9leHBhbmQtMSBmb3IgZG9zeW5jIGFuZCBvciB3aGVuIHdoZW4tbm90IHdoZW4tbGV0IGNvbXAganV4dCBwYXJ0aWFsIHNlcXVlbmNlIG1lbW9pemUgY29uc3RhbnRseSBjb21wbGVtZW50IGlkZW50aXR5IGFzc2VydCBwZWVrIHBvcCBkb3RvIHByb3h5IGRlZnN0cnVjdCBmaXJzdCByZXN0IGNvbnMgZGVmcHJvdG9jb2wgY2FzdCBjb2xsIGRlZnR5cGUgZGVmcmVjb3JkIGxhc3QgYnV0bGFzdCBzaWdzIHJlaWZ5IHNlY29uZCBmZmlyc3QgZm5leHQgbmZpcnN0IG5uZXh0IGRlZm11bHRpIGRlZm1ldGhvZCBtZXRhIHdpdGgtbWV0YSBucyBpbi1ucyBjcmVhdGUtbnMgaW1wb3J0IHJlZmVyIGtleXMgc2VsZWN0LWtleXMgdmFscyBrZXkgdmFsIHJzZXEgbmFtZSBuYW1lc3BhY2UgcHJvbWlzZSBpbnRvIHRyYW5zaWVudCBwZXJzaXN0ZW50ISBjb25qISBhc3NvYyEgZGlzc29jISBwb3AhIGRpc2ohIHVzZSBjbGFzcyB0eXBlIG51bSBmbG9hdCBkb3VibGUgc2hvcnQgYnl0ZSBib29sZWFuIGJpZ2ludCBiaWdpbnRlZ2VyIGJpZ2RlYyBwcmludC1tZXRob2QgcHJpbnQtZHVwIHRocm93LWlmIHByaW50ZiBmb3JtYXQgbG9hZCBjb21waWxlIGdldC1pbiB1cGRhdGUtaW4gcHIgcHItb24gbmV3bGluZSBmbHVzaCByZWFkIHNsdXJwIHJlYWQtbGluZSBzdWJ2ZWMgd2l0aC1vcGVuIG1lbWZuIHRpbWUgcmUtZmluZCByZS1ncm91cHMgcmFuZC1pbnQgcmFuZCBtb2QgbG9ja2luZyBhc3NlcnQtdmFsaWQtZmRlY2wgYWxpYXMgcmVzb2x2ZSByZWYgZGVyZWYgcmVmc2V0IHN3YXAhIHJlc2V0ISBzZXQtdmFsaWRhdG9yISBjb21wYXJlLWFuZC1zZXQhIGFsdGVyLW1ldGEhIHJlc2V0LW1ldGEhIGNvbW11dGUgZ2V0LXZhbGlkYXRvciBhbHRlciByZWYtc2V0IHJlZi1oaXN0b3J5LWNvdW50IHJlZi1taW4taGlzdG9yeSByZWYtbWF4LWhpc3RvcnkgZW5zdXJlIHN5bmMgaW8hIG5ldyBuZXh0IGNvbmogc2V0ISB0by1hcnJheSBmdXR1cmUgZnV0dXJlLWNhbGwgaW50by1hcnJheSBhc2V0IGdlbi1jbGFzcyByZWR1Y2UgbWFwIGZpbHRlciBmaW5kIGVtcHR5IGhhc2gtbWFwIGhhc2gtc2V0IHNvcnRlZC1tYXAgc29ydGVkLW1hcC1ieSBzb3J0ZWQtc2V0IHNvcnRlZC1zZXQtYnkgdmVjIHZlY3RvciBzZXEgZmxhdHRlbiByZXZlcnNlIGFzc29jIGRpc3NvYyBsaXN0IGRpc2ogZ2V0IHVuaW9uIGRpZmZlcmVuY2UgaW50ZXJzZWN0aW9uIGV4dGVuZCBleHRlbmQtdHlwZSBleHRlbmQtcHJvdG9jb2wgaW50IG50aCBkZWxheSBjb3VudCBjb25jYXQgY2h1bmsgY2h1bmstYnVmZmVyIGNodW5rLWFwcGVuZCBjaHVuay1maXJzdCBjaHVuay1yZXN0IG1heCBtaW4gZGVjIHVuY2hlY2tlZC1pbmMtaW50IHVuY2hlY2tlZC1pbmMgdW5jaGVja2VkLWRlYy1pbmMgdW5jaGVja2VkLWRlYyB1bmNoZWNrZWQtbmVnYXRlIHVuY2hlY2tlZC1hZGQtaW50IHVuY2hlY2tlZC1hZGQgdW5jaGVja2VkLXN1YnRyYWN0LWludCB1bmNoZWNrZWQtc3VidHJhY3QgY2h1bmstbmV4dCBjaHVuay1jb25zIGNodW5rZWQtc2VxPyBwcm4gdmFyeS1tZXRhIGxhenktc2VxIHNwcmVhZCBsaXN0KiBzdHIgZmluZC1rZXl3b3JkIGtleXdvcmQgc3ltYm9sIGdlbnN5bSBmb3JjZSByYXRpb25hbGl6ZVwifSxyPVwiYS16QS1aX1xcXFwtIS4/Kyo9PD4mIydcIixuPVwiW1wiK3IrXCJdW1wiK3IrXCIwLTkvOzpdKlwiLGE9XCJbLStdP1xcXFxkKyhcXFxcLlxcXFxkKyk/XCIsbz17YjpuLHI6MH0scz17Y046XCJudW1iZXJcIixiOmEscjowfSxjPWUuaW5oZXJpdChlLlFTTSx7aTpudWxsfSksaT17Y046XCJjb21tZW50XCIsYjpcIjtcIixlOlwiJFwiLHI6MH0sZD17Y046XCJsaXRlcmFsXCIsYjovXFxiKHRydWV8ZmFsc2V8bmlsKVxcYi99LGw9e2NOOlwiY29sbGVjdGlvblwiLGI6XCJbXFxcXFtcXFxce11cIixlOlwiW1xcXFxdXFxcXH1dXCJ9LG09e2NOOlwiY29tbWVudFwiLGI6XCJcXFxcXlwiK259LHA9e2NOOlwiY29tbWVudFwiLGI6XCJcXFxcXlxcXFx7XCIsZTpcIlxcXFx9XCJ9LHU9e2NOOlwiYXR0cmlidXRlXCIsYjpcIls6XVwiK259LGY9e2NOOlwibGlzdFwiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwifSxoPXtlVzohMCxyOjB9LHk9e2s6dCxsOm4sY046XCJrZXl3b3JkXCIsYjpuLHN0YXJ0czpofSxiPVtmLGMsbSxwLGksdSxsLHMsZCxvXTtyZXR1cm4gZi5jPVt7Y046XCJjb21tZW50XCIsYjpcImNvbW1lbnRcIn0seSxoXSxoLmM9YixsLmM9Yix7YWxpYXNlczpbXCJjbGpcIl0saTovXFxTLyxjOltmLGMsbSxwLGksdSxsLHMsZF19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY3NzXCIsZnVuY3Rpb24oZSl7dmFyIGM9XCJbYS16QS1aLV1bYS16QS1aMC05Xy1dKlwiLGE9e2NOOlwiZnVuY3Rpb25cIixiOmMrXCJcXFxcKFwiLHJCOiEwLGVFOiEwLGU6XCJcXFxcKFwifTtyZXR1cm57Y0k6ITAsaTpcIls9L3wnXVwiLGM6W2UuQ0JDTSx7Y046XCJpZFwiLGI6XCJcXFxcI1tBLVphLXowLTlfLV0rXCJ9LHtjTjpcImNsYXNzXCIsYjpcIlxcXFwuW0EtWmEtejAtOV8tXStcIixyOjB9LHtjTjpcImF0dHJfc2VsZWN0b3JcIixiOlwiXFxcXFtcIixlOlwiXFxcXF1cIixpOlwiJFwifSx7Y046XCJwc2V1ZG9cIixiOlwiOig6KT9bYS16QS1aMC05XFxcXF9cXFxcLVxcXFwrXFxcXChcXFxcKVxcXFxcXFwiXFxcXCddK1wifSx7Y046XCJhdF9ydWxlXCIsYjpcIkAoZm9udC1mYWNlfHBhZ2UpXCIsbDpcIlthLXotXStcIixrOlwiZm9udC1mYWNlIHBhZ2VcIn0se2NOOlwiYXRfcnVsZVwiLGI6XCJAXCIsZTpcIlt7O11cIixjOlt7Y046XCJrZXl3b3JkXCIsYjovXFxTKy99LHtiOi9cXHMvLGVXOiEwLGVFOiEwLHI6MCxjOlthLGUuQVNNLGUuUVNNLGUuQ1NTTk1dfV19LHtjTjpcInRhZ1wiLGI6YyxyOjB9LHtjTjpcInJ1bGVzXCIsYjpcIntcIixlOlwifVwiLGk6XCJbXlxcXFxzXVwiLHI6MCxjOltlLkNCQ00se2NOOlwicnVsZVwiLGI6XCJbXlxcXFxzXVwiLHJCOiEwLGU6XCI7XCIsZVc6ITAsYzpbe2NOOlwiYXR0cmlidXRlXCIsYjpcIltBLVpcXFxcX1xcXFwuXFxcXC1dK1wiLGU6XCI6XCIsZUU6ITAsaTpcIlteXFxcXHNdXCIsc3RhcnRzOntjTjpcInZhbHVlXCIsZVc6ITAsZUU6ITAsYzpbYSxlLkNTU05NLGUuUVNNLGUuQVNNLGUuQ0JDTSx7Y046XCJoZXhjb2xvclwiLGI6XCIjWzAtOUEtRmEtZl0rXCJ9LHtjTjpcImltcG9ydGFudFwiLGI6XCIhaW1wb3J0YW50XCJ9XX19XX1dfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwicnVzdFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUuaW5oZXJpdChlLkNCQ00pO3JldHVybiB0LmMucHVzaChcInNlbGZcIikse2FsaWFzZXM6W1wicnNcIl0sazp7a2V5d29yZDpcImFsaWdub2YgYXMgYmUgYm94IGJyZWFrIGNvbnN0IGNvbnRpbnVlIGNyYXRlIGRvIGVsc2UgZW51bSBleHRlcm4gZmFsc2UgZm4gZm9yIGlmIGltcGwgaW4gbGV0IGxvb3AgbWF0Y2ggbW9kIG11dCBvZmZzZXRvZiBvbmNlIHByaXYgcHJvYyBwdWIgcHVyZSByZWYgcmV0dXJuIHNlbGYgc2l6ZW9mIHN0YXRpYyBzdHJ1Y3Qgc3VwZXIgdHJhaXQgdHJ1ZSB0eXBlIHR5cGVvZiB1bnNhZmUgdW5zaXplZCB1c2UgdmlydHVhbCB3aGlsZSB5aWVsZCBpbnQgaTggaTE2IGkzMiBpNjQgdWludCB1OCB1MzIgdTY0IGZsb2F0IGYzMiBmNjQgc3RyIGNoYXIgYm9vbFwiLGJ1aWx0X2luOlwiYXNzZXJ0ISBhc3NlcnRfZXEhIGJpdGZsYWdzISBieXRlcyEgY2ZnISBjb2whIGNvbmNhdCEgY29uY2F0X2lkZW50cyEgZGVidWdfYXNzZXJ0ISBkZWJ1Z19hc3NlcnRfZXEhIGVudiEgcGFuaWMhIGZpbGUhIGZvcm1hdCEgZm9ybWF0X2FyZ3MhIGluY2x1ZGVfYmluISBpbmNsdWRlX3N0ciEgbGluZSEgbG9jYWxfZGF0YV9rZXkhIG1vZHVsZV9wYXRoISBvcHRpb25fZW52ISBwcmludCEgcHJpbnRsbiEgc2VsZWN0ISBzdHJpbmdpZnkhIHRyeSEgdW5pbXBsZW1lbnRlZCEgdW5yZWFjaGFibGUhIHZlYyEgd3JpdGUhIHdyaXRlbG4hXCJ9LGw6ZS5JUitcIiE/XCIsaTpcIjwvXCIsYzpbZS5DTENNLHQsZS5pbmhlcml0KGUuUVNNLHtpOm51bGx9KSx7Y046XCJzdHJpbmdcIixiOi9yKCMqKVwiLio/XCJcXDEoPyEjKS99LHtjTjpcInN0cmluZ1wiLGI6LydcXFxcPyh4XFx3ezJ9fHVcXHd7NH18VVxcd3s4fXwuKScvfSx7YjovJ1thLXpBLVpfXVthLXpBLVowLTlfXSovfSx7Y046XCJudW1iZXJcIixiOi9cXGIoMFt4Yl1bQS1aYS16MC05X10rfFswLTlfXSsoXFwuWzAtOV9dKyk/KFtlRV1bKy1dP1swLTlfXSspPykoW3VpZl0oOHwxNnwzMnw2NCk/KT8vLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiSzpcImZuXCIsZTpcIihcXFxcKHw8KVwiLGVFOiEwLGM6W2UuVVRNXX0se2NOOlwicHJlcHJvY2Vzc29yXCIsYjpcIiNcXFxcW1wiLGU6XCJcXFxcXVwifSx7Yks6XCJ0eXBlXCIsZTpcIig9fDwpXCIsYzpbZS5VVE1dLGk6XCJcXFxcU1wifSx7Yks6XCJ0cmFpdCBlbnVtXCIsZTpcIih7fDwpXCIsYzpbZS5VVE1dLGk6XCJcXFxcU1wifSx7YjplLklSK1wiOjpcIn0se2I6XCItPlwifV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwic3dpZnRcIixmdW5jdGlvbihlKXt2YXIgdD17a2V5d29yZDpcImNsYXNzIGRlaW5pdCBlbnVtIGV4dGVuc2lvbiBmdW5jIGltcG9ydCBpbml0IGxldCBwcm90b2NvbCBzdGF0aWMgc3RydWN0IHN1YnNjcmlwdCB0eXBlYWxpYXMgdmFyIGJyZWFrIGNhc2UgY29udGludWUgZGVmYXVsdCBkbyBlbHNlIGZhbGx0aHJvdWdoIGlmIGluIGZvciByZXR1cm4gc3dpdGNoIHdoZXJlIHdoaWxlIGFzIGR5bmFtaWNUeXBlIGlzIG5ldyBzdXBlciBzZWxmIFNlbGYgVHlwZSBfX0NPTFVNTl9fIF9fRklMRV9fIF9fRlVOQ1RJT05fXyBfX0xJTkVfXyBhc3NvY2lhdGl2aXR5IGRpZFNldCBnZXQgaW5maXggaW5vdXQgbGVmdCBtdXRhdGluZyBub25lIG5vbm11dGF0aW5nIG9wZXJhdG9yIG92ZXJyaWRlIHBvc3RmaXggcHJlY2VkZW5jZSBwcmVmaXggcmlnaHQgc2V0IHVub3duZWQgdW5vd25lZCBzYWZlIHVuc2FmZSB3ZWFrIHdpbGxTZXRcIixsaXRlcmFsOlwidHJ1ZSBmYWxzZSBuaWxcIixidWlsdF9pbjpcImFicyBhZHZhbmNlIGFsaWdub2YgYWxpZ25vZlZhbHVlIGFzc2VydCBicmlkZ2VGcm9tT2JqZWN0aXZlQyBicmlkZ2VGcm9tT2JqZWN0aXZlQ1VuY29uZGl0aW9uYWwgYnJpZGdlVG9PYmplY3RpdmVDIGJyaWRnZVRvT2JqZWN0aXZlQ1VuY29uZGl0aW9uYWwgYyBjb250YWlucyBjb3VudCBjb3VudEVsZW1lbnRzIGNvdW50TGVhZGluZ1plcm9zIGRlYnVnUHJpbnQgZGVidWdQcmludGxuIGRpc3RhbmNlIGRyb3BGaXJzdCBkcm9wTGFzdCBkdW1wIGVuY29kZUJpdHNBc1dvcmRzIGVudW1lcmF0ZSBlcXVhbCBmYWxzZSBmaWx0ZXIgZmluZCBnZXRCcmlkZ2VkT2JqZWN0aXZlQ1R5cGUgZ2V0VmFMaXN0IGluZGljZXMgaW5zZXJ0aW9uU29ydCBpc0JyaWRnZWRUb09iamVjdGl2ZUMgaXNCcmlkZ2VkVmVyYmF0aW1Ub09iamVjdGl2ZUMgaXNVbmlxdWVseVJlZmVyZW5jZWQgam9pbiBsZXhpY29ncmFwaGljYWxDb21wYXJlIG1hcCBtYXggbWF4RWxlbWVudCBtaW4gbWluRWxlbWVudCBuaWwgbnVtZXJpY0Nhc3QgcGFydGl0aW9uIHBvc2l4IHByaW50IHByaW50bG4gcXVpY2tTb3J0IHJlZHVjZSByZWZsZWN0IHJlaW50ZXJwcmV0Q2FzdCByZXZlcnNlIHJvdW5kVXBUb0FsaWdubWVudCBzaXplb2Ygc2l6ZW9mVmFsdWUgc29ydCBzcGxpdCBzdGFydHNXaXRoIHN0cmlkZW9mIHN0cmlkZW9mVmFsdWUgc3dhcCBzd2lmdCB0b1N0cmluZyB0cmFuc2NvZGUgdHJ1ZSB1bmRlcmVzdGltYXRlQ291bnQgdW5zYWZlUmVmbGVjdCB3aXRoRXh0ZW5kZWRMaWZldGltZSB3aXRoT2JqZWN0QXRQbHVzWmVybyB3aXRoVW5zYWZlUG9pbnRlciB3aXRoVW5zYWZlUG9pbnRlclRvT2JqZWN0IHdpdGhVbnNhZmVQb2ludGVycyB3aXRoVmFMaXN0XCJ9LGk9e2NOOlwidHlwZVwiLGI6XCJcXFxcYltBLVpdW1xcXFx3J10qXCIscjowfSxuPXtjTjpcImNvbW1lbnRcIixiOlwiL1xcXFwqXCIsZTpcIlxcXFwqL1wiLGM6W2UuUFdNLFwic2VsZlwiXX0scj17Y046XCJzdWJzdFwiLGI6L1xcXFxcXCgvLGU6XCJcXFxcKVwiLGs6dCxjOltdfSxzPXtjTjpcIm51bWJlclwiLGI6XCJcXFxcYihbXFxcXGRfXSsoXFxcXC5bXFxcXGRlRV9dKyk/fDB4W2EtZkEtRjAtOV9dKyhcXFxcLlthLWZBLUYwLTlwX10rKT98MGJbMDFfXSt8MG9bMC03X10rKVxcXFxiXCIscjowfSxvPWUuaW5oZXJpdChlLlFTTSx7YzpbcixlLkJFXX0pO3JldHVybiByLmM9W3NdLHtrOnQsYzpbbyxlLkNMQ00sbixpLHMse2NOOlwiZnVuY1wiLGJLOlwiZnVuY1wiLGU6XCJ7XCIsZUU6ITAsYzpbZS5pbmhlcml0KGUuVE0se2I6L1tBLVphLXokX11bMC05QS1aYS16JF9dKi8saTovXFwoL30pLHtjTjpcImdlbmVyaWNzXCIsYjovXFw8LyxlOi9cXD4vLGk6L1xcPi99LHtjTjpcInBhcmFtc1wiLGI6L1xcKC8sZTovXFwpLyxrOnQsYzpbXCJzZWxmXCIscyxvLGUuQ0JDTSx7YjpcIjpcIn1dLGk6L1tcIiddL31dLGk6L1xcW3wlL30se2NOOlwiY2xhc3NcIixrOlwic3RydWN0IHByb3RvY29sIGNsYXNzIGV4dGVuc2lvbiBlbnVtXCIsYjpcIihzdHJ1Y3R8cHJvdG9jb2x8Y2xhc3MoPyEgKGZ1bmN8dmFyKSl8ZXh0ZW5zaW9ufGVudW0pXCIsZTpcIlxcXFx7XCIsZUU6ITAsYzpbZS5pbmhlcml0KGUuVE0se2I6L1tBLVphLXokX11bMC05QS1aYS16JF9dKi99KV19LHtjTjpcInByZXByb2Nlc3NvclwiLGI6XCIoQGFzc2lnbm1lbnR8QGNsYXNzX3Byb3RvY29sfEBleHBvcnRlZHxAZmluYWx8QGxhenl8QG5vcmV0dXJufEBOU0NvcHlpbmd8QE5TTWFuYWdlZHxAb2JqY3xAb3B0aW9uYWx8QHJlcXVpcmVkfEBhdXRvX2Nsb3N1cmV8QG5vcmV0dXJufEBJQkFjdGlvbnxASUJEZXNpZ25hYmxlfEBJQkluc3BlY3RhYmxlfEBJQk91dGxldHxAaW5maXh8QHByZWZpeHxAcG9zdGZpeClcIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm5naW54XCIsZnVuY3Rpb24oZSl7dmFyIHI9e2NOOlwidmFyaWFibGVcIix2Olt7YjovXFwkXFxkKy99LHtiOi9cXCRcXHsvLGU6L30vfSx7YjpcIltcXFxcJFxcXFxAXVwiK2UuVUlSfV19LGI9e2VXOiEwLGw6XCJbYS16L19dK1wiLGs6e2J1aWx0X2luOlwib24gb2ZmIHllcyBubyB0cnVlIGZhbHNlIG5vbmUgYmxvY2tlZCBkZWJ1ZyBpbmZvIG5vdGljZSB3YXJuIGVycm9yIGNyaXQgc2VsZWN0IGJyZWFrIGxhc3QgcGVybWFuZW50IHJlZGlyZWN0IGtxdWV1ZSBydHNpZyBlcG9sbCBwb2xsIC9kZXYvcG9sbFwifSxyOjAsaTpcIj0+XCIsYzpbZS5IQ00se2NOOlwic3RyaW5nXCIsYzpbZS5CRSxyXSx2Olt7YjovXCIvLGU6L1wiL30se2I6LycvLGU6LycvfV19LHtjTjpcInVybFwiLGI6XCIoW2Etel0rKTovXCIsZTpcIlxcXFxzXCIsZVc6ITAsZUU6ITAsYzpbcl19LHtjTjpcInJlZ2V4cFwiLGM6W2UuQkUscl0sdjpbe2I6XCJcXFxcc1xcXFxeXCIsZTpcIlxcXFxzfHt8O1wiLHJFOiEwfSx7YjpcIn5cXFxcKj9cXFxccytcIixlOlwiXFxcXHN8e3w7XCIsckU6ITB9LHtiOlwiXFxcXCooXFxcXC5bYS16XFxcXC1dKykrXCJ9LHtiOlwiKFthLXpcXFxcLV0rXFxcXC4pK1xcXFwqXCJ9XX0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfSg6XFxcXGR7MSw1fSk/XFxcXGJcIn0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiXFxcXGQrW2tLbU1nR2RzaGR3eV0qXFxcXGJcIixyOjB9LHJdfTtyZXR1cm57YWxpYXNlczpbXCJuZ2lueGNvbmZcIl0sYzpbZS5IQ00se2I6ZS5VSVIrXCJcXFxcc1wiLGU6XCI7fHtcIixyQjohMCxjOlt7Y046XCJ0aXRsZVwiLGI6ZS5VSVIsc3RhcnRzOmJ9XSxyOjB9XSxpOlwiW15cXFxcc1xcXFx9XVwifX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImNzXCIsZnVuY3Rpb24oZSl7dmFyIHI9XCJhYnN0cmFjdCBhcyBiYXNlIGJvb2wgYnJlYWsgYnl0ZSBjYXNlIGNhdGNoIGNoYXIgY2hlY2tlZCBjb25zdCBjb250aW51ZSBkZWNpbWFsIGRlZmF1bHQgZGVsZWdhdGUgZG8gZG91YmxlIGVsc2UgZW51bSBldmVudCBleHBsaWNpdCBleHRlcm4gZmFsc2UgZmluYWxseSBmaXhlZCBmbG9hdCBmb3IgZm9yZWFjaCBnb3RvIGlmIGltcGxpY2l0IGluIGludCBpbnRlcmZhY2UgaW50ZXJuYWwgaXMgbG9jayBsb25nIG51bGwgb2JqZWN0IG9wZXJhdG9yIG91dCBvdmVycmlkZSBwYXJhbXMgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHJlYWRvbmx5IHJlZiBzYnl0ZSBzZWFsZWQgc2hvcnQgc2l6ZW9mIHN0YWNrYWxsb2Mgc3RhdGljIHN0cmluZyBzdHJ1Y3Qgc3dpdGNoIHRoaXMgdHJ1ZSB0cnkgdHlwZW9mIHVpbnQgdWxvbmcgdW5jaGVja2VkIHVuc2FmZSB1c2hvcnQgdXNpbmcgdmlydHVhbCB2b2xhdGlsZSB2b2lkIHdoaWxlIGFzeW5jIHByb3RlY3RlZCBwdWJsaWMgcHJpdmF0ZSBpbnRlcm5hbCBhc2NlbmRpbmcgZGVzY2VuZGluZyBmcm9tIGdldCBncm91cCBpbnRvIGpvaW4gbGV0IG9yZGVyYnkgcGFydGlhbCBzZWxlY3Qgc2V0IHZhbHVlIHZhciB3aGVyZSB5aWVsZFwiLHQ9ZS5JUitcIig8XCIrZS5JUitcIj4pP1wiO3JldHVybnthbGlhc2VzOltcImNzaGFycFwiXSxrOnIsaTovOjovLGM6W3tjTjpcImNvbW1lbnRcIixiOlwiLy8vXCIsZTpcIiRcIixyQjohMCxjOlt7Y046XCJ4bWxEb2NUYWdcIix2Olt7YjpcIi8vL1wiLHI6MH0se2I6XCI8IS0tfC0tPlwifSx7YjpcIjwvP1wiLGU6XCI+XCJ9XX1dfSxlLkNMQ00sZS5DQkNNLHtjTjpcInByZXByb2Nlc3NvclwiLGI6XCIjXCIsZTpcIiRcIixrOlwiaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcmVnaW9uIGVuZHJlZ2lvbiBwcmFnbWEgY2hlY2tzdW1cIn0se2NOOlwic3RyaW5nXCIsYjonQFwiJyxlOidcIicsYzpbe2I6J1wiXCInfV19LGUuQVNNLGUuUVNNLGUuQ05NLHtiSzpcImNsYXNzIG5hbWVzcGFjZSBpbnRlcmZhY2VcIixlOi9bezs9XS8saTovW15cXHM6XS8sYzpbZS5UTSxlLkNMQ00sZS5DQkNNXX0se2JLOlwibmV3IHJldHVybiB0aHJvdyBhd2FpdFwiLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiOlwiKFwiK3QrXCJcXFxccyspK1wiK2UuSVIrXCJcXFxccypcXFxcKFwiLHJCOiEwLGU6L1t7Oz1dLyxlRTohMCxrOnIsYzpbe2I6ZS5JUitcIlxcXFxzKlxcXFwoXCIsckI6ITAsYzpbZS5UTV0scjowfSx7Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sazpyLHI6MCxjOltlLkFTTSxlLlFTTSxlLkNOTSxlLkNCQ01dfSxlLkNMQ00sZS5DQkNNXX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm1hcmtkb3duXCIsZnVuY3Rpb24oKXtyZXR1cm57YWxpYXNlczpbXCJtZFwiLFwibWtkb3duXCIsXCJta2RcIl0sYzpbe2NOOlwiaGVhZGVyXCIsdjpbe2I6XCJeI3sxLDZ9XCIsZTpcIiRcIn0se2I6XCJeLis/XFxcXG5bPS1dezIsfSRcIn1dfSx7YjpcIjxcIixlOlwiPlwiLHNMOlwieG1sXCIscjowfSx7Y046XCJidWxsZXRcIixiOlwiXihbKistXXwoXFxcXGQrXFxcXC4pKVxcXFxzK1wifSx7Y046XCJzdHJvbmdcIixiOlwiWypfXXsyfS4rP1sqX117Mn1cIn0se2NOOlwiZW1waGFzaXNcIix2Olt7YjpcIlxcXFwqLis/XFxcXCpcIn0se2I6XCJfLis/X1wiLHI6MH1dfSx7Y046XCJibG9ja3F1b3RlXCIsYjpcIl4+XFxcXHMrXCIsZTpcIiRcIn0se2NOOlwiY29kZVwiLHY6W3tiOlwiYC4rP2BcIn0se2I6XCJeKCB7NH18XHQpXCIsZTpcIiRcIixyOjB9XX0se2NOOlwiaG9yaXpvbnRhbF9ydWxlXCIsYjpcIl5bLVxcXFwqXXszLH1cIixlOlwiJFwifSx7YjpcIlxcXFxbLis/XFxcXF1bXFxcXChcXFxcW10uKj9bXFxcXClcXFxcXV1cIixyQjohMCxjOlt7Y046XCJsaW5rX2xhYmVsXCIsYjpcIlxcXFxbXCIsZTpcIlxcXFxdXCIsZUI6ITAsckU6ITAscjowfSx7Y046XCJsaW5rX3VybFwiLGI6XCJcXFxcXVxcXFwoXCIsZTpcIlxcXFwpXCIsZUI6ITAsZUU6ITB9LHtjTjpcImxpbmtfcmVmZXJlbmNlXCIsYjpcIlxcXFxdXFxcXFtcIixlOlwiXFxcXF1cIixlQjohMCxlRTohMH1dLHI6MTB9LHtiOlwiXlxcXFxbLitcXFxcXTpcIixyQjohMCxjOlt7Y046XCJsaW5rX3JlZmVyZW5jZVwiLGI6XCJcXFxcW1wiLGU6XCJcXFxcXTpcIixlQjohMCxlRTohMCxzdGFydHM6e2NOOlwibGlua191cmxcIixlOlwiJFwifX1dfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZGlmZlwiLGZ1bmN0aW9uKCl7cmV0dXJue2FsaWFzZXM6W1wicGF0Y2hcIl0sYzpbe2NOOlwiY2h1bmtcIixyOjEwLHY6W3tiOi9eXFxAXFxAICtcXC1cXGQrLFxcZCsgK1xcK1xcZCssXFxkKyArXFxAXFxAJC99LHtiOi9eXFwqXFwqXFwqICtcXGQrLFxcZCsgK1xcKlxcKlxcKlxcKiQvfSx7YjovXlxcLVxcLVxcLSArXFxkKyxcXGQrICtcXC1cXC1cXC1cXC0kL31dfSx7Y046XCJoZWFkZXJcIix2Olt7YjovSW5kZXg6IC8sZTovJC99LHtiOi89PT09PS8sZTovPT09PT0kL30se2I6L15cXC1cXC1cXC0vLGU6LyQvfSx7YjovXlxcKnszfSAvLGU6LyQvfSx7YjovXlxcK1xcK1xcKy8sZTovJC99LHtiOi9cXCp7NX0vLGU6L1xcKns1fSQvfV19LHtjTjpcImFkZGl0aW9uXCIsYjpcIl5cXFxcK1wiLGU6XCIkXCJ9LHtjTjpcImRlbGV0aW9uXCIsYjpcIl5cXFxcLVwiLGU6XCIkXCJ9LHtjTjpcImNoYW5nZVwiLGI6XCJeXFxcXCFcIixlOlwiJFwifV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwidmltXCIsZnVuY3Rpb24oZSl7cmV0dXJue2w6L1shI0BcXHddKy8sazp7a2V5d29yZDpcIk58MCBQfDAgWHwwIGF8MCBhYiBhYmMgYWJvIGFsIGFtIGFufDAgYXIgYXJnYSBhcmdkIGFyZ2UgYXJnZG8gYXJnZyBhcmdsIGFyZ3UgYXMgYXUgYXVnIGF1biBifDAgYk4gYmEgYmFkIGJkIGJlIGJlbCBiZiBibCBibSBibiBibyBicCBiciBicmVhIGJyZWFrYSBicmVha2QgYnJlYWtsIGJybyBidWZkbyBidWZmZXJzIGJ1biBidyBjfDAgY04gY05mIGNhIGNhYmMgY2FkZGIgY2FkIGNhZGRmIGNhbCBjYXQgY2IgY2MgY2NsIGNkIGNlIGNleCBjZiBjZmlyIGNnZXRiIGNnZXRlIGNnIGNoYW5nZXMgY2hkIGNoZSBjaGVja3QgY2wgY2xhIGNsbyBjbSBjbWFwYyBjbWUgY24gY25ldyBjbmYgY25vIGNub3JlYSBjbm9yZW1lIGNvIGNvbCBjb2xvIGNvbSBjb21jIGNvbXAgY29uIGNvbmYgY29wZSBjcCBjcGYgY3EgY3IgY3MgY3N0IGN1IGN1bmEgY3VubWUgY3cgZHwwIGRlbG0gZGViIGRlYnVnZyBkZWxjIGRlbGYgZGlmIGRpZmZnIGRpZmZvIGRpZmZwIGRpZmZwdSBkaWZmcyBkaWZmdGhpcyBkaWcgZGkgZGwgZGVsbCBkaiBkbGkgZG8gZG9hdXRvYSBkcCBkciBkcyBkc3AgZXwwIGVhIGVjIGVjaG9lIGVjaG9oIGVjaG9tIGVjaG9uIGVsIGVsc2VpIGVtIGVuIGVuZGZvIGVuZGYgZW5kdCBlbmR3IGVuZSBleCBleGUgZXhpIGV4dSBmfDAgZmlsZXMgZmlsZXQgZmluIGZpbmEgZmluaSBmaXIgZml4IGZvIGZvbGRjIGZvbGRkIGZvbGRkb2MgZm9sZG8gZm9yIGZ1IGd8MCBnbyBnciBncmVwYSBndSBndiBoYSBofDAgaGVscGYgaGVscGcgaGVscHQgaGkgaGlkIGhpcyBpfDAgaWEgaWFiYyBpZiBpaiBpbCBpbSBpbWFwYyBpbWUgaW5vIGlub3JlYSBpbm9yZW1lIGludCBpcyBpc3AgaXUgaXVuYSBpdW5tZSBqfDAganUga3wwIGtlZXBhIGtlZSBrZWVwaiBsTiBsTmYgbHwwIGxhZCBsYWRkYiBsYWRkZiBsYSBsYW4gbGF0IGxiIGxjIGxjaCBsY2wgbGNzIGxlIGxlZnRhIGxldCBsZXggbGYgbGZpciBsZ2V0YiBsZ2V0ZSBsZyBsZ3IgbGdyZXBhIGxoIGxsIGxsYSBsbGkgbG1hayBsbSBsbWFwYyBsbmUgbG5ldyBsbmYgbG4gbG9hZGsgbG8gbG9jIGxvY2t2IGxvbCBsb3BlIGxwIGxwZiBsciBscyBsdCBsdSBsdWEgbHVhZCBsdWFmIGx2IGx2aW1ncmVwYSBsdyBtfDAgbWEgbWFrIG1hcCBtYXBjIG1hcmtzIG1hdCBtZSBtZW51dCBtZXMgbWsgbWtzIG1rc3AgbWt2IG1rdmllIG1vZCBteiBtemYgbmJjIG5iIG5icyBufDAgbmV3IG5tIG5tYXBjIG5tZSBubiBubm9yZW1lIG5vYSBubyBub2ggbm9yZWEgbm9yZW1lIG5vcm0gbnUgbnVuIG51bm1lIG9sIG98MCBvbSBvbWFwYyBvbWUgb24gb25vIG9ub3JlbWUgb3B0IG91IG91bm1lIG93IHB8MCBwcm9mZCBwcm9mIHBybyBwcm9tcHRyIHBjIHBlZCBwZSBwZXJsZCBwbyBwb3B1IHBwIHByZSBwcmV2IHBzIHB0IHB0TiBwdGYgcHRqIHB0bCBwdG4gcHRwIHB0ciBwdHMgcHUgcHcgcHkzIHB5dGhvbjMgcHkzZCBweTNmIHB5IHB5ZCBweWYgcXwwIHF1aXRhIHFhIHJ8MCByZWMgcmVkIHJlZGkgcmVkciByZWRyYXdzIHJlZyByZXMgcmV0IHJldHUgcmV3IHJpIHJpZ2h0YiBydWIgcnVieWQgcnVieWYgcnVuZCBydSBydiBzfDAgc04gc2FuIHNhIHNhbCBzYXYgc2Igc2JOIHNiYSBzYmYgc2JsIHNibSBzYm4gc2JwIHNiciBzY3JpcCBzY3JpcHRlIHNjcyBzZSBzZXRmIHNldGcgc2V0bCBzZiBzZmlyIHNoIHNpbSBzaWcgc2lsIHNsIHNsYSBzbSBzbWFwIHNtYXBjIHNtZSBzbiBzbmkgc25vIHNub3Igc25vcmVtZSBzb3Igc28gc3BlbGxkIHNwZSBzcGVsbGkgc3BlbGxyIHNwZWxsdSBzcGVsbHcgc3Agc3ByIHNyZSBzdCBzdGEgc3RhcnRnIHN0YXJ0ciBzdGFyIHN0b3BpIHN0aiBzdHMgc3VuIHN1bm0gc3VubWUgc3VzIHN2IHN3IHN5IHN5bnRpIHN5bmMgdHwwIHROIHRhYk4gdGFiYyB0YWJkbyB0YWJlIHRhYmYgdGFiZmlyIHRhYmwgdGFibSB0YWJuZXcgdGFibiB0YWJvIHRhYnAgdGFiciB0YWJzIHRhYiB0YSB0YWdzIHRjIHRjbGQgdGNsZiB0ZSB0ZiB0aCB0aiB0bCB0bSB0biB0byB0cCB0ciB0cnkgdHMgdHUgdXwwIHVuZG9qIHVuZG9sIHVuYSB1bmggdW5sIHVubG8gdW5tIHVubWUgdW5zIHVwIHZ8MCB2ZSB2ZXJiIHZlcnQgdmltIHZpbWdyZXBhIHZpIHZpdSB2aWUgdm0gdm1hcGMgdm1lIHZuZSB2biB2bm9yZW1lIHZzIHZ1IHZ1bm1lIHdpbmRvIHd8MCB3TiB3YSB3aCB3aSB3aW5jIHdpbnAgd24gd3Agd3Egd3FhIHdzIHd1IHd2IHh8MCB4YSB4bWFwYyB4bSB4bWUgeG4geG5vcmVtZSB4dSB4dW5tZSB5fDAgenwwIH4gTmV4dCBQcmludCBhcHBlbmQgYWJicmV2aWF0ZSBhYmNsZWFyIGFib3ZlbGVmdCBhbGwgYW1lbnUgYW5vcmVtZW51IGFyZ3MgYXJnYWRkIGFyZ2RlbGV0ZSBhcmdlZGl0IGFyZ2dsb2JhbCBhcmdsb2NhbCBhcmd1bWVudCBhc2NpaSBhdXRvY21kIGF1Z3JvdXAgYXVubWVudSBidWZmZXIgYk5leHQgYmFsbCBiYWRkIGJkZWxldGUgYmVoYXZlIGJlbG93cmlnaHQgYmZpcnN0IGJsYXN0IGJtb2RpZmllZCBibmV4dCBib3RyaWdodCBicHJldmlvdXMgYnJld2luZCBicmVhayBicmVha2FkZCBicmVha2RlbCBicmVha2xpc3QgYnJvd3NlIGJ1bmxvYWQgYndpcGVvdXQgY2hhbmdlIGNOZXh0IGNOZmlsZSBjYWJicmV2IGNhYmNsZWFyIGNhZGRidWZmZXIgY2FkZGV4cHIgY2FkZGZpbGUgY2FsbCBjYXRjaCBjYnVmZmVyIGNjbG9zZSBjZW50ZXIgY2V4cHIgY2ZpbGUgY2ZpcnN0IGNnZXRidWZmZXIgY2dldGV4cHIgY2dldGZpbGUgY2hkaXIgY2hlY2twYXRoIGNoZWNrdGltZSBjbGlzdCBjbGFzdCBjbG9zZSBjbWFwIGNtYXBjbGVhciBjbWVudSBjbmV4dCBjbmV3ZXIgY25maWxlIGNub3JlbWFwIGNub3JlYWJicmV2IGNub3JlbWVudSBjb3B5IGNvbGRlciBjb2xvcnNjaGVtZSBjb21tYW5kIGNvbWNsZWFyIGNvbXBpbGVyIGNvbnRpbnVlIGNvbmZpcm0gY29wZW4gY3ByZXZpb3VzIGNwZmlsZSBjcXVpdCBjcmV3aW5kIGNzY29wZSBjc3RhZyBjdW5tYXAgY3VuYWJicmV2IGN1bm1lbnUgY3dpbmRvdyBkZWxldGUgZGVsbWFya3MgZGVidWcgZGVidWdncmVlZHkgZGVsY29tbWFuZCBkZWxmdW5jdGlvbiBkaWZmdXBkYXRlIGRpZmZnZXQgZGlmZm9mZiBkaWZmcGF0Y2ggZGlmZnB1dCBkaWZmc3BsaXQgZGlncmFwaHMgZGlzcGxheSBkZWxldGVsIGRqdW1wIGRsaXN0IGRvYXV0b2NtZCBkb2F1dG9hbGwgZGVsZXRlcCBkcm9wIGRzZWFyY2ggZHNwbGl0IGVkaXQgZWFybGllciBlY2hvIGVjaG9lcnIgZWNob2hsIGVjaG9tc2cgZWxzZSBlbHNlaWYgZW1lbnUgZW5kaWYgZW5kZm9yIGVuZGZ1bmN0aW9uIGVuZHRyeSBlbmR3aGlsZSBlbmV3IGV4ZWN1dGUgZXhpdCBleHVzYWdlIGZpbGUgZmlsZXR5cGUgZmluZCBmaW5hbGx5IGZpbmlzaCBmaXJzdCBmaXhkZWwgZm9sZCBmb2xkY2xvc2UgZm9sZGRvb3BlbiBmb2xkZG9jbG9zZWQgZm9sZG9wZW4gZnVuY3Rpb24gZ2xvYmFsIGdvdG8gZ3JlcCBncmVwYWRkIGd1aSBndmltIGhhcmRjb3B5IGhlbHAgaGVscGZpbmQgaGVscGdyZXAgaGVscHRhZ3MgaGlnaGxpZ2h0IGhpZGUgaGlzdG9yeSBpbnNlcnQgaWFiYnJldiBpYWJjbGVhciBpanVtcCBpbGlzdCBpbWFwIGltYXBjbGVhciBpbWVudSBpbm9yZW1hcCBpbm9yZWFiYnJldiBpbm9yZW1lbnUgaW50cm8gaXNlYXJjaCBpc3BsaXQgaXVubWFwIGl1bmFiYnJldiBpdW5tZW51IGpvaW4ganVtcHMga2VlcGFsdCBrZWVwbWFya3Mga2VlcGp1bXBzIGxOZXh0IGxOZmlsZSBsaXN0IGxhZGRleHByIGxhZGRidWZmZXIgbGFkZGZpbGUgbGFzdCBsYW5ndWFnZSBsYXRlciBsYnVmZmVyIGxjZCBsY2hkaXIgbGNsb3NlIGxjc2NvcGUgbGVmdCBsZWZ0YWJvdmUgbGV4cHIgbGZpbGUgbGZpcnN0IGxnZXRidWZmZXIgbGdldGV4cHIgbGdldGZpbGUgbGdyZXAgbGdyZXBhZGQgbGhlbHBncmVwIGxsYXN0IGxsaXN0IGxtYWtlIGxtYXAgbG1hcGNsZWFyIGxuZXh0IGxuZXdlciBsbmZpbGUgbG5vcmVtYXAgbG9hZGtleW1hcCBsb2FkdmlldyBsb2NrbWFya3MgbG9ja3ZhciBsb2xkZXIgbG9wZW4gbHByZXZpb3VzIGxwZmlsZSBscmV3aW5kIGx0YWcgbHVubWFwIGx1YWRvIGx1YWZpbGUgbHZpbWdyZXAgbHZpbWdyZXBhZGQgbHdpbmRvdyBtb3ZlIG1hcmsgbWFrZSBtYXBjbGVhciBtYXRjaCBtZW51IG1lbnV0cmFuc2xhdGUgbWVzc2FnZXMgbWtleHJjIG1rc2Vzc2lvbiBta3NwZWxsIG1rdmltcmMgbWt2aWV3IG1vZGUgbXpzY2hlbWUgbXpmaWxlIG5iY2xvc2UgbmJrZXkgbmJzYXJ0IG5leHQgbm1hcCBubWFwY2xlYXIgbm1lbnUgbm5vcmVtYXAgbm5vcmVtZW51IG5vYXV0b2NtZCBub3JlbWFwIG5vaGxzZWFyY2ggbm9yZWFiYnJldiBub3JlbWVudSBub3JtYWwgbnVtYmVyIG51bm1hcCBudW5tZW51IG9sZGZpbGVzIG9wZW4gb21hcCBvbWFwY2xlYXIgb21lbnUgb25seSBvbm9yZW1hcCBvbm9yZW1lbnUgb3B0aW9ucyBvdW5tYXAgb3VubWVudSBvd25zeW50YXggcHJpbnQgcHJvZmRlbCBwcm9maWxlIHByb21wdGZpbmQgcHJvbXB0cmVwbCBwY2xvc2UgcGVkaXQgcGVybCBwZXJsZG8gcG9wIHBvcHVwIHBwb3AgcHJlc2VydmUgcHJldmlvdXMgcHNlYXJjaCBwdGFnIHB0TmV4dCBwdGZpcnN0IHB0anVtcCBwdGxhc3QgcHRuZXh0IHB0cHJldmlvdXMgcHRyZXdpbmQgcHRzZWxlY3QgcHV0IHB3ZCBweTNkbyBweTNmaWxlIHB5dGhvbiBweWRvIHB5ZmlsZSBxdWl0IHF1aXRhbGwgcWFsbCByZWFkIHJlY292ZXIgcmVkbyByZWRpciByZWRyYXcgcmVkcmF3c3RhdHVzIHJlZ2lzdGVycyByZXNpemUgcmV0YWIgcmV0dXJuIHJld2luZCByaWdodCByaWdodGJlbG93IHJ1YnkgcnVieWRvIHJ1YnlmaWxlIHJ1bmRvIHJ1bnRpbWUgcnZpbWluZm8gc3Vic3RpdHV0ZSBzTmV4dCBzYW5kYm94IHNhcmd1bWVudCBzYWxsIHNhdmVhcyBzYnVmZmVyIHNiTmV4dCBzYmFsbCBzYmZpcnN0IHNibGFzdCBzYm1vZGlmaWVkIHNibmV4dCBzYnByZXZpb3VzIHNicmV3aW5kIHNjcmlwdG5hbWVzIHNjcmlwdGVuY29kaW5nIHNjc2NvcGUgc2V0IHNldGZpbGV0eXBlIHNldGdsb2JhbCBzZXRsb2NhbCBzZmluZCBzZmlyc3Qgc2hlbGwgc2ltYWx0IHNpZ24gc2lsZW50IHNsZWVwIHNsYXN0IHNtYWdpYyBzbWFwY2xlYXIgc21lbnUgc25leHQgc25pZmYgc25vbWFnaWMgc25vcmVtYXAgc25vcmVtZW51IHNvcnQgc291cmNlIHNwZWxsZHVtcCBzcGVsbGdvb2Qgc3BlbGxpbmZvIHNwZWxscmVwYWxsIHNwZWxsdW5kbyBzcGVsbHdyb25nIHNwbGl0IHNwcmV2aW91cyBzcmV3aW5kIHN0b3Agc3RhZyBzdGFydGdyZXBsYWNlIHN0YXJ0cmVwbGFjZSBzdGFydGluc2VydCBzdG9waW5zZXJ0IHN0anVtcCBzdHNlbGVjdCBzdW5oaWRlIHN1bm1hcCBzdW5tZW51IHN1c3BlbmQgc3ZpZXcgc3dhcG5hbWUgc3ludGF4IHN5bnRpbWUgc3luY2JpbmQgdE5leHQgdGFiTmV4dCB0YWJjbG9zZSB0YWJlZGl0IHRhYmZpbmQgdGFiZmlyc3QgdGFibGFzdCB0YWJtb3ZlIHRhYm5leHQgdGFib25seSB0YWJwcmV2aW91cyB0YWJyZXdpbmQgdGFnIHRjbCB0Y2xkbyB0Y2xmaWxlIHRlYXJvZmYgdGZpcnN0IHRocm93IHRqdW1wIHRsYXN0IHRtZW51IHRuZXh0IHRvcGxlZnQgdHByZXZpb3VzIHRyZXdpbmQgdHNlbGVjdCB0dW5tZW51IHVuZG8gdW5kb2pvaW4gdW5kb2xpc3QgdW5hYmJyZXZpYXRlIHVuaGlkZSB1bmxldCB1bmxvY2t2YXIgdW5tYXAgdW5tZW51IHVuc2lsZW50IHVwZGF0ZSB2Z2xvYmFsIHZlcnNpb24gdmVyYm9zZSB2ZXJ0aWNhbCB2aW1ncmVwIHZpbWdyZXBhZGQgdmlzdWFsIHZpdXNhZ2UgdmlldyB2bWFwIHZtYXBjbGVhciB2bWVudSB2bmV3IHZub3JlbWFwIHZub3JlbWVudSB2c3BsaXQgdnVubWFwIHZ1bm1lbnUgd3JpdGUgd05leHQgd2FsbCB3aGlsZSB3aW5zaXplIHdpbmNtZCB3aW5wb3Mgd25leHQgd3ByZXZpb3VzIHdxYWxsIHdzdmVyYiB3dW5kbyB3dmltaW5mbyB4aXQgeGFsbCB4bWFwY2xlYXIgeG1hcCB4bWVudSB4bm9yZW1hcCB4bm9yZW1lbnUgeHVubWFwIHh1bm1lbnUgeWFua1wiLGJ1aWx0X2luOlwiYWJzIGFjb3MgYWRkIGFuZCBhcHBlbmQgYXJnYyBhcmdpZHggYXJndiBhc2luIGF0YW4gYXRhbjIgYnJvd3NlIGJyb3dzZWRpciBidWZleGlzdHMgYnVmbGlzdGVkIGJ1ZmxvYWRlZCBidWZuYW1lIGJ1Zm5yIGJ1Zndpbm5yIGJ5dGUybGluZSBieXRlaWR4IGNhbGwgY2VpbCBjaGFuZ2VuciBjaGFyMm5yIGNpbmRlbnQgY2xlYXJtYXRjaGVzIGNvbCBjb21wbGV0ZSBjb21wbGV0ZV9hZGQgY29tcGxldGVfY2hlY2sgY29uZmlybSBjb3B5IGNvcyBjb3NoIGNvdW50IGNzY29wZV9jb25uZWN0aW9uIGN1cnNvciBkZWVwY29weSBkZWxldGUgZGlkX2ZpbGV0eXBlIGRpZmZfZmlsbGVyIGRpZmZfaGxJRCBlbXB0eSBlc2NhcGUgZXZhbCBldmVudGhhbmRsZXIgZXhlY3V0YWJsZSBleGlzdHMgZXhwIGV4cGFuZCBleHRlbmQgZmVlZGtleXMgZmlsZXJlYWRhYmxlIGZpbGV3cml0YWJsZSBmaWx0ZXIgZmluZGRpciBmaW5kZmlsZSBmbG9hdDJuciBmbG9vciBmbW9kIGZuYW1lZXNjYXBlIGZuYW1lbW9kaWZ5IGZvbGRjbG9zZWQgZm9sZGNsb3NlZGVuZCBmb2xkbGV2ZWwgZm9sZHRleHQgZm9sZHRleHRyZXN1bHQgZm9yZWdyb3VuZCBmdW5jdGlvbiBnYXJiYWdlY29sbGVjdCBnZXQgZ2V0YnVmbGluZSBnZXRidWZ2YXIgZ2V0Y2hhciBnZXRjaGFybW9kIGdldGNtZGxpbmUgZ2V0Y21kcG9zIGdldGNtZHR5cGUgZ2V0Y3dkIGdldGZvbnRuYW1lIGdldGZwZXJtIGdldGZzaXplIGdldGZ0aW1lIGdldGZ0eXBlIGdldGxpbmUgZ2V0bG9jbGlzdCBnZXRtYXRjaGVzIGdldHBpZCBnZXRwb3MgZ2V0cWZsaXN0IGdldHJlZyBnZXRyZWd0eXBlIGdldHRhYnZhciBnZXR0YWJ3aW52YXIgZ2V0d2lucG9zeCBnZXR3aW5wb3N5IGdldHdpbnZhciBnbG9iIGdsb2JwYXRoIGhhcyBoYXNfa2V5IGhhc2xvY2FsZGlyIGhhc21hcHRvIGhpc3RhZGQgaGlzdGRlbCBoaXN0Z2V0IGhpc3RuciBobGV4aXN0cyBobElEIGhvc3RuYW1lIGljb252IGluZGVudCBpbmRleCBpbnB1dCBpbnB1dGRpYWxvZyBpbnB1dGxpc3QgaW5wdXRyZXN0b3JlIGlucHV0c2F2ZSBpbnB1dHNlY3JldCBpbnNlcnQgaW52ZXJ0IGlzZGlyZWN0b3J5IGlzbG9ja2VkIGl0ZW1zIGpvaW4ga2V5cyBsZW4gbGliY2FsbCBsaWJjYWxsbnIgbGluZSBsaW5lMmJ5dGUgbGlzcGluZGVudCBsb2NhbHRpbWUgbG9nIGxvZzEwIGx1YWV2YWwgbWFwIG1hcGFyZyBtYXBjaGVjayBtYXRjaCBtYXRjaGFkZCBtYXRjaGFyZyBtYXRjaGRlbGV0ZSBtYXRjaGVuZCBtYXRjaGxpc3QgbWF0Y2hzdHIgbWF4IG1pbiBta2RpciBtb2RlIG16ZXZhbCBuZXh0bm9uYmxhbmsgbnIyY2hhciBvciBwYXRoc2hvcnRlbiBwb3cgcHJldm5vbmJsYW5rIHByaW50ZiBwdW12aXNpYmxlIHB5M2V2YWwgcHlldmFsIHJhbmdlIHJlYWRmaWxlIHJlbHRpbWUgcmVsdGltZXN0ciByZW1vdGVfZXhwciByZW1vdGVfZm9yZWdyb3VuZCByZW1vdGVfcGVlayByZW1vdGVfcmVhZCByZW1vdGVfc2VuZCByZW1vdmUgcmVuYW1lIHJlcGVhdCByZXNvbHZlIHJldmVyc2Ugcm91bmQgc2NyZWVuYXR0ciBzY3JlZW5jaGFyIHNjcmVlbmNvbCBzY3JlZW5yb3cgc2VhcmNoIHNlYXJjaGRlY2wgc2VhcmNocGFpciBzZWFyY2hwYWlycG9zIHNlYXJjaHBvcyBzZXJ2ZXIyY2xpZW50IHNlcnZlcmxpc3Qgc2V0YnVmdmFyIHNldGNtZHBvcyBzZXRsaW5lIHNldGxvY2xpc3Qgc2V0bWF0Y2hlcyBzZXRwb3Mgc2V0cWZsaXN0IHNldHJlZyBzZXR0YWJ2YXIgc2V0dGFid2ludmFyIHNldHdpbnZhciBzaGEyNTYgc2hlbGxlc2NhcGUgc2hpZnR3aWR0aCBzaW1wbGlmeSBzaW4gc2luaCBzb3J0IHNvdW5kZm9sZCBzcGVsbGJhZHdvcmQgc3BlbGxzdWdnZXN0IHNwbGl0IHNxcnQgc3RyMmZsb2F0IHN0cjJuciBzdHJjaGFycyBzdHJkaXNwbGF5d2lkdGggc3RyZnRpbWUgc3RyaWR4IHN0cmluZyBzdHJsZW4gc3RycGFydCBzdHJyaWR4IHN0cnRyYW5zIHN0cndpZHRoIHN1Ym1hdGNoIHN1YnN0aXR1dGUgc3luY29uY2VhbGVkIHN5bklEIHN5bklEYXR0ciBzeW5JRHRyYW5zIHN5bnN0YWNrIHN5c3RlbSB0YWJwYWdlYnVmbGlzdCB0YWJwYWdlbnIgdGFicGFnZXdpbm5yIHRhZ2ZpbGVzIHRhZ2xpc3QgdGFuIHRhbmggdGVtcG5hbWUgdG9sb3dlciB0b3VwcGVyIHRyIHRydW5jIHR5cGUgdW5kb2ZpbGUgdW5kb3RyZWUgdmFsdWVzIHZpcnRjb2wgdmlzdWFsbW9kZSB3aWxkbWVudW1vZGUgd2luYnVmbnIgd2luY29sIHdpbmhlaWdodCB3aW5saW5lIHdpbm5yIHdpbnJlc3RjbWQgd2lucmVzdHZpZXcgd2luc2F2ZXZpZXcgd2lud2lkdGggd3JpdGVmaWxlIHhvclwifSxpOi9bezpdLyxjOltlLk5NLGUuQVNNLHtjTjpcInN0cmluZ1wiLGI6L1wiKChcXFxcXCIpfFteXCJcXG5dKSooXCJ8XFxuKS99LHtjTjpcInZhcmlhYmxlXCIsYjovW2J3dGdsc2F2XTpbXFx3XFxkX10qL30se2NOOlwiZnVuY3Rpb25cIixiSzpcImZ1bmN0aW9uIGZ1bmN0aW9uIVwiLGU6XCIkXCIscjowLGM6W2UuVE0se2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCJ9XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInR5cGVzY3JpcHRcIixmdW5jdGlvbihlKXtyZXR1cm57YWxpYXNlczpbXCJ0c1wiXSxrOntrZXl3b3JkOlwiaW4gaWYgZm9yIHdoaWxlIGZpbmFsbHkgdmFyIG5ldyBmdW5jdGlvbnwwIGRvIHJldHVybiB2b2lkIGVsc2UgYnJlYWsgY2F0Y2ggaW5zdGFuY2VvZiB3aXRoIHRocm93IGNhc2UgZGVmYXVsdCB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSBsZXQgeWllbGQgY29uc3QgY2xhc3MgcHVibGljIHByaXZhdGUgZ2V0IHNldCBzdXBlciBpbnRlcmZhY2UgZXh0ZW5kc3N0YXRpYyBjb25zdHJ1Y3RvciBpbXBsZW1lbnRzIGVudW0gZXhwb3J0IGltcG9ydCBkZWNsYXJlXCIsbGl0ZXJhbDpcInRydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgTmFOIEluZmluaXR5XCIsYnVpbHRfaW46XCJldmFsIGlzRmluaXRlIGlzTmFOIHBhcnNlRmxvYXQgcGFyc2VJbnQgZGVjb2RlVVJJIGRlY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUkkgZW5jb2RlVVJJQ29tcG9uZW50IGVzY2FwZSB1bmVzY2FwZSBPYmplY3QgRnVuY3Rpb24gQm9vbGVhbiBFcnJvciBFdmFsRXJyb3IgSW50ZXJuYWxFcnJvciBSYW5nZUVycm9yIFJlZmVyZW5jZUVycm9yIFN0b3BJdGVyYXRpb24gU3ludGF4RXJyb3IgVHlwZUVycm9yIFVSSUVycm9yIE51bWJlciBNYXRoIERhdGUgU3RyaW5nIFJlZ0V4cCBBcnJheSBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBJbnQ4QXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBBcnJheUJ1ZmZlciBEYXRhVmlldyBKU09OIEludGwgYXJndW1lbnRzIHJlcXVpcmUgbW9kdWxlIGNvbnNvbGUgd2luZG93IGRvY3VtZW50IGFueSBudW1iZXIgYm9vbGVhbiBzdHJpbmcgdm9pZFwifSxjOlt7Y046XCJwaVwiLGI6L15cXHMqKCd8XCIpdXNlIHN0cmljdCgnfFwiKS8scjowfSxlLkFTTSxlLlFTTSxlLkNMQ00sZS5DQkNNLGUuQ05NLHtiOlwiKFwiK2UuUlNSK1wifFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKlwiLGs6XCJyZXR1cm4gdGhyb3cgY2FzZVwiLGM6W2UuQ0xDTSxlLkNCQ00sZS5STSx7YjovPC8sZTovPjsvLHI6MCxzTDpcInhtbFwifV0scjowfSx7Y046XCJmdW5jdGlvblwiLGJLOlwiZnVuY3Rpb25cIixlOi9cXHsvLGVFOiEwLGM6W2UuaW5oZXJpdChlLlRNLHtiOi9bQS1aYS16JF9dWzAtOUEtWmEteiRfXSovfSkse2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGM6W2UuQ0xDTSxlLkNCQ01dLGk6L1tcIidcXChdL31dLGk6L1xcW3wlLyxyOjB9LHtjTjpcImNvbnN0cnVjdG9yXCIsYks6XCJjb25zdHJ1Y3RvclwiLGU6L1xcey8sZUU6ITAscjoxMH0se2NOOlwibW9kdWxlXCIsYks6XCJtb2R1bGVcIixlOi9cXHsvLGVFOiEwfSx7Y046XCJpbnRlcmZhY2VcIixiSzpcImludGVyZmFjZVwiLGU6L1xcey8sZUU6ITB9LHtiOi9cXCRbKC5dL30se2I6XCJcXFxcLlwiK2UuSVIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiamF2YXNjcmlwdFwiLGZ1bmN0aW9uKHIpe3JldHVybnthbGlhc2VzOltcImpzXCJdLGs6e2tleXdvcmQ6XCJpbiBpZiBmb3Igd2hpbGUgZmluYWxseSB2YXIgbmV3IGZ1bmN0aW9uIGRvIHJldHVybiB2b2lkIGVsc2UgYnJlYWsgY2F0Y2ggaW5zdGFuY2VvZiB3aXRoIHRocm93IGNhc2UgZGVmYXVsdCB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSBsZXQgeWllbGQgY29uc3QgY2xhc3NcIixsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsIHVuZGVmaW5lZCBOYU4gSW5maW5pdHlcIixidWlsdF9pbjpcImV2YWwgaXNGaW5pdGUgaXNOYU4gcGFyc2VGbG9hdCBwYXJzZUludCBkZWNvZGVVUkkgZGVjb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSSBlbmNvZGVVUklDb21wb25lbnQgZXNjYXBlIHVuZXNjYXBlIE9iamVjdCBGdW5jdGlvbiBCb29sZWFuIEVycm9yIEV2YWxFcnJvciBJbnRlcm5hbEVycm9yIFJhbmdlRXJyb3IgUmVmZXJlbmNlRXJyb3IgU3RvcEl0ZXJhdGlvbiBTeW50YXhFcnJvciBUeXBlRXJyb3IgVVJJRXJyb3IgTnVtYmVyIE1hdGggRGF0ZSBTdHJpbmcgUmVnRXhwIEFycmF5IEZsb2F0MzJBcnJheSBGbG9hdDY0QXJyYXkgSW50MTZBcnJheSBJbnQzMkFycmF5IEludDhBcnJheSBVaW50MTZBcnJheSBVaW50MzJBcnJheSBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IEFycmF5QnVmZmVyIERhdGFWaWV3IEpTT04gSW50bCBhcmd1bWVudHMgcmVxdWlyZSBtb2R1bGUgY29uc29sZSB3aW5kb3cgZG9jdW1lbnRcIn0sYzpbe2NOOlwicGlcIixyOjEwLHY6W3tiOi9eXFxzKignfFwiKXVzZSBzdHJpY3QoJ3xcIikvfSx7YjovXlxccyooJ3xcIil1c2UgYXNtKCd8XCIpL31dfSxyLkFTTSxyLlFTTSxyLkNMQ00sci5DQkNNLHIuQ05NLHtiOlwiKFwiK3IuUlNSK1wifFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKlwiLGs6XCJyZXR1cm4gdGhyb3cgY2FzZVwiLGM6W3IuQ0xDTSxyLkNCQ00sci5STSx7YjovPC8sZTovPjsvLHI6MCxzTDpcInhtbFwifV0scjowfSx7Y046XCJmdW5jdGlvblwiLGJLOlwiZnVuY3Rpb25cIixlOi9cXHsvLGVFOiEwLGM6W3IuaW5oZXJpdChyLlRNLHtiOi9bQS1aYS16JF9dWzAtOUEtWmEteiRfXSovfSkse2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGM6W3IuQ0xDTSxyLkNCQ01dLGk6L1tcIidcXChdL31dLGk6L1xcW3wlL30se2I6L1xcJFsoLl0vfSx7YjpcIlxcXFwuXCIrci5JUixyOjB9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJsdWFcIixmdW5jdGlvbihlKXt2YXIgdD1cIlxcXFxbPSpcXFxcW1wiLGE9XCJcXFxcXT0qXFxcXF1cIixyPXtiOnQsZTphLGM6W1wic2VsZlwiXX0sbj1be2NOOlwiY29tbWVudFwiLGI6XCItLSg/IVwiK3QrXCIpXCIsZTpcIiRcIn0se2NOOlwiY29tbWVudFwiLGI6XCItLVwiK3QsZTphLGM6W3JdLHI6MTB9XTtyZXR1cm57bDplLlVJUixrOntrZXl3b3JkOlwiYW5kIGJyZWFrIGRvIGVsc2UgZWxzZWlmIGVuZCBmYWxzZSBmb3IgaWYgaW4gbG9jYWwgbmlsIG5vdCBvciByZXBlYXQgcmV0dXJuIHRoZW4gdHJ1ZSB1bnRpbCB3aGlsZVwiLGJ1aWx0X2luOlwiX0cgX1ZFUlNJT04gYXNzZXJ0IGNvbGxlY3RnYXJiYWdlIGRvZmlsZSBlcnJvciBnZXRmZW52IGdldG1ldGF0YWJsZSBpcGFpcnMgbG9hZCBsb2FkZmlsZSBsb2Fkc3RyaW5nIG1vZHVsZSBuZXh0IHBhaXJzIHBjYWxsIHByaW50IHJhd2VxdWFsIHJhd2dldCByYXdzZXQgcmVxdWlyZSBzZWxlY3Qgc2V0ZmVudiBzZXRtZXRhdGFibGUgdG9udW1iZXIgdG9zdHJpbmcgdHlwZSB1bnBhY2sgeHBjYWxsIGNvcm91dGluZSBkZWJ1ZyBpbyBtYXRoIG9zIHBhY2thZ2Ugc3RyaW5nIHRhYmxlXCJ9LGM6bi5jb25jYXQoW3tjTjpcImZ1bmN0aW9uXCIsYks6XCJmdW5jdGlvblwiLGU6XCJcXFxcKVwiLGM6W2UuaW5oZXJpdChlLlRNLHtiOlwiKFtfYS16QS1aXVxcXFx3KlxcXFwuKSooW19hLXpBLVpdXFxcXHcqOik/W19hLXpBLVpdXFxcXHcqXCJ9KSx7Y046XCJwYXJhbXNcIixiOlwiXFxcXChcIixlVzohMCxjOm59XS5jb25jYXQobil9LGUuQ05NLGUuQVNNLGUuUVNNLHtjTjpcInN0cmluZ1wiLGI6dCxlOmEsYzpbcl0scjo1fV0pfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImRqYW5nb1wiLGZ1bmN0aW9uKCl7dmFyIGU9e2NOOlwiZmlsdGVyXCIsYjovXFx8W0EtWmEtel0rXFw6Py8sazpcInRydW5jYXRld29yZHMgcmVtb3ZldGFncyBsaW5lYnJlYWtzYnIgeWVzbm8gZ2V0X2RpZ2l0IHRpbWVzaW5jZSByYW5kb20gc3RyaXB0YWdzIGZpbGVzaXplZm9ybWF0IGVzY2FwZSBsaW5lYnJlYWtzIGxlbmd0aF9pcyBsanVzdCByanVzdCBjdXQgdXJsaXplIGZpeF9hbXBlcnNhbmRzIHRpdGxlIGZsb2F0Zm9ybWF0IGNhcGZpcnN0IHBwcmludCBkaXZpc2libGVieSBhZGQgbWFrZV9saXN0IHVub3JkZXJlZF9saXN0IHVybGVuY29kZSB0aW1ldW50aWwgdXJsaXpldHJ1bmMgd29yZGNvdW50IHN0cmluZ2Zvcm1hdCBsaW5lbnVtYmVycyBzbGljZSBkYXRlIGRpY3Rzb3J0IGRpY3Rzb3J0cmV2ZXJzZWQgZGVmYXVsdF9pZl9ub25lIHBsdXJhbGl6ZSBsb3dlciBqb2luIGNlbnRlciBkZWZhdWx0IHRydW5jYXRld29yZHNfaHRtbCB1cHBlciBsZW5ndGggcGhvbmUybnVtZXJpYyB3b3Jkd3JhcCB0aW1lIGFkZHNsYXNoZXMgc2x1Z2lmeSBmaXJzdCBlc2NhcGVqcyBmb3JjZV9lc2NhcGUgaXJpZW5jb2RlIGxhc3Qgc2FmZSBzYWZlc2VxIHRydW5jYXRlY2hhcnMgbG9jYWxpemUgdW5sb2NhbGl6ZSBsb2NhbHRpbWUgdXRjIHRpbWV6b25lXCIsYzpbe2NOOlwiYXJndW1lbnRcIixiOi9cIi8sZTovXCIvfSx7Y046XCJhcmd1bWVudFwiLGI6LycvLGU6LycvfV19O3JldHVybnthbGlhc2VzOltcImppbmphXCJdLGNJOiEwLHNMOlwieG1sXCIsc3ViTGFuZ3VhZ2VNb2RlOlwiY29udGludW91c1wiLGM6W3tjTjpcImNvbW1lbnRcIixiOi9cXHslXFxzKmNvbW1lbnRcXHMqJX0vLGU6L1xceyVcXHMqZW5kY29tbWVudFxccyolfS99LHtjTjpcImNvbW1lbnRcIixiOi9cXHsjLyxlOi8jfS99LHtjTjpcInRlbXBsYXRlX3RhZ1wiLGI6L1xceyUvLGU6LyV9LyxrOlwiY29tbWVudCBlbmRjb21tZW50IGxvYWQgdGVtcGxhdGV0YWcgaWZjaGFuZ2VkIGVuZGlmY2hhbmdlZCBpZiBlbmRpZiBmaXJzdG9mIGZvciBlbmRmb3IgaW4gaWZub3RlcXVhbCBlbmRpZm5vdGVxdWFsIHdpZHRocmF0aW8gZXh0ZW5kcyBpbmNsdWRlIHNwYWNlbGVzcyBlbmRzcGFjZWxlc3MgcmVncm91cCBieSBhcyBpZmVxdWFsIGVuZGlmZXF1YWwgc3NpIG5vdyB3aXRoIGN5Y2xlIHVybCBmaWx0ZXIgZW5kZmlsdGVyIGRlYnVnIGJsb2NrIGVuZGJsb2NrIGVsc2UgYXV0b2VzY2FwZSBlbmRhdXRvZXNjYXBlIGNzcmZfdG9rZW4gZW1wdHkgZWxpZiBlbmR3aXRoIHN0YXRpYyB0cmFucyBibG9ja3RyYW5zIGVuZGJsb2NrdHJhbnMgZ2V0X3N0YXRpY19wcmVmaXggZ2V0X21lZGlhX3ByZWZpeCBwbHVyYWwgZ2V0X2N1cnJlbnRfbGFuZ3VhZ2UgbGFuZ3VhZ2UgZ2V0X2F2YWlsYWJsZV9sYW5ndWFnZXMgZ2V0X2N1cnJlbnRfbGFuZ3VhZ2VfYmlkaSBnZXRfbGFuZ3VhZ2VfaW5mbyBnZXRfbGFuZ3VhZ2VfaW5mb19saXN0IGxvY2FsaXplIGVuZGxvY2FsaXplIGxvY2FsdGltZSBlbmRsb2NhbHRpbWUgdGltZXpvbmUgZW5kdGltZXpvbmUgZ2V0X2N1cnJlbnRfdGltZXpvbmUgdmVyYmF0aW1cIixjOltlXX0se2NOOlwidmFyaWFibGVcIixiOi9cXHtcXHsvLGU6L319LyxjOltlXX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInNjaGVtZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PVwiW15cXFxcKFxcXFwpXFxcXFtcXFxcXVxcXFx7XFxcXH1cXFwiLCdgOyN8XFxcXFxcXFxcXFxcc10rXCIscj1cIihcXFxcLXxcXFxcKyk/XFxcXGQrKFsuL11cXFxcZCspP1wiLGk9citcIlsrXFxcXC1dXCIrcitcImlcIixhPXtidWlsdF9pbjpcImNhc2UtbGFtYmRhIGNhbGwvY2MgY2xhc3MgZGVmaW5lLWNsYXNzIGV4aXQtaGFuZGxlciBmaWVsZCBpbXBvcnQgaW5oZXJpdCBpbml0LWZpZWxkIGludGVyZmFjZSBsZXQqLXZhbHVlcyBsZXQtdmFsdWVzIGxldC9lYyBtaXhpbiBvcHQtbGFtYmRhIG92ZXJyaWRlIHByb3RlY3QgcHJvdmlkZSBwdWJsaWMgcmVuYW1lIHJlcXVpcmUgcmVxdWlyZS1mb3Itc3ludGF4IHN5bnRheCBzeW50YXgtY2FzZSBzeW50YXgtZXJyb3IgdW5pdC9zaWcgdW5sZXNzIHdoZW4gd2l0aC1zeW50YXggYW5kIGJlZ2luIGNhbGwtd2l0aC1jdXJyZW50LWNvbnRpbnVhdGlvbiBjYWxsLXdpdGgtaW5wdXQtZmlsZSBjYWxsLXdpdGgtb3V0cHV0LWZpbGUgY2FzZSBjb25kIGRlZmluZSBkZWZpbmUtc3ludGF4IGRlbGF5IGRvIGR5bmFtaWMtd2luZCBlbHNlIGZvci1lYWNoIGlmIGxhbWJkYSBsZXQgbGV0KiBsZXQtc3ludGF4IGxldHJlYyBsZXRyZWMtc3ludGF4IG1hcCBvciBzeW50YXgtcnVsZXMgJyAqICsgLCAsQCAtIC4uLiAvIDsgPCA8PSA9ID0+ID4gPj0gYCBhYnMgYWNvcyBhbmdsZSBhcHBlbmQgYXBwbHkgYXNpbiBhc3NvYyBhc3NxIGFzc3YgYXRhbiBib29sZWFuPyBjYWFyIGNhZHIgY2FsbC13aXRoLWlucHV0LWZpbGUgY2FsbC13aXRoLW91dHB1dC1maWxlIGNhbGwtd2l0aC12YWx1ZXMgY2FyIGNkZGRhciBjZGRkZHIgY2RyIGNlaWxpbmcgY2hhci0+aW50ZWdlciBjaGFyLWFscGhhYmV0aWM/IGNoYXItY2k8PT8gY2hhci1jaTw/IGNoYXItY2k9PyBjaGFyLWNpPj0/IGNoYXItY2k+PyBjaGFyLWRvd25jYXNlIGNoYXItbG93ZXItY2FzZT8gY2hhci1udW1lcmljPyBjaGFyLXJlYWR5PyBjaGFyLXVwY2FzZSBjaGFyLXVwcGVyLWNhc2U/IGNoYXItd2hpdGVzcGFjZT8gY2hhcjw9PyBjaGFyPD8gY2hhcj0/IGNoYXI+PT8gY2hhcj4/IGNoYXI/IGNsb3NlLWlucHV0LXBvcnQgY2xvc2Utb3V0cHV0LXBvcnQgY29tcGxleD8gY29ucyBjb3MgY3VycmVudC1pbnB1dC1wb3J0IGN1cnJlbnQtb3V0cHV0LXBvcnQgZGVub21pbmF0b3IgZGlzcGxheSBlb2Ytb2JqZWN0PyBlcT8gZXF1YWw/IGVxdj8gZXZhbCBldmVuPyBleGFjdC0+aW5leGFjdCBleGFjdD8gZXhwIGV4cHQgZmxvb3IgZm9yY2UgZ2NkIGltYWctcGFydCBpbmV4YWN0LT5leGFjdCBpbmV4YWN0PyBpbnB1dC1wb3J0PyBpbnRlZ2VyLT5jaGFyIGludGVnZXI/IGludGVyYWN0aW9uLWVudmlyb25tZW50IGxjbSBsZW5ndGggbGlzdCBsaXN0LT5zdHJpbmcgbGlzdC0+dmVjdG9yIGxpc3QtcmVmIGxpc3QtdGFpbCBsaXN0PyBsb2FkIGxvZyBtYWduaXR1ZGUgbWFrZS1wb2xhciBtYWtlLXJlY3Rhbmd1bGFyIG1ha2Utc3RyaW5nIG1ha2UtdmVjdG9yIG1heCBtZW1iZXIgbWVtcSBtZW12IG1pbiBtb2R1bG8gbmVnYXRpdmU/IG5ld2xpbmUgbm90IG51bGwtZW52aXJvbm1lbnQgbnVsbD8gbnVtYmVyLT5zdHJpbmcgbnVtYmVyPyBudW1lcmF0b3Igb2RkPyBvcGVuLWlucHV0LWZpbGUgb3Blbi1vdXRwdXQtZmlsZSBvdXRwdXQtcG9ydD8gcGFpcj8gcGVlay1jaGFyIHBvcnQ/IHBvc2l0aXZlPyBwcm9jZWR1cmU/IHF1YXNpcXVvdGUgcXVvdGUgcXVvdGllbnQgcmF0aW9uYWw/IHJhdGlvbmFsaXplIHJlYWQgcmVhZC1jaGFyIHJlYWwtcGFydCByZWFsPyByZW1haW5kZXIgcmV2ZXJzZSByb3VuZCBzY2hlbWUtcmVwb3J0LWVudmlyb25tZW50IHNldCEgc2V0LWNhciEgc2V0LWNkciEgc2luIHNxcnQgc3RyaW5nIHN0cmluZy0+bGlzdCBzdHJpbmctPm51bWJlciBzdHJpbmctPnN5bWJvbCBzdHJpbmctYXBwZW5kIHN0cmluZy1jaTw9PyBzdHJpbmctY2k8PyBzdHJpbmctY2k9PyBzdHJpbmctY2k+PT8gc3RyaW5nLWNpPj8gc3RyaW5nLWNvcHkgc3RyaW5nLWZpbGwhIHN0cmluZy1sZW5ndGggc3RyaW5nLXJlZiBzdHJpbmctc2V0ISBzdHJpbmc8PT8gc3RyaW5nPD8gc3RyaW5nPT8gc3RyaW5nPj0/IHN0cmluZz4/IHN0cmluZz8gc3Vic3RyaW5nIHN5bWJvbC0+c3RyaW5nIHN5bWJvbD8gdGFuIHRyYW5zY3JpcHQtb2ZmIHRyYW5zY3JpcHQtb24gdHJ1bmNhdGUgdmFsdWVzIHZlY3RvciB2ZWN0b3ItPmxpc3QgdmVjdG9yLWZpbGwhIHZlY3Rvci1sZW5ndGggdmVjdG9yLXJlZiB2ZWN0b3Itc2V0ISB3aXRoLWlucHV0LWZyb20tZmlsZSB3aXRoLW91dHB1dC10by1maWxlIHdyaXRlIHdyaXRlLWNoYXIgemVybz9cIn0sbj17Y046XCJzaGViYW5nXCIsYjpcIl4jIVwiLGU6XCIkXCJ9LGM9e2NOOlwibGl0ZXJhbFwiLGI6XCIoI3R8I2Z8I1xcXFxcXFxcXCIrdCtcInwjXFxcXFxcXFwuKVwifSxsPXtjTjpcIm51bWJlclwiLHY6W3tiOnIscjowfSx7YjppLHI6MH0se2I6XCIjYlswLTFdKygvWzAtMV0rKT9cIn0se2I6XCIjb1swLTddKygvWzAtN10rKT9cIn0se2I6XCIjeFswLTlhLWZdKygvWzAtOWEtZl0rKT9cIn1dfSxzPWUuUVNNLG89e2NOOlwiY29tbWVudFwiLHY6W3tiOlwiO1wiLGU6XCIkXCIscjowfSx7YjpcIiNcXFxcfFwiLGU6XCJcXFxcfCNcIn1dfSx1PXtiOnQscjowfSxwPXtjTjpcInZhcmlhYmxlXCIsYjpcIidcIit0fSxkPXtlVzohMCxyOjB9LGc9e2NOOlwibGlzdFwiLHY6W3tiOlwiXFxcXChcIixlOlwiXFxcXClcIn0se2I6XCJcXFxcW1wiLGU6XCJcXFxcXVwifV0sYzpbe2NOOlwia2V5d29yZFwiLGI6dCxsOnQsazphfSxkXX07cmV0dXJuIGQuYz1bYyxsLHMsbyx1LHAsZ10se2k6L1xcUy8sYzpbbixsLHMsbyxwLGddfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm9jYW1sXCIsZnVuY3Rpb24oZSl7cmV0dXJue2FsaWFzZXM6W1wibWxcIl0sazp7a2V5d29yZDpcImFuZCBhcyBhc3NlcnQgYXNyIGJlZ2luIGNsYXNzIGNvbnN0cmFpbnQgZG8gZG9uZSBkb3dudG8gZWxzZSBlbmQgZXhjZXB0aW9uIGV4dGVybmFsIGZvciBmdW4gZnVuY3Rpb24gZnVuY3RvciBpZiBpbiBpbmNsdWRlIGluaGVyaXQhIGluaGVyaXQgaW5pdGlhbGl6ZXIgbGFuZCBsYXp5IGxldCBsb3IgbHNsIGxzciBseG9yIG1hdGNoIG1ldGhvZCF8MTAgbWV0aG9kIG1vZCBtb2R1bGUgbXV0YWJsZSBuZXcgb2JqZWN0IG9mIG9wZW4hIG9wZW4gb3IgcHJpdmF0ZSByZWMgc2lnIHN0cnVjdCB0aGVuIHRvIHRyeSB0eXBlIHZhbCEgdmFsIHZpcnR1YWwgd2hlbiB3aGlsZSB3aXRoIHBhcnNlciB2YWx1ZVwiLGJ1aWx0X2luOlwiYXJyYXkgYm9vbCBieXRlcyBjaGFyIGV4bnw1IGZsb2F0IGludCBpbnQzMiBpbnQ2NCBsaXN0IGxhenlfdHw1IG5hdGl2ZWludHw1IHN0cmluZyB1bml0IGluX2NoYW5uZWwgb3V0X2NoYW5uZWwgcmVmXCIsbGl0ZXJhbDpcInRydWUgZmFsc2VcIn0saTovXFwvXFwvfD4+LyxsOlwiW2Etel9dXFxcXHcqIT9cIixjOlt7Y046XCJsaXRlcmFsXCIsYjpcIlxcXFxbKFxcXFx8XFxcXHwpP1xcXFxdfFxcXFwoXFxcXClcIn0se2NOOlwiY29tbWVudFwiLGI6XCJcXFxcKFxcXFwqXCIsZTpcIlxcXFwqXFxcXClcIixjOltcInNlbGZcIl19LHtjTjpcInN5bWJvbFwiLGI6XCInW0EtWmEtel9dKD8hJylbXFxcXHcnXSpcIn0se2NOOlwidGFnXCIsYjpcImBbQS1aXVtcXFxcdyddKlwifSx7Y046XCJ0eXBlXCIsYjpcIlxcXFxiW0EtWl1bXFxcXHcnXSpcIixyOjB9LHtiOlwiW2Etel9dXFxcXHcqJ1tcXFxcdyddKlwifSxlLmluaGVyaXQoZS5BU00se2NOOlwiY2hhclwiLHI6MH0pLGUuaW5oZXJpdChlLlFTTSx7aTpudWxsfSkse2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wwW29PXVswLTdfXStbTGxuXT98MFtiQl1bMDFfXStbTGxuXT98WzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPylcIixyOjB9LHtiOi9bLT1dPi99XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJweXRob25cIixmdW5jdGlvbihlKXt2YXIgcj17Y046XCJwcm9tcHRcIixiOi9eKD4+PnxcXC5cXC5cXC4pIC99LGI9e2NOOlwic3RyaW5nXCIsYzpbZS5CRV0sdjpbe2I6Lyh1fGIpP3I/JycnLyxlOi8nJycvLGM6W3JdLHI6MTB9LHtiOi8odXxiKT9yP1wiXCJcIi8sZTovXCJcIlwiLyxjOltyXSxyOjEwfSx7YjovKHV8cnx1ciknLyxlOi8nLyxyOjEwfSx7YjovKHV8cnx1cilcIi8sZTovXCIvLHI6MTB9LHtiOi8oYnxiciknLyxlOi8nL30se2I6LyhifGJyKVwiLyxlOi9cIi99LGUuQVNNLGUuUVNNXX0sbD17Y046XCJudW1iZXJcIixyOjAsdjpbe2I6ZS5CTlIrXCJbbExqSl0/XCJ9LHtiOlwiXFxcXGIoMG9bMC03XSspW2xMakpdP1wifSx7YjplLkNOUitcIltsTGpKXT9cIn1dfSxjPXtjTjpcInBhcmFtc1wiLGI6L1xcKC8sZTovXFwpLyxjOltcInNlbGZcIixyLGwsYl19O3JldHVybnthbGlhc2VzOltcInB5XCIsXCJneXBcIl0sazp7a2V5d29yZDpcImFuZCBlbGlmIGlzIGdsb2JhbCBhcyBpbiBpZiBmcm9tIHJhaXNlIGZvciBleGNlcHQgZmluYWxseSBwcmludCBpbXBvcnQgcGFzcyByZXR1cm4gZXhlYyBlbHNlIGJyZWFrIG5vdCB3aXRoIGNsYXNzIGFzc2VydCB5aWVsZCB0cnkgd2hpbGUgY29udGludWUgZGVsIG9yIGRlZiBsYW1iZGEgbm9ubG9jYWx8MTAgTm9uZSBUcnVlIEZhbHNlXCIsYnVpbHRfaW46XCJFbGxpcHNpcyBOb3RJbXBsZW1lbnRlZFwifSxpOi8oPFxcL3wtPnxcXD8pLyxjOltyLGwsYixlLkhDTSx7djpbe2NOOlwiZnVuY3Rpb25cIixiSzpcImRlZlwiLHI6MTB9LHtjTjpcImNsYXNzXCIsYks6XCJjbGFzc1wifV0sZTovOi8saTovWyR7PTtcXG5dLyxjOltlLlVUTSxjXX0se2NOOlwiZGVjb3JhdG9yXCIsYjovQC8sZTovJC99LHtiOi9cXGIocHJpbnR8ZXhlYylcXCgvfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiYXBwbGVzY3JpcHRcIixmdW5jdGlvbihlKXt2YXIgdD1lLmluaGVyaXQoZS5RU00se2k6XCJcIn0pLHI9e2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzpbXCJzZWxmXCIsZS5DTk0sdF19LG89W3tjTjpcImNvbW1lbnRcIixiOlwiLS1cIixlOlwiJFwifSx7Y046XCJjb21tZW50XCIsYjpcIlxcXFwoXFxcXCpcIixlOlwiXFxcXCpcXFxcKVwiLGM6W1wic2VsZlwiLHtiOlwiLS1cIixlOlwiJFwifV19LGUuSENNXTtyZXR1cm57YWxpYXNlczpbXCJvc2FzY3JpcHRcIl0sazp7a2V5d29yZDpcImFib3V0IGFib3ZlIGFmdGVyIGFnYWluc3QgYW5kIGFyb3VuZCBhcyBhdCBiYWNrIGJlZm9yZSBiZWdpbm5pbmcgYmVoaW5kIGJlbG93IGJlbmVhdGggYmVzaWRlIGJldHdlZW4gYnV0IGJ5IGNvbnNpZGVyaW5nIGNvbnRhaW4gY29udGFpbnMgY29udGludWUgY29weSBkaXYgZG9lcyBlaWdodGggZWxzZSBlbmQgZXF1YWwgZXF1YWxzIGVycm9yIGV2ZXJ5IGV4aXQgZmlmdGggZmlyc3QgZm9yIGZvdXJ0aCBmcm9tIGZyb250IGdldCBnaXZlbiBnbG9iYWwgaWYgaWdub3JpbmcgaW4gaW50byBpcyBpdCBpdHMgbGFzdCBsb2NhbCBtZSBtaWRkbGUgbW9kIG15IG5pbnRoIG5vdCBvZiBvbiBvbnRvIG9yIG92ZXIgcHJvcCBwcm9wZXJ0eSBwdXQgcmVmIHJlZmVyZW5jZSByZXBlYXQgcmV0dXJuaW5nIHNjcmlwdCBzZWNvbmQgc2V0IHNldmVudGggc2luY2Ugc2l4dGggc29tZSB0ZWxsIHRlbnRoIHRoYXQgdGhlfDAgdGhlbiB0aGlyZCB0aHJvdWdoIHRocnUgdGltZW91dCB0aW1lcyB0byB0cmFuc2FjdGlvbiB0cnkgdW50aWwgd2hlcmUgd2hpbGUgd2hvc2Ugd2l0aCB3aXRob3V0XCIsY29uc3RhbnQ6XCJBcHBsZVNjcmlwdCBmYWxzZSBsaW5lZmVlZCByZXR1cm4gcGkgcXVvdGUgcmVzdWx0IHNwYWNlIHRhYiB0cnVlXCIsdHlwZTpcImFsaWFzIGFwcGxpY2F0aW9uIGJvb2xlYW4gY2xhc3MgY29uc3RhbnQgZGF0ZSBmaWxlIGludGVnZXIgbGlzdCBudW1iZXIgcmVhbCByZWNvcmQgc3RyaW5nIHRleHRcIixjb21tYW5kOlwiYWN0aXZhdGUgYmVlcCBjb3VudCBkZWxheSBsYXVuY2ggbG9nIG9mZnNldCByZWFkIHJvdW5kIHJ1biBzYXkgc3VtbWFyaXplIHdyaXRlXCIscHJvcGVydHk6XCJjaGFyYWN0ZXIgY2hhcmFjdGVycyBjb250ZW50cyBkYXkgZnJvbnRtb3N0IGlkIGl0ZW0gbGVuZ3RoIG1vbnRoIG5hbWUgcGFyYWdyYXBoIHBhcmFncmFwaHMgcmVzdCByZXZlcnNlIHJ1bm5pbmcgdGltZSB2ZXJzaW9uIHdlZWtkYXkgd29yZCB3b3JkcyB5ZWFyXCJ9LGM6W3QsZS5DTk0se2NOOlwidHlwZVwiLGI6XCJcXFxcYlBPU0lYIGZpbGVcXFxcYlwifSx7Y046XCJjb21tYW5kXCIsYjpcIlxcXFxiKGNsaXBib2FyZCBpbmZvfHRoZSBjbGlwYm9hcmR8aW5mbyBmb3J8bGlzdCAoZGlza3N8Zm9sZGVyKXxtb3VudCB2b2x1bWV8cGF0aCB0b3woY2xvc2V8b3BlbiBmb3IpIGFjY2Vzc3woZ2V0fHNldCkgZW9mfGN1cnJlbnQgZGF0ZXxkbyBzaGVsbCBzY3JpcHR8Z2V0IHZvbHVtZSBzZXR0aW5nc3xyYW5kb20gbnVtYmVyfHNldCB2b2x1bWV8c3lzdGVtIGF0dHJpYnV0ZXxzeXN0ZW0gaW5mb3x0aW1lIHRvIEdNVHwobG9hZHxydW58c3RvcmUpIHNjcmlwdHxzY3JpcHRpbmcgY29tcG9uZW50c3xBU0NJSSAoY2hhcmFjdGVyfG51bWJlcil8bG9jYWxpemVkIHN0cmluZ3xjaG9vc2UgKGFwcGxpY2F0aW9ufGNvbG9yfGZpbGV8ZmlsZSBuYW1lfGZvbGRlcnxmcm9tIGxpc3R8cmVtb3RlIGFwcGxpY2F0aW9ufFVSTCl8ZGlzcGxheSAoYWxlcnR8ZGlhbG9nKSlcXFxcYnxeXFxcXHMqcmV0dXJuXFxcXGJcIn0se2NOOlwiY29uc3RhbnRcIixiOlwiXFxcXGIodGV4dCBpdGVtIGRlbGltaXRlcnN8Y3VycmVudCBhcHBsaWNhdGlvbnxtaXNzaW5nIHZhbHVlKVxcXFxiXCJ9LHtjTjpcImtleXdvcmRcIixiOlwiXFxcXGIoYXBhcnQgZnJvbXxhc2lkZSBmcm9tfGluc3RlYWQgb2Z8b3V0IG9mfGdyZWF0ZXIgdGhhbnxpc24ndHwoZG9lc24ndHxkb2VzIG5vdCkgKGVxdWFsfGNvbWUgYmVmb3JlfGNvbWUgYWZ0ZXJ8Y29udGFpbil8KGdyZWF0ZXJ8bGVzcykgdGhhbiggb3IgZXF1YWwpP3woc3RhcnRzP3xlbmRzfGJlZ2lucz8pIHdpdGh8Y29udGFpbmVkIGJ5fGNvbWVzIChiZWZvcmV8YWZ0ZXIpfGEgKHJlZnxyZWZlcmVuY2UpKVxcXFxiXCJ9LHtjTjpcInByb3BlcnR5XCIsYjpcIlxcXFxiKFBPU0lYIHBhdGh8KGRhdGV8dGltZSkgc3RyaW5nfHF1b3RlZCBmb3JtKVxcXFxiXCJ9LHtjTjpcImZ1bmN0aW9uX3N0YXJ0XCIsYks6XCJvblwiLGk6XCJbJHs9O1xcXFxuXVwiLGM6W2UuVVRNLHJdfV0uY29uY2F0KG8pLGk6XCIvL3wtPnw9PlwifX0pO1xuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgaGxqcyAhPSBcInVuZGVmaW5lZFwiID8gaGxqcyA6IHdpbmRvdy5obGpzKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuIiwiO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8vICAgICBaZXB0by5qc1xuLy8gICAgIChjKSAyMDEwLTIwMTQgVGhvbWFzIEZ1Y2hzXG4vLyAgICAgWmVwdG8uanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciBaZXB0byA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVuZGVmaW5lZCwga2V5LCAkLCBjbGFzc0xpc3QsIGVtcHR5QXJyYXkgPSBbXSwgY29uY2F0ID0gZW1wdHlBcnJheS5jb25jYXQsIGZpbHRlciA9IGVtcHR5QXJyYXkuZmlsdGVyLCBzbGljZSA9IGVtcHR5QXJyYXkuc2xpY2UsXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgZWxlbWVudERpc3BsYXkgPSB7fSwgY2xhc3NDYWNoZSA9IHt9LFxuICAgIGNzc051bWJlciA9IHsgJ2NvbHVtbi1jb3VudCc6IDEsICdjb2x1bW5zJzogMSwgJ2ZvbnQtd2VpZ2h0JzogMSwgJ2xpbmUtaGVpZ2h0JzogMSwnb3BhY2l0eSc6IDEsICd6LWluZGV4JzogMSwgJ3pvb20nOiAxIH0sXG4gICAgZnJhZ21lbnRSRSA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgc2luZ2xlVGFnUkUgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgdGFnRXhwYW5kZXJSRSA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9pZyxcbiAgICByb290Tm9kZVJFID0gL14oPzpib2R5fGh0bWwpJC9pLFxuICAgIGNhcGl0YWxSRSA9IC8oW0EtWl0pL2csXG5cbiAgICAvLyBzcGVjaWFsIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgZ2V0L3NldCB2aWEgbWV0aG9kIGNhbGxzXG4gICAgbWV0aG9kQXR0cmlidXRlcyA9IFsndmFsJywgJ2NzcycsICdodG1sJywgJ3RleHQnLCAnZGF0YScsICd3aWR0aCcsICdoZWlnaHQnLCAnb2Zmc2V0J10sXG5cbiAgICBhZGphY2VuY3lPcGVyYXRvcnMgPSBbICdhZnRlcicsICdwcmVwZW5kJywgJ2JlZm9yZScsICdhcHBlbmQnIF0sXG4gICAgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpLFxuICAgIHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSxcbiAgICBjb250YWluZXJzID0ge1xuICAgICAgJ3RyJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSxcbiAgICAgICd0Ym9keSc6IHRhYmxlLCAndGhlYWQnOiB0YWJsZSwgJ3Rmb290JzogdGFibGUsXG4gICAgICAndGQnOiB0YWJsZVJvdywgJ3RoJzogdGFibGVSb3csXG4gICAgICAnKic6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfSxcbiAgICByZWFkeVJFID0gL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8sXG4gICAgc2ltcGxlU2VsZWN0b3JSRSA9IC9eW1xcdy1dKiQvLFxuICAgIGNsYXNzMnR5cGUgPSB7fSxcbiAgICB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmcsXG4gICAgemVwdG8gPSB7fSxcbiAgICBjYW1lbGl6ZSwgdW5pcSxcbiAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgcHJvcE1hcCA9IHtcbiAgICAgICd0YWJpbmRleCc6ICd0YWJJbmRleCcsXG4gICAgICAncmVhZG9ubHknOiAncmVhZE9ubHknLFxuICAgICAgJ2Zvcic6ICdodG1sRm9yJyxcbiAgICAgICdjbGFzcyc6ICdjbGFzc05hbWUnLFxuICAgICAgJ21heGxlbmd0aCc6ICdtYXhMZW5ndGgnLFxuICAgICAgJ2NlbGxzcGFjaW5nJzogJ2NlbGxTcGFjaW5nJyxcbiAgICAgICdjZWxscGFkZGluZyc6ICdjZWxsUGFkZGluZycsXG4gICAgICAncm93c3Bhbic6ICdyb3dTcGFuJyxcbiAgICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICAgJ3VzZW1hcCc6ICd1c2VNYXAnLFxuICAgICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAgICdjb250ZW50ZWRpdGFibGUnOiAnY29udGVudEVkaXRhYmxlJ1xuICAgIH0sXG4gICAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHxcbiAgICAgIGZ1bmN0aW9uKG9iamVjdCl7IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBBcnJheSB9XG5cbiAgemVwdG8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yXG4gICAgaWYgKG1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICAgIC8vIGZhbGwgYmFjayB0byBwZXJmb3JtaW5nIGEgc2VsZWN0b3I6XG4gICAgdmFyIG1hdGNoLCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUsIHRlbXAgPSAhcGFyZW50XG4gICAgaWYgKHRlbXApIChwYXJlbnQgPSB0ZW1wUGFyZW50KS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIG1hdGNoID0gfnplcHRvLnFzYShwYXJlbnQsIHNlbGVjdG9yKS5pbmRleE9mKGVsZW1lbnQpXG4gICAgdGVtcCAmJiB0ZW1wUGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDpcbiAgICAgIGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiXG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB0eXBlKHZhbHVlKSA9PSBcImZ1bmN0aW9uXCIgfVxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopICAgICB7IHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT0gb2JqLndpbmRvdyB9XG4gIGZ1bmN0aW9uIGlzRG9jdW1lbnQob2JqKSAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5ub2RlVHlwZSA9PSBvYmouRE9DVU1FTlRfTk9ERSB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikgICAgIHsgcmV0dXJuIHR5cGUob2JqKSA9PSBcIm9iamVjdFwiIH1cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiAhaXNXaW5kb3cob2JqKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PSBPYmplY3QucHJvdG90eXBlXG4gIH1cbiAgZnVuY3Rpb24gbGlrZUFycmF5KG9iaikgeyByZXR1cm4gdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcicgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtKXsgcmV0dXJuIGl0ZW0gIT0gbnVsbCB9KSB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHsgcmV0dXJuIGFycmF5Lmxlbmd0aCA+IDAgPyAkLmZuLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpIDogYXJyYXkgfVxuICBjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cil7IHJldHVybiBzdHIucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uKG1hdGNoLCBjaHIpeyByZXR1cm4gY2hyID8gY2hyLnRvVXBwZXJDYXNlKCkgOiAnJyB9KSB9XG4gIGZ1bmN0aW9uIGRhc2hlcml6ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzo6L2csICcvJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2Etel0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDFfJDInKVxuICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gIH1cbiAgdW5pcSA9IGZ1bmN0aW9uKGFycmF5KXsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtLCBpZHgpeyByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKSA9PSBpZHggfSkgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUkUobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGNsYXNzQ2FjaGUgP1xuICAgICAgY2xhc3NDYWNoZVtuYW1lXSA6IChjbGFzc0NhY2hlW25hbWVdID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIG5hbWUgKyAnKFxcXFxzfCQpJykpXG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUFkZFB4KG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiAhY3NzTnVtYmVyW2Rhc2hlcml6ZShuYW1lKV0pID8gdmFsdWUgKyBcInB4XCIgOiB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkobm9kZU5hbWUpIHtcbiAgICB2YXIgZWxlbWVudCwgZGlzcGxheVxuICAgIGlmICghZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgICBkaXNwbGF5ID09IFwibm9uZVwiICYmIChkaXNwbGF5ID0gXCJibG9ja1wiKVxuICAgICAgZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdID0gZGlzcGxheVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuICdjaGlsZHJlbicgaW4gZWxlbWVudCA/XG4gICAgICBzbGljZS5jYWxsKGVsZW1lbnQuY2hpbGRyZW4pIDpcbiAgICAgICQubWFwKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24obm9kZSl7IGlmIChub2RlLm5vZGVUeXBlID09IDEpIHJldHVybiBub2RlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBaKGRvbSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgaSwgbGVuID0gZG9tID8gZG9tLmxlbmd0aCA6IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHRoaXNbaV0gPSBkb21baV1cbiAgICB0aGlzLmxlbmd0aCA9IGxlblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnJ1xuICB9XG5cbiAgLy8gYCQuemVwdG8uZnJhZ21lbnRgIHRha2VzIGEgaHRtbCBzdHJpbmcgYW5kIGFuIG9wdGlvbmFsIHRhZyBuYW1lXG4gIC8vIHRvIGdlbmVyYXRlIERPTSBub2RlcyBub2RlcyBmcm9tIHRoZSBnaXZlbiBodG1sIHN0cmluZy5cbiAgLy8gVGhlIGdlbmVyYXRlZCBET00gbm9kZXMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LlxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucyBmb3IgZXhhbXBsZSB0byBtYWtlXG4gIC8vIGl0IGNvbXBhdGlibGUgd2l0aCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIERPTSBmdWxseS5cbiAgemVwdG8uZnJhZ21lbnQgPSBmdW5jdGlvbihodG1sLCBuYW1lLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGRvbSwgbm9kZXMsIGNvbnRhaW5lclxuXG4gICAgLy8gQSBzcGVjaWFsIGNhc2Ugb3B0aW1pemF0aW9uIGZvciBhIHNpbmdsZSB0YWdcbiAgICBpZiAoc2luZ2xlVGFnUkUudGVzdChodG1sKSkgZG9tID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSkpXG5cbiAgICBpZiAoIWRvbSkge1xuICAgICAgaWYgKGh0bWwucmVwbGFjZSkgaHRtbCA9IGh0bWwucmVwbGFjZSh0YWdFeHBhbmRlclJFLCBcIjwkMT48LyQyPlwiKVxuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgbmFtZSA9IGZyYWdtZW50UkUudGVzdChodG1sKSAmJiBSZWdFeHAuJDFcbiAgICAgIGlmICghKG5hbWUgaW4gY29udGFpbmVycykpIG5hbWUgPSAnKidcblxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyc1tuYW1lXVxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnICsgaHRtbFxuICAgICAgZG9tID0gJC5lYWNoKHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpLCBmdW5jdGlvbigpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIG5vZGVzID0gJChkb20pXG4gICAgICAkLmVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAobWV0aG9kQXR0cmlidXRlcy5pbmRleE9mKGtleSkgPiAtMSkgbm9kZXNba2V5XSh2YWx1ZSlcbiAgICAgICAgZWxzZSBub2Rlcy5hdHRyKGtleSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkb21cbiAgfVxuXG4gIC8vIGAkLnplcHRvLlpgIHN3YXBzIG91dCB0aGUgcHJvdG90eXBlIG9mIHRoZSBnaXZlbiBgZG9tYCBhcnJheVxuICAvLyBvZiBub2RlcyB3aXRoIGAkLmZuYCBhbmQgdGh1cyBzdXBwbHlpbmcgYWxsIHRoZSBaZXB0byBmdW5jdGlvbnNcbiAgLy8gdG8gdGhlIGFycmF5LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLlogPSBmdW5jdGlvbihkb20sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBaKGRvbSwgc2VsZWN0b3IpXG4gIH1cblxuICAvLyBgJC56ZXB0by5pc1pgIHNob3VsZCByZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBaZXB0b1xuICAvLyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLmlzWiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB6ZXB0by5aXG4gIH1cblxuICAvLyBgJC56ZXB0by5pbml0YCBpcyBaZXB0bydzIGNvdW50ZXJwYXJ0IHRvIGpRdWVyeSdzIGAkLmZuLmluaXRgIGFuZFxuICAvLyB0YWtlcyBhIENTUyBzZWxlY3RvciBhbmQgYW4gb3B0aW9uYWwgY29udGV4dCAoYW5kIGhhbmRsZXMgdmFyaW91c1xuICAvLyBzcGVjaWFsIGNhc2VzKS5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pbml0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgZG9tXG4gICAgLy8gSWYgbm90aGluZyBnaXZlbiwgcmV0dXJuIGFuIGVtcHR5IFplcHRvIGNvbGxlY3Rpb25cbiAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gemVwdG8uWigpXG4gICAgLy8gT3B0aW1pemUgZm9yIHN0cmluZyBzZWxlY3RvcnNcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIC8vIE5vdGU6IEluIGJvdGggQ2hyb21lIDIxIGFuZCBGaXJlZm94IDE1LCBET00gZXJyb3IgMTJcbiAgICAgIC8vIGlzIHRocm93biBpZiB0aGUgZnJhZ21lbnQgZG9lc24ndCBiZWdpbiB3aXRoIDxcbiAgICAgIGlmIChzZWxlY3RvclswXSA9PSAnPCcgJiYgZnJhZ21lbnRSRS50ZXN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gemVwdG8uZnJhZ21lbnQoc2VsZWN0b3IsIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBJZiBpdCdzIGEgQ1NTIHNlbGVjdG9yLCB1c2UgaXQgdG8gc2VsZWN0IG5vZGVzLlxuICAgICAgZWxzZSBkb20gPSB6ZXB0by5xc2EoZG9jdW1lbnQsIHNlbGVjdG9yKVxuICAgIH1cbiAgICAvLyBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuLCBjYWxsIGl0IHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoc2VsZWN0b3IpXG4gICAgLy8gSWYgYSBaZXB0byBjb2xsZWN0aW9uIGlzIGdpdmVuLCBqdXN0IHJldHVybiBpdFxuICAgIGVsc2UgaWYgKHplcHRvLmlzWihzZWxlY3RvcikpIHJldHVybiBzZWxlY3RvclxuICAgIGVsc2Uge1xuICAgICAgLy8gbm9ybWFsaXplIGFycmF5IGlmIGFuIGFycmF5IG9mIG5vZGVzIGlzIGdpdmVuXG4gICAgICBpZiAoaXNBcnJheShzZWxlY3RvcikpIGRvbSA9IGNvbXBhY3Qoc2VsZWN0b3IpXG4gICAgICAvLyBXcmFwIERPTSBub2Rlcy5cbiAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gW3NlbGVjdG9yXSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIGVsc2UgaWYgKGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLnRyaW0oKSwgUmVnRXhwLiQxLCBjb250ZXh0KSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiB0aGVyZSdzIGEgY29udGV4dCwgY3JlYXRlIGEgY29sbGVjdGlvbiBvbiB0aGF0IGNvbnRleHQgZmlyc3QsIGFuZCBzZWxlY3RcbiAgICAgIC8vIG5vZGVzIGZyb20gdGhlcmVcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuICQoY29udGV4dCkuZmluZChzZWxlY3RvcilcbiAgICAgIC8vIEFuZCBsYXN0IGJ1dCBubyBsZWFzdCwgaWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgbmV3IFplcHRvIGNvbGxlY3Rpb24gZnJvbSB0aGUgbm9kZXMgZm91bmRcbiAgICByZXR1cm4gemVwdG8uWihkb20sIHNlbGVjdG9yKVxuICB9XG5cbiAgLy8gYCRgIHdpbGwgYmUgdGhlIGJhc2UgYFplcHRvYCBvYmplY3QuIFdoZW4gY2FsbGluZyB0aGlzXG4gIC8vIGZ1bmN0aW9uIGp1c3QgY2FsbCBgJC56ZXB0by5pbml0LCB3aGljaCBtYWtlcyB0aGUgaW1wbGVtZW50YXRpb25cbiAgLy8gZGV0YWlscyBvZiBzZWxlY3Rpbmcgbm9kZXMgYW5kIGNyZWF0aW5nIFplcHRvIGNvbGxlY3Rpb25zXG4gIC8vIHBhdGNoYWJsZSBpbiBwbHVnaW5zLlxuICAkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgIHJldHVybiB6ZXB0by5pbml0KHNlbGVjdG9yLCBjb250ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBkZWVwKSB7XG4gICAgZm9yIChrZXkgaW4gc291cmNlKVxuICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgJiYgIWlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0ge31cbiAgICAgICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pICYmICFpc0FycmF5KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IFtdXG4gICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gIH1cblxuICAvLyBDb3B5IGFsbCBidXQgdW5kZWZpbmVkIHByb3BlcnRpZXMgZnJvbSBvbmUgb3IgbW9yZVxuICAvLyBvYmplY3RzIHRvIHRoZSBgdGFyZ2V0YCBvYmplY3QuXG4gICQuZXh0ZW5kID0gZnVuY3Rpb24odGFyZ2V0KXtcbiAgICB2YXIgZGVlcCwgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdib29sZWFuJykge1xuICAgICAgZGVlcCA9IHRhcmdldFxuICAgICAgdGFyZ2V0ID0gYXJncy5zaGlmdCgpXG4gICAgfVxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihhcmcpeyBleHRlbmQodGFyZ2V0LCBhcmcsIGRlZXApIH0pXG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgLy8gYCQuemVwdG8ucXNhYCBpcyBaZXB0bydzIENTUyBzZWxlY3RvciBpbXBsZW1lbnRhdGlvbiB3aGljaFxuICAvLyB1c2VzIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsYCBhbmQgb3B0aW1pemVzIGZvciBzb21lIHNwZWNpYWwgY2FzZXMsIGxpa2UgYCNpZGAuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8ucXNhID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3Ipe1xuICAgIHZhciBmb3VuZCxcbiAgICAgICAgbWF5YmVJRCA9IHNlbGVjdG9yWzBdID09ICcjJyxcbiAgICAgICAgbWF5YmVDbGFzcyA9ICFtYXliZUlEICYmIHNlbGVjdG9yWzBdID09ICcuJyxcbiAgICAgICAgbmFtZU9ubHkgPSBtYXliZUlEIHx8IG1heWJlQ2xhc3MgPyBzZWxlY3Rvci5zbGljZSgxKSA6IHNlbGVjdG9yLCAvLyBFbnN1cmUgdGhhdCBhIDEgY2hhciB0YWcgbmFtZSBzdGlsbCBnZXRzIGNoZWNrZWRcbiAgICAgICAgaXNTaW1wbGUgPSBzaW1wbGVTZWxlY3RvclJFLnRlc3QobmFtZU9ubHkpXG4gICAgcmV0dXJuIChlbGVtZW50LmdldEVsZW1lbnRCeUlkICYmIGlzU2ltcGxlICYmIG1heWJlSUQpID8gLy8gU2FmYXJpIERvY3VtZW50RnJhZ21lbnQgZG9lc24ndCBoYXZlIGdldEVsZW1lbnRCeUlkXG4gICAgICAoIChmb3VuZCA9IGVsZW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZU9ubHkpKSA/IFtmb3VuZF0gOiBbXSApIDpcbiAgICAgIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMTEpID8gW10gOlxuICAgICAgc2xpY2UuY2FsbChcbiAgICAgICAgaXNTaW1wbGUgJiYgIW1heWJlSUQgJiYgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID8gLy8gRG9jdW1lbnRGcmFnbWVudCBkb2Vzbid0IGhhdmUgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZS9UYWdOYW1lXG4gICAgICAgICAgbWF5YmVDbGFzcyA/IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lT25seSkgOiAvLyBJZiBpdCdzIHNpbXBsZSwgaXQgY291bGQgYmUgYSBjbGFzc1xuICAgICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpIDogLy8gT3IgYSB0YWdcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIC8vIE9yIGl0J3Mgbm90IHNpbXBsZSwgYW5kIHdlIG5lZWQgdG8gcXVlcnkgYWxsXG4gICAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJlZChub2Rlcywgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/ICQobm9kZXMpIDogJChub2RlcykuZmlsdGVyKHNlbGVjdG9yKVxuICB9XG5cbiAgJC5jb250YWlucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyA/XG4gICAgZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50ICE9PSBub2RlICYmIHBhcmVudC5jb250YWlucyhub2RlKVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKVxuICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNBcmcoY29udGV4dCwgYXJnLCBpZHgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcpID8gYXJnLmNhbGwoY29udGV4dCwgaWR4LCBwYXlsb2FkKSA6IGFyZ1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFsdWUgPT0gbnVsbCA/IG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpIDogbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICAvLyBhY2Nlc3MgY2xhc3NOYW1lIHByb3BlcnR5IHdoaWxlIHJlc3BlY3RpbmcgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgZnVuY3Rpb24gY2xhc3NOYW1lKG5vZGUsIHZhbHVlKXtcbiAgICB2YXIga2xhc3MgPSBub2RlLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgc3ZnICAgPSBrbGFzcyAmJiBrbGFzcy5iYXNlVmFsICE9PSB1bmRlZmluZWRcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnID8ga2xhc3MuYmFzZVZhbCA6IGtsYXNzXG4gICAgc3ZnID8gKGtsYXNzLmJhc2VWYWwgPSB2YWx1ZSkgOiAobm9kZS5jbGFzc05hbWUgPSB2YWx1ZSlcbiAgfVxuXG4gIC8vIFwidHJ1ZVwiICA9PiB0cnVlXG4gIC8vIFwiZmFsc2VcIiA9PiBmYWxzZVxuICAvLyBcIm51bGxcIiAgPT4gbnVsbFxuICAvLyBcIjQyXCIgICAgPT4gNDJcbiAgLy8gXCI0Mi41XCIgID0+IDQyLjVcbiAgLy8gXCIwOFwiICAgID0+IFwiMDhcIlxuICAvLyBKU09OICAgID0+IHBhcnNlIGlmIHZhbGlkXG4gIC8vIFN0cmluZyAgPT4gc2VsZlxuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZSA/XG4gICAgICAgIHZhbHVlID09IFwidHJ1ZVwiIHx8XG4gICAgICAgICggdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOlxuICAgICAgICAgIHZhbHVlID09IFwibnVsbFwiID8gbnVsbCA6XG4gICAgICAgICAgK3ZhbHVlICsgXCJcIiA9PSB2YWx1ZSA/ICt2YWx1ZSA6XG4gICAgICAgICAgL15bXFxbXFx7XS8udGVzdCh2YWx1ZSkgPyAkLnBhcnNlSlNPTih2YWx1ZSkgOlxuICAgICAgICAgIHZhbHVlIClcbiAgICAgICAgOiB2YWx1ZVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9XG5cbiAgJC50eXBlID0gdHlwZVxuICAkLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uXG4gICQuaXNXaW5kb3cgPSBpc1dpbmRvd1xuICAkLmlzQXJyYXkgPSBpc0FycmF5XG4gICQuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3RcblxuICAkLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZVxuICAgIGZvciAobmFtZSBpbiBvYmopIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAkLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtLCBhcnJheSwgaSl7XG4gICAgcmV0dXJuIGVtcHR5QXJyYXkuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtLCBpKVxuICB9XG5cbiAgJC5jYW1lbENhc2UgPSBjYW1lbGl6ZVxuICAkLnRyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID09IG51bGwgPyBcIlwiIDogU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwoc3RyKVxuICB9XG5cbiAgLy8gcGx1Z2luIGNvbXBhdGliaWxpdHlcbiAgJC51dWlkID0gMFxuICAkLnN1cHBvcnQgPSB7IH1cbiAgJC5leHByID0geyB9XG4gICQubm9vcCA9IGZ1bmN0aW9uKCkge31cblxuICAkLm1hcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIHZhbHVlLCB2YWx1ZXMgPSBbXSwgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1tpXSwgaSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIGVsc2VcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNba2V5XSwga2V5KVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW4odmFsdWVzKVxuICB9XG5cbiAgJC5lYWNoID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNbaV0sIGksIGVsZW1lbnRzW2ldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNba2V5XSwga2V5LCBlbGVtZW50c1trZXldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xuICB9XG5cbiAgJC5ncmVwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwoZWxlbWVudHMsIGNhbGxiYWNrKVxuICB9XG5cbiAgaWYgKHdpbmRvdy5KU09OKSAkLnBhcnNlSlNPTiA9IEpTT04ucGFyc2VcblxuICAvLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbiAgJC5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oaSwgbmFtZSkge1xuICAgIGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgLy8gRGVmaW5lIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBhbGxcbiAgLy8gWmVwdG8gY29sbGVjdGlvbnNcbiAgJC5mbiA9IHtcbiAgICBjb25zdHJ1Y3RvcjogemVwdG8uWixcbiAgICBsZW5ndGg6IDAsXG5cbiAgICAvLyBCZWNhdXNlIGEgY29sbGVjdGlvbiBhY3RzIGxpa2UgYW4gYXJyYXlcbiAgICAvLyBjb3B5IG92ZXIgdGhlc2UgdXNlZnVsIGFycmF5IGZ1bmN0aW9ucy5cbiAgICBmb3JFYWNoOiBlbXB0eUFycmF5LmZvckVhY2gsXG4gICAgcmVkdWNlOiBlbXB0eUFycmF5LnJlZHVjZSxcbiAgICBwdXNoOiBlbXB0eUFycmF5LnB1c2gsXG4gICAgc29ydDogZW1wdHlBcnJheS5zb3J0LFxuICAgIHNwbGljZTogZW1wdHlBcnJheS5zcGxpY2UsXG4gICAgaW5kZXhPZjogZW1wdHlBcnJheS5pbmRleE9mLFxuICAgIGNvbmNhdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpLCB2YWx1ZSwgYXJncyA9IFtdXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gYXJndW1lbnRzW2ldXG4gICAgICAgIGFyZ3NbaV0gPSB6ZXB0by5pc1oodmFsdWUpID8gdmFsdWUudG9BcnJheSgpIDogdmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25jYXQuYXBwbHkoemVwdG8uaXNaKHRoaXMpID8gdGhpcy50b0FycmF5KCkgOiB0aGlzLCBhcmdzKVxuICAgIH0sXG5cbiAgICAvLyBgbWFwYCBhbmQgYHNsaWNlYCBpbiB0aGUgalF1ZXJ5IEFQSSB3b3JrIGRpZmZlcmVudGx5XG4gICAgLy8gZnJvbSB0aGVpciBhcnJheSBjb3VudGVycGFydHNcbiAgICBtYXA6IGZ1bmN0aW9uKGZuKXtcbiAgICAgIHJldHVybiAkKCQubWFwKHRoaXMsIGZ1bmN0aW9uKGVsLCBpKXsgcmV0dXJuIGZuLmNhbGwoZWwsIGksIGVsKSB9KSlcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICQoc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIC8vIG5lZWQgdG8gY2hlY2sgaWYgZG9jdW1lbnQuYm9keSBleGlzdHMgZm9yIElFIGFzIHRoYXQgYnJvd3NlciByZXBvcnRzXG4gICAgICAvLyBkb2N1bWVudCByZWFkeSB3aGVuIGl0IGhhc24ndCB5ZXQgY3JlYXRlZCB0aGUgYm9keSBlbGVtZW50XG4gICAgICBpZiAocmVhZHlSRS50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIGNhbGxiYWNrKCQpXG4gICAgICBlbHNlIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpeyBjYWxsYmFjaygkKSB9LCBmYWxzZSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSB1bmRlZmluZWQgPyBzbGljZS5jYWxsKHRoaXMpIDogdGhpc1tpZHggPj0gMCA/IGlkeCA6IGlkeCArIHRoaXMubGVuZ3RoXVxuICAgIH0sXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZ2V0KCkgfSxcbiAgICBzaXplOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICBlbXB0eUFycmF5LmV2ZXJ5LmNhbGwodGhpcywgZnVuY3Rpb24oZWwsIGlkeCl7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGVsLCBpZHgsIGVsKSAhPT0gZmFsc2VcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHJldHVybiB0aGlzLm5vdCh0aGlzLm5vdChzZWxlY3RvcikpXG4gICAgICByZXR1cm4gJChmaWx0ZXIuY2FsbCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHplcHRvLm1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oc2VsZWN0b3IsY29udGV4dCl7XG4gICAgICByZXR1cm4gJCh1bmlxKHRoaXMuY29uY2F0KCQoc2VsZWN0b3IsY29udGV4dCkpKSlcbiAgICB9LFxuICAgIGlzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAwICYmIHplcHRvLm1hdGNoZXModGhpc1swXSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciBub2Rlcz1bXVxuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpICYmIHNlbGVjdG9yLmNhbGwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKCFzZWxlY3Rvci5jYWxsKHRoaXMsaWR4KSkgbm9kZXMucHVzaCh0aGlzKVxuICAgICAgICB9KVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBleGNsdWRlcyA9IHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyA/IHRoaXMuZmlsdGVyKHNlbGVjdG9yKSA6XG4gICAgICAgICAgKGxpa2VBcnJheShzZWxlY3RvcikgJiYgaXNGdW5jdGlvbihzZWxlY3Rvci5pdGVtKSkgPyBzbGljZS5jYWxsKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzLmluZGV4T2YoZWwpIDwgMCkgbm9kZXMucHVzaChlbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAkKG5vZGVzKVxuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHNlbGVjdG9yKSA/XG4gICAgICAgICAgJC5jb250YWlucyh0aGlzLCBzZWxlY3RvcikgOlxuICAgICAgICAgICQodGhpcykuZmluZChzZWxlY3Rvcikuc2l6ZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXE6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHRoaXMuc2xpY2UoaWR4KSA6IHRoaXMuc2xpY2UoaWR4LCArIGlkeCArIDEpXG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbdGhpcy5sZW5ndGggLSAxXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgcmVzdWx0LCAkdGhpcyA9IHRoaXNcbiAgICAgIGlmICghc2VsZWN0b3IpIHJlc3VsdCA9ICQoKVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICByZXN1bHQgPSAkKHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgbm9kZSA9IHRoaXNcbiAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwoJHRoaXMsIGZ1bmN0aW9uKHBhcmVudCl7XG4gICAgICAgICAgICByZXR1cm4gJC5jb250YWlucyhwYXJlbnQsIG5vZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoID09IDEpIHJlc3VsdCA9ICQoemVwdG8ucXNhKHRoaXNbMF0sIHNlbGVjdG9yKSlcbiAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHplcHRvLnFzYSh0aGlzLCBzZWxlY3RvcikgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgIHZhciBub2RlID0gdGhpc1swXSwgY29sbGVjdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSBjb2xsZWN0aW9uID0gJChzZWxlY3RvcilcbiAgICAgIHdoaWxlIChub2RlICYmICEoY29sbGVjdGlvbiA/IGNvbGxlY3Rpb24uaW5kZXhPZihub2RlKSA+PSAwIDogemVwdG8ubWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpKVxuICAgICAgICBub2RlID0gbm9kZSAhPT0gY29udGV4dCAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnBhcmVudE5vZGVcbiAgICAgIHJldHVybiAkKG5vZGUpXG4gICAgfSxcbiAgICBwYXJlbnRzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgYW5jZXN0b3JzID0gW10sIG5vZGVzID0gdGhpc1xuICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIG5vZGVzID0gJC5tYXAobm9kZXMsIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgYW5jZXN0b3JzLmluZGV4T2Yobm9kZSkgPCAwKSB7XG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChub2RlKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gZmlsdGVyZWQoYW5jZXN0b3JzLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIHBhcmVudDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHVuaXEodGhpcy5wbHVjaygncGFyZW50Tm9kZScpKSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiBjaGlsZHJlbih0aGlzKSB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnRlbnREb2N1bWVudCB8fCBzbGljZS5jYWxsKHRoaXMuY2hpbGROb2RlcykgfSlcbiAgICB9LFxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICByZXR1cm4gZmlsdGVyLmNhbGwoY2hpbGRyZW4oZWwucGFyZW50Tm9kZSksIGZ1bmN0aW9uKGNoaWxkKXsgcmV0dXJuIGNoaWxkIT09ZWwgfSlcbiAgICAgIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLmlubmVySFRNTCA9ICcnIH0pXG4gICAgfSxcbiAgICAvLyBgcGx1Y2tgIGlzIGJvcnJvd2VkIGZyb20gUHJvdG90eXBlLmpzXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgIHJldHVybiAkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCl7IHJldHVybiBlbFtwcm9wZXJ0eV0gfSlcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAodGhpcy5zdHlsZS5kaXNwbGF5ID0gJycpXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIilcbiAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheSh0aGlzLm5vZGVOYW1lKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbihuZXdDb250ZW50KXtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZShuZXdDb250ZW50KS5yZW1vdmUoKVxuICAgIH0sXG4gICAgd3JhcDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICBpZiAodGhpc1swXSAmJiAhZnVuYylcbiAgICAgICAgdmFyIGRvbSAgID0gJChzdHJ1Y3R1cmUpLmdldCgwKSxcbiAgICAgICAgICAgIGNsb25lID0gZG9tLnBhcmVudE5vZGUgfHwgdGhpcy5sZW5ndGggPiAxXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAkKHRoaXMpLndyYXBBbGwoXG4gICAgICAgICAgZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6XG4gICAgICAgICAgICBjbG9uZSA/IGRvbS5jbG9uZU5vZGUodHJ1ZSkgOiBkb21cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHdyYXBBbGw6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAkKHRoaXNbMF0pLmJlZm9yZShzdHJ1Y3R1cmUgPSAkKHN0cnVjdHVyZSkpXG4gICAgICAgIHZhciBjaGlsZHJlblxuICAgICAgICAvLyBkcmlsbCBkb3duIHRvIHRoZSBpbm1vc3QgZWxlbWVudFxuICAgICAgICB3aGlsZSAoKGNoaWxkcmVuID0gc3RydWN0dXJlLmNoaWxkcmVuKCkpLmxlbmd0aCkgc3RydWN0dXJlID0gY2hpbGRyZW4uZmlyc3QoKVxuICAgICAgICAkKHN0cnVjdHVyZSkuYXBwZW5kKHRoaXMpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgd3JhcElubmVyOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyksIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpLFxuICAgICAgICAgICAgZG9tICA9IGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOiBzdHJ1Y3R1cmVcbiAgICAgICAgY29udGVudHMubGVuZ3RoID8gY29udGVudHMud3JhcEFsbChkb20pIDogc2VsZi5hcHBlbmQoZG9tKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHVud3JhcDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKCQodGhpcykuY2hpbGRyZW4oKSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuY2xvbmVOb2RlKHRydWUpIH0pXG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24oc2V0dGluZyl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgICAgOyhzZXR0aW5nID09PSB1bmRlZmluZWQgPyBlbC5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiIDogc2V0dGluZykgPyBlbC5zaG93KCkgOiBlbC5oaWRlKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBuZXh0OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ25leHRFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIGh0bWw6IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG9yaWdpbkh0bWwgPSB0aGlzLmlubmVySFRNTFxuICAgICAgICAgICQodGhpcykuZW1wdHkoKS5hcHBlbmQoIGZ1bmNBcmcodGhpcywgaHRtbCwgaWR4LCBvcmlnaW5IdG1sKSApXG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0uaW5uZXJIVE1MIDogbnVsbClcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG5ld1RleHQgPSBmdW5jQXJnKHRoaXMsIHRleHQsIGlkeCwgdGhpcy50ZXh0Q29udGVudClcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gbmV3VGV4dCA9PSBudWxsID8gJycgOiAnJytuZXdUZXh0XG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0udGV4dENvbnRlbnQgOiBudWxsKVxuICAgIH0sXG4gICAgYXR0cjogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIHJlc3VsdFxuICAgICAgcmV0dXJuICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiAhKDEgaW4gYXJndW1lbnRzKSkgP1xuICAgICAgICAoIXRoaXMubGVuZ3RoIHx8IHRoaXNbMF0ubm9kZVR5cGUgIT09IDEgPyB1bmRlZmluZWQgOlxuICAgICAgICAgICghKHJlc3VsdCA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKG5hbWUpKSAmJiBuYW1lIGluIHRoaXNbMF0pID8gdGhpc1swXVtuYW1lXSA6IHJlc3VsdFxuICAgICAgICApIDpcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHJldHVyblxuICAgICAgICAgIGlmIChpc09iamVjdChuYW1lKSkgZm9yIChrZXkgaW4gbmFtZSkgc2V0QXR0cmlidXRlKHRoaXMsIGtleSwgbmFtZVtrZXldKVxuICAgICAgICAgIGVsc2Ugc2V0QXR0cmlidXRlKHRoaXMsIG5hbWUsIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSkpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKXtcbiAgICAgICAgc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSlcbiAgICAgIH0sIHRoaXMpfSlcbiAgICB9LFxuICAgIHByb3A6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIG5hbWUgPSBwcm9wTWFwW25hbWVdIHx8IG5hbWVcbiAgICAgIHJldHVybiAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpc1tuYW1lXSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiB0aGlzWzBdW25hbWVdKVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIGF0dHJOYW1lID0gJ2RhdGEtJyArIG5hbWUucmVwbGFjZShjYXBpdGFsUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIHZhciBkYXRhID0gKDEgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYXR0cihhdHRyTmFtZSwgdmFsdWUpIDpcbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lKVxuXG4gICAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRlc2VyaWFsaXplVmFsdWUoZGF0YSkgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy52YWx1ZSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiAodGhpc1swXS5tdWx0aXBsZSA/XG4gICAgICAgICAgICQodGhpc1swXSkuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNlbGVjdGVkIH0pLnBsdWNrKCd2YWx1ZScpIDpcbiAgICAgICAgICAgdGhpc1swXS52YWx1ZSlcbiAgICAgICAgKVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMpIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29vcmRzID0gZnVuY0FyZyh0aGlzLCBjb29yZGluYXRlcywgaW5kZXgsICR0aGlzLm9mZnNldCgpKSxcbiAgICAgICAgICAgIHBhcmVudE9mZnNldCA9ICR0aGlzLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLFxuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRvcDogIGNvb3Jkcy50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogY29vcmRzLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICgkdGhpcy5jc3MoJ3Bvc2l0aW9uJykgPT0gJ3N0YXRpYycpIHByb3BzWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJ1xuICAgICAgICAkdGhpcy5jc3MocHJvcHMpXG4gICAgICB9KVxuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICAgIHZhciBvYmogPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBvYmoubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgdG9wOiBvYmoudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChvYmoud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQob2JqLmhlaWdodClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczogZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKXtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSwgZWxlbWVudCA9IHRoaXNbMF1cbiAgICAgICAgaWYoIWVsZW1lbnQpIHJldHVyblxuICAgICAgICBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJylcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuICAgICAgICAgICQuZWFjaChwcm9wZXJ0eSwgZnVuY3Rpb24oXywgcHJvcCl7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IChlbGVtZW50LnN0eWxlW2NhbWVsaXplKHByb3ApXSB8fCBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0gJydcbiAgICAgIGlmICh0eXBlKHByb3BlcnR5KSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKVxuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wZXJ0eSkpIH0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjc3MgPSBkYXNoZXJpemUocHJvcGVydHkpICsgXCI6XCIgKyBtYXliZUFkZFB4KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoa2V5IGluIHByb3BlcnR5KVxuICAgICAgICAgIGlmICghcHJvcGVydHlba2V5XSAmJiBwcm9wZXJ0eVtrZXldICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKGtleSkpIH0pXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY3NzICs9IGRhc2hlcml6ZShrZXkpICsgJzonICsgbWF5YmVBZGRQeChrZXksIHByb3BlcnR5W2tleV0pICsgJzsnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcyB9KVxuICAgIH0sXG4gICAgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPyB0aGlzLmluZGV4T2YoJChlbGVtZW50KVswXSkgOiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXhPZih0aGlzWzBdKVxuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3QoY2xhc3NOYW1lKGVsKSlcbiAgICAgIH0sIGNsYXNzUkUobmFtZSkpXG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmICghKCdjbGFzc05hbWUnIGluIHRoaXMpKSByZXR1cm5cbiAgICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZSh0aGlzKSwgbmV3TmFtZSA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbHMpXG4gICAgICAgIG5ld05hbWUuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGtsYXNzKSkgY2xhc3NMaXN0LnB1c2goa2xhc3MpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggJiYgY2xhc3NOYW1lKHRoaXMsIGNscyArIChjbHMgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NMaXN0LmpvaW4oXCIgXCIpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKCEoJ2NsYXNzTmFtZScgaW4gdGhpcykpIHJldHVyblxuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2xhc3NOYW1lKHRoaXMsICcnKVxuICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc05hbWUodGhpcylcbiAgICAgICAgZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTGlzdCkuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnJlcGxhY2UoY2xhc3NSRShrbGFzcyksIFwiIFwiKVxuICAgICAgICB9KVxuICAgICAgICBjbGFzc05hbWUodGhpcywgY2xhc3NMaXN0LnRyaW0oKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24obmFtZSwgd2hlbil7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksIG5hbWVzID0gZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTmFtZSh0aGlzKSlcbiAgICAgICAgbmFtZXMuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgKHdoZW4gPT09IHVuZGVmaW5lZCA/ICEkdGhpcy5oYXNDbGFzcyhrbGFzcykgOiB3aGVuKSA/XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcyhrbGFzcykgOiAkdGhpcy5yZW1vdmVDbGFzcyhrbGFzcylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzY3JvbGxUb3A6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbFRvcCA9ICdzY3JvbGxUb3AnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsVG9wID8gdGhpc1swXS5zY3JvbGxUb3AgOiB0aGlzWzBdLnBhZ2VZT2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGhhc1Njcm9sbFRvcCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG9wID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odGhpcy5zY3JvbGxYLCB2YWx1ZSkgfSlcbiAgICB9LFxuICAgIHNjcm9sbExlZnQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbExlZnQgPSAnc2Nyb2xsTGVmdCcgaW4gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNTY3JvbGxMZWZ0ID8gdGhpc1swXS5zY3JvbGxMZWZ0IDogdGhpc1swXS5wYWdlWE9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxMZWZ0ID9cbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxMZWZ0ID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odmFsdWUsIHRoaXMuc2Nyb2xsWSkgfSlcbiAgICB9LFxuICAgIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICB2YXIgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICAgIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCksXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ICAgICAgID0gdGhpcy5vZmZzZXQoKSxcbiAgICAgICAgcGFyZW50T2Zmc2V0ID0gcm9vdE5vZGVSRS50ZXN0KG9mZnNldFBhcmVudFswXS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogb2Zmc2V0UGFyZW50Lm9mZnNldCgpXG5cbiAgICAgIC8vIFN1YnRyYWN0IGVsZW1lbnQgbWFyZ2luc1xuICAgICAgLy8gbm90ZTogd2hlbiBhbiBlbGVtZW50IGhhcyBtYXJnaW46IGF1dG8gdGhlIG9mZnNldExlZnQgYW5kIG1hcmdpbkxlZnRcbiAgICAgIC8vIGFyZSB0aGUgc2FtZSBpbiBTYWZhcmkgY2F1c2luZyBvZmZzZXQubGVmdCB0byBpbmNvcnJlY3RseSBiZSAwXG4gICAgICBvZmZzZXQudG9wICAtPSBwYXJzZUZsb2F0KCAkKGVsZW0pLmNzcygnbWFyZ2luLXRvcCcpICkgfHwgMFxuICAgICAgb2Zmc2V0LmxlZnQgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JykgKSB8fCAwXG5cbiAgICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgICAgcGFyZW50T2Zmc2V0LnRvcCAgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpICkgfHwgMFxuICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSApIHx8IDBcblxuICAgICAgLy8gU3VidHJhY3QgdGhlIHR3byBvZmZzZXRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6ICBvZmZzZXQudG9wICAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICAgIH1cbiAgICB9LFxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmJvZHlcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcm9vdE5vZGVSRS50ZXN0KHBhcmVudC5ub2RlTmFtZSkgJiYgJChwYXJlbnQpLmNzcyhcInBvc2l0aW9uXCIpID09IFwic3RhdGljXCIpXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudFxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvciBub3dcbiAgJC5mbi5kZXRhY2ggPSAkLmZuLnJlbW92ZVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBmdW5jdGlvbnNcbiAgO1snd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChmdW5jdGlvbihkaW1lbnNpb24pe1xuICAgIHZhciBkaW1lbnNpb25Qcm9wZXJ0eSA9XG4gICAgICBkaW1lbnNpb24ucmVwbGFjZSgvLi8sIGZ1bmN0aW9uKG0peyByZXR1cm4gbVswXS50b1VwcGVyQ2FzZSgpIH0pXG5cbiAgICAkLmZuW2RpbWVuc2lvbl0gPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgb2Zmc2V0LCBlbCA9IHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNXaW5kb3coZWwpID8gZWxbJ2lubmVyJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIGlzRG9jdW1lbnQoZWwpID8gZWwuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgZGltZW5zaW9uUHJvcGVydHldIDpcbiAgICAgICAgKG9mZnNldCA9IHRoaXMub2Zmc2V0KCkpICYmIG9mZnNldFtkaW1lbnNpb25dXG4gICAgICBlbHNlIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgZWwgPSAkKHRoaXMpXG4gICAgICAgIGVsLmNzcyhkaW1lbnNpb24sIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgZWxbZGltZW5zaW9uXSgpKSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyYXZlcnNlTm9kZShub2RlLCBmdW4pIHtcbiAgICBmdW4obm9kZSlcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdHJhdmVyc2VOb2RlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZnVuKVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGBhZnRlcmAsIGBwcmVwZW5kYCwgYGJlZm9yZWAsIGBhcHBlbmRgLFxuICAvLyBgaW5zZXJ0QWZ0ZXJgLCBgaW5zZXJ0QmVmb3JlYCwgYGFwcGVuZFRvYCwgYW5kIGBwcmVwZW5kVG9gIG1ldGhvZHMuXG4gIGFkamFjZW5jeU9wZXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdG9yLCBvcGVyYXRvckluZGV4KSB7XG4gICAgdmFyIGluc2lkZSA9IG9wZXJhdG9ySW5kZXggJSAyIC8vPT4gcHJlcGVuZCwgYXBwZW5kXG5cbiAgICAkLmZuW29wZXJhdG9yXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhcmd1bWVudHMgY2FuIGJlIG5vZGVzLCBhcnJheXMgb2Ygbm9kZXMsIFplcHRvIG9iamVjdHMgYW5kIEhUTUwgc3RyaW5nc1xuICAgICAgdmFyIGFyZ1R5cGUsIG5vZGVzID0gJC5tYXAoYXJndW1lbnRzLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIGFyZ1R5cGUgPSB0eXBlKGFyZylcbiAgICAgICAgICAgIHJldHVybiBhcmdUeXBlID09IFwib2JqZWN0XCIgfHwgYXJnVHlwZSA9PSBcImFycmF5XCIgfHwgYXJnID09IG51bGwgP1xuICAgICAgICAgICAgICBhcmcgOiB6ZXB0by5mcmFnbWVudChhcmcpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFyZW50LCBjb3B5QnlDbG9uZSA9IHRoaXMubGVuZ3RoID4gMVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oXywgdGFyZ2V0KXtcbiAgICAgICAgcGFyZW50ID0gaW5zaWRlID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGVcblxuICAgICAgICAvLyBjb252ZXJ0IGFsbCBtZXRob2RzIHRvIGEgXCJiZWZvcmVcIiBvcGVyYXRpb25cbiAgICAgICAgdGFyZ2V0ID0gb3BlcmF0b3JJbmRleCA9PSAwID8gdGFyZ2V0Lm5leHRTaWJsaW5nIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAxID8gdGFyZ2V0LmZpcnN0Q2hpbGQgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDIgPyB0YXJnZXQgOlxuICAgICAgICAgICAgICAgICBudWxsXG5cbiAgICAgICAgdmFyIHBhcmVudEluRG9jdW1lbnQgPSAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgcGFyZW50KVxuXG4gICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgaWYgKGNvcHlCeUNsb25lKSBub2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICBlbHNlIGlmICghcGFyZW50KSByZXR1cm4gJChub2RlKS5yZW1vdmUoKVxuXG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQpXG4gICAgICAgICAgaWYgKHBhcmVudEluRG9jdW1lbnQpIHRyYXZlcnNlTm9kZShub2RlLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUgIT0gbnVsbCAmJiBlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgKCFlbC50eXBlIHx8IGVsLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSAmJiAhZWwuc3JjKVxuICAgICAgICAgICAgICB3aW5kb3dbJ2V2YWwnXS5jYWxsKHdpbmRvdywgZWwuaW5uZXJIVE1MKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFmdGVyICAgID0+IGluc2VydEFmdGVyXG4gICAgLy8gcHJlcGVuZCAgPT4gcHJlcGVuZFRvXG4gICAgLy8gYmVmb3JlICAgPT4gaW5zZXJ0QmVmb3JlXG4gICAgLy8gYXBwZW5kICAgPT4gYXBwZW5kVG9cbiAgICAkLmZuW2luc2lkZSA/IG9wZXJhdG9yKydUbycgOiAnaW5zZXJ0Jysob3BlcmF0b3JJbmRleCA/ICdCZWZvcmUnIDogJ0FmdGVyJyldID0gZnVuY3Rpb24oaHRtbCl7XG4gICAgICAkKGh0bWwpW29wZXJhdG9yXSh0aGlzKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pXG5cbiAgemVwdG8uWi5wcm90b3R5cGUgPSBaLnByb3RvdHlwZSA9ICQuZm5cblxuICAvLyBFeHBvcnQgaW50ZXJuYWwgQVBJIGZ1bmN0aW9ucyBpbiB0aGUgYCQuemVwdG9gIG5hbWVzcGFjZVxuICB6ZXB0by51bmlxID0gdW5pcVxuICB6ZXB0by5kZXNlcmlhbGl6ZVZhbHVlID0gZGVzZXJpYWxpemVWYWx1ZVxuICAkLnplcHRvID0gemVwdG9cblxuICByZXR1cm4gJFxufSkoKVxuXG4vLyBJZiBgJGAgaXMgbm90IHlldCBkZWZpbmVkLCBwb2ludCBpdCB0byBgWmVwdG9gXG53aW5kb3cuWmVwdG8gPSBaZXB0b1xud2luZG93LiQgPT09IHVuZGVmaW5lZCAmJiAod2luZG93LiQgPSBaZXB0bylcblxuLy8gICAgIFplcHRvLmpzXG4vLyAgICAgKGMpIDIwMTAtMjAxNCBUaG9tYXMgRnVjaHNcbi8vICAgICBaZXB0by5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyhmdW5jdGlvbigkKXtcbiAgZnVuY3Rpb24gZGV0ZWN0KHVhLCBwbGF0Zm9ybSl7XG4gICAgdmFyIG9zID0gdGhpcy5vcyA9IHt9LCBicm93c2VyID0gdGhpcy5icm93c2VyID0ge30sXG4gICAgICB3ZWJraXQgPSB1YS5tYXRjaCgvV2ViW2tLXWl0W1xcL117MCwxfShbXFxkLl0rKS8pLFxuICAgICAgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKSxcbiAgICAgIG9zeCA9ICEhdWEubWF0Y2goL1xcKE1hY2ludG9zaFxcOyBJbnRlbCAvKSxcbiAgICAgIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pLFxuICAgICAgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/LyksXG4gICAgICBpcGhvbmUgPSAhaXBhZCAmJiB1YS5tYXRjaCgvKGlQaG9uZVxcc09TKVxccyhbXFxkX10rKS8pLFxuICAgICAgd2Vib3MgPSB1YS5tYXRjaCgvKHdlYk9TfGhwd09TKVtcXHNcXC9dKFtcXGQuXSspLyksXG4gICAgICB3aW4gPSAvV2luXFxkezJ9fFdpbmRvd3MvLnRlc3QocGxhdGZvcm0pLFxuICAgICAgd3AgPSB1YS5tYXRjaCgvV2luZG93cyBQaG9uZSAoW1xcZC5dKykvKSxcbiAgICAgIHRvdWNocGFkID0gd2Vib3MgJiYgdWEubWF0Y2goL1RvdWNoUGFkLyksXG4gICAgICBraW5kbGUgPSB1YS5tYXRjaCgvS2luZGxlXFwvKFtcXGQuXSspLyksXG4gICAgICBzaWxrID0gdWEubWF0Y2goL1NpbGtcXC8oW1xcZC5fXSspLyksXG4gICAgICBibGFja2JlcnJ5ID0gdWEubWF0Y2goLyhCbGFja0JlcnJ5KS4qVmVyc2lvblxcLyhbXFxkLl0rKS8pLFxuICAgICAgYmIxMCA9IHVhLm1hdGNoKC8oQkIxMCkuKlZlcnNpb25cXC8oW1xcZC5dKykvKSxcbiAgICAgIHJpbXRhYmxldG9zID0gdWEubWF0Y2goLyhSSU1cXHNUYWJsZXRcXHNPUylcXHMoW1xcZC5dKykvKSxcbiAgICAgIHBsYXlib29rID0gdWEubWF0Y2goL1BsYXlCb29rLyksXG4gICAgICBjaHJvbWUgPSB1YS5tYXRjaCgvQ2hyb21lXFwvKFtcXGQuXSspLykgfHwgdWEubWF0Y2goL0NyaU9TXFwvKFtcXGQuXSspLyksXG4gICAgICBmaXJlZm94ID0gdWEubWF0Y2goL0ZpcmVmb3hcXC8oW1xcZC5dKykvKSxcbiAgICAgIGZpcmVmb3hvcyA9IHVhLm1hdGNoKC9cXCgoPzpNb2JpbGV8VGFibGV0KTsgcnY6KFtcXGQuXSspXFwpLipGaXJlZm94XFwvW1xcZC5dKy8pLFxuICAgICAgaWUgPSB1YS5tYXRjaCgvTVNJRVxccyhbXFxkLl0rKS8pIHx8IHVhLm1hdGNoKC9UcmlkZW50XFwvW1xcZF0oPz1bXlxcP10rKS4qcnY6KFswLTkuXS4pLyksXG4gICAgICB3ZWJ2aWV3ID0gIWNocm9tZSAmJiB1YS5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS8pLFxuICAgICAgc2FmYXJpID0gd2VidmlldyB8fCB1YS5tYXRjaCgvVmVyc2lvblxcLyhbXFxkLl0rKShbXlNdKFNhZmFyaSl8W15NXSooTW9iaWxlKVteU10qKFNhZmFyaSkpLylcblxuICAgIC8vIFRvZG86IGNsZWFuIHRoaXMgdXAgd2l0aCBhIGJldHRlciBPUy9icm93c2VyIHNlcGVyYXRpb246XG4gICAgLy8gLSBkaXNjZXJuIChtb3JlKSBiZXR3ZWVuIG11bHRpcGxlIGJyb3dzZXJzIG9uIGFuZHJvaWRcbiAgICAvLyAtIGRlY2lkZSBpZiBraW5kbGUgZmlyZSBpbiBzaWxrIG1vZGUgaXMgYW5kcm9pZCBvciBub3RcbiAgICAvLyAtIEZpcmVmb3ggb24gQW5kcm9pZCBkb2Vzbid0IHNwZWNpZnkgdGhlIEFuZHJvaWQgdmVyc2lvblxuICAgIC8vIC0gcG9zc2libHkgZGV2aWRlIGluIG9zLCBkZXZpY2UgYW5kIGJyb3dzZXIgaGFzaGVzXG5cbiAgICBpZiAoYnJvd3Nlci53ZWJraXQgPSAhIXdlYmtpdCkgYnJvd3Nlci52ZXJzaW9uID0gd2Via2l0WzFdXG5cbiAgICBpZiAoYW5kcm9pZCkgb3MuYW5kcm9pZCA9IHRydWUsIG9zLnZlcnNpb24gPSBhbmRyb2lkWzJdXG4gICAgaWYgKGlwaG9uZSAmJiAhaXBvZCkgb3MuaW9zID0gb3MuaXBob25lID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGlwaG9uZVsyXS5yZXBsYWNlKC9fL2csICcuJylcbiAgICBpZiAoaXBhZCkgb3MuaW9zID0gb3MuaXBhZCA9IHRydWUsIG9zLnZlcnNpb24gPSBpcGFkWzJdLnJlcGxhY2UoL18vZywgJy4nKVxuICAgIGlmIChpcG9kKSBvcy5pb3MgPSBvcy5pcG9kID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGlwb2RbM10gPyBpcG9kWzNdLnJlcGxhY2UoL18vZywgJy4nKSA6IG51bGxcbiAgICBpZiAod3ApIG9zLndwID0gdHJ1ZSwgb3MudmVyc2lvbiA9IHdwWzFdXG4gICAgaWYgKHdlYm9zKSBvcy53ZWJvcyA9IHRydWUsIG9zLnZlcnNpb24gPSB3ZWJvc1syXVxuICAgIGlmICh0b3VjaHBhZCkgb3MudG91Y2hwYWQgPSB0cnVlXG4gICAgaWYgKGJsYWNrYmVycnkpIG9zLmJsYWNrYmVycnkgPSB0cnVlLCBvcy52ZXJzaW9uID0gYmxhY2tiZXJyeVsyXVxuICAgIGlmIChiYjEwKSBvcy5iYjEwID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGJiMTBbMl1cbiAgICBpZiAocmltdGFibGV0b3MpIG9zLnJpbXRhYmxldG9zID0gdHJ1ZSwgb3MudmVyc2lvbiA9IHJpbXRhYmxldG9zWzJdXG4gICAgaWYgKHBsYXlib29rKSBicm93c2VyLnBsYXlib29rID0gdHJ1ZVxuICAgIGlmIChraW5kbGUpIG9zLmtpbmRsZSA9IHRydWUsIG9zLnZlcnNpb24gPSBraW5kbGVbMV1cbiAgICBpZiAoc2lsaykgYnJvd3Nlci5zaWxrID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gc2lsa1sxXVxuICAgIGlmICghc2lsayAmJiBvcy5hbmRyb2lkICYmIHVhLm1hdGNoKC9LaW5kbGUgRmlyZS8pKSBicm93c2VyLnNpbGsgPSB0cnVlXG4gICAgaWYgKGNocm9tZSkgYnJvd3Nlci5jaHJvbWUgPSB0cnVlLCBicm93c2VyLnZlcnNpb24gPSBjaHJvbWVbMV1cbiAgICBpZiAoZmlyZWZveCkgYnJvd3Nlci5maXJlZm94ID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gZmlyZWZveFsxXVxuICAgIGlmIChmaXJlZm94b3MpIG9zLmZpcmVmb3hvcyA9IHRydWUsIG9zLnZlcnNpb24gPSBmaXJlZm94b3NbMV1cbiAgICBpZiAoaWUpIGJyb3dzZXIuaWUgPSB0cnVlLCBicm93c2VyLnZlcnNpb24gPSBpZVsxXVxuICAgIGlmIChzYWZhcmkgJiYgKG9zeCB8fCBvcy5pb3MgfHwgd2luKSkge1xuICAgICAgYnJvd3Nlci5zYWZhcmkgPSB0cnVlXG4gICAgICBpZiAoIW9zLmlvcykgYnJvd3Nlci52ZXJzaW9uID0gc2FmYXJpWzFdXG4gICAgfVxuICAgIGlmICh3ZWJ2aWV3KSBicm93c2VyLndlYnZpZXcgPSB0cnVlXG5cbiAgICBvcy50YWJsZXQgPSAhIShpcGFkIHx8IHBsYXlib29rIHx8IChhbmRyb2lkICYmICF1YS5tYXRjaCgvTW9iaWxlLykpIHx8XG4gICAgICAoZmlyZWZveCAmJiB1YS5tYXRjaCgvVGFibGV0LykpIHx8IChpZSAmJiAhdWEubWF0Y2goL1Bob25lLykgJiYgdWEubWF0Y2goL1RvdWNoLykpKVxuICAgIG9zLnBob25lICA9ICEhKCFvcy50YWJsZXQgJiYgIW9zLmlwb2QgJiYgKGFuZHJvaWQgfHwgaXBob25lIHx8IHdlYm9zIHx8IGJsYWNrYmVycnkgfHwgYmIxMCB8fFxuICAgICAgKGNocm9tZSAmJiB1YS5tYXRjaCgvQW5kcm9pZC8pKSB8fCAoY2hyb21lICYmIHVhLm1hdGNoKC9DcmlPU1xcLyhbXFxkLl0rKS8pKSB8fFxuICAgICAgKGZpcmVmb3ggJiYgdWEubWF0Y2goL01vYmlsZS8pKSB8fCAoaWUgJiYgdWEubWF0Y2goL1RvdWNoLykpKSlcbiAgfVxuXG4gIGRldGVjdC5jYWxsKCQsIG5hdmlnYXRvci51c2VyQWdlbnQsIG5hdmlnYXRvci5wbGF0Zm9ybSlcbiAgLy8gbWFrZSBhdmFpbGFibGUgdG8gdW5pdCB0ZXN0c1xuICAkLl9fZGV0ZWN0ID0gZGV0ZWN0XG5cbn0pKFplcHRvKVxuXG4vLyAgICAgWmVwdG8uanNcbi8vICAgICAoYykgMjAxMC0yMDE0IFRob21hcyBGdWNoc1xuLy8gICAgIFplcHRvLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47KGZ1bmN0aW9uKCQpe1xuICB2YXIgX3ppZCA9IDEsIHVuZGVmaW5lZCxcbiAgICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgICAgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbixcbiAgICAgIGlzU3RyaW5nID0gZnVuY3Rpb24ob2JqKXsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ3N0cmluZycgfSxcbiAgICAgIGhhbmRsZXJzID0ge30sXG4gICAgICBzcGVjaWFsRXZlbnRzPXt9LFxuICAgICAgZm9jdXNpblN1cHBvcnRlZCA9ICdvbmZvY3VzaW4nIGluIHdpbmRvdyxcbiAgICAgIGZvY3VzID0geyBmb2N1czogJ2ZvY3VzaW4nLCBibHVyOiAnZm9jdXNvdXQnIH0sXG4gICAgICBob3ZlciA9IHsgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsIG1vdXNlbGVhdmU6ICdtb3VzZW91dCcgfVxuXG4gIHNwZWNpYWxFdmVudHMuY2xpY2sgPSBzcGVjaWFsRXZlbnRzLm1vdXNlZG93biA9IHNwZWNpYWxFdmVudHMubW91c2V1cCA9IHNwZWNpYWxFdmVudHMubW91c2Vtb3ZlID0gJ01vdXNlRXZlbnRzJ1xuXG4gIGZ1bmN0aW9uIHppZChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuX3ppZCB8fCAoZWxlbWVudC5femlkID0gX3ppZCsrKVxuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKSB7XG4gICAgZXZlbnQgPSBwYXJzZShldmVudClcbiAgICBpZiAoZXZlbnQubnMpIHZhciBtYXRjaGVyID0gbWF0Y2hlckZvcihldmVudC5ucylcbiAgICByZXR1cm4gKGhhbmRsZXJzW3ppZChlbGVtZW50KV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAmJiAoIWV2ZW50LmUgIHx8IGhhbmRsZXIuZSA9PSBldmVudC5lKVxuICAgICAgICAmJiAoIWV2ZW50Lm5zIHx8IG1hdGNoZXIudGVzdChoYW5kbGVyLm5zKSlcbiAgICAgICAgJiYgKCFmbiAgICAgICB8fCB6aWQoaGFuZGxlci5mbikgPT09IHppZChmbikpXG4gICAgICAgICYmICghc2VsZWN0b3IgfHwgaGFuZGxlci5zZWwgPT0gc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBwYXJzZShldmVudCkge1xuICAgIHZhciBwYXJ0cyA9ICgnJyArIGV2ZW50KS5zcGxpdCgnLicpXG4gICAgcmV0dXJuIHtlOiBwYXJ0c1swXSwgbnM6IHBhcnRzLnNsaWNlKDEpLnNvcnQoKS5qb2luKCcgJyl9XG4gIH1cbiAgZnVuY3Rpb24gbWF0Y2hlckZvcihucykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefCApJyArIG5zLnJlcGxhY2UoJyAnLCAnIC4qID8nKSArICcoPzogfCQpJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlU2V0dGluZykge1xuICAgIHJldHVybiBoYW5kbGVyLmRlbCAmJlxuICAgICAgKCFmb2N1c2luU3VwcG9ydGVkICYmIChoYW5kbGVyLmUgaW4gZm9jdXMpKSB8fFxuICAgICAgISFjYXB0dXJlU2V0dGluZ1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhbEV2ZW50KHR5cGUpIHtcbiAgICByZXR1cm4gaG92ZXJbdHlwZV0gfHwgKGZvY3VzaW5TdXBwb3J0ZWQgJiYgZm9jdXNbdHlwZV0pIHx8IHR5cGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChlbGVtZW50LCBldmVudHMsIGZuLCBkYXRhLCBzZWxlY3RvciwgZGVsZWdhdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudCksIHNldCA9IChoYW5kbGVyc1tpZF0gfHwgKGhhbmRsZXJzW2lkXSA9IFtdKSlcbiAgICBldmVudHMuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgaWYgKGV2ZW50ID09ICdyZWFkeScpIHJldHVybiAkKGRvY3VtZW50KS5yZWFkeShmbilcbiAgICAgIHZhciBoYW5kbGVyICAgPSBwYXJzZShldmVudClcbiAgICAgIGhhbmRsZXIuZm4gICAgPSBmblxuICAgICAgaGFuZGxlci5zZWwgICA9IHNlbGVjdG9yXG4gICAgICAvLyBlbXVsYXRlIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmVcbiAgICAgIGlmIChoYW5kbGVyLmUgaW4gaG92ZXIpIGZuID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhJC5jb250YWlucyh0aGlzLCByZWxhdGVkKSkpXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXIuZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgaGFuZGxlci5kZWwgICA9IGRlbGVnYXRvclxuICAgICAgdmFyIGNhbGxiYWNrICA9IGRlbGVnYXRvciB8fCBmblxuICAgICAgaGFuZGxlci5wcm94eSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlID0gY29tcGF0aWJsZShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm5cbiAgICAgICAgZS5kYXRhID0gZGF0YVxuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoZWxlbWVudCwgZS5fYXJncyA9PSB1bmRlZmluZWQgPyBbZV0gOiBbZV0uY29uY2F0KGUuX2FyZ3MpKVxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuaSA9IHNldC5sZW5ndGhcbiAgICAgIHNldC5wdXNoKGhhbmRsZXIpXG4gICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGV2ZW50cywgZm4sIHNlbGVjdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudClcbiAgICA7KGV2ZW50cyB8fCAnJykuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LCBmbiwgc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tpZF1baGFuZGxlci5pXVxuICAgICAgaWYgKCdyZW1vdmVFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KVxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIocmVhbEV2ZW50KGhhbmRsZXIuZSksIGhhbmRsZXIucHJveHksIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gICQuZXZlbnQgPSB7IGFkZDogYWRkLCByZW1vdmU6IHJlbW92ZSB9XG5cbiAgJC5wcm94eSA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MgPSAoMiBpbiBhcmd1bWVudHMpICYmIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgdmFyIHByb3h5Rm4gPSBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyA/IGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkgOiBhcmd1bWVudHMpIH1cbiAgICAgIHByb3h5Rm4uX3ppZCA9IHppZChmbilcbiAgICAgIHJldHVybiBwcm94eUZuXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGZuW2NvbnRleHRdLCBmbilcbiAgICAgICAgcmV0dXJuICQucHJveHkuYXBwbHkobnVsbCwgYXJncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkLnByb3h5KGZuW2NvbnRleHRdLCBmbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGVkIGZ1bmN0aW9uXCIpXG4gICAgfVxuICB9XG5cbiAgJC5mbi5iaW5kID0gZnVuY3Rpb24oZXZlbnQsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgZGF0YSwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmJpbmQgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9mZihldmVudCwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi5vbmUgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCAxKVxuICB9XG5cbiAgdmFyIHJldHVyblRydWUgPSBmdW5jdGlvbigpe3JldHVybiB0cnVlfSxcbiAgICAgIHJldHVybkZhbHNlID0gZnVuY3Rpb24oKXtyZXR1cm4gZmFsc2V9LFxuICAgICAgaWdub3JlUHJvcGVydGllcyA9IC9eKFtBLVpdfHJldHVyblZhbHVlJHxsYXllcltYWV0kKS8sXG4gICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgIH1cblxuICBmdW5jdGlvbiBjb21wYXRpYmxlKGV2ZW50LCBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlIHx8ICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHNvdXJjZSB8fCAoc291cmNlID0gZXZlbnQpXG5cbiAgICAgICQuZWFjaChldmVudE1ldGhvZHMsIGZ1bmN0aW9uKG5hbWUsIHByZWRpY2F0ZSkge1xuICAgICAgICB2YXIgc291cmNlTWV0aG9kID0gc291cmNlW25hbWVdXG4gICAgICAgIGV2ZW50W25hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICB0aGlzW3ByZWRpY2F0ZV0gPSByZXR1cm5UcnVlXG4gICAgICAgICAgcmV0dXJuIHNvdXJjZU1ldGhvZCAmJiBzb3VyY2VNZXRob2QuYXBwbHkoc291cmNlLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRbcHJlZGljYXRlXSA9IHJldHVybkZhbHNlXG4gICAgICB9KVxuXG4gICAgICBpZiAoc291cmNlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHVuZGVmaW5lZCA/IHNvdXJjZS5kZWZhdWx0UHJldmVudGVkIDpcbiAgICAgICAgICAncmV0dXJuVmFsdWUnIGluIHNvdXJjZSA/IHNvdXJjZS5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgOlxuICAgICAgICAgIHNvdXJjZS5nZXRQcmV2ZW50RGVmYXVsdCAmJiBzb3VyY2UuZ2V0UHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb3h5KGV2ZW50KSB7XG4gICAgdmFyIGtleSwgcHJveHkgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH1cbiAgICBmb3IgKGtleSBpbiBldmVudClcbiAgICAgIGlmICghaWdub3JlUHJvcGVydGllcy50ZXN0KGtleSkgJiYgZXZlbnRba2V5XSAhPT0gdW5kZWZpbmVkKSBwcm94eVtrZXldID0gZXZlbnRba2V5XVxuXG4gICAgcmV0dXJuIGNvbXBhdGlibGUocHJveHksIGV2ZW50KVxuICB9XG5cbiAgJC5mbi5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cblxuICAkLmZuLmxpdmUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgJC5mbi5kaWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gICQuZm4ub24gPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCBvbmUpe1xuICAgIHZhciBhdXRvUmVtb3ZlLCBkZWxlZ2F0b3IsICR0aGlzID0gdGhpc1xuICAgIGlmIChldmVudCAmJiAhaXNTdHJpbmcoZXZlbnQpKSB7XG4gICAgICAkLmVhY2goZXZlbnQsIGZ1bmN0aW9uKHR5cGUsIGZuKXtcbiAgICAgICAgJHRoaXMub24odHlwZSwgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuICR0aGlzXG4gICAgfVxuXG4gICAgaWYgKCFpc1N0cmluZyhzZWxlY3RvcikgJiYgIWlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrICE9PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpIHx8IGRhdGEgPT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBkYXRhLCBkYXRhID0gdW5kZWZpbmVkXG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IGZhbHNlKSBjYWxsYmFjayA9IHJldHVybkZhbHNlXG5cbiAgICByZXR1cm4gJHRoaXMuZWFjaChmdW5jdGlvbihfLCBlbGVtZW50KXtcbiAgICAgIGlmIChvbmUpIGF1dG9SZW1vdmUgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQsIGUudHlwZSwgY2FsbGJhY2spXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvcikgZGVsZWdhdG9yID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBldnQsIG1hdGNoID0gJChlLnRhcmdldCkuY2xvc2VzdChzZWxlY3RvciwgZWxlbWVudCkuZ2V0KDApXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGV2dCA9ICQuZXh0ZW5kKGNyZWF0ZVByb3h5KGUpLCB7Y3VycmVudFRhcmdldDogbWF0Y2gsIGxpdmVGaXJlZDogZWxlbWVudH0pXG4gICAgICAgICAgcmV0dXJuIChhdXRvUmVtb3ZlIHx8IGNhbGxiYWNrKS5hcHBseShtYXRjaCwgW2V2dF0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWRkKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgZGF0YSwgc2VsZWN0b3IsIGRlbGVnYXRvciB8fCBhdXRvUmVtb3ZlKVxuICAgIH0pXG4gIH1cbiAgJC5mbi5vZmYgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKXtcbiAgICB2YXIgJHRoaXMgPSB0aGlzXG4gICAgaWYgKGV2ZW50ICYmICFpc1N0cmluZyhldmVudCkpIHtcbiAgICAgICQuZWFjaChldmVudCwgZnVuY3Rpb24odHlwZSwgZm4pe1xuICAgICAgICAkdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAkdGhpc1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmcoc2VsZWN0b3IpICYmICFpc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayAhPT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkgY2FsbGJhY2sgPSByZXR1cm5GYWxzZVxuXG4gICAgcmV0dXJuICR0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZSh0aGlzLCBldmVudCwgY2FsbGJhY2ssIHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgZXZlbnQgPSAoaXNTdHJpbmcoZXZlbnQpIHx8ICQuaXNQbGFpbk9iamVjdChldmVudCkpID8gJC5FdmVudChldmVudCkgOiBjb21wYXRpYmxlKGV2ZW50KVxuICAgIGV2ZW50Ll9hcmdzID0gYXJnc1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIC8vIGhhbmRsZSBmb2N1cygpLCBibHVyKCkgYnkgY2FsbGluZyB0aGVtIGRpcmVjdGx5XG4gICAgICBpZiAoZXZlbnQudHlwZSBpbiBmb2N1cyAmJiB0eXBlb2YgdGhpc1tldmVudC50eXBlXSA9PSBcImZ1bmN0aW9uXCIpIHRoaXNbZXZlbnQudHlwZV0oKVxuICAgICAgLy8gaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gbWlnaHQgbm90IGJlIERPTSBlbGVtZW50c1xuICAgICAgZWxzZSBpZiAoJ2Rpc3BhdGNoRXZlbnQnIGluIHRoaXMpIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGVsc2UgJCh0aGlzKS50cmlnZ2VySGFuZGxlcihldmVudCwgYXJncylcbiAgICB9KVxuICB9XG5cbiAgLy8gdHJpZ2dlcnMgZXZlbnQgaGFuZGxlcnMgb24gY3VycmVudCBlbGVtZW50IGp1c3QgYXMgaWYgYW4gZXZlbnQgb2NjdXJyZWQsXG4gIC8vIGRvZXNuJ3QgdHJpZ2dlciBhbiBhY3R1YWwgZXZlbnQsIGRvZXNuJ3QgYnViYmxlXG4gICQuZm4udHJpZ2dlckhhbmRsZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgdmFyIGUsIHJlc3VsdFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbGVtZW50KXtcbiAgICAgIGUgPSBjcmVhdGVQcm94eShpc1N0cmluZyhldmVudCkgPyAkLkV2ZW50KGV2ZW50KSA6IGV2ZW50KVxuICAgICAgZS5fYXJncyA9IGFyZ3NcbiAgICAgIGUudGFyZ2V0ID0gZWxlbWVudFxuICAgICAgJC5lYWNoKGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudC50eXBlIHx8IGV2ZW50KSwgZnVuY3Rpb24oaSwgaGFuZGxlcil7XG4gICAgICAgIHJlc3VsdCA9IGhhbmRsZXIucHJveHkoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gc2hvcnRjdXQgbWV0aG9kcyBmb3IgYC5iaW5kKGV2ZW50LCBmbilgIGZvciBlYWNoIGV2ZW50IHR5cGVcbiAgOygnZm9jdXNpbiBmb2N1c291dCBmb2N1cyBibHVyIGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgJytcbiAgJ21vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlICcrXG4gICdjaGFuZ2Ugc2VsZWN0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3InKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkLmZuW2V2ZW50XSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gKDAgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYmluZChldmVudCwgY2FsbGJhY2spIDpcbiAgICAgICAgdGhpcy50cmlnZ2VyKGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICAkLkV2ZW50ID0gZnVuY3Rpb24odHlwZSwgcHJvcHMpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHR5cGUpKSBwcm9wcyA9IHR5cGUsIHR5cGUgPSBwcm9wcy50eXBlXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoc3BlY2lhbEV2ZW50c1t0eXBlXSB8fCAnRXZlbnRzJyksIGJ1YmJsZXMgPSB0cnVlXG4gICAgaWYgKHByb3BzKSBmb3IgKHZhciBuYW1lIGluIHByb3BzKSAobmFtZSA9PSAnYnViYmxlcycpID8gKGJ1YmJsZXMgPSAhIXByb3BzW25hbWVdKSA6IChldmVudFtuYW1lXSA9IHByb3BzW25hbWVdKVxuICAgIGV2ZW50LmluaXRFdmVudCh0eXBlLCBidWJibGVzLCB0cnVlKVxuICAgIHJldHVybiBjb21wYXRpYmxlKGV2ZW50KVxuICB9XG5cbn0pKFplcHRvKVxuXG4vLyAgICAgWmVwdG8uanNcbi8vICAgICAoYykgMjAxMC0yMDE0IFRob21hcyBGdWNoc1xuLy8gICAgIFplcHRvLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47KGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCl7XG4gIHZhciBwcmVmaXggPSAnJywgZXZlbnRQcmVmaXgsIGVuZEV2ZW50TmFtZSwgZW5kQW5pbWF0aW9uTmFtZSxcbiAgICB2ZW5kb3JzID0geyBXZWJraXQ6ICd3ZWJraXQnLCBNb3o6ICcnLCBPOiAnbycgfSxcbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCwgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgc3VwcG9ydGVkVHJhbnNmb3JtcyA9IC9eKCh0cmFuc2xhdGV8cm90YXRlfHNjYWxlKShYfFl8WnwzZCk/fG1hdHJpeCgzZCk/fHBlcnNwZWN0aXZlfHNrZXcoWHxZKT8pJC9pLFxuICAgIHRyYW5zZm9ybSxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHksIHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvblRpbWluZywgdHJhbnNpdGlvbkRlbGF5LFxuICAgIGFuaW1hdGlvbk5hbWUsIGFuaW1hdGlvbkR1cmF0aW9uLCBhbmltYXRpb25UaW1pbmcsIGFuaW1hdGlvbkRlbGF5LFxuICAgIGNzc1Jlc2V0ID0ge31cblxuICBmdW5jdGlvbiBkYXNoZXJpemUoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplRXZlbnQobmFtZSkgeyByZXR1cm4gZXZlbnRQcmVmaXggPyBldmVudFByZWZpeCArIG5hbWUgOiBuYW1lLnRvTG93ZXJDYXNlKCkgfVxuXG4gICQuZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbih2ZW5kb3IsIGV2ZW50KXtcbiAgICBpZiAodGVzdEVsLnN0eWxlW3ZlbmRvciArICdUcmFuc2l0aW9uUHJvcGVydHknXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKSArICctJ1xuICAgICAgZXZlbnRQcmVmaXggPSBldmVudFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIHRyYW5zZm9ybSA9IHByZWZpeCArICd0cmFuc2Zvcm0nXG4gIGNzc1Jlc2V0W3RyYW5zaXRpb25Qcm9wZXJ0eSA9IHByZWZpeCArICd0cmFuc2l0aW9uLXByb3BlcnR5J10gPVxuICBjc3NSZXNldFt0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAndHJhbnNpdGlvbi1kdXJhdGlvbiddID1cbiAgY3NzUmVzZXRbdHJhbnNpdGlvbkRlbGF5ICAgID0gcHJlZml4ICsgJ3RyYW5zaXRpb24tZGVsYXknXSA9XG4gIGNzc1Jlc2V0W3RyYW5zaXRpb25UaW1pbmcgICA9IHByZWZpeCArICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID1cbiAgY3NzUmVzZXRbYW5pbWF0aW9uTmFtZSAgICAgID0gcHJlZml4ICsgJ2FuaW1hdGlvbi1uYW1lJ10gPVxuICBjc3NSZXNldFthbmltYXRpb25EdXJhdGlvbiAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPVxuICBjc3NSZXNldFthbmltYXRpb25EZWxheSAgICAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLWRlbGF5J10gPVxuICBjc3NSZXNldFthbmltYXRpb25UaW1pbmcgICAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJydcblxuICAkLmZ4ID0ge1xuICAgIG9mZjogKGV2ZW50UHJlZml4ID09PSB1bmRlZmluZWQgJiYgdGVzdEVsLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSxcbiAgICBzcGVlZHM6IHsgX2RlZmF1bHQ6IDQwMCwgZmFzdDogMjAwLCBzbG93OiA2MDAgfSxcbiAgICBjc3NQcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2l0aW9uRW5kOiBub3JtYWxpemVFdmVudCgnVHJhbnNpdGlvbkVuZCcpLFxuICAgIGFuaW1hdGlvbkVuZDogbm9ybWFsaXplRXZlbnQoJ0FuaW1hdGlvbkVuZCcpXG4gIH1cblxuICAkLmZuLmFuaW1hdGUgPSBmdW5jdGlvbihwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzZSwgY2FsbGJhY2ssIGRlbGF5KXtcbiAgICBpZiAoJC5pc0Z1bmN0aW9uKGR1cmF0aW9uKSlcbiAgICAgIGNhbGxiYWNrID0gZHVyYXRpb24sIGVhc2UgPSB1bmRlZmluZWQsIGR1cmF0aW9uID0gdW5kZWZpbmVkXG4gICAgaWYgKCQuaXNGdW5jdGlvbihlYXNlKSlcbiAgICAgIGNhbGxiYWNrID0gZWFzZSwgZWFzZSA9IHVuZGVmaW5lZFxuICAgIGlmICgkLmlzUGxhaW5PYmplY3QoZHVyYXRpb24pKVxuICAgICAgZWFzZSA9IGR1cmF0aW9uLmVhc2luZywgY2FsbGJhY2sgPSBkdXJhdGlvbi5jb21wbGV0ZSwgZGVsYXkgPSBkdXJhdGlvbi5kZWxheSwgZHVyYXRpb24gPSBkdXJhdGlvbi5kdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbikgZHVyYXRpb24gPSAodHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gOlxuICAgICAgICAgICAgICAgICAgICAoJC5meC5zcGVlZHNbZHVyYXRpb25dIHx8ICQuZnguc3BlZWRzLl9kZWZhdWx0KSkgLyAxMDAwXG4gICAgaWYgKGRlbGF5KSBkZWxheSA9IHBhcnNlRmxvYXQoZGVsYXkpIC8gMTAwMFxuICAgIHJldHVybiB0aGlzLmFuaW0ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UsIGNhbGxiYWNrLCBkZWxheSlcbiAgfVxuXG4gICQuZm4uYW5pbSA9IGZ1bmN0aW9uKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNlLCBjYWxsYmFjaywgZGVsYXkpe1xuICAgIHZhciBrZXksIGNzc1ZhbHVlcyA9IHt9LCBjc3NQcm9wZXJ0aWVzLCB0cmFuc2Zvcm1zID0gJycsXG4gICAgICAgIHRoYXQgPSB0aGlzLCB3cmFwcGVkQ2FsbGJhY2ssIGVuZEV2ZW50ID0gJC5meC50cmFuc2l0aW9uRW5kLFxuICAgICAgICBmaXJlZCA9IGZhbHNlXG5cbiAgICBpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkgZHVyYXRpb24gPSAkLmZ4LnNwZWVkcy5fZGVmYXVsdCAvIDEwMDBcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkgZGVsYXkgPSAwXG4gICAgaWYgKCQuZngub2ZmKSBkdXJhdGlvbiA9IDBcblxuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyA9PSAnc3RyaW5nJykge1xuICAgICAgLy8ga2V5ZnJhbWUgYW5pbWF0aW9uXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uTmFtZV0gPSBwcm9wZXJ0aWVzXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uRHVyYXRpb25dID0gZHVyYXRpb24gKyAncydcbiAgICAgIGNzc1ZhbHVlc1thbmltYXRpb25EZWxheV0gPSBkZWxheSArICdzJ1xuICAgICAgY3NzVmFsdWVzW2FuaW1hdGlvblRpbWluZ10gPSAoZWFzZSB8fCAnbGluZWFyJylcbiAgICAgIGVuZEV2ZW50ID0gJC5meC5hbmltYXRpb25FbmRcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUHJvcGVydGllcyA9IFtdXG4gICAgICAvLyBDU1MgdHJhbnNpdGlvbnNcbiAgICAgIGZvciAoa2V5IGluIHByb3BlcnRpZXMpXG4gICAgICAgIGlmIChzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3Qoa2V5KSkgdHJhbnNmb3JtcyArPSBrZXkgKyAnKCcgKyBwcm9wZXJ0aWVzW2tleV0gKyAnKSAnXG4gICAgICAgIGVsc2UgY3NzVmFsdWVzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV0sIGNzc1Byb3BlcnRpZXMucHVzaChkYXNoZXJpemUoa2V5KSlcblxuICAgICAgaWYgKHRyYW5zZm9ybXMpIGNzc1ZhbHVlc1t0cmFuc2Zvcm1dID0gdHJhbnNmb3JtcywgY3NzUHJvcGVydGllcy5wdXNoKHRyYW5zZm9ybSlcbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgdHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcGVydHldID0gY3NzUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uRHVyYXRpb25dID0gZHVyYXRpb24gKyAncydcbiAgICAgICAgY3NzVmFsdWVzW3RyYW5zaXRpb25EZWxheV0gPSBkZWxheSArICdzJ1xuICAgICAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblRpbWluZ10gPSAoZWFzZSB8fCAnbGluZWFyJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3cmFwcGVkQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gLy8gbWFrZXMgc3VyZSB0aGUgZXZlbnQgZGlkbid0IGJ1YmJsZSBmcm9tIFwiYmVsb3dcIlxuICAgICAgICAkKGV2ZW50LnRhcmdldCkudW5iaW5kKGVuZEV2ZW50LCB3cmFwcGVkQ2FsbGJhY2spXG4gICAgICB9IGVsc2VcbiAgICAgICAgJCh0aGlzKS51bmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaykgLy8gdHJpZ2dlcmVkIGJ5IHNldFRpbWVvdXRcblxuICAgICAgZmlyZWQgPSB0cnVlXG4gICAgICAkKHRoaXMpLmNzcyhjc3NSZXNldClcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGhpcylcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uID4gMCl7XG4gICAgICB0aGlzLmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaylcbiAgICAgIC8vIHRyYW5zaXRpb25FbmQgaXMgbm90IGFsd2F5cyBmaXJpbmcgb24gb2xkZXIgQW5kcm9pZCBwaG9uZXNcbiAgICAgIC8vIHNvIG1ha2Ugc3VyZSBpdCBnZXRzIGZpcmVkXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChmaXJlZCkgcmV0dXJuXG4gICAgICAgIHdyYXBwZWRDYWxsYmFjay5jYWxsKHRoYXQpXG4gICAgICB9LCAoKGR1cmF0aW9uICsgZGVsYXkpICogMTAwMCkgKyAyNSlcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyIHBhZ2UgcmVmbG93IHNvIG5ldyBlbGVtZW50cyBjYW4gYW5pbWF0ZVxuICAgIHRoaXMuc2l6ZSgpICYmIHRoaXMuZ2V0KDApLmNsaWVudExlZnRcblxuICAgIHRoaXMuY3NzKGNzc1ZhbHVlcylcblxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCl7IHdyYXBwZWRDYWxsYmFjay5jYWxsKHRoaXMpIH0pXG4gICAgfSwgMClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0ZXN0RWwgPSBudWxsXG59KShaZXB0bylcblxuLy8gICAgIFplcHRvLmpzXG4vLyAgICAgKGMpIDIwMTAtMjAxNCBUaG9tYXMgRnVjaHNcbi8vICAgICBaZXB0by5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyhmdW5jdGlvbigpe1xuICAvLyBnZXRDb21wdXRlZFN0eWxlIHNob3VsZG4ndCBmcmVhayBvdXQgd2hlbiBjYWxsZWRcbiAgLy8gd2l0aG91dCBhIHZhbGlkIGVsZW1lbnQgYXMgYXJndW1lbnRcbiAgdHJ5IHtcbiAgICBnZXRDb21wdXRlZFN0eWxlKHVuZGVmaW5lZClcbiAgfSBjYXRjaChlKSB7XG4gICAgdmFyIG5hdGl2ZUdldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmF0aXZlR2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59KSgpXG5cbi8vICAgICBaZXB0by5qc1xuLy8gICAgIChjKSAyMDEwLTIwMTQgVGhvbWFzIEZ1Y2hzXG4vLyAgICAgWmVwdG8uanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciB0b3VjaCA9IHt9LFxuICAgIHRvdWNoVGltZW91dCwgdGFwVGltZW91dCwgc3dpcGVUaW1lb3V0LCBsb25nVGFwVGltZW91dCxcbiAgICBsb25nVGFwRGVsYXkgPSA3NTAsXG4gICAgZ2VzdHVyZVxuXG4gIGZ1bmN0aW9uIHN3aXBlRGlyZWN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHgxIC0geDIpID49XG4gICAgICBNYXRoLmFicyh5MSAtIHkyKSA/ICh4MSAtIHgyID4gMCA/ICdMZWZ0JyA6ICdSaWdodCcpIDogKHkxIC0geTIgPiAwID8gJ1VwJyA6ICdEb3duJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvbmdUYXAoKSB7XG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gICAgaWYgKHRvdWNoLmxhc3QpIHtcbiAgICAgIHRvdWNoLmVsLnRyaWdnZXIoJ2xvbmdUYXAnKVxuICAgICAgdG91Y2ggPSB7fVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbExvbmdUYXAoKSB7XG4gICAgaWYgKGxvbmdUYXBUaW1lb3V0KSBjbGVhclRpbWVvdXQobG9uZ1RhcFRpbWVvdXQpXG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgaWYgKHRvdWNoVGltZW91dCkgY2xlYXJUaW1lb3V0KHRvdWNoVGltZW91dClcbiAgICBpZiAodGFwVGltZW91dCkgY2xlYXJUaW1lb3V0KHRhcFRpbWVvdXQpXG4gICAgaWYgKHN3aXBlVGltZW91dCkgY2xlYXJUaW1lb3V0KHN3aXBlVGltZW91dClcbiAgICBpZiAobG9uZ1RhcFRpbWVvdXQpIGNsZWFyVGltZW91dChsb25nVGFwVGltZW91dClcbiAgICB0b3VjaFRpbWVvdXQgPSB0YXBUaW1lb3V0ID0gc3dpcGVUaW1lb3V0ID0gbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gICAgdG91Y2ggPSB7fVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQcmltYXJ5VG91Y2goZXZlbnQpe1xuICAgIHJldHVybiAoZXZlbnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyB8fFxuICAgICAgZXZlbnQucG9pbnRlclR5cGUgPT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gICAgICAmJiBldmVudC5pc1ByaW1hcnlcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUG9pbnRlckV2ZW50VHlwZShlLCB0eXBlKXtcbiAgICByZXR1cm4gKGUudHlwZSA9PSAncG9pbnRlcicrdHlwZSB8fFxuICAgICAgZS50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ21zcG9pbnRlcicrdHlwZSlcbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5vdywgZGVsdGEsIGRlbHRhWCA9IDAsIGRlbHRhWSA9IDAsIGZpcnN0VG91Y2gsIF9pc1BvaW50ZXJUeXBlXG5cbiAgICBpZiAoJ01TR2VzdHVyZScgaW4gd2luZG93KSB7XG4gICAgICBnZXN0dXJlID0gbmV3IE1TR2VzdHVyZSgpXG4gICAgICBnZXN0dXJlLnRhcmdldCA9IGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLmJpbmQoJ01TR2VzdHVyZUVuZCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgc3dpcGVEaXJlY3Rpb25Gcm9tVmVsb2NpdHkgPVxuICAgICAgICAgIGUudmVsb2NpdHlYID4gMSA/ICdSaWdodCcgOiBlLnZlbG9jaXR5WCA8IC0xID8gJ0xlZnQnIDogZS52ZWxvY2l0eVkgPiAxID8gJ0Rvd24nIDogZS52ZWxvY2l0eVkgPCAtMSA/ICdVcCcgOiBudWxsO1xuICAgICAgICBpZiAoc3dpcGVEaXJlY3Rpb25Gcm9tVmVsb2NpdHkpIHtcbiAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXG4gICAgICAgICAgdG91Y2guZWwudHJpZ2dlcignc3dpcGUnKyBzd2lwZURpcmVjdGlvbkZyb21WZWxvY2l0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbigndG91Y2hzdGFydCBNU1BvaW50ZXJEb3duIHBvaW50ZXJkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmKChfaXNQb2ludGVyVHlwZSA9IGlzUG9pbnRlckV2ZW50VHlwZShlLCAnZG93bicpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGZpcnN0VG91Y2ggPSBfaXNQb2ludGVyVHlwZSA/IGUgOiBlLnRvdWNoZXNbMF1cbiAgICAgICAgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRvdWNoLngyKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgb3V0IHRvdWNoIG1vdmVtZW50IGRhdGEgaWYgd2UgaGF2ZSBpdCBzdGlja2luZyBhcm91bmRcbiAgICAgICAgICAvLyBUaGlzIGNhbiBvY2N1ciBpZiB0b3VjaGNhbmNlbCBkb2Vzbid0IGZpcmUgZHVlIHRvIHByZXZlbnREZWZhdWx0LCBldGMuXG4gICAgICAgICAgdG91Y2gueDIgPSB1bmRlZmluZWRcbiAgICAgICAgICB0b3VjaC55MiA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIG5vdyA9IERhdGUubm93KClcbiAgICAgICAgZGVsdGEgPSBub3cgLSAodG91Y2gubGFzdCB8fCBub3cpXG4gICAgICAgIHRvdWNoLmVsID0gJCgndGFnTmFtZScgaW4gZmlyc3RUb3VjaC50YXJnZXQgP1xuICAgICAgICAgIGZpcnN0VG91Y2gudGFyZ2V0IDogZmlyc3RUb3VjaC50YXJnZXQucGFyZW50Tm9kZSlcbiAgICAgICAgdG91Y2hUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0b3VjaFRpbWVvdXQpXG4gICAgICAgIHRvdWNoLngxID0gZmlyc3RUb3VjaC5wYWdlWFxuICAgICAgICB0b3VjaC55MSA9IGZpcnN0VG91Y2gucGFnZVlcbiAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8PSAyNTApIHRvdWNoLmlzRG91YmxlVGFwID0gdHJ1ZVxuICAgICAgICB0b3VjaC5sYXN0ID0gbm93XG4gICAgICAgIGxvbmdUYXBUaW1lb3V0ID0gc2V0VGltZW91dChsb25nVGFwLCBsb25nVGFwRGVsYXkpXG4gICAgICAgIC8vIGFkZHMgdGhlIGN1cnJlbnQgdG91Y2ggY29udGFjdCBmb3IgSUUgZ2VzdHVyZSByZWNvZ25pdGlvblxuICAgICAgICBpZiAoZ2VzdHVyZSAmJiBfaXNQb2ludGVyVHlwZSkgZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKTtcbiAgICAgIH0pXG4gICAgICAub24oJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmKChfaXNQb2ludGVyVHlwZSA9IGlzUG9pbnRlckV2ZW50VHlwZShlLCAnbW92ZScpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGZpcnN0VG91Y2ggPSBfaXNQb2ludGVyVHlwZSA/IGUgOiBlLnRvdWNoZXNbMF1cbiAgICAgICAgY2FuY2VsTG9uZ1RhcCgpXG4gICAgICAgIHRvdWNoLngyID0gZmlyc3RUb3VjaC5wYWdlWFxuICAgICAgICB0b3VjaC55MiA9IGZpcnN0VG91Y2gucGFnZVlcblxuICAgICAgICBkZWx0YVggKz0gTWF0aC5hYnModG91Y2gueDEgLSB0b3VjaC54MilcbiAgICAgICAgZGVsdGFZICs9IE1hdGguYWJzKHRvdWNoLnkxIC0gdG91Y2gueTIpXG4gICAgICB9KVxuICAgICAgLm9uKCd0b3VjaGVuZCBNU1BvaW50ZXJVcCBwb2ludGVydXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgaWYoKF9pc1BvaW50ZXJUeXBlID0gaXNQb2ludGVyRXZlbnRUeXBlKGUsICd1cCcpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGNhbmNlbExvbmdUYXAoKVxuXG4gICAgICAgIC8vIHN3aXBlXG4gICAgICAgIGlmICgodG91Y2gueDIgJiYgTWF0aC5hYnModG91Y2gueDEgLSB0b3VjaC54MikgPiAzMCkgfHxcbiAgICAgICAgICAgICh0b3VjaC55MiAmJiBNYXRoLmFicyh0b3VjaC55MSAtIHRvdWNoLnkyKSA+IDMwKSlcblxuICAgICAgICAgIHN3aXBlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXG4gICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScgKyAoc3dpcGVEaXJlY3Rpb24odG91Y2gueDEsIHRvdWNoLngyLCB0b3VjaC55MSwgdG91Y2gueTIpKSlcbiAgICAgICAgICAgIHRvdWNoID0ge31cbiAgICAgICAgICB9LCAwKVxuXG4gICAgICAgIC8vIG5vcm1hbCB0YXBcbiAgICAgICAgZWxzZSBpZiAoJ2xhc3QnIGluIHRvdWNoKVxuICAgICAgICAgIC8vIGRvbid0IGZpcmUgdGFwIHdoZW4gZGVsdGEgcG9zaXRpb24gY2hhbmdlZCBieSBtb3JlIHRoYW4gMzAgcGl4ZWxzLFxuICAgICAgICAgIC8vIGZvciBpbnN0YW5jZSB3aGVuIG1vdmluZyB0byBhIHBvaW50IGFuZCBiYWNrIHRvIG9yaWdpblxuICAgICAgICAgIGlmIChkZWx0YVggPCAzMCAmJiBkZWx0YVkgPCAzMCkge1xuICAgICAgICAgICAgLy8gZGVsYXkgYnkgb25lIHRpY2sgc28gd2UgY2FuIGNhbmNlbCB0aGUgJ3RhcCcgZXZlbnQgaWYgJ3Njcm9sbCcgZmlyZXNcbiAgICAgICAgICAgIC8vICgndGFwJyBmaXJlcyBiZWZvcmUgJ3Njcm9sbCcpXG4gICAgICAgICAgICB0YXBUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHVuaXZlcnNhbCAndGFwJyB3aXRoIHRoZSBvcHRpb24gdG8gY2FuY2VsVG91Y2goKVxuICAgICAgICAgICAgICAvLyAoY2FuY2VsVG91Y2ggY2FuY2VscyBwcm9jZXNzaW5nIG9mIHNpbmdsZSB2cyBkb3VibGUgdGFwcyBmb3IgZmFzdGVyICd0YXAnIHJlc3BvbnNlKVxuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KCd0YXAnKVxuICAgICAgICAgICAgICBldmVudC5jYW5jZWxUb3VjaCA9IGNhbmNlbEFsbFxuICAgICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKGV2ZW50KVxuXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgZG91YmxlIHRhcCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAodG91Y2guaXNEb3VibGVUYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2guZWwpIHRvdWNoLmVsLnRyaWdnZXIoJ2RvdWJsZVRhcCcpXG4gICAgICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gdHJpZ2dlciBzaW5nbGUgdGFwIGFmdGVyIDI1MG1zIG9mIGluYWN0aXZpdHlcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgdG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoLmVsKSB0b3VjaC5lbC50cmlnZ2VyKCdzaW5nbGVUYXAnKVxuICAgICAgICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWx0YVggPSBkZWx0YVkgPSAwXG5cbiAgICAgIH0pXG4gICAgICAvLyB3aGVuIHRoZSBicm93c2VyIHdpbmRvdyBsb3NlcyBmb2N1cyxcbiAgICAgIC8vIGZvciBleGFtcGxlIHdoZW4gYSBtb2RhbCBkaWFsb2cgaXMgc2hvd24sXG4gICAgICAvLyBjYW5jZWwgYWxsIG9uZ29pbmcgZXZlbnRzXG4gICAgICAub24oJ3RvdWNoY2FuY2VsIE1TUG9pbnRlckNhbmNlbCBwb2ludGVyY2FuY2VsJywgY2FuY2VsQWxsKVxuXG4gICAgLy8gc2Nyb2xsaW5nIHRoZSB3aW5kb3cgaW5kaWNhdGVzIGludGVudGlvbiBvZiB0aGUgdXNlclxuICAgIC8vIHRvIHNjcm9sbCwgbm90IHRhcCBvciBzd2lwZSwgc28gY2FuY2VsIGFsbCBvbmdvaW5nIGV2ZW50c1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgY2FuY2VsQWxsKVxuICB9KVxuXG4gIDtbJ3N3aXBlJywgJ3N3aXBlTGVmdCcsICdzd2lwZVJpZ2h0JywgJ3N3aXBlVXAnLCAnc3dpcGVEb3duJyxcbiAgICAnZG91YmxlVGFwJywgJ3RhcCcsICdzaW5nbGVUYXAnLCAnbG9uZ1RhcCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcbiAgICAkLmZuW2V2ZW50TmFtZV0gPSBmdW5jdGlvbihjYWxsYmFjayl7IHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIH1cbiAgfSlcbn0pKFplcHRvKVxuXG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiAkICE9IFwidW5kZWZpbmVkXCIgPyAkIDogd2luZG93LiQpO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwiLyoqXG4gKiBtYXJrZWQgLSBhIG1hcmtkb3duIHBhcnNlclxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTQsIENocmlzdG9waGVyIEplZmZyZXkuIChNSVQgTGljZW5zZWQpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hqai9tYXJrZWRcbiAqL1xuXG47KGZ1bmN0aW9uKCkge1xuXG4vKipcbiAqIEJsb2NrLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgYmxvY2sgPSB7XG4gIG5ld2xpbmU6IC9eXFxuKy8sXG4gIGNvZGU6IC9eKCB7NH1bXlxcbl0rXFxuKikrLyxcbiAgZmVuY2VzOiBub29wLFxuICBocjogL14oICpbLSpfXSl7Myx9ICooPzpcXG4rfCQpLyxcbiAgaGVhZGluZzogL14gKigjezEsNn0pICooW15cXG5dKz8pICojKiAqKD86XFxuK3wkKS8sXG4gIG5wdGFibGU6IG5vb3AsXG4gIGxoZWFkaW5nOiAvXihbXlxcbl0rKVxcbiAqKD18LSl7Mix9ICooPzpcXG4rfCQpLyxcbiAgYmxvY2txdW90ZTogL14oICo+W15cXG5dKyhcXG4oPyFkZWYpW15cXG5dKykqXFxuKikrLyxcbiAgbGlzdDogL14oICopKGJ1bGwpIFtcXHNcXFNdKz8oPzpocnxkZWZ8XFxuezIsfSg/ISApKD8hXFwxYnVsbCApXFxuKnxcXHMqJCkvLFxuICBodG1sOiAvXiAqKD86Y29tbWVudHxjbG9zZWR8Y2xvc2luZykgKig/OlxcbnsyLH18XFxzKiQpLyxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogK1tcIihdKFteXFxuXSspW1wiKV0pPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wLFxuICBwYXJhZ3JhcGg6IC9eKCg/OlteXFxuXStcXG4/KD8haHJ8aGVhZGluZ3xsaGVhZGluZ3xibG9ja3F1b3RlfHRhZ3xkZWYpKSspXFxuKi8sXG4gIHRleHQ6IC9eW15cXG5dKy9cbn07XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGQrXFwuKS87XG5ibG9jay5pdGVtID0gL14oICopKGJ1bGwpIFteXFxuXSooPzpcXG4oPyFcXDFidWxsIClbXlxcbl0qKSovO1xuYmxvY2suaXRlbSA9IHJlcGxhY2UoYmxvY2suaXRlbSwgJ2dtJylcbiAgKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgKCk7XG5cbmJsb2NrLmxpc3QgPSByZXBsYWNlKGJsb2NrLmxpc3QpXG4gICgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gICgnaHInLCAnXFxcXG4rKD89XFxcXDE/KD86Wy0qX10gKil7Myx9KD86XFxcXG4rfCQpKScpXG4gICgnZGVmJywgJ1xcXFxuKyg/PScgKyBibG9jay5kZWYuc291cmNlICsgJyknKVxuICAoKTtcblxuYmxvY2suYmxvY2txdW90ZSA9IHJlcGxhY2UoYmxvY2suYmxvY2txdW90ZSlcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG5ibG9jay5fdGFnID0gJyg/ISg/OidcbiAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGUnXG4gICsgJ3x2YXJ8c2FtcHxrYmR8c3VifHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkbydcbiAgKyAnfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKVxcXFxiKVxcXFx3Kyg/ITovfFteXFxcXHdcXFxcc0BdKkApXFxcXGInO1xuXG5ibG9jay5odG1sID0gcmVwbGFjZShibG9jay5odG1sKVxuICAoJ2NvbW1lbnQnLCAvPCEtLVtcXHNcXFNdKj8tLT4vKVxuICAoJ2Nsb3NlZCcsIC88KHRhZylbXFxzXFxTXSs/PFxcL1xcMT4vKVxuICAoJ2Nsb3NpbmcnLCAvPHRhZyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8pXG4gICgvdGFnL2csIGJsb2NrLl90YWcpXG4gICgpO1xuXG5ibG9jay5wYXJhZ3JhcGggPSByZXBsYWNlKGJsb2NrLnBhcmFncmFwaClcbiAgKCdocicsIGJsb2NrLmhyKVxuICAoJ2hlYWRpbmcnLCBibG9jay5oZWFkaW5nKVxuICAoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gICgnYmxvY2txdW90ZScsIGJsb2NrLmJsb2NrcXVvdGUpXG4gICgndGFnJywgJzwnICsgYmxvY2suX3RhZylcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiAqKGB7Myx9fH57Myx9KSAqKFxcUyspPyAqXFxuKFtcXHNcXFNdKz8pXFxzKlxcMSAqKD86XFxuK3wkKS8sXG4gIHBhcmFncmFwaDogL14vXG59KTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IHJlcGxhY2UoYmxvY2sucGFyYWdyYXBoKVxuICAoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihcXFMuKlxcfC4qKVxcbiAqKFstOl0rICpcXHxbLXwgOl0qKVxcbigoPzouKlxcfC4qKD86XFxufCQpKSopXFxuKi8sXG4gIHRhYmxlOiAvXiAqXFx8KC4rKVxcbiAqXFx8KCAqWy06XStbLXwgOl0qKVxcbigoPzogKlxcfC4qKD86XFxufCQpKSopXFxuKi9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IHt9O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5ydWxlcyA9IGJsb2NrLm5vcm1hbDtcblxuICBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3AsIGJxKSB7XG4gIHZhciBzcmMgPSBzcmMucmVwbGFjZSgvXiArJC9nbSwgJycpXG4gICAgLCBuZXh0XG4gICAgLCBsb29zZVxuICAgICwgY2FwXG4gICAgLCBidWxsXG4gICAgLCBiXG4gICAgLCBpdGVtXG4gICAgLCBzcGFjZVxuICAgICwgaVxuICAgICwgbDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gbmV3bGluZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5ld2xpbmUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzcGFjZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gezR9L2dtLCAnJyk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgPyBjYXAucmVwbGFjZSgvXFxuKyQvLCAnJylcbiAgICAgICAgICA6IGNhcFxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmZW5jZXMgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5mZW5jZXMuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgbGFuZzogY2FwWzJdLFxuICAgICAgICB0ZXh0OiBjYXBbM11cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGNhcFsyXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSBubyBsZWFkaW5nIHBpcGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV0uc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzJdID09PSAnPScgPyAxIDogMixcbiAgICAgICAgdGV4dDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wLCB0cnVlKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3Rfc3RhcnQnLFxuICAgICAgICBvcmRlcmVkOiBidWxsLmxlbmd0aCA+IDFcbiAgICAgIH0pO1xuXG4gICAgICAvLyBHZXQgZWFjaCB0b3AtbGV2ZWwgaXRlbS5cbiAgICAgIGNhcCA9IGNhcFswXS5tYXRjaCh0aGlzLnJ1bGVzLml0ZW0pO1xuXG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICBsID0gY2FwLmxlbmd0aDtcbiAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpdGVtID0gY2FwW2ldO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtJ3MgYnVsbGV0XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlZW4gYXMgdGhlIG5leHQgdG9rZW4uXG4gICAgICAgIHNwYWNlID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14gKihbKistXXxcXGQrXFwuKSArLywgJycpO1xuXG4gICAgICAgIC8vIE91dGRlbnQgd2hhdGV2ZXIgdGhlXG4gICAgICAgIC8vIGxpc3QgaXRlbSBjb250YWlucy4gSGFja3kuXG4gICAgICAgIGlmICh+aXRlbS5pbmRleE9mKCdcXG4gJykpIHtcbiAgICAgICAgICBzcGFjZSAtPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICBpdGVtID0gIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgICAgPyBpdGVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7MSwnICsgc3BhY2UgKyAnfScsICdnbScpLCAnJylcbiAgICAgICAgICAgIDogaXRlbS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgbmV4dCBsaXN0IGl0ZW0gYmVsb25ncyBoZXJlLlxuICAgICAgICAvLyBCYWNrcGVkYWwgaWYgaXQgZG9lcyBub3QgYmVsb25nIGluIHRoaXMgbGlzdC5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydExpc3RzICYmIGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgYiA9IGJsb2NrLmJ1bGxldC5leGVjKGNhcFtpICsgMV0pWzBdO1xuICAgICAgICAgIGlmIChidWxsICE9PSBiICYmICEoYnVsbC5sZW5ndGggPiAxICYmIGIubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgICAgIHNyYyA9IGNhcC5zbGljZShpICsgMSkuam9pbignXFxuJykgKyBzcmM7XG4gICAgICAgICAgICBpID0gbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgaXRlbSBpcyBsb29zZSBvciBub3QuXG4gICAgICAgIC8vIFVzZTogLyhefFxcbikoPyEgKVteXFxuXStcXG5cXG4oPyFcXHMqJCkvXG4gICAgICAgIC8vIGZvciBkaXNjb3VudCBiZWhhdmlvci5cbiAgICAgICAgbG9vc2UgPSBuZXh0IHx8IC9cXG5cXG4oPyFcXHMqJCkvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIG5leHQgPSBpdGVtLmNoYXJBdChpdGVtLmxlbmd0aCAtIDEpID09PSAnXFxuJztcbiAgICAgICAgICBpZiAoIWxvb3NlKSBsb29zZSA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBsb29zZVxuICAgICAgICAgICAgPyAnbG9vc2VfaXRlbV9zdGFydCdcbiAgICAgICAgICAgIDogJ2xpc3RfaXRlbV9zdGFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVjdXJzZS5cbiAgICAgICAgdGhpcy50b2tlbihpdGVtLCBmYWxzZSwgYnEpO1xuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6IGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWZcbiAgICBpZiAoKCFicSAmJiB0b3ApICYmIChjYXAgPSB0aGlzLnJ1bGVzLmRlZi5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMubGlua3NbY2FwWzFdLnRvTG93ZXJDYXNlKCldID0ge1xuICAgICAgICBocmVmOiBjYXBbMl0sXG4gICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgIH07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSAoZ2ZtKVxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMudGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvKD86ICpcXHwgKik/XFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV1cbiAgICAgICAgICAucmVwbGFjZSgvXiAqXFx8ICp8ICpcXHwgKiQvZywgJycpXG4gICAgICAgICAgLnNwbGl0KC8gKlxcfCAqLyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goaXRlbSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRvcC1sZXZlbCBwYXJhZ3JhcGhcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLnBhcmFncmFwaC5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICB0ZXh0OiBjYXBbMV0uY2hhckF0KGNhcFsxXS5sZW5ndGggLSAxKSA9PT0gJ1xcbidcbiAgICAgICAgICA/IGNhcFsxXS5zbGljZSgwLCAtMSlcbiAgICAgICAgICA6IGNhcFsxXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIC8vIFRvcC1sZXZlbCBzaG91bGQgbmV2ZXIgcmVhY2ggaGVyZS5cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3XG4gICAgICAgIEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuLyoqXG4gKiBJbmxpbmUtTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBpbmxpbmUgPSB7XG4gIGVzY2FwZTogL15cXFxcKFtcXFxcYCp7fVxcW1xcXSgpIytcXC0uIV8+XSkvLFxuICBhdXRvbGluazogL148KFteID5dKyhAfDpcXC8pW14gPl0rKT4vLFxuICB1cmw6IG5vb3AsXG4gIHRhZzogL148IS0tW1xcc1xcU10qPy0tPnxePFxcLz9cXHcrKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj8+LyxcbiAgbGluazogL14hP1xcWyhpbnNpZGUpXFxdXFwoaHJlZlxcKS8sXG4gIHJlZmxpbms6IC9eIT9cXFsoaW5zaWRlKVxcXVxccypcXFsoW15cXF1dKilcXF0vLFxuICBub2xpbms6IC9eIT9cXFsoKD86XFxbW15cXF1dKlxcXXxbXlxcW1xcXV0pKilcXF0vLFxuICBzdHJvbmc6IC9eX18oW1xcc1xcU10rPylfXyg/IV8pfF5cXCpcXCooW1xcc1xcU10rPylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXFxiXygoPzpfX3xbXFxzXFxTXSkrPylfXFxifF5cXCooKD86XFwqXFwqfFtcXHNcXFNdKSs/KVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKylcXHMqKFtcXHNcXFNdKj9bXmBdKVxccypcXDEoPyFgKS8sXG4gIGJyOiAvXiB7Mix9XFxuKD8hXFxzKiQpLyxcbiAgZGVsOiBub29wLFxuICB0ZXh0OiAvXltcXHNcXFNdKz8oPz1bXFxcXDwhXFxbXypgXXwgezIsfVxcbnwkKS9cbn07XG5cbmlubGluZS5faW5zaWRlID0gLyg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dfFxcXSg/PVteXFxbXSpcXF0pKSovO1xuaW5saW5lLl9ocmVmID0gL1xccyo8PyhbXFxzXFxTXSo/KT4/KD86XFxzK1snXCJdKFtcXHNcXFNdKj8pWydcIl0pP1xccyovO1xuXG5pbmxpbmUubGluayA9IHJlcGxhY2UoaW5saW5lLmxpbmspXG4gICgnaW5zaWRlJywgaW5saW5lLl9pbnNpZGUpXG4gICgnaHJlZicsIGlubGluZS5faHJlZilcbiAgKCk7XG5cbmlubGluZS5yZWZsaW5rID0gcmVwbGFjZShpbmxpbmUucmVmbGluaylcbiAgKCdpbnNpZGUnLCBpbmxpbmUuX2luc2lkZSlcbiAgKCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopL1xufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogcmVwbGFjZShpbmxpbmUuZXNjYXBlKSgnXSknLCAnfnxdKScpKCksXG4gIHVybDogL14oaHR0cHM/OlxcL1xcL1teXFxzPF0rW148Liw6O1wiJylcXF1cXHNdKS8sXG4gIGRlbDogL15+fig/PVxcUykoW1xcc1xcU10qP1xcUyl+fi8sXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLnRleHQpXG4gICAgKCddfCcsICd+XXwnKVxuICAgICgnfCcsICd8aHR0cHM/Oi8vfCcpXG4gICAgKClcbn0pO1xuXG4vKipcbiAqIEdGTSArIExpbmUgQnJlYWtzIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmJyZWFrcyA9IG1lcmdlKHt9LCBpbmxpbmUuZ2ZtLCB7XG4gIGJyOiByZXBsYWNlKGlubGluZS5icikoJ3syLH0nLCAnKicpKCksXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLmdmbS50ZXh0KSgnezIsfScsICcqJykoKVxufSk7XG5cbi8qKlxuICogSW5saW5lIExleGVyICYgQ29tcGlsZXJcbiAqL1xuXG5mdW5jdGlvbiBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICB0aGlzLnJ1bGVzID0gaW5saW5lLm5vcm1hbDtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXI7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAoIXRoaXMubGlua3MpIHtcbiAgICB0aHJvdyBuZXdcbiAgICAgIEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5icmVha3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuZ2ZtO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gaW5saW5lLnBlZGFudGljO1xuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbGlua1xuICAgICwgdGV4dFxuICAgICwgaHJlZlxuICAgICwgY2FwO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBlc2NhcGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lc2NhcGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IGNhcFsxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGF1dG9saW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYXV0b2xpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBjYXBbMV0uY2hhckF0KDYpID09PSAnOidcbiAgICAgICAgICA/IHRoaXMubWFuZ2xlKGNhcFsxXS5zdWJzdHJpbmcoNykpXG4gICAgICAgICAgOiB0aGlzLm1hbmdsZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGhpcy5tYW5nbGUoJ21haWx0bzonKSArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBocmVmID0gdGV4dDtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gZXNjYXBlKGNhcFswXSlcbiAgICAgICAgOiBjYXBbMF07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGluay5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwge1xuICAgICAgICBocmVmOiBjYXBbMl0sXG4gICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHJlZmxpbmssIG5vbGlua1xuICAgIGlmICgoY2FwID0gdGhpcy5ydWxlcy5yZWZsaW5rLmV4ZWMoc3JjKSlcbiAgICAgICAgfHwgKGNhcCA9IHRoaXMucnVsZXMubm9saW5rLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBsaW5rID0gKGNhcFsyXSB8fCBjYXBbMV0pLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgIGxpbmsgPSB0aGlzLmxpbmtzW2xpbmsudG9Mb3dlckNhc2UoKV07XG4gICAgICBpZiAoIWxpbmsgfHwgIWxpbmsuaHJlZikge1xuICAgICAgICBvdXQgKz0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgc3JjID0gY2FwWzBdLnN1YnN0cmluZygxKSArIHNyYztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwgbGluayk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc3Ryb25nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuc3Ryb25nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnN0cm9uZyh0aGlzLm91dHB1dChjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBlbVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVtLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmVtKHRoaXMub3V0cHV0KGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGVzcGFuKGVzY2FwZShjYXBbMl0sIHRydWUpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGJyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYnIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuYnIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlbCAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmRlbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5kZWwodGhpcy5vdXRwdXQoY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gZXNjYXBlKHRoaXMuc21hcnR5cGFudHMoY2FwWzBdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDb21waWxlIExpbmtcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0TGluayA9IGZ1bmN0aW9uKGNhcCwgbGluaykge1xuICB2YXIgaHJlZiA9IGVzY2FwZShsaW5rLmhyZWYpXG4gICAgLCB0aXRsZSA9IGxpbmsudGl0bGUgPyBlc2NhcGUobGluay50aXRsZSkgOiBudWxsO1xuXG4gIHJldHVybiBjYXBbMF0uY2hhckF0KDApICE9PSAnISdcbiAgICA/IHRoaXMucmVuZGVyZXIubGluayhocmVmLCB0aXRsZSwgdGhpcy5vdXRwdXQoY2FwWzFdKSlcbiAgICA6IHRoaXMucmVuZGVyZXIuaW1hZ2UoaHJlZiwgdGl0bGUsIGVzY2FwZShjYXBbMV0pKTtcbn07XG5cbi8qKlxuICogU21hcnR5cGFudHMgVHJhbnNmb3JtYXRpb25zXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLnNtYXJ0eXBhbnRzID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5zbWFydHlwYW50cykgcmV0dXJuIHRleHQ7XG4gIHJldHVybiB0ZXh0XG4gICAgLy8gZW0tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tL2csICdcXHUyMDE0JylcbiAgICAvLyBvcGVuaW5nIHNpbmdsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XCJcXHNdKScvZywgJyQxXFx1MjAxOCcpXG4gICAgLy8gY2xvc2luZyBzaW5nbGVzICYgYXBvc3Ryb3BoZXNcbiAgICAucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpXG4gICAgLy8gb3BlbmluZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1xcdTIwMThcXHNdKVwiL2csICckMVxcdTIwMWMnKVxuICAgIC8vIGNsb3NpbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFx1MjAxZCcpXG4gICAgLy8gZWxsaXBzZXNcbiAgICAucmVwbGFjZSgvXFwuezN9L2csICdcXHUyMDI2Jyk7XG59O1xuXG4vKipcbiAqIE1hbmdsZSBMaW5rc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5tYW5nbGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbCA9IHRleHQubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgY2g7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgY2ggPSAneCcgKyBjaC50b1N0cmluZygxNik7XG4gICAgfVxuICAgIG91dCArPSAnJiMnICsgY2ggKyAnOyc7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZW5kZXJlclxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBsYW5nLCBlc2NhcGVkKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICBjb2RlID0gb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlmICghbGFuZykge1xuICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICsgJ1xcbjwvY29kZT48L3ByZT4nO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICsgJ1wiPidcbiAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICArICdcXG48L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ibG9ja3F1b3RlID0gZnVuY3Rpb24ocXVvdGUpIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nICsgcXVvdGUgKyAnPC9ibG9ja3F1b3RlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaGVhZGluZyA9IGZ1bmN0aW9uKHRleHQsIGxldmVsLCByYXcpIHtcbiAgcmV0dXJuICc8aCdcbiAgICArIGxldmVsXG4gICAgKyAnIGlkPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmhlYWRlclByZWZpeFxuICAgICsgcmF3LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnLScpXG4gICAgKyAnXCI+J1xuICAgICsgdGV4dFxuICAgICsgJzwvaCdcbiAgICArIGxldmVsXG4gICAgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQpIHtcbiAgdmFyIHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3RpdGVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxsaT4nICsgdGV4dCArICc8L2xpPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIHJldHVybiAnPHRhYmxlPlxcbidcbiAgICArICc8dGhlYWQ+XFxuJ1xuICAgICsgaGVhZGVyXG4gICAgKyAnPC90aGVhZD5cXG4nXG4gICAgKyAnPHRib2R5PlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3Rib2R5PlxcbidcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgZmxhZ3MuYWxpZ24gKyAnXCI+J1xuICAgIDogJzwnICsgdHlwZSArICc+JztcbiAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cbi8vIHNwYW4gbGV2ZWwgcmVuZGVyZXJcblJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHN0cm9uZz4nICsgdGV4dCArICc8L3N0cm9uZz4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxlbT4nICsgdGV4dCArICc8L2VtPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGNvZGU+JyArIHRleHQgKyAnPC9jb2RlPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8YnIvPicgOiAnPGJyPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxkZWw+JyArIHRleHQgKyAnPC9kZWw+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHByb3QuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuICB2YXIgb3V0ID0gJzxhIGhyZWY9XCInICsgaHJlZiArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gJz4nICsgdGV4dCArICc8L2E+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIHZhciBvdXQgPSAnPGltZyBzcmM9XCInICsgaHJlZiArICdcIiBhbHQ9XCInICsgdGV4dCArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gdGhpcy5vcHRpb25zLnhodG1sID8gJy8+JyA6ICc+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUGFyc2luZyAmIENvbXBpbGluZ1xuICovXG5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW4gPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xufVxuXG4vKipcbiAqIFN0YXRpYyBQYXJzZSBNZXRob2RcbiAqL1xuXG5QYXJzZXIucGFyc2UgPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMsIHJlbmRlcmVyKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKG9wdGlvbnMsIHJlbmRlcmVyKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZShzcmMpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMb29wXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHNyYykge1xuICB0aGlzLmlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihzcmMubGlua3MsIHRoaXMub3B0aW9ucywgdGhpcy5yZW5kZXJlcik7XG4gIHRoaXMudG9rZW5zID0gc3JjLnJldmVyc2UoKTtcblxuICB2YXIgb3V0ID0gJyc7XG4gIHdoaWxlICh0aGlzLm5leHQoKSkge1xuICAgIG91dCArPSB0aGlzLnRvaygpO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbiA9IHRoaXMudG9rZW5zLnBvcCgpO1xufTtcblxuLyoqXG4gKiBQcmV2aWV3IE5leHQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMudG9rZW5zLmxlbmd0aCAtIDFdIHx8IDA7XG59O1xuXG4vKipcbiAqIFBhcnNlIFRleHQgVG9rZW5zXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHkgPSB0aGlzLnRva2VuLnRleHQ7XG5cbiAgd2hpbGUgKHRoaXMucGVlaygpLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGJvZHkgKz0gJ1xcbicgKyB0aGlzLm5leHQoKS50ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaW5saW5lLm91dHB1dChib2R5KTtcbn07XG5cbi8qKlxuICogUGFyc2UgQ3VycmVudCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUudG9rID0gZnVuY3Rpb24oKSB7XG4gIHN3aXRjaCAodGhpcy50b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnc3BhY2UnOiB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNhc2UgJ2hyJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaHIoKTtcbiAgICB9XG4gICAgY2FzZSAnaGVhZGluZyc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmhlYWRpbmcoXG4gICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLnRleHQpLFxuICAgICAgICB0aGlzLnRva2VuLmRlcHRoLFxuICAgICAgICB0aGlzLnRva2VuLnRleHQpO1xuICAgIH1cbiAgICBjYXNlICdjb2RlJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY29kZSh0aGlzLnRva2VuLnRleHQsXG4gICAgICAgIHRoaXMudG9rZW4ubGFuZyxcbiAgICAgICAgdGhpcy50b2tlbi5lc2NhcGVkKTtcbiAgICB9XG4gICAgY2FzZSAndGFibGUnOiB7XG4gICAgICB2YXIgaGVhZGVyID0gJydcbiAgICAgICAgLCBib2R5ID0gJydcbiAgICAgICAgLCBpXG4gICAgICAgICwgcm93XG4gICAgICAgICwgY2VsbFxuICAgICAgICAsIGZsYWdzXG4gICAgICAgICwgajtcblxuICAgICAgLy8gaGVhZGVyXG4gICAgICBjZWxsID0gJyc7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmxhZ3MgPSB7IGhlYWRlcjogdHJ1ZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25baV0gfTtcbiAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi5oZWFkZXJbaV0pLFxuICAgICAgICAgIHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBoZWFkZXIgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9rZW4uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gdGhpcy50b2tlbi5jZWxsc1tpXTtcblxuICAgICAgICBjZWxsID0gJyc7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHJvd1tqXSksXG4gICAgICAgICAgICB7IGhlYWRlcjogZmFsc2UsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2pdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIudGFibGUoaGVhZGVyLCBib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnYmxvY2txdW90ZV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnYmxvY2txdW90ZV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuYmxvY2txdW90ZShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJydcbiAgICAgICAgLCBvcmRlcmVkID0gdGhpcy50b2tlbi5vcmRlcmVkO1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3QoYm9keSwgb3JkZXJlZCk7XG4gICAgfVxuICAgIGNhc2UgJ2xpc3RfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRva2VuLnR5cGUgPT09ICd0ZXh0J1xuICAgICAgICAgID8gdGhpcy5wYXJzZVRleHQoKVxuICAgICAgICAgIDogdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2xvb3NlX2l0ZW1fc3RhcnQnOiB7XG4gICAgICB2YXIgYm9keSA9ICcnO1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfaXRlbV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2h0bWwnOiB7XG4gICAgICB2YXIgaHRtbCA9ICF0aGlzLnRva2VuLnByZSAmJiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgID8gdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dClcbiAgICAgICAgOiB0aGlzLnRva2VuLnRleHQ7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5odG1sKGh0bWwpO1xuICAgIH1cbiAgICBjYXNlICdwYXJhZ3JhcGgnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCkpO1xuICAgIH1cbiAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGFyYWdyYXBoKHRoaXMucGFyc2VUZXh0KCkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwsIGVuY29kZSkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKCFlbmNvZGUgPyAvJig/ISM/XFx3KzspL2cgOiAvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZShodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoLyYoWyNcXHddKyk7L2csIGZ1bmN0aW9uKF8sIG4pIHtcbiAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChuID09PSAnY29sb24nKSByZXR1cm4gJzonO1xuICAgIGlmIChuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm4gbi5jaGFyQXQoMSkgPT09ICd4J1xuICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobi5zdWJzdHJpbmcoMiksIDE2KSlcbiAgICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtuLnN1YnN0cmluZygxKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UocmVnZXgsIG9wdCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZTtcbiAgb3B0ID0gb3B0IHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb24gc2VsZihuYW1lLCB2YWwpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHQpO1xuICAgIHZhbCA9IHZhbC5zb3VyY2UgfHwgdmFsO1xuICAgIHZhbCA9IHZhbC5yZXBsYWNlKC8oXnxbXlxcW10pXFxeL2csICckMScpO1xuICAgIHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuYW1lLCB2YWwpO1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbm5vb3AuZXhlYyA9IG5vb3A7XG5cbmZ1bmN0aW9uIG1lcmdlKG9iaikge1xuICB2YXIgaSA9IDFcbiAgICAsIHRhcmdldFxuICAgICwga2V5O1xuXG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5cbi8qKlxuICogTWFya2VkXG4gKi9cblxuZnVuY3Rpb24gbWFya2VkKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgfHwgdHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0O1xuICAgICAgb3B0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQgfHwge30pO1xuXG4gICAgdmFyIGhpZ2hsaWdodCA9IG9wdC5oaWdobGlnaHRcbiAgICAgICwgdG9rZW5zXG4gICAgICAsIHBlbmRpbmdcbiAgICAgICwgaSA9IDA7XG5cbiAgICB0cnkge1xuICAgICAgdG9rZW5zID0gTGV4ZXIubGV4KHNyYywgb3B0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nID0gdG9rZW5zLmxlbmd0aDtcblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0LCBlcnI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IFBhcnNlci5wYXJzZSh0b2tlbnMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9XG5cbiAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG5cbiAgICAgIHJldHVybiBlcnJcbiAgICAgICAgPyBjYWxsYmFjayhlcnIpXG4gICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9O1xuXG4gICAgaWYgKCFoaWdobGlnaHQgfHwgaGlnaGxpZ2h0Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIG9wdC5oaWdobGlnaHQ7XG5cbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG5cbiAgICBmb3IgKDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0KHRva2VuLnRleHQsIHRva2VuLmxhbmcsIGZ1bmN0aW9uKGVyciwgY29kZSkge1xuICAgICAgICAgIGlmIChjb2RlID09IG51bGwgfHwgY29kZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuLnRleHQgPSBjb2RlO1xuICAgICAgICAgIHRva2VuLmVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkodG9rZW5zW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0KSBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQpO1xuICAgIHJldHVybiBQYXJzZXIucGFyc2UoTGV4ZXIubGV4KHNyYywgb3B0KSwgb3B0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGUubWVzc2FnZSArPSAnXFxuUGxlYXNlIHJlcG9ydCB0aGlzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZC4nO1xuICAgIGlmICgob3B0IHx8IG1hcmtlZC5kZWZhdWx0cykuc2lsZW50KSB7XG4gICAgICByZXR1cm4gJzxwPkFuIGVycm9yIG9jY3VyZWQ6PC9wPjxwcmU+J1xuICAgICAgICArIGVzY2FwZShlLm1lc3NhZ2UgKyAnJywgdHJ1ZSlcbiAgICAgICAgKyAnPC9wcmU+JztcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xuXG5tYXJrZWQub3B0aW9ucyA9XG5tYXJrZWQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdCkge1xuICBtZXJnZShtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gIHJldHVybiBtYXJrZWQ7XG59O1xuXG5tYXJrZWQuZGVmYXVsdHMgPSB7XG4gIGdmbTogdHJ1ZSxcbiAgdGFibGVzOiB0cnVlLFxuICBicmVha3M6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIHNhbml0aXplOiBmYWxzZSxcbiAgc21hcnRMaXN0czogZmFsc2UsXG4gIHNpbGVudDogZmFsc2UsXG4gIGhpZ2hsaWdodDogbnVsbCxcbiAgbGFuZ1ByZWZpeDogJ2xhbmctJyxcbiAgc21hcnR5cGFudHM6IGZhbHNlLFxuICBoZWFkZXJQcmVmaXg6ICcnLFxuICByZW5kZXJlcjogbmV3IFJlbmRlcmVyLFxuICB4aHRtbDogZmFsc2Vcbn07XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cblxubWFya2VkLlBhcnNlciA9IFBhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5cbm1hcmtlZC5SZW5kZXJlciA9IFJlbmRlcmVyO1xuXG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcblxubWFya2VkLklubGluZUxleGVyID0gSW5saW5lTGV4ZXI7XG5tYXJrZWQuaW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlci5vdXRwdXQ7XG5cbm1hcmtlZC5wYXJzZSA9IG1hcmtlZDtcblxuaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IG1hcmtlZDtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIG1hcmtlZDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLm1hcmtlZCA9IG1hcmtlZDtcbn1cblxufSkuY2FsbChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTtcbn0oKSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEyIENyYWlnIENhbXBiZWxsXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogTW91c2V0cmFwIGlzIGEgc2ltcGxlIGtleWJvYXJkIHNob3J0Y3V0IGxpYnJhcnkgZm9yIEphdmFzY3JpcHQgd2l0aFxuICogbm8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKlxuICogQHZlcnNpb24gMS4xLjJcbiAqIEB1cmwgY3JhaWcuaXMva2lsbGluZy9taWNlXG4gKi9cblxuICAvKipcbiAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgKlxuICAgKiBldmVyeXRoaW5nIGluIHRoaXMgZGljdGlvbmFyeSBjYW5ub3QgdXNlIGtleXByZXNzIGV2ZW50c1xuICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAqIGtleXVwL2tleWRvd24gZXZlbnRzXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgX01BUCA9IHtcbiAgICAgICAgICA4OiAnYmFja3NwYWNlJyxcbiAgICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgICAxMzogJ2VudGVyJyxcbiAgICAgICAgICAxNjogJ3NoaWZ0JyxcbiAgICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAgIDE4OiAnYWx0JyxcbiAgICAgICAgICAyMDogJ2NhcHNsb2NrJyxcbiAgICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgICAgMzI6ICdzcGFjZScsXG4gICAgICAgICAgMzM6ICdwYWdldXAnLFxuICAgICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAgIDM1OiAnZW5kJyxcbiAgICAgICAgICAzNjogJ2hvbWUnLFxuICAgICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgICAgMzg6ICd1cCcsXG4gICAgICAgICAgMzk6ICdyaWdodCcsXG4gICAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgICA0NTogJ2lucycsXG4gICAgICAgICAgNDY6ICdkZWwnLFxuICAgICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgICAgOTM6ICdtZXRhJyxcbiAgICAgICAgICAyMjQ6ICdtZXRhJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBtYXBwaW5nIGZvciBzcGVjaWFsIGNoYXJhY3RlcnMgc28gdGhleSBjYW4gc3VwcG9ydFxuICAgICAgICpcbiAgICAgICAqIHRoaXMgZGljdGlvbmFyeSBpcyBvbmx5IHVzZWQgaW5jYXNlIHlvdSB3YW50IHRvIGJpbmQgYVxuICAgICAgICoga2V5dXAgb3Iga2V5ZG93biBldmVudCB0byBvbmUgb2YgdGhlc2Uga2V5c1xuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgICAgICAxMDY6ICcqJyxcbiAgICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgICAxMDk6ICctJyxcbiAgICAgICAgICAxMTA6ICcuJyxcbiAgICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgICAgMTg2OiAnOycsXG4gICAgICAgICAgMTg3OiAnPScsXG4gICAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgICAgMTg5OiAnLScsXG4gICAgICAgICAgMTkwOiAnLicsXG4gICAgICAgICAgMTkxOiAnLycsXG4gICAgICAgICAgMTkyOiAnYCcsXG4gICAgICAgICAgMjE5OiAnWycsXG4gICAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgICAgMjIxOiAnXScsXG4gICAgICAgICAgMjIyOiAnXFwnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiB0aGlzIGlzIGEgbWFwcGluZyBvZiBrZXlzIHRoYXQgcmVxdWlyZSBzaGlmdCBvbiBhIFVTIGtleXBhZFxuICAgICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICAgKlxuICAgICAgICogdGhpcyBpcyBzbyB5b3UgY2FuIHVzZSBrZXl1cCBldmVudHMgd2l0aCB0aGVzZSBrZXlzXG4gICAgICAgKlxuICAgICAgICogbm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IHdvcmsgcmVsaWFibHkgb24gVVMga2V5Ym9hcmRzXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgX1NISUZUX01BUCA9IHtcbiAgICAgICAgICAnfic6ICdgJyxcbiAgICAgICAgICAnISc6ICcxJyxcbiAgICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgICAnIyc6ICczJyxcbiAgICAgICAgICAnJCc6ICc0JyxcbiAgICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgICAnXic6ICc2JyxcbiAgICAgICAgICAnJic6ICc3JyxcbiAgICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgICAnKCc6ICc5JyxcbiAgICAgICAgICAnKSc6ICcwJyxcbiAgICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgICAnKyc6ICc9JyxcbiAgICAgICAgICAnOic6ICc7JyxcbiAgICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAgICc8JzogJywnLFxuICAgICAgICAgICc+JzogJy4nLFxuICAgICAgICAgICc/JzogJy8nLFxuICAgICAgICAgICd8JzogJ1xcXFwnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHRoaXMgaXMgYSBsaXN0IG9mIHNwZWNpYWwgc3RyaW5ncyB5b3UgY2FuIHVzZSB0byBtYXBcbiAgICAgICAqIHRvIG1vZGlmaWVyIGtleXMgd2hlbiB5b3Ugc3BlY2lmeSB5b3VyIGtleWJvYXJkIHNob3J0Y3V0c1xuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9TUEVDSUFMX0FMSUFTRVMgPSB7XG4gICAgICAgICAgJ29wdGlvbic6ICdhbHQnLFxuICAgICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAgICdyZXR1cm4nOiAnZW50ZXInLFxuICAgICAgICAgICdlc2NhcGUnOiAnZXNjJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgZmxpcHBlZCB2ZXJzaW9uIG9mIF9NQVAgZnJvbSBhYm92ZVxuICAgICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICAgKiBpcyBzcGVjaWZpZWRcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgICAqL1xuICAgICAgX1JFVkVSU0VfTUFQLFxuXG4gICAgICAvKipcbiAgICAgICAqIGEgbGlzdCBvZiBhbGwgdGhlIGNhbGxiYWNrcyBzZXR1cCB2aWEgTW91c2V0cmFwLmJpbmQoKVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9jYWxsYmFja3MgPSB7fSxcblxuICAgICAgLyoqXG4gICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9kaXJlY3RfbWFwID0ge30sXG5cbiAgICAgIC8qKlxuICAgICAgICoga2VlcHMgdHJhY2sgb2Ygd2hhdCBsZXZlbCBlYWNoIHNlcXVlbmNlIGlzIGF0IHNpbmNlIG11bHRpcGxlXG4gICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgX3NlcXVlbmNlX2xldmVscyA9IHt9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7bnVsbHxudW1iZXJ9XG4gICAgICAgKi9cbiAgICAgIF9yZXNldF90aW1lcixcblxuICAgICAgLyoqXG4gICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIF9pZ25vcmVfbmV4dF9rZXl1cCA9IGZhbHNlLFxuXG4gICAgICAvKipcbiAgICAgICAqIGFyZSB3ZSBjdXJyZW50bHkgaW5zaWRlIG9mIGEgc2VxdWVuY2U/XG4gICAgICAgKiB0eXBlIG9mIGFjdGlvbiAoXCJrZXl1cFwiIG9yIFwia2V5ZG93blwiIG9yIFwia2V5cHJlc3NcIikgb3IgZmFsc2VcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIF9pbnNpZGVfc2VxdWVuY2UgPSBmYWxzZTtcblxuICAvKipcbiAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgKiBwcm9ncmFtYXRpY2FsbHlcbiAgICovXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgX01BUFsxMTEgKyBpXSA9ICdmJyArIGk7XG4gIH1cblxuICAvKipcbiAgICogbG9vcCB0aHJvdWdoIHRvIG1hcCBudW1iZXJzIG9uIHRoZSBudW1lcmljIGtleXBhZFxuICAgKi9cbiAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcbiAgICAgIF9NQVBbaSArIDk2XSA9IGk7XG4gIH1cblxuICAvKipcbiAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRG9jdW1lbnR9IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfYWRkRXZlbnQob2JqZWN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSkge1xuXG4gICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgaWYgKGUudHlwZSA9PSAna2V5cHJlc3MnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgaWYgKF9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICByZXR1cm4gX01BUFtlLndoaWNoXTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9LRVlDT0RFX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0IGlzIG5vdCBpbiB0aGUgc3BlY2lhbCBtYXBcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogc2hvdWxkIHdlIHN0b3AgdGhpcyBldmVudCBiZWZvcmUgZmlyaW5nIG9mZiBjYWxsYmFja3NcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gX3N0b3AoZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsXG4gICAgICAgICAgdGFnX25hbWUgPSBlbGVtZW50LnRhZ05hbWU7XG5cbiAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBzdG9wIGZvciBpbnB1dCwgc2VsZWN0LCBhbmQgdGV4dGFyZWFcbiAgICAgIHJldHVybiB0YWdfbmFtZSA9PSAnSU5QVVQnIHx8IHRhZ19uYW1lID09ICdTRUxFQ1QnIHx8IHRhZ19uYW1lID09ICdURVhUQVJFQScgfHwgKGVsZW1lbnQuY29udGVudEVkaXRhYmxlICYmIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID09ICd0cnVlJyk7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczFcbiAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMxLCBtb2RpZmllcnMyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXRzIGFsbCBzZXF1ZW5jZSBjb3VudGVycyBleGNlcHQgZm9yIHRoZSBvbmVzIHBhc3NlZCBpblxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZG9fbm90X3Jlc2V0XG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlcyhkb19ub3RfcmVzZXQpIHtcbiAgICAgIGRvX25vdF9yZXNldCA9IGRvX25vdF9yZXNldCB8fCB7fTtcblxuICAgICAgdmFyIGFjdGl2ZV9zZXF1ZW5jZXMgPSBmYWxzZSxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGZvciAoa2V5IGluIF9zZXF1ZW5jZV9sZXZlbHMpIHtcbiAgICAgICAgICBpZiAoZG9fbm90X3Jlc2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgYWN0aXZlX3NlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfc2VxdWVuY2VfbGV2ZWxzW2tleV0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZV9zZXF1ZW5jZXMpIHtcbiAgICAgICAgICBfaW5zaWRlX3NlcXVlbmNlID0gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmluZHMgYWxsIGNhbGxiYWNrcyB0aGF0IG1hdGNoIGJhc2VkIG9uIHRoZSBrZXljb2RlLCBtb2RpZmllcnMsXG4gICAqIGFuZCBhY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSByZW1vdmUgLSBzaG91bGQgd2UgcmVtb3ZlIGFueSBtYXRjaGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGFjdGlvbiwgcmVtb3ZlLCBjb21iaW5hdGlvbikge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gZXZlbnRzIHJlbGF0ZWQgdG8gdGhpcyBrZXljb2RlXG4gICAgICBpZiAoIV9jYWxsYmFja3NbY2hhcmFjdGVyXSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXkgaXMgY29taW5nIHVwIG9uIGl0cyBvd24gd2Ugc2hvdWxkIGFsbG93IGl0XG4gICAgICBpZiAoYWN0aW9uID09ICdrZXl1cCcgJiYgX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIG1vZGlmaWVycyA9IFtjaGFyYWN0ZXJdO1xuICAgICAgfVxuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkXG4gICAgICAvLyBhbmQgc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBfY2FsbGJhY2tzW2NoYXJhY3Rlcl1baV07XG5cbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc2VxdWVuY2UgYnV0IGl0IGlzIG5vdCBhdCB0aGUgcmlnaHQgbGV2ZWxcbiAgICAgICAgICAvLyB0aGVuIG1vdmUgb250byB0aGUgbmV4dCBtYXRjaFxuICAgICAgICAgIGlmIChjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlX2xldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHlcbiAgICAgICAgICAvLyBsb29rIGF0IHRoZSBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzXG4gICAgICAgICAgLy8gd2VsbFxuICAgICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyB8fCBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzLCBjYWxsYmFjay5tb2RpZmllcnMpKSB7XG5cbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIGlzIHVzZWQgc28gaWYgeW91IGNoYW5nZSB5b3VyIG1pbmQgYW5kIGNhbGwgYmluZCBhXG4gICAgICAgICAgICAgIC8vIHNlY29uZCB0aW1lIHdpdGggYSBuZXcgZnVuY3Rpb24gdGhlIGZpcnN0IG9uZSBpcyBvdmVyd3JpdHRlblxuICAgICAgICAgICAgICBpZiAocmVtb3ZlICYmIGNhbGxiYWNrLmNvbWJvID09IGNvbWJpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBfY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIHRha2VzIGEga2V5IGV2ZW50IGFuZCBmaWd1cmVzIG91dCB3aGF0IHRoZSBtb2RpZmllcnMgYXJlXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtb2RpZmllcnM7XG4gIH1cblxuICAvKipcbiAgICogYWN0dWFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqXG4gICAqIGlmIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB0aGlzIHdpbGwgdXNlIHRoZSBqcXVlcnlcbiAgICogY29udmVudGlvbiAtIHByZXZlbnQgZGVmYXVsdCBhbmQgc3RvcCBwcm9wb2dhdGlvbiBvbiB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlKSB7XG4gICAgICBpZiAoY2FsbGJhY2soZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICB9XG4gIH1cblxuICAvKipcbiAgICogaGFuZGxlcyBhIGNoYXJhY3RlciBrZXkgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9oYW5kbGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBlKSB7XG5cbiAgICAgIC8vIGlmIHRoaXMgZXZlbnQgc2hvdWxkIG5vdCBoYXBwZW4gc3RvcCBoZXJlXG4gICAgICBpZiAoX3N0b3AoZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxsYmFja3MgPSBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIF9ldmVudE1vZGlmaWVycyhlKSwgZS50eXBlKSxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGRvX25vdF9yZXNldCA9IHt9LFxuICAgICAgICAgIHByb2Nlc3NlZF9zZXF1ZW5jZV9jYWxsYmFjayA9IGZhbHNlO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggbWF0Y2hpbmcgY2FsbGJhY2tzIGZvciB0aGlzIGtleSBldmVudFxuICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgLy8gZmlyZSBmb3IgYWxsIHNlcXVlbmNlIGNhbGxiYWNrc1xuICAgICAgICAgIC8vIHRoaXMgaXMgYmVjYXVzZSBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZSBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgICAgICAvLyBib3VuZCBzdWNoIGFzIFwiZyBpXCIgYW5kIFwiZyB0XCIgdGhleSBib3RoIG5lZWQgdG8gZmlyZSB0aGVcbiAgICAgICAgICAvLyBjYWxsYmFjayBmb3IgbWF0Y2hpbmcgZyBjYXVzZSBvdGhlcndpc2UgeW91IGNhbiBvbmx5IGV2ZXJcbiAgICAgICAgICAvLyBtYXRjaCB0aGUgZmlyc3Qgb25lXG4gICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzc2VkX3NlcXVlbmNlX2NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICBkb19ub3RfcmVzZXRbY2FsbGJhY2tzW2ldLnNlcV0gPSAxO1xuICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZF9zZXF1ZW5jZV9jYWxsYmFjayAmJiAhX2luc2lkZV9zZXF1ZW5jZSkge1xuICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB5b3UgYXJlIGluc2lkZSBvZiBhIHNlcXVlbmNlIGFuZCB0aGUga2V5IHlvdSBhcmUgcHJlc3NpbmdcbiAgICAgIC8vIGlzIG5vdCBhIG1vZGlmaWVyIGtleSB0aGVuIHdlIHNob3VsZCByZXNldCBhbGwgc2VxdWVuY2VzXG4gICAgICAvLyB0aGF0IHdlcmUgbm90IG1hdGNoZWQgYnkgdGhpcyBrZXkgZXZlbnRcbiAgICAgIGlmIChlLnR5cGUgPT0gX2luc2lkZV9zZXF1ZW5jZSAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIF9yZXNldFNlcXVlbmNlcyhkb19ub3RfcmVzZXQpO1xuICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsZXMgYSBrZXlkb3duIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX2hhbmRsZUtleShlKSB7XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICBlLndoaWNoID0gdHlwZW9mIGUud2hpY2ggPT0gXCJudW1iZXJcIiA/IGUud2hpY2ggOiBlLmtleUNvZGU7XG5cbiAgICAgIHZhciBjaGFyYWN0ZXIgPSBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpO1xuXG4gICAgICAvLyBubyBjaGFyYWN0ZXIgZm91bmQgdGhlbiBzdG9wXG4gICAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudHlwZSA9PSAna2V5dXAnICYmIF9pZ25vcmVfbmV4dF9rZXl1cCA9PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICBfaWdub3JlX25leHRfa2V5dXAgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9oYW5kbGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZXRlcm1pbmVzIGlmIHRoZSBrZXljb2RlIHNwZWNpZmllZCBpcyBhIG1vZGlmaWVyIGtleSBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PSAnc2hpZnQnIHx8IGtleSA9PSAnY3RybCcgfHwga2V5ID09ICdhbHQnIHx8IGtleSA9PSAnbWV0YSc7XG4gIH1cblxuICAvKipcbiAgICogY2FsbGVkIHRvIHNldCBhIDEgc2Vjb25kIHRpbWVvdXQgb24gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZVxuICAgKlxuICAgKiB0aGlzIGlzIHNvIGFmdGVyIGVhY2gga2V5IHByZXNzIGluIHRoZSBzZXF1ZW5jZSB5b3UgaGF2ZSAxIHNlY29uZFxuICAgKiB0byBwcmVzcyB0aGUgbmV4dCBrZXkgYmVmb3JlIHlvdSBoYXZlIHRvIHN0YXJ0IG92ZXJcbiAgICpcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgIGNsZWFyVGltZW91dChfcmVzZXRfdGltZXIpO1xuICAgICAgX3Jlc2V0X3RpbWVyID0gc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldmVyc2VzIHRoZSBtYXAgbG9va3VwIHNvIHRoYXQgd2UgY2FuIGxvb2sgZm9yIHNwZWNpZmljIGtleXNcbiAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gX2dldFJldmVyc2VNYXAoKSB7XG4gICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfTUFQKSB7XG5cbiAgICAgICAgICAgICAgLy8gcHVsbCBvdXQgdGhlIG51bWVyaWMga2V5cGFkIGZyb20gaGVyZSBjYXVzZSBrZXlwcmVzcyBzaG91bGRcbiAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgIGlmIChrZXkgPiA5NSAmJiBrZXkgPCAxMTIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKF9NQVAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICB9XG5cbiAgLyoqXG4gICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBjaGFyYWN0ZXIgZm9yIGtleVxuICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gcGFzc2VkIGluXG4gICAqL1xuICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAvLyBpZiBubyBhY3Rpb24gd2FzIHBpY2tlZCBpbiB3ZSBzaG91bGQgdHJ5IHRvIHBpY2sgdGhlIG9uZVxuICAgICAgLy8gdGhhdCB3ZSB0aGluayB3b3VsZCB3b3JrIGJlc3QgZm9yIHRoaXMga2V5XG4gICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgIGFjdGlvbiA9IF9nZXRSZXZlcnNlTWFwKClba2V5XSA/ICdrZXlkb3duJyA6ICdrZXlwcmVzcyc7XG4gICAgICB9XG5cbiAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgLy8gc3dpdGNoIHRvIGtleWRvd25cbiAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRzIGEga2V5IHNlcXVlbmNlIHRvIGFuIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21ibyAtIGNvbWJvIHNwZWNpZmllZCBpbiBiaW5kIGNhbGxcbiAgICogQHBhcmFtIHtBcnJheX0ga2V5c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfYmluZFNlcXVlbmNlKGNvbWJvLCBrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG5cbiAgICAgIC8vIHN0YXJ0IG9mZiBieSBhZGRpbmcgYSBzZXF1ZW5jZSBsZXZlbCByZWNvcmQgZm9yIHRoaXMgY29tYmluYXRpb25cbiAgICAgIC8vIGFuZCBzZXR0aW5nIHRoZSBsZXZlbCB0byAwXG4gICAgICBfc2VxdWVuY2VfbGV2ZWxzW2NvbWJvXSA9IDA7XG5cbiAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFjdGlvbiBwaWNrIHRoZSBiZXN0IG9uZSBmb3IgdGhlIGZpcnN0IGtleVxuICAgICAgLy8gaW4gdGhlIHNlcXVlbmNlXG4gICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgIGFjdGlvbiA9IF9waWNrQmVzdEFjdGlvbihrZXlzWzBdLCBbXSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogY2FsbGJhY2sgdG8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlIGxldmVsIGZvciB0aGlzIHNlcXVlbmNlIGFuZCByZXNldFxuICAgICAgICogYWxsIG90aGVyIHNlcXVlbmNlcyB0aGF0IHdlcmUgYWN0aXZlXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICovXG4gICAgICB2YXIgX2luY3JlYXNlU2VxdWVuY2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIF9pbnNpZGVfc2VxdWVuY2UgPSBhY3Rpb247XG4gICAgICAgICAgICAgICsrX3NlcXVlbmNlX2xldmVsc1tjb21ib107XG4gICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogd3JhcHMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayBpbnNpZGUgb2YgYW5vdGhlciBmdW5jdGlvbiBpbiBvcmRlclxuICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBfY2FsbGJhY2tBbmRSZXNldCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSk7XG5cbiAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSB0aGUgbmV4dCBrZXkgdXAgaWYgdGhlIGFjdGlvbiBpcyBrZXkgZG93blxuICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAvLyByZWxlYXNlIHRoZSBrZXkgdGhlIGZpbmFsIGtleSB3aWxsIG5vdCB0cmlnZ2VyIGEga2V5dXBcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2tleXVwJykge1xuICAgICAgICAgICAgICAgICAgX2lnbm9yZV9uZXh0X2tleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIHdlaXJkIHJhY2UgY29uZGl0aW9uIGlmIGEgc2VxdWVuY2UgZW5kcyB3aXRoIHRoZSBrZXlcbiAgICAgICAgICAgICAgLy8gYW5vdGhlciBzZXF1ZW5jZSBiZWdpbnMgd2l0aFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGtleXMgb25lIGF0IGEgdGltZSBhbmQgYmluZCB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tcbiAgICAgIC8vIGZ1bmN0aW9uLiAgZm9yIGFueSBrZXkgbGVhZGluZyB1cCB0byB0aGUgZmluYWwgb25lIGl0IHNob3VsZFxuICAgICAgLy8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlLiBhZnRlciB0aGUgZmluYWwsIGl0IHNob3VsZCByZXNldCBhbGwgc2VxdWVuY2VzXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIGkgPCBrZXlzLmxlbmd0aCAtIDEgPyBfaW5jcmVhc2VTZXF1ZW5jZSA6IF9jYWxsYmFja0FuZFJlc2V0LCBhY3Rpb24sIGNvbWJvLCBpKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kcyBhIHNpbmdsZSBrZXlib2FyZCBjb21iaW5hdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYmluYXRpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZV9uYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZV9uYW1lLCBsZXZlbCkge1xuXG4gICAgICAvLyBtYWtlIHN1cmUgbXVsdGlwbGUgc3BhY2VzIGluIGEgcm93IGJlY29tZSBhIHNpbmdsZSBzcGFjZVxuICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG5cbiAgICAgIHZhciBzZXF1ZW5jZSA9IGNvbWJpbmF0aW9uLnNwbGl0KCcgJyksXG4gICAgICAgICAgaSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAga2V5cyxcbiAgICAgICAgICBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgLy8gaWYgdGhpcyBwYXR0ZXJuIGlzIGEgc2VxdWVuY2Ugb2Yga2V5cyB0aGVuIHJ1biB0aHJvdWdoIHRoaXMgbWV0aG9kXG4gICAgICAvLyB0byByZXByb2Nlc3MgZWFjaCBwYXR0ZXJuIG9uZSBrZXkgYXQgYSB0aW1lXG4gICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybiBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIHRha2UgdGhlIGtleXMgZnJvbSB0aGlzIHBhdHRlcm4gYW5kIGZpZ3VyZSBvdXQgd2hhdCB0aGUgYWN0dWFsXG4gICAgICAvLyBwYXR0ZXJuIGlzIGFsbCBhYm91dFxuICAgICAga2V5cyA9IGNvbWJpbmF0aW9uID09PSAnKycgPyBbJysnXSA6IGNvbWJpbmF0aW9uLnNwbGl0KCcrJyk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICBpZiAoX1NQRUNJQUxfQUxJQVNFU1trZXldKSB7XG4gICAgICAgICAgICAgIGtleSA9IF9TUEVDSUFMX0FMSUFTRVNba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIGtleXByZXNzIGV2ZW50IHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgLy8gYmUgc21hcnQgYWJvdXQgdXNpbmcgc2hpZnQga2V5c1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24gIT0gJ2tleXByZXNzJyAmJiBfU0hJRlRfTUFQW2tleV0pIHtcbiAgICAgICAgICAgICAga2V5ID0gX1NISUZUX01BUFtrZXldO1xuICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGlzIGtleSBpcyBhIG1vZGlmaWVyIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG1vZGlmaWVyc1xuICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZXBlbmRpbmcgb24gd2hhdCB0aGUga2V5IGNvbWJpbmF0aW9uIGlzXG4gICAgICAvLyB3ZSB3aWxsIHRyeSB0byBwaWNrIHRoZSBiZXN0IGV2ZW50IGZvciBpdFxuICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgaWYgKCFfY2FsbGJhY2tzW2tleV0pIHtcbiAgICAgICAgICBfY2FsbGJhY2tzW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIG1hdGNoIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgX2dldE1hdGNoZXMoa2V5LCBtb2RpZmllcnMsIGFjdGlvbiwgIXNlcXVlbmNlX25hbWUsIGNvbWJpbmF0aW9uKTtcblxuICAgICAgLy8gYWRkIHRoaXMgY2FsbCBiYWNrIHRvIHRoZSBhcnJheVxuICAgICAgLy8gaWYgaXQgaXMgYSBzZXF1ZW5jZSBwdXQgaXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgLy8gaWYgbm90IHB1dCBpdCBhdCB0aGUgZW5kXG4gICAgICAvL1xuICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSB0aGUgd2F5IHRoZXNlIGFyZSBwcm9jZXNzZWQgZXhwZWN0c1xuICAgICAgLy8gdGhlIHNlcXVlbmNlIG9uZXMgdG8gY29tZSBmaXJzdFxuICAgICAgX2NhbGxiYWNrc1trZXldW3NlcXVlbmNlX25hbWUgPyAndW5zaGlmdCcgOiAncHVzaCddKHtcbiAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgc2VxOiBzZXF1ZW5jZV9uYW1lLFxuICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICBjb21ibzogY29tYmluYXRpb25cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRzIG11bHRpcGxlIGNvbWJpbmF0aW9ucyB0byB0aGUgc2FtZSBjYWxsYmFja1xuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBjb21iaW5hdGlvbnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBhY3Rpb25cbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX2JpbmRNdWx0aXBsZShjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIHN0YXJ0IVxuICBfYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXkpO1xuICBfYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJywgX2hhbmRsZUtleSk7XG4gIF9hZGRFdmVudChkb2N1bWVudCwgJ2tleXVwJywgX2hhbmRsZUtleSk7XG5cbiAgdmFyIG1vdXNldHJhcCA9IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBiaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgICAqXG4gICAgICAgKiBjYW4gYmUgYSBzaW5nbGUga2V5LCBhIGNvbWJpbmF0aW9uIG9mIGtleXMgc2VwYXJhdGVkIHdpdGggKyxcbiAgICAgICAqIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2Yga2V5cywgYW4gYXJyYXkgb2Yga2V5cywgb3JcbiAgICAgICAqIGEgc2VxdWVuY2Ugb2Yga2V5cyBzZXBhcmF0ZWQgYnkgc3BhY2VzXG4gICAgICAgKlxuICAgICAgICogYmUgc3VyZSB0byBsaXN0IHRoZSBtb2RpZmllciBrZXlzIGZpcnN0IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgICAgICogY29ycmVjdCBrZXkgZW5kcyB1cCBnZXR0aW5nIGJvdW5kICh0aGUgbGFzdCBrZXkgaW4gdGhlIHBhdHRlcm4pXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICovXG4gICAgICBiaW5kOiBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgICAgX2JpbmRNdWx0aXBsZShrZXlzIGluc3RhbmNlb2YgQXJyYXkgPyBrZXlzIDogW2tleXNdLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICBfZGlyZWN0X21hcFtrZXlzICsgJzonICsgYWN0aW9uXSA9IGNhbGxiYWNrO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiB1bmJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAgICpcbiAgICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgICAqIHRvIGFuIGVtcHR5IGZ1bmN0aW9uIGFuZCBkZWxldGVzIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiB0aGVcbiAgICAgICAqIF9kaXJlY3RfbWFwIGRpY3QuXG4gICAgICAgKlxuICAgICAgICogdGhlIGtleWNvbWJvK2FjdGlvbiBoYXMgdG8gYmUgZXhhY3RseSB0aGUgc2FtZSBhc1xuICAgICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICAgKlxuICAgICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgICAqIG9mIGJpbmRpbmcgYW4gZW1wdHkgZnVuY3Rpb25cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICovXG4gICAgICB1bmJpbmQ6IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICAgIGlmIChfZGlyZWN0X21hcFtrZXlzICsgJzonICsgYWN0aW9uXSkge1xuICAgICAgICAgICAgICBkZWxldGUgX2RpcmVjdF9tYXBba2V5cyArICc6JyArIGFjdGlvbl07XG4gICAgICAgICAgICAgIHRoaXMuYmluZChrZXlzLCBmdW5jdGlvbigpIHt9LCBhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleXNcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgKi9cbiAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICAgIF9kaXJlY3RfbWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgICAqIGlmIHlvdSB3YW50IHRvIGNsZWFyIG91dCB0aGUgY3VycmVudCBrZXlib2FyZCBzaG9ydGN1dHMgYW5kIGJpbmRcbiAgICAgICAqIG5ldyBvbmVzIC0gZm9yIGV4YW1wbGUgaWYgeW91IHN3aXRjaCB0byBhbm90aGVyIHBhZ2VcbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgKi9cbiAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgX2RpcmVjdF9tYXAgPSB7fTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZXRyYXA7XG5cbiIsImhpc3QgICAgICAgICA9IHdpbmRvdy5oaXN0b3J5XG5zbGlkZV9wcmVmaXggPSAnI3NsaWRlLSdcbkV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudXRpbCA9IHJlcXVpcmUgJ3V0aWwnXG5cbmFwaSA9IGRvIC0+XG5cbiAgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXJcblxuICAjIG9fT1xuICBvbkV2ZW50ID0gKGFyZ3MuLi4pIC0+IGVtaXR0ZXIub24uYXBwbHkgZW1pdHRlciwgYXJnc1xuXG4gIGN1cnJlbnQgID0gMVxuICBtYXggICAgICA9IDFcbiAgJHNsaWRlUGFjayA9IHt9XG5cbiAgaW5pdCA9IChvcHRpb25zKSAtPlxuXG4gICAgJHNsaWRlUGFjayA9IG9wdGlvbnMuc2xpZGVQYWNrXG5cbiAgICBtYXggPSAkc2xpZGVQYWNrLmZpbmQoJ3NlY3Rpb24nKS5sZW5ndGhcblxuICAgIHNldHVwUGFnZXIoKVxuICAgIGluc3RhbGxOYXZpZ2F0aW9uSGFuZGxlcigpXG5cbiAgICBzaG93IGN1cnJlbnRcblxuICBzZXR1cFBhZ2VyID0gLT5cbiAgICBpZiBzdGF0ZSA9IGhpc3Quc3RhdGVcbiAgICAgIGN1cnJlbnQgPSBzdGF0ZS5jdXJyZW50XG5cbiAgcHJldiA9IC0+XG4gICAgY3VycmVudCAtPSAxXG4gICAgY3VycmVudCA9IG1heCBpZiBjdXJyZW50IDwgMVxuICAgIG5hdmlnYXRlKClcblxuICBuZXh0ID0gLT5cbiAgICBjdXJyZW50ICs9IDFcbiAgICBjdXJyZW50ID0gMSBpZiBjdXJyZW50ID4gbWF4XG4gICAgbmF2aWdhdGUoKVxuXG4gIHNob3cgPSAodG8pIC0+XG4gICAgJHNsaWRlUGFjay5maW5kKCdzZWN0aW9uLmFjdGl2ZScpLnJlbW92ZUNsYXNzICdhY3RpdmUnXG4gICAgJHNsaWRlUGFjay5maW5kKCdzZWN0aW9uJykuZXEodG8gLSAxKS5hZGRDbGFzcyAnYWN0aXZlJ1xuXG4gIG5hdmlnYXRlID0gLT5cbiAgICBzaG93IGN1cnJlbnRcbiAgICBlbWl0dGVyLmVtaXQoJ25hdmlnYXRlJylcbiAgICBoaXN0LnB1c2hTdGF0ZSBjdXJyZW50IDogY3VycmVudCwgXCJTbGlkZSAje2N1cnJlbnR9IC8gI3ttYXh9XCIsIFwiI3tzbGlkZV9wcmVmaXh9I3tjdXJyZW50fVwiXG5cbiAgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgLT5cbiAgICBpZiBldmVudC5zdGF0ZVxuICAgICAgIyBwdXNoU3RhdGUvcmVwbGFjZVN0YXRlXG4gICAgICBzaG93IGV2ZW50LnN0YXRlLmN1cnJlbnRcbiAgICBlbHNlXG4gICAgICAjIHBhZ2UgbG9hZFxuICAgICAgY3VycmVudCA9IChOdW1iZXIpIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2Uoc2xpZGVfcHJlZml4LCcnKVxuICAgICAgc2hvdyhjdXJyZW50KSBpZiBjdXJyZW50XG5cbiAgaW5zdGFsbE5hdmlnYXRpb25IYW5kbGVyID0gLT5cbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGhhbmRsZU5hdmlnYXRpb25cblxuICBzdGF0dXMgPSAtPlxuICAgIHRvdGFsIDogbWF4XG4gICAgY3VycmVudCA6IGN1cnJlbnRcblxuICBzdGF0dXMgOiBzdGF0dXNcbiAgaW5pdCA6IGluaXRcbiAgcHJldiA6IHByZXZcbiAgbmV4dCA6IG5leHRcbiAgb24gOiBvbkV2ZW50XG5cbm1vZHVsZS5leHBvcnRzID0gYXBpXG4iLCJhcGkgPSByZXF1aXJlICcuL3NsaWRlLXBhY2stYXBpJ1xubW91c2V0cmFwID0gcmVxdWlyZSAnbW91c2V0cmFwJ1xuJCA9IHJlcXVpcmUgJ3plcHRvanMnXG5cblxuIyBrZXlib2FyZCBuYXZpZ2F0aW9uXG5tb3VzZXRyYXAuYmluZCBbJ2xlZnQnLCAndXAnLCAnaycsICdoJ10sIGFwaS5wcmV2XG5tb3VzZXRyYXAuYmluZCBbJ3JpZ2h0JywgJ2Rvd24nLCAnaicsICdsJ10sIGFwaS5uZXh0XG5cbiMgbW91c2UvdG91Y2ggbmF2aWdhdGlvblxubmF2ID0gJCgnPG5hdj48YT7ihpA8L2E+PGE+4oaSPC9hPjwvbmF2PicpXG4kKCdib2R5JykuYXBwZW5kIG5hdlxuXG4kKGRvY3VtZW50KS5vbiAnY2xpY2snLCAnbmF2IGE6Zmlyc3QtY2hpbGQnLCAoZSkgLT5cbiAgYXBpLnByZXYoKVxuXG4kKGRvY3VtZW50KS5vbiAnY2xpY2snLCAnbmF2IGE6bGFzdC1jaGlsZCcsIChlKSAtPlxuICBhcGkubmV4dCgpXG5cbiQoZG9jdW1lbnQpLm9uICdzd2lwZUxlZnQnLCAtPlxuICBhcGkubmV4dCgpXG5cbiQoZG9jdW1lbnQpLm9uICdzd2lwZVJpZ2h0JywgLT5cbiAgYXBpLnByZXYoKVxuIiwibWFya2Rvd24gPSByZXF1aXJlKCdtYXJrZWQnKVxuXG5pc05ld1NsaWRlTWFyayA9IChub2RlKSAtPlxuICBub2RlICYmIG5vZGUudHlwZSA9PSBcInBhcmFncmFwaFwiICYmIG5vZGUudGV4dC5pbmRleE9mKCctLScpID09IDBcblxuZ2V0U2xpZGVDbGFzcyA9IChub2RlKSAtPlxuICBub2RlLnRleHQuc3Vic3RyIDNcblxuZG9DaG9wID0gKHNsaWRlcywgdG9rZW5zKSAtPlxuICByZXR1cm4gc2xpZGVzIGlmIHRva2Vucy5sZW5ndGggPT0gMFxuXG4gIHNsaWRlID0gW11cbiAgc2xpZGUubGlua3MgPSB7fSAjIFRPRE8gV1RGIT9cblxuICBub2RlID0gdG9rZW5zLnNoaWZ0KClcbiAgaWYgaXNOZXdTbGlkZU1hcmsobm9kZSlcbiAgICBzbGlkZS5zbGlkZUNsYXNzID0gZ2V0U2xpZGVDbGFzcyhub2RlKVxuXG4gIHdoaWxlIG5vZGUgPSB0b2tlbnMuc2hpZnQoKVxuICAgIGlmIGlzTmV3U2xpZGVNYXJrKG5vZGUpXG4gICAgICB0b2tlbnMudW5zaGlmdChub2RlKVxuICAgICAgYnJlYWtcbiAgICBlbHNlXG4gICAgICBzbGlkZS5wdXNoIG5vZGVcblxuICBzbGlkZXMucHVzaCBzbGlkZVxuICBkb0Nob3Agc2xpZGVzLCB0b2tlbnNcblxuY2hvcCA9ICh0b2tlbnMpIC0+XG4gIGRvQ2hvcCBbXSwgdG9rZW5zXG5cbnNsaWRlciA9IChtZCkgLT5cbiAgdG9rZW5zID0gbWFya2Rvd24ubGV4ZXIobWQpXG4gIGNob3AgdG9rZW5zXG5cbmdlbmVyYXRlU2xpZGUgPSAoc2xpZGUpIC0+XG4gIGNzc0NsYXNzIDogc2xpZGUuc2xpZGVDbGFzc1xuICBodG1sIDogbWFya2Rvd24ucGFyc2VyIHNsaWRlXG5cbnNsaWRlUGFja1Byb2Nlc3NvciA9IGRvIC0+XG5cbiAgcHJvY2VzcyA9IChtZCkgLT5cbiAgICBzbGlkZXMgPSBzbGlkZXIgbWRcblxuICAgIChnZW5lcmF0ZVNsaWRlKHNsaWRlKSBmb3Igc2xpZGUgaW4gc2xpZGVzKVxuXG5cbiAgcHJvY2VzcyA6IHByb2Nlc3NcblxubW9kdWxlLmV4cG9ydHMgPSBzbGlkZVBhY2tQcm9jZXNzb3JcbiIsImFwaSA9IHJlcXVpcmUgJy4vc2xpZGUtcGFjay1hcGknXG4kID0gcmVxdWlyZSAnemVwdG9qcydcblxuJCAtPlxuXG4gIHByb2dyZXNzID0gJCgnPHByb2dyZXNzPjwvcHJvZ3Jlc3M+JylcblxuICB1cGRhdGVQcm9ncmVzcyA9IC0+XG4gICAgc3RhdHVzID0gYXBpLnN0YXR1cygpXG4gICAgcHJvZ3Jlc3MuYXR0clxuICAgICAgbWF4IDogc3RhdHVzLnRvdGFsXG4gICAgICB2YWx1ZSA6IHN0YXR1cy5jdXJyZW50XG5cbiAgdXBkYXRlUHJvZ3Jlc3MoKVxuXG4gIGFwaS5vbiAnbmF2aWdhdGUnLCB1cGRhdGVQcm9ncmVzc1xuXG4gICQoJ2JvZHknKS5hcHBlbmQgcHJvZ3Jlc3NcbiJdfQ==
