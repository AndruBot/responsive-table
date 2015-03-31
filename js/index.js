/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*! DataTables 1.10.5
 * ©2008-2015 SpryMedia Ltd - datatables.net/license
 */
(function(Ea,P,k){var O=function(h){function V(a){var b,c,e={};h.each(a,function(d){if((b=d.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=d.replace(b[0],b[2].toLowerCase()),e[c]=d,"o"===b[1]&&V(a[d])});a._hungarianMap=e}function H(a,b,c){a._hungarianMap||V(a);var e;h.each(b,function(d){e=a._hungarianMap[d];if(e!==k&&(c||b[e]===k))"o"===e.charAt(0)?(b[e]||(b[e]={}),h.extend(!0,b[e],b[d]),H(a[e],b[e],c)):b[e]=b[d]})}function O(a){var b=o.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&E(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&E(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");
A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&H(o.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType")}function gb(a){var a=a.oBrowser,b=h("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,
overflow:"scroll"}).append(h('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),c=b.find(".test");a.bScrollOversize=100===c[0].offsetWidth;a.bScrollbarLeft=1!==c.offset().left;b.remove()}function hb(a,b,c,e,d,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;e!==d;)a.hasOwnProperty(e)&&(g=j?b(g,a[e],e,a):a[e],j=!0,e+=f);return g}function Fa(a,b){var c=o.defaults.column,e=a.aoColumns.length,c=h.extend({},o.models.oColumn,c,{nTh:b?b:P.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:
"",aDataSort:c.aDataSort?c.aDataSort:[e],mData:c.mData?c.mData:e,idx:e});a.aoColumns.push(c);c=a.aoPreSearchCols;c[e]=h.extend({},o.models.oSearch,c[e]);ka(a,e,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],e=a.oClasses,d=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=d.attr("width")||null;var f=(d.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),H(o.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),
c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),E(b,c,"sWidth","sWidthOrig"),"number"===typeof c.iDataSort&&(b.aDataSort=[c.iDataSort]),E(b,c,"aDataSort"));var g=b.mData,j=W(g),i=b.mRender?W(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var e=j(a,b,k,c);return i&&b?i(e,b,a,c):e};b.fnSetData=function(a,b,c){return Q(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=
!0);a.oFeatures.bSort||(b.bSortable=!1,d.addClass(e.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=e.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=e.sSortableAsc,b.sSortingClassJUI=e.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=e.sSortableDesc,b.sSortingClassJUI=e.sSortJUIDescAllowed):(b.sSortingClass=e.sSortable,b.sSortingClassJUI=e.sSortJUI)}function X(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;
Ga(a);for(var c=0,e=b.length;c<e;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Y(a);w(a,null,"column-sizing",[a])}function la(a,b){var c=Z(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c=Z(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function aa(a){return Z(a,"bVisible").length}function Z(a,b){var c=[];h.map(a.aoColumns,function(a,d){a[b]&&c.push(d)});return c}function Ha(a){var b=a.aoColumns,c=a.aoData,e=o.ext.type.detect,d,f,g,j,i,h,l,
p,n;d=0;for(f=b.length;d<f;d++)if(l=b[d],n=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=e.length;g<j;g++){i=0;for(h=c.length;i<h;i++){n[i]===k&&(n[i]=y(a,i,d,"type"));p=e[g](n[i],a);if(!p&&g!==e.length-1)break;if("html"===p)break}if(p){l.sType=p;break}}l.sType||(l.sType="string")}}function ib(a,b,c,e){var d,f,g,j,i,m,l=a.aoColumns;if(b)for(d=b.length-1;0<=d;d--){m=b[d];var p=m.targets!==k?m.targets:m.aTargets;h.isArray(p)||(p=[p]);f=0;for(g=p.length;f<g;f++)if("number"===
typeof p[f]&&0<=p[f]){for(;l.length<=p[f];)Fa(a);e(p[f],m)}else if("number"===typeof p[f]&&0>p[f])e(l.length+p[f],m);else if("string"===typeof p[f]){j=0;for(i=l.length;j<i;j++)("_all"==p[f]||h(l[j].nTh).hasClass(p[f]))&&e(j,m)}}if(c){d=0;for(a=c.length;d<a;d++)e(d,c[d])}}function J(a,b,c,e){var d=a.aoData.length,f=h.extend(!0,{},o.models.oRow,{src:c?"dom":"data"});f._aData=b;a.aoData.push(f);for(var b=a.aoColumns,f=0,g=b.length;f<g;f++)c&&Ia(a,d,f,y(a,d,f)),b[f].sType=null;a.aiDisplayMaster.push(d);
(c||!a.oFeatures.bDeferRender)&&Ja(a,d,c,e);return d}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,d){c=na(a,d);return J(a,c.data,d,c.cells)})}function y(a,b,c,e){var d=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,c=f.fnGetData(g,e,{settings:a,row:b,col:c});if(c===k)return a.iDrawError!=d&&null===j&&(R(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=d),j;if((c===g||null===c)&&
null!==j)c=j;else if("function"===typeof c)return c.call(g);return null===c&&"display"==e?"":c}function Ia(a,b,c,e){a.aoColumns[c].fnSetData(a.aoData[b]._aData,e,{settings:a,row:b,col:c})}function Ka(a){return h.map(a.match(/(\\.|[^\.])+/g),function(a){return a.replace(/\\./g,".")})}function W(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=W(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,
c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ka(f);for(var i=0,h=j.length;i<h;i++){f=j[i].match(ba);g=j[i].match(S);if(f){j[i]=j[i].replace(ba,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");i=0;for(h=a.length;i<h;i++)g.push(c(a[i],b,j));a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(S,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===
k)return k;a=a[j[i]]}}return a};return function(b,d){return c(b,d,a)}}return function(b){return b[a]}}function Q(a){if(h.isPlainObject(a))return Q(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,e,d){a(b,"set",e,d)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,e,d){var d=Ka(d),f;f=d[d.length-1];for(var g,j,i=0,h=d.length-1;i<h;i++){g=d[i].match(ba);j=d[i].match(S);if(g){d[i]=d[i].replace(ba,"");a[d[i]]=[];
f=d.slice();f.splice(0,i+1);g=f.join(".");j=0;for(h=e.length;j<h;j++)f={},b(f,e[j],g),a[d[i]].push(f);return}j&&(d[i]=d[i].replace(S,""),a=a[d[i]](e));if(null===a[d[i]]||a[d[i]]===k)a[d[i]]={};a=a[d[i]]}if(f.match(S))a[f.replace(S,"")](e);else a[f.replace(ba,"")]=e};return function(c,e){return b(c,e,a)}}return function(b,e){b[a]=e}}function La(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0}function pa(a,b,c){for(var e=-1,d=0,f=a.length;d<
f;d++)a[d]==b?e=d:a[d]>b&&a[d]--; -1!=e&&c===k&&a.splice(e,1)}function ca(a,b,c,e){var d=a.aoData[b],f,g=function(c,f){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=y(a,b,f,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===d.src)d._aData=na(a,d,e,e===k?k:d._aData).data;else{var j=d.anCells;if(j)if(e!==k)g(j[e],e);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}d._aSortData=null;d._aFilterData=null;g=a.aoColumns;if(e!==k)g[e].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;
Ma(d)}}function na(a,b,c,e){var d=[],f=b.firstChild,g,j=0,i,m=a.aoColumns,l=a._rowReadObject,e=e||l?{}:[],p=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),Q(a)(e,b.getAttribute(c)))}},a=function(a){if(c===k||c===j)g=m[j],i=h.trim(a.innerHTML),g&&g._bAttrSrc?(Q(g.mData._)(e,i),p(g.mData.sort,a),p(g.mData.type,a),p(g.mData.filter,a)):l?(g._setter||(g._setter=Q(g.mData)),g._setter(e,i)):e[j]=i;j++};if(f)for(;f;){b=f.nodeName.toUpperCase();if("TD"==b||"TH"==b)a(f),
d.push(f);f=f.nextSibling}else{d=b.anCells;f=0;for(b=d.length;f<b;f++)a(d[f])}return{data:e,cells:d}}function Ja(a,b,c,e){var d=a.aoData[b],f=d._aData,g=[],j,i,h,l,p;if(null===d.nTr){j=c||P.createElement("tr");d.nTr=j;d.anCells=g;j._DT_RowIndex=b;Ma(d);l=0;for(p=a.aoColumns.length;l<p;l++){h=a.aoColumns[l];i=c?e[l]:P.createElement(h.sCellType);g.push(i);if(!c||h.mRender||h.mData!==l)i.innerHTML=y(a,b,l,"display");h.sClass&&(i.className+=" "+h.sClass);h.bVisible&&!c?j.appendChild(i):!h.bVisible&&c&&
i.parentNode.removeChild(i);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,i,y(a,b,l),f,b,l)}w(a,"aoRowCreatedCallback",null,[j,f,b])}d.nTr.setAttribute("role","row")}function Ma(a){var b=a.nTr,c=a._aData;if(b){c.DT_RowId&&(b.id=c.DT_RowId);if(c.DT_RowClass){var e=c.DT_RowClass.split(" ");a.__rowc=a.__rowc?Na(a.__rowc.concat(e)):e;h(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)}c.DT_RowAttr&&h(b).attr(c.DT_RowAttr);c.DT_RowData&&h(b).data(c.DT_RowData)}}function jb(a){var b,c,e,d,
f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(d=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],e=h(f.nTh).addClass(f.sClass),i&&e.appendTo(d),a.oFeatures.bSort&&(e.addClass(f.sSortingClass),!1!==f.bSortable&&(e.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=e.html()&&e.html(f.sTitle),Pa(a,"header")(a,e,f,m);i&&da(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);
h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ea(a,b,c){var e,d,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);e=0;for(d=b.length;e<d;e++){g[e]=b[e].slice();g[e].nTr=b[e].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[e].splice(f,1);j.push([])}e=0;for(d=g.length;e<d;e++){if(a=g[e].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[e].length;f<b;f++)if(m=
i=1,j[e][f]===k){a.appendChild(g[e][f].cell);for(j[e][f]=1;g[e+i]!==k&&g[e][f].cell==g[e+i][f].cell;)j[e+i][f]=1,i++;for(;g[e][f+m]!==k&&g[e][f].cell==g[e][f+m].cell;){for(c=0;c<i;c++)j[e+c][f+m]=1;m++}h(g[e][f].cell).attr("rowspan",i).attr("colspan",m)}}}}function M(a){var b=w(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,e=a.asStripeClasses,d=e.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==B(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=
j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!kb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],p=a.aoData[l];null===p.nTr&&Ja(a,l);l=p.nTr;if(0!==d){var n=e[c%d];p._sRowStripe!=n&&(h(l).removeClass(p._sRowStripe).addClass(n),p._sRowStripe=n)}w(a,"aoRowCallback",null,[l,p._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,
1==a.iDraw&&"ajax"==B(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":d?e[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),"class":a.oClasses.sRowEmpty}).html(c))[0];w(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],La(a),g,m,i]);w(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],La(a),g,m,i]);e=h(a.nTBody);e.children().detach();e.append(h(b));w(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=
!1}}function N(a,b){var c=a.oFeatures,e=c.bFilter;c.bSort&&lb(a);e?fa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;M(a);a._drawHold=!1}function mb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),e=a.oFeatures,d=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=d[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,p,n=0;n<f.length;n++){g=
null;j=f[n];if("<"==j){i=h("<div/>")[0];m=f[n+1];if("'"==m||'"'==m){l="";for(p=2;f[n+p]!=m;)l+=f[n+p],p++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;n+=p}d.append(i);d=h(i)}else if(">"==j)d=d.parent();else if("l"==j&&e.bPaginate&&e.bLengthChange)g=nb(a);else if("f"==j&&e.bFilter)g=ob(a);else if("r"==j&&e.bProcessing)g=pb(a);else if("t"==j)g=qb(a);else if("i"==
j&&e.bInfo)g=rb(a);else if("p"==j&&e.bPaginate)g=sb(a);else if(0!==o.ext.feature.length){i=o.ext.feature;p=0;for(m=i.length;p<m;p++)if(j==i[p].cFeature){g=i[p].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),d.append(g))}c.replaceWith(d)}function da(a,b){var c=h(b).children("tr"),e,d,f,g,j,i,m,l,p,n;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){e=c[f];for(d=e.firstChild;d;){if("TD"==d.nodeName.toUpperCase()||"TH"==d.nodeName.toUpperCase()){l=
1*d.getAttribute("colspan");p=1*d.getAttribute("rowspan");l=!l||0===l||1===l?1:l;p=!p||0===p||1===p?1:p;g=0;for(j=a[f];j[g];)g++;m=g;n=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<p;g++)a[f+g][m+j]={cell:d,unique:n},a[f+g].nTr=e}d=d.nextSibling}}}function qa(a,b,c){var e=[];c||(c=a.aoHeader,b&&(c=[],da(c,b)));for(var b=0,d=c.length;b<d;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!e[f]||!a.bSortCellsTop))e[f]=c[b][f].cell;return e}function ra(a,b,c){w(a,"aoServerParams","serverParams",[b]);
if(b&&h.isArray(b)){var e={},d=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(d);c?(c=c[0],e[c]||(e[c]=[]),e[c].push(b.value)):e[b.name]=b.value});b=e}var f,g=a.ajax,j=a.oInstance;if(h.isPlainObject(g)&&g.data){f=g.data;var i=h.isFunction(f)?f(b):f,b=h.isFunction(f)&&i?i:h.extend(!0,b,i);delete g.data}i={data:b,success:function(b){var f=b.error||b.sError;f&&a.oApi._fnLog(a,0,f);a.json=b;w(a,null,"xhr",[a,b]);c(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var f=a.oApi._fnLog;
"parsererror"==c?f(a,0,"Invalid JSON response",1):4===b.readyState&&f(a,0,"Ajax error",7);C(a,!1)}};a.oAjaxData=b;w(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),c,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(i,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,c,a):(a.jqXHR=h.ajax(h.extend(i,g)),g.data=f)}function kb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,tb(a),function(b){ub(a,b)}),!1):
!0}function tb(a){var b=a.aoColumns,c=b.length,e=a.oFeatures,d=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,p=T(a);g=a._iDisplayStart;i=!1!==e.bPaginate?a._iDisplayLength:-1;var n=function(a,b){j.push({name:a,value:b})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",D(b,"sName").join(","));n("iDisplayStart",g);n("iDisplayLength",i);var k={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:d.sSearch,regex:d.bRegex}};for(g=0;g<c;g++)m=b[g],l=f[g],i="function"==typeof m.mData?"function":
m.mData,k.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),n("mDataProp_"+g,i),e.bFilter&&(n("sSearch_"+g,l.sSearch),n("bRegex_"+g,l.bRegex),n("bSearchable_"+g,m.bSearchable)),e.bSort&&n("bSortable_"+g,m.bSortable);e.bFilter&&(n("sSearch",d.sSearch),n("bRegex",d.bRegex));e.bSort&&(h.each(p,function(a,b){k.order.push({column:b.col,dir:b.dir});n("iSortCol_"+a,b.col);n("sSortDir_"+a,b.dir)}),n("iSortingCols",p.length));b=o.ext.legacy.ajax;
return null===b?a.sAjaxSource?j:k:b?j:k}function ub(a,b){var c=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,d=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(c){if(1*c<a.iDraw)return;a.iDraw=1*c}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(d,10);c=sa(a,b);e=0;for(d=c.length;e<d;e++)J(a,c[e]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;M(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=
h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?W(c)(b):b}function ob(a){var b=a.oClasses,c=a.sTableId,e=a.oLanguage,d=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=e.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=d.sSearch&&(fa(a,{sSearch:b,bRegex:d.bRegex,
bSmart:d.bSmart,bCaseInsensitive:d.bCaseInsensitive}),a._iDisplayStart=0,M(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===B(a)?400:0,i=h("input",b).val(d.sSearch).attr("placeholder",e.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==P.activeElement&&i.val(d.sSearch)}catch(f){}});return b[0]}function fa(a,b,c){var e=
a.oPreviousSearch,d=a.aoPreSearchCols,f=function(a){e.sSearch=a.sSearch;e.bRegex=a.bRegex;e.bSmart=a.bSmart;e.bCaseInsensitive=a.bCaseInsensitive};Ha(a);if("ssp"!=B(a)){vb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<d.length;b++)wb(a,d[b].sSearch,b,d[b].bEscapeRegex!==k?!d[b].bEscapeRegex:d[b].bRegex,d[b].bSmart,d[b].bCaseInsensitive);xb(a)}else f(b);a.bFiltered=!0;w(a,null,"search",[a])}function xb(a){for(var b=o.ext.search,c=a.aiDisplay,
e,d,f=0,g=b.length;f<g;f++){for(var j=[],i=0,h=c.length;i<h;i++)d=c[i],e=a.aoData[d],b[f](a,e._aFilterData,d,e._aData,i)&&j.push(d);c.length=0;c.push.apply(c,j)}}function wb(a,b,c,e,d,f){if(""!==b)for(var g=a.aiDisplay,e=Qa(b,e,d,f),d=g.length-1;0<=d;d--)b=a.aoData[g[d]]._aFilterData[c],e.test(b)||g.splice(d,1)}function vb(a,b,c,e,d,f){var e=Qa(b,e,d,f),d=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==o.ext.search.length&&(c=!0);g=yb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||d.length>
b.length||0!==b.indexOf(d)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)e.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,e){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||"",function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,e?"i":"")}function va(a){return a.replace(Yb,"\\$1")}function yb(a){var b=a.aoColumns,c,e,d,f,g,j,i,h,l=o.ext.type.search;c=!1;e=
0;for(f=a.aoData.length;e<f;e++)if(h=a.aoData[e],!h._aFilterData){j=[];d=0;for(g=b.length;d<g;d++)c=b[d],c.bSearchable?(i=y(a,e,d,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Zb?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Ab(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function rb(a){var b=a.sTableId,c=a.aanFeatures.i,e=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Bb,sName:"information"}),e.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return e[0]}function Bb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,e=a._iDisplayStart+
1,d=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Cb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,e,d,f,g,j));h(b).html(j)}}function Cb(a,b){var c=a.fnFormatNumber,e=a._iDisplayStart+1,d=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===d;return b.replace(/_START_/g,c.call(a,e)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(e/d))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/d)))}function ga(a){var b,c,e=a.iInitDisplayStart,d=a.aoColumns,f;c=a.oFeatures;if(a.bInitialised){mb(a);jb(a);ea(a,a.aoHeader);ea(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ga(a);b=0;for(c=d.length;b<c;b++)f=d[b],f.sWidth&&(f.nTh.style.width=s(f.sWidth));N(a);d=B(a);"ssp"!=d&&("ajax"==d?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)J(a,f[b]);a.iInitDisplayStart=e;N(a);C(a,!1);ta(a,c)},a):(C(a,!1),
ta(a)))}else setTimeout(function(){ga(a)},200)}function ta(a,b){a._bInitComplete=!0;b&&X(a);w(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);w(a,null,"length",[a,c])}function nb(a){for(var b=a.oClasses,c=a.sTableId,e=a.aLengthMenu,d=h.isArray(e[0]),f=d?e[0]:e,e=d?e[1]:e,d=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)d[0][g]=new Option(e[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",d[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());M(a)});h(a.nTable).bind("length.dt.DT",function(b,c,f){a===c&&h("select",i).val(f)});return i[0]}function sb(a){var b=a.sPaginationType,c=o.ext.pager[b],e="function"===typeof c,d=function(a){M(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;e||c.fnInit(a,b,d);f.p||(b.id=a.sTableId+
"_paginate",a.aoDrawCallback.push({fn:function(a){if(e){var b=a._iDisplayStart,h=a._iDisplayLength,m=a.fnRecordsDisplay(),l=-1===h,b=l?0:Math.ceil(b/h),h=l?1:Math.ceil(m/h),m=c(b,h),p,l=0;for(p=f.p.length;l<p;l++)Pa(a,"pageButton")(a,f.p[l],l,m,b,h)}else c.fnUpdate(a,d)},sName:"pagination"}));return b}function Ta(a,b,c){var e=a._iDisplayStart,d=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===d?e=0:"number"===typeof b?(e=b*d,e>f&&(e=0)):"first"==b?e=0:"previous"==b?(e=0<=d?e-d:0,0>e&&(e=0)):"next"==
b?e+d<f&&(e+=d):"last"==b?e=Math.floor((f-1)/d)*d:R(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==e;a._iDisplayStart=e;b&&(w(a,null,"page",[a]),c&&M(a));return b}function pb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");w(a,null,"processing",[a,b])}function qb(a){var b=h(a.nTable);b.attr("role",
"grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var e=c.sX,d=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");l.length||(l=null);c=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:e?!e?null:s(e):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",
width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({overflow:"auto",height:!d?null:s(d),width:!e?null:s(e)}).append(b));l&&c.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:e?!e?null:s(e):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));
var b=c.children(),p=b[0],f=b[1],n=l?b[2]:null;if(e)h(f).on("scroll.DT",function(){var a=this.scrollLeft;p.scrollLeft=a;l&&(n.scrollLeft=a)});a.nScrollHead=p;a.nScrollBody=f;a.nScrollFoot=n;a.aoDrawCallback.push({fn:Y,sName:"scrolling"});return c[0]}function Y(a){var b=a.oScroll,c=b.sX,e=b.sXInner,d=b.sY,f=b.iBarWidth,g=h(a.nScrollHead),j=g[0].style,i=g.children("div"),m=i[0].style,l=i.children("table"),i=a.nScrollBody,p=h(i),n=i.style,k=h(a.nScrollFoot).children("div"),q=k.children("table"),o=h(a.nTHead),
r=h(a.nTable),t=r[0],u=t.style,K=a.nTFoot?h(a.nTFoot):null,ha=a.oBrowser,w=ha.bScrollOversize,x,v,y,L,z,A=[],B=[],C=[],D,E=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};r.children("thead, tfoot").remove();z=o.clone().prependTo(r);x=o.find("tr");y=z.find("tr");z.find("th, td").removeAttr("tabindex");K&&(L=K.clone().prependTo(r),v=K.find("tr"),L=L.find("tr"));c||(n.width="100%",g[0].style.width="100%");h.each(qa(a,z),function(b,c){D=
la(a,b);c.style.width=a.aoColumns[D].sWidth});K&&G(function(a){a.style.width=""},L);b.bCollapse&&""!==d&&(n.height=p[0].offsetHeight+o[0].offsetHeight+"px");g=r.outerWidth();if(""===c){if(u.width="100%",w&&(r.find("tbody").height()>i.offsetHeight||"scroll"==p.css("overflow-y")))u.width=s(r.outerWidth()-f)}else""!==e?u.width=s(e):g==p.width()&&p.height()<r.height()?(u.width=s(g-f),r.outerWidth()>g-f&&(u.width=s(g))):u.width=s(g);g=r.outerWidth();G(E,y);G(function(a){C.push(a.innerHTML);A.push(s(h(a).css("width")))},
y);G(function(a,b){a.style.width=A[b]},x);h(y).height(0);K&&(G(E,L),G(function(a){B.push(s(h(a).css("width")))},L),G(function(a,b){a.style.width=B[b]},v),h(L).height(0));G(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+C[b]+"</div>";a.style.width=A[b]},y);K&&G(function(a,b){a.innerHTML="";a.style.width=B[b]},L);if(r.outerWidth()<g){v=i.scrollHeight>i.offsetHeight||"scroll"==p.css("overflow-y")?g+f:g;if(w&&(i.scrollHeight>i.offsetHeight||"scroll"==p.css("overflow-y")))u.width=
s(v-f);(""===c||""!==e)&&R(a,1,"Possible column misalignment",6)}else v="100%";n.width=s(v);j.width=s(v);K&&(a.nScrollFoot.style.width=s(v));!d&&w&&(n.height=s(t.offsetHeight+f));d&&b.bCollapse&&(n.height=s(d),b=c&&t.offsetWidth>i.offsetWidth?f:0,t.offsetHeight<i.offsetHeight&&(n.height=s(t.offsetHeight+b)));b=r.outerWidth();l[0].style.width=s(b);m.width=s(b);l=r.height()>i.clientHeight||"scroll"==p.css("overflow-y");ha="padding"+(ha.bScrollbarLeft?"Left":"Right");m[ha]=l?f+"px":"0px";K&&(q[0].style.width=
s(b),k[0].style.width=s(b),k[0].style[ha]=l?f+"px":"0px");p.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)i.scrollTop=0}function G(a,b,c){for(var e=0,d=0,f=b.length,g,j;d<f;){g=b[d].firstChild;for(j=c?c[d].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,e):a(g,e),e++),g=g.nextSibling,j=c?j.nextSibling:null;d++}}function Ga(a){var b=a.nTable,c=a.aoColumns,e=a.oScroll,d=e.sY,f=e.sX,g=e.sXInner,j=c.length,e=Z(a,"bVisible"),i=h("th",a.nTHead),m=b.style.width||b.getAttribute("width"),l=b.parentNode,p=
!1,n,k;for(n=0;n<e.length;n++)k=c[e[n]],null!==k.sWidth&&(k.sWidth=Db(k.sWidthOrig,l),p=!0);if(!p&&!f&&!d&&j==aa(a)&&j==i.length)for(n=0;n<j;n++)c[n].sWidth=s(i.eq(n).width());else{j=h(b).clone().empty().css("visibility","hidden").removeAttr("id").append(h(a.nTHead).clone(!1)).append(h(a.nTFoot).clone(!1)).append(h("<tbody><tr/></tbody>"));j.find("tfoot th, tfoot td").css("width","");var q=j.find("tbody tr"),i=qa(a,j.find("thead")[0]);for(n=0;n<e.length;n++)k=c[e[n]],i[n].style.width=null!==k.sWidthOrig&&
""!==k.sWidthOrig?s(k.sWidthOrig):"";if(a.aoData.length)for(n=0;n<e.length;n++)p=e[n],k=c[p],h(Eb(a,p)).clone(!1).append(k.sContentPadding).appendTo(q);j.appendTo(l);f&&g?j.width(g):f?(j.css("width","auto"),j.width()<l.offsetWidth&&j.width(l.offsetWidth)):d?j.width(l.offsetWidth):m&&j.width(m);Fb(a,j[0]);if(f){for(n=g=0;n<e.length;n++)k=c[e[n]],d=h(i[n]).outerWidth(),g+=null===k.sWidthOrig?d:parseInt(k.sWidth,10)+d-h(i[n]).width();j.width(s(g));b.style.width=s(g)}for(n=0;n<e.length;n++)if(k=c[e[n]],
d=h(i[n]).width())k.sWidth=s(d);b.style.width=s(j.css("width"));j.remove()}m&&(b.style.width=s(m));if((m||f)&&!a._reszEvt)h(Ea).bind("resize.DT-"+a.sInstance,ua(function(){X(a)})),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,e,d;return function(){var b=this,g=+new Date,j=arguments;e&&g<e+c?(clearTimeout(d),d=setTimeout(function(){e=k;a.apply(b,j)},c)):(e=g,a.apply(b,j))}}function Db(a,b){if(!a)return 0;var c=h("<div/>").css("width",s(a)).appendTo(b||P.body),e=c[0].offsetWidth;c.remove();return e}
function Fb(a,b){var c=a.oScroll;if(c.sX||c.sY)c=!c.sX?c.iBarWidth:0,b.style.width=s(h(b).outerWidth()-c)}function Eb(a,b){var c=Gb(a,b);if(0>c)return null;var e=a.aoData[c];return!e.nTr?h("<td/>").html(y(a,c,b,"display"))[0]:e.anCells[b]}function Gb(a,b){for(var c,e=-1,d=-1,f=0,g=a.aoData.length;f<g;f++)c=y(a,f,b,"display")+"",c=c.replace($b,""),c.length>e&&(e=c.length,d=f);return d}function s(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Hb(){if(!o.__scrollbarWidth){var a=
h("<p/>").css({width:"100%",height:200,padding:0})[0],b=h("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(a).appendTo("body"),c=a.offsetWidth;b.css("overflow","scroll");a=a.offsetWidth;c===a&&(a=b[0].clientWidth);b.remove();o.__scrollbarWidth=c-a}return o.__scrollbarWidth}function T(a){var b,c,e=[],d=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function(a){a.length&&!h.isArray(a[0])?m.push(a):m.push.apply(m,
a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=d[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=d[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],d[g].asSorting)),e.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:o.ext.type.order[j+"-pre"]})}return e}function lb(a){var b,c,e=[],d=o.ext.type.order,f=a.aoData,g=0,j,h=a.aiDisplayMaster,m;Ha(a);m=T(a);b=0;for(c=m.length;b<c;b++)j=m[b],j.formatter&&g++,Ib(a,
j.col);if("ssp"!=B(a)&&0!==m.length){b=0;for(c=h.length;b<c;b++)e[h[b]]=b;g===m.length?h.sort(function(a,b){var c,d,g,h,j=m.length,i=f[a]._aSortData,k=f[b]._aSortData;for(g=0;g<j;g++)if(h=m[g],c=i[h.col],d=k[h.col],c=c<d?-1:c>d?1:0,0!==c)return"asc"===h.dir?c:-c;c=e[a];d=e[b];return c<d?-1:c>d?1:0}):h.sort(function(a,b){var c,g,h,j,i=m.length,k=f[a]._aSortData,o=f[b]._aSortData;for(h=0;h<i;h++)if(j=m[h],c=k[j.col],g=o[j.col],j=d[j.type+"-"+j.dir]||d["string-"+j.dir],c=j(c,g),0!==c)return c;c=e[a];
g=e[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,e=a.aoColumns,d=T(a),a=a.oLanguage.oAria,f=0,g=e.length;f<g;f++){c=e[f];var h=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<d.length&&d[0].col==f?(i.setAttribute("aria-sort","asc"==d[0].dir?"ascending":"descending"),c=h[d[0].index+1]||h[0]):c=h[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Ua(a,b,c,e){var d=a.aaSorting,f=a.aoColumns[b].asSorting,
g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof d[0]&&(d=a.aaSorting=[d]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(d,"0")),-1!==c?(b=g(d[c],!0),null===b?d.splice(c,1):(d[c][1]=f[b],d[c]._idx=b)):(d.push([b,f[0],0]),d[d.length-1]._idx=0)):d.length&&d[0][0]==b?(b=g(d[0]),d.length=1,d[0][1]=f[b],d[0]._idx=b):(d.length=0,d.push([b,f[0]]),d[0]._idx=0);N(a);"function"==typeof e&&e(a)}function Oa(a,b,c,e){var d=a.aoColumns[c];Va(b,{},function(b){!1!==
d.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,e);"ssp"!==B(a)&&C(a,!1)},0)):Ua(a,c,b.shiftKey,e))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,e=T(a),d=a.oFeatures,f,g;if(d.bSort&&d.bSortClasses){d=0;for(f=b.length;d<f;d++)g=b[d].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>d?d+1:3));d=0;for(f=e.length;d<f;d++)g=e[d].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>d?d+1:3))}a.aLastSort=e}function Ib(a,b){var c=a.aoColumns[b],e=o.ext.order[c.sSortDataType],
d;e&&(d=e.call(a.oInstance,a,b,$(a,b)));for(var f,g=o.ext.type.order[c.sType+"-pre"],h=0,i=a.aoData.length;h<i;h++)if(c=a.aoData[h],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||e)f=e?d[h]:y(a,h,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:zb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,e){return{visible:b.bVisible,search:zb(a.aoPreSearchCols[e])}})};
w(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,e=a.aoColumns;if(a.oFeatures.bStateSave){var d=a.fnStateLoadCallback.call(a.oInstance,a);if(d&&d.time&&(b=w(a,"aoStateLoadParams","stateLoadParams",[a,d]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&d.time<+new Date-1E3*b)&&e.length===d.columns.length))){a.oLoadedState=h.extend(!0,{},d);a._iDisplayStart=d.start;a.iInitDisplayStart=d.start;a._iDisplayLength=d.length;
a.aaSorting=[];h.each(d.order,function(b,c){a.aaSorting.push(c[0]>=e.length?[0,c[1]]:c)});h.extend(a.oPreviousSearch,Ab(d.search));b=0;for(c=d.columns.length;b<c;b++){var f=d.columns[b];e[b].bVisible=f.visible;h.extend(a.aoPreSearchCols[b],Ab(f.search))}w(a,"aoStateLoaded","stateLoaded",[a,d])}}}function za(a){var b=o.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function R(a,b,c,e){c="DataTables warning: "+(null!==a?"table id="+a.sTableId+" - ":"")+c;e&&(c+=". For more information about this error, please see http://datatables.net/tn/"+
e);if(b)Ea.console&&console.log&&console.log(c);else if(b=o.ext,b=b.sErrMode||b.errMode,w(a,null,"error",[a,e,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,e,c)}}function E(a,b,c,e){h.isArray(c)?h.each(c,function(c,f){h.isArray(f)?E(a,b,f[0],f[1]):E(a,b,f)}):(e===k&&(e=c),b[c]!==k&&(a[e]=b[c]))}function Lb(a,b,c){var e,d;for(d in b)b.hasOwnProperty(d)&&(e=b[d],h.isPlainObject(e)?(h.isPlainObject(a[d])||(a[d]={}),h.extend(!0,a[d],e)):a[d]=c&&"data"!==d&&"aaData"!==
d&&h.isArray(e)?e.slice():e);return a}function Va(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,b,c,e){c&&a[b].push({fn:c,sName:e})}function w(a,b,c,e){var d=[];b&&(d=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,e)}));null!==c&&h(a.nTable).trigger(c+".dt",e);return d}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),e=a._iDisplayLength;
b>=c&&(b=c-e);b-=b%e;if(-1===e||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,e=o.ext.renderer[b];return h.isPlainObject(c)&&c[b]?e[c[b]]||e._:"string"===typeof c?e[c]||e._:e._}function B(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Wa(a,b){var c=[],c=Mb.numbers_length,e=Math.floor(c/2);b<=c?c=U(0,b):a<=e?(c=U(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-e?c=U(b-(c-2),b):(c=U(a-1,a+2),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),
c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Aa(b,a)},"num-fmt":function(b){return Aa(b,a,Xa)},"html-num":function(b){return Aa(b,a,Ba)},"html-num-fmt":function(b){return Aa(b,a,Ba,Xa)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Nb(a){return function(){var b=[za(this[o.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return o.ext.internal[a].apply(this,b)}}var o,x,t,r,u,Ya=
{},Ob=/[\r\n]/g,Ba=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Xa=/[',$\u00a3\u20ac\u00a5%\u2009\u202F]/g,I=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var e="string"===typeof a;b&&e&&(a=Qb(a,b));c&&e&&
(a=a.replace(Xa,""));return I(a)||!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return I(a)?!0:!(I(a)||"string"===typeof a)?null:Za(a.replace(Ba,""),b,c)?!0:null},D=function(a,b,c){var e=[],d=0,f=a.length;if(c!==k)for(;d<f;d++)a[d]&&a[d][b]&&e.push(a[d][b][c]);else for(;d<f;d++)a[d]&&e.push(a[d][b]);return e},ia=function(a,b,c,e){var d=[],f=0,g=b.length;if(e!==k)for(;f<g;f++)a[b[f]][c]&&d.push(a[b[f]][c][e]);else for(;f<g;f++)d.push(a[b[f]][c]);return d},U=function(a,b){var c=[],e;b===k?
(b=0,e=a):(e=b,b=a);for(var d=b;d<e;d++)c.push(d);return c},Sb=function(a){for(var b=[],c=0,e=a.length;c<e;c++)a[c]&&b.push(a[c]);return b},Na=function(a){var b=[],c,e,d=a.length,f,g=0;e=0;a:for(;e<d;e++){c=a[e];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ba=/\[.*?\]$/,S=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;o=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,
b).data()};this.api=function(a){return a?new t(za(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),e=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return e.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],e=c.oScroll;a===k||a?b.draw(!1):(""!==e.sX||""!==e.sY)&&Y(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=
function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var e=this.api(!0),a=e.rows(a),d=a.settings()[0],h=d.aoData[a[0][0]];a.remove();b&&b.call(this,d,h);(c===k||c)&&e.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(!a)};this.fnFilter=function(a,b,c,e,d,h){d=this.api(!0);null===b||b===k?d.search(a,c,e,h):d.column(b).search(a,c,e,h);d.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var e=a.nodeName?
a.nodeName.toLowerCase():"";return b!==k||"td"==e||"th"==e?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=
function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[x.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,e,d){var h=this.api(!0);
c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(d===k||d)&&h.columns.adjust();(e===k||e)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,e=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var d in o.ext.internal)d&&(this[d]=Nb(d));this.each(function(){var d={},d=1<e?Lb(d,a,!0):a,g=0,j,i=this.getAttribute("id"),m=!1,l=o.defaults,p=h(this);if("table"!=this.nodeName.toLowerCase())R(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);
fb(l.column);H(l,l,!0);H(l.column,l.column,!0);H(l,h.extend(d,p.data()));var n=o.settings,g=0;for(j=n.length;g<j;g++){var r=n[g];if(r.nTable==this||r.nTHead.parentNode==this||r.nTFoot&&r.nTFoot.parentNode==this){g=d.bRetrieve!==k?d.bRetrieve:l.bRetrieve;if(c||g)return r.oInstance;if(d.bDestroy!==k?d.bDestroy:l.bDestroy){r.oInstance.fnDestroy();break}else{R(r,0,"Cannot reinitialise DataTable",3);return}}if(r.sTableId==this.id){n.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+
o.ext._unique++;var q=h.extend(!0,{},o.models.oSettings,{nTable:this,oApi:b.internal,oInit:d,sDestroyWidth:p[0].style.width,sInstance:i,sTableId:i});n.push(q);q.oInstance=1===b.length?b:p.dataTable();eb(d);d.oLanguage&&O(d.oLanguage);d.aLengthMenu&&!d.iDisplayLength&&(d.iDisplayLength=h.isArray(d.aLengthMenu[0])?d.aLengthMenu[0][0]:d.aLengthMenu[0]);d=Lb(h.extend(!0,{},l),d);E(q.oFeatures,d,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
E(q,d,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);E(q.oScroll,d,[["sScrollX","sX"],["sScrollXInner",
"sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);E(q.oLanguage,d,"fnInfoCallback");z(q,"aoDrawCallback",d.fnDrawCallback,"user");z(q,"aoServerParams",d.fnServerParams,"user");z(q,"aoStateSaveParams",d.fnStateSaveParams,"user");z(q,"aoStateLoadParams",d.fnStateLoadParams,"user");z(q,"aoStateLoaded",d.fnStateLoaded,"user");z(q,"aoRowCallback",d.fnRowCallback,"user");z(q,"aoRowCreatedCallback",d.fnCreatedRow,"user");z(q,"aoHeaderCallback",d.fnHeaderCallback,"user");z(q,"aoFooterCallback",
d.fnFooterCallback,"user");z(q,"aoInitComplete",d.fnInitComplete,"user");z(q,"aoPreDrawCallback",d.fnPreDrawCallback,"user");i=q.oClasses;d.bJQueryUI?(h.extend(i,o.ext.oJUIClasses,d.oClasses),d.sDom===l.sDom&&"lfrtip"===l.sDom&&(q.sDom='<"H"lfr>t<"F"ip>'),q.renderer)?h.isPlainObject(q.renderer)&&!q.renderer.header&&(q.renderer.header="jqueryui"):q.renderer="jqueryui":h.extend(i,o.ext.classes,d.oClasses);p.addClass(i.sTable);if(""!==q.oScroll.sX||""!==q.oScroll.sY)q.oScroll.iBarWidth=Hb();!0===q.oScroll.sX&&
(q.oScroll.sX="100%");q.iInitDisplayStart===k&&(q.iInitDisplayStart=d.iDisplayStart,q._iDisplayStart=d.iDisplayStart);null!==d.iDeferLoading&&(q.bDeferLoading=!0,g=h.isArray(d.iDeferLoading),q._iRecordsDisplay=g?d.iDeferLoading[0]:d.iDeferLoading,q._iRecordsTotal=g?d.iDeferLoading[1]:d.iDeferLoading);var t=q.oLanguage;h.extend(!0,t,d.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){O(a);H(l.oLanguage,a);h.extend(true,t,a);ga(q)},error:function(){ga(q)}}),m=!0);null===
d.asStripeClasses&&(q.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=q.asStripeClasses,s=h("tbody tr",this).eq(0);-1!==h.inArray(!0,h.map(g,function(a){return s.hasClass(a)}))&&(h("tbody tr",this).removeClass(g.join(" ")),q.asDestroyStripes=g.slice());n=[];g=this.getElementsByTagName("thead");0!==g.length&&(da(q.aoHeader,g[0]),n=qa(q));if(null===d.aoColumns){r=[];g=0;for(j=n.length;g<j;g++)r.push(null)}else r=d.aoColumns;g=0;for(j=r.length;g<j;g++)Fa(q,n?n[g]:null);ib(q,d.aoColumnDefs,r,function(a,
b){ka(q,a,b)});if(s.length){var u=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h.each(na(q,s[0]).cells,function(a,b){var c=q.aoColumns[a];if(c.mData===a){var e=u(b,"sort")||u(b,"order"),d=u(b,"filter")||u(b,"search");if(e!==null||d!==null){c.mData={_:a+".display",sort:e!==null?a+".@data-"+e:k,type:e!==null?a+".@data-"+e:k,filter:d!==null?a+".@data-"+d:k};ka(q,a)}}})}var v=q.oFeatures;d.bStateSave&&(v.bStateSave=!0,Kb(q,d),z(q,"aoDrawCallback",ya,"state_save"));if(d.aaSorting===k){n=
q.aaSorting;g=0;for(j=n.length;g<j;g++)n[g][1]=q.aoColumns[g].asSorting[0]}xa(q);v.bSort&&z(q,"aoDrawCallback",function(){if(q.bSorted){var a=T(q),b={};h.each(a,function(a,c){b[c.src]=c.dir});w(q,null,"order",[q,a,b]);Jb(q)}});z(q,"aoDrawCallback",function(){(q.bSorted||B(q)==="ssp"||v.bDeferRender)&&xa(q)},"sc");gb(q);g=p.children("caption").each(function(){this._captionSide=p.css("caption-side")});j=p.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));q.nTHead=j[0];j=p.children("tbody");
0===j.length&&(j=h("<tbody/>").appendTo(this));q.nTBody=j[0];j=p.children("tfoot");if(0===j.length&&0<g.length&&(""!==q.oScroll.sX||""!==q.oScroll.sY))j=h("<tfoot/>").appendTo(this);0===j.length||0===j.children().length?p.addClass(i.sNoFooter):0<j.length&&(q.nTFoot=j[0],da(q.aoFooter,q.nTFoot));if(d.aaData)for(g=0;g<d.aaData.length;g++)J(q,d.aaData[g]);else(q.bDeferLoading||"dom"==B(q))&&ma(q,h(q.nTBody).children("tr"));q.aiDisplay=q.aiDisplayMaster.slice();q.bInitialised=!0;!1===m&&ga(q)}});b=null;
return this};var Tb=[],v=Array.prototype,cc=function(a){var b,c,e=o.settings,d=h.map(e,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,d),-1!==b?[e[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,d);return-1!==b?e[b]:null}).toArray()};t=function(a,b){if(!this instanceof t)throw"DT API must be constructed as a new object";
var c=[],e=function(a){(a=cc(a))&&c.push.apply(c,a)};if(h.isArray(a))for(var d=0,f=a.length;d<f;d++)e(a[d]);else e(a);this.context=Na(c);b&&this.push.apply(this,b.toArray?b.toArray():b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Tb)};o.Api=t;t.prototype={concat:v.concat,context:[],each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];
if(v.filter)b=v.filter.call(this,a,this);else for(var c=0,e=this.length;c<e;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:v.join,indexOf:v.indexOf||function(a,b){for(var c=b||0,e=this.length;c<e;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,e){var d=[],f,g,h,i,m,l=this.context,p,n,o=this.selector;"string"===typeof a&&(e=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<
h;g++){var q=new t(l[g]);if("table"===b)f=c.call(q,l[g],g),f!==k&&d.push(f);else if("columns"===b||"rows"===b)f=c.call(q,l[g],this[g],g),f!==k&&d.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){n=this[g];"column-rows"===b&&(p=Ca(l[g],o.opts));i=0;for(m=n.length;i<m;i++)f=n[i],f="cell"===b?c.call(q,l[g],f.row,f.column,g,i):c.call(q,l[g],f,g,i,p),f!==k&&d.push(f)}}return d.length||e?(a=new t(l,a?d.concat.apply([],d):d),b=a.selector,b.rows=o.rows,b.cols=o.cols,b.opts=o.opts,a):
this},lastIndexOf:v.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(v.map)b=v.map.call(this,a,this);else for(var c=0,e=this.length;c<e;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:v.pop,push:v.push,reduce:v.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:v.reduceRight||function(a,b){return hb(this,a,b,this.length-1,
-1,-1)},reverse:v.reverse,selector:null,shift:v.shift,sort:v.sort,splice:v.splice,toArray:function(){return v.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,Na(this))},unshift:v.unshift};t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var e,d,f,g=function(a,b,c){return function(){var e=b.apply(a,arguments);t.extend(e,e,c.methodExt);return e}};e=0;for(d=c.length;e<d;e++)f=c[e],b[f.name]="function"===
typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=r=function(a,b){if(h.isArray(a))for(var c=0,e=a.length;c<e;c++)t.register(a[c],b);else for(var d=a.split("."),f=Tb,g,j,c=0,e=d.length;c<e;c++){g=(j=-1!==d[c].indexOf("()"))?d[c].replace("()",""):d[c];var i;a:{i=0;for(var m=f.length;i<m;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===e-1?i.val=b:f=j?i.methodExt:i.propExt}};
t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};r("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var e=h.map(c,function(a){return a.nTable}),a=h(e).filter(a).map(function(){var a=h.inArray(this,e);return c[a]}).toArray();b=new b(a)}else b=this;return b});r("table()",function(a){var a=this.tables(a),b=
a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()",
"table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});r("draw()",function(a){return this.iterator("table",function(b){N(b,!1===a)})});r("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});r("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,e=a.fnRecordsDisplay(),d=-1===c;return{page:d?0:Math.floor(b/c),pages:d?1:Math.ceil(e/c),start:b,
end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:e}});r("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){"ssp"==B(a)?N(a,b):(C(a,!0),ra(a,[],function(c){oa(a);for(var c=sa(a,c),e=0,g=c.length;e<g;e++)J(a,c[e]);N(a,b);C(a,!1)}));if(c){var e=new t(a);e.one("draw",function(){c(e.ajax.json())})}};r("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});
r("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});r("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});r("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});r("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Ub(c,
!1===b,a)})});var $a=function(a,b){var c=[],e,d,f,g,j,i;e=typeof a;if(!a||"string"===e||"function"===e||a.length===k)a=[a];f=0;for(g=a.length;f<g;f++){d=a[f]&&a[f].split?a[f].split(","):[a[f]];j=0;for(i=d.length;j<i;j++)(e=b("string"===typeof d[j]?h.trim(d[j]):d[j]))&&e.length&&c.push.apply(c,e)}return c},ab=function(a){a||(a={});a.filter&&!a.search&&(a.search=a.filter);return{search:a.search||"none",order:a.order||"current",page:a.page||"all"}},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<
a[b].length)return a[0]=a[b],a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ca=function(a,b){var c,e,d,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;e=b.order;d=b.page;if("ssp"==B(a))return"removed"===j?[]:U(0,c.length);if("current"==d){c=a._iDisplayStart;for(e=a.fnDisplayEnd();c<e;c++)f.push(g[c])}else if("current"==e||"applied"==e)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==e||"original"==e){c=0;for(e=a.aoData.length;c<
e;c++)"none"==j?f.push(c):(d=h.inArray(c,g),(-1===d&&"removed"==j||0<=d&&"applied"==j)&&f.push(c))}return f};r("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=b;return $a(a,function(a){var b=Pb(a);if(b!==null&&!d)return[b];var j=Ca(c,d);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,function(b){var d=c.aoData[b];return a(b,d._aData,d.nTr)?b:null});b=Sb(ia(c.aoData,j,"nTr"));return a.nodeName&&
h.inArray(a,b)!==-1?[a._DT_RowIndex]:h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()})},1);c.selector.rows=a;c.selector.opts=b;return c});r("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});r("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ia(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var e=b.aoData[c];return"search"===a?e._aFilterData:
e._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ca(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().remove()","row().remove()",function(){var a=this;return this.iterator("row",function(b,c,e){var d=b.aoData;d.splice(c,1);for(var f=0,g=d.length;f<g;f++)null!==d[f].nTr&&(d[f].nTr._DT_RowIndex=f);h.inArray(c,b.aiDisplay);pa(b.aiDisplayMaster,c);pa(b.aiDisplay,
c);pa(a[e],c,!1);Sa(b)})});r("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(J(b,c));return h},1),c=this.rows(-1);c.pop();c.push.apply(c,b.toArray());return c});r("row()",function(a,b){return bb(this.rows(a,b))});r("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ca(b[0],
this[0],"data");return this});r("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});r("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:J(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;c.length&&(c=c[0].aoData[b!==k?b:a[0]],c._details&&(c._details.remove(),c._detailsShow=k,c._details=k))},Vb=function(a,b){var c=
a.context;if(c.length&&a.length){var e=c[0].aoData[a[0]];if(e._details){(e._detailsShow=b)?e._details.insertAfter(e.nTr):e._details.detach();var d=c[0],f=new t(d),g=d.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){d===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(d===b)for(var c,
e=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",e)}),f.on("destroy.dt.DT_details",function(a,b){if(d===b)for(var c=0,e=g.length;c<e;c++)g[c]._details&&cb(f,c)}))}}};r("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)cb(this);else if(c.length&&this.length){var e=c[0],c=c[0].aoData[this[0]],d=[],f=function(a,b){if(a.nodeName&&"tr"===a.nodeName.toLowerCase())d.push(a);
else{var c=h("<tr><td/></tr>").addClass(b);h("td",c).addClass(b).html(a)[0].colSpan=aa(e);d.push(c[0])}};if(h.isArray(a)||a instanceof h)for(var g=0,j=a.length;g<j;g++)f(a[g],b);else f(a,b);c._details&&c._details.remove();c._details=h(d);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});r(["row().child.show()","row().child().show()"],function(){Vb(this,!0);return this});r(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});r(["row().child.remove()","row().child().remove()"],
function(){cb(this);return this});r("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,e,d){for(var c=[],e=0,f=d.length;e<f;e++)c.push(y(a,d[e],b));return c};r("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return $a(d,function(a){var b=Pb(a);if(a===
"")return U(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var d=Ca(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,d),i[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var o=h.map(g,function(a,b){return a.bVisible?b:null});return[o[o.length+b]]}return[la(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null})}else return h(i).filter(a).map(function(){return h.inArray(this,
i)}).toArray()})},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Wb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",
function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,e,d,f){return ia(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,e,d){return ia(a.aoData,d,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,e){if(a===k)return c.aoColumns[e].bVisible;
var d=c.aoColumns,f=d[e],g=c.aoData,j,i,m;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,D(d,"bVisible"),e+1);j=0;for(i=g.length;j<i;j++)m=g[j].nTr,d=g[j].anCells,m&&m.insertBefore(d[e],d[l]||null)}else h(D(c.aoData,"anCells",e)).detach();f.bVisible=a;ea(c,c.aoHeader);ea(c,c.aoFooter);if(b===k||b)X(c),(c.oScroll.sX||c.oScroll.sY)&&Y(c);w(c,null,"column-visibility",[c,e,a]);ya(c)}})});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===
a?$(b,c):c},1)});r("columns.adjust()",function(){return this.iterator("table",function(a){X(a)},1)});r("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return la(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});r("column()",function(a,b){return bb(this.columns(a,b))});r("cells()",function(a,b,c){h.isPlainObject(a)&&(typeof a.row!==k?(c=b,b=null):(c=a,a=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",
function(b){var e=a,d=ab(c),f=b.aoData,g=Ca(b,d),d=Sb(ia(f,g,"anCells")),j=h([].concat.apply([],d)),i,l=b.aoColumns.length,m,o,r,t,s,u;return $a(e,function(a){var c=typeof a==="function";if(a===null||a===k||c){m=[];o=0;for(r=g.length;o<r;o++){i=g[o];for(t=0;t<l;t++){s={row:i,column:t};if(c){u=b.aoData[i];a(s,y(b,i,t),u.anCells[t])&&m.push(s)}else m.push(s)}}return m}return h.isPlainObject(a)?[a]:j.filter(a).map(function(a,b){i=b.parentNode._DT_RowIndex;return{row:i,column:h.inArray(b,f[i].anCells)}}).toArray()})});
var e=this.columns(b,c),d=this.rows(a,c),f,g,j,i,m,l=this.iterator("table",function(a,b){f=[];g=0;for(j=d[b].length;g<j;g++){i=0;for(m=e[b].length;i<m;i++)f.push({row:d[b][g],column:e[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});r("cells().data()",function(){return this.iterator("cell",function(a,b,c){return y(a,b,c)},1)});u("cells().cache()",
"cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,e){return b.aoData[c][a][e]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,e){return y(b,c,e,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:$(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,
c,e){ca(b,c,a,e)})});r("cell()",function(a,b,c){return bb(this.cells(a,b,c))});r("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?y(b[0],c[0].row,c[0].column):k;Ia(b[0],c[0].row,c[0].column,a);ca(b[0],c[0].row,"data",c[0].column);return this});r("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=
a.slice()})});r("order.listener()",function(a,b,c){return this.iterator("table",function(e){Oa(e,a,b,c)})});r(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,e){var d=[];h.each(b[e],function(b,c){d.push([c,a])});c.aaSorting=d})});r("search()",function(a,b,c,e){var d=this.context;return a===k?0!==d.length?d[0].oPreviousSearch.sSearch:k:this.iterator("table",function(d){d.oFeatures.bFilter&&fa(d,h.extend({},d.oPreviousSearch,{sSearch:a+"",bRegex:null===
b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),1)})});u("columns().search()","column().search()",function(a,b,c,e){return this.iterator("column",function(d,f){var g=d.aoPreSearchCols;if(a===k)return g[f].sSearch;d.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),fa(d,d.oPreviousSearch,1))})});r("state()",function(){return this.context.length?this.context[0].oSavedState:null});r("state.clear()",function(){return this.iterator("table",
function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});r("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});r("state.save()",function(){return this.iterator("table",function(a){ya(a)})});o.versionCheck=o.fnVersionCheck=function(a){for(var b=o.version.split("."),a=a.split("."),c,e,d=0,f=a.length;d<f;d++)if(c=parseInt(b[d],10)||0,e=parseInt(a[d],10)||0,c!==e)return c>e;return!0};o.isDataTable=o.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(o.settings,
function(a,d){if(d.nTable===b||h("table",d.nScrollHead)[0]===b||h("table",d.nScrollFoot)[0]===b)c=!0});return c};o.tables=o.fnTables=function(a){return h.map(o.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable})};o.util={throttle:ua,escapeRegex:va};o.camelToHungarian=H;r("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){r(b+"()",function(){var a=Array.prototype.slice.call(arguments);
a[0].match(/\.dt\b/)||(a[0]+=".dt");var e=h(this.tables().nodes());e[b].apply(e,a);return this})});r("clear()",function(){return this.iterator("table",function(a){oa(a)})});r("settings()",function(){return new t(this.context,this.context)});r("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});r("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,e=b.oClasses,d=b.nTable,f=b.nTBody,g=b.nTHead,j=
b.nTFoot,i=h(d),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;w(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(Ea).unbind(".DT-"+b.sInstance);d!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&d!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));i.detach();k.detach();b.aaSorting=[];b.aaSortingFixed=[];xa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",
g).removeClass(e.sSortable+" "+e.sSortableAsc+" "+e.sSortableDesc+" "+e.sSortableNone);b.bJUI&&(h("th span."+e.sSortIcon+", td span."+e.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+e.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));!a&&c&&c.insertBefore(d,b.nTableReinsertBefore);f.children().detach();f.append(l);i.css("width",b.sDestroyWidth).removeClass(e.sTable);(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%
p])});c=h.inArray(b,o.settings);-1!==c&&o.settings.splice(c,1)})});o.version="1.10.5";o.settings=[];o.models={};o.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};o.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};o.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,
nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};o.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,
bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
o.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};V(o.defaults);o.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};V(o.defaults.column);
o.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],
aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],
aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==B(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},
fnRecordsDisplay:function(){return"ssp"==B(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,e=this.aiDisplay.length,d=this.oFeatures,f=d.bPaginate;return d.bServerSide?!1===f||-1===a?b+e:Math.min(b+a,this._iRecordsDisplay):!f||c>e||-1===a?e:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}};o.ext=x={buttons:{},classes:{},errMode:"alert",feature:[],search:[],internal:{},
legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:o.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:o.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(o.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",
sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",
sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Da="",Da="",F=Da+"ui-state-default",ja=Da+"css_right ui-icon ui-icon-",Xb=Da+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
h.extend(o.ext.oJUIClasses,o.ext.classes,{sPageButton:"fg-button ui-button "+F,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:F+" sorting_asc",sSortDesc:F+" sorting_desc",sSortable:F+" sorting",sSortableAsc:F+" sorting_asc_disabled",sSortableDesc:F+" sorting_desc_disabled",sSortableNone:F+" sorting_disabled",sSortJUIAsc:ja+"triangle-1-n",sSortJUIDesc:ja+"triangle-1-s",
sSortJUI:ja+"carat-2-n-s",sSortJUIAscAllowed:ja+"carat-1-n",sSortJUIDescAllowed:ja+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+F,sScrollFoot:"dataTables_scrollFoot "+F,sHeaderTH:F,sFooterTH:F,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+" ui-corner-bl ui-corner-br"});var Mb=o.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},simple_numbers:function(a,
b){return["previous",Wa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Wa(a,b),"next","last"]},_numbers:Wa,numbers_length:7});h.extend(!0,o.ext.renderer,{pageButton:{_:function(a,b,c,e,d,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i,k,l=0,o=function(b,e){var n,r,t,s,u=function(b){Ta(a,b.data.action,true)};n=0;for(r=e.length;n<r;n++){s=e[n];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);o(t,s)}else{k=i="";switch(s){case "ellipsis":b.append("<span>&hellip;</span>");
break;case "first":i=j.sFirst;k=s+(d>0?"":" "+g.sPageButtonDisabled);break;case "previous":i=j.sPrevious;k=s+(d>0?"":" "+g.sPageButtonDisabled);break;case "next":i=j.sNext;k=s+(d<f-1?"":" "+g.sPageButtonDisabled);break;case "last":i=j.sLast;k=s+(d<f-1?"":" "+g.sPageButtonDisabled);break;default:i=s+1;k=d===s?g.sPageButtonActive:""}if(i){t=h("<a>",{"class":g.sPageButton+" "+k,"aria-controls":a.sTableId,"data-dt-idx":l,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(i).appendTo(b);
Va(t,{action:s},u);l++}}}},n;try{n=h(P.activeElement).data("dt-idx")}catch(r){}o(h(b).empty(),e);n&&h(b).find("[data-dt-idx="+n+"]").focus()}}});h.extend(o.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||I(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;
return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return I(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(o.ext.type.search,{html:function(a){return I(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ba,""):""},string:function(a){return I(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Aa=function(a,b,c,e){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),
e&&(a=a.replace(e,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return I(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return I(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,o.ext.renderer,{header:{_:function(a,b,c,e){h(a.nTable).on("order.dt.DT",function(d,
f,g,h){if(a===f){d=c.idx;b.removeClass(c.sSortingClass+" "+e.sSortAsc+" "+e.sSortDesc).addClass(h[d]=="asc"?e.sSortAsc:h[d]=="desc"?e.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,e){h("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(e.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(d,f,g,h){if(a===f){d=c.idx;b.removeClass(e.sSortAsc+" "+e.sSortDesc).addClass(h[d]=="asc"?e.sSortAsc:h[d]=="desc"?e.sSortDesc:c.sSortingClass);
b.find("span."+e.sSortIcon).removeClass(e.sSortJUIAsc+" "+e.sSortJUIDesc+" "+e.sSortJUI+" "+e.sSortJUIAscAllowed+" "+e.sSortJUIDescAllowed).addClass(h[d]=="asc"?e.sSortJUIAsc:h[d]=="desc"?e.sSortJUIDesc:c.sSortingClassJUI)}})}}});o.render={number:function(a,b,c,e){return{display:function(d){var f=0>d?"-":"",d=Math.abs(parseFloat(d)),g=parseInt(d,10),d=c?b+(d-g).toFixed(c).substring(2):"";return f+(e||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+d}}}};h.extend(o.ext.internal,{_fnExternApiFunc:Nb,
_fnBuildAjax:ra,_fnAjaxUpdate:kb,_fnAjaxParameters:tb,_fnAjaxUpdateDraw:ub,_fnAjaxDataSrc:sa,_fnAddColumn:Fa,_fnColumnOptions:ka,_fnAdjustColumnSizing:X,_fnVisibleToColumnIndex:la,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:Z,_fnColumnTypes:Ha,_fnApplyColumnDefs:ib,_fnHungarianMap:V,_fnCamelToHungarian:H,_fnLanguageCompat:O,_fnBrowserDetect:gb,_fnAddData:J,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,
c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:y,_fnSetCellData:Ia,_fnSplitObjNotation:Ka,_fnGetObjectDataFn:W,_fnSetObjectDataFn:Q,_fnGetDataMaster:La,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:ca,_fnGetRowElements:na,_fnCreateTr:Ja,_fnBuildHead:jb,_fnDrawHead:ea,_fnDraw:M,_fnReDraw:N,_fnAddOptionsHtml:mb,_fnDetectHeader:da,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:ob,_fnFilterComplete:fa,_fnFilterCustom:xb,_fnFilterColumn:wb,_fnFilter:vb,_fnFilterCreateSearch:Qa,_fnEscapeRegex:va,
_fnFilterData:yb,_fnFeatureHtmlInfo:rb,_fnUpdateInfo:Bb,_fnInfoMacros:Cb,_fnInitialise:ga,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:nb,_fnFeatureHtmlPaginate:sb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:pb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:qb,_fnScrollDraw:Y,_fnApplyToChildren:G,_fnCalculateColumnWidths:Ga,_fnThrottle:ua,_fnConvertToWidth:Db,_fnScrollingWidthAdjust:Fb,_fnGetWidestNode:Eb,_fnGetMaxLenString:Gb,_fnStringToCss:s,_fnScrollBarWidth:Hb,_fnSortFlatten:T,_fnSort:lb,
_fnSortAria:Jb,_fnSortListener:Ua,_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:R,_fnMap:E,_fnBindAction:Va,_fnCallbackReg:z,_fnCallbackFire:w,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:B,_fnRowAttributes:Ma,_fnCalculateEnd:function(){}});h.fn.dataTable=o;h.fn.dataTableSettings=o.settings;h.fn.dataTableExt=o.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(o,function(a,b){h.fn.DataTable[a]=
b});return h.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],O):"object"===typeof exports?module.exports=O(require("jquery")):jQuery&&!jQuery.fn.dataTable&&O(jQuery)})(window,document);

/*! AutoFill 1.2.1
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     AutoFill
 * @description Add Excel like click and drag auto-fill options to DataTables
 * @version     1.2.1
 * @file        dataTables.autoFill.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

(function( window, document, undefined ) {

var factory = function( $, DataTable ) {
"use strict";

/** 
 * AutoFill provides Excel like auto-fill features for a DataTable
 *
 * @class AutoFill
 * @constructor
 * @param {object} oTD DataTables settings object
 * @param {object} oConfig Configuration object for AutoFill
 */
var AutoFill = function( oDT, oConfig )
{
	/* Sanity check that we are a new instance */
	if ( ! (this instanceof AutoFill) ) {
		throw( "Warning: AutoFill must be initialised with the keyword 'new'" );
	}

	if ( ! $.fn.dataTableExt.fnVersionCheck('1.7.0') ) {
		throw( "Warning: AutoFill requires DataTables 1.7 or greater");
	}


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class variables
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	this.c = {};

	/**
	 * @namespace Settings object which contains customisable information for AutoFill instance
	 */
	this.s = {
		/**
		 * @namespace Cached information about the little dragging icon (the filler)
		 */
		"filler": {
			"height": 0,
			"width": 0
		},

		/**
		 * @namespace Cached information about the border display
		 */
		"border": {
			"width": 2
		},

		/**
		 * @namespace Store for live information for the current drag
		 */
		"drag": {
			"startX": -1,
			"startY": -1,
			"startTd": null,
			"endTd": null,
			"dragging": false
		},

		/**
		 * @namespace Data cache for information that we need for scrolling the screen when we near
		 *   the edges
		 */
		"screen": {
			"interval": null,
			"y": 0,
			"height": 0,
			"scrollTop": 0
		},

		/**
		 * @namespace Data cache for the position of the DataTables scrolling element (when scrolling
		 *   is enabled)
		 */
		"scroller": {
			"top": 0,
			"bottom": 0
		},

		/**
		 * @namespace Information stored for each column. An array of objects
		 */
		"columns": []
	};


	/**
	 * @namespace Common and useful DOM elements for the class instance
	 */
	this.dom = {
		"table": null,
		"filler": null,
		"borderTop": null,
		"borderRight": null,
		"borderBottom": null,
		"borderLeft": null,
		"currentTarget": null
	};



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Retreieve the settings object from an instance
	 *  @method fnSettings
	 *  @returns {object} AutoFill settings object
	 */
	this.fnSettings = function () {
		return this.s;
	};


	/* Constructor logic */
	this._fnInit( oDT, oConfig );
	return this;
};



AutoFill.prototype = {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods (they are of course public in JS, but recommended as private)
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Initialisation
	 *  @method _fnInit
	 *  @param {object} dt DataTables settings object
	 *  @param {object} config Configuration object for AutoFill
	 *  @returns void
	 */
	"_fnInit": function ( dt, config )
	{
		var
			that = this,
			i, iLen;

		// Use DataTables API to get the settings allowing selectors, instances
		// etc to be used, or for backwards compatibility get from the old
		// fnSettings method
		this.s.dt = DataTable.Api ?
			new DataTable.Api( dt ).settings()[0] :
			dt.fnSettings();
		this.s.init = config || {};
		this.dom.table = this.s.dt.nTable;

		$.extend( true, this.c, AutoFill.defaults, config );

		/* Add and configure the columns */
		this._initColumns();

		/* Auto Fill click and drag icon */
		var filler = $('<div/>', {
				'class': 'AutoFill_filler'
			} )
			.appendTo( 'body' );
		this.dom.filler = filler[0];

		// Get the height / width of the click element
		this.s.filler.height = filler.height();
		this.s.filler.width = filler.width();
		filler[0].style.display = "none";

		/* Border display - one div for each side. We can't just use a single
		 * one with a border, as we want the events to effectively pass through
		 * the transparent bit of the box
		 */
		var border;
		var appender = document.body;
		if ( that.s.dt.oScroll.sY !== "" ) {
			that.s.dt.nTable.parentNode.style.position = "relative";
			appender = that.s.dt.nTable.parentNode;
		}

		border = $('<div/>', {
			"class": "AutoFill_border"
		} );
		this.dom.borderTop    = border.clone().appendTo( appender )[0];
		this.dom.borderRight  = border.clone().appendTo( appender )[0];
		this.dom.borderBottom = border.clone().appendTo( appender )[0];
		this.dom.borderLeft   = border.clone().appendTo( appender )[0];

		/* Events */
		filler.on( 'mousedown.DTAF', function (e) {
			this.onselectstart = function() { return false; };
			that._fnFillerDragStart.call( that, e );
			return false;
		} );

		$('tbody', this.dom.table).on(
			'mouseover.DTAF mouseout.DTAF',
			'>tr>td, >tr>th',
			function (e) {
				that._fnFillerDisplay.call( that, e );
			}
		);

		$(this.dom.table).on( 'destroy.dt.DTAF', function () {
			filler.off( 'mousedown.DTAF' ).remove();
			$('tbody', this.dom.table).off( 'mouseover.DTAF mouseout.DTAF' );
		} );
	},


	_initColumns: function ( )
	{
		var that = this;
		var i, ien;
		var dt = this.s.dt;
		var config = this.s.init;

		for ( i=0, ien=dt.aoColumns.length ; i<ien ; i++ ) {
			this.s.columns[i] = $.extend( true, {}, AutoFill.defaults.column );
		}

		dt.oApi._fnApplyColumnDefs(
			dt,
			config.aoColumnDefs || config.columnDefs,
			config.aoColumns || config.columns,
			function (colIdx, def) {
				that._fnColumnOptions( colIdx, def );
			}
		);

		// For columns which don't have read, write, step functions defined,
		// use the default ones
		for ( i=0, ien=dt.aoColumns.length ; i<ien ; i++ ) {
			var column = this.s.columns[i];

			if ( ! column.read ) {
				column.read = this._fnReadCell;
			}
			if ( ! column.write ) {
				column.read = this._fnWriteCell;
			}
			if ( ! column.step ) {
				column.read = this._fnStep;
			}
		}
	},


	"_fnColumnOptions": function ( i, opts )
	{
		var column = this.s.columns[ i ];
		var set = function ( outProp, inProp ) {
			if ( opts[ inProp[0] ] !== undefined ) {
				column[ outProp ] = opts[ inProp[0] ];
			}
			if ( opts[ inProp[1] ] !== undefined ) {
				column[ outProp ] = opts[ inProp[1] ];
			}
		};

		// Compatibility with the old Hungarian style of notation
		set( 'enable',    ['bEnable',     'enable'] );
		set( 'read',      ['fnRead',      'read'] );
		set( 'write',     ['fnWrite',     'write'] );
		set( 'step',      ['fnStep',      'step'] );
		set( 'increment', ['bIncrement',  'increment'] );
	},


	/**
	 * Find out the coordinates of a given TD cell in a table
	 *  @method  _fnTargetCoords
	 *  @param   {Node} nTd
	 *  @returns {Object} x and y properties, for the position of the cell in the tables DOM
	 */
	"_fnTargetCoords": function ( nTd )
	{
		var nTr = $(nTd).parents('tr')[0];
		var position = this.s.dt.oInstance.fnGetPosition( nTd );

		return {
			"x":      $('td', nTr).index(nTd),
			"y":      $('tr', nTr.parentNode).index(nTr),
			"row":    position[0],
			"column": position[2]
		};
	},


	/**
	 * Display the border around one or more cells (from start to end)
	 *  @method  _fnUpdateBorder
	 *  @param   {Node} nStart Starting cell
	 *  @param   {Node} nEnd Ending cell
	 *  @returns void
	 */
	"_fnUpdateBorder": function ( nStart, nEnd )
	{
		var
			border = this.s.border.width,
			offsetStart = $(nStart).offset(),
			offsetEnd = $(nEnd).offset(),
			x1 = offsetStart.left - border,
			x2 = offsetEnd.left + $(nEnd).outerWidth(),
			y1 = offsetStart.top - border,
			y2 = offsetEnd.top + $(nEnd).outerHeight(),
			width = offsetEnd.left + $(nEnd).outerWidth() - offsetStart.left + (2*border),
			height = offsetEnd.top + $(nEnd).outerHeight() - offsetStart.top + (2*border),
			oStyle;

		// Recalculate start and end (when dragging "backwards")  
		if( offsetStart.left > offsetEnd.left) {
			x1 = offsetEnd.left - border;
			x2 = offsetStart.left + $(nStart).outerWidth();
			width = offsetStart.left + $(nStart).outerWidth() - offsetEnd.left + (2*border);
		}

		if ( this.s.dt.oScroll.sY !== "" )
		{
			/* The border elements are inside the DT scroller - so position relative to that */
			var
				offsetScroll = $(this.s.dt.nTable.parentNode).offset(),
				scrollTop = $(this.s.dt.nTable.parentNode).scrollTop(),
				scrollLeft = $(this.s.dt.nTable.parentNode).scrollLeft();

			x1 -= offsetScroll.left - scrollLeft;
			x2 -= offsetScroll.left - scrollLeft;
			y1 -= offsetScroll.top - scrollTop;
			y2 -= offsetScroll.top - scrollTop;
		}

		/* Top */
		oStyle = this.dom.borderTop.style;
		oStyle.top = y1+"px";
		oStyle.left = x1+"px";
		oStyle.height = this.s.border.width+"px";
		oStyle.width = width+"px";

		/* Bottom */
		oStyle = this.dom.borderBottom.style;
		oStyle.top = y2+"px";
		oStyle.left = x1+"px";
		oStyle.height = this.s.border.width+"px";
		oStyle.width = width+"px";

		/* Left */
		oStyle = this.dom.borderLeft.style;
		oStyle.top = y1+"px";
		oStyle.left = x1+"px";
		oStyle.height = height+"px";
		oStyle.width = this.s.border.width+"px";

		/* Right */
		oStyle = this.dom.borderRight.style;
		oStyle.top = y1+"px";
		oStyle.left = x2+"px";
		oStyle.height = height+"px";
		oStyle.width = this.s.border.width+"px";
	},


	/**
	 * Mouse down event handler for starting a drag
	 *  @method  _fnFillerDragStart
	 *  @param   {Object} e Event object
	 *  @returns void
	 */
	"_fnFillerDragStart": function (e)
	{
		var that = this;
		var startingTd = this.dom.currentTarget;

		this.s.drag.dragging = true;

		that.dom.borderTop.style.display = "block";
		that.dom.borderRight.style.display = "block";
		that.dom.borderBottom.style.display = "block";
		that.dom.borderLeft.style.display = "block";

		var coords = this._fnTargetCoords( startingTd );
		this.s.drag.startX = coords.x;
		this.s.drag.startY = coords.y;

		this.s.drag.startTd = startingTd;
		this.s.drag.endTd = startingTd;

		this._fnUpdateBorder( startingTd, startingTd );

		$(document).bind('mousemove.AutoFill', function (e) {
			that._fnFillerDragMove.call( that, e );
		} );

		$(document).bind('mouseup.AutoFill', function (e) {
			that._fnFillerFinish.call( that, e );
		} );

		/* Scrolling information cache */
		this.s.screen.y = e.pageY;
		this.s.screen.height = $(window).height();
		this.s.screen.scrollTop = $(document).scrollTop();

		if ( this.s.dt.oScroll.sY !== "" )
		{
			this.s.scroller.top = $(this.s.dt.nTable.parentNode).offset().top;
			this.s.scroller.bottom = this.s.scroller.top + $(this.s.dt.nTable.parentNode).height();
		}

		/* Scrolling handler - we set an interval (which is cancelled on mouse up) which will fire
		 * regularly and see if we need to do any scrolling
		 */
		this.s.screen.interval = setInterval( function () {
			var iScrollTop = $(document).scrollTop();
			var iScrollDelta = iScrollTop - that.s.screen.scrollTop;
			that.s.screen.y += iScrollDelta;

			if ( that.s.screen.height - that.s.screen.y + iScrollTop < 50 )
			{
				$('html, body').animate( {
					"scrollTop": iScrollTop + 50
				}, 240, 'linear' );
			}
			else if ( that.s.screen.y - iScrollTop < 50 )
			{
				$('html, body').animate( {
					"scrollTop": iScrollTop - 50
				}, 240, 'linear' );
			}

			if ( that.s.dt.oScroll.sY !== "" )
			{
				if ( that.s.screen.y > that.s.scroller.bottom - 50 )
				{
					$(that.s.dt.nTable.parentNode).animate( {
						"scrollTop": $(that.s.dt.nTable.parentNode).scrollTop() + 50
					}, 240, 'linear' );
				}
				else if ( that.s.screen.y < that.s.scroller.top + 50 )
				{
					$(that.s.dt.nTable.parentNode).animate( {
						"scrollTop": $(that.s.dt.nTable.parentNode).scrollTop() - 50
					}, 240, 'linear' );
				}
			}
		}, 250 );
	},


	/**
	 * Mouse move event handler for during a move. See if we want to update the display based on the
	 * new cursor position
	 *  @method  _fnFillerDragMove
	 *  @param   {Object} e Event object
	 *  @returns void
	 */
	"_fnFillerDragMove": function (e)
	{
		if ( e.target && e.target.nodeName.toUpperCase() == "TD" &&
			 e.target != this.s.drag.endTd )
		{
			var coords = this._fnTargetCoords( e.target );

			if ( this.c.mode == "y" && coords.x != this.s.drag.startX )
			{
				e.target = $('tbody>tr:eq('+coords.y+')>td:eq('+this.s.drag.startX+')', this.dom.table)[0];
			}
			if ( this.c.mode == "x" && coords.y != this.s.drag.startY )
			{
				e.target = $('tbody>tr:eq('+this.s.drag.startY+')>td:eq('+coords.x+')', this.dom.table)[0];
			}

			if ( this.c.mode == "either")
			{
				if(coords.x != this.s.drag.startX )
				{
					e.target = $('tbody>tr:eq('+this.s.drag.startY+')>td:eq('+coords.x+')', this.dom.table)[0];
				}
				else if ( coords.y != this.s.drag.startY ) {
					e.target = $('tbody>tr:eq('+coords.y+')>td:eq('+this.s.drag.startX+')', this.dom.table)[0];
				}
			}

			// update coords
			if ( this.c.mode !== "both" ) {
				coords = this._fnTargetCoords( e.target );
			}

			var drag = this.s.drag;
			drag.endTd = e.target;

			if ( coords.y >= this.s.drag.startY ) {
				this._fnUpdateBorder( drag.startTd, drag.endTd );
			}
			else {
				this._fnUpdateBorder( drag.endTd, drag.startTd );
			}
			this._fnFillerPosition( e.target );
		}

		/* Update the screen information so we can perform scrolling */
		this.s.screen.y = e.pageY;
		this.s.screen.scrollTop = $(document).scrollTop();

		if ( this.s.dt.oScroll.sY !== "" )
		{
			this.s.scroller.scrollTop = $(this.s.dt.nTable.parentNode).scrollTop();
			this.s.scroller.top = $(this.s.dt.nTable.parentNode).offset().top;
			this.s.scroller.bottom = this.s.scroller.top + $(this.s.dt.nTable.parentNode).height();
		}
	},


	/**
	 * Mouse release handler - end the drag and take action to update the cells with the needed values
	 *  @method  _fnFillerFinish
	 *  @param   {Object} e Event object
	 *  @returns void
	 */
	"_fnFillerFinish": function (e)
	{
		var that = this, i, iLen, j;

		$(document).unbind('mousemove.AutoFill mouseup.AutoFill');

		this.dom.borderTop.style.display = "none";
		this.dom.borderRight.style.display = "none";
		this.dom.borderBottom.style.display = "none";
		this.dom.borderLeft.style.display = "none";

		this.s.drag.dragging = false;

		clearInterval( this.s.screen.interval );

		var cells = [];
		var table = this.dom.table;
		var coordsStart = this._fnTargetCoords( this.s.drag.startTd );
		var coordsEnd = this._fnTargetCoords( this.s.drag.endTd );
		var columnIndex = function ( visIdx ) {
			return that.s.dt.oApi._fnVisibleToColumnIndex( that.s.dt, visIdx );
		};

		// xxx - urgh - there must be a way of reducing this...
		if ( coordsStart.y <= coordsEnd.y ) {
			for ( i=coordsStart.y ; i<=coordsEnd.y ; i++ ) {
				if ( coordsStart.x <= coordsEnd.x ) {
					for ( j=coordsStart.x ; j<=coordsEnd.x ; j++ ) {
						cells.push( {
							node:   $('tbody>tr:eq('+i+')>td:eq('+j+')', table)[0],
							x:      j - coordsStart.x,
							y:      i - coordsStart.y,
							colIdx: columnIndex( j )
						} );
					}
				}
				else {
					for ( j=coordsStart.x ; j>=coordsEnd.x ; j-- ) {
						cells.push( {
							node:   $('tbody>tr:eq('+i+')>td:eq('+j+')', table)[0],
							x:      j - coordsStart.x,
							y:      i - coordsStart.y,
							colIdx: columnIndex( j )
						} );
					}
				}
			}
		}
		else {
			for ( i=coordsStart.y ; i>=coordsEnd.y ; i-- ) {
				if ( coordsStart.x <= coordsEnd.x ) {
					for ( j=coordsStart.x ; j<=coordsEnd.x ; j++ ) {
						cells.push( {
							node:   $('tbody>tr:eq('+i+')>td:eq('+j+')', table)[0],
							x:      j - coordsStart.x,
							y:      i - coordsStart.y,
							colIdx: columnIndex( j )
						} );
					}
				}
				else {
					for ( j=coordsStart.x ; j>=coordsEnd.x ; j-- ) {
						cells.push( {
							node:   $('tbody>tr:eq('+i+')>td:eq('+j+')', table)[0],
							x:      coordsStart.x - j,
							y:      coordsStart.y - i,
							colIdx: columnIndex( j )
						} );
					}
				}
			}
		}

		// An auto-fill requires 2 or more cells
		if ( cells.length <= 1 ) {
			return;
		}

		var edited = [];
		var previous;

		for ( i=0, iLen=cells.length ; i<iLen ; i++ ) {
			var cell      = cells[i];
			var column    = this.s.columns[ cell.colIdx ];
			var read      = column.read.call( column, cell.node );
			var stepValue = column.step.call( column, cell.node, read, previous, i, cell.x, cell.y );

			column.write.call( column, cell.node, stepValue );

			previous = stepValue;
			edited.push( {
				cell:     cell,
				colIdx:   cell.colIdx,
				newValue: stepValue,
				oldValue: read
			} );
		}

		if ( this.c.complete !== null ) {
			this.c.complete.call( this, edited );
		}

		// In 1.10 we can do a static draw
		if ( DataTable.Api ) {
			new DataTable.Api( this.s.dt ).draw( false );
		}
		else {
			this.s.dt.oInstance.fnDraw();
		}
	},


	/**
	 * Display the drag handle on mouse over cell
	 *  @method  _fnFillerDisplay
	 *  @param   {Object} e Event object
	 *  @returns void
	 */
	"_fnFillerDisplay": function (e)
	{
		var filler = this.dom.filler;

		/* Don't display automatically when dragging */
		if ( this.s.drag.dragging)
		{
			return;
		}

		/* Check that we are allowed to AutoFill this column or not */
		var nTd = (e.target.nodeName.toLowerCase() == 'td') ? e.target : $(e.target).parents('td')[0];
		var iX = this._fnTargetCoords(nTd).column;
		if ( !this.s.columns[iX].enable )
		{
			filler.style.display = "none";
			return;
		}

		if (e.type == 'mouseover')
		{
			this.dom.currentTarget = nTd;
			this._fnFillerPosition( nTd );

			filler.style.display = "block";
		}
		else if ( !e.relatedTarget || !e.relatedTarget.className.match(/AutoFill/) )
		{
			filler.style.display = "none";
		}
	},


	/**
	 * Position the filler icon over a cell
	 *  @method  _fnFillerPosition
	 *  @param   {Node} nTd Cell to position filler icon over
	 *  @returns void
	 */
	"_fnFillerPosition": function ( nTd )
	{
		var offset = $(nTd).offset();
		var filler = this.dom.filler;
		filler.style.top = (offset.top - (this.s.filler.height / 2)-1 + $(nTd).outerHeight())+"px";
		filler.style.left = (offset.left - (this.s.filler.width / 2)-1 + $(nTd).outerWidth())+"px";
	}
};


// Alias for access
DataTable.AutoFill = AutoFill;
DataTable.AutoFill = AutoFill;



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constants
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * AutoFill version
 *  @constant  version
 *  @type      String
 *  @default   See code
 */
AutoFill.version = "1.2.1";


/**
 * AutoFill defaults
 *  @namespace
 */
AutoFill.defaults = {
	/**
	 * Mode for dragging (restrict to y-axis only, x-axis only, either one or none):
	 *
	 *  * `y`      - y-axis only (default)
	 *  * `x`      - x-axis only
	 *  * `either` - either one, but not both axis at the same time
	 *  * `both`   - multiple cells allowed
	 *
	 * @type {string}
	 * @default `y`
	 */
	mode: 'y',

	complete: null,

	/**
	 * Column definition defaults
	 *  @namespace
	 */
	column: {
		/**
		 * If AutoFill should be enabled on this column
		 *
		 * @type {boolean}
		 * @default true
		 */
		enable: true,

		/**
		 * Allow automatic increment / decrement on this column if a number
		 * is found.
		 *
		 * @type {boolean}
		 * @default true
		 */
		increment: true,

		/**
		 * Cell read function
		 *
		 * Default function will simply read the value from the HTML of the
		 * cell.
		 *
		 * @type   {function}
		 * @param  {node} cell `th` / `td` element to read the value from
		 * @return {string}    Data that has been read
		 */
		read: function ( cell ) {
			return $(cell).html();
		},

		/**
		 * Cell write function
		 *
		 * Default function will simply write to the HTML and tell the DataTable
		 * to update.
		 *
		 * @type   {function}
		 * @param  {node} cell `th` / `td` element to write the value to
		 * @return {string}    Data two write
		 */
		write: function ( cell, val ) {
			var table = $(cell).parents('table');
			if ( DataTable.Api ) {
				// 1.10
				table.DataTable().cell( cell ).data( val );
			}
			else {
				// 1.9
				var dt = table.dataTable();
				var pos = dt.fnGetPosition( cell );
				dt.fnUpdate( val, pos[0], pos[2], false );
			}
		},

		/**
		 * Step function. This provides the ability to customise how the values
		 * are incremented.
		 *
		 * @param  {node} cell `th` / `td` element that is being operated upon
		 * @param  {string} read Cell value from `read` function
		 * @param  {string} last Value of the previous cell
		 * @param  {integer} i Loop counter
		 * @param  {integer} x Cell x-position in the current auto-fill. The
		 *   starting cell is coordinate 0 regardless of its physical position
		 *   in the DataTable.
		 * @param  {integer} y Cell y-position in the current auto-fill. The
		 *   starting cell is coordinate 0 regardless of its physical position
		 *   in the DataTable.
		 * @return {string} Value to write
		 */
		step: function ( cell, read, last, i, x, y ) {
			// Increment a number if it is found
			var re = /(\-?\d+)/;
			var match = this.increment && last ? last.match(re) : null;
			if ( match ) {
				return last.replace( re, parseInt(match[1],10) + (x<0 || y<0 ? -1 : 1) );
			}
			return last === undefined ?
				read :
				last;
		}
	}
};

return AutoFill;
};


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery && !jQuery.fn.dataTable.AutoFill ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


}(window, document));


/*! ColVis 1.1.1
 * ©2010-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     ColVis
 * @description Controls for column visibility in DataTables
 * @version     1.1.1
 * @file        dataTables.colReorder.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

(function(window, document, undefined) {


var factory = function( $, DataTable ) {
"use strict";

/**
 * ColVis provides column visibility control for DataTables
 *
 * @class ColVis
 * @constructor
 * @param {object} DataTables settings object. With DataTables 1.10 this can
 *   also be and API instance, table node, jQuery collection or jQuery selector.
 * @param {object} ColVis configuration options
 */
var ColVis = function( oDTSettings, oInit )
{
	/* Santiy check that we are a new instance */
	if ( !this.CLASS || this.CLASS != "ColVis" )
	{
		alert( "Warning: ColVis must be initialised with the keyword 'new'" );
	}

	if ( typeof oInit == 'undefined' )
	{
		oInit = {};
	}

	if ( $.fn.dataTable.camelToHungarian ) {
		$.fn.dataTable.camelToHungarian( ColVis.defaults, oInit );
	}


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class variables
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * @namespace Settings object which contains customisable information for
	 *     ColVis instance. Augmented by ColVis.defaults
	 */
	this.s = {
		/**
		 * DataTables settings object
		 *  @property dt
		 *  @type     Object
		 *  @default  null
		 */
		"dt": null,

		/**
		 * Customisation object
		 *  @property oInit
		 *  @type     Object
		 *  @default  passed in
		 */
		"oInit": oInit,

		/**
		 * Flag to say if the collection is hidden
		 *  @property hidden
		 *  @type     boolean
		 *  @default  true
		 */
		"hidden": true,

		/**
		 * Store the original visibility settings so they could be restored
		 *  @property abOriginal
		 *  @type     Array
		 *  @default  []
		 */
		"abOriginal": []
	};


	/**
	 * @namespace Common and useful DOM elements for the class instance
	 */
	this.dom = {
		/**
		 * Wrapper for the button - given back to DataTables as the node to insert
		 *  @property wrapper
		 *  @type     Node
		 *  @default  null
		 */
		"wrapper": null,

		/**
		 * Activation button
		 *  @property button
		 *  @type     Node
		 *  @default  null
		 */
		"button": null,

		/**
		 * Collection list node
		 *  @property collection
		 *  @type     Node
		 *  @default  null
		 */
		"collection": null,

		/**
		 * Background node used for shading the display and event capturing
		 *  @property background
		 *  @type     Node
		 *  @default  null
		 */
		"background": null,

		/**
		 * Element to position over the activation button to catch mouse events when using mouseover
		 *  @property catcher
		 *  @type     Node
		 *  @default  null
		 */
		"catcher": null,

		/**
		 * List of button elements
		 *  @property buttons
		 *  @type     Array
		 *  @default  []
		 */
		"buttons": [],

		/**
		 * List of group button elements
		 *  @property groupButtons
		 *  @type     Array
		 *  @default  []
		 */
		"groupButtons": [],

		/**
		 * Restore button
		 *  @property restore
		 *  @type     Node
		 *  @default  null
		 */
		"restore": null
	};

	/* Store global reference */
	ColVis.aInstances.push( this );

	/* Constructor logic */
	this.s.dt = $.fn.dataTable.Api ?
		new $.fn.dataTable.Api( oDTSettings ).settings()[0] :
		oDTSettings;

	this._fnConstruct( oInit );
	return this;
};



ColVis.prototype = {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Get the ColVis instance's control button so it can be injected into the
	 * DOM
	 *  @method  button
	 *  @returns {node} ColVis button
	 */
	button: function ()
	{
		return this.dom.wrapper;
	},

	/**
	 * Alias of `rebuild` for backwards compatibility
	 *  @method  fnRebuild
	 */
	"fnRebuild": function ()
	{
		this.rebuild();
	},

	/**
	 * Rebuild the list of buttons for this instance (i.e. if there is a column
	 * header update)
	 *  @method  fnRebuild
	 */
	rebuild: function ()
	{
		/* Remove the old buttons */
		for ( var i=this.dom.buttons.length-1 ; i>=0 ; i-- ) {
			this.dom.collection.removeChild( this.dom.buttons[i] );
		}
		this.dom.buttons.splice( 0, this.dom.buttons.length );

		if ( this.dom.restore ) {
			this.dom.restore.parentNode( this.dom.restore );
		}

		/* Re-add them (this is not the optimal way of doing this, it is fast and effective) */
		this._fnAddGroups();
		this._fnAddButtons();

		/* Update the checkboxes */
		this._fnDrawCallback();
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods (they are of course public in JS, but recommended as private)
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Constructor logic
	 *  @method  _fnConstruct
	 *  @returns void
	 *  @private
	 */
	"_fnConstruct": function ( init )
	{
		this._fnApplyCustomisation( init );

		var that = this;
		var i, iLen;
		this.dom.wrapper = document.createElement('div');
		this.dom.wrapper.className = "ColVis";

		this.dom.button = $( '<button />', {
				'class': !this.s.dt.bJUI ?
					"ColVis_Button ColVis_MasterButton" :
					"ColVis_Button ColVis_MasterButton ui-button ui-state-default"
			} )
			.append( '<span>'+this.s.buttonText+'</span>' )
			.bind( this.s.activate=="mouseover" ? "mouseover" : "click", function (e) {
				e.preventDefault();
				that._fnCollectionShow();
			} )
			.appendTo( this.dom.wrapper )[0];

		this.dom.catcher = this._fnDomCatcher();
		this.dom.collection = this._fnDomCollection();
		this.dom.background = this._fnDomBackground();

		this._fnAddGroups();
		this._fnAddButtons();

		/* Store the original visibility information */
		for ( i=0, iLen=this.s.dt.aoColumns.length ; i<iLen ; i++ )
		{
			this.s.abOriginal.push( this.s.dt.aoColumns[i].bVisible );
		}

		/* Update on each draw */
		this.s.dt.aoDrawCallback.push( {
			"fn": function () {
				that._fnDrawCallback.call( that );
			},
			"sName": "ColVis"
		} );

		/* If columns are reordered, then we need to update our exclude list and
		 * rebuild the displayed list
		 */
		$(this.s.dt.oInstance).bind( 'column-reorder', function ( e, oSettings, oReorder ) {
			for ( i=0, iLen=that.s.aiExclude.length ; i<iLen ; i++ ) {
				that.s.aiExclude[i] = oReorder.aiInvertMapping[ that.s.aiExclude[i] ];
			}

			var mStore = that.s.abOriginal.splice( oReorder.iFrom, 1 )[0];
			that.s.abOriginal.splice( oReorder.iTo, 0, mStore );

			that.fnRebuild();
		} );

		// Set the initial state
		this._fnDrawCallback();
	},


	/**
	 * Apply any customisation to the settings from the DataTables initialisation
	 *  @method  _fnApplyCustomisation
	 *  @returns void
	 *  @private
	 */
	"_fnApplyCustomisation": function ( init )
	{
		$.extend( true, this.s, ColVis.defaults, init );

		// Slightly messy overlap for the camelCase notation
		if ( ! this.s.showAll && this.s.bShowAll ) {
			this.s.showAll = this.s.sShowAll;
		}

		if ( ! this.s.restore && this.s.bRestore ) {
			this.s.restore = this.s.sRestore;
		}

		// CamelCase to Hungarian for the column groups 
		var groups = this.s.groups;
		var hungarianGroups = this.s.aoGroups;
		if ( groups ) {
			for ( var i=0, ien=groups.length ; i<ien ; i++ ) {
				if ( groups[i].title ) {
					hungarianGroups[i].sTitle = groups[i].title;
				}
				if ( groups[i].columns ) {
					hungarianGroups[i].aiColumns = groups[i].columns;
				}
			}
		}
	},


	/**
	 * On each table draw, check the visibility checkboxes as needed. This allows any process to
	 * update the table's column visibility and ColVis will still be accurate.
	 *  @method  _fnDrawCallback
	 *  @returns void
	 *  @private
	 */
	"_fnDrawCallback": function ()
	{
		var columns = this.s.dt.aoColumns;
		var buttons = this.dom.buttons;
		var groups = this.s.aoGroups;
		var button;

		for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( button.__columnIdx !== undefined ) {
				$('input', button).prop( 'checked', columns[ button.__columnIdx ].bVisible );
			}
		}

		var allVisible = function ( columnIndeces ) {
			for ( var k=0, kLen=columnIndeces.length ; k<kLen ; k++ )
			{
				if (  columns[columnIndeces[k]].bVisible === false ) { return false; }
			}
			return true;
		};
		var allHidden = function ( columnIndeces ) {
			for ( var m=0 , mLen=columnIndeces.length ; m<mLen ; m++ )
			{
				if ( columns[columnIndeces[m]].bVisible === true ) { return false; }
			}
			return true;
		};

		for ( var j=0, jLen=groups.length ; j<jLen ; j++ )
		{
			if ( allVisible(groups[j].aiColumns) )
			{
				$('input', this.dom.groupButtons[j]).prop('checked', true);
				$('input', this.dom.groupButtons[j]).prop('indeterminate', false);
			}
			else if ( allHidden(groups[j].aiColumns) )
			{
				$('input', this.dom.groupButtons[j]).prop('checked', false);
				$('input', this.dom.groupButtons[j]).prop('indeterminate', false);
			}
			else
			{
				$('input', this.dom.groupButtons[j]).prop('indeterminate', true);
			}
		}
	},


	/**
	 * Loop through the groups (provided in the settings) and create a button for each.
	 *  @method  _fnAddgroups
	 *  @returns void
	 *  @private
	 */
	"_fnAddGroups": function ()
	{
		var nButton;

		if ( typeof this.s.aoGroups != 'undefined' )
		{
			for ( var i=0, iLen=this.s.aoGroups.length ; i<iLen ; i++ )
			{
				nButton = this._fnDomGroupButton( i );
				this.dom.groupButtons.push( nButton );
				this.dom.buttons.push( nButton );
				this.dom.collection.appendChild( nButton );
			}
		}
	},


	/**
	 * Loop through the columns in the table and as a new button for each one.
	 *  @method  _fnAddButtons
	 *  @returns void
	 *  @private
	 */
	"_fnAddButtons": function ()
	{
		var
			nButton,
			columns = this.s.dt.aoColumns;

		if ( $.inArray( 'all', this.s.aiExclude ) === -1 ) {
			for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
			{
				if ( $.inArray( i, this.s.aiExclude ) === -1 )
				{
					nButton = this._fnDomColumnButton( i );
					nButton.__columnIdx = i;
					this.dom.buttons.push( nButton );
				}
			}
		}

		if ( this.s.order === 'alpha' ) {
			this.dom.buttons.sort( function ( a, b ) {
				var titleA = columns[ a.__columnIdx ].sTitle;
				var titleB = columns[ b.__columnIdx ].sTitle;

				return titleA === titleB ?
					0 :
					titleA < titleB ?
						-1 :
						1;
			} );
		}

		if ( this.s.restore )
		{
			nButton = this._fnDomRestoreButton();
			nButton.className += " ColVis_Restore";
			this.dom.buttons.push( nButton );
		}

		if ( this.s.showAll )
		{
			nButton = this._fnDomShowXButton( this.s.showAll, true );
			nButton.className += " ColVis_ShowAll";
			this.dom.buttons.push( nButton );
		}

		if ( this.s.showNone )
		{
			nButton = this._fnDomShowXButton( this.s.showNone, false );
			nButton.className += " ColVis_ShowNone";
			this.dom.buttons.push( nButton );
		}

		$(this.dom.collection).append( this.dom.buttons );
	},


	/**
	 * Create a button which allows a "restore" action
	 *  @method  _fnDomRestoreButton
	 *  @returns {Node} Created button
	 *  @private
	 */
	"_fnDomRestoreButton": function ()
	{
		var
			that = this,
			dt = this.s.dt;

		return $(
				'<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
					this.s.restore+
				'</li>'
			)
			.click( function (e) {
				for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
				{
					that.s.dt.oInstance.fnSetColumnVis( i, that.s.abOriginal[i], false );
				}
				that._fnAdjustOpenRows();
				that.s.dt.oInstance.fnAdjustColumnSizing( false );
				that.s.dt.oInstance.fnDraw( false );
			} )[0];
	},


	/**
	 * Create a button which allows show all and show node actions
	 *  @method  _fnDomShowXButton
	 *  @returns {Node} Created button
	 *  @private
	 */
	"_fnDomShowXButton": function ( str, action )
	{
		var
			that = this,
			dt = this.s.dt;

		return $(
				'<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
					str+
				'</li>'
			)
			.click( function (e) {
				for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
				{
					if (that.s.aiExclude.indexOf(i) === -1)
					{
						that.s.dt.oInstance.fnSetColumnVis( i, action, false );
					}
				}
				that._fnAdjustOpenRows();
				that.s.dt.oInstance.fnAdjustColumnSizing( false );
				that.s.dt.oInstance.fnDraw( false );
			} )[0];
	},


	/**
	 * Create the DOM for a show / hide group button
	 *  @method  _fnDomGroupButton
	 *  @param {int} i Group in question, order based on that provided in settings
	 *  @returns {Node} Created button
	 *  @private
	 */
	"_fnDomGroupButton": function ( i )
	{
		var
			that = this,
			dt = this.s.dt,
			oGroup = this.s.aoGroups[i];

		return $(
				'<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
					'<label>'+
						'<input type="checkbox" />'+
						'<span>'+oGroup.sTitle+'</span>'+
					'</label>'+
				'</li>'
			)
			.click( function (e) {
				var showHide = !$('input', this).is(":checked");
				if (  e.target.nodeName.toLowerCase() !== "li" )
				{
					showHide = ! showHide;
				}

				for ( var j=0 ; j < oGroup.aiColumns.length ; j++ )
				{
					that.s.dt.oInstance.fnSetColumnVis( oGroup.aiColumns[j], showHide );
				}
			} )[0];
	},


	/**
	 * Create the DOM for a show / hide button
	 *  @method  _fnDomColumnButton
	 *  @param {int} i Column in question
	 *  @returns {Node} Created button
	 *  @private
	 */
	"_fnDomColumnButton": function ( i )
	{
		var
			that = this,
			column = this.s.dt.aoColumns[i],
			dt = this.s.dt;

		var title = this.s.fnLabel===null ?
			column.sTitle :
			this.s.fnLabel( i, column.sTitle, column.nTh );

		return $(
				'<li '+(dt.bJUI ? 'class="ui-button ui-state-default"' : '')+'>'+
					'<label>'+
						'<input type="checkbox" />'+
						'<span>'+title+'</span>'+
					'</label>'+
				'</li>'
			)
			.click( function (e) {
				var showHide = !$('input', this).is(":checked");
				if (  e.target.nodeName.toLowerCase() !== "li" )
				{
					showHide = ! showHide;
				}

				/* Need to consider the case where the initialiser created more than one table - change the
				 * API index that DataTables is using
				 */
				var oldIndex = $.fn.dataTableExt.iApiIndex;
				$.fn.dataTableExt.iApiIndex = that._fnDataTablesApiIndex.call(that);

				// Optimisation for server-side processing when scrolling - don't do a full redraw
				if ( dt.oFeatures.bServerSide )
				{
					that.s.dt.oInstance.fnSetColumnVis( i, showHide, false );
					that.s.dt.oInstance.fnAdjustColumnSizing( false );
					if (dt.oScroll.sX !== "" || dt.oScroll.sY !== "" )
					{
						that.s.dt.oInstance.oApi._fnScrollDraw( that.s.dt );
					}
					that._fnDrawCallback();
				}
				else
				{
					that.s.dt.oInstance.fnSetColumnVis( i, showHide );
				}

				$.fn.dataTableExt.iApiIndex = oldIndex; /* Restore */

				if ( e.target.nodeName.toLowerCase() === 'input' && that.s.fnStateChange !== null )
				{
					that.s.fnStateChange.call( that, i, showHide );
				}
			} )[0];
	},


	/**
	 * Get the position in the DataTables instance array of the table for this
	 * instance of ColVis
	 *  @method  _fnDataTablesApiIndex
	 *  @returns {int} Index
	 *  @private
	 */
	"_fnDataTablesApiIndex": function ()
	{
		for ( var i=0, iLen=this.s.dt.oInstance.length ; i<iLen ; i++ )
		{
			if ( this.s.dt.oInstance[i] == this.s.dt.nTable )
			{
				return i;
			}
		}
		return 0;
	},


	/**
	 * Create the element used to contain list the columns (it is shown and
	 * hidden as needed)
	 *  @method  _fnDomCollection
	 *  @returns {Node} div container for the collection
	 *  @private
	 */
	"_fnDomCollection": function ()
	{
		return $('<ul />', {
				'class': !this.s.dt.bJUI ?
					"ColVis_collection" :
					"ColVis_collection ui-buttonset ui-buttonset-multi"
			} )
		.css( {
			'display': 'none',
			'opacity': 0,
			'position': ! this.s.bCssPosition ?
				'absolute' :
				''
		} )[0];
	},


	/**
	 * An element to be placed on top of the activate button to catch events
	 *  @method  _fnDomCatcher
	 *  @returns {Node} div container for the collection
	 *  @private
	 */
	"_fnDomCatcher": function ()
	{
		var
			that = this,
			nCatcher = document.createElement('div');
		nCatcher.className = "ColVis_catcher";

		$(nCatcher).click( function () {
			that._fnCollectionHide.call( that, null, null );
		} );

		return nCatcher;
	},


	/**
	 * Create the element used to shade the background, and capture hide events (it is shown and
	 * hidden as needed)
	 *  @method  _fnDomBackground
	 *  @returns {Node} div container for the background
	 *  @private
	 */
	"_fnDomBackground": function ()
	{
		var that = this;

		var background = $('<div></div>')
			.addClass( 'ColVis_collectionBackground' )
			.css( 'opacity', 0 )
			.click( function () {
				that._fnCollectionHide.call( that, null, null );
			} );

		/* When considering a mouse over action for the activation, we also consider a mouse out
		 * which is the same as a mouse over the background - without all the messing around of
		 * bubbling events. Use the catcher element to avoid messing around with bubbling
		 */
		if ( this.s.activate == "mouseover" )
		{
			background.mouseover( function () {
				that.s.overcollection = false;
				that._fnCollectionHide.call( that, null, null );
			} );
		}

		return background[0];
	},


	/**
	 * Show the show / hide list and the background
	 *  @method  _fnCollectionShow
	 *  @returns void
	 *  @private
	 */
	"_fnCollectionShow": function ()
	{
		var that = this, i, iLen, iLeft;
		var oPos = $(this.dom.button).offset();
		var nHidden = this.dom.collection;
		var nBackground = this.dom.background;
		var iDivX = parseInt(oPos.left, 10);
		var iDivY = parseInt(oPos.top + $(this.dom.button).outerHeight(), 10);

		if ( ! this.s.bCssPosition )
		{
			nHidden.style.top = iDivY+"px";
			nHidden.style.left = iDivX+"px";
		}

		$(nHidden).css( {
			'display': 'block',
			'opacity': 0
		} );

		nBackground.style.bottom ='0px';
		nBackground.style.right = '0px';

		var oStyle = this.dom.catcher.style;
		oStyle.height = $(this.dom.button).outerHeight()+"px";
		oStyle.width = $(this.dom.button).outerWidth()+"px";
		oStyle.top = oPos.top+"px";
		oStyle.left = iDivX+"px";

		document.body.appendChild( nBackground );
		document.body.appendChild( nHidden );
		document.body.appendChild( this.dom.catcher );

		/* This results in a very small delay for the end user but it allows the animation to be
		 * much smoother. If you don't want the animation, then the setTimeout can be removed
		 */
		$(nHidden).animate({"opacity": 1}, that.s.iOverlayFade);
		$(nBackground).animate({"opacity": 0.1}, that.s.iOverlayFade, 'linear', function () {
			/* In IE6 if you set the checked attribute of a hidden checkbox, then this is not visually
			 * reflected. As such, we need to do it here, once it is visible. Unbelievable.
			 */
			if ( $.browser && $.browser.msie && $.browser.version == "6.0" )
			{
				that._fnDrawCallback();
			}
		});

		/* Visual corrections to try and keep the collection visible */
		if ( !this.s.bCssPosition )
		{
			iLeft = ( this.s.sAlign=="left" ) ?
				iDivX :
				iDivX - $(nHidden).outerWidth() + $(this.dom.button).outerWidth();

			nHidden.style.left = iLeft+"px";

			var iDivWidth = $(nHidden).outerWidth();
			var iDivHeight = $(nHidden).outerHeight();
			var iDocWidth = $(document).width();

			if ( iLeft + iDivWidth > iDocWidth )
			{
				nHidden.style.left = (iDocWidth-iDivWidth)+"px";
			}
		}

		this.s.hidden = false;
	},


	/**
	 * Hide the show / hide list and the background
	 *  @method  _fnCollectionHide
	 *  @returns void
	 *  @private
	 */
	"_fnCollectionHide": function (  )
	{
		var that = this;

		if ( !this.s.hidden && this.dom.collection !== null )
		{
			this.s.hidden = true;

			$(this.dom.collection).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
				this.style.display = "none";
			} );

			$(this.dom.background).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
				document.body.removeChild( that.dom.background );
				document.body.removeChild( that.dom.catcher );
			} );
		}
	},


	/**
	 * Alter the colspan on any fnOpen rows
	 */
	"_fnAdjustOpenRows": function ()
	{
		var aoOpen = this.s.dt.aoOpenRows;
		var iVisible = this.s.dt.oApi._fnVisbleColumns( this.s.dt );

		for ( var i=0, iLen=aoOpen.length ; i<iLen ; i++ ) {
			aoOpen[i].nTr.getElementsByTagName('td')[0].colSpan = iVisible;
		}
	}
};





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static object methods
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Rebuild the collection for a given table, or all tables if no parameter given
 *  @method  ColVis.fnRebuild
 *  @static
 *  @param   object oTable DataTable instance to consider - optional
 *  @returns void
 */
ColVis.fnRebuild = function ( oTable )
{
	var nTable = null;
	if ( typeof oTable != 'undefined' )
	{
		nTable = oTable.fnSettings().nTable;
	}

	for ( var i=0, iLen=ColVis.aInstances.length ; i<iLen ; i++ )
	{
		if ( typeof oTable == 'undefined' || nTable == ColVis.aInstances[i].s.dt.nTable )
		{
			ColVis.aInstances[i].fnRebuild();
		}
	}
};


ColVis.defaults = {
	/**
	 * Mode of activation. Can be 'click' or 'mouseover'
	 *  @property activate
	 *  @type     string
	 *  @default  click
	 */
	active: 'click',

	/**
	 * Text used for the button
	 *  @property buttonText
	 *  @type     string
	 *  @default  Show / hide columns
	 */
	buttonText: 'Show / hide columns',

	/**
	 * List of columns (integers) which should be excluded from the list
	 *  @property aiExclude
	 *  @type     array
	 *  @default  []
	 */
	aiExclude: [],

	/**
	 * Show restore button
	 *  @property bRestore
	 *  @type     boolean
	 *  @default  false
	 */
	bRestore: false,

	/**
	 * Restore button text
	 *  @property sRestore
	 *  @type     string
	 *  @default  Restore original
	 */
	sRestore: 'Restore original',

	/**
	 * Show Show-All button
	 *  @property bShowAll
	 *  @type     boolean
	 *  @default  false
	 */
	bShowAll: false,

	/**
	 * Show All button text
	 *  @property sShowAll
	 *  @type     string
	 *  @default  Restore original
	 */
	sShowAll: 'Show All',

	/**
	 * Position of the collection menu when shown - align "left" or "right"
	 *  @property sAlign
	 *  @type     string
	 *  @default  left
	 */
	sAlign: 'left',

	/**
	 * Callback function to tell the user when the state has changed
	 *  @property fnStateChange
	 *  @type     function
	 *  @default  null
	 */
	fnStateChange: null,

	/**
	 * Overlay animation duration in mS
	 *  @property iOverlayFade
	 *  @type     integer|false
	 *  @default  500
	 */
	iOverlayFade: 500,

	/**
	 * Label callback for column names. Takes three parameters: 1. the
	 * column index, 2. the column title detected by DataTables and 3. the
	 * TH node for the column
	 *  @property fnLabel
	 *  @type     function
	 *  @default  null
	 */
	fnLabel: null,

	/**
	 * Indicate if the column list should be positioned by Javascript,
	 * visually below the button or allow CSS to do the positioning
	 *  @property bCssPosition
	 *  @type     boolean
	 *  @default  false
	 */
	bCssPosition: false,

	/**
	 * Group buttons
	 *  @property aoGroups
	 *  @type     array
	 *  @default  []
	 */
	aoGroups: [],

	/**
	 * Button ordering - 'alpha' (alphabetical) or 'column' (table column
	 * order)
	 *  @property order
	 *  @type     string
	 *  @default  column
	 */
	order: 'column'
};



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static object properties
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Collection of all ColVis instances
 *  @property ColVis.aInstances
 *  @static
 *  @type     Array
 *  @default  []
 */
ColVis.aInstances = [];





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constants
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Name of this class
 *  @constant CLASS
 *  @type     String
 *  @default  ColVis
 */
ColVis.prototype.CLASS = "ColVis";


/**
 * ColVis version
 *  @constant  VERSION
 *  @type      String
 *  @default   See code
 */
ColVis.VERSION = "1.1.1";
ColVis.prototype.VERSION = ColVis.VERSION;





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Initialisation
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * Register a new feature with DataTables
 */
if ( typeof $.fn.dataTable == "function" &&
     typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
     $.fn.dataTableExt.fnVersionCheck('1.7.0') )
{
	$.fn.dataTableExt.aoFeatures.push( {
		"fnInit": function( oDTSettings ) {
			var init = oDTSettings.oInit;
			var colvis = new ColVis( oDTSettings, init.colVis || init.oColVis || {} );
			return colvis.button();
		},
		"cFeature": "C",
		"sFeature": "ColVis"
	} );
}
else
{
	alert( "Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download");
}


// Make ColVis accessible from the DataTables instance
$.fn.dataTable.ColVis = ColVis;
$.fn.DataTable.ColVis = ColVis;


return ColVis;
}; // /factory


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery && !jQuery.fn.dataTable.ColVis ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


})(window, document);


