try{
var te=Object.create;var x=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var L=(e,t)=>()=>(e&&(t=e(e=0)),t);var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ie=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ne(t))!ae.call(e,n)&&n!==r&&x(e,n,{get:()=>t[n],enumerable:!(o=re(t,n))||o.enumerable});return e};var P=(e,t,r)=>(r=e!=null?te(oe(e)):{},ie(t||!e||!e.__esModule?x(r,"default",{value:e,enumerable:!0}):r,e));var a=L(()=>{});var c,i=L(()=>{c={}});var G=E(_=>{"use strict";a();i();Object.defineProperty(_,"__esModule",{value:!0});_.dedent=void 0;function N(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=Array.from(typeof e=="string"?[e]:e);o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,"");var n=o.reduce(function(u,p){var h=p.match(/\n([\t ]+|(?!\s).)/g);return h?u.concat(h.map(function(g){var d,S;return(S=(d=g.match(/[\t ]/g))===null||d===void 0?void 0:d.length)!==null&&S!==void 0?S:0})):u},[]);if(n.length){var s=new RegExp(`
[	 ]{`+Math.min.apply(Math,n)+"}","g");o=o.map(function(u){return u.replace(s,`
`)})}o[0]=o[0].replace(/^\r?\n/,"");var l=o[0];return t.forEach(function(u,p){var h=l.match(/(?:^|\n)( *)$/),g=h?h[1]:"",d=u;typeof u=="string"&&u.includes(`
`)&&(d=String(u).split(`
`).map(function(S,ee){return ee===0?S:""+g+S}).join(`
`)),l+=d+o[p+1]}),l}_.dedent=N;_.default=N});var q=E((qt,Y)=>{a();i();function b(){return this.list=[],this.lastItem=void 0,this.size=0,this}b.prototype.get=function(e){var t;if(this.lastItem&&this.isEqual(this.lastItem.key,e))return this.lastItem.val;if(t=this.indexOf(e),t>=0)return this.lastItem=this.list[t],this.list[t].val};b.prototype.set=function(e,t){var r;return this.lastItem&&this.isEqual(this.lastItem.key,e)?(this.lastItem.val=t,this):(r=this.indexOf(e),r>=0?(this.lastItem=this.list[r],this.list[r].val=t,this):(this.lastItem={key:e,val:t},this.list.push(this.lastItem),this.size++,this))};b.prototype.delete=function(e){var t;if(this.lastItem&&this.isEqual(this.lastItem.key,e)&&(this.lastItem=void 0),t=this.indexOf(e),t>=0)return this.size--,this.list.splice(t,1)[0]};b.prototype.has=function(e){var t;return this.lastItem&&this.isEqual(this.lastItem.key,e)?!0:(t=this.indexOf(e),t>=0?(this.lastItem=this.list[t],!0):!1)};b.prototype.forEach=function(e,t){var r;for(r=0;r<this.size;r++)e.call(t||this,this.list[r].val,this.list[r].key,this)};b.prototype.indexOf=function(e){var t;for(t=0;t<this.size;t++)if(this.isEqual(this.list[t].key,e))return t;return-1};b.prototype.isEqual=function(e,t){return e===t||e!==e&&t!==t};Y.exports=b});var W=E((Ut,$)=>{a();i();$.exports=function(e){if(typeof Map!="function"||e){var t=q();return new t}else return new Map}});var V=E((Zt,j)=>{a();i();var U=W();j.exports=function(e){var t=new U(c.FORCE_SIMILAR_INSTEAD_OF_MAP==="true"),r=[];return function(o){var n=function(){var s=t,l,u,p=arguments.length-1,h=Array(p+1),g=!0,d;if((n.numArgs||n.numArgs===0)&&n.numArgs!==p+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(d=0;d<p;d++){if(h[d]={cacheItem:s,arg:arguments[d]},s.has(arguments[d])){s=s.get(arguments[d]);continue}g=!1,l=new U(c.FORCE_SIMILAR_INSTEAD_OF_MAP==="true"),s.set(arguments[d],l),s=l}return g&&(s.has(arguments[p])?u=s.get(arguments[p]):g=!1),g||(u=o.apply(null,arguments),s.set(arguments[p],u)),e>0&&(h[p]={cacheItem:s,arg:arguments[p]},g?le(r,h):r.push(h),r.length>e&&ue(r.shift())),n.wasMemoized=g,n.numArgs=p+1,u};return n.limit=e,n.wasMemoized=!1,n.cache=t,n.lru=r,n}};function le(e,t){var r=e.length,o=t.length,n,s,l;for(s=0;s<r;s++){for(n=!0,l=0;l<o;l++)if(!ce(e[s][l].arg,t[l].arg)){n=!1;break}if(n)break}e.push(e.splice(s,1)[0])}function ue(e){var t=e.length,r=e[t-1],o,n;for(r.cacheItem.delete(r.arg),n=t-2;n>=0&&(r=e[n],o=r.cacheItem.get(r.arg),!o||!o.size);n--)r.cacheItem.delete(r.arg)}function ce(e,t){return e===t||e!==e&&t!==t}});a();i();a();i();a();i();a();i();a();i();var w=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var H=P(G(),1);a();i();var ke=__STORYBOOKCLIENTLOGGER__,{deprecate:Ce,logger:I,once:Ae,pretty:Be}=__STORYBOOKCLIENTLOGGER__;var T="storybook/background",y="backgrounds",Le={UPDATE:`${T}/update`},{document:Ne,window:Ge}=w;var D=(e,t=[],r)=>{if(e==="transparent")return"transparent";if(t.find(n=>n.value===e))return e;let o=t.find(n=>n.name===r);if(o)return o.value;if(r){let n=t.map(s=>s.name).join(", ");I.warn(H.dedent`
        Backgrounds Addon: could not find the default color "${r}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"};a();i();var m=__REACT__,{Children:ze,Component:Ke,Fragment:O,Profiler:Ye,PureComponent:qe,StrictMode:$e,Suspense:We,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ue,cloneElement:je,createContext:Ve,createElement:Ze,createFactory:Je,createRef:Qe,forwardRef:Xe,isValidElement:et,lazy:tt,memo:v,useCallback:F,useContext:rt,useDebugValue:nt,useEffect:ot,useImperativeHandle:at,useLayoutEffect:it,useMemo:z,useReducer:st,useRef:lt,useState:ut,version:ct}=__REACT__;a();i();var ft=__STORYBOOKAPI__,{ActiveTabs:ht,Consumer:gt,ManagerContext:yt,Provider:bt,addons:M,combineParameters:St,controlOrMetaKey:_t,controlOrMetaSymbol:Et,eventMatchesShortcut:It,eventToShortcut:Tt,isMacLike:Ot,isShortcutTaken:vt,keyToSymbol:kt,merge:Ct,mockChannel:At,optionOrAltSymbol:Bt,shortcutMatchesShortcut:Mt,shortcutToHumanString:Rt,types:K,useAddonState:xt,useArgTypes:Lt,useArgs:Pt,useChannel:wt,useGlobalTypes:Nt,useGlobals:k,useParameter:C,useSharedState:Gt,useStoryPrepared:Ht,useStorybookApi:Dt,useStorybookState:Ft}=__STORYBOOKAPI__;var R=P(V(),1);a();i();var Xt=__STORYBOOKCOMPONENTS__,{A:er,ActionBar:tr,AddonPanel:rr,Badge:nr,Bar:or,Blockquote:ar,Button:ir,Code:sr,DL:lr,Div:ur,DocumentWrapper:cr,FlexBar:dr,Form:mr,H1:pr,H2:fr,H3:hr,H4:gr,H5:yr,H6:br,HR:Sr,IconButton:A,IconButtonSkeleton:_r,Icons:B,Img:Er,LI:Ir,Link:Tr,Loader:Or,OL:vr,P:kr,Placeholder:Cr,Pre:Ar,ResetWrapper:Br,ScrollArea:Mr,Separator:Rr,Spaced:xr,Span:Lr,StorybookIcon:Pr,StorybookLogo:wr,Symbols:Nr,SyntaxHighlighter:Gr,TT:Hr,TabBar:Dr,TabButton:Fr,TabWrapper:zr,Table:Kr,Tabs:Yr,TabsState:qr,TooltipLinkList:Z,TooltipMessage:$r,TooltipNote:Wr,UL:Ur,WithTooltip:J,WithTooltipPure:jr,Zoom:Vr,codeCommon:Zr,components:Jr,createCopyToClipboardFunction:Qr,getStoryHref:Xr,interleaveSeparators:en,nameSpaceClassNames:tn,resetComponents:rn,withReset:nn}=__STORYBOOKCOMPONENTS__;a();i();var ln=__STORYBOOKTHEMING__,{CacheProvider:un,ClassNames:cn,Global:dn,ThemeProvider:mn,background:pn,color:fn,convert:hn,create:gn,createCache:yn,createGlobal:bn,createReset:Sn,css:_n,darken:En,ensure:In,ignoreSsrWarning:Tn,isPropValid:On,jsx:vn,keyframes:kn,lighten:Cn,styled:Q,themes:An,typography:Bn,useTheme:Mn,withTheme:Rn}=__STORYBOOKTHEMING__;var de=Q.span(({background:e})=>({borderRadius:"1rem",display:"block",height:"1rem",width:"1rem",background:e}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),X=(0,R.default)(1e3)((e,t,r,o,n,s)=>({id:e||t,title:t,onClick:()=>{n({selected:r,name:t})},value:r,right:o?m.createElement(de,{background:r}):void 0,active:s})),me=(0,R.default)(10)((e,t,r)=>{let o=e.map(({name:n,value:s})=>X(null,n,s,!0,r,s===t));return t!=="transparent"?[X("reset","Clear background","transparent",null,r,!1),...o]:o}),pe={default:null,disable:!0,values:[]},fe=v(function(){let e=C(y,pe),[t,r]=k(),o=t[y]?.value,n=z(()=>D(o,e.values,e.default),[e,o]);Array.isArray(e)&&I.warn("Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md");let s=F(l=>{r({[y]:{...t[y],value:l}})},[e,t,r]);return e.disable?null:m.createElement(O,null,m.createElement(J,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:({onHide:l})=>m.createElement(Z,{links:me(e.values,n,({selected:u})=>{n!==u&&s(u),l()})})},m.createElement(A,{key:"background",title:"Change the background of the preview",active:n!=="transparent"},m.createElement(B,{icon:"photo"}))))}),he=v(function(){let[e,t]=k(),{grid:r}=C(y,{grid:{disable:!1}});if(r?.disable)return null;let o=e[y]?.grid||!1;return m.createElement(A,{key:"background",active:o,title:"Apply a grid to the preview",onClick:()=>t({[y]:{...e[y],grid:!o}})},m.createElement(B,{icon:"grid"}))});M.register(T,()=>{M.add(T,{title:"Backgrounds",type:K.TOOL,match:({viewMode:e})=>!!(e&&e.match(/^(story|docs)$/)),render:()=>m.createElement(O,null,m.createElement(fe,null),m.createElement(he,null))})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
