(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.coffee":[function(require,module,exports){
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



},{"./slide-pack-api":"/Users/asis/code/personal/slidepack/src/slide-pack-api.coffee","./slide-pack-navigation":"/Users/asis/code/personal/slidepack/src/slide-pack-navigation.coffee","./slide-pack-processor":"/Users/asis/code/personal/slidepack/src/slide-pack-processor.coffee","./slide-pack-ui":"/Users/asis/code/personal/slidepack/src/slide-pack-ui.coffee","highlightjs":"/Users/asis/code/personal/slidepack/lib/highlightjs/highlight.pack.js","zeptojs":"/Users/asis/code/personal/slidepack/lib/zeptojs/zepto.js"}],"/Users/asis/code/personal/slidepack/lib/highlightjs/highlight.pack.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function u(e){("start"==e.event?i:c)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");c[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\b[A-Za-z0-9_]+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":E.classPrefix,o='<span class="'+a,i=t?"":"</span>";return o+=e+'">',o+n+i}function d(){if(!w.k)return n(y);var e="",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),"continuous"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,"",!0):"";e.rB?(M+=r,y=""):e.eB?(M+=n(t)+r,y=""):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+="</span>"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y="",a.starts&&b(a.starts,""),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.cN||"<unnamed>")+'"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: "'+e+'"');u(x);for(var w=o||x,L={},M="",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,"",!0)+M);var y="",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+="</span>");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf("Illegal"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),r&&a.push(r),a.join(" ").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR="[a-zA-Z][a-zA-Z0-9_]*",e.UIR="[a-zA-Z_][a-zA-Z0-9_]*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.CLCM={cN:"comment",b:"//",e:"$",c:[e.PWM]},e.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM]},e.HCM={cN:"comment",b:"#",e:"$",c:[e.PWM]},e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("xml",function(){var t="[A-Za-z0-9\\._:-]+",e={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[e,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[e],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:"javascript"}},e,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}});hljs.registerLanguage("clojure-repl",function(){return{c:[{cN:"prompt",b:/^([\w.-]+|\s*#_)=>/,starts:{e:/$/,sL:"clojure",subLanguageMode:"continuous"}}]}});hljs.registerLanguage("cpp",function(t){var i={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","h","c++","h++"],k:i,i:"</",c:[t.CLCM,t.CBCM,t.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},t.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},t.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:i,c:["self"]},{b:t.IR+"::"},{bK:"new throw return",r:0},{cN:"function",b:"("+t.IR+"\\s+)+"+t.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:t.IR+"\\s*\\(",rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:i,r:0,c:[t.CBCM]},t.CLCM,t.CBCM]}]}});hljs.registerLanguage("haskell",function(e){var i={cN:"comment",v:[{b:"--",e:"$"},{b:"{-",e:"-}",c:["self"]}]},c={cN:"pragma",b:"{-#",e:"#-}"},a={cN:"preprocessor",b:"^#",e:"$"},n={cN:"type",b:"\\b[A-Z][\\w']*",r:0},l={cN:"container",b:"\\(",e:"\\)",i:'"',c:[c,i,a,{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TM,{b:"[_a-z][\\w']*"})]},t={cN:"container",b:"{",e:"}",c:l.c};return{aliases:["hs"],k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",c:[{cN:"module",b:"\\bmodule\\b",e:"where",k:"module where",c:[l,i],i:"\\W\\.|;"},{cN:"import",b:"\\bimport\\b",e:"$",k:"import|0 qualified as hiding",c:[l,i],i:"\\W\\.|;"},{cN:"class",b:"^(\\s*)?(class|instance)\\b",e:"where",k:"class family instance where",c:[n,l,i]},{cN:"typedef",b:"\\b(data|(new)?type)\\b",e:"$",k:"data family type newtype deriving",c:[c,i,n,l,t]},{cN:"default",bK:"default",e:"$",c:[n,l,i]},{cN:"infix",bK:"infix infixl infixr",e:"$",c:[e.CNM,i]},{cN:"foreign",b:"\\bforeign\\b",e:"$",k:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",c:[n,e.QSM,i]},{cN:"shebang",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},c,i,a,e.QSM,e.CNM,n,e.inherit(e.TM,{b:"^[_a-z][\\w']*"}),{b:"->|<-"}]}});hljs.registerLanguage("haml",function(){return{cI:!0,c:[{cN:"doctype",b:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",r:10},{cN:"comment",b:"^\\s*(!=#|=#|-#|/).*$",r:0},{b:"^\\s*(-|=|!=)(?!#)",starts:{e:"\\n",sL:"ruby"}},{cN:"tag",b:"^\\s*%",c:[{cN:"title",b:"\\w+"},{cN:"value",b:"[#\\.]\\w+"},{b:"{\\s*",e:"\\s*}",eE:!0,c:[{b:":\\w+\\s*=>",e:",\\s+",rB:!0,eW:!0,c:[{cN:"symbol",b:":\\w+"},{cN:"string",b:'"',e:'"'},{cN:"string",b:"'",e:"'"},{b:"\\w+",r:0}]}]},{b:"\\(\\s*",e:"\\s*\\)",eE:!0,c:[{b:"\\w+\\s*=",e:"\\s+",rB:!0,eW:!0,c:[{cN:"attribute",b:"\\w+",r:0},{cN:"string",b:'"',e:'"'},{cN:"string",b:"'",e:"'"},{b:"\\w+",r:0}]}]}]},{cN:"bullet",b:"^\\s*[=~]\\s*",r:0},{b:"#{",starts:{e:"}",sL:"ruby"}}]}});hljs.registerLanguage("processing",function(e){return{k:{keyword:"BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",constant:"P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",variable:"displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width",title:"setup draw",built_in:"size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"},c:[e.CLCM,e.CBCM,e.ASM,e.QSM,e.CNM]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage("erlang-repl",function(e){return{k:{special_functions:"spawn spawn_link self",reserved:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},c:[{cN:"prompt",b:"^[0-9]+> ",r:10},{cN:"comment",b:"%",e:"$"},{cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},e.ASM,e.QSM,{cN:"constant",b:"\\?(::)?([A-Z]\\w*(::)?)+"},{cN:"arrow",b:"->"},{cN:"ok",b:"ok"},{cN:"exclamation_mark",b:"!"},{cN:"function_or_atom",b:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",r:0},{cN:"variable",b:"[A-Z][a-zA-Z0-9_']*",r:0}]}});hljs.registerLanguage("stylus",function(t){var e={cN:"variable",b:"\\$"+t.IR},o={cN:"hexcolor",b:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",r:10},i=["charset","css","debug","extend","font-face","for","import","include","media","mixin","page","warn","while"],r=["after","before","first-letter","first-line","active","first-child","focus","hover","lang","link","visited"],n=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],a="[\\.\\s\\n\\[\\:,]",l=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-ligatures","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"],d=["\\{","\\}","\\?","(\\bReturn\\b)","(\\bEnd\\b)","(\\bend\\b)",";","#\\s","\\*\\s","===\\s","\\|"];return{aliases:["styl"],cI:!1,i:"("+d.join("|")+")",k:"if else for in",c:[t.QSM,t.ASM,t.CLCM,t.CBCM,o,{b:"\\.[a-zA-Z][a-zA-Z0-9_-]*"+a,rB:!0,c:[{cN:"class",b:"\\.[a-zA-Z][a-zA-Z0-9_-]*"}]},{b:"\\#[a-zA-Z][a-zA-Z0-9_-]*"+a,rB:!0,c:[{cN:"id",b:"\\#[a-zA-Z][a-zA-Z0-9_-]*"}]},{b:"\\b("+n.join("|")+")"+a,rB:!0,c:[{cN:"tag",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*"}]},{cN:"pseudo",b:"&?:?:\\b("+r.join("|")+")"+a},{cN:"at_rule",b:"@("+i.join("|")+")\\b"},e,t.CSSNM,t.NM,{cN:"function",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",i:"[\\n]",rB:!0,c:[{cN:"title",b:"\\b[a-zA-Z][a-zA-Z0-9_-]*"},{cN:"params",b:/\(/,e:/\)/,c:[o,e,t.ASM,t.CSSNM,t.NM,t.QSM]}]},{cN:"attribute",b:"\\b("+l.reverse().join("|")+")\\b"}]}});hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})+",a=[],c=[],n=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},i=function(e,r,t){return{cN:e,b:r,r:t}},s=function(r,t,a){return e.inherit({cN:r,b:t+"\\(",e:"\\(",rB:!0,eE:!0,r:0},a)},b={b:"\\(",e:"\\)",c:c,r:0};c.push(e.CLCM,e.CBCM,n("'"),n('"'),e.CSSNM,i("hexcolor","#[0-9A-Fa-f]+\\b"),s("function","(url|data-uri)",{starts:{cN:"string",e:"[\\)\\n]",eE:!0}}),s("function",r),b,i("variable","@@?"+r,10),i("variable","@{"+r+"}"),i("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0});var o=c.concat({b:"{",e:"}",c:a}),u={bK:"when",eW:!0,c:[{bK:"and not"}].concat(c)},C={cN:"attribute",b:t,e:":",eE:!0,c:[e.CLCM,e.CBCM],i:/\S/,starts:{e:"[;}]",rE:!0,c:c,i:"[<=$]"}},l={cN:"at_rule",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:c,r:0}},d={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:o}},p={v:[{b:"[\\.#:&\\[]",e:"[;{}]"},{b:t+"[^;]*{",e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",c:[e.CLCM,e.CBCM,u,i("keyword","all\\b"),i("variable","@{"+r+"}"),i("tag",t+"%?",0),i("id","#"+t),i("class","\\."+t,0),i("keyword","&",0),s("pseudo",":not"),s("keyword",":extend"),i("pseudo","::?"+t),{cN:"attr_selector",b:"\\[",e:"\\]"},{b:"\\(",e:"\\)",c:o},{b:"!important"}]};return a.push(e.CLCM,e.CBCM,l,d,p,C),{cI:!0,i:"[=>'/<($\"]",c:a}});hljs.registerLanguage("scala",function(e){var t={cN:"annotation",b:"@[A-Za-z]+"},a={cN:"string",b:'u?r?"""',e:'"""',r:10},r={cN:"symbol",b:"'\\w[\\w\\d_]*(?!')"},c={cN:"type",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},i={cN:"title",b:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,r:0},l={cN:"class",bK:"class object trait type",e:/[:={\[(\n;]/,c:[{cN:"keyword",bK:"extends with",r:10},i]},n={cN:"function",bK:"def val",e:/[:={\[(\n;]/,c:[i]};return{k:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"},c:[e.CLCM,e.CBCM,a,e.QSM,r,c,n,l,e.CNM,t]}});hljs.registerLanguage("java",function(e){var a=e.UIR+"(<"+e.UIR+">)?",t="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",c="(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",r={cN:"number",b:c,r:0};return{aliases:["jsp"],k:t,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return",r:0},{cN:"function",b:"("+a+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("objectivec",function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},o=/[a-zA-Z@][a-zA-Z0-9_]*/,a="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],k:t,l:o,i:"</",c:[e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+a.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:a,l:o,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}});hljs.registerLanguage("handlebars",function(){var e="each in with if else unless bindattr action collection debugger log outlet template unbound view yield";return{aliases:["hbs","html.hbs","html.handlebars"],cI:!0,sL:"xml",subLanguageMode:"continuous",c:[{cN:"expression",b:"{{",e:"}}",c:[{cN:"begin-block",b:"#[a-zA-Z- .]+",k:e},{cN:"string",b:'"',e:'"'},{cN:"end-block",b:"\\/[a-zA-Z- .]+",k:e},{cN:"variable",b:"[a-zA-Z-.]+",k:e}]}]}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"preprocessor",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},i]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},i,c,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}});hljs.registerLanguage("matlab",function(e){var a=[e.CNM,{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]}],s={r:0,c:[{cN:"operator",b:/'['\.]*/}]};return{k:{keyword:"break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",built_in:"sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"},i:'(//|"|#|/\\*|\\s+/\\w+)',c:[{cN:"function",bK:"function",e:"$",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)"},{cN:"params",b:"\\[",e:"\\]"}]},{b:/[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,rB:!0,r:0,c:[{b:/[a-zA-Z_][a-zA-Z_0-9]*/,r:0},s.c[0]]},{cN:"matrix",b:"\\[",e:"\\]",c:a,r:0,starts:s},{cN:"cell",b:"\\{",e:/\}/,c:a,r:0,i:/:/,starts:s},{b:/\)/,r:0,starts:s},{cN:"comment",b:"\\%",e:"$"}].concat(a)}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",t={cN:"subst",b:/#\{/,e:/}/,k:c},r=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,t]},{b:/"/,e:/"/,c:[e.BE,t]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[t,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+n},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];t.c=r;var i=e.inherit(e.TM,{b:n}),s="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(r)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:r.concat([{cN:"comment",b:"###",e:"###",c:[e.PWM]},e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"attribute",b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}});hljs.registerLanguage("groovy",function(e){return{k:{typename:"byte short char int long boolean float double void",literal:"true false null",keyword:"def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},c:[e.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*//*",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CBCM,{cN:"string",b:'"""',e:'"""'},{cN:"string",b:"'''",e:"'''"},{cN:"string",b:"\\$/",e:"/\\$",r:10},e.ASM,{cN:"regexp",b:/~?\/[^\/\n]+\//,c:[e.BE]},e.QSM,{cN:"shebang",b:"^#!/usr/bin/env",e:"$",i:"\n"},e.BNM,{cN:"class",bK:"class interface trait enum",e:"{",i:":",c:[{bK:"extends implements"},e.UTM]},e.CNM,{cN:"annotation",b:"@[A-Za-z]+"},{cN:"string",b:/[^\?]{0}[A-Za-z0-9_$]+ *:/},{b:/\?/,e:/\:/},{cN:"label",b:"^\\s*[A-Za-z0-9_$]+:",r:0}]}});hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}]}});hljs.registerLanguage("elixir",function(e){var r="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",n="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",c={cN:"subst",b:"#\\{",e:"}",l:r,k:n},a={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/}]},s={eW:!0,rE:!0,l:r,k:n,r:0},i={cN:"function",bK:"def defmacro",e:/\bdo\b/,c:[e.inherit(e.TM,{b:b,starts:s})]},l=e.inherit(i,{cN:"class",bK:"defmodule defrecord",e:/\bdo\b|$|;/}),t=[a,e.HCM,l,i,{cN:"constant",b:"(\\b[A-Z_]\\w*(.)?)+",r:0},{cN:"symbol",b:":",c:[a,{b:b}],r:0},{cN:"symbol",b:r+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"->"},{b:"("+e.RSR+")\\s*",c:[e.HCM,{cN:"regexp",i:"\\n",c:[e.BE,c],v:[{b:"/",e:"/[a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];return c.c=t,s.c=t,{l:r,k:n,c:t}});hljs.registerLanguage("go",function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",constant:"true false iota nil",typename:"bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],k:t,i:"</",c:[e.CLCM,e.CBCM,e.QSM,{cN:"string",b:"'",e:"[^\\\\]'"},{cN:"string",b:"`",e:"`"},{cN:"number",b:e.CNR+"[dflsi]?",r:0},e.CNM]}});hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("tex",function(){var c={cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?"},e={cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]"},m={cN:"special",b:"[{}\\[\\]\\&#~]",r:0};return{c:[{b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",rB:!0,c:[c,e,{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:!0}],r:10},c,e,m,{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:[c,e,m],r:0},{cN:"formula",b:"\\$",e:"\\$",c:[c,e,m],r:0},{cN:"comment",b:"%",e:"$",r:0}]}});hljs.registerLanguage("http",function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}});hljs.registerLanguage("lisp",function(e){var b="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",c="\\|[^]*?\\|",r="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",t={cN:"shebang",b:"^#!",e:"$"},a={cN:"literal",b:"\\b(t{1}|nil)\\b"},i={cN:"number",v:[{b:r,r:0},{b:"#b[0-1]+(/[0-1]+)?"},{b:"#o[0-7]+(/[0-7]+)?"},{b:"#x[0-9a-f]+(/[0-9a-f]+)?"},{b:"#c\\("+r+" +"+r,e:"\\)"}]},l=e.inherit(e.QSM,{i:null}),n={cN:"comment",b:";",e:"$",r:0},N={cN:"variable",b:"\\*",e:"\\*"},d={cN:"keyword",b:"[:&]"+b},o={b:c},u={b:"\\(",e:"\\)",c:["self",a,l,i]},s={cN:"quoted",c:[i,l,N,d,u],v:[{b:"['`]\\(",e:"\\)"},{b:"\\(quote ",e:"\\)",k:"quote"},{b:"'"+c}]},f={cN:"quoted",b:"'"+b},v={cN:"list",b:"\\(",e:"\\)"},g={eW:!0,r:0};return v.c=[{cN:"keyword",v:[{b:b},{b:c}]},g],g.c=[s,f,v,a,i,l,n,N,d,o],{i:/\S/,c:[i,t,a,l,n,s,f,v]}});hljs.registerLanguage("erlang",function(e){var r="[a-z'][a-zA-Z0-9_']*",c="("+r+":"+r+"|"+r+")",a={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},n={cN:"comment",b:"%",e:"$"},b={cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},i={b:"fun\\s+"+r+"/\\d+"},o={b:c+"\\(",e:"\\)",rB:!0,r:0,c:[{cN:"function_name",b:c,r:0},{b:"\\(",e:"\\)",eW:!0,rE:!0,r:0}]},d={cN:"tuple",b:"{",e:"}",r:0},t={cN:"variable",b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0},l={cN:"variable",b:"[A-Z][a-zA-Z0-9_]*",r:0},f={b:"#"+e.UIR,r:0,rB:!0,c:[{cN:"record_name",b:"#"+e.UIR,r:0},{b:"{",e:"}",r:0}]},s={bK:"fun receive if try case",e:"end",k:a};s.c=[n,i,e.inherit(e.ASM,{cN:""}),s,o,e.QSM,b,d,t,l,f];var u=[n,i,s,o,e.QSM,b,d,t,l,f];o.c[1].c=u,d.c=u,f.c[1].c=u;var v={cN:"params",b:"\\(",e:"\\)",c:u};return{aliases:["erl"],k:a,i:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+r+"\\s*\\(",e:"->",rB:!0,i:"\\(|#|//|/\\*|\\\\|:|;",c:[v,e.inherit(e.TM,{b:r})],starts:{e:";|\\.",k:a,c:u}},n,{cN:"pp",b:"^-",e:"\\.",r:0,eE:!0,rB:!0,l:"-"+e.IR,k:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",c:[v]},b,e.QSM,f,t,l,d,{b:/\.$/}]}});hljs.registerLanguage("makefile",function(e){var a={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[a]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,a]}]}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@][^\s\w{]/,r:0}]},o={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},i=[e.BE,r,n],c=[n,e.HCM,o,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,o,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=c,s.c=c,{aliases:["pl"],k:t,c:c}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",c={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},s={cN:"comment",v:[{b:"#",e:"$",c:[c]},{b:"^\\=begin",e:"^\\=end",c:[c],r:10},{b:"^__END__",e:"\\n$"}]},n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},i={cN:"params",b:"\\(",e:"\\)",k:r},d=[t,a,s,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},s]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,s,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];n.c=d,i.c=d;var l="[>?]>",u="[\\w#]+\\(\\w+\\):\\d+:\\d+>",N="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",o=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:d}},{cN:"prompt",b:"^("+l+"|"+u+"|"+N+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage("erb",function(){return{sL:"xml",subLanguageMode:"continuous",c:[{cN:"comment",b:"<%#",e:"%>"},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0}]}});hljs.registerLanguage("apache",function(e){var r={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",r]},r,e.QSM]}}],i:/\S/}});hljs.registerLanguage("json",function(e){var t={literal:"true false null"},i=[e.QSM,e.CNM],l={cN:"value",e:",",eW:!0,eE:!0,c:i,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:l}],i:"\\S"},n={b:"\\[",e:"\\]",c:[e.inherit(l,{cN:null})],i:"\\S"};return i.splice(i.length,0,c,n),{c:i,k:t,i:"\\S"}});hljs.registerLanguage("clojure",function(e){var t={built_in:"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},r="a-zA-Z_\\-!.?+*=<>&#'",n="["+r+"]["+r+"0-9/;:]*",a="[-+]?\\d+(\\.\\d+)?",o={b:n,r:0},s={cN:"number",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:"comment",b:";",e:"$",r:0},d={cN:"literal",b:/\b(true|false|nil)\b/},l={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"},m={cN:"comment",b:"\\^"+n},p={cN:"comment",b:"\\^\\{",e:"\\}"},u={cN:"attribute",b:"[:]"+n},f={cN:"list",b:"\\(",e:"\\)"},h={eW:!0,r:0},y={k:t,l:n,cN:"keyword",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:"comment",b:"comment"},y,h],h.c=b,l.c=b,{aliases:["clj"],i:/\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("rust",function(e){var t=e.inherit(e.CBCM);return t.c.push("self"),{aliases:["rs"],k:{keyword:"alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self sizeof static struct super trait true type typeof unsafe unsized use virtual while yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",built_in:"assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!"},l:e.IR+"!?",i:"</",c:[e.CLCM,t,e.inherit(e.QSM,{i:null}),{cN:"string",b:/r(#*)".*?"\1(?!#)/},{cN:"string",b:/'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/},{b:/'[a-zA-Z_][a-zA-Z0-9_]*/},{cN:"number",b:/\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([uif](8|16|32|64)?)?/,r:0},{cN:"function",bK:"fn",e:"(\\(|<)",eE:!0,c:[e.UTM]},{cN:"preprocessor",b:"#\\[",e:"\\]"},{bK:"type",e:"(=|<)",c:[e.UTM],i:"\\S"},{bK:"trait enum",e:"({|<)",c:[e.UTM],i:"\\S"},{b:e.IR+"::"},{b:"->"}]}});hljs.registerLanguage("swift",function(e){var t={keyword:"class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"},i={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM,"self"]},r={cN:"subst",b:/\\\(/,e:"\\)",k:t,c:[]},s={cN:"number",b:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",r:0},o=e.inherit(e.QSM,{c:[r,e.BE]});return r.c=[s],{k:t,c:[o,e.CLCM,n,i,s,{cN:"func",bK:"func",e:"{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/,i:/\(/}),{cN:"generics",b:/\</,e:/\>/,i:/\>/},{cN:"params",b:/\(/,e:/\)/,k:t,c:["self",s,o,e.CBCM,{b:":"}],i:/["']/}],i:/\[|%/},{cN:"class",k:"struct protocol class extension enum",b:"(struct|protocol|class(?! (func|var))|extension|enum)",e:"\\{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/})]},{cN:"preprocessor",b:"(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"}]}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:b}],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("cs",function(e){var r="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",t=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:r,i:/::/,c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]},e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class namespace interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("diff",function(){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("vim",function(e){return{l:/[!#@\w]+/,k:{keyword:"N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",built_in:"abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"},i:/[{:]/,c:[e.NM,e.ASM,{cN:"string",b:/"((\\")|[^"\n])*("|\n)/},{cN:"variable",b:/[bwtglsav]:[\w\d_]*/},{cN:"function",bK:"function function!",e:"$",r:0,c:[e.TM,{cN:"params",b:"\\(",e:"\\)"}]}]}});hljs.registerLanguage("typescript",function(e){return{aliases:["ts"],k:{keyword:"in if for while finally var new function|0 do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private get set super interface extendsstatic constructor implements enum export import declare",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:0},e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/,r:0},{cN:"constructor",bK:"constructor",e:/\{/,eE:!0,r:10},{cN:"module",bK:"module",e:/\{/,eE:!0},{cN:"interface",bK:"interface",e:/\{/,eE:!0},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}});hljs.registerLanguage("javascript",function(r){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:"("+r.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[r.CLCM,r.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+r.IR,r:0}]}});hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[{cN:"comment",b:"--(?!"+t+")",e:"$"},{cN:"comment",b:"--"+t,e:a,c:[r],r:10}];return{l:e.UIR,k:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});hljs.registerLanguage("django",function(){var e={cN:"filter",b:/\|[A-Za-z]+\:?/,k:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",c:[{cN:"argument",b:/"/,e:/"/},{cN:"argument",b:/'/,e:/'/}]};return{aliases:["jinja"],cI:!0,sL:"xml",subLanguageMode:"continuous",c:[{cN:"comment",b:/\{%\s*comment\s*%}/,e:/\{%\s*endcomment\s*%}/},{cN:"comment",b:/\{#/,e:/#}/},{cN:"template_tag",b:/\{%/,e:/%}/,k:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",c:[e]},{cN:"variable",b:/\{\{/,e:/}}/,c:[e]}]}});hljs.registerLanguage("scheme",function(e){var t="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",r="(\\-|\\+)?\\d+([./]\\d+)?",i=r+"[+\\-]"+r+"i",a={built_in:"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"},n={cN:"shebang",b:"^#!",e:"$"},c={cN:"literal",b:"(#t|#f|#\\\\"+t+"|#\\\\.)"},l={cN:"number",v:[{b:r,r:0},{b:i,r:0},{b:"#b[0-1]+(/[0-1]+)?"},{b:"#o[0-7]+(/[0-7]+)?"},{b:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},s=e.QSM,o={cN:"comment",v:[{b:";",e:"$",r:0},{b:"#\\|",e:"\\|#"}]},u={b:t,r:0},p={cN:"variable",b:"'"+t},d={eW:!0,r:0},g={cN:"list",v:[{b:"\\(",e:"\\)"},{b:"\\[",e:"\\]"}],c:[{cN:"keyword",b:t,l:t,k:a},d]};return d.c=[c,l,s,o,u,p,g],{i:/\S/,c:[n,l,s,o,p,g]}});hljs.registerLanguage("ocaml",function(e){return{aliases:["ml"],k:{keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},i:/\/\/|>>/,l:"[a-z_]\\w*!?",c:[{cN:"literal",b:"\\[(\\|\\|)?\\]|\\(\\)"},{cN:"comment",b:"\\(\\*",e:"\\*\\)",c:["self"]},{cN:"symbol",b:"'[A-Za-z_](?!')[\\w']*"},{cN:"tag",b:"`[A-Z][\\w']*"},{cN:"type",b:"\\b[A-Z][\\w']*",r:0},{b:"[a-z_]\\w*'[\\w']*"},e.inherit(e.ASM,{cN:"char",r:0}),e.inherit(e.QSM,{i:null}),{cN:"number",b:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",r:0},{b:/[-=]>/}]}});hljs.registerLanguage("python",function(e){var r={cN:"prompt",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},l={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},c={cN:"params",b:/\(/,e:/\)/,c:["self",r,l,b]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[r,l,b,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n]/,c:[e.UTM,c]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("applescript",function(e){var t=e.inherit(e.QSM,{i:""}),r={cN:"params",b:"\\(",e:"\\)",c:["self",e.CNM,t]},o=[{cN:"comment",b:"--",e:"$"},{cN:"comment",b:"\\(\\*",e:"\\*\\)",c:["self",{b:"--",e:"$"}]},e.HCM];return{aliases:["osascript"],k:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",constant:"AppleScript false linefeed return pi quote result space tab true",type:"alias application boolean class constant date file integer list number real record string text",command:"activate beep count delay launch log offset read round run say summarize write",property:"character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"},c:[t,e.CNM,{cN:"type",b:"\\bPOSIX file\\b"},{cN:"command",b:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"},{cN:"constant",b:"\\b(text item delimiters|current application|missing value)\\b"},{cN:"keyword",b:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"},{cN:"property",b:"\\b(POSIX path|(date|time) string|quoted form)\\b"},{cN:"function_start",bK:"on",i:"[${=;\\n]",c:[e.UTM,r]}].concat(o),i:"//|->|=>"}});
; browserify_shim__define__module__export__(typeof hljs != "undefined" ? hljs : window.hljs);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/asis/code/personal/slidepack/lib/zeptojs/zepto.js":[function(require,module,exports){
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
},{}],"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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

},{}],"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
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

},{}],"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
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

},{}],"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/util/util.js":[function(require,module,exports){
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
},{"./support/isBuffer":"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/util/support/isBufferBrowser.js","_process":"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/process/browser.js","inherits":"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/Users/asis/code/personal/slidepack/node_modules/marked/lib/marked.js":[function(require,module,exports){
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
},{}],"/Users/asis/code/personal/slidepack/node_modules/mousetrap/mousetrap.js":[function(require,module,exports){
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


},{}],"/Users/asis/code/personal/slidepack/src/slide-pack-api.coffee":[function(require,module,exports){
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



},{"events":"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/events/events.js","util":"/Users/asis/code/personal/slidepack/node_modules/browserify/node_modules/util/util.js"}],"/Users/asis/code/personal/slidepack/src/slide-pack-navigation.coffee":[function(require,module,exports){
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



},{"./slide-pack-api":"/Users/asis/code/personal/slidepack/src/slide-pack-api.coffee","mousetrap":"/Users/asis/code/personal/slidepack/node_modules/mousetrap/mousetrap.js","zeptojs":"/Users/asis/code/personal/slidepack/lib/zeptojs/zepto.js"}],"/Users/asis/code/personal/slidepack/src/slide-pack-processor.coffee":[function(require,module,exports){
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



},{"marked":"/Users/asis/code/personal/slidepack/node_modules/marked/lib/marked.js"}],"/Users/asis/code/personal/slidepack/src/slide-pack-ui.coffee":[function(require,module,exports){
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



},{"./slide-pack-api":"/Users/asis/code/personal/slidepack/src/slide-pack-api.coffee","zeptojs":"/Users/asis/code/personal/slidepack/lib/zeptojs/zepto.js"}]},{},["./src/index.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXNpcy9jb2RlL3BlcnNvbmFsL3NsaWRlcGFjay9zcmMvaW5kZXguY29mZmVlIiwibGliL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5wYWNrLmpzIiwibGliL3plcHRvanMvemVwdG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIm5vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwiL1VzZXJzL2FzaXMvY29kZS9wZXJzb25hbC9zbGlkZXBhY2svc3JjL3NsaWRlLXBhY2stYXBpLmNvZmZlZSIsIi9Vc2Vycy9hc2lzL2NvZGUvcGVyc29uYWwvc2xpZGVwYWNrL3NyYy9zbGlkZS1wYWNrLW5hdmlnYXRpb24uY29mZmVlIiwiL1VzZXJzL2FzaXMvY29kZS9wZXJzb25hbC9zbGlkZXBhY2svc3JjL3NsaWRlLXBhY2stcHJvY2Vzc29yLmNvZmZlZSIsIi9Vc2Vycy9hc2lzL2NvZGUvcGVyc29uYWwvc2xpZGVwYWNrL3NyYy9zbGlkZS1wYWNrLXVpLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsbUNBQUE7O0FBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxhQUFSLENBQUwsQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFNBQVIsQ0FESixDQUFBOztBQUFBLENBR0EsQ0FBRSxTQUFBLEdBQUE7QUFDQSxFQUFBLElBQWdDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBTCxJQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBbkQ7V0FBQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsUUFBVixDQUFtQixRQUFuQixFQUFBO0dBREE7QUFBQSxDQUFGLENBSEEsQ0FBQTs7QUFBQSxTQU1BLEdBQVksT0FBQSxDQUFRLHdCQUFSLENBTlosQ0FBQTs7QUFBQSxHQU9BLEdBQU0sT0FBQSxDQUFRLGtCQUFSLENBUE4sQ0FBQTs7QUFBQSxPQVFBLENBQVEseUJBQVIsQ0FSQSxDQUFBOztBQUFBLE9BU0EsQ0FBUSxpQkFBUixDQVRBLENBQUE7O0FBQUEsWUFXQSxHQUFlLFNBQUEsR0FBQTtBQUNiLE1BQUEsQ0FBQTtBQUFBLEVBQUEsSUFBRyxDQUFBLEdBQUksTUFBTSxDQUFDLDBCQUFkO1dBQ0UsQ0FBQSxDQUFFLENBQUEsQ0FBRSxTQUFGLENBQUYsRUFERjtHQURhO0FBQUEsQ0FYZixDQUFBOztBQUFBLENBZ0JBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxJQUF2QixDQUE0QixTQUFBLEdBQUE7QUFDMUIsTUFBQSxxREFBQTtBQUFBLEVBQUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxJQUFGLENBQWIsQ0FBQTtBQUFBLEVBQ0EsTUFBQSxHQUFTLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFVBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBbEIsQ0FEVCxDQUFBO0FBQUEsRUFHQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLHFCQUFGLENBSFgsQ0FBQTtBQUlBLE9BQUEsNkNBQUE7dUJBQUE7QUFDRSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUscUJBQUYsQ0FDUCxDQUFDLFFBRE0sQ0FDRyxLQUFLLENBQUMsUUFEVCxDQUFULENBQUE7QUFBQSxJQUdBLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBSyxDQUFDLElBQWxCLENBSEEsQ0FBQTtBQUFBLElBS0EsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsTUFBaEIsQ0FMQSxDQURGO0FBQUEsR0FKQTtBQUFBLEVBWUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsUUFBakIsQ0FaQSxDQUFBO0FBQUEsRUFnQkEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsMkJBQWhCLEVBQTZDLEVBQTdDLENBaEJBLENBQUE7QUFBQSxFQWlCQSxVQUFVLENBQUMsVUFBWCxDQUFzQixpQkFBdEIsQ0FqQkEsQ0FBQTtTQW1CQSxZQUFBLENBQUEsRUFwQjBCO0FBQUEsQ0FBNUIsQ0FoQkEsQ0FBQTs7QUFBQSxHQXNDRyxDQUFDLElBQUosQ0FBUztBQUFBLEVBQUEsU0FBQSxFQUFZLENBQUEsQ0FBRSxTQUFGLENBQVo7Q0FBVCxDQXRDQSxDQUFBOztBQUFBLEVBd0NFLENBQUMsc0JBQUgsQ0FBQSxDQXhDQSxDQUFBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy94QkEsSUFBQSwyQ0FBQTtFQUFBLGtCQUFBOztBQUFBLElBQUEsR0FBZSxNQUFNLENBQUMsT0FBdEIsQ0FBQTs7QUFBQSxZQUNBLEdBQWUsU0FEZixDQUFBOztBQUFBLFlBRUEsR0FBZSxPQUFBLENBQVEsUUFBUixDQUFpQixDQUFDLFlBRmpDLENBQUE7O0FBQUEsSUFHQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBSFAsQ0FBQTs7QUFBQSxHQUtBLEdBQVMsQ0FBQSxTQUFBLEdBQUE7QUFFUCxNQUFBLDRJQUFBO0FBQUEsRUFBQSxPQUFBLEdBQVUsR0FBQSxDQUFBLFlBQVYsQ0FBQTtBQUFBLEVBR0EsT0FBQSxHQUFVLFNBQUEsR0FBQTtBQUFhLFFBQUEsSUFBQTtBQUFBLElBQVosOERBQVksQ0FBQTtXQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBWCxDQUFpQixPQUFqQixFQUEwQixJQUExQixFQUFiO0VBQUEsQ0FIVixDQUFBO0FBQUEsRUFLQSxPQUFBLEdBQVcsQ0FMWCxDQUFBO0FBQUEsRUFNQSxHQUFBLEdBQVcsQ0FOWCxDQUFBO0FBQUEsRUFPQSxVQUFBLEdBQWEsRUFQYixDQUFBO0FBQUEsRUFTQSxJQUFBLEdBQU8sU0FBQyxPQUFELEdBQUE7QUFFTCxJQUFBLFVBQUEsR0FBYSxPQUFPLENBQUMsU0FBckIsQ0FBQTtBQUFBLElBRUEsR0FBQSxHQUFNLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFNBQWhCLENBQTBCLENBQUMsTUFGakMsQ0FBQTtBQUFBLElBSUEsVUFBQSxDQUFBLENBSkEsQ0FBQTtBQUFBLElBS0Esd0JBQUEsQ0FBQSxDQUxBLENBQUE7V0FPQSxJQUFBLENBQUssT0FBTCxFQVRLO0VBQUEsQ0FUUCxDQUFBO0FBQUEsRUFvQkEsVUFBQSxHQUFhLFNBQUEsR0FBQTtBQUNYLFFBQUEsS0FBQTtBQUFBLElBQUEsSUFBRyxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQWhCO2FBQ0UsT0FBQSxHQUFVLEtBQUssQ0FBQyxRQURsQjtLQURXO0VBQUEsQ0FwQmIsQ0FBQTtBQUFBLEVBd0JBLElBQUEsR0FBTyxTQUFBLEdBQUE7QUFDTCxJQUFBLE9BQUEsSUFBVyxDQUFYLENBQUE7QUFDQSxJQUFBLElBQWlCLE9BQUEsR0FBVSxDQUEzQjtBQUFBLE1BQUEsT0FBQSxHQUFVLEdBQVYsQ0FBQTtLQURBO1dBRUEsUUFBQSxDQUFBLEVBSEs7RUFBQSxDQXhCUCxDQUFBO0FBQUEsRUE2QkEsSUFBQSxHQUFPLFNBQUEsR0FBQTtBQUNMLElBQUEsT0FBQSxJQUFXLENBQVgsQ0FBQTtBQUNBLElBQUEsSUFBZSxPQUFBLEdBQVUsR0FBekI7QUFBQSxNQUFBLE9BQUEsR0FBVSxDQUFWLENBQUE7S0FEQTtXQUVBLFFBQUEsQ0FBQSxFQUhLO0VBQUEsQ0E3QlAsQ0FBQTtBQUFBLEVBa0NBLElBQUEsR0FBTyxTQUFDLEVBQUQsR0FBQTtBQUNMLElBQUEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsZ0JBQWhCLENBQWlDLENBQUMsV0FBbEMsQ0FBOEMsUUFBOUMsQ0FBQSxDQUFBO1dBQ0EsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBMEIsQ0FBQyxFQUEzQixDQUE4QixFQUFBLEdBQUssQ0FBbkMsQ0FBcUMsQ0FBQyxRQUF0QyxDQUErQyxRQUEvQyxFQUZLO0VBQUEsQ0FsQ1AsQ0FBQTtBQUFBLEVBc0NBLFFBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxJQUFBLElBQUEsQ0FBSyxPQUFMLENBQUEsQ0FBQTtBQUFBLElBQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYSxVQUFiLENBREEsQ0FBQTtXQUVBLElBQUksQ0FBQyxTQUFMLENBQWU7QUFBQSxNQUFBLE9BQUEsRUFBVSxPQUFWO0tBQWYsRUFBbUMsUUFBQSxHQUFRLE9BQVIsR0FBZ0IsS0FBaEIsR0FBcUIsR0FBeEQsRUFBK0QsRUFBQSxHQUFHLFlBQUgsR0FBa0IsT0FBakYsRUFIUztFQUFBLENBdENYLENBQUE7QUFBQSxFQTJDQSxnQkFBQSxHQUFtQixTQUFDLEtBQUQsR0FBQTtBQUNqQixJQUFBLElBQUcsS0FBSyxDQUFDLEtBQVQ7YUFFRSxJQUFBLENBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFqQixFQUZGO0tBQUEsTUFBQTtBQUtFLE1BQUEsT0FBQSxHQUFXLE1BQUQsQ0FBUyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFyQixDQUE2QixZQUE3QixFQUEwQyxFQUExQyxDQUFULENBQVYsQ0FBQTtBQUNBLE1BQUEsSUFBaUIsT0FBakI7ZUFBQSxJQUFBLENBQUssT0FBTCxFQUFBO09BTkY7S0FEaUI7RUFBQSxDQTNDbkIsQ0FBQTtBQUFBLEVBb0RBLHdCQUFBLEdBQTJCLFNBQUEsR0FBQTtXQUN6QixNQUFNLENBQUMsVUFBUCxHQUFvQixpQkFESztFQUFBLENBcEQzQixDQUFBO0FBQUEsRUF1REEsTUFBQSxHQUFTLFNBQUEsR0FBQTtXQUNQO0FBQUEsTUFBQSxLQUFBLEVBQVEsR0FBUjtBQUFBLE1BQ0EsT0FBQSxFQUFVLE9BRFY7TUFETztFQUFBLENBdkRULENBQUE7U0EyREE7QUFBQSxJQUFBLE1BQUEsRUFBUyxNQUFUO0FBQUEsSUFDQSxJQUFBLEVBQU8sSUFEUDtBQUFBLElBRUEsSUFBQSxFQUFPLElBRlA7QUFBQSxJQUdBLElBQUEsRUFBTyxJQUhQO0FBQUEsSUFJQSxFQUFBLEVBQUssT0FKTDtJQTdETztBQUFBLENBQUEsQ0FBSCxDQUFBLENBTE4sQ0FBQTs7QUFBQSxNQXdFTSxDQUFDLE9BQVAsR0FBaUIsR0F4RWpCLENBQUE7Ozs7O0FDQUEsSUFBQSxzQkFBQTs7QUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLGtCQUFSLENBQU4sQ0FBQTs7QUFBQSxTQUNBLEdBQVksT0FBQSxDQUFRLFdBQVIsQ0FEWixDQUFBOztBQUFBLENBRUEsR0FBSSxPQUFBLENBQVEsU0FBUixDQUZKLENBQUE7O0FBQUEsU0FNUyxDQUFDLElBQVYsQ0FBZSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsR0FBZixFQUFvQixHQUFwQixDQUFmLEVBQXlDLEdBQUcsQ0FBQyxJQUE3QyxDQU5BLENBQUE7O0FBQUEsU0FPUyxDQUFDLElBQVYsQ0FBZSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBQWYsRUFBNEMsR0FBRyxDQUFDLElBQWhELENBUEEsQ0FBQTs7QUFBQSxHQVVBLEdBQU0sQ0FBQSxDQUFFLDZCQUFGLENBVk4sQ0FBQTs7QUFBQSxDQVdBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixHQUFqQixDQVhBLENBQUE7O0FBQUEsQ0FhQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG1CQUF4QixFQUE2QyxTQUFDLENBQUQsR0FBQTtTQUMzQyxHQUFHLENBQUMsSUFBSixDQUFBLEVBRDJDO0FBQUEsQ0FBN0MsQ0FiQSxDQUFBOztBQUFBLENBZ0JBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isa0JBQXhCLEVBQTRDLFNBQUMsQ0FBRCxHQUFBO1NBQzFDLEdBQUcsQ0FBQyxJQUFKLENBQUEsRUFEMEM7QUFBQSxDQUE1QyxDQWhCQSxDQUFBOztBQUFBLENBbUJBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLFdBQWYsRUFBNEIsU0FBQSxHQUFBO1NBQzFCLEdBQUcsQ0FBQyxJQUFKLENBQUEsRUFEMEI7QUFBQSxDQUE1QixDQW5CQSxDQUFBOztBQUFBLENBc0JBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLFlBQWYsRUFBNkIsU0FBQSxHQUFBO1NBQzNCLEdBQUcsQ0FBQyxJQUFKLENBQUEsRUFEMkI7QUFBQSxDQUE3QixDQXRCQSxDQUFBOzs7OztBQ0FBLElBQUEsZ0dBQUE7O0FBQUEsUUFBQSxHQUFXLE9BQUEsQ0FBUSxRQUFSLENBQVgsQ0FBQTs7QUFBQSxjQUVBLEdBQWlCLFNBQUMsSUFBRCxHQUFBO1NBQ2YsSUFBQSxJQUFRLElBQUksQ0FBQyxJQUFMLEtBQWEsV0FBckIsSUFBb0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFWLENBQWtCLElBQWxCLENBQUEsS0FBMkIsRUFEaEQ7QUFBQSxDQUZqQixDQUFBOztBQUFBLGFBS0EsR0FBZ0IsU0FBQyxJQUFELEdBQUE7U0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsRUFEYztBQUFBLENBTGhCLENBQUE7O0FBQUEsTUFRQSxHQUFTLFNBQUMsTUFBRCxFQUFTLE1BQVQsR0FBQTtBQUNQLE1BQUEsV0FBQTtBQUFBLEVBQUEsSUFBaUIsTUFBTSxDQUFDLE1BQVAsS0FBaUIsQ0FBbEM7QUFBQSxXQUFPLE1BQVAsQ0FBQTtHQUFBO0FBQUEsRUFFQSxLQUFBLEdBQVEsRUFGUixDQUFBO0FBQUEsRUFHQSxLQUFLLENBQUMsS0FBTixHQUFjLEVBSGQsQ0FBQTtBQUFBLEVBS0EsSUFBQSxHQUFPLE1BQU0sQ0FBQyxLQUFQLENBQUEsQ0FMUCxDQUFBO0FBTUEsRUFBQSxJQUFHLGNBQUEsQ0FBZSxJQUFmLENBQUg7QUFDRSxJQUFBLEtBQUssQ0FBQyxVQUFOLEdBQW1CLGFBQUEsQ0FBYyxJQUFkLENBQW5CLENBREY7R0FOQTtBQVNBLFNBQU0sSUFBQSxHQUFPLE1BQU0sQ0FBQyxLQUFQLENBQUEsQ0FBYixHQUFBO0FBQ0UsSUFBQSxJQUFHLGNBQUEsQ0FBZSxJQUFmLENBQUg7QUFDRSxNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFBLENBQUE7QUFDQSxZQUZGO0tBQUEsTUFBQTtBQUlFLE1BQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxJQUFYLENBQUEsQ0FKRjtLQURGO0VBQUEsQ0FUQTtBQUFBLEVBZ0JBLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWixDQWhCQSxDQUFBO1NBaUJBLE1BQUEsQ0FBTyxNQUFQLEVBQWUsTUFBZixFQWxCTztBQUFBLENBUlQsQ0FBQTs7QUFBQSxJQTRCQSxHQUFPLFNBQUMsTUFBRCxHQUFBO1NBQ0wsTUFBQSxDQUFPLEVBQVAsRUFBVyxNQUFYLEVBREs7QUFBQSxDQTVCUCxDQUFBOztBQUFBLE1BK0JBLEdBQVMsU0FBQyxFQUFELEdBQUE7QUFDUCxNQUFBLE1BQUE7QUFBQSxFQUFBLE1BQUEsR0FBUyxRQUFRLENBQUMsS0FBVCxDQUFlLEVBQWYsQ0FBVCxDQUFBO1NBQ0EsSUFBQSxDQUFLLE1BQUwsRUFGTztBQUFBLENBL0JULENBQUE7O0FBQUEsYUFtQ0EsR0FBZ0IsU0FBQyxLQUFELEdBQUE7U0FDZDtBQUFBLElBQUEsUUFBQSxFQUFXLEtBQUssQ0FBQyxVQUFqQjtBQUFBLElBQ0EsSUFBQSxFQUFPLFFBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCLENBRFA7SUFEYztBQUFBLENBbkNoQixDQUFBOztBQUFBLGtCQXVDQSxHQUF3QixDQUFBLFNBQUEsR0FBQTtBQUV0QixNQUFBLE9BQUE7QUFBQSxFQUFBLE9BQUEsR0FBVSxTQUFDLEVBQUQsR0FBQTtBQUNSLFFBQUEsaUNBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxNQUFBLENBQU8sRUFBUCxDQUFULENBQUE7QUFFQztTQUFBLDZDQUFBO3lCQUFBO0FBQUEsb0JBQUEsYUFBQSxDQUFjLEtBQWQsRUFBQSxDQUFBO0FBQUE7b0JBSE87RUFBQSxDQUFWLENBQUE7U0FNQTtBQUFBLElBQUEsT0FBQSxFQUFVLE9BQVY7SUFSc0I7QUFBQSxDQUFBLENBQUgsQ0FBQSxDQXZDckIsQ0FBQTs7QUFBQSxNQWlETSxDQUFDLE9BQVAsR0FBaUIsa0JBakRqQixDQUFBOzs7OztBQ0FBLElBQUEsTUFBQTs7QUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLGtCQUFSLENBQU4sQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFNBQVIsQ0FESixDQUFBOztBQUFBLENBR0EsQ0FBRSxTQUFBLEdBQUE7QUFFQSxNQUFBLHdCQUFBO0FBQUEsRUFBQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLHVCQUFGLENBQVgsQ0FBQTtBQUFBLEVBRUEsY0FBQSxHQUFpQixTQUFBLEdBQUE7QUFDZixRQUFBLE1BQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxHQUFHLENBQUMsTUFBSixDQUFBLENBQVQsQ0FBQTtXQUNBLFFBQVEsQ0FBQyxJQUFULENBQ0U7QUFBQSxNQUFBLEdBQUEsRUFBTSxNQUFNLENBQUMsS0FBYjtBQUFBLE1BQ0EsS0FBQSxFQUFRLE1BQU0sQ0FBQyxPQURmO0tBREYsRUFGZTtFQUFBLENBRmpCLENBQUE7QUFBQSxFQVFBLGNBQUEsQ0FBQSxDQVJBLENBQUE7QUFBQSxFQVVBLEdBQUcsQ0FBQyxFQUFKLENBQU8sVUFBUCxFQUFtQixjQUFuQixDQVZBLENBQUE7U0FZQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixRQUFqQixFQWRBO0FBQUEsQ0FBRixDQUhBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaGwgPSByZXF1aXJlICdoaWdobGlnaHRqcydcbiQgPSByZXF1aXJlICd6ZXB0b2pzJ1xuXG4kIC0+XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnbW9iaWxlJykgaWYgJC5vcy5waG9uZSB8fCAkLm9zLnRhYmxldFxuXG5wcm9jZXNzb3IgPSByZXF1aXJlICcuL3NsaWRlLXBhY2stcHJvY2Vzc29yJ1xuYXBpID0gcmVxdWlyZSAnLi9zbGlkZS1wYWNrLWFwaSdcbnJlcXVpcmUgJy4vc2xpZGUtcGFjay1uYXZpZ2F0aW9uJ1xucmVxdWlyZSAnLi9zbGlkZS1wYWNrLXVpJ1xuXG5leGVjdXRlSG9va3MgPSAtPlxuICBpZiBmID0gd2luZG93Ll9zbGlkZV9wYWNrX3Byb2Nlc3Nfc2xpZGVzXG4gICAgZiAkKCdzZWN0aW9uJylcblxuXG4kKCdbZGF0YS1zbGlkZS1wYWNrXScpLmVhY2ggLT5cbiAgJHNsaWRlUGFjayA9ICQoQClcbiAgc2xpZGVzID0gcHJvY2Vzc29yLnByb2Nlc3MgJHNsaWRlUGFjay50ZXh0KClcblxuICAkYXJ0aWNsZSA9ICQoJzxhcnRpY2xlPjwvYXJ0aWNsZT4nKVxuICBmb3Igc2xpZGUgaW4gc2xpZGVzXG4gICAgJHNsaWRlID0gJCgnPHNlY3Rpb24+PC9zZWN0aW9uPicpXG4gICAgICAuYWRkQ2xhc3Moc2xpZGUuY3NzQ2xhc3MpXG5cbiAgICAkc2xpZGUuaHRtbChzbGlkZS5odG1sKVxuXG4gICAgJGFydGljbGUuYXBwZW5kICRzbGlkZVxuXG4gICQoJ2JvZHknKS5hcHBlbmQgJGFydGljbGVcblxuICAjIFByZXZlbnQgcHJvYmxlbXMgd2hlbiBzYXZpbmcgdGhlIHNsaWRlcyBhcyBhIGNvbXBsZXRlXG4gICMgSFRNTCBwYWdlIF5fXlxuICAkc2xpZGVQYWNrLmF0dHIoJ2RhdGEtc2xpZGUtcGFjay1wcm9jZXNzZWQnLCAnJylcbiAgJHNsaWRlUGFjay5yZW1vdmVBdHRyKCdkYXRhLXNsaWRlLXBhY2snKVxuXG4gIGV4ZWN1dGVIb29rcygpXG5cbmFwaS5pbml0IHNsaWRlUGFjayA6ICQoJ2FydGljbGUnKVxuXG5obC5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKClcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbjtfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCByZXF1aXJlLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG4hZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/ZShleHBvcnRzKTood2luZG93LmhsanM9ZSh7fSksXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmhsanN9KSl9KGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUucmVwbGFjZSgvJi9nbSxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZ20sXCImbHQ7XCIpLnJlcGxhY2UoLz4vZ20sXCImZ3Q7XCIpfWZ1bmN0aW9uIHQoZSl7cmV0dXJuIGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiByKGUsbil7dmFyIHQ9ZSYmZS5leGVjKG4pO3JldHVybiB0JiYwPT10LmluZGV4fWZ1bmN0aW9uIGEoZSl7dmFyIG49KGUuY2xhc3NOYW1lK1wiIFwiKyhlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmNsYXNzTmFtZTpcIlwiKSkuc3BsaXQoL1xccysvKTtyZXR1cm4gbj1uLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9ebGFuZyh1YWdlKT8tLyxcIlwiKX0pLG4uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBOKGUpfHwvbm8oLT8paGlnaGxpZ2h0Ly50ZXN0KGUpfSlbMF19ZnVuY3Rpb24gbyhlLG4pe3ZhciB0PXt9O2Zvcih2YXIgciBpbiBlKXRbcl09ZVtyXTtpZihuKWZvcih2YXIgciBpbiBuKXRbcl09bltyXTtyZXR1cm4gdH1mdW5jdGlvbiBpKGUpe3ZhciBuPVtdO3JldHVybiBmdW5jdGlvbiByKGUsYSl7Zm9yKHZhciBvPWUuZmlyc3RDaGlsZDtvO289by5uZXh0U2libGluZykzPT1vLm5vZGVUeXBlP2ErPW8ubm9kZVZhbHVlLmxlbmd0aDoxPT1vLm5vZGVUeXBlJiYobi5wdXNoKHtldmVudDpcInN0YXJ0XCIsb2Zmc2V0OmEsbm9kZTpvfSksYT1yKG8sYSksdChvKS5tYXRjaCgvYnJ8aHJ8aW1nfGlucHV0Lyl8fG4ucHVzaCh7ZXZlbnQ6XCJzdG9wXCIsb2Zmc2V0OmEsbm9kZTpvfSkpO3JldHVybiBhfShlLDApLG59ZnVuY3Rpb24gYyhlLHIsYSl7ZnVuY3Rpb24gbygpe3JldHVybiBlLmxlbmd0aCYmci5sZW5ndGg/ZVswXS5vZmZzZXQhPXJbMF0ub2Zmc2V0P2VbMF0ub2Zmc2V0PHJbMF0ub2Zmc2V0P2U6cjpcInN0YXJ0XCI9PXJbMF0uZXZlbnQ/ZTpyOmUubGVuZ3RoP2U6cn1mdW5jdGlvbiBpKGUpe2Z1bmN0aW9uIHIoZSl7cmV0dXJuXCIgXCIrZS5ub2RlTmFtZSsnPVwiJytuKGUudmFsdWUpKydcIid9bCs9XCI8XCIrdChlKStBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZS5hdHRyaWJ1dGVzLHIpLmpvaW4oXCJcIikrXCI+XCJ9ZnVuY3Rpb24gYyhlKXtsKz1cIjwvXCIrdChlKStcIj5cIn1mdW5jdGlvbiB1KGUpeyhcInN0YXJ0XCI9PWUuZXZlbnQ/aTpjKShlLm5vZGUpfWZvcih2YXIgcz0wLGw9XCJcIixmPVtdO2UubGVuZ3RofHxyLmxlbmd0aDspe3ZhciBnPW8oKTtpZihsKz1uKGEuc3Vic3RyKHMsZ1swXS5vZmZzZXQtcykpLHM9Z1swXS5vZmZzZXQsZz09ZSl7Zi5yZXZlcnNlKCkuZm9yRWFjaChjKTtkbyB1KGcuc3BsaWNlKDAsMSlbMF0pLGc9bygpO3doaWxlKGc9PWUmJmcubGVuZ3RoJiZnWzBdLm9mZnNldD09cyk7Zi5yZXZlcnNlKCkuZm9yRWFjaChpKX1lbHNlXCJzdGFydFwiPT1nWzBdLmV2ZW50P2YucHVzaChnWzBdLm5vZGUpOmYucG9wKCksdShnLnNwbGljZSgwLDEpWzBdKX1yZXR1cm4gbCtuKGEuc3Vic3RyKHMpKX1mdW5jdGlvbiB1KGUpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuc291cmNlfHxlfWZ1bmN0aW9uIHQodCxyKXtyZXR1cm4gUmVnRXhwKG4odCksXCJtXCIrKGUuY0k/XCJpXCI6XCJcIikrKHI/XCJnXCI6XCJcIikpfWZ1bmN0aW9uIHIoYSxpKXtpZighYS5jb21waWxlZCl7aWYoYS5jb21waWxlZD0hMCxhLms9YS5rfHxhLmJLLGEuayl7dmFyIGM9e30sdT1mdW5jdGlvbihuLHQpe2UuY0kmJih0PXQudG9Mb3dlckNhc2UoKSksdC5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwifFwiKTtjW3RbMF1dPVtuLHRbMV0/TnVtYmVyKHRbMV0pOjFdfSl9O1wic3RyaW5nXCI9PXR5cGVvZiBhLms/dShcImtleXdvcmRcIixhLmspOk9iamVjdC5rZXlzKGEuaykuZm9yRWFjaChmdW5jdGlvbihlKXt1KGUsYS5rW2VdKX0pLGEuaz1jfWEubFI9dChhLmx8fC9cXGJbQS1aYS16MC05X10rXFxiLywhMCksaSYmKGEuYksmJihhLmI9XCJcXFxcYihcIithLmJLLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIilcXFxcYlwiKSxhLmJ8fChhLmI9L1xcQnxcXGIvKSxhLmJSPXQoYS5iKSxhLmV8fGEuZVd8fChhLmU9L1xcQnxcXGIvKSxhLmUmJihhLmVSPXQoYS5lKSksYS50RT1uKGEuZSl8fFwiXCIsYS5lVyYmaS50RSYmKGEudEUrPShhLmU/XCJ8XCI6XCJcIikraS50RSkpLGEuaSYmKGEuaVI9dChhLmkpKSx2b2lkIDA9PT1hLnImJihhLnI9MSksYS5jfHwoYS5jPVtdKTt2YXIgcz1bXTthLmMuZm9yRWFjaChmdW5jdGlvbihlKXtlLnY/ZS52LmZvckVhY2goZnVuY3Rpb24obil7cy5wdXNoKG8oZSxuKSl9KTpzLnB1c2goXCJzZWxmXCI9PWU/YTplKX0pLGEuYz1zLGEuYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3IoZSxhKX0pLGEuc3RhcnRzJiZyKGEuc3RhcnRzLGkpO3ZhciBsPWEuYy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYks/XCJcXFxcLj8oXCIrZS5iK1wiKVxcXFwuP1wiOmUuYn0pLmNvbmNhdChbYS50RSxhLmldKS5tYXAobikuZmlsdGVyKEJvb2xlYW4pO2EudD1sLmxlbmd0aD90KGwuam9pbihcInxcIiksITApOntleGVjOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fX19cihlKX1mdW5jdGlvbiBzKGUsdCxhLG8pe2Z1bmN0aW9uIGkoZSxuKXtmb3IodmFyIHQ9MDt0PG4uYy5sZW5ndGg7dCsrKWlmKHIobi5jW3RdLmJSLGUpKXJldHVybiBuLmNbdF19ZnVuY3Rpb24gYyhlLG4pe3JldHVybiByKGUuZVIsbik/ZTplLmVXP2MoZS5wYXJlbnQsbik6dm9pZCAwfWZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hYSYmcihuLmlSLGUpfWZ1bmN0aW9uIGcoZSxuKXt2YXIgdD14LmNJP25bMF0udG9Mb3dlckNhc2UoKTpuWzBdO3JldHVybiBlLmsuaGFzT3duUHJvcGVydHkodCkmJmUua1t0XX1mdW5jdGlvbiBwKGUsbix0LHIpe3ZhciBhPXI/XCJcIjpFLmNsYXNzUHJlZml4LG89JzxzcGFuIGNsYXNzPVwiJythLGk9dD9cIlwiOlwiPC9zcGFuPlwiO3JldHVybiBvKz1lKydcIj4nLG8rbitpfWZ1bmN0aW9uIGQoKXtpZighdy5rKXJldHVybiBuKHkpO3ZhciBlPVwiXCIsdD0wO3cubFIubGFzdEluZGV4PTA7Zm9yKHZhciByPXcubFIuZXhlYyh5KTtyOyl7ZSs9bih5LnN1YnN0cih0LHIuaW5kZXgtdCkpO3ZhciBhPWcodyxyKTthPyhCKz1hWzFdLGUrPXAoYVswXSxuKHJbMF0pKSk6ZSs9bihyWzBdKSx0PXcubFIubGFzdEluZGV4LHI9dy5sUi5leGVjKHkpfXJldHVybiBlK24oeS5zdWJzdHIodCkpfWZ1bmN0aW9uIGgoKXtpZih3LnNMJiYhUlt3LnNMXSlyZXR1cm4gbih5KTt2YXIgZT13LnNMP3Mody5zTCx5LCEwLExbdy5zTF0pOmwoeSk7cmV0dXJuIHcucj4wJiYoQis9ZS5yKSxcImNvbnRpbnVvdXNcIj09dy5zdWJMYW5ndWFnZU1vZGUmJihMW3cuc0xdPWUudG9wKSxwKGUubGFuZ3VhZ2UsZS52YWx1ZSwhMSwhMCl9ZnVuY3Rpb24gdigpe3JldHVybiB2b2lkIDAhPT13LnNMP2goKTpkKCl9ZnVuY3Rpb24gYihlLHQpe3ZhciByPWUuY04/cChlLmNOLFwiXCIsITApOlwiXCI7ZS5yQj8oTSs9cix5PVwiXCIpOmUuZUI/KE0rPW4odCkrcix5PVwiXCIpOihNKz1yLHk9dCksdz1PYmplY3QuY3JlYXRlKGUse3BhcmVudDp7dmFsdWU6d319KX1mdW5jdGlvbiBtKGUsdCl7aWYoeSs9ZSx2b2lkIDA9PT10KXJldHVybiBNKz12KCksMDt2YXIgcj1pKHQsdyk7aWYocilyZXR1cm4gTSs9digpLGIocix0KSxyLnJCPzA6dC5sZW5ndGg7dmFyIGE9Yyh3LHQpO2lmKGEpe3ZhciBvPXc7by5yRXx8by5lRXx8KHkrPXQpLE0rPXYoKTtkbyB3LmNOJiYoTSs9XCI8L3NwYW4+XCIpLEIrPXcucix3PXcucGFyZW50O3doaWxlKHchPWEucGFyZW50KTtyZXR1cm4gby5lRSYmKE0rPW4odCkpLHk9XCJcIixhLnN0YXJ0cyYmYihhLnN0YXJ0cyxcIlwiKSxvLnJFPzA6dC5sZW5ndGh9aWYoZih0LHcpKXRocm93IG5ldyBFcnJvcignSWxsZWdhbCBsZXhlbWUgXCInK3QrJ1wiIGZvciBtb2RlIFwiJysody5jTnx8XCI8dW5uYW1lZD5cIikrJ1wiJyk7cmV0dXJuIHkrPXQsdC5sZW5ndGh8fDF9dmFyIHg9TihlKTtpZigheCl0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IFwiJytlKydcIicpO3UoeCk7Zm9yKHZhciB3PW98fHgsTD17fSxNPVwiXCIsaz13O2shPXg7az1rLnBhcmVudClrLmNOJiYoTT1wKGsuY04sXCJcIiwhMCkrTSk7dmFyIHk9XCJcIixCPTA7dHJ5e2Zvcih2YXIgQyxqLEk9MDs7KXtpZih3LnQubGFzdEluZGV4PUksQz13LnQuZXhlYyh0KSwhQylicmVhaztqPW0odC5zdWJzdHIoSSxDLmluZGV4LUkpLENbMF0pLEk9Qy5pbmRleCtqfW0odC5zdWJzdHIoSSkpO2Zvcih2YXIgaz13O2sucGFyZW50O2s9ay5wYXJlbnQpay5jTiYmKE0rPVwiPC9zcGFuPlwiKTtyZXR1cm57cjpCLHZhbHVlOk0sbGFuZ3VhZ2U6ZSx0b3A6d319Y2F0Y2goQSl7aWYoLTEhPUEubWVzc2FnZS5pbmRleE9mKFwiSWxsZWdhbFwiKSlyZXR1cm57cjowLHZhbHVlOm4odCl9O3Rocm93IEF9fWZ1bmN0aW9uIGwoZSx0KXt0PXR8fEUubGFuZ3VhZ2VzfHxPYmplY3Qua2V5cyhSKTt2YXIgcj17cjowLHZhbHVlOm4oZSl9LGE9cjtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2lmKE4obikpe3ZhciB0PXMobixlLCExKTt0Lmxhbmd1YWdlPW4sdC5yPmEuciYmKGE9dCksdC5yPnIuciYmKGE9cixyPXQpfX0pLGEubGFuZ3VhZ2UmJihyLnNlY29uZF9iZXN0PWEpLHJ9ZnVuY3Rpb24gZihlKXtyZXR1cm4gRS50YWJSZXBsYWNlJiYoZT1lLnJlcGxhY2UoL14oKDxbXj5dKz58XFx0KSspL2dtLGZ1bmN0aW9uKGUsbil7cmV0dXJuIG4ucmVwbGFjZSgvXFx0L2csRS50YWJSZXBsYWNlKX0pKSxFLnVzZUJSJiYoZT1lLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKSksZX1mdW5jdGlvbiBnKGUsbix0KXt2YXIgcj1uP3hbbl06dCxhPVtlLnRyaW0oKV07cmV0dXJuIGUubWF0Y2goLyhcXHN8XilobGpzKFxcc3wkKS8pfHxhLnB1c2goXCJobGpzXCIpLHImJmEucHVzaChyKSxhLmpvaW4oXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBwKGUpe3ZhciBuPWEoZSk7aWYoIS9ubygtPyloaWdobGlnaHQvLnRlc3Qobikpe3ZhciB0O0UudXNlQlI/KHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpLHQuaW5uZXJIVE1MPWUuaW5uZXJIVE1MLnJlcGxhY2UoL1xcbi9nLFwiXCIpLnJlcGxhY2UoLzxiclsgXFwvXSo+L2csXCJcXG5cIikpOnQ9ZTt2YXIgcj10LnRleHRDb250ZW50LG89bj9zKG4sciwhMCk6bChyKSx1PWkodCk7aWYodS5sZW5ndGgpe3ZhciBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixcImRpdlwiKTtwLmlubmVySFRNTD1vLnZhbHVlLG8udmFsdWU9Yyh1LGkocCkscil9by52YWx1ZT1mKG8udmFsdWUpLGUuaW5uZXJIVE1MPW8udmFsdWUsZS5jbGFzc05hbWU9ZyhlLmNsYXNzTmFtZSxuLG8ubGFuZ3VhZ2UpLGUucmVzdWx0PXtsYW5ndWFnZTpvLmxhbmd1YWdlLHJlOm8ucn0sby5zZWNvbmRfYmVzdCYmKGUuc2Vjb25kX2Jlc3Q9e2xhbmd1YWdlOm8uc2Vjb25kX2Jlc3QubGFuZ3VhZ2UscmU6by5zZWNvbmRfYmVzdC5yfSl9fWZ1bmN0aW9uIGQoZSl7RT1vKEUsZSl9ZnVuY3Rpb24gaCgpe2lmKCFoLmNhbGxlZCl7aC5jYWxsZWQ9ITA7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZSBjb2RlXCIpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZSxwKX19ZnVuY3Rpb24gdigpe2FkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsaCwhMSksYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixoLCExKX1mdW5jdGlvbiBiKG4sdCl7dmFyIHI9UltuXT10KGUpO3IuYWxpYXNlcyYmci5hbGlhc2VzLmZvckVhY2goZnVuY3Rpb24oZSl7eFtlXT1ufSl9ZnVuY3Rpb24gbSgpe3JldHVybiBPYmplY3Qua2V5cyhSKX1mdW5jdGlvbiBOKGUpe3JldHVybiBSW2VdfHxSW3hbZV1dfXZhciBFPXtjbGFzc1ByZWZpeDpcImhsanMtXCIsdGFiUmVwbGFjZTpudWxsLHVzZUJSOiExLGxhbmd1YWdlczp2b2lkIDB9LFI9e30seD17fTtyZXR1cm4gZS5oaWdobGlnaHQ9cyxlLmhpZ2hsaWdodEF1dG89bCxlLmZpeE1hcmt1cD1mLGUuaGlnaGxpZ2h0QmxvY2s9cCxlLmNvbmZpZ3VyZT1kLGUuaW5pdEhpZ2hsaWdodGluZz1oLGUuaW5pdEhpZ2hsaWdodGluZ09uTG9hZD12LGUucmVnaXN0ZXJMYW5ndWFnZT1iLGUubGlzdExhbmd1YWdlcz1tLGUuZ2V0TGFuZ3VhZ2U9TixlLmluaGVyaXQ9byxlLklSPVwiW2EtekEtWl1bYS16QS1aMC05X10qXCIsZS5VSVI9XCJbYS16QS1aX11bYS16QS1aMC05X10qXCIsZS5OUj1cIlxcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT9cIixlLkNOUj1cIihcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPylcIixlLkJOUj1cIlxcXFxiKDBiWzAxXSspXCIsZS5SU1I9XCIhfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH5cIixlLkJFPXtiOlwiXFxcXFxcXFxbXFxcXHNcXFxcU11cIixyOjB9LGUuQVNNPXtjTjpcInN0cmluZ1wiLGI6XCInXCIsZTpcIidcIixpOlwiXFxcXG5cIixjOltlLkJFXX0sZS5RU009e2NOOlwic3RyaW5nXCIsYjonXCInLGU6J1wiJyxpOlwiXFxcXG5cIixjOltlLkJFXX0sZS5QV009e2I6L1xcYihhfGFufHRoZXxhcmV8SXxJJ218aXNuJ3R8ZG9uJ3R8ZG9lc24ndHx3b24ndHxidXR8anVzdHxzaG91bGR8cHJldHR5fHNpbXBseXxlbm91Z2h8Z29ubmF8Z29pbmd8d3RmfHNvfHN1Y2gpXFxiL30sZS5DTENNPXtjTjpcImNvbW1lbnRcIixiOlwiLy9cIixlOlwiJFwiLGM6W2UuUFdNXX0sZS5DQkNNPXtjTjpcImNvbW1lbnRcIixiOlwiL1xcXFwqXCIsZTpcIlxcXFwqL1wiLGM6W2UuUFdNXX0sZS5IQ009e2NOOlwiY29tbWVudFwiLGI6XCIjXCIsZTpcIiRcIixjOltlLlBXTV19LGUuTk09e2NOOlwibnVtYmVyXCIsYjplLk5SLHI6MH0sZS5DTk09e2NOOlwibnVtYmVyXCIsYjplLkNOUixyOjB9LGUuQk5NPXtjTjpcIm51bWJlclwiLGI6ZS5CTlIscjowfSxlLkNTU05NPXtjTjpcIm51bWJlclwiLGI6ZS5OUitcIiglfGVtfGV4fGNofHJlbXx2d3x2aHx2bWlufHZtYXh8Y218bW18aW58cHR8cGN8cHh8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8ZHBpfGRwY218ZHBweCk/XCIscjowfSxlLlJNPXtjTjpcInJlZ2V4cFwiLGI6L1xcLy8sZTovXFwvW2dpbXV5XSovLGk6L1xcbi8sYzpbZS5CRSx7YjovXFxbLyxlOi9cXF0vLHI6MCxjOltlLkJFXX1dfSxlLlRNPXtjTjpcInRpdGxlXCIsYjplLklSLHI6MH0sZS5VVE09e2NOOlwidGl0bGVcIixiOmUuVUlSLHI6MH0sZX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInhtbFwiLGZ1bmN0aW9uKCl7dmFyIHQ9XCJbQS1aYS16MC05XFxcXC5fOi1dK1wiLGU9e2I6LzxcXD8ocGhwKT8oPyFcXHcpLyxlOi9cXD8+LyxzTDpcInBocFwiLHN1Ykxhbmd1YWdlTW9kZTpcImNvbnRpbnVvdXNcIn0sYz17ZVc6ITAsaTovPC8scjowLGM6W2Use2NOOlwiYXR0cmlidXRlXCIsYjp0LHI6MH0se2I6XCI9XCIscjowLGM6W3tjTjpcInZhbHVlXCIsYzpbZV0sdjpbe2I6L1wiLyxlOi9cIi99LHtiOi8nLyxlOi8nL30se2I6L1teXFxzXFwvPl0rL31dfV19XX07cmV0dXJue2FsaWFzZXM6W1wiaHRtbFwiLFwieGh0bWxcIixcInJzc1wiLFwiYXRvbVwiLFwieHNsXCIsXCJwbGlzdFwiXSxjSTohMCxjOlt7Y046XCJkb2N0eXBlXCIsYjpcIjwhRE9DVFlQRVwiLGU6XCI+XCIscjoxMCxjOlt7YjpcIlxcXFxbXCIsZTpcIlxcXFxdXCJ9XX0se2NOOlwiY29tbWVudFwiLGI6XCI8IS0tXCIsZTpcIi0tPlwiLHI6MTB9LHtjTjpcImNkYXRhXCIsYjpcIjxcXFxcIVxcXFxbQ0RBVEFcXFxcW1wiLGU6XCJcXFxcXVxcXFxdPlwiLHI6MTB9LHtjTjpcInRhZ1wiLGI6XCI8c3R5bGUoPz1cXFxcc3w+fCQpXCIsZTpcIj5cIixrOnt0aXRsZTpcInN0eWxlXCJ9LGM6W2NdLHN0YXJ0czp7ZTpcIjwvc3R5bGU+XCIsckU6ITAsc0w6XCJjc3NcIn19LHtjTjpcInRhZ1wiLGI6XCI8c2NyaXB0KD89XFxcXHN8PnwkKVwiLGU6XCI+XCIsazp7dGl0bGU6XCJzY3JpcHRcIn0sYzpbY10sc3RhcnRzOntlOlwiPC9zY3JpcHQ+XCIsckU6ITAsc0w6XCJqYXZhc2NyaXB0XCJ9fSxlLHtjTjpcInBpXCIsYjovPFxcP1xcdysvLGU6L1xcPz4vLHI6MTB9LHtjTjpcInRhZ1wiLGI6XCI8Lz9cIixlOlwiLz8+XCIsYzpbe2NOOlwidGl0bGVcIixiOi9bXiBcXC8+PFxcblxcdF0rLyxyOjB9LGNdfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY2xvanVyZS1yZXBsXCIsZnVuY3Rpb24oKXtyZXR1cm57Yzpbe2NOOlwicHJvbXB0XCIsYjovXihbXFx3Li1dK3xcXHMqI18pPT4vLHN0YXJ0czp7ZTovJC8sc0w6XCJjbG9qdXJlXCIsc3ViTGFuZ3VhZ2VNb2RlOlwiY29udGludW91c1wifX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImNwcFwiLGZ1bmN0aW9uKHQpe3ZhciBpPXtrZXl3b3JkOlwiZmFsc2UgaW50IGZsb2F0IHdoaWxlIHByaXZhdGUgY2hhciBjYXRjaCBleHBvcnQgdmlydHVhbCBvcGVyYXRvciBzaXplb2YgZHluYW1pY19jYXN0fDEwIHR5cGVkZWYgY29uc3RfY2FzdHwxMCBjb25zdCBzdHJ1Y3QgZm9yIHN0YXRpY19jYXN0fDEwIHVuaW9uIG5hbWVzcGFjZSB1bnNpZ25lZCBsb25nIHZvbGF0aWxlIHN0YXRpYyBwcm90ZWN0ZWQgYm9vbCB0ZW1wbGF0ZSBtdXRhYmxlIGlmIHB1YmxpYyBmcmllbmQgZG8gZ290byBhdXRvIHZvaWQgZW51bSBlbHNlIGJyZWFrIGV4dGVybiB1c2luZyB0cnVlIGNsYXNzIGFzbSBjYXNlIHR5cGVpZCBzaG9ydCByZWludGVycHJldF9jYXN0fDEwIGRlZmF1bHQgZG91YmxlIHJlZ2lzdGVyIGV4cGxpY2l0IHNpZ25lZCB0eXBlbmFtZSB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgd2NoYXJfdCBpbmxpbmUgZGVsZXRlIGFsaWdub2YgY2hhcjE2X3QgY2hhcjMyX3QgY29uc3RleHByIGRlY2x0eXBlIG5vZXhjZXB0IG51bGxwdHIgc3RhdGljX2Fzc2VydCB0aHJlYWRfbG9jYWwgcmVzdHJpY3QgX0Jvb2wgY29tcGxleCBfQ29tcGxleCBfSW1hZ2luYXJ5aW50bWF4X3QgdWludG1heF90IGludDhfdCB1aW50OF90IGludDE2X3QgdWludDE2X3QgaW50MzJfdCB1aW50MzJfdCAgaW50NjRfdCB1aW50NjRfdGludF9sZWFzdDhfdCB1aW50X2xlYXN0OF90IGludF9sZWFzdDE2X3QgdWludF9sZWFzdDE2X3QgaW50X2xlYXN0MzJfdCB1aW50X2xlYXN0MzJfdGludF9sZWFzdDY0X3QgdWludF9sZWFzdDY0X3QgaW50X2Zhc3Q4X3QgdWludF9mYXN0OF90IGludF9mYXN0MTZfdCB1aW50X2Zhc3QxNl90IGludF9mYXN0MzJfdHVpbnRfZmFzdDMyX3QgaW50X2Zhc3Q2NF90IHVpbnRfZmFzdDY0X3QgaW50cHRyX3QgdWludHB0cl90IGF0b21pY19ib29sIGF0b21pY19jaGFyIGF0b21pY19zY2hhcmF0b21pY191Y2hhciBhdG9taWNfc2hvcnQgYXRvbWljX3VzaG9ydCBhdG9taWNfaW50IGF0b21pY191aW50IGF0b21pY19sb25nIGF0b21pY191bG9uZyBhdG9taWNfbGxvbmdhdG9taWNfdWxsb25nIGF0b21pY193Y2hhcl90IGF0b21pY19jaGFyMTZfdCBhdG9taWNfY2hhcjMyX3QgYXRvbWljX2ludG1heF90IGF0b21pY191aW50bWF4X3RhdG9taWNfaW50cHRyX3QgYXRvbWljX3VpbnRwdHJfdCBhdG9taWNfc2l6ZV90IGF0b21pY19wdHJkaWZmX3QgYXRvbWljX2ludF9sZWFzdDhfdCBhdG9taWNfaW50X2xlYXN0MTZfdGF0b21pY19pbnRfbGVhc3QzMl90IGF0b21pY19pbnRfbGVhc3Q2NF90IGF0b21pY191aW50X2xlYXN0OF90IGF0b21pY191aW50X2xlYXN0MTZfdCBhdG9taWNfdWludF9sZWFzdDMyX3RhdG9taWNfdWludF9sZWFzdDY0X3QgYXRvbWljX2ludF9mYXN0OF90IGF0b21pY19pbnRfZmFzdDE2X3QgYXRvbWljX2ludF9mYXN0MzJfdCBhdG9taWNfaW50X2Zhc3Q2NF90YXRvbWljX3VpbnRfZmFzdDhfdCBhdG9taWNfdWludF9mYXN0MTZfdCBhdG9taWNfdWludF9mYXN0MzJfdCBhdG9taWNfdWludF9mYXN0NjRfdFwiLGJ1aWx0X2luOlwic3RkIHN0cmluZyBjaW4gY291dCBjZXJyIGNsb2cgc3RyaW5nc3RyZWFtIGlzdHJpbmdzdHJlYW0gb3N0cmluZ3N0cmVhbSBhdXRvX3B0ciBkZXF1ZSBsaXN0IHF1ZXVlIHN0YWNrIHZlY3RvciBtYXAgc2V0IGJpdHNldCBtdWx0aXNldCBtdWx0aW1hcCB1bm9yZGVyZWRfc2V0IHVub3JkZXJlZF9tYXAgdW5vcmRlcmVkX211bHRpc2V0IHVub3JkZXJlZF9tdWx0aW1hcCBhcnJheSBzaGFyZWRfcHRyIGFib3J0IGFicyBhY29zIGFzaW4gYXRhbjIgYXRhbiBjYWxsb2MgY2VpbCBjb3NoIGNvcyBleGl0IGV4cCBmYWJzIGZsb29yIGZtb2QgZnByaW50ZiBmcHV0cyBmcmVlIGZyZXhwIGZzY2FuZiBpc2FsbnVtIGlzYWxwaGEgaXNjbnRybCBpc2RpZ2l0IGlzZ3JhcGggaXNsb3dlciBpc3ByaW50IGlzcHVuY3QgaXNzcGFjZSBpc3VwcGVyIGlzeGRpZ2l0IHRvbG93ZXIgdG91cHBlciBsYWJzIGxkZXhwIGxvZzEwIGxvZyBtYWxsb2MgbWVtY2hyIG1lbWNtcCBtZW1jcHkgbWVtc2V0IG1vZGYgcG93IHByaW50ZiBwdXRjaGFyIHB1dHMgc2NhbmYgc2luaCBzaW4gc25wcmludGYgc3ByaW50ZiBzcXJ0IHNzY2FuZiBzdHJjYXQgc3RyY2hyIHN0cmNtcCBzdHJjcHkgc3RyY3NwbiBzdHJsZW4gc3RybmNhdCBzdHJuY21wIHN0cm5jcHkgc3RycGJyayBzdHJyY2hyIHN0cnNwbiBzdHJzdHIgdGFuaCB0YW4gdmZwcmludGYgdnByaW50ZiB2c3ByaW50ZlwifTtyZXR1cm57YWxpYXNlczpbXCJjXCIsXCJoXCIsXCJjKytcIixcImgrK1wiXSxrOmksaTpcIjwvXCIsYzpbdC5DTENNLHQuQ0JDTSx0LlFTTSx7Y046XCJzdHJpbmdcIixiOlwiJ1xcXFxcXFxcPy5cIixlOlwiJ1wiLGk6XCIuXCJ9LHtjTjpcIm51bWJlclwiLGI6XCJcXFxcYihcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykodXxVfGx8THx1bHxVTHxmfEYpXCJ9LHQuQ05NLHtjTjpcInByZXByb2Nlc3NvclwiLGI6XCIjXCIsZTpcIiRcIixrOlwiaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcHJhZ21hXCIsYzpbe2I6J2luY2x1ZGVcXFxccypbPFwiXScsZTonWz5cIl0nLGs6XCJpbmNsdWRlXCIsaTpcIlxcXFxuXCJ9LHQuQ0xDTV19LHtjTjpcInN0bF9jb250YWluZXJcIixiOlwiXFxcXGIoZGVxdWV8bGlzdHxxdWV1ZXxzdGFja3x2ZWN0b3J8bWFwfHNldHxiaXRzZXR8bXVsdGlzZXR8bXVsdGltYXB8dW5vcmRlcmVkX21hcHx1bm9yZGVyZWRfc2V0fHVub3JkZXJlZF9tdWx0aXNldHx1bm9yZGVyZWRfbXVsdGltYXB8YXJyYXkpXFxcXHMqPFwiLGU6XCI+XCIsazppLGM6W1wic2VsZlwiXX0se2I6dC5JUitcIjo6XCJ9LHtiSzpcIm5ldyB0aHJvdyByZXR1cm5cIixyOjB9LHtjTjpcImZ1bmN0aW9uXCIsYjpcIihcIit0LklSK1wiXFxcXHMrKStcIit0LklSK1wiXFxcXHMqXFxcXChcIixyQjohMCxlOi9bezs9XS8sZUU6ITAsazppLGM6W3tiOnQuSVIrXCJcXFxccypcXFxcKFwiLHJCOiEwLGM6W3QuVE1dLHI6MH0se2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGs6aSxyOjAsYzpbdC5DQkNNXX0sdC5DTENNLHQuQ0JDTV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJoYXNrZWxsXCIsZnVuY3Rpb24oZSl7dmFyIGk9e2NOOlwiY29tbWVudFwiLHY6W3tiOlwiLS1cIixlOlwiJFwifSx7YjpcInstXCIsZTpcIi19XCIsYzpbXCJzZWxmXCJdfV19LGM9e2NOOlwicHJhZ21hXCIsYjpcInstI1wiLGU6XCIjLX1cIn0sYT17Y046XCJwcmVwcm9jZXNzb3JcIixiOlwiXiNcIixlOlwiJFwifSxuPXtjTjpcInR5cGVcIixiOlwiXFxcXGJbQS1aXVtcXFxcdyddKlwiLHI6MH0sbD17Y046XCJjb250YWluZXJcIixiOlwiXFxcXChcIixlOlwiXFxcXClcIixpOidcIicsYzpbYyxpLGEse2NOOlwidHlwZVwiLGI6XCJcXFxcYltBLVpdW1xcXFx3XSooXFxcXCgoXFxcXC5cXFxcLnwsfFxcXFx3KylcXFxcKSk/XCJ9LGUuaW5oZXJpdChlLlRNLHtiOlwiW19hLXpdW1xcXFx3J10qXCJ9KV19LHQ9e2NOOlwiY29udGFpbmVyXCIsYjpcIntcIixlOlwifVwiLGM6bC5jfTtyZXR1cm57YWxpYXNlczpbXCJoc1wiXSxrOlwibGV0IGluIGlmIHRoZW4gZWxzZSBjYXNlIG9mIHdoZXJlIGRvIG1vZHVsZSBpbXBvcnQgaGlkaW5nIHF1YWxpZmllZCB0eXBlIGRhdGEgbmV3dHlwZSBkZXJpdmluZyBjbGFzcyBpbnN0YW5jZSBhcyBkZWZhdWx0IGluZml4IGluZml4bCBpbmZpeHIgZm9yZWlnbiBleHBvcnQgY2NhbGwgc3RkY2FsbCBjcGx1c3BsdXMganZtIGRvdG5ldCBzYWZlIHVuc2FmZSBmYW1pbHkgZm9yYWxsIG1kbyBwcm9jIHJlY1wiLGM6W3tjTjpcIm1vZHVsZVwiLGI6XCJcXFxcYm1vZHVsZVxcXFxiXCIsZTpcIndoZXJlXCIsazpcIm1vZHVsZSB3aGVyZVwiLGM6W2wsaV0saTpcIlxcXFxXXFxcXC58O1wifSx7Y046XCJpbXBvcnRcIixiOlwiXFxcXGJpbXBvcnRcXFxcYlwiLGU6XCIkXCIsazpcImltcG9ydHwwIHF1YWxpZmllZCBhcyBoaWRpbmdcIixjOltsLGldLGk6XCJcXFxcV1xcXFwufDtcIn0se2NOOlwiY2xhc3NcIixiOlwiXihcXFxccyopPyhjbGFzc3xpbnN0YW5jZSlcXFxcYlwiLGU6XCJ3aGVyZVwiLGs6XCJjbGFzcyBmYW1pbHkgaW5zdGFuY2Ugd2hlcmVcIixjOltuLGwsaV19LHtjTjpcInR5cGVkZWZcIixiOlwiXFxcXGIoZGF0YXwobmV3KT90eXBlKVxcXFxiXCIsZTpcIiRcIixrOlwiZGF0YSBmYW1pbHkgdHlwZSBuZXd0eXBlIGRlcml2aW5nXCIsYzpbYyxpLG4sbCx0XX0se2NOOlwiZGVmYXVsdFwiLGJLOlwiZGVmYXVsdFwiLGU6XCIkXCIsYzpbbixsLGldfSx7Y046XCJpbmZpeFwiLGJLOlwiaW5maXggaW5maXhsIGluZml4clwiLGU6XCIkXCIsYzpbZS5DTk0saV19LHtjTjpcImZvcmVpZ25cIixiOlwiXFxcXGJmb3JlaWduXFxcXGJcIixlOlwiJFwiLGs6XCJmb3JlaWduIGltcG9ydCBleHBvcnQgY2NhbGwgc3RkY2FsbCBjcGx1c3BsdXMganZtIGRvdG5ldCBzYWZlIHVuc2FmZVwiLGM6W24sZS5RU00saV19LHtjTjpcInNoZWJhbmdcIixiOlwiIyFcXFxcL3VzclxcXFwvYmluXFxcXC9lbnYgcnVuaGFza2VsbFwiLGU6XCIkXCJ9LGMsaSxhLGUuUVNNLGUuQ05NLG4sZS5pbmhlcml0KGUuVE0se2I6XCJeW19hLXpdW1xcXFx3J10qXCJ9KSx7YjpcIi0+fDwtXCJ9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJoYW1sXCIsZnVuY3Rpb24oKXtyZXR1cm57Y0k6ITAsYzpbe2NOOlwiZG9jdHlwZVwiLGI6XCJeISEhKCAoNXwxXFxcXC4xfFN0cmljdHxGcmFtZXNldHxCYXNpY3xNb2JpbGV8UkRGYXxYTUxcXFxcYi4qKSk/JFwiLHI6MTB9LHtjTjpcImNvbW1lbnRcIixiOlwiXlxcXFxzKighPSN8PSN8LSN8LykuKiRcIixyOjB9LHtiOlwiXlxcXFxzKigtfD18IT0pKD8hIylcIixzdGFydHM6e2U6XCJcXFxcblwiLHNMOlwicnVieVwifX0se2NOOlwidGFnXCIsYjpcIl5cXFxccyolXCIsYzpbe2NOOlwidGl0bGVcIixiOlwiXFxcXHcrXCJ9LHtjTjpcInZhbHVlXCIsYjpcIlsjXFxcXC5dXFxcXHcrXCJ9LHtiOlwie1xcXFxzKlwiLGU6XCJcXFxccyp9XCIsZUU6ITAsYzpbe2I6XCI6XFxcXHcrXFxcXHMqPT5cIixlOlwiLFxcXFxzK1wiLHJCOiEwLGVXOiEwLGM6W3tjTjpcInN5bWJvbFwiLGI6XCI6XFxcXHcrXCJ9LHtjTjpcInN0cmluZ1wiLGI6J1wiJyxlOidcIid9LHtjTjpcInN0cmluZ1wiLGI6XCInXCIsZTpcIidcIn0se2I6XCJcXFxcdytcIixyOjB9XX1dfSx7YjpcIlxcXFwoXFxcXHMqXCIsZTpcIlxcXFxzKlxcXFwpXCIsZUU6ITAsYzpbe2I6XCJcXFxcdytcXFxccyo9XCIsZTpcIlxcXFxzK1wiLHJCOiEwLGVXOiEwLGM6W3tjTjpcImF0dHJpYnV0ZVwiLGI6XCJcXFxcdytcIixyOjB9LHtjTjpcInN0cmluZ1wiLGI6J1wiJyxlOidcIid9LHtjTjpcInN0cmluZ1wiLGI6XCInXCIsZTpcIidcIn0se2I6XCJcXFxcdytcIixyOjB9XX1dfV19LHtjTjpcImJ1bGxldFwiLGI6XCJeXFxcXHMqWz1+XVxcXFxzKlwiLHI6MH0se2I6XCIje1wiLHN0YXJ0czp7ZTpcIn1cIixzTDpcInJ1YnlcIn19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJwcm9jZXNzaW5nXCIsZnVuY3Rpb24oZSl7cmV0dXJue2s6e2tleXdvcmQ6XCJCdWZmZXJlZFJlYWRlciBQVmVjdG9yIFBGb250IFBJbWFnZSBQR3JhcGhpY3MgSGFzaE1hcCBib29sZWFuIGJ5dGUgY2hhciBjb2xvciBkb3VibGUgZmxvYXQgaW50IGxvbmcgU3RyaW5nIEFycmF5IEZsb2F0RGljdCBGbG9hdExpc3QgSW50RGljdCBJbnRMaXN0IEpTT05BcnJheSBKU09OT2JqZWN0IE9iamVjdCBTdHJpbmdEaWN0IFN0cmluZ0xpc3QgVGFibGUgVGFibGVSb3cgWE1MIGZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgY29uc3QgZm9yIHRydWUgd2hpbGUgbG9uZyB0aHJvdyBzdHJpY3RmcCBmaW5hbGx5IHByb3RlY3RlZCBpbXBvcnQgbmF0aXZlIGZpbmFsIHJldHVybiB2b2lkIGVudW0gZWxzZSBicmVhayB0cmFuc2llbnQgbmV3IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlIGFzc2VydCBzaG9ydCBwYWNrYWdlIGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdGhyb3dzIHByb3RlY3RlZCBwdWJsaWMgcHJpdmF0ZVwiLGNvbnN0YW50OlwiUDJEIFAzRCBIQUxGX1BJIFBJIFFVQVJURVJfUEkgVEFVIFRXT19QSVwiLHZhcmlhYmxlOlwiZGlzcGxheUhlaWdodCBkaXNwbGF5V2lkdGggbW91c2VZIG1vdXNlWCBtb3VzZVByZXNzZWQgcG1vdXNlWCBwbW91c2VZIGtleSBrZXlDb2RlIHBpeGVscyBmb2N1c2VkIGZyYW1lQ291bnQgZnJhbWVSYXRlIGhlaWdodCB3aWR0aFwiLHRpdGxlOlwic2V0dXAgZHJhd1wiLGJ1aWx0X2luOlwic2l6ZSBjcmVhdGVHcmFwaGljcyBiZWdpbkRyYXcgY3JlYXRlU2hhcGUgbG9hZFNoYXBlIFBTaGFwZSBhcmMgZWxsaXBzZSBsaW5lIHBvaW50IHF1YWQgcmVjdCB0cmlhbmdsZSBiZXppZXIgYmV6aWVyRGV0YWlsIGJlemllclBvaW50IGJlemllclRhbmdlbnQgY3VydmUgY3VydmVEZXRhaWwgY3VydmVQb2ludCBjdXJ2ZVRhbmdlbnQgY3VydmVUaWdodG5lc3Mgc2hhcGUgc2hhcGVNb2RlIGJlZ2luQ29udG91ciBiZWdpblNoYXBlIGJlemllclZlcnRleCBjdXJ2ZVZlcnRleCBlbmRDb250b3VyIGVuZFNoYXBlIHF1YWRyYXRpY1ZlcnRleCB2ZXJ0ZXggZWxsaXBzZU1vZGUgbm9TbW9vdGggcmVjdE1vZGUgc21vb3RoIHN0cm9rZUNhcCBzdHJva2VKb2luIHN0cm9rZVdlaWdodCBtb3VzZUNsaWNrZWQgbW91c2VEcmFnZ2VkIG1vdXNlTW92ZWQgbW91c2VQcmVzc2VkIG1vdXNlUmVsZWFzZWQgbW91c2VXaGVlbCBrZXlQcmVzc2VkIGtleVByZXNzZWRrZXlSZWxlYXNlZCBrZXlUeXBlZCBwcmludCBwcmludGxuIHNhdmUgc2F2ZUZyYW1lIGRheSBob3VyIG1pbGxpcyBtaW51dGUgbW9udGggc2Vjb25kIHllYXIgYmFja2dyb3VuZCBjbGVhciBjb2xvck1vZGUgZmlsbCBub0ZpbGwgbm9TdHJva2Ugc3Ryb2tlIGFscGhhIGJsdWUgYnJpZ2h0bmVzcyBjb2xvciBncmVlbiBodWUgbGVycENvbG9yIHJlZCBzYXR1cmF0aW9uIG1vZGVsWCBtb2RlbFkgbW9kZWxaIHNjcmVlblggc2NyZWVuWSBzY3JlZW5aIGFtYmllbnQgZW1pc3NpdmUgc2hpbmluZXNzIHNwZWN1bGFyIGFkZCBjcmVhdGVJbWFnZSBiZWdpbkNhbWVyYSBjYW1lcmEgZW5kQ2FtZXJhIGZydXN0dW0gb3J0aG8gcGVyc3BlY3RpdmUgcHJpbnRDYW1lcmEgcHJpbnRQcm9qZWN0aW9uIGN1cnNvciBmcmFtZVJhdGUgbm9DdXJzb3IgZXhpdCBsb29wIG5vTG9vcCBwb3BTdHlsZSBwdXNoU3R5bGUgcmVkcmF3IGJpbmFyeSBib29sZWFuIGJ5dGUgY2hhciBmbG9hdCBoZXggaW50IHN0ciB1bmJpbmFyeSB1bmhleCBqb2luIG1hdGNoIG1hdGNoQWxsIG5mIG5mYyBuZnAgbmZzIHNwbGl0IHNwbGl0VG9rZW5zIHRyaW0gYXBwZW5kIGFycmF5Q29weSBjb25jYXQgZXhwYW5kIHJldmVyc2Ugc2hvcnRlbiBzb3J0IHNwbGljZSBzdWJzZXQgYm94IHNwaGVyZSBzcGhlcmVEZXRhaWwgY3JlYXRlSW5wdXQgY3JlYXRlUmVhZGVyIGxvYWRCeXRlcyBsb2FkSlNPTkFycmF5IGxvYWRKU09OT2JqZWN0IGxvYWRTdHJpbmdzIGxvYWRUYWJsZSBsb2FkWE1MIG9wZW4gcGFyc2VYTUwgc2F2ZVRhYmxlIHNlbGVjdEZvbGRlciBzZWxlY3RJbnB1dCBiZWdpblJhdyBiZWdpblJlY29yZCBjcmVhdGVPdXRwdXQgY3JlYXRlV3JpdGVyIGVuZFJhdyBlbmRSZWNvcmQgUHJpbnRXcml0ZXJzYXZlQnl0ZXMgc2F2ZUpTT05BcnJheSBzYXZlSlNPTk9iamVjdCBzYXZlU3RyZWFtIHNhdmVTdHJpbmdzIHNhdmVYTUwgc2VsZWN0T3V0cHV0IHBvcE1hdHJpeCBwcmludE1hdHJpeCBwdXNoTWF0cml4IHJlc2V0TWF0cml4IHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzaGVhclggc2hlYXJZIHRyYW5zbGF0ZSBhbWJpZW50TGlnaHQgZGlyZWN0aW9uYWxMaWdodCBsaWdodEZhbGxvZmYgbGlnaHRzIGxpZ2h0U3BlY3VsYXIgbm9MaWdodHMgbm9ybWFsIHBvaW50TGlnaHQgc3BvdExpZ2h0IGltYWdlIGltYWdlTW9kZSBsb2FkSW1hZ2Ugbm9UaW50IHJlcXVlc3RJbWFnZSB0aW50IHRleHR1cmUgdGV4dHVyZU1vZGUgdGV4dHVyZVdyYXAgYmxlbmQgY29weSBmaWx0ZXIgZ2V0IGxvYWRQaXhlbHMgc2V0IHVwZGF0ZVBpeGVscyBibGVuZE1vZGUgbG9hZFNoYWRlciBQU2hhZGVycmVzZXRTaGFkZXIgc2hhZGVyIGNyZWF0ZUZvbnQgbG9hZEZvbnQgdGV4dCB0ZXh0Rm9udCB0ZXh0QWxpZ24gdGV4dExlYWRpbmcgdGV4dE1vZGUgdGV4dFNpemUgdGV4dFdpZHRoIHRleHRBc2NlbnQgdGV4dERlc2NlbnQgYWJzIGNlaWwgY29uc3RyYWluIGRpc3QgZXhwIGZsb29yIGxlcnAgbG9nIG1hZyBtYXAgbWF4IG1pbiBub3JtIHBvdyByb3VuZCBzcSBzcXJ0IGFjb3MgYXNpbiBhdGFuIGF0YW4yIGNvcyBkZWdyZWVzIHJhZGlhbnMgc2luIHRhbiBub2lzZSBub2lzZURldGFpbCBub2lzZVNlZWQgcmFuZG9tIHJhbmRvbUdhdXNzaWFuIHJhbmRvbVNlZWRcIn0sYzpbZS5DTENNLGUuQ0JDTSxlLkFTTSxlLlFTTSxlLkNOTV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiYmFzaFwiLGZ1bmN0aW9uKGUpe3ZhciB0PXtjTjpcInZhcmlhYmxlXCIsdjpbe2I6L1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL30se2I6L1xcJFxceyguKj8pXFx9L31dfSxzPXtjTjpcInN0cmluZ1wiLGI6L1wiLyxlOi9cIi8sYzpbZS5CRSx0LHtjTjpcInZhcmlhYmxlXCIsYjovXFwkXFwoLyxlOi9cXCkvLGM6W2UuQkVdfV19LGE9e2NOOlwic3RyaW5nXCIsYjovJy8sZTovJy99O3JldHVybnthbGlhc2VzOltcInNoXCIsXCJ6c2hcIl0sbDovLT9bYS16XFwuXSsvLGs6e2tleXdvcmQ6XCJpZiB0aGVuIGVsc2UgZWxpZiBmaSBmb3Igd2hpbGUgaW4gZG8gZG9uZSBjYXNlIGVzYWMgZnVuY3Rpb25cIixsaXRlcmFsOlwidHJ1ZSBmYWxzZVwiLGJ1aWx0X2luOlwiYnJlYWsgY2QgY29udGludWUgZXZhbCBleGVjIGV4aXQgZXhwb3J0IGdldG9wdHMgaGFzaCBwd2QgcmVhZG9ubHkgcmV0dXJuIHNoaWZ0IHRlc3QgdGltZXMgdHJhcCB1bWFzayB1bnNldCBhbGlhcyBiaW5kIGJ1aWx0aW4gY2FsbGVyIGNvbW1hbmQgZGVjbGFyZSBlY2hvIGVuYWJsZSBoZWxwIGxldCBsb2NhbCBsb2dvdXQgbWFwZmlsZSBwcmludGYgcmVhZCByZWFkYXJyYXkgc291cmNlIHR5cGUgdHlwZXNldCB1bGltaXQgdW5hbGlhcyBzZXQgc2hvcHQgYXV0b2xvYWQgYmcgYmluZGtleSBieWUgY2FwIGNoZGlyIGNsb25lIGNvbXBhcmd1bWVudHMgY29tcGNhbGwgY29tcGN0bCBjb21wZGVzY3JpYmUgY29tcGZpbGVzIGNvbXBncm91cHMgY29tcHF1b3RlIGNvbXB0YWdzIGNvbXB0cnkgY29tcHZhbHVlcyBkaXJzIGRpc2FibGUgZGlzb3duIGVjaG90YyBlY2hvdGkgZW11bGF0ZSBmYyBmZyBmbG9hdCBmdW5jdGlvbnMgZ2V0Y2FwIGdldGxuIGhpc3RvcnkgaW50ZWdlciBqb2JzIGtpbGwgbGltaXQgbG9nIG5vZ2xvYiBwb3BkIHByaW50IHB1c2hkIHB1c2hsbiByZWhhc2ggc2NoZWQgc2V0Y2FwIHNldG9wdCBzdGF0IHN1c3BlbmQgdHR5Y3RsIHVuZnVuY3Rpb24gdW5oYXNoIHVubGltaXQgdW5zZXRvcHQgdmFyZWQgd2FpdCB3aGVuY2Ugd2hlcmUgd2hpY2ggemNvbXBpbGUgemZvcm1hdCB6ZnRwIHpsZSB6bW9kbG9hZCB6cGFyc2VvcHRzIHpwcm9mIHpwdHkgenJlZ2V4cGFyc2UgenNvY2tldCB6c3R5bGUgenRjcFwiLG9wZXJhdG9yOlwiLW5lIC1lcSAtbHQgLWd0IC1mIC1kIC1lIC1zIC1sIC1hXCJ9LGM6W3tjTjpcInNoZWJhbmdcIixiOi9eIyFbXlxcbl0rc2hcXHMqJC8scjoxMH0se2NOOlwiZnVuY3Rpb25cIixiOi9cXHdbXFx3XFxkX10qXFxzKlxcKFxccypcXClcXHMqXFx7LyxyQjohMCxjOltlLmluaGVyaXQoZS5UTSx7YjovXFx3W1xcd1xcZF9dKi99KV0scjowfSxlLkhDTSxlLk5NLHMsYSx0XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJlcmxhbmctcmVwbFwiLGZ1bmN0aW9uKGUpe3JldHVybntrOntzcGVjaWFsX2Z1bmN0aW9uczpcInNwYXduIHNwYXduX2xpbmsgc2VsZlwiLHJlc2VydmVkOlwiYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnNyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmIGxldCBub3Qgb2Ygb3Igb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvclwifSxjOlt7Y046XCJwcm9tcHRcIixiOlwiXlswLTldKz4gXCIscjoxMH0se2NOOlwiY29tbWVudFwiLGI6XCIlXCIsZTpcIiRcIn0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiKFxcXFxkKyNbYS1mQS1GMC05XSt8XFxcXGQrKFxcXFwuXFxcXGQrKT8oW2VFXVstK10/XFxcXGQrKT8pXCIscjowfSxlLkFTTSxlLlFTTSx7Y046XCJjb25zdGFudFwiLGI6XCJcXFxcPyg6Oik/KFtBLVpdXFxcXHcqKDo6KT8pK1wifSx7Y046XCJhcnJvd1wiLGI6XCItPlwifSx7Y046XCJva1wiLGI6XCJva1wifSx7Y046XCJleGNsYW1hdGlvbl9tYXJrXCIsYjpcIiFcIn0se2NOOlwiZnVuY3Rpb25fb3JfYXRvbVwiLGI6XCIoXFxcXGJbYS16J11bYS16QS1aMC05XyddKjpbYS16J11bYS16QS1aMC05XyddKil8KFxcXFxiW2EteiddW2EtekEtWjAtOV8nXSopXCIscjowfSx7Y046XCJ2YXJpYWJsZVwiLGI6XCJbQS1aXVthLXpBLVowLTlfJ10qXCIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwic3R5bHVzXCIsZnVuY3Rpb24odCl7dmFyIGU9e2NOOlwidmFyaWFibGVcIixiOlwiXFxcXCRcIit0LklSfSxvPXtjTjpcImhleGNvbG9yXCIsYjpcIiMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pXCIscjoxMH0saT1bXCJjaGFyc2V0XCIsXCJjc3NcIixcImRlYnVnXCIsXCJleHRlbmRcIixcImZvbnQtZmFjZVwiLFwiZm9yXCIsXCJpbXBvcnRcIixcImluY2x1ZGVcIixcIm1lZGlhXCIsXCJtaXhpblwiLFwicGFnZVwiLFwid2FyblwiLFwid2hpbGVcIl0scj1bXCJhZnRlclwiLFwiYmVmb3JlXCIsXCJmaXJzdC1sZXR0ZXJcIixcImZpcnN0LWxpbmVcIixcImFjdGl2ZVwiLFwiZmlyc3QtY2hpbGRcIixcImZvY3VzXCIsXCJob3ZlclwiLFwibGFuZ1wiLFwibGlua1wiLFwidmlzaXRlZFwiXSxuPVtcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImRkXCIsXCJkZWxcIixcImRldGFpbHNcIixcImRmblwiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJmaWVsZHNldFwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb290ZXJcIixcImZvcm1cIixcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIixcImhlYWRlclwiLFwiaGdyb3VwXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJsYWJlbFwiLFwibGVnZW5kXCIsXCJsaVwiLFwibWFya1wiLFwibWVudVwiLFwibmF2XCIsXCJvYmplY3RcIixcIm9sXCIsXCJwXCIsXCJxXCIsXCJxdW90ZVwiLFwic2FtcFwiLFwic2VjdGlvblwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0clwiLFwidWxcIixcInZhclwiLFwidmlkZW9cIl0sYT1cIltcXFxcLlxcXFxzXFxcXG5cXFxcW1xcXFw6LF1cIixsPVtcImFsaWduLWNvbnRlbnRcIixcImFsaWduLWl0ZW1zXCIsXCJhbGlnbi1zZWxmXCIsXCJhbmltYXRpb25cIixcImFuaW1hdGlvbi1kZWxheVwiLFwiYW5pbWF0aW9uLWRpcmVjdGlvblwiLFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXCJhbmltYXRpb24tZmlsbC1tb2RlXCIsXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsXCJhbmltYXRpb24tbmFtZVwiLFwiYW5pbWF0aW9uLXBsYXktc3RhdGVcIixcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIixcImF1dG9cIixcImJhY2tmYWNlLXZpc2liaWxpdHlcIixcImJhY2tncm91bmRcIixcImJhY2tncm91bmQtYXR0YWNobWVudFwiLFwiYmFja2dyb3VuZC1jbGlwXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJiYWNrZ3JvdW5kLW9yaWdpblwiLFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFwiYmFja2dyb3VuZC1yZXBlYXRcIixcImJhY2tncm91bmQtc2l6ZVwiLFwiYm9yZGVyXCIsXCJib3JkZXItYm90dG9tXCIsXCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLFwiYm9yZGVyLWJvdHRvbS1zdHlsZVwiLFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwiYm9yZGVyLWNvbGxhcHNlXCIsXCJib3JkZXItY29sb3JcIixcImJvcmRlci1pbWFnZVwiLFwiYm9yZGVyLWltYWdlLW91dHNldFwiLFwiYm9yZGVyLWltYWdlLXJlcGVhdFwiLFwiYm9yZGVyLWltYWdlLXNsaWNlXCIsXCJib3JkZXItaW1hZ2Utc291cmNlXCIsXCJib3JkZXItaW1hZ2Utd2lkdGhcIixcImJvcmRlci1sZWZ0XCIsXCJib3JkZXItbGVmdC1jb2xvclwiLFwiYm9yZGVyLWxlZnQtc3R5bGVcIixcImJvcmRlci1sZWZ0LXdpZHRoXCIsXCJib3JkZXItcmFkaXVzXCIsXCJib3JkZXItcmlnaHRcIixcImJvcmRlci1yaWdodC1jb2xvclwiLFwiYm9yZGVyLXJpZ2h0LXN0eWxlXCIsXCJib3JkZXItcmlnaHQtd2lkdGhcIixcImJvcmRlci1zcGFjaW5nXCIsXCJib3JkZXItc3R5bGVcIixcImJvcmRlci10b3BcIixcImJvcmRlci10b3AtY29sb3JcIixcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIixcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsXCJib3JkZXItdG9wLXN0eWxlXCIsXCJib3JkZXItdG9wLXdpZHRoXCIsXCJib3JkZXItd2lkdGhcIixcImJvdHRvbVwiLFwiYm94LWRlY29yYXRpb24tYnJlYWtcIixcImJveC1zaGFkb3dcIixcImJveC1zaXppbmdcIixcImJyZWFrLWFmdGVyXCIsXCJicmVhay1iZWZvcmVcIixcImJyZWFrLWluc2lkZVwiLFwiY2FwdGlvbi1zaWRlXCIsXCJjbGVhclwiLFwiY2xpcFwiLFwiY2xpcC1wYXRoXCIsXCJjb2xvclwiLFwiY29sdW1uLWNvdW50XCIsXCJjb2x1bW4tZmlsbFwiLFwiY29sdW1uLWdhcFwiLFwiY29sdW1uLXJ1bGVcIixcImNvbHVtbi1ydWxlLWNvbG9yXCIsXCJjb2x1bW4tcnVsZS1zdHlsZVwiLFwiY29sdW1uLXJ1bGUtd2lkdGhcIixcImNvbHVtbi1zcGFuXCIsXCJjb2x1bW4td2lkdGhcIixcImNvbHVtbnNcIixcImNvbnRlbnRcIixcImNvdW50ZXItaW5jcmVtZW50XCIsXCJjb3VudGVyLXJlc2V0XCIsXCJjdXJzb3JcIixcImRpcmVjdGlvblwiLFwiZGlzcGxheVwiLFwiZW1wdHktY2VsbHNcIixcImZpbHRlclwiLFwiZmxleFwiLFwiZmxleC1iYXNpc1wiLFwiZmxleC1kaXJlY3Rpb25cIixcImZsZXgtZmxvd1wiLFwiZmxleC1ncm93XCIsXCJmbGV4LXNocmlua1wiLFwiZmxleC13cmFwXCIsXCJmbG9hdFwiLFwiZm9udFwiLFwiZm9udC1mYW1pbHlcIixcImZvbnQtZmVhdHVyZS1zZXR0aW5nc1wiLFwiZm9udC1rZXJuaW5nXCIsXCJmb250LWxhbmd1YWdlLW92ZXJyaWRlXCIsXCJmb250LXNpemVcIixcImZvbnQtc2l6ZS1hZGp1c3RcIixcImZvbnQtc3RyZXRjaFwiLFwiZm9udC1zdHlsZVwiLFwiZm9udC12YXJpYW50XCIsXCJmb250LXZhcmlhbnQtbGlnYXR1cmVzXCIsXCJmb250LXdlaWdodFwiLFwiaGVpZ2h0XCIsXCJoeXBoZW5zXCIsXCJpY29uXCIsXCJpbWFnZS1vcmllbnRhdGlvblwiLFwiaW1hZ2UtcmVuZGVyaW5nXCIsXCJpbWFnZS1yZXNvbHV0aW9uXCIsXCJpbWUtbW9kZVwiLFwiaW5oZXJpdFwiLFwiaW5pdGlhbFwiLFwianVzdGlmeS1jb250ZW50XCIsXCJsZWZ0XCIsXCJsZXR0ZXItc3BhY2luZ1wiLFwibGluZS1oZWlnaHRcIixcImxpc3Qtc3R5bGVcIixcImxpc3Qtc3R5bGUtaW1hZ2VcIixcImxpc3Qtc3R5bGUtcG9zaXRpb25cIixcImxpc3Qtc3R5bGUtdHlwZVwiLFwibWFyZ2luXCIsXCJtYXJnaW4tYm90dG9tXCIsXCJtYXJnaW4tbGVmdFwiLFwibWFyZ2luLXJpZ2h0XCIsXCJtYXJnaW4tdG9wXCIsXCJtYXJrc1wiLFwibWFza1wiLFwibWF4LWhlaWdodFwiLFwibWF4LXdpZHRoXCIsXCJtaW4taGVpZ2h0XCIsXCJtaW4td2lkdGhcIixcIm5hdi1kb3duXCIsXCJuYXYtaW5kZXhcIixcIm5hdi1sZWZ0XCIsXCJuYXYtcmlnaHRcIixcIm5hdi11cFwiLFwibm9uZVwiLFwibm9ybWFsXCIsXCJvYmplY3QtZml0XCIsXCJvYmplY3QtcG9zaXRpb25cIixcIm9wYWNpdHlcIixcIm9yZGVyXCIsXCJvcnBoYW5zXCIsXCJvdXRsaW5lXCIsXCJvdXRsaW5lLWNvbG9yXCIsXCJvdXRsaW5lLW9mZnNldFwiLFwib3V0bGluZS1zdHlsZVwiLFwib3V0bGluZS13aWR0aFwiLFwib3ZlcmZsb3dcIixcIm92ZXJmbG93LXdyYXBcIixcIm92ZXJmbG93LXhcIixcIm92ZXJmbG93LXlcIixcInBhZGRpbmdcIixcInBhZGRpbmctYm90dG9tXCIsXCJwYWRkaW5nLWxlZnRcIixcInBhZGRpbmctcmlnaHRcIixcInBhZGRpbmctdG9wXCIsXCJwYWdlLWJyZWFrLWFmdGVyXCIsXCJwYWdlLWJyZWFrLWJlZm9yZVwiLFwicGFnZS1icmVhay1pbnNpZGVcIixcInBlcnNwZWN0aXZlXCIsXCJwZXJzcGVjdGl2ZS1vcmlnaW5cIixcInBvaW50ZXItZXZlbnRzXCIsXCJwb3NpdGlvblwiLFwicXVvdGVzXCIsXCJyZXNpemVcIixcInJpZ2h0XCIsXCJ0YWItc2l6ZVwiLFwidGFibGUtbGF5b3V0XCIsXCJ0ZXh0LWFsaWduXCIsXCJ0ZXh0LWFsaWduLWxhc3RcIixcInRleHQtZGVjb3JhdGlvblwiLFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsXCJ0ZXh0LWRlY29yYXRpb24tbGluZVwiLFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCIsXCJ0ZXh0LWluZGVudFwiLFwidGV4dC1vdmVyZmxvd1wiLFwidGV4dC1yZW5kZXJpbmdcIixcInRleHQtc2hhZG93XCIsXCJ0ZXh0LXRyYW5zZm9ybVwiLFwidGV4dC11bmRlcmxpbmUtcG9zaXRpb25cIixcInRvcFwiLFwidHJhbnNmb3JtXCIsXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsXCJ0cmFuc2Zvcm0tc3R5bGVcIixcInRyYW5zaXRpb25cIixcInRyYW5zaXRpb24tZGVsYXlcIixcInRyYW5zaXRpb24tZHVyYXRpb25cIixcInRyYW5zaXRpb24tcHJvcGVydHlcIixcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXCJ1bmljb2RlLWJpZGlcIixcInZlcnRpY2FsLWFsaWduXCIsXCJ2aXNpYmlsaXR5XCIsXCJ3aGl0ZS1zcGFjZVwiLFwid2lkb3dzXCIsXCJ3aWR0aFwiLFwid29yZC1icmVha1wiLFwid29yZC1zcGFjaW5nXCIsXCJ3b3JkLXdyYXBcIixcInotaW5kZXhcIl0sZD1bXCJcXFxce1wiLFwiXFxcXH1cIixcIlxcXFw/XCIsXCIoXFxcXGJSZXR1cm5cXFxcYilcIixcIihcXFxcYkVuZFxcXFxiKVwiLFwiKFxcXFxiZW5kXFxcXGIpXCIsXCI7XCIsXCIjXFxcXHNcIixcIlxcXFwqXFxcXHNcIixcIj09PVxcXFxzXCIsXCJcXFxcfFwiXTtyZXR1cm57YWxpYXNlczpbXCJzdHlsXCJdLGNJOiExLGk6XCIoXCIrZC5qb2luKFwifFwiKStcIilcIixrOlwiaWYgZWxzZSBmb3IgaW5cIixjOlt0LlFTTSx0LkFTTSx0LkNMQ00sdC5DQkNNLG8se2I6XCJcXFxcLlthLXpBLVpdW2EtekEtWjAtOV8tXSpcIithLHJCOiEwLGM6W3tjTjpcImNsYXNzXCIsYjpcIlxcXFwuW2EtekEtWl1bYS16QS1aMC05Xy1dKlwifV19LHtiOlwiXFxcXCNbYS16QS1aXVthLXpBLVowLTlfLV0qXCIrYSxyQjohMCxjOlt7Y046XCJpZFwiLGI6XCJcXFxcI1thLXpBLVpdW2EtekEtWjAtOV8tXSpcIn1dfSx7YjpcIlxcXFxiKFwiK24uam9pbihcInxcIikrXCIpXCIrYSxyQjohMCxjOlt7Y046XCJ0YWdcIixiOlwiXFxcXGJbYS16QS1aXVthLXpBLVowLTlfLV0qXCJ9XX0se2NOOlwicHNldWRvXCIsYjpcIiY/Oj86XFxcXGIoXCIrci5qb2luKFwifFwiKStcIilcIithfSx7Y046XCJhdF9ydWxlXCIsYjpcIkAoXCIraS5qb2luKFwifFwiKStcIilcXFxcYlwifSxlLHQuQ1NTTk0sdC5OTSx7Y046XCJmdW5jdGlvblwiLGI6XCJcXFxcYlthLXpBLVpdW2EtekEtWjAtOV8tXSpcXFxcKC4qXFxcXClcIixpOlwiW1xcXFxuXVwiLHJCOiEwLGM6W3tjTjpcInRpdGxlXCIsYjpcIlxcXFxiW2EtekEtWl1bYS16QS1aMC05Xy1dKlwifSx7Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sYzpbbyxlLHQuQVNNLHQuQ1NTTk0sdC5OTSx0LlFTTV19XX0se2NOOlwiYXR0cmlidXRlXCIsYjpcIlxcXFxiKFwiK2wucmV2ZXJzZSgpLmpvaW4oXCJ8XCIpK1wiKVxcXFxiXCJ9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJsZXNzXCIsZnVuY3Rpb24oZSl7dmFyIHI9XCJbXFxcXHctXStcIix0PVwiKFwiK3IrXCJ8QHtcIityK1wifSkrXCIsYT1bXSxjPVtdLG49ZnVuY3Rpb24oZSl7cmV0dXJue2NOOlwic3RyaW5nXCIsYjpcIn4/XCIrZStcIi4qP1wiK2V9fSxpPWZ1bmN0aW9uKGUscix0KXtyZXR1cm57Y046ZSxiOnIscjp0fX0scz1mdW5jdGlvbihyLHQsYSl7cmV0dXJuIGUuaW5oZXJpdCh7Y046cixiOnQrXCJcXFxcKFwiLGU6XCJcXFxcKFwiLHJCOiEwLGVFOiEwLHI6MH0sYSl9LGI9e2I6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGM6YyxyOjB9O2MucHVzaChlLkNMQ00sZS5DQkNNLG4oXCInXCIpLG4oJ1wiJyksZS5DU1NOTSxpKFwiaGV4Y29sb3JcIixcIiNbMC05QS1GYS1mXStcXFxcYlwiKSxzKFwiZnVuY3Rpb25cIixcIih1cmx8ZGF0YS11cmkpXCIse3N0YXJ0czp7Y046XCJzdHJpbmdcIixlOlwiW1xcXFwpXFxcXG5dXCIsZUU6ITB9fSkscyhcImZ1bmN0aW9uXCIsciksYixpKFwidmFyaWFibGVcIixcIkBAP1wiK3IsMTApLGkoXCJ2YXJpYWJsZVwiLFwiQHtcIityK1wifVwiKSxpKFwiYnVpbHRfaW5cIixcIn4/YFteYF0qP2BcIikse2NOOlwiYXR0cmlidXRlXCIsYjpyK1wiXFxcXHMqOlwiLGU6XCI6XCIsckI6ITAsZUU6ITB9KTt2YXIgbz1jLmNvbmNhdCh7YjpcIntcIixlOlwifVwiLGM6YX0pLHU9e2JLOlwid2hlblwiLGVXOiEwLGM6W3tiSzpcImFuZCBub3RcIn1dLmNvbmNhdChjKX0sQz17Y046XCJhdHRyaWJ1dGVcIixiOnQsZTpcIjpcIixlRTohMCxjOltlLkNMQ00sZS5DQkNNXSxpOi9cXFMvLHN0YXJ0czp7ZTpcIls7fV1cIixyRTohMCxjOmMsaTpcIls8PSRdXCJ9fSxsPXtjTjpcImF0X3J1bGVcIixiOlwiQChpbXBvcnR8bWVkaWF8Y2hhcnNldHxmb250LWZhY2V8KC1bYS16XSstKT9rZXlmcmFtZXN8c3VwcG9ydHN8ZG9jdW1lbnR8bmFtZXNwYWNlfHBhZ2V8dmlld3BvcnR8aG9zdClcXFxcYlwiLHN0YXJ0czp7ZTpcIls7e31dXCIsckU6ITAsYzpjLHI6MH19LGQ9e2NOOlwidmFyaWFibGVcIix2Olt7YjpcIkBcIityK1wiXFxcXHMqOlwiLHI6MTV9LHtiOlwiQFwiK3J9XSxzdGFydHM6e2U6XCJbO31dXCIsckU6ITAsYzpvfX0scD17djpbe2I6XCJbXFxcXC4jOiZcXFxcW11cIixlOlwiWzt7fV1cIn0se2I6dCtcIlteO10qe1wiLGU6XCJ7XCJ9XSxyQjohMCxyRTohMCxpOlwiWzw9JyRcXFwiXVwiLGM6W2UuQ0xDTSxlLkNCQ00sdSxpKFwia2V5d29yZFwiLFwiYWxsXFxcXGJcIiksaShcInZhcmlhYmxlXCIsXCJAe1wiK3IrXCJ9XCIpLGkoXCJ0YWdcIix0K1wiJT9cIiwwKSxpKFwiaWRcIixcIiNcIit0KSxpKFwiY2xhc3NcIixcIlxcXFwuXCIrdCwwKSxpKFwia2V5d29yZFwiLFwiJlwiLDApLHMoXCJwc2V1ZG9cIixcIjpub3RcIikscyhcImtleXdvcmRcIixcIjpleHRlbmRcIiksaShcInBzZXVkb1wiLFwiOjo/XCIrdCkse2NOOlwiYXR0cl9zZWxlY3RvclwiLGI6XCJcXFxcW1wiLGU6XCJcXFxcXVwifSx7YjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzpvfSx7YjpcIiFpbXBvcnRhbnRcIn1dfTtyZXR1cm4gYS5wdXNoKGUuQ0xDTSxlLkNCQ00sbCxkLHAsQykse2NJOiEwLGk6XCJbPT4nLzwoJFxcXCJdXCIsYzphfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInNjYWxhXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2NOOlwiYW5ub3RhdGlvblwiLGI6XCJAW0EtWmEtel0rXCJ9LGE9e2NOOlwic3RyaW5nXCIsYjondT9yP1wiXCJcIicsZTonXCJcIlwiJyxyOjEwfSxyPXtjTjpcInN5bWJvbFwiLGI6XCInXFxcXHdbXFxcXHdcXFxcZF9dKig/IScpXCJ9LGM9e2NOOlwidHlwZVwiLGI6XCJcXFxcYltBLVpdW0EtWmEtejAtOV9dKlwiLHI6MH0saT17Y046XCJ0aXRsZVwiLGI6L1teMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06O11bXlxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdK3xbXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjs9XS8scjowfSxsPXtjTjpcImNsYXNzXCIsYks6XCJjbGFzcyBvYmplY3QgdHJhaXQgdHlwZVwiLGU6L1s6PXtcXFsoXFxuO10vLGM6W3tjTjpcImtleXdvcmRcIixiSzpcImV4dGVuZHMgd2l0aFwiLHI6MTB9LGldfSxuPXtjTjpcImZ1bmN0aW9uXCIsYks6XCJkZWYgdmFsXCIsZTovWzo9e1xcWyhcXG47XS8sYzpbaV19O3JldHVybntrOntsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsXCIsa2V5d29yZDpcInR5cGUgeWllbGQgbGF6eSBvdmVycmlkZSBkZWYgd2l0aCB2YWwgdmFyIHNlYWxlZCBhYnN0cmFjdCBwcml2YXRlIHRyYWl0IG9iamVjdCBpZiBmb3JTb21lIGZvciB3aGlsZSB0aHJvdyBmaW5hbGx5IHByb3RlY3RlZCBleHRlbmRzIGltcG9ydCBmaW5hbCByZXR1cm4gZWxzZSBicmVhayBuZXcgY2F0Y2ggc3VwZXIgY2xhc3MgY2FzZSBwYWNrYWdlIGRlZmF1bHQgdHJ5IHRoaXMgbWF0Y2ggY29udGludWUgdGhyb3dzIGltcGxpY2l0XCJ9LGM6W2UuQ0xDTSxlLkNCQ00sYSxlLlFTTSxyLGMsbixsLGUuQ05NLHRdfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImphdmFcIixmdW5jdGlvbihlKXt2YXIgYT1lLlVJUitcIig8XCIrZS5VSVIrXCI+KT9cIix0PVwiZmFsc2Ugc3luY2hyb25pemVkIGludCBhYnN0cmFjdCBmbG9hdCBwcml2YXRlIGNoYXIgYm9vbGVhbiBzdGF0aWMgbnVsbCBpZiBjb25zdCBmb3IgdHJ1ZSB3aGlsZSBsb25nIHN0cmljdGZwIGZpbmFsbHkgcHJvdGVjdGVkIGltcG9ydCBuYXRpdmUgZmluYWwgdm9pZCBlbnVtIGVsc2UgYnJlYWsgdHJhbnNpZW50IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlIGFzc2VydCBzaG9ydCBwYWNrYWdlIGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdGhyb3dzIHByb3RlY3RlZCBwdWJsaWMgcHJpdmF0ZVwiLGM9XCIoXFxcXGIoMGJbMDFfXSspfFxcXFxiMFt4WF1bYS1mQS1GMC05X10rfChcXFxcYltcXFxcZF9dKyhcXFxcLltcXFxcZF9dKik/fFxcXFwuW1xcXFxkX10rKShbZUVdWy0rXT9cXFxcZCspPylbbExmRl0/XCIscj17Y046XCJudW1iZXJcIixiOmMscjowfTtyZXR1cm57YWxpYXNlczpbXCJqc3BcIl0sazp0LGk6LzxcXC8vLGM6W3tjTjpcImphdmFkb2NcIixiOlwiL1xcXFwqXFxcXCpcIixlOlwiXFxcXCovXCIscjowLGM6W3tjTjpcImphdmFkb2N0YWdcIixiOlwiKF58XFxcXHMpQFtBLVphLXpdK1wifV19LGUuQ0xDTSxlLkNCQ00sZS5BU00sZS5RU00se2NOOlwiY2xhc3NcIixiSzpcImNsYXNzIGludGVyZmFjZVwiLGU6L1t7Oz1dLyxlRTohMCxrOlwiY2xhc3MgaW50ZXJmYWNlXCIsaTovWzpcIlxcW1xcXV0vLGM6W3tiSzpcImV4dGVuZHMgaW1wbGVtZW50c1wifSxlLlVUTV19LHtiSzpcIm5ldyB0aHJvdyByZXR1cm5cIixyOjB9LHtjTjpcImZ1bmN0aW9uXCIsYjpcIihcIithK1wiXFxcXHMrKStcIitlLlVJUitcIlxcXFxzKlxcXFwoXCIsckI6ITAsZTovW3s7PV0vLGVFOiEwLGs6dCxjOlt7YjplLlVJUitcIlxcXFxzKlxcXFwoXCIsckI6ITAscjowLGM6W2UuVVRNXX0se2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGs6dCxyOjAsYzpbZS5BU00sZS5RU00sZS5DTk0sZS5DQkNNXX0sZS5DTENNLGUuQ0JDTV19LHIse2NOOlwiYW5ub3RhdGlvblwiLGI6XCJAW0EtWmEtel0rXCJ9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJvYmplY3RpdmVjXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2tleXdvcmQ6XCJpbnQgZmxvYXQgd2hpbGUgY2hhciBleHBvcnQgc2l6ZW9mIHR5cGVkZWYgY29uc3Qgc3RydWN0IGZvciB1bmlvbiB1bnNpZ25lZCBsb25nIHZvbGF0aWxlIHN0YXRpYyBib29sIG11dGFibGUgaWYgZG8gcmV0dXJuIGdvdG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIGFzbSBjYXNlIHNob3J0IGRlZmF1bHQgZG91YmxlIHJlZ2lzdGVyIGV4cGxpY2l0IHNpZ25lZCB0eXBlbmFtZSB0aGlzIHN3aXRjaCBjb250aW51ZSB3Y2hhcl90IGlubGluZSByZWFkb25seSBhc3NpZ24gcmVhZHdyaXRlIHNlbGYgQHN5bmNocm9uaXplZCBpZCB0eXBlb2Ygbm9uYXRvbWljIHN1cGVyIHVuaWNoYXIgSUJPdXRsZXQgSUJBY3Rpb24gc3Ryb25nIHdlYWsgY29weSBpbiBvdXQgaW5vdXQgYnljb3B5IGJ5cmVmIG9uZXdheSBfX3N0cm9uZyBfX3dlYWsgX19ibG9jayBfX2F1dG9yZWxlYXNpbmcgQHByaXZhdGUgQHByb3RlY3RlZCBAcHVibGljIEB0cnkgQHByb3BlcnR5IEBlbmQgQHRocm93IEBjYXRjaCBAZmluYWxseSBAYXV0b3JlbGVhc2Vwb29sIEBzeW50aGVzaXplIEBkeW5hbWljIEBzZWxlY3RvciBAb3B0aW9uYWwgQHJlcXVpcmVkXCIsbGl0ZXJhbDpcImZhbHNlIHRydWUgRkFMU0UgVFJVRSBuaWwgWUVTIE5PIE5VTExcIixidWlsdF9pbjpcIk5TU3RyaW5nIE5TRGF0YSBOU0RpY3Rpb25hcnkgQ0dSZWN0IENHUG9pbnQgVUlCdXR0b24gVUlMYWJlbCBVSVRleHRWaWV3IFVJV2ViVmlldyBNS01hcFZpZXcgTlNWaWV3IE5TVmlld0NvbnRyb2xsZXIgTlNXaW5kb3cgTlNXaW5kb3dDb250cm9sbGVyIE5TU2V0IE5TVVVJRCBOU0luZGV4U2V0IFVJU2VnbWVudGVkQ29udHJvbCBOU09iamVjdCBVSVRhYmxlVmlld0RlbGVnYXRlIFVJVGFibGVWaWV3RGF0YVNvdXJjZSBOU1RocmVhZCBVSUFjdGl2aXR5SW5kaWNhdG9yIFVJVGFiYmFyIFVJVG9vbEJhciBVSUJhckJ1dHRvbkl0ZW0gVUlJbWFnZVZpZXcgTlNBdXRvcmVsZWFzZVBvb2wgVUlUYWJsZVZpZXcgQk9PTCBOU0ludGVnZXIgQ0dGbG9hdCBOU0V4Y2VwdGlvbiBOU0xvZyBOU011dGFibGVTdHJpbmcgTlNNdXRhYmxlQXJyYXkgTlNNdXRhYmxlRGljdGlvbmFyeSBOU1VSTCBOU0luZGV4UGF0aCBDR1NpemUgVUlUYWJsZVZpZXdDZWxsIFVJVmlldyBVSVZpZXdDb250cm9sbGVyIFVJTmF2aWdhdGlvbkJhciBVSU5hdmlnYXRpb25Db250cm9sbGVyIFVJVGFiQmFyQ29udHJvbGxlciBVSVBvcG92ZXJDb250cm9sbGVyIFVJUG9wb3ZlckNvbnRyb2xsZXJEZWxlZ2F0ZSBVSUltYWdlIE5TTnVtYmVyIFVJU2VhcmNoQmFyIE5TRmV0Y2hlZFJlc3VsdHNDb250cm9sbGVyIE5TRmV0Y2hlZFJlc3VsdHNDaGFuZ2VUeXBlIFVJU2Nyb2xsVmlldyBVSVNjcm9sbFZpZXdEZWxlZ2F0ZSBVSUVkZ2VJbnNldHMgVUlDb2xvciBVSUZvbnQgVUlBcHBsaWNhdGlvbiBOU05vdEZvdW5kIE5TTm90aWZpY2F0aW9uQ2VudGVyIE5TTm90aWZpY2F0aW9uIFVJTG9jYWxOb3RpZmljYXRpb24gTlNCdW5kbGUgTlNGaWxlTWFuYWdlciBOU1RpbWVJbnRlcnZhbCBOU0RhdGUgTlNDYWxlbmRhciBOU1VzZXJEZWZhdWx0cyBVSVdpbmRvdyBOU1JhbmdlIE5TQXJyYXkgTlNFcnJvciBOU1VSTFJlcXVlc3QgTlNVUkxDb25uZWN0aW9uIE5TVVJMU2Vzc2lvbiBOU1VSTFNlc3Npb25EYXRhVGFzayBOU1VSTFNlc3Npb25Eb3dubG9hZFRhc2sgTlNVUkxTZXNzaW9uVXBsb2FkVGFzayBOU1VSTFJlc3BvbnNlVUlJbnRlcmZhY2VPcmllbnRhdGlvbiBNUE1vdmllUGxheWVyQ29udHJvbGxlciBkaXNwYXRjaF9vbmNlX3QgZGlzcGF0Y2hfcXVldWVfdCBkaXNwYXRjaF9zeW5jIGRpc3BhdGNoX2FzeW5jIGRpc3BhdGNoX29uY2VcIn0sbz0vW2EtekEtWkBdW2EtekEtWjAtOV9dKi8sYT1cIkBpbnRlcmZhY2UgQGNsYXNzIEBwcm90b2NvbCBAaW1wbGVtZW50YXRpb25cIjtyZXR1cm57YWxpYXNlczpbXCJtXCIsXCJtbVwiLFwib2JqY1wiLFwib2JqLWNcIl0sazp0LGw6byxpOlwiPC9cIixjOltlLkNMQ00sZS5DQkNNLGUuQ05NLGUuUVNNLHtjTjpcInN0cmluZ1wiLHY6W3tiOidAXCInLGU6J1wiJyxpOlwiXFxcXG5cIixjOltlLkJFXX0se2I6XCInXCIsZTpcIlteXFxcXFxcXFxdJ1wiLGk6XCJbXlxcXFxcXFxcXVteJ11cIn1dfSx7Y046XCJwcmVwcm9jZXNzb3JcIixiOlwiI1wiLGU6XCIkXCIsYzpbe2NOOlwidGl0bGVcIix2Olt7YjonXCInLGU6J1wiJ30se2I6XCI8XCIsZTpcIj5cIn1dfV19LHtjTjpcImNsYXNzXCIsYjpcIihcIithLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIilcXFxcYlwiLGU6XCIoe3wkKVwiLGVFOiEwLGs6YSxsOm8sYzpbZS5VVE1dfSx7Y046XCJ2YXJpYWJsZVwiLGI6XCJcXFxcLlwiK2UuVUlSLHI6MH1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImhhbmRsZWJhcnNcIixmdW5jdGlvbigpe3ZhciBlPVwiZWFjaCBpbiB3aXRoIGlmIGVsc2UgdW5sZXNzIGJpbmRhdHRyIGFjdGlvbiBjb2xsZWN0aW9uIGRlYnVnZ2VyIGxvZyBvdXRsZXQgdGVtcGxhdGUgdW5ib3VuZCB2aWV3IHlpZWxkXCI7cmV0dXJue2FsaWFzZXM6W1wiaGJzXCIsXCJodG1sLmhic1wiLFwiaHRtbC5oYW5kbGViYXJzXCJdLGNJOiEwLHNMOlwieG1sXCIsc3ViTGFuZ3VhZ2VNb2RlOlwiY29udGludW91c1wiLGM6W3tjTjpcImV4cHJlc3Npb25cIixiOlwie3tcIixlOlwifX1cIixjOlt7Y046XCJiZWdpbi1ibG9ja1wiLGI6XCIjW2EtekEtWi0gLl0rXCIsazplfSx7Y046XCJzdHJpbmdcIixiOidcIicsZTonXCInfSx7Y046XCJlbmQtYmxvY2tcIixiOlwiXFxcXC9bYS16QS1aLSAuXStcIixrOmV9LHtjTjpcInZhcmlhYmxlXCIsYjpcIlthLXpBLVotLl0rXCIsazplfV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJwaHBcIixmdW5jdGlvbihlKXt2YXIgYz17Y046XCJ2YXJpYWJsZVwiLGI6XCJcXFxcJCtbYS16QS1aX38tw79dW2EtekEtWjAtOV9/LcO/XSpcIn0saT17Y046XCJwcmVwcm9jZXNzb3JcIixiOi88XFw/KHBocCk/fFxcPz4vfSxhPXtjTjpcInN0cmluZ1wiLGM6W2UuQkUsaV0sdjpbe2I6J2JcIicsZTonXCInfSx7YjpcImInXCIsZTpcIidcIn0sZS5pbmhlcml0KGUuQVNNLHtpOm51bGx9KSxlLmluaGVyaXQoZS5RU00se2k6bnVsbH0pXX0sbj17djpbZS5CTk0sZS5DTk1dfTtyZXR1cm57YWxpYXNlczpbXCJwaHAzXCIsXCJwaHA0XCIsXCJwaHA1XCIsXCJwaHA2XCJdLGNJOiEwLGs6XCJhbmQgaW5jbHVkZV9vbmNlIGxpc3QgYWJzdHJhY3QgZ2xvYmFsIHByaXZhdGUgZWNobyBpbnRlcmZhY2UgYXMgc3RhdGljIGVuZHN3aXRjaCBhcnJheSBudWxsIGlmIGVuZHdoaWxlIG9yIGNvbnN0IGZvciBlbmRmb3JlYWNoIHNlbGYgdmFyIHdoaWxlIGlzc2V0IHB1YmxpYyBwcm90ZWN0ZWQgZXhpdCBmb3JlYWNoIHRocm93IGVsc2VpZiBpbmNsdWRlIF9fRklMRV9fIGVtcHR5IHJlcXVpcmVfb25jZSBkbyB4b3IgcmV0dXJuIHBhcmVudCBjbG9uZSB1c2UgX19DTEFTU19fIF9fTElORV9fIGVsc2UgYnJlYWsgcHJpbnQgZXZhbCBuZXcgY2F0Y2ggX19NRVRIT0RfXyBjYXNlIGV4Y2VwdGlvbiBkZWZhdWx0IGRpZSByZXF1aXJlIF9fRlVOQ1RJT05fXyBlbmRkZWNsYXJlIGZpbmFsIHRyeSBzd2l0Y2ggY29udGludWUgZW5kZm9yIGVuZGlmIGRlY2xhcmUgdW5zZXQgdHJ1ZSBmYWxzZSB0cmFpdCBnb3RvIGluc3RhbmNlb2YgaW5zdGVhZG9mIF9fRElSX18gX19OQU1FU1BBQ0VfXyB5aWVsZCBmaW5hbGx5XCIsYzpbZS5DTENNLGUuSENNLHtjTjpcImNvbW1lbnRcIixiOlwiL1xcXFwqXCIsZTpcIlxcXFwqL1wiLGM6W3tjTjpcInBocGRvY1wiLGI6XCJcXFxcc0BbQS1aYS16XStcIn0saV19LHtjTjpcImNvbW1lbnRcIixiOlwiX19oYWx0X2NvbXBpbGVyLis/O1wiLGVXOiEwLGs6XCJfX2hhbHRfY29tcGlsZXJcIixsOmUuVUlSfSx7Y046XCJzdHJpbmdcIixiOlwiPDw8WydcXFwiXT9cXFxcdytbJ1xcXCJdPyRcIixlOlwiXlxcXFx3KztcIixjOltlLkJFXX0saSxjLHtiOi8tPitbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi99LHtjTjpcImZ1bmN0aW9uXCIsYks6XCJmdW5jdGlvblwiLGU6L1s7e10vLGVFOiEwLGk6XCJcXFxcJHxcXFxcW3wlXCIsYzpbZS5VVE0se2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzpbXCJzZWxmXCIsYyxlLkNCQ00sYSxuXX1dfSx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3MgaW50ZXJmYWNlXCIsZTpcIntcIixlRTohMCxpOi9bOlxcKFxcJFwiXS8sYzpbe2JLOlwiZXh0ZW5kcyBpbXBsZW1lbnRzXCJ9LGUuVVRNXX0se2JLOlwibmFtZXNwYWNlXCIsZTpcIjtcIixpOi9bXFwuJ10vLGM6W2UuVVRNXX0se2JLOlwidXNlXCIsZTpcIjtcIixjOltlLlVUTV19LHtiOlwiPT5cIn0sYSxuXX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJtYXRsYWJcIixmdW5jdGlvbihlKXt2YXIgYT1bZS5DTk0se2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiJ1wiLGM6W2UuQkUse2I6XCInJ1wifV19XSxzPXtyOjAsYzpbe2NOOlwib3BlcmF0b3JcIixiOi8nWydcXC5dKi99XX07cmV0dXJue2s6e2tleXdvcmQ6XCJicmVhayBjYXNlIGNhdGNoIGNsYXNzZGVmIGNvbnRpbnVlIGVsc2UgZWxzZWlmIGVuZCBlbnVtZXJhdGVkIGV2ZW50cyBmb3IgZnVuY3Rpb24gZ2xvYmFsIGlmIG1ldGhvZHMgb3RoZXJ3aXNlIHBhcmZvciBwZXJzaXN0ZW50IHByb3BlcnRpZXMgcmV0dXJuIHNwbWQgc3dpdGNoIHRyeSB3aGlsZVwiLGJ1aWx0X2luOlwic2luIHNpbmQgc2luaCBhc2luIGFzaW5kIGFzaW5oIGNvcyBjb3NkIGNvc2ggYWNvcyBhY29zZCBhY29zaCB0YW4gdGFuZCB0YW5oIGF0YW4gYXRhbmQgYXRhbjIgYXRhbmggc2VjIHNlY2Qgc2VjaCBhc2VjIGFzZWNkIGFzZWNoIGNzYyBjc2NkIGNzY2ggYWNzYyBhY3NjZCBhY3NjaCBjb3QgY290ZCBjb3RoIGFjb3QgYWNvdGQgYWNvdGggaHlwb3QgZXhwIGV4cG0xIGxvZyBsb2cxcCBsb2cxMCBsb2cyIHBvdzIgcmVhbHBvdyByZWFsbG9nIHJlYWxzcXJ0IHNxcnQgbnRocm9vdCBuZXh0cG93MiBhYnMgYW5nbGUgY29tcGxleCBjb25qIGltYWcgcmVhbCB1bndyYXAgaXNyZWFsIGNwbHhwYWlyIGZpeCBmbG9vciBjZWlsIHJvdW5kIG1vZCByZW0gc2lnbiBhaXJ5IGJlc3NlbGogYmVzc2VseSBiZXNzZWxoIGJlc3NlbGkgYmVzc2VsayBiZXRhIGJldGFpbmMgYmV0YWxuIGVsbGlwaiBlbGxpcGtlIGVyZiBlcmZjIGVyZmN4IGVyZmludiBleHBpbnQgZ2FtbWEgZ2FtbWFpbmMgZ2FtbWFsbiBwc2kgbGVnZW5kcmUgY3Jvc3MgZG90IGZhY3RvciBpc3ByaW1lIHByaW1lcyBnY2QgbGNtIHJhdCByYXRzIHBlcm1zIG5jaG9vc2VrIGZhY3RvcmlhbCBjYXJ0MnNwaCBjYXJ0MnBvbCBwb2wyY2FydCBzcGgyY2FydCBoc3YycmdiIHJnYjJoc3YgemVyb3Mgb25lcyBleWUgcmVwbWF0IHJhbmQgcmFuZG4gbGluc3BhY2UgbG9nc3BhY2UgZnJlcXNwYWNlIG1lc2hncmlkIGFjY3VtYXJyYXkgc2l6ZSBsZW5ndGggbmRpbXMgbnVtZWwgZGlzcCBpc2VtcHR5IGlzZXF1YWwgaXNlcXVhbHdpdGhlcXVhbG5hbnMgY2F0IHJlc2hhcGUgZGlhZyBibGtkaWFnIHRyaWwgdHJpdSBmbGlwbHIgZmxpcHVkIGZsaXBkaW0gcm90OTAgZmluZCBzdWIyaW5kIGluZDJzdWIgYnN4ZnVuIG5kZ3JpZCBwZXJtdXRlIGlwZXJtdXRlIHNoaWZ0ZGltIGNpcmNzaGlmdCBzcXVlZXplIGlzc2NhbGFyIGlzdmVjdG9yIGFucyBlcHMgcmVhbG1heCByZWFsbWluIHBpIGkgaW5mIG5hbiBpc25hbiBpc2luZiBpc2Zpbml0ZSBqIHdoeSBjb21wYW4gZ2FsbGVyeSBoYWRhbWFyZCBoYW5rZWwgaGlsYiBpbnZoaWxiIG1hZ2ljIHBhc2NhbCByb3NzZXIgdG9lcGxpdHogdmFuZGVyIHdpbGtpbnNvblwifSxpOicoLy98XCJ8I3wvXFxcXCp8XFxcXHMrL1xcXFx3KyknLGM6W3tjTjpcImZ1bmN0aW9uXCIsYks6XCJmdW5jdGlvblwiLGU6XCIkXCIsYzpbZS5VVE0se2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZTpcIlxcXFwpXCJ9LHtjTjpcInBhcmFtc1wiLGI6XCJcXFxcW1wiLGU6XCJcXFxcXVwifV19LHtiOi9bYS16QS1aX11bYS16QS1aXzAtOV0qJ1snXFwuXSovLHJCOiEwLHI6MCxjOlt7YjovW2EtekEtWl9dW2EtekEtWl8wLTldKi8scjowfSxzLmNbMF1dfSx7Y046XCJtYXRyaXhcIixiOlwiXFxcXFtcIixlOlwiXFxcXF1cIixjOmEscjowLHN0YXJ0czpzfSx7Y046XCJjZWxsXCIsYjpcIlxcXFx7XCIsZTovXFx9LyxjOmEscjowLGk6LzovLHN0YXJ0czpzfSx7YjovXFwpLyxyOjAsc3RhcnRzOnN9LHtjTjpcImNvbW1lbnRcIixiOlwiXFxcXCVcIixlOlwiJFwifV0uY29uY2F0KGEpfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImNvZmZlZXNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZhciBjPXtrZXl3b3JkOlwiaW4gaWYgZm9yIHdoaWxlIGZpbmFsbHkgbmV3IGRvIHJldHVybiBlbHNlIGJyZWFrIGNhdGNoIGluc3RhbmNlb2YgdGhyb3cgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHR5cGVvZiBkZWxldGUgZGVidWdnZXIgc3VwZXIgdGhlbiB1bmxlc3MgdW50aWwgbG9vcCBvZiBieSB3aGVuIGFuZCBvciBpcyBpc250IG5vdFwiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGwgdW5kZWZpbmVkIHllcyBubyBvbiBvZmZcIixyZXNlcnZlZDpcImNhc2UgZGVmYXVsdCBmdW5jdGlvbiB2YXIgdm9pZCB3aXRoIGNvbnN0IGxldCBlbnVtIGV4cG9ydCBpbXBvcnQgbmF0aXZlIF9faGFzUHJvcCBfX2V4dGVuZHMgX19zbGljZSBfX2JpbmQgX19pbmRleE9mXCIsYnVpbHRfaW46XCJucG0gcmVxdWlyZSBjb25zb2xlIHByaW50IG1vZHVsZSBnbG9iYWwgd2luZG93IGRvY3VtZW50XCJ9LG49XCJbQS1aYS16JF9dWzAtOUEtWmEteiRfXSpcIix0PXtjTjpcInN1YnN0XCIsYjovI1xcey8sZTovfS8sazpjfSxyPVtlLkJOTSxlLmluaGVyaXQoZS5DTk0se3N0YXJ0czp7ZTpcIihcXFxccyovKT9cIixyOjB9fSkse2NOOlwic3RyaW5nXCIsdjpbe2I6LycnJy8sZTovJycnLyxjOltlLkJFXX0se2I6LycvLGU6LycvLGM6W2UuQkVdfSx7YjovXCJcIlwiLyxlOi9cIlwiXCIvLGM6W2UuQkUsdF19LHtiOi9cIi8sZTovXCIvLGM6W2UuQkUsdF19XX0se2NOOlwicmVnZXhwXCIsdjpbe2I6XCIvLy9cIixlOlwiLy8vXCIsYzpbdCxlLkhDTV19LHtiOlwiLy9bZ2ltXSpcIixyOjB9LHtiOi9cXC8oPyFbICpdKShcXFxcXFwvfC4pKj9cXC9bZ2ltXSooPz1cXFd8JCkvfV19LHtjTjpcInByb3BlcnR5XCIsYjpcIkBcIitufSx7YjpcImBcIixlOlwiYFwiLGVCOiEwLGVFOiEwLHNMOlwiamF2YXNjcmlwdFwifV07dC5jPXI7dmFyIGk9ZS5pbmhlcml0KGUuVE0se2I6bn0pLHM9XCIoXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstPV0+XCIsbz17Y046XCJwYXJhbXNcIixiOlwiXFxcXChbXlxcXFwoXVwiLHJCOiEwLGM6W3tiOi9cXCgvLGU6L1xcKS8sazpjLGM6W1wic2VsZlwiXS5jb25jYXQocil9XX07cmV0dXJue2FsaWFzZXM6W1wiY29mZmVlXCIsXCJjc29uXCIsXCJpY2VkXCJdLGs6YyxpOi9cXC9cXCovLGM6ci5jb25jYXQoW3tjTjpcImNvbW1lbnRcIixiOlwiIyMjXCIsZTpcIiMjI1wiLGM6W2UuUFdNXX0sZS5IQ00se2NOOlwiZnVuY3Rpb25cIixiOlwiXlxcXFxzKlwiK24rXCJcXFxccyo9XFxcXHMqXCIrcyxlOlwiWy09XT5cIixyQjohMCxjOltpLG9dfSx7YjovWzpcXCgsPV1cXHMqLyxyOjAsYzpbe2NOOlwiZnVuY3Rpb25cIixiOnMsZTpcIlstPV0+XCIsckI6ITAsYzpbb119XX0se2NOOlwiY2xhc3NcIixiSzpcImNsYXNzXCIsZTpcIiRcIixpOi9bOj1cIlxcW1xcXV0vLGM6W3tiSzpcImV4dGVuZHNcIixlVzohMCxpOi9bOj1cIlxcW1xcXV0vLGM6W2ldfSxpXX0se2NOOlwiYXR0cmlidXRlXCIsYjpuK1wiOlwiLGU6XCI6XCIsckI6ITAsckU6ITAscjowfV0pfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImluaVwiLGZ1bmN0aW9uKGUpe3JldHVybntjSTohMCxpOi9cXFMvLGM6W3tjTjpcImNvbW1lbnRcIixiOlwiO1wiLGU6XCIkXCJ9LHtjTjpcInRpdGxlXCIsYjpcIl5cXFxcW1wiLGU6XCJcXFxcXVwifSx7Y046XCJzZXR0aW5nXCIsYjpcIl5bYS16MC05XFxcXFtcXFxcXV8tXStbIFxcXFx0XSo9WyBcXFxcdF0qXCIsZTpcIiRcIixjOlt7Y046XCJ2YWx1ZVwiLGVXOiEwLGs6XCJvbiBvZmYgdHJ1ZSBmYWxzZSB5ZXMgbm9cIixjOltlLlFTTSxlLk5NXSxyOjB9XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImdyb292eVwiLGZ1bmN0aW9uKGUpe3JldHVybntrOnt0eXBlbmFtZTpcImJ5dGUgc2hvcnQgY2hhciBpbnQgbG9uZyBib29sZWFuIGZsb2F0IGRvdWJsZSB2b2lkXCIsbGl0ZXJhbDpcInRydWUgZmFsc2UgbnVsbFwiLGtleXdvcmQ6XCJkZWYgYXMgaW4gYXNzZXJ0IHRyYWl0IHN1cGVyIHRoaXMgYWJzdHJhY3Qgc3RhdGljIHZvbGF0aWxlIHRyYW5zaWVudCBwdWJsaWMgcHJpdmF0ZSBwcm90ZWN0ZWQgc3luY2hyb25pemVkIGZpbmFsIGNsYXNzIGludGVyZmFjZSBlbnVtIGlmIGVsc2UgZm9yIHdoaWxlIHN3aXRjaCBjYXNlIGJyZWFrIGRlZmF1bHQgY29udGludWUgdGhyb3cgdGhyb3dzIHRyeSBjYXRjaCBmaW5hbGx5IGltcGxlbWVudHMgZXh0ZW5kcyBuZXcgaW1wb3J0IHBhY2thZ2UgcmV0dXJuIGluc3RhbmNlb2ZcIn0sYzpbZS5DTENNLHtjTjpcImphdmFkb2NcIixiOlwiL1xcXFwqXFxcXCpcIixlOlwiXFxcXCovLypcIixyOjAsYzpbe2NOOlwiamF2YWRvY3RhZ1wiLGI6XCIoXnxcXFxccylAW0EtWmEtel0rXCJ9XX0sZS5DQkNNLHtjTjpcInN0cmluZ1wiLGI6J1wiXCJcIicsZTonXCJcIlwiJ30se2NOOlwic3RyaW5nXCIsYjpcIicnJ1wiLGU6XCInJydcIn0se2NOOlwic3RyaW5nXCIsYjpcIlxcXFwkL1wiLGU6XCIvXFxcXCRcIixyOjEwfSxlLkFTTSx7Y046XCJyZWdleHBcIixiOi9+P1xcL1teXFwvXFxuXStcXC8vLGM6W2UuQkVdfSxlLlFTTSx7Y046XCJzaGViYW5nXCIsYjpcIl4jIS91c3IvYmluL2VudlwiLGU6XCIkXCIsaTpcIlxcblwifSxlLkJOTSx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3MgaW50ZXJmYWNlIHRyYWl0IGVudW1cIixlOlwie1wiLGk6XCI6XCIsYzpbe2JLOlwiZXh0ZW5kcyBpbXBsZW1lbnRzXCJ9LGUuVVRNXX0sZS5DTk0se2NOOlwiYW5ub3RhdGlvblwiLGI6XCJAW0EtWmEtel0rXCJ9LHtjTjpcInN0cmluZ1wiLGI6L1teXFw/XXswfVtBLVphLXowLTlfJF0rICo6L30se2I6L1xcPy8sZTovXFw6L30se2NOOlwibGFiZWxcIixiOlwiXlxcXFxzKltBLVphLXowLTlfJF0rOlwiLHI6MH1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInJcIixmdW5jdGlvbihlKXt2YXIgcj1cIihbYS16QS1aXXxcXFxcLlthLXpBLVouXSlbYS16QS1aMC05Ll9dKlwiO3JldHVybntjOltlLkhDTSx7YjpyLGw6cixrOntrZXl3b3JkOlwiZnVuY3Rpb24gaWYgaW4gYnJlYWsgbmV4dCByZXBlYXQgZWxzZSBmb3IgcmV0dXJuIHN3aXRjaCB3aGlsZSB0cnkgdHJ5Q2F0Y2h8MTAgc3RvcCB3YXJuaW5nIHJlcXVpcmUgbGlicmFyeSBhdHRhY2ggZGV0YWNoIHNvdXJjZSBzZXRNZXRob2Qgc2V0R2VuZXJpYyBzZXRHcm91cEdlbmVyaWMgc2V0Q2xhc3MgLi4ufDEwXCIsbGl0ZXJhbDpcIk5VTEwgTkEgVFJVRSBGQUxTRSBUIEYgSW5mIE5hTiBOQV9pbnRlZ2VyX3wxMCBOQV9yZWFsX3wxMCBOQV9jaGFyYWN0ZXJffDEwIE5BX2NvbXBsZXhffDEwXCJ9LHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIjBbeFhdWzAtOWEtZkEtRl0rW0xpXT9cXFxcYlwiLHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxkKyg/OltlRV1bK1xcXFwtXT9cXFxcZCopP0xcXFxcYlwiLHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxkK1xcXFwuKD8hXFxcXGQpKD86aVxcXFxiKT9cIixyOjB9LHtjTjpcIm51bWJlclwiLGI6XCJcXFxcZCsoPzpcXFxcLlxcXFxkKik/KD86W2VFXVsrXFxcXC1dP1xcXFxkKik/aT9cXFxcYlwiLHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFwuXFxcXGQrKD86W2VFXVsrXFxcXC1dP1xcXFxkKik/aT9cXFxcYlwiLHI6MH0se2I6XCJgXCIsZTpcImBcIixyOjB9LHtjTjpcInN0cmluZ1wiLGM6W2UuQkVdLHY6W3tiOidcIicsZTonXCInfSx7YjpcIidcIixlOlwiJ1wifV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJlbGl4aXJcIixmdW5jdGlvbihlKXt2YXIgcj1cIlthLXpBLVpfXVthLXpBLVowLTlfXSooXFxcXCF8XFxcXD8pP1wiLGI9XCJbYS16QS1aX11cXFxcdypbIT89XT98Wy0rfl1cXFxcQHw8PHw+Pnw9fnw9PT0/fDw9PnxbPD5dPT98XFxcXCpcXFxcKnxbLS8rJV4mKn5gfF18XFxcXFtcXFxcXT0/XCIsbj1cImFuZCBmYWxzZSB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIHJldHJ5IGVuZCBmb3IgdHJ1ZSBzZWxmIHdoZW4gbmV4dCB1bnRpbCBkbyBiZWdpbiB1bmxlc3MgbmlsIGJyZWFrIG5vdCBjYXNlIGNvbmQgYWxpYXMgd2hpbGUgZW5zdXJlIG9yIGluY2x1ZGUgdXNlIGFsaWFzIGZuIHF1b3RlXCIsYz17Y046XCJzdWJzdFwiLGI6XCIjXFxcXHtcIixlOlwifVwiLGw6cixrOm59LGE9e2NOOlwic3RyaW5nXCIsYzpbZS5CRSxjXSx2Olt7YjovJy8sZTovJy99LHtiOi9cIi8sZTovXCIvfV19LHM9e2VXOiEwLHJFOiEwLGw6cixrOm4scjowfSxpPXtjTjpcImZ1bmN0aW9uXCIsYks6XCJkZWYgZGVmbWFjcm9cIixlOi9cXGJkb1xcYi8sYzpbZS5pbmhlcml0KGUuVE0se2I6YixzdGFydHM6c30pXX0sbD1lLmluaGVyaXQoaSx7Y046XCJjbGFzc1wiLGJLOlwiZGVmbW9kdWxlIGRlZnJlY29yZFwiLGU6L1xcYmRvXFxifCR8Oy99KSx0PVthLGUuSENNLGwsaSx7Y046XCJjb25zdGFudFwiLGI6XCIoXFxcXGJbQS1aX11cXFxcdyooLik/KStcIixyOjB9LHtjTjpcInN5bWJvbFwiLGI6XCI6XCIsYzpbYSx7YjpifV0scjowfSx7Y046XCJzeW1ib2xcIixiOnIrXCI6XCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGJcIixyOjB9LHtjTjpcInZhcmlhYmxlXCIsYjpcIihcXFxcJFxcXFxXKXwoKFxcXFwkfFxcXFxAXFxcXEA/KShcXFxcdyspKVwifSx7YjpcIi0+XCJ9LHtiOlwiKFwiK2UuUlNSK1wiKVxcXFxzKlwiLGM6W2UuSENNLHtjTjpcInJlZ2V4cFwiLGk6XCJcXFxcblwiLGM6W2UuQkUsY10sdjpbe2I6XCIvXCIsZTpcIi9bYS16XSpcIn0se2I6XCIlclxcXFxbXCIsZTpcIlxcXFxdW2Etel0qXCJ9XX1dLHI6MH1dO3JldHVybiBjLmM9dCxzLmM9dCx7bDpyLGs6bixjOnR9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZ29cIixmdW5jdGlvbihlKXt2YXIgdD17a2V5d29yZDpcImJyZWFrIGRlZmF1bHQgZnVuYyBpbnRlcmZhY2Ugc2VsZWN0IGNhc2UgbWFwIHN0cnVjdCBjaGFuIGVsc2UgZ290byBwYWNrYWdlIHN3aXRjaCBjb25zdCBmYWxsdGhyb3VnaCBpZiByYW5nZSB0eXBlIGNvbnRpbnVlIGZvciBpbXBvcnQgcmV0dXJuIHZhciBnbyBkZWZlclwiLGNvbnN0YW50OlwidHJ1ZSBmYWxzZSBpb3RhIG5pbFwiLHR5cGVuYW1lOlwiYm9vbCBieXRlIGNvbXBsZXg2NCBjb21wbGV4MTI4IGZsb2F0MzIgZmxvYXQ2NCBpbnQ4IGludDE2IGludDMyIGludDY0IHN0cmluZyB1aW50OCB1aW50MTYgdWludDMyIHVpbnQ2NCBpbnQgdWludCB1aW50cHRyIHJ1bmVcIixidWlsdF9pbjpcImFwcGVuZCBjYXAgY2xvc2UgY29tcGxleCBjb3B5IGltYWcgbGVuIG1ha2UgbmV3IHBhbmljIHByaW50IHByaW50bG4gcmVhbCByZWNvdmVyIGRlbGV0ZVwifTtyZXR1cm57YWxpYXNlczpbXCJnb2xhbmdcIl0sazp0LGk6XCI8L1wiLGM6W2UuQ0xDTSxlLkNCQ00sZS5RU00se2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiW15cXFxcXFxcXF0nXCJ9LHtjTjpcInN0cmluZ1wiLGI6XCJgXCIsZTpcImBcIn0se2NOOlwibnVtYmVyXCIsYjplLkNOUitcIltkZmxzaV0/XCIscjowfSxlLkNOTV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwic3FsXCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2NOOlwiY29tbWVudFwiLGI6XCItLVwiLGU6XCIkXCJ9O3JldHVybntjSTohMCxpOi9bPD5dLyxjOlt7Y046XCJvcGVyYXRvclwiLGJLOlwiYmVnaW4gZW5kIHN0YXJ0IGNvbW1pdCByb2xsYmFjayBzYXZlcG9pbnQgbG9jayBhbHRlciBjcmVhdGUgZHJvcCByZW5hbWUgY2FsbCBkZWxldGUgZG8gaGFuZGxlciBpbnNlcnQgbG9hZCByZXBsYWNlIHNlbGVjdCB0cnVuY2F0ZSB1cGRhdGUgc2V0IHNob3cgcHJhZ21hIGdyYW50IG1lcmdlIGRlc2NyaWJlIHVzZSBleHBsYWluIGhlbHAgZGVjbGFyZSBwcmVwYXJlIGV4ZWN1dGUgZGVhbGxvY2F0ZSBzYXZlcG9pbnQgcmVsZWFzZSB1bmxvY2sgcHVyZ2UgcmVzZXQgY2hhbmdlIHN0b3AgYW5hbHl6ZSBjYWNoZSBmbHVzaCBvcHRpbWl6ZSByZXBhaXIga2lsbCBpbnN0YWxsIHVuaW5zdGFsbCBjaGVja3N1bSByZXN0b3JlIGNoZWNrIGJhY2t1cFwiLGU6LzsvLGVXOiEwLGs6e2tleXdvcmQ6XCJhYnMgYWJzb2x1dGUgYWNvcyBhY3Rpb24gYWRkIGFkZGRhdGUgYWRkdGltZSBhZXNfZGVjcnlwdCBhZXNfZW5jcnlwdCBhZnRlciBhZ2dyZWdhdGUgYWxsIGFsbG9jYXRlIGFsdGVyIGFuYWx5emUgYW5kIGFueSBhcmUgYXMgYXNjIGFzY2lpIGFzaW4gYXNzZXJ0aW9uIGF0IGF0YW4gYXRhbjIgYXRuMiBhdXRob3JpemF0aW9uIGF1dGhvcnMgYXZnIGJhY2t1cCBiZWZvcmUgYmVnaW4gYmVuY2htYXJrIGJldHdlZW4gYmluIGJpbmxvZyBiaXRfYW5kIGJpdF9jb3VudCBiaXRfbGVuZ3RoIGJpdF9vciBiaXRfeG9yIGJvdGggYnkgY2FjaGUgY2FsbCBjYXNjYWRlIGNhc2NhZGVkIGNhc2UgY2FzdCBjYXRhbG9nIGNlaWwgY2VpbGluZyBjaGFpbiBjaGFuZ2UgY2hhbmdlZCBjaGFyX2xlbmd0aCBjaGFyYWN0ZXJfbGVuZ3RoIGNoYXJpbmRleCBjaGFyc2V0IGNoZWNrIGNoZWNrc3VtIGNoZWNrc3VtX2FnZyBjaG9vc2UgY2xvc2UgY29hbGVzY2UgY29lcmNpYmlsaXR5IGNvbGxhdGUgY29sbGF0aW9uIGNvbGxhdGlvbnByb3BlcnR5IGNvbHVtbiBjb2x1bW5zIGNvbHVtbnNfdXBkYXRlZCBjb21taXQgY29tcHJlc3MgY29uY2F0IGNvbmNhdF93cyBjb25jdXJyZW50IGNvbm5lY3QgY29ubmVjdGlvbiBjb25uZWN0aW9uX2lkIGNvbnNpc3RlbnQgY29uc3RyYWludCBjb25zdHJhaW50cyBjb250aW51ZSBjb250cmlidXRvcnMgY29udiBjb252ZXJ0IGNvbnZlcnRfdHogY29ycmVzcG9uZGluZyBjb3MgY290IGNvdW50IGNvdW50X2JpZyBjcmMzMiBjcmVhdGUgY3Jvc3MgY3VtZV9kaXN0IGN1cmRhdGUgY3VycmVudCBjdXJyZW50X2RhdGUgY3VycmVudF90aW1lIGN1cnJlbnRfdGltZXN0YW1wIGN1cnJlbnRfdXNlciBjdXJzb3IgY3VydGltZSBkYXRhIGRhdGFiYXNlIGRhdGFiYXNlcyBkYXRhbGVuZ3RoIGRhdGVfYWRkIGRhdGVfZm9ybWF0IGRhdGVfc3ViIGRhdGVhZGQgZGF0ZWRpZmYgZGF0ZWZyb21wYXJ0cyBkYXRlbmFtZSBkYXRlcGFydCBkYXRldGltZTJmcm9tcGFydHMgZGF0ZXRpbWVvZmZzZXRmcm9tcGFydHMgZGF5IGRheW5hbWUgZGF5b2Ztb250aCBkYXlvZndlZWsgZGF5b2Z5ZWFyIGRlYWxsb2NhdGUgZGVjbGFyZSBkZWNvZGUgZGVmYXVsdCBkZWZlcnJhYmxlIGRlZmVycmVkIGRlZ3JlZXMgZGVsYXllZCBkZWxldGUgZGVzX2RlY3J5cHQgZGVzX2VuY3J5cHQgZGVzX2tleV9maWxlIGRlc2MgZGVzY3JpYmUgZGVzY3JpcHRvciBkaWFnbm9zdGljcyBkaWZmZXJlbmNlIGRpc2Nvbm5lY3QgZGlzdGluY3QgZGlzdGluY3Ryb3cgZGl2IGRvIGRvbWFpbiBkb3VibGUgZHJvcCBkdW1wZmlsZSBlYWNoIGVsc2UgZWx0IGVuY2xvc2VkIGVuY29kZSBlbmNyeXB0IGVuZCBlbmQtZXhlYyBlbmdpbmUgZW5naW5lcyBlb21vbnRoIGVycm9ycyBlc2NhcGUgZXNjYXBlZCBldmVudCBldmVudGRhdGEgZXZlbnRzIGV4Y2VwdCBleGNlcHRpb24gZXhlYyBleGVjdXRlIGV4aXN0cyBleHAgZXhwbGFpbiBleHBvcnRfc2V0IGV4dGVuZGVkIGV4dGVybmFsIGV4dHJhY3QgZmFzdCBmZXRjaCBmaWVsZCBmaWVsZHMgZmluZF9pbl9zZXQgZmlyc3QgZmlyc3RfdmFsdWUgZmxvb3IgZmx1c2ggZm9yIGZvcmNlIGZvcmVpZ24gZm9ybWF0IGZvdW5kIGZvdW5kX3Jvd3MgZnJvbSBmcm9tX2Jhc2U2NCBmcm9tX2RheXMgZnJvbV91bml4dGltZSBmdWxsIGZ1bmN0aW9uIGdldCBnZXRfZm9ybWF0IGdldF9sb2NrIGdldGRhdGUgZ2V0dXRjZGF0ZSBnbG9iYWwgZ28gZ290byBncmFudCBncmFudHMgZ3JlYXRlc3QgZ3JvdXAgZ3JvdXBfY29uY2F0IGdyb3VwaW5nIGdyb3VwaW5nX2lkIGd0aWRfc3Vic2V0IGd0aWRfc3VidHJhY3QgaGFuZGxlciBoYXZpbmcgaGVscCBoZXggaGlnaF9wcmlvcml0eSBob3N0cyBob3VyIGlkZW50X2N1cnJlbnQgaWRlbnRfaW5jciBpZGVudF9zZWVkIGlkZW50aWZpZWQgaWRlbnRpdHkgaWYgaWZudWxsIGlnbm9yZSBpaWYgaWxpa2UgaW1tZWRpYXRlIGluIGluZGV4IGluZGljYXRvciBpbmV0Nl9hdG9uIGluZXQ2X250b2EgaW5ldF9hdG9uIGluZXRfbnRvYSBpbmZpbGUgaW5pdGlhbGx5IGlubmVyIGlubm9kYiBpbnB1dCBpbnNlcnQgaW5zdGFsbCBpbnN0ciBpbnRlcnNlY3QgaW50byBpcyBpc19mcmVlX2xvY2sgaXNfaXB2NCBpc19pcHY0X2NvbXBhdCBpc19pcHY0X21hcHBlZCBpc19ub3QgaXNfbm90X251bGwgaXNfdXNlZF9sb2NrIGlzZGF0ZSBpc251bGwgaXNvbGF0aW9uIGpvaW4ga2V5IGtpbGwgbGFuZ3VhZ2UgbGFzdCBsYXN0X2RheSBsYXN0X2luc2VydF9pZCBsYXN0X3ZhbHVlIGxjYXNlIGxlYWQgbGVhZGluZyBsZWFzdCBsZWF2ZXMgbGVmdCBsZW4gbGVuZ2h0IGxldmVsIGxpa2UgbGltaXQgbGluZXMgbG4gbG9hZCBsb2FkX2ZpbGUgbG9jYWwgbG9jYWx0aW1lIGxvY2FsdGltZXN0YW1wIGxvY2F0ZSBsb2NrIGxvZyBsb2cxMCBsb2cyIGxvZ2ZpbGUgbG9ncyBsb3dfcHJpb3JpdHkgbG93ZXIgbHBhZCBsdHJpbSBtYWtlX3NldCBtYWtlZGF0ZSBtYWtldGltZSBtYXN0ZXIgbWFzdGVyX3Bvc193YWl0IG1hdGNoIG1hdGNoZWQgbWF4IG1kNSBtZWRpdW0gbWVyZ2UgbWljcm9zZWNvbmQgbWlkIG1pbiBtaW51dGUgbW9kIG1vZGUgbW9kdWxlIG1vbnRoIG1vbnRobmFtZSBtdXRleCBuYW1lX2NvbnN0IG5hbWVzIG5hdGlvbmFsIG5hdHVyYWwgbmNoYXIgbmV4dCBubyBub193cml0ZV90b19iaW5sb2cgbm90IG5vdyBudWxsaWYgbnZhcmNoYXIgb2N0IG9jdGV0X2xlbmd0aCBvZiBvbGRfcGFzc3dvcmQgb24gb25seSBvcGVuIG9wdGltaXplIG9wdGlvbiBvcHRpb25hbGx5IG9yIG9yZCBvcmRlciBvdXRlciBvdXRmaWxlIG91dHB1dCBwYWQgcGFyc2UgcGFydGlhbCBwYXJ0aXRpb24gcGFzc3dvcmQgcGF0aW5kZXggcGVyY2VudF9yYW5rIHBlcmNlbnRpbGVfY29udCBwZXJjZW50aWxlX2Rpc2MgcGVyaW9kX2FkZCBwZXJpb2RfZGlmZiBwaSBwbHVnaW4gcG9zaXRpb24gcG93IHBvd2VyIHByYWdtYSBwcmVjaXNpb24gcHJlcGFyZSBwcmVzZXJ2ZSBwcmltYXJ5IHByaW9yIHByaXZpbGVnZXMgcHJvY2VkdXJlIHByb2NlZHVyZV9hbmFseXplIHByb2Nlc3NsaXN0IHByb2ZpbGUgcHJvZmlsZXMgcHVibGljIHB1Ymxpc2hpbmdzZXJ2ZXJuYW1lIHB1cmdlIHF1YXJ0ZXIgcXVlcnkgcXVpY2sgcXVvdGUgcXVvdGVuYW1lIHJhZGlhbnMgcmFuZCByZWFkIHJlZmVyZW5jZXMgcmVnZXhwIHJlbGF0aXZlIHJlbGF5bG9nIHJlbGVhc2UgcmVsZWFzZV9sb2NrIHJlbmFtZSByZXBhaXIgcmVwZWF0IHJlcGxhY2UgcmVwbGljYXRlIHJlc2V0IHJlc3RvcmUgcmVzdHJpY3QgcmV0dXJuIHJldHVybnMgcmV2ZXJzZSByZXZva2UgcmlnaHQgcmxpa2Ugcm9sbGJhY2sgcm9sbHVwIHJvdW5kIHJvdyByb3dfY291bnQgcm93cyBycGFkIHJ0cmltIHNhdmVwb2ludCBzY2hlbWEgc2Nyb2xsIHNlY190b190aW1lIHNlY29uZCBzZWN0aW9uIHNlbGVjdCBzZXJpYWxpemFibGUgc2VydmVyIHNlc3Npb24gc2Vzc2lvbl91c2VyIHNldCBzaGEgc2hhMSBzaGEyIHNoYXJlIHNob3cgc2lnbiBzaW4gc2l6ZSBzbGF2ZSBzbGVlcCBzbWFsbGRhdGV0aW1lZnJvbXBhcnRzIHNuYXBzaG90IHNvbWUgc29uYW1lIHNvdW5kZXggc291bmRzX2xpa2Ugc3BhY2Ugc3FsIHNxbF9iaWdfcmVzdWx0IHNxbF9idWZmZXJfcmVzdWx0IHNxbF9jYWNoZSBzcWxfY2FsY19mb3VuZF9yb3dzIHNxbF9ub19jYWNoZSBzcWxfc21hbGxfcmVzdWx0IHNxbF92YXJpYW50X3Byb3BlcnR5IHNxbHN0YXRlIHNxcnQgc3F1YXJlIHN0YXJ0IHN0YXJ0aW5nIHN0YXR1cyBzdGQgc3RkZGV2IHN0ZGRldl9wb3Agc3RkZGV2X3NhbXAgc3RkZXYgc3RkZXZwIHN0b3Agc3RyIHN0cl90b19kYXRlIHN0cmFpZ2h0X2pvaW4gc3RyY21wIHN0cmluZyBzdHVmZiBzdWJkYXRlIHN1YnN0ciBzdWJzdHJpbmcgc3VidGltZSBzdWJ0cmluZ19pbmRleCBzdW0gc3dpdGNob2Zmc2V0IHN5c2RhdGUgc3lzZGF0ZXRpbWUgc3lzZGF0ZXRpbWVvZmZzZXQgc3lzdGVtX3VzZXIgc3lzdXRjZGF0ZXRpbWUgdGFibGUgdGFibGVzIHRhYmxlc3BhY2UgdGFuIHRlbXBvcmFyeSB0ZXJtaW5hdGVkIHRlcnRpYXJ5X3dlaWdodHMgdGhlbiB0aW1lIHRpbWVfZm9ybWF0IHRpbWVfdG9fc2VjIHRpbWVkaWZmIHRpbWVmcm9tcGFydHMgdGltZXN0YW1wIHRpbWVzdGFtcGFkZCB0aW1lc3RhbXBkaWZmIHRpbWV6b25lX2hvdXIgdGltZXpvbmVfbWludXRlIHRvIHRvX2Jhc2U2NCB0b19kYXlzIHRvX3NlY29uZHMgdG9kYXRldGltZW9mZnNldCB0cmFpbGluZyB0cmFuc2FjdGlvbiB0cmFuc2xhdGlvbiB0cmlnZ2VyIHRyaWdnZXJfbmVzdGxldmVsIHRyaWdnZXJzIHRyaW0gdHJ1bmNhdGUgdHJ5X2Nhc3QgdHJ5X2NvbnZlcnQgdHJ5X3BhcnNlIHVjYXNlIHVuY29tcHJlc3MgdW5jb21wcmVzc2VkX2xlbmd0aCB1bmhleCB1bmljb2RlIHVuaW5zdGFsbCB1bmlvbiB1bmlxdWUgdW5peF90aW1lc3RhbXAgdW5rbm93biB1bmxvY2sgdXBkYXRlIHVwZ3JhZGUgdXBwZWQgdXBwZXIgdXNhZ2UgdXNlIHVzZXIgdXNlcl9yZXNvdXJjZXMgdXNpbmcgdXRjX2RhdGUgdXRjX3RpbWUgdXRjX3RpbWVzdGFtcCB1dWlkIHV1aWRfc2hvcnQgdmFsaWRhdGVfcGFzc3dvcmRfc3RyZW5ndGggdmFsdWUgdmFsdWVzIHZhciB2YXJfcG9wIHZhcl9zYW1wIHZhcmlhYmxlcyB2YXJpYW5jZSB2YXJwIHZlcnNpb24gdmlldyB3YXJuaW5ncyB3ZWVrIHdlZWtkYXkgd2Vla29meWVhciB3ZWlnaHRfc3RyaW5nIHdoZW4gd2hlbmV2ZXIgd2hlcmUgd2l0aCB3b3JrIHdyaXRlIHhtbCB4b3IgeWVhciB5ZWFyd2VlayB6b25cIixsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsXCIsYnVpbHRfaW46XCJhcnJheSBiaWdpbnQgYmluYXJ5IGJpdCBibG9iIGJvb2xlYW4gY2hhciBjaGFyYWN0ZXIgZGF0ZSBkZWMgZGVjaW1hbCBmbG9hdCBpbnQgaW50ZWdlciBpbnRlcnZhbCBudW1iZXIgbnVtZXJpYyByZWFsIHNlcmlhbCBzbWFsbGludCB2YXJjaGFyIHZhcnlpbmcgaW50OCBzZXJpYWw4IHRleHRcIn0sYzpbe2NOOlwic3RyaW5nXCIsYjpcIidcIixlOlwiJ1wiLGM6W2UuQkUse2I6XCInJ1wifV19LHtjTjpcInN0cmluZ1wiLGI6J1wiJyxlOidcIicsYzpbZS5CRSx7YjonXCJcIid9XX0se2NOOlwic3RyaW5nXCIsYjpcImBcIixlOlwiYFwiLGM6W2UuQkVdfSxlLkNOTSxlLkNCQ00sdF19LGUuQ0JDTSx0XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJ0ZXhcIixmdW5jdGlvbigpe3ZhciBjPXtjTjpcImNvbW1hbmRcIixiOlwiXFxcXFxcXFxbYS16QS1a0LAt0Y/QkC3Rj10rW1xcXFwqXT9cIn0sZT17Y046XCJjb21tYW5kXCIsYjpcIlxcXFxcXFxcW15hLXpBLVrQsC3Rj9CQLdGPMC05XVwifSxtPXtjTjpcInNwZWNpYWxcIixiOlwiW3t9XFxcXFtcXFxcXVxcXFwmI35dXCIscjowfTtyZXR1cm57Yzpbe2I6XCJcXFxcXFxcXFthLXpBLVrQsC3Rj9CQLdGPXStbXFxcXCpdPyAqPSAqLT9cXFxcZCpcXFxcLj9cXFxcZCsocHR8cGN8bW18Y218aW58ZGR8Y2N8ZXh8ZW0pP1wiLHJCOiEwLGM6W2MsZSx7Y046XCJudW1iZXJcIixiOlwiICo9XCIsZTpcIi0/XFxcXGQqXFxcXC4/XFxcXGQrKHB0fHBjfG1tfGNtfGlufGRkfGNjfGV4fGVtKT9cIixlQjohMH1dLHI6MTB9LGMsZSxtLHtjTjpcImZvcm11bGFcIixiOlwiXFxcXCRcXFxcJFwiLGU6XCJcXFxcJFxcXFwkXCIsYzpbYyxlLG1dLHI6MH0se2NOOlwiZm9ybXVsYVwiLGI6XCJcXFxcJFwiLGU6XCJcXFxcJFwiLGM6W2MsZSxtXSxyOjB9LHtjTjpcImNvbW1lbnRcIixiOlwiJVwiLGU6XCIkXCIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiaHR0cFwiLGZ1bmN0aW9uKCl7cmV0dXJue2k6XCJcXFxcU1wiLGM6W3tjTjpcInN0YXR1c1wiLGI6XCJeSFRUUC9bMC05XFxcXC5dK1wiLGU6XCIkXCIsYzpbe2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiXFxcXGR7M31cXFxcYlwifV19LHtjTjpcInJlcXVlc3RcIixiOlwiXltBLVpdKyAoLio/KSBIVFRQL1swLTlcXFxcLl0rJFwiLHJCOiEwLGU6XCIkXCIsYzpbe2NOOlwic3RyaW5nXCIsYjpcIiBcIixlOlwiIFwiLGVCOiEwLGVFOiEwfV19LHtjTjpcImF0dHJpYnV0ZVwiLGI6XCJeXFxcXHdcIixlOlwiOiBcIixlRTohMCxpOlwiXFxcXG58XFxcXHN8PVwiLHN0YXJ0czp7Y046XCJzdHJpbmdcIixlOlwiJFwifX0se2I6XCJcXFxcblxcXFxuXCIsc3RhcnRzOntzTDpcIlwiLGVXOiEwfX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImxpc3BcIixmdW5jdGlvbihlKXt2YXIgYj1cIlthLXpBLVpfXFxcXC1cXFxcK1xcXFwqXFxcXC9cXFxcPFxcXFw9XFxcXD5cXFxcJlxcXFwjXVthLXpBLVowLTlfXFxcXC1cXFxcK1xcXFwqXFxcXC9cXFxcPFxcXFw9XFxcXD5cXFxcJlxcXFwjIV0qXCIsYz1cIlxcXFx8W15dKj9cXFxcfFwiLHI9XCIoXFxcXC18XFxcXCspP1xcXFxkKyhcXFxcLlxcXFxkK3xcXFxcL1xcXFxkKyk/KChkfGV8ZnxsfHMpKFxcXFwrfFxcXFwtKT9cXFxcZCspP1wiLHQ9e2NOOlwic2hlYmFuZ1wiLGI6XCJeIyFcIixlOlwiJFwifSxhPXtjTjpcImxpdGVyYWxcIixiOlwiXFxcXGIodHsxfXxuaWwpXFxcXGJcIn0saT17Y046XCJudW1iZXJcIix2Olt7YjpyLHI6MH0se2I6XCIjYlswLTFdKygvWzAtMV0rKT9cIn0se2I6XCIjb1swLTddKygvWzAtN10rKT9cIn0se2I6XCIjeFswLTlhLWZdKygvWzAtOWEtZl0rKT9cIn0se2I6XCIjY1xcXFwoXCIrcitcIiArXCIrcixlOlwiXFxcXClcIn1dfSxsPWUuaW5oZXJpdChlLlFTTSx7aTpudWxsfSksbj17Y046XCJjb21tZW50XCIsYjpcIjtcIixlOlwiJFwiLHI6MH0sTj17Y046XCJ2YXJpYWJsZVwiLGI6XCJcXFxcKlwiLGU6XCJcXFxcKlwifSxkPXtjTjpcImtleXdvcmRcIixiOlwiWzomXVwiK2J9LG89e2I6Y30sdT17YjpcIlxcXFwoXCIsZTpcIlxcXFwpXCIsYzpbXCJzZWxmXCIsYSxsLGldfSxzPXtjTjpcInF1b3RlZFwiLGM6W2ksbCxOLGQsdV0sdjpbe2I6XCJbJ2BdXFxcXChcIixlOlwiXFxcXClcIn0se2I6XCJcXFxcKHF1b3RlIFwiLGU6XCJcXFxcKVwiLGs6XCJxdW90ZVwifSx7YjpcIidcIitjfV19LGY9e2NOOlwicXVvdGVkXCIsYjpcIidcIitifSx2PXtjTjpcImxpc3RcIixiOlwiXFxcXChcIixlOlwiXFxcXClcIn0sZz17ZVc6ITAscjowfTtyZXR1cm4gdi5jPVt7Y046XCJrZXl3b3JkXCIsdjpbe2I6Yn0se2I6Y31dfSxnXSxnLmM9W3MsZix2LGEsaSxsLG4sTixkLG9dLHtpOi9cXFMvLGM6W2ksdCxhLGwsbixzLGYsdl19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZXJsYW5nXCIsZnVuY3Rpb24oZSl7dmFyIHI9XCJbYS16J11bYS16QS1aMC05XyddKlwiLGM9XCIoXCIrcitcIjpcIityK1wifFwiK3IrXCIpXCIsYT17a2V5d29yZDpcImFmdGVyIGFuZCBhbmRhbHNvfDEwIGJhbmQgYmVnaW4gYm5vdCBib3IgYnNsIGJ6ciBieG9yIGNhc2UgY2F0Y2ggY29uZCBkaXYgZW5kIGZ1biBpZiBsZXQgbm90IG9mIG9yZWxzZXwxMCBxdWVyeSByZWNlaXZlIHJlbSB0cnkgd2hlbiB4b3JcIixsaXRlcmFsOlwiZmFsc2UgdHJ1ZVwifSxuPXtjTjpcImNvbW1lbnRcIixiOlwiJVwiLGU6XCIkXCJ9LGI9e2NOOlwibnVtYmVyXCIsYjpcIlxcXFxiKFxcXFxkKyNbYS1mQS1GMC05XSt8XFxcXGQrKFxcXFwuXFxcXGQrKT8oW2VFXVstK10/XFxcXGQrKT8pXCIscjowfSxpPXtiOlwiZnVuXFxcXHMrXCIrcitcIi9cXFxcZCtcIn0sbz17YjpjK1wiXFxcXChcIixlOlwiXFxcXClcIixyQjohMCxyOjAsYzpbe2NOOlwiZnVuY3Rpb25fbmFtZVwiLGI6YyxyOjB9LHtiOlwiXFxcXChcIixlOlwiXFxcXClcIixlVzohMCxyRTohMCxyOjB9XX0sZD17Y046XCJ0dXBsZVwiLGI6XCJ7XCIsZTpcIn1cIixyOjB9LHQ9e2NOOlwidmFyaWFibGVcIixiOlwiXFxcXGJfKFtBLVpdW0EtWmEtejAtOV9dKik/XCIscjowfSxsPXtjTjpcInZhcmlhYmxlXCIsYjpcIltBLVpdW2EtekEtWjAtOV9dKlwiLHI6MH0sZj17YjpcIiNcIitlLlVJUixyOjAsckI6ITAsYzpbe2NOOlwicmVjb3JkX25hbWVcIixiOlwiI1wiK2UuVUlSLHI6MH0se2I6XCJ7XCIsZTpcIn1cIixyOjB9XX0scz17Yks6XCJmdW4gcmVjZWl2ZSBpZiB0cnkgY2FzZVwiLGU6XCJlbmRcIixrOmF9O3MuYz1bbixpLGUuaW5oZXJpdChlLkFTTSx7Y046XCJcIn0pLHMsbyxlLlFTTSxiLGQsdCxsLGZdO3ZhciB1PVtuLGkscyxvLGUuUVNNLGIsZCx0LGwsZl07by5jWzFdLmM9dSxkLmM9dSxmLmNbMV0uYz11O3ZhciB2PXtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGM6dX07cmV0dXJue2FsaWFzZXM6W1wiZXJsXCJdLGs6YSxpOlwiKDwvfFxcXFwqPXxcXFxcKz18LT18L1xcXFwqfFxcXFwqL3xcXFxcKFxcXFwqfFxcXFwqXFxcXCkpXCIsYzpbe2NOOlwiZnVuY3Rpb25cIixiOlwiXlwiK3IrXCJcXFxccypcXFxcKFwiLGU6XCItPlwiLHJCOiEwLGk6XCJcXFxcKHwjfC8vfC9cXFxcKnxcXFxcXFxcXHw6fDtcIixjOlt2LGUuaW5oZXJpdChlLlRNLHtiOnJ9KV0sc3RhcnRzOntlOlwiO3xcXFxcLlwiLGs6YSxjOnV9fSxuLHtjTjpcInBwXCIsYjpcIl4tXCIsZTpcIlxcXFwuXCIscjowLGVFOiEwLHJCOiEwLGw6XCItXCIrZS5JUixrOlwiLW1vZHVsZSAtcmVjb3JkIC11bmRlZiAtZXhwb3J0IC1pZmRlZiAtaWZuZGVmIC1hdXRob3IgLWNvcHlyaWdodCAtZG9jIC12c24gLWltcG9ydCAtaW5jbHVkZSAtaW5jbHVkZV9saWIgLWNvbXBpbGUgLWRlZmluZSAtZWxzZSAtZW5kaWYgLWZpbGUgLWJlaGF2aW91ciAtYmVoYXZpb3IgLXNwZWNcIixjOlt2XX0sYixlLlFTTSxmLHQsbCxkLHtiOi9cXC4kL31dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcIm1ha2VmaWxlXCIsZnVuY3Rpb24oZSl7dmFyIGE9e2NOOlwidmFyaWFibGVcIixiOi9cXCRcXCgvLGU6L1xcKS8sYzpbZS5CRV19O3JldHVybnthbGlhc2VzOltcIm1rXCIsXCJtYWtcIl0sYzpbZS5IQ00se2I6L15cXHcrXFxzKlxcVyo9LyxyQjohMCxyOjAsc3RhcnRzOntjTjpcImNvbnN0YW50XCIsZTovXFxzKlxcVyo9LyxlRTohMCxzdGFydHM6e2U6LyQvLHI6MCxjOlthXX19fSx7Y046XCJ0aXRsZVwiLGI6L15bXFx3XSs6XFxzKiQvfSx7Y046XCJwaG9ueVwiLGI6L15cXC5QSE9OWTovLGU6LyQvLGs6XCIuUEhPTllcIixsOi9bXFwuXFx3XSsvfSx7YjovXlxcdCsvLGU6LyQvLHI6MCxjOltlLlFTTSxhXX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInBlcmxcIixmdW5jdGlvbihlKXt2YXIgdD1cImdldHB3ZW50IGdldHNlcnZlbnQgcXVvdGVtZXRhIG1zZ3JjdiBzY2FsYXIga2lsbCBkYm1jbG9zZSB1bmRlZiBsYyBtYSBzeXN3cml0ZSB0ciBzZW5kIHVtYXNrIHN5c29wZW4gc2htd3JpdGUgdmVjIHF4IHV0aW1lIGxvY2FsIG9jdCBzZW1jdGwgbG9jYWx0aW1lIHJlYWRwaXBlIGRvIHJldHVybiBmb3JtYXQgcmVhZCBzcHJpbnRmIGRibW9wZW4gcG9wIGdldHBncnAgbm90IGdldHB3bmFtIHJld2luZGRpciBxcWZpbGVubyBxdyBlbmRwcm90b2VudCB3YWl0IHNldGhvc3RlbnQgYmxlc3Mgc3wwIG9wZW5kaXIgY29udGludWUgZWFjaCBzbGVlcCBlbmRncmVudCBzaHV0ZG93biBkdW1wIGNob21wIGNvbm5lY3QgZ2V0c29ja25hbWUgZGllIHNvY2tldHBhaXIgY2xvc2UgZmxvY2sgZXhpc3RzIGluZGV4IHNobWdldHN1YiBmb3IgZW5kcHdlbnQgcmVkbyBsc3RhdCBtc2djdGwgc2V0cGdycCBhYnMgZXhpdCBzZWxlY3QgcHJpbnQgcmVmIGdldGhvc3RieWFkZHIgdW5zaGlmdCBmY250bCBzeXNjYWxsIGdvdG8gZ2V0bmV0YnlhZGRyIGpvaW4gZ210aW1lIHN5bWxpbmsgc2VtZ2V0IHNwbGljZSB4fDAgZ2V0cGVlcm5hbWUgcmVjdiBsb2cgc2V0c29ja29wdCBjb3MgbGFzdCByZXZlcnNlIGdldGhvc3RieW5hbWUgZ2V0Z3JuYW0gc3R1ZHkgZm9ybWxpbmUgZW5kaG9zdGVudCB0aW1lcyBjaG9wIGxlbmd0aCBnZXRob3N0ZW50IGdldG5ldGVudCBwYWNrIGdldHByb3RvZW50IGdldHNlcnZieW5hbWUgcmFuZCBta2RpciBwb3MgY2htb2QgeXwwIHN1YnN0ciBlbmRuZXRlbnQgcHJpbnRmIG5leHQgb3BlbiBtc2dzbmQgcmVhZGRpciB1c2UgdW5saW5rIGdldHNvY2tvcHQgZ2V0cHJpb3JpdHkgcmluZGV4IHdhbnRhcnJheSBoZXggc3lzdGVtIGdldHNlcnZieXBvcnQgZW5kc2VydmVudCBpbnQgY2hyIHVudGllIHJtZGlyIHByb3RvdHlwZSB0ZWxsIGxpc3RlbiBmb3JrIHNobXJlYWQgdWNmaXJzdCBzZXRwcm90b2VudCBlbHNlIHN5c3NlZWsgbGluayBnZXRncmdpZCBzaG1jdGwgd2FpdHBpZCB1bnBhY2sgZ2V0bmV0YnluYW1lIHJlc2V0IGNoZGlyIGdyZXAgc3BsaXQgcmVxdWlyZSBjYWxsZXIgbGNmaXJzdCB1bnRpbCB3YXJuIHdoaWxlIHZhbHVlcyBzaGlmdCB0ZWxsZGlyIGdldHB3dWlkIG15IGdldHByb3RvYnludW1iZXIgZGVsZXRlIGFuZCBzb3J0IHVjIGRlZmluZWQgc3JhbmQgYWNjZXB0IHBhY2thZ2Ugc2Vla2RpciBnZXRwcm90b2J5bmFtZSBzZW1vcCBvdXIgcmVuYW1lIHNlZWsgaWYgcXwwIGNocm9vdCBzeXNyZWFkIHNldHB3ZW50IG5vIGNyeXB0IGdldGMgY2hvd24gc3FydCB3cml0ZSBzZXRuZXRlbnQgc2V0cHJpb3JpdHkgZm9yZWFjaCB0aWUgc2luIG1zZ2dldCBtYXAgc3RhdCBnZXRsb2dpbiB1bmxlc3MgZWxzaWYgdHJ1bmNhdGUgZXhlYyBrZXlzIGdsb2IgdGllZCBjbG9zZWRpcmlvY3RsIHNvY2tldCByZWFkbGluayBldmFsIHhvciByZWFkbGluZSBiaW5tb2RlIHNldHNlcnZlbnQgZW9mIG9yZCBiaW5kIGFsYXJtIHBpcGUgYXRhbjIgZ2V0Z3JlbnQgZXhwIHRpbWUgcHVzaCBzZXRncmVudCBndCBsdCBvciBuZSBtfDAgYnJlYWsgZ2l2ZW4gc2F5IHN0YXRlIHdoZW5cIixyPXtjTjpcInN1YnN0XCIsYjpcIlskQF1cXFxce1wiLGU6XCJcXFxcfVwiLGs6dH0scz17YjpcIi0+e1wiLGU6XCJ9XCJ9LG49e2NOOlwidmFyaWFibGVcIix2Olt7YjovXFwkXFxkL30se2I6L1tcXCRcXCVcXEBdKFxcXlxcd1xcYnwjXFx3KyhcXDpcXDpcXHcrKSp8e1xcdyt9fFxcdysoXFw6XFw6XFx3KikqKS99LHtiOi9bXFwkXFwlXFxAXVteXFxzXFx3e10vLHI6MH1dfSxvPXtjTjpcImNvbW1lbnRcIixiOlwiXihfX0VORF9ffF9fREFUQV9fKVwiLGU6XCJcXFxcbiRcIixyOjV9LGk9W2UuQkUscixuXSxjPVtuLGUuSENNLG8se2NOOlwiY29tbWVudFwiLGI6XCJeXFxcXD1cXFxcd1wiLGU6XCJcXFxcPWN1dFwiLGVXOiEwfSxzLHtjTjpcInN0cmluZ1wiLGM6aSx2Olt7YjpcInFbcXd4cl0/XFxcXHMqXFxcXChcIixlOlwiXFxcXClcIixyOjV9LHtiOlwicVtxd3hyXT9cXFxccypcXFxcW1wiLGU6XCJcXFxcXVwiLHI6NX0se2I6XCJxW3F3eHJdP1xcXFxzKlxcXFx7XCIsZTpcIlxcXFx9XCIscjo1fSx7YjpcInFbcXd4cl0/XFxcXHMqXFxcXHxcIixlOlwiXFxcXHxcIixyOjV9LHtiOlwicVtxd3hyXT9cXFxccypcXFxcPFwiLGU6XCJcXFxcPlwiLHI6NX0se2I6XCJxd1xcXFxzK3FcIixlOlwicVwiLHI6NX0se2I6XCInXCIsZTpcIidcIixjOltlLkJFXX0se2I6J1wiJyxlOidcIid9LHtiOlwiYFwiLGU6XCJgXCIsYzpbZS5CRV19LHtiOlwie1xcXFx3K31cIixjOltdLHI6MH0se2I6XCItP1xcXFx3K1xcXFxzKlxcXFw9XFxcXD5cIixjOltdLHI6MH1dfSx7Y046XCJudW1iZXJcIixiOlwiKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGJcIixyOjB9LHtiOlwiKFxcXFwvXFxcXC98XCIrZS5SU1IrXCJ8XFxcXGIoc3BsaXR8cmV0dXJufHByaW50fHJldmVyc2V8Z3JlcClcXFxcYilcXFxccypcIixrOlwic3BsaXQgcmV0dXJuIHByaW50IHJldmVyc2UgZ3JlcFwiLHI6MCxjOltlLkhDTSxvLHtjTjpcInJlZ2V4cFwiLGI6XCIoc3x0cnx5KS8oXFxcXFxcXFwufFteL10pKi8oXFxcXFxcXFwufFteL10pKi9bYS16XSpcIixyOjEwfSx7Y046XCJyZWdleHBcIixiOlwiKG18cXIpPy9cIixlOlwiL1thLXpdKlwiLGM6W2UuQkVdLHI6MH1dfSx7Y046XCJzdWJcIixiSzpcInN1YlwiLGU6XCIoXFxcXHMqXFxcXCguKj9cXFxcKSk/Wzt7XVwiLHI6NX0se2NOOlwib3BlcmF0b3JcIixiOlwiLVxcXFx3XFxcXGJcIixyOjB9XTtyZXR1cm4gci5jPWMscy5jPWMse2FsaWFzZXM6W1wicGxcIl0sazp0LGM6Y319KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJydWJ5XCIsZnVuY3Rpb24oZSl7dmFyIGI9XCJbYS16QS1aX11cXFxcdypbIT89XT98Wy0rfl1cXFxcQHw8PHw+Pnw9fnw9PT0/fDw9PnxbPD5dPT98XFxcXCpcXFxcKnxbLS8rJV4mKn5gfF18XFxcXFtcXFxcXT0/XCIscj1cImFuZCBmYWxzZSB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIGlmIEJFR0lOIHJldHJ5IGVuZCBmb3IgdHJ1ZSBzZWxmIHdoZW4gbmV4dCB1bnRpbCBkbyBiZWdpbiB1bmxlc3MgRU5EIHJlc2N1ZSBuaWwgZWxzZSBicmVhayB1bmRlZiBub3Qgc3VwZXIgY2xhc3MgY2FzZSByZXF1aXJlIHlpZWxkIGFsaWFzIHdoaWxlIGVuc3VyZSBlbHNpZiBvciBpbmNsdWRlIGF0dHJfcmVhZGVyIGF0dHJfd3JpdGVyIGF0dHJfYWNjZXNzb3JcIixjPXtjTjpcInlhcmRvY3RhZ1wiLGI6XCJAW0EtWmEtel0rXCJ9LGE9e2NOOlwidmFsdWVcIixiOlwiIzxcIixlOlwiPlwifSxzPXtjTjpcImNvbW1lbnRcIix2Olt7YjpcIiNcIixlOlwiJFwiLGM6W2NdfSx7YjpcIl5cXFxcPWJlZ2luXCIsZTpcIl5cXFxcPWVuZFwiLGM6W2NdLHI6MTB9LHtiOlwiXl9fRU5EX19cIixlOlwiXFxcXG4kXCJ9XX0sbj17Y046XCJzdWJzdFwiLGI6XCIjXFxcXHtcIixlOlwifVwiLGs6cn0sdD17Y046XCJzdHJpbmdcIixjOltlLkJFLG5dLHY6W3tiOi8nLyxlOi8nL30se2I6L1wiLyxlOi9cIi99LHtiOi9gLyxlOi9gL30se2I6XCIlW3FRd1d4XT9cXFxcKFwiLGU6XCJcXFxcKVwifSx7YjpcIiVbcVF3V3hdP1xcXFxbXCIsZTpcIlxcXFxdXCJ9LHtiOlwiJVtxUXdXeF0/e1wiLGU6XCJ9XCJ9LHtiOlwiJVtxUXdXeF0/PFwiLGU6XCI+XCJ9LHtiOlwiJVtxUXdXeF0/L1wiLGU6XCIvXCJ9LHtiOlwiJVtxUXdXeF0/JVwiLGU6XCIlXCJ9LHtiOlwiJVtxUXdXeF0/LVwiLGU6XCItXCJ9LHtiOlwiJVtxUXdXeF0/XFxcXHxcIixlOlwiXFxcXHxcIn0se2I6L1xcQlxcPyhcXFxcXFxkezEsM318XFxcXHhbQS1GYS1mMC05XXsxLDJ9fFxcXFx1W0EtRmEtZjAtOV17NH18XFxcXD9cXFMpXFxiL31dfSxpPXtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGs6cn0sZD1bdCxhLHMse2NOOlwiY2xhc3NcIixiSzpcImNsYXNzIG1vZHVsZVwiLGU6XCIkfDtcIixpOi89LyxjOltlLmluaGVyaXQoZS5UTSx7YjpcIltBLVphLXpfXVxcXFx3Kig6OlxcXFx3KykqKFxcXFw/fFxcXFwhKT9cIn0pLHtjTjpcImluaGVyaXRhbmNlXCIsYjpcIjxcXFxccypcIixjOlt7Y046XCJwYXJlbnRcIixiOlwiKFwiK2UuSVIrXCI6Oik/XCIrZS5JUn1dfSxzXX0se2NOOlwiZnVuY3Rpb25cIixiSzpcImRlZlwiLGU6XCIgfCR8O1wiLHI6MCxjOltlLmluaGVyaXQoZS5UTSx7YjpifSksaSxzXX0se2NOOlwiY29uc3RhbnRcIixiOlwiKDo6KT8oXFxcXGJbQS1aXVxcXFx3Kig6Oik/KStcIixyOjB9LHtjTjpcInN5bWJvbFwiLGI6ZS5VSVIrXCIoXFxcXCF8XFxcXD8pPzpcIixyOjB9LHtjTjpcInN5bWJvbFwiLGI6XCI6XCIsYzpbdCx7YjpifV0scjowfSx7Y046XCJudW1iZXJcIixiOlwiKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGJcIixyOjB9LHtjTjpcInZhcmlhYmxlXCIsYjpcIihcXFxcJFxcXFxXKXwoKFxcXFwkfFxcXFxAXFxcXEA/KShcXFxcdyspKVwifSx7YjpcIihcIitlLlJTUitcIilcXFxccypcIixjOlthLHMse2NOOlwicmVnZXhwXCIsYzpbZS5CRSxuXSxpOi9cXG4vLHY6W3tiOlwiL1wiLGU6XCIvW2Etel0qXCJ9LHtiOlwiJXJ7XCIsZTpcIn1bYS16XSpcIn0se2I6XCIlclxcXFwoXCIsZTpcIlxcXFwpW2Etel0qXCJ9LHtiOlwiJXIhXCIsZTpcIiFbYS16XSpcIn0se2I6XCIlclxcXFxbXCIsZTpcIlxcXFxdW2Etel0qXCJ9XX1dLHI6MH1dO24uYz1kLGkuYz1kO3ZhciBsPVwiWz4/XT5cIix1PVwiW1xcXFx3I10rXFxcXChcXFxcdytcXFxcKTpcXFxcZCs6XFxcXGQrPlwiLE49XCIoXFxcXHcrLSk/XFxcXGQrXFxcXC5cXFxcZCtcXFxcLlxcXFxkKHBcXFxcZCspP1tePl0rPlwiLG89W3tiOi9eXFxzKj0+LyxjTjpcInN0YXR1c1wiLHN0YXJ0czp7ZTpcIiRcIixjOmR9fSx7Y046XCJwcm9tcHRcIixiOlwiXihcIitsK1wifFwiK3UrXCJ8XCIrTitcIilcIixzdGFydHM6e2U6XCIkXCIsYzpkfX1dO3JldHVybnthbGlhc2VzOltcInJiXCIsXCJnZW1zcGVjXCIsXCJwb2RzcGVjXCIsXCJ0aG9yXCIsXCJpcmJcIl0sazpyLGM6W3NdLmNvbmNhdChvKS5jb25jYXQoZCl9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZXJiXCIsZnVuY3Rpb24oKXtyZXR1cm57c0w6XCJ4bWxcIixzdWJMYW5ndWFnZU1vZGU6XCJjb250aW51b3VzXCIsYzpbe2NOOlwiY29tbWVudFwiLGI6XCI8JSNcIixlOlwiJT5cIn0se2I6XCI8JVslPS1dP1wiLGU6XCJbJS1dPyU+XCIsc0w6XCJydWJ5XCIsZUI6ITAsZUU6ITB9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJhcGFjaGVcIixmdW5jdGlvbihlKXt2YXIgcj17Y046XCJudW1iZXJcIixiOlwiW1xcXFwkJV1cXFxcZCtcIn07cmV0dXJue2FsaWFzZXM6W1wiYXBhY2hlY29uZlwiXSxjSTohMCxjOltlLkhDTSx7Y046XCJ0YWdcIixiOlwiPC8/XCIsZTpcIj5cIn0se2NOOlwia2V5d29yZFwiLGI6L1xcdysvLHI6MCxrOntjb21tb246XCJvcmRlciBkZW55IGFsbG93IHNldGVudiByZXdyaXRlcnVsZSByZXdyaXRlZW5naW5lIHJld3JpdGVjb25kIGRvY3VtZW50cm9vdCBzZXRoYW5kbGVyIGVycm9yZG9jdW1lbnQgbG9hZG1vZHVsZSBvcHRpb25zIGhlYWRlciBsaXN0ZW4gc2VydmVycm9vdCBzZXJ2ZXJuYW1lXCJ9LHN0YXJ0czp7ZTovJC8scjowLGs6e2xpdGVyYWw6XCJvbiBvZmYgYWxsXCJ9LGM6W3tjTjpcInNxYnJhY2tldFwiLGI6XCJcXFxcc1xcXFxbXCIsZTpcIlxcXFxdJFwifSx7Y046XCJjYnJhY2tldFwiLGI6XCJbXFxcXCQlXVxcXFx7XCIsZTpcIlxcXFx9XCIsYzpbXCJzZWxmXCIscl19LHIsZS5RU01dfX1dLGk6L1xcUy99fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwianNvblwiLGZ1bmN0aW9uKGUpe3ZhciB0PXtsaXRlcmFsOlwidHJ1ZSBmYWxzZSBudWxsXCJ9LGk9W2UuUVNNLGUuQ05NXSxsPXtjTjpcInZhbHVlXCIsZTpcIixcIixlVzohMCxlRTohMCxjOmksazp0fSxjPXtiOlwie1wiLGU6XCJ9XCIsYzpbe2NOOlwiYXR0cmlidXRlXCIsYjonXFxcXHMqXCInLGU6J1wiXFxcXHMqOlxcXFxzKicsZUI6ITAsZUU6ITAsYzpbZS5CRV0saTpcIlxcXFxuXCIsc3RhcnRzOmx9XSxpOlwiXFxcXFNcIn0sbj17YjpcIlxcXFxbXCIsZTpcIlxcXFxdXCIsYzpbZS5pbmhlcml0KGwse2NOOm51bGx9KV0saTpcIlxcXFxTXCJ9O3JldHVybiBpLnNwbGljZShpLmxlbmd0aCwwLGMsbikse2M6aSxrOnQsaTpcIlxcXFxTXCJ9fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY2xvanVyZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PXtidWlsdF9pbjpcImRlZiBjb25kIGFwcGx5IGlmLW5vdCBpZi1sZXQgaWYgbm90IG5vdD0gPSA8ID4gPD0gPj0gPT0gKyAvICogLSByZW0gcXVvdCBuZWc/IHBvcz8gZGVsYXk/IHN5bWJvbD8ga2V5d29yZD8gdHJ1ZT8gZmFsc2U/IGludGVnZXI/IGVtcHR5PyBjb2xsPyBsaXN0PyBzZXQ/IGlmbj8gZm4/IGFzc29jaWF0aXZlPyBzZXF1ZW50aWFsPyBzb3J0ZWQ/IGNvdW50ZWQ/IHJldmVyc2libGU/IG51bWJlcj8gZGVjaW1hbD8gY2xhc3M/IGRpc3RpbmN0PyBpc2E/IGZsb2F0PyByYXRpb25hbD8gcmVkdWNlZD8gcmF0aW8/IG9kZD8gZXZlbj8gY2hhcj8gc2VxPyB2ZWN0b3I/IHN0cmluZz8gbWFwPyBuaWw/IGNvbnRhaW5zPyB6ZXJvPyBpbnN0YW5jZT8gbm90LWV2ZXJ5PyBub3QtYW55PyBsaWJzcGVjPyAtPiAtPj4gLi4gLiBpbmMgY29tcGFyZSBkbyBkb3RpbWVzIG1hcGNhdCB0YWtlIHJlbW92ZSB0YWtlLXdoaWxlIGRyb3AgbGV0Zm4gZHJvcC1sYXN0IHRha2UtbGFzdCBkcm9wLXdoaWxlIHdoaWxlIGludGVybiBjb25kcCBjYXNlIHJlZHVjZWQgY3ljbGUgc3BsaXQtYXQgc3BsaXQtd2l0aCByZXBlYXQgcmVwbGljYXRlIGl0ZXJhdGUgcmFuZ2UgbWVyZ2UgemlwbWFwIGRlY2xhcmUgbGluZS1zZXEgc29ydCBjb21wYXJhdG9yIHNvcnQtYnkgZG9ydW4gZG9hbGwgbnRobmV4dCBudGhyZXN0IHBhcnRpdGlvbiBldmFsIGRvc2VxIGF3YWl0IGF3YWl0LWZvciBsZXQgYWdlbnQgYXRvbSBzZW5kIHNlbmQtb2ZmIHJlbGVhc2UtcGVuZGluZy1zZW5kcyBhZGQtd2F0Y2ggbWFwdiBmaWx0ZXJ2IHJlbW92ZS13YXRjaCBhZ2VudC1lcnJvciByZXN0YXJ0LWFnZW50IHNldC1lcnJvci1oYW5kbGVyIGVycm9yLWhhbmRsZXIgc2V0LWVycm9yLW1vZGUhIGVycm9yLW1vZGUgc2h1dGRvd24tYWdlbnRzIHF1b3RlIHZhciBmbiBsb29wIHJlY3VyIHRocm93IHRyeSBtb25pdG9yLWVudGVyIG1vbml0b3ItZXhpdCBkZWZtYWNybyBkZWZuIGRlZm4tIG1hY3JvZXhwYW5kIG1hY3JvZXhwYW5kLTEgZm9yIGRvc3luYyBhbmQgb3Igd2hlbiB3aGVuLW5vdCB3aGVuLWxldCBjb21wIGp1eHQgcGFydGlhbCBzZXF1ZW5jZSBtZW1vaXplIGNvbnN0YW50bHkgY29tcGxlbWVudCBpZGVudGl0eSBhc3NlcnQgcGVlayBwb3AgZG90byBwcm94eSBkZWZzdHJ1Y3QgZmlyc3QgcmVzdCBjb25zIGRlZnByb3RvY29sIGNhc3QgY29sbCBkZWZ0eXBlIGRlZnJlY29yZCBsYXN0IGJ1dGxhc3Qgc2lncyByZWlmeSBzZWNvbmQgZmZpcnN0IGZuZXh0IG5maXJzdCBubmV4dCBkZWZtdWx0aSBkZWZtZXRob2QgbWV0YSB3aXRoLW1ldGEgbnMgaW4tbnMgY3JlYXRlLW5zIGltcG9ydCByZWZlciBrZXlzIHNlbGVjdC1rZXlzIHZhbHMga2V5IHZhbCByc2VxIG5hbWUgbmFtZXNwYWNlIHByb21pc2UgaW50byB0cmFuc2llbnQgcGVyc2lzdGVudCEgY29uaiEgYXNzb2MhIGRpc3NvYyEgcG9wISBkaXNqISB1c2UgY2xhc3MgdHlwZSBudW0gZmxvYXQgZG91YmxlIHNob3J0IGJ5dGUgYm9vbGVhbiBiaWdpbnQgYmlnaW50ZWdlciBiaWdkZWMgcHJpbnQtbWV0aG9kIHByaW50LWR1cCB0aHJvdy1pZiBwcmludGYgZm9ybWF0IGxvYWQgY29tcGlsZSBnZXQtaW4gdXBkYXRlLWluIHByIHByLW9uIG5ld2xpbmUgZmx1c2ggcmVhZCBzbHVycCByZWFkLWxpbmUgc3VidmVjIHdpdGgtb3BlbiBtZW1mbiB0aW1lIHJlLWZpbmQgcmUtZ3JvdXBzIHJhbmQtaW50IHJhbmQgbW9kIGxvY2tpbmcgYXNzZXJ0LXZhbGlkLWZkZWNsIGFsaWFzIHJlc29sdmUgcmVmIGRlcmVmIHJlZnNldCBzd2FwISByZXNldCEgc2V0LXZhbGlkYXRvciEgY29tcGFyZS1hbmQtc2V0ISBhbHRlci1tZXRhISByZXNldC1tZXRhISBjb21tdXRlIGdldC12YWxpZGF0b3IgYWx0ZXIgcmVmLXNldCByZWYtaGlzdG9yeS1jb3VudCByZWYtbWluLWhpc3RvcnkgcmVmLW1heC1oaXN0b3J5IGVuc3VyZSBzeW5jIGlvISBuZXcgbmV4dCBjb25qIHNldCEgdG8tYXJyYXkgZnV0dXJlIGZ1dHVyZS1jYWxsIGludG8tYXJyYXkgYXNldCBnZW4tY2xhc3MgcmVkdWNlIG1hcCBmaWx0ZXIgZmluZCBlbXB0eSBoYXNoLW1hcCBoYXNoLXNldCBzb3J0ZWQtbWFwIHNvcnRlZC1tYXAtYnkgc29ydGVkLXNldCBzb3J0ZWQtc2V0LWJ5IHZlYyB2ZWN0b3Igc2VxIGZsYXR0ZW4gcmV2ZXJzZSBhc3NvYyBkaXNzb2MgbGlzdCBkaXNqIGdldCB1bmlvbiBkaWZmZXJlbmNlIGludGVyc2VjdGlvbiBleHRlbmQgZXh0ZW5kLXR5cGUgZXh0ZW5kLXByb3RvY29sIGludCBudGggZGVsYXkgY291bnQgY29uY2F0IGNodW5rIGNodW5rLWJ1ZmZlciBjaHVuay1hcHBlbmQgY2h1bmstZmlyc3QgY2h1bmstcmVzdCBtYXggbWluIGRlYyB1bmNoZWNrZWQtaW5jLWludCB1bmNoZWNrZWQtaW5jIHVuY2hlY2tlZC1kZWMtaW5jIHVuY2hlY2tlZC1kZWMgdW5jaGVja2VkLW5lZ2F0ZSB1bmNoZWNrZWQtYWRkLWludCB1bmNoZWNrZWQtYWRkIHVuY2hlY2tlZC1zdWJ0cmFjdC1pbnQgdW5jaGVja2VkLXN1YnRyYWN0IGNodW5rLW5leHQgY2h1bmstY29ucyBjaHVua2VkLXNlcT8gcHJuIHZhcnktbWV0YSBsYXp5LXNlcSBzcHJlYWQgbGlzdCogc3RyIGZpbmQta2V5d29yZCBrZXl3b3JkIHN5bWJvbCBnZW5zeW0gZm9yY2UgcmF0aW9uYWxpemVcIn0scj1cImEtekEtWl9cXFxcLSEuPysqPTw+JiMnXCIsbj1cIltcIityK1wiXVtcIityK1wiMC05Lzs6XSpcIixhPVwiWy0rXT9cXFxcZCsoXFxcXC5cXFxcZCspP1wiLG89e2I6bixyOjB9LHM9e2NOOlwibnVtYmVyXCIsYjphLHI6MH0sYz1lLmluaGVyaXQoZS5RU00se2k6bnVsbH0pLGk9e2NOOlwiY29tbWVudFwiLGI6XCI7XCIsZTpcIiRcIixyOjB9LGQ9e2NOOlwibGl0ZXJhbFwiLGI6L1xcYih0cnVlfGZhbHNlfG5pbClcXGIvfSxsPXtjTjpcImNvbGxlY3Rpb25cIixiOlwiW1xcXFxbXFxcXHtdXCIsZTpcIltcXFxcXVxcXFx9XVwifSxtPXtjTjpcImNvbW1lbnRcIixiOlwiXFxcXF5cIitufSxwPXtjTjpcImNvbW1lbnRcIixiOlwiXFxcXF5cXFxce1wiLGU6XCJcXFxcfVwifSx1PXtjTjpcImF0dHJpYnV0ZVwiLGI6XCJbOl1cIitufSxmPXtjTjpcImxpc3RcIixiOlwiXFxcXChcIixlOlwiXFxcXClcIn0saD17ZVc6ITAscjowfSx5PXtrOnQsbDpuLGNOOlwia2V5d29yZFwiLGI6bixzdGFydHM6aH0sYj1bZixjLG0scCxpLHUsbCxzLGQsb107cmV0dXJuIGYuYz1be2NOOlwiY29tbWVudFwiLGI6XCJjb21tZW50XCJ9LHksaF0saC5jPWIsbC5jPWIse2FsaWFzZXM6W1wiY2xqXCJdLGk6L1xcUy8sYzpbZixjLG0scCxpLHUsbCxzLGRdfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImNzc1wiLGZ1bmN0aW9uKGUpe3ZhciBjPVwiW2EtekEtWi1dW2EtekEtWjAtOV8tXSpcIixhPXtjTjpcImZ1bmN0aW9uXCIsYjpjK1wiXFxcXChcIixyQjohMCxlRTohMCxlOlwiXFxcXChcIn07cmV0dXJue2NJOiEwLGk6XCJbPS98J11cIixjOltlLkNCQ00se2NOOlwiaWRcIixiOlwiXFxcXCNbQS1aYS16MC05Xy1dK1wifSx7Y046XCJjbGFzc1wiLGI6XCJcXFxcLltBLVphLXowLTlfLV0rXCIscjowfSx7Y046XCJhdHRyX3NlbGVjdG9yXCIsYjpcIlxcXFxbXCIsZTpcIlxcXFxdXCIsaTpcIiRcIn0se2NOOlwicHNldWRvXCIsYjpcIjooOik/W2EtekEtWjAtOVxcXFxfXFxcXC1cXFxcK1xcXFwoXFxcXClcXFxcXFxcIlxcXFwnXStcIn0se2NOOlwiYXRfcnVsZVwiLGI6XCJAKGZvbnQtZmFjZXxwYWdlKVwiLGw6XCJbYS16LV0rXCIsazpcImZvbnQtZmFjZSBwYWdlXCJ9LHtjTjpcImF0X3J1bGVcIixiOlwiQFwiLGU6XCJbeztdXCIsYzpbe2NOOlwia2V5d29yZFwiLGI6L1xcUysvfSx7YjovXFxzLyxlVzohMCxlRTohMCxyOjAsYzpbYSxlLkFTTSxlLlFTTSxlLkNTU05NXX1dfSx7Y046XCJ0YWdcIixiOmMscjowfSx7Y046XCJydWxlc1wiLGI6XCJ7XCIsZTpcIn1cIixpOlwiW15cXFxcc11cIixyOjAsYzpbZS5DQkNNLHtjTjpcInJ1bGVcIixiOlwiW15cXFxcc11cIixyQjohMCxlOlwiO1wiLGVXOiEwLGM6W3tjTjpcImF0dHJpYnV0ZVwiLGI6XCJbQS1aXFxcXF9cXFxcLlxcXFwtXStcIixlOlwiOlwiLGVFOiEwLGk6XCJbXlxcXFxzXVwiLHN0YXJ0czp7Y046XCJ2YWx1ZVwiLGVXOiEwLGVFOiEwLGM6W2EsZS5DU1NOTSxlLlFTTSxlLkFTTSxlLkNCQ00se2NOOlwiaGV4Y29sb3JcIixiOlwiI1swLTlBLUZhLWZdK1wifSx7Y046XCJpbXBvcnRhbnRcIixiOlwiIWltcG9ydGFudFwifV19fV19XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInJ1c3RcIixmdW5jdGlvbihlKXt2YXIgdD1lLmluaGVyaXQoZS5DQkNNKTtyZXR1cm4gdC5jLnB1c2goXCJzZWxmXCIpLHthbGlhc2VzOltcInJzXCJdLGs6e2tleXdvcmQ6XCJhbGlnbm9mIGFzIGJlIGJveCBicmVhayBjb25zdCBjb250aW51ZSBjcmF0ZSBkbyBlbHNlIGVudW0gZXh0ZXJuIGZhbHNlIGZuIGZvciBpZiBpbXBsIGluIGxldCBsb29wIG1hdGNoIG1vZCBtdXQgb2Zmc2V0b2Ygb25jZSBwcml2IHByb2MgcHViIHB1cmUgcmVmIHJldHVybiBzZWxmIHNpemVvZiBzdGF0aWMgc3RydWN0IHN1cGVyIHRyYWl0IHRydWUgdHlwZSB0eXBlb2YgdW5zYWZlIHVuc2l6ZWQgdXNlIHZpcnR1YWwgd2hpbGUgeWllbGQgaW50IGk4IGkxNiBpMzIgaTY0IHVpbnQgdTggdTMyIHU2NCBmbG9hdCBmMzIgZjY0IHN0ciBjaGFyIGJvb2xcIixidWlsdF9pbjpcImFzc2VydCEgYXNzZXJ0X2VxISBiaXRmbGFncyEgYnl0ZXMhIGNmZyEgY29sISBjb25jYXQhIGNvbmNhdF9pZGVudHMhIGRlYnVnX2Fzc2VydCEgZGVidWdfYXNzZXJ0X2VxISBlbnYhIHBhbmljISBmaWxlISBmb3JtYXQhIGZvcm1hdF9hcmdzISBpbmNsdWRlX2JpbiEgaW5jbHVkZV9zdHIhIGxpbmUhIGxvY2FsX2RhdGFfa2V5ISBtb2R1bGVfcGF0aCEgb3B0aW9uX2VudiEgcHJpbnQhIHByaW50bG4hIHNlbGVjdCEgc3RyaW5naWZ5ISB0cnkhIHVuaW1wbGVtZW50ZWQhIHVucmVhY2hhYmxlISB2ZWMhIHdyaXRlISB3cml0ZWxuIVwifSxsOmUuSVIrXCIhP1wiLGk6XCI8L1wiLGM6W2UuQ0xDTSx0LGUuaW5oZXJpdChlLlFTTSx7aTpudWxsfSkse2NOOlwic3RyaW5nXCIsYjovcigjKilcIi4qP1wiXFwxKD8hIykvfSx7Y046XCJzdHJpbmdcIixiOi8nXFxcXD8oeFxcd3syfXx1XFx3ezR9fFVcXHd7OH18LiknL30se2I6LydbYS16QS1aX11bYS16QS1aMC05X10qL30se2NOOlwibnVtYmVyXCIsYjovXFxiKDBbeGJdW0EtWmEtejAtOV9dK3xbMC05X10rKFxcLlswLTlfXSspPyhbZUVdWystXT9bMC05X10rKT8pKFt1aWZdKDh8MTZ8MzJ8NjQpPyk/LyxyOjB9LHtjTjpcImZ1bmN0aW9uXCIsYks6XCJmblwiLGU6XCIoXFxcXCh8PClcIixlRTohMCxjOltlLlVUTV19LHtjTjpcInByZXByb2Nlc3NvclwiLGI6XCIjXFxcXFtcIixlOlwiXFxcXF1cIn0se2JLOlwidHlwZVwiLGU6XCIoPXw8KVwiLGM6W2UuVVRNXSxpOlwiXFxcXFNcIn0se2JLOlwidHJhaXQgZW51bVwiLGU6XCIoe3w8KVwiLGM6W2UuVVRNXSxpOlwiXFxcXFNcIn0se2I6ZS5JUitcIjo6XCJ9LHtiOlwiLT5cIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInN3aWZ0XCIsZnVuY3Rpb24oZSl7dmFyIHQ9e2tleXdvcmQ6XCJjbGFzcyBkZWluaXQgZW51bSBleHRlbnNpb24gZnVuYyBpbXBvcnQgaW5pdCBsZXQgcHJvdG9jb2wgc3RhdGljIHN0cnVjdCBzdWJzY3JpcHQgdHlwZWFsaWFzIHZhciBicmVhayBjYXNlIGNvbnRpbnVlIGRlZmF1bHQgZG8gZWxzZSBmYWxsdGhyb3VnaCBpZiBpbiBmb3IgcmV0dXJuIHN3aXRjaCB3aGVyZSB3aGlsZSBhcyBkeW5hbWljVHlwZSBpcyBuZXcgc3VwZXIgc2VsZiBTZWxmIFR5cGUgX19DT0xVTU5fXyBfX0ZJTEVfXyBfX0ZVTkNUSU9OX18gX19MSU5FX18gYXNzb2NpYXRpdml0eSBkaWRTZXQgZ2V0IGluZml4IGlub3V0IGxlZnQgbXV0YXRpbmcgbm9uZSBub25tdXRhdGluZyBvcGVyYXRvciBvdmVycmlkZSBwb3N0Zml4IHByZWNlZGVuY2UgcHJlZml4IHJpZ2h0IHNldCB1bm93bmVkIHVub3duZWQgc2FmZSB1bnNhZmUgd2VhayB3aWxsU2V0XCIsbGl0ZXJhbDpcInRydWUgZmFsc2UgbmlsXCIsYnVpbHRfaW46XCJhYnMgYWR2YW5jZSBhbGlnbm9mIGFsaWdub2ZWYWx1ZSBhc3NlcnQgYnJpZGdlRnJvbU9iamVjdGl2ZUMgYnJpZGdlRnJvbU9iamVjdGl2ZUNVbmNvbmRpdGlvbmFsIGJyaWRnZVRvT2JqZWN0aXZlQyBicmlkZ2VUb09iamVjdGl2ZUNVbmNvbmRpdGlvbmFsIGMgY29udGFpbnMgY291bnQgY291bnRFbGVtZW50cyBjb3VudExlYWRpbmdaZXJvcyBkZWJ1Z1ByaW50IGRlYnVnUHJpbnRsbiBkaXN0YW5jZSBkcm9wRmlyc3QgZHJvcExhc3QgZHVtcCBlbmNvZGVCaXRzQXNXb3JkcyBlbnVtZXJhdGUgZXF1YWwgZmFsc2UgZmlsdGVyIGZpbmQgZ2V0QnJpZGdlZE9iamVjdGl2ZUNUeXBlIGdldFZhTGlzdCBpbmRpY2VzIGluc2VydGlvblNvcnQgaXNCcmlkZ2VkVG9PYmplY3RpdmVDIGlzQnJpZGdlZFZlcmJhdGltVG9PYmplY3RpdmVDIGlzVW5pcXVlbHlSZWZlcmVuY2VkIGpvaW4gbGV4aWNvZ3JhcGhpY2FsQ29tcGFyZSBtYXAgbWF4IG1heEVsZW1lbnQgbWluIG1pbkVsZW1lbnQgbmlsIG51bWVyaWNDYXN0IHBhcnRpdGlvbiBwb3NpeCBwcmludCBwcmludGxuIHF1aWNrU29ydCByZWR1Y2UgcmVmbGVjdCByZWludGVycHJldENhc3QgcmV2ZXJzZSByb3VuZFVwVG9BbGlnbm1lbnQgc2l6ZW9mIHNpemVvZlZhbHVlIHNvcnQgc3BsaXQgc3RhcnRzV2l0aCBzdHJpZGVvZiBzdHJpZGVvZlZhbHVlIHN3YXAgc3dpZnQgdG9TdHJpbmcgdHJhbnNjb2RlIHRydWUgdW5kZXJlc3RpbWF0ZUNvdW50IHVuc2FmZVJlZmxlY3Qgd2l0aEV4dGVuZGVkTGlmZXRpbWUgd2l0aE9iamVjdEF0UGx1c1plcm8gd2l0aFVuc2FmZVBvaW50ZXIgd2l0aFVuc2FmZVBvaW50ZXJUb09iamVjdCB3aXRoVW5zYWZlUG9pbnRlcnMgd2l0aFZhTGlzdFwifSxpPXtjTjpcInR5cGVcIixiOlwiXFxcXGJbQS1aXVtcXFxcdyddKlwiLHI6MH0sbj17Y046XCJjb21tZW50XCIsYjpcIi9cXFxcKlwiLGU6XCJcXFxcKi9cIixjOltlLlBXTSxcInNlbGZcIl19LHI9e2NOOlwic3Vic3RcIixiOi9cXFxcXFwoLyxlOlwiXFxcXClcIixrOnQsYzpbXX0scz17Y046XCJudW1iZXJcIixiOlwiXFxcXGIoW1xcXFxkX10rKFxcXFwuW1xcXFxkZUVfXSspP3wweFthLWZBLUYwLTlfXSsoXFxcXC5bYS1mQS1GMC05cF9dKyk/fDBiWzAxX10rfDBvWzAtN19dKylcXFxcYlwiLHI6MH0sbz1lLmluaGVyaXQoZS5RU00se2M6W3IsZS5CRV19KTtyZXR1cm4gci5jPVtzXSx7azp0LGM6W28sZS5DTENNLG4saSxzLHtjTjpcImZ1bmNcIixiSzpcImZ1bmNcIixlOlwie1wiLGVFOiEwLGM6W2UuaW5oZXJpdChlLlRNLHtiOi9bQS1aYS16JF9dWzAtOUEtWmEteiRfXSovLGk6L1xcKC99KSx7Y046XCJnZW5lcmljc1wiLGI6L1xcPC8sZTovXFw+LyxpOi9cXD4vfSx7Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sazp0LGM6W1wic2VsZlwiLHMsbyxlLkNCQ00se2I6XCI6XCJ9XSxpOi9bXCInXS99XSxpOi9cXFt8JS99LHtjTjpcImNsYXNzXCIsazpcInN0cnVjdCBwcm90b2NvbCBjbGFzcyBleHRlbnNpb24gZW51bVwiLGI6XCIoc3RydWN0fHByb3RvY29sfGNsYXNzKD8hIChmdW5jfHZhcikpfGV4dGVuc2lvbnxlbnVtKVwiLGU6XCJcXFxce1wiLGVFOiEwLGM6W2UuaW5oZXJpdChlLlRNLHtiOi9bQS1aYS16JF9dWzAtOUEtWmEteiRfXSovfSldfSx7Y046XCJwcmVwcm9jZXNzb3JcIixiOlwiKEBhc3NpZ25tZW50fEBjbGFzc19wcm90b2NvbHxAZXhwb3J0ZWR8QGZpbmFsfEBsYXp5fEBub3JldHVybnxATlNDb3B5aW5nfEBOU01hbmFnZWR8QG9iamN8QG9wdGlvbmFsfEByZXF1aXJlZHxAYXV0b19jbG9zdXJlfEBub3JldHVybnxASUJBY3Rpb258QElCRGVzaWduYWJsZXxASUJJbnNwZWN0YWJsZXxASUJPdXRsZXR8QGluZml4fEBwcmVmaXh8QHBvc3RmaXgpXCJ9XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJuZ2lueFwiLGZ1bmN0aW9uKGUpe3ZhciByPXtjTjpcInZhcmlhYmxlXCIsdjpbe2I6L1xcJFxcZCsvfSx7YjovXFwkXFx7LyxlOi99L30se2I6XCJbXFxcXCRcXFxcQF1cIitlLlVJUn1dfSxiPXtlVzohMCxsOlwiW2Etei9fXStcIixrOntidWlsdF9pbjpcIm9uIG9mZiB5ZXMgbm8gdHJ1ZSBmYWxzZSBub25lIGJsb2NrZWQgZGVidWcgaW5mbyBub3RpY2Ugd2FybiBlcnJvciBjcml0IHNlbGVjdCBicmVhayBsYXN0IHBlcm1hbmVudCByZWRpcmVjdCBrcXVldWUgcnRzaWcgZXBvbGwgcG9sbCAvZGV2L3BvbGxcIn0scjowLGk6XCI9PlwiLGM6W2UuSENNLHtjTjpcInN0cmluZ1wiLGM6W2UuQkUscl0sdjpbe2I6L1wiLyxlOi9cIi99LHtiOi8nLyxlOi8nL31dfSx7Y046XCJ1cmxcIixiOlwiKFthLXpdKyk6L1wiLGU6XCJcXFxcc1wiLGVXOiEwLGVFOiEwLGM6W3JdfSx7Y046XCJyZWdleHBcIixjOltlLkJFLHJdLHY6W3tiOlwiXFxcXHNcXFxcXlwiLGU6XCJcXFxcc3x7fDtcIixyRTohMH0se2I6XCJ+XFxcXCo/XFxcXHMrXCIsZTpcIlxcXFxzfHt8O1wiLHJFOiEwfSx7YjpcIlxcXFwqKFxcXFwuW2EtelxcXFwtXSspK1wifSx7YjpcIihbYS16XFxcXC1dK1xcXFwuKStcXFxcKlwifV19LHtjTjpcIm51bWJlclwiLGI6XCJcXFxcYlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM30oOlxcXFxkezEsNX0pP1xcXFxiXCJ9LHtjTjpcIm51bWJlclwiLGI6XCJcXFxcYlxcXFxkK1trS21NZ0dkc2hkd3ldKlxcXFxiXCIscjowfSxyXX07cmV0dXJue2FsaWFzZXM6W1wibmdpbnhjb25mXCJdLGM6W2UuSENNLHtiOmUuVUlSK1wiXFxcXHNcIixlOlwiO3x7XCIsckI6ITAsYzpbe2NOOlwidGl0bGVcIixiOmUuVUlSLHN0YXJ0czpifV0scjowfV0saTpcIlteXFxcXHNcXFxcfV1cIn19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJjc1wiLGZ1bmN0aW9uKGUpe3ZhciByPVwiYWJzdHJhY3QgYXMgYmFzZSBib29sIGJyZWFrIGJ5dGUgY2FzZSBjYXRjaCBjaGFyIGNoZWNrZWQgY29uc3QgY29udGludWUgZGVjaW1hbCBkZWZhdWx0IGRlbGVnYXRlIGRvIGRvdWJsZSBlbHNlIGVudW0gZXZlbnQgZXhwbGljaXQgZXh0ZXJuIGZhbHNlIGZpbmFsbHkgZml4ZWQgZmxvYXQgZm9yIGZvcmVhY2ggZ290byBpZiBpbXBsaWNpdCBpbiBpbnQgaW50ZXJmYWNlIGludGVybmFsIGlzIGxvY2sgbG9uZyBudWxsIG9iamVjdCBvcGVyYXRvciBvdXQgb3ZlcnJpZGUgcGFyYW1zIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyByZWFkb25seSByZWYgc2J5dGUgc2VhbGVkIHNob3J0IHNpemVvZiBzdGFja2FsbG9jIHN0YXRpYyBzdHJpbmcgc3RydWN0IHN3aXRjaCB0aGlzIHRydWUgdHJ5IHR5cGVvZiB1aW50IHVsb25nIHVuY2hlY2tlZCB1bnNhZmUgdXNob3J0IHVzaW5nIHZpcnR1YWwgdm9sYXRpbGUgdm9pZCB3aGlsZSBhc3luYyBwcm90ZWN0ZWQgcHVibGljIHByaXZhdGUgaW50ZXJuYWwgYXNjZW5kaW5nIGRlc2NlbmRpbmcgZnJvbSBnZXQgZ3JvdXAgaW50byBqb2luIGxldCBvcmRlcmJ5IHBhcnRpYWwgc2VsZWN0IHNldCB2YWx1ZSB2YXIgd2hlcmUgeWllbGRcIix0PWUuSVIrXCIoPFwiK2UuSVIrXCI+KT9cIjtyZXR1cm57YWxpYXNlczpbXCJjc2hhcnBcIl0sazpyLGk6Lzo6LyxjOlt7Y046XCJjb21tZW50XCIsYjpcIi8vL1wiLGU6XCIkXCIsckI6ITAsYzpbe2NOOlwieG1sRG9jVGFnXCIsdjpbe2I6XCIvLy9cIixyOjB9LHtiOlwiPCEtLXwtLT5cIn0se2I6XCI8Lz9cIixlOlwiPlwifV19XX0sZS5DTENNLGUuQ0JDTSx7Y046XCJwcmVwcm9jZXNzb3JcIixiOlwiI1wiLGU6XCIkXCIsazpcImlmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lIHJlZ2lvbiBlbmRyZWdpb24gcHJhZ21hIGNoZWNrc3VtXCJ9LHtjTjpcInN0cmluZ1wiLGI6J0BcIicsZTonXCInLGM6W3tiOidcIlwiJ31dfSxlLkFTTSxlLlFTTSxlLkNOTSx7Yks6XCJjbGFzcyBuYW1lc3BhY2UgaW50ZXJmYWNlXCIsZTovW3s7PV0vLGk6L1teXFxzOl0vLGM6W2UuVE0sZS5DTENNLGUuQ0JDTV19LHtiSzpcIm5ldyByZXR1cm4gdGhyb3cgYXdhaXRcIixyOjB9LHtjTjpcImZ1bmN0aW9uXCIsYjpcIihcIit0K1wiXFxcXHMrKStcIitlLklSK1wiXFxcXHMqXFxcXChcIixyQjohMCxlOi9bezs9XS8sZUU6ITAsazpyLGM6W3tiOmUuSVIrXCJcXFxccypcXFxcKFwiLHJCOiEwLGM6W2UuVE1dLHI6MH0se2NOOlwicGFyYW1zXCIsYjovXFwoLyxlOi9cXCkvLGs6cixyOjAsYzpbZS5BU00sZS5RU00sZS5DTk0sZS5DQkNNXX0sZS5DTENNLGUuQ0JDTV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJtYXJrZG93blwiLGZ1bmN0aW9uKCl7cmV0dXJue2FsaWFzZXM6W1wibWRcIixcIm1rZG93blwiLFwibWtkXCJdLGM6W3tjTjpcImhlYWRlclwiLHY6W3tiOlwiXiN7MSw2fVwiLGU6XCIkXCJ9LHtiOlwiXi4rP1xcXFxuWz0tXXsyLH0kXCJ9XX0se2I6XCI8XCIsZTpcIj5cIixzTDpcInhtbFwiLHI6MH0se2NOOlwiYnVsbGV0XCIsYjpcIl4oWyorLV18KFxcXFxkK1xcXFwuKSlcXFxccytcIn0se2NOOlwic3Ryb25nXCIsYjpcIlsqX117Mn0uKz9bKl9dezJ9XCJ9LHtjTjpcImVtcGhhc2lzXCIsdjpbe2I6XCJcXFxcKi4rP1xcXFwqXCJ9LHtiOlwiXy4rP19cIixyOjB9XX0se2NOOlwiYmxvY2txdW90ZVwiLGI6XCJePlxcXFxzK1wiLGU6XCIkXCJ9LHtjTjpcImNvZGVcIix2Olt7YjpcImAuKz9gXCJ9LHtiOlwiXiggezR9fFx0KVwiLGU6XCIkXCIscjowfV19LHtjTjpcImhvcml6b250YWxfcnVsZVwiLGI6XCJeWy1cXFxcKl17Myx9XCIsZTpcIiRcIn0se2I6XCJcXFxcWy4rP1xcXFxdW1xcXFwoXFxcXFtdLio/W1xcXFwpXFxcXF1dXCIsckI6ITAsYzpbe2NOOlwibGlua19sYWJlbFwiLGI6XCJcXFxcW1wiLGU6XCJcXFxcXVwiLGVCOiEwLHJFOiEwLHI6MH0se2NOOlwibGlua191cmxcIixiOlwiXFxcXF1cXFxcKFwiLGU6XCJcXFxcKVwiLGVCOiEwLGVFOiEwfSx7Y046XCJsaW5rX3JlZmVyZW5jZVwiLGI6XCJcXFxcXVxcXFxbXCIsZTpcIlxcXFxdXCIsZUI6ITAsZUU6ITB9XSxyOjEwfSx7YjpcIl5cXFxcWy4rXFxcXF06XCIsckI6ITAsYzpbe2NOOlwibGlua19yZWZlcmVuY2VcIixiOlwiXFxcXFtcIixlOlwiXFxcXF06XCIsZUI6ITAsZUU6ITAsc3RhcnRzOntjTjpcImxpbmtfdXJsXCIsZTpcIiRcIn19XX1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImRpZmZcIixmdW5jdGlvbigpe3JldHVybnthbGlhc2VzOltcInBhdGNoXCJdLGM6W3tjTjpcImNodW5rXCIscjoxMCx2Olt7YjovXlxcQFxcQCArXFwtXFxkKyxcXGQrICtcXCtcXGQrLFxcZCsgK1xcQFxcQCQvfSx7YjovXlxcKlxcKlxcKiArXFxkKyxcXGQrICtcXCpcXCpcXCpcXCokL30se2I6L15cXC1cXC1cXC0gK1xcZCssXFxkKyArXFwtXFwtXFwtXFwtJC99XX0se2NOOlwiaGVhZGVyXCIsdjpbe2I6L0luZGV4OiAvLGU6LyQvfSx7YjovPT09PT0vLGU6Lz09PT09JC99LHtiOi9eXFwtXFwtXFwtLyxlOi8kL30se2I6L15cXCp7M30gLyxlOi8kL30se2I6L15cXCtcXCtcXCsvLGU6LyQvfSx7YjovXFwqezV9LyxlOi9cXCp7NX0kL31dfSx7Y046XCJhZGRpdGlvblwiLGI6XCJeXFxcXCtcIixlOlwiJFwifSx7Y046XCJkZWxldGlvblwiLGI6XCJeXFxcXC1cIixlOlwiJFwifSx7Y046XCJjaGFuZ2VcIixiOlwiXlxcXFwhXCIsZTpcIiRcIn1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcInZpbVwiLGZ1bmN0aW9uKGUpe3JldHVybntsOi9bISNAXFx3XSsvLGs6e2tleXdvcmQ6XCJOfDAgUHwwIFh8MCBhfDAgYWIgYWJjIGFibyBhbCBhbSBhbnwwIGFyIGFyZ2EgYXJnZCBhcmdlIGFyZ2RvIGFyZ2cgYXJnbCBhcmd1IGFzIGF1IGF1ZyBhdW4gYnwwIGJOIGJhIGJhZCBiZCBiZSBiZWwgYmYgYmwgYm0gYm4gYm8gYnAgYnIgYnJlYSBicmVha2EgYnJlYWtkIGJyZWFrbCBicm8gYnVmZG8gYnVmZmVycyBidW4gYncgY3wwIGNOIGNOZiBjYSBjYWJjIGNhZGRiIGNhZCBjYWRkZiBjYWwgY2F0IGNiIGNjIGNjbCBjZCBjZSBjZXggY2YgY2ZpciBjZ2V0YiBjZ2V0ZSBjZyBjaGFuZ2VzIGNoZCBjaGUgY2hlY2t0IGNsIGNsYSBjbG8gY20gY21hcGMgY21lIGNuIGNuZXcgY25mIGNubyBjbm9yZWEgY25vcmVtZSBjbyBjb2wgY29sbyBjb20gY29tYyBjb21wIGNvbiBjb25mIGNvcGUgY3AgY3BmIGNxIGNyIGNzIGNzdCBjdSBjdW5hIGN1bm1lIGN3IGR8MCBkZWxtIGRlYiBkZWJ1Z2cgZGVsYyBkZWxmIGRpZiBkaWZmZyBkaWZmbyBkaWZmcCBkaWZmcHUgZGlmZnMgZGlmZnRoaXMgZGlnIGRpIGRsIGRlbGwgZGogZGxpIGRvIGRvYXV0b2EgZHAgZHIgZHMgZHNwIGV8MCBlYSBlYyBlY2hvZSBlY2hvaCBlY2hvbSBlY2hvbiBlbCBlbHNlaSBlbSBlbiBlbmRmbyBlbmRmIGVuZHQgZW5kdyBlbmUgZXggZXhlIGV4aSBleHUgZnwwIGZpbGVzIGZpbGV0IGZpbiBmaW5hIGZpbmkgZmlyIGZpeCBmbyBmb2xkYyBmb2xkZCBmb2xkZG9jIGZvbGRvIGZvciBmdSBnfDAgZ28gZ3IgZ3JlcGEgZ3UgZ3YgaGEgaHwwIGhlbHBmIGhlbHBnIGhlbHB0IGhpIGhpZCBoaXMgaXwwIGlhIGlhYmMgaWYgaWogaWwgaW0gaW1hcGMgaW1lIGlubyBpbm9yZWEgaW5vcmVtZSBpbnQgaXMgaXNwIGl1IGl1bmEgaXVubWUganwwIGp1IGt8MCBrZWVwYSBrZWUga2VlcGogbE4gbE5mIGx8MCBsYWQgbGFkZGIgbGFkZGYgbGEgbGFuIGxhdCBsYiBsYyBsY2ggbGNsIGxjcyBsZSBsZWZ0YSBsZXQgbGV4IGxmIGxmaXIgbGdldGIgbGdldGUgbGcgbGdyIGxncmVwYSBsaCBsbCBsbGEgbGxpIGxtYWsgbG0gbG1hcGMgbG5lIGxuZXcgbG5mIGxuIGxvYWRrIGxvIGxvYyBsb2NrdiBsb2wgbG9wZSBscCBscGYgbHIgbHMgbHQgbHUgbHVhIGx1YWQgbHVhZiBsdiBsdmltZ3JlcGEgbHcgbXwwIG1hIG1hayBtYXAgbWFwYyBtYXJrcyBtYXQgbWUgbWVudXQgbWVzIG1rIG1rcyBta3NwIG1rdiBta3ZpZSBtb2QgbXogbXpmIG5iYyBuYiBuYnMgbnwwIG5ldyBubSBubWFwYyBubWUgbm4gbm5vcmVtZSBub2Egbm8gbm9oIG5vcmVhIG5vcmVtZSBub3JtIG51IG51biBudW5tZSBvbCBvfDAgb20gb21hcGMgb21lIG9uIG9ubyBvbm9yZW1lIG9wdCBvdSBvdW5tZSBvdyBwfDAgcHJvZmQgcHJvZiBwcm8gcHJvbXB0ciBwYyBwZWQgcGUgcGVybGQgcG8gcG9wdSBwcCBwcmUgcHJldiBwcyBwdCBwdE4gcHRmIHB0aiBwdGwgcHRuIHB0cCBwdHIgcHRzIHB1IHB3IHB5MyBweXRob24zIHB5M2QgcHkzZiBweSBweWQgcHlmIHF8MCBxdWl0YSBxYSByfDAgcmVjIHJlZCByZWRpIHJlZHIgcmVkcmF3cyByZWcgcmVzIHJldCByZXR1IHJldyByaSByaWdodGIgcnViIHJ1YnlkIHJ1YnlmIHJ1bmQgcnUgcnYgc3wwIHNOIHNhbiBzYSBzYWwgc2F2IHNiIHNiTiBzYmEgc2JmIHNibCBzYm0gc2JuIHNicCBzYnIgc2NyaXAgc2NyaXB0ZSBzY3Mgc2Ugc2V0ZiBzZXRnIHNldGwgc2Ygc2ZpciBzaCBzaW0gc2lnIHNpbCBzbCBzbGEgc20gc21hcCBzbWFwYyBzbWUgc24gc25pIHNubyBzbm9yIHNub3JlbWUgc29yIHNvIHNwZWxsZCBzcGUgc3BlbGxpIHNwZWxsciBzcGVsbHUgc3BlbGx3IHNwIHNwciBzcmUgc3Qgc3RhIHN0YXJ0ZyBzdGFydHIgc3RhciBzdG9waSBzdGogc3RzIHN1biBzdW5tIHN1bm1lIHN1cyBzdiBzdyBzeSBzeW50aSBzeW5jIHR8MCB0TiB0YWJOIHRhYmMgdGFiZG8gdGFiZSB0YWJmIHRhYmZpciB0YWJsIHRhYm0gdGFibmV3IHRhYm4gdGFibyB0YWJwIHRhYnIgdGFicyB0YWIgdGEgdGFncyB0YyB0Y2xkIHRjbGYgdGUgdGYgdGggdGogdGwgdG0gdG4gdG8gdHAgdHIgdHJ5IHRzIHR1IHV8MCB1bmRvaiB1bmRvbCB1bmEgdW5oIHVubCB1bmxvIHVubSB1bm1lIHVucyB1cCB2fDAgdmUgdmVyYiB2ZXJ0IHZpbSB2aW1ncmVwYSB2aSB2aXUgdmllIHZtIHZtYXBjIHZtZSB2bmUgdm4gdm5vcmVtZSB2cyB2dSB2dW5tZSB3aW5kbyB3fDAgd04gd2Egd2ggd2kgd2luYyB3aW5wIHduIHdwIHdxIHdxYSB3cyB3dSB3diB4fDAgeGEgeG1hcGMgeG0geG1lIHhuIHhub3JlbWUgeHUgeHVubWUgeXwwIHp8MCB+IE5leHQgUHJpbnQgYXBwZW5kIGFiYnJldmlhdGUgYWJjbGVhciBhYm92ZWxlZnQgYWxsIGFtZW51IGFub3JlbWVudSBhcmdzIGFyZ2FkZCBhcmdkZWxldGUgYXJnZWRpdCBhcmdnbG9iYWwgYXJnbG9jYWwgYXJndW1lbnQgYXNjaWkgYXV0b2NtZCBhdWdyb3VwIGF1bm1lbnUgYnVmZmVyIGJOZXh0IGJhbGwgYmFkZCBiZGVsZXRlIGJlaGF2ZSBiZWxvd3JpZ2h0IGJmaXJzdCBibGFzdCBibW9kaWZpZWQgYm5leHQgYm90cmlnaHQgYnByZXZpb3VzIGJyZXdpbmQgYnJlYWsgYnJlYWthZGQgYnJlYWtkZWwgYnJlYWtsaXN0IGJyb3dzZSBidW5sb2FkIGJ3aXBlb3V0IGNoYW5nZSBjTmV4dCBjTmZpbGUgY2FiYnJldiBjYWJjbGVhciBjYWRkYnVmZmVyIGNhZGRleHByIGNhZGRmaWxlIGNhbGwgY2F0Y2ggY2J1ZmZlciBjY2xvc2UgY2VudGVyIGNleHByIGNmaWxlIGNmaXJzdCBjZ2V0YnVmZmVyIGNnZXRleHByIGNnZXRmaWxlIGNoZGlyIGNoZWNrcGF0aCBjaGVja3RpbWUgY2xpc3QgY2xhc3QgY2xvc2UgY21hcCBjbWFwY2xlYXIgY21lbnUgY25leHQgY25ld2VyIGNuZmlsZSBjbm9yZW1hcCBjbm9yZWFiYnJldiBjbm9yZW1lbnUgY29weSBjb2xkZXIgY29sb3JzY2hlbWUgY29tbWFuZCBjb21jbGVhciBjb21waWxlciBjb250aW51ZSBjb25maXJtIGNvcGVuIGNwcmV2aW91cyBjcGZpbGUgY3F1aXQgY3Jld2luZCBjc2NvcGUgY3N0YWcgY3VubWFwIGN1bmFiYnJldiBjdW5tZW51IGN3aW5kb3cgZGVsZXRlIGRlbG1hcmtzIGRlYnVnIGRlYnVnZ3JlZWR5IGRlbGNvbW1hbmQgZGVsZnVuY3Rpb24gZGlmZnVwZGF0ZSBkaWZmZ2V0IGRpZmZvZmYgZGlmZnBhdGNoIGRpZmZwdXQgZGlmZnNwbGl0IGRpZ3JhcGhzIGRpc3BsYXkgZGVsZXRlbCBkanVtcCBkbGlzdCBkb2F1dG9jbWQgZG9hdXRvYWxsIGRlbGV0ZXAgZHJvcCBkc2VhcmNoIGRzcGxpdCBlZGl0IGVhcmxpZXIgZWNobyBlY2hvZXJyIGVjaG9obCBlY2hvbXNnIGVsc2UgZWxzZWlmIGVtZW51IGVuZGlmIGVuZGZvciBlbmRmdW5jdGlvbiBlbmR0cnkgZW5kd2hpbGUgZW5ldyBleGVjdXRlIGV4aXQgZXh1c2FnZSBmaWxlIGZpbGV0eXBlIGZpbmQgZmluYWxseSBmaW5pc2ggZmlyc3QgZml4ZGVsIGZvbGQgZm9sZGNsb3NlIGZvbGRkb29wZW4gZm9sZGRvY2xvc2VkIGZvbGRvcGVuIGZ1bmN0aW9uIGdsb2JhbCBnb3RvIGdyZXAgZ3JlcGFkZCBndWkgZ3ZpbSBoYXJkY29weSBoZWxwIGhlbHBmaW5kIGhlbHBncmVwIGhlbHB0YWdzIGhpZ2hsaWdodCBoaWRlIGhpc3RvcnkgaW5zZXJ0IGlhYmJyZXYgaWFiY2xlYXIgaWp1bXAgaWxpc3QgaW1hcCBpbWFwY2xlYXIgaW1lbnUgaW5vcmVtYXAgaW5vcmVhYmJyZXYgaW5vcmVtZW51IGludHJvIGlzZWFyY2ggaXNwbGl0IGl1bm1hcCBpdW5hYmJyZXYgaXVubWVudSBqb2luIGp1bXBzIGtlZXBhbHQga2VlcG1hcmtzIGtlZXBqdW1wcyBsTmV4dCBsTmZpbGUgbGlzdCBsYWRkZXhwciBsYWRkYnVmZmVyIGxhZGRmaWxlIGxhc3QgbGFuZ3VhZ2UgbGF0ZXIgbGJ1ZmZlciBsY2QgbGNoZGlyIGxjbG9zZSBsY3Njb3BlIGxlZnQgbGVmdGFib3ZlIGxleHByIGxmaWxlIGxmaXJzdCBsZ2V0YnVmZmVyIGxnZXRleHByIGxnZXRmaWxlIGxncmVwIGxncmVwYWRkIGxoZWxwZ3JlcCBsbGFzdCBsbGlzdCBsbWFrZSBsbWFwIGxtYXBjbGVhciBsbmV4dCBsbmV3ZXIgbG5maWxlIGxub3JlbWFwIGxvYWRrZXltYXAgbG9hZHZpZXcgbG9ja21hcmtzIGxvY2t2YXIgbG9sZGVyIGxvcGVuIGxwcmV2aW91cyBscGZpbGUgbHJld2luZCBsdGFnIGx1bm1hcCBsdWFkbyBsdWFmaWxlIGx2aW1ncmVwIGx2aW1ncmVwYWRkIGx3aW5kb3cgbW92ZSBtYXJrIG1ha2UgbWFwY2xlYXIgbWF0Y2ggbWVudSBtZW51dHJhbnNsYXRlIG1lc3NhZ2VzIG1rZXhyYyBta3Nlc3Npb24gbWtzcGVsbCBta3ZpbXJjIG1rdmlldyBtb2RlIG16c2NoZW1lIG16ZmlsZSBuYmNsb3NlIG5ia2V5IG5ic2FydCBuZXh0IG5tYXAgbm1hcGNsZWFyIG5tZW51IG5ub3JlbWFwIG5ub3JlbWVudSBub2F1dG9jbWQgbm9yZW1hcCBub2hsc2VhcmNoIG5vcmVhYmJyZXYgbm9yZW1lbnUgbm9ybWFsIG51bWJlciBudW5tYXAgbnVubWVudSBvbGRmaWxlcyBvcGVuIG9tYXAgb21hcGNsZWFyIG9tZW51IG9ubHkgb25vcmVtYXAgb25vcmVtZW51IG9wdGlvbnMgb3VubWFwIG91bm1lbnUgb3duc3ludGF4IHByaW50IHByb2ZkZWwgcHJvZmlsZSBwcm9tcHRmaW5kIHByb21wdHJlcGwgcGNsb3NlIHBlZGl0IHBlcmwgcGVybGRvIHBvcCBwb3B1cCBwcG9wIHByZXNlcnZlIHByZXZpb3VzIHBzZWFyY2ggcHRhZyBwdE5leHQgcHRmaXJzdCBwdGp1bXAgcHRsYXN0IHB0bmV4dCBwdHByZXZpb3VzIHB0cmV3aW5kIHB0c2VsZWN0IHB1dCBwd2QgcHkzZG8gcHkzZmlsZSBweXRob24gcHlkbyBweWZpbGUgcXVpdCBxdWl0YWxsIHFhbGwgcmVhZCByZWNvdmVyIHJlZG8gcmVkaXIgcmVkcmF3IHJlZHJhd3N0YXR1cyByZWdpc3RlcnMgcmVzaXplIHJldGFiIHJldHVybiByZXdpbmQgcmlnaHQgcmlnaHRiZWxvdyBydWJ5IHJ1YnlkbyBydWJ5ZmlsZSBydW5kbyBydW50aW1lIHJ2aW1pbmZvIHN1YnN0aXR1dGUgc05leHQgc2FuZGJveCBzYXJndW1lbnQgc2FsbCBzYXZlYXMgc2J1ZmZlciBzYk5leHQgc2JhbGwgc2JmaXJzdCBzYmxhc3Qgc2Jtb2RpZmllZCBzYm5leHQgc2JwcmV2aW91cyBzYnJld2luZCBzY3JpcHRuYW1lcyBzY3JpcHRlbmNvZGluZyBzY3Njb3BlIHNldCBzZXRmaWxldHlwZSBzZXRnbG9iYWwgc2V0bG9jYWwgc2ZpbmQgc2ZpcnN0IHNoZWxsIHNpbWFsdCBzaWduIHNpbGVudCBzbGVlcCBzbGFzdCBzbWFnaWMgc21hcGNsZWFyIHNtZW51IHNuZXh0IHNuaWZmIHNub21hZ2ljIHNub3JlbWFwIHNub3JlbWVudSBzb3J0IHNvdXJjZSBzcGVsbGR1bXAgc3BlbGxnb29kIHNwZWxsaW5mbyBzcGVsbHJlcGFsbCBzcGVsbHVuZG8gc3BlbGx3cm9uZyBzcGxpdCBzcHJldmlvdXMgc3Jld2luZCBzdG9wIHN0YWcgc3RhcnRncmVwbGFjZSBzdGFydHJlcGxhY2Ugc3RhcnRpbnNlcnQgc3RvcGluc2VydCBzdGp1bXAgc3RzZWxlY3Qgc3VuaGlkZSBzdW5tYXAgc3VubWVudSBzdXNwZW5kIHN2aWV3IHN3YXBuYW1lIHN5bnRheCBzeW50aW1lIHN5bmNiaW5kIHROZXh0IHRhYk5leHQgdGFiY2xvc2UgdGFiZWRpdCB0YWJmaW5kIHRhYmZpcnN0IHRhYmxhc3QgdGFibW92ZSB0YWJuZXh0IHRhYm9ubHkgdGFicHJldmlvdXMgdGFicmV3aW5kIHRhZyB0Y2wgdGNsZG8gdGNsZmlsZSB0ZWFyb2ZmIHRmaXJzdCB0aHJvdyB0anVtcCB0bGFzdCB0bWVudSB0bmV4dCB0b3BsZWZ0IHRwcmV2aW91cyB0cmV3aW5kIHRzZWxlY3QgdHVubWVudSB1bmRvIHVuZG9qb2luIHVuZG9saXN0IHVuYWJicmV2aWF0ZSB1bmhpZGUgdW5sZXQgdW5sb2NrdmFyIHVubWFwIHVubWVudSB1bnNpbGVudCB1cGRhdGUgdmdsb2JhbCB2ZXJzaW9uIHZlcmJvc2UgdmVydGljYWwgdmltZ3JlcCB2aW1ncmVwYWRkIHZpc3VhbCB2aXVzYWdlIHZpZXcgdm1hcCB2bWFwY2xlYXIgdm1lbnUgdm5ldyB2bm9yZW1hcCB2bm9yZW1lbnUgdnNwbGl0IHZ1bm1hcCB2dW5tZW51IHdyaXRlIHdOZXh0IHdhbGwgd2hpbGUgd2luc2l6ZSB3aW5jbWQgd2lucG9zIHduZXh0IHdwcmV2aW91cyB3cWFsbCB3c3ZlcmIgd3VuZG8gd3ZpbWluZm8geGl0IHhhbGwgeG1hcGNsZWFyIHhtYXAgeG1lbnUgeG5vcmVtYXAgeG5vcmVtZW51IHh1bm1hcCB4dW5tZW51IHlhbmtcIixidWlsdF9pbjpcImFicyBhY29zIGFkZCBhbmQgYXBwZW5kIGFyZ2MgYXJnaWR4IGFyZ3YgYXNpbiBhdGFuIGF0YW4yIGJyb3dzZSBicm93c2VkaXIgYnVmZXhpc3RzIGJ1Zmxpc3RlZCBidWZsb2FkZWQgYnVmbmFtZSBidWZuciBidWZ3aW5uciBieXRlMmxpbmUgYnl0ZWlkeCBjYWxsIGNlaWwgY2hhbmdlbnIgY2hhcjJuciBjaW5kZW50IGNsZWFybWF0Y2hlcyBjb2wgY29tcGxldGUgY29tcGxldGVfYWRkIGNvbXBsZXRlX2NoZWNrIGNvbmZpcm0gY29weSBjb3MgY29zaCBjb3VudCBjc2NvcGVfY29ubmVjdGlvbiBjdXJzb3IgZGVlcGNvcHkgZGVsZXRlIGRpZF9maWxldHlwZSBkaWZmX2ZpbGxlciBkaWZmX2hsSUQgZW1wdHkgZXNjYXBlIGV2YWwgZXZlbnRoYW5kbGVyIGV4ZWN1dGFibGUgZXhpc3RzIGV4cCBleHBhbmQgZXh0ZW5kIGZlZWRrZXlzIGZpbGVyZWFkYWJsZSBmaWxld3JpdGFibGUgZmlsdGVyIGZpbmRkaXIgZmluZGZpbGUgZmxvYXQybnIgZmxvb3IgZm1vZCBmbmFtZWVzY2FwZSBmbmFtZW1vZGlmeSBmb2xkY2xvc2VkIGZvbGRjbG9zZWRlbmQgZm9sZGxldmVsIGZvbGR0ZXh0IGZvbGR0ZXh0cmVzdWx0IGZvcmVncm91bmQgZnVuY3Rpb24gZ2FyYmFnZWNvbGxlY3QgZ2V0IGdldGJ1ZmxpbmUgZ2V0YnVmdmFyIGdldGNoYXIgZ2V0Y2hhcm1vZCBnZXRjbWRsaW5lIGdldGNtZHBvcyBnZXRjbWR0eXBlIGdldGN3ZCBnZXRmb250bmFtZSBnZXRmcGVybSBnZXRmc2l6ZSBnZXRmdGltZSBnZXRmdHlwZSBnZXRsaW5lIGdldGxvY2xpc3QgZ2V0bWF0Y2hlcyBnZXRwaWQgZ2V0cG9zIGdldHFmbGlzdCBnZXRyZWcgZ2V0cmVndHlwZSBnZXR0YWJ2YXIgZ2V0dGFid2ludmFyIGdldHdpbnBvc3ggZ2V0d2lucG9zeSBnZXR3aW52YXIgZ2xvYiBnbG9icGF0aCBoYXMgaGFzX2tleSBoYXNsb2NhbGRpciBoYXNtYXB0byBoaXN0YWRkIGhpc3RkZWwgaGlzdGdldCBoaXN0bnIgaGxleGlzdHMgaGxJRCBob3N0bmFtZSBpY29udiBpbmRlbnQgaW5kZXggaW5wdXQgaW5wdXRkaWFsb2cgaW5wdXRsaXN0IGlucHV0cmVzdG9yZSBpbnB1dHNhdmUgaW5wdXRzZWNyZXQgaW5zZXJ0IGludmVydCBpc2RpcmVjdG9yeSBpc2xvY2tlZCBpdGVtcyBqb2luIGtleXMgbGVuIGxpYmNhbGwgbGliY2FsbG5yIGxpbmUgbGluZTJieXRlIGxpc3BpbmRlbnQgbG9jYWx0aW1lIGxvZyBsb2cxMCBsdWFldmFsIG1hcCBtYXBhcmcgbWFwY2hlY2sgbWF0Y2ggbWF0Y2hhZGQgbWF0Y2hhcmcgbWF0Y2hkZWxldGUgbWF0Y2hlbmQgbWF0Y2hsaXN0IG1hdGNoc3RyIG1heCBtaW4gbWtkaXIgbW9kZSBtemV2YWwgbmV4dG5vbmJsYW5rIG5yMmNoYXIgb3IgcGF0aHNob3J0ZW4gcG93IHByZXZub25ibGFuayBwcmludGYgcHVtdmlzaWJsZSBweTNldmFsIHB5ZXZhbCByYW5nZSByZWFkZmlsZSByZWx0aW1lIHJlbHRpbWVzdHIgcmVtb3RlX2V4cHIgcmVtb3RlX2ZvcmVncm91bmQgcmVtb3RlX3BlZWsgcmVtb3RlX3JlYWQgcmVtb3RlX3NlbmQgcmVtb3ZlIHJlbmFtZSByZXBlYXQgcmVzb2x2ZSByZXZlcnNlIHJvdW5kIHNjcmVlbmF0dHIgc2NyZWVuY2hhciBzY3JlZW5jb2wgc2NyZWVucm93IHNlYXJjaCBzZWFyY2hkZWNsIHNlYXJjaHBhaXIgc2VhcmNocGFpcnBvcyBzZWFyY2hwb3Mgc2VydmVyMmNsaWVudCBzZXJ2ZXJsaXN0IHNldGJ1ZnZhciBzZXRjbWRwb3Mgc2V0bGluZSBzZXRsb2NsaXN0IHNldG1hdGNoZXMgc2V0cG9zIHNldHFmbGlzdCBzZXRyZWcgc2V0dGFidmFyIHNldHRhYndpbnZhciBzZXR3aW52YXIgc2hhMjU2IHNoZWxsZXNjYXBlIHNoaWZ0d2lkdGggc2ltcGxpZnkgc2luIHNpbmggc29ydCBzb3VuZGZvbGQgc3BlbGxiYWR3b3JkIHNwZWxsc3VnZ2VzdCBzcGxpdCBzcXJ0IHN0cjJmbG9hdCBzdHIybnIgc3RyY2hhcnMgc3RyZGlzcGxheXdpZHRoIHN0cmZ0aW1lIHN0cmlkeCBzdHJpbmcgc3RybGVuIHN0cnBhcnQgc3RycmlkeCBzdHJ0cmFucyBzdHJ3aWR0aCBzdWJtYXRjaCBzdWJzdGl0dXRlIHN5bmNvbmNlYWxlZCBzeW5JRCBzeW5JRGF0dHIgc3luSUR0cmFucyBzeW5zdGFjayBzeXN0ZW0gdGFicGFnZWJ1Zmxpc3QgdGFicGFnZW5yIHRhYnBhZ2V3aW5uciB0YWdmaWxlcyB0YWdsaXN0IHRhbiB0YW5oIHRlbXBuYW1lIHRvbG93ZXIgdG91cHBlciB0ciB0cnVuYyB0eXBlIHVuZG9maWxlIHVuZG90cmVlIHZhbHVlcyB2aXJ0Y29sIHZpc3VhbG1vZGUgd2lsZG1lbnVtb2RlIHdpbmJ1Zm5yIHdpbmNvbCB3aW5oZWlnaHQgd2lubGluZSB3aW5uciB3aW5yZXN0Y21kIHdpbnJlc3R2aWV3IHdpbnNhdmV2aWV3IHdpbndpZHRoIHdyaXRlZmlsZSB4b3JcIn0saTovW3s6XS8sYzpbZS5OTSxlLkFTTSx7Y046XCJzdHJpbmdcIixiOi9cIigoXFxcXFwiKXxbXlwiXFxuXSkqKFwifFxcbikvfSx7Y046XCJ2YXJpYWJsZVwiLGI6L1tid3RnbHNhdl06W1xcd1xcZF9dKi99LHtjTjpcImZ1bmN0aW9uXCIsYks6XCJmdW5jdGlvbiBmdW5jdGlvbiFcIixlOlwiJFwiLHI6MCxjOltlLlRNLHtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwifV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJ0eXBlc2NyaXB0XCIsZnVuY3Rpb24oZSl7cmV0dXJue2FsaWFzZXM6W1widHNcIl0sazp7a2V5d29yZDpcImluIGlmIGZvciB3aGlsZSBmaW5hbGx5IHZhciBuZXcgZnVuY3Rpb258MCBkbyByZXR1cm4gdm9pZCBlbHNlIGJyZWFrIGNhdGNoIGluc3RhbmNlb2Ygd2l0aCB0aHJvdyBjYXNlIGRlZmF1bHQgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHR5cGVvZiBkZWxldGUgbGV0IHlpZWxkIGNvbnN0IGNsYXNzIHB1YmxpYyBwcml2YXRlIGdldCBzZXQgc3VwZXIgaW50ZXJmYWNlIGV4dGVuZHNzdGF0aWMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBlbnVtIGV4cG9ydCBpbXBvcnQgZGVjbGFyZVwiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlIG51bGwgdW5kZWZpbmVkIE5hTiBJbmZpbml0eVwiLGJ1aWx0X2luOlwiZXZhbCBpc0Zpbml0ZSBpc05hTiBwYXJzZUZsb2F0IHBhcnNlSW50IGRlY29kZVVSSSBkZWNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJIGVuY29kZVVSSUNvbXBvbmVudCBlc2NhcGUgdW5lc2NhcGUgT2JqZWN0IEZ1bmN0aW9uIEJvb2xlYW4gRXJyb3IgRXZhbEVycm9yIEludGVybmFsRXJyb3IgUmFuZ2VFcnJvciBSZWZlcmVuY2VFcnJvciBTdG9wSXRlcmF0aW9uIFN5bnRheEVycm9yIFR5cGVFcnJvciBVUklFcnJvciBOdW1iZXIgTWF0aCBEYXRlIFN0cmluZyBSZWdFeHAgQXJyYXkgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheSBJbnQxNkFycmF5IEludDMyQXJyYXkgSW50OEFycmF5IFVpbnQxNkFycmF5IFVpbnQzMkFycmF5IFVpbnQ4QXJyYXkgVWludDhDbGFtcGVkQXJyYXkgQXJyYXlCdWZmZXIgRGF0YVZpZXcgSlNPTiBJbnRsIGFyZ3VtZW50cyByZXF1aXJlIG1vZHVsZSBjb25zb2xlIHdpbmRvdyBkb2N1bWVudCBhbnkgbnVtYmVyIGJvb2xlYW4gc3RyaW5nIHZvaWRcIn0sYzpbe2NOOlwicGlcIixiOi9eXFxzKignfFwiKXVzZSBzdHJpY3QoJ3xcIikvLHI6MH0sZS5BU00sZS5RU00sZS5DTENNLGUuQ0JDTSxlLkNOTSx7YjpcIihcIitlLlJTUitcInxcXFxcYihjYXNlfHJldHVybnx0aHJvdylcXFxcYilcXFxccypcIixrOlwicmV0dXJuIHRocm93IGNhc2VcIixjOltlLkNMQ00sZS5DQkNNLGUuUk0se2I6LzwvLGU6Lz47LyxyOjAsc0w6XCJ4bWxcIn1dLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiSzpcImZ1bmN0aW9uXCIsZTovXFx7LyxlRTohMCxjOltlLmluaGVyaXQoZS5UTSx7YjovW0EtWmEteiRfXVswLTlBLVphLXokX10qL30pLHtjTjpcInBhcmFtc1wiLGI6L1xcKC8sZTovXFwpLyxjOltlLkNMQ00sZS5DQkNNXSxpOi9bXCInXFwoXS99XSxpOi9cXFt8JS8scjowfSx7Y046XCJjb25zdHJ1Y3RvclwiLGJLOlwiY29uc3RydWN0b3JcIixlOi9cXHsvLGVFOiEwLHI6MTB9LHtjTjpcIm1vZHVsZVwiLGJLOlwibW9kdWxlXCIsZTovXFx7LyxlRTohMH0se2NOOlwiaW50ZXJmYWNlXCIsYks6XCJpbnRlcmZhY2VcIixlOi9cXHsvLGVFOiEwfSx7YjovXFwkWyguXS99LHtiOlwiXFxcXC5cIitlLklSLHI6MH1dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImphdmFzY3JpcHRcIixmdW5jdGlvbihyKXtyZXR1cm57YWxpYXNlczpbXCJqc1wiXSxrOntrZXl3b3JkOlwiaW4gaWYgZm9yIHdoaWxlIGZpbmFsbHkgdmFyIG5ldyBmdW5jdGlvbiBkbyByZXR1cm4gdm9pZCBlbHNlIGJyZWFrIGNhdGNoIGluc3RhbmNlb2Ygd2l0aCB0aHJvdyBjYXNlIGRlZmF1bHQgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHR5cGVvZiBkZWxldGUgbGV0IHlpZWxkIGNvbnN0IGNsYXNzXCIsbGl0ZXJhbDpcInRydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgTmFOIEluZmluaXR5XCIsYnVpbHRfaW46XCJldmFsIGlzRmluaXRlIGlzTmFOIHBhcnNlRmxvYXQgcGFyc2VJbnQgZGVjb2RlVVJJIGRlY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUkkgZW5jb2RlVVJJQ29tcG9uZW50IGVzY2FwZSB1bmVzY2FwZSBPYmplY3QgRnVuY3Rpb24gQm9vbGVhbiBFcnJvciBFdmFsRXJyb3IgSW50ZXJuYWxFcnJvciBSYW5nZUVycm9yIFJlZmVyZW5jZUVycm9yIFN0b3BJdGVyYXRpb24gU3ludGF4RXJyb3IgVHlwZUVycm9yIFVSSUVycm9yIE51bWJlciBNYXRoIERhdGUgU3RyaW5nIFJlZ0V4cCBBcnJheSBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBJbnQ4QXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBBcnJheUJ1ZmZlciBEYXRhVmlldyBKU09OIEludGwgYXJndW1lbnRzIHJlcXVpcmUgbW9kdWxlIGNvbnNvbGUgd2luZG93IGRvY3VtZW50XCJ9LGM6W3tjTjpcInBpXCIscjoxMCx2Olt7YjovXlxccyooJ3xcIil1c2Ugc3RyaWN0KCd8XCIpL30se2I6L15cXHMqKCd8XCIpdXNlIGFzbSgnfFwiKS99XX0sci5BU00sci5RU00sci5DTENNLHIuQ0JDTSxyLkNOTSx7YjpcIihcIityLlJTUitcInxcXFxcYihjYXNlfHJldHVybnx0aHJvdylcXFxcYilcXFxccypcIixrOlwicmV0dXJuIHRocm93IGNhc2VcIixjOltyLkNMQ00sci5DQkNNLHIuUk0se2I6LzwvLGU6Lz47LyxyOjAsc0w6XCJ4bWxcIn1dLHI6MH0se2NOOlwiZnVuY3Rpb25cIixiSzpcImZ1bmN0aW9uXCIsZTovXFx7LyxlRTohMCxjOltyLmluaGVyaXQoci5UTSx7YjovW0EtWmEteiRfXVswLTlBLVphLXokX10qL30pLHtjTjpcInBhcmFtc1wiLGI6L1xcKC8sZTovXFwpLyxjOltyLkNMQ00sci5DQkNNXSxpOi9bXCInXFwoXS99XSxpOi9cXFt8JS99LHtiOi9cXCRbKC5dL30se2I6XCJcXFxcLlwiK3IuSVIscjowfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwibHVhXCIsZnVuY3Rpb24oZSl7dmFyIHQ9XCJcXFxcWz0qXFxcXFtcIixhPVwiXFxcXF09KlxcXFxdXCIscj17Yjp0LGU6YSxjOltcInNlbGZcIl19LG49W3tjTjpcImNvbW1lbnRcIixiOlwiLS0oPyFcIit0K1wiKVwiLGU6XCIkXCJ9LHtjTjpcImNvbW1lbnRcIixiOlwiLS1cIit0LGU6YSxjOltyXSxyOjEwfV07cmV0dXJue2w6ZS5VSVIsazp7a2V5d29yZDpcImFuZCBicmVhayBkbyBlbHNlIGVsc2VpZiBlbmQgZmFsc2UgZm9yIGlmIGluIGxvY2FsIG5pbCBub3Qgb3IgcmVwZWF0IHJldHVybiB0aGVuIHRydWUgdW50aWwgd2hpbGVcIixidWlsdF9pbjpcIl9HIF9WRVJTSU9OIGFzc2VydCBjb2xsZWN0Z2FyYmFnZSBkb2ZpbGUgZXJyb3IgZ2V0ZmVudiBnZXRtZXRhdGFibGUgaXBhaXJzIGxvYWQgbG9hZGZpbGUgbG9hZHN0cmluZyBtb2R1bGUgbmV4dCBwYWlycyBwY2FsbCBwcmludCByYXdlcXVhbCByYXdnZXQgcmF3c2V0IHJlcXVpcmUgc2VsZWN0IHNldGZlbnYgc2V0bWV0YXRhYmxlIHRvbnVtYmVyIHRvc3RyaW5nIHR5cGUgdW5wYWNrIHhwY2FsbCBjb3JvdXRpbmUgZGVidWcgaW8gbWF0aCBvcyBwYWNrYWdlIHN0cmluZyB0YWJsZVwifSxjOm4uY29uY2F0KFt7Y046XCJmdW5jdGlvblwiLGJLOlwiZnVuY3Rpb25cIixlOlwiXFxcXClcIixjOltlLmluaGVyaXQoZS5UTSx7YjpcIihbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3KlwifSkse2NOOlwicGFyYW1zXCIsYjpcIlxcXFwoXCIsZVc6ITAsYzpufV0uY29uY2F0KG4pfSxlLkNOTSxlLkFTTSxlLlFTTSx7Y046XCJzdHJpbmdcIixiOnQsZTphLGM6W3JdLHI6NX1dKX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJkamFuZ29cIixmdW5jdGlvbigpe3ZhciBlPXtjTjpcImZpbHRlclwiLGI6L1xcfFtBLVphLXpdK1xcOj8vLGs6XCJ0cnVuY2F0ZXdvcmRzIHJlbW92ZXRhZ3MgbGluZWJyZWFrc2JyIHllc25vIGdldF9kaWdpdCB0aW1lc2luY2UgcmFuZG9tIHN0cmlwdGFncyBmaWxlc2l6ZWZvcm1hdCBlc2NhcGUgbGluZWJyZWFrcyBsZW5ndGhfaXMgbGp1c3Qgcmp1c3QgY3V0IHVybGl6ZSBmaXhfYW1wZXJzYW5kcyB0aXRsZSBmbG9hdGZvcm1hdCBjYXBmaXJzdCBwcHJpbnQgZGl2aXNpYmxlYnkgYWRkIG1ha2VfbGlzdCB1bm9yZGVyZWRfbGlzdCB1cmxlbmNvZGUgdGltZXVudGlsIHVybGl6ZXRydW5jIHdvcmRjb3VudCBzdHJpbmdmb3JtYXQgbGluZW51bWJlcnMgc2xpY2UgZGF0ZSBkaWN0c29ydCBkaWN0c29ydHJldmVyc2VkIGRlZmF1bHRfaWZfbm9uZSBwbHVyYWxpemUgbG93ZXIgam9pbiBjZW50ZXIgZGVmYXVsdCB0cnVuY2F0ZXdvcmRzX2h0bWwgdXBwZXIgbGVuZ3RoIHBob25lMm51bWVyaWMgd29yZHdyYXAgdGltZSBhZGRzbGFzaGVzIHNsdWdpZnkgZmlyc3QgZXNjYXBlanMgZm9yY2VfZXNjYXBlIGlyaWVuY29kZSBsYXN0IHNhZmUgc2FmZXNlcSB0cnVuY2F0ZWNoYXJzIGxvY2FsaXplIHVubG9jYWxpemUgbG9jYWx0aW1lIHV0YyB0aW1lem9uZVwiLGM6W3tjTjpcImFyZ3VtZW50XCIsYjovXCIvLGU6L1wiL30se2NOOlwiYXJndW1lbnRcIixiOi8nLyxlOi8nL31dfTtyZXR1cm57YWxpYXNlczpbXCJqaW5qYVwiXSxjSTohMCxzTDpcInhtbFwiLHN1Ykxhbmd1YWdlTW9kZTpcImNvbnRpbnVvdXNcIixjOlt7Y046XCJjb21tZW50XCIsYjovXFx7JVxccypjb21tZW50XFxzKiV9LyxlOi9cXHslXFxzKmVuZGNvbW1lbnRcXHMqJX0vfSx7Y046XCJjb21tZW50XCIsYjovXFx7Iy8sZTovI30vfSx7Y046XCJ0ZW1wbGF0ZV90YWdcIixiOi9cXHslLyxlOi8lfS8sazpcImNvbW1lbnQgZW5kY29tbWVudCBsb2FkIHRlbXBsYXRldGFnIGlmY2hhbmdlZCBlbmRpZmNoYW5nZWQgaWYgZW5kaWYgZmlyc3RvZiBmb3IgZW5kZm9yIGluIGlmbm90ZXF1YWwgZW5kaWZub3RlcXVhbCB3aWR0aHJhdGlvIGV4dGVuZHMgaW5jbHVkZSBzcGFjZWxlc3MgZW5kc3BhY2VsZXNzIHJlZ3JvdXAgYnkgYXMgaWZlcXVhbCBlbmRpZmVxdWFsIHNzaSBub3cgd2l0aCBjeWNsZSB1cmwgZmlsdGVyIGVuZGZpbHRlciBkZWJ1ZyBibG9jayBlbmRibG9jayBlbHNlIGF1dG9lc2NhcGUgZW5kYXV0b2VzY2FwZSBjc3JmX3Rva2VuIGVtcHR5IGVsaWYgZW5kd2l0aCBzdGF0aWMgdHJhbnMgYmxvY2t0cmFucyBlbmRibG9ja3RyYW5zIGdldF9zdGF0aWNfcHJlZml4IGdldF9tZWRpYV9wcmVmaXggcGx1cmFsIGdldF9jdXJyZW50X2xhbmd1YWdlIGxhbmd1YWdlIGdldF9hdmFpbGFibGVfbGFuZ3VhZ2VzIGdldF9jdXJyZW50X2xhbmd1YWdlX2JpZGkgZ2V0X2xhbmd1YWdlX2luZm8gZ2V0X2xhbmd1YWdlX2luZm9fbGlzdCBsb2NhbGl6ZSBlbmRsb2NhbGl6ZSBsb2NhbHRpbWUgZW5kbG9jYWx0aW1lIHRpbWV6b25lIGVuZHRpbWV6b25lIGdldF9jdXJyZW50X3RpbWV6b25lIHZlcmJhdGltXCIsYzpbZV19LHtjTjpcInZhcmlhYmxlXCIsYjovXFx7XFx7LyxlOi99fS8sYzpbZV19XX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJzY2hlbWVcIixmdW5jdGlvbihlKXt2YXIgdD1cIlteXFxcXChcXFxcKVxcXFxbXFxcXF1cXFxce1xcXFx9XFxcIiwnYDsjfFxcXFxcXFxcXFxcXHNdK1wiLHI9XCIoXFxcXC18XFxcXCspP1xcXFxkKyhbLi9dXFxcXGQrKT9cIixpPXIrXCJbK1xcXFwtXVwiK3IrXCJpXCIsYT17YnVpbHRfaW46XCJjYXNlLWxhbWJkYSBjYWxsL2NjIGNsYXNzIGRlZmluZS1jbGFzcyBleGl0LWhhbmRsZXIgZmllbGQgaW1wb3J0IGluaGVyaXQgaW5pdC1maWVsZCBpbnRlcmZhY2UgbGV0Ki12YWx1ZXMgbGV0LXZhbHVlcyBsZXQvZWMgbWl4aW4gb3B0LWxhbWJkYSBvdmVycmlkZSBwcm90ZWN0IHByb3ZpZGUgcHVibGljIHJlbmFtZSByZXF1aXJlIHJlcXVpcmUtZm9yLXN5bnRheCBzeW50YXggc3ludGF4LWNhc2Ugc3ludGF4LWVycm9yIHVuaXQvc2lnIHVubGVzcyB3aGVuIHdpdGgtc3ludGF4IGFuZCBiZWdpbiBjYWxsLXdpdGgtY3VycmVudC1jb250aW51YXRpb24gY2FsbC13aXRoLWlucHV0LWZpbGUgY2FsbC13aXRoLW91dHB1dC1maWxlIGNhc2UgY29uZCBkZWZpbmUgZGVmaW5lLXN5bnRheCBkZWxheSBkbyBkeW5hbWljLXdpbmQgZWxzZSBmb3ItZWFjaCBpZiBsYW1iZGEgbGV0IGxldCogbGV0LXN5bnRheCBsZXRyZWMgbGV0cmVjLXN5bnRheCBtYXAgb3Igc3ludGF4LXJ1bGVzICcgKiArICwgLEAgLSAuLi4gLyA7IDwgPD0gPSA9PiA+ID49IGAgYWJzIGFjb3MgYW5nbGUgYXBwZW5kIGFwcGx5IGFzaW4gYXNzb2MgYXNzcSBhc3N2IGF0YW4gYm9vbGVhbj8gY2FhciBjYWRyIGNhbGwtd2l0aC1pbnB1dC1maWxlIGNhbGwtd2l0aC1vdXRwdXQtZmlsZSBjYWxsLXdpdGgtdmFsdWVzIGNhciBjZGRkYXIgY2RkZGRyIGNkciBjZWlsaW5nIGNoYXItPmludGVnZXIgY2hhci1hbHBoYWJldGljPyBjaGFyLWNpPD0/IGNoYXItY2k8PyBjaGFyLWNpPT8gY2hhci1jaT49PyBjaGFyLWNpPj8gY2hhci1kb3duY2FzZSBjaGFyLWxvd2VyLWNhc2U/IGNoYXItbnVtZXJpYz8gY2hhci1yZWFkeT8gY2hhci11cGNhc2UgY2hhci11cHBlci1jYXNlPyBjaGFyLXdoaXRlc3BhY2U/IGNoYXI8PT8gY2hhcjw/IGNoYXI9PyBjaGFyPj0/IGNoYXI+PyBjaGFyPyBjbG9zZS1pbnB1dC1wb3J0IGNsb3NlLW91dHB1dC1wb3J0IGNvbXBsZXg/IGNvbnMgY29zIGN1cnJlbnQtaW5wdXQtcG9ydCBjdXJyZW50LW91dHB1dC1wb3J0IGRlbm9taW5hdG9yIGRpc3BsYXkgZW9mLW9iamVjdD8gZXE/IGVxdWFsPyBlcXY/IGV2YWwgZXZlbj8gZXhhY3QtPmluZXhhY3QgZXhhY3Q/IGV4cCBleHB0IGZsb29yIGZvcmNlIGdjZCBpbWFnLXBhcnQgaW5leGFjdC0+ZXhhY3QgaW5leGFjdD8gaW5wdXQtcG9ydD8gaW50ZWdlci0+Y2hhciBpbnRlZ2VyPyBpbnRlcmFjdGlvbi1lbnZpcm9ubWVudCBsY20gbGVuZ3RoIGxpc3QgbGlzdC0+c3RyaW5nIGxpc3QtPnZlY3RvciBsaXN0LXJlZiBsaXN0LXRhaWwgbGlzdD8gbG9hZCBsb2cgbWFnbml0dWRlIG1ha2UtcG9sYXIgbWFrZS1yZWN0YW5ndWxhciBtYWtlLXN0cmluZyBtYWtlLXZlY3RvciBtYXggbWVtYmVyIG1lbXEgbWVtdiBtaW4gbW9kdWxvIG5lZ2F0aXZlPyBuZXdsaW5lIG5vdCBudWxsLWVudmlyb25tZW50IG51bGw/IG51bWJlci0+c3RyaW5nIG51bWJlcj8gbnVtZXJhdG9yIG9kZD8gb3Blbi1pbnB1dC1maWxlIG9wZW4tb3V0cHV0LWZpbGUgb3V0cHV0LXBvcnQ/IHBhaXI/IHBlZWstY2hhciBwb3J0PyBwb3NpdGl2ZT8gcHJvY2VkdXJlPyBxdWFzaXF1b3RlIHF1b3RlIHF1b3RpZW50IHJhdGlvbmFsPyByYXRpb25hbGl6ZSByZWFkIHJlYWQtY2hhciByZWFsLXBhcnQgcmVhbD8gcmVtYWluZGVyIHJldmVyc2Ugcm91bmQgc2NoZW1lLXJlcG9ydC1lbnZpcm9ubWVudCBzZXQhIHNldC1jYXIhIHNldC1jZHIhIHNpbiBzcXJ0IHN0cmluZyBzdHJpbmctPmxpc3Qgc3RyaW5nLT5udW1iZXIgc3RyaW5nLT5zeW1ib2wgc3RyaW5nLWFwcGVuZCBzdHJpbmctY2k8PT8gc3RyaW5nLWNpPD8gc3RyaW5nLWNpPT8gc3RyaW5nLWNpPj0/IHN0cmluZy1jaT4/IHN0cmluZy1jb3B5IHN0cmluZy1maWxsISBzdHJpbmctbGVuZ3RoIHN0cmluZy1yZWYgc3RyaW5nLXNldCEgc3RyaW5nPD0/IHN0cmluZzw/IHN0cmluZz0/IHN0cmluZz49PyBzdHJpbmc+PyBzdHJpbmc/IHN1YnN0cmluZyBzeW1ib2wtPnN0cmluZyBzeW1ib2w/IHRhbiB0cmFuc2NyaXB0LW9mZiB0cmFuc2NyaXB0LW9uIHRydW5jYXRlIHZhbHVlcyB2ZWN0b3IgdmVjdG9yLT5saXN0IHZlY3Rvci1maWxsISB2ZWN0b3ItbGVuZ3RoIHZlY3Rvci1yZWYgdmVjdG9yLXNldCEgd2l0aC1pbnB1dC1mcm9tLWZpbGUgd2l0aC1vdXRwdXQtdG8tZmlsZSB3cml0ZSB3cml0ZS1jaGFyIHplcm8/XCJ9LG49e2NOOlwic2hlYmFuZ1wiLGI6XCJeIyFcIixlOlwiJFwifSxjPXtjTjpcImxpdGVyYWxcIixiOlwiKCN0fCNmfCNcXFxcXFxcXFwiK3QrXCJ8I1xcXFxcXFxcLilcIn0sbD17Y046XCJudW1iZXJcIix2Olt7YjpyLHI6MH0se2I6aSxyOjB9LHtiOlwiI2JbMC0xXSsoL1swLTFdKyk/XCJ9LHtiOlwiI29bMC03XSsoL1swLTddKyk/XCJ9LHtiOlwiI3hbMC05YS1mXSsoL1swLTlhLWZdKyk/XCJ9XX0scz1lLlFTTSxvPXtjTjpcImNvbW1lbnRcIix2Olt7YjpcIjtcIixlOlwiJFwiLHI6MH0se2I6XCIjXFxcXHxcIixlOlwiXFxcXHwjXCJ9XX0sdT17Yjp0LHI6MH0scD17Y046XCJ2YXJpYWJsZVwiLGI6XCInXCIrdH0sZD17ZVc6ITAscjowfSxnPXtjTjpcImxpc3RcIix2Olt7YjpcIlxcXFwoXCIsZTpcIlxcXFwpXCJ9LHtiOlwiXFxcXFtcIixlOlwiXFxcXF1cIn1dLGM6W3tjTjpcImtleXdvcmRcIixiOnQsbDp0LGs6YX0sZF19O3JldHVybiBkLmM9W2MsbCxzLG8sdSxwLGddLHtpOi9cXFMvLGM6W24sbCxzLG8scCxnXX19KTtobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJvY2FtbFwiLGZ1bmN0aW9uKGUpe3JldHVybnthbGlhc2VzOltcIm1sXCJdLGs6e2tleXdvcmQ6XCJhbmQgYXMgYXNzZXJ0IGFzciBiZWdpbiBjbGFzcyBjb25zdHJhaW50IGRvIGRvbmUgZG93bnRvIGVsc2UgZW5kIGV4Y2VwdGlvbiBleHRlcm5hbCBmb3IgZnVuIGZ1bmN0aW9uIGZ1bmN0b3IgaWYgaW4gaW5jbHVkZSBpbmhlcml0ISBpbmhlcml0IGluaXRpYWxpemVyIGxhbmQgbGF6eSBsZXQgbG9yIGxzbCBsc3IgbHhvciBtYXRjaCBtZXRob2QhfDEwIG1ldGhvZCBtb2QgbW9kdWxlIG11dGFibGUgbmV3IG9iamVjdCBvZiBvcGVuISBvcGVuIG9yIHByaXZhdGUgcmVjIHNpZyBzdHJ1Y3QgdGhlbiB0byB0cnkgdHlwZSB2YWwhIHZhbCB2aXJ0dWFsIHdoZW4gd2hpbGUgd2l0aCBwYXJzZXIgdmFsdWVcIixidWlsdF9pbjpcImFycmF5IGJvb2wgYnl0ZXMgY2hhciBleG58NSBmbG9hdCBpbnQgaW50MzIgaW50NjQgbGlzdCBsYXp5X3R8NSBuYXRpdmVpbnR8NSBzdHJpbmcgdW5pdCBpbl9jaGFubmVsIG91dF9jaGFubmVsIHJlZlwiLGxpdGVyYWw6XCJ0cnVlIGZhbHNlXCJ9LGk6L1xcL1xcL3w+Pi8sbDpcIlthLXpfXVxcXFx3KiE/XCIsYzpbe2NOOlwibGl0ZXJhbFwiLGI6XCJcXFxcWyhcXFxcfFxcXFx8KT9cXFxcXXxcXFxcKFxcXFwpXCJ9LHtjTjpcImNvbW1lbnRcIixiOlwiXFxcXChcXFxcKlwiLGU6XCJcXFxcKlxcXFwpXCIsYzpbXCJzZWxmXCJdfSx7Y046XCJzeW1ib2xcIixiOlwiJ1tBLVphLXpfXSg/IScpW1xcXFx3J10qXCJ9LHtjTjpcInRhZ1wiLGI6XCJgW0EtWl1bXFxcXHcnXSpcIn0se2NOOlwidHlwZVwiLGI6XCJcXFxcYltBLVpdW1xcXFx3J10qXCIscjowfSx7YjpcIlthLXpfXVxcXFx3KidbXFxcXHcnXSpcIn0sZS5pbmhlcml0KGUuQVNNLHtjTjpcImNoYXJcIixyOjB9KSxlLmluaGVyaXQoZS5RU00se2k6bnVsbH0pLHtjTjpcIm51bWJlclwiLGI6XCJcXFxcYigwW3hYXVthLWZBLUYwLTlfXStbTGxuXT98MFtvT11bMC03X10rW0xsbl0/fDBbYkJdWzAxX10rW0xsbl0/fFswLTldWzAtOV9dKihbTGxuXXwoXFxcXC5bMC05X10qKT8oW2VFXVstK10/WzAtOV9dKyk/KT8pXCIscjowfSx7YjovWy09XT4vfV19fSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwicHl0aG9uXCIsZnVuY3Rpb24oZSl7dmFyIHI9e2NOOlwicHJvbXB0XCIsYjovXig+Pj58XFwuXFwuXFwuKSAvfSxiPXtjTjpcInN0cmluZ1wiLGM6W2UuQkVdLHY6W3tiOi8odXxiKT9yPycnJy8sZTovJycnLyxjOltyXSxyOjEwfSx7YjovKHV8Yik/cj9cIlwiXCIvLGU6L1wiXCJcIi8sYzpbcl0scjoxMH0se2I6Lyh1fHJ8dXIpJy8sZTovJy8scjoxMH0se2I6Lyh1fHJ8dXIpXCIvLGU6L1wiLyxyOjEwfSx7YjovKGJ8YnIpJy8sZTovJy99LHtiOi8oYnxicilcIi8sZTovXCIvfSxlLkFTTSxlLlFTTV19LGw9e2NOOlwibnVtYmVyXCIscjowLHY6W3tiOmUuQk5SK1wiW2xMakpdP1wifSx7YjpcIlxcXFxiKDBvWzAtN10rKVtsTGpKXT9cIn0se2I6ZS5DTlIrXCJbbExqSl0/XCJ9XX0sYz17Y046XCJwYXJhbXNcIixiOi9cXCgvLGU6L1xcKS8sYzpbXCJzZWxmXCIscixsLGJdfTtyZXR1cm57YWxpYXNlczpbXCJweVwiLFwiZ3lwXCJdLGs6e2tleXdvcmQ6XCJhbmQgZWxpZiBpcyBnbG9iYWwgYXMgaW4gaWYgZnJvbSByYWlzZSBmb3IgZXhjZXB0IGZpbmFsbHkgcHJpbnQgaW1wb3J0IHBhc3MgcmV0dXJuIGV4ZWMgZWxzZSBicmVhayBub3Qgd2l0aCBjbGFzcyBhc3NlcnQgeWllbGQgdHJ5IHdoaWxlIGNvbnRpbnVlIGRlbCBvciBkZWYgbGFtYmRhIG5vbmxvY2FsfDEwIE5vbmUgVHJ1ZSBGYWxzZVwiLGJ1aWx0X2luOlwiRWxsaXBzaXMgTm90SW1wbGVtZW50ZWRcIn0saTovKDxcXC98LT58XFw/KS8sYzpbcixsLGIsZS5IQ00se3Y6W3tjTjpcImZ1bmN0aW9uXCIsYks6XCJkZWZcIixyOjEwfSx7Y046XCJjbGFzc1wiLGJLOlwiY2xhc3NcIn1dLGU6LzovLGk6L1skez07XFxuXS8sYzpbZS5VVE0sY119LHtjTjpcImRlY29yYXRvclwiLGI6L0AvLGU6LyQvfSx7YjovXFxiKHByaW50fGV4ZWMpXFwoL31dfX0pO2hsanMucmVnaXN0ZXJMYW5ndWFnZShcImFwcGxlc2NyaXB0XCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmhlcml0KGUuUVNNLHtpOlwiXCJ9KSxyPXtjTjpcInBhcmFtc1wiLGI6XCJcXFxcKFwiLGU6XCJcXFxcKVwiLGM6W1wic2VsZlwiLGUuQ05NLHRdfSxvPVt7Y046XCJjb21tZW50XCIsYjpcIi0tXCIsZTpcIiRcIn0se2NOOlwiY29tbWVudFwiLGI6XCJcXFxcKFxcXFwqXCIsZTpcIlxcXFwqXFxcXClcIixjOltcInNlbGZcIix7YjpcIi0tXCIsZTpcIiRcIn1dfSxlLkhDTV07cmV0dXJue2FsaWFzZXM6W1wib3Nhc2NyaXB0XCJdLGs6e2tleXdvcmQ6XCJhYm91dCBhYm92ZSBhZnRlciBhZ2FpbnN0IGFuZCBhcm91bmQgYXMgYXQgYmFjayBiZWZvcmUgYmVnaW5uaW5nIGJlaGluZCBiZWxvdyBiZW5lYXRoIGJlc2lkZSBiZXR3ZWVuIGJ1dCBieSBjb25zaWRlcmluZyBjb250YWluIGNvbnRhaW5zIGNvbnRpbnVlIGNvcHkgZGl2IGRvZXMgZWlnaHRoIGVsc2UgZW5kIGVxdWFsIGVxdWFscyBlcnJvciBldmVyeSBleGl0IGZpZnRoIGZpcnN0IGZvciBmb3VydGggZnJvbSBmcm9udCBnZXQgZ2l2ZW4gZ2xvYmFsIGlmIGlnbm9yaW5nIGluIGludG8gaXMgaXQgaXRzIGxhc3QgbG9jYWwgbWUgbWlkZGxlIG1vZCBteSBuaW50aCBub3Qgb2Ygb24gb250byBvciBvdmVyIHByb3AgcHJvcGVydHkgcHV0IHJlZiByZWZlcmVuY2UgcmVwZWF0IHJldHVybmluZyBzY3JpcHQgc2Vjb25kIHNldCBzZXZlbnRoIHNpbmNlIHNpeHRoIHNvbWUgdGVsbCB0ZW50aCB0aGF0IHRoZXwwIHRoZW4gdGhpcmQgdGhyb3VnaCB0aHJ1IHRpbWVvdXQgdGltZXMgdG8gdHJhbnNhY3Rpb24gdHJ5IHVudGlsIHdoZXJlIHdoaWxlIHdob3NlIHdpdGggd2l0aG91dFwiLGNvbnN0YW50OlwiQXBwbGVTY3JpcHQgZmFsc2UgbGluZWZlZWQgcmV0dXJuIHBpIHF1b3RlIHJlc3VsdCBzcGFjZSB0YWIgdHJ1ZVwiLHR5cGU6XCJhbGlhcyBhcHBsaWNhdGlvbiBib29sZWFuIGNsYXNzIGNvbnN0YW50IGRhdGUgZmlsZSBpbnRlZ2VyIGxpc3QgbnVtYmVyIHJlYWwgcmVjb3JkIHN0cmluZyB0ZXh0XCIsY29tbWFuZDpcImFjdGl2YXRlIGJlZXAgY291bnQgZGVsYXkgbGF1bmNoIGxvZyBvZmZzZXQgcmVhZCByb3VuZCBydW4gc2F5IHN1bW1hcml6ZSB3cml0ZVwiLHByb3BlcnR5OlwiY2hhcmFjdGVyIGNoYXJhY3RlcnMgY29udGVudHMgZGF5IGZyb250bW9zdCBpZCBpdGVtIGxlbmd0aCBtb250aCBuYW1lIHBhcmFncmFwaCBwYXJhZ3JhcGhzIHJlc3QgcmV2ZXJzZSBydW5uaW5nIHRpbWUgdmVyc2lvbiB3ZWVrZGF5IHdvcmQgd29yZHMgeWVhclwifSxjOlt0LGUuQ05NLHtjTjpcInR5cGVcIixiOlwiXFxcXGJQT1NJWCBmaWxlXFxcXGJcIn0se2NOOlwiY29tbWFuZFwiLGI6XCJcXFxcYihjbGlwYm9hcmQgaW5mb3x0aGUgY2xpcGJvYXJkfGluZm8gZm9yfGxpc3QgKGRpc2tzfGZvbGRlcil8bW91bnQgdm9sdW1lfHBhdGggdG98KGNsb3NlfG9wZW4gZm9yKSBhY2Nlc3N8KGdldHxzZXQpIGVvZnxjdXJyZW50IGRhdGV8ZG8gc2hlbGwgc2NyaXB0fGdldCB2b2x1bWUgc2V0dGluZ3N8cmFuZG9tIG51bWJlcnxzZXQgdm9sdW1lfHN5c3RlbSBhdHRyaWJ1dGV8c3lzdGVtIGluZm98dGltZSB0byBHTVR8KGxvYWR8cnVufHN0b3JlKSBzY3JpcHR8c2NyaXB0aW5nIGNvbXBvbmVudHN8QVNDSUkgKGNoYXJhY3RlcnxudW1iZXIpfGxvY2FsaXplZCBzdHJpbmd8Y2hvb3NlIChhcHBsaWNhdGlvbnxjb2xvcnxmaWxlfGZpbGUgbmFtZXxmb2xkZXJ8ZnJvbSBsaXN0fHJlbW90ZSBhcHBsaWNhdGlvbnxVUkwpfGRpc3BsYXkgKGFsZXJ0fGRpYWxvZykpXFxcXGJ8XlxcXFxzKnJldHVyblxcXFxiXCJ9LHtjTjpcImNvbnN0YW50XCIsYjpcIlxcXFxiKHRleHQgaXRlbSBkZWxpbWl0ZXJzfGN1cnJlbnQgYXBwbGljYXRpb258bWlzc2luZyB2YWx1ZSlcXFxcYlwifSx7Y046XCJrZXl3b3JkXCIsYjpcIlxcXFxiKGFwYXJ0IGZyb218YXNpZGUgZnJvbXxpbnN0ZWFkIG9mfG91dCBvZnxncmVhdGVyIHRoYW58aXNuJ3R8KGRvZXNuJ3R8ZG9lcyBub3QpIChlcXVhbHxjb21lIGJlZm9yZXxjb21lIGFmdGVyfGNvbnRhaW4pfChncmVhdGVyfGxlc3MpIHRoYW4oIG9yIGVxdWFsKT98KHN0YXJ0cz98ZW5kc3xiZWdpbnM/KSB3aXRofGNvbnRhaW5lZCBieXxjb21lcyAoYmVmb3JlfGFmdGVyKXxhIChyZWZ8cmVmZXJlbmNlKSlcXFxcYlwifSx7Y046XCJwcm9wZXJ0eVwiLGI6XCJcXFxcYihQT1NJWCBwYXRofChkYXRlfHRpbWUpIHN0cmluZ3xxdW90ZWQgZm9ybSlcXFxcYlwifSx7Y046XCJmdW5jdGlvbl9zdGFydFwiLGJLOlwib25cIixpOlwiWyR7PTtcXFxcbl1cIixjOltlLlVUTSxyXX1dLmNvbmNhdChvKSxpOlwiLy98LT58PT5cIn19KTtcbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mIGhsanMgIT0gXCJ1bmRlZmluZWRcIiA/IGhsanMgOiB3aW5kb3cuaGxqcyk7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGRlZmluZUV4cG9ydChleCkgeyBtb2R1bGUuZXhwb3J0cyA9IGV4OyB9KTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8vICAgICBaZXB0by5qc1xuLy8gICAgIChjKSAyMDEwLTIwMTQgVGhvbWFzIEZ1Y2hzXG4vLyAgICAgWmVwdG8uanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbnZhciBaZXB0byA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVuZGVmaW5lZCwga2V5LCAkLCBjbGFzc0xpc3QsIGVtcHR5QXJyYXkgPSBbXSwgY29uY2F0ID0gZW1wdHlBcnJheS5jb25jYXQsIGZpbHRlciA9IGVtcHR5QXJyYXkuZmlsdGVyLCBzbGljZSA9IGVtcHR5QXJyYXkuc2xpY2UsXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgZWxlbWVudERpc3BsYXkgPSB7fSwgY2xhc3NDYWNoZSA9IHt9LFxuICAgIGNzc051bWJlciA9IHsgJ2NvbHVtbi1jb3VudCc6IDEsICdjb2x1bW5zJzogMSwgJ2ZvbnQtd2VpZ2h0JzogMSwgJ2xpbmUtaGVpZ2h0JzogMSwnb3BhY2l0eSc6IDEsICd6LWluZGV4JzogMSwgJ3pvb20nOiAxIH0sXG4gICAgZnJhZ21lbnRSRSA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgc2luZ2xlVGFnUkUgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgdGFnRXhwYW5kZXJSRSA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9pZyxcbiAgICByb290Tm9kZVJFID0gL14oPzpib2R5fGh0bWwpJC9pLFxuICAgIGNhcGl0YWxSRSA9IC8oW0EtWl0pL2csXG5cbiAgICAvLyBzcGVjaWFsIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgZ2V0L3NldCB2aWEgbWV0aG9kIGNhbGxzXG4gICAgbWV0aG9kQXR0cmlidXRlcyA9IFsndmFsJywgJ2NzcycsICdodG1sJywgJ3RleHQnLCAnZGF0YScsICd3aWR0aCcsICdoZWlnaHQnLCAnb2Zmc2V0J10sXG5cbiAgICBhZGphY2VuY3lPcGVyYXRvcnMgPSBbICdhZnRlcicsICdwcmVwZW5kJywgJ2JlZm9yZScsICdhcHBlbmQnIF0sXG4gICAgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpLFxuICAgIHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSxcbiAgICBjb250YWluZXJzID0ge1xuICAgICAgJ3RyJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSxcbiAgICAgICd0Ym9keSc6IHRhYmxlLCAndGhlYWQnOiB0YWJsZSwgJ3Rmb290JzogdGFibGUsXG4gICAgICAndGQnOiB0YWJsZVJvdywgJ3RoJzogdGFibGVSb3csXG4gICAgICAnKic6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfSxcbiAgICByZWFkeVJFID0gL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8sXG4gICAgc2ltcGxlU2VsZWN0b3JSRSA9IC9eW1xcdy1dKiQvLFxuICAgIGNsYXNzMnR5cGUgPSB7fSxcbiAgICB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmcsXG4gICAgemVwdG8gPSB7fSxcbiAgICBjYW1lbGl6ZSwgdW5pcSxcbiAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgcHJvcE1hcCA9IHtcbiAgICAgICd0YWJpbmRleCc6ICd0YWJJbmRleCcsXG4gICAgICAncmVhZG9ubHknOiAncmVhZE9ubHknLFxuICAgICAgJ2Zvcic6ICdodG1sRm9yJyxcbiAgICAgICdjbGFzcyc6ICdjbGFzc05hbWUnLFxuICAgICAgJ21heGxlbmd0aCc6ICdtYXhMZW5ndGgnLFxuICAgICAgJ2NlbGxzcGFjaW5nJzogJ2NlbGxTcGFjaW5nJyxcbiAgICAgICdjZWxscGFkZGluZyc6ICdjZWxsUGFkZGluZycsXG4gICAgICAncm93c3Bhbic6ICdyb3dTcGFuJyxcbiAgICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICAgJ3VzZW1hcCc6ICd1c2VNYXAnLFxuICAgICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAgICdjb250ZW50ZWRpdGFibGUnOiAnY29udGVudEVkaXRhYmxlJ1xuICAgIH0sXG4gICAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHxcbiAgICAgIGZ1bmN0aW9uKG9iamVjdCl7IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBBcnJheSB9XG5cbiAgemVwdG8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yXG4gICAgaWYgKG1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICAgIC8vIGZhbGwgYmFjayB0byBwZXJmb3JtaW5nIGEgc2VsZWN0b3I6XG4gICAgdmFyIG1hdGNoLCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUsIHRlbXAgPSAhcGFyZW50XG4gICAgaWYgKHRlbXApIChwYXJlbnQgPSB0ZW1wUGFyZW50KS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIG1hdGNoID0gfnplcHRvLnFzYShwYXJlbnQsIHNlbGVjdG9yKS5pbmRleE9mKGVsZW1lbnQpXG4gICAgdGVtcCAmJiB0ZW1wUGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDpcbiAgICAgIGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiXG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB0eXBlKHZhbHVlKSA9PSBcImZ1bmN0aW9uXCIgfVxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopICAgICB7IHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT0gb2JqLndpbmRvdyB9XG4gIGZ1bmN0aW9uIGlzRG9jdW1lbnQob2JqKSAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5ub2RlVHlwZSA9PSBvYmouRE9DVU1FTlRfTk9ERSB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikgICAgIHsgcmV0dXJuIHR5cGUob2JqKSA9PSBcIm9iamVjdFwiIH1cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiAhaXNXaW5kb3cob2JqKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PSBPYmplY3QucHJvdG90eXBlXG4gIH1cbiAgZnVuY3Rpb24gbGlrZUFycmF5KG9iaikgeyByZXR1cm4gdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcicgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtKXsgcmV0dXJuIGl0ZW0gIT0gbnVsbCB9KSB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHsgcmV0dXJuIGFycmF5Lmxlbmd0aCA+IDAgPyAkLmZuLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpIDogYXJyYXkgfVxuICBjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cil7IHJldHVybiBzdHIucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uKG1hdGNoLCBjaHIpeyByZXR1cm4gY2hyID8gY2hyLnRvVXBwZXJDYXNlKCkgOiAnJyB9KSB9XG4gIGZ1bmN0aW9uIGRhc2hlcml6ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzo6L2csICcvJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2Etel0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDFfJDInKVxuICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gIH1cbiAgdW5pcSA9IGZ1bmN0aW9uKGFycmF5KXsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtLCBpZHgpeyByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKSA9PSBpZHggfSkgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUkUobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGNsYXNzQ2FjaGUgP1xuICAgICAgY2xhc3NDYWNoZVtuYW1lXSA6IChjbGFzc0NhY2hlW25hbWVdID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIG5hbWUgKyAnKFxcXFxzfCQpJykpXG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUFkZFB4KG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiAhY3NzTnVtYmVyW2Rhc2hlcml6ZShuYW1lKV0pID8gdmFsdWUgKyBcInB4XCIgOiB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkobm9kZU5hbWUpIHtcbiAgICB2YXIgZWxlbWVudCwgZGlzcGxheVxuICAgIGlmICghZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgICBkaXNwbGF5ID09IFwibm9uZVwiICYmIChkaXNwbGF5ID0gXCJibG9ja1wiKVxuICAgICAgZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdID0gZGlzcGxheVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuICdjaGlsZHJlbicgaW4gZWxlbWVudCA/XG4gICAgICBzbGljZS5jYWxsKGVsZW1lbnQuY2hpbGRyZW4pIDpcbiAgICAgICQubWFwKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24obm9kZSl7IGlmIChub2RlLm5vZGVUeXBlID09IDEpIHJldHVybiBub2RlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBaKGRvbSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgaSwgbGVuID0gZG9tID8gZG9tLmxlbmd0aCA6IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHRoaXNbaV0gPSBkb21baV1cbiAgICB0aGlzLmxlbmd0aCA9IGxlblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnJ1xuICB9XG5cbiAgLy8gYCQuemVwdG8uZnJhZ21lbnRgIHRha2VzIGEgaHRtbCBzdHJpbmcgYW5kIGFuIG9wdGlvbmFsIHRhZyBuYW1lXG4gIC8vIHRvIGdlbmVyYXRlIERPTSBub2RlcyBub2RlcyBmcm9tIHRoZSBnaXZlbiBodG1sIHN0cmluZy5cbiAgLy8gVGhlIGdlbmVyYXRlZCBET00gbm9kZXMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LlxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucyBmb3IgZXhhbXBsZSB0byBtYWtlXG4gIC8vIGl0IGNvbXBhdGlibGUgd2l0aCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIERPTSBmdWxseS5cbiAgemVwdG8uZnJhZ21lbnQgPSBmdW5jdGlvbihodG1sLCBuYW1lLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGRvbSwgbm9kZXMsIGNvbnRhaW5lclxuXG4gICAgLy8gQSBzcGVjaWFsIGNhc2Ugb3B0aW1pemF0aW9uIGZvciBhIHNpbmdsZSB0YWdcbiAgICBpZiAoc2luZ2xlVGFnUkUudGVzdChodG1sKSkgZG9tID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSkpXG5cbiAgICBpZiAoIWRvbSkge1xuICAgICAgaWYgKGh0bWwucmVwbGFjZSkgaHRtbCA9IGh0bWwucmVwbGFjZSh0YWdFeHBhbmRlclJFLCBcIjwkMT48LyQyPlwiKVxuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgbmFtZSA9IGZyYWdtZW50UkUudGVzdChodG1sKSAmJiBSZWdFeHAuJDFcbiAgICAgIGlmICghKG5hbWUgaW4gY29udGFpbmVycykpIG5hbWUgPSAnKidcblxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyc1tuYW1lXVxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnICsgaHRtbFxuICAgICAgZG9tID0gJC5lYWNoKHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpLCBmdW5jdGlvbigpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIG5vZGVzID0gJChkb20pXG4gICAgICAkLmVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAobWV0aG9kQXR0cmlidXRlcy5pbmRleE9mKGtleSkgPiAtMSkgbm9kZXNba2V5XSh2YWx1ZSlcbiAgICAgICAgZWxzZSBub2Rlcy5hdHRyKGtleSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkb21cbiAgfVxuXG4gIC8vIGAkLnplcHRvLlpgIHN3YXBzIG91dCB0aGUgcHJvdG90eXBlIG9mIHRoZSBnaXZlbiBgZG9tYCBhcnJheVxuICAvLyBvZiBub2RlcyB3aXRoIGAkLmZuYCBhbmQgdGh1cyBzdXBwbHlpbmcgYWxsIHRoZSBaZXB0byBmdW5jdGlvbnNcbiAgLy8gdG8gdGhlIGFycmF5LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLlogPSBmdW5jdGlvbihkb20sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBaKGRvbSwgc2VsZWN0b3IpXG4gIH1cblxuICAvLyBgJC56ZXB0by5pc1pgIHNob3VsZCByZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBaZXB0b1xuICAvLyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLmlzWiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB6ZXB0by5aXG4gIH1cblxuICAvLyBgJC56ZXB0by5pbml0YCBpcyBaZXB0bydzIGNvdW50ZXJwYXJ0IHRvIGpRdWVyeSdzIGAkLmZuLmluaXRgIGFuZFxuICAvLyB0YWtlcyBhIENTUyBzZWxlY3RvciBhbmQgYW4gb3B0aW9uYWwgY29udGV4dCAoYW5kIGhhbmRsZXMgdmFyaW91c1xuICAvLyBzcGVjaWFsIGNhc2VzKS5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pbml0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgZG9tXG4gICAgLy8gSWYgbm90aGluZyBnaXZlbiwgcmV0dXJuIGFuIGVtcHR5IFplcHRvIGNvbGxlY3Rpb25cbiAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gemVwdG8uWigpXG4gICAgLy8gT3B0aW1pemUgZm9yIHN0cmluZyBzZWxlY3RvcnNcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIC8vIE5vdGU6IEluIGJvdGggQ2hyb21lIDIxIGFuZCBGaXJlZm94IDE1LCBET00gZXJyb3IgMTJcbiAgICAgIC8vIGlzIHRocm93biBpZiB0aGUgZnJhZ21lbnQgZG9lc24ndCBiZWdpbiB3aXRoIDxcbiAgICAgIGlmIChzZWxlY3RvclswXSA9PSAnPCcgJiYgZnJhZ21lbnRSRS50ZXN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gemVwdG8uZnJhZ21lbnQoc2VsZWN0b3IsIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBJZiBpdCdzIGEgQ1NTIHNlbGVjdG9yLCB1c2UgaXQgdG8gc2VsZWN0IG5vZGVzLlxuICAgICAgZWxzZSBkb20gPSB6ZXB0by5xc2EoZG9jdW1lbnQsIHNlbGVjdG9yKVxuICAgIH1cbiAgICAvLyBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuLCBjYWxsIGl0IHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoc2VsZWN0b3IpXG4gICAgLy8gSWYgYSBaZXB0byBjb2xsZWN0aW9uIGlzIGdpdmVuLCBqdXN0IHJldHVybiBpdFxuICAgIGVsc2UgaWYgKHplcHRvLmlzWihzZWxlY3RvcikpIHJldHVybiBzZWxlY3RvclxuICAgIGVsc2Uge1xuICAgICAgLy8gbm9ybWFsaXplIGFycmF5IGlmIGFuIGFycmF5IG9mIG5vZGVzIGlzIGdpdmVuXG4gICAgICBpZiAoaXNBcnJheShzZWxlY3RvcikpIGRvbSA9IGNvbXBhY3Qoc2VsZWN0b3IpXG4gICAgICAvLyBXcmFwIERPTSBub2Rlcy5cbiAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gW3NlbGVjdG9yXSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIGVsc2UgaWYgKGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLnRyaW0oKSwgUmVnRXhwLiQxLCBjb250ZXh0KSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiB0aGVyZSdzIGEgY29udGV4dCwgY3JlYXRlIGEgY29sbGVjdGlvbiBvbiB0aGF0IGNvbnRleHQgZmlyc3QsIGFuZCBzZWxlY3RcbiAgICAgIC8vIG5vZGVzIGZyb20gdGhlcmVcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuICQoY29udGV4dCkuZmluZChzZWxlY3RvcilcbiAgICAgIC8vIEFuZCBsYXN0IGJ1dCBubyBsZWFzdCwgaWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgbmV3IFplcHRvIGNvbGxlY3Rpb24gZnJvbSB0aGUgbm9kZXMgZm91bmRcbiAgICByZXR1cm4gemVwdG8uWihkb20sIHNlbGVjdG9yKVxuICB9XG5cbiAgLy8gYCRgIHdpbGwgYmUgdGhlIGJhc2UgYFplcHRvYCBvYmplY3QuIFdoZW4gY2FsbGluZyB0aGlzXG4gIC8vIGZ1bmN0aW9uIGp1c3QgY2FsbCBgJC56ZXB0by5pbml0LCB3aGljaCBtYWtlcyB0aGUgaW1wbGVtZW50YXRpb25cbiAgLy8gZGV0YWlscyBvZiBzZWxlY3Rpbmcgbm9kZXMgYW5kIGNyZWF0aW5nIFplcHRvIGNvbGxlY3Rpb25zXG4gIC8vIHBhdGNoYWJsZSBpbiBwbHVnaW5zLlxuICAkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgIHJldHVybiB6ZXB0by5pbml0KHNlbGVjdG9yLCBjb250ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBkZWVwKSB7XG4gICAgZm9yIChrZXkgaW4gc291cmNlKVxuICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgJiYgIWlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0ge31cbiAgICAgICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pICYmICFpc0FycmF5KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IFtdXG4gICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gIH1cblxuICAvLyBDb3B5IGFsbCBidXQgdW5kZWZpbmVkIHByb3BlcnRpZXMgZnJvbSBvbmUgb3IgbW9yZVxuICAvLyBvYmplY3RzIHRvIHRoZSBgdGFyZ2V0YCBvYmplY3QuXG4gICQuZXh0ZW5kID0gZnVuY3Rpb24odGFyZ2V0KXtcbiAgICB2YXIgZGVlcCwgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdib29sZWFuJykge1xuICAgICAgZGVlcCA9IHRhcmdldFxuICAgICAgdGFyZ2V0ID0gYXJncy5zaGlmdCgpXG4gICAgfVxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihhcmcpeyBleHRlbmQodGFyZ2V0LCBhcmcsIGRlZXApIH0pXG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgLy8gYCQuemVwdG8ucXNhYCBpcyBaZXB0bydzIENTUyBzZWxlY3RvciBpbXBsZW1lbnRhdGlvbiB3aGljaFxuICAvLyB1c2VzIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsYCBhbmQgb3B0aW1pemVzIGZvciBzb21lIHNwZWNpYWwgY2FzZXMsIGxpa2UgYCNpZGAuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8ucXNhID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3Ipe1xuICAgIHZhciBmb3VuZCxcbiAgICAgICAgbWF5YmVJRCA9IHNlbGVjdG9yWzBdID09ICcjJyxcbiAgICAgICAgbWF5YmVDbGFzcyA9ICFtYXliZUlEICYmIHNlbGVjdG9yWzBdID09ICcuJyxcbiAgICAgICAgbmFtZU9ubHkgPSBtYXliZUlEIHx8IG1heWJlQ2xhc3MgPyBzZWxlY3Rvci5zbGljZSgxKSA6IHNlbGVjdG9yLCAvLyBFbnN1cmUgdGhhdCBhIDEgY2hhciB0YWcgbmFtZSBzdGlsbCBnZXRzIGNoZWNrZWRcbiAgICAgICAgaXNTaW1wbGUgPSBzaW1wbGVTZWxlY3RvclJFLnRlc3QobmFtZU9ubHkpXG4gICAgcmV0dXJuIChlbGVtZW50LmdldEVsZW1lbnRCeUlkICYmIGlzU2ltcGxlICYmIG1heWJlSUQpID8gLy8gU2FmYXJpIERvY3VtZW50RnJhZ21lbnQgZG9lc24ndCBoYXZlIGdldEVsZW1lbnRCeUlkXG4gICAgICAoIChmb3VuZCA9IGVsZW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZU9ubHkpKSA/IFtmb3VuZF0gOiBbXSApIDpcbiAgICAgIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMTEpID8gW10gOlxuICAgICAgc2xpY2UuY2FsbChcbiAgICAgICAgaXNTaW1wbGUgJiYgIW1heWJlSUQgJiYgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID8gLy8gRG9jdW1lbnRGcmFnbWVudCBkb2Vzbid0IGhhdmUgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZS9UYWdOYW1lXG4gICAgICAgICAgbWF5YmVDbGFzcyA/IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lT25seSkgOiAvLyBJZiBpdCdzIHNpbXBsZSwgaXQgY291bGQgYmUgYSBjbGFzc1xuICAgICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpIDogLy8gT3IgYSB0YWdcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIC8vIE9yIGl0J3Mgbm90IHNpbXBsZSwgYW5kIHdlIG5lZWQgdG8gcXVlcnkgYWxsXG4gICAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJlZChub2Rlcywgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/ICQobm9kZXMpIDogJChub2RlcykuZmlsdGVyKHNlbGVjdG9yKVxuICB9XG5cbiAgJC5jb250YWlucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyA/XG4gICAgZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50ICE9PSBub2RlICYmIHBhcmVudC5jb250YWlucyhub2RlKVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKVxuICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNBcmcoY29udGV4dCwgYXJnLCBpZHgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcpID8gYXJnLmNhbGwoY29udGV4dCwgaWR4LCBwYXlsb2FkKSA6IGFyZ1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFsdWUgPT0gbnVsbCA/IG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpIDogbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICAvLyBhY2Nlc3MgY2xhc3NOYW1lIHByb3BlcnR5IHdoaWxlIHJlc3BlY3RpbmcgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgZnVuY3Rpb24gY2xhc3NOYW1lKG5vZGUsIHZhbHVlKXtcbiAgICB2YXIga2xhc3MgPSBub2RlLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgc3ZnICAgPSBrbGFzcyAmJiBrbGFzcy5iYXNlVmFsICE9PSB1bmRlZmluZWRcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnID8ga2xhc3MuYmFzZVZhbCA6IGtsYXNzXG4gICAgc3ZnID8gKGtsYXNzLmJhc2VWYWwgPSB2YWx1ZSkgOiAobm9kZS5jbGFzc05hbWUgPSB2YWx1ZSlcbiAgfVxuXG4gIC8vIFwidHJ1ZVwiICA9PiB0cnVlXG4gIC8vIFwiZmFsc2VcIiA9PiBmYWxzZVxuICAvLyBcIm51bGxcIiAgPT4gbnVsbFxuICAvLyBcIjQyXCIgICAgPT4gNDJcbiAgLy8gXCI0Mi41XCIgID0+IDQyLjVcbiAgLy8gXCIwOFwiICAgID0+IFwiMDhcIlxuICAvLyBKU09OICAgID0+IHBhcnNlIGlmIHZhbGlkXG4gIC8vIFN0cmluZyAgPT4gc2VsZlxuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZSA/XG4gICAgICAgIHZhbHVlID09IFwidHJ1ZVwiIHx8XG4gICAgICAgICggdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOlxuICAgICAgICAgIHZhbHVlID09IFwibnVsbFwiID8gbnVsbCA6XG4gICAgICAgICAgK3ZhbHVlICsgXCJcIiA9PSB2YWx1ZSA/ICt2YWx1ZSA6XG4gICAgICAgICAgL15bXFxbXFx7XS8udGVzdCh2YWx1ZSkgPyAkLnBhcnNlSlNPTih2YWx1ZSkgOlxuICAgICAgICAgIHZhbHVlIClcbiAgICAgICAgOiB2YWx1ZVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9XG5cbiAgJC50eXBlID0gdHlwZVxuICAkLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uXG4gICQuaXNXaW5kb3cgPSBpc1dpbmRvd1xuICAkLmlzQXJyYXkgPSBpc0FycmF5XG4gICQuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3RcblxuICAkLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZVxuICAgIGZvciAobmFtZSBpbiBvYmopIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAkLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtLCBhcnJheSwgaSl7XG4gICAgcmV0dXJuIGVtcHR5QXJyYXkuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtLCBpKVxuICB9XG5cbiAgJC5jYW1lbENhc2UgPSBjYW1lbGl6ZVxuICAkLnRyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID09IG51bGwgPyBcIlwiIDogU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwoc3RyKVxuICB9XG5cbiAgLy8gcGx1Z2luIGNvbXBhdGliaWxpdHlcbiAgJC51dWlkID0gMFxuICAkLnN1cHBvcnQgPSB7IH1cbiAgJC5leHByID0geyB9XG4gICQubm9vcCA9IGZ1bmN0aW9uKCkge31cblxuICAkLm1hcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIHZhbHVlLCB2YWx1ZXMgPSBbXSwgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1tpXSwgaSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIGVsc2VcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNba2V5XSwga2V5KVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW4odmFsdWVzKVxuICB9XG5cbiAgJC5lYWNoID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNbaV0sIGksIGVsZW1lbnRzW2ldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNba2V5XSwga2V5LCBlbGVtZW50c1trZXldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xuICB9XG5cbiAgJC5ncmVwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwoZWxlbWVudHMsIGNhbGxiYWNrKVxuICB9XG5cbiAgaWYgKHdpbmRvdy5KU09OKSAkLnBhcnNlSlNPTiA9IEpTT04ucGFyc2VcblxuICAvLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbiAgJC5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oaSwgbmFtZSkge1xuICAgIGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgLy8gRGVmaW5lIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBhbGxcbiAgLy8gWmVwdG8gY29sbGVjdGlvbnNcbiAgJC5mbiA9IHtcbiAgICBjb25zdHJ1Y3RvcjogemVwdG8uWixcbiAgICBsZW5ndGg6IDAsXG5cbiAgICAvLyBCZWNhdXNlIGEgY29sbGVjdGlvbiBhY3RzIGxpa2UgYW4gYXJyYXlcbiAgICAvLyBjb3B5IG92ZXIgdGhlc2UgdXNlZnVsIGFycmF5IGZ1bmN0aW9ucy5cbiAgICBmb3JFYWNoOiBlbXB0eUFycmF5LmZvckVhY2gsXG4gICAgcmVkdWNlOiBlbXB0eUFycmF5LnJlZHVjZSxcbiAgICBwdXNoOiBlbXB0eUFycmF5LnB1c2gsXG4gICAgc29ydDogZW1wdHlBcnJheS5zb3J0LFxuICAgIHNwbGljZTogZW1wdHlBcnJheS5zcGxpY2UsXG4gICAgaW5kZXhPZjogZW1wdHlBcnJheS5pbmRleE9mLFxuICAgIGNvbmNhdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpLCB2YWx1ZSwgYXJncyA9IFtdXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gYXJndW1lbnRzW2ldXG4gICAgICAgIGFyZ3NbaV0gPSB6ZXB0by5pc1oodmFsdWUpID8gdmFsdWUudG9BcnJheSgpIDogdmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25jYXQuYXBwbHkoemVwdG8uaXNaKHRoaXMpID8gdGhpcy50b0FycmF5KCkgOiB0aGlzLCBhcmdzKVxuICAgIH0sXG5cbiAgICAvLyBgbWFwYCBhbmQgYHNsaWNlYCBpbiB0aGUgalF1ZXJ5IEFQSSB3b3JrIGRpZmZlcmVudGx5XG4gICAgLy8gZnJvbSB0aGVpciBhcnJheSBjb3VudGVycGFydHNcbiAgICBtYXA6IGZ1bmN0aW9uKGZuKXtcbiAgICAgIHJldHVybiAkKCQubWFwKHRoaXMsIGZ1bmN0aW9uKGVsLCBpKXsgcmV0dXJuIGZuLmNhbGwoZWwsIGksIGVsKSB9KSlcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICQoc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIC8vIG5lZWQgdG8gY2hlY2sgaWYgZG9jdW1lbnQuYm9keSBleGlzdHMgZm9yIElFIGFzIHRoYXQgYnJvd3NlciByZXBvcnRzXG4gICAgICAvLyBkb2N1bWVudCByZWFkeSB3aGVuIGl0IGhhc24ndCB5ZXQgY3JlYXRlZCB0aGUgYm9keSBlbGVtZW50XG4gICAgICBpZiAocmVhZHlSRS50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIGNhbGxiYWNrKCQpXG4gICAgICBlbHNlIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpeyBjYWxsYmFjaygkKSB9LCBmYWxzZSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSB1bmRlZmluZWQgPyBzbGljZS5jYWxsKHRoaXMpIDogdGhpc1tpZHggPj0gMCA/IGlkeCA6IGlkeCArIHRoaXMubGVuZ3RoXVxuICAgIH0sXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZ2V0KCkgfSxcbiAgICBzaXplOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICBlbXB0eUFycmF5LmV2ZXJ5LmNhbGwodGhpcywgZnVuY3Rpb24oZWwsIGlkeCl7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGVsLCBpZHgsIGVsKSAhPT0gZmFsc2VcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHJldHVybiB0aGlzLm5vdCh0aGlzLm5vdChzZWxlY3RvcikpXG4gICAgICByZXR1cm4gJChmaWx0ZXIuY2FsbCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHplcHRvLm1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oc2VsZWN0b3IsY29udGV4dCl7XG4gICAgICByZXR1cm4gJCh1bmlxKHRoaXMuY29uY2F0KCQoc2VsZWN0b3IsY29udGV4dCkpKSlcbiAgICB9LFxuICAgIGlzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAwICYmIHplcHRvLm1hdGNoZXModGhpc1swXSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciBub2Rlcz1bXVxuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpICYmIHNlbGVjdG9yLmNhbGwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKCFzZWxlY3Rvci5jYWxsKHRoaXMsaWR4KSkgbm9kZXMucHVzaCh0aGlzKVxuICAgICAgICB9KVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBleGNsdWRlcyA9IHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyA/IHRoaXMuZmlsdGVyKHNlbGVjdG9yKSA6XG4gICAgICAgICAgKGxpa2VBcnJheShzZWxlY3RvcikgJiYgaXNGdW5jdGlvbihzZWxlY3Rvci5pdGVtKSkgPyBzbGljZS5jYWxsKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzLmluZGV4T2YoZWwpIDwgMCkgbm9kZXMucHVzaChlbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAkKG5vZGVzKVxuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHNlbGVjdG9yKSA/XG4gICAgICAgICAgJC5jb250YWlucyh0aGlzLCBzZWxlY3RvcikgOlxuICAgICAgICAgICQodGhpcykuZmluZChzZWxlY3Rvcikuc2l6ZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXE6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHRoaXMuc2xpY2UoaWR4KSA6IHRoaXMuc2xpY2UoaWR4LCArIGlkeCArIDEpXG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbdGhpcy5sZW5ndGggLSAxXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgcmVzdWx0LCAkdGhpcyA9IHRoaXNcbiAgICAgIGlmICghc2VsZWN0b3IpIHJlc3VsdCA9ICQoKVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICByZXN1bHQgPSAkKHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgbm9kZSA9IHRoaXNcbiAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwoJHRoaXMsIGZ1bmN0aW9uKHBhcmVudCl7XG4gICAgICAgICAgICByZXR1cm4gJC5jb250YWlucyhwYXJlbnQsIG5vZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoID09IDEpIHJlc3VsdCA9ICQoemVwdG8ucXNhKHRoaXNbMF0sIHNlbGVjdG9yKSlcbiAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHplcHRvLnFzYSh0aGlzLCBzZWxlY3RvcikgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgIHZhciBub2RlID0gdGhpc1swXSwgY29sbGVjdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSBjb2xsZWN0aW9uID0gJChzZWxlY3RvcilcbiAgICAgIHdoaWxlIChub2RlICYmICEoY29sbGVjdGlvbiA/IGNvbGxlY3Rpb24uaW5kZXhPZihub2RlKSA+PSAwIDogemVwdG8ubWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpKVxuICAgICAgICBub2RlID0gbm9kZSAhPT0gY29udGV4dCAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnBhcmVudE5vZGVcbiAgICAgIHJldHVybiAkKG5vZGUpXG4gICAgfSxcbiAgICBwYXJlbnRzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgYW5jZXN0b3JzID0gW10sIG5vZGVzID0gdGhpc1xuICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIG5vZGVzID0gJC5tYXAobm9kZXMsIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgYW5jZXN0b3JzLmluZGV4T2Yobm9kZSkgPCAwKSB7XG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChub2RlKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gZmlsdGVyZWQoYW5jZXN0b3JzLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIHBhcmVudDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHVuaXEodGhpcy5wbHVjaygncGFyZW50Tm9kZScpKSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiBjaGlsZHJlbih0aGlzKSB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnRlbnREb2N1bWVudCB8fCBzbGljZS5jYWxsKHRoaXMuY2hpbGROb2RlcykgfSlcbiAgICB9LFxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICByZXR1cm4gZmlsdGVyLmNhbGwoY2hpbGRyZW4oZWwucGFyZW50Tm9kZSksIGZ1bmN0aW9uKGNoaWxkKXsgcmV0dXJuIGNoaWxkIT09ZWwgfSlcbiAgICAgIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLmlubmVySFRNTCA9ICcnIH0pXG4gICAgfSxcbiAgICAvLyBgcGx1Y2tgIGlzIGJvcnJvd2VkIGZyb20gUHJvdG90eXBlLmpzXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgIHJldHVybiAkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCl7IHJldHVybiBlbFtwcm9wZXJ0eV0gfSlcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAodGhpcy5zdHlsZS5kaXNwbGF5ID0gJycpXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIilcbiAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheSh0aGlzLm5vZGVOYW1lKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbihuZXdDb250ZW50KXtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZShuZXdDb250ZW50KS5yZW1vdmUoKVxuICAgIH0sXG4gICAgd3JhcDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICBpZiAodGhpc1swXSAmJiAhZnVuYylcbiAgICAgICAgdmFyIGRvbSAgID0gJChzdHJ1Y3R1cmUpLmdldCgwKSxcbiAgICAgICAgICAgIGNsb25lID0gZG9tLnBhcmVudE5vZGUgfHwgdGhpcy5sZW5ndGggPiAxXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAkKHRoaXMpLndyYXBBbGwoXG4gICAgICAgICAgZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6XG4gICAgICAgICAgICBjbG9uZSA/IGRvbS5jbG9uZU5vZGUodHJ1ZSkgOiBkb21cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHdyYXBBbGw6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAkKHRoaXNbMF0pLmJlZm9yZShzdHJ1Y3R1cmUgPSAkKHN0cnVjdHVyZSkpXG4gICAgICAgIHZhciBjaGlsZHJlblxuICAgICAgICAvLyBkcmlsbCBkb3duIHRvIHRoZSBpbm1vc3QgZWxlbWVudFxuICAgICAgICB3aGlsZSAoKGNoaWxkcmVuID0gc3RydWN0dXJlLmNoaWxkcmVuKCkpLmxlbmd0aCkgc3RydWN0dXJlID0gY2hpbGRyZW4uZmlyc3QoKVxuICAgICAgICAkKHN0cnVjdHVyZSkuYXBwZW5kKHRoaXMpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgd3JhcElubmVyOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyksIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpLFxuICAgICAgICAgICAgZG9tICA9IGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOiBzdHJ1Y3R1cmVcbiAgICAgICAgY29udGVudHMubGVuZ3RoID8gY29udGVudHMud3JhcEFsbChkb20pIDogc2VsZi5hcHBlbmQoZG9tKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHVud3JhcDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKCQodGhpcykuY2hpbGRyZW4oKSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuY2xvbmVOb2RlKHRydWUpIH0pXG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24oc2V0dGluZyl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgICAgOyhzZXR0aW5nID09PSB1bmRlZmluZWQgPyBlbC5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiIDogc2V0dGluZykgPyBlbC5zaG93KCkgOiBlbC5oaWRlKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBuZXh0OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ25leHRFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIGh0bWw6IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG9yaWdpbkh0bWwgPSB0aGlzLmlubmVySFRNTFxuICAgICAgICAgICQodGhpcykuZW1wdHkoKS5hcHBlbmQoIGZ1bmNBcmcodGhpcywgaHRtbCwgaWR4LCBvcmlnaW5IdG1sKSApXG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0uaW5uZXJIVE1MIDogbnVsbClcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG5ld1RleHQgPSBmdW5jQXJnKHRoaXMsIHRleHQsIGlkeCwgdGhpcy50ZXh0Q29udGVudClcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gbmV3VGV4dCA9PSBudWxsID8gJycgOiAnJytuZXdUZXh0XG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0udGV4dENvbnRlbnQgOiBudWxsKVxuICAgIH0sXG4gICAgYXR0cjogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIHJlc3VsdFxuICAgICAgcmV0dXJuICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiAhKDEgaW4gYXJndW1lbnRzKSkgP1xuICAgICAgICAoIXRoaXMubGVuZ3RoIHx8IHRoaXNbMF0ubm9kZVR5cGUgIT09IDEgPyB1bmRlZmluZWQgOlxuICAgICAgICAgICghKHJlc3VsdCA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKG5hbWUpKSAmJiBuYW1lIGluIHRoaXNbMF0pID8gdGhpc1swXVtuYW1lXSA6IHJlc3VsdFxuICAgICAgICApIDpcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHJldHVyblxuICAgICAgICAgIGlmIChpc09iamVjdChuYW1lKSkgZm9yIChrZXkgaW4gbmFtZSkgc2V0QXR0cmlidXRlKHRoaXMsIGtleSwgbmFtZVtrZXldKVxuICAgICAgICAgIGVsc2Ugc2V0QXR0cmlidXRlKHRoaXMsIG5hbWUsIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSkpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKXtcbiAgICAgICAgc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSlcbiAgICAgIH0sIHRoaXMpfSlcbiAgICB9LFxuICAgIHByb3A6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIG5hbWUgPSBwcm9wTWFwW25hbWVdIHx8IG5hbWVcbiAgICAgIHJldHVybiAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpc1tuYW1lXSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiB0aGlzWzBdW25hbWVdKVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIGF0dHJOYW1lID0gJ2RhdGEtJyArIG5hbWUucmVwbGFjZShjYXBpdGFsUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIHZhciBkYXRhID0gKDEgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYXR0cihhdHRyTmFtZSwgdmFsdWUpIDpcbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lKVxuXG4gICAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRlc2VyaWFsaXplVmFsdWUoZGF0YSkgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy52YWx1ZSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiAodGhpc1swXS5tdWx0aXBsZSA/XG4gICAgICAgICAgICQodGhpc1swXSkuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNlbGVjdGVkIH0pLnBsdWNrKCd2YWx1ZScpIDpcbiAgICAgICAgICAgdGhpc1swXS52YWx1ZSlcbiAgICAgICAgKVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMpIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29vcmRzID0gZnVuY0FyZyh0aGlzLCBjb29yZGluYXRlcywgaW5kZXgsICR0aGlzLm9mZnNldCgpKSxcbiAgICAgICAgICAgIHBhcmVudE9mZnNldCA9ICR0aGlzLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLFxuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRvcDogIGNvb3Jkcy50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogY29vcmRzLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICgkdGhpcy5jc3MoJ3Bvc2l0aW9uJykgPT0gJ3N0YXRpYycpIHByb3BzWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJ1xuICAgICAgICAkdGhpcy5jc3MocHJvcHMpXG4gICAgICB9KVxuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICAgIHZhciBvYmogPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBvYmoubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgdG9wOiBvYmoudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChvYmoud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQob2JqLmhlaWdodClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczogZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKXtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSwgZWxlbWVudCA9IHRoaXNbMF1cbiAgICAgICAgaWYoIWVsZW1lbnQpIHJldHVyblxuICAgICAgICBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJylcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuICAgICAgICAgICQuZWFjaChwcm9wZXJ0eSwgZnVuY3Rpb24oXywgcHJvcCl7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IChlbGVtZW50LnN0eWxlW2NhbWVsaXplKHByb3ApXSB8fCBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0gJydcbiAgICAgIGlmICh0eXBlKHByb3BlcnR5KSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKVxuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wZXJ0eSkpIH0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjc3MgPSBkYXNoZXJpemUocHJvcGVydHkpICsgXCI6XCIgKyBtYXliZUFkZFB4KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoa2V5IGluIHByb3BlcnR5KVxuICAgICAgICAgIGlmICghcHJvcGVydHlba2V5XSAmJiBwcm9wZXJ0eVtrZXldICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKGtleSkpIH0pXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY3NzICs9IGRhc2hlcml6ZShrZXkpICsgJzonICsgbWF5YmVBZGRQeChrZXksIHByb3BlcnR5W2tleV0pICsgJzsnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcyB9KVxuICAgIH0sXG4gICAgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPyB0aGlzLmluZGV4T2YoJChlbGVtZW50KVswXSkgOiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXhPZih0aGlzWzBdKVxuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3QoY2xhc3NOYW1lKGVsKSlcbiAgICAgIH0sIGNsYXNzUkUobmFtZSkpXG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmICghKCdjbGFzc05hbWUnIGluIHRoaXMpKSByZXR1cm5cbiAgICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZSh0aGlzKSwgbmV3TmFtZSA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbHMpXG4gICAgICAgIG5ld05hbWUuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGtsYXNzKSkgY2xhc3NMaXN0LnB1c2goa2xhc3MpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggJiYgY2xhc3NOYW1lKHRoaXMsIGNscyArIChjbHMgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NMaXN0LmpvaW4oXCIgXCIpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKCEoJ2NsYXNzTmFtZScgaW4gdGhpcykpIHJldHVyblxuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2xhc3NOYW1lKHRoaXMsICcnKVxuICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc05hbWUodGhpcylcbiAgICAgICAgZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTGlzdCkuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnJlcGxhY2UoY2xhc3NSRShrbGFzcyksIFwiIFwiKVxuICAgICAgICB9KVxuICAgICAgICBjbGFzc05hbWUodGhpcywgY2xhc3NMaXN0LnRyaW0oKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24obmFtZSwgd2hlbil7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksIG5hbWVzID0gZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTmFtZSh0aGlzKSlcbiAgICAgICAgbmFtZXMuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgKHdoZW4gPT09IHVuZGVmaW5lZCA/ICEkdGhpcy5oYXNDbGFzcyhrbGFzcykgOiB3aGVuKSA/XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcyhrbGFzcykgOiAkdGhpcy5yZW1vdmVDbGFzcyhrbGFzcylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzY3JvbGxUb3A6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbFRvcCA9ICdzY3JvbGxUb3AnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsVG9wID8gdGhpc1swXS5zY3JvbGxUb3AgOiB0aGlzWzBdLnBhZ2VZT2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGhhc1Njcm9sbFRvcCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG9wID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odGhpcy5zY3JvbGxYLCB2YWx1ZSkgfSlcbiAgICB9LFxuICAgIHNjcm9sbExlZnQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbExlZnQgPSAnc2Nyb2xsTGVmdCcgaW4gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNTY3JvbGxMZWZ0ID8gdGhpc1swXS5zY3JvbGxMZWZ0IDogdGhpc1swXS5wYWdlWE9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxMZWZ0ID9cbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxMZWZ0ID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odmFsdWUsIHRoaXMuc2Nyb2xsWSkgfSlcbiAgICB9LFxuICAgIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICB2YXIgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICAgIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCksXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ICAgICAgID0gdGhpcy5vZmZzZXQoKSxcbiAgICAgICAgcGFyZW50T2Zmc2V0ID0gcm9vdE5vZGVSRS50ZXN0KG9mZnNldFBhcmVudFswXS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogb2Zmc2V0UGFyZW50Lm9mZnNldCgpXG5cbiAgICAgIC8vIFN1YnRyYWN0IGVsZW1lbnQgbWFyZ2luc1xuICAgICAgLy8gbm90ZTogd2hlbiBhbiBlbGVtZW50IGhhcyBtYXJnaW46IGF1dG8gdGhlIG9mZnNldExlZnQgYW5kIG1hcmdpbkxlZnRcbiAgICAgIC8vIGFyZSB0aGUgc2FtZSBpbiBTYWZhcmkgY2F1c2luZyBvZmZzZXQubGVmdCB0byBpbmNvcnJlY3RseSBiZSAwXG4gICAgICBvZmZzZXQudG9wICAtPSBwYXJzZUZsb2F0KCAkKGVsZW0pLmNzcygnbWFyZ2luLXRvcCcpICkgfHwgMFxuICAgICAgb2Zmc2V0LmxlZnQgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JykgKSB8fCAwXG5cbiAgICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgICAgcGFyZW50T2Zmc2V0LnRvcCAgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpICkgfHwgMFxuICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSApIHx8IDBcblxuICAgICAgLy8gU3VidHJhY3QgdGhlIHR3byBvZmZzZXRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6ICBvZmZzZXQudG9wICAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICAgIH1cbiAgICB9LFxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmJvZHlcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcm9vdE5vZGVSRS50ZXN0KHBhcmVudC5ub2RlTmFtZSkgJiYgJChwYXJlbnQpLmNzcyhcInBvc2l0aW9uXCIpID09IFwic3RhdGljXCIpXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudFxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvciBub3dcbiAgJC5mbi5kZXRhY2ggPSAkLmZuLnJlbW92ZVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBmdW5jdGlvbnNcbiAgO1snd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChmdW5jdGlvbihkaW1lbnNpb24pe1xuICAgIHZhciBkaW1lbnNpb25Qcm9wZXJ0eSA9XG4gICAgICBkaW1lbnNpb24ucmVwbGFjZSgvLi8sIGZ1bmN0aW9uKG0peyByZXR1cm4gbVswXS50b1VwcGVyQ2FzZSgpIH0pXG5cbiAgICAkLmZuW2RpbWVuc2lvbl0gPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgb2Zmc2V0LCBlbCA9IHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNXaW5kb3coZWwpID8gZWxbJ2lubmVyJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIGlzRG9jdW1lbnQoZWwpID8gZWwuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgZGltZW5zaW9uUHJvcGVydHldIDpcbiAgICAgICAgKG9mZnNldCA9IHRoaXMub2Zmc2V0KCkpICYmIG9mZnNldFtkaW1lbnNpb25dXG4gICAgICBlbHNlIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgZWwgPSAkKHRoaXMpXG4gICAgICAgIGVsLmNzcyhkaW1lbnNpb24sIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgZWxbZGltZW5zaW9uXSgpKSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyYXZlcnNlTm9kZShub2RlLCBmdW4pIHtcbiAgICBmdW4obm9kZSlcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdHJhdmVyc2VOb2RlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZnVuKVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGBhZnRlcmAsIGBwcmVwZW5kYCwgYGJlZm9yZWAsIGBhcHBlbmRgLFxuICAvLyBgaW5zZXJ0QWZ0ZXJgLCBgaW5zZXJ0QmVmb3JlYCwgYGFwcGVuZFRvYCwgYW5kIGBwcmVwZW5kVG9gIG1ldGhvZHMuXG4gIGFkamFjZW5jeU9wZXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdG9yLCBvcGVyYXRvckluZGV4KSB7XG4gICAgdmFyIGluc2lkZSA9IG9wZXJhdG9ySW5kZXggJSAyIC8vPT4gcHJlcGVuZCwgYXBwZW5kXG5cbiAgICAkLmZuW29wZXJhdG9yXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhcmd1bWVudHMgY2FuIGJlIG5vZGVzLCBhcnJheXMgb2Ygbm9kZXMsIFplcHRvIG9iamVjdHMgYW5kIEhUTUwgc3RyaW5nc1xuICAgICAgdmFyIGFyZ1R5cGUsIG5vZGVzID0gJC5tYXAoYXJndW1lbnRzLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIGFyZ1R5cGUgPSB0eXBlKGFyZylcbiAgICAgICAgICAgIHJldHVybiBhcmdUeXBlID09IFwib2JqZWN0XCIgfHwgYXJnVHlwZSA9PSBcImFycmF5XCIgfHwgYXJnID09IG51bGwgP1xuICAgICAgICAgICAgICBhcmcgOiB6ZXB0by5mcmFnbWVudChhcmcpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFyZW50LCBjb3B5QnlDbG9uZSA9IHRoaXMubGVuZ3RoID4gMVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oXywgdGFyZ2V0KXtcbiAgICAgICAgcGFyZW50ID0gaW5zaWRlID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGVcblxuICAgICAgICAvLyBjb252ZXJ0IGFsbCBtZXRob2RzIHRvIGEgXCJiZWZvcmVcIiBvcGVyYXRpb25cbiAgICAgICAgdGFyZ2V0ID0gb3BlcmF0b3JJbmRleCA9PSAwID8gdGFyZ2V0Lm5leHRTaWJsaW5nIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAxID8gdGFyZ2V0LmZpcnN0Q2hpbGQgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDIgPyB0YXJnZXQgOlxuICAgICAgICAgICAgICAgICBudWxsXG5cbiAgICAgICAgdmFyIHBhcmVudEluRG9jdW1lbnQgPSAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgcGFyZW50KVxuXG4gICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgaWYgKGNvcHlCeUNsb25lKSBub2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICBlbHNlIGlmICghcGFyZW50KSByZXR1cm4gJChub2RlKS5yZW1vdmUoKVxuXG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQpXG4gICAgICAgICAgaWYgKHBhcmVudEluRG9jdW1lbnQpIHRyYXZlcnNlTm9kZShub2RlLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUgIT0gbnVsbCAmJiBlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgKCFlbC50eXBlIHx8IGVsLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSAmJiAhZWwuc3JjKVxuICAgICAgICAgICAgICB3aW5kb3dbJ2V2YWwnXS5jYWxsKHdpbmRvdywgZWwuaW5uZXJIVE1MKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFmdGVyICAgID0+IGluc2VydEFmdGVyXG4gICAgLy8gcHJlcGVuZCAgPT4gcHJlcGVuZFRvXG4gICAgLy8gYmVmb3JlICAgPT4gaW5zZXJ0QmVmb3JlXG4gICAgLy8gYXBwZW5kICAgPT4gYXBwZW5kVG9cbiAgICAkLmZuW2luc2lkZSA/IG9wZXJhdG9yKydUbycgOiAnaW5zZXJ0Jysob3BlcmF0b3JJbmRleCA/ICdCZWZvcmUnIDogJ0FmdGVyJyldID0gZnVuY3Rpb24oaHRtbCl7XG4gICAgICAkKGh0bWwpW29wZXJhdG9yXSh0aGlzKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pXG5cbiAgemVwdG8uWi5wcm90b3R5cGUgPSBaLnByb3RvdHlwZSA9ICQuZm5cblxuICAvLyBFeHBvcnQgaW50ZXJuYWwgQVBJIGZ1bmN0aW9ucyBpbiB0aGUgYCQuemVwdG9gIG5hbWVzcGFjZVxuICB6ZXB0by51bmlxID0gdW5pcVxuICB6ZXB0by5kZXNlcmlhbGl6ZVZhbHVlID0gZGVzZXJpYWxpemVWYWx1ZVxuICAkLnplcHRvID0gemVwdG9cblxuICByZXR1cm4gJFxufSkoKVxuXG4vLyBJZiBgJGAgaXMgbm90IHlldCBkZWZpbmVkLCBwb2ludCBpdCB0byBgWmVwdG9gXG53aW5kb3cuWmVwdG8gPSBaZXB0b1xud2luZG93LiQgPT09IHVuZGVmaW5lZCAmJiAod2luZG93LiQgPSBaZXB0bylcblxuLy8gICAgIFplcHRvLmpzXG4vLyAgICAgKGMpIDIwMTAtMjAxNCBUaG9tYXMgRnVjaHNcbi8vICAgICBaZXB0by5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyhmdW5jdGlvbigkKXtcbiAgZnVuY3Rpb24gZGV0ZWN0KHVhLCBwbGF0Zm9ybSl7XG4gICAgdmFyIG9zID0gdGhpcy5vcyA9IHt9LCBicm93c2VyID0gdGhpcy5icm93c2VyID0ge30sXG4gICAgICB3ZWJraXQgPSB1YS5tYXRjaCgvV2ViW2tLXWl0W1xcL117MCwxfShbXFxkLl0rKS8pLFxuICAgICAgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKSxcbiAgICAgIG9zeCA9ICEhdWEubWF0Y2goL1xcKE1hY2ludG9zaFxcOyBJbnRlbCAvKSxcbiAgICAgIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pLFxuICAgICAgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/LyksXG4gICAgICBpcGhvbmUgPSAhaXBhZCAmJiB1YS5tYXRjaCgvKGlQaG9uZVxcc09TKVxccyhbXFxkX10rKS8pLFxuICAgICAgd2Vib3MgPSB1YS5tYXRjaCgvKHdlYk9TfGhwd09TKVtcXHNcXC9dKFtcXGQuXSspLyksXG4gICAgICB3aW4gPSAvV2luXFxkezJ9fFdpbmRvd3MvLnRlc3QocGxhdGZvcm0pLFxuICAgICAgd3AgPSB1YS5tYXRjaCgvV2luZG93cyBQaG9uZSAoW1xcZC5dKykvKSxcbiAgICAgIHRvdWNocGFkID0gd2Vib3MgJiYgdWEubWF0Y2goL1RvdWNoUGFkLyksXG4gICAgICBraW5kbGUgPSB1YS5tYXRjaCgvS2luZGxlXFwvKFtcXGQuXSspLyksXG4gICAgICBzaWxrID0gdWEubWF0Y2goL1NpbGtcXC8oW1xcZC5fXSspLyksXG4gICAgICBibGFja2JlcnJ5ID0gdWEubWF0Y2goLyhCbGFja0JlcnJ5KS4qVmVyc2lvblxcLyhbXFxkLl0rKS8pLFxuICAgICAgYmIxMCA9IHVhLm1hdGNoKC8oQkIxMCkuKlZlcnNpb25cXC8oW1xcZC5dKykvKSxcbiAgICAgIHJpbXRhYmxldG9zID0gdWEubWF0Y2goLyhSSU1cXHNUYWJsZXRcXHNPUylcXHMoW1xcZC5dKykvKSxcbiAgICAgIHBsYXlib29rID0gdWEubWF0Y2goL1BsYXlCb29rLyksXG4gICAgICBjaHJvbWUgPSB1YS5tYXRjaCgvQ2hyb21lXFwvKFtcXGQuXSspLykgfHwgdWEubWF0Y2goL0NyaU9TXFwvKFtcXGQuXSspLyksXG4gICAgICBmaXJlZm94ID0gdWEubWF0Y2goL0ZpcmVmb3hcXC8oW1xcZC5dKykvKSxcbiAgICAgIGZpcmVmb3hvcyA9IHVhLm1hdGNoKC9cXCgoPzpNb2JpbGV8VGFibGV0KTsgcnY6KFtcXGQuXSspXFwpLipGaXJlZm94XFwvW1xcZC5dKy8pLFxuICAgICAgaWUgPSB1YS5tYXRjaCgvTVNJRVxccyhbXFxkLl0rKS8pIHx8IHVhLm1hdGNoKC9UcmlkZW50XFwvW1xcZF0oPz1bXlxcP10rKS4qcnY6KFswLTkuXS4pLyksXG4gICAgICB3ZWJ2aWV3ID0gIWNocm9tZSAmJiB1YS5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS8pLFxuICAgICAgc2FmYXJpID0gd2VidmlldyB8fCB1YS5tYXRjaCgvVmVyc2lvblxcLyhbXFxkLl0rKShbXlNdKFNhZmFyaSl8W15NXSooTW9iaWxlKVteU10qKFNhZmFyaSkpLylcblxuICAgIC8vIFRvZG86IGNsZWFuIHRoaXMgdXAgd2l0aCBhIGJldHRlciBPUy9icm93c2VyIHNlcGVyYXRpb246XG4gICAgLy8gLSBkaXNjZXJuIChtb3JlKSBiZXR3ZWVuIG11bHRpcGxlIGJyb3dzZXJzIG9uIGFuZHJvaWRcbiAgICAvLyAtIGRlY2lkZSBpZiBraW5kbGUgZmlyZSBpbiBzaWxrIG1vZGUgaXMgYW5kcm9pZCBvciBub3RcbiAgICAvLyAtIEZpcmVmb3ggb24gQW5kcm9pZCBkb2Vzbid0IHNwZWNpZnkgdGhlIEFuZHJvaWQgdmVyc2lvblxuICAgIC8vIC0gcG9zc2libHkgZGV2aWRlIGluIG9zLCBkZXZpY2UgYW5kIGJyb3dzZXIgaGFzaGVzXG5cbiAgICBpZiAoYnJvd3Nlci53ZWJraXQgPSAhIXdlYmtpdCkgYnJvd3Nlci52ZXJzaW9uID0gd2Via2l0WzFdXG5cbiAgICBpZiAoYW5kcm9pZCkgb3MuYW5kcm9pZCA9IHRydWUsIG9zLnZlcnNpb24gPSBhbmRyb2lkWzJdXG4gICAgaWYgKGlwaG9uZSAmJiAhaXBvZCkgb3MuaW9zID0gb3MuaXBob25lID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGlwaG9uZVsyXS5yZXBsYWNlKC9fL2csICcuJylcbiAgICBpZiAoaXBhZCkgb3MuaW9zID0gb3MuaXBhZCA9IHRydWUsIG9zLnZlcnNpb24gPSBpcGFkWzJdLnJlcGxhY2UoL18vZywgJy4nKVxuICAgIGlmIChpcG9kKSBvcy5pb3MgPSBvcy5pcG9kID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGlwb2RbM10gPyBpcG9kWzNdLnJlcGxhY2UoL18vZywgJy4nKSA6IG51bGxcbiAgICBpZiAod3ApIG9zLndwID0gdHJ1ZSwgb3MudmVyc2lvbiA9IHdwWzFdXG4gICAgaWYgKHdlYm9zKSBvcy53ZWJvcyA9IHRydWUsIG9zLnZlcnNpb24gPSB3ZWJvc1syXVxuICAgIGlmICh0b3VjaHBhZCkgb3MudG91Y2hwYWQgPSB0cnVlXG4gICAgaWYgKGJsYWNrYmVycnkpIG9zLmJsYWNrYmVycnkgPSB0cnVlLCBvcy52ZXJzaW9uID0gYmxhY2tiZXJyeVsyXVxuICAgIGlmIChiYjEwKSBvcy5iYjEwID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGJiMTBbMl1cbiAgICBpZiAocmltdGFibGV0b3MpIG9zLnJpbXRhYmxldG9zID0gdHJ1ZSwgb3MudmVyc2lvbiA9IHJpbXRhYmxldG9zWzJdXG4gICAgaWYgKHBsYXlib29rKSBicm93c2VyLnBsYXlib29rID0gdHJ1ZVxuICAgIGlmIChraW5kbGUpIG9zLmtpbmRsZSA9IHRydWUsIG9zLnZlcnNpb24gPSBraW5kbGVbMV1cbiAgICBpZiAoc2lsaykgYnJvd3Nlci5zaWxrID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gc2lsa1sxXVxuICAgIGlmICghc2lsayAmJiBvcy5hbmRyb2lkICYmIHVhLm1hdGNoKC9LaW5kbGUgRmlyZS8pKSBicm93c2VyLnNpbGsgPSB0cnVlXG4gICAgaWYgKGNocm9tZSkgYnJvd3Nlci5jaHJvbWUgPSB0cnVlLCBicm93c2VyLnZlcnNpb24gPSBjaHJvbWVbMV1cbiAgICBpZiAoZmlyZWZveCkgYnJvd3Nlci5maXJlZm94ID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gZmlyZWZveFsxXVxuICAgIGlmIChmaXJlZm94b3MpIG9zLmZpcmVmb3hvcyA9IHRydWUsIG9zLnZlcnNpb24gPSBmaXJlZm94b3NbMV1cbiAgICBpZiAoaWUpIGJyb3dzZXIuaWUgPSB0cnVlLCBicm93c2VyLnZlcnNpb24gPSBpZVsxXVxuICAgIGlmIChzYWZhcmkgJiYgKG9zeCB8fCBvcy5pb3MgfHwgd2luKSkge1xuICAgICAgYnJvd3Nlci5zYWZhcmkgPSB0cnVlXG4gICAgICBpZiAoIW9zLmlvcykgYnJvd3Nlci52ZXJzaW9uID0gc2FmYXJpWzFdXG4gICAgfVxuICAgIGlmICh3ZWJ2aWV3KSBicm93c2VyLndlYnZpZXcgPSB0cnVlXG5cbiAgICBvcy50YWJsZXQgPSAhIShpcGFkIHx8IHBsYXlib29rIHx8IChhbmRyb2lkICYmICF1YS5tYXRjaCgvTW9iaWxlLykpIHx8XG4gICAgICAoZmlyZWZveCAmJiB1YS5tYXRjaCgvVGFibGV0LykpIHx8IChpZSAmJiAhdWEubWF0Y2goL1Bob25lLykgJiYgdWEubWF0Y2goL1RvdWNoLykpKVxuICAgIG9zLnBob25lICA9ICEhKCFvcy50YWJsZXQgJiYgIW9zLmlwb2QgJiYgKGFuZHJvaWQgfHwgaXBob25lIHx8IHdlYm9zIHx8IGJsYWNrYmVycnkgfHwgYmIxMCB8fFxuICAgICAgKGNocm9tZSAmJiB1YS5tYXRjaCgvQW5kcm9pZC8pKSB8fCAoY2hyb21lICYmIHVhLm1hdGNoKC9DcmlPU1xcLyhbXFxkLl0rKS8pKSB8fFxuICAgICAgKGZpcmVmb3ggJiYgdWEubWF0Y2goL01vYmlsZS8pKSB8fCAoaWUgJiYgdWEubWF0Y2goL1RvdWNoLykpKSlcbiAgfVxuXG4gIGRldGVjdC5jYWxsKCQsIG5hdmlnYXRvci51c2VyQWdlbnQsIG5hdmlnYXRvci5wbGF0Zm9ybSlcbiAgLy8gbWFrZSBhdmFpbGFibGUgdG8gdW5pdCB0ZXN0c1xuICAkLl9fZGV0ZWN0ID0gZGV0ZWN0XG5cbn0pKFplcHRvKVxuXG4vLyAgICAgWmVwdG8uanNcbi8vICAgICAoYykgMjAxMC0yMDE0IFRob21hcyBGdWNoc1xuLy8gICAgIFplcHRvLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47KGZ1bmN0aW9uKCQpe1xuICB2YXIgX3ppZCA9IDEsIHVuZGVmaW5lZCxcbiAgICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgICAgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbixcbiAgICAgIGlzU3RyaW5nID0gZnVuY3Rpb24ob2JqKXsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ3N0cmluZycgfSxcbiAgICAgIGhhbmRsZXJzID0ge30sXG4gICAgICBzcGVjaWFsRXZlbnRzPXt9LFxuICAgICAgZm9jdXNpblN1cHBvcnRlZCA9ICdvbmZvY3VzaW4nIGluIHdpbmRvdyxcbiAgICAgIGZvY3VzID0geyBmb2N1czogJ2ZvY3VzaW4nLCBibHVyOiAnZm9jdXNvdXQnIH0sXG4gICAgICBob3ZlciA9IHsgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsIG1vdXNlbGVhdmU6ICdtb3VzZW91dCcgfVxuXG4gIHNwZWNpYWxFdmVudHMuY2xpY2sgPSBzcGVjaWFsRXZlbnRzLm1vdXNlZG93biA9IHNwZWNpYWxFdmVudHMubW91c2V1cCA9IHNwZWNpYWxFdmVudHMubW91c2Vtb3ZlID0gJ01vdXNlRXZlbnRzJ1xuXG4gIGZ1bmN0aW9uIHppZChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuX3ppZCB8fCAoZWxlbWVudC5femlkID0gX3ppZCsrKVxuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKSB7XG4gICAgZXZlbnQgPSBwYXJzZShldmVudClcbiAgICBpZiAoZXZlbnQubnMpIHZhciBtYXRjaGVyID0gbWF0Y2hlckZvcihldmVudC5ucylcbiAgICByZXR1cm4gKGhhbmRsZXJzW3ppZChlbGVtZW50KV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAmJiAoIWV2ZW50LmUgIHx8IGhhbmRsZXIuZSA9PSBldmVudC5lKVxuICAgICAgICAmJiAoIWV2ZW50Lm5zIHx8IG1hdGNoZXIudGVzdChoYW5kbGVyLm5zKSlcbiAgICAgICAgJiYgKCFmbiAgICAgICB8fCB6aWQoaGFuZGxlci5mbikgPT09IHppZChmbikpXG4gICAgICAgICYmICghc2VsZWN0b3IgfHwgaGFuZGxlci5zZWwgPT0gc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBwYXJzZShldmVudCkge1xuICAgIHZhciBwYXJ0cyA9ICgnJyArIGV2ZW50KS5zcGxpdCgnLicpXG4gICAgcmV0dXJuIHtlOiBwYXJ0c1swXSwgbnM6IHBhcnRzLnNsaWNlKDEpLnNvcnQoKS5qb2luKCcgJyl9XG4gIH1cbiAgZnVuY3Rpb24gbWF0Y2hlckZvcihucykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefCApJyArIG5zLnJlcGxhY2UoJyAnLCAnIC4qID8nKSArICcoPzogfCQpJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlU2V0dGluZykge1xuICAgIHJldHVybiBoYW5kbGVyLmRlbCAmJlxuICAgICAgKCFmb2N1c2luU3VwcG9ydGVkICYmIChoYW5kbGVyLmUgaW4gZm9jdXMpKSB8fFxuICAgICAgISFjYXB0dXJlU2V0dGluZ1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhbEV2ZW50KHR5cGUpIHtcbiAgICByZXR1cm4gaG92ZXJbdHlwZV0gfHwgKGZvY3VzaW5TdXBwb3J0ZWQgJiYgZm9jdXNbdHlwZV0pIHx8IHR5cGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChlbGVtZW50LCBldmVudHMsIGZuLCBkYXRhLCBzZWxlY3RvciwgZGVsZWdhdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudCksIHNldCA9IChoYW5kbGVyc1tpZF0gfHwgKGhhbmRsZXJzW2lkXSA9IFtdKSlcbiAgICBldmVudHMuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgaWYgKGV2ZW50ID09ICdyZWFkeScpIHJldHVybiAkKGRvY3VtZW50KS5yZWFkeShmbilcbiAgICAgIHZhciBoYW5kbGVyICAgPSBwYXJzZShldmVudClcbiAgICAgIGhhbmRsZXIuZm4gICAgPSBmblxuICAgICAgaGFuZGxlci5zZWwgICA9IHNlbGVjdG9yXG4gICAgICAvLyBlbXVsYXRlIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmVcbiAgICAgIGlmIChoYW5kbGVyLmUgaW4gaG92ZXIpIGZuID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhJC5jb250YWlucyh0aGlzLCByZWxhdGVkKSkpXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXIuZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgaGFuZGxlci5kZWwgICA9IGRlbGVnYXRvclxuICAgICAgdmFyIGNhbGxiYWNrICA9IGRlbGVnYXRvciB8fCBmblxuICAgICAgaGFuZGxlci5wcm94eSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlID0gY29tcGF0aWJsZShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm5cbiAgICAgICAgZS5kYXRhID0gZGF0YVxuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoZWxlbWVudCwgZS5fYXJncyA9PSB1bmRlZmluZWQgPyBbZV0gOiBbZV0uY29uY2F0KGUuX2FyZ3MpKVxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuaSA9IHNldC5sZW5ndGhcbiAgICAgIHNldC5wdXNoKGhhbmRsZXIpXG4gICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGV2ZW50cywgZm4sIHNlbGVjdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudClcbiAgICA7KGV2ZW50cyB8fCAnJykuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LCBmbiwgc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tpZF1baGFuZGxlci5pXVxuICAgICAgaWYgKCdyZW1vdmVFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KVxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIocmVhbEV2ZW50KGhhbmRsZXIuZSksIGhhbmRsZXIucHJveHksIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gICQuZXZlbnQgPSB7IGFkZDogYWRkLCByZW1vdmU6IHJlbW92ZSB9XG5cbiAgJC5wcm94eSA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MgPSAoMiBpbiBhcmd1bWVudHMpICYmIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgdmFyIHByb3h5Rm4gPSBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyA/IGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkgOiBhcmd1bWVudHMpIH1cbiAgICAgIHByb3h5Rm4uX3ppZCA9IHppZChmbilcbiAgICAgIHJldHVybiBwcm94eUZuXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGZuW2NvbnRleHRdLCBmbilcbiAgICAgICAgcmV0dXJuICQucHJveHkuYXBwbHkobnVsbCwgYXJncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkLnByb3h5KGZuW2NvbnRleHRdLCBmbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGVkIGZ1bmN0aW9uXCIpXG4gICAgfVxuICB9XG5cbiAgJC5mbi5iaW5kID0gZnVuY3Rpb24oZXZlbnQsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgZGF0YSwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmJpbmQgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9mZihldmVudCwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi5vbmUgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCAxKVxuICB9XG5cbiAgdmFyIHJldHVyblRydWUgPSBmdW5jdGlvbigpe3JldHVybiB0cnVlfSxcbiAgICAgIHJldHVybkZhbHNlID0gZnVuY3Rpb24oKXtyZXR1cm4gZmFsc2V9LFxuICAgICAgaWdub3JlUHJvcGVydGllcyA9IC9eKFtBLVpdfHJldHVyblZhbHVlJHxsYXllcltYWV0kKS8sXG4gICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgIH1cblxuICBmdW5jdGlvbiBjb21wYXRpYmxlKGV2ZW50LCBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlIHx8ICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHNvdXJjZSB8fCAoc291cmNlID0gZXZlbnQpXG5cbiAgICAgICQuZWFjaChldmVudE1ldGhvZHMsIGZ1bmN0aW9uKG5hbWUsIHByZWRpY2F0ZSkge1xuICAgICAgICB2YXIgc291cmNlTWV0aG9kID0gc291cmNlW25hbWVdXG4gICAgICAgIGV2ZW50W25hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICB0aGlzW3ByZWRpY2F0ZV0gPSByZXR1cm5UcnVlXG4gICAgICAgICAgcmV0dXJuIHNvdXJjZU1ldGhvZCAmJiBzb3VyY2VNZXRob2QuYXBwbHkoc291cmNlLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRbcHJlZGljYXRlXSA9IHJldHVybkZhbHNlXG4gICAgICB9KVxuXG4gICAgICBpZiAoc291cmNlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHVuZGVmaW5lZCA/IHNvdXJjZS5kZWZhdWx0UHJldmVudGVkIDpcbiAgICAgICAgICAncmV0dXJuVmFsdWUnIGluIHNvdXJjZSA/IHNvdXJjZS5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgOlxuICAgICAgICAgIHNvdXJjZS5nZXRQcmV2ZW50RGVmYXVsdCAmJiBzb3VyY2UuZ2V0UHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb3h5KGV2ZW50KSB7XG4gICAgdmFyIGtleSwgcHJveHkgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH1cbiAgICBmb3IgKGtleSBpbiBldmVudClcbiAgICAgIGlmICghaWdub3JlUHJvcGVydGllcy50ZXN0KGtleSkgJiYgZXZlbnRba2V5XSAhPT0gdW5kZWZpbmVkKSBwcm94eVtrZXldID0gZXZlbnRba2V5XVxuXG4gICAgcmV0dXJuIGNvbXBhdGlibGUocHJveHksIGV2ZW50KVxuICB9XG5cbiAgJC5mbi5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cblxuICAkLmZuLmxpdmUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgJC5mbi5kaWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gICQuZm4ub24gPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCBvbmUpe1xuICAgIHZhciBhdXRvUmVtb3ZlLCBkZWxlZ2F0b3IsICR0aGlzID0gdGhpc1xuICAgIGlmIChldmVudCAmJiAhaXNTdHJpbmcoZXZlbnQpKSB7XG4gICAgICAkLmVhY2goZXZlbnQsIGZ1bmN0aW9uKHR5cGUsIGZuKXtcbiAgICAgICAgJHRoaXMub24odHlwZSwgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuICR0aGlzXG4gICAgfVxuXG4gICAgaWYgKCFpc1N0cmluZyhzZWxlY3RvcikgJiYgIWlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrICE9PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpIHx8IGRhdGEgPT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBkYXRhLCBkYXRhID0gdW5kZWZpbmVkXG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IGZhbHNlKSBjYWxsYmFjayA9IHJldHVybkZhbHNlXG5cbiAgICByZXR1cm4gJHRoaXMuZWFjaChmdW5jdGlvbihfLCBlbGVtZW50KXtcbiAgICAgIGlmIChvbmUpIGF1dG9SZW1vdmUgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQsIGUudHlwZSwgY2FsbGJhY2spXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvcikgZGVsZWdhdG9yID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBldnQsIG1hdGNoID0gJChlLnRhcmdldCkuY2xvc2VzdChzZWxlY3RvciwgZWxlbWVudCkuZ2V0KDApXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGV2dCA9ICQuZXh0ZW5kKGNyZWF0ZVByb3h5KGUpLCB7Y3VycmVudFRhcmdldDogbWF0Y2gsIGxpdmVGaXJlZDogZWxlbWVudH0pXG4gICAgICAgICAgcmV0dXJuIChhdXRvUmVtb3ZlIHx8IGNhbGxiYWNrKS5hcHBseShtYXRjaCwgW2V2dF0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWRkKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgZGF0YSwgc2VsZWN0b3IsIGRlbGVnYXRvciB8fCBhdXRvUmVtb3ZlKVxuICAgIH0pXG4gIH1cbiAgJC5mbi5vZmYgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKXtcbiAgICB2YXIgJHRoaXMgPSB0aGlzXG4gICAgaWYgKGV2ZW50ICYmICFpc1N0cmluZyhldmVudCkpIHtcbiAgICAgICQuZWFjaChldmVudCwgZnVuY3Rpb24odHlwZSwgZm4pe1xuICAgICAgICAkdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAkdGhpc1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmcoc2VsZWN0b3IpICYmICFpc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayAhPT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkgY2FsbGJhY2sgPSByZXR1cm5GYWxzZVxuXG4gICAgcmV0dXJuICR0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZSh0aGlzLCBldmVudCwgY2FsbGJhY2ssIHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgZXZlbnQgPSAoaXNTdHJpbmcoZXZlbnQpIHx8ICQuaXNQbGFpbk9iamVjdChldmVudCkpID8gJC5FdmVudChldmVudCkgOiBjb21wYXRpYmxlKGV2ZW50KVxuICAgIGV2ZW50Ll9hcmdzID0gYXJnc1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIC8vIGhhbmRsZSBmb2N1cygpLCBibHVyKCkgYnkgY2FsbGluZyB0aGVtIGRpcmVjdGx5XG4gICAgICBpZiAoZXZlbnQudHlwZSBpbiBmb2N1cyAmJiB0eXBlb2YgdGhpc1tldmVudC50eXBlXSA9PSBcImZ1bmN0aW9uXCIpIHRoaXNbZXZlbnQudHlwZV0oKVxuICAgICAgLy8gaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gbWlnaHQgbm90IGJlIERPTSBlbGVtZW50c1xuICAgICAgZWxzZSBpZiAoJ2Rpc3BhdGNoRXZlbnQnIGluIHRoaXMpIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGVsc2UgJCh0aGlzKS50cmlnZ2VySGFuZGxlcihldmVudCwgYXJncylcbiAgICB9KVxuICB9XG5cbiAgLy8gdHJpZ2dlcnMgZXZlbnQgaGFuZGxlcnMgb24gY3VycmVudCBlbGVtZW50IGp1c3QgYXMgaWYgYW4gZXZlbnQgb2NjdXJyZWQsXG4gIC8vIGRvZXNuJ3QgdHJpZ2dlciBhbiBhY3R1YWwgZXZlbnQsIGRvZXNuJ3QgYnViYmxlXG4gICQuZm4udHJpZ2dlckhhbmRsZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgdmFyIGUsIHJlc3VsdFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbGVtZW50KXtcbiAgICAgIGUgPSBjcmVhdGVQcm94eShpc1N0cmluZyhldmVudCkgPyAkLkV2ZW50KGV2ZW50KSA6IGV2ZW50KVxuICAgICAgZS5fYXJncyA9IGFyZ3NcbiAgICAgIGUudGFyZ2V0ID0gZWxlbWVudFxuICAgICAgJC5lYWNoKGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudC50eXBlIHx8IGV2ZW50KSwgZnVuY3Rpb24oaSwgaGFuZGxlcil7XG4gICAgICAgIHJlc3VsdCA9IGhhbmRsZXIucHJveHkoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gc2hvcnRjdXQgbWV0aG9kcyBmb3IgYC5iaW5kKGV2ZW50LCBmbilgIGZvciBlYWNoIGV2ZW50IHR5cGVcbiAgOygnZm9jdXNpbiBmb2N1c291dCBmb2N1cyBibHVyIGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgJytcbiAgJ21vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlICcrXG4gICdjaGFuZ2Ugc2VsZWN0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3InKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkLmZuW2V2ZW50XSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gKDAgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYmluZChldmVudCwgY2FsbGJhY2spIDpcbiAgICAgICAgdGhpcy50cmlnZ2VyKGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICAkLkV2ZW50ID0gZnVuY3Rpb24odHlwZSwgcHJvcHMpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHR5cGUpKSBwcm9wcyA9IHR5cGUsIHR5cGUgPSBwcm9wcy50eXBlXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoc3BlY2lhbEV2ZW50c1t0eXBlXSB8fCAnRXZlbnRzJyksIGJ1YmJsZXMgPSB0cnVlXG4gICAgaWYgKHByb3BzKSBmb3IgKHZhciBuYW1lIGluIHByb3BzKSAobmFtZSA9PSAnYnViYmxlcycpID8gKGJ1YmJsZXMgPSAhIXByb3BzW25hbWVdKSA6IChldmVudFtuYW1lXSA9IHByb3BzW25hbWVdKVxuICAgIGV2ZW50LmluaXRFdmVudCh0eXBlLCBidWJibGVzLCB0cnVlKVxuICAgIHJldHVybiBjb21wYXRpYmxlKGV2ZW50KVxuICB9XG5cbn0pKFplcHRvKVxuXG4vLyAgICAgWmVwdG8uanNcbi8vICAgICAoYykgMjAxMC0yMDE0IFRob21hcyBGdWNoc1xuLy8gICAgIFplcHRvLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47KGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCl7XG4gIHZhciBwcmVmaXggPSAnJywgZXZlbnRQcmVmaXgsIGVuZEV2ZW50TmFtZSwgZW5kQW5pbWF0aW9uTmFtZSxcbiAgICB2ZW5kb3JzID0geyBXZWJraXQ6ICd3ZWJraXQnLCBNb3o6ICcnLCBPOiAnbycgfSxcbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCwgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgc3VwcG9ydGVkVHJhbnNmb3JtcyA9IC9eKCh0cmFuc2xhdGV8cm90YXRlfHNjYWxlKShYfFl8WnwzZCk/fG1hdHJpeCgzZCk/fHBlcnNwZWN0aXZlfHNrZXcoWHxZKT8pJC9pLFxuICAgIHRyYW5zZm9ybSxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHksIHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvblRpbWluZywgdHJhbnNpdGlvbkRlbGF5LFxuICAgIGFuaW1hdGlvbk5hbWUsIGFuaW1hdGlvbkR1cmF0aW9uLCBhbmltYXRpb25UaW1pbmcsIGFuaW1hdGlvbkRlbGF5LFxuICAgIGNzc1Jlc2V0ID0ge31cblxuICBmdW5jdGlvbiBkYXNoZXJpemUoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplRXZlbnQobmFtZSkgeyByZXR1cm4gZXZlbnRQcmVmaXggPyBldmVudFByZWZpeCArIG5hbWUgOiBuYW1lLnRvTG93ZXJDYXNlKCkgfVxuXG4gICQuZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbih2ZW5kb3IsIGV2ZW50KXtcbiAgICBpZiAodGVzdEVsLnN0eWxlW3ZlbmRvciArICdUcmFuc2l0aW9uUHJvcGVydHknXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKSArICctJ1xuICAgICAgZXZlbnRQcmVmaXggPSBldmVudFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIHRyYW5zZm9ybSA9IHByZWZpeCArICd0cmFuc2Zvcm0nXG4gIGNzc1Jlc2V0W3RyYW5zaXRpb25Qcm9wZXJ0eSA9IHByZWZpeCArICd0cmFuc2l0aW9uLXByb3BlcnR5J10gPVxuICBjc3NSZXNldFt0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAndHJhbnNpdGlvbi1kdXJhdGlvbiddID1cbiAgY3NzUmVzZXRbdHJhbnNpdGlvbkRlbGF5ICAgID0gcHJlZml4ICsgJ3RyYW5zaXRpb24tZGVsYXknXSA9XG4gIGNzc1Jlc2V0W3RyYW5zaXRpb25UaW1pbmcgICA9IHByZWZpeCArICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID1cbiAgY3NzUmVzZXRbYW5pbWF0aW9uTmFtZSAgICAgID0gcHJlZml4ICsgJ2FuaW1hdGlvbi1uYW1lJ10gPVxuICBjc3NSZXNldFthbmltYXRpb25EdXJhdGlvbiAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPVxuICBjc3NSZXNldFthbmltYXRpb25EZWxheSAgICAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLWRlbGF5J10gPVxuICBjc3NSZXNldFthbmltYXRpb25UaW1pbmcgICAgPSBwcmVmaXggKyAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJydcblxuICAkLmZ4ID0ge1xuICAgIG9mZjogKGV2ZW50UHJlZml4ID09PSB1bmRlZmluZWQgJiYgdGVzdEVsLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSxcbiAgICBzcGVlZHM6IHsgX2RlZmF1bHQ6IDQwMCwgZmFzdDogMjAwLCBzbG93OiA2MDAgfSxcbiAgICBjc3NQcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2l0aW9uRW5kOiBub3JtYWxpemVFdmVudCgnVHJhbnNpdGlvbkVuZCcpLFxuICAgIGFuaW1hdGlvbkVuZDogbm9ybWFsaXplRXZlbnQoJ0FuaW1hdGlvbkVuZCcpXG4gIH1cblxuICAkLmZuLmFuaW1hdGUgPSBmdW5jdGlvbihwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzZSwgY2FsbGJhY2ssIGRlbGF5KXtcbiAgICBpZiAoJC5pc0Z1bmN0aW9uKGR1cmF0aW9uKSlcbiAgICAgIGNhbGxiYWNrID0gZHVyYXRpb24sIGVhc2UgPSB1bmRlZmluZWQsIGR1cmF0aW9uID0gdW5kZWZpbmVkXG4gICAgaWYgKCQuaXNGdW5jdGlvbihlYXNlKSlcbiAgICAgIGNhbGxiYWNrID0gZWFzZSwgZWFzZSA9IHVuZGVmaW5lZFxuICAgIGlmICgkLmlzUGxhaW5PYmplY3QoZHVyYXRpb24pKVxuICAgICAgZWFzZSA9IGR1cmF0aW9uLmVhc2luZywgY2FsbGJhY2sgPSBkdXJhdGlvbi5jb21wbGV0ZSwgZGVsYXkgPSBkdXJhdGlvbi5kZWxheSwgZHVyYXRpb24gPSBkdXJhdGlvbi5kdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbikgZHVyYXRpb24gPSAodHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gOlxuICAgICAgICAgICAgICAgICAgICAoJC5meC5zcGVlZHNbZHVyYXRpb25dIHx8ICQuZnguc3BlZWRzLl9kZWZhdWx0KSkgLyAxMDAwXG4gICAgaWYgKGRlbGF5KSBkZWxheSA9IHBhcnNlRmxvYXQoZGVsYXkpIC8gMTAwMFxuICAgIHJldHVybiB0aGlzLmFuaW0ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UsIGNhbGxiYWNrLCBkZWxheSlcbiAgfVxuXG4gICQuZm4uYW5pbSA9IGZ1bmN0aW9uKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNlLCBjYWxsYmFjaywgZGVsYXkpe1xuICAgIHZhciBrZXksIGNzc1ZhbHVlcyA9IHt9LCBjc3NQcm9wZXJ0aWVzLCB0cmFuc2Zvcm1zID0gJycsXG4gICAgICAgIHRoYXQgPSB0aGlzLCB3cmFwcGVkQ2FsbGJhY2ssIGVuZEV2ZW50ID0gJC5meC50cmFuc2l0aW9uRW5kLFxuICAgICAgICBmaXJlZCA9IGZhbHNlXG5cbiAgICBpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkgZHVyYXRpb24gPSAkLmZ4LnNwZWVkcy5fZGVmYXVsdCAvIDEwMDBcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkgZGVsYXkgPSAwXG4gICAgaWYgKCQuZngub2ZmKSBkdXJhdGlvbiA9IDBcblxuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyA9PSAnc3RyaW5nJykge1xuICAgICAgLy8ga2V5ZnJhbWUgYW5pbWF0aW9uXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uTmFtZV0gPSBwcm9wZXJ0aWVzXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uRHVyYXRpb25dID0gZHVyYXRpb24gKyAncydcbiAgICAgIGNzc1ZhbHVlc1thbmltYXRpb25EZWxheV0gPSBkZWxheSArICdzJ1xuICAgICAgY3NzVmFsdWVzW2FuaW1hdGlvblRpbWluZ10gPSAoZWFzZSB8fCAnbGluZWFyJylcbiAgICAgIGVuZEV2ZW50ID0gJC5meC5hbmltYXRpb25FbmRcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUHJvcGVydGllcyA9IFtdXG4gICAgICAvLyBDU1MgdHJhbnNpdGlvbnNcbiAgICAgIGZvciAoa2V5IGluIHByb3BlcnRpZXMpXG4gICAgICAgIGlmIChzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3Qoa2V5KSkgdHJhbnNmb3JtcyArPSBrZXkgKyAnKCcgKyBwcm9wZXJ0aWVzW2tleV0gKyAnKSAnXG4gICAgICAgIGVsc2UgY3NzVmFsdWVzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV0sIGNzc1Byb3BlcnRpZXMucHVzaChkYXNoZXJpemUoa2V5KSlcblxuICAgICAgaWYgKHRyYW5zZm9ybXMpIGNzc1ZhbHVlc1t0cmFuc2Zvcm1dID0gdHJhbnNmb3JtcywgY3NzUHJvcGVydGllcy5wdXNoKHRyYW5zZm9ybSlcbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgdHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcGVydHldID0gY3NzUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uRHVyYXRpb25dID0gZHVyYXRpb24gKyAncydcbiAgICAgICAgY3NzVmFsdWVzW3RyYW5zaXRpb25EZWxheV0gPSBkZWxheSArICdzJ1xuICAgICAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblRpbWluZ10gPSAoZWFzZSB8fCAnbGluZWFyJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3cmFwcGVkQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gLy8gbWFrZXMgc3VyZSB0aGUgZXZlbnQgZGlkbid0IGJ1YmJsZSBmcm9tIFwiYmVsb3dcIlxuICAgICAgICAkKGV2ZW50LnRhcmdldCkudW5iaW5kKGVuZEV2ZW50LCB3cmFwcGVkQ2FsbGJhY2spXG4gICAgICB9IGVsc2VcbiAgICAgICAgJCh0aGlzKS51bmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaykgLy8gdHJpZ2dlcmVkIGJ5IHNldFRpbWVvdXRcblxuICAgICAgZmlyZWQgPSB0cnVlXG4gICAgICAkKHRoaXMpLmNzcyhjc3NSZXNldClcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGhpcylcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uID4gMCl7XG4gICAgICB0aGlzLmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaylcbiAgICAgIC8vIHRyYW5zaXRpb25FbmQgaXMgbm90IGFsd2F5cyBmaXJpbmcgb24gb2xkZXIgQW5kcm9pZCBwaG9uZXNcbiAgICAgIC8vIHNvIG1ha2Ugc3VyZSBpdCBnZXRzIGZpcmVkXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChmaXJlZCkgcmV0dXJuXG4gICAgICAgIHdyYXBwZWRDYWxsYmFjay5jYWxsKHRoYXQpXG4gICAgICB9LCAoKGR1cmF0aW9uICsgZGVsYXkpICogMTAwMCkgKyAyNSlcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyIHBhZ2UgcmVmbG93IHNvIG5ldyBlbGVtZW50cyBjYW4gYW5pbWF0ZVxuICAgIHRoaXMuc2l6ZSgpICYmIHRoaXMuZ2V0KDApLmNsaWVudExlZnRcblxuICAgIHRoaXMuY3NzKGNzc1ZhbHVlcylcblxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCl7IHdyYXBwZWRDYWxsYmFjay5jYWxsKHRoaXMpIH0pXG4gICAgfSwgMClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0ZXN0RWwgPSBudWxsXG59KShaZXB0bylcblxuLy8gICAgIFplcHRvLmpzXG4vLyAgICAgKGMpIDIwMTAtMjAxNCBUaG9tYXMgRnVjaHNcbi8vICAgICBaZXB0by5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyhmdW5jdGlvbigpe1xuICAvLyBnZXRDb21wdXRlZFN0eWxlIHNob3VsZG4ndCBmcmVhayBvdXQgd2hlbiBjYWxsZWRcbiAgLy8gd2l0aG91dCBhIHZhbGlkIGVsZW1lbnQgYXMgYXJndW1lbnRcbiAgdHJ5IHtcbiAgICBnZXRDb21wdXRlZFN0eWxlKHVuZGVmaW5lZClcbiAgfSBjYXRjaChlKSB7XG4gICAgdmFyIG5hdGl2ZUdldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmF0aXZlR2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59KSgpXG5cbi8vICAgICBaZXB0by5qc1xuLy8gICAgIChjKSAyMDEwLTIwMTQgVGhvbWFzIEZ1Y2hzXG4vLyAgICAgWmVwdG8uanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciB0b3VjaCA9IHt9LFxuICAgIHRvdWNoVGltZW91dCwgdGFwVGltZW91dCwgc3dpcGVUaW1lb3V0LCBsb25nVGFwVGltZW91dCxcbiAgICBsb25nVGFwRGVsYXkgPSA3NTAsXG4gICAgZ2VzdHVyZVxuXG4gIGZ1bmN0aW9uIHN3aXBlRGlyZWN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHgxIC0geDIpID49XG4gICAgICBNYXRoLmFicyh5MSAtIHkyKSA/ICh4MSAtIHgyID4gMCA/ICdMZWZ0JyA6ICdSaWdodCcpIDogKHkxIC0geTIgPiAwID8gJ1VwJyA6ICdEb3duJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvbmdUYXAoKSB7XG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gICAgaWYgKHRvdWNoLmxhc3QpIHtcbiAgICAgIHRvdWNoLmVsLnRyaWdnZXIoJ2xvbmdUYXAnKVxuICAgICAgdG91Y2ggPSB7fVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbExvbmdUYXAoKSB7XG4gICAgaWYgKGxvbmdUYXBUaW1lb3V0KSBjbGVhclRpbWVvdXQobG9uZ1RhcFRpbWVvdXQpXG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgaWYgKHRvdWNoVGltZW91dCkgY2xlYXJUaW1lb3V0KHRvdWNoVGltZW91dClcbiAgICBpZiAodGFwVGltZW91dCkgY2xlYXJUaW1lb3V0KHRhcFRpbWVvdXQpXG4gICAgaWYgKHN3aXBlVGltZW91dCkgY2xlYXJUaW1lb3V0KHN3aXBlVGltZW91dClcbiAgICBpZiAobG9uZ1RhcFRpbWVvdXQpIGNsZWFyVGltZW91dChsb25nVGFwVGltZW91dClcbiAgICB0b3VjaFRpbWVvdXQgPSB0YXBUaW1lb3V0ID0gc3dpcGVUaW1lb3V0ID0gbG9uZ1RhcFRpbWVvdXQgPSBudWxsXG4gICAgdG91Y2ggPSB7fVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQcmltYXJ5VG91Y2goZXZlbnQpe1xuICAgIHJldHVybiAoZXZlbnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyB8fFxuICAgICAgZXZlbnQucG9pbnRlclR5cGUgPT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gICAgICAmJiBldmVudC5pc1ByaW1hcnlcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUG9pbnRlckV2ZW50VHlwZShlLCB0eXBlKXtcbiAgICByZXR1cm4gKGUudHlwZSA9PSAncG9pbnRlcicrdHlwZSB8fFxuICAgICAgZS50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ21zcG9pbnRlcicrdHlwZSlcbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5vdywgZGVsdGEsIGRlbHRhWCA9IDAsIGRlbHRhWSA9IDAsIGZpcnN0VG91Y2gsIF9pc1BvaW50ZXJUeXBlXG5cbiAgICBpZiAoJ01TR2VzdHVyZScgaW4gd2luZG93KSB7XG4gICAgICBnZXN0dXJlID0gbmV3IE1TR2VzdHVyZSgpXG4gICAgICBnZXN0dXJlLnRhcmdldCA9IGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KVxuICAgICAgLmJpbmQoJ01TR2VzdHVyZUVuZCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgc3dpcGVEaXJlY3Rpb25Gcm9tVmVsb2NpdHkgPVxuICAgICAgICAgIGUudmVsb2NpdHlYID4gMSA/ICdSaWdodCcgOiBlLnZlbG9jaXR5WCA8IC0xID8gJ0xlZnQnIDogZS52ZWxvY2l0eVkgPiAxID8gJ0Rvd24nIDogZS52ZWxvY2l0eVkgPCAtMSA/ICdVcCcgOiBudWxsO1xuICAgICAgICBpZiAoc3dpcGVEaXJlY3Rpb25Gcm9tVmVsb2NpdHkpIHtcbiAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXG4gICAgICAgICAgdG91Y2guZWwudHJpZ2dlcignc3dpcGUnKyBzd2lwZURpcmVjdGlvbkZyb21WZWxvY2l0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbigndG91Y2hzdGFydCBNU1BvaW50ZXJEb3duIHBvaW50ZXJkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmKChfaXNQb2ludGVyVHlwZSA9IGlzUG9pbnRlckV2ZW50VHlwZShlLCAnZG93bicpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGZpcnN0VG91Y2ggPSBfaXNQb2ludGVyVHlwZSA/IGUgOiBlLnRvdWNoZXNbMF1cbiAgICAgICAgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRvdWNoLngyKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgb3V0IHRvdWNoIG1vdmVtZW50IGRhdGEgaWYgd2UgaGF2ZSBpdCBzdGlja2luZyBhcm91bmRcbiAgICAgICAgICAvLyBUaGlzIGNhbiBvY2N1ciBpZiB0b3VjaGNhbmNlbCBkb2Vzbid0IGZpcmUgZHVlIHRvIHByZXZlbnREZWZhdWx0LCBldGMuXG4gICAgICAgICAgdG91Y2gueDIgPSB1bmRlZmluZWRcbiAgICAgICAgICB0b3VjaC55MiA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIG5vdyA9IERhdGUubm93KClcbiAgICAgICAgZGVsdGEgPSBub3cgLSAodG91Y2gubGFzdCB8fCBub3cpXG4gICAgICAgIHRvdWNoLmVsID0gJCgndGFnTmFtZScgaW4gZmlyc3RUb3VjaC50YXJnZXQgP1xuICAgICAgICAgIGZpcnN0VG91Y2gudGFyZ2V0IDogZmlyc3RUb3VjaC50YXJnZXQucGFyZW50Tm9kZSlcbiAgICAgICAgdG91Y2hUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0b3VjaFRpbWVvdXQpXG4gICAgICAgIHRvdWNoLngxID0gZmlyc3RUb3VjaC5wYWdlWFxuICAgICAgICB0b3VjaC55MSA9IGZpcnN0VG91Y2gucGFnZVlcbiAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8PSAyNTApIHRvdWNoLmlzRG91YmxlVGFwID0gdHJ1ZVxuICAgICAgICB0b3VjaC5sYXN0ID0gbm93XG4gICAgICAgIGxvbmdUYXBUaW1lb3V0ID0gc2V0VGltZW91dChsb25nVGFwLCBsb25nVGFwRGVsYXkpXG4gICAgICAgIC8vIGFkZHMgdGhlIGN1cnJlbnQgdG91Y2ggY29udGFjdCBmb3IgSUUgZ2VzdHVyZSByZWNvZ25pdGlvblxuICAgICAgICBpZiAoZ2VzdHVyZSAmJiBfaXNQb2ludGVyVHlwZSkgZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKTtcbiAgICAgIH0pXG4gICAgICAub24oJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmKChfaXNQb2ludGVyVHlwZSA9IGlzUG9pbnRlckV2ZW50VHlwZShlLCAnbW92ZScpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGZpcnN0VG91Y2ggPSBfaXNQb2ludGVyVHlwZSA/IGUgOiBlLnRvdWNoZXNbMF1cbiAgICAgICAgY2FuY2VsTG9uZ1RhcCgpXG4gICAgICAgIHRvdWNoLngyID0gZmlyc3RUb3VjaC5wYWdlWFxuICAgICAgICB0b3VjaC55MiA9IGZpcnN0VG91Y2gucGFnZVlcblxuICAgICAgICBkZWx0YVggKz0gTWF0aC5hYnModG91Y2gueDEgLSB0b3VjaC54MilcbiAgICAgICAgZGVsdGFZICs9IE1hdGguYWJzKHRvdWNoLnkxIC0gdG91Y2gueTIpXG4gICAgICB9KVxuICAgICAgLm9uKCd0b3VjaGVuZCBNU1BvaW50ZXJVcCBwb2ludGVydXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgaWYoKF9pc1BvaW50ZXJUeXBlID0gaXNQb2ludGVyRXZlbnRUeXBlKGUsICd1cCcpKSAmJlxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXG4gICAgICAgIGNhbmNlbExvbmdUYXAoKVxuXG4gICAgICAgIC8vIHN3aXBlXG4gICAgICAgIGlmICgodG91Y2gueDIgJiYgTWF0aC5hYnModG91Y2gueDEgLSB0b3VjaC54MikgPiAzMCkgfHxcbiAgICAgICAgICAgICh0b3VjaC55MiAmJiBNYXRoLmFicyh0b3VjaC55MSAtIHRvdWNoLnkyKSA+IDMwKSlcblxuICAgICAgICAgIHN3aXBlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXG4gICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScgKyAoc3dpcGVEaXJlY3Rpb24odG91Y2gueDEsIHRvdWNoLngyLCB0b3VjaC55MSwgdG91Y2gueTIpKSlcbiAgICAgICAgICAgIHRvdWNoID0ge31cbiAgICAgICAgICB9LCAwKVxuXG4gICAgICAgIC8vIG5vcm1hbCB0YXBcbiAgICAgICAgZWxzZSBpZiAoJ2xhc3QnIGluIHRvdWNoKVxuICAgICAgICAgIC8vIGRvbid0IGZpcmUgdGFwIHdoZW4gZGVsdGEgcG9zaXRpb24gY2hhbmdlZCBieSBtb3JlIHRoYW4gMzAgcGl4ZWxzLFxuICAgICAgICAgIC8vIGZvciBpbnN0YW5jZSB3aGVuIG1vdmluZyB0byBhIHBvaW50IGFuZCBiYWNrIHRvIG9yaWdpblxuICAgICAgICAgIGlmIChkZWx0YVggPCAzMCAmJiBkZWx0YVkgPCAzMCkge1xuICAgICAgICAgICAgLy8gZGVsYXkgYnkgb25lIHRpY2sgc28gd2UgY2FuIGNhbmNlbCB0aGUgJ3RhcCcgZXZlbnQgaWYgJ3Njcm9sbCcgZmlyZXNcbiAgICAgICAgICAgIC8vICgndGFwJyBmaXJlcyBiZWZvcmUgJ3Njcm9sbCcpXG4gICAgICAgICAgICB0YXBUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHVuaXZlcnNhbCAndGFwJyB3aXRoIHRoZSBvcHRpb24gdG8gY2FuY2VsVG91Y2goKVxuICAgICAgICAgICAgICAvLyAoY2FuY2VsVG91Y2ggY2FuY2VscyBwcm9jZXNzaW5nIG9mIHNpbmdsZSB2cyBkb3VibGUgdGFwcyBmb3IgZmFzdGVyICd0YXAnIHJlc3BvbnNlKVxuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KCd0YXAnKVxuICAgICAgICAgICAgICBldmVudC5jYW5jZWxUb3VjaCA9IGNhbmNlbEFsbFxuICAgICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKGV2ZW50KVxuXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgZG91YmxlIHRhcCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAodG91Y2guaXNEb3VibGVUYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2guZWwpIHRvdWNoLmVsLnRyaWdnZXIoJ2RvdWJsZVRhcCcpXG4gICAgICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gdHJpZ2dlciBzaW5nbGUgdGFwIGFmdGVyIDI1MG1zIG9mIGluYWN0aXZpdHlcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgdG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoLmVsKSB0b3VjaC5lbC50cmlnZ2VyKCdzaW5nbGVUYXAnKVxuICAgICAgICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG91Y2ggPSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBkZWx0YVggPSBkZWx0YVkgPSAwXG5cbiAgICAgIH0pXG4gICAgICAvLyB3aGVuIHRoZSBicm93c2VyIHdpbmRvdyBsb3NlcyBmb2N1cyxcbiAgICAgIC8vIGZvciBleGFtcGxlIHdoZW4gYSBtb2RhbCBkaWFsb2cgaXMgc2hvd24sXG4gICAgICAvLyBjYW5jZWwgYWxsIG9uZ29pbmcgZXZlbnRzXG4gICAgICAub24oJ3RvdWNoY2FuY2VsIE1TUG9pbnRlckNhbmNlbCBwb2ludGVyY2FuY2VsJywgY2FuY2VsQWxsKVxuXG4gICAgLy8gc2Nyb2xsaW5nIHRoZSB3aW5kb3cgaW5kaWNhdGVzIGludGVudGlvbiBvZiB0aGUgdXNlclxuICAgIC8vIHRvIHNjcm9sbCwgbm90IHRhcCBvciBzd2lwZSwgc28gY2FuY2VsIGFsbCBvbmdvaW5nIGV2ZW50c1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgY2FuY2VsQWxsKVxuICB9KVxuXG4gIDtbJ3N3aXBlJywgJ3N3aXBlTGVmdCcsICdzd2lwZVJpZ2h0JywgJ3N3aXBlVXAnLCAnc3dpcGVEb3duJyxcbiAgICAnZG91YmxlVGFwJywgJ3RhcCcsICdzaW5nbGVUYXAnLCAnbG9uZ1RhcCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcbiAgICAkLmZuW2V2ZW50TmFtZV0gPSBmdW5jdGlvbihjYWxsYmFjayl7IHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIH1cbiAgfSlcbn0pKFplcHRvKVxuXG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiAkICE9IFwidW5kZWZpbmVkXCIgPyAkIDogd2luZG93LiQpO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKipcbiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZFxuICovXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiggKlstKl9dKXszLH0gKig/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpLyxcbiAgbnB0YWJsZTogbm9vcCxcbiAgbGhlYWRpbmc6IC9eKFteXFxuXSspXFxuICooPXwtKXsyLH0gKig/Olxcbit8JCkvLFxuICBibG9ja3F1b3RlOiAvXiggKj5bXlxcbl0rKFxcbig/IWRlZilbXlxcbl0rKSpcXG4qKSsvLFxuICBsaXN0OiAvXiggKikoYnVsbCkgW1xcc1xcU10rPyg/OmhyfGRlZnxcXG57Mix9KD8hICkoPyFcXDFidWxsIClcXG4qfFxccyokKS8sXG4gIGh0bWw6IC9eICooPzpjb21tZW50fGNsb3NlZHxjbG9zaW5nKSAqKD86XFxuezIsfXxcXHMqJCkvLFxuICBkZWY6IC9eICpcXFsoW15cXF1dKylcXF06ICo8PyhbXlxccz5dKyk+Pyg/OiArW1wiKF0oW15cXG5dKylbXCIpXSk/ICooPzpcXG4rfCQpLyxcbiAgdGFibGU6IG5vb3AsXG4gIHBhcmFncmFwaDogL14oKD86W15cXG5dK1xcbj8oPyFocnxoZWFkaW5nfGxoZWFkaW5nfGJsb2NrcXVvdGV8dGFnfGRlZikpKylcXG4qLyxcbiAgdGV4dDogL15bXlxcbl0rL1xufTtcblxuYmxvY2suYnVsbGV0ID0gLyg/OlsqKy1dfFxcZCtcXC4pLztcbmJsb2NrLml0ZW0gPSAvXiggKikoYnVsbCkgW15cXG5dKig/Olxcbig/IVxcMWJ1bGwgKVteXFxuXSopKi87XG5ibG9jay5pdGVtID0gcmVwbGFjZShibG9jay5pdGVtLCAnZ20nKVxuICAoL2J1bGwvZywgYmxvY2suYnVsbGV0KVxuICAoKTtcblxuYmxvY2subGlzdCA9IHJlcGxhY2UoYmxvY2subGlzdClcbiAgKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgKCdocicsICdcXFxcbisoPz1cXFxcMT8oPzpbLSpfXSAqKXszLH0oPzpcXFxcbit8JCkpJylcbiAgKCdkZWYnLCAnXFxcXG4rKD89JyArIGJsb2NrLmRlZi5zb3VyY2UgKyAnKScpXG4gICgpO1xuXG5ibG9jay5ibG9ja3F1b3RlID0gcmVwbGFjZShibG9jay5ibG9ja3F1b3RlKVxuICAoJ2RlZicsIGJsb2NrLmRlZilcbiAgKCk7XG5cbmJsb2NrLl90YWcgPSAnKD8hKD86J1xuICArICdhfGVtfHN0cm9uZ3xzbWFsbHxzfGNpdGV8cXxkZm58YWJicnxkYXRhfHRpbWV8Y29kZSdcbiAgKyAnfHZhcnxzYW1wfGtiZHxzdWJ8c3VwfGl8Ynx1fG1hcmt8cnVieXxydHxycHxiZGl8YmRvJ1xuICArICd8c3Bhbnxicnx3YnJ8aW5zfGRlbHxpbWcpXFxcXGIpXFxcXHcrKD8hOi98W15cXFxcd1xcXFxzQF0qQClcXFxcYic7XG5cbmJsb2NrLmh0bWwgPSByZXBsYWNlKGJsb2NrLmh0bWwpXG4gICgnY29tbWVudCcsIC88IS0tW1xcc1xcU10qPy0tPi8pXG4gICgnY2xvc2VkJywgLzwodGFnKVtcXHNcXFNdKz88XFwvXFwxPi8pXG4gICgnY2xvc2luZycsIC88dGFnKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj8+LylcbiAgKC90YWcvZywgYmxvY2suX3RhZylcbiAgKCk7XG5cbmJsb2NrLnBhcmFncmFwaCA9IHJlcGxhY2UoYmxvY2sucGFyYWdyYXBoKVxuICAoJ2hyJywgYmxvY2suaHIpXG4gICgnaGVhZGluZycsIGJsb2NrLmhlYWRpbmcpXG4gICgnbGhlYWRpbmcnLCBibG9jay5saGVhZGluZylcbiAgKCdibG9ja3F1b3RlJywgYmxvY2suYmxvY2txdW90ZSlcbiAgKCd0YWcnLCAnPCcgKyBibG9jay5fdGFnKVxuICAoJ2RlZicsIGJsb2NrLmRlZilcbiAgKCk7XG5cbi8qKlxuICogTm9ybWFsIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay5ub3JtYWwgPSBtZXJnZSh7fSwgYmxvY2spO1xuXG4vKipcbiAqIEdGTSBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2suZ2ZtID0gbWVyZ2Uoe30sIGJsb2NrLm5vcm1hbCwge1xuICBmZW5jZXM6IC9eICooYHszLH18fnszLH0pICooXFxTKyk/ICpcXG4oW1xcc1xcU10rPylcXHMqXFwxICooPzpcXG4rfCQpLyxcbiAgcGFyYWdyYXBoOiAvXi9cbn0pO1xuXG5ibG9jay5nZm0ucGFyYWdyYXBoID0gcmVwbGFjZShibG9jay5wYXJhZ3JhcGgpXG4gICgnKD8hJywgJyg/ISdcbiAgICArIGJsb2NrLmdmbS5mZW5jZXMuc291cmNlLnJlcGxhY2UoJ1xcXFwxJywgJ1xcXFwyJykgKyAnfCdcbiAgICArIGJsb2NrLmxpc3Quc291cmNlLnJlcGxhY2UoJ1xcXFwxJywgJ1xcXFwzJykgKyAnfCcpXG4gICgpO1xuXG4vKipcbiAqIEdGTSArIFRhYmxlcyBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2sudGFibGVzID0gbWVyZ2Uoe30sIGJsb2NrLmdmbSwge1xuICBucHRhYmxlOiAvXiAqKFxcUy4qXFx8LiopXFxuICooWy06XSsgKlxcfFstfCA6XSopXFxuKCg/Oi4qXFx8LiooPzpcXG58JCkpKilcXG4qLyxcbiAgdGFibGU6IC9eICpcXHwoLispXFxuICpcXHwoICpbLTpdK1stfCA6XSopXFxuKCg/OiAqXFx8LiooPzpcXG58JCkpKilcXG4qL1xufSk7XG5cbi8qKlxuICogQmxvY2sgTGV4ZXJcbiAqL1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW5zLmxpbmtzID0ge307XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLnJ1bGVzID0gYmxvY2subm9ybWFsO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50YWJsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMgPSBibG9jay50YWJsZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBibG9jay5nZm07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIEJsb2NrIFJ1bGVzXG4gKi9cblxuTGV4ZXIucnVsZXMgPSBibG9jaztcblxuLyoqXG4gKiBTdGF0aWMgTGV4IE1ldGhvZFxuICovXG5cbkxleGVyLmxleCA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucykge1xuICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIob3B0aW9ucyk7XG4gIHJldHVybiBsZXhlci5sZXgoc3JjKTtcbn07XG5cbi8qKlxuICogUHJlcHJvY2Vzc2luZ1xuICovXG5cbkxleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbihzcmMpIHtcbiAgc3JjID0gc3JjXG4gICAgLnJlcGxhY2UoL1xcclxcbnxcXHIvZywgJ1xcbicpXG4gICAgLnJlcGxhY2UoL1xcdC9nLCAnICAgICcpXG4gICAgLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cXHUyNDI0L2csICdcXG4nKTtcblxuICByZXR1cm4gdGhpcy50b2tlbihzcmMsIHRydWUpO1xufTtcblxuLyoqXG4gKiBMZXhpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUudG9rZW4gPSBmdW5jdGlvbihzcmMsIHRvcCwgYnEpIHtcbiAgdmFyIHNyYyA9IHNyYy5yZXBsYWNlKC9eICskL2dtLCAnJylcbiAgICAsIG5leHRcbiAgICAsIGxvb3NlXG4gICAgLCBjYXBcbiAgICAsIGJ1bGxcbiAgICAsIGJcbiAgICAsIGl0ZW1cbiAgICAsIHNwYWNlXG4gICAgLCBpXG4gICAgLCBsO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBuZXdsaW5lXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubmV3bGluZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3NwYWNlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBjYXAgPSBjYXBbMF0ucmVwbGFjZSgvXiB7NH0vZ20sICcnKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIHRleHQ6ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICA/IGNhcC5yZXBsYWNlKC9cXG4rJC8sICcnKVxuICAgICAgICAgIDogY2FwXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZlbmNlcyAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmZlbmNlcy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICBsYW5nOiBjYXBbMl0sXG4gICAgICAgIHRleHQ6IGNhcFszXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBoZWFkaW5nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzFdLmxlbmd0aCxcbiAgICAgICAgdGV4dDogY2FwWzJdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIG5vIGxlYWRpbmcgcGlwZSAoZ2ZtKVxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMubnB0YWJsZS5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IGNhcFsxXS5yZXBsYWNlKC9eICp8ICpcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGFsaWduOiBjYXBbMl0ucmVwbGFjZSgvXiAqfFxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgY2VsbHM6IGNhcFszXS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKVxuICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uYWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKC9eICotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnY2VudGVyJztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtLmNlbGxzW2ldID0gaXRlbS5jZWxsc1tpXS5zcGxpdCgvICpcXHwgKi8pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxoZWFkaW5nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgIGRlcHRoOiBjYXBbMl0gPT09ICc9JyA/IDEgOiAyLFxuICAgICAgICB0ZXh0OiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaHJcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5oci5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hyJ1xuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBibG9ja3F1b3RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYmxvY2txdW90ZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnYmxvY2txdW90ZV9zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICBjYXAgPSBjYXBbMF0ucmVwbGFjZSgvXiAqPiA/L2dtLCAnJyk7XG5cbiAgICAgIC8vIFBhc3MgYHRvcGAgdG8ga2VlcCB0aGUgY3VycmVudFxuICAgICAgLy8gXCJ0b3BsZXZlbFwiIHN0YXRlLiBUaGlzIGlzIGV4YWN0bHlcbiAgICAgIC8vIGhvdyBtYXJrZG93bi5wbCB3b3Jrcy5cbiAgICAgIHRoaXMudG9rZW4oY2FwLCB0b3AsIHRydWUpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfZW5kJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpc3RcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saXN0LmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGJ1bGwgPSBjYXBbMl07XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlzdF9zdGFydCcsXG4gICAgICAgIG9yZGVyZWQ6IGJ1bGwubGVuZ3RoID4gMVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEdldCBlYWNoIHRvcC1sZXZlbCBpdGVtLlxuICAgICAgY2FwID0gY2FwWzBdLm1hdGNoKHRoaXMucnVsZXMuaXRlbSk7XG5cbiAgICAgIG5leHQgPSBmYWxzZTtcbiAgICAgIGwgPSBjYXAubGVuZ3RoO1xuICAgICAgaSA9IDA7XG5cbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBjYXBbaV07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsaXN0IGl0ZW0ncyBidWxsZXRcbiAgICAgICAgLy8gc28gaXQgaXMgc2VlbiBhcyB0aGUgbmV4dCB0b2tlbi5cbiAgICAgICAgc3BhY2UgPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXiAqKFsqKy1dfFxcZCtcXC4pICsvLCAnJyk7XG5cbiAgICAgICAgLy8gT3V0ZGVudCB3aGF0ZXZlciB0aGVcbiAgICAgICAgLy8gbGlzdCBpdGVtIGNvbnRhaW5zLiBIYWNreS5cbiAgICAgICAgaWYgKH5pdGVtLmluZGV4T2YoJ1xcbiAnKSkge1xuICAgICAgICAgIHNwYWNlIC09IGl0ZW0ubGVuZ3RoO1xuICAgICAgICAgIGl0ZW0gPSAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgICA/IGl0ZW0ucmVwbGFjZShuZXcgUmVnRXhwKCdeIHsxLCcgKyBzcGFjZSArICd9JywgJ2dtJyksICcnKVxuICAgICAgICAgICAgOiBpdGVtLnJlcGxhY2UoL14gezEsNH0vZ20sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBuZXh0IGxpc3QgaXRlbSBiZWxvbmdzIGhlcmUuXG4gICAgICAgIC8vIEJhY2twZWRhbCBpZiBpdCBkb2VzIG5vdCBiZWxvbmcgaW4gdGhpcyBsaXN0LlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNtYXJ0TGlzdHMgJiYgaSAhPT0gbCAtIDEpIHtcbiAgICAgICAgICBiID0gYmxvY2suYnVsbGV0LmV4ZWMoY2FwW2kgKyAxXSlbMF07XG4gICAgICAgICAgaWYgKGJ1bGwgIT09IGIgJiYgIShidWxsLmxlbmd0aCA+IDEgJiYgYi5sZW5ndGggPiAxKSkge1xuICAgICAgICAgICAgc3JjID0gY2FwLnNsaWNlKGkgKyAxKS5qb2luKCdcXG4nKSArIHNyYztcbiAgICAgICAgICAgIGkgPSBsIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBpdGVtIGlzIGxvb3NlIG9yIG5vdC5cbiAgICAgICAgLy8gVXNlOiAvKF58XFxuKSg/ISApW15cXG5dK1xcblxcbig/IVxccyokKS9cbiAgICAgICAgLy8gZm9yIGRpc2NvdW50IGJlaGF2aW9yLlxuICAgICAgICBsb29zZSA9IG5leHQgfHwgL1xcblxcbig/IVxccyokKS8udGVzdChpdGVtKTtcbiAgICAgICAgaWYgKGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgbmV4dCA9IGl0ZW0uY2hhckF0KGl0ZW0ubGVuZ3RoIC0gMSkgPT09ICdcXG4nO1xuICAgICAgICAgIGlmICghbG9vc2UpIGxvb3NlID0gbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6IGxvb3NlXG4gICAgICAgICAgICA/ICdsb29zZV9pdGVtX3N0YXJ0J1xuICAgICAgICAgICAgOiAnbGlzdF9pdGVtX3N0YXJ0J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZWN1cnNlLlxuICAgICAgICB0aGlzLnRva2VuKGl0ZW0sIGZhbHNlLCBicSk7XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2xpc3RfaXRlbV9lbmQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3RfZW5kJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGh0bWxcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5odG1sLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiB0aGlzLm9wdGlvbnMuc2FuaXRpemVcbiAgICAgICAgICA/ICdwYXJhZ3JhcGgnXG4gICAgICAgICAgOiAnaHRtbCcsXG4gICAgICAgIHByZTogY2FwWzFdID09PSAncHJlJyB8fCBjYXBbMV0gPT09ICdzY3JpcHQnIHx8IGNhcFsxXSA9PT0gJ3N0eWxlJyxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlZlxuICAgIGlmICgoIWJxICYmIHRvcCkgJiYgKGNhcCA9IHRoaXMucnVsZXMuZGVmLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5saW5rc1tjYXBbMV0udG9Mb3dlckNhc2UoKV0gPSB7XG4gICAgICAgIGhyZWY6IGNhcFsyXSxcbiAgICAgICAgdGl0bGU6IGNhcFszXVxuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIChnZm0pXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy50YWJsZS5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IGNhcFsxXS5yZXBsYWNlKC9eICp8ICpcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGFsaWduOiBjYXBbMl0ucmVwbGFjZSgvXiAqfFxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgY2VsbHM6IGNhcFszXS5yZXBsYWNlKC8oPzogKlxcfCAqKT9cXG4kLywgJycpLnNwbGl0KCdcXG4nKVxuICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uYWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKC9eICotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnY2VudGVyJztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtLmNlbGxzW2ldID0gaXRlbS5jZWxsc1tpXVxuICAgICAgICAgIC5yZXBsYWNlKC9eICpcXHwgKnwgKlxcfCAqJC9nLCAnJylcbiAgICAgICAgICAuc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdG9wLWxldmVsIHBhcmFncmFwaFxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMucGFyYWdyYXBoLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIHRleHQ6IGNhcFsxXS5jaGFyQXQoY2FwWzFdLmxlbmd0aCAtIDEpID09PSAnXFxuJ1xuICAgICAgICAgID8gY2FwWzFdLnNsaWNlKDAsIC0xKVxuICAgICAgICAgIDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgLy8gVG9wLWxldmVsIHNob3VsZCBuZXZlciByZWFjaCBoZXJlLlxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG4vKipcbiAqIElubGluZS1MZXZlbCBHcmFtbWFyXG4gKi9cblxudmFyIGlubGluZSA9IHtcbiAgZXNjYXBlOiAvXlxcXFwoW1xcXFxgKnt9XFxbXFxdKCkjK1xcLS4hXz5dKS8sXG4gIGF1dG9saW5rOiAvXjwoW14gPl0rKEB8OlxcLylbXiA+XSspPi8sXG4gIHVybDogbm9vcCxcbiAgdGFnOiAvXjwhLS1bXFxzXFxTXSo/LS0+fF48XFwvP1xcdysoPzpcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPz4vLFxuICBsaW5rOiAvXiE/XFxbKGluc2lkZSlcXF1cXChocmVmXFwpLyxcbiAgcmVmbGluazogL14hP1xcWyhpbnNpZGUpXFxdXFxzKlxcWyhbXlxcXV0qKVxcXS8sXG4gIG5vbGluazogL14hP1xcWygoPzpcXFtbXlxcXV0qXFxdfFteXFxbXFxdXSkqKVxcXS8sXG4gIHN0cm9uZzogL15fXyhbXFxzXFxTXSs/KV9fKD8hXyl8XlxcKlxcKihbXFxzXFxTXSs/KVxcKlxcKig/IVxcKikvLFxuICBlbTogL15cXGJfKCg/Ol9ffFtcXHNcXFNdKSs/KV9cXGJ8XlxcKigoPzpcXCpcXCp8W1xcc1xcU10pKz8pXFwqKD8hXFwqKS8sXG4gIGNvZGU6IC9eKGArKVxccyooW1xcc1xcU10qP1teYF0pXFxzKlxcMSg/IWApLyxcbiAgYnI6IC9eIHsyLH1cXG4oPyFcXHMqJCkvLFxuICBkZWw6IG5vb3AsXG4gIHRleHQ6IC9eW1xcc1xcU10rPyg/PVtcXFxcPCFcXFtfKmBdfCB7Mix9XFxufCQpL1xufTtcblxuaW5saW5lLl9pbnNpZGUgPSAvKD86XFxbW15cXF1dKlxcXXxbXlxcW1xcXV18XFxdKD89W15cXFtdKlxcXSkpKi87XG5pbmxpbmUuX2hyZWYgPSAvXFxzKjw/KFtcXHNcXFNdKj8pPj8oPzpcXHMrWydcIl0oW1xcc1xcU10qPylbJ1wiXSk/XFxzKi87XG5cbmlubGluZS5saW5rID0gcmVwbGFjZShpbmxpbmUubGluaylcbiAgKCdpbnNpZGUnLCBpbmxpbmUuX2luc2lkZSlcbiAgKCdocmVmJywgaW5saW5lLl9ocmVmKVxuICAoKTtcblxuaW5saW5lLnJlZmxpbmsgPSByZXBsYWNlKGlubGluZS5yZWZsaW5rKVxuICAoJ2luc2lkZScsIGlubGluZS5faW5zaWRlKVxuICAoKTtcblxuLyoqXG4gKiBOb3JtYWwgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUubm9ybWFsID0gbWVyZ2Uoe30sIGlubGluZSk7XG5cbi8qKlxuICogUGVkYW50aWMgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUucGVkYW50aWMgPSBtZXJnZSh7fSwgaW5saW5lLm5vcm1hbCwge1xuICBzdHJvbmc6IC9eX18oPz1cXFMpKFtcXHNcXFNdKj9cXFMpX18oPyFfKXxeXFwqXFwqKD89XFxTKShbXFxzXFxTXSo/XFxTKVxcKlxcKig/IVxcKikvLFxuICBlbTogL15fKD89XFxTKShbXFxzXFxTXSo/XFxTKV8oPyFfKXxeXFwqKD89XFxTKShbXFxzXFxTXSo/XFxTKVxcKig/IVxcKikvXG59KTtcblxuLyoqXG4gKiBHRk0gSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuZ2ZtID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgZXNjYXBlOiByZXBsYWNlKGlubGluZS5lc2NhcGUpKCddKScsICd+fF0pJykoKSxcbiAgdXJsOiAvXihodHRwcz86XFwvXFwvW15cXHM8XStbXjwuLDo7XCInKVxcXVxcc10pLyxcbiAgZGVsOiAvXn5+KD89XFxTKShbXFxzXFxTXSo/XFxTKX5+LyxcbiAgdGV4dDogcmVwbGFjZShpbmxpbmUudGV4dClcbiAgICAoJ118JywgJ35dfCcpXG4gICAgKCd8JywgJ3xodHRwcz86Ly98JylcbiAgICAoKVxufSk7XG5cbi8qKlxuICogR0ZNICsgTGluZSBCcmVha3MgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuYnJlYWtzID0gbWVyZ2Uoe30sIGlubGluZS5nZm0sIHtcbiAgYnI6IHJlcGxhY2UoaW5saW5lLmJyKSgnezIsfScsICcqJykoKSxcbiAgdGV4dDogcmVwbGFjZShpbmxpbmUuZ2ZtLnRleHQpKCd7Mix9JywgJyonKSgpXG59KTtcblxuLyoqXG4gKiBJbmxpbmUgTGV4ZXIgJiBDb21waWxlclxuICovXG5cbmZ1bmN0aW9uIElubGluZUxleGVyKGxpbmtzLCBvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLmxpbmtzID0gbGlua3M7XG4gIHRoaXMucnVsZXMgPSBpbmxpbmUubm9ybWFsO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gIGlmICghdGhpcy5saW5rcykge1xuICAgIHRocm93IG5ld1xuICAgICAgRXJyb3IoJ1Rva2VucyBhcnJheSByZXF1aXJlcyBhIGBsaW5rc2AgcHJvcGVydHkuJyk7XG4gIH1cblxuICBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYnJlYWtzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gaW5saW5lLmJyZWFrcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5nZm07XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgIHRoaXMucnVsZXMgPSBpbmxpbmUucGVkYW50aWM7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2UgSW5saW5lIFJ1bGVzXG4gKi9cblxuSW5saW5lTGV4ZXIucnVsZXMgPSBpbmxpbmU7XG5cbi8qKlxuICogU3RhdGljIExleGluZy9Db21waWxpbmcgTWV0aG9kXG4gKi9cblxuSW5saW5lTGV4ZXIub3V0cHV0ID0gZnVuY3Rpb24oc3JjLCBsaW5rcywgb3B0aW9ucykge1xuICB2YXIgaW5saW5lID0gbmV3IElubGluZUxleGVyKGxpbmtzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGlubGluZS5vdXRwdXQoc3JjKTtcbn07XG5cbi8qKlxuICogTGV4aW5nL0NvbXBpbGluZ1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5vdXRwdXQgPSBmdW5jdGlvbihzcmMpIHtcbiAgdmFyIG91dCA9ICcnXG4gICAgLCBsaW5rXG4gICAgLCB0ZXh0XG4gICAgLCBocmVmXG4gICAgLCBjYXA7XG5cbiAgd2hpbGUgKHNyYykge1xuICAgIC8vIGVzY2FwZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVzY2FwZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gY2FwWzFdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYXV0b2xpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5hdXRvbGluay5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzJdID09PSAnQCcpIHtcbiAgICAgICAgdGV4dCA9IGNhcFsxXS5jaGFyQXQoNikgPT09ICc6J1xuICAgICAgICAgID8gdGhpcy5tYW5nbGUoY2FwWzFdLnN1YnN0cmluZyg3KSlcbiAgICAgICAgICA6IHRoaXMubWFuZ2xlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0aGlzLm1hbmdsZSgnbWFpbHRvOicpICsgdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUoY2FwWzFdKTtcbiAgICAgICAgaHJlZiA9IHRleHQ7XG4gICAgICB9XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIG51bGwsIHRleHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdXJsIChnZm0pXG4gICAgaWYgKCF0aGlzLmluTGluayAmJiAoY2FwID0gdGhpcy5ydWxlcy51cmwuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRleHQgPSBlc2NhcGUoY2FwWzFdKTtcbiAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRhZy5leGVjKHNyYykpIHtcbiAgICAgIGlmICghdGhpcy5pbkxpbmsgJiYgL148YSAvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluTGluayAmJiAvXjxcXC9hPi9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLm9wdGlvbnMuc2FuaXRpemVcbiAgICAgICAgPyBlc2NhcGUoY2FwWzBdKVxuICAgICAgICA6IGNhcFswXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCB7XG4gICAgICAgIGhyZWY6IGNhcFsyXSxcbiAgICAgICAgdGl0bGU6IGNhcFszXVxuICAgICAgfSk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gcmVmbGluaywgbm9saW5rXG4gICAgaWYgKChjYXAgPSB0aGlzLnJ1bGVzLnJlZmxpbmsuZXhlYyhzcmMpKVxuICAgICAgICB8fCAoY2FwID0gdGhpcy5ydWxlcy5ub2xpbmsuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGxpbmsgPSAoY2FwWzJdIHx8IGNhcFsxXSkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgbGluayA9IHRoaXMubGlua3NbbGluay50b0xvd2VyQ2FzZSgpXTtcbiAgICAgIGlmICghbGluayB8fCAhbGluay5ocmVmKSB7XG4gICAgICAgIG91dCArPSBjYXBbMF0uY2hhckF0KDApO1xuICAgICAgICBzcmMgPSBjYXBbMF0uc3Vic3RyaW5nKDEpICsgc3JjO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCBsaW5rKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBzdHJvbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5zdHJvbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuc3Ryb25nKHRoaXMub3V0cHV0KGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGVtXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZW0uZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZW0odGhpcy5vdXRwdXQoY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuY29kZXNwYW4oZXNjYXBlKGNhcFsyXSwgdHJ1ZSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYnJcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ici5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5icigpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVsIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZGVsLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmRlbCh0aGlzLm91dHB1dChjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSBlc2NhcGUodGhpcy5zbWFydHlwYW50cyhjYXBbMF0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzcmMpIHtcbiAgICAgIHRocm93IG5ld1xuICAgICAgICBFcnJvcignSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgTGlua1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5vdXRwdXRMaW5rID0gZnVuY3Rpb24oY2FwLCBsaW5rKSB7XG4gIHZhciBocmVmID0gZXNjYXBlKGxpbmsuaHJlZilcbiAgICAsIHRpdGxlID0gbGluay50aXRsZSA/IGVzY2FwZShsaW5rLnRpdGxlKSA6IG51bGw7XG5cbiAgcmV0dXJuIGNhcFswXS5jaGFyQXQoMCkgIT09ICchJ1xuICAgID8gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIHRpdGxlLCB0aGlzLm91dHB1dChjYXBbMV0pKVxuICAgIDogdGhpcy5yZW5kZXJlci5pbWFnZShocmVmLCB0aXRsZSwgZXNjYXBlKGNhcFsxXSkpO1xufTtcblxuLyoqXG4gKiBTbWFydHlwYW50cyBUcmFuc2Zvcm1hdGlvbnNcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUuc21hcnR5cGFudHMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLnNtYXJ0eXBhbnRzKSByZXR1cm4gdGV4dDtcbiAgcmV0dXJuIHRleHRcbiAgICAvLyBlbS1kYXNoZXNcbiAgICAucmVwbGFjZSgvLS0vZywgJ1xcdTIwMTQnKVxuICAgIC8vIG9wZW5pbmcgc2luZ2xlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcIlxcc10pJy9nLCAnJDFcXHUyMDE4JylcbiAgICAvLyBjbG9zaW5nIHNpbmdsZXMgJiBhcG9zdHJvcGhlc1xuICAgIC5yZXBsYWNlKC8nL2csICdcXHUyMDE5JylcbiAgICAvLyBvcGVuaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XFx1MjAxOFxcc10pXCIvZywgJyQxXFx1MjAxYycpXG4gICAgLy8gY2xvc2luZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXHUyMDFkJylcbiAgICAvLyBlbGxpcHNlc1xuICAgIC5yZXBsYWNlKC9cXC57M30vZywgJ1xcdTIwMjYnKTtcbn07XG5cbi8qKlxuICogTWFuZ2xlIExpbmtzXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm1hbmdsZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgdmFyIG91dCA9ICcnXG4gICAgLCBsID0gdGV4dC5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBjaDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIGNoID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICBjaCA9ICd4JyArIGNoLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgb3V0ICs9ICcmIycgKyBjaCArICc7JztcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJlbmRlcmVyXG4gKi9cblxuZnVuY3Rpb24gUmVuZGVyZXIob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xufVxuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZSA9IGZ1bmN0aW9uKGNvZGUsIGxhbmcsIGVzY2FwZWQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICB2YXIgb3V0ID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChjb2RlLCBsYW5nKTtcbiAgICBpZiAob3V0ICE9IG51bGwgJiYgb3V0ICE9PSBjb2RlKSB7XG4gICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgIGNvZGUgPSBvdXQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFsYW5nKSB7XG4gICAgcmV0dXJuICc8cHJlPjxjb2RlPidcbiAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgKyAnXFxuPC9jb2RlPjwvcHJlPic7XG4gIH1cblxuICByZXR1cm4gJzxwcmU+PGNvZGUgY2xhc3M9XCInXG4gICAgKyB0aGlzLm9wdGlvbnMubGFuZ1ByZWZpeFxuICAgICsgZXNjYXBlKGxhbmcsIHRydWUpXG4gICAgKyAnXCI+J1xuICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICsgJ1xcbjwvY29kZT48L3ByZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJsb2NrcXVvdGUgPSBmdW5jdGlvbihxdW90ZSkge1xuICByZXR1cm4gJzxibG9ja3F1b3RlPlxcbicgKyBxdW90ZSArICc8L2Jsb2NrcXVvdGU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gaHRtbDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5oZWFkaW5nID0gZnVuY3Rpb24odGV4dCwgbGV2ZWwsIHJhdykge1xuICByZXR1cm4gJzxoJ1xuICAgICsgbGV2ZWxcbiAgICArICcgaWQ9XCInXG4gICAgKyB0aGlzLm9wdGlvbnMuaGVhZGVyUHJlZml4XG4gICAgKyByYXcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICctJylcbiAgICArICdcIj4nXG4gICAgKyB0ZXh0XG4gICAgKyAnPC9oJ1xuICAgICsgbGV2ZWxcbiAgICArICc+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ociA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sID8gJzxoci8+XFxuJyA6ICc8aHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24oYm9keSwgb3JkZXJlZCkge1xuICB2YXIgdHlwZSA9IG9yZGVyZWQgPyAnb2wnIDogJ3VsJztcbiAgcmV0dXJuICc8JyArIHR5cGUgKyAnPlxcbicgKyBib2R5ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdGl0ZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGxpPicgKyB0ZXh0ICsgJzwvbGk+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5wYXJhZ3JhcGggPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHA+JyArIHRleHQgKyAnPC9wPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbihoZWFkZXIsIGJvZHkpIHtcbiAgcmV0dXJuICc8dGFibGU+XFxuJ1xuICAgICsgJzx0aGVhZD5cXG4nXG4gICAgKyBoZWFkZXJcbiAgICArICc8L3RoZWFkPlxcbidcbiAgICArICc8dGJvZHk+XFxuJ1xuICAgICsgYm9keVxuICAgICsgJzwvdGJvZHk+XFxuJ1xuICAgICsgJzwvdGFibGU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZXJvdyA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgcmV0dXJuICc8dHI+XFxuJyArIGNvbnRlbnQgKyAnPC90cj5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlY2VsbCA9IGZ1bmN0aW9uKGNvbnRlbnQsIGZsYWdzKSB7XG4gIHZhciB0eXBlID0gZmxhZ3MuaGVhZGVyID8gJ3RoJyA6ICd0ZCc7XG4gIHZhciB0YWcgPSBmbGFncy5hbGlnblxuICAgID8gJzwnICsgdHlwZSArICcgc3R5bGU9XCJ0ZXh0LWFsaWduOicgKyBmbGFncy5hbGlnbiArICdcIj4nXG4gICAgOiAnPCcgKyB0eXBlICsgJz4nO1xuICByZXR1cm4gdGFnICsgY29udGVudCArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuLy8gc3BhbiBsZXZlbCByZW5kZXJlclxuUmVuZGVyZXIucHJvdG90eXBlLnN0cm9uZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8c3Ryb25nPicgKyB0ZXh0ICsgJzwvc3Ryb25nPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGVtPicgKyB0ZXh0ICsgJzwvZW0+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jb2Rlc3BhbiA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8Y29kZT4nICsgdGV4dCArICc8L2NvZGU+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5iciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sID8gJzxici8+JyA6ICc8YnI+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGRlbD4nICsgdGV4dCArICc8L2RlbD4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbihocmVmLCB0aXRsZSwgdGV4dCkge1xuICBpZiAodGhpcy5vcHRpb25zLnNhbml0aXplKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBwcm90ID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuZXNjYXBlKGhyZWYpKVxuICAgICAgICAucmVwbGFjZSgvW15cXHc6XS9nLCAnJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAocHJvdC5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHZhciBvdXQgPSAnPGEgaHJlZj1cIicgKyBocmVmICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBQYXJzaW5nICYgQ29tcGlsaW5nXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbiA9IG51bGw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucywgcmVuZGVyZXIpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucywgcmVuZGVyZXIpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlKHNyYyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExvb3BcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIHRoaXMuaW5saW5lID0gbmV3IElubGluZUxleGVyKHNyYy5saW5rcywgdGhpcy5vcHRpb25zLCB0aGlzLnJlbmRlcmVyKTtcbiAgdGhpcy50b2tlbnMgPSBzcmMucmV2ZXJzZSgpO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgb3V0ICs9IHRoaXMudG9rKCk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy50b2tlbnMucG9wKCk7XG59O1xuXG4vKipcbiAqIFByZXZpZXcgTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbi8qKlxuICogUGFyc2UgVGV4dCBUb2tlbnNcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keSA9IHRoaXMudG9rZW4udGV4dDtcblxuICB3aGlsZSAodGhpcy5wZWVrKCkudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgYm9keSArPSAnXFxuJyArIHRoaXMubmV4dCgpLnRleHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbmxpbmUub3V0cHV0KGJvZHkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBDdXJyZW50IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS50b2sgPSBmdW5jdGlvbigpIHtcbiAgc3dpdGNoICh0aGlzLnRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2FzZSAnaHInOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgIH1cbiAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaGVhZGluZyhcbiAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCksXG4gICAgICAgIHRoaXMudG9rZW4uZGVwdGgsXG4gICAgICAgIHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ2NvZGUnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jb2RlKHRoaXMudG9rZW4udGV4dCxcbiAgICAgICAgdGhpcy50b2tlbi5sYW5nLFxuICAgICAgICB0aGlzLnRva2VuLmVzY2FwZWQpO1xuICAgIH1cbiAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgIHZhciBoZWFkZXIgPSAnJ1xuICAgICAgICAsIGJvZHkgPSAnJ1xuICAgICAgICAsIGlcbiAgICAgICAgLCByb3dcbiAgICAgICAgLCBjZWxsXG4gICAgICAgICwgZmxhZ3NcbiAgICAgICAgLCBqO1xuXG4gICAgICAvLyBoZWFkZXJcbiAgICAgIGNlbGwgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbGFncyA9IHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9O1xuICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLmhlYWRlcltpXSksXG4gICAgICAgICAgeyBoZWFkZXI6IHRydWUsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2ldIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSB0aGlzLnRva2VuLmNlbGxzW2ldO1xuXG4gICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQocm93W2pdKSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdibG9ja3F1b3RlX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdibG9ja3F1b3RlX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJ1xuICAgICAgICAsIG9yZGVyZWQgPSB0aGlzLnRva2VuLm9yZGVyZWQ7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdChib2R5LCBvcmRlcmVkKTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2l0ZW1fZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbG9vc2VfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgIHZhciBodG1sID0gIXRoaXMudG9rZW4ucHJlICYmICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgPyB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KVxuICAgICAgICA6IHRoaXMudG9rZW4udGV4dDtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoIWVuY29kZSA/IC8mKD8hIz9cXHcrOykvZyA6IC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJihbI1xcd10rKTsvZywgZnVuY3Rpb24oXywgbikge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShyZWdleCwgb3B0KSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHQgPSBvcHQgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbiBzZWxmKG5hbWUsIHZhbCkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdCk7XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgdmFsID0gdmFsLnJlcGxhY2UoLyhefFteXFxbXSlcXF4vZywgJyQxJyk7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxubm9vcC5leGVjID0gbm9vcDtcblxuZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gIHZhciBpID0gMVxuICAgICwgdGFyZ2V0XG4gICAgLCBrZXk7XG5cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBNYXJrZWRcbiAqL1xuXG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayB8fCB0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHQ7XG4gICAgICBvcHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCB8fCB7fSk7XG5cbiAgICB2YXIgaGlnaGxpZ2h0ID0gb3B0LmhpZ2hsaWdodFxuICAgICAgLCB0b2tlbnNcbiAgICAgICwgcGVuZGluZ1xuICAgICAgLCBpID0gMDtcblxuICAgIHRyeSB7XG4gICAgICB0b2tlbnMgPSBMZXhlci5sZXgoc3JjLCBvcHQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cblxuICAgIHBlbmRpbmcgPSB0b2tlbnMubGVuZ3RoO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXQsIGVycjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgb3V0ID0gUGFyc2VyLnBhcnNlKHRva2Vucywgb3B0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyID0gZTtcbiAgICAgIH1cblxuICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcblxuICAgICAgcmV0dXJuIGVyclxuICAgICAgICA/IGNhbGxiYWNrKGVycilcbiAgICAgICAgOiBjYWxsYmFjayhudWxsLCBvdXQpO1xuICAgIH07XG5cbiAgICBpZiAoIWhpZ2hsaWdodCB8fCBoaWdobGlnaHQubGVuZ3RoIDwgMykge1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgb3B0LmhpZ2hsaWdodDtcblxuICAgIGlmICghcGVuZGluZykgcmV0dXJuIGRvbmUoKTtcblxuICAgIGZvciAoOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuICAgICAgICAgIHJldHVybiAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWdobGlnaHQodG9rZW4udGV4dCwgdG9rZW4ubGFuZywgZnVuY3Rpb24oZXJyLCBjb2RlKSB7XG4gICAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCB8fCBjb2RlID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSh0b2tlbnNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHQpIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShMZXhlci5sZXgoc3JjLCBvcHQpLCBvcHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2NoamovbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJlZDo8L3A+PHByZT4nXG4gICAgICAgICsgZXNjYXBlKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICArICc8L3ByZT4nO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1lcmdlKG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5kZWZhdWx0cyA9IHtcbiAgZ2ZtOiB0cnVlLFxuICB0YWJsZXM6IHRydWUsXG4gIGJyZWFrczogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgc2FuaXRpemU6IGZhbHNlLFxuICBzbWFydExpc3RzOiBmYWxzZSxcbiAgc2lsZW50OiBmYWxzZSxcbiAgaGlnaGxpZ2h0OiBudWxsLFxuICBsYW5nUHJlZml4OiAnbGFuZy0nLFxuICBzbWFydHlwYW50czogZmFsc2UsXG4gIGhlYWRlclByZWZpeDogJycsXG4gIHJlbmRlcmVyOiBuZXcgUmVuZGVyZXIsXG4gIHhodG1sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG5tYXJrZWQuUGFyc2VyID0gUGFyc2VyO1xubWFya2VkLnBhcnNlciA9IFBhcnNlci5wYXJzZTtcblxubWFya2VkLlJlbmRlcmVyID0gUmVuZGVyZXI7XG5cbm1hcmtlZC5MZXhlciA9IExleGVyO1xubWFya2VkLmxleGVyID0gTGV4ZXIubGV4O1xuXG5tYXJrZWQuSW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlcjtcbm1hcmtlZC5pbmxpbmVMZXhlciA9IElubGluZUxleGVyLm91dHB1dDtcblxubWFya2VkLnBhcnNlID0gbWFya2VkO1xuXG5pZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbWFya2VkO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbWFya2VkOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMubWFya2VkID0gbWFya2VkO1xufVxuXG59KS5jYWxsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xufSgpKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMiBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuMS4yXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG5cbiAgLyoqXG4gICAqIG1hcHBpbmcgb2Ygc3BlY2lhbCBrZXljb2RlcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIGtleXNcbiAgICpcbiAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICogc28gaXQgaGFzIHRvIGJlIGhlcmUgdG8gbWFwIHRvIHRoZSBjb3JyZWN0IGtleWNvZGVzIGZvclxuICAgKiBrZXl1cC9rZXlkb3duIGV2ZW50c1xuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIF9NQVAgPSB7XG4gICAgICAgICAgODogJ2JhY2tzcGFjZScsXG4gICAgICAgICAgOTogJ3RhYicsXG4gICAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgICAgMTY6ICdzaGlmdCcsXG4gICAgICAgICAgMTc6ICdjdHJsJyxcbiAgICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgICAgMjA6ICdjYXBzbG9jaycsXG4gICAgICAgICAgMjc6ICdlc2MnLFxuICAgICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAgIDMzOiAncGFnZXVwJyxcbiAgICAgICAgICAzNDogJ3BhZ2Vkb3duJyxcbiAgICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgICAgMzY6ICdob21lJyxcbiAgICAgICAgICAzNzogJ2xlZnQnLFxuICAgICAgICAgIDM4OiAndXAnLFxuICAgICAgICAgIDM5OiAncmlnaHQnLFxuICAgICAgICAgIDQwOiAnZG93bicsXG4gICAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICAgIDQ2OiAnZGVsJyxcbiAgICAgICAgICA5MTogJ21ldGEnLFxuICAgICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgICAgMjI0OiAnbWV0YSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogbWFwcGluZyBmb3Igc3BlY2lhbCBjaGFyYWN0ZXJzIHNvIHRoZXkgY2FuIHN1cHBvcnRcbiAgICAgICAqXG4gICAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgICAqIGtleXVwIG9yIGtleWRvd24gZXZlbnQgdG8gb25lIG9mIHRoZXNlIGtleXNcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgICAgMTA2OiAnKicsXG4gICAgICAgICAgMTA3OiAnKycsXG4gICAgICAgICAgMTA5OiAnLScsXG4gICAgICAgICAgMTEwOiAnLicsXG4gICAgICAgICAgMTExIDogJy8nLFxuICAgICAgICAgIDE4NjogJzsnLFxuICAgICAgICAgIDE4NzogJz0nLFxuICAgICAgICAgIDE4ODogJywnLFxuICAgICAgICAgIDE4OTogJy0nLFxuICAgICAgICAgIDE5MDogJy4nLFxuICAgICAgICAgIDE5MTogJy8nLFxuICAgICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAgIDIxOTogJ1snLFxuICAgICAgICAgIDIyMDogJ1xcXFwnLFxuICAgICAgICAgIDIyMTogJ10nLFxuICAgICAgICAgIDIyMjogJ1xcJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogdGhpcyBpcyBhIG1hcHBpbmcgb2Yga2V5cyB0aGF0IHJlcXVpcmUgc2hpZnQgb24gYSBVUyBrZXlwYWRcbiAgICAgICAqIGJhY2sgdG8gdGhlIG5vbiBzaGlmdCBlcXVpdmVsZW50c1xuICAgICAgICpcbiAgICAgICAqIHRoaXMgaXMgc28geW91IGNhbiB1c2Uga2V5dXAgZXZlbnRzIHdpdGggdGhlc2Uga2V5c1xuICAgICAgICpcbiAgICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9TSElGVF9NQVAgPSB7XG4gICAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICAgJyEnOiAnMScsXG4gICAgICAgICAgJ0AnOiAnMicsXG4gICAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICAgJyQnOiAnNCcsXG4gICAgICAgICAgJyUnOiAnNScsXG4gICAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICAgJyYnOiAnNycsXG4gICAgICAgICAgJyonOiAnOCcsXG4gICAgICAgICAgJygnOiAnOScsXG4gICAgICAgICAgJyknOiAnMCcsXG4gICAgICAgICAgJ18nOiAnLScsXG4gICAgICAgICAgJysnOiAnPScsXG4gICAgICAgICAgJzonOiAnOycsXG4gICAgICAgICAgJ1xcXCInOiAnXFwnJyxcbiAgICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgICAnPic6ICcuJyxcbiAgICAgICAgICAnPyc6ICcvJyxcbiAgICAgICAgICAnfCc6ICdcXFxcJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICAgKiB0byBtb2RpZmllciBrZXlzIHdoZW4geW91IHNwZWNpZnkgeW91ciBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAgICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgICAnY29tbWFuZCc6ICdtZXRhJyxcbiAgICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgICAnZXNjYXBlJzogJ2VzYydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZsaXBwZWQgdmVyc2lvbiBvZiBfTUFQIGZyb20gYWJvdmVcbiAgICAgICAqIG5lZWRlZCB0byBjaGVjayBpZiB3ZSBzaG91bGQgdXNlIGtleXByZXNzIG9yIG5vdCB3aGVuIG5vIGFjdGlvblxuICAgICAgICogaXMgc3BlY2lmaWVkXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gICAgICAgKi9cbiAgICAgIF9SRVZFUlNFX01BUCxcblxuICAgICAgLyoqXG4gICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBfY2FsbGJhY2tzID0ge30sXG5cbiAgICAgIC8qKlxuICAgICAgICogZGlyZWN0IG1hcCBvZiBzdHJpbmcgY29tYmluYXRpb25zIHRvIGNhbGxiYWNrcyB1c2VkIGZvciB0cmlnZ2VyKClcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBfZGlyZWN0X21hcCA9IHt9LFxuXG4gICAgICAvKipcbiAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICogc2VxdWVuY2VzIGNhbiBzdGFydCBvdXQgd2l0aCB0aGUgc2FtZSBzZXF1ZW5jZVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIF9zZXF1ZW5jZV9sZXZlbHMgPSB7fSxcblxuICAgICAgLyoqXG4gICAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgc2V0VGltZW91dCBjYWxsXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICovXG4gICAgICBfcmVzZXRfdGltZXIsXG5cbiAgICAgIC8qKlxuICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXVwXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICovXG4gICAgICBfaWdub3JlX25leHRfa2V5dXAgPSBmYWxzZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBhcmUgd2UgY3VycmVudGx5IGluc2lkZSBvZiBhIHNlcXVlbmNlP1xuICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICovXG4gICAgICBfaW5zaWRlX3NlcXVlbmNlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGxvb3AgdGhyb3VnaCB0aGUgZiBrZXlzLCBmMSB0byBmMTkgYW5kIGFkZCB0aGVtIHRvIHRoZSBtYXBcbiAgICogcHJvZ3JhbWF0aWNhbGx5XG4gICAqL1xuICBmb3IgKHZhciBpID0gMTsgaSA8IDIwOyArK2kpIHtcbiAgICAgIF9NQVBbMTExICsgaV0gPSAnZicgKyBpO1xuICB9XG5cbiAgLyoqXG4gICAqIGxvb3AgdGhyb3VnaCB0byBtYXAgbnVtYmVycyBvbiB0aGUgbnVtZXJpYyBrZXlwYWRcbiAgICovXG4gIGZvciAoaSA9IDA7IGkgPD0gOTsgKytpKSB7XG4gICAgICBfTUFQW2kgKyA5Nl0gPSBpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyb3NzIGJyb3dzZXIgYWRkIGV2ZW50IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0YWtlcyB0aGUgZXZlbnQgYW5kIHJldHVybnMgdGhlIGtleSBjaGFyYWN0ZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgLy8gZm9yIGtleXByZXNzIGV2ZW50cyB3ZSBzaG91bGQgcmV0dXJuIHRoZSBjaGFyYWN0ZXIgYXMgaXNcbiAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3Igbm9uIGtleXByZXNzIGV2ZW50cyB0aGUgc3BlY2lhbCBtYXBzIGFyZSBuZWVkZWRcbiAgICAgIGlmIChfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICB9XG5cbiAgICAgIGlmIChfS0VZQ09ERV9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdCBpcyBub3QgaW4gdGhlIHNwZWNpYWwgbWFwXG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNob3VsZCB3ZSBzdG9wIHRoaXMgZXZlbnQgYmVmb3JlIGZpcmluZyBvZmYgY2FsbGJhY2tzXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIF9zdG9wKGUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LFxuICAgICAgICAgIHRhZ19uYW1lID0gZWxlbWVudC50YWdOYW1lO1xuXG4gICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgIGlmICgoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyBtb3VzZXRyYXAgJykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcCBmb3IgaW5wdXQsIHNlbGVjdCwgYW5kIHRleHRhcmVhXG4gICAgICByZXR1cm4gdGFnX25hbWUgPT0gJ0lOUFVUJyB8fCB0YWdfbmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdfbmFtZSA9PSAnVEVYVEFSRUEnIHx8IChlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSAmJiBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PSAndHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMxXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyczEuc29ydCgpLmpvaW4oJywnKSA9PT0gbW9kaWZpZXJzMi5zb3J0KCkuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRvX25vdF9yZXNldFxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZXMoZG9fbm90X3Jlc2V0KSB7XG4gICAgICBkb19ub3RfcmVzZXQgPSBkb19ub3RfcmVzZXQgfHwge307XG5cbiAgICAgIHZhciBhY3RpdmVfc2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VfbGV2ZWxzKSB7XG4gICAgICAgICAgaWYgKGRvX25vdF9yZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZV9zZXF1ZW5jZXMgPSB0cnVlO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3NlcXVlbmNlX2xldmVsc1trZXldID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVfc2VxdWVuY2VzKSB7XG4gICAgICAgICAgX2luc2lkZV9zZXF1ZW5jZSA9IGZhbHNlO1xuICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgKiBhbmQgYWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICogQHBhcmFtIHtib29sZWFuPX0gcmVtb3ZlIC0gc2hvdWxkIHdlIHJlbW92ZSBhbnkgbWF0Y2hlc1xuICAgKiBAcGFyYW0ge3N0cmluZz19IGNvbWJpbmF0aW9uXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBhY3Rpb24sIHJlbW92ZSwgY29tYmluYXRpb24pIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgIG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyByZWxhdGVkIHRvIHRoaXMga2V5Y29kZVxuICAgICAgaWYgKCFfY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgIH1cblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgZm9yIChpID0gMDsgaSA8IF9jYWxsYmFja3NbY2hhcmFjdGVyXS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2ldO1xuXG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHNlcXVlbmNlIGJ1dCBpdCBpcyBub3QgYXQgdGhlIHJpZ2h0IGxldmVsXG4gICAgICAgICAgLy8gdGhlbiBtb3ZlIG9udG8gdGhlIG5leHQgbWF0Y2hcbiAgICAgICAgICBpZiAoY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZV9sZXZlbHNbY2FsbGJhY2suc2VxXSAhPSBjYWxsYmFjay5sZXZlbCkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGUgYWN0aW9uIHdlIGFyZSBsb29raW5nIGZvciBkb2Vzbid0IG1hdGNoIHRoZSBhY3Rpb24gd2UgZ290XG4gICAgICAgICAgLy8gdGhlbiB3ZSBzaG91bGQga2VlcCBnb2luZ1xuICAgICAgICAgIGlmIChhY3Rpb24gIT0gY2FsbGJhY2suYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBrZXlwcmVzcyBldmVudCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBvbmx5XG4gICAgICAgICAgLy8gbG9vayBhdCB0aGUgY2hhcmFjdGVyLCBvdGhlcndpc2UgY2hlY2sgdGhlIG1vZGlmaWVycyBhc1xuICAgICAgICAgIC8vIHdlbGxcbiAgICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgfHwgX21vZGlmaWVyc01hdGNoKG1vZGlmaWVycywgY2FsbGJhY2subW9kaWZpZXJzKSkge1xuXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBpcyB1c2VkIHNvIGlmIHlvdSBjaGFuZ2UgeW91ciBtaW5kIGFuZCBjYWxsIGJpbmQgYVxuICAgICAgICAgICAgICAvLyBzZWNvbmQgdGltZSB3aXRoIGEgbmV3IGZ1bmN0aW9uIHRoZSBmaXJzdCBvbmUgaXMgb3ZlcndyaXR0ZW5cbiAgICAgICAgICAgICAgaWYgKHJlbW92ZSAmJiBjYWxsYmFjay5jb21ibyA9PSBjb21iaW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0YWtlcyBhIGtleSBldmVudCBhbmQgZmlndXJlcyBvdXQgd2hhdCB0aGUgbW9kaWZpZXJzIGFyZVxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIF9ldmVudE1vZGlmaWVycyhlKSB7XG4gICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdhbHQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdjdHJsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBtb2RpZmllcnMucHVzaCgnbWV0YScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjdHVhbGx5IGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKlxuICAgKiBpZiB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgdGhpcyB3aWxsIHVzZSB0aGUganF1ZXJ5XG4gICAqIGNvbnZlbnRpb24gLSBwcmV2ZW50IGRlZmF1bHQgYW5kIHN0b3AgcHJvcG9nYXRpb24gb24gdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKGUpID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsZXMgYSBjaGFyYWN0ZXIga2V5IGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfaGFuZGxlQ2hhcmFjdGVyKGNoYXJhY3RlciwgZSkge1xuXG4gICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgaWYgKF9zdG9wKGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUudHlwZSksXG4gICAgICAgICAgaSxcbiAgICAgICAgICBkb19ub3RfcmVzZXQgPSB7fSxcbiAgICAgICAgICBwcm9jZXNzZWRfc2VxdWVuY2VfY2FsbGJhY2sgPSBmYWxzZTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIG1hdGNoaW5nIGNhbGxiYWNrcyBmb3IgdGhpcyBrZXkgZXZlbnRcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgIC8vIGZpcmUgZm9yIGFsbCBzZXF1ZW5jZSBjYWxsYmFja3NcbiAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgICAgLy8gYm91bmQgc3VjaCBhcyBcImcgaVwiIGFuZCBcImcgdFwiIHRoZXkgYm90aCBuZWVkIHRvIGZpcmUgdGhlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgZm9yIG1hdGNoaW5nIGcgY2F1c2Ugb3RoZXJ3aXNlIHlvdSBjYW4gb25seSBldmVyXG4gICAgICAgICAgLy8gbWF0Y2ggdGhlIGZpcnN0IG9uZVxuICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG4gICAgICAgICAgICAgIHByb2Nlc3NlZF9zZXF1ZW5jZV9jYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8ga2VlcCBhIGxpc3Qgb2Ygd2hpY2ggc2VxdWVuY2VzIHdlcmUgbWF0Y2hlcyBmb3IgbGF0ZXJcbiAgICAgICAgICAgICAgZG9fbm90X3Jlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGVyZSB3ZXJlIG5vIHNlcXVlbmNlIG1hdGNoZXMgYnV0IHdlIGFyZSBzdGlsbCBoZXJlXG4gICAgICAgICAgLy8gdGhhdCBtZWFucyB0aGlzIGlzIGEgcmVndWxhciBtYXRjaCBzbyB3ZSBzaG91bGQgZmlyZSB0aGF0XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRfc2VxdWVuY2VfY2FsbGJhY2sgJiYgIV9pbnNpZGVfc2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgeW91IGFyZSBpbnNpZGUgb2YgYSBzZXF1ZW5jZSBhbmQgdGhlIGtleSB5b3UgYXJlIHByZXNzaW5nXG4gICAgICAvLyBpcyBub3QgYSBtb2RpZmllciBrZXkgdGhlbiB3ZSBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgLy8gdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMga2V5IGV2ZW50XG4gICAgICBpZiAoZS50eXBlID09IF9pbnNpZGVfc2VxdWVuY2UgJiYgIV9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9fbm90X3Jlc2V0KTtcbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9oYW5kbGVLZXkoZSkge1xuXG4gICAgICAvLyBub3JtYWxpemUgZS53aGljaCBmb3Iga2V5IGV2ZW50c1xuICAgICAgLy8gQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyODU2MjcvamF2YXNjcmlwdC1rZXljb2RlLXZzLWNoYXJjb2RlLXV0dGVyLWNvbmZ1c2lvblxuICAgICAgZS53aGljaCA9IHR5cGVvZiBlLndoaWNoID09IFwibnVtYmVyXCIgPyBlLndoaWNoIDogZS5rZXlDb2RlO1xuXG4gICAgICB2YXIgY2hhcmFjdGVyID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcblxuICAgICAgLy8gbm8gY2hhcmFjdGVyIGZvdW5kIHRoZW4gc3RvcFxuICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXVwJyAmJiBfaWdub3JlX25leHRfa2V5dXAgPT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgX2lnbm9yZV9uZXh0X2tleXVwID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfaGFuZGxlQ2hhcmFjdGVyKGNoYXJhY3RlciwgZSk7XG4gIH1cblxuICAvKipcbiAgICogZGV0ZXJtaW5lcyBpZiB0aGUga2V5Y29kZSBzcGVjaWZpZWQgaXMgYSBtb2RpZmllciBrZXkgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBfaXNNb2RpZmllcihrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgPT0gJ3NoaWZ0JyB8fCBrZXkgPT0gJ2N0cmwnIHx8IGtleSA9PSAnYWx0JyB8fCBrZXkgPT0gJ21ldGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICpcbiAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0X3RpbWVyKTtcbiAgICAgIF9yZXNldF90aW1lciA9IHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAqIHRvIHNlZSB3aGF0IGNhbiBhbmQgY2FuJ3QgdXNlIGtleXByZXNzXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIF9nZXRSZXZlcnNlTWFwKCkge1xuICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICBfUkVWRVJTRV9NQVAgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX01BUCkge1xuXG4gICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgIC8vIGJlIGFibGUgdG8gZGV0ZWN0IHRoZSBrZXlzIGZyb20gdGhlIGNoYXJhY3RlclxuICAgICAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChfTUFQLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9SRVZFUlNFX01BUDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwaWNrcyB0aGUgYmVzdCBhY3Rpb24gYmFzZWQgb24gdGhlIGtleSBjb21iaW5hdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIHBhc3NlZCBpblxuICAgKi9cbiAgZnVuY3Rpb24gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pIHtcblxuICAgICAgLy8gaWYgbm8gYWN0aW9uIHdhcyBwaWNrZWQgaW4gd2Ugc2hvdWxkIHRyeSB0byBwaWNrIHRoZSBvbmVcbiAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICBhY3Rpb24gPSBfZ2V0UmV2ZXJzZU1hcCgpW2tleV0gPyAna2V5ZG93bicgOiAna2V5cHJlc3MnO1xuICAgICAgfVxuXG4gICAgICAvLyBtb2RpZmllciBrZXlzIGRvbid0IHdvcmsgYXMgZXhwZWN0ZWQgd2l0aCBrZXlwcmVzcyxcbiAgICAgIC8vIHN3aXRjaCB0byBrZXlkb3duXG4gICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGFjdGlvbiA9ICdrZXlkb3duJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kcyBhIGtleSBzZXF1ZW5jZSB0byBhbiBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYm8gLSBjb21ibyBzcGVjaWZpZWQgaW4gYmluZCBjYWxsXG4gICAqIEBwYXJhbSB7QXJyYXl9IGtleXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gX2JpbmRTZXF1ZW5jZShjb21ibywga2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuXG4gICAgICAvLyBzdGFydCBvZmYgYnkgYWRkaW5nIGEgc2VxdWVuY2UgbGV2ZWwgcmVjb3JkIGZvciB0aGlzIGNvbWJpbmF0aW9uXG4gICAgICAvLyBhbmQgc2V0dGluZyB0aGUgbGV2ZWwgdG8gMFxuICAgICAgX3NlcXVlbmNlX2xldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAvLyBpZiB0aGVyZSBpcyBubyBhY3Rpb24gcGljayB0aGUgYmVzdCBvbmUgZm9yIHRoZSBmaXJzdCBrZXlcbiAgICAgIC8vIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICBhY3Rpb24gPSBfcGlja0Jlc3RBY3Rpb24oa2V5c1swXSwgW10pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAqL1xuICAgICAgdmFyIF9pbmNyZWFzZVNlcXVlbmNlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBfaW5zaWRlX3NlcXVlbmNlID0gYWN0aW9uO1xuICAgICAgICAgICAgICArK19zZXF1ZW5jZV9sZXZlbHNbY29tYm9dO1xuICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZVRpbWVyKCk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgKiB0byByZXNldCBhbGwgc2VxdWVuY2UgY291bnRlcnMgYXMgc29vbiBhcyB0aGlzIHNlcXVlbmNlIGlzIGRvbmVcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAgICovXG4gICAgICAgICAgX2NhbGxiYWNrQW5kUmVzZXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUpO1xuXG4gICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgLy8gb3Iga2V5cHJlc3MuICB0aGlzIGlzIHNvIGlmIHlvdSBmaW5pc2ggYSBzZXF1ZW5jZSBhbmRcbiAgICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUga2V5IHRoZSBmaW5hbCBrZXkgd2lsbCBub3QgdHJpZ2dlciBhIGtleXVwXG4gICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgIF9pZ25vcmVfbmV4dF9rZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyB3ZWlyZCByYWNlIGNvbmRpdGlvbiBpZiBhIHNlcXVlbmNlIGVuZHMgd2l0aCB0aGUga2V5XG4gICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGk7XG5cbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzIG9uZSBhdCBhIHRpbWUgYW5kIGJpbmQgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrXG4gICAgICAvLyBmdW5jdGlvbi4gIGZvciBhbnkga2V5IGxlYWRpbmcgdXAgdG8gdGhlIGZpbmFsIG9uZSBpdCBzaG91bGRcbiAgICAgIC8vIGluY3JlYXNlIHRoZSBzZXF1ZW5jZS4gYWZ0ZXIgdGhlIGZpbmFsLCBpdCBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBfYmluZFNpbmdsZShrZXlzW2ldLCBpIDwga2V5cy5sZW5ndGggLSAxID8gX2luY3JlYXNlU2VxdWVuY2UgOiBfY2FsbGJhY2tBbmRSZXNldCwgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICB9XG4gIH1cblxuICAvKipcbiAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VfbmFtZSAtIG5hbWUgb2Ygc2VxdWVuY2UgaWYgcGFydCBvZiBzZXF1ZW5jZVxuICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsIC0gd2hhdCBwYXJ0IG9mIHRoZSBzZXF1ZW5jZSB0aGUgY29tbWFuZCBpc1xuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiBfYmluZFNpbmdsZShjb21iaW5hdGlvbiwgY2FsbGJhY2ssIGFjdGlvbiwgc2VxdWVuY2VfbmFtZSwgbGV2ZWwpIHtcblxuICAgICAgLy8gbWFrZSBzdXJlIG11bHRpcGxlIHNwYWNlcyBpbiBhIHJvdyBiZWNvbWUgYSBzaW5nbGUgc3BhY2VcbiAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICB2YXIgc2VxdWVuY2UgPSBjb21iaW5hdGlvbi5zcGxpdCgnICcpLFxuICAgICAgICAgIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGtleXMsXG4gICAgICAgICAgbW9kaWZpZXJzID0gW107XG5cbiAgICAgIC8vIGlmIHRoaXMgcGF0dGVybiBpcyBhIHNlcXVlbmNlIG9mIGtleXMgdGhlbiBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAgLy8gdG8gcmVwcm9jZXNzIGVhY2ggcGF0dGVybiBvbmUga2V5IGF0IGEgdGltZVxuICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm4gX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyB0YWtlIHRoZSBrZXlzIGZyb20gdGhpcyBwYXR0ZXJuIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIGFjdHVhbFxuICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgIGtleXMgPSBjb21iaW5hdGlvbiA9PT0gJysnID8gWycrJ10gOiBjb21iaW5hdGlvbi5zcGxpdCgnKycpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAvLyBub3JtYWxpemUga2V5IG5hbWVzXG4gICAgICAgICAgaWYgKF9TUEVDSUFMX0FMSUFTRVNba2V5XSkge1xuICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyBub3QgYSBrZXlwcmVzcyBldmVudCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgb25seSB3b3JrIGZvciBVUyBrZXlib2FyZHMgaG93ZXZlclxuICAgICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9ICdrZXlwcmVzcycgJiYgX1NISUZUX01BUFtrZXldKSB7XG4gICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICBpZiAoX2lzTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGtleSBjb21iaW5hdGlvbiBpc1xuICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgIGFjdGlvbiA9IF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHRvIGluaXRpYWxpemUgYXJyYXkgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZVxuICAgICAgLy8gYSBjYWxsYmFjayBpcyBhZGRlZCBmb3IgdGhpcyBrZXlcbiAgICAgIGlmICghX2NhbGxiYWNrc1trZXldKSB7XG4gICAgICAgICAgX2NhbGxiYWNrc1trZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIF9nZXRNYXRjaGVzKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24sICFzZXF1ZW5jZV9uYW1lLCBjb21iaW5hdGlvbik7XG5cbiAgICAgIC8vIGFkZCB0aGlzIGNhbGwgYmFjayB0byB0aGUgYXJyYXlcbiAgICAgIC8vIGlmIGl0IGlzIGEgc2VxdWVuY2UgcHV0IGl0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgIC8vIGlmIG5vdCBwdXQgaXQgYXQgdGhlIGVuZFxuICAgICAgLy9cbiAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHdheSB0aGVzZSBhcmUgcHJvY2Vzc2VkIGV4cGVjdHNcbiAgICAgIC8vIHRoZSBzZXF1ZW5jZSBvbmVzIHRvIGNvbWUgZmlyc3RcbiAgICAgIF9jYWxsYmFja3Nba2V5XVtzZXF1ZW5jZV9uYW1lID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh7XG4gICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIHNlcTogc2VxdWVuY2VfbmFtZSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kcyBtdWx0aXBsZSBjb21iaW5hdGlvbnMgdG8gdGhlIHNhbWUgY2FsbGJhY2tcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gY29tYmluYXRpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYWN0aW9uXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIF9iaW5kTXVsdGlwbGUoY29tYmluYXRpb25zLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbWJpbmF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uc1tpXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICB9XG4gIH1cblxuICAvLyBzdGFydCFcbiAgX2FkZEV2ZW50KGRvY3VtZW50LCAna2V5cHJlc3MnLCBfaGFuZGxlS2V5KTtcbiAgX2FkZEV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXkpO1xuICBfYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIF9oYW5kbGVLZXkpO1xuXG4gIHZhciBtb3VzZXRyYXAgPSB7XG5cbiAgICAgIC8qKlxuICAgICAgICogYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICAgKlxuICAgICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICAgKiBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGtleXMsIGFuIGFycmF5IG9mIGtleXMsIG9yXG4gICAgICAgKiBhIHNlcXVlbmNlIG9mIGtleXMgc2VwYXJhdGVkIGJ5IHNwYWNlc1xuICAgICAgICpcbiAgICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgICAqIGNvcnJlY3Qga2V5IGVuZHMgdXAgZ2V0dGluZyBib3VuZCAodGhlIGxhc3Qga2V5IGluIHRoZSBwYXR0ZXJuKVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gLSAna2V5cHJlc3MnLCAna2V5ZG93bicsIG9yICdrZXl1cCdcbiAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAqL1xuICAgICAgYmluZDogZnVuY3Rpb24oa2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICAgIF9iaW5kTXVsdGlwbGUoa2V5cyBpbnN0YW5jZW9mIEFycmF5ID8ga2V5cyA6IFtrZXlzXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgX2RpcmVjdF9tYXBba2V5cyArICc6JyArIGFjdGlvbl0gPSBjYWxsYmFjaztcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgICAqXG4gICAgICAgKiB0aGUgdW5iaW5kaW5nIHNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIHRoZSBzcGVjaWZpZWQga2V5IGNvbWJvXG4gICAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICAgKiBfZGlyZWN0X21hcCBkaWN0LlxuICAgICAgICpcbiAgICAgICAqIHRoZSBrZXljb21ibythY3Rpb24gaGFzIHRvIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXNcbiAgICAgICAqIGl0IHdhcyBkZWZpbmVkIGluIHRoZSBiaW5kIG1ldGhvZFxuICAgICAgICpcbiAgICAgICAqIFRPRE86IGFjdHVhbGx5IHJlbW92ZSB0aGlzIGZyb20gdGhlIF9jYWxsYmFja3MgZGljdGlvbmFyeSBpbnN0ZWFkXG4gICAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAqL1xuICAgICAgdW5iaW5kOiBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgICBpZiAoX2RpcmVjdF9tYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgICAgZGVsZXRlIF9kaXJlY3RfbWFwW2tleXMgKyAnOicgKyBhY3Rpb25dO1xuICAgICAgICAgICAgICB0aGlzLmJpbmQoa2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHRyaWdnZXJzIGFuIGV2ZW50IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBib3VuZFxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlzXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICovXG4gICAgICB0cmlnZ2VyOiBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgICBfZGlyZWN0X21hcFtrZXlzICsgJzonICsgYWN0aW9uXSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiByZXNldHMgdGhlIGxpYnJhcnkgYmFjayB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gIHRoaXMgaXMgdXNlZnVsXG4gICAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICAgKiBuZXcgb25lcyAtIGZvciBleGFtcGxlIGlmIHlvdSBzd2l0Y2ggdG8gYW5vdGhlciBwYWdlXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICovXG4gICAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICAgIF9kaXJlY3RfbWFwID0ge307XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gIH07XG5cbm1vZHVsZS5leHBvcnRzID0gbW91c2V0cmFwO1xuXG4iLCJoaXN0ICAgICAgICAgPSB3aW5kb3cuaGlzdG9yeVxuc2xpZGVfcHJlZml4ID0gJyNzbGlkZS0nXG5FdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnV0aWwgPSByZXF1aXJlICd1dGlsJ1xuXG5hcGkgPSBkbyAtPlxuXG4gIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG5cbiAgIyBvX09cbiAgb25FdmVudCA9IChhcmdzLi4uKSAtPiBlbWl0dGVyLm9uLmFwcGx5IGVtaXR0ZXIsIGFyZ3NcblxuICBjdXJyZW50ICA9IDFcbiAgbWF4ICAgICAgPSAxXG4gICRzbGlkZVBhY2sgPSB7fVxuXG4gIGluaXQgPSAob3B0aW9ucykgLT5cblxuICAgICRzbGlkZVBhY2sgPSBvcHRpb25zLnNsaWRlUGFja1xuXG4gICAgbWF4ID0gJHNsaWRlUGFjay5maW5kKCdzZWN0aW9uJykubGVuZ3RoXG5cbiAgICBzZXR1cFBhZ2VyKClcbiAgICBpbnN0YWxsTmF2aWdhdGlvbkhhbmRsZXIoKVxuXG4gICAgc2hvdyBjdXJyZW50XG5cbiAgc2V0dXBQYWdlciA9IC0+XG4gICAgaWYgc3RhdGUgPSBoaXN0LnN0YXRlXG4gICAgICBjdXJyZW50ID0gc3RhdGUuY3VycmVudFxuXG4gIHByZXYgPSAtPlxuICAgIGN1cnJlbnQgLT0gMVxuICAgIGN1cnJlbnQgPSBtYXggaWYgY3VycmVudCA8IDFcbiAgICBuYXZpZ2F0ZSgpXG5cbiAgbmV4dCA9IC0+XG4gICAgY3VycmVudCArPSAxXG4gICAgY3VycmVudCA9IDEgaWYgY3VycmVudCA+IG1heFxuICAgIG5hdmlnYXRlKClcblxuICBzaG93ID0gKHRvKSAtPlxuICAgICRzbGlkZVBhY2suZmluZCgnc2VjdGlvbi5hY3RpdmUnKS5yZW1vdmVDbGFzcyAnYWN0aXZlJ1xuICAgICRzbGlkZVBhY2suZmluZCgnc2VjdGlvbicpLmVxKHRvIC0gMSkuYWRkQ2xhc3MgJ2FjdGl2ZSdcblxuICBuYXZpZ2F0ZSA9IC0+XG4gICAgc2hvdyBjdXJyZW50XG4gICAgZW1pdHRlci5lbWl0KCduYXZpZ2F0ZScpXG4gICAgaGlzdC5wdXNoU3RhdGUgY3VycmVudCA6IGN1cnJlbnQsIFwiU2xpZGUgI3tjdXJyZW50fSAvICN7bWF4fVwiLCBcIiN7c2xpZGVfcHJlZml4fSN7Y3VycmVudH1cIlxuXG4gIGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpIC0+XG4gICAgaWYgZXZlbnQuc3RhdGVcbiAgICAgICMgcHVzaFN0YXRlL3JlcGxhY2VTdGF0ZVxuICAgICAgc2hvdyBldmVudC5zdGF0ZS5jdXJyZW50XG4gICAgZWxzZVxuICAgICAgIyBwYWdlIGxvYWRcbiAgICAgIGN1cnJlbnQgPSAoTnVtYmVyKSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKHNsaWRlX3ByZWZpeCwnJylcbiAgICAgIHNob3coY3VycmVudCkgaWYgY3VycmVudFxuXG4gIGluc3RhbGxOYXZpZ2F0aW9uSGFuZGxlciA9IC0+XG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSBoYW5kbGVOYXZpZ2F0aW9uXG5cbiAgc3RhdHVzID0gLT5cbiAgICB0b3RhbCA6IG1heFxuICAgIGN1cnJlbnQgOiBjdXJyZW50XG5cbiAgc3RhdHVzIDogc3RhdHVzXG4gIGluaXQgOiBpbml0XG4gIHByZXYgOiBwcmV2XG4gIG5leHQgOiBuZXh0XG4gIG9uIDogb25FdmVudFxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaVxuIiwiYXBpID0gcmVxdWlyZSAnLi9zbGlkZS1wYWNrLWFwaSdcbm1vdXNldHJhcCA9IHJlcXVpcmUgJ21vdXNldHJhcCdcbiQgPSByZXF1aXJlICd6ZXB0b2pzJ1xuXG5cbiMga2V5Ym9hcmQgbmF2aWdhdGlvblxubW91c2V0cmFwLmJpbmQgWydsZWZ0JywgJ3VwJywgJ2snLCAnaCddLCBhcGkucHJldlxubW91c2V0cmFwLmJpbmQgWydyaWdodCcsICdkb3duJywgJ2onLCAnbCddLCBhcGkubmV4dFxuXG4jIG1vdXNlL3RvdWNoIG5hdmlnYXRpb25cbm5hdiA9ICQoJzxuYXY+PGE+4oaQPC9hPjxhPuKGkjwvYT48L25hdj4nKVxuJCgnYm9keScpLmFwcGVuZCBuYXZcblxuJChkb2N1bWVudCkub24gJ2NsaWNrJywgJ25hdiBhOmZpcnN0LWNoaWxkJywgKGUpIC0+XG4gIGFwaS5wcmV2KClcblxuJChkb2N1bWVudCkub24gJ2NsaWNrJywgJ25hdiBhOmxhc3QtY2hpbGQnLCAoZSkgLT5cbiAgYXBpLm5leHQoKVxuXG4kKGRvY3VtZW50KS5vbiAnc3dpcGVMZWZ0JywgLT5cbiAgYXBpLm5leHQoKVxuXG4kKGRvY3VtZW50KS5vbiAnc3dpcGVSaWdodCcsIC0+XG4gIGFwaS5wcmV2KClcbiIsIm1hcmtkb3duID0gcmVxdWlyZSgnbWFya2VkJylcblxuaXNOZXdTbGlkZU1hcmsgPSAobm9kZSkgLT5cbiAgbm9kZSAmJiBub2RlLnR5cGUgPT0gXCJwYXJhZ3JhcGhcIiAmJiBub2RlLnRleHQuaW5kZXhPZignLS0nKSA9PSAwXG5cbmdldFNsaWRlQ2xhc3MgPSAobm9kZSkgLT5cbiAgbm9kZS50ZXh0LnN1YnN0ciAzXG5cbmRvQ2hvcCA9IChzbGlkZXMsIHRva2VucykgLT5cbiAgcmV0dXJuIHNsaWRlcyBpZiB0b2tlbnMubGVuZ3RoID09IDBcblxuICBzbGlkZSA9IFtdXG4gIHNsaWRlLmxpbmtzID0ge30gIyBUT0RPIFdURiE/XG5cbiAgbm9kZSA9IHRva2Vucy5zaGlmdCgpXG4gIGlmIGlzTmV3U2xpZGVNYXJrKG5vZGUpXG4gICAgc2xpZGUuc2xpZGVDbGFzcyA9IGdldFNsaWRlQ2xhc3Mobm9kZSlcblxuICB3aGlsZSBub2RlID0gdG9rZW5zLnNoaWZ0KClcbiAgICBpZiBpc05ld1NsaWRlTWFyayhub2RlKVxuICAgICAgdG9rZW5zLnVuc2hpZnQobm9kZSlcbiAgICAgIGJyZWFrXG4gICAgZWxzZVxuICAgICAgc2xpZGUucHVzaCBub2RlXG5cbiAgc2xpZGVzLnB1c2ggc2xpZGVcbiAgZG9DaG9wIHNsaWRlcywgdG9rZW5zXG5cbmNob3AgPSAodG9rZW5zKSAtPlxuICBkb0Nob3AgW10sIHRva2Vuc1xuXG5zbGlkZXIgPSAobWQpIC0+XG4gIHRva2VucyA9IG1hcmtkb3duLmxleGVyKG1kKVxuICBjaG9wIHRva2Vuc1xuXG5nZW5lcmF0ZVNsaWRlID0gKHNsaWRlKSAtPlxuICBjc3NDbGFzcyA6IHNsaWRlLnNsaWRlQ2xhc3NcbiAgaHRtbCA6IG1hcmtkb3duLnBhcnNlciBzbGlkZVxuXG5zbGlkZVBhY2tQcm9jZXNzb3IgPSBkbyAtPlxuXG4gIHByb2Nlc3MgPSAobWQpIC0+XG4gICAgc2xpZGVzID0gc2xpZGVyIG1kXG5cbiAgICAoZ2VuZXJhdGVTbGlkZShzbGlkZSkgZm9yIHNsaWRlIGluIHNsaWRlcylcblxuXG4gIHByb2Nlc3MgOiBwcm9jZXNzXG5cbm1vZHVsZS5leHBvcnRzID0gc2xpZGVQYWNrUHJvY2Vzc29yXG4iLCJhcGkgPSByZXF1aXJlICcuL3NsaWRlLXBhY2stYXBpJ1xuJCA9IHJlcXVpcmUgJ3plcHRvanMnXG5cbiQgLT5cblxuICBwcm9ncmVzcyA9ICQoJzxwcm9ncmVzcz48L3Byb2dyZXNzPicpXG5cbiAgdXBkYXRlUHJvZ3Jlc3MgPSAtPlxuICAgIHN0YXR1cyA9IGFwaS5zdGF0dXMoKVxuICAgIHByb2dyZXNzLmF0dHJcbiAgICAgIG1heCA6IHN0YXR1cy50b3RhbFxuICAgICAgdmFsdWUgOiBzdGF0dXMuY3VycmVudFxuXG4gIHVwZGF0ZVByb2dyZXNzKClcblxuICBhcGkub24gJ25hdmlnYXRlJywgdXBkYXRlUHJvZ3Jlc3NcblxuICAkKCdib2R5JykuYXBwZW5kIHByb2dyZXNzXG4iXX0=