/*! FixedColumns 3.0.3
 * ©2010-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     FixedColumns
 * @description Freeze columns in place on a scrolling DataTable
 * @version     3.0.3
 * @file        dataTables.fixedColumns.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */


(function(window, document, undefined) {


var factory = function( $, DataTable ) {
"use strict";

/**
 * When making use of DataTables' x-axis scrolling feature, you may wish to
 * fix the left most column in place. This plug-in for DataTables provides
 * exactly this option (note for non-scrolling tables, please use the
 * FixedHeader plug-in, which can fix headers, footers and columns). Key
 * features include:
 *
 * * Freezes the left or right most columns to the side of the table
 * * Option to freeze two or more columns
 * * Full integration with DataTables' scrolling options
 * * Speed - FixedColumns is fast in its operation
 *
 *  @class
 *  @constructor
 *  @global
 *  @param {object} dt DataTables instance. With DataTables 1.10 this can also
 *    be a jQuery collection, a jQuery selector, DataTables API instance or
 *    settings object.
 *  @param {object} [init={}] Configuration object for FixedColumns. Options are
 *    defined by {@link FixedColumns.defaults}
 *
 *  @requires jQuery 1.7+
 *  @requires DataTables 1.8.0+
 *
 *  @example
 *      var table = $('#example').dataTable( {
 *        "scrollX": "100%"
 *      } );
 *      new $.fn.dataTable.fixedColumns( table );
 */
var FixedColumns = function ( dt, init ) {
	var that = this;

	/* Sanity check - you just know it will happen */
	if ( ! ( this instanceof FixedColumns ) )
	{
		alert( "FixedColumns warning: FixedColumns must be initialised with the 'new' keyword." );
		return;
	}

	if ( typeof init == 'undefined' )
	{
		init = {};
	}

	// Use the DataTables Hungarian notation mapping method, if it exists to
	// provide forwards compatibility for camel case variables
	var camelToHungarian = $.fn.dataTable.camelToHungarian;
	if ( camelToHungarian ) {
		camelToHungarian( FixedColumns.defaults, FixedColumns.defaults, true );
		camelToHungarian( FixedColumns.defaults, init );
	}

	// v1.10 allows the settings object to be got form a number of sources
	var dtSettings = $.fn.dataTable.Api ?
		new $.fn.dataTable.Api( dt ).settings()[0] :
		dt.fnSettings();

	/**
	 * Settings object which contains customisable information for FixedColumns instance
	 * @namespace
	 * @extends FixedColumns.defaults
	 * @private
	 */
	this.s = {
		/**
		 * DataTables settings objects
		 *  @type     object
		 *  @default  Obtained from DataTables instance
		 */
		"dt": dtSettings,

		/**
		 * Number of columns in the DataTable - stored for quick access
		 *  @type     int
		 *  @default  Obtained from DataTables instance
		 */
		"iTableColumns": dtSettings.aoColumns.length,

		/**
		 * Original outer widths of the columns as rendered by DataTables - used to calculate
		 * the FixedColumns grid bounding box
		 *  @type     array.<int>
		 *  @default  []
		 */
		"aiOuterWidths": [],

		/**
		 * Original inner widths of the columns as rendered by DataTables - used to apply widths
		 * to the columns
		 *  @type     array.<int>
		 *  @default  []
		 */
		"aiInnerWidths": []
	};


	/**
	 * DOM elements used by the class instance
	 * @namespace
	 * @private
	 *
	 */
	this.dom = {
		/**
		 * DataTables scrolling element
		 *  @type     node
		 *  @default  null
		 */
		"scroller": null,

		/**
		 * DataTables header table
		 *  @type     node
		 *  @default  null
		 */
		"header": null,

		/**
		 * DataTables body table
		 *  @type     node
		 *  @default  null
		 */
		"body": null,

		/**
		 * DataTables footer table
		 *  @type     node
		 *  @default  null
		 */
		"footer": null,

		/**
		 * Display grid elements
		 * @namespace
		 */
		"grid": {
			/**
			 * Grid wrapper. This is the container element for the 3x3 grid
			 *  @type     node
			 *  @default  null
			 */
			"wrapper": null,

			/**
			 * DataTables scrolling element. This element is the DataTables
			 * component in the display grid (making up the main table - i.e.
			 * not the fixed columns).
			 *  @type     node
			 *  @default  null
			 */
			"dt": null,

			/**
			 * Left fixed column grid components
			 * @namespace
			 */
			"left": {
				"wrapper": null,
				"head": null,
				"body": null,
				"foot": null
			},

			/**
			 * Right fixed column grid components
			 * @namespace
			 */
			"right": {
				"wrapper": null,
				"head": null,
				"body": null,
				"foot": null
			}
		},

		/**
		 * Cloned table nodes
		 * @namespace
		 */
		"clone": {
			/**
			 * Left column cloned table nodes
			 * @namespace
			 */
			"left": {
				/**
				 * Cloned header table
				 *  @type     node
				 *  @default  null
				 */
				"header": null,

				/**
				 * Cloned body table
				 *  @type     node
				 *  @default  null
				 */
				"body": null,

				/**
				 * Cloned footer table
				 *  @type     node
				 *  @default  null
				 */
				"footer": null
			},

			/**
			 * Right column cloned table nodes
			 * @namespace
			 */
			"right": {
				/**
				 * Cloned header table
				 *  @type     node
				 *  @default  null
				 */
				"header": null,

				/**
				 * Cloned body table
				 *  @type     node
				 *  @default  null
				 */
				"body": null,

				/**
				 * Cloned footer table
				 *  @type     node
				 *  @default  null
				 */
				"footer": null
			}
		}
	};

	/* Attach the instance to the DataTables instance so it can be accessed easily */
	dtSettings._oFixedColumns = this;

	/* Let's do it */
	if ( ! dtSettings._bInitComplete )
	{
		dtSettings.oApi._fnCallbackReg( dtSettings, 'aoInitComplete', function () {
			that._fnConstruct( init );
		}, 'FixedColumns' );
	}
	else
	{
		this._fnConstruct( init );
	}
};



FixedColumns.prototype = /** @lends FixedColumns.prototype */{
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Update the fixed columns - including headers and footers. Note that FixedColumns will
	 * automatically update the display whenever the host DataTable redraws.
	 *  @returns {void}
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      var fc = new $.fn.dataTable.fixedColumns( table );
	 *
	 *      // at some later point when the table has been manipulated....
	 *      fc.fnUpdate();
	 */
	"fnUpdate": function ()
	{
		this._fnDraw( true );
	},


	/**
	 * Recalculate the resizes of the 3x3 grid that FixedColumns uses for display of the table.
	 * This is useful if you update the width of the table container. Note that FixedColumns will
	 * perform this function automatically when the window.resize event is fired.
	 *  @returns {void}
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      var fc = new $.fn.dataTable.fixedColumns( table );
	 *
	 *      // Resize the table container and then have FixedColumns adjust its layout....
	 *      $('#content').width( 1200 );
	 *      fc.fnRedrawLayout();
	 */
	"fnRedrawLayout": function ()
	{
		this._fnColCalc();
		this._fnGridLayout();
		this.fnUpdate();
	},


	/**
	 * Mark a row such that it's height should be recalculated when using 'semiauto' row
	 * height matching. This function will have no effect when 'none' or 'auto' row height
	 * matching is used.
	 *  @param   {Node} nTr TR element that should have it's height recalculated
	 *  @returns {void}
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      var fc = new $.fn.dataTable.fixedColumns( table );
	 *
	 *      // manipulate the table - mark the row as needing an update then update the table
	 *      // this allows the redraw performed by DataTables fnUpdate to recalculate the row
	 *      // height
	 *      fc.fnRecalculateHeight();
	 *      table.fnUpdate( $('#example tbody tr:eq(0)')[0], ["insert date", 1, 2, 3 ... ]);
	 */
	"fnRecalculateHeight": function ( nTr )
	{
		delete nTr._DTTC_iHeight;
		nTr.style.height = 'auto';
	},


	/**
	 * Set the height of a given row - provides cross browser compatibility
	 *  @param   {Node} nTarget TR element that should have it's height recalculated
	 *  @param   {int} iHeight Height in pixels to set
	 *  @returns {void}
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      var fc = new $.fn.dataTable.fixedColumns( table );
	 *
	 *      // You may want to do this after manipulating a row in the fixed column
	 *      fc.fnSetRowHeight( $('#example tbody tr:eq(0)')[0], 50 );
	 */
	"fnSetRowHeight": function ( nTarget, iHeight )
	{
		nTarget.style.height = iHeight+"px";
	},


	/**
	 * Get data index information about a row or cell in the table body.
	 * This function is functionally identical to fnGetPosition in DataTables,
	 * taking the same parameter (TH, TD or TR node) and returning exactly the
	 * the same information (data index information). THe difference between
	 * the two is that this method takes into account the fixed columns in the
	 * table, so you can pass in nodes from the master table, or the cloned
	 * tables and get the index position for the data in the main table.
	 *  @param {node} node TR, TH or TD element to get the information about
	 *  @returns {int} If nNode is given as a TR, then a single index is 
	 *    returned, or if given as a cell, an array of [row index, column index
	 *    (visible), column index (all)] is given.
	 */
	"fnGetPosition": function ( node )
	{
		var idx;
		var inst = this.s.dt.oInstance;

		if ( ! $(node).parents('.DTFC_Cloned').length )
		{
			// Not in a cloned table
			return inst.fnGetPosition( node );
		}
		else
		{
			// Its in the cloned table, so need to look up position
			if ( node.nodeName.toLowerCase() === 'tr' ) {
				idx = $(node).index();
				return inst.fnGetPosition( $('tr', this.s.dt.nTBody)[ idx ] );
			}
			else
			{
				var colIdx = $(node).index();
				idx = $(node.parentNode).index();
				var row = inst.fnGetPosition( $('tr', this.s.dt.nTBody)[ idx ] );

				return [
					row,
					colIdx,
					inst.oApi._fnVisibleToColumnIndex( this.s.dt, colIdx )
				];
			}
		}
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods (they are of course public in JS, but recommended as private)
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Initialisation for FixedColumns
	 *  @param   {Object} oInit User settings for initialisation
	 *  @returns {void}
	 *  @private
	 */
	"_fnConstruct": function ( oInit )
	{
		var i, iLen, iWidth,
			that = this;

		/* Sanity checking */
		if ( typeof this.s.dt.oInstance.fnVersionCheck != 'function' ||
		     this.s.dt.oInstance.fnVersionCheck( '1.8.0' ) !== true )
		{
			alert( "FixedColumns "+FixedColumns.VERSION+" required DataTables 1.8.0 or later. "+
				"Please upgrade your DataTables installation" );
			return;
		}

		if ( this.s.dt.oScroll.sX === "" )
		{
			this.s.dt.oInstance.oApi._fnLog( this.s.dt, 1, "FixedColumns is not needed (no "+
				"x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for "+
				"column fixing when scrolling is not enabled" );
			return;
		}

		/* Apply the settings from the user / defaults */
		this.s = $.extend( true, this.s, FixedColumns.defaults, oInit );

		/* Set up the DOM as we need it and cache nodes */
		var classes = this.s.dt.oClasses;
		this.dom.grid.dt = $(this.s.dt.nTable).parents('div.'+classes.sScrollWrapper)[0];
		this.dom.scroller = $('div.'+classes.sScrollBody, this.dom.grid.dt )[0];

		/* Set up the DOM that we want for the fixed column layout grid */
		this._fnColCalc();
		this._fnGridSetup();

		/* Event handlers */
		var mouseController;

		// When the body is scrolled - scroll the left and right columns
		$(this.dom.scroller)
			.on( 'mouseover.DTFC touchstart.DTFC', function () {
				mouseController = 'main';
			} )
			.on( 'scroll.DTFC', function () {
				if ( mouseController === 'main' ) {
					if ( that.s.iLeftColumns > 0 ) {
						that.dom.grid.left.liner.scrollTop = that.dom.scroller.scrollTop;
					}
					if ( that.s.iRightColumns > 0 ) {
						that.dom.grid.right.liner.scrollTop = that.dom.scroller.scrollTop;
					}
				}
			} );

		var wheelType = 'onwheel' in document.createElement('div') ?
			'wheel.DTFC' :
			'mousewheel.DTFC';

		if ( that.s.iLeftColumns > 0 ) {
			// When scrolling the left column, scroll the body and right column
			$(that.dom.grid.left.liner)
				.on( 'mouseover.DTFC touchstart.DTFC', function () {
					mouseController = 'left';
				} )
				.on( 'scroll.DTFC', function () {
					if ( mouseController === 'left' ) {
						that.dom.scroller.scrollTop = that.dom.grid.left.liner.scrollTop;
						if ( that.s.iRightColumns > 0 ) {
							that.dom.grid.right.liner.scrollTop = that.dom.grid.left.liner.scrollTop;
						}
					}
				} )
				.on( wheelType, function(e) { // xxx update the destroy as well
					// Pass horizontal scrolling through
					var xDelta = e.type === 'wheel' ?
						-e.originalEvent.deltaX :
						e.originalEvent.wheelDeltaX;
					that.dom.scroller.scrollLeft -= xDelta;
				} );
		}

		if ( that.s.iRightColumns > 0 ) {
			// When scrolling the right column, scroll the body and the left column
			$(that.dom.grid.right.liner)
				.on( 'mouseover.DTFC touchstart.DTFC', function () {
					mouseController = 'right';
				} )
				.on( 'scroll.DTFC', function () {
					if ( mouseController === 'right' ) {
						that.dom.scroller.scrollTop = that.dom.grid.right.liner.scrollTop;
						if ( that.s.iLeftColumns > 0 ) {
							that.dom.grid.left.liner.scrollTop = that.dom.grid.right.liner.scrollTop;
						}
					}
				} )
				.on( wheelType, function(e) {
					// Pass horizontal scrolling through
					var xDelta = e.type === 'wheel' ?
						-e.originalEvent.deltaX :
						e.originalEvent.wheelDeltaX;
					that.dom.scroller.scrollLeft -= xDelta;
				} );
		}

		$(window).on( 'resize.DTFC', function () {
			that._fnGridLayout.call( that );
		} );

		var bFirstDraw = true;
		var jqTable = $(this.s.dt.nTable);

		jqTable
			.on( 'draw.dt.DTFC', function () {
				that._fnDraw.call( that, bFirstDraw );
				bFirstDraw = false;
			} )
			.on( 'column-sizing.dt.DTFC', function () {
				that._fnColCalc();
				that._fnGridLayout( that );
			} )
			.on( 'column-visibility.dt.DTFC', function () {
				that._fnColCalc();
				that._fnGridLayout( that );
				that._fnDraw( true );
			} )
			.on( 'destroy.dt.DTFC', function () {
				jqTable.off( 'column-sizing.dt.DTFC destroy.dt.DTFC draw.dt.DTFC' );

				$(that.dom.scroller).off( 'scroll.DTFC mouseover.DTFC' );
				$(window).off( 'resize.DTFC' );

				$(that.dom.grid.left.liner).off( 'scroll.DTFC mouseover.DTFC '+wheelType );
				$(that.dom.grid.left.wrapper).remove();

				$(that.dom.grid.right.liner).off( 'scroll.DTFC mouseover.DTFC '+wheelType );
				$(that.dom.grid.right.wrapper).remove();
			} );

		/* Get things right to start with - note that due to adjusting the columns, there must be
		 * another redraw of the main table. It doesn't need to be a full redraw however.
		 */
		this._fnGridLayout();
		this.s.dt.oInstance.fnDraw(false);
	},


	/**
	 * Calculate the column widths for the grid layout
	 *  @returns {void}
	 *  @private
	 */
	"_fnColCalc": function ()
	{
		var that = this;
		var iLeftWidth = 0;
		var iRightWidth = 0;

		this.s.aiInnerWidths = [];
		this.s.aiOuterWidths = [];

		$.each( this.s.dt.aoColumns, function (i, col) {
			var th = $(col.nTh);
			var border;

			if ( ! th.filter(':visible').length ) {
				that.s.aiInnerWidths.push( 0 );
				that.s.aiOuterWidths.push( 0 );
			}
			else
			{
				// Inner width is used to assign widths to cells
				// Outer width is used to calculate the container
				var iWidth = th.outerWidth();

				// When working with the left most-cell, need to add on the
				// table's border to the outerWidth, since we need to take
				// account of it, but it isn't in any cell
				if ( that.s.aiOuterWidths.length === 0 ) {
					border = $(that.s.dt.nTable).css('border-left-width');
					iWidth += typeof border === 'string' ? 1 : parseInt( border, 10 );
				}

				// Likewise with the final column on the right
				if ( that.s.aiOuterWidths.length === that.s.dt.aoColumns.length-1 ) {
					border = $(that.s.dt.nTable).css('border-right-width');
					iWidth += typeof border === 'string' ? 1 : parseInt( border, 10 );
				}

				that.s.aiOuterWidths.push( iWidth );
				that.s.aiInnerWidths.push( th.width() );

				if ( i < that.s.iLeftColumns )
				{
					iLeftWidth += iWidth;
				}

				if ( that.s.iTableColumns-that.s.iRightColumns <= i )
				{
					iRightWidth += iWidth;
				}
			}
		} );

		this.s.iLeftWidth = iLeftWidth;
		this.s.iRightWidth = iRightWidth;
	},


	/**
	 * Set up the DOM for the fixed column. The way the layout works is to create a 1x3 grid
	 * for the left column, the DataTable (for which we just reuse the scrolling element DataTable
	 * puts into the DOM) and the right column. In each of he two fixed column elements there is a
	 * grouping wrapper element and then a head, body and footer wrapper. In each of these we then
	 * place the cloned header, body or footer tables. This effectively gives as 3x3 grid structure.
	 *  @returns {void}
	 *  @private
	 */
	"_fnGridSetup": function ()
	{
		var that = this;
		var oOverflow = this._fnDTOverflow();
		var block;

		this.dom.body = this.s.dt.nTable;
		this.dom.header = this.s.dt.nTHead.parentNode;
		this.dom.header.parentNode.parentNode.style.position = "relative";

		var nSWrapper =
			$('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;">'+
				'<div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;">'+
					'<div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div>'+
					'<div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;">'+
						'<div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div>'+
					'</div>'+
					'<div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div>'+
				'</div>'+
				'<div class="DTFC_RightWrapper" style="position:absolute; top:0; left:0;">'+
					'<div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;">'+
						'<div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div>'+
					'</div>'+
					'<div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;">'+
						'<div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div>'+
					'</div>'+
					'<div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;">'+
						'<div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div>'+
					'</div>'+
				'</div>'+
			'</div>')[0];
		var nLeft = nSWrapper.childNodes[0];
		var nRight = nSWrapper.childNodes[1];

		this.dom.grid.dt.parentNode.insertBefore( nSWrapper, this.dom.grid.dt );
		nSWrapper.appendChild( this.dom.grid.dt );

		this.dom.grid.wrapper = nSWrapper;

		if ( this.s.iLeftColumns > 0 )
		{
			this.dom.grid.left.wrapper = nLeft;
			this.dom.grid.left.head = nLeft.childNodes[0];
			this.dom.grid.left.body = nLeft.childNodes[1];
			this.dom.grid.left.liner = $('div.DTFC_LeftBodyLiner', nSWrapper)[0];

			nSWrapper.appendChild( nLeft );
		}

		if ( this.s.iRightColumns > 0 )
		{
			this.dom.grid.right.wrapper = nRight;
			this.dom.grid.right.head = nRight.childNodes[0];
			this.dom.grid.right.body = nRight.childNodes[1];
			this.dom.grid.right.liner = $('div.DTFC_RightBodyLiner', nSWrapper)[0];

			block = $('div.DTFC_RightHeadBlocker', nSWrapper)[0];
			block.style.width = oOverflow.bar+"px";
			block.style.right = -oOverflow.bar+"px";
			this.dom.grid.right.headBlock = block;

			block = $('div.DTFC_RightFootBlocker', nSWrapper)[0];
			block.style.width = oOverflow.bar+"px";
			block.style.right = -oOverflow.bar+"px";
			this.dom.grid.right.footBlock = block;

			nSWrapper.appendChild( nRight );
		}

		if ( this.s.dt.nTFoot )
		{
			this.dom.footer = this.s.dt.nTFoot.parentNode;
			if ( this.s.iLeftColumns > 0 )
			{
				this.dom.grid.left.foot = nLeft.childNodes[2];
			}
			if ( this.s.iRightColumns > 0 )
			{
				this.dom.grid.right.foot = nRight.childNodes[2];
			}
		}
	},


	/**
	 * Style and position the grid used for the FixedColumns layout
	 *  @returns {void}
	 *  @private
	 */
	"_fnGridLayout": function ()
	{
		var oGrid = this.dom.grid;
		var iWidth = $(oGrid.wrapper).width();
		var iBodyHeight = $(this.s.dt.nTable.parentNode).outerHeight();
		var iFullHeight = $(this.s.dt.nTable.parentNode.parentNode).outerHeight();
		var oOverflow = this._fnDTOverflow();
		var
			iLeftWidth = this.s.iLeftWidth,
			iRightWidth = this.s.iRightWidth,
			iRight;
		var scrollbarAdjust = function ( node, width ) {
			if ( ! oOverflow.bar ) {
				// If there is no scrollbar (Macs) we need to hide the auto scrollbar
				node.style.width = (width+20)+"px";
				node.style.paddingRight = "20px";
				node.style.boxSizing = "border-box";
			}
			else {
				// Otherwise just overflow by the scrollbar
				node.style.width = (width+oOverflow.bar)+"px";
			}
		};

		// When x scrolling - don't paint the fixed columns over the x scrollbar
		if ( oOverflow.x )
		{
			iBodyHeight -= oOverflow.bar;
		}

		oGrid.wrapper.style.height = iFullHeight+"px";

		if ( this.s.iLeftColumns > 0 )
		{
			oGrid.left.wrapper.style.width = iLeftWidth+"px";
			oGrid.left.wrapper.style.height = "1px";
			oGrid.left.body.style.height = iBodyHeight+"px";
			if ( oGrid.left.foot ) {
				oGrid.left.foot.style.top = (oOverflow.x ? oOverflow.bar : 0)+"px"; // shift footer for scrollbar
			}

			scrollbarAdjust( oGrid.left.liner, iLeftWidth );
			oGrid.left.liner.style.height = iBodyHeight+"px";
		}

		if ( this.s.iRightColumns > 0 )
		{
			iRight = iWidth - iRightWidth;
			if ( oOverflow.y )
			{
				iRight -= oOverflow.bar;
			}

			oGrid.right.wrapper.style.width = iRightWidth+"px";
			oGrid.right.wrapper.style.left = iRight+"px";
			oGrid.right.wrapper.style.height = "1px";
			oGrid.right.body.style.height = iBodyHeight+"px";
			if ( oGrid.right.foot ) {
				oGrid.right.foot.style.top = (oOverflow.x ? oOverflow.bar : 0)+"px";
			}

			scrollbarAdjust( oGrid.right.liner, iRightWidth );
			oGrid.right.liner.style.height = iBodyHeight+"px";

			oGrid.right.headBlock.style.display = oOverflow.y ? 'block' : 'none';
			oGrid.right.footBlock.style.display = oOverflow.y ? 'block' : 'none';
		}
	},


	/**
	 * Get information about the DataTable's scrolling state - specifically if the table is scrolling
	 * on either the x or y axis, and also the scrollbar width.
	 *  @returns {object} Information about the DataTables scrolling state with the properties:
	 *    'x', 'y' and 'bar'
	 *  @private
	 */
	"_fnDTOverflow": function ()
	{
		var nTable = this.s.dt.nTable;
		var nTableScrollBody = nTable.parentNode;
		var out = {
			"x": false,
			"y": false,
			"bar": this.s.dt.oScroll.iBarWidth
		};

		if ( nTable.offsetWidth > nTableScrollBody.clientWidth )
		{
			out.x = true;
		}

		if ( nTable.offsetHeight > nTableScrollBody.clientHeight )
		{
			out.y = true;
		}

		return out;
	},


	/**
	 * Clone and position the fixed columns
	 *  @returns {void}
	 *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
	 *  @private
	 */
	"_fnDraw": function ( bAll )
	{
		this._fnGridLayout();
		this._fnCloneLeft( bAll );
		this._fnCloneRight( bAll );

		/* Draw callback function */
		if ( this.s.fnDrawCallback !== null )
		{
			this.s.fnDrawCallback.call( this, this.dom.clone.left, this.dom.clone.right );
		}

		/* Event triggering */
		$(this).trigger( 'draw.dtfc', {
			"leftClone": this.dom.clone.left,
			"rightClone": this.dom.clone.right
		} );
	},


	/**
	 * Clone the right columns
	 *  @returns {void}
	 *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
	 *  @private
	 */
	"_fnCloneRight": function ( bAll )
	{
		if ( this.s.iRightColumns <= 0 ) {
			return;
		}

		var that = this,
			i, jq,
			aiColumns = [];

		for ( i=this.s.iTableColumns-this.s.iRightColumns ; i<this.s.iTableColumns ; i++ ) {
			if ( this.s.dt.aoColumns[i].bVisible ) {
				aiColumns.push( i );
			}
		}

		this._fnClone( this.dom.clone.right, this.dom.grid.right, aiColumns, bAll );
	},


	/**
	 * Clone the left columns
	 *  @returns {void}
	 *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
	 *  @private
	 */
	"_fnCloneLeft": function ( bAll )
	{
		if ( this.s.iLeftColumns <= 0 ) {
			return;
		}

		var that = this,
			i, jq,
			aiColumns = [];

		for ( i=0 ; i<this.s.iLeftColumns ; i++ ) {
			if ( this.s.dt.aoColumns[i].bVisible ) {
				aiColumns.push( i );
			}
		}

		this._fnClone( this.dom.clone.left, this.dom.grid.left, aiColumns, bAll );
	},


	/**
	 * Make a copy of the layout object for a header or footer element from DataTables. Note that
	 * this method will clone the nodes in the layout object.
	 *  @returns {Array} Copy of the layout array
	 *  @param   {Object} aoOriginal Layout array from DataTables (aoHeader or aoFooter)
	 *  @param   {Object} aiColumns Columns to copy
	 *  @private
	 */
	"_fnCopyLayout": function ( aoOriginal, aiColumns )
	{
		var aReturn = [];
		var aClones = [];
		var aCloned = [];

		for ( var i=0, iLen=aoOriginal.length ; i<iLen ; i++ )
		{
			var aRow = [];
			aRow.nTr = $(aoOriginal[i].nTr).clone(true, true)[0];

			for ( var j=0, jLen=this.s.iTableColumns ; j<jLen ; j++ )
			{
				if ( $.inArray( j, aiColumns ) === -1 )
				{
					continue;
				}

				var iCloned = $.inArray( aoOriginal[i][j].cell, aCloned );
				if ( iCloned === -1 )
				{
					var nClone = $(aoOriginal[i][j].cell).clone(true, true)[0];
					aClones.push( nClone );
					aCloned.push( aoOriginal[i][j].cell );

					aRow.push( {
						"cell": nClone,
						"unique": aoOriginal[i][j].unique
					} );
				}
				else
				{
					aRow.push( {
						"cell": aClones[ iCloned ],
						"unique": aoOriginal[i][j].unique
					} );
				}
			}

			aReturn.push( aRow );
		}

		return aReturn;
	},


	/**
	 * Clone the DataTable nodes and place them in the DOM (sized correctly)
	 *  @returns {void}
	 *  @param   {Object} oClone Object containing the header, footer and body cloned DOM elements
	 *  @param   {Object} oGrid Grid object containing the display grid elements for the cloned
	 *                    column (left or right)
	 *  @param   {Array} aiColumns Column indexes which should be operated on from the DataTable
	 *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
	 *  @private
	 */
	"_fnClone": function ( oClone, oGrid, aiColumns, bAll )
	{
		var that = this,
			i, iLen, j, jLen, jq, nTarget, iColumn, nClone, iIndex, aoCloneLayout,
			jqCloneThead, aoFixedHeader;

		/*
		 * Header
		 */
		if ( bAll )
		{
			if ( oClone.header !== null )
			{
				oClone.header.parentNode.removeChild( oClone.header );
			}
			oClone.header = $(this.dom.header).clone(true, true)[0];
			oClone.header.className += " DTFC_Cloned";
			oClone.header.style.width = "100%";
			oGrid.head.appendChild( oClone.header );

			/* Copy the DataTables layout cache for the header for our floating column */
			aoCloneLayout = this._fnCopyLayout( this.s.dt.aoHeader, aiColumns );
			jqCloneThead = $('>thead', oClone.header);
			jqCloneThead.empty();

			/* Add the created cloned TR elements to the table */
			for ( i=0, iLen=aoCloneLayout.length ; i<iLen ; i++ )
			{
				jqCloneThead[0].appendChild( aoCloneLayout[i].nTr );
			}

			/* Use the handy _fnDrawHead function in DataTables to do the rowspan/colspan
			 * calculations for us
			 */
			this.s.dt.oApi._fnDrawHead( this.s.dt, aoCloneLayout, true );
		}
		else
		{
			/* To ensure that we copy cell classes exactly, regardless of colspan, multiple rows
			 * etc, we make a copy of the header from the DataTable again, but don't insert the
			 * cloned cells, just copy the classes across. To get the matching layout for the
			 * fixed component, we use the DataTables _fnDetectHeader method, allowing 1:1 mapping
			 */
			aoCloneLayout = this._fnCopyLayout( this.s.dt.aoHeader, aiColumns );
			aoFixedHeader=[];

			this.s.dt.oApi._fnDetectHeader( aoFixedHeader, $('>thead', oClone.header)[0] );

			for ( i=0, iLen=aoCloneLayout.length ; i<iLen ; i++ )
			{
				for ( j=0, jLen=aoCloneLayout[i].length ; j<jLen ; j++ )
				{
					aoFixedHeader[i][j].cell.className = aoCloneLayout[i][j].cell.className;

					// If jQuery UI theming is used we need to copy those elements as well
					$('span.DataTables_sort_icon', aoFixedHeader[i][j].cell).each( function () {
						this.className = $('span.DataTables_sort_icon', aoCloneLayout[i][j].cell)[0].className;
					} );
				}
			}
		}
		this._fnEqualiseHeights( 'thead', this.dom.header, oClone.header );

		/*
		 * Body
		 */
		if ( this.s.sHeightMatch == 'auto' )
		{
			/* Remove any heights which have been applied already and let the browser figure it out */
			$('>tbody>tr', that.dom.body).css('height', 'auto');
		}

		if ( oClone.body !== null )
		{
			oClone.body.parentNode.removeChild( oClone.body );
			oClone.body = null;
		}

		oClone.body = $(this.dom.body).clone(true)[0];
		oClone.body.className += " DTFC_Cloned";
		oClone.body.style.paddingBottom = this.s.dt.oScroll.iBarWidth+"px";
		oClone.body.style.marginBottom = (this.s.dt.oScroll.iBarWidth*2)+"px"; /* For IE */
		if ( oClone.body.getAttribute('id') !== null )
		{
			oClone.body.removeAttribute('id');
		}

		$('>thead>tr', oClone.body).empty();
		$('>tfoot', oClone.body).remove();

		var nBody = $('tbody', oClone.body)[0];
		$(nBody).empty();
		if ( this.s.dt.aiDisplay.length > 0 )
		{
			/* Copy the DataTables' header elements to force the column width in exactly the
			 * same way that DataTables does it - have the header element, apply the width and
			 * colapse it down
			 */
			var nInnerThead = $('>thead>tr', oClone.body)[0];
			for ( iIndex=0 ; iIndex<aiColumns.length ; iIndex++ )
			{
				iColumn = aiColumns[iIndex];

				nClone = $(this.s.dt.aoColumns[iColumn].nTh).clone(true)[0];
				nClone.innerHTML = "";

				var oStyle = nClone.style;
				oStyle.paddingTop = "0";
				oStyle.paddingBottom = "0";
				oStyle.borderTopWidth = "0";
				oStyle.borderBottomWidth = "0";
				oStyle.height = 0;
				oStyle.width = that.s.aiInnerWidths[iColumn]+"px";

				nInnerThead.appendChild( nClone );
			}

			/* Add in the tbody elements, cloning form the master table */
			$('>tbody>tr', that.dom.body).each( function (z) {
				var n = this.cloneNode(false);
				n.removeAttribute('id');
				var i = that.s.dt.oFeatures.bServerSide===false ?
					that.s.dt.aiDisplay[ that.s.dt._iDisplayStart+z ] : z;
				var aTds = $(this).children('td, th');

				for ( iIndex=0 ; iIndex<aiColumns.length ; iIndex++ )
				{
					iColumn = aiColumns[iIndex];

					if ( aTds.length > 0 )
					{
						nClone = $( aTds[iColumn] ).clone(true, true)[0];
						n.appendChild( nClone );
					}
				}
				nBody.appendChild( n );
			} );
		}
		else
		{
			$('>tbody>tr', that.dom.body).each( function (z) {
				nClone = this.cloneNode(true);
				nClone.className += ' DTFC_NoData';
				$('td', nClone).html('');
				nBody.appendChild( nClone );
			} );
		}

		oClone.body.style.width = "100%";
		oClone.body.style.margin = "0";
		oClone.body.style.padding = "0";

		if ( bAll )
		{
			if ( typeof this.s.dt.oScroller != 'undefined' )
			{
				oGrid.liner.appendChild( this.s.dt.oScroller.dom.force.cloneNode(true) );
			}
		}
		oGrid.liner.appendChild( oClone.body );

		this._fnEqualiseHeights( 'tbody', that.dom.body, oClone.body );

		/*
		 * Footer
		 */
		if ( this.s.dt.nTFoot !== null )
		{
			if ( bAll )
			{
				if ( oClone.footer !== null )
				{
					oClone.footer.parentNode.removeChild( oClone.footer );
				}
				oClone.footer = $(this.dom.footer).clone(true, true)[0];
				oClone.footer.className += " DTFC_Cloned";
				oClone.footer.style.width = "100%";
				oGrid.foot.appendChild( oClone.footer );

				/* Copy the footer just like we do for the header */
				aoCloneLayout = this._fnCopyLayout( this.s.dt.aoFooter, aiColumns );
				var jqCloneTfoot = $('>tfoot', oClone.footer);
				jqCloneTfoot.empty();

				for ( i=0, iLen=aoCloneLayout.length ; i<iLen ; i++ )
				{
					jqCloneTfoot[0].appendChild( aoCloneLayout[i].nTr );
				}
				this.s.dt.oApi._fnDrawHead( this.s.dt, aoCloneLayout, true );
			}
			else
			{
				aoCloneLayout = this._fnCopyLayout( this.s.dt.aoFooter, aiColumns );
				var aoCurrFooter=[];

				this.s.dt.oApi._fnDetectHeader( aoCurrFooter, $('>tfoot', oClone.footer)[0] );

				for ( i=0, iLen=aoCloneLayout.length ; i<iLen ; i++ )
				{
					for ( j=0, jLen=aoCloneLayout[i].length ; j<jLen ; j++ )
					{
						aoCurrFooter[i][j].cell.className = aoCloneLayout[i][j].cell.className;
					}
				}
			}
			this._fnEqualiseHeights( 'tfoot', this.dom.footer, oClone.footer );
		}

		/* Equalise the column widths between the header footer and body - body get's priority */
		var anUnique = this.s.dt.oApi._fnGetUniqueThs( this.s.dt, $('>thead', oClone.header)[0] );
		$(anUnique).each( function (i) {
			iColumn = aiColumns[i];
			this.style.width = that.s.aiInnerWidths[iColumn]+"px";
		} );

		if ( that.s.dt.nTFoot !== null )
		{
			anUnique = this.s.dt.oApi._fnGetUniqueThs( this.s.dt, $('>tfoot', oClone.footer)[0] );
			$(anUnique).each( function (i) {
				iColumn = aiColumns[i];
				this.style.width = that.s.aiInnerWidths[iColumn]+"px";
			} );
		}
	},


	/**
	 * From a given table node (THEAD etc), get a list of TR direct child elements
	 *  @param   {Node} nIn Table element to search for TR elements (THEAD, TBODY or TFOOT element)
	 *  @returns {Array} List of TR elements found
	 *  @private
	 */
	"_fnGetTrNodes": function ( nIn )
	{
		var aOut = [];
		for ( var i=0, iLen=nIn.childNodes.length ; i<iLen ; i++ )
		{
			if ( nIn.childNodes[i].nodeName.toUpperCase() == "TR" )
			{
				aOut.push( nIn.childNodes[i] );
			}
		}
		return aOut;
	},


	/**
	 * Equalise the heights of the rows in a given table node in a cross browser way
	 *  @returns {void}
	 *  @param   {String} nodeName Node type - thead, tbody or tfoot
	 *  @param   {Node} original Original node to take the heights from
	 *  @param   {Node} clone Copy the heights to
	 *  @private
	 */
	"_fnEqualiseHeights": function ( nodeName, original, clone )
	{
		if ( this.s.sHeightMatch == 'none' && nodeName !== 'thead' && nodeName !== 'tfoot' )
		{
			return;
		}

		var that = this,
			i, iLen, iHeight, iHeight2, iHeightOriginal, iHeightClone,
			rootOriginal = original.getElementsByTagName(nodeName)[0],
			rootClone    = clone.getElementsByTagName(nodeName)[0],
			jqBoxHack    = $('>'+nodeName+'>tr:eq(0)', original).children(':first'),
			iBoxHack     = jqBoxHack.outerHeight() - jqBoxHack.height(),
			anOriginal   = this._fnGetTrNodes( rootOriginal ),
			anClone      = this._fnGetTrNodes( rootClone ),
			heights      = [];

		for ( i=0, iLen=anClone.length ; i<iLen ; i++ )
		{
			iHeightOriginal = anOriginal[i].offsetHeight;
			iHeightClone = anClone[i].offsetHeight;
			iHeight = iHeightClone > iHeightOriginal ? iHeightClone : iHeightOriginal;

			if ( this.s.sHeightMatch == 'semiauto' )
			{
				anOriginal[i]._DTTC_iHeight = iHeight;
			}

			heights.push( iHeight );
		}

		for ( i=0, iLen=anClone.length ; i<iLen ; i++ )
		{
			anClone[i].style.height = heights[i]+"px";
			anOriginal[i].style.height = heights[i]+"px";
		}
	}
};



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Statics
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * FixedColumns default settings for initialisation
 *  @name FixedColumns.defaults
 *  @namespace
 *  @static
 */
FixedColumns.defaults = /** @lends FixedColumns.defaults */{
	/**
	 * Number of left hand columns to fix in position
	 *  @type     int
	 *  @default  1
	 *  @static
	 *  @example
	 *      var  = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      new $.fn.dataTable.fixedColumns( table, {
	 *          "leftColumns": 2
	 *      } );
	 */
	"iLeftColumns": 1,

	/**
	 * Number of right hand columns to fix in position
	 *  @type     int
	 *  @default  0
	 *  @static
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      new $.fn.dataTable.fixedColumns( table, {
	 *          "rightColumns": 1
	 *      } );
	 */
	"iRightColumns": 0,

	/**
	 * Draw callback function which is called when FixedColumns has redrawn the fixed assets
	 *  @type     function(object, object):void
	 *  @default  null
	 *  @static
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      new $.fn.dataTable.fixedColumns( table, {
	 *          "drawCallback": function () {
	 *	            alert( "FixedColumns redraw" );
	 *	        }
	 *      } );
	 */
	"fnDrawCallback": null,

	/**
	 * Height matching algorthim to use. This can be "none" which will result in no height
	 * matching being applied by FixedColumns (height matching could be forced by CSS in this
	 * case), "semiauto" whereby the height calculation will be performed once, and the result
	 * cached to be used again (fnRecalculateHeight can be used to force recalculation), or
	 * "auto" when height matching is performed on every draw (slowest but must accurate)
	 *  @type     string
	 *  @default  semiauto
	 *  @static
	 *  @example
	 *      var table = $('#example').dataTable( {
	 *          "scrollX": "100%"
	 *      } );
	 *      new $.fn.dataTable.fixedColumns( table, {
	 *          "heightMatch": "auto"
	 *      } );
	 */
	"sHeightMatch": "semiauto"
};




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constants
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * FixedColumns version
 *  @name      FixedColumns.version
 *  @type      String
 *  @default   See code
 *  @static
 */
FixedColumns.version = "3.0.3";



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fired events (for documentation)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/**
 * Event fired whenever FixedColumns redraws the fixed columns (i.e. clones the table elements from the main DataTable). This will occur whenever the DataTable that the FixedColumns instance is attached does its own draw.
 * @name FixedColumns#draw.dtfc
 * @event
 * @param {event} e jQuery event object
 * @param {object} o Event parameters from FixedColumns
 * @param {object} o.leftClone Instance's object dom.clone.left for easy reference. This object contains references to the left fixed clumn column's nodes
 * @param {object} o.rightClone Instance's object dom.clone.right for easy reference. This object contains references to the right fixed clumn column's nodes
 */


// Make FixedColumns accessible from the DataTables instance
$.fn.dataTable.FixedColumns = FixedColumns;
$.fn.DataTable.FixedColumns = FixedColumns;


return FixedColumns;
}; // /factory


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery && !jQuery.fn.dataTable.FixedColumns ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


})(window, document);


/*! TableTools 2.2.3
 * 2009-2014 SpryMedia Ltd - datatables.net/license
 *
 * ZeroClipboard 1.0.4
 * Author: Joseph Huckaby - MIT licensed
 */

/**
 * @summary     TableTools
 * @description Tools and buttons for DataTables
 * @version     2.2.3
 * @file        dataTables.tableTools.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2009-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */


/* Global scope for TableTools for backwards compatibility.
 * Will be removed in 2.3
 */
var TableTools;

(function(window, document, undefined) {


var factory = function( $, DataTable ) {
"use strict";


//include ZeroClipboard.js
/* ZeroClipboard 1.0.4
 * Author: Joseph Huckaby
 */

var ZeroClipboard_TableTools = {

	version: "1.0.4-TableTools2",
	clients: {}, // registered upload clients on page, indexed by id
	moviePath: '', // URL to movie
	nextId: 1, // ID of next movie

	$: function(thingy) {
		// simple DOM lookup utility function
		if (typeof(thingy) == 'string') {
			thingy = document.getElementById(thingy);
		}
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				this.className = this.className.replace( new RegExp("\\s*" + name + "\\s*"), " ").replace(/^\s+/, '').replace(/\s+$/, '');
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			};
		}
		return thingy;
	},

	setMoviePath: function(path) {
		// set path to ZeroClipboard.swf
		this.moviePath = path;
	},

	dispatch: function(id, eventName, args) {
		// receive event from flash movie, send to client
		var client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},

	register: function(id, client) {
		// register new client to receive events
		this.clients[id] = client;
	},

	getDOMObjectPosition: function(obj) {
		// get absolute coordinates for dom element
		var info = {
			left: 0,
			top: 0,
			width: obj.width ? obj.width : obj.offsetWidth,
			height: obj.height ? obj.height : obj.offsetHeight
		};

		if ( obj.style.width !== "" ) {
			info.width = obj.style.width.replace("px","");
		}

		if ( obj.style.height !== "" ) {
			info.height = obj.style.height.replace("px","");
		}

		while (obj) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},

	Client: function(elem) {
		// constructor for new simple upload client
		this.handlers = {};

		// unique ID
		this.id = ZeroClipboard_TableTools.nextId++;
		this.movieId = 'ZeroClipboard_TableToolsMovie_' + this.id;

		// register client with singleton to receive flash events
		ZeroClipboard_TableTools.register(this.id, this);

		// create movie
		if (elem) {
			this.glue(elem);
		}
	}
};

ZeroClipboard_TableTools.Client.prototype = {

	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: null, // reference to movie object
	clipText: '', // text to copy to clipboard
	fileName: '', // default file save name
	action: 'copy', // action to perform
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers
	sized: false,

	glue: function(elem, title) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard_TableTools.$(elem);

		// float just above object, or zIndex 99 if dom element isn't set
		var zIndex = 99;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
		}

		// find X/Y position of domElement
		var box = ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);

		// create floating DIV above element
		this.div = document.createElement('div');
		var style = this.div.style;
		style.position = 'absolute';
		style.left = '0px';
		style.top = '0px';
		style.width = (box.width) + 'px';
		style.height = box.height + 'px';
		style.zIndex = zIndex;

		if ( typeof title != "undefined" && title !== "" ) {
			this.div.title = title;
		}
		if ( box.width !== 0 && box.height !== 0 ) {
			this.sized = true;
		}

		// style.backgroundColor = '#f00'; // debug
		if ( this.domElement ) {
			this.domElement.appendChild(this.div);
			this.div.innerHTML = this.getHTML( box.width, box.height ).replace(/&/g, '&amp;');
		}
	},

	positionElement: function() {
		var box = ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);
		var style = this.div.style;

		style.position = 'absolute';
		//style.left = (this.domElement.offsetLeft)+'px';
		//style.top = this.domElement.offsetTop+'px';
		style.width = box.width + 'px';
		style.height = box.height + 'px';

		if ( box.width !== 0 && box.height !== 0 ) {
			this.sized = true;
		} else {
			return;
		}

		var flash = this.div.childNodes[0];
		flash.width = box.width;
		flash.height = box.height;
	},

	getHTML: function(width, height) {
		// return HTML for movie
		var html = '';
		var flashvars = 'id=' + this.id +
			'&width=' + width +
			'&height=' + height;

		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard_TableTools.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard_TableTools.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
		}
		return html;
	},

	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},

	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},

	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';

			var body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {}

			this.domElement = null;
			this.div = null;
		}
	},

	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard_TableTools.$(elem);
			if (!this.domElement) {
				this.hide();
			}
		}

		if (this.domElement && this.div) {
			var box = ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);
			var style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},

	clearText: function() {
		// clear the text to be copy / saved
		this.clipText = '';
		if (this.ready) {
			this.movie.clearText();
		}
	},

	appendText: function(newText) {
		// append text to that which is to be copied / saved
		this.clipText += newText;
		if (this.ready) { this.movie.appendText(newText) ;}
	},

	setText: function(newText) {
		// set text to be copied to be copied / saved
		this.clipText = newText;
		if (this.ready) { this.movie.setText(newText) ;}
	},

	setCharSet: function(charSet) {
		// set the character set (UTF16LE or UTF8)
		this.charSet = charSet;
		if (this.ready) { this.movie.setCharSet(charSet) ;}
	},

	setBomInc: function(bomInc) {
		// set if the BOM should be included or not
		this.incBom = bomInc;
		if (this.ready) { this.movie.setBomInc(bomInc) ;}
	},

	setFileName: function(newText) {
		// set the file name
		this.fileName = newText;
		if (this.ready) {
			this.movie.setFileName(newText);
		}
	},

	setAction: function(newText) {
		// set action (save or copy)
		this.action = newText;
		if (this.ready) {
			this.movie.setAction(newText);
		}
	},

	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]) {
			this.handlers[eventName] = [];
		}
		this.handlers[eventName].push(func);
	},

	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready) {
			this.movie.setHandCursor(enabled);
		}
	},

	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},

	receiveEvent: function(eventName, args) {
		var self;

		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');

		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}

				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}

				this.ready = true;
				this.movie.clearText();
				this.movie.appendText( this.clipText );
				this.movie.setFileName( this.fileName );
				this.movie.setAction( this.action );
				this.movie.setCharSet( this.charSet );
				this.movie.setBomInc( this.incBom );
				this.movie.setHandCursor( this.handCursorEnabled );
				break;

			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					//this.domElement.addClass('hover');
					if (this.recoverActive) {
						this.domElement.addClass('active');
					}
				}
				break;

			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					//this.domElement.removeClass('hover');
				}
				break;

			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;

			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName

		if (this.handlers[eventName]) {
			for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				var func = this.handlers[eventName][idx];

				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}

};

