/*! For license information please see components-src-MarkdownBrowser-MarkdownBrowser-stories.30d18f05.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkessex_toolkit_stories=self.webpackChunkessex_toolkit_stories||[]).push([[256],{"../../.yarn/__virtual__/markdown-to-jsx-virtual-7d73ea5141/0/cache/markdown-to-jsx-npm-7.1.8-51a9bc0852-4823f90e8b.zip/node_modules/markdown-to-jsx/dist/index.modern.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const n=["children","options"],r=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((t,e)=>(t[e.toLowerCase()]=e,t)),{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,i=/\n{2,}$/,l=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,s=/^ *> ?/gm,_=/^ {2,}\n/,f=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,g=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,m=/^(?:\n *)*\n/,y=/\r\n?/g,h=/^\[\^([^\]]+)](:.*)\n/,k=/^\[\^([^\]]+)]/,x=/\f/g,b=/^\s*?\[(x|\s)\]/,v=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,w=/&([a-z]+);/g,z=/^<!--[\s\S]*?(?:-->)/,E=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,M=/^<([^ >]+@[^ >]+)>/,O=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,L=/(?:^|\n)( *)$/,T=/-([a-z])?/gi,j=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,C=/^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,N=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,P=/\t/g,G=/^ *\| */,H=/(^ *\||\| *$)/g,q=/ *$/,U=/^ *:-+: *$/,V=/^ *:-+ *$/,W=/^ *-+: *$/,Q=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,X=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,J=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,K=/^\\([^0-9A-Za-z\s])/,Y=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,tt=/^\n+/,et=/^([ \t]*)/,nt=/\\([^0-9A-Z\s])/gi,rt=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ot=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ct=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),at="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ut=new RegExp("^\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),it=new RegExp("^!\\[("+at+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),lt=[l,p,d,v,S,z,ot,ct,j],st=[...lt,/^[^\n]+(?:  \n|\n{2,})/,$,A];function _t(t){return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ft(t){return W.test(t)?"right":U.test(t)?"center":V.test(t)?"left":null}function dt(t,e,n){const r=n.t;n.t=!0;const o=e(t.trim(),n);n.t=r;let c=[[]];return o.forEach((function(t,e){"tableSeparator"===t.type?0!==e&&e!==o.length-1&&c.push([]):("text"!==t.type||null!=o[e+1]&&"tableSeparator"!==o[e+1].type||(t.content=t.content.replace(q,"")),c[c.length-1].push(t))})),c}function pt(t,e,n){n.o=!0;const r=dt(t[1],e,n),o=t[2].replace(H,"").split("|").map(ft),c=function(t,e,n){return t.trim().split("\n").map((function(t){return dt(t,e,n)}))}(t[3],e,n);return n.o=!1,{align:o,cells:c,header:r,type:"table"}}function gt(t,e){return null==t.align[e]?{}:{textAlign:t.align[e]}}function mt(t){return function(e,n){return n.o?t.exec(e):null}}function yt(t){return function(e,n){return n.o||n.u?t.exec(e):null}}function ht(t){return function(e,n){return n.o||n.u?null:t.exec(e)}}function kt(t){return function(e){return t.exec(e)}}function xt(t,e,n){if(e.o||e.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";t.split("\n").every((t=>!lt.some((e=>e.test(t)))&&(r+=t+"\n",t.trim())));const o=r.trimEnd();return""==o?null:[r,o]}function bt(t){try{if(decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return t}function vt(t){return t.replace(nt,"$1")}function St(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!0,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function $t(t,e,n){const r=n.o||!1,o=n.u||!1;n.o=!1,n.u=!0;const c=t(e,n);return n.o=r,n.u=o,c}function wt(t,e,n){return n.o=!1,t(e+"\n\n",n)}const zt=(t,e,n)=>({content:St(e,t[1],n)});function Et(){return{}}function At(){return null}function Rt(...t){return t.filter(Boolean).join(" ")}function It(t,e,n){let r=t;const o=e.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||n}var Mt,t;function Ot(n,H={}){H.overrides=H.overrides||{},H.slugify=H.slugify||_t,H.namedCodesToUnicode=H.namedCodesToUnicode?e({},o,H.namedCodesToUnicode):o;const q=H.createElement||react__WEBPACK_IMPORTED_MODULE_0__.createElement;function U(t,n,...r){const o=It(H.overrides,`${t}.props`,{});return q(function(t,e){const n=It(e,t);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:It(e,`${t}.component`,t):t}(t,H.overrides),e({},n,o,{className:Rt(null==n?void 0:n.className,o.className)||void 0}),...r)}function V(e){let n=!1;H.forceInline?n=!0:H.forceBlock||(n=!1===F.test(e));const r=dt(ft(n?e:`${e.trimEnd().replace(tt,"")}\n\n`,{o:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===H.wrapper)return r;const o=H.wrapper||(n?"span":"div");let c;if(r.length>1||H.forceWrapper)c=r;else{if(1===r.length)return c=r[0],"string"==typeof c?U("span",{key:"outer"},c):c;c=null}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,{key:"outer"},c)}function W(e){const n=e.match(a);return n?n.reduce((function(e,n,o){const c=n.indexOf("=");if(-1!==c){const a=(t=n.slice(0,c),-1!==t.indexOf("-")&&null===t.match(E)&&(t=t.replace(T,(function(t,e){return e.toUpperCase()}))),t).trim(),u=function(t){const e=t[0];return('"'===e||"'"===e)&&t.length>=2&&t[t.length-1]===e?t.slice(1,-1):t}(n.slice(c+1).trim()),i=r[a]||a,l=e[i]=function(t,e){return"style"===t?e.split(/;\s?/).reduce((function(t,e){const n=e.slice(0,e.indexOf(":"));return t[n.replace(/(-[a-z])/g,(t=>t[1].toUpperCase()))]=e.slice(n.length+1).trim(),t}),{}):"href"===t?bt(e):(e.match(R)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(a,u);"string"==typeof l&&($.test(l)||A.test(l))&&(e[i]=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(V(l.trim()),{key:o}))}else"style"!==n&&(e[r[n]||n]=!0);var t;return e}),{}):void 0}const nt=[],at={},lt={blockQuote:{i:ht(l),l:Mt.HIGH,_:(t,e,n)=>({content:e(t[0].replace(s,""),n)}),p:(t,e,n)=>U("blockquote",{key:n.g},e(t.content,n))},breakLine:{i:kt(_),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("br",{key:n.g})},breakThematic:{i:ht(f),l:Mt.HIGH,_:Et,p:(t,e,n)=>U("hr",{key:n.g})},codeBlock:{i:ht(p),l:Mt.MAX,_:t=>({content:t[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(t,e,n)=>U("pre",{key:n.g},U("code",{className:t.lang?`lang-${t.lang}`:""},t.content))},codeFenced:{i:ht(d),l:Mt.MAX,_:t=>({content:t[3],lang:t[2]||void 0,type:"codeBlock"})},codeInline:{i:yt(g),l:Mt.LOW,_:t=>({content:t[2]}),p:(t,e,n)=>U("code",{key:n.g},t.content)},footnote:{i:ht(h),l:Mt.MAX,_:t=>(nt.push({footnote:t[2],identifier:t[1]}),{}),p:At},footnoteReference:{i:mt(k),l:Mt.HIGH,_:t=>({content:t[1],target:`#${H.slugify(t[1])}`}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target)},U("sup",{key:n.g},t.content))},gfmTask:{i:mt(b),l:Mt.HIGH,_:t=>({completed:"x"===t[1].toLowerCase()}),p:(t,e,n)=>U("input",{checked:t.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ht(v),l:Mt.HIGH,_:(t,e,n)=>({content:St(e,t[2],n),id:H.slugify(t[2]),level:t[1].length}),p:(t,e,n)=>(t.tag=`h${t.level}`,U(t.tag,{id:t.id,key:n.g},e(t.content,n)))},headingSetext:{i:ht(S),l:Mt.MAX,_:(t,e,n)=>({content:St(e,t[1],n),level:"="===t[2]?1:2,type:"heading"})},htmlComment:{i:kt(z),l:Mt.HIGH,_:()=>({}),p:At},image:{i:yt(it),l:Mt.HIGH,_:t=>({alt:t[1],target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt||void 0,title:t.title||void 0,src:bt(t.target)})},link:{i:mt(ut),l:Mt.LOW,_:(t,e,n)=>({content:$t(e,t[1],n),target:vt(t[2]),title:t[3]}),p:(t,e,n)=>U("a",{key:n.g,href:bt(t.target),title:t.title},e(t.content,n))},linkAngleBraceStyleDetector:{i:mt(O),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],type:"link"})},linkBareUrlDetector:{i:(t,e)=>e.m?null:mt(I)(t,e),l:Mt.MAX,_:t=>({content:[{content:t[1],type:"text"}],target:t[1],title:void 0,type:"link"})},linkMailtoDetector:{i:mt(M),l:Mt.MAX,_(t){let e=t[1],n=t[1];return u.test(n)||(n="mailto:"+n),{content:[{content:e.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(t,e,n){const r=L.exec(n);return!r||!e.h&&e.o?null:ct.exec(t=r[1]+t)},l:Mt.HIGH,_(t,e,n){const r=t[2],o=r.length>1,c=o?+r:void 0,a=t[0].replace(i,"\n").match(ot);let u=!1;return{items:a.map((function(t,r){const o=rt.exec(t)[0].length,c=new RegExp("^ {1,"+o+"}","gm"),i=t.replace(c,"").replace(rt,""),l=r===a.length-1,s=-1!==i.indexOf("\n\n")||l&&u;u=s;const _=n.o,f=n.h;let d;n.h=!0,s?(n.o=!1,d=i.replace(B,"\n\n")):(n.o=!0,d=i.replace(B,""));const p=e(d,n);return n.o=_,n.h=f,p})),ordered:o,start:c}},p:(t,e,n)=>U(t.ordered?"ol":"ul",{key:n.g,start:t.start},t.items.map((function(t,r){return U("li",{key:r},e(t,n))})))},newlineCoalescer:{i:ht(m),l:Mt.LOW,_:Et,p:()=>"\n"},paragraph:{i:xt,l:Mt.LOW,_:zt,p:(t,e,n)=>U("p",{key:n.g},e(t.content,n))},ref:{i:mt(C),l:Mt.MAX,_:t=>(at[t[1]]={target:t[2],title:t[4]},{}),p:At},refImage:{i:yt(D),l:Mt.MAX,_:t=>({alt:t[1]||void 0,ref:t[2]}),p:(t,e,n)=>U("img",{key:n.g,alt:t.alt,src:bt(at[t.ref].target),title:at[t.ref].title})},refLink:{i:mt(N),l:Mt.MAX,_:(t,e,n)=>({content:e(t[1],n),fallbackContent:e(t[0].replace(Z,"\\$1"),n),ref:t[2]}),p:(t,e,n)=>at[t.ref]?U("a",{key:n.g,href:bt(at[t.ref].target),title:at[t.ref].title},e(t.content,n)):U("span",{key:n.g},e(t.fallbackContent,n))},table:{i:ht(j),l:Mt.HIGH,_:pt,p:(t,e,n)=>U("table",{key:n.g},U("thead",null,U("tr",null,t.header.map((function(r,o){return U("th",{key:o,style:gt(t,o)},e(r,n))})))),U("tbody",null,t.cells.map((function(r,o){return U("tr",{key:o},r.map((function(r,o){return U("td",{key:o,style:gt(t,o)},e(r,n))})))}))))},tableSeparator:{i:function(t,e){return e.t?G.exec(t):null},l:Mt.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:kt(Y),l:Mt.MIN,_:t=>({content:t[0].replace(w,((t,e)=>H.namedCodesToUnicode[e]?H.namedCodesToUnicode[e]:t))}),p:t=>t.content},textBolded:{i:yt(Q),l:Mt.MED,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("strong",{key:n.g},e(t.content,n))},textEmphasized:{i:yt(X),l:Mt.LOW,_:(t,e,n)=>({content:e(t[2],n)}),p:(t,e,n)=>U("em",{key:n.g},e(t.content,n))},textEscaped:{i:yt(K),l:Mt.HIGH,_:t=>({content:t[1],type:"text"})},textStrikethroughed:{i:yt(J),l:Mt.LOW,_:zt,p:(t,e,n)=>U("del",{key:n.g},e(t.content,n))}};!0!==H.disableParsingRawHTML&&(lt.htmlBlock={i:kt($),l:Mt.HIGH,_(t,e,n){const[,r]=t[3].match(et),o=new RegExp(`^${r}`,"gm"),a=t[3].replace(o,""),u=(i=a,st.some((t=>t.test(i)))?wt:St);var i;const l=t[1].toLowerCase(),s=-1!==c.indexOf(l);n.m=n.m||"a"===l;const _=s?t[3]:u(e,a,n);return n.m=!1,{attrs:W(t[2]),content:_,noInnerParse:s,tag:s?l:t[1]}},p:(t,n,r)=>U(t.tag,e({key:r.g},t.attrs),t.noInnerParse?t.content:n(t.content,r))},lt.htmlSelfClosing={i:kt(A),l:Mt.HIGH,_:t=>({attrs:W(t[2]||""),tag:t[1]}),p:(t,n,r)=>U(t.tag,e({},t.attrs,{key:r.g}))});const ft=function(t){let e=Object.keys(t);function n(r,o){let c=[],a="";for(;r;){let u=0;for(;u<e.length;){const i=e[u],l=t[i],s=l.i(r,o,a);if(s){const t=s[0];r=r.substring(t.length);const e=l._(s,n,o);null==e.type&&(e.type=i),c.push(e),a=t;break}u++}}return c}return e.sort((function(e,n){let r=t[e].l,o=t[n].l;return r!==o?r-o:e<n?-1:1})),function(t,e){return n(function(t){return t.replace(y,"\n").replace(x,"").replace(P,"    ")}(t),e)}}(lt),dt=(t=lt,Ot=function(e,n,r){return t[e.type].p(e,n,r)},function t(e,n={}){if(Array.isArray(e)){const r=n.g,o=[];let c=!1;for(let r=0;r<e.length;r++){n.g=r;const a=t(e[r],n),u="string"==typeof a;u&&c?o[o.length-1]+=a:null!==a&&o.push(a),c=u}return n.g=r,o}return Ot(e,t,n)});var t,Ot;const Bt=V(n);return nt.length?U("div",null,Bt,U("footer",{key:"footer"},nt.map((function(t){return U("div",{id:H.slugify(t.identifier),key:t.identifier},t.identifier,dt(ft(t.footnote,{o:!0})))})))):Bt}(t=Mt||(Mt={}))[t.MAX=0]="MAX",t[t.HIGH=1]="HIGH",t[t.MED=2]="MED",t[t.LOW=3]="LOW",t[t.MIN=4]="MIN";const __WEBPACK_DEFAULT_EXPORT__=e=>{let{children:r,options:o}=e,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)e.indexOf(n=c[r])>=0||(o[n]=t[n]);return o}(e,n);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(Ot(r,o),c)}},"../components/src/MarkdownBrowser/MarkdownBrowser.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Customized:()=>Customized,Primary:()=>Primary,default:()=>MarkdownBrowser_stories});var jsx_runtime=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),lib_commonjs=__webpack_require__("../../.yarn/__virtual__/@fluentui-react-virtual-35f457a3da/0/cache/@fluentui-react-npm-8.105.4-0150463498-5dc0521434.zip/node_modules/@fluentui/react/lib-commonjs/index.js"),react=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),merge=__webpack_require__("../../.yarn/cache/lodash-es-npm-4.17.21-b45832dfce-05cbffad6e.zip/node_modules/lodash-es/merge.js"),styled_components_browser_cjs=__webpack_require__("../../.yarn/unplugged/styled-components-virtual-8205f0f5a4/node_modules/styled-components/dist/styled-components.browser.cjs.js");const src=styled_components_browser_cjs.default.default??styled_components_browser_cjs.default;var index_modern=__webpack_require__("../../.yarn/__virtual__/markdown-to-jsx-virtual-7d73ea5141/0/cache/markdown-to-jsx-npm-7.1.8-51a9bc0852-4823f90e8b.zip/node_modules/markdown-to-jsx/dist/index.modern.js");const Container=src.div`
    overflow-y: auto;
    height: 100%;
    width: 100%;
`,Navigation=src.div`
    float: right;
`,MarkdownContainer=src(index_modern.Z)`
    *:first-child {
        margin-top: 0;
    }
    
    h1 {
        text-transform: uppercase;
        color: ${({theme})=>theme.palette.neutralTertiary};
    }

    h2 {
        color: ${({theme})=>theme.palette.neutralTertiary};
    }

    table {
        border-collapse: collapse;

        th {
            font-weight: bold;
        }

        td,
        th {
            border: 1px solid ${({theme})=>theme.palette.neutralTertiaryAlt};
            padding: 5px;
            text-align: center;
        }
    }
`;function useLinkNavigation(parent,href,goForward){return(0,react.useCallback)((event=>{if(event.preventDefault(),isExternalLink(href))return window.open(href,"_blank");const name=function parseRelativePath(path,parent){const relative=path.replace(window.location.origin,"").replace(/.md/,""),parts=relative.split("/"),parentParts=parent.split(/\./g);if("."===parts[0])return[...parentParts.slice(0,parentParts.length-1),...parts.slice(1)].join(".");const levels=parts.filter((p=>".."===p)).length;if(levels>0)return[...parentParts.slice(0,parentParts.length-(levels+1)),...parts.slice(levels)].join(".");return relative.replace(/\//g,".")}(href,parent);name&&goForward(name)}),[parent,href,goForward])}function useIconButtonProps(iconName,onClick,overrides){const styles=function useIconButtonStyles(){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>({root:{color:theme.palette.neutralPrimaryAlt},rootDisabled:{backgroundColor:"none"}})),[theme])}();return(0,react.useMemo)((()=>(0,merge.Z)({disabled:!onClick,styles,iconProps:{iconName},ariaLabel:iconName,onClick},overrides)),[styles,iconName,onClick,overrides])}function isExternalLink(url){return!!url.includes(":")&&!url.includes(window.location.origin)}const MarkdownBrowser=(0,react.memo)((function MarkdownBrowser({home,content,styles={},backButtonProps,homeButtonProps}){const container=(0,react.useRef)(null),{current,goHome,goBack,goForward}=function useHistory(home){const[stack,setStack]=(0,react.useState)([]),goHome=(0,react.useCallback)((()=>setStack(home?[home]:[])),[home]),goBack=(0,react.useCallback)((()=>setStack((prev=>prev.length>1?prev.slice(0,-1):prev))),[]),goForward=(0,react.useCallback)((to=>setStack((prev=>[...prev,to]))),[]);return(0,react.useEffect)((()=>setStack(home?[home]:[])),[home]),{current:stack[stack.length-1],goHome:stack.length>1?goHome:void 0,goBack:stack.length>1?goBack:void 0,goForward}}(home),options=function useMarkdownOptions(current,goForward){return(0,react.useMemo)((()=>({overrides:{a:{component:A,props:{current,goForward}}}})),[current,goForward])}(current,goForward),md=current?content[current]:"",backProps=useIconButtonProps("Back",goBack,backButtonProps),homeProps=useIconButtonProps("Home",goHome,homeButtonProps);return(0,jsx_runtime.jsxs)(Container,{ref:container,style:styles.root,children:[(0,jsx_runtime.jsxs)(Navigation,{style:styles.navigation,children:[goBack&&(0,jsx_runtime.jsx)(lib_commonjs.IconButton,{...backProps}),goHome&&(0,jsx_runtime.jsx)(lib_commonjs.IconButton,{...homeProps})]}),md&&(0,jsx_runtime.jsx)(MarkdownContainer,{options,style:styles.markdown,children:md})]})})),A=props=>{const{children,href,current,goForward,...rest}=props,isExternal=isExternalLink(href),iconProps=function useLinkIconProps(url){return(0,react.useMemo)((()=>({styles:{root:{marginLeft:2,fontSize:"0.8em",width:"0.8em",height:"0.8em"}},iconName:"NavigateExternalInline",onClick:()=>window.open(url,"_blank")})),[url])}(href),onClick=useLinkNavigation(current,href,goForward);return(0,jsx_runtime.jsxs)(lib_commonjs.Link,{href,onClick,...rest,children:[children,isExternal&&(0,jsx_runtime.jsx)(lib_commonjs.Icon,{...iconProps})]})};try{MarkdownBrowser.displayName="MarkdownBrowser",MarkdownBrowser.__docgenInfo={description:"A component for rendering markdown that supports relative navigation.\nIf you have a collection of markdown files (e.g., documentation),\nthis component will render the content, but intercept link clicks to\nload relative content in the same pane.\n\nExternal links will open in a new tab/window.",displayName:"MarkdownBrowser",props:{content:{defaultValue:null,description:"Map of content with:\nkey: The content key (typically relative filename).\ncontent: The markdown content to render.\n\nRelative paths in hyperlinks will be checked for content to navigate to.\nFully-qualified paths (e.g., URLs) will be opened in a new window/tab.",name:"content",required:!0,type:{name:"Record<string, string>"}},home:{defaultValue:null,description:"Key for the default 'home' content to render.",name:"home",required:!1,type:{name:"string"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"MarkdownBrowserStyles"}},backButtonProps:{defaultValue:null,description:"",name:"backButtonProps",required:!1,type:{name:"IButtonProps"}},homeButtonProps:{defaultValue:null,description:"",name:"homeButtonProps",required:!1,type:{name:"IButtonProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/MarkdownBrowser/MarkdownBrowser.tsx#MarkdownBrowser"]={docgenInfo:MarkdownBrowser.__docgenInfo,name:"MarkdownBrowser",path:"../components/src/MarkdownBrowser/MarkdownBrowser.tsx#MarkdownBrowser"})}catch(__react_docgen_typescript_loader_error){}const MarkdownBrowser_stories={title:"@essex:components/MarkdownBrowser",component:MarkdownBrowser},content={aggregate:"\n# aggregate\n\nLink to [groupby](./groupby.md) and [fill](./fill.md) to support all-in-one data aggregations.\n\n## Example\n\n| id  | value |\n| --- | ----- |\n| 1   | 10    |\n| 1   | 15    |\n| 2   | 1     |\n| 2   | 11    |\n| 2   | 18    |\n\n[no header](./noheader.md)\n\nWe can also link to [external](https://en.wikipedia.org/wiki/Markdown) content.\n\nAnd we can handle [nested relative content](./nested/content.md)\n",groupby:"\n# groupby\n\nGroups table rows using keys from a specified column list. Note that this is an underlying index on a table that isn't necessarily visible, but will apply when performing operations that are sensitive to grouping. See [aggregate](./aggregate.md) for examples of `groupby`.\n\nHere is a [missing link](./missing.md).\n",fill:"\n# fill\n\nCreates a new output column and fills it with a fixed value.\n\n## Example\n\n| id  |\n| --- |\n| 1   |\n| 2   |\n| 3   |\n\n`fill column='output' with value='hi'`:\n\n| id  | output |\n| --- | ------ |\n| 1   | hi     |\n| 2   | hi     |\n| 3   | hi     |\n\n",noheader:"\nThis content has no header so we can see how the alignment works with the navigation buttons\n\n## Example\n\n| id  |\n| --- |\n| 1   |\n| 2   |\n| 3   |\n\nHere is a [missing link](./missing.md).\n\n`fill column='output' with value='hi'`:\n\n| id  | output |\n| --- | ------ |\n| 1   | hi     |\n| 2   | hi     |\n| 3   | hi     |\n\n","nested.content":"\nThis is a nested content file.\n\nLink to [sibling](./sibling.md).\n\nLink back to [aggregate](../aggregate.md)","nested.sibling":"\nThis is a nested sibling content file.\n\nLink to [nested](./content.md).\n\nLink to [deeply nested](./child/leveltwo.md).\n\nLink back to [aggregate](../aggregate.md)","nested.child.leveltwo":"\nThis is a deeply nested content file for relative parent folder testing.\n\nLink to [nested parent](../content.md).\n\nLink back up to [aggregate](../../aggregate.md)"},PrimaryComponent=args=>{const[home,setHome]=(0,react.useState)("aggregate");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:8,marginBottom:8},children:[(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome("aggregate"),children:"aggregate"}),(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome("groupby"),children:"groupby"}),(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome(void 0),children:"clear"})]}),(0,jsx_runtime.jsx)("div",{style:{width:600,height:400,padding:12,border:"1px solid orange"},children:(0,jsx_runtime.jsx)(MarkdownBrowser,{...args,content,home})})]})},CustomizedComponent=args=>{const[home,setHome]=(0,react.useState)("aggregate");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:8,marginBottom:8},children:[(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome("aggregate"),children:"aggregate"}),(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome("groupby"),children:"groupby"}),(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{onClick:()=>setHome(void 0),children:"clear"})]}),(0,jsx_runtime.jsx)("div",{style:{width:600,height:400,padding:12,border:"1px solid orange"},children:(0,jsx_runtime.jsx)(MarkdownBrowser,{...args,content,home})})]})},Primary={render:args=>(0,jsx_runtime.jsx)(PrimaryComponent,{...args})},Customized={render:args=>(0,jsx_runtime.jsx)(CustomizedComponent,{...args}),args:{styles:{root:{border:"1px solid dodgerblue",padding:20},markdown:{fontFamily:"monospace"}},homeButtonProps:{iconProps:{iconName:"RedEye"}},backButtonProps:{iconProps:{iconName:"Undo"}}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: (args: MarkdownBrowserProps) => <PrimaryComponent {...args} />\n}",...Primary.parameters?.docs?.source}}},Customized.parameters={...Customized.parameters,docs:{...Customized.parameters?.docs,source:{originalSource:"{\n  render: (args: MarkdownBrowserProps) => <CustomizedComponent {...args} />,\n  args: {\n    styles: {\n      root: {\n        border: '1px solid dodgerblue',\n        padding: 20\n      },\n      markdown: {\n        fontFamily: 'monospace'\n      }\n    },\n    homeButtonProps: {\n      iconProps: {\n        iconName: 'RedEye'\n      }\n    },\n    backButtonProps: {\n      iconProps: {\n        iconName: 'Undo'\n      }\n    }\n  }\n}",...Customized.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-src-MarkdownBrowser-MarkdownBrowser-stories.30d18f05.iframe.bundle.js.map