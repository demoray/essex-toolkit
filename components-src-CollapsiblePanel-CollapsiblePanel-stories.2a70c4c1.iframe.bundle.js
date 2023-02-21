/*! For license information please see components-src-CollapsiblePanel-CollapsiblePanel-stories.2a70c4c1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkessex_toolkit_stories=self.webpackChunkessex_toolkit_stories||[]).push([[461],{"../components/src/CollapsiblePanel/CollapsiblePanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CollapsiblePanelContainerStory:()=>CollapsiblePanelContainerStory,Controlled:()=>Controlled,Customized:()=>Customized,Header:()=>Header,IconClick:()=>IconClick,NoIcon:()=>NoIcon,Primary:()=>Primary,default:()=>CollapsiblePanel_stories});var jsx_runtime=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),lib_commonjs=__webpack_require__("../../.yarn/__virtual__/@fluentui-react-virtual-35f457a3da/0/cache/@fluentui-react-npm-8.105.4-0150463498-5dc0521434.zip/node_modules/@fluentui/react/lib-commonjs/index.js"),react=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function isPercentage(height){return"string"==typeof height&&"%"===height[height.length-1]&&function isNumber(n){const number=parseFloat(n);return!isNaN(number)&&isFinite(number)}(height.substring(0,height.length-1))}function hideContent(element,height){0===height&&(null==element?void 0:element.style)&&(element.style.display="none")}const ANIMATION_STATE_CLASSES={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function getStaticStateClasses(animationStateClasses,height){return[animationStateClasses.static,0===height&&animationStateClasses.staticHeightZero,height>0&&animationStateClasses.staticHeightSpecific,"auto"===height&&animationStateClasses.staticHeightAuto].filter((v=>v)).join(" ")}const esm=_a=>{var{animateOpacity=!1,animationStateClasses={},applyInlineTransitions=!0,children,className="",contentClassName,delay:userDelay=0,duration:userDuration=500,easing="ease",height,onHeightAnimationEnd,onHeightAnimationStart,style}=_a,props=__rest(_a,["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style"]);const prevHeight=(0,react.useRef)(height),contentElement=(0,react.useRef)(null),animationClassesTimeoutID=(0,react.useRef)(),timeoutID=(0,react.useRef)(),stateClasses=(0,react.useRef)(Object.assign(Object.assign({},ANIMATION_STATE_CLASSES),animationStateClasses)),isBrowser="undefined"!=typeof window,prefersReducedMotion=(0,react.useRef)(!(!isBrowser||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches),delay=prefersReducedMotion.current?0:userDelay,duration=prefersReducedMotion.current?0:userDuration;let initHeight=height,initOverflow="visible";"number"==typeof initHeight?(initHeight=height<0?0:height,initOverflow="hidden"):isPercentage(initHeight)&&(initHeight="0%"===height?0:height,initOverflow="hidden");const[currentHeight,setCurrentHeight]=(0,react.useState)(initHeight),[overflow,setOverflow]=(0,react.useState)(initOverflow),[useTransitions,setUseTransitions]=(0,react.useState)(!1),[animationStateClassNames,setAnimationStateClassNames]=(0,react.useState)(getStaticStateClasses(stateClasses.current,height));(0,react.useEffect)((()=>{hideContent(contentElement.current,currentHeight)}),[]),(0,react.useEffect)((()=>{if(height!==prevHeight.current&&contentElement.current){!function showContent(element,height){0===height&&(null==element?void 0:element.style)&&(element.style.display="")}(contentElement.current,prevHeight.current),contentElement.current.style.overflow="hidden";const contentHeight=contentElement.current.offsetHeight;contentElement.current.style.overflow="";const totalDuration=duration+delay;let newHeight,timeoutHeight,timeoutUseTransitions,timeoutOverflow="hidden";const isCurrentHeightAuto="auto"===prevHeight.current;"number"==typeof height?(newHeight=height<0?0:height,timeoutHeight=newHeight):isPercentage(height)?(newHeight="0%"===height?0:height,timeoutHeight=newHeight):(newHeight=contentHeight,timeoutHeight="auto",timeoutOverflow=void 0),isCurrentHeightAuto&&(timeoutHeight=newHeight,newHeight=contentHeight);const newAnimationStateClassNames=[stateClasses.current.animating,("auto"===prevHeight.current||height<prevHeight.current)&&stateClasses.current.animatingUp,("auto"===height||height>prevHeight.current)&&stateClasses.current.animatingDown,0===timeoutHeight&&stateClasses.current.animatingToHeightZero,"auto"===timeoutHeight&&stateClasses.current.animatingToHeightAuto,timeoutHeight>0&&stateClasses.current.animatingToHeightSpecific].filter((v=>v)).join(" "),timeoutAnimationStateClasses=getStaticStateClasses(stateClasses.current,timeoutHeight);setCurrentHeight(newHeight),setOverflow("hidden"),setUseTransitions(!isCurrentHeightAuto),setAnimationStateClassNames(newAnimationStateClassNames),clearTimeout(timeoutID.current),clearTimeout(animationClassesTimeoutID.current),isCurrentHeightAuto?(timeoutUseTransitions=!0,timeoutID.current=setTimeout((()=>{setCurrentHeight(timeoutHeight),setOverflow(timeoutOverflow),setUseTransitions(timeoutUseTransitions),null==onHeightAnimationStart||onHeightAnimationStart(timeoutHeight)}),50),animationClassesTimeoutID.current=setTimeout((()=>{setUseTransitions(!1),setAnimationStateClassNames(timeoutAnimationStateClasses),hideContent(contentElement.current,timeoutHeight),null==onHeightAnimationEnd||onHeightAnimationEnd(timeoutHeight)}),totalDuration)):(null==onHeightAnimationStart||onHeightAnimationStart(newHeight),timeoutID.current=setTimeout((()=>{setCurrentHeight(timeoutHeight),setOverflow(timeoutOverflow),setUseTransitions(!1),setAnimationStateClassNames(timeoutAnimationStateClasses),"auto"!==height&&hideContent(contentElement.current,newHeight),null==onHeightAnimationEnd||onHeightAnimationEnd(newHeight)}),totalDuration))}return prevHeight.current=height,()=>{clearTimeout(timeoutID.current),clearTimeout(animationClassesTimeoutID.current)}}),[height]);const componentStyle=Object.assign(Object.assign({},style),{height:currentHeight,overflow:overflow||(null==style?void 0:style.overflow)});useTransitions&&applyInlineTransitions&&(componentStyle.transition=`height ${duration}ms ${easing} ${delay}ms`,(null==style?void 0:style.transition)&&(componentStyle.transition=`${style.transition}, ${componentStyle.transition}`),componentStyle.WebkitTransition=componentStyle.transition);const contentStyle={};animateOpacity&&(contentStyle.transition=`opacity ${duration}ms ${easing} ${delay}ms`,contentStyle.WebkitTransition=contentStyle.transition,0===currentHeight&&(contentStyle.opacity=0));const ariaHidden=void 0!==props["aria-hidden"]?props["aria-hidden"]:0===height;return react.createElement("div",Object.assign({},props,{"aria-hidden":ariaHidden,className:`${animationStateClassNames} ${className}`,style:componentStyle}),react.createElement("div",{className:contentClassName,style:contentStyle,ref:contentElement},children))};var merge=__webpack_require__("../../.yarn/cache/lodash-es-npm-4.17.21-b45832dfce-05cbffad6e.zip/node_modules/lodash-es/merge.js");function useIconProps(buttonProps,expanded,iconSize=10){const styles=function useIconStyles(buttonProps,size=10){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>(0,merge.Z)({root:{width:size,height:size,fontSize:size,lineHeight:size,color:theme.palette.neutralPrimary},...buttonProps?.iconProps?.styles})),[theme,buttonProps,size])}(buttonProps,iconSize);return(0,react.useMemo)((()=>(0,merge.Z)({iconProps:{iconName:expanded?"ChevronDown":"ChevronRight",styles},styles:{root:{width:2*iconSize,height:2*iconSize}}},buttonProps)),[buttonProps,expanded,styles,iconSize])}const CollapsiblePanel=({title,defaultExpanded=!1,expanded,first,last,children,onRenderHeader,onHeaderClick,onIconClick,hideIcon=!1,styles,duration=300,buttonProps})=>{const{expandedState,handleIconClick,handleIconKeyDown,handleHeaderKeyDown,handleHeaderClick}=function useEventHandlers(defaultExpanded,expanded,onHeaderClick,onIconClick){const[expandedState,setExpanded]=(0,react.useState)(defaultExpanded);(0,react.useEffect)((()=>{void 0!==expanded&&setExpanded(expanded)}),[setExpanded,expanded]);const handleIconClick=(0,react.useCallback)((()=>{onIconClick?onIconClick():void 0===expanded&&setExpanded((prev=>!prev))}),[onIconClick,setExpanded,expanded]),handleHeaderClick=(0,react.useCallback)((()=>{onHeaderClick?onHeaderClick():void 0===expanded&&setExpanded((prev=>!prev))}),[onHeaderClick,setExpanded,expanded]),handleIconKeyDown=(0,react.useCallback)((event=>"ArrowLeft"===event.key&&expandedState?handleIconClick():"ArrowRight"!==event.key||expandedState?void 0:handleIconClick()),[handleIconClick,expandedState]),handleHeaderKeyDown=(0,react.useCallback)((event=>{if("Enter"===event.key||" "===event.key)return handleHeaderClick()}),[handleHeaderClick]);return{expandedState,handleIconClick,handleIconKeyDown,handleHeaderKeyDown,handleHeaderClick}}(defaultExpanded,expanded,onHeaderClick,onIconClick),_styles=function useStyles(styles,expanded,first,last){const theme=(0,lib_commonjs.useTheme)();return(0,react.useMemo)((()=>({root:{...styles?.root},header:{background:theme.palette.neutralLighter,paddingTop:2,paddingBottom:2,paddingLeft:4,width:"100%",display:"flex",alignContent:"center",cursor:"pointer",borderTop:first?"":`1px solid ${theme.palette.neutralTertiaryAlt}`,borderBottom:last||expanded?`1px solid ${theme.palette.neutralTertiaryAlt}`:"",...styles?.header},titleContainer:{display:"flex",alignItems:"center",width:"100%",...styles?.titleContainer},title:{fontSize:"0.8em",...styles?.title},content:{width:"100%",border:expanded?`1px solid ${theme.palette.neutralLighter}`:"none",...styles?.content}})),[theme,styles,expanded,first,last])}(styles,expandedState,first,last),_buttonProps=useIconProps(buttonProps,expandedState);return(0,jsx_runtime.jsxs)("div",{style:_styles.root,children:[(0,jsx_runtime.jsxs)("div",{style:_styles.header,children:[!hideIcon&&(0,jsx_runtime.jsx)(lib_commonjs.IconButton,{title:expandedState?"collapse":"expand",onKeyDown:handleIconKeyDown,onClick:handleIconClick,..._buttonProps}),(0,jsx_runtime.jsx)("div",{role:"button",tabIndex:onHeaderClick?0:void 0,onKeyDown:handleHeaderKeyDown,onClick:handleHeaderClick,style:_styles.titleContainer,children:onRenderHeader?onRenderHeader():(0,jsx_runtime.jsx)("div",{style:_styles.title,children:title})})]}),(0,jsx_runtime.jsx)("div",{style:_styles.content,children:(0,jsx_runtime.jsx)(esm,{duration,height:expandedState?"auto":0,children})})]})};try{CollapsiblePanel.displayName="CollapsiblePanel",CollapsiblePanel.__docgenInfo={description:"CollapsiblePanel displays a Header and its child\nthat collapse and expands with keyboard arrows, space, enter or onclick\nshowing the 'hidden' rendering",displayName:"CollapsiblePanel",props:{title:{defaultValue:null,description:"Title for the panel",name:"title",required:!1,type:{name:"string"}},defaultExpanded:{defaultValue:{value:"false"},description:"If true the initial state will be expanded",name:"defaultExpanded",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"Optional boolean to control the state outside this component",name:"expanded",required:!1,type:{name:"boolean"}},first:{defaultValue:null,description:"If it's the first element of the panel it applies a different style",name:"first",required:!1,type:{name:"boolean"}},last:{defaultValue:null,description:"If it's the last element of the panel it applies a different style",name:"last",required:!1,type:{name:"boolean"}},onRenderHeader:{defaultValue:null,description:"Optional function to render a different header than the default.\nNote that if you supply a custom header renderer with interactive controls,\nyou may need to call e.stopPropagation in their click handlers to prevent\nunwanted expand/collapse behavior.",name:"onRenderHeader",required:!1,type:{name:"IRenderFunction<any>"}},onHeaderClick:{defaultValue:null,description:"Optional function to respond to clicks in the general header area.",name:"onHeaderClick",required:!1,type:{name:"() => void"}},onIconClick:{defaultValue:null,description:"Optional function to respond to clicks on the expand/collapse icon directly.",name:"onIconClick",required:!1,type:{name:"() => void"}},styles:{defaultValue:null,description:"Custom styles for the subcomponents",name:"styles",required:!1,type:{name:"CollapsiblePanelStyles"}},duration:{defaultValue:{value:"300"},description:"Duration of the expand/collapse content animation.",name:"duration",required:!1,type:{name:"number"}},hideIcon:{defaultValue:{value:"false"},description:"Hide the expand/collapse icon entirely. It is visible by default.",name:"hideIcon",required:!1,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"Custom props for the expand/collapse icon button.",name:"buttonProps",required:!1,type:{name:"IButtonProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/CollapsiblePanel/CollapsiblePanel.tsx#CollapsiblePanel"]={docgenInfo:CollapsiblePanel.__docgenInfo,name:"CollapsiblePanel",path:"../components/src/CollapsiblePanel/CollapsiblePanel.tsx#CollapsiblePanel"})}catch(__react_docgen_typescript_loader_error){}const CollapsiblePanelContainer=({styles,children})=>{const countChildren=react.Children.count(children),rendered=(0,react.useMemo)((()=>react.Children.map(children,((child,index)=>(0,react.cloneElement)(child,{first:0===index,last:countChildren===index-1})))),[children,countChildren]);return(0,jsx_runtime.jsx)("div",{style:styles?.root,children:rendered})};try{CollapsiblePanelContainer.displayName="CollapsiblePanelContainer",CollapsiblePanelContainer.__docgenInfo={description:"Receives an array of CollapsiblePanel as children to render it\nwith first and last props calculating it automatically",displayName:"CollapsiblePanelContainer",props:{styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"{ root?: CSSProperties; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/CollapsiblePanel/CollapsiblePanelContainer.tsx#CollapsiblePanelContainer"]={docgenInfo:CollapsiblePanelContainer.__docgenInfo,name:"CollapsiblePanelContainer",path:"../components/src/CollapsiblePanel/CollapsiblePanelContainer.tsx#CollapsiblePanelContainer"})}catch(__react_docgen_typescript_loader_error){}const CollapsiblePanel_stories={title:"@essex:components/CollapsiblePanel",component:CollapsiblePanel,args:{title:"Header title"}},Lorem=()=>(0,jsx_runtime.jsx)("div",{style:{padding:4,width:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Primary={render:args=>(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,children:(0,jsx_runtime.jsx)(Lorem,{})})},Customized={render:args=>(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,children:(0,jsx_runtime.jsx)(Lorem,{})}),args:{defaultExpanded:!0,styles:{root:{width:300},header:{backgroundColor:"aliceblue",padding:"0.5rem",textTransform:"uppercase",fontWeight:500,fontSize:" 1.5rem"},title:{fontFamily:"monospace"},content:{border:"none",backgroundColor:"purple",color:"white",padding:10,borderRadius:"0 0 0.5rem 0.5rem"}},buttonProps:{iconProps:{iconName:"RedEye",styles:{root:{color:"orange"}}}},duration:2e3}},Header={render:args=>(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,children:(0,jsx_runtime.jsx)(Lorem,{})}),args:{onRenderHeader:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,jsx_runtime.jsx)("div",{children:"Header"}),(0,jsx_runtime.jsx)(lib_commonjs.Toggle,{styles:{root:{margin:0}},onClick:e=>e.stopPropagation()})]})},name:"Custom onRenderHeader"},IconClick={render:args=>(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,children:(0,jsx_runtime.jsx)(Lorem,{})}),args:{onHeaderClick:()=>alert("header clicked")},name:"Icon/header separate click"},ControlledComponent=args=>{const[expanded,setExpanded]=(0,react.useState)(!1),onHeaderClick=(0,react.useCallback)((()=>setExpanded((prev=>!prev))),[setExpanded]);return(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,expanded,onIconClick:onHeaderClick,children:(0,jsx_runtime.jsx)(Lorem,{})})},Controlled={render:args=>(0,jsx_runtime.jsx)(ControlledComponent,{...args}),name:"Controlled expand/collapse"},NoIcon={render:args=>(0,jsx_runtime.jsx)(CollapsiblePanel,{...args,children:(0,jsx_runtime.jsx)(Lorem,{})}),args:{hideIcon:!0}},CollapsiblePanelContainerStory={render:()=>(0,jsx_runtime.jsxs)(CollapsiblePanelContainer,{children:[(0,jsx_runtime.jsx)(CollapsiblePanel,{title:"First",children:(0,jsx_runtime.jsx)(Lorem,{})}),(0,jsx_runtime.jsx)(CollapsiblePanel,{title:"Second",children:(0,jsx_runtime.jsx)(Lorem,{})})]}),name:"Container with multiple children"};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => {\n    return <CollapsiblePanel {...args}>\n                <Lorem />\n            </CollapsiblePanel>;\n  }\n}",...Primary.parameters?.docs?.source}}},Customized.parameters={...Customized.parameters,docs:{...Customized.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => {\n    return <CollapsiblePanel {...args}>\n                <Lorem />\n            </CollapsiblePanel>;\n  },\n  args: {\n    defaultExpanded: true,\n    styles: {\n      root: {\n        width: 300\n      },\n      header: {\n        backgroundColor: 'aliceblue',\n        padding: '0.5rem',\n        textTransform: ('uppercase' as const),\n        fontWeight: 500,\n        fontSize: ' 1.5rem'\n      },\n      title: {\n        fontFamily: 'monospace'\n      },\n      content: {\n        border: 'none',\n        backgroundColor: 'purple',\n        color: 'white',\n        padding: 10,\n        borderRadius: '0 0 0.5rem 0.5rem'\n      }\n    },\n    buttonProps: {\n      iconProps: {\n        iconName: 'RedEye',\n        styles: {\n          root: {\n            color: 'orange'\n          }\n        }\n      }\n    },\n    duration: 2000\n  }\n}",...Customized.parameters?.docs?.source}}},Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => {\n    return <CollapsiblePanel {...args}>\n                <Lorem />\n            </CollapsiblePanel>;\n  },\n  args: {\n    onRenderHeader: () => <div style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: 8\n    }}>\n                <div>Header</div>\n                <Toggle styles={{\n        root: {\n          margin: 0\n        }\n      }} onClick={e => e.stopPropagation()} />\n            </div>\n  },\n  name: 'Custom onRenderHeader'\n}",...Header.parameters?.docs?.source}}},IconClick.parameters={...IconClick.parameters,docs:{...IconClick.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => {\n    return <CollapsiblePanel {...args}>\n                <Lorem />\n            </CollapsiblePanel>;\n  },\n  args: {\n    onHeaderClick: () => alert('header clicked')\n  },\n  name: 'Icon/header separate click'\n}",...IconClick.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => <ControlledComponent {...args} />,\n  name: 'Controlled expand/collapse'\n}",...Controlled.parameters?.docs?.source}}},NoIcon.parameters={...NoIcon.parameters,docs:{...NoIcon.parameters?.docs,source:{originalSource:"{\n  render: (args: CollapsiblePanelProps) => {\n    return <CollapsiblePanel {...args}>\n                <Lorem />\n            </CollapsiblePanel>;\n  },\n  args: {\n    hideIcon: true\n  }\n}",...NoIcon.parameters?.docs?.source}}},CollapsiblePanelContainerStory.parameters={...CollapsiblePanelContainerStory.parameters,docs:{...CollapsiblePanelContainerStory.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <CollapsiblePanelContainer>\n                <CollapsiblePanel title="First">\n                    <Lorem />\n                </CollapsiblePanel>\n                <CollapsiblePanel title="Second">\n                    <Lorem />\n                </CollapsiblePanel>\n            </CollapsiblePanelContainer>;\n  },\n  name: \'Container with multiple children\'\n}',...CollapsiblePanelContainerStory.parameters?.docs?.source}}}}}]);