// For the Flash binding to work, ZeroClipboard_TableTools must be on the global
// object list
window.ZeroClipboard_TableTools = ZeroClipboard_TableTools;
//include TableTools.js
/* TableTools
 * 2009-2014 SpryMedia Ltd - datatables.net/license
 */

/*globals TableTools,ZeroClipboard_TableTools*/


(function($, window, document) {

/** 
 * TableTools provides flexible buttons and other tools for a DataTables enhanced table
 * @class TableTools
 * @constructor
 * @param {Object} oDT DataTables instance. When using DataTables 1.10 this can
 *   also be a jQuery collection, jQuery selector, table node, DataTables API
 *   instance or DataTables settings object.
 * @param {Object} oOpts TableTools options
 * @param {String} oOpts.sSwfPath ZeroClipboard SWF path
 * @param {String} oOpts.sRowSelect Row selection options - 'none', 'single', 'multi' or 'os'
 * @param {Function} oOpts.fnPreRowSelect Callback function just prior to row selection
 * @param {Function} oOpts.fnRowSelected Callback function just after row selection
 * @param {Function} oOpts.fnRowDeselected Callback function when row is deselected
 * @param {Array} oOpts.aButtons List of buttons to be used
 */
TableTools = function( oDT, oOpts )
{
	/* Santiy check that we are a new instance */
	if ( ! this instanceof TableTools )
	{
		alert( "Warning: TableTools must be initialised with the keyword 'new'" );
	}

	// In 1.10 we can use the API to get the settings object from a number of
	// sources
	var dtSettings = $.fn.dataTable.Api ?
		new $.fn.dataTable.Api( oDT ).settings()[0] :
		oDT.fnSettings();


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class variables
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * @namespace Settings object which contains customisable information for TableTools instance
	 */
	this.s = {
		/**
		 * Store 'this' so the instance can be retrieved from the settings object
		 * @property that
		 * @type	 object
		 * @default  this
		 */
		"that": this,

		/** 
		 * DataTables settings objects
		 * @property dt
		 * @type	 object
		 * @default  <i>From the oDT init option</i>
		 */
		"dt": dtSettings,

		/**
		 * @namespace Print specific information
		 */
		"print": {
			/** 
			 * DataTables draw 'start' point before the printing display was shown
			 *  @property saveStart
			 *  @type	 int
			 *  @default  -1
			 */
			"saveStart": -1,

			/** 
			 * DataTables draw 'length' point before the printing display was shown
			 *  @property saveLength
			 *  @type	 int
			 *  @default  -1
			 */
			"saveLength": -1,

			/** 
			 * Page scrolling point before the printing display was shown so it can be restored
			 *  @property saveScroll
			 *  @type	 int
			 *  @default  -1
			 */
			"saveScroll": -1,

			/** 
			 * Wrapped function to end the print display (to maintain scope)
			 *  @property funcEnd
			 *  @type	 Function
			 *  @default  function () {}
			 */
			"funcEnd": function () {}
		},

		/**
		 * A unique ID is assigned to each button in each instance
		 * @property buttonCounter
		 *  @type	 int
		 * @default  0
		 */
		"buttonCounter": 0,

		/**
		 * @namespace Select rows specific information
		 */
		"select": {
			/**
			 * Select type - can be 'none', 'single' or 'multi'
			 * @property type
			 *  @type	 string
			 * @default  ""
			 */
			"type": "",

			/**
			 * Array of nodes which are currently selected
			 *  @property selected
			 *  @type	 array
			 *  @default  []
			 */
			"selected": [],

			/**
			 * Function to run before the selection can take place. Will cancel the select if the
			 * function returns false
			 *  @property preRowSelect
			 *  @type	 Function
			 *  @default  null
			 */
			"preRowSelect": null,

			/**
			 * Function to run when a row is selected
			 *  @property postSelected
			 *  @type	 Function
			 *  @default  null
			 */
			"postSelected": null,

			/**
			 * Function to run when a row is deselected
			 *  @property postDeselected
			 *  @type	 Function
			 *  @default  null
			 */
			"postDeselected": null,

			/**
			 * Indicate if all rows are selected (needed for server-side processing)
			 *  @property all
			 *  @type	 boolean
			 *  @default  false
			 */
			"all": false,

			/**
			 * Class name to add to selected TR nodes
			 *  @property selectedClass
			 *  @type	 String
			 *  @default  ""
			 */
			"selectedClass": ""
		},

		/**
		 * Store of the user input customisation object
		 *  @property custom
		 *  @type	 object
		 *  @default  {}
		 */
		"custom": {},

		/**
		 * SWF movie path
		 *  @property swfPath
		 *  @type	 string
		 *  @default  ""
		 */
		"swfPath": "",

		/**
		 * Default button set
		 *  @property buttonSet
		 *  @type	 array
		 *  @default  []
		 */
		"buttonSet": [],

		/**
		 * When there is more than one TableTools instance for a DataTable, there must be a 
		 * master which controls events (row selection etc)
		 *  @property master
		 *  @type	 boolean
		 *  @default  false
		 */
		"master": false,

		/**
		 * Tag names that are used for creating collections and buttons
		 *  @namesapce
		 */
		"tags": {}
	};


	/**
	 * @namespace Common and useful DOM elements for the class instance
	 */
	this.dom = {
		/**
		 * DIV element that is create and all TableTools buttons (and their children) put into
		 *  @property container
		 *  @type	 node
		 *  @default  null
		 */
		"container": null,

		/**
		 * The table node to which TableTools will be applied
		 *  @property table
		 *  @type	 node
		 *  @default  null
		 */
		"table": null,

		/**
		 * @namespace Nodes used for the print display
		 */
		"print": {
			/**
			 * Nodes which have been removed from the display by setting them to display none
			 *  @property hidden
			 *  @type	 array
			 *  @default  []
			 */
			"hidden": [],

			/**
			 * The information display saying telling the user about the print display
			 *  @property message
			 *  @type	 node
			 *  @default  null
			 */
			"message": null
	  },

		/**
		 * @namespace Nodes used for a collection display. This contains the currently used collection
		 */
		"collection": {
			/**
			 * The div wrapper containing the buttons in the collection (i.e. the menu)
			 *  @property collection
			 *  @type	 node
			 *  @default  null
			 */
			"collection": null,

			/**
			 * Background display to provide focus and capture events
			 *  @property background
			 *  @type	 node
			 *  @default  null
			 */
			"background": null
		}
	};

	/**
	 * @namespace Name space for the classes that this TableTools instance will use
	 * @extends TableTools.classes
	 */
	this.classes = $.extend( true, {}, TableTools.classes );
	if ( this.s.dt.bJUI )
	{
		$.extend( true, this.classes, TableTools.classes_themeroller );
	}


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Retreieve the settings object from an instance
	 *  @method fnSettings
	 *  @returns {object} TableTools settings object
	 */
	this.fnSettings = function () {
		return this.s;
	};


	/* Constructor logic */
	if ( typeof oOpts == 'undefined' )
	{
		oOpts = {};
	}


	TableTools._aInstances.push( this );
	this._fnConstruct( oOpts );

	return this;
};



TableTools.prototype = {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Retreieve the settings object from an instance
	 *  @returns {array} List of TR nodes which are currently selected
	 *  @param {boolean} [filtered=false] Get only selected rows which are  
	 *    available given the filtering applied to the table. By default
	 *    this is false -  i.e. all rows, regardless of filtering are 
	      selected.
	 */
	"fnGetSelected": function ( filtered )
	{
		var
			out = [],
			data = this.s.dt.aoData,
			displayed = this.s.dt.aiDisplay,
			i, iLen;

		if ( filtered )
		{
			// Only consider filtered rows
			for ( i=0, iLen=displayed.length ; i<iLen ; i++ )
			{
				if ( data[ displayed[i] ]._DTTT_selected )
				{
					out.push( data[ displayed[i] ].nTr );
				}
			}
		}
		else
		{
			// Use all rows
			for ( i=0, iLen=data.length ; i<iLen ; i++ )
			{
				if ( data[i]._DTTT_selected )
				{
					out.push( data[i].nTr );
				}
			}
		}

		return out;
	},


	/**
	 * Get the data source objects/arrays from DataTables for the selected rows (same as
	 * fnGetSelected followed by fnGetData on each row from the table)
	 *  @returns {array} Data from the TR nodes which are currently selected
	 */
	"fnGetSelectedData": function ()
	{
		var out = [];
		var data=this.s.dt.aoData;
		var i, iLen;

		for ( i=0, iLen=data.length ; i<iLen ; i++ )
		{
			if ( data[i]._DTTT_selected )
			{
				out.push( this.s.dt.oInstance.fnGetData(i) );
			}
		}

		return out;
	},


	/**
	 * Get the indexes of the selected rows
	 *  @returns {array} List of row indexes
	 *  @param {boolean} [filtered=false] Get only selected rows which are  
	 *    available given the filtering applied to the table. By default
	 *    this is false -  i.e. all rows, regardless of filtering are 
	      selected.
	 */
	"fnGetSelectedIndexes": function ( filtered )
	{
		var
			out = [],
			data = this.s.dt.aoData,
			displayed = this.s.dt.aiDisplay,
			i, iLen;

		if ( filtered )
		{
			// Only consider filtered rows
			for ( i=0, iLen=displayed.length ; i<iLen ; i++ )
			{
				if ( data[ displayed[i] ]._DTTT_selected )
				{
					out.push( displayed[i] );
				}
			}
		}
		else
		{
			// Use all rows
			for ( i=0, iLen=data.length ; i<iLen ; i++ )
			{
				if ( data[i]._DTTT_selected )
				{
					out.push( i );
				}
			}
		}

		return out;
	},


	/**
	 * Check to see if a current row is selected or not
	 *  @param {Node} n TR node to check if it is currently selected or not
	 *  @returns {Boolean} true if select, false otherwise
	 */
	"fnIsSelected": function ( n )
	{
		var pos = this.s.dt.oInstance.fnGetPosition( n );
		return (this.s.dt.aoData[pos]._DTTT_selected===true) ? true : false;
	},


	/**
	 * Select all rows in the table
	 *  @param {boolean} [filtered=false] Select only rows which are available 
	 *    given the filtering applied to the table. By default this is false - 
	 *    i.e. all rows, regardless of filtering are selected.
	 */
	"fnSelectAll": function ( filtered )
	{
		this._fnRowSelect( filtered ?
			this.s.dt.aiDisplay :
			this.s.dt.aoData
		);
	},


	/**
	 * Deselect all rows in the table
	 *  @param {boolean} [filtered=false] Deselect only rows which are available 
	 *    given the filtering applied to the table. By default this is false - 
	 *    i.e. all rows, regardless of filtering are deselected.
	 */
	"fnSelectNone": function ( filtered )
	{
		this._fnRowDeselect( this.fnGetSelectedIndexes(filtered) );
	},


	/**
	 * Select row(s)
	 *  @param {node|object|array} n The row(s) to select. Can be a single DOM
	 *    TR node, an array of TR nodes or a jQuery object.
	 */
	"fnSelect": function ( n )
	{
		if ( this.s.select.type == "single" )
		{
			this.fnSelectNone();
			this._fnRowSelect( n );
		}
		else
		{
			this._fnRowSelect( n );
		}
	},


	/**
	 * Deselect row(s)
	 *  @param {node|object|array} n The row(s) to deselect. Can be a single DOM
	 *    TR node, an array of TR nodes or a jQuery object.
	 */
	"fnDeselect": function ( n )
	{
		this._fnRowDeselect( n );
	},


	/**
	 * Get the title of the document - useful for file names. The title is retrieved from either
	 * the configuration object's 'title' parameter, or the HTML document title
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns {String} Button title
	 */
	"fnGetTitle": function( oConfig )
	{
		var sTitle = "";
		if ( typeof oConfig.sTitle != 'undefined' && oConfig.sTitle !== "" ) {
			sTitle = oConfig.sTitle;
		} else {
			var anTitle = document.getElementsByTagName('title');
			if ( anTitle.length > 0 )
			{
				sTitle = anTitle[0].innerHTML;
			}
		}

		/* Strip characters which the OS will object to - checking for UTF8 support in the scripting
		 * engine
		 */
		if ( "\u00A1".toString().length < 4 ) {
			return sTitle.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
		} else {
			return sTitle.replace(/[^a-zA-Z0-9_\.,\-_ !\(\)]/g, "");
		}
	},


	/**
	 * Calculate a unity array with the column width by proportion for a set of columns to be
	 * included for a button. This is particularly useful for PDF creation, where we can use the
	 * column widths calculated by the browser to size the columns in the PDF.
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns {Array} Unity array of column ratios
	 */
	"fnCalcColRatios": function ( oConfig )
	{
		var
			aoCols = this.s.dt.aoColumns,
			aColumnsInc = this._fnColumnTargets( oConfig.mColumns ),
			aColWidths = [],
			iWidth = 0, iTotal = 0, i, iLen;

		for ( i=0, iLen=aColumnsInc.length ; i<iLen ; i++ )
		{
			if ( aColumnsInc[i] )
			{
				iWidth = aoCols[i].nTh.offsetWidth;
				iTotal += iWidth;
				aColWidths.push( iWidth );
			}
		}

		for ( i=0, iLen=aColWidths.length ; i<iLen ; i++ )
		{
			aColWidths[i] = aColWidths[i] / iTotal;
		}

		return aColWidths.join('\t');
	},


	/**
	 * Get the information contained in a table as a string
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns {String} Table data as a string
	 */
	"fnGetTableData": function ( oConfig )
	{
		/* In future this could be used to get data from a plain HTML source as well as DataTables */
		if ( this.s.dt )
		{
			return this._fnGetDataTablesData( oConfig );
		}
	},


	/**
	 * Pass text to a flash button instance, which will be used on the button's click handler
	 *  @param   {Object} clip Flash button object
	 *  @param   {String} text Text to set
	 */
	"fnSetText": function ( clip, text )
	{
		this._fnFlashSetText( clip, text );
	},


	/**
	 * Resize the flash elements of the buttons attached to this TableTools instance - this is
	 * useful for when initialising TableTools when it is hidden (display:none) since sizes can't
	 * be calculated at that time.
	 */
	"fnResizeButtons": function ()
	{
		for ( var cli in ZeroClipboard_TableTools.clients )
		{
			if ( cli )
			{
				var client = ZeroClipboard_TableTools.clients[cli];
				if ( typeof client.domElement != 'undefined' &&
					 client.domElement.parentNode )
				{
					client.positionElement();
				}
			}
		}
	},


	/**
	 * Check to see if any of the ZeroClipboard client's attached need to be resized
	 */
	"fnResizeRequired": function ()
	{
		for ( var cli in ZeroClipboard_TableTools.clients )
		{
			if ( cli )
			{
				var client = ZeroClipboard_TableTools.clients[cli];
				if ( typeof client.domElement != 'undefined' &&
					 client.domElement.parentNode == this.dom.container &&
					 client.sized === false )
				{
					return true;
				}
			}
		}
		return false;
	},


	/**
	 * Programmatically enable or disable the print view
	 *  @param {boolean} [bView=true] Show the print view if true or not given. If false, then
	 *    terminate the print view and return to normal.
	 *  @param {object} [oConfig={}] Configuration for the print view
	 *  @param {boolean} [oConfig.bShowAll=false] Show all rows in the table if true
	 *  @param {string} [oConfig.sInfo] Information message, displayed as an overlay to the
	 *    user to let them know what the print view is.
	 *  @param {string} [oConfig.sMessage] HTML string to show at the top of the document - will
	 *    be included in the printed document.
	 */
	"fnPrint": function ( bView, oConfig )
	{
		if ( oConfig === undefined )
		{
			oConfig = {};
		}

		if ( bView === undefined || bView )
		{
			this._fnPrintStart( oConfig );
		}
		else
		{
			this._fnPrintEnd();
		}
	},


	/**
	 * Show a message to the end user which is nicely styled
	 *  @param {string} message The HTML string to show to the user
	 *  @param {int} time The duration the message is to be shown on screen for (mS)
	 */
	"fnInfo": function ( message, time ) {
		var info = $('<div/>')
			.addClass( this.classes.print.info )
			.html( message )
			.appendTo( 'body' );

		setTimeout( function() {
			info.fadeOut( "normal", function() {
				info.remove();
			} );
		}, time );
	},



	/**
	 * Get the container element of the instance for attaching to the DOM
	 *   @returns {node} DOM node
	 */
	"fnContainer": function () {
		return this.dom.container;
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods (they are of course public in JS, but recommended as private)
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/**
	 * Constructor logic
	 *  @method  _fnConstruct
	 *  @param   {Object} oOpts Same as TableTools constructor
	 *  @returns void
	 *  @private 
	 */
	"_fnConstruct": function ( oOpts )
	{
		var that = this;

		this._fnCustomiseSettings( oOpts );

		/* Container element */
		this.dom.container = document.createElement( this.s.tags.container );
		this.dom.container.className = this.classes.container;

		/* Row selection config */
		if ( this.s.select.type != 'none' )
		{
			this._fnRowSelectConfig();
		}

		/* Buttons */
		this._fnButtonDefinations( this.s.buttonSet, this.dom.container );

		/* Destructor */
		this.s.dt.aoDestroyCallback.push( {
			"sName": "TableTools",
			"fn": function () {
				$(that.s.dt.nTBody).off( 'click.DTTT_Select', 'tr' );
				$(that.dom.container).empty();

				// Remove the instance
				var idx = $.inArray( that, TableTools._aInstances );
				if ( idx !== -1 ) {
					TableTools._aInstances.splice( idx, 1 );
				}
			}
		} );
	},


	/**
	 * Take the user defined settings and the default settings and combine them.
	 *  @method  _fnCustomiseSettings
	 *  @param   {Object} oOpts Same as TableTools constructor
	 *  @returns void
	 *  @private 
	 */
	"_fnCustomiseSettings": function ( oOpts )
	{
		/* Is this the master control instance or not? */
		if ( typeof this.s.dt._TableToolsInit == 'undefined' )
		{
			this.s.master = true;
			this.s.dt._TableToolsInit = true;
		}

		/* We can use the table node from comparisons to group controls */
		this.dom.table = this.s.dt.nTable;

		/* Clone the defaults and then the user options */
		this.s.custom = $.extend( {}, TableTools.DEFAULTS, oOpts );

		/* Flash file location */
		this.s.swfPath = this.s.custom.sSwfPath;
		if ( typeof ZeroClipboard_TableTools != 'undefined' )
		{
			ZeroClipboard_TableTools.moviePath = this.s.swfPath;
		}

		/* Table row selecting */
		this.s.select.type = this.s.custom.sRowSelect;
		this.s.select.preRowSelect = this.s.custom.fnPreRowSelect;
		this.s.select.postSelected = this.s.custom.fnRowSelected;
		this.s.select.postDeselected = this.s.custom.fnRowDeselected;

		// Backwards compatibility - allow the user to specify a custom class in the initialiser
		if ( this.s.custom.sSelectedClass )
		{
			this.classes.select.row = this.s.custom.sSelectedClass;
		}

		this.s.tags = this.s.custom.oTags;

		/* Button set */
		this.s.buttonSet = this.s.custom.aButtons;
	},


	/**
	 * Take the user input arrays and expand them to be fully defined, and then add them to a given
	 * DOM element
	 *  @method  _fnButtonDefinations
	 *  @param {array} buttonSet Set of user defined buttons
	 *  @param {node} wrapper Node to add the created buttons to
	 *  @returns void
	 *  @private 
	 */
	"_fnButtonDefinations": function ( buttonSet, wrapper )
	{
		var buttonDef;

		for ( var i=0, iLen=buttonSet.length ; i<iLen ; i++ )
		{
			if ( typeof buttonSet[i] == "string" )
			{
				if ( typeof TableTools.BUTTONS[ buttonSet[i] ] == 'undefined' )
				{
					alert( "TableTools: Warning - unknown button type: "+buttonSet[i] );
					continue;
				}
				buttonDef = $.extend( {}, TableTools.BUTTONS[ buttonSet[i] ], true );
			}
			else
			{
				if ( typeof TableTools.BUTTONS[ buttonSet[i].sExtends ] == 'undefined' )
				{
					alert( "TableTools: Warning - unknown button type: "+buttonSet[i].sExtends );
					continue;
				}
				var o = $.extend( {}, TableTools.BUTTONS[ buttonSet[i].sExtends ], true );
				buttonDef = $.extend( o, buttonSet[i], true );
			}

			var button = this._fnCreateButton(
				buttonDef,
				$(wrapper).hasClass(this.classes.collection.container)
			);

			if ( button ) {
				wrapper.appendChild( button );
			}
		}
	},


	/**
	 * Create and configure a TableTools button
	 *  @method  _fnCreateButton
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns {Node} Button element
	 *  @private 
	 */
	"_fnCreateButton": function ( oConfig, bCollectionButton )
	{
	  var nButton = this._fnButtonBase( oConfig, bCollectionButton );

		if ( oConfig.sAction.match(/flash/) )
		{
			if ( ! this._fnHasFlash() ) {
				return false;
			}

			this._fnFlashConfig( nButton, oConfig );
		}
		else if ( oConfig.sAction == "text" )
		{
			this._fnTextConfig( nButton, oConfig );
		}
		else if ( oConfig.sAction == "div" )
		{
			this._fnTextConfig( nButton, oConfig );
		}
		else if ( oConfig.sAction == "collection" )
		{
			this._fnTextConfig( nButton, oConfig );
			this._fnCollectionConfig( nButton, oConfig );
		}

		if ( this.s.dt.iTabIndex !== -1 ) {
			$(nButton)
				.attr( 'tabindex', this.s.dt.iTabIndex )
				.attr( 'aria-controls', this.s.dt.sTableId )
				.on( 'keyup.DTTT', function (e) {
					// Trigger the click event on return key when focused.
					// Note that for Flash buttons this has no effect since we
					// can't programmatically trigger the Flash export
					if ( e.keyCode === 13 ) {
						e.stopPropagation();

						$(this).trigger( 'click' );
					}
				} )
				.on( 'mousedown.DTTT', function (e) {
					// On mousedown we want to stop the focus occurring on the
					// button, focus is used only for the keyboard navigation.
					// But using preventDefault for the flash buttons stops the
					// flash action. However, it is not the button that gets
					// focused but the flash element for flash buttons, so this
					// works
					if ( ! oConfig.sAction.match(/flash/) ) {
						e.preventDefault();
					}
				} );
		}

		return nButton;
	},


	/**
	 * Create the DOM needed for the button and apply some base properties. All buttons start here
	 *  @method  _fnButtonBase
	 *  @param   {o} oConfig Button configuration object
	 *  @returns {Node} DIV element for the button
	 *  @private
	 */
	"_fnButtonBase": function ( o, bCollectionButton )
	{
		var sTag, sLiner, sClass;

		if ( bCollectionButton )
		{
			sTag = o.sTag && o.sTag !== "default" ? o.sTag : this.s.tags.collection.button;
			sLiner = o.sLinerTag && o.sLinerTag !== "default" ? o.sLiner : this.s.tags.collection.liner;
			sClass = this.classes.collection.buttons.normal;
		}
		else
		{
			sTag = o.sTag && o.sTag !== "default" ? o.sTag : this.s.tags.button;
			sLiner = o.sLinerTag && o.sLinerTag !== "default" ? o.sLiner : this.s.tags.liner;
			sClass = this.classes.buttons.normal;
		}

		var
		  nButton = document.createElement( sTag ),
		  nSpan = document.createElement( sLiner ),
		  masterS = this._fnGetMasterSettings();

		nButton.className = sClass+" "+o.sButtonClass;
		nButton.setAttribute('id', "ToolTables_"+this.s.dt.sInstance+"_"+masterS.buttonCounter );
		nButton.appendChild( nSpan );
		nSpan.innerHTML = o.sButtonText;

		masterS.buttonCounter++;

		return nButton;
	},


	/**
	 * Get the settings object for the master instance. When more than one TableTools instance is
	 * assigned to a DataTable, only one of them can be the 'master' (for the select rows). As such,
	 * we will typically want to interact with that master for global properties.
	 *  @method  _fnGetMasterSettings
	 *  @returns {Object} TableTools settings object
	 *  @private 
	 */
	"_fnGetMasterSettings": function ()
	{
		if ( this.s.master )
		{
			return this.s;
		}
		else
		{
			/* Look for the master which has the same DT as this one */
			var instances = TableTools._aInstances;
			for ( var i=0, iLen=instances.length ; i<iLen ; i++ )
			{
				if ( this.dom.table == instances[i].s.dt.nTable )
				{
					return instances[i].s;
				}
			}
		}
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Button collection functions
	 */

	/**
	 * Create a collection button, when activated will present a drop down list of other buttons
	 *  @param   {Node} nButton Button to use for the collection activation
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns void
	 *  @private
	 */
	"_fnCollectionConfig": function ( nButton, oConfig )
	{
		var nHidden = document.createElement( this.s.tags.collection.container );
		nHidden.style.display = "none";
		nHidden.className = this.classes.collection.container;
		oConfig._collection = nHidden;
		document.body.appendChild( nHidden );

		this._fnButtonDefinations( oConfig.aButtons, nHidden );
	},


	/**
	 * Show a button collection
	 *  @param   {Node} nButton Button to use for the collection
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns void
	 *  @private
	 */
	"_fnCollectionShow": function ( nButton, oConfig )
	{
		var
			that = this,
			oPos = $(nButton).offset(),
			nHidden = oConfig._collection,
			iDivX = oPos.left,
			iDivY = oPos.top + $(nButton).outerHeight(),
			iWinHeight = $(window).height(), iDocHeight = $(document).height(),
			iWinWidth = $(window).width(), iDocWidth = $(document).width();

		nHidden.style.position = "absolute";
		nHidden.style.left = iDivX+"px";
		nHidden.style.top = iDivY+"px";
		nHidden.style.display = "block";
		$(nHidden).css('opacity',0);

		var nBackground = document.createElement('div');
		nBackground.style.position = "absolute";
		nBackground.style.left = "0px";
		nBackground.style.top = "0px";
		nBackground.style.height = ((iWinHeight>iDocHeight)? iWinHeight : iDocHeight) +"px";
		nBackground.style.width = ((iWinWidth>iDocWidth)? iWinWidth : iDocWidth) +"px";
		nBackground.className = this.classes.collection.background;
		$(nBackground).css('opacity',0);

		document.body.appendChild( nBackground );
		document.body.appendChild( nHidden );

		/* Visual corrections to try and keep the collection visible */
		var iDivWidth = $(nHidden).outerWidth();
		var iDivHeight = $(nHidden).outerHeight();

		if ( iDivX + iDivWidth > iDocWidth )
		{
			nHidden.style.left = (iDocWidth-iDivWidth)+"px";
		}

		if ( iDivY + iDivHeight > iDocHeight )
		{
			nHidden.style.top = (iDivY-iDivHeight-$(nButton).outerHeight())+"px";
		}

		this.dom.collection.collection = nHidden;
		this.dom.collection.background = nBackground;

		/* This results in a very small delay for the end user but it allows the animation to be
		 * much smoother. If you don't want the animation, then the setTimeout can be removed
		 */
		setTimeout( function () {
			$(nHidden).animate({"opacity": 1}, 500);
			$(nBackground).animate({"opacity": 0.25}, 500);
		}, 10 );

		/* Resize the buttons to the Flash contents fit */
		this.fnResizeButtons();

		/* Event handler to remove the collection display */
		$(nBackground).click( function () {
			that._fnCollectionHide.call( that, null, null );
		} );
	},


	/**
	 * Hide a button collection
	 *  @param   {Node} nButton Button to use for the collection
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns void
	 *  @private
	 */
	"_fnCollectionHide": function ( nButton, oConfig )
	{
		if ( oConfig !== null && oConfig.sExtends == 'collection' )
		{
			return;
		}

		if ( this.dom.collection.collection !== null )
		{
			$(this.dom.collection.collection).animate({"opacity": 0}, 500, function (e) {
				this.style.display = "none";
			} );

			$(this.dom.collection.background).animate({"opacity": 0}, 500, function (e) {
				this.parentNode.removeChild( this );
			} );

			this.dom.collection.collection = null;
			this.dom.collection.background = null;
		}
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Row selection functions
	 */

	/**
	 * Add event handlers to a table to allow for row selection
	 *  @method  _fnRowSelectConfig
	 *  @returns void
	 *  @private 
	 */
	"_fnRowSelectConfig": function ()
	{
		if ( this.s.master )
		{
			var
				that = this,
				i, iLen,
				dt = this.s.dt,
				aoOpenRows = this.s.dt.aoOpenRows;

			$(dt.nTable).addClass( this.classes.select.table );

			// When using OS style selection, we want to cancel the shift text
			// selection, but only when the shift key is used (so you can
			// actually still select text in the table)
			if ( this.s.select.type === 'os' ) {
				$(dt.nTBody).on( 'mousedown.DTTT_Select', 'tr', function(e) {
					if ( e.shiftKey ) {

						$(dt.nTBody)
							.css( '-moz-user-select', 'none' )
							.one('selectstart.DTTT_Select', 'tr', function () {
								return false;
							} );
					}
				} );

				$(dt.nTBody).on( 'mouseup.DTTT_Select', 'tr', function(e) {
					$(dt.nTBody).css( '-moz-user-select', '' );
				} );
			}

			// Row selection
			$(dt.nTBody).on( 'click.DTTT_Select', this.s.custom.sRowSelector, function(e) {
				var row = this.nodeName.toLowerCase() === 'tr' ?
					this :
					$(this).parents('tr')[0];

				var select = that.s.select;
				var pos = that.s.dt.oInstance.fnGetPosition( row );

				/* Sub-table must be ignored (odd that the selector won't do this with >) */
				if ( row.parentNode != dt.nTBody ) {
					return;
				}

				/* Check that we are actually working with a DataTables controlled row */
				if ( dt.oInstance.fnGetData(row) === null ) {
				    return;
				}

				// Shift click, ctrl click and simple click handling to make
				// row selection a lot like a file system in desktop OSs
				if ( select.type == 'os' ) {
					if ( e.ctrlKey || e.metaKey ) {
						// Add or remove from the selection
						if ( that.fnIsSelected( row ) ) {
							that._fnRowDeselect( row, e );
						}
						else {
							that._fnRowSelect( row, e );
						}
					}
					else if ( e.shiftKey ) {
						// Add a range of rows, from the last selected row to
						// this one
						var rowIdxs = that.s.dt.aiDisplay.slice(); // visible rows
						var idx1 = $.inArray( select.lastRow, rowIdxs );
						var idx2 = $.inArray( pos, rowIdxs );

						if ( that.fnGetSelected().length === 0 || idx1 === -1 ) {
							// select from top to here - slightly odd, but both
							// Windows and Mac OS do this
							rowIdxs.splice( $.inArray( pos, rowIdxs )+1, rowIdxs.length );
						}
						else {
							// reverse so we can shift click 'up' as well as down
							if ( idx1 > idx2 ) {
								var tmp = idx2;
								idx2 = idx1;
								idx1 = tmp;
							}

							rowIdxs.splice( idx2+1, rowIdxs.length );
							rowIdxs.splice( 0, idx1 );
						}

						if ( ! that.fnIsSelected( row ) ) {
							// Select range
							that._fnRowSelect( rowIdxs, e );
						}
						else {
							// Deselect range - need to keep the clicked on row selected
							rowIdxs.splice( $.inArray( pos, rowIdxs ), 1 );
							that._fnRowDeselect( rowIdxs, e );
						}
					}
					else {
						// No cmd or shift click. Deselect current if selected,
						// or select this row only
						if ( that.fnIsSelected( row ) && that.fnGetSelected().length === 1 ) {
							that._fnRowDeselect( row, e );
						}
						else {
							that.fnSelectNone();
							that._fnRowSelect( row, e );
						}
					}
				}
				else if ( that.fnIsSelected( row ) ) {
					that._fnRowDeselect( row, e );
				}
				else if ( select.type == "single" ) {
					that.fnSelectNone();
					that._fnRowSelect( row, e );
				}
				else if ( select.type == "multi" ) {
					that._fnRowSelect( row, e );
				}

				select.lastRow = pos;
			} );//.on('selectstart', function () { return false; } );

			// Bind a listener to the DataTable for when new rows are created.
			// This allows rows to be visually selected when they should be and
			// deferred rendering is used.
			dt.oApi._fnCallbackReg( dt, 'aoRowCreatedCallback', function (tr, data, index) {
				if ( dt.aoData[index]._DTTT_selected ) {
					$(tr).addClass( that.classes.select.row );
				}
			}, 'TableTools-SelectAll' );
		}
	},

	/**
	 * Select rows
	 *  @param   {*} src Rows to select - see _fnSelectData for a description of valid inputs
	 *  @private 
	 */
	"_fnRowSelect": function ( src, e )
	{
		var
			that = this,
			data = this._fnSelectData( src ),
			firstTr = data.length===0 ? null : data[0].nTr,
			anSelected = [],
			i, len;

		// Get all the rows that will be selected
		for ( i=0, len=data.length ; i<len ; i++ )
		{
			if ( data[i].nTr )
			{
				anSelected.push( data[i].nTr );
			}
		}

		// User defined pre-selection function
		if ( this.s.select.preRowSelect !== null && !this.s.select.preRowSelect.call(this, e, anSelected, true) )
		{
			return;
		}

		// Mark them as selected
		for ( i=0, len=data.length ; i<len ; i++ )
		{
			data[i]._DTTT_selected = true;

			if ( data[i].nTr )
			{
				$(data[i].nTr).addClass( that.classes.select.row );
			}
		}

		// Post-selection function
		if ( this.s.select.postSelected !== null )
		{
			this.s.select.postSelected.call( this, anSelected );
		}

		TableTools._fnEventDispatch( this, 'select', anSelected, true );
	},

	/**
	 * Deselect rows
	 *  @param   {*} src Rows to deselect - see _fnSelectData for a description of valid inputs
	 *  @private 
	 */
	"_fnRowDeselect": function ( src, e )
	{
		var
			that = this,
			data = this._fnSelectData( src ),
			firstTr = data.length===0 ? null : data[0].nTr,
			anDeselectedTrs = [],
			i, len;

		// Get all the rows that will be deselected
		for ( i=0, len=data.length ; i<len ; i++ )
		{
			if ( data[i].nTr )
			{
				anDeselectedTrs.push( data[i].nTr );
			}
		}

		// User defined pre-selection function
		if ( this.s.select.preRowSelect !== null && !this.s.select.preRowSelect.call(this, e, anDeselectedTrs, false) )
		{
			return;
		}

		// Mark them as deselected
		for ( i=0, len=data.length ; i<len ; i++ )
		{
			data[i]._DTTT_selected = false;

			if ( data[i].nTr )
			{
				$(data[i].nTr).removeClass( that.classes.select.row );
			}
		}

		// Post-deselection function
		if ( this.s.select.postDeselected !== null )
		{
			this.s.select.postDeselected.call( this, anDeselectedTrs );
		}

		TableTools._fnEventDispatch( this, 'select', anDeselectedTrs, false );
	},

	/**
	 * Take a data source for row selection and convert it into aoData points for the DT
	 *   @param {*} src Can be a single DOM TR node, an array of TR nodes (including a
	 *     a jQuery object), a single aoData point from DataTables, an array of aoData
	 *     points or an array of aoData indexes
	 *   @returns {array} An array of aoData points
	 */
	"_fnSelectData": function ( src )
	{
		var out = [], pos, i, iLen;

		if ( src.nodeName )
		{
			// Single node
			pos = this.s.dt.oInstance.fnGetPosition( src );
			out.push( this.s.dt.aoData[pos] );
		}
		else if ( typeof src.length !== 'undefined' )
		{
			// jQuery object or an array of nodes, or aoData points
			for ( i=0, iLen=src.length ; i<iLen ; i++ )
			{
				if ( src[i].nodeName )
				{
					pos = this.s.dt.oInstance.fnGetPosition( src[i] );
					out.push( this.s.dt.aoData[pos] );
				}
				else if ( typeof src[i] === 'number' )
				{
					out.push( this.s.dt.aoData[ src[i] ] );
				}
				else
				{
					out.push( src[i] );
				}
			}

			return out;
		}
		else
		{
			// A single aoData point
			out.push( src );
		}

		return out;
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Text button functions
	 */

	/**
	 * Configure a text based button for interaction events
	 *  @method  _fnTextConfig
	 *  @param   {Node} nButton Button element which is being considered
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns void
	 *  @private 
	 */
	"_fnTextConfig": function ( nButton, oConfig )
	{
		var that = this;

		if ( oConfig.fnInit !== null )
		{
			oConfig.fnInit.call( this, nButton, oConfig );
		}

		if ( oConfig.sToolTip !== "" )
		{
			nButton.title = oConfig.sToolTip;
		}

		$(nButton).hover( function () {
			if ( oConfig.fnMouseover !== null )
			{
				oConfig.fnMouseover.call( this, nButton, oConfig, null );
			}
		}, function () {
			if ( oConfig.fnMouseout !== null )
			{
				oConfig.fnMouseout.call( this, nButton, oConfig, null );
			}
		} );

		if ( oConfig.fnSelect !== null )
		{
			TableTools._fnEventListen( this, 'select', function (n) {
				oConfig.fnSelect.call( that, nButton, oConfig, n );
			} );
		}

		$(nButton).click( function (e) {
			//e.preventDefault();

			if ( oConfig.fnClick !== null )
			{
				oConfig.fnClick.call( that, nButton, oConfig, null, e );
			}

			/* Provide a complete function to match the behaviour of the flash elements */
			if ( oConfig.fnComplete !== null )
			{
				oConfig.fnComplete.call( that, nButton, oConfig, null, null );
			}

			that._fnCollectionHide( nButton, oConfig );
		} );
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Flash button functions
	 */
	
	/**
	 * Check if the Flash plug-in is available
	 *  @method  _fnHasFlash
	 *  @returns {boolean} `true` if Flash available, `false` otherwise
	 *  @private 
	 */
	"_fnHasFlash": function ()
	{
		try {
			var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if (fo) {
				return true;
			}
		}
		catch (e) {
			if (
				navigator.mimeTypes &&
				navigator.mimeTypes['application/x-shockwave-flash'] !== undefined &&
				navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin
			) {
				return true;
			}
		}

		return false;
	},


	/**
	 * Configure a flash based button for interaction events
	 *  @method  _fnFlashConfig
	 *  @param   {Node} nButton Button element which is being considered
	 *  @param   {o} oConfig Button configuration object
	 *  @returns void
	 *  @private 
	 */
	"_fnFlashConfig": function ( nButton, oConfig )
	{
		var that = this;
		var flash = new ZeroClipboard_TableTools.Client();

		if ( oConfig.fnInit !== null )
		{
			oConfig.fnInit.call( this, nButton, oConfig );
		}

		flash.setHandCursor( true );

		if ( oConfig.sAction == "flash_save" )
		{
			flash.setAction( 'save' );
			flash.setCharSet( (oConfig.sCharSet=="utf16le") ? 'UTF16LE' : 'UTF8' );
			flash.setBomInc( oConfig.bBomInc );
			flash.setFileName( oConfig.sFileName.replace('*', this.fnGetTitle(oConfig)) );
		}
		else if ( oConfig.sAction == "flash_pdf" )
		{
			flash.setAction( 'pdf' );
			flash.setFileName( oConfig.sFileName.replace('*', this.fnGetTitle(oConfig)) );
		}
		else
		{
			flash.setAction( 'copy' );
		}

		flash.addEventListener('mouseOver', function(client) {
			if ( oConfig.fnMouseover !== null )
			{
				oConfig.fnMouseover.call( that, nButton, oConfig, flash );
			}
		} );

		flash.addEventListener('mouseOut', function(client) {
			if ( oConfig.fnMouseout !== null )
			{
				oConfig.fnMouseout.call( that, nButton, oConfig, flash );
			}
		} );

		flash.addEventListener('mouseDown', function(client) {
			if ( oConfig.fnClick !== null )
			{
				oConfig.fnClick.call( that, nButton, oConfig, flash );
			}
		} );

		flash.addEventListener('complete', function (client, text) {
			if ( oConfig.fnComplete !== null )
			{
				oConfig.fnComplete.call( that, nButton, oConfig, flash, text );
			}
			that._fnCollectionHide( nButton, oConfig );
		} );

		this._fnFlashGlue( flash, nButton, oConfig.sToolTip );
	},


	/**
	 * Wait until the id is in the DOM before we "glue" the swf. Note that this function will call
	 * itself (using setTimeout) until it completes successfully
	 *  @method  _fnFlashGlue
	 *  @param   {Object} clip Zero clipboard object
	 *  @param   {Node} node node to glue swf to
	 *  @param   {String} text title of the flash movie
	 *  @returns void
	 *  @private 
	 */
	"_fnFlashGlue": function ( flash, node, text )
	{
		var that = this;
		var id = node.getAttribute('id');

		if ( document.getElementById(id) )
		{
			flash.glue( node, text );
		}
		else
		{
			setTimeout( function () {
				that._fnFlashGlue( flash, node, text );
			}, 100 );
		}
	},


	/**
	 * Set the text for the flash clip to deal with
	 * 
	 * This function is required for large information sets. There is a limit on the 
	 * amount of data that can be transferred between Javascript and Flash in a single call, so
	 * we use this method to build up the text in Flash by sending over chunks. It is estimated
	 * that the data limit is around 64k, although it is undocumented, and appears to be different
	 * between different flash versions. We chunk at 8KiB.
	 *  @method  _fnFlashSetText
	 *  @param   {Object} clip the ZeroClipboard object
	 *  @param   {String} sData the data to be set
	 *  @returns void
	 *  @private 
	 */
	"_fnFlashSetText": function ( clip, sData )
	{
		var asData = this._fnChunkData( sData, 8192 );

		clip.clearText();
		for ( var i=0, iLen=asData.length ; i<iLen ; i++ )
		{
			clip.appendText( asData[i] );
		}
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Data retrieval functions
	 */

	/**
	 * Convert the mixed columns variable into a boolean array the same size as the columns, which
	 * indicates which columns we want to include
	 *  @method  _fnColumnTargets
	 *  @param   {String|Array} mColumns The columns to be included in data retrieval. If a string
	 *			 then it can take the value of "visible" or "hidden" (to include all visible or
	 *			 hidden columns respectively). Or an array of column indexes
	 *  @returns {Array} A boolean array the length of the columns of the table, which each value
	 *			 indicating if the column is to be included or not
	 *  @private 
	 */
	"_fnColumnTargets": function ( mColumns )
	{
		var aColumns = [];
		var dt = this.s.dt;
		var i, iLen;
		var columns = dt.aoColumns;
		var columnCount = columns.length;

		if ( typeof mColumns == "function" )
		{
			var a = mColumns.call( this, dt );

			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( $.inArray( i, a ) !== -1 ? true : false );
			}
		}
		else if ( typeof mColumns == "object" )
		{
			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( false );
			}

			for ( i=0, iLen=mColumns.length ; i<iLen ; i++ )
			{
				aColumns[ mColumns[i] ] = true;
			}
		}
		else if ( mColumns == "visible" )
		{
			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( columns[i].bVisible ? true : false );
			}
		}
		else if ( mColumns == "hidden" )
		{
			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( columns[i].bVisible ? false : true );
			}
		}
		else if ( mColumns == "sortable" )
		{
			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( columns[i].bSortable ? true : false );
			}
		}
		else /* all */
		{
			for ( i=0, iLen=columnCount ; i<iLen ; i++ )
			{
				aColumns.push( true );
			}
		}

		return aColumns;
	},


	/**
	 * New line character(s) depend on the platforms
	 *  @method  method
	 *  @param   {Object} oConfig Button configuration object - only interested in oConfig.sNewLine
	 *  @returns {String} Newline character
	 */
	"_fnNewline": function ( oConfig )
	{
		if ( oConfig.sNewLine == "auto" )
		{
			return navigator.userAgent.match(/Windows/) ? "\r\n" : "\n";
		}
		else
		{
			return oConfig.sNewLine;
		}
	},


	/**
	 * Get data from DataTables' internals and format it for output
	 *  @method  _fnGetDataTablesData
	 *  @param   {Object} oConfig Button configuration object
	 *  @param   {String} oConfig.sFieldBoundary Field boundary for the data cells in the string
	 *  @param   {String} oConfig.sFieldSeperator Field separator for the data cells
	 *  @param   {String} oConfig.sNewline New line options
	 *  @param   {Mixed} oConfig.mColumns Which columns should be included in the output
	 *  @param   {Boolean} oConfig.bHeader Include the header
	 *  @param   {Boolean} oConfig.bFooter Include the footer
	 *  @param   {Boolean} oConfig.bSelectedOnly Include only the selected rows in the output
	 *  @returns {String} Concatenated string of data
	 *  @private 
	 */
	"_fnGetDataTablesData": function ( oConfig )
	{
		var i, iLen, j, jLen;
		var aRow, aData=[], sLoopData='', arr;
		var dt = this.s.dt, tr, child;
		var regex = new RegExp(oConfig.sFieldBoundary, "g"); /* Do it here for speed */
		var aColumnsInc = this._fnColumnTargets( oConfig.mColumns );
		var bSelectedOnly = (typeof oConfig.bSelectedOnly != 'undefined') ? oConfig.bSelectedOnly : false;

		/*
		 * Header
		 */
		if ( oConfig.bHeader )
		{
			aRow = [];

			for ( i=0, iLen=dt.aoColumns.length ; i<iLen ; i++ )
			{
				if ( aColumnsInc[i] )
				{
					sLoopData = dt.aoColumns[i].sTitle.replace(/\n/g," ").replace( /<.*?>/g, "" ).replace(/^\s+|\s+$/g,"");
					sLoopData = this._fnHtmlDecode( sLoopData );

					aRow.push( this._fnBoundData( sLoopData, oConfig.sFieldBoundary, regex ) );
				}
			}

			aData.push( aRow.join(oConfig.sFieldSeperator) );
		}

		bSelectedOnly = true;

		/*
		 * Body
		 */
		var aDataIndex;
		var aSelected = this.fnGetSelectedIndexes();
		bSelectedOnly = this.s.select.type !== "none" && bSelectedOnly && aSelected.length !== 0;

		if ( bSelectedOnly ) {
			// Use the selected indexes
			aDataIndex = aSelected;
		}
		else if ( DataTable.Api ) {
			// 1.10+ style
			aDataIndex = new DataTable.Api( dt )
				.rows( oConfig.oSelectorOpts )
				.indexes()
				.flatten()
				.toArray();
		}
		else {
			// 1.9- style
			aDataIndex = dt.oInstance
				.$('tr', oConfig.oSelectorOpts)
				.map( function (id, row) {
					return dt.oInstance.fnGetPosition( row );
				} )
				.get();
		}

		for ( j=0, jLen=aDataIndex.length ; j<jLen ; j++ )
		{
			tr = dt.aoData[ aDataIndex[j] ].nTr;
			aRow = [];

			/* Columns */
			for ( i=0, iLen=dt.aoColumns.length ; i<iLen ; i++ )
			{
				if ( aColumnsInc[i] )
				{
					/* Convert to strings (with small optimisation) */
					var mTypeData = dt.oApi._fnGetCellData( dt, aDataIndex[j], i, 'display' );
					if ( oConfig.fnCellRender )
					{
						sLoopData = oConfig.fnCellRender( mTypeData, i, tr, aDataIndex[j] )+"";
					}
					else if ( typeof mTypeData == "string" )
					{
						/* Strip newlines, replace img tags with alt attr. and finally strip html... */
						sLoopData = mTypeData.replace(/\n/g," ");
						sLoopData =
						    sLoopData.replace(/<img.*?\s+alt\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+)).*?>/gi,
						        '$1$2$3');
						sLoopData = sLoopData.replace( /<.*?>/g, "" );
					}
					else
					{
						sLoopData = mTypeData+"";
					}

					/* Trim and clean the data */
					sLoopData = sLoopData.replace(/^\s+/, '').replace(/\s+$/, '');
					sLoopData = this._fnHtmlDecode( sLoopData );

					/* Bound it and add it to the total data */
					aRow.push( this._fnBoundData( sLoopData, oConfig.sFieldBoundary, regex ) );
				}
			}

			aData.push( aRow.join(oConfig.sFieldSeperator) );

			/* Details rows from fnOpen */
			if ( oConfig.bOpenRows )
			{
				arr = $.grep(dt.aoOpenRows, function(o) { return o.nParent === tr; });

				if ( arr.length === 1 )
				{
					sLoopData = this._fnBoundData( $('td', arr[0].nTr).html(), oConfig.sFieldBoundary, regex );
					aData.push( sLoopData );
				}
			}
		}

		/*
		 * Footer
		 */
		if ( oConfig.bFooter && dt.nTFoot !== null )
		{
			aRow = [];

			for ( i=0, iLen=dt.aoColumns.length ; i<iLen ; i++ )
			{
				if ( aColumnsInc[i] && dt.aoColumns[i].nTf !== null )
				{
					sLoopData = dt.aoColumns[i].nTf.innerHTML.replace(/\n/g," ").replace( /<.*?>/g, "" );
					sLoopData = this._fnHtmlDecode( sLoopData );

					aRow.push( this._fnBoundData( sLoopData, oConfig.sFieldBoundary, regex ) );
				}
			}

			aData.push( aRow.join(oConfig.sFieldSeperator) );
		}

		var _sLastData = aData.join( this._fnNewline(oConfig) );
		return _sLastData;
	},


	/**
	 * Wrap data up with a boundary string
	 *  @method  _fnBoundData
	 *  @param   {String} sData data to bound
	 *  @param   {String} sBoundary bounding char(s)
	 *  @param   {RegExp} regex search for the bounding chars - constructed outside for efficiency
	 *			 in the loop
	 *  @returns {String} bound data
	 *  @private 
	 */
	"_fnBoundData": function ( sData, sBoundary, regex )
	{
		if ( sBoundary === "" )
		{
			return sData;
		}
		else
		{
			return sBoundary + sData.replace(regex, sBoundary+sBoundary) + sBoundary;
		}
	},


	/**
	 * Break a string up into an array of smaller strings
	 *  @method  _fnChunkData
	 *  @param   {String} sData data to be broken up
	 *  @param   {Int} iSize chunk size
	 *  @returns {Array} String array of broken up text
	 *  @private 
	 */
	"_fnChunkData": function ( sData, iSize )
	{
		var asReturn = [];
		var iStrlen = sData.length;

		for ( var i=0 ; i<iStrlen ; i+=iSize )
		{
			if ( i+iSize < iStrlen )
			{
				asReturn.push( sData.substring( i, i+iSize ) );
			}
			else
			{
				asReturn.push( sData.substring( i, iStrlen ) );
			}
		}

		return asReturn;
	},


	/**
	 * Decode HTML entities
	 *  @method  _fnHtmlDecode
	 *  @param   {String} sData encoded string
	 *  @returns {String} decoded string
	 *  @private 
	 */
	"_fnHtmlDecode": function ( sData )
	{
		if ( sData.indexOf('&') === -1 )
		{
			return sData;
		}

		var n = document.createElement('div');

		return sData.replace( /&([^\s]*?);/g, function( match, match2 ) {
			if ( match.substr(1, 1) === '#' )
			{
				return String.fromCharCode( Number(match2.substr(1)) );
			}
			else
			{
				n.innerHTML = match;
				return n.childNodes[0].nodeValue;
			}
		} );
	},



	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Printing functions
	 */

	/**
	 * Show print display
	 *  @method  _fnPrintStart
	 *  @param   {Event} e Event object
	 *  @param   {Object} oConfig Button configuration object
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintStart": function ( oConfig )
	{
	  var that = this;
	  var oSetDT = this.s.dt;

		/* Parse through the DOM hiding everything that isn't needed for the table */
		this._fnPrintHideNodes( oSetDT.nTable );

		/* Show the whole table */
		this.s.print.saveStart = oSetDT._iDisplayStart;
		this.s.print.saveLength = oSetDT._iDisplayLength;

		if ( oConfig.bShowAll )
		{
			oSetDT._iDisplayStart = 0;
			oSetDT._iDisplayLength = -1;
			if ( oSetDT.oApi._fnCalculateEnd ) {
				oSetDT.oApi._fnCalculateEnd( oSetDT );
			}
			oSetDT.oApi._fnDraw( oSetDT );
		}

		/* Adjust the display for scrolling which might be done by DataTables */
		if ( oSetDT.oScroll.sX !== "" || oSetDT.oScroll.sY !== "" )
		{
			this._fnPrintScrollStart( oSetDT );

			// If the table redraws while in print view, the DataTables scrolling
			// setup would hide the header, so we need to readd it on draw
			$(this.s.dt.nTable).bind('draw.DTTT_Print', function () {
				that._fnPrintScrollStart( oSetDT );
			} );
		}

		/* Remove the other DataTables feature nodes - but leave the table! and info div */
		var anFeature = oSetDT.aanFeatures;
		for ( var cFeature in anFeature )
		{
			if ( cFeature != 'i' && cFeature != 't' && cFeature.length == 1 )
			{
				for ( var i=0, iLen=anFeature[cFeature].length ; i<iLen ; i++ )
				{
					this.dom.print.hidden.push( {
						"node": anFeature[cFeature][i],
						"display": "block"
					} );
					anFeature[cFeature][i].style.display = "none";
				}
			}
		}

		/* Print class can be used for styling */
		$(document.body).addClass( this.classes.print.body );

		/* Show information message to let the user know what is happening */
		if ( oConfig.sInfo !== "" )
		{
			this.fnInfo( oConfig.sInfo, 3000 );
		}

		/* Add a message at the top of the page */
		if ( oConfig.sMessage )
		{
			$('<div/>')
				.addClass( this.classes.print.message )
				.html( oConfig.sMessage )
				.prependTo( 'body' );
		}

		/* Cache the scrolling and the jump to the top of the page */
		this.s.print.saveScroll = $(window).scrollTop();
		window.scrollTo( 0, 0 );

		/* Bind a key event listener to the document for the escape key -
		 * it is removed in the callback
		 */
		$(document).bind( "keydown.DTTT", function(e) {
			/* Only interested in the escape key */
			if ( e.keyCode == 27 )
			{
				e.preventDefault();
				that._fnPrintEnd.call( that, e );
			}
		} );
	},


	/**
	 * Printing is finished, resume normal display
	 *  @method  _fnPrintEnd
	 *  @param   {Event} e Event object
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintEnd": function ( e )
	{
		var that = this;
		var oSetDT = this.s.dt;
		var oSetPrint = this.s.print;
		var oDomPrint = this.dom.print;

		/* Show all hidden nodes */
		this._fnPrintShowNodes();

		/* Restore DataTables' scrolling */
		if ( oSetDT.oScroll.sX !== "" || oSetDT.oScroll.sY !== "" )
		{
			$(this.s.dt.nTable).unbind('draw.DTTT_Print');

			this._fnPrintScrollEnd();
		}

		/* Restore the scroll */
		window.scrollTo( 0, oSetPrint.saveScroll );

		/* Drop the print message */
		$('div.'+this.classes.print.message).remove();

		/* Styling class */
		$(document.body).removeClass( 'DTTT_Print' );

		/* Restore the table length */
		oSetDT._iDisplayStart = oSetPrint.saveStart;
		oSetDT._iDisplayLength = oSetPrint.saveLength;
		if ( oSetDT.oApi._fnCalculateEnd ) {
			oSetDT.oApi._fnCalculateEnd( oSetDT );
		}
		oSetDT.oApi._fnDraw( oSetDT );

		$(document).unbind( "keydown.DTTT" );
	},


	/**
	 * Take account of scrolling in DataTables by showing the full table
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintScrollStart": function ()
	{
		var
			oSetDT = this.s.dt,
			nScrollHeadInner = oSetDT.nScrollHead.getElementsByTagName('div')[0],
			nScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0],
			nScrollBody = oSetDT.nTable.parentNode,
			nTheadSize, nTfootSize;

		/* Copy the header in the thead in the body table, this way we show one single table when
		 * in print view. Note that this section of code is more or less verbatim from DT 1.7.0
		 */
		nTheadSize = oSetDT.nTable.getElementsByTagName('thead');
		if ( nTheadSize.length > 0 )
		{
			oSetDT.nTable.removeChild( nTheadSize[0] );
		}

		if ( oSetDT.nTFoot !== null )
		{
			nTfootSize = oSetDT.nTable.getElementsByTagName('tfoot');
			if ( nTfootSize.length > 0 )
			{
				oSetDT.nTable.removeChild( nTfootSize[0] );
			}
		}

		nTheadSize = oSetDT.nTHead.cloneNode(true);
		oSetDT.nTable.insertBefore( nTheadSize, oSetDT.nTable.childNodes[0] );

		if ( oSetDT.nTFoot !== null )
		{
			nTfootSize = oSetDT.nTFoot.cloneNode(true);
			oSetDT.nTable.insertBefore( nTfootSize, oSetDT.nTable.childNodes[1] );
		}

		/* Now adjust the table's viewport so we can actually see it */
		if ( oSetDT.oScroll.sX !== "" )
		{
			oSetDT.nTable.style.width = $(oSetDT.nTable).outerWidth()+"px";
			nScrollBody.style.width = $(oSetDT.nTable).outerWidth()+"px";
			nScrollBody.style.overflow = "visible";
		}

		if ( oSetDT.oScroll.sY !== "" )
		{
			nScrollBody.style.height = $(oSetDT.nTable).outerHeight()+"px";
			nScrollBody.style.overflow = "visible";
		}
	},


	/**
	 * Take account of scrolling in DataTables by showing the full table. Note that the redraw of
	 * the DataTable that we do will actually deal with the majority of the hard work here
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintScrollEnd": function ()
	{
		var
			oSetDT = this.s.dt,
			nScrollBody = oSetDT.nTable.parentNode;

		if ( oSetDT.oScroll.sX !== "" )
		{
			nScrollBody.style.width = oSetDT.oApi._fnStringToCss( oSetDT.oScroll.sX );
			nScrollBody.style.overflow = "auto";
		}

		if ( oSetDT.oScroll.sY !== "" )
		{
			nScrollBody.style.height = oSetDT.oApi._fnStringToCss( oSetDT.oScroll.sY );
			nScrollBody.style.overflow = "auto";
		}
	},


	/**
	 * Resume the display of all TableTools hidden nodes
	 *  @method  _fnPrintShowNodes
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintShowNodes": function ( )
	{
	  var anHidden = this.dom.print.hidden;

		for ( var i=0, iLen=anHidden.length ; i<iLen ; i++ )
		{
			anHidden[i].node.style.display = anHidden[i].display;
		}
		anHidden.splice( 0, anHidden.length );
	},


	/**
	 * Hide nodes which are not needed in order to display the table. Note that this function is
	 * recursive
	 *  @method  _fnPrintHideNodes
	 *  @param   {Node} nNode Element which should be showing in a 'print' display
	 *  @returns void
	 *  @private 
	 */
	"_fnPrintHideNodes": function ( nNode )
	{
		var anHidden = this.dom.print.hidden;

		var nParent = nNode.parentNode;
		var nChildren = nParent.childNodes;
		for ( var i=0, iLen=nChildren.length ; i<iLen ; i++ )
		{
			if ( nChildren[i] != nNode && nChildren[i].nodeType == 1 )
			{
				/* If our node is shown (don't want to show nodes which were previously hidden) */
				var sDisplay = $(nChildren[i]).css("display");
				if ( sDisplay != "none" )
				{
					/* Cache the node and it's previous state so we can restore it */
					anHidden.push( {
						"node": nChildren[i],
						"display": sDisplay
					} );
					nChildren[i].style.display = "none";
				}
			}
		}

		if ( nParent.nodeName.toUpperCase() != "BODY" )
		{
			this._fnPrintHideNodes( nParent );
		}
	}
};



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static variables
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Store of all instances that have been created of TableTools, so one can look up other (when
 * there is need of a master)
 *  @property _aInstances
 *  @type	 Array
 *  @default  []
 *  @private
 */
