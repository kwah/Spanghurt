// ==UserScript==
// @name           Spanghurt
// @namespace      http://kwah.org/
// @description    Spanghurt is the codename v5 of what was formerly the Neobux 2+ script for Neobux.. The script aims to plugin extra bits of info into Neobux to make your life easier when you're managing referrals or analysing your account.. Once this is a bit more fully formed there'll be more info at kwah.org but for now look out for Neobux 2+ (thread author:kwah) in the Neobux forums =]
// @include        http*://www.neobux.com/*
// ==/UserScript==


/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if("string" === typeof E){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if("find" === H){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if("string" === typeof F){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if(("width" == E||"height" == E)&&0 > parseFloat(F)){F=g}return this.attr(E,F,"curCSS")},text:function(F){if("object" !== typeof F&&null != F){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(8 != this.nodeType){E+=1 != this.nodeType?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(1 == this.nodeType){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(1 == this.nodeType){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(1 === this.length){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(true === G){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return 1 === F.nodeType})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if("string" === typeof E){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?0 > o.inArray(this, E):this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),"string" === typeof E?o(E):o.makeArray(E))))},is:function(E){return !!E&&0 < o.multiFilter(E, this).length},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H="select-one" == E.type;if(0 > I){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if("number" === typeof K){K+=""}return this.each(function(){if(1 != this.nodeType){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(0 <= o.inArray(this.value, K)||0 <= o.inArray(this.name, K))}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(0 <= o.inArray(this.value, N)||0 <= o.inArray(this.text, N))});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),1 < this.length||0 < G?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(arg_N,arg_O){return M&&o.nodeName(arg_N,"table")&&o.nodeName(arg_O,"tr")?(arg_N.getElementsByTagName("tbody")[0]||arg_N.appendChild(arg_N.ownerDocument.createElement("tbody"))):arg_N}}};o.fn.init.prototype=o.fn;function z(arg_E,arg_F){if(arg_F.src){o.ajax({url:arg_F.src,async:false,dataType:"script"})}else{o.globalEval(arg_F.text||arg_F.textContent||arg_F.innerHTML||"")}if(arg_F.parentNode){arg_F.parentNode.removeChild(arg_F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if("boolean" === typeof J){E=J;J=arguments[1]||{};H=2}if("object" !== typeof J&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if(null != (G = arguments[H])){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&"object" === typeof L&&!L.nodeType){J[F]=o.extend(E,K||(null != L.length?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return "[object Function]" === s.call(E)},isArray:function(E){return "[object Array]" === s.call(E)},isXMLDoc:function(E){return 9 === E.nodeType&&"HTML" !== E.documentElement.nodeName||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(false === K.apply(G[E], F)){break}}}else{for(;H<I;){if(false === K.apply(G[H++], F)){break}}}}else{if(I===g){for(E in G){if(false === K.call(G[E], E, G[E])){break}}}else{for(var J=G[0];H<I&&false !== K.call(J, H, J);J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return "number" === typeof I&&"curCSS" == G&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(1 == E.nodeType&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(1 == E.nodeType){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if("width" == F||"height" == F){var L,G={position:"absolute",visibility:"hidden",display:"block"},K="width" == F?["Left","Right"]:["Top","Bottom"];function I(){L="width" == F?H.offsetWidth:H.offsetHeight;if("border" === E){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if("margin" === E){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(0 !== H.offsetWidth){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if("opacity" == F&&!o.support.opacity){L=o.attr(E,"opacity");return "" == L?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if("opacity" == F&&"" == L){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if("undefined" === typeof K.createElement){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&1 === F.length&&"string" === typeof F[0]){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if("number" === typeof S){S+=""}if(!S){return}if("string" === typeof S){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:"<table>" == Q[1]&&!R?L.childNodes:[];for(var M=N.length-1;0 <= M;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||"text/javascript" === G[J].type.toLowerCase())){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(1 === G[J].nodeType){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||3 == J.nodeType||8 == J.nodeType){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if("selected" == G&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if("type" == G&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if("tabIndex" == G){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&"style" == G){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return null === E?g:E}if(!o.support.opacity&&"opacity" == G){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+("NaN" == parseInt(K) + ""?"":"alpha(opacity="+K*100+")")}return J.filter&&0 <= J.filter.indexOf("opacity=")?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(null != G){var F=G.length;if(null == F||"string" === typeof G||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while(null != (G = E[F++])){if(8 != G.nodeType){H[I++]=G}}}else{while(null != (G = E[F++])){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(null != I){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&"string" == typeof G){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(0 < K?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(1 == this.nodeType){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if("boolean" !== typeof E){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(arg_E,arg_F){return arg_E[0]&&parseInt(o.curCSS(arg_E[0],arg_F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||"fx" === G){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if("string" !== typeof E){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if("fx" == E&&1 == G.length){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(1 !== U.nodeType&&9 !== U.nodeType){return[]}if(!Y||"string" !== typeof Y){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while(null !== (W = R.exec(Y))){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(1 < Z.length&&M.exec(Y)){if(2 === Z.length&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),1 === Z.length&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(0 < Z.length){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(null == ag){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if("[object Array]" === H.call(ai)){if(!X){ab.push.apply(ab,ai)}else{if(1 === U.nodeType){for(var aa=0;null != ai[aa];aa++){if(ai[aa]&&(true === ai[aa]||1 === ai[aa].nodeType&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;null != ai[aa];aa++){if(ai[aa]&&1 === ai[aa].nodeType){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if("\\" !== U.substr(U.length - 1)){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(null != Z){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if(null != (Y = I.match[ab].exec(ad))){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(true === Y){continue}}}if(Y){for(var X=0;null != (af = aa[X]);X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&null != ah){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(null == T){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X="string" === typeof T,ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&1 !== U.nodeType){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X="string" === typeof U;if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if("string" === typeof U&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if("undefined" !== typeof V.getElementById&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if("undefined" !== typeof Y.getElementsByName){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return 0 === U.length?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;null != (Y = U[X]);X++){if(Y){if(Z^(Y.className&&0 <= (" " + Y.className + " ").indexOf(W))){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;false === T[V];V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if("nth" == T[1]){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" == T[2]&&"2n"||"odd" == T[2]&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if("~=" === X[2]){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if("not" === X[1]){if(1 < X[3].match(R).length||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return false === T.disabled&&"hidden" !== T.type},disabled:function(T){return true === T.disabled},checked:function(T){return true === T.checked},selected:function(T){T.parentNode.selectedIndex;return true === T.selected},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||"BUTTON" === T.nodeName.toUpperCase()},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return 0 === T},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return 0 === T % 2},odd:function(U,T){return 1 === T % 2},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if("contains" === U){return0 <= (Z.textContent || Z.innerText || "").indexOf(V[3])}else{if("not" === U){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(1 === U.nodeType){return false}}if("first" == Z){return true}U=T;case"last":while(U=U.nextSibling){if(1 === U.nodeType){return false}}return true;case"nth":var V=W[2],ac=W[3];if(1 == V&&0 == ac){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(1 === U.nodeType){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(0 == V){return 0 == aa}else{return(0 == aa % V&&0 <= aa / V)}}},ID:function(U,T){return 1 === U.nodeType&&U.getAttribute("id")===T},TAG:function(U,T){return("*" === T&&1 === U.nodeType)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):null != Y[V]?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return null == T?"!=" === X:"=" === X?Z===U:"*=" === X?0 <= Z.indexOf(U):"~=" === X?0 <= (" " + Z + " ").indexOf(U):!U?Z&&false !== T:"!=" === X?Z!=U:"^=" === X?0 === Z.indexOf(U):"$=" === X?Z.substr(Z.length-U.length)===U:"|=" === X?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if("[object Array]" === H.call(X)){Array.prototype.push.apply(U,X)}else{if("number" === typeof X.length){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(0 === V){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(0 === V){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(0 === X){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if("undefined" !== typeof Y.getElementById&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||"undefined" !== typeof W.getAttributeNode&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X="undefined" !== typeof Y.getAttributeNode&&Y.getAttributeNode("id");return 1 === Y.nodeType&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(0 < T.getElementsByTagName("*").length){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if("*" === U[1]){var W=[];for(var V=0;X[V];V++){if(1 === X[V].nodeType){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&"undefined" !== typeof T.firstChild.getAttribute&&"#" !== T.firstChild.getAttribute("href")){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&0 === U.querySelectorAll(".TEST").length){return}F=function(Y,X,V,W){X=X||document;if(!W&&9 === X.nodeType&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(0 === T.getElementsByClassName("e").length){return}T.lastChild.className="e";if(1 === T.getElementsByClassName("e").length){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if("undefined" !== typeof V.getElementsByClassName&&!W){return V.getElementsByClassName(U[1])}}})()}function P(arg_U,arg_Z,arg_Y,arg_ad,arg_aa,arg_ac){var ab="previousSibling" == arg_U&&!arg_ac;for(var W=0,V=arg_ad.length;W<V;W++){var T=arg_ad[W];if(T){if(ab&&1 === T.nodeType){T.sizcache=arg_Y;T.sizset=W}T=T[arg_U];var X=false;while(T){if(T.sizcache===arg_Y){X=arg_ad[T.sizset];break}if(1 === T.nodeType&&!arg_ac){T.sizcache=arg_Y;T.sizset=W}if(T.nodeName===arg_Z){X=T;break}T=T[arg_U]}arg_ad[W]=X}}}function S(arg_U,arg_Z,arg_Y,arg_ad,arg_aa,arg_ac){var ab="previousSibling" == arg_U&&!arg_ac;for(var W=0,V=arg_ad.length;W<V;W++){var T=arg_ad[W];if(T){if(ab&&1 === T.nodeType){T.sizcache=arg_Y;T.sizset=W}T=T[arg_U];var X=false;while(T){if(T.sizcache===arg_Y){X=arg_ad[T.sizset];break}if(1 === T.nodeType){if(!arg_ac){T.sizcache=arg_Y;T.sizset=W}if("string" !== typeof arg_Z){if(T===arg_Z){X=true;break}}else{if(0 < F.filter(arg_Z, [T]).length){X=T;break}}}T=T[arg_U]}arg_ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return 9 === T.nodeType&&"HTML" !== T.documentElement.nodeName||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return 0 === T.offsetWidth||0 === T.offsetHeight};F.selectors.filters.visible=function(T){return 0 < T.offsetWidth||0 < T.offsetHeight};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(1 == W.nodeType){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(1 == X.nodeType&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(1 == V.nodeType&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(3 == I.nodeType||8 == I.nodeType){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return "undefined" !== typeof o&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||false === o.event.special[N].setup.call(I, K, O)){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(3 == K.nodeType||8 == K.nodeType){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||("string" === typeof H&&"." == H.charAt(0))){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||false === o.event.special[O].teardown.call(K, Q)){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I="object" === typeof I?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(0 <= G.indexOf("!")){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||3 == H.nodeType||8 == H.nodeType){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&"click" == G))&&H["on"+G]&&false === H["on" + G].apply(H, K)){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&"click" == G)){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(false === F){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(3 == H.target.nodeType){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(null == H.pageX&&null != H.clientX){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||0 === H.charCode)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(1 > E){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return "unload" == F?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(arg_H){var E=RegExp("(^|\\.)"+arg_H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(arg_H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(false === this.fn.call(this.elem, arg_H, this.fn.data)){return(G=false)}});return G}function i(arg_F,arg_E){return["live",arg_F,arg_E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if("complete" === document.readyState){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(1 != E&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:3 == K.firstChild.nodeType,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:"/a" === E.getAttribute("href"),opacity:"0.5" === E.style.opacity,cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=2 === L.offsetWidth;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if("string" !== typeof G){return this._load(G)}var I=G.indexOf(" ");if(0 <= I){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if("object" === typeof J){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if("success" == L||"notmodified" == L){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return null == G?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&"string" !== typeof M.data){M.data=o.param(M.data)}if("jsonp" == M.dataType){if("GET" == G){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if("json" == M.dataType&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if("script" == M.dataType&&null == M.cache){M.cache=false}if(false === M.cache&&"GET" == G){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&"GET" == G){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if("script" == M.dataType&&"GET" == G&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||"loaded" == this.readyState||"complete" == this.readyState)){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&false === M.beforeSend(J, M)){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(0 == J.readyState){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(4 == J.readyState||"timeout" == X)){K=true;if(P){clearInterval(P);P=null}R="timeout" == X?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if("success" == R){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if("success" == R){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(0 < M.timeout){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&"file:" == location.protocol||(200 <= F.status&&300 > F.status)||304 == F.status||1223 == F.status}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return 304 == G.status||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E="xml" == H||!H&&F&&0 <= F.indexOf("xml"),I=E?J.responseXML:J.responseText;if(E&&"parsererror" == I.documentElement.tagName){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if("string" === typeof I){if("script" == H){o.globalEval(I)}if("json" == H){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(arg_I,arg_J){G[G.length]=encodeURIComponent(arg_I)+"="+encodeURIComponent(arg_J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(arg_F,arg_E){var G={};o.each(d.concat.apply([],d.slice(0,arg_E)),function(){G[this]=arg_F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if("none" === o.css(this[H], "display")){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if("none" === K){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&"none" !== E){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E="boolean" === typeof G;return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):null == G||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[false === E.queue?"each":"queue"](function(){var K=o.extend({},E),M,L=1 == this.nodeType&&o(this).is(":hidden"),J=this;for(M in I){if("hide" == I[M]&&L||"show" == I[M]&&!L){return K.complete.call(this)}if(("height" == M||"width" == M)&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(null != K.overflow){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R["toggle" == S?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if("px" != P){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=(("-=" == Q[1]?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;0 <= H;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E="object" === typeof G?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:"number" === typeof E.duration?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(false !== E.queue){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if(("height" == this.prop||"width" == this.prop)&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(null != this.elem[this.prop]&&(!this.elem.style||null == this.elem.style[this.prop])){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(arg_J){return E.step(arg_J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom("width" == this.prop||"height" == this.prop?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(true !== this.options.curAnim[F]){E=false}}if(E){if(null != this.options.display){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if("none" == o.css(this.elem, "display")){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&null != E.elem.style[E.prop]){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&"visible" !== M.overflow){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if("relative" === E.position||"static" === E.position){N+=K.offsetTop,I+=K.offsetLeft}if("fixed" === E.position){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(5 !== G.offsetTop);this.doesAddBorderForTableAndCells=(5 === I.offsetTop);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(0 === L.offsetTop);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&"static" == o.css(E, "position"))){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?"CSS1Compat" == document.compatMode&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,"string" === typeof K?K:K+"px")}})})();



/*
 * jQuery Tools 1.2.4 - The missing UI library for the Web
 *
 * [toolbox.flashembed, toolbox.history, toolbox.expose, toolbox.mousewheel, tabs, tabs.slideshow, tooltip, tooltip.slide, tooltip.dynamic, scrollable, scrollable.autoscroll, scrollable.navigator, overlay, overlay.apple, dateinput, rangeinput, validator]
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 * jquery.event.wheel.js - rev 1
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 *
 * -----
 *
 * File generated: Wed Aug 18 09:10:10 GMT 2010
 */
(function(){function f(arg_a,arg_b){if(arg_b)for(var c in arg_b)if(arg_b.hasOwnProperty(c))arg_a[c]=arg_b[c];return arg_a}function l(arg_a,arg_b){var c=[];for(var d in arg_a)if(arg_a.hasOwnProperty(d))c[d]=arg_b(arg_a[d]);return c}function m(arg_a,arg_b,arg_c){if(e.isSupported(arg_b.version))arg_a.innerHTML=e.getHTML(arg_b,arg_c);else if(arg_b.expressInstall&&e.isSupported([6,65]))arg_a.innerHTML=e.getHTML(f(arg_b,{src:arg_b.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{if(!arg_a.innerHTML.replace(/\s/g,"")){arg_a.innerHTML="<h2>Flash version "+arg_b.version+
" or greater is required</h2><h3>"+(0 < g[0]?"Your version is "+g:"You have no flash plugin installed")+"</h3>"+("A" == arg_a.tagName?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+k+"'>here</a></p>");if("A" == arg_a.tagName)arg_a.onclick=function(){location.href=k}}if(arg_b.onFail){var d=arg_b.onFail.call(this);if("string" == typeof d)arg_a.innerHTML=d}}if(i)window[arg_b.id]=document.getElementById(arg_b.id);f(this,{getRoot:function(){return arg_a},getOptions:function(){return arg_b},getConf:function(){return arg_c},
getApi:function(){return arg_a.firstChild}})}var i=document.all,k="http://www.adobe.com/go/getflashplayer",n="function" == typeof jQuery,o=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,j={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}});
window.flashembed=function(a,b,c){if("string" == typeof a)a=document.getElementById(a.replace("#",""));if(a){if("string" == typeof b)b={src:b};return new m(a,f(f({},j),b),c)}};var e=f(window.flashembed,{conf:j,getVersion:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"))&&a.GetVariable("$version")}catch(d){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"))&&a.GetVariable("$version")}catch(h){}}}return(b=
o.exec(b))?[b[1],b[3]]:[0,0]},asString:function(a){if(null === a||a===undefined)return null;var b=typeof a;if("object" == b&&a.push)b="array";switch(b){case "string":a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1");a=a.replace(/^\s?(\d+\.?\d+)%/,"$1pct");return'"'+a+'"';case "array":return"["+l(a,function(d){return e.asString(d)}).join(",")+"]";case "function":return'"function()"';case "object":b=[];for(var c in a)a.hasOwnProperty(c)&&b.push('"'+c+'":'+e.asString(a[c]));return"{"+b.join(",")+"}"}return String(a).replace(/\s/g,
" ").replace(/\'/g,'"')},getHTML:function(a,b){a=f({},a);var c='<object width="'+a.width+'" height="'+a.height+'" id="'+a.id+'" name="'+a.id+'"';if(a.cachebusting)a.src+=(a.src.indexOf("?")!=-1?"&":"?")+Math.random();c+=a.w3c||!i?' data="'+a.src+'" type="application/x-shockwave-flash"':' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.w3c||i)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.w3c=a.src=null;a.onFail=a.version=a.expressInstall=null;for(var d in a)if(a[d])c+=
'<param name="'+d+'" value="'+a[d]+'" />';a="";if(b){for(var h in b)if(b[h]){d=b[h];a+=h+"="+(/function|object/.test(typeof d)?e.asString(d):d)+"&"}a=a.slice(0,-1);c+='<param name="flashvars" value=\''+a+"' />"}c+="</object>";return c},isSupported:function(a){return g[0]>a[0]||g[0]==a[0]&&g[1]>=a[1]}}),g=e.getVersion();if(n){jQuery.tools=jQuery.tools||{version:"1.2.4"};jQuery.tools.flashembed={conf:j};jQuery.fn.flashembed=function(a,b){return this.each(function(){$(this).data("flashembed",flashembed(this,
a,b))})}}})();
(function(b){function h(arg_c){if(arg_c){var a=d.contentWindow.document;a.open().close();a.location.hash=arg_c}}var g,d,f,i;b.tools=b.tools||{version:"1.2.4"};b.tools.history={init:function(c){if(!i){if(b.browser.msie&&"8" > b.browser.version){if(!d){d=b("<iframe/>").attr("src","javascript:false;").hide().get(0);b("body").append(d);setInterval(function(){var a=d.contentWindow.document;a=a.location.hash;g!==a&&b.event.trigger("hash",a)},100);h(location.hash||"#")}}else setInterval(function(){var a=location.hash;
a!==g&&b.event.trigger("hash",a)},100);f=!f?c:f.add(c);c.click(function(a){var e=b(this).attr("href");d&&h(e);if("#" != e.slice(0, 1)){location.href="#"+e;return a.preventDefault()}});i=true}}};b(window).bind("hash",function(c,a){a?f.filter(function(){var e=b(this).attr("href");return e==a||e==a.replace("#","")}).trigger("history",[a]):f.eq(0).trigger("history",[a]);g=a;window.location.hash=g});b.fn.history=function(c){b.tools.history.init(this);return this.bind("history",c)}})(jQuery);
(function(b){function k(){if(b.browser.msie){var a=b(document).height(),d=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20 > a - d?d:a]}return[b(document).width(),b(document).height()]}function h(arg_a){if(arg_a)return arg_a.call(b.mask)}b.tools=b.tools||{version:"1.2.4"};var l;l=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var c,i,e,g,j;b.mask={load:function(a,d){if(e)return this;if("string" == typeof a)a={color:a};a=a||g;g=a=b.extend(b.extend({},l.conf),a);c=b("#"+a.maskId);if(!c.length){c=b("<div/>").attr("id",a.maskId);b("body").append(c)}var m=k();c.css({position:"absolute",top:0,left:0,width:m[0],height:m[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});a.color&&c.css("backgroundColor",a.color);if(false === h(a.onBeforeLoad))return this;a.closeOnEsc&&b(document).bind("keydown.mask",function(f){27 == f.keyCode&&b.mask.close(f)});a.closeOnClick&&c.bind("click.mask",function(f){b.mask.close(f)});b(window).bind("resize.mask",function(){b.mask.fit()});if(d&&d.length){j=d.eq(0).css("zIndex");b.each(d,function(){var f=b(this);/relative|absolute|fixed/i.test(f.css("position"))||f.css("position","relative")});i=d.css({zIndex:Math.max(a.zIndex+1,"auto" == j?0:j)})}c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,function(){b.mask.fit();h(a.onLoad);e="full"});e=true;return this},close:function(){if(e){if(false === h(g.onBeforeClose))return this;c.fadeOut(g.closeSpeed,function(){h(g.onClose);i&&i.css({zIndex:j});e=false});b(document).unbind("keydown.mask");c.unbind("click.mask");b(window).unbind("resize.mask")}return this},fit:function(){if(e){var a=k();c.css({width:a[0],height:a[1]})}},getMask:function(){return c},isLoaded:function(a){return a?"full" == e:e},getConf:function(){return g},getExposed:function(){return i}};b.fn.mask=function(a){b.mask.load(a);return this};b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);
(function(b){function c(arg_a){switch(arg_a.type){case "mousemove":return b.extend(arg_a.data,{clientX:arg_a.clientX,clientY:arg_a.clientY,pageX:arg_a.pageX,pageY:arg_a.pageY});case "DOMMouseScroll":b.extend(arg_a,arg_a.data);arg_a.delta=-arg_a.detail/3;break;case "mousewheel":arg_a.delta=arg_a.wheelDelta/120;break}arg_a.type="wheel";return b.event.handle.call(this,arg_a,arg_a.delta)}b.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};b.event.special.wheel={setup:function(){b.event.add(this,d,c,{})},teardown:function(){b.event.remove(this,
d,c)}};var d=!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+("1.9" > b.browser.version?" mousemove":"")})(jQuery);
(function(c){function p(arg_d,arg_b,arg_){var e=this,l=arg_d.add(this),h=arg_d.find(arg_.tabs),i=arg_b.jquery?arg_b:arg_d.children(arg_b),j;h.length||(h=arg_d.children());i.length||(i=arg_d.parent().find(arg_b));i.length||(i=c(arg_b));c.extend(this,{click:function(f,g){var k=h.eq(f);if("string" == typeof f&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(arg_.rotate){var n=h.length-1;if(0 > f)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(0 <= j)return e;f=arg_.initialIndex;k=h.eq(f)}if(f===j)return e;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[arg_.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(arg_.current);k.addClass(arg_.current);return e}},getConf:function(){return arg_},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return e.click(j+1)},prev:function(){return e.click(j-1)},destroy:function(){h.unbind(arg_.event).removeClass(arg_.current);
i.find("a[href^=#]").unbind("click.T");return e}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(arg_[g])&&c(e).bind(g,arg_[g]);e[g]=function(k){k&&c(e).bind(g,k);return e}});if(arg_.history&&c.fn.history){c.tools.history.init(h);arg_.event="history"}h.each(function(f){c(this).bind(arg_.event,function(g){e.click(f,g);return g.preventDefault()})});i.find("a[href^=#]").bind("click.T",function(f){e.click(c(this).attr("href"),f)});if(location.hash&&"a" === arg_.tabs&&arg_d.find(arg_.tabs+location.hash).length)e.click(location.hash);
else if(0 === arg_.initialIndex||0 < arg_.initialIndex)e.click(arg_.initialIndex)}c.tools=c.tools||{version:"1.2.4"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){o[d]=b}};var o={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var a=this.getConf(),e=a.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(a.fadeInSpeed,b)},slide:function(d,
b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(d,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();b.call()})});c.fn.tabs=function(d,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b=
{onBeforeClick:b};b=c.extend({},c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),d,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);
(function(d){function r(arg_g,arg_a){function p(arg_f){var e=d(arg_f);return 2 > e.length?e:arg_g.parent().find(arg_f)}var c=this,j=arg_g.add(this),b=arg_g.data("tabs"),h,m,k,n=false,o=p(arg_a.next).click(function(){b.next()}),l=p(arg_a.prev).click(function(){b.prev()});d.extend(c,{getTabs:function(){return b},getConf:function(){return arg_a},play:function(){if(!h){var f=d.Event("onBeforePlay");j.trigger(f);if(f.isDefaultPrevented())return c;n=false;h=setInterval(b.next,arg_a.interval);j.trigger("onPlay");b.next()}},pause:function(){if(!h&&!k)return c;
var f=d.Event("onBeforePause");j.trigger(f);if(f.isDefaultPrevented())return c;h=clearInterval(h);k=clearInterval(k);j.trigger("onPause")},stop:function(){c.pause();n=true}});d.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(f,e){d.isFunction(arg_a[e])&&c.bind(e,arg_a[e]);c[e]=function(s){return c.bind(e,s)}});if(arg_a.autopause){var t=b.getTabs().add(o).add(l).add(b.getPanes());t.hover(function(){c.pause();m=clearInterval(m)},function(){n||(m=setTimeout(c.play,arg_a.interval))})}if(arg_a.autoplay)k=
setTimeout(c.play,arg_a.interval);else c.stop();arg_a.clickable&&b.getPanes().click(function(){b.next()});if(!b.getConf().rotate){var i=arg_a.disabledClass;b.getIndex()||l.addClass(i);b.onBeforeClick(function(f,e){if(e){l.removeClass(i);e==b.getTabs().length-1?o.addClass(i):o.removeClass(i)}else l.addClass(i)})}}var q;q=d.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3E3,clickable:true,api:false}};d.fn.slideshow=function(g){var a=
this.data("slideshow");if(a)return a;g=d.extend({},q.conf,g);this.each(function(){a=new r(d(this),g);d(this).data("slideshow",a)});return g.api?a:this}})(jQuery);
(function(f){function p(arg_a,arg_b,arg_c){var h=arg_c.relative?arg_a.position().top:arg_a.offset().top,e=arg_c.relative?arg_a.position().left:arg_a.offset().left,i=arg_c.position[0];h-=arg_b.outerHeight()-arg_c.offset[0];e+=arg_a.outerWidth()+arg_c.offset[1];var j=arg_b.outerHeight()+arg_a.outerHeight();if("center" == i)h+=j/2;if("bottom" == i)h+=j;i=arg_c.position[1];arg_a=arg_b.outerWidth()+arg_a.outerWidth();if("center" == i)e-=arg_a/2;if("left" == i)e-=arg_a;return{top:h,left:e}}function u(arg_a,arg_b){var c=this,h=arg_a.add(c),e,i=0,j=0,m=arg_a.attr("title"),q=arg_a.attr("data-tooltip"),r=n[arg_b.effect],l,s=
arg_a.is(":input"),v=s&&arg_a.is(":checkbox, :radio, select, :button, :submit"),t=arg_a.attr("type"),k=arg_b.events[t]||arg_b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+arg_b.effect+'"';k=k.split(/,\s*/);if(2 != k.length)throw"Tooltip: bad events configuration for "+t;arg_a.bind(k[0],function(d){clearTimeout(i);if(arg_b.predelay)j=setTimeout(function(){c.show(d)},arg_b.predelay);else c.show(d)}).bind(k[1],function(d){clearTimeout(j);if(arg_b.delay)i=setTimeout(function(){c.hide(d)},arg_b.delay);else c.hide(d)});if(m&&
arg_b.cancelDefault){arg_a.removeAttr("title");arg_a.data("title",m)}f.extend(c,{show:function(d){if(!e){if(q)e=f(q);else if(m)e=f(arg_b.layout).addClass(arg_b.tipClass).appendTo(document.body).hide().append(m);else if(arg_b.tip)e=f(arg_b.tip).eq(0);else{e=arg_a.next();e.length||(e=arg_a.parent().next())}if(!e.length)throw"Cannot find tooltip for "+arg_a;}if(c.isShown())return c;e.stop(true,true);var g=p(arg_a,e,arg_b);d=d||f.Event();d.type="onBeforeShow";h.trigger(d,[g]);if(d.isDefaultPrevented())return c;g=p(arg_a,e,arg_b);e.css({position:"absolute",
top:g.top,left:g.left});l=true;r[0].call(c,function(){d.type="onShow";l="full";h.trigger(d)});g=arg_b.events.tooltip.split(/,\s*/);e.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!arg_a.is("input:not(:checkbox, :radio), textarea")&&e.bind(g[1],function(o){o.relatedTarget!=arg_a[0]&&arg_a.trigger(k[1].split(" ")[0])});return c},hide:function(d){if(!e||!c.isShown())return c;d=d||f.Event();d.type="onBeforeHide";h.trigger(d);if(!d.isDefaultPrevented()){l=false;n[arg_b.effect][1].call(c,function(){d.type="onHide";
h.trigger(d)});return c}},isShown:function(d){return d?"full" == l:l},getConf:function(){return arg_b},getTip:function(){return e},getTrigger:function(){return arg_a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(d,g){f.isFunction(arg_b[g])&&f(c).bind(g,arg_b[g]);c[g]=function(o){f(c).bind(g,o);return c}})}f.tools=f.tools||{version:"1.2.4"};f.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,
events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){n[a]=[b,c]}};var n={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;1 > b&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,
a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if("string" == typeof a.position)a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h="+" == h?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);
(function(g){function j(arg_a){var c=g(window),d=c.width()+c.scrollLeft(),h=c.height()+c.scrollTop();return[arg_a.offset().top<=c.scrollTop(),d<=arg_a.offset().left+arg_a.width(),h<=arg_a.offset().top+arg_a.height(),c.scrollLeft()>=arg_a.offset().left]}function k(arg_a){for(var c=arg_a.length;c--;)if(arg_a[c])return false;return true}var i=g.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};g.fn.dynamic=function(a){if("number" == typeof a)a={speed:a};a=g.extend({},i.dynamic.conf,a);var c=a.classNames.split(/\s/),d;this.each(function(){var h=
g(this).tooltip().onBeforeShow(function(e,f){e=this.getTip();var b=this.getConf();d||(d=[b.position[0],b.position[1],b.offset[0],b.offset[1],g.extend({},b)]);g.extend(b,d[4]);b.position=[d[0],d[1]];b.offset=[d[2],d[3]];e.css({visibility:"hidden",position:"absolute",top:f.top,left:f.left}).show();f=j(e);if(!k(f)){if(f[2]){g.extend(b,a.top);b.position[0]="top";e.addClass(c[0])}if(f[3]){g.extend(b,a.right);b.position[1]="right";e.addClass(c[1])}if(f[0]){g.extend(b,a.bottom);b.position[0]="bottom";e.addClass(c[2])}if(f[1]){g.extend(b,
a.left);b.position[1]="left";e.addClass(c[3])}if(f[0]||f[2])b.offset[0]*=-1;if(f[1]||f[3])b.offset[1]*=-1}e.css({visibility:"visible"}).hide()});h.onBeforeShow(function(){var e=this.getConf();this.getTip();setTimeout(function(){e.position=[d[0],d[1]];e.offset=[d[2],d[3]]},0)});h.onHide(function(){var e=this.getTip();e.removeClass(a.classNames)});ret=h});return a.api?ret:this}})(jQuery);
(function(e){function n(arg_f,arg_c){var a=e(arg_c);return 2 > a.length?a:arg_f.parent().find(arg_c)}function t(arg_f,arg_c){var a=this,l=arg_f.add(a),g=arg_f.children(),k=0,m=arg_c.vertical;j||(j=a);if(1 < g.length)g=e(arg_c.items,arg_f);e.extend(a,{getConf:function(){return arg_c},getIndex:function(){return k},getSize:function(){return a.getItems().size()},getNaviButtons:function(){return o.add(p)},getRoot:function(){return arg_f},getItemWrap:function(){return g},getItems:function(){return g.children(arg_c.item).not("."+arg_c.clonedClass)},move:function(b,d){return a.seekTo(k+
b,d)},next:function(b){return a.move(1,b)},prev:function(b){return a.move(-1,b)},begin:function(b){return a.seekTo(0,b)},end:function(b){return a.seekTo(a.getSize()-1,b)},focus:function(){return j=a},addItem:function(b){b=e(b);if(arg_c.circular){g.children("."+arg_c.clonedClass+":last").before(b);g.children("."+arg_c.clonedClass+":first").replaceWith(b.clone().addClass(arg_c.clonedClass))}else g.append(b);l.trigger("onAddItem",[b]);return a},seekTo:function(b,d,h){b.jquery||(b*=1);if(arg_c.circular&&0 === b&&k==-1&&0 !== d)return a;if(!arg_c.circular&&0 > b||b>a.getSize()||b<-1)return a;var i=b;if(b.jquery)b=a.getItems().index(b);else i=a.getItems().eq(b);var q=e.Event("onBeforeSeek");if(!h){l.trigger(q,[b,d]);if(q.isDefaultPrevented()||!i.length)return a}i=m?{top:-i.position().top}:{left:-i.position().left};k=b;j=a;if(d===undefined)d=arg_c.speed;g.animate(i,d,arg_c.easing,h||function(){l.trigger("onSeek",[b])});return a}});e.each(["onBeforeSeek","onSeek","onAddItem"],function(b,d){e.isFunction(arg_c[d])&&e(a).bind(d,arg_c[d]);a[d]=function(h){e(a).bind(d,
h);return a}});if(arg_c.circular){var r=a.getItems().slice(-1).clone().prependTo(g),s=a.getItems().eq(1).clone().appendTo(g);r.add(s).addClass(arg_c.clonedClass);a.onBeforeSeek(function(b,d,h){if(!b.isDefaultPrevented())if(d==-1){a.seekTo(r,h,function(){a.end(0)});return b.preventDefault()}else d==a.getSize()&&a.seekTo(s,h,function(){a.begin(0)})});a.seekTo(0,0,function(){})}var o=n(arg_f,arg_c.prev).click(function(){a.prev()}),p=n(arg_f,arg_c.next).click(function(){a.next()});!arg_c.circular&&1 < a.getSize()&&a.onBeforeSeek(function(b,
d){setTimeout(function(){if(!b.isDefaultPrevented()){o.toggleClass(arg_c.disabledClass,0 >= d);p.toggleClass(arg_c.disabledClass,d>=a.getSize()-1)}},1)});arg_c.mousewheel&&e.fn.mousewheel&&arg_f.mousewheel(function(b,d){if(arg_c.mousewheel){a.move(0 > d?1:-1,arg_c.wheelSpeed||50);return false}});arg_c.keyboard&&e(document).bind("keydown.scrollable",function(b){if(!(!arg_c.keyboard||b.altKey||b.ctrlKey||e(b.target).is(":input")))if(!("static" != arg_c.keyboard&&j!=a)){var d=b.keyCode;if(m&&(38 == d||40 == d)){a.move(38 == d?-1:1);return b.preventDefault()}if(!m&&
(37 == d||39 == d)){a.move(37 == d?-1:1);return b.preventDefault()}}});arg_c.initialIndex&&a.seekTo(arg_c.initialIndex,0,function(){})}e.tools=e.tools||{version:"1.2.4"};e.tools.scrollable={conf:{activeClass:"active",circular:false,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:null,items:".items",keyboard:true,mousewheel:false,next:".next",prev:".prev",speed:400,vertical:false,wheelSpeed:0}};var j;e.fn.scrollable=function(f){var c=this.data("scrollable");if(c)return c;f=e.extend({},
e.tools.scrollable.conf,f);this.each(function(){c=new t(e(this),f);e(this).data("scrollable",c)});return f.api?c:this}})(jQuery);
(function(c){var g=c.tools.scrollable;g.autoscroll={conf:{autoplay:true,interval:3E3,autopause:true}};c.fn.autoscroll=function(d){if("number" == typeof d)d={interval:d};var b=c.extend({},g.autoscroll.conf,d),h;this.each(function(){var a=c(this).data("scrollable");if(a)h=a;var e,i,f=true;a.play=function(){if(!e){f=false;e=setInterval(function(){a.next()},b.interval);a.next()}};a.pause=function(){e=clearInterval(e)};a.stop=function(){a.pause();f=true};b.autopause&&a.getRoot().add(a.getNaviButtons()).hover(function(){a.pause();
clearInterval(i)},function(){f||(i=setTimeout(a.play,b.interval))});b.autoplay&&setTimeout(a.play,b.interval)});return b.api?h:this}})(jQuery);
(function(d){function p(arg_b,arg_g){var h=d(arg_g);return 2 > h.length?h:arg_b.parent().find(arg_g)}var m=d.tools.scrollable;m.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:false,idPrefix:null,history:false}};d.fn.navigator=function(b){if("string" == typeof b)b={navi:b};b=d.extend({},m.navigator.conf,b);var g;this.each(function(){function h(arg_a,vc,arg_i){e.seekTo(vc);if(j){if(location.hash)location.hash=arg_a.attr("href").replace("#","")}else return arg_i.preventDefault()}function f(){return k.find(b.naviItem||
"> *")}function n(arg_a){var c=d("<"+(b.naviItem||"a")+"/>").click(function(i){h(d(this),arg_a,i)}).attr("href","#"+arg_a);0 === arg_a&&c.addClass(l);b.indexed&&c.text(arg_a+1);b.idPrefix&&c.attr("id",b.idPrefix+arg_a);return c.appendTo(k)}function o(arg_a,arg_c){arg_a=f().eq(arg_c.replace("#",""));arg_a.length||(arg_a=f().filter("[href="+arg_c+"]"));arg_a.click()}var e=d(this).data("scrollable"),k=b.navi.jquery?b.navi:p(e.getRoot(),b.navi),q=e.getNaviButtons(),l=b.activeClass,j=b.history&&d.fn.history;if(e)g=e;e.getNaviButtons=function(){return q.add(k)};
f().length?f().each(function(a){d(this).click(function(c){h(d(this),a,c)})}):d.each(e.getItems(),function(a){n(a)});e.onBeforeSeek(function(a,c){setTimeout(function(){if(!a.isDefaultPrevented()){var i=f().eq(c);!a.isDefaultPrevented()&&i.length&&f().removeClass(l).eq(c).addClass(l)}},1)});e.onAddItem(function(a,c){c=n(e.getItems().index(c));j&&c.history(o)});j&&f().history(o)});return b.api?g:this}})(jQuery);
(function(a){function t(arg_d,arg_b){var c=this,i=arg_d.add(c),o=a(window),k,f,m,g=a.tools.expose&&(arg_b.mask||arg_b.expose),n=Math.random().toString().slice(10);if(g){if("string" == typeof g)g={color:g};g.closeOnClick=g.closeOnEsc=false}var p=arg_b.target||arg_d.attr("rel");f=p?a(p):arg_d;if(!f.length)throw"Could not find Overlay: "+p;arg_d&&arg_d.index(f)==-1&&arg_d.click(function(e){c.load(e);return e.preventDefault()});a.extend(c,{load:function(e){if(c.isOpened())return c;var h=q[arg_b.effect];if(!h)throw'Overlay: cannot find effect : "'+arg_b.effect+
'"';arg_b.oneInstance&&a.each(s,function(){this.close(e)});e=e||a.Event();e.type="onBeforeLoad";i.trigger(e);if(e.isDefaultPrevented())return c;m=true;g&&a(f).expose(g);var j=arg_b.top,r=arg_b.left,u=f.outerWidth({margin:true}),v=f.outerHeight({margin:true});if("string" == typeof j)j="center" == j?Math.max((o.height()-v)/2,0):parseInt(j,10)/100*o.height();if("center" == r)r=Math.max((o.width()-u)/2,0);h[0].call(c,{top:j,left:r},function(){if(m){e.type="onLoad";i.trigger(e)}});g&&arg_b.closeOnClick&&a.mask.getMask().one("click",
c.close);arg_b.closeOnClick&&a(document).bind("click."+n,function(l){a(l.target).parents(f).length||c.close(l)});arg_b.closeOnEsc&&a(document).bind("keydown."+n,function(l){27 == l.keyCode&&c.close(l)});return c},close:function(e){if(!c.isOpened())return c;e=e||a.Event();e.type="onBeforeClose";i.trigger(e);if(!e.isDefaultPrevented()){m=false;q[arg_b.effect][1].call(c,function(){e.type="onClose";i.trigger(e)});a(document).unbind("click."+n).unbind("keydown."+n);g&&a.mask.close();return c}},getOverlay:function(){return f},
getTrigger:function(){return arg_d},getClosers:function(){return k},isOpened:function(){return m},getConf:function(){return arg_b}});a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(e,h){a.isFunction(arg_b[h])&&a(c).bind(h,arg_b[h]);c[h]=function(j){a(c).bind(h,j);return c}});k=f.find(arg_b.close||".close");if(!k.length&&!arg_b.close){k=a('<a class="close"></a>');f.prepend(k)}k.click(function(e){c.close(e)});arg_b.load&&c.load()}a.tools=a.tools||{version:"1.2.4"};a.tools.overlay={addEffect:function(d,
b,c){q[d]=[b,c]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||6 < a.browser.version,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var s=[],q={};a.tools.overlay.addEffect("default",function(d,b){var c=this.getConf(),i=a(window);if(!c.fixed){d.top+=i.scrollTop();d.left+=i.scrollLeft()}d.position=c.fixed?"fixed":"absolute";this.getOverlay().css(d).fadeIn(c.speed,b)},function(d){this.getOverlay().fadeOut(this.getConf().closeSpeed,
d)});a.fn.overlay=function(d){var b=this.data("overlay");if(b)return b;if(a.isFunction(d))d={onBeforeLoad:d};d=a.extend(true,{},a.tools.overlay.conf,d);this.each(function(){b=new t(a(this),d);s.push(b);a(this).data("overlay",b)});return d.api?b:this}})(jQuery);
(function(i){function j(arg_b){var d=arg_b.offset();return{top:d.top+arg_b.height()/2,left:d.left+arg_b.width()/2}}var k=i.tools.overlay,f=i(window);i.extend(k.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function n(arg_b,arg_d){var a=this.getOverlay(),c=this.getConf(),g=this.getTrigger(),o=this,l=a.outerWidth({margin:true}),h=a.data("img");if(!h){var e=a.css("backgroundImage");if(!e)throw"background-image CSS property not set for overlay";e=e.slice(e.indexOf("(")+1,e.indexOf(")")).replace(/\"/g,"");
a.css("backgroundImage","none");h=i('<img src="'+e+'"/>');h.css({border:0,display:"none"}).width(l);i("body").append(h);a.data("img",h)}e=c.start.top||Math.round(f.height()/2);var m=c.start.left||Math.round(f.width()/2);if(g){g=j(g);e=g.top;m=g.left}h.css({position:"absolute",top:e,left:m,width:0,zIndex:c.zIndex}).show();arg_b.top+=f.scrollTop();arg_b.left+=f.scrollLeft();arg_b.position="absolute";a.css(arg_b);h.animate({top:a.css("top"),left:a.css("left"),width:l},c.speed,function(){if(c.fixed){arg_b.top-=f.scrollTop();
arg_b.left-=f.scrollLeft();arg_b.position="fixed";h.add(a).css(arg_b)}a.css("zIndex",c.zIndex+1).fadeIn(c.fadeInSpeed,function(){o.isOpened()&&!i(this).index(a)?arg_d.call():a.hide()})})}function p(arg_b){var d=this.getOverlay().hide(),a=this.getConf(),c=this.getTrigger();d=d.data("img");var g={top:a.start.top,left:a.start.left,width:0};c&&i.extend(g,j(c));a.fixed&&d.css({position:"absolute"}).animate({top:"+="+f.scrollTop(),left:"+="+f.scrollLeft()},0);d.animate(g,a.closeSpeed,arg_b)}k.addEffect("apple",n,p)})(jQuery);
(function(d){function R(arg_b,arg_c){return 32-(new Date(arg_b,arg_c,32)).getDate()}function S(arg_b,arg_c){arg_b=""+arg_b;for(arg_c=arg_c||2;arg_b.length<arg_c;)arg_b="0"+arg_b;return arg_b}function T(arg_b,arg_c,arg_i){var p=arg_b.getDate(),h=arg_b.getDay(),q=arg_b.getMonth();arg_b=arg_b.getFullYear();var f={d:p,dd:S(p),ddd:B[arg_i].shortDays[h],dddd:B[arg_i].days[h],m:q+1,mm:S(q+1),mmm:B[arg_i].shortMonths[q],mmmm:B[arg_i].months[q],yy:String(arg_b).slice(2),yyyy:arg_b};arg_c=arg_c.replace(X,function(r){return r in f?f[r]:r.slice(1,r.length-1)});return Y.html(arg_c).html()}function y(arg_b){return parseInt(arg_b,10)}function U(arg_b,
arg_c){return arg_b.getFullYear()===arg_c.getFullYear()&&arg_b.getMonth()==arg_c.getMonth()&&arg_b.getDate()==arg_c.getDate()}function C(arg_a){if(arg_a){if(arg_a.constructor==Date)return arg_a;if("string" == typeof arg_a){var c=arg_a.split("-");if(3 == c.length)return new Date(y(c[0]),y(c[1])-1,y(c[2]));if(!/^-?\d+$/.test(arg_a))return;arg_a=y(arg_a)}c=new Date;c.setDate(c.getDate()+arg_a);return c}}function Z(arg_b,arg_c){function i(arg_a,arg_e,arg_g){m=arg_a;D=arg_a.getFullYear();E=arg_a.getMonth();G=arg_a.getDate();arg_g=arg_g||d.Event("api");arg_g.type="change";H.trigger(arg_g,[arg_a]);if(!arg_g.isDefaultPrevented()){arg_b.val(T(arg_a,
arg_e.format,arg_e.lang));arg_b.data("date",arg_a);h.hide(arg_g)}}function p(arg_a){arg_a.type="onShow";H.trigger(arg_a);d(document).bind("keydown.d",function(e){if(e.ctrlKey)return true;var g=e.keyCode;if(8 == g){arg_b.val("");return h.hide(e)}if(27 == g)return h.hide(e);if(0 <= d(V).index(g)){if(!v){h.show(e);return e.preventDefault()}var j=d("#"+f.weeks+" a"),s=d("."+f.focus),n=j.index(s);s.removeClass(f.focus);if(74 == g||40 == g)n+=7;else if(75 == g||38 == g)n-=7;else if(76 == g||39 == g)n+=1;else if(72 == g||37 == g)n-=1;if(41 < n){h.addMonth();s=d("#"+
f.weeks+" a:eq("+(n-42)+")")}else if(0 > n){h.addMonth(-1);s=d("#"+f.weeks+" a:eq("+(n+42)+")")}else s=j.eq(n);s.addClass(f.focus);return e.preventDefault()}if(34 == g)return h.addMonth();if(33 == g)return h.addMonth(-1);if(36 == g)return h.today();if(13 == g)d(e.target).is("select")||d("."+f.focus).click();return 0 <= d([16,17,18,9]).index(g)});d(document).bind("click.d",function(e){var g=e.target;if(!d(g).parents("#"+f.root).length&&g!=arg_b[0]&&(!L||g!=L[0]))h.hide(e)})}var h=this,q=new Date,f=arg_c.css,r=B[arg_c.lang],
k=d("#"+f.root),M=k.find("#"+f.title),L,I,J,D,E,G,m=arg_b.attr("data-value")||arg_c.value||arg_b.val(),o=arg_b.attr("min")||arg_c.min,t=arg_b.attr("max")||arg_c.max,v;if(0 === o)o="0";m=C(m)||q;o=C(o||arg_c.yearRange[0]*365);t=C(t||arg_c.yearRange[1]*365);if(!r)throw"Dateinput: invalid language: "+arg_c.lang;if("date" == arg_b.attr("type")){var N=d("<input/>");d.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(a,e){N.attr(e,arg_b.attr(e))});arg_b.replaceWith(N);arg_b=N}arg_b.addClass(f.input);var H=
arg_b.add(h);if(!k.length){k=d("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",f.root);k.children().eq(0).attr("id",f.head).end().eq(1).attr("id",f.body).children().eq(0).attr("id",f.days).end().eq(1).attr("id",f.weeks).end().end().end().find("a").eq(0).attr("id",f.prev).end().eq(1).attr("id",f.next);M=k.find("#"+f.head).find("div").attr("id",f.title);if(arg_c.selectors){var z=d("<select/>").attr("id",f.month),A=d("<select/>").attr("id",f.year);M.append(z.add(A))}for(var $=
k.find("#"+f.days),O=0;7 > O;O++)$.append(d("<span/>").text(r.shortDays[(O+arg_c.firstDay)%7]));d("body").append(k)}if(arg_c.trigger)L=d("<a/>").attr("href","#").addClass(f.trigger).click(function(a){h.show();return a.preventDefault()}).insertAfter(arg_b);var K=k.find("#"+f.weeks);A=k.find("#"+f.year);z=k.find("#"+f.month);d.extend(h,{show:function(a){if(!(arg_b.is("[readonly]")||v)){a=a||d.Event();a.type="onBeforeShow";H.trigger(a);if(!a.isDefaultPrevented()){d.each(W,function(){this.hide()});v=true;z.unbind("change").change(function(){h.setValue(A.val(),
d(this).val())});A.unbind("change").change(function(){h.setValue(d(this).val(),z.val())});I=k.find("#"+f.prev).unbind("click").click(function(){I.hasClass(f.disabled)||h.addMonth(-1);return false});J=k.find("#"+f.next).unbind("click").click(function(){J.hasClass(f.disabled)||h.addMonth();return false});h.setValue(m);var e=arg_b.position();k.css({top:e.top+arg_b.outerHeight({margins:true})+arg_c.offset[0],left:e.left+arg_c.offset[1]});if(arg_c.speed)k.show(arg_c.speed,function(){p(a)});else{k.show();p(a)}return h}}},setValue:function(a,
e,g){var j;if(parseInt(e,10)>=-1){a=y(a);e=y(e);g=y(g);j=new Date(a,e,g)}else{j=a||m;a=j.getFullYear();e=j.getMonth();g=j.getDate()}if(e==-1){e=11;a--}else if(12 == e){e=0;a++}if(!v){i(j,arg_c);return h}E=e;D=a;g=new Date(a,e,1-arg_c.firstDay);g=g.getDay();var s=R(a,e),n=R(a,e-1),P;if(arg_c.selectors){z.empty();d.each(r.months,function(w,F){o<new Date(a,w+1,-1)&&t>new Date(a,w,0)&&z.append(d("<option/>").html(F).attr("value",w))});A.empty();j=q.getFullYear();for(var l=j+arg_c.yearRange[0];l<j+arg_c.yearRange[1];l++)o<
new Date(l+1,-1,0)&&t>new Date(l,0,0)&&A.append(d("<option/>").text(l));z.val(e);A.val(a)}else M.html(r.months[e]+" "+a);K.empty();I.add(J).removeClass(f.disabled);l=!g?-7:0;for(var u,x;l<(!g?35:42);l++){u=d("<a/>");if(0 === l % 7){P=d("<div/>").addClass(f.week);K.append(P)}if(l<g){u.addClass(f.off);x=n-g+l+1;j=new Date(a,e-1,x)}else if(l>=g+s){u.addClass(f.off);x=l-s-g+1;j=new Date(a,e+1,x)}else{x=l-g+1;j=new Date(a,e,x);if(U(m,j))u.attr("id",f.current).addClass(f.focus);else U(q,j)&&u.attr("id",f.today)}o&&
j<o&&u.add(I).addClass(f.disabled);t&&j>t&&u.add(J).addClass(f.disabled);u.attr("href","#"+x).text(x).data("date",j);P.append(u)}K.find("a").click(function(w){var F=d(this);if(!F.hasClass(f.disabled)){d("#"+f.current).removeAttr("id");F.attr("id",f.current);i(F.data("date"),arg_c,w)}return false});f.sunday&&K.find(f.week).each(function(){var w=arg_c.firstDay?7-arg_c.firstDay:0;d(this).children().slice(w,w+1).addClass(f.sunday)});return h},setMin:function(a,e){o=C(a);e&&m<o&&h.setValue(o);return h},setMax:function(a,
e){t=C(a);e&&m>t&&h.setValue(t);return h},today:function(){return h.setValue(q)},addDay:function(a){return this.setValue(D,E,G+(a||1))},addMonth:function(a){return this.setValue(D,E+(a||1),G)},addYear:function(a){return this.setValue(D+(a||1),E,G)},hide:function(a){if(v){a=d.Event();a.type="onHide";H.trigger(a);d(document).unbind("click.d").unbind("keydown.d");if(a.isDefaultPrevented())return;k.hide();v=false}return h},getConf:function(){return arg_c},getInput:function(){return arg_b},getCalendar:function(){return k},
getValue:function(a){return a?T(m,a,arg_c.lang):m},isOpen:function(){return v}});d.each(["onBeforeShow","onShow","change","onHide"],function(a,e){d.isFunction(arg_c[e])&&d(h).bind(e,arg_c[e]);h[e]=function(g){d(h).bind(e,g);return h}});arg_b.bind("focus click",h.show).keydown(function(a){var e=a.keyCode;if(!v&&0 <= d(V).index(e)){h.show(a);return a.preventDefault()}return a.shiftKey||a.ctrlKey||a.altKey||9 == e?true:a.preventDefault()});C(arg_b.val())&&i(m,arg_c)}d.tools=d.tools||{version:"1.2.4"};var W=[],Q,V=[75,76,38,39,
74,72,40,37],B={};Q=d.tools.dateinput={conf:{format:"mm/dd/yy",selectors:false,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:undefined,max:undefined,trigger:false,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},localize:function(b,c){d.each(c,function(i,p){c[i]=p.split(",")});B[b]=c}};Q.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var X=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,Y=d("<a/>");d.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&"date" == c||!!d(b).data("dateinput")};d.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=d.extend(true,{},Q.conf,b);d.each(b.css,function(i,p){if(!p&&"prefix" != i)b.css[i]=(b.css.prefix||"")+
(p||i)});var c;this.each(function(){var i=new Z(d(this),b);W.push(i);i=i.getInput().data("dateinput",i);c=c?c.add(i):i});return c?c:this}})(jQuery);
(function(e){function F(arg_d,arg_a){arg_a=Math.pow(10,arg_a);return Math.round(arg_d*arg_a)/arg_a}function p(arg_d,arg_a){if(arg_a=parseInt(arg_d.css(arg_a),10))return arg_a;return(arg_d=arg_d[0].currentStyle)&&arg_d.width&&parseInt(arg_d.width,10)}function C(arg_d){return(arg_d=arg_d.data("events"))&&arg_d.onSlide}function G(arg_d,arg_a){function h(arg_c,arg_b,arg_f,arg_j){if(arg_f===undefined)arg_f=arg_b/k*z;else if(arg_j)arg_f-=arg_a.min;if(r)arg_f=Math.round(arg_f/r)*r;if(arg_b===undefined||r)arg_b=arg_f*k/z;if(isNaN(arg_f))return g;arg_b=Math.max(0,Math.min(arg_b,k));arg_f=arg_b/k*z;if(arg_j||!n)arg_f+=arg_a.min;if(n)if(arg_j)arg_b=k-arg_b;else arg_f=arg_a.max-arg_f;arg_f=F(arg_f,t);var q="click" == arg_c.type;
if(D&&l!==undefined&&!q){arg_c.type="onSlide";A.trigger(arg_c,[arg_f,arg_b]);if(arg_c.isDefaultPrevented())return g}arg_j=q?arg_a.speed:0;q=q?function(){arg_c.type="change";A.trigger(arg_c,[arg_f])}:null;if(n){m.animate({top:arg_b},arg_j,q);arg_a.progress&&B.animate({height:k-arg_b+m.width()/2},arg_j)}else{m.animate({left:arg_b},arg_j,q);arg_a.progress&&B.animate({width:arg_b+m.width()/2},arg_j)}l=arg_f;H=arg_b;arg_d.val(arg_f);return g}function s(){if(n=arg_a.vertical||p(i,"height")>p(i,"width")){k=p(i,"height")-p(m,"height");u=i.offset().top+k}else{k=p(i,"width")-p(m,"width");u=i.offset().left}}
function v(){s();g.setValue(arg_a.value||arg_a.min)}var g=this,o=arg_a.css,i=e("<div><div/><a href='#'/></div>").data("rangeinput",g),n,l,u,k,H;arg_d.before(i);var m=i.addClass(o.slider).find("a").addClass(o.handle),B=i.find("div").addClass(o.progress);e.each("min,max,step,value".split(","),function(c,b){c=arg_d.attr(b);if(parseFloat(c))arg_a[b]=parseFloat(c,10)});var z=arg_a.max-arg_a.min,r="any" == arg_a.step?0:arg_a.step,t=arg_a.precision;if(t===undefined)try{t=r.toString().split(".")[1].length}catch(I){t=0}if("range" == arg_d.attr("type")){var w=
e("<input/>");e.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(c,b){w.attr(b,arg_d.attr(b))});w.val(arg_a.value);arg_d.replaceWith(w);arg_d=w}arg_d.addClass(o.input);var A=e(g).add(arg_d),D=true;e.extend(g,{getValue:function(){return l},setValue:function(c,b){return h(b||e.Event("api"),undefined,c,true)},getConf:function(){return arg_a},getProgress:function(){return B},getHandle:function(){return m},getInput:function(){return arg_d},step:function(c,b){b=b||e.Event();
var f="any" == arg_a.step?1:arg_a.step;g.setValue(l+f*(c||1),b)},stepUp:function(c){return g.step(c||1)},stepDown:function(c){return g.step(-c||-1)}});e.each("onSlide,change".split(","),function(c,b){e.isFunction(arg_a[b])&&e(g).bind(b,arg_a[b]);g[b]=function(f){e(g).bind(b,f);return g}});m.drag({drag:false}).bind("dragStart",function(){D=C(e(g))||C(arg_d)}).bind("drag",function(c,b,f){if(arg_d.is(":disabled"))return false;h(c,n?b:f)}).bind("dragEnd",function(c){if(!c.isDefaultPrevented()){c.type="change";A.trigger(c,[l])}}).click(function(c){return c.preventDefault()});
i.click(function(c){if(arg_d.is(":disabled")||c.target==m[0])return c.preventDefault();s();var b=m.width()/2;h(c,n?k-u-b+c.pageY:c.pageX-u-b)});arg_a.keyboard&&arg_d.keydown(function(c){if(!arg_d.attr("readonly")){var b=c.keyCode,f=e([75,76,38,33,39]).index(b)!=-1,j=e([74,72,40,34,37]).index(b)!=-1;if((f||j)&&!(c.shiftKey||c.altKey||c.ctrlKey)){if(f)g.step(33 == b?10:1,c);else if(j)g.step(34 == b?-10:-1,c);return c.preventDefault()}}});arg_d.blur(function(c){var b=e(this).val();b!==l&&g.setValue(b,c)});e.extend(arg_d[0],{stepUp:g.stepUp,
stepDown:g.stepDown});v();k||e(window).load(v)}e.tools=e.tools||{version:"1.2.4"};var E;E=e.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:true,progress:false,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var x,y;e.fn.drag=function(d){document.ondragstart=function(){return false};d=e.extend({x:true,y:true,drag:true},d);x=x||e(document).bind("mousedown mouseup",function(a){var h=e(a.target);if("mousedown" == a.type&&
h.data("drag")){var s=h.position(),v=a.pageX-s.left,g=a.pageY-s.top,o=true;x.bind("mousemove.drag",function(i){var n=i.pageX-v;i=i.pageY-g;var l={};if(d.x)l.left=n;if(d.y)l.top=i;if(o){h.trigger("dragStart");o=false}d.drag&&h.css(l);h.trigger("drag",[i,n]);y=h});a.preventDefault()}else try{y&&y.trigger("dragEnd")}finally{x.unbind("mousemove.drag");y=null}});return this.data("drag",true)};e.expr[":"].range=function(d){var a=d.getAttribute("type");return a&&"range" == a||!!e(d).filter("input").data("rangeinput")};
e.fn.rangeinput=function(d){if(this.data("rangeinput"))return this;d=e.extend(true,{},E.conf,d);var a;this.each(function(){var h=new G(e(this),e.extend(true,{},d));h=h.getInput().data("rangeinput",h);a=a?a.add(h):h});return a?a:this}})(jQuery);
(function(e){function t(arg_a,arg_b,arg_c){var k=arg_a.offset().top,f=arg_a.offset().left,l=arg_c.position.split(/,?\s+/),p=l[0];l=l[1];k-=arg_b.outerHeight()-arg_c.offset[0];f+=arg_a.outerWidth()+arg_c.offset[1];arg_c=arg_b.outerHeight()+arg_a.outerHeight();if("center" == p)k+=arg_c/2;if("bottom" == p)k+=arg_c;arg_a=arg_a.outerWidth();if("center" == l)f-=(arg_a+arg_b.outerWidth())/2;if("left" == l)f-=arg_a;return{top:k,left:f}}function x(arg_a){function b(){return this.getAttribute("type")==arg_a}b.key="[type="+arg_a+"]";return b}function u(arg_a,arg_b,arg_c){function k(arg_g,arg_d,arg_j){if(!(!arg_c.grouped&&arg_g.length)){var h;
if(false === arg_j||e.isArray(arg_j)){h=i.messages[arg_d.key||arg_d]||i.messages["*"];h=h[arg_c.lang]||i.messages["*"].en;(arg_d=h.match(/\$\d/g))&&e.isArray(arg_j)&&e.each(arg_d,function(n){h=h.replace(this,arg_j[n])})}else h=arg_j[arg_c.lang]||arg_j;arg_g.push(h)}}var f=this,l=arg_b.add(f);arg_a=arg_a.not(":button, :image, :reset, :submit");e.extend(f,{getConf:function(){return arg_c},getForm:function(){return arg_b},getInputs:function(){return arg_a},reflow:function(){arg_a.each(function(){var g=e(this),d=g.data("msg.el");if(d){g=t(g,d,arg_c);d.css({top:g.top,left:g.left})}});return f},
invalidate:function(g,d){if(!d){var j=[];e.each(g,function(h,n){h=arg_a.filter("[name='"+h+"']");if(h.length){h.trigger("OI",[n]);j.push({input:h,messages:[n]})}});g=j;d=e.Event()}d.type="onFail";l.trigger(d,[g]);d.isDefaultPrevented()||r[arg_c.effect][0].call(f,g,d);return f},reset:function(g){g=g||arg_a;g.removeClass(arg_c.errorClass).each(function(){var d=e(this).data("msg.el");if(d){d.remove();e(this).data("msg.el",null)}}).unbind(arg_c.errorInputEvent||"");return f},destroy:function(){arg_b.unbind(arg_c.formEvent).unbind("reset.V");
arg_a.unbind(arg_c.inputEvent||"").unbind("change.V");return f.reset()},checkValidity:function(g,d){g=g||arg_a;g=g.not(":disabled");if(!g.length)return true;d=d||e.Event();d.type="onBeforeValidate";l.trigger(d,[g]);if(d.isDefaultPrevented())return d.result;var j=[],h=arg_c.errorInputEvent+".v";g.not(":radio:not(:checked)").each(function(){var q=[],m=e(this).unbind(h).data("messages",q);e.each(v,function(){var o=this,s=o[0];if(m.filter(s).length){o=o[1].call(f,m,m.val());if(true !== o){d.type="onBeforeFail";l.trigger(d,
[m,s]);if(d.isDefaultPrevented())return false;var w=m.attr(arg_c.messageAttr);if(w){q=[w];return false}else k(q,s,o)}}});if(q.length){j.push({input:m,messages:q});m.trigger("OI",[q]);arg_c.errorInputEvent&&m.bind(h,function(o){f.checkValidity(m,o)})}if(arg_c.singleError&&j.length)return false});var n=r[arg_c.effect];if(!n)throw'Validator: cannot find effect "'+arg_c.effect+'"';if(j.length){f.invalidate(j,d);return false}else{n[1].call(f,g,d);d.type="onSuccess";l.trigger(d,[g]);g.unbind(h)}return true}});e.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),
function(g,d){e.isFunction(arg_c[d])&&e(f).bind(d,arg_c[d]);f[d]=function(j){e(f).bind(d,j);return f}});arg_c.formEvent&&arg_b.bind(arg_c.formEvent,function(g){if(!f.checkValidity(null,g))return g.preventDefault()});arg_b.bind("reset.V",function(){f.reset()});arg_a[0]&&arg_a[0].validity&&arg_a.each(function(){this.oninvalid=function(){return false}});if(arg_b[0])arg_b[0].checkValidity=f.checkValidity;arg_c.inputEvent&&arg_a.bind(arg_c.inputEvent,function(g){f.checkValidity(e(this),g)});arg_a.filter(":checkbox, select").filter("[required]").bind("change.V",
function(g){var d=e(this);if(this.checked||d.is("select")&&e(this).val())r[arg_c.effect][1].call(f,d,g)});var p=arg_a.filter(":radio").change(function(g){f.checkValidity(p,g)});e(window).resize(function(){f.reflow()})}e.tools=e.tools||{version:"1.2.4"};var y=/\[type=([a-z]+)\]/,z=/^-?[0-9]*(\.[0-9]+)?$/,A=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,B=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#\?\/\w \.\-=]*$/i,i;i=e.tools.validator={conf:{grouped:false,effect:"default",errorClass:"invalid",inputEvent:null,
errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:false,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(a,b){e.each(b,function(c,k){i.messages[c]=i.messages[c]||{};i.messages[c][a]=k})},localizeFn:function(a,b){i.messages[a]=i.messages[a]||{};e.extend(i.messages[a],b)},fn:function(a,b,c){if(e.isFunction(b))c=b;else{if("string" == typeof b)b={en:b};this.messages[a.key||
a]=b}if(b=y.exec(a))a=x(b[1]);v.push([a,c])},addEffect:function(a,b,c){r[a]=[b,c]}};var v=[],r={"default":[function(a){var b=this.getConf();e.each(a,function(c,k){c=k.input;c.addClass(b.errorClass);var f=c.data("msg.el");if(!f){f=e(b.message).addClass(b.messageClass).appendTo(document.body);c.data("msg.el",f)}f.css({visibility:"hidden",display:"none"}).find("span").remove();e.each(k.messages,function(l,p){e("<span/>").html(p).appendTo(f)});f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});
k=t(c,f,b);f.css({visibility:"visible",position:"absolute",top:k.top,left:k.left}).fadeIn(b.speed)})},function(a){var b=this.getConf();a.removeClass(b.errorClass).each(function(){var c=e(this).data("msg.el");c&&c.css({visibility:"hidden"})})}]};e.each("email,url,number".split(","),function(a,b){e.expr[":"][b]=function(c){return c.getAttribute("type")===b}});e.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)};i.fn(":email","Please enter a valid email address",function(a,b){return!b||
A.test(b)});i.fn(":url","Please enter a valid URL",function(a,b){return!b||B.test(b)});i.fn(":number","Please enter a numeric value.",function(a,b){return z.test(b)});i.fn("[max]","Please enter a value smaller than $1",function(a,b){if("" === b||e.tools.dateinput&&a.is(":date"))return true;a=a.attr("max");return parseFloat(b)<=parseFloat(a)?true:[a]});i.fn("[min]","Please enter a value larger than $1",function(a,b){if("" === b||e.tools.dateinput&&a.is(":date"))return true;a=a.attr("min");return parseFloat(b)>=
parseFloat(a)?true:[a]});i.fn("[required]","Please complete this mandatory field.",function(a,b){if(a.is(":checkbox"))return a.is(":checked");return!!b});i.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())});e.fn.validator=function(a){var b=this.data("validator");if(b){b.destroy();this.removeData("validator")}a=e.extend(true,{},i.conf,a);if(this.is("form"))return this.each(function(){var c=e(this);b=new u(c.find(":input"),c,a);c.data("validator",b)});else{b=
new u(this,this.eq(0).closest("form"),a);return this.data("validator",b)}}})(jQuery);



if('undefined' === typeof GM_log){
  function GM_log() {
    //console.info(arguments);
    //location.href = "javascript:void(console.info('JSON.parse('"+JSON.stringify(arguments)+"')'));";
  }
}

if('undefined' === typeof console){
  var console = {
    info: function() {
      location.href = "javascript:void(console.group());";
      for(var i=0; i<arguments.length; i++){
        location.href = "javascript:void(console.info('"+arguments[i]+"'));";
      }
      location.href = "javascript:void(console.groupEnd());";
    },
    group: function() { location.href = "javascript:void(console.group());"; },
    groupEnd: function() { location.href = "javascript:void(console.groupEnd());"; }
  };
  console.info('console not defined');
}


if('undefined' === typeof GM_addStyle){
  function GM_addStyle(arg_css) {
    var head = document.getElementsByTagName("head")[0];
    if (head) {
      var style = document.createElement("style");
      style.textContent = arg_css;
      style.type = "text/css";
      head.appendChild(style);
    }
    return style;
  }
}

function debugLog()
{
  if (2 >= arguments.length) {
    console.group();
  }
//  if('undefined' !== typeof GM_log) {
//    if (1 == arguments.length) {
//      GM_log(arguments[0]);
//    }else {
//      GM_log(arguments.join('\n----\n'));
//    }
//  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
    if('undefined' !== typeof GM_log) { GM_log(arguments[i]); }
  }
  if (2 >= arguments.length) {
    console.groupEnd();
  }
}


function pageCodeDebugLog()
{
  if (2 >= arguments.length) {
    console.group();
  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
  }
  if (2 >= arguments.length) {
    console.groupEnd();
  }
}


function errorLog()
{
  if (2 >= arguments.length) {
    console.group();
  }
//  if('undefined' !== typeof GM_log) {
//    if (1 == arguments.length) {
//      GM_log(arguments[0]);
//    }else {
//      GM_log(arguments.join('\n----\n'));
//    }
//  }
  for (var i = 0; i < arguments.length; i++) {
    console.info(arguments[i]);
    if('undefined' !== typeof GM_log) { GM_log(arguments[i]); }
  }
  if (2 >= arguments.length) {
    console.groupEnd();
  }
}


function docEvaluate(arg_xpath)
{
  return document.evaluate(arg_xpath,
      document,
      null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
      null);
}

// Append zeros to the _input until the _desiredStringLength is reached
function padZeros(arg_input,arg_desiredStringLength)
{
  var currentLength = arg_input.toString().length;
  var output = arg_input;
  for(var i=0; i < (arg_desiredStringLength - currentLength); i++) {
    output = '0' + output;
  }
  return output;
}


// Function that merges objects, appending the contents of _newObj to the existing object
// * Runs infinitely levels deep
// * Does not completely overwrite the existing object's children, instead only overwrites/adds when it exists in the arg_newObj
function Object_merge(arg_oldObj, arg_newObj)
{
  if('object' !== typeof arg_oldObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_oldObj is not an Object!", arguments);
    return -1;
  }
  if('object' !== typeof arg_newObj) {
    errorLog("ERROR!\nObject_merge(arg_oldObj, arg_newObj)\n\narg_newObj is not an Object!", arguments);
    return -1;
  }

  // Loop through nodes that exist in the new object and add/replace them to the existing/old object
  for (var newVar in arg_newObj)
  {
    switch(typeof arg_newObj[newVar])
    {
      //If data is a value (boolean/string/number/function) then "update" it to the 'new' value (or add if not present)
      case "boolean":
      //Fall-through
      case "string":
      //Fall-through
      case "number":
        arg_oldObj[newVar] = arg_newObj[newVar];
        break;

      case "function":
        // stop the 'merge' function being copied
        // nb, applies when this function is added to object.prototype
        if('merge' !== newVar){
          arg_oldObj[newVar] = arg_newObj[newVar];
        }
        break;

      //Else if the data is an object, it will have sub-items of its own
      // run the merge() function on this object to recurse deeper and merge these sub-items.
      case "object":
        arg_oldObj[newVar] = arg_oldObj[newVar] || {};
        Object_merge(arg_oldObj[newVar], arg_newObj[newVar]);
        break;

      default:
        errorLog('Error! Object_merge(arg_oldObj, arg_newObj);\nCannot detect type of arg_newObj'+newVar+arg_newObj[newVar]+typeof arg_newObj[newVar]);
    }
  }
  return arg_oldObj;
}








if("true" !== localStorage.getItem('setupComplete') && true !== localStorage.getItem('setupComplete'))
{
  GM_addStyle('#shadowBackdrop { background-color: black; height: 100%; left: 0; opacity: 0.3; position: fixed; top: 0; width: 100%; }');
  GM_addStyle('#initialSetup { background-color: white; margin: 8em auto; padding: 2em; width: 30em; }');

  var shadowBackdrop = document.getElementById('shadowBackdrop');
  if(!shadowBackdrop)
  {
    shadowBackdrop = document.createElement('div');
    shadowBackdrop.id = "shadowBackdrop";
    shadowBackdrop.setAttribute('class',"overlay");

    shadowBackdrop.innerHTML = '';

    document.body.appendChild(shadowBackdrop);
  }

  var initialSetupDiv = document.getElementById('initialSetup');
  if(!initialSetupDiv)
  {
    initialSetupDiv = document.createElement('div');
    initialSetupDiv.id = "initialSetup";
    initialSetupDiv.setAttribute('class',"overlay");
  }

  initialSetupDiv.innerHTML = '' +
      '<strong>Spanghurt! Initial Setup</strong><br>' +
      '<br>' +
      '<hr>' +
      "To get the script up and running as quickly as possible you need to supply a few extra details about your account and how you manage it.<br>" +
      '<hr>' +
      '<br>' +
      'How many direct referrals do you have? <input id="initialSetup_directReferrals" size="4" value="0" type="text" /><br>' +
      'How many rented referrals do you have? <input id="initialSetup_rentedReferrals" size="4" value="0" type="text" /><br>' +
      'Do you use autopay? <input id="initialSetup_autopay" type="checkbox" /><br>' +
      '<br>' +
      'For how long do you usually renew your referrals? <select id="initialSetup_normalRenewalLength">' +
      '<option value="15">15 days (The "Base Rate")</option>' +
      '<option value="30" selected="selected">30 days (5% discount)</option>' +
      '<option value="60">60 days (10% discount)</option>' +
      '<option value="90">90 days (18% discount)</option>' +
      '<option value="150">150 days (25% discount)</option>' +
      '<option value="240">240 days (30% discount)</option>' +
      '</select> <br>' +
      '<br>' +
      'What is the time difference between your time and the server\'s time? <input id="initialSetup_timeDifference" size="4" value="" type="text" /><br>' +
      '<br>' +
      "<small><i>If you aren't sure about any of these, just click save and the script will automatically detect / correct these for you.</i></small>" +
      '<br>' +
      '<input id="initialSetup_save" value="Save Settings" type="button"/>' +
      '<input id="initialSetup_close" value="Close" type="button"/>' +
      '';

  var initialSetupWrapper = document.createElement('div');
  initialSetupWrapper.setAttribute('style','height: 100%; left: 0; position: absolute; top: 0; width: 100%;');
  initialSetupWrapper.appendChild(initialSetupDiv);

  document.body.appendChild(initialSetupWrapper);


  document.getElementById('initialSetup_save').addEventListener('click',function() {
    var tmp_directRefs = document.getElementById('initialSetup_directReferrals').value.match(/([0-9]+)/) || [,0];
    var tmp_rentedRefs = document.getElementById('initialSetup_rentedReferrals').value.match(/([0-9]+)/) || [,0];
    var tmp_autopay = document.getElementById('initialSetup_autopay').checked;
    var tmp_renewalLength = document.getElementById('initialSetup_normalRenewalLength').value;
    var tmp_timeDifference = document.getElementById('initialSetup_timeDifference').value.match(/([+-]?[0-9]+)/) || [,0];

    if(0 <= tmp_directRefs[1] &&
            0 <= tmp_directRefs[1] &&
            0 <= tmp_renewalLength &&
            (0 <= tmp_timeDifference[1] || 0 >= tmp_timeDifference[1])
        )
    {

      if(confirm('Please check that this is what you have entered then click okay to save it or cancel to retry:\n\n' +
          'Direct Referrals: ' + tmp_directRefs[1] + '\n' +
          'Rented Referrals '+tmp_directRefs[1]+'\n' +
          'Autopay On: '+tmp_autopay+'\n' +
          'Lenth of Renewals: '+tmp_renewalLength+'\n' +
          'Time Difference: '+tmp_timeDifference[1])
          )
      {

        localStorage.setItem('directReferrals', tmp_directRefs[1]);
        localStorage.setItem('rentedReferrals', tmp_directRefs[1]);
        localStorage.setItem('autopayCost', tmp_autopay);
        localStorage.setItem('renewalsLength', tmp_renewalLength);
        localStorage.setItem('serverTimeOffset', tmp_timeDifference[1]);

        localStorage.setItem('setupComplete', true);


        alert('Settings saved! The script will run on the next Neobux page that you load.');

        document.getElementById('shadowBackdrop').style.display = "none";
        document.getElementById('initialSetup').parentNode.style.display = "none";
      }
    }
    else{
      alert('There was an error with what you have entered. Please correct what you have entered and try again:\n\n' +
          'Direct Referrals: ' + tmp_directRefs[1] + '\n' +
          'Rented Referrals '+tmp_directRefs[1]+'\n' +
          'Autopay On: '+tmp_autopay+'\n' +
          'Lenth of Renewals: '+tmp_renewalLength+'\n' +
          'Time Difference: '+tmp_timeDifference[1]);
    }

  },false);

  document.getElementById('initialSetup_close').addEventListener('click',function() {
    document.getElementById('shadowBackdrop').style.display = "none";
    document.getElementById('initialSetup').parentNode.style.display = "none";
  },false);


  //stop the remainder of the script
  //return;
}



var dateToday = new Date();
var dateYesterday = new Date();
dateYesterday.setDate(dateToday.getDate() - 1);

// Date strings for the last 90 days
var dates_array = [];
var i=-720;
do
{
  var tmpDate = new Date();
  tmpDate.setDate(new Date().getDate() - i);
  dates_array[i] = tmpDate.getFullYear() + '/' + padZeros(tmpDate.getMonth()+1, 2) + '/' + padZeros(tmpDate.getDate(), 2);
  i++;

}while(90 >= i);

var TODAY_STRING = dates_array[0];
var YESTERDAY_STRING = dates_array[1];
var TOMORROW_STRING = dates_array[-1];


var Neobux = {};
Neobux.possibleAccTypes = [
  'Standard',
  'Golden',
  'Emerald',
  'Sapphire',
  'Platinum',
  'Diamond',
  'Ultimate',
  'Pioneer'
];

Neobux.accountDefaults =
{
  'minDaysForAutopay': {
    'Standard': 20,
    'Golden':   20,
    'Emerald':  20,
    'Sapphire': 18,
    'Platinum': 20,
    'Diamond':  14,
    'Ultimate': 10,
    'Pioneer':  20
  },

  'recycleCost': {
    'Standard': 0.07,
    'Golden':   0.07,
    'Emerald':  0.06,
    'Sapphire': 0.07,
    'Platinum': 0.06,
    'Diamond':  0.07,
    'Ultimate': 0.04,
    'Pioneer':  0.07
  },

  'goldenPackCost': {
    'Standard': 0,
    'Golden':   0,
    'Emerald':  290,
    'Sapphire': 290,
    'Platinum': 490,
    'Diamond':  490,
    'Ultimate': 890,
    'Pioneer':  0
  },

  // Values taken from the help files (quoted above)
  'autopayValues': {
    'Standard': [
      {'minRefs': 0, 'cost': 0.0075},
      {'minRefs': 251, 'cost': 0.0080},
      {'minRefs': 1001, 'cost': 0.0085},
      {'minRefs': 1251, 'cost': 0.0090},
      {'minRefs': 1751, 'cost': 0.0095}
    ],
    'Golden': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1001, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Emerald': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1251, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Sapphire': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 751, 'cost': 0.0065},
      {'minRefs': 1001, 'cost': 0.0070},
      {'minRefs': 1501, 'cost': 0.0075},
      {'minRefs': 1751, 'cost': 0.0080}
    ],
    'Platinum': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 501, 'cost': 0.0065},
      {'minRefs': 751, 'cost': 0.0070},
      {'minRefs': 1251, 'cost': 0.0075},
      {'minRefs': 1501, 'cost': 0.0080}
    ],
    'Diamond': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 1001, 'cost': 0.0065},
      {'minRefs': 1251, 'cost': 0.0070},
      {'minRefs': 1751, 'cost': 0.0075}
    ],
    'Pioneer': [
      {'minRefs': 0, 'cost': 0.0060},
      {'minRefs': 1251, 'cost': 0.0065},
      {'minRefs': 1501, 'cost': 0.0070}
    ]
  },

  'renewalFees': {
    15: -1,
    30: -1,
    60: -1,
    90: -1,
    150: -1,
    240: -1
  }
};

var defaultSettings =
{
  columnPrefixes: {
    flag: " | ",
    referralName: "",
    referralSince: "",
    nextPayment: "",
    lastClick: "",
    totalClicks: "",
    average: "",
    clickText: "",
    average1: "",
    average2: "",
    RSA: "",
    SD: "",
    profit: "$"
  },

  shrinkColumnContents: {
    flag: true,
    referralName: true,
    referralSince: true,
    nextPayment: true,
    lastClick: true,
    totalClicks: false,
    average: false,
    clickText: true,
    average1: true,
    average2: true,
    RSA: true,
    SD: true,
    profit: false
  },

  numeriseDates: {
    flag: null,
    referralName: null,
    referralSince: true,
    nextPayment: null,
    lastClick: true,
    totalClicks: null,
    average: null,
    clickText: null,
    average1: null,
    average2: null,
    RSA: null,
    SD: null,
    profit: null
  },

  shortFormatTimer: {
    flag: null,
    referralName: null,
    referralSince: true,
    nextPayment: null,
    lastClick: true,
    totalClicks: null,
    average: null,
    clickText: null,
    average1: null,
    average2: null,
    RSA: null,
    SD: null,
    profit: null
  },

  showColumn: {
    flag: true,
    referralName: true,
    referralSince: true,
    nextPayment: true,
    lastClick: true,
    totalClicks: true,
    average: true,
    clickText: true,
    average1: true,
    average2: true,
    RSA: true,
    SD: true,
    profit: true
  },

  numberOfRefs: {"Rented":-1,"Direct":-1},

  timePeriods: {
    smallGraph: [5,7,10],// Time Periods for 'smaller' 10day graphs
    largeGraph: [5,10,15],// Time Periods for larger 15day graphs
    recent: 7,// Time Period for 'recent' section of the Referral statistics sidebar
    minigraphs: 5,// Time Period for footer row clicks average
    averageCols: [10,7],// Time Period for the 'average1' & 'average2' column (previously defined as the A10&A7 column)
    extensionsGraph: [7,15,30,60,90]
  }
};

var friendlyNameLookup = {
  'ch_cliques': 'personalClicks',
  'ch_cr': 'rentedClicks',
  'ch_cd': 'directClicks',
  'ch_recycle': 'recycleCost',
  'ch_extensions': 'renewalCost',
  'ch_autopay': 'autopayCost',
  'ch_trrb': 'transfersToRentalBalance',

  'ch_earnings': 'referralEarnings',
  'ch_profit': 'referralProfit',
  'ch_trar': 'automaticRecycles',
  'ch_trpb': 'transferToPackBalance',

  'ch_ext_schedule8': 'extensions_631To720',
  'ch_ext_schedule7': 'extensions_541To630',
  'ch_ext_schedule6': 'extensions_451To540',
  'ch_ext_schedule5': 'extensions_361To450',
  'ch_ext_schedule4': 'extensions_271To360',
  'ch_ext_schedule3': 'extensions_181To270',
  'ch_ext_schedule2': 'extensions_91To180',
  'ch_ext_schedule1': 'extensions_0To90',
  'ch_ext_schedule': 'extensions'
};

var graphLengthLookup = {
  'ch_cliques': 10,
  'ch_cr': 10,
  'ch_cd': 10,
  'ch_recycle': 15,
  'ch_extensions': 15,
  'ch_autopay': 15,
  'ch_trrb': 15,

  'ch_earnings': 15,
  'ch_profit': 15,
  'ch_trar': 15,
  'ch_trpb': 15,

  'ch_ext_schedule8': 90,
  'ch_ext_schedule7': 90,
  'ch_ext_schedule6': 90,
  'ch_ext_schedule5': 90,
  'ch_ext_schedule4': 90,
  'ch_ext_schedule3': 90,
  'ch_ext_schedule2': 90,
  'ch_ext_schedule1': 90
};



/* consts -- declared as vars because firebug doesn't like consts being declared more than once..
* todo: add a wrapper that checks if consts have been declared & avoids redeclaring if so (try/catch)
* */
/*try{
  const personalClickValue_ultimate = 0.02;
  const referralClickValue_default = 0.01;
  const personalClickValue_default = 0.01;
  const referralClickValue_standard = 0.005;
} catch(e) {}*/

var personalClickValue_ultimate = 0.02;
var referralClickValue_default = 0.01;
var personalClickValue_default = 0.01;
var referralClickValue_standard = 0.005;



/**
 * :Handles stored preferences (eg, referral listings column preferences) and locally cached values (eg, username / number of referrals)
 * @param arg_prefName The name of the stored value that is stored to / fetched from.
 * @param arg_defaultValue The value to return if the value isn't found in storage.
 * @param arg_valueType Indicates the data type that the value will be stored as (where possible) / the data type that the stored value will be returned as. Useful for indicating JSON data. Defaults to string.
 **/
/*function PREF(arg_prefName, arg_defaultValue, arg_valueType)
 {
 this.get = localStorage.getItem(arg_prefName, arg_defaultValue);
 this.set = localStorage.setItem(arg_prefName, arg_defaultValue);
 return this;
 }*/


/*
 // helper function to create closures based on passed-in arguments:
 var bindGetterSetter = function(obj,p,properties)
 {
 obj.__defineGetter__(p, function() { return properties[p]; });
 obj.__defineSetter__(p, function(val) { properties[p]=val; return this; });
 };

 // http://stackoverflow.com/questions/377716/javascript-automatic-getter-setters-john-resig-book/378395#378395
 function USER( arg_properties ) {

 for (var prop in arg_properties) {
 bindGetterSetter(this, prop, arg_properties);
 }
 }
 */

function get(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: get()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  var returnType = arg_options.prefType || typeof arg_defaultValue;

  var tmp = localStorage.getItem(arg_prefName);
  if(!tmp) {
    errorLog('Error retrieving value from localStorage, using supplied defualt value.',arguments);
    tmp = set(arg_prefName, arg_defaultValue, arg_options);
  }

  switch (returnType)
  {
    case 'float':
      return parseFloat(tmp);
    case 'string':
      return tmp.toString();
    case 'JSON':
      try {
        return JSON.parse(tmp);
      } catch(e){
        return {};
      }
    default:
      return tmp;
  }
}

function set(arg_prefName, arg_defaultValue, arg_options)
{
  if ("object" === typeof arg_options) {
    //arg_options = arg_options;
  }
  else {
    errorLog('ERROR: function: set()','arg_options is not an object!!','arguments:',arguments);
    arg_options = {};
  }

  arg_options.prefType = arg_options.prefType || typeof arg_defaultValue;

  var tmp_value;
  switch (arg_options.prefType)
  {
    case 'float':
      tmp_value = parseFloat(arg_defaultValue);
      break;
    case 'string':
      tmp_value = arg_defaultValue.toString();
      break;
    case 'JSON':
      tmp_value = JSON.stringify(arg_defaultValue);
      break;
    default:
      tmp_value = arg_defaultValue;
      break;
  }

  /*Having issues with the localStorage being wiped occasionally so storing to GM_log too as a backup*/
  if("undefined" !== typeof GM_setValue) {
    GM_setValue(arg_prefName, tmp_value);
  }
  localStorage.setItem(arg_prefName, tmp_value);
  return get(arg_prefName, tmp_value, arg_options);
}



function testAgainstUrlParameters(arg_urlVarTests)
{
  var tmpUrlVars = document.location.search.substring(1).split('&');
  for(var tmpUrlVarTest in arg_urlVarTests) {
    if(!(0 <= tmpUrlVars.indexOf(arg_urlVarTests[tmpUrlVarTest]))) {
      return false;
    }
  }

  // console.info('Found the following within the URL:',arg_urlVarTests);
  return true;
}
function testAgainstUrlPath(arg_urlTests)
{
  var tmpUrlVars = document.location.pathname.substring(1).split('/');

  for(var tmpUrlVarTest in arg_urlTests) {
    if(!(0 <= tmpUrlVars.indexOf(arg_urlTests[tmpUrlVarTest]))) {
      return false;
    }
  }

//  console.info('Found the following within the URL:',arg_urlTests);
  return true;
}

var currentPage = new function()
{
  function detectLanguageCode()
  {
    if(document.body.textContent.match(/Change Language To Portuguese/i)) { set('neobuxLanguageCode', 'EN', {prefType: 'string'}); }
    if(document.body.textContent.match(/Change Language To English/i)) { set('neobuxLanguageCode', 'PT', {prefType: 'string'}); }

    return get('neobuxLanguageCode', 'EN', {prefType: 'string'});
  }
  this.languageCode = detectLanguageCode();

  function detectPageCode ()
  {

    if(testAgainstUrlPath(['v'])) { return 'viewingAdvertisement'; }
    if(testAgainstUrlPath(['forum'])) { return 'viewingForums'; }

    if(testAgainstUrlPath(['c']))
    {
      if(testAgainstUrlParameters(['s=i'])) { return 'accSummary'; }
      if(testAgainstUrlPath(['b'])) { return 'banners'; }
      if(testAgainstUrlPath(['d'])) { return 'personalSettings'; }
      if(testAgainstUrlPath(['a'])) {
        if(testAgainstUrlParameters(['s1=pgt'])) { return 'advertisementSettings_purchasingClickPack'; }
        return 'advertisementSettings';
      }

      if(testAgainstUrlPath(['rq'])) { return 'rentalQueueSettings'; }

      if(testAgainstUrlPath(['rs'])) {
        return 'referralStatistics';
      }

      if(testAgainstUrlPath(['rl']))
      {
        if(testAgainstUrlParameters(['ss3=1']))
        {
          //WARNING: TODO: NOT TESTED LINKS / ARROW DIRECTIONS FOR DIRECT REFS PAGES

          if(testAgainstUrlParameters(['ss2=1']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Desc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Asc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Desc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Asc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Desc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Desc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          if(testAgainstUrlParameters(['ss2=2']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Asc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Desc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Asc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Desc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Asc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Asc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          return 'referralListings_Rented_DEFAULTSORT';
        }
        if(testAgainstUrlParameters(['ss3=2']))
        {
            /**
             * Name           &ss1=2 &ss2= (2Asc/1Desc)??
             * Ref Since      &ss1=1 &ss2= (1Asc/2Desc)
             * Next Payment   &ss1=5 &ss2= (2Asc/1Desc)
             * Last Click     &ss1=4 &ss2= (1Asc/2Desc)
             * Clicks         &ss1=3 &ss2= (2Asc/1Desc)
             * Average        &ss1=7 &ss2= (2Asc/1Desc)
             *
             * &ss1 = column to be sorted by
             * &ss2 = asc / desc
             * &ss3 = direct / rented refs
             *
             *  vars[1] = [2,2,1,'Sort by Referral ID#'];
                vars[2] = [1,1,2,'Sort by the total time that the referral has been Owned']; // Does not match existing arrow directions
                vars[3] = [5,2,1,'Sort by time until Next Payment is Due'];
                vars[4] = [4,1,2,"Sort by time since the referral's Last Click"];
                vars[5] = [3,2,1,'Sort by Total Number of Clicks'];
                vars[6] = [7,2,1,'Sort by Average number of clicks'];
             */

          if(testAgainstUrlParameters(['ss2=1']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Desc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Asc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Desc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Asc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Desc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Desc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          if(testAgainstUrlParameters(['ss2=2']))
          {
            if(testAgainstUrlParameters(['ss1=2'])) { return 'referralListings_Rented_name_Asc'; }
            if(testAgainstUrlParameters(['ss1=1'])) { return 'referralListings_Rented_refSince_Desc'; }
            if(testAgainstUrlParameters(['ss1=5'])) { return 'referralListings_Rented_nextPayment_Asc'; }
            if(testAgainstUrlParameters(['ss1=4'])) { return 'referralListings_Rented_lastClick_Desc'; }
            if(testAgainstUrlParameters(['ss1=3'])) { return 'referralListings_Rented_totalClicks_Asc'; }
            if(testAgainstUrlParameters(['ss1=7'])) { return 'referralListings_Rented_clickAverage_Asc'; }
            return 'referralListings_Rented_UNKNOWNSORT';
          }

          return 'referralListings_Rented_DEFAULTSORT';
        }
      }
      if(testAgainstUrlPath(['h'])) { return 'historyLogs'; }
      if(testAgainstUrlPath(['ll'])) { return 'loginHistory'; }
      if(testAgainstUrlPath(['rba'])) { return 'rentalBalancePage'; }
      if(testAgainstUrlPath(['gm'])) { return 'goldenMembershipPage'; }
      if(testAgainstUrlPath(['gpa'])) { return 'goldenPackBalancePage'; }

      return 'accSummary';
    }


    if(testAgainstUrlParameters(['m','v'])) { return 'viewAdvertisementsPage'; }
    if(testAgainstUrlParameters(['u=p'])) { return 'neobuxFrontPage'; }



    return 'unrecognisedUrlParameters';
  }

  this.pageCode = detectPageCode();

};


function extractNumberOfRefs()
{
  // If currently viewing the rented/direct ref listings, update the stored values accordingly
  if (currentPage.pageCode.match(/referralListings/))
  {
    // Deduce which page is being viewed
    var _pageRefType = null;
    if(currentPage.pageCode.split('_').indexOf('Rented')) {
      _pageRefType = 'Rented';
    } else {
      _pageRefType = 'Direct';
    }

    var tmp_numberOfRefs = null;
    var noOfRefsString = docEvaluate('//td[@class="f_r"]/descendant::span[@class="f_b"]');

    // Only expecting one result if the user has referrals
    if(1 == noOfRefsString.snapshotLength)
    {
      noOfRefsString = noOfRefsString.snapshotItem(0);

      if (noOfRefsString.textContent.match(/\d+/)) {
        tmp_numberOfRefs = parseInt(noOfRefsString.textContent.match(/\d+/), 10);
      } else {
        errorLog('An Error has occured.\n\r 1 == (noOfRefsString.snapshotLength) \n\r !(noOfRefsString.textContent.match(/\d+/))')
      }
    }
    else
    {
      /**
       * Most likely reason for incorrect snapshotLength is an error in page load or zero refs.
       * Will now check for zero refs.
       */
      var zeroRefsXpath = {
        'EN': '//span[contains(text(),"You don\'t have")]',
        'PT': '//span[contains(text(),"Não tem referidos")]'
      };
      var zeroRefsString = docEvaluate(zeroRefsXpath[currentPage.languageCode()]);

      // If evidence of zero refs is found, set the number of refs to zero (0)
      tmp_numberOfRefs = (1 == zeroRefsString.snapshotLength) ? 0 : false;
    }

    // Now store the number of detected referrals if numberOfRefs is not false
    // manipulatePrefs.setPref('numberOf' + _pageRefType + 'Refs', tmp_numberOfRefs);

    return tmp_numberOfRefs;
  }
  else if(currentPage.pageCode.match(/accSummary/))
  {
//    TODO: Extract number of refs from main page
    var tmp_elmAccountInfo = docEvaluate('//td[@class="t_preto_r"]/parent::tr/parent::tbody/descendant::td');

    function displayTextContent(arg_element){
      return arg_element.textContent.replace(/mk_tt\(.*\)/,'').replace(/[><+=;\s]+/g,'');
    }

    var tmp_currentTd;
    var tmp_nextTd;

    var tmp_lookupArray = [
      [/since:/i, 'You have been a member since {value}'],
      [/type:/i, 'You are a {value} member'],
      [/expires:/i, 'Your membership expires on {value}'],
      [/rented:/i, 'You have {value} rented referrals'],
      [/direct:/i, 'You have {value} direct referrals'],
      [/you:/i, 'As a member of Neobux you have clicked {value} ads'],
      [/your referrals:/i, 'In total, you have been credited from {value} of your referrals ads'],
      [/main balance:/i, 'Your main balance is {value}'],
      [/rental balance:/i, 'Your golden pack balance is {value}'],
      [/golden pack balance:/i, 'Your golden pack balance is {value}'],
      [/recieved:/i, 'You have cashed out {value} from Neobux'],
      [/direct purchases:/i, 'You have directly transferred {value} from your account balance back into Neobux'],
      [/exposure clicks:/i, 'You have {value} exposure clicks available for you to show ads with']
    ];

    for(var i=0; i<tmp_elmAccountInfo.snapshotLength; i++)
    {
      tmp_currentTd = tmp_elmAccountInfo.snapshotItem(i);
      tmp_nextTd = tmp_elmAccountInfo.snapshotItem(i+1);

      for(var j=0; j<tmp_lookupArray.length; j++){
        if(tmp_currentTd.textContent.match(tmp_lookupArray[j][0])) {
//          console.info(tmp_lookupArray[j][1].replace(/{value}/, displayTextContent(tmp_nextTd)));
        }
      }
    }
  }

}




/**
 * :Object used for holding information about the account that the current user of the script is logged into
 *
 **/
var currentUser = new function()
{
  if(document.getElementById('t_conta')) {
    this.username = set('username', document.getElementById('t_conta').textContent, {prefType:'string'});
  } else {
    this.username = get('username', 'unknownUsername', {prefType:'string'});
  }

  this.accountType = new function ()
  {
    var accDiv = docEvaluate('//div[@class="tag"][last()]');
    var tmp_accountType;


    // If the accType can be grabbed from the page, cache it
    if(0 < accDiv.snapshotLength){
      accDiv = accDiv.snapshotItem(0);

      for (var i = 0; i < Neobux.possibleAccTypes.length; i++)
      {
        if (accDiv.textContent.match(Neobux.possibleAccTypes[i]))
        {
          tmp_accountType = {
            "numerical": i,
            'verbose': Neobux.possibleAccTypes[i]
          };

          set('accountType', tmp_accountType, {prefType:'JSON'});

        }
      }
    }

    // If the accountType info was on the page, the stored copy will have been updated
    // (else we'll just be grabbing the cached version)
    tmp_accountType = get('accountType',{numerical:0, verbose:'unknown'},{prefType: 'JSON'});


    this.numerical = tmp_accountType.numerical;
    this.verbose = tmp_accountType.verbose;

    this.showUltimateFeatures = (6 == tmp_accountType.numerical);
    this.isUltimate = 6 === tmp_accountType.numerical;
    this.isStandard = 0 === tmp_accountType.numerical;

    return this;
  };

  this.ownClickValue = (this.accountType.isUltimate)      ? personalClickValue_ultimate : personalClickValue_default;
  this.referralClickValue = (this.accountType.isStandard) ? referralClickValue_standard : referralClickValue_default;

};

debugLog('currentUser', currentUser);

if(currentPage.pageCode.match(/accSummary/) || currentPage.pageCode.match(/referralStatistics/))
{
  var chartData = new function ()
  {
    this.dataGrabbedFromCurrentPage = function()
    {
      // Decode evalString using the w(i) function from the Neobux page
      function U(arg_a)
      {
        return arg_a * 10;
      }

      function u0(arg_a)
      {
        return String.fromCharCode(U(arg_a));
      }

      // function w(_i) {
      function NeobuxDecodeEvalString(arg_input)
      {
        var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o = "";
        var c1, c2, c3, e1, e2, e3, e4;
        var j = 0;
        arg_input = arg_input.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do {
          e1 = k.indexOf(arg_input.charAt(j++));
          e2 = k.indexOf(arg_input.charAt(j++));
          e3 = k.indexOf(arg_input.charAt(j++));
          e4 = k.indexOf(arg_input.charAt(j++));
          c1 = e1 << 2 | e2 >> 4;
          c2 = (e2 & 15) << 4 | e3 >> 2;
          c3 = (e3 & 3) << 6 | e4;
          o = o + u0(c1 / 10);
          if (64 != e3)
          {
            o = o + u0(c2 / 10);
          }
          if (64 != e4)
          {
            o = o + u0(c3 / 10);
          }
        } while (j < arg_input.length);

        return o;
      }


      var xpathResults_graphData = docEvaluate('//script[contains(text(),"eval")]');
      //NB: If testing in Firebug, xpathResults_graphData.snapshotLength increases the snaphshotLength

      for(var i=0; i<xpathResults_graphData.snapshotLength; i++){
        //console.info(xpathResults_graphData.snapshotItem(i).innerHTML.match(/eval/g).length);
        if(xpathResults_graphData.snapshotItem(i).innerHTML.match(/eval\(w\('/g)) {
          /**
         *  If only one matching <script> ... </script> tag found, it is the correct one
         * Now extract data::
         */

        /**
         * First, remove instances of the word 'eval' and then split it up based on
         * these rules ::
         * eval(w('
         * ')); eval(w('
         */
          var evals = xpathResults_graphData.snapshotItem(i).text.replace(/[ ]?eval\(w\('/g, '').split("'));");
        }
      }

      var graphData = new Array();

      // Cycle through each individual eval (ie, graph / graphNumber)
      for (var graphNumber = 0, length = evals.length - 1; graphNumber < length; graphNumber++)
      {
        // logger('graphNumber = '+graphNumber);
        var evalString = evals[graphNumber];

        // Decode evalString using the w(i) function from the Neobux page
        var decodedEvalString = NeobuxDecodeEvalString(evalString);

//        console.info(decodedEvalString);

        eval(decodedEvalString.replace(');', ']').replace('mk_ch(', 'graphData[' + graphNumber + '] = ['));
      }

      return graphData;
    };

    this.getStoredGraphData = function()
    {
      return get('graphData', {}, {prefType: 'JSON'});
    };


    this.reformatGraphData = function()
    {
      var tmp_graphData = new Array();
      var tmp_graphDataObject = new Object();
      var tmp_currentGraphFriendlyName;
      var currentDataset;
      var tmp_currentDatasetName;
      var tmp_currentDate;

//      alert('foo');
      var tmp_dataGrabbedFromCurrentPage = this.dataGrabbedFromCurrentPage();

      for (var _i in tmp_dataGrabbedFromCurrentPage)
      {
        tmp_currentGraphFriendlyName = friendlyNameLookup[tmp_dataGrabbedFromCurrentPage[_i][0]];
        tmp_graphData[tmp_currentGraphFriendlyName] = tmp_dataGrabbedFromCurrentPage[_i];

        currentDataset = tmp_graphData[tmp_currentGraphFriendlyName];

          console.info('_i',_i,
           'tmp_dataGrabbedFromCurrentPage[_i]',tmp_dataGrabbedFromCurrentPage[_i],
           'friendlyNameLookup[tmp_dataGrabbedFromCurrentPage[_i][0]]',friendlyNameLookup[tmp_dataGrabbedFromCurrentPage[_i][0]]
           );



  //      debugLog('currentDataset', currentDataset);

        for(var i = 0; i < currentDataset[5].length; i++)
        {
          tmp_currentDatasetName = currentDataset[5][i].name;
          tmp_graphDataObject[tmp_currentGraphFriendlyName] = tmp_graphDataObject[tmp_currentGraphFriendlyName] || {};
          tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] = tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName] || {};

          for(var j = 0; j < currentDataset[2].length; j++)
          {
            tmp_currentDate = currentDataset[2][j].replace(/today/i,TODAY_STRING).replace(/yesterday/i,YESTERDAY_STRING).replace(/tomorrow/i,TOMORROW_STRING);
            tmp_graphDataObject[tmp_currentGraphFriendlyName][tmp_currentDatasetName][tmp_currentDate] = currentDataset[5][i].data[j];
          }
        }
      }

      set('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });
      return get('graphData',Object_merge(this.getStoredGraphData(), tmp_graphDataObject),{ prefType: 'JSON' });
    };


    this.mergeGraphDataOnPageWithStoredData = function ()
    {

    };

    this.init = function() {
      //TODO: Rearrangethe logic of this slightly 
      this.reformatGraphData();
    }
  };

  chartData.init();
}
/*
 function grabChartData(arg_chartData, arg_page, arg_currentUser) {}

 */


function insertLocalServerTime()
{

  function formatTime(arg_time)
  {
    var _Hours = arg_time.getHours();
    var _Minutes = arg_time.getMinutes();
    var _Seconds = arg_time.getSeconds();

    return padZeros(_Hours,2) + ':' + padZeros(_Minutes,2); //+ ":" + padZeros(_Seconds,2);
  }

  var localMidnight;
  var currentLocalTime;
  var currentServerTime;
  var neoMidnight;
  var adResetTime;
  var AdResetTime_hours;

  function setTime(arg_dateTime,arg_time)
  {
    arg_dateTime.setHours(arg_time[0]);
    arg_dateTime.setMinutes(arg_time[1]);
    arg_dateTime.setSeconds(arg_time[2]);

    return arg_dateTime;
  }

  // Calculate and return the server time formatted correctly
  this.GetServerTimeAndOffsetText = function(arg_serverTimeOffset)
  {
    var offsetMS = arg_serverTimeOffset * 1000 * 60 * 60;

    currentLocalTime = new Date(dateToday);
    currentServerTime = new Date(currentLocalTime.getTime() + offsetMS);


    localMidnight = setTime(new Date(dateToday),[0,0,0]);
    set('localMidnight', localMidnight.toString(), {prefType:'string'});

    /* If server time is five hours behind (-5), Neobux's midnight will be five hours AFTER local midnight
      && vice versa, thus need to minus the offset
      NB, the offset might move the day to tomorrow/yesterday so will need to reset the date to 'today' */
    neoMidnight = new Date(new Date(localMidnight).getTime() - offsetMS);
    neoMidnight = new Date(neoMidnight.setDate(localMidnight.getDate()));
    set('neoMidnight', neoMidnight.toString(), {prefType:'string'});


    AdResetTime_hours = get('AdResetTime_hours',0, {prefType:'string'}) * 1000 * 60 * 60;
    adResetTime = new Date(new Date(localMidnight).getTime() + AdResetTime_hours);
    adResetTime = new Date(adResetTime.setDate(localMidnight.getDate()));
    set('adResetTime', adResetTime.toString(), {prefType:'string'});


    var timeOffset_text = '';
    if (0 < arg_serverTimeOffset) {
      timeOffset_text = '+' + parseFloat(arg_serverTimeOffset.toFixed(2));
    }
    else if (0 > arg_serverTimeOffset) {
      timeOffset_text = parseFloat(arg_serverTimeOffset.toFixed(2));
    }
    else {
      timeOffset_text = '+-' + arg_serverTimeOffset;
    }

    // Return the time in the format HH:MM(:SS optional)

    return formatTime(currentServerTime) + ' (' + timeOffset_text + 'hrs)';

  };


  // Calculate and return the size of the time difference/offset
  this.FetchAndSetTimeOffset = function()
  {
    // Hunt for the current server time string
    var locationOfTimeString = docEvaluate('//td[@class="f_r"]/span');
    for (var tmp_i = 0; tmp_i < locationOfTimeString.snapshotLength; tmp_i++)
    {

      // var dateTimeString = '2009/06/07 20:46'; (assuming format yyyy/mm/dd hh:dd )
      var dateTimeString = locationOfTimeString.snapshotItem(tmp_i).textContent.match(/([\d]{4})\/([\d]{2})\/([\d]{2}) ([\d]{2}):([\d]{2})/) || -1;

      if (-1 === dateTimeString) {
        /* do nothing */
      }
      else
      {
        // NB: parseInt("08") == 0 so must definition of base 10 required
        // CST = Current Server Time
        var tmp_CST = {
          year: parseInt(dateTimeString[1], 10),
          month: parseInt(dateTimeString[2], 10),
          day: parseInt(dateTimeString[3], 10),

          hour: parseInt(dateTimeString[4], 10),
          minute: parseInt(dateTimeString[5], 10)
        };

        //      debugLog(tmp_CST);

        var ServerDateTime = new Date(dateToday);
        ServerDateTime.setFullYear(tmp_CST.year, (tmp_CST.month - 1), tmp_CST.day);
        ServerDateTime.setHours(tmp_CST.hour, tmp_CST.minute);

        var ServerTime = ServerDateTime.getTime();
        var LocalTime = dateToday.getTime();
        var one_hour = 1000 * 60 * 60;

        var serverTimeDifference = (ServerTime - LocalTime) / (one_hour);
        serverTimeDifference = Math.floor(serverTimeDifference * 1000) / 1000;

        set('serverTimeOffset', serverTimeDifference, { prefType:'string' } );


        var adResetTimeString = locationOfTimeString.snapshotItem(0).textContent;
        adResetTimeString = adResetTimeString.match(/([\d]{2}):([\d]{2})/);

        // ART = Ad Reset Time
        var tmp_ART = {
          hour: parseInt(adResetTimeString[1], 10),
          minute: parseInt(adResetTimeString[2], 10)
        };

        //      debugLog(tmp_ART);

        var AdResetTimeDifference = (tmp_ART.hour + (tmp_ART.minute / 60));
        set('AdResetTime_hours', AdResetTimeDifference, { prefType:'string' } );

        break;
      }

    }
  };


  this.GetServerTimeOffset = function()
  {
    /*
      Check whether the page being loaded is the 'View Advertisements' page
      If it is, call this.GetServerTimeOffset() to calculate & store the offset amount [if autodetecting the offset is enabled]
    */

    // Check whether current page is the "View Advertisements" page
    var CurrentUrl = document.location.href;

    var RegExp_AdPage = /^http[s]?:\/\/www\.neobux\.com\/m\/v\//;
    var IsMatch = RegExp_AdPage.test(CurrentUrl);

    // If it is the ads page AND the script should automatically detect the offset,
    if (IsMatch && get("AutoDetectTimeOffset", true, {prefType:'string'})) {
      this.FetchAndSetTimeOffset();
    }

    return get('serverTimeOffset', 0, {prefType:'float'});
  };


  var locationToInsertTimeString;

  this.insertClock = function(arg_timeOffset,arg_adResetOffset)
  {
    if(locationToInsertTimeString = document.querySelectorAll('img#logo')[0].parentNode.parentNode)
    {
      var localTime = formatTime(dateToday);
      var serverTime = (0 <= this.GetServerTimeOffset() || 0 >= this.GetServerTimeOffset()) ? this.GetServerTimeAndOffsetText(this.GetServerTimeOffset()) : 'You must "View Advertisements" for this to show correctly.';

  //  debugLog('Local: ' + localTime + ' Server: ' + serverTime);

      if(document.getElementById('containerDiv_timer')) {
        //document.getElementById('containerDiv_timer').innerHTML = containerDiv_timer.innerHTML;
      } else {
        locationToInsertTimeString.innerHTML = '<div id="localServerTimeText" style="font-family:mono,monospace; font-size:x-small; margin-bottom:-15px; padding-top:0.7em;">&nbsp; Local time: ' + localTime + '  --  Server time: ' + serverTime + '</div>' + locationToInsertTimeString.innerHTML;
        locationToInsertTimeString.setAttribute('valign', '');
      }

      var containerDiv_timer = document.createElement('div');
      containerDiv_timer.innerHTML = '<div style="width: 750px; height: 450px; display:none; position:absolute; top:100px; left:100px;" id="containerDiv_timer"></div>';

      // Used mostly during testing - if the container div is already present update it rather than add another
      if(document.getElementById('containerDiv_timer')) {
        document.getElementById('containerDiv_timer').innerHTML = containerDiv_timer.innerHTML;
      } else {
        document.body.appendChild(containerDiv_timer);
      }


//      debugLog('Local Midnight ',padZeros(localMidnight.getHours(),2)+':'+padZeros(localMidnight.getMinutes(),2),
//          'Server Midnight ',padZeros(neoMidnight.getHours(),2)+':'+padZeros(neoMidnight.getMinutes(),2),
//          'Ad Reset Time ',padZeros(adResetTime.getHours(),2)+':'+padZeros(adResetTime.getMinutes(),2));
//
//      debugLog(localMidnight,neoMidnight,adResetTime);
    }
  };


  this.insertClickGuide = function()
  {

    var localMidnightToAdResetTime = (adResetTime - localMidnight) / (1000 * 60 * 60);
    var localMidnightToNeobuxMidnight = (neoMidnight - localMidnight) / (1000 * 60 * 60);

    //    debugLog(localMidnightToAdResetTime);
    //    debugLog(localMidnightToNeobuxMidnight);


    var _timePeriods = [];
    var localMidnightToFirstEvent;
    var FirstEventToSecondEvent;
    var SecondEventToLocalMidnight;
    var FirstTP;
    var SecondTP;
    var ThirdTP;

    /*
     * Test the a = (local midnight to ad reset) time & b = (local midnight to neobux midnight) time
     * If a < b, the order is 1) local midnight 2) neobux midnight 3) ad resets
     * If a > b, the order is 1) local midnight 2) ad resets 3) neobux midnight
     * If a == b, the ads reset at the same time as the neobux midnight ticks over,
     *  .. and the order is 1) local midnight 2) ad reset+neobux midnight

     * Based on this logic, decide which order to display the 'chunks' of the clock
     */

    var tmp_displayOrder;
    if(localMidnightToAdResetTime < localMidnightToNeobuxMidnight) { tmp_displayOrder = 1; }
    if(localMidnightToAdResetTime > localMidnightToNeobuxMidnight) { tmp_displayOrder = 2; }
    if(localMidnightToAdResetTime == localMidnightToNeobuxMidnight) { tmp_displayOrder = 3; }

    switch(tmp_displayOrder)
    {
      case 1:
  //      debugLog('localMidnightToAdResetTime < localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToAdResetTime;
        FirstEventToSecondEvent = localMidnightToNeobuxMidnight - localMidnightToAdResetTime;
        SecondEventToLocalMidnight = 24 - (localMidnightToFirstEvent + FirstEventToSecondEvent);

        FirstTP = 'Local Midnight to Ad Reset Time';
        SecondTP = 'Ad Reset Time to Neobux Midnight';
        ThirdTP = 'Neobux Midnight to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });
        _timePeriods.push({
          name: ThirdTP,
          y: SecondEventToLocalMidnight,
          color: '#AA4643'
        });

      break;
      case 2:

  //      debugLog('localMidnightToAdResetTime > localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToNeobuxMidnight;
        FirstEventToSecondEvent = localMidnightToAdResetTime - localMidnightToNeobuxMidnight;
        SecondEventToLocalMidnight = 24 - (localMidnightToFirstEvent + FirstEventToSecondEvent);

        FirstTP = 'Local Midnight to Neobux Midnight';
        SecondTP = 'Neobux Midnight to Ad Reset Time';
        ThirdTP = 'Ad Reset Time to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });
        _timePeriods.push({
          name: ThirdTP,
          y: SecondEventToLocalMidnight,
          color: '#AA4643'
        });

      break;
      case 3:

  //      debugLog('localMidnightToAdResetTime == localMidnightToNeobuxMidnight');

        localMidnightToFirstEvent = localMidnightToAdResetTime;
        FirstEventToSecondEvent = 24 - (localMidnightToFirstEvent);

        FirstTP = 'Local Midnight to Neobux Midnight And Ad Reset Time';
        SecondTP = 'Neobux Midnight And Ad Reset Time to Local Midnight';

        _timePeriods.push({
          name: FirstTP,
          y: localMidnightToFirstEvent,
          color: '#AA4643'
        });
        _timePeriods.push({
          name: SecondTP,
          y: FirstEventToSecondEvent,
          color: '#4572A7'
        });

      break;

    }

    // Transfer script variables to the window
    location.href = "javascript:void(window._timePeriods = new Array())";
    for(var i = 0; i < _timePeriods.length; i++) {
      location.href = "javascript:void(window._timePeriods["+i+"] = JSON.parse('"+JSON.stringify(_timePeriods[i])+"'))";
    }
    location.href = "javascript:void(window.adResetTime = new Date('"+adResetTime.toString()+"'))";
    location.href = "javascript:void(window.neoMidnight = new Date('"+neoMidnight.toString()+"'))";
    location.href = "javascript:void(window.localMidnight = new Date('"+localMidnight.toString()+"'))";

    //    debugLog(_timePeriods);

    location.href = "javascript:(" + function () {

      // Append zeros to the _input until the _desiredStringLength is reached
      function padZeros(arg_input,arg_desiredStringLength)
      {
        var currentLength = arg_input.toString().length;
        var output = arg_input;
        for(var i=0; i < (arg_desiredStringLength - currentLength); i++) {
          output = '0' + output;
        }
        return output;
      }

      if ('undefined' === typeof Highcharts)
      {
        //move container off screen to stop a transparent div blocking clicks on rest of page
        //Also colour it so that if it does cause a problem, it isn't invisible
        //todo: add the event handler before this javascript is called and then remove it here if the timer chart cannot show

        document.getElementById('containerDiv_timer').style.left = '-1000px';
        document.getElementById('containerDiv_timer').style.backgroundColor = 'black';
        errorLog("Cannot show the clicking guide graph because graphs are unavailable on this page. Try the account summary page or referral statistics page.");
      }
      else
      {
        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'containerDiv_timer',
            margin: [20,20,80,20],
            backgroundColor: '#eeeeee'
          },
          title: {
            text: ''
          },
          plotArea: {
            shadow: null,
            borderWidth: null,
            backgroundColor: null
          },
          tooltip: {
            formatter: function ()
            {
              var _from = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);
              localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y), localMidnight.getMinutes() + ((this.y - Math.floor(this.y)) * 60)));
              var _to = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);

              return '<b>' + this.point.name + '</b>: ' + (Math.floor(this.y * 100) / 100) + 'hours == From: ' + _from + ' To: ' + _to;
            }
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                formatter: function ()
                {
                  if (0 === this.x) {
                    localMidnight.setHours(0, 0, 0);
                  }
                  var _from = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);
                  localMidnight = new Date(localMidnight.setHours(localMidnight.getHours() + Math.floor(this.y), localMidnight.getMinutes() + ((this.y - Math.floor(this.y)) * 60)));
                  var _to = padZeros(localMidnight.getHours(), 2) + ':' + padZeros(localMidnight.getMinutes(), 2);

                  return _from + '-' + _to;
                }
              }
            }
          },
          legend: {
            layout: 'vertical'
          },
          series: [
            {
              type: 'pie',
              name: 'Time periods',
              data: _timePeriods
            }
          ]
        });

      }


      //todo: look into passing parameters into the ()
    } + ")()";

    document.getElementById('localServerTimeText').addEventListener('click',function localServerTime_onClick(){
      document.getElementById('containerDiv_timer').style.display = ('none' == document.getElementById('containerDiv_timer').style.display) ? '' : 'none' ;
    },false);

  };

  this.insertClock(this.GetServerTimeOffset(),get('AdResetTime_hours',0, {prefType:'string'}));
  this.insertClickGuide();

}

insertLocalServerTime();


  var availableGraphs = [];

  for(var graphId in friendlyNameLookup){
    availableGraphs.push(graphId);
  }


// Used for detection on pages
var langStrings_Neo = {
  'US': {
    'Yesterday': 'Yesterday',
    'Today': 'Today',
    'No clicks yet': 'No clicks yet'
  }
};

// Used for output from the script
var langStrings = {
  'en-GB': {
    'N/A':'N/A'
  }
};

// tl = Translate to Local
function tl(arg_langString){
  var tmp_langCode = 'en-GB';
  if(langStrings){
    if(langStrings[tmp_langCode]){
      if(langStrings[tmp_langCode][arg_langString]){
        return langStrings[tmp_langCode][arg_langString];
      }
      else {
        errorLog('Error! tl(arg_langString)\nLanguage string not found amongst translated strings for '+tmp_langCode+'. Returning the submitted arg_langString: '+arg_langString);
        return arg_langString;
      }
    }
    else {
      errorLog('Error! tl(arg_langString)\nLanguage set not found amongst translations. Returning the submitted arg_langString: '+arg_langString);
      return arg_langString;
    }
  }
  else {
    errorLog('Error! tl(arg_langString)\nTranslations object not found. Returning the submitted arg_langString: '+arg_langString);
    return arg_langString;
  }
}

// ntl = Neobux TransLate to Local
function ntl(arg_langString){
  var tmp_langCode = document.querySelectorAll('.c0')[0].getAttribute('class').match(/f-([a-z]{2})/)[1].toUpperCase();

  if(langStrings_Neo){
    if(langStrings_Neo[tmp_langCode]){
      if(langStrings_Neo[tmp_langCode][arg_langString]){
        return langStrings_Neo[tmp_langCode][arg_langString];
      }
      else {
        errorLog('Error! ntl(arg_langString)\nLanguage string not found amongst translated strings for '+tmp_langCode+'. Returning the submitted arg_langString: '+arg_langString);
        return arg_langString;
      }
    }
    else {
      errorLog('Error! ntl(arg_langString)\nLanguage set not found amongst translations. Returning the submitted arg_langString: '+arg_langString);
      return arg_langString;
    }
  }
  else {
    errorLog('Error! ntl(arg_langString)\nTranslations object not found. Returning the submitted arg_langString: '+arg_langString);
    return arg_langString;
  }
}


var referralListings = new function()
{
  function extractReferralDataFromListingsPage()
  {
    // Grab contents of mtx[] array delivered onto the referral listings page
    var xpathResults_mtx = docEvaluate("//script[contains(.,'mtx=')]").snapshotItem(0).textContent;
    var tmp_refData = xpathResults_mtx.match(/mtx=\[(.*?),\];/)[1];

    // Insert this into a JSON
    var tmpObj_currentPageRefData = JSON.parse('{"mtx": ['+tmp_refData.replace(/'/g,'"')+']}') || -1;


    if(-1 === tmpObj_currentPageRefData){
      // The data extracted couldn't be parsed into a valid JSON string / object so 'return' out of the function
      errorLog('There was an error extracting the referral listings data.');
      return -1;
    }

    return tmpObj_currentPageRefData;
  }

  function restructureData(arg_referralListingsData)
  {
    // Data pushed by Neobux is in the following format:

    /**
     * m = mtx[i]
     *
     * m[0] = Row # as shown in the first column
     * m[1] = Real name for referral / else 0
     * m[2] = Came From (direct) / Referral Since (rented) { (currentRefMTX[2] == '9') ? referrals[z - 1].referralSince : currentRefMTX[2] }
     * m[3] = Next Payment (rented) / Referral Since (direct) { (currentRefMTX[2] == '9') ? referrals[z - 1].referralSince : currentRefMTX[2] }
     * m[4] = Last Click Date { (currentRefMTX[4] == '9') ? referrals[z - 1].lastClick : (currentRefMTX[4] == 'N') ? 'No clicks yet' : (currentRefMTX[4] == 'O') ? 'Yesterday' : (currentRefMTX[4] == 'H') ? 'Today' : currentRefMTX[4] }
     * m[5] = Total Clicks
     * m[6] = Overall Average { (currentRefMTX[6] == '-.---' || currentRefMTX[6] == 999) ? '-.---' : currentRefMTX[6] }
     * m[7] = Some kind of long ID # / hash / something
     * m[8] = Unknown exact purpose 0/1 value used within much of the HTML attributes / function parameters
     * m[9] = Value of the checkbox
     * m[10] = When colouring by average is disabled, should background be gray (1) or white (0)
     * m[11] = *unused
     * m[12] = *unused
     * m[13] = Can golden graph button be displayed
     * m[14] = Minigraph click data (Ultimates only)
     * m[15] = Flag id (rented refs only)
     * m[16] = Can referral be recycled
     * m[17] = Is referral locked (rented refs only)
     * m[18] = Can referral be sold (direct refs only)
     * m[19] = Anonymous referral ID (is numerical - prefix of R or D is added on for display only)
     *
     */

    // Will convert to the following structure:
    /*
    *
    * referrals = {
    *   refID: {
    *     referralType: [ rented | direct ],
    *     lastSeen: < dateTime >,
    *     data: {
    *       <dateTime> : {
    *         flag: < flag colour >,
    *         referralSince: < dateTime >,
    *         lastClick: < date >,
    *         totalClicks: < number >,
    *         overallAverage: < decimal >
    *       },
    *       <dateTime> : {
    *         flag: < flag colour >,
    *         referralSince: < dateTime >,
    *         lastClick: < date >,
    *         totalClicks: < number >,
    *         overallAverage: < decimal >
    *       }
    *     }
    *   },
    *   // more refs
    * };
    *
    */

    // NB: How often a new dateTime is created vs. an existing one is updated will need a setting
    // Meanwhile, will create a new one on every page load / running of the script

//    console.info('restructureData:\n\n','arg_referralListingsData',arg_referralListingsData);

    var tmp_referrals = {};
    var tmp_currentDateTime = new Date();
    var cr, pr;
    var cr_ID, pr_ID;

    for(var i = 0; i < arg_referralListingsData.length; i++)
    {
      console.group();
      console.info('i',i);

    /**
     * ## referralSince and lastClick ##
     * if date/time in one row is the same as the row before, mtx contains a '9'
     * instead of the duplicated date
     *
     * ## lastClick ##
     * 'Today' is coded as 'N' (unknown reason for this code);
     * 'Yesterday' is coded as 'O' (in Portuguese, Yesterday == Ontem)
     *
     * ## overallAverage ##
     * when referral is younger than 24hours old and has not yet clicked,
     * average is displayed as '-.---'
     *
     */

      // Current Referral
      cr = arg_referralListingsData[i];
      cr_ID = ('0' == cr[1]) ? cr[19] : cr[1];
      // Previous Referral
      pr = arg_referralListingsData[i-1] || arg_referralListingsData[i];
      pr_ID = ('0' == pr[1]) ? pr[19] : pr[1];

      var flagLookup = {
        0: 'White',
        1: 'Red',
        2: 'Orange',
        3: 'Yellow',
        4: 'Green',
        5: 'Blue'
      };

      if (0 < location.href.indexOf('ss3=2'))
      {
        tmp_referrals[cr_ID] = {
          ID: ('0' == cr[1]) ? 'R' + cr[19] : cr[1],
          referralType: 'R',

          flag: flagLookup[cr[15]],
          locked: (1 === cr[17]) ? 'Y' : 'N',
          recycleable: (1 === cr[16]) ? 'Y' : 'N',

          nextPayment: cr[3]
        };
      }
      else if (0 < location.href.indexOf('ss3=1'))
      {
        tmp_referrals[cr_ID] = {
          ID: ('0' == cr[1]) ? 'D' + cr[19] : cr[1],
          referralType: 'D',
          cameFrom: cr[2],
          sellable: (1 === cr[18]) ? 'Y' : 'N'
        };
      }

      tmp_referrals[cr_ID].lastSeen = tmp_currentDateTime;
      tmp_referrals[cr_ID].hash = cr[7];
      tmp_referrals[cr_ID].referralSince = ('9' == cr[3]) ? pr.referralSince : cr[3];
      tmp_referrals[cr_ID].lastClick = ('9' == cr[4]) ? pr.lastClick : ('N' == cr[4]) ? ntl('No clicks yet') : ('O' == cr[4]) ? dates_array[1] : ('H' == cr[4]) ? dates_array[0]: cr[4];
      tmp_referrals[cr_ID].totalClicks = cr[5];
      tmp_referrals[cr_ID].overallAverage = ('-.---' == cr[6] || 999 == cr[6]) ? '-.---' : cr[6];


      /* Ultimate only stuff, based on the ultimate minigraphs */
      // Current limit for minigraphs is when viewing 300 refs or fewer - 30/12/2010
      if(currentUser.accountType.showUltimateFeatures && 300 >= refsPerPage)
      {
        tmp_referrals[cr_ID].minigraph = {
          'rawClickData': ('0' == cr[14]) ? '0000000000'.split('') : cr[14].split(''),
          'clicks': new Array()
        };

        // NB: If the user account isn't actually ultimate, but is viewing / testing ultimate features, fill in substitute data
        cr.minigraph.rawClickData = currentUser.accountType.isUltimate ? cr.minigraph.rawClickData : [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

        // Now reverse the order of the array so that the most recent days are first ([0] == today, [1] == yesterday)
        cr.minigraph.rawClickData =  cr.minigraph.rawClickData.reverse();

        // Copy the click data to a separate array and verify/coerce each value to a number
        for (var i = 0; i < cr.minigraph.rawClickData.length; i++) {
          cr.minigraph.clicks[i] = parseInt(cr.minigraph.rawClickData[i], 10);
        }

        /**
         * Compute the mean and variance using a "numerically stable algorithm".
         * Based on http://maiaco.com/articles/computingStatsInJS.php
         * 30/12/2010 - above link no longer exists, mirror found at
         * http://code.google.com/p/ocropodium/source/browse/static/js/stats.js?spec=svnd8375a8cd3f640b35cbbb42d9669411dde9248eb&r=d8375a8cd3f640b35cbbb42d9669411dde9248eb
         *
         * Also temporarily copied in below:
         */

        var sqsum = 0;
        cr.minigraph.mean = new Array();
        cr.minigraph.sum = new Array();
        cr.minigraph.variance = new Array();
        cr.minigraph.sdev = new Array();

        cr.minigraph.mean[0] = cr.minigraph.clicks[0];
        cr.minigraph.sum[0] = cr.minigraph.clicks[0];
        cr.minigraph.variance[0] = cr.minigraph.clicks[0];
        cr.minigraph.sdev[0] = cr.minigraph.clicks[0];

        for (var i = 1; i < cr.minigraph.clicks.length; ++i)
        {
          var x = cr.minigraph.clicks[i];
          var delta = x - cr.minigraph.mean[i-1];
          var sweep = i + 1.0;
          cr.minigraph.mean[i] = cr.minigraph.mean[i-1] + (delta / sweep);
          sqsum += delta * delta * (i / sweep);

          cr.minigraph.sum[i] = cr.minigraph.mean[i] * (i + 1);
          cr.minigraph.variance[i] = sqsum / (i + 1);
          cr.minigraph.sdev[i] = Math.sqrt(cr.minigraph.variance[i]);
        }

//        /** Returns an object that contains the count, sum,
//         * minimum, median, maximum, mean, variance, and
//         * standard deviation of the series of numbers stored
//         * in the specified array.  This function changes the
//         * specified array by sorting its contents. */
//        function Stats(data) {
//            this.count = data.length;
//
//            /* Sort the data so that all seemingly
//             * insignificant values such as 0.000000003 will
//             * be at the beginning of the array and their
//             * contribution to the mean and variance of the
//             * data will not be lost because of the precision
//             * of the CPU. */
//            data.sort(ascend);
//
//            /* Since the data is now sorted, the minimum value
//             * is at the beginning of the array, the median
//             * value is in the middle of the array, and the
//             * maximum value is at the end of the array. */
//            this.min = data[0];
//            var middle = Math.floor(data.length / 2);
//            if ((data.length % 2) != 0) {
//                this.median = data[middle];
//            }
//            else {
//                this.median = (data[middle - 1] + data[middle]) / 2;
//            }
//            this.max = data[data.length - 1];
//
//            /* Compute the mean and variance using a
//             * numerically stable algorithm. */
//            var sqsum = 0;
//            this.mean = data[0];
//            for (var i = 1;  i < data.length;  ++i) {
//                var x = data[i];
//                var delta = x - this.mean;
//                var sweep = i + 1.0;
//                this.mean += delta / sweep;
//                sqsum += delta * delta * (i / sweep);
//            }
//            this.sum = this.mean * this.count;
//            this.variance = sqsum / this.count;
//            this.sdev = Math.sqrt(this.variance);
//        }
//
//        /** Returns a string that shows all the properties and
//         * their values for this Stats object. */
//        Stats.prototype.toString = function() {
//            var s = 'Stats';
//            for (var attr in this) {
//                if (typeof(this[attr]) != 'function') {
//                    s += '  ' + attr + ' ' + this[attr];
//                }
//            }
//            return s;
//        }
//
//
//        /** Compares two objects using
//         * built-in JavaScript operators. */
//        function ascend(a, b) {
//            if (a < b)
//                return -1;
//            else if (a > b)
//                return 1;
//            return 0;
//        }

      } /* END calculating stats for minigraph clicks */

      //console.info(JSON.stringify(tmp_referrals));
      console.groupEnd();

    } /* End of for(var i = 0; i < arg_referralListingsData.length; i++) {} loop  */

//    console.info('restructureData:\n\n','tmp_referrals',tmp_referrals);
    return tmp_referrals;
  }


  this.init = function ()
  {
    /**
     * Check how many referrals are being shown per page:  If the user is ultimate and has more than 100 referrals showing, minigraphs will not be displayed
     * If the user has fewer than 10 referrals, the option to select the # of referrals is not present, thus refsPerPage must be set manually
    */
    var refsPerPageSelector = document.getElementById('rlpp');
    var refsPerPage = (null === refsPerPageSelector) ? 10 : parseInt(refsPerPageSelector.options[refsPerPageSelector.selectedIndex].value, 10);

    var storedReferralData = get('referrals',{},{ prefType:'JSON' });
    var referralData;

    var tmp_referralDataFromListingsPage = { mtx:'' };
    tmp_referralDataFromListingsPage = extractReferralDataFromListingsPage();

    if(-1 !== tmp_referralDataFromListingsPage)
    {
      // Restructure the data from the given mtx=[] format into the same structure as our stored info
      var tmp_referralsOnCurrentPage = restructureData(tmp_referralDataFromListingsPage.mtx);

      // Merge the newly fetched data with the stored data
      referralData = Object_merge(storedReferralData,tmp_referralsOnCurrentPage);

      set('referrals',referralData,{ prefType:'JSON' });
    }
  }
};

if(0 < location.href.indexOf('ss3=1') || 0 < location.href.indexOf('ss3=2')) {
  referralListings.init();
}

var logo =
{
  insert: function()
  {
    // Inserts the logo for the script into the page

    // the language icon in upper right of page
    var xpathResults_logoLocation = docEvaluate('//ul[@id="menu"]/li[@id="menuli"]/parent::ul/parent::td');

    if (1 == xpathResults_logoLocation.snapshotLength)
    {

      // Container for logo image to allow it to look correct in the page
      if(document.getElementById('spanghurtLogoContainer')){
        document.getElementById('spanghurtLogoContainer').parentNode.removeChild(document.getElementById('spanghurtLogoContainer'));
      }
      var elmnt_td = document.createElement('td');
      elmnt_td.id = 'spanghurtLogoContainer';

      elmnt_td.style.paddingLeft = '8px';
      elmnt_td.style.paddingRight = '8px';
      elmnt_td.innerHTML = ' &nbsp;|&nbsp; &nbsp;';


      if(document.getElementById('spanghurtLogo')){
        document.getElementById('spanghurtLogo').parentNode.removeChild(document.getElementById('spanghurtLogo'));
      }

      var elmnt_logoImage = document.createElement('img');
      elmnt_logoImage.id = 'spanghurtLogo';

      elmnt_logoImage.setAttribute('rel', '#scriptPreferences');

      elmnt_logoImage.style.cursor = 'pointer';
      elmnt_logoImage.border = "0";
      elmnt_logoImage.width = '16';
      elmnt_logoImage.alt = 'Spanghurt Greasemonkey Script Preferences';
      elmnt_logoImage.title = 'Spanghurt Greasemonkey Script Preferences';
      elmnt_logoImage.src = 'http://img262.imageshack.us/img262/3654/neobuxv3logolargered2.png';
      // img.src = 'http://img262.imageshack.us/img262/4965/neobuxv3logolargered3.png';



      elmnt_td.appendChild(elmnt_logoImage);

      xpathResults_logoLocation.snapshotItem(0).parentNode.appendChild(elmnt_td);

    }
  },

  addClickEvent: function()
  {

  },

  init: function()
  {
    this.insert();
    this.addClickEvent();
  }

};

logo.init();




var chartDataBars = new function()
{
  this.maxDataBarWidth = 0;
  this.graphsOnCurrentPage = [];

  for(var i=0; i < availableGraphs.length; i++){
    if(document.getElementById(availableGraphs[i])){
      this.graphsOnCurrentPage.push(availableGraphs[i]);
    }
  }


  function insertUnderGraph(arg_containerID, arg_dataBarText, arg_graphBarId, arg_customDataBarCss)
  {
//    debugLog('addDataBarUnderGraph()',arguments);

    if(document.getElementById(arg_graphBarId)) {
      document.getElementById(arg_graphBarId).parentNode.removeChild(document.getElementById(arg_graphBarId));
    }

    var elmt_bar = document.createElement("div");
    elmt_bar.setAttribute("id", arg_graphBarId);
    elmt_bar.setAttribute("class", "graphBar");
    elmt_bar.setAttribute("style", arg_customDataBarCss);

    elmt_bar.innerHTML = arg_dataBarText;

    var chartContainer = document.getElementById(arg_containerID);
    chartContainer.parentNode.appendChild(elmt_bar);

    var currentDataBarWidth = elmt_bar.textContent.split('').length;
    this.maxDataBarWidth = (this.maxDataBarWidth < currentDataBarWidth) ? currentDataBarWidth : this.maxDataBarWidth;
  }

  function dataBarClickHandler(arg_testing){
    alert(arg_testing);
  }

  this.databarIntervals = {
//    10: [0,1,2,3,4,5,6,7,8,9],
    10: [4,6,9],
    15: [4,9,14],
    90: [29,59,89]
  };

  this.getDataBarData = function(arg_graphId)
  {
    var tmp_graphLength = graphLengthLookup[arg_graphId];
    console.info('tmp_graphLength = '+tmp_graphLength);
    console.info(this.databarIntervals[tmp_graphLength]);

    var tmp_dataSet = get('graphData',{},{prefType:'JSON'})[friendlyNameLookup[arg_graphId]];

    var tmp_currentDayData;

    var databarData = { 0: {}, 1: {}, 2: {} };

    var tmp_sum = [];
    var tmp_average = [];

    var tmp_maxInterval = 0;

    var tmp_currentDate;
    var tmp_currentValue;

    var tmp_extensionsMin;
    var tmp_extensionsMax;

    console.info(tmp_dataSet.__count__);
    if(friendlyNameLookup[arg_graphId].match(/extensions_([0-9]+)To([0-9]+)/)){
      tmp_extensionsMin = friendlyNameLookup[arg_graphId].match(/extensions_([0-9]+)To([0-9]+)/)[1];
      tmp_extensionsMax = friendlyNameLookup[arg_graphId].match(/extensions_([0-9]+)To([0-9]+)/)[2];

      for(var j in tmp_dataSet)
      {
        console.info('foobar',arg_graphId, j, tmp_dataSet[j]);

        for(var i= 0; i<this.databarIntervals[tmp_graphLength].length; i++){
          tmp_maxInterval = (this.databarIntervals[tmp_graphLength][i] > tmp_maxInterval) ? this.databarIntervals[tmp_graphLength][i] : tmp_maxInterval;
        }
        console.info('max interval = '+tmp_maxInterval);
        for(var m=0; m<=tmp_maxInterval; m++)
        {
          tmp_currentDate = dates_array[(m * -1) - tmp_extensionsMin];
          if("undefined" !== typeof tmp_dataSet[j][tmp_currentDate]) {
            tmp_currentValue = tmp_dataSet[j][tmp_currentDate];
          }
          else
          {
//            console.info((m * -1), '-',tmp_extensionsMin, ' = ', (m * -1) - tmp_extensionsMin);
//            console.info(tmp_currentDate);
//            console.info(tmp_dataSet[j]);
//            console.info(tmp_currentValue);
          }


          tmp_sum[m] = tmp_sum[m-1] + tmp_currentValue || tmp_currentValue;
          tmp_average[m] = tmp_sum[m] / (m+1);

          databarData[tmp_currentDate] = {
            'value': tmp_currentValue,
            'sum': tmp_sum[m],
            'avg': tmp_average[m]
          };
//          console.info('JSON.stringify(databarData['+tmp_currentDate+']) = '+JSON.stringify(databarData[tmp_currentDate]));
        }
      }
    }
    else
    {
      for(var j in tmp_dataSet)
      {
        console.group();
        console.info(arg_graphId, j, tmp_dataSet[j]);

        for(var i= 0; i<this.databarIntervals[tmp_graphLength].length; i++){
          tmp_maxInterval = (this.databarIntervals[tmp_graphLength][i] > tmp_maxInterval) ? this.databarIntervals[tmp_graphLength][i] : tmp_maxInterval;
        }
        console.info('max interval = '+tmp_maxInterval);
        for(var m=0; m<=tmp_maxInterval; m++)
        {
          tmp_currentDate = dates_array[m];
          tmp_currentValue = tmp_dataSet[j][tmp_currentDate];

          tmp_sum[m] = tmp_sum[m-1] + tmp_currentValue || tmp_currentValue;
          tmp_average[m] = tmp_sum[m] / (m+1);

          console.info(arg_graphId+' - '+m+'\n','tmp_currentDate = ',tmp_currentDate,'\n','tmp_currentValue = ',tmp_currentValue,'\n','tmp_sum[m] = ',tmp_sum[m],'\n','tmp_average[m] = ',tmp_average[m]);

          databarData[tmp_currentDate] = {
            'value': tmp_currentValue,
            'sum': tmp_sum[m],
            'avg': tmp_average[m]
          };
          console.info(arg_graphId+' - '+m+'\n','JSON.stringify(databarData['+tmp_currentDate+']) = '+JSON.stringify(databarData[tmp_currentDate]));          
        }
        console.info(arg_graphId+' - '+m+'\n','JSON.stringify(databarData) = '+JSON.stringify(databarData));
        console.groupEnd();
      }
    }


    return databarData;

  };

  this.init = function()
  {
    //    alert('foo');
    var graphBarCSS = ".graphBar { border:1px solid #AAAAAA; color:#444444; clear:both; font-family:verdana; font-size:9px; font-weight:bold; height:14px; margin: -11px auto 10px; max-width: 82%; min-width:75%; padding:1px 2%; text-align:left; vertical-align:middle; white-space:nowrap; width:"+(this.maxDataBarWidth/1.75)+"em; }";
    GM_addStyle(graphBarCSS);

    var tmp_dataBarText;
    var tmp_dataSet;
    var tmp_databarDataToOutput;
    var tmp_graphLength;

    for(var i=0; i < this.graphsOnCurrentPage.length; i++)
    {

      tmp_graphLength = graphLengthLookup[this.graphsOnCurrentPage[i]];
      tmp_dataSet = this.getDataBarData(this.graphsOnCurrentPage[i]);
      var tmp_dateAdjuster = friendlyNameLookup[this.graphsOnCurrentPage[i]].match(/extensions_([0-9]+)To([0-9]+)/) || [-1,0];

      var tmp_counter = 0;


      console.info('-- tmp_dateAdjuster[1] = '+tmp_dateAdjuster[1] +'--');

      // Now do the averages bar
      tmp_databarDataToOutput = [];
      console.info('this.databarIntervals[tmp_graphLength].length = '+this.databarIntervals[tmp_graphLength].length);
      for(var y=0; y<this.databarIntervals[tmp_graphLength].length; y++){
        console.info('this.databarIntervals[tmp_graphLength][y] = '+this.databarIntervals[tmp_graphLength][y]);

        var tmp_extensionGraphs = (this.graphsOnCurrentPage[i].match(/extensions_([0-9]+)To([0-9]+)/)) ? true : false;

        tmp_counter = (tmp_dateAdjuster[0] == -1) ? y : -this.databarIntervals[tmp_graphLength][y] - tmp_dateAdjuster[1];
        tmp_databarDataToOutput.push([
          '('+
              (this.databarIntervals[tmp_graphLength][y]+1)+
              ') ' +
              tmp_dataSet[dates_array[tmp_counter]]['avg'].toFixed(3)
        ]);
      }
      tmp_dataBarText = 'Averages: '+ tmp_databarDataToOutput.join(' ');
      insertUnderGraph(this.graphsOnCurrentPage[i], tmp_dataBarText, this.graphsOnCurrentPage[i]+'__'+i+'mean', 'margin-top:10px;');


      // Do the sums bar
      tmp_databarDataToOutput = [];
//      tmp_counter = 0;
      for(var y=0; y<this.databarIntervals[tmp_graphLength].length; y++){
//        console.info(y,
//            tmp_counter);
//        console.info(
//            'avg_'+this.databarIntervals[tmp_graphLength][y],
//            this.databarIntervals[tmp_graphLength][y],
//            dates_array[this.databarIntervals[tmp_graphLength][y]],
//            tmp_dataSet[dates_array[tmp_counter]]);
        
        tmp_databarDataToOutput[y] =
          '('+
              (this.databarIntervals[tmp_graphLength][y]+1)+
              ') ' +
              tmp_dataSet[dates_array[y]]['sum'].toFixed(3);
      }
      tmp_dataBarText = 'Sum: '+ tmp_databarDataToOutput.join(' ');
      insertUnderGraph(this.graphsOnCurrentPage[i], tmp_dataBarText, this.graphsOnCurrentPage[i]+'__'+i+'_sum', '');



      // Do the Avg. Income bar
      tmp_databarDataToOutput = [];
      for(var y=0; y<this.databarIntervals[tmp_graphLength].length; y++){
        tmp_databarDataToOutput.push([
          '('+
              (this.databarIntervals[tmp_graphLength][y]+1)+
              ') ' +
              '$'+(tmp_dataSet[dates_array[y]]['avg']*0.01).toFixed(3)
        ]);
      }
      tmp_dataBarText = 'Avg. Income: '+ tmp_databarDataToOutput.join(' ');
      insertUnderGraph(this.graphsOnCurrentPage[i], tmp_dataBarText, this.graphsOnCurrentPage[i]+'__'+i+'_avgIncome', '');

    }

    //    var dataBarsOnPage = document.body.getElementsBy
    //    document.getElementById(this.graphsOnCurrentPage[i]+'_'+i).addEventListener('click', function(){ dataBarClickHandler(this.graphsOnCurrentPage[i]+'_'+i); }, false);
  };

};

chartDataBars.init();



if(false){
function insertChartDataBars()
{
  var maxDataBarWidth = 0;


  console.group();
  for (var i = 0; i < graphsOnCurrentPage.length; i++)
  {
    console.group();
    debugLog('i = '+i);

    debugLog('graphsOnCurrentPage[i]');
    debugLog(graphsOnCurrentPage[i]);
    debugLog('friendlyNameLookup[graphsOnCurrentPage[i]]');
    debugLog(friendlyNameLookup[graphsOnCurrentPage[i]]);

    var _currentGraph = _graphs[friendlyNameLookup[graphsOnCurrentPage[i]]];

    if(_currentGraph)
    {

      debugLog('_currentGraph');
      debugLog(_currentGraph);

      // Get the time periods appropriate for each graph size
      var graph_timePeriod = [];

      switch (_currentGraph.data.__count__)
      {
        case 15:
          graph_timePeriod = script.preferences.timePeriods.largeGraph;
          break;
        case 10:
          graph_timePeriod = script.preferences.timePeriods.smallGraph;
          break;
        case 90:
          graph_timePeriod = script.preferences.timePeriods.extensionsGraph;
          break;
      }

      var sum_Array = new Array();
      var avg_Array = new Array();

      for (var j = 0; j < graph_timePeriod.length; j++)
      {
        if('undefined' !== typeof _currentGraph.sum[graph_timePeriod[j]]) {
          //GM_log((j+1) + ' /  ' + graph_timePeriod.length+'\n\n'+_currentGraph.containerID);
          sum_Array.push([graph_timePeriod[j], _currentGraph.sum[graph_timePeriod[j]].toFixed(3)]);
          avg_Array.push([graph_timePeriod[j], _currentGraph.mean[graph_timePeriod[j]].toFixed(3)]);
        }
        else
        {
          //GM_log((j+1) + ' /  ' + graph_timePeriod.length+' = '+graph_timePeriod[j]+'\n\n'+_currentGraph.containerID);
        }
      }

      debugLog('sum_Array,avg_Array,graph_timePeriod');
      debugLog(sum_Array,avg_Array,graph_timePeriod);


      // Extra processing needed for the extensions graph so process separately..
      if ('ch_ext_schedule1' === _currentGraph.containerID ||
            'ch_ext_schedule2' === _currentGraph.containerID ||
            'ch_ext_schedule3' === _currentGraph.containerID ||
            'ch_ext_schedule4' === _currentGraph.containerID ||
            'ch_ext_schedule5' === _currentGraph.containerID ||
            'ch_ext_schedule6' === _currentGraph.containerID ||
            'ch_ext_schedule7' === _currentGraph.containerID ||
            'ch_ext_schedule8' === _currentGraph.containerID)
      {
        var extensionsArray = [[],[],[],[],[],[],[],[],[],[]];
        graph_timePeriod = [7,15,30,60,90,120,150,180,210,240,270,300,330,360,390,410,440,470,500,530,560,590,610,640,670,700];
        var tmp_extensionsGraphNumber = 1* _currentGraph.containerID.replace(/ch_ext_schedule/,'');

        debugLog('graph_timePeriod.length = '+graph_timePeriod.length);

        var timeAdjustment = 0;

        console.info('graph_timePeriod.length');
        console.info(graph_timePeriod.length);
        for (var k = 0; k < graph_timePeriod.length; k++)
        {
          if(0 <= graph_timePeriod[k]) { timeAdjustment = 0; }
          if(90 < graph_timePeriod[k]) { timeAdjustment = 90; }
          if(180 < graph_timePeriod[k]) { timeAdjustment = 180; }
          if(270 < graph_timePeriod[k]) { timeAdjustment = 270; }
          if(360 < graph_timePeriod[k]) { timeAdjustment = 360; }
          if(450 < graph_timePeriod[k]) { timeAdjustment = 450; }
          if(540 < graph_timePeriod[k]) { timeAdjustment = 540; }
          if(630 < graph_timePeriod[k]) { timeAdjustment = 630; }
          if(720 < graph_timePeriod[k]) { timeAdjustment = 720; }

  //        console.info('graph_timePeriod['+k+'] = ',graph_timePeriod[k]);
  //        console.info('timeAdjustment',timeAdjustment);

          var tmp_extensionGraphIndex = parseInt((graph_timePeriod[k]-1)/90,10)+1;
          if(!extensionsArray[tmp_extensionGraphIndex]) {
            console.info('extensionsArray[tmp_extensionGraphIndex]',extensionsArray[tmp_extensionGraphIndex]);
            console.info('extensionsArray',extensionsArray);
            console.info('tmp_extensionGraphIndex',tmp_extensionGraphIndex);
          }

          var tmp_thisDay = _currentGraph.sum[graph_timePeriod[k]-timeAdjustment];
          var tmp_previousDay = _currentGraph.sum[graph_timePeriod[k-1]-timeAdjustment];

          if(!tmp_previousDay){
            tmp_previousDay = _currentGraph.sum[(graph_timePeriod[k-1]-timeAdjustment)+1];
            console.info('tmp_thisDay', tmp_thisDay);
            console.info('tmp_previousDay', tmp_previousDay);
            console.info(graph_timePeriod[k-1],timeAdjustment,_currentGraph.sum);
          }

          if(0 === k){
            extensionsArray[tmp_extensionGraphIndex].push([timeAdjustment+'-' + graph_timePeriod[k], tmp_thisDay]);
          }
          else
          {
            extensionsArray[tmp_extensionGraphIndex].push([(graph_timePeriod[k-1]+1) + '-' + (graph_timePeriod[k]), (tmp_thisDay - tmp_previousDay)]);
          }
        }

        extensionsArray[tmp_extensionsGraphNumber].push([
          'Other',
          (parseInt(myAccountDetails.numberOfRefs.Rented, 10) - parseInt(_currentGraph.sum[graph_timePeriod[graph_timePeriod.length-1]-timeAdjustment], 10))
        ]);

  console.info(extensionsArray);

        addDataBarUnderGraph('Extensions due: ', _currentGraph.containerID, ' (', extensionsArray[tmp_extensionsGraphNumber], ') ', 'margin-top:10px;');

      } else
      {

        /**
         * Insert data bars below graphs
         */


        console.info('_currentGraph',_currentGraph);
        document.getElementById(_currentGraph.containerID).parentNode.style.height = '150px';

        // Averages bar goes under all graphs
        addDataBarUnderGraph('Averages :', _currentGraph.containerID, ' (', avg_Array, ') ', 'margin-top:10px;');

        // Sums bar goes under all graphs
        addDataBarUnderGraph('Sums :', _currentGraph.containerID, ' (', sum_Array, ') ',null);

        switch (_currentGraph.containerID)
        {
          case 'ch_cliques':
            // Personal clicks in 'Account Summary'

            var personalClicks_Array = new Array();
            for (var j = 0; j < graph_timePeriod.length; j++)
            {
              var tmp = [graph_timePeriod[j], (_currentGraph.sum[graph_timePeriod[j]] * myAccountDetails.ownClickValue).toFixed(3)];
              personalClicks_Array.push(tmp);
            }

            addDataBarUnderGraph('Avg. Income :', _currentGraph.containerID, ' (', personalClicks_Array, ') $',null);

            // Need to increase the height of the container to fix issue with the 'Congratulations: You've been active everyday.' message not wrapping correctly
            document.getElementById(_currentGraph.containerID).parentNode.style.height = "206px";

            break;

          case 'ch_cd':
          // cd = "Clicks Direct" / Direct clicks graph in 'Referral Statistics' page
          case 'ch_cr':
            // cr = "Clicks Rented" / Rented clicks graph in 'Referral Statistics' page

            var rentedClicks_Array = new Array();
            for (var j = 0; j < graph_timePeriod.length; j++)
            {
              var tmp = [graph_timePeriod[j], (_currentGraph.sum[graph_timePeriod[j]] * myAccountDetails.referralClickValue).toFixed(3)];
              rentedClicks_Array.push(tmp);
            }

            addDataBarUnderGraph('Avg. Income :', _currentGraph.containerID, ' (', rentedClicks_Array, ') $',null);

            break;

          case 'ch_recycle':
          // Recycling Expenses graph in 'Referral Statistics' page
          case 'ch_autopay':
          // Autopay Expenses graph in 'Referral Statistics' page
          case 'ch_extensions':
            // Extensions Expenses graph in 'Referral Statistics' page

            addDataBarUnderGraph('Avg. Expenses :', _currentGraph.containerID, ' (', sum_Array, ') $',null);

            break;

          case 'ch_trrb':
            // trrb = "Transfers to Rented Balance " / Transfers to Rental Balance graph in 'Referral Statistics' page

            addDataBarUnderGraph('Avg. Transfers :', _currentGraph.containerID, ' (', sum_Array, ') $',null);

            break;

          case 'ch_profit':
            // Profit graph for Ultimates

            // Need to increase the height of the container to fix issue with the 'Congratulations: You've been active everyday.' message not wrapping correctly
            //document.getElementById(_currentGraph.containerID).parentNode.style.height = "180px";

            break;
        }
      }
    }
  console.groupEnd();
  }
  console.groupEnd();
}

}



// if(false) allows for easy nesting of the code and allows it to be highlighted without worry about it being executed
if(false)
{

  /*
  * Need to grab the data that is contained within p,
  * so will overwrite the function to make it add the data in p to the localStorage
  */
  // ORIGINAL - 30/12/2010
  //function ved1(o, p) {
  //console.info('ved1(o,p)',arguments);
  //  if (p == "0") {
  //    ved2(o, p);
  //  } else {
  //    ved_cht(o, p);
  //  }
  //}

  function ved1(o, p)
  {

    // Date strings for the last 90 days
    var dates_array = [];
    var i=0;
    do {
      var tmpDate = new Date();
      tmpDate.setDate(new Date().getDate() - i);
      dates_array[i] = tmpDate.getFullYear() + '/' + padZeros(tmpDate.getMonth()+1, 2) + '/' + padZeros(tmpDate.getDate(), 2);
      i++;
    }while(90 >= i);

    //console.info("ved1(o,p)", arguments);

    var tmpData = JSON.parse('{ "data":'+p.replace(/'/g,'"')+'}');

    var tmp_ID = tmpData.data[0];
    var tmp_Clicks = tmpData.data[1];
    var tmp_CreditedClicks = tmpData.data[2] || tmpData.data[1];

    var tmpObj_referral = {};
    var tmp_refID = tmp_ID.match(/[0-9]+/);

    tmpObj_referral[tmp_refID] = {
      ID: tmp_ID,
      clickData: {
        clicks: {},
        creditedClicks: {}
      }
    };

    for(var i = 0; i < tmp_Clicks.length; i++) {
      tmpObj_referral[tmp_refID].clickData.clicks[dates_array[tmp_Clicks.length - i - 1]] = tmp_Clicks[i];
      tmpObj_referral[tmp_refID].clickData.creditedClicks[dates_array[tmp_Clicks.length - i - 1]] = tmp_CreditedClicks[i];
    }

    // console.info(tmpObj_referral);
    var tmp_StoredRefData = JSON.parse(localStorage.getItem('referrals'));
    Object_merge(tmp_StoredRefData,tmpObj_referral);

    localStorage.setItem('referrals',JSON.stringify(tmp_StoredRefData));
    //console.info(JSON.parse(localStorage.getItem('referrals')));

    // </end> custom code
    // <begin> Original function:
    if ("0" == p) {
      ved2(o, p);
    } else {
      ved_cht(o, p);
    }
  }

  // Insert the functions into page-land using the 'location hack'
  location.href = 'javascript:' + Object_merge + padZeros + ved1;


  /*

  function ved_tt(o, p) {
  console.info('ved_tt(o, p)',arguments);

    var pos = jQuery("#refch" + o).offset();
    var width = -284;
    jQuery("#chtdiv0").css({left: pos.left + width + ("px"), top: pos.top + "px"});
    d("chtdiv").innerHTML = "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" height=\"100%\"><tr><td align=\"center\"><img src=\"" + imgserver + "/imagens/n/wait_g.gif\" width=\"32\" height=\"32\"></td></tr></table>";
    d("chtdiv_t").innerHTML = "&nbsp;";
    jQuery("#chtdiv0").show();
    ved(o, p);
  }

  function mk_ch_ref(x, o, w0, w, O, L, m) {

  console.info('mk_ch_ref(x, o, w0, w, O, L, m)',arguments);

    if (m == 0) {
      n = [0, 0, 0];
    } else {
      n = m;
    }
    var s1 = 20, s2 = 20, s3 = 20, s4 = 50;
    if (L == 1) {
      s3 = 30;
    }
    var g = [s1, s2, s3, s4];
    var chart = new (Highcharts.Chart)({
      chart: {
        renderTo: x,
        defaultSeriesType: "line",
        margin: g,
        showAxes: 1,
        borderWidth: 0,
        shadow: 0
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: o,
        labels: {
          enabled: 0
        },
        tickmarkPlacement: "on",
        gridLineWidth: 1,
        lineColor: "#fff",
        tickColor: "#fff",
        gridLineColor: "#ddd"
      },
      yAxis: {
        title: {
          enabled: 0,
          text: null
        },
        min: -0.1,
        endOnTick: 0,
        startOnTick: 0,
        tickPixelInterval: 20,
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#888"
          }
        ]
      },
      tooltip: {
        formatter: function () {
          return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + w0 + this.y + " " + w;
        }
      },
      legend: {
        enabled: L,
        layout: "horizontal",
        symbolWidth: 5,
        style: {
          left: "auto",
          bottom: "5px",
          right: "5px",
          top: "auto",
          font: "normal 12px Verdana, sans-serif"
        }
      },
      plotOptions: {
        line: {
          lineWidth: 2,
          marker: {
            enabled: 1,
            symbol: "circle",
            radius: 3,
            states: {
              hover: {
                enabled: 1,
                radius: 5
              }
            }
          }
        }
      },
      series: O,
      credits: {
        enabled: 0
      }
    });

    chart.updatePosition();
  }

  */
}








// x = id of the container where the graph is to be inserted
// y = title displayed on the graph
// o = x axis categories
// w0 = prefix to x axis value in tooltip
// w = suffix to x axis value in tooltip
// O = array containing x series values and title above the graph
// L = legend enabled [true|false]
// m = y axis plot bands (3-value array or 0)
// mn = y-axis minimum
// p = x-axis plot bands (3-value array or 0)

//function mk_ch(x, y, o, w0, w, O, L, m, mn, p)

function mk_ch(x, y, o, w0, w, O, L, m, mn, p)
{
if (true != xuw) return '';
if (0 == m) n = [0, 0, 0];
else n = m;
if (0 == p) pn = [0, 0, 0, 0];
else pn = p;
var s1 = 30,
  s2 = 20,
  s3 = 20,
  s4 = 50;
if (1 == L) s1 = 20, s3 = 30;
if ('' == y) s1 = 10;
if ('x' == mn) {
mn = -0.2;
maxout = 4
} else maxout = null;
var g = [s1, s2, s3, s4];
var chart = new Highcharts.Chart({
chart: {
  renderTo: x,
  defaultSeriesType: 'line',
  margin: g,
  showAxes: 1,
  borderColor: '#4572A7',
  backgroundColor: '#fff',
  borderWidth: 0,
  shadow: 0
},
title: {
  text: y,
  style: {
    margin: '10px 0 0 10px',
    textAlign: 'center',
    font: 'normal 12px Verdana, sans-serif'
  }
},
xAxis: {
  categories: o,
  labels: {
    enabled: 0
  },
  tickmarkPlacement: "on",
  gridLineWidth: 1,
  lineColor: '#fff',
  tickColor: '#fff',
  gridLineColor: (0 == p) ? '#eee' : '',
  plotBands: [{
    from: 0,
    to: pn[0],
    color: 'rgba(170,170,170,.3)'
  },
    {
      from: pn[0],
      to: pn[1],
      color: 'rgba(255,101,79,.3)'
    },
    {
      from: pn[1],
      to: pn[2],
      color: 'rgba(246,189,15,.3)'
    },
    {
      from: pn[2],
      to: pn[3],
      color: 'rgba(139,186,0,.3)'
    }]
},
yAxis: {
  title: {
    enabled: 0,
    text: null
  },
  min: mn,
  max: maxout,
  endOnTick: 0,
  startOnTick: 0,
  tickPixelInterval: 20,
  plotLines: [{
    value: 0,
    width: 1,
    color: '#888'
  }],
  plotBands: [{
    from: 0,
    to: n[0],
    color: 'rgba(255,101,79,.3)'
  },
    {
      from: n[0],
      to: n[1],
      color: 'rgba(246,189,15,.3)'
    },
    {
      from: n[1],
      to: n[2],
      color: 'rgba(139,186,0,.3)'
    }]
},
tooltip: {
  formatter: function () {
    return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + w0 + this.y + ' ' + w
  }
},
legend: {
  enabled: L,
  layout: 'horizontal',
  symbolWidth: 5,
  style: {
    left: 'auto',
    bottom: '5px',
    right: '5px',
    top: 'auto',
    font: 'normal 12px Verdana, sans-serif'
  }
},
plotOptions: {
  line: {
    lineWidth: 2,
    marker: {
      enabled: 1,
      symbol: 'circle',
      radius: 3,
      states: {
        hover: {
          enabled: 1,
          radius: 5
        }
      }
    }
  }
},
series: O,
credits: {
  enabled: 0
}
})
}

function mk_ch2(_containerID, _graphTitle, _x_axisCategories, _tooltipPrefix, _tooltipSuffix, _x_ValuesAndTitle, _legendEnabled, _y_axisPlotBands, _y_axisMin, _x_axisPlotBands) {
var pn;

if (0 === _y_axisPlotBands) {
n = [0, 0, 0];
} else {
n = _y_axisPlotBands;
}
if (0 === _x_axisPlotBands) {
pn = [0, 0, 0, 0];
} else {
pn = _x_axisPlotBands;
}
var s1 = 30,
  s2 = 20,
  s3 = 20,
  s4 = 50;
if (1 == _legendEnabled) {
s1 = 20, s3 = 30;
}
if ("" == _graphTitle) {
s1 = 10;
}
if ("x" == _y_axisMin) {
_y_axisMin = -0.2;
maxout = 4;
} else {
maxout = null;
}
var g = [s1, s2, s3, s4];


var chart = new(Highcharts.Chart)({
chart: {
  renderTo: _containerID,
  defaultSeriesType: "line",
  margin: g,
  showAxes: 1,
  borderColor: "#4572A7",
  backgroundColor: "#fff",
  borderWidth: 0,
  shadow: 0
},
title: {
  text: _graphTitle,
  style: {
    margin: "10px 0 0 10px",
    textAlign: "center",
    font: "normal 12px Verdana,sans-serif"
  }
},
xAxis: {
  categories: _x_axisCategories,
  labels: {
    enabled: 0
  },
  tickmarkPlacement: "on",
  gridLineWidth: 1,
  lineColor: "#fff",
  tickColor: "#fff",
  gridLineColor: 0 === _x_axisPlotBands ? "#eee" : "",
  plotBands: [{
    from: 0,
    to: pn[0],
    color: "rgba(170,170,170,.25)"
  },
    {
      from: pn[0],
      to: pn[1],
      color: "rgba(255,101,79,.25)"
    },
    {
      from: pn[1],
      to: pn[2],
      color: "rgba(246,189,15,.25)"
    },
    {
      from: pn[2],
      to: pn[3],
      color: "rgba(139,186,0,.25)"
    }]
},
yAxis: {
  title: {
    enabled: 0,
    text: null
  },
  min: _y_axisMin,
  max: maxout,
  endOnTick: 0,
  startOnTick: 0,
  tickPixelInterval: 20,
  plotLines: [{
    value: 0,
    width: 1,
    color: "#888"
  }],
  plotBands: [{
    from: 0,
    to: n[0],
    color: "rgba(255,101,79,.25)"
  },
    {
      from: n[0],
      to: n[1],
      color: "rgba(246,189,15,.25)"
    },
    {
      from: n[1],
      to: n[2],
      color: "rgba(139,186,0,.25)"
    }]
},
tooltip: {
  formatter: function () {
    return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + _tooltipPrefix + this.y + " " + _tooltipSuffix;
  }
},
legend: {
  enabled: _legendEnabled,
  layout: "horizontal",
  symbolWidth: 5,
  style: {
    left: "auto",
    bottom: "5px",
    right: "5px",
    top: "auto",
    font: "normal 12px Verdana,sans-serif"
  }
},
plotOptions: {
  line: {
    lineWidth: 2,
    marker: {
      enabled: 1,
      symbol: "circle",
      radius: 3,
      states: {
        hover: {
          enabled: 1,
          radius: 5
        }
      }
    }
  }
},
series: _x_ValuesAndTitle,
credits: {
  enabled: 0
}
});
}


/*

mk_ch2("ch_cliques",
    "",
    ["2010/12/15", "2010/12/16", "2010/12/17", "2010/12/18", "2010/12/19", "2010/12/20", "2010/12/21", "2010/12/22", decodeURIComponent(escape("Yesterday")), decodeURIComponent(escape("Today"))],
    "foo",
    decodeURIComponent(escape("Clicks")),
    [
      {
        name: decodeURIComponent(escape("Local Time")),
        data: [8, 0, 9, 11, 0, 0, 0, 1, 2, 10]
      },
      {
        name: decodeURIComponent(escape("Server Time")),
        data: [8, 2, 7, 11, 0, 0, 0, 3, 4, 6]
      }
    ],
    1,
    [2,4,9],
    -1.1,
    [3]
  ); */

