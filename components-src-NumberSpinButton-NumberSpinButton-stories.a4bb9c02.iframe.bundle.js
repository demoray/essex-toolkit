/*! For license information please see components-src-NumberSpinButton-NumberSpinButton-stories.a4bb9c02.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkessex_toolkit_stories=self.webpackChunkessex_toolkit_stories||[]).push([[439],{"../components/src/NumberSpinButton/NumberSpinButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_NumberSpinButton_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/src/NumberSpinButton/NumberSpinButton.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"@essex:components/NumberSpinButton",component:_NumberSpinButton_js__WEBPACK_IMPORTED_MODULE_2__.E,args:{label:"Label",max:20}},PrimaryComponent=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((n=>setValue(n)),[setValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NumberSpinButton_js__WEBPACK_IMPORTED_MODULE_2__.E,{...args,value,onChange:handleChange})},Primary={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PrimaryComponent,{}),name:"NumberSpinButton"};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: () => <PrimaryComponent />,\n  name: 'NumberSpinButton'\n}",...Primary.parameters?.docs?.source}}}},"../components/src/NumberSpinButton/NumberSpinButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>NumberSpinButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../.yarn/__virtual__/@fluentui-react-virtual-35f457a3da/0/cache/@fluentui-react-npm-8.105.4-0150463498-5dc0521434.zip/node_modules/@fluentui/react/lib-commonjs/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const NumberSpinButton=({label,value,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER,step=1,onChange,labelPosition,incrementButtonAriaLabel,decrementButtonAriaLabel})=>{const handleChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((v=>{onChange&&v<=max&&v>=min&&onChange(v)}),[onChange,min,max]),handleIncrement=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((v=>{handleChange(parseFloat(v)+step)}),[handleChange,step]),handleDecrement=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((v=>{handleChange(parseFloat(v)-step)}),[handleChange,step]),handleValidate=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((v=>{handleChange(parseFloat(v))}),[handleChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.SpinButton,{value:value.toString(),onIncrement:handleIncrement,onDecrement:handleDecrement,onValidate:handleValidate,label,min,max,step,labelPosition,incrementButtonAriaLabel,decrementButtonAriaLabel})};try{NumberSpinButton.displayName="NumberSpinButton",NumberSpinButton.__docgenInfo={description:"NumberSpinButton creates a thematic styled SpinButton from Fluent",displayName:"NumberSpinButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(n: number) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"Position"}},incrementButtonAriaLabel:{defaultValue:null,description:"",name:"incrementButtonAriaLabel",required:!1,type:{name:"string"}},decrementButtonAriaLabel:{defaultValue:null,description:"",name:"decrementButtonAriaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/NumberSpinButton/NumberSpinButton.tsx#NumberSpinButton"]={docgenInfo:NumberSpinButton.__docgenInfo,name:"NumberSpinButton",path:"../components/src/NumberSpinButton/NumberSpinButton.tsx#NumberSpinButton"})}catch(__react_docgen_typescript_loader_error){}}}]);