TableTools._aInstances = [];


/**
 * Store of all listeners and their callback functions
 *  @property _aListeners
 *  @type	 Array
 *  @default  []
 */
TableTools._aListeners = [];



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static methods
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Get an array of all the master instances
 *  @method  fnGetMasters
 *  @returns {Array} List of master TableTools instances
 *  @static
 */
TableTools.fnGetMasters = function ()
{
	var a = [];
	for ( var i=0, iLen=TableTools._aInstances.length ; i<iLen ; i++ )
	{
		if ( TableTools._aInstances[i].s.master )
		{
			a.push( TableTools._aInstances[i] );
		}
	}
	return a;
};

/**
 * Get the master instance for a table node (or id if a string is given)
 *  @method  fnGetInstance
 *  @returns {Object} ID of table OR table node, for which we want the TableTools instance
 *  @static
 */
TableTools.fnGetInstance = function ( node )
{
	if ( typeof node != 'object' )
	{
		node = document.getElementById(node);
	}

	for ( var i=0, iLen=TableTools._aInstances.length ; i<iLen ; i++ )
	{
		if ( TableTools._aInstances[i].s.master && TableTools._aInstances[i].dom.table == node )
		{
			return TableTools._aInstances[i];
		}
	}
	return null;
};


/**
 * Add a listener for a specific event
 *  @method  _fnEventListen
 *  @param   {Object} that Scope of the listening function (i.e. 'this' in the caller)
 *  @param   {String} type Event type
 *  @param   {Function} fn Function
 *  @returns void
 *  @private
 *  @static
 */
