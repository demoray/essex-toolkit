/*! For license information please see components-src-Tree-Tree-stories.94de2443.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkessex_toolkit_stories=self.webpackChunkessex_toolkit_stories||[]).push([[6493],{"../components/src/Tree/Tree.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomRenderers:()=>CustomRenderers,Customized:()=>Customized,Grouped:()=>Grouped,Narrow:()=>Narrow,NestedSelections:()=>NestedSelections,Primary:()=>Primary,Routes:()=>Routes,default:()=>Tree_stories});var jsx_runtime=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js");const rkey="";function useTreeItemGroups(items,groups,selectedKey,onItemClick,onItemExpandClick){const expansion=function useExpansion(items,selectedKey){const defaultExpansion=(0,react.useMemo)((()=>function forceExpansionToSelected(items,selectedKey){const collect=(children,parentKey)=>children.map((child=>{if(child.children){const childKeys=collect(child.children,child.key);if(childKeys.length>0)return[child.key,...childKeys]}return child.expanded?[child.key]:child.selected||child.key===selectedKey?[parentKey]:[]})).flatMap((key=>key));return collect(items).reduce(((acc,cur)=>(acc[cur]=!0,acc)),{})}(items,selectedKey)),[items,selectedKey]),[expandMap,setExpandMap]=(0,react.useState)(defaultExpansion);return(0,react.useMemo)((()=>({is:key=>expandMap[key],on:key=>setExpandMap((prev=>({...prev,[key]:!prev[key]})))})),[expandMap,setExpandMap])}(items,selectedKey);return(0,react.useMemo)((()=>{const collected=function collectItemsByGroup(items){return items.reduce(((acc,cur)=>{const group=cur.group||rkey,g=acc.get(group)||[];return g.push(cur),acc.set(group,g),acc}),new Map([[rkey,[]]]))}(items);return[...groups||[],{key:rkey}].map((group=>({...group,items:makeDetailedItems(collected.get(group.key)||[],0,expansion,selectedKey,onItemClick,onItemExpandClick)})))}),[items,groups,expansion,selectedKey,onItemClick,onItemExpandClick])}function makeDetailedItems(items,depth,expansion,selectedKey,onItemClick,onItemExpandClick){return items.map((item=>{const{children,onClick,onExpand,selected:itemSelected,expanded,...rest}=item,selected=itemSelected||item.key===selectedKey||selectedKey?.startsWith(`${item.key}/`),base={...rest,depth,selected:selected||itemSelected,expanded:expanded||expansion.is(item.key),onExpand:itm=>{expansion.on(itm.key),onExpand?onExpand(itm):onItemExpandClick&&onItemExpandClick(itm)},onClick:onClick||onItemClick?itm=>{onClick?onClick(itm):onItemClick&&onItemClick(itm)}:void 0};return children&&(base.children=makeDetailedItems(children,depth+1,expansion,selectedKey,onItemClick,onItemExpandClick)),base}))}var lib_commonjs=__webpack_require__("../../.yarn/__virtual__/@fluentui-react-virtual-554103797a/0/cache/@fluentui-react-npm-8.111.1-5600742b95-eec8dc1efc.zip/node_modules/@fluentui/react/lib-commonjs/index.js"),merge=__webpack_require__("../../.yarn/cache/lodash-es-npm-4.17.21-b45832dfce-03f39878ea.zip/node_modules/lodash-es/merge.js");function useTreeStyles(styles,size="medium"){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>{const base={root:{display:"flex",flexDirection:"column",gap:24},list:{padding:0,margin:0,listStyleType:"none"},group:{display:"flex",flexDirection:"column"},groupHeader:{fontSize:12,padding:4,fontWeight:"bold",color:theme.palette.neutralSecondary,background:theme.palette.neutralLighterAlt,borderTop:"1px solid",borderBottom:"1px solid",borderColor:theme.palette.neutralTertiaryAlt}},small="small"===size&&{groupHeader:{fontSize:10}};return(0,merge.Z)(base,small,styles)}),[theme,styles,size])}const MEDIUM_SIZE=32,MEDIUM_CARET_FONT_SIZE=8,MEDIUM_CARET_ICON_BUTTON_SIZE=16,MEDIUM_ICON_FONT_SIZE=16,MEDIUM_ICON_SIZE=18,MEDIUM_LONG_TICK=6+MEDIUM_CARET_ICON_BUTTON_SIZE,SMALL_SIZE=24,TreeItem_styles_SMALL_FONT_SIZE=12,SMALL_CARET_ICON_BUTTON_SIZE=12,SMALL_ICON_FONT_SIZE=14,SMALL_ICON_SIZE=16,SMALL_CARET_FONT_SIZE=6,SHORT_LONG_TICK=6+SMALL_CARET_ICON_BUTTON_SIZE;const transparentBackgroundButtonStyles=["root","rootFocused","rootHovered","rootPressed"].reduce(((acc,cur)=>(acc[cur]={background:"transparent"},acc)),{});function useHierarchyBoxStyle(size="medium"){return(0,react.useMemo)((()=>({height:"100%",minHeight:"medium"===size?MEDIUM_SIZE:SMALL_SIZE,display:"flex",flexDirection:"column",justifyContent:"flex-start"})),[size])}function useExpandIconButtonProps(item,props,size="medium"){const buttonStyles=function useExpandIconButtonStyles(size="medium"){return(0,react.useMemo)((()=>{const base={root:{borderRadius:0,padding:0,margin:0,width:MEDIUM_CARET_ICON_BUTTON_SIZE,height:MEDIUM_CARET_ICON_BUTTON_SIZE}},small="small"===size&&{root:{width:SMALL_CARET_ICON_BUTTON_SIZE,height:SMALL_CARET_ICON_BUTTON_SIZE}};return(0,merge.Z)(base,small,transparentBackgroundButtonStyles)}),[size])}(size),iconStyles=function useExpandIconIconStyles(size="medium"){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>({root:{color:theme.palette.neutralPrimaryAlt,fontSize:"medium"===size?MEDIUM_CARET_FONT_SIZE:SMALL_CARET_FONT_SIZE}})),[theme,size])}(size);return(0,react.useMemo)((()=>(0,merge.Z)({iconProps:{iconName:item.expanded?props?.collapseIconName||"ChevronDown":props?.expandIconName||"ChevronRight",onClick:()=>item.onExpand?.(item),styles:iconStyles,ariaLabel:item.expanded?`Collapse ${item.text}`:`Expand ${item.text}`},styles:buttonStyles},props)),[item,iconStyles,buttonStyles,props])}function useContentButtonProps(item,props,size="medium"){const buttonStyles=function useContentButtonStyles(item,size="medium"){return(0,react.useMemo)((()=>{const base={root:{border:"none",borderRadius:0,textAlign:"left",padding:0,margin:0,width:"100%",minWidth:"unset",cursor:item.onClick?"pointer":"default"},flexContainer:{justifyContent:"flex-start",gap:4},label:{fontWeight:item.selected?"bold":"normal",whiteSpace:"nowrap",margin:0}},small="small"===size&&{root:{height:SMALL_SIZE,fontSize:TreeItem_styles_SMALL_FONT_SIZE}};return(0,merge.Z)(base,small,transparentBackgroundButtonStyles)}),[item,size])}(item,size),iconStyles=function useContentIconStyles(size="medium"){return(0,react.useMemo)((()=>{const base={root:{fontSize:MEDIUM_ICON_FONT_SIZE,margin:0,width:MEDIUM_ICON_SIZE,minWidth:MEDIUM_ICON_SIZE}},small="small"===size&&{root:{fontSize:SMALL_ICON_FONT_SIZE,width:SMALL_ICON_SIZE,minWidth:SMALL_ICON_SIZE}};return(0,merge.Z)(base,small)}),[size])}(size);return(0,react.useMemo)((()=>(0,merge.Z)({styles:buttonStyles,iconProps:{iconName:item.iconName,styles:iconStyles}},props)),[item,buttonStyles,iconStyles,props])}function useMenuButtonProps(item,hovered,props,size="medium"){const[open,setOpen]=(0,react.useState)(!1),onMenuClick=(0,react.useCallback)(((...args)=>{setOpen(!0),props?.onMenuClick?.(...args)}),[setOpen,props]),onAfterMenuDismiss=(0,react.useCallback)((()=>{setOpen(!1),props?.onAfterMenuDismiss?.()}),[setOpen,props]),shown=hovered||open||props?.alwaysVisible,buttonStyles=function useMenuButtonStyles(size="medium"){return(0,react.useMemo)((()=>{const base={root:{borderRadius:0,width:MEDIUM_SIZE,minWidth:MEDIUM_SIZE,height:MEDIUM_SIZE}},small="small"===size&&{root:{width:SMALL_SIZE,minWidth:SMALL_SIZE,height:SMALL_SIZE,fontSize:TreeItem_styles_SMALL_FONT_SIZE}};return(0,merge.Z)(base,small,transparentBackgroundButtonStyles)}),[size])}(size),menuItemsStyles=function useMenuItemsStyles(size="medium"){return(0,react.useMemo)((()=>"small"===size?{subComponentStyles:{menuItem:{root:{fontSize:TreeItem_styles_SMALL_FONT_SIZE,height:SMALL_SIZE},icon:{fontSize:TreeItem_styles_SMALL_FONT_SIZE}}}}:{}),[size])}(size);return(0,react.useMemo)((()=>{if(item.menuItems){const base={styles:buttonStyles,menuProps:{items:item.menuItems,styles:menuItemsStyles},ariaLabel:`Open context menu for ${item.text}`};return(0,merge.Z)(base,props,{menuIconProps:{iconName:shown?props?.menuIconProps?.iconName||"MoreVertical":""},onMenuClick,onAfterMenuDismiss})}}),[item,shown,buttonStyles,menuItemsStyles,onMenuClick,onAfterMenuDismiss,props])}const TreeItem=(0,react.memo)((function TreeItem(props){const{item,styles,expandButtonProps,menuButtonProps,size,narrow}=props,_styles=function useTreeItemStyles(item,styles,size="medium",narrow=!1){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>{const depth=item.depth||0,base={list:{padding:0,margin:0,listStyleType:"none"},listItem:{width:"100%"},listItemContent:{display:"flex",alignItems:"center"},flexContainer:{width:"100%",display:"flex",alignItems:"center",overflow:"hidden",paddingLeft:0===depth?0:8+14*(depth-1)},hierarchyLine:{width:item.children?6:MEDIUM_LONG_TICK,minWidth:item.children?6:MEDIUM_LONG_TICK,height:MEDIUM_SIZE/2,borderLeft:"1px solid",borderBottom:"1px solid",borderColor:theme.palette.neutralLight},depthTicks:{width:3,minWidth:3,height:1,background:theme.palette.neutralSecondaryAlt},pill:{marginLeft:2,marginRight:2,width:4,background:item.selected?theme.palette.themePrimary:"transparent",height:14,borderRadius:8}},small="small"===size&&{flexContainer:{paddingLeft:0===depth?0:6+12*(depth-1)},hierarchyLine:{width:item.children?6:SHORT_LONG_TICK,minWidth:item.children?6:SHORT_LONG_TICK,height:SMALL_SIZE/2},indicator:{width:2,borderRadius:4}},narrowed=narrow&&{flexContainer:{paddingLeft:0}};return(0,merge.Z)(base,small,narrowed,styles)}),[theme,styles,item,size,narrow])}(item,styles,size,narrow),_expandButtonProps=useExpandIconButtonProps(item,expandButtonProps,size),{listItemContentStyles,hovered,onMouseEnter,onMouseLeave}=function useItemHoverInteraction(item,styles){const theme=(0,lib_commonjs.useTheme)(),[hovered,setHovered]=(0,react.useState)(!1),onMouseEnter=(0,react.useCallback)((()=>setHovered(!0)),[setHovered]),onMouseLeave=(0,react.useCallback)((()=>setHovered(!1)),[setHovered]);return{listItemContentStyles:(0,react.useMemo)((()=>({margin:0,background:hovered?theme.palette.neutralLighterAlt:item.selected?theme.palette.neutralLighter:"unset",...styles.listItemContent})),[theme,styles,item,hovered]),hovered,onMouseEnter,onMouseLeave}}(item,_styles),_menuButtonProps=useMenuButtonProps(item,hovered,menuButtonProps,size),Indicator=narrow?DepthIndicator:HiearchyIndicator;return(0,jsx_runtime.jsx)(TooltipWrapper,{...props,children:(0,jsx_runtime.jsxs)("li",{"data-testid":"essex-tree-item",style:_styles.listItem,children:[(0,jsx_runtime.jsxs)("p",{style:listItemContentStyles,onMouseEnter,onMouseLeave,children:[(0,jsx_runtime.jsx)("div",{style:_styles.pill}),(0,jsx_runtime.jsxs)("div",{style:_styles.flexContainer,children:[(0,jsx_runtime.jsx)(Indicator,{...props,styles:_styles}),(item.children||item.onRenderContent)&&!narrow&&(0,jsx_runtime.jsx)(lib_commonjs.IconButton,{..._expandButtonProps}),renderTitle(props),item.menuItems&&(0,jsx_runtime.jsx)(lib_commonjs.IconButton,{..._menuButtonProps})]})]}),(item.expanded||narrow)&&(0,jsx_runtime.jsx)("ul",{style:_styles.list,children:contentRenderer(props)})]},`tree-item-li-${item.key}`)})})),TooltipWrapper=props=>{const{narrow,item,children}=props;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:narrow?(0,jsx_runtime.jsx)(lib_commonjs.TooltipHost,{id:`tooltip-${item.key}`,content:item.text,directionalHint:lib_commonjs.DirectionalHint.rightTopEdge,calloutProps:{gapSpace:4},children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})})},HiearchyIndicator=(0,react.memo)((function HiearchyIndicator(props){const{item,size,styles}=props,boxStyle=useHierarchyBoxStyle(size);return 0===item.depth?null:(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)("div",{style:styles?.hierarchyLine})})})),DepthIndicator=(0,react.memo)((function DepthIndicator(props){const{item,size,styles}=props,boxStyle=function useDepthTicksBoxStyle(size="medium"){const box=useHierarchyBoxStyle(size);return(0,react.useMemo)((()=>({...box,justifyContent:"center",gap:2,marginRight:2})),[box])}(size),ticks=(0,react.useMemo)((()=>new Array((item.depth||0)+1).fill(1).map(((_,i)=>(0,jsx_runtime.jsx)("div",{style:styles?.depthTicks},`depth-tick-${item.key}-${i}`)))),[item,styles]);return(0,jsx_runtime.jsx)("div",{style:boxStyle,children:ticks})})),TreeItemTitle=(0,react.memo)((function TreeItemTitle(props){const{item,contentButtonProps,size}=props,_contentButtonProps=useContentButtonProps(item,contentButtonProps,size),handleClick=(0,react.useCallback)((()=>{item.onClick?.(item)}),[item]);return(0,jsx_runtime.jsx)(lib_commonjs.DefaultButton,{..._contentButtonProps,onClick:handleClick,children:item.text})})),TreeItemContent=(0,react.memo)((function TreeItemTitle(props){const{item,styles,expandButtonProps,contentButtonProps,menuButtonProps,size,narrow}=props;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:item.children?.map((child=>(0,jsx_runtime.jsx)(TreeItem,{item:child,styles,expandButtonProps,contentButtonProps,menuButtonProps,size,narrow},child.key)))})})),defaultTitleRenderer=props=>props?(0,jsx_runtime.jsx)(TreeItemTitle,{...props}):null,renderTitle=props=>props?.item.onRenderTitle?props.item.onRenderTitle(props,defaultTitleRenderer):defaultTitleRenderer(props),defaultContentRenderer=props=>props?(0,jsx_runtime.jsx)(TreeItemContent,{...props}):null,contentRenderer=props=>props?.item.onRenderContent?props.item.onRenderContent(props,defaultContentRenderer):defaultContentRenderer(props);try{TreeItem.displayName="TreeItem",TreeItem.__docgenInfo={description:"A TreeNode is contructed of buttons, selection indicators, and recursive children.\nFrom the left:\n(1) Selection indicator (pill), only displayed if item.selected is true\n(2) Expand/collapse button, only visible if the item has children\n(3) The main item content as a clickable button\n(4) The far-right menu only shown on hover, and only if there are menu items\n\nThe primary content resides within the listItemContent div, because that is the\nlevel of interaction and styling we want for the row.\nThe outer li is too comprehensive because it grows if there are children.",displayName:"TreeItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TreeItem"}},styles:{defaultValue:null,description:"General styles for customizing the tree.",name:"styles",required:!1,type:{name:"TreeStyles"}},expandButtonProps:{defaultValue:null,description:"Override props to customize the expand/collapse button (including its styles).",name:"expandButtonProps",required:!1,type:{name:"ExpandIconButtonProps"}},contentButtonProps:{defaultValue:null,description:"Override props for the main button used to render each tree item's content.\nNote that this includes the iconProps if you want to customize how the item's icon (if any) looks.",name:"contentButtonProps",required:!1,type:{name:"IButtonProps"}},menuButtonProps:{defaultValue:null,description:"Override props for the right-side menu item for each item (if they have menuItems).",name:"menuButtonProps",required:!1,type:{name:"MenuButtonProps"}},size:{defaultValue:null,description:"Set the size mode of the tree",name:"size",required:!1,type:{name:"Size"}},narrow:{defaultValue:null,description:"Indicates that the Tree should be rendered in a narrow mode",name:"narrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Tree/TreeItem.tsx#TreeItem"]={docgenInfo:TreeItem.__docgenInfo,name:"TreeItem",path:"../components/src/Tree/TreeItem.tsx#TreeItem"})}catch(__react_docgen_typescript_loader_error){}const Tree=(0,react.memo)((function Tree({items,groups,selectedKey,onItemClick,onItemExpandClick,styles,expandButtonProps,contentButtonProps,menuButtonProps,size="medium",onRenderGroupHeader,narrow=!1}){const _styles=useTreeStyles(styles,size),treeGroups=useTreeItemGroups(items,groups,selectedKey,onItemClick,onItemExpandClick);return(0,jsx_runtime.jsx)("div",{"data-testid":"essex-tree",style:_styles.root,children:treeGroups.map((group=>(0,jsx_runtime.jsx)("div",{style:_styles.group,children:(0,jsx_runtime.jsxs)("ul",{style:_styles.list,children:[groupHeaderRenderer({group,styles,size,onRenderGroupHeader}),group.items.map((item=>(0,jsx_runtime.jsx)(TreeItem,{item,styles,expandButtonProps,contentButtonProps,menuButtonProps,size,narrow},item.key)))]})},`tree-group-${group.key}`)))})})),TreeGroupHeader=(0,react.memo)((function TreeGroupHeader(props){const{group,styles,size}=props,_styles=useTreeStyles(styles,size);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:group.text&&(0,jsx_runtime.jsx)("li",{style:_styles.groupHeader,title:group.text,children:group.text})})})),defaultGroupHeaderRenderer=props=>props?(0,jsx_runtime.jsx)(TreeGroupHeader,{...props}):null,groupHeaderRenderer=props=>props?.onRenderGroupHeader?props.onRenderGroupHeader(props,defaultGroupHeaderRenderer):defaultGroupHeaderRenderer(props);try{Tree.displayName="Tree",Tree.__docgenInfo={description:"",displayName:"Tree",props:{items:{defaultValue:null,description:"List of items to render in the tree.",name:"items",required:!0,type:{name:"TreeItem[]"}},groups:{defaultValue:null,description:"Optional group definitions.\nIf groups are defined, each root item must have a group key.",name:"groups",required:!1,type:{name:"TreeGroup[]"}},selectedKey:{defaultValue:null,description:"Selected item in the tree.",name:"selectedKey",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"Global handler for individual item clicks.",name:"onItemClick",required:!1,type:{name:"(item: TreeItem) => void"}},onItemExpandClick:{defaultValue:null,description:"Global handler for individual expand/collapse icon clicks.",name:"onItemExpandClick",required:!1,type:{name:"(item: TreeItem) => void"}},onRenderGroupHeader:{defaultValue:null,description:"Render function to override the group header.",name:"onRenderGroupHeader",required:!1,type:{name:"IRenderFunction<TreeGroupProps>"}},styles:{defaultValue:null,description:"General styles for customizing the tree.",name:"styles",required:!1,type:{name:"TreeStyles"}},expandButtonProps:{defaultValue:null,description:"Override props to customize the expand/collapse button (including its styles).",name:"expandButtonProps",required:!1,type:{name:"ExpandIconButtonProps"}},contentButtonProps:{defaultValue:null,description:"Override props for the main button used to render each tree item's content.\nNote that this includes the iconProps if you want to customize how the item's icon (if any) looks.",name:"contentButtonProps",required:!1,type:{name:"IButtonProps"}},menuButtonProps:{defaultValue:null,description:"Override props for the right-side menu item for each item (if they have menuItems).",name:"menuButtonProps",required:!1,type:{name:"MenuButtonProps"}},size:{defaultValue:null,description:"Set the size mode of the tree",name:"size",required:!1,type:{name:"Size"}},narrow:{defaultValue:null,description:"Indicates that the Tree should be rendered in a narrow mode",name:"narrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Tree/Tree.tsx#Tree"]={docgenInfo:Tree.__docgenInfo,name:"Tree",path:"../components/src/Tree/Tree.tsx#Tree"})}catch(__react_docgen_typescript_loader_error){}const onClick=(evt,item)=>console.log(evt,item),TREE_ITEMS=[{text:"Item 1",key:"item-1",menuItems:[{key:"item-1-add",text:"Add item",iconProps:{iconName:"Add"},onClick},{key:"item-1-delete",text:"Remove item",iconProps:{iconName:"Delete"},onClick}],children:[{text:"Item 1.1",key:"item-1.1",menuItems:[{key:"item-1.1-add",text:"Add item",iconProps:{iconName:"Add"},onClick},{key:"item-1.1-delete",text:"Remove item",iconProps:{iconName:"Delete"},onClick}],children:[{text:"Item 1.1.1",key:"item-1.1.1",children:[{text:"Item 1.1.1.1",key:"item-1.1.1.1"},{text:"Item 1.1.1.2",key:"item-1.1.1.2"}]},{text:"Item 1.1.2",key:"item-1.1.2"}]},{text:"Item 1.2",key:"item-1.2"},{text:"Item 1.3",key:"item-1.3"}]},{text:"Item 2",key:"item-2",iconName:"TableComputed",children:[{text:"Item 2.1",key:"item-2.1",iconName:"Database",children:[{text:"Item 2.1.1",key:"item-2.1.1",iconName:"Calendar",children:[{text:"Item 2.1.1.1",key:"item-2.1.1.1",iconName:"Document"},{text:"Item 2.1.1.2",key:"item-2.1.1.2",iconName:"Home"}]},{text:"Item 2.1.2",key:"item-2.1.2",iconName:"Table"}]},{text:"Item 2.2",key:"item-2.2",iconName:"LightningBolt"},{text:"Item 2.3",key:"item-2.3",iconName:"LightningBolt"}]},{text:"Item 3",key:"item-3",children:[{key:"item-3.1",text:"Item 3.1"}]},{text:"Item 4",key:"item-4"}],containerStyle={display:"flex",gap:20},boxStyle={width:300,height:400,border:"1px solid orange",overflowY:"scroll"},Tree_stories={title:"@essex:components/Tree",component:args=>{const[selected,setSelected]=(0,react.useState)(args.selectedKey);return(0,jsx_runtime.jsxs)("div",{style:containerStyle,children:[(0,jsx_runtime.jsxs)("div",{children:["Medium size (default)",(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)(Tree,{...args,selectedKey:selected,onItemClick:item=>setSelected(item.key),onItemExpandClick:item=>console.log("expand clicked",item)})})]}),(0,jsx_runtime.jsxs)("div",{children:["Small size",(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)(Tree,{...args,size:"small",selectedKey:selected,onItemClick:item=>setSelected(item.key),onItemExpandClick:item=>console.log("expand clicked",item)})}),(0,jsx_runtime.jsx)("div",{})]})]})}},Primary={args:{items:TREE_ITEMS}},Customized={args:{items:TREE_ITEMS,styles:{listItemContent:{background:"aliceblue"},hierarchyLine:{borderColor:"transparent"},indicator:{borderRadius:3,borderWidth:3,height:3}},expandButtonProps:{expandIconName:"Add",collapseIconName:"Remove"},contentButtonProps:{styles:{label:{color:"darkorange",fontFamily:"monospace"}},iconProps:{styles:{root:{fontSize:16,color:"orange"}}}},menuButtonProps:{alwaysVisible:!0,menuIconProps:{iconName:"LightningBolt"},styles:{root:{color:"dodgerblue"},rootHovered:{color:"dodgerblue"},rootPressed:{color:"dodgerblue"},rootExpanded:{color:"dodgerblue"}},onMenuClick:e=>console.log("menu click",e),onAfterMenuDismiss:()=>console.log("menu dismiss")}}},RoutesTree=args=>{const[selected,setSelected]=(0,react.useState)(args.selectedKey);return(0,jsx_runtime.jsxs)("div",{style:containerStyle,children:[(0,jsx_runtime.jsxs)("div",{children:["Medium size (default)",(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)(Tree,{...args,selectedKey:selected,onItemClick:item=>setSelected(`${item.key}/x/z`),onItemExpandClick:item=>console.log("expand clicked",item)})})]}),(0,jsx_runtime.jsxs)("div",{children:["Small size",(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)(Tree,{...args,size:"small",selectedKey:selected,onItemClick:item=>setSelected(item.key),onItemExpandClick:item=>console.log("expand clicked",item)})}),(0,jsx_runtime.jsx)("div",{})]})]})},Routes={render:args=>(0,jsx_runtime.jsx)(RoutesTree,{...args}),args:{items:TREE_ITEMS}},NestedSelections={args:{selectedKey:"item-1.1.1",items:[{key:"item-1",text:"Item 1 (default expands to selected child)",children:[{key:"item-1.1",text:"Item 1.1",children:[{key:"item-1.1.1",text:"Item 1.1.1 (default selectedKey)",children:[{key:"item-1.1.1.1",text:"Item 1.1.1.1"}]}]}]},{key:"item-2",text:"Item 2 (default expands to expanded child)",children:[{key:"item-2.1",text:"Item 2.1",children:[{key:"item-2.1.1",text:"Item 2.1.1 (static expanded prop)",expanded:!0,children:[{key:"item-2.1.1.1",text:"Item 2.1.1.1"}]}]}]},{key:"item-3",text:"Item 3 (onClick override)",onClick:item=>console.log("click override",item)}]}},Narrow={args:{narrow:!0,items:TREE_ITEMS,styles:{root:{border:"1px solid dodgerblue",width:36}}}},Grouped={args:{items:TREE_ITEMS.map(((item,index)=>({...item,group:index<2?"group-1":index<3?"group-2":void 0}))),groups:[{key:"group-1",text:"Group 1"},{key:"group-2",text:"Group 2"}]}},customTitleRenderer=(props,defaultRenderer)=>{const item=props?.item;return(0,jsx_runtime.jsx)("div",{onClick:()=>item.onClick?.(item),style:{cursor:"pointer",width:"100%",marginTop:2,padding:4,background:"aliceblue",border:"1px solid dodgerblue"},children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:`${props?.item.text} (Custom title)`})})},CustomRenderers={args:{onRenderGroupHeader:(props,defaultRenderer)=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"group-1"===props?.group.key?(0,jsx_runtime.jsx)("div",{style:groupStyle,children:`${props.group.text} (custom)`}):defaultRenderer?.(props)}),groups:[{key:"group-1",text:"Group 1"},{key:"group-2",text:"Group 2"}],items:[{key:"item-1",text:"Item 1 (normal)",group:"group-1"},{key:"item-2",text:"Item 2",group:"group-2",children:[{key:"item-2.1",text:"Item 2.1",iconName:"Table",onRenderTitle:customTitleRenderer}],onRenderTitle:customTitleRenderer},{key:"item-3",text:"Item 3",expanded:!0,onRenderContent:(props,defaultRenderer)=>{const depth=(props?.item.depth||0)+1;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4,paddingLeft:12*depth+32},children:[(0,jsx_runtime.jsx)("div",{style:fieldStyle,children:(0,jsx_runtime.jsx)("div",{children:"Add codebook"})}),(0,jsx_runtime.jsx)("div",{style:fieldStyle,children:(0,jsx_runtime.jsx)("div",{children:"Add workflow"})})]}),defaultRenderer?.(props)]})},children:[{key:"item-3.1",text:"table.csv",iconName:"Table"}]},{key:"item-4",text:"Item 4 (no children, but custom renderer)",onRenderContent:(props,defaultRenderer)=>{const depth=(props?.item.depth||0)+1;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4,paddingLeft:12*depth+32},children:[(0,jsx_runtime.jsx)("div",{style:fieldStyle,children:(0,jsx_runtime.jsx)("div",{children:"Add codebook"})}),(0,jsx_runtime.jsx)("div",{style:fieldStyle,children:(0,jsx_runtime.jsx)("div",{children:"Add workflow"})})]}),defaultRenderer?.(props)]})}}]}},groupStyle={padding:8,background:"aliceblue",borderBottom:"2px solid dodgerblue"},fieldStyle={width:80,height:24,background:"#efefef",border:"1px dotted #ccc",borderRadius:3,fontSize:10,display:"flex",alignItems:"center",padding:4};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: TREE_ITEMS\n  }\n}",...Primary.parameters?.docs?.source}}},Customized.parameters={...Customized.parameters,docs:{...Customized.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: TREE_ITEMS,\n    styles: {\n      listItemContent: {\n        background: 'aliceblue'\n      },\n      hierarchyLine: {\n        borderColor: 'transparent'\n      },\n      indicator: {\n        borderRadius: 3,\n        borderWidth: 3,\n        height: 3\n      }\n    },\n    expandButtonProps: {\n      expandIconName: 'Add',\n      collapseIconName: 'Remove'\n    },\n    contentButtonProps: {\n      styles: {\n        label: {\n          color: 'darkorange',\n          fontFamily: 'monospace'\n        }\n      },\n      iconProps: {\n        styles: {\n          root: {\n            fontSize: 16,\n            color: 'orange'\n          }\n        }\n      }\n    },\n    menuButtonProps: {\n      alwaysVisible: true,\n      menuIconProps: {\n        iconName: 'LightningBolt'\n      },\n      styles: {\n        root: {\n          color: 'dodgerblue'\n        },\n        rootHovered: {\n          color: 'dodgerblue'\n        },\n        rootPressed: {\n          color: 'dodgerblue'\n        },\n        rootExpanded: {\n          color: 'dodgerblue'\n        }\n      },\n      onMenuClick: (e: any) => console.log('menu click', e),\n      onAfterMenuDismiss: () => console.log('menu dismiss')\n    }\n  }\n}",...Customized.parameters?.docs?.source}}},Routes.parameters={...Routes.parameters,docs:{...Routes.parameters?.docs,source:{originalSource:"{\n  render: (args: TreeProps) => <RoutesTree {...args} />,\n  args: {\n    items: TREE_ITEMS\n  }\n}",...Routes.parameters?.docs?.source}}},NestedSelections.parameters={...NestedSelections.parameters,docs:{...NestedSelections.parameters?.docs,source:{originalSource:"{\n  args: {\n    selectedKey: 'item-1.1.1',\n    items: [{\n      key: 'item-1',\n      text: 'Item 1 (default expands to selected child)',\n      children: [{\n        key: 'item-1.1',\n        text: 'Item 1.1',\n        children: [{\n          key: 'item-1.1.1',\n          text: 'Item 1.1.1 (default selectedKey)',\n          children: [{\n            key: 'item-1.1.1.1',\n            text: 'Item 1.1.1.1'\n          }]\n        }]\n      }]\n    }, {\n      key: 'item-2',\n      text: 'Item 2 (default expands to expanded child)',\n      children: [{\n        key: 'item-2.1',\n        text: 'Item 2.1',\n        children: [{\n          key: 'item-2.1.1',\n          text: 'Item 2.1.1 (static expanded prop)',\n          expanded: true,\n          children: [{\n            key: 'item-2.1.1.1',\n            text: 'Item 2.1.1.1'\n          }]\n        }]\n      }]\n    }, {\n      key: 'item-3',\n      text: 'Item 3 (onClick override)',\n      onClick: (item: any) => console.log('click override', item)\n    }]\n  }\n}",...NestedSelections.parameters?.docs?.source}}},Narrow.parameters={...Narrow.parameters,docs:{...Narrow.parameters?.docs,source:{originalSource:"{\n  args: {\n    narrow: true,\n    items: TREE_ITEMS,\n    styles: {\n      root: {\n        border: '1px solid dodgerblue',\n        width: 36\n      }\n    }\n  }\n}",...Narrow.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: TREE_ITEMS.map((item, index) => ({\n      ...item,\n      group: index < 2 ? 'group-1' : index < 3 ? 'group-2' : undefined\n    })),\n    groups: [{\n      key: 'group-1',\n      text: 'Group 1'\n    }, {\n      key: 'group-2',\n      text: 'Group 2'\n    }]\n  }\n}",...Grouped.parameters?.docs?.source}}},CustomRenderers.parameters={...CustomRenderers.parameters,docs:{...CustomRenderers.parameters?.docs,source:{originalSource:"{\n  args: {\n    onRenderGroupHeader: (props: any, defaultRenderer: any) => {\n      return <>\n                    {props?.group.key === 'group-1' ? <div style={groupStyle}>{`${props.group.text} (custom)`}</div> : defaultRenderer?.(props)}\n                </>;\n    },\n    groups: [{\n      key: 'group-1',\n      text: 'Group 1'\n    }, {\n      key: 'group-2',\n      text: 'Group 2'\n    }],\n    items: [{\n      key: 'item-1',\n      text: 'Item 1 (normal)',\n      group: 'group-1'\n    }, {\n      key: 'item-2',\n      text: 'Item 2',\n      group: 'group-2',\n      children: [{\n        key: 'item-2.1',\n        text: 'Item 2.1',\n        iconName: 'Table',\n        onRenderTitle: customTitleRenderer\n      }],\n      onRenderTitle: customTitleRenderer\n    }, {\n      key: 'item-3',\n      text: 'Item 3',\n      expanded: true,\n      onRenderContent: (props: any, defaultRenderer: any) => {\n        const depth = (props?.item.depth || 0) + 1;\n        return <div>\n                            <div style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 4,\n            padding: 4,\n            paddingLeft: depth * 12 + 32\n          }}>\n                                <div style={fieldStyle}>\n                                    <div>Add codebook</div>\n                                </div>\n                                <div style={fieldStyle}>\n                                    <div>Add workflow</div>\n                                </div>\n                            </div>\n                            {defaultRenderer?.(props)}\n                        </div>;\n      },\n      children: [{\n        key: 'item-3.1',\n        text: 'table.csv',\n        iconName: 'Table'\n      }]\n    }, {\n      key: 'item-4',\n      text: 'Item 4 (no children, but custom renderer)',\n      onRenderContent: (props: any, defaultRenderer: any) => {\n        const depth = (props?.item.depth || 0) + 1;\n        return <div>\n                            <div style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 4,\n            padding: 4,\n            paddingLeft: depth * 12 + 32\n          }}>\n                                <div style={fieldStyle}>\n                                    <div>Add codebook</div>\n                                </div>\n                                <div style={fieldStyle}>\n                                    <div>Add workflow</div>\n                                </div>\n                            </div>\n                            {defaultRenderer?.(props)}\n                        </div>;\n      }\n    }]\n  }\n}",...CustomRenderers.parameters?.docs?.source}}}}}]);