TableTools._fnEventListen = function ( that, type, fn )
{
	TableTools._aListeners.push( {
		"that": that,
		"type": type,
		"fn": fn
	} );
};


/**
 * An event has occurred - look up every listener and fire it off. We check that the event we are
 * going to fire is attached to the same table (using the table node as reference) before firing
 *  @method  _fnEventDispatch
 *  @param   {Object} that Scope of the listening function (i.e. 'this' in the caller)
 *  @param   {String} type Event type
 *  @param   {Node} node Element that the event occurred on (may be null)
 *  @param   {boolean} [selected] Indicate if the node was selected (true) or deselected (false)
 *  @returns void
 *  @private
 *  @static
 */
TableTools._fnEventDispatch = function ( that, type, node, selected )
{
	var listeners = TableTools._aListeners;
	for ( var i=0, iLen=listeners.length ; i<iLen ; i++ )
	{
		if ( that.dom.table == listeners[i].that.dom.table && listeners[i].type == type )
		{
			listeners[i].fn( node, selected );
		}
	}
};






/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constants
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



TableTools.buttonBase = {
	// Button base
	"sAction": "text",
	"sTag": "default",
	"sLinerTag": "default",
	"sButtonClass": "DTTT_button_text",
	"sButtonText": "Button text",
	"sTitle": "",
	"sToolTip": "",

	// Common button specific options
	"sCharSet": "utf8",
	"bBomInc": false,
	"sFileName": "*.csv",
	"sFieldBoundary": "",
	"sFieldSeperator": "\t",
	"sNewLine": "auto",
	"mColumns": "all", /* "all", "visible", "hidden" or array of column integers */
	"bHeader": true,
	"bFooter": true,
	"bOpenRows": false,
	"bSelectedOnly": false,
	"oSelectorOpts": undefined, // See http://datatables.net/docs/DataTables/1.9.4/#$ for full options

	// Callbacks
	"fnMouseover": null,
	"fnMouseout": null,
	"fnClick": null,
	"fnSelect": null,
	"fnComplete": null,
	"fnInit": null,
	"fnCellRender": null
};


/**
 * @namespace Default button configurations
 */
TableTools.BUTTONS = {
	"csv": $.extend( {}, TableTools.buttonBase, {
		"sAction": "flash_save",
		"sButtonClass": "DTTT_button_csv",
		"sButtonText": "CSV",
		"sFieldBoundary": '"',
		"sFieldSeperator": ",",
		"fnClick": function( nButton, oConfig, flash ) {
			this.fnSetText( flash, this.fnGetTableData(oConfig) );
		}
	} ),

	"xls": $.extend( {}, TableTools.buttonBase, {
		"sAction": "flash_save",
		"sCharSet": "utf16le",
		"bBomInc": true,
		"sButtonClass": "DTTT_button_xls",
		"sButtonText": "Excel",
		"fnClick": function( nButton, oConfig, flash ) {
			this.fnSetText( flash, this.fnGetTableData(oConfig) );
		}
	} ),

	"copy": $.extend( {}, TableTools.buttonBase, {
		"sAction": "flash_copy",
		"sButtonClass": "DTTT_button_copy",
		"sButtonText": "Copy",
		"fnClick": function( nButton, oConfig, flash ) {
			this.fnSetText( flash, this.fnGetTableData(oConfig) );
		},
		"fnComplete": function(nButton, oConfig, flash, text) {
			var lines = text.split('\n').length;
            if (oConfig.bHeader) lines--;
            if (this.s.dt.nTFoot !== null && oConfig.bFooter) lines--;
			var plural = (lines==1) ? "" : "s";
			this.fnInfo( '<h6>Table copied</h6>'+
				'<p>Copied '+lines+' row'+plural+' to the clipboard.</p>',
				1500
			);
		}
	} ),

	"pdf": $.extend( {}, TableTools.buttonBase, {
		"sAction": "flash_pdf",
		"sNewLine": "\n",
		"sFileName": "*.pdf",
		"sButtonClass": "DTTT_button_pdf",
		"sButtonText": "PDF",
		"sPdfOrientation": "portrait",
		"sPdfSize": "A4",
		"sPdfMessage": "",
		"fnClick": function( nButton, oConfig, flash ) {
			this.fnSetText( flash,
				"title:"+ this.fnGetTitle(oConfig) +"\n"+
				"message:"+ oConfig.sPdfMessage +"\n"+
				"colWidth:"+ this.fnCalcColRatios(oConfig) +"\n"+
				"orientation:"+ oConfig.sPdfOrientation +"\n"+
				"size:"+ oConfig.sPdfSize +"\n"+
				"--/TableToolsOpts--\n" +
				this.fnGetTableData(oConfig)
			);
		}
	} ),

	"print": $.extend( {}, TableTools.buttonBase, {
		"sInfo": "<h6>Print view</h6><p>Please use your browser's print function to "+
		  "print this table. Press escape when finished.</p>",
		"sMessage": null,
		"bShowAll": true,
		"sToolTip": "View print view",
		"sButtonClass": "DTTT_button_print",
		"sButtonText": "Print",
		"fnClick": function ( nButton, oConfig ) {
			this.fnPrint( true, oConfig );
		}
	} ),

	"text": $.extend( {}, TableTools.buttonBase ),

	"select": $.extend( {}, TableTools.buttonBase, {
		"sButtonText": "Select button",
		"fnSelect": function( nButton, oConfig ) {
			if ( this.fnGetSelected().length !== 0 ) {
				$(nButton).removeClass( this.classes.buttons.disabled );
			} else {
				$(nButton).addClass( this.classes.buttons.disabled );
			}
		},
		"fnInit": function( nButton, oConfig ) {
			$(nButton).addClass( this.classes.buttons.disabled );
		}
	} ),

	"select_single": $.extend( {}, TableTools.buttonBase, {
		"sButtonText": "Select button",
		"fnSelect": function( nButton, oConfig ) {
			var iSelected = this.fnGetSelected().length;
			if ( iSelected == 1 ) {
				$(nButton).removeClass( this.classes.buttons.disabled );
			} else {
				$(nButton).addClass( this.classes.buttons.disabled );
			}
		},
		"fnInit": function( nButton, oConfig ) {
			$(nButton).addClass( this.classes.buttons.disabled );
		}
	} ),

	"select_all": $.extend( {}, TableTools.buttonBase, {
		"sButtonText": "Select all",
		"fnClick": function( nButton, oConfig ) {
			this.fnSelectAll();
		},
		"fnSelect": function( nButton, oConfig ) {
			if ( this.fnGetSelected().length == this.s.dt.fnRecordsDisplay() ) {
				$(nButton).addClass( this.classes.buttons.disabled );
			} else {
				$(nButton).removeClass( this.classes.buttons.disabled );
			}
		}
	} ),

	"select_none": $.extend( {}, TableTools.buttonBase, {
		"sButtonText": "Deselect all",
		"fnClick": function( nButton, oConfig ) {
			this.fnSelectNone();
		},
		"fnSelect": function( nButton, oConfig ) {
			if ( this.fnGetSelected().length !== 0 ) {
				$(nButton).removeClass( this.classes.buttons.disabled );
			} else {
				$(nButton).addClass( this.classes.buttons.disabled );
			}
		},
		"fnInit": function( nButton, oConfig ) {
			$(nButton).addClass( this.classes.buttons.disabled );
		}
	} ),

	"ajax": $.extend( {}, TableTools.buttonBase, {
		"sAjaxUrl": "/xhr.php",
		"sButtonText": "Ajax button",
		"fnClick": function( nButton, oConfig ) {
			var sData = this.fnGetTableData(oConfig);
			$.ajax( {
				"url": oConfig.sAjaxUrl,
				"data": [
					{ "name": "tableData", "value": sData }
				],
				"success": oConfig.fnAjaxComplete,
				"dataType": "json",
				"type": "POST",
				"cache": false,
				"error": function () {
					alert( "Error detected when sending table data to server" );
				}
			} );
		},
		"fnAjaxComplete": function( json ) {
			alert( 'Ajax complete' );
		}
	} ),

	"div": $.extend( {}, TableTools.buttonBase, {
		"sAction": "div",
		"sTag": "div",
		"sButtonClass": "DTTT_nonbutton",
		"sButtonText": "Text button"
	} ),

	"collection": $.extend( {}, TableTools.buttonBase, {
		"sAction": "collection",
		"sButtonClass": "DTTT_button_collection",
		"sButtonText": "Collection",
		"fnClick": function( nButton, oConfig ) {
			this._fnCollectionShow(nButton, oConfig);
		}
	} )
};
/*
 *  on* callback parameters:
 *     1. node - button element
 *     2. object - configuration object for this button
 *     3. object - ZeroClipboard reference (flash button only)
 *     4. string - Returned string from Flash (flash button only - and only on 'complete')
 */

// Alias to match the other plug-ins styling
TableTools.buttons = TableTools.BUTTONS;


/**
 * @namespace Classes used by TableTools - allows the styles to be override easily.
 *   Note that when TableTools initialises it will take a copy of the classes object
 *   and will use its internal copy for the remainder of its run time.
 */
TableTools.classes = {
	"container": "DTTT_container",
	"buttons": {
		"normal": "DTTT_button",
		"disabled": "DTTT_disabled"
	},
	"collection": {
		"container": "DTTT_collection",
		"background": "DTTT_collection_background",
		"buttons": {
			"normal": "DTTT_button",
			"disabled": "DTTT_disabled"
		}
	},
	"select": {
		"table": "DTTT_selectable",
		"row": "DTTT_selected selected"
	},
	"print": {
		"body": "DTTT_Print",
		"info": "DTTT_print_info",
		"message": "DTTT_PrintMessage"
	}
};


/**
 * @namespace ThemeRoller classes - built in for compatibility with DataTables' 
 *   bJQueryUI option.
 */
TableTools.classes_themeroller = {
	"container": "DTTT_container ui-buttonset ui-buttonset-multi",
	"buttons": {
		"normal": "DTTT_button ui-button ui-state-default"
	},
	"collection": {
		"container": "DTTT_collection ui-buttonset ui-buttonset-multi"
	}
};


/**
 * @namespace TableTools default settings for initialisation
 */
TableTools.DEFAULTS = {
	"sSwfPath":        "../swf/copy_csv_xls_pdf.swf",
	"sRowSelect":      "none",
	"sRowSelector":    "tr",
	"sSelectedClass":  null,
	"fnPreRowSelect":  null,
	"fnRowSelected":   null,
	"fnRowDeselected": null,
	"aButtons":        [ "copy", "csv", "xls", "pdf", "print" ],
	"oTags": {
		"container": "div",
		"button": "a", // We really want to use buttons here, but Firefox and IE ignore the
		                 // click on the Flash element in the button (but not mouse[in|out]).
		"liner": "span",
		"collection": {
			"container": "div",
			"button": "a",
			"liner": "span"
		}
	}
};

// Alias to match the other plug-ins
TableTools.defaults = TableTools.DEFAULTS;


/**
 * Name of this class
 *  @constant CLASS
 *  @type	 String
 *  @default  TableTools
 */
TableTools.prototype.CLASS = "TableTools";


/**
 * TableTools version
 *  @constant  VERSION
 *  @type	  String
 *  @default   See code
 */
TableTools.version = "2.2.3";



// DataTables 1.10 API
// 
// This will be extended in a big way in in TableTools 3 to provide API methods
// such as rows().select() and rows.selected() etc, but for the moment the
// tabletools() method simply returns the instance.

if ( $.fn.dataTable.Api ) {
	$.fn.dataTable.Api.register( 'tabletools()', function () {
		var tt = null;

		if ( this.context.length > 0 ) {
			tt = TableTools.fnGetInstance( this.context[0].nTable );
		}

		return tt;
	} );
}




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Initialisation
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * Register a new feature with DataTables
 */
if ( typeof $.fn.dataTable == "function" &&
	 typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
	 $.fn.dataTableExt.fnVersionCheck('1.9.0') )
{
	$.fn.dataTableExt.aoFeatures.push( {
		"fnInit": function( oDTSettings ) {
			var init = oDTSettings.oInit;
			var opts = init ?
				init.tableTools || init.oTableTools || {} :
				{};

			return new TableTools( oDTSettings.oInstance, opts ).dom.container;
		},
		"cFeature": "T",
		"sFeature": "TableTools"
	} );
}
else
{
	alert( "Warning: TableTools requires DataTables 1.9.0 or newer - www.datatables.net/download");
}

$.fn.DataTable.TableTools = TableTools;

})(jQuery, window, document);

/*
 * Register a new feature with DataTables
 */
if ( typeof $.fn.dataTable == "function" &&
	 typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
	 $.fn.dataTableExt.fnVersionCheck('1.9.0') )
{
	$.fn.dataTableExt.aoFeatures.push( {
		"fnInit": function( oDTSettings ) {
			var oOpts = typeof oDTSettings.oInit.oTableTools != 'undefined' ?
				oDTSettings.oInit.oTableTools : {};

			var oTT = new TableTools( oDTSettings.oInstance, oOpts );
			TableTools._aInstances.push( oTT );

			return oTT.dom.container;
		},
		"cFeature": "T",
		"sFeature": "TableTools"
	} );
}
else
{
	alert( "Warning: TableTools 2 requires DataTables 1.9.0 or newer - www.datatables.net/download");
}


$.fn.dataTable.TableTools = TableTools;
$.fn.DataTable.TableTools = TableTools;


return TableTools;
}; // /factory


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery && !jQuery.fn.dataTable.TableTools ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


})(window, document);


var slice = Array.prototype.slice;
var queues = [];

var WorkQueue = function() {
  this.running = null;
  this.pending = [];
};

WorkQueue.get = function(name) {
  var queue = queues[name];
  if (!queue) queue = queues[name] = new WorkQueue();
  return queue;
};

WorkQueue.prototype.add = function(_this, func, args, noCallback) {
  var that = this;

  if (noCallback) {
    args.push(function(err) { that.next(err) });
  } else {
    callback = args.pop();
    args.push(function() {
      callback.apply(this, arguments);
      that.next(arguments[0]);
    });
  }

  var task = function(err) {
    if (err instanceof Error) args[args.length - 1].call(global, err);
    else func.apply(_this, args);
  };

  if (!this.running) (this.running = task)();
  else this.pending.push(task);
};

WorkQueue.prototype.next = function(err) {
  var run = this.running = this.pending.shift();
  if (run) run(err);
};

var serialize = function(func, name) {
  if (!name) name = 'default';

  var queue = WorkQueue.get(name)
    , length = func.length;

  var serialized = function() {
    queue.add(this, func, slice.call(arguments), arguments.length < length);
  };

  serialized.free = function() { return func; };
  return serialized;
}

var responsiveTable;

responsiveTable = function(selector, data, params) {
  var buttons, colVis, columns, dataSet, defaultButtons, keys, oTable, selectFlag, sendData, tFootStr, table;
  oTable = $(selector);
  sendData = function(data, url) {
    console.log('Отправляю');
    return $.post(url, data, function(res) {
      return console.log(res);
    }, 'json');
  };
  if (!data || !selector) {
    return null;
  }
  if (params && typeof params === 'string') {
    params = unserialize(params);
    params.headers = $.map(params.headers, function(value, index) {
      return [value];
    });
    params.buttons = $.map(params.buttons, function(value, index) {
      return [value];
    });
    console.log(params, 'params');
  }
  if (data && typeof data === 'string') {
    data = unserialize(data);
    data = $.map(data, function(value, index) {
      return [value];
    });
  }
  if (!params) {
    params = {};
  }
  if (!(params != null ? params.headers : void 0)) {
    keys = Object.keys(data[0] || {}).map(function(key) {
      return key;
    });
    params.headers = [];
    keys.forEach(function(key) {
      var param;
      param = {
        key: key,
        title: key,
        visible: true
      };
      return params.headers.push(param);
    });
  }
  params.headers.forEach(function(header) {
    if ((header != null ? header.map : void 0) && typeof (header != null ? header.map : void 0) === 'string') {
      console.log(header.map, 'надо');
      return header.map = unserialize(header.map).map;
    }
  });
  columns = [];
  params.headers.forEach(function(header) {
    var column;
    console.log(header, 'header');
    column = {
      title: header.title
    };
    if (typeof (header != null ? header.visible : void 0) !== 'undefined') {
      column.visible = header.visible;
    } else {
      column.visible = true;
    }
    if (header != null ? header.key : void 0) {
      column.data = header.key;
    }
    if (header != null ? header.map : void 0) {
      column.render = function(data, type, row, meta) {
        return header.map(row);
      };
    }
    return columns.push(column);
  });
  console.log(params, columns);
  selectFlag = true;
  defaultButtons = [
    "copy", {
      sExtends: 'select_all',
      sButtonText: 'Select All',
      mColumns: 'visible',
      fnClick: function() {
        if (selectFlag) {
          oTable.find('tbody tr').addClass('DTTT_selected selected');
        } else {
          oTable.find('tbody tr').removeClass('DTTT_selected selected');
        }
        return selectFlag = !selectFlag;
      }
    }
  ];
  buttons = defaultButtons;
  if (params != null ? params.buttons : void 0) {
    params.buttons.forEach(function(button, index) {
      var newButton;
      newButton = {
        sExtends: 'text',
        sButtonText: button.title || 'Кнопка ' + index,
        sButtonClass: 'user-button'
      };
      if (button != null ? button.cb : void 0) {
        if (typeof button.cb === 'string') {
          button.cb = unserialize(button.cb).cb;
        }
        newButton.fnClick = function() {
          data = table.rows('.selected').data();
          return button.cb(data);
        };
      }
      return buttons.push(newButton);
    });
  }
  dataSet = data;
  tFootStr = "<tfoot>";
  params.headers.forEach(function(header) {
    return tFootStr += "<th>" + header.title + "</th>";
  });
  tFootStr += "</tfoot>";
  $(tFootStr).appendTo(oTable);
  $(oTable).find('tfoot th').each(function() {
    var title;
    title = $(oTable).find('thead th').eq($(this).index()).text();
    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
  });
  console.log(buttons);
  table = $(selector).DataTable({
    'data': dataSet,
    "aoColumns": columns,
    "dom": 'TC<"clear">lfrtip',
    tableTools: {
      sRowSelect: 'multi',
      aButtons: buttons,
      sSwfPath: "../bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf"
    }
  }, colVis = {
    buttonText: 'Показать/скрыть'
  }, {
    "language": {
      "url": "//cdn.datatables.net/plug-ins/f2c75b7247b/i18n/Russian.json"
    }
  });
  return table.columns().eq(0).each(function(colIdx) {
    $('input', table.column(colIdx).footer()).on('keyup change', function() {
      table.column(colIdx).search(this.value).draw();
    });
  });
};
// ---
// generated by coffee-script 1.9.0
