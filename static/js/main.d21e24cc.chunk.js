(this["webpackJsonpreact-app-gor"]=this["webpackJsonpreact-app-gor"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=a(16),l=(a(99),a(23)),u=a(45),p=a(64),s=a(21),m={DELETE:"deleteProduct",SELECT_LINK:"selectLink",ADD_NEW_PRODUCT:"addNewProduct",UPDATE_PRODUCT:"updateProduct"};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={product:[{id:1,price:"449",name:"iPhone 8",description:{text:"Retina HD display",size:"4.7"},createData:"22.10.2015"},{id:2,price:"549",name:"iPhone 8 Plus",description:{text:"Retina HD display",size:"5.5"},createData:"04.12.2015"},{id:3,price:"699",name:"iPhone 11",description:{text:"Liquid Retina HD display",size:"6.1"},createData:"05.01.2018"},{id:4,price:"999",name:"iPhone Pro",description:{text:"Super Retina XDR display",size:"5.8"},createData:"13.04.2018"},{id:5,price:"1099",name:"iPhone Pro Max",description:{text:"Super Retina XDR display",size:"6.5"},createData:"21.06.2018"}],aboutProduct:null};var g=a(63),h=a(3),E=a(13),P=a(143),y=a(144),O=a(145),v=a(146),x=a(54),N=a(155),D=a(147),j=a(154),w=a(148),C=a(142),S=a(149),z=a(150),T=a(151),k=a(76),L=a.n(k),A=a(79),B=a.n(A),R=a(80),F=a.n(R),I=a(81),U=a.n(I),W=a(82),_=a.n(W),H=a(78),K=a.n(H),V=a(73);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=Object(V.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:J({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(.5),right:e.spacing(3)}}})),X=a(30),q=a(135),Z=a(137),$=a(138),Q=Object(V.a)({container:{display:"flex",flexDirection:"row",flexWrap:"wrap"},card:{minWidth:275,maxWidth:300,marginBottom:15},title:{fontSize:14},pos:{marginBottom:12}});function Y(e){var t=Q(),a=e.product,n=e.deleteProduct,i=e.selectLink;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){var c=e.name,l=e.id;return r.a.createElement("div",{className:t.container,key:l},r.a.createElement(q.a,{className:t.card},r.a.createElement(Z.a,{className:t.title},r.a.createElement(x.a,null,c)),r.a.createElement($.a,{onClick:function(){return n(l)}},"Delete"),r.a.createElement($.a,{component:o.b,to:"EditProduct/".concat(l),onClick:function(){return i(l)}},"Edit"),r.a.createElement($.a,{component:o.b,to:"ViewProduct/".concat(l),onClick:function(){return i(l)}},"View Detail")))})))}Y.defaultProps={product:{}};var ee=Object(l.b)((function(e){return{product:e.product}}),(function(e){return{deleteProduct:function(t){return e(function(e){return{type:m.DELETE,id:e}}(t))},selectLink:function(t){return e(function(e){return{type:m.SELECT_LINK,id:e}}(t))}}}))(Y),te=a(139),ae=Object(V.a)({card:{minWidth:275,maxWidth:400},content:{width:"100%",display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),ne=function(e){var t=e.aboutProduct,a=ae();if(!t)return r.a.createElement(X.a,{to:"/"});var n=t.name,i=t.price,c=t.createData,l=t.description,u=l.text,p=l.size;return r.a.createElement(q.a,{className:a.card},r.a.createElement(Z.a,null,r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Name product:"),r.a.createElement("span",null,n)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Price:"),r.a.createElement("span",null,i,"$")),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Date to get product"),r.a.createElement("span",null,c)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"About Display"),r.a.createElement("span",null,u)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Display Zise:"),r.a.createElement("span",null,p))),r.a.createElement(te.a,null,r.a.createElement($.a,{component:o.b,to:"/",type:"button"},"Go to List of Product")))};ne.defaultProps={aboutProduct:{}};var re=Object(l.b)((function(e){return{aboutProduct:e.aboutProduct}}),(function(e){return{}}))(ne),ie=a(48),ce=a(49),oe=a(52),le=a(50),ue=a(53),pe=a(152),se=Object(V.a)((function(e){return{textField:{marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(3),width:250},dense:{marginTop:19},menu:{width:200},button:{width:210,margin:"0 auto"},card:{minWidth:275,maxWidth:350,paddingBottom:20,margin:"0 auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function me(e){var t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize,o=e.handleInputChange,l=e.handleUpdateProduct,u=se();return r.a.createElement("form",null,r.a.createElement(q.a,{className:u.card},r.a.createElement(Z.a,null,r.a.createElement(pe.a,{label:"Name",type:"text",className:u.textField,value:t,name:"inputName",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"Price",type:"number",className:u.textField,value:a,name:"inputPrice",margin:"normal",onChange:o}),r.a.createElement(pe.a,{type:"date",className:u.textField,value:n,name:"inputCreate",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"About Display",type:"textArea",className:u.textField,value:i,name:"inputText",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"Display Size",type:"number",className:u.textField,value:c,name:"inputSize",margin:"normal",onChange:o})),r.a.createElement(te.a,null,r.a.createElement($.a,{type:"submit",variant:"contained",onClick:l,className:u.button},"Change product"))))}var de=function(e){function t(){var e,a;Object(ie.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(oe.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1,inputName:"",inputPrice:"",inputCreate:"",inputText:"",inputSize:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleUpdateProduct=function(e){e.preventDefault();var t=a.state,n=t.inputName,r=t.inputPrice,i=t.inputCreate,c=t.id,o=t.inputText,l=t.inputSize;(0,a.props.updateProduct)({id:c,name:n,price:r,createData:i,description:{text:o,size:l}}),a.setState({redirect:!0})},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentDidMount",value:function(){if(this.props.aboutProduct){var e=this.props.aboutProduct,t=e.name,a=e.price,n=e.createData,r=e.description,i=e.id;this.setState({inputName:t,inputPrice:a,inputCreate:n,inputText:r.text,inputSize:r.size,id:i})}}},{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(X.a,{to:"/"});if(!this.props.aboutProduct)return r.a.createElement(X.a,{to:"/"});var e=this.state,t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize;return r.a.createElement("div",null,r.a.createElement(me,{inputName:t,inputPrice:a,inputCreate:n,inputText:i,inputSize:c,handleInputChange:this.handleInputChange,handleUpdateProduct:this.handleUpdateProduct}))}}]),t}(n.Component);de.defaultProps={aboutProduct:{}};var be=Object(l.b)((function(e){return{aboutProduct:e.aboutProduct,lengthProduct:e.product}}),(function(e){return{updateProduct:function(t){return e(function(e){return{type:m.UPDATE_PRODUCT,upProd:e}}(t))}}}))(de),fe=Object(V.a)((function(e){return{textField:{marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(3),width:250},dense:{marginTop:19},menu:{width:200},button:{width:210,margin:"0 auto"},card:{minWidth:275,maxWidth:350,paddingBottom:20,margin:"0 auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function ge(e){var t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize,o=e.handleInputChange,l=e.handleSubmit,u=fe();return r.a.createElement("form",null,r.a.createElement(q.a,{className:u.card},r.a.createElement(Z.a,null,r.a.createElement(pe.a,{label:"Name",type:"text",className:u.textField,value:t,name:"inputName",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"Price",type:"number",className:u.textField,value:a,name:"inputPrice",margin:"normal",onChange:o}),r.a.createElement(pe.a,{type:"date",className:u.textField,value:n,name:"inputCreate",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"About Display",type:"textArea",className:u.textField,value:i,name:"inputText",margin:"normal",onChange:o}),r.a.createElement(pe.a,{label:"Display Size",type:"number",className:u.textField,value:c,name:"inputSize",margin:"normal",onChange:o})),r.a.createElement(te.a,null,r.a.createElement($.a,{type:"submit",variant:"contained",onClick:l,className:u.button},"Add product"))))}var he=function(e){function t(){var e,a;Object(ie.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(oe.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={inputName:"",inputPrice:"",createData:"",text:"",size:"",redirect:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.inputName,r=t.inputPrice,i=t.createData,c=t.text,o=t.size,l=a.props;(0,l.addNewProduct)({id:l.lengthProduct.length+1,name:n,price:r,createData:i,description:{text:c,size:o}}),a.setState({inputName:"",inputPrice:"",createData:"",text:"",size:"",redirect:!0})},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputName,a=e.inputPrice,n=e.createData,i=e.text,c=e.size,o=this.handleSubmit,l=this.handleInputChange;return this.state.redirect?r.a.createElement(X.a,{to:"/"}):r.a.createElement(ge,{inputName:t,inputPrice:a,createData:n,text:i,size:c,handleSubmit:o,handleInputChange:l})}}]),t}(n.Component);he.defaultProps={lengthProduct:{}};var Ee=Object(l.b)((function(e){return{aboutProduct:e.aboutProduct,lengthProduct:e.product}}),(function(e){return{addNewProduct:function(t){return e((a=t,{type:m.ADD_NEW_PRODUCT,addNewProduct:a}));var a}}}))(he);function Pe(){return r.a.createElement("div",null,r.a.createElement(X.d,null,r.a.createElement(X.b,{path:"/",exact:!0,component:ee}),r.a.createElement(X.b,{path:"/EditProduct",component:be}),r.a.createElement(X.b,{path:"/ViewProduct",component:re}),r.a.createElement(X.b,{path:"/AddNewProduct",component:Ee})))}function ye(){var e=M(),t=Object(E.a)(),a=r.a.useState(!1),n=Object(g.a)(a,2),i=n[0],c=n[1],l=r.a.useState("List of Products"),u=Object(g.a)(l,2),p=u[0],m=u[1];return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,null),r.a.createElement(y.a,{position:"fixed",className:Object(h.a)(e.appBar,Object(s.a)({},e.appBarShift,i))},r.a.createElement(O.a,null,r.a.createElement(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(h.a)(e.menuButton,i&&e.hide)},r.a.createElement(L.a,null)),r.a.createElement(x.a,{variant:"h6",noWrap:!0},p),r.a.createElement(N.a,{title:"Add","aria-label":"add",component:o.b,to:"/AddNewProduct"},r.a.createElement(D.a,{color:"secondary",className:e.absolute},r.a.createElement(K.a,null))))),r.a.createElement(j.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(v.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(B.a,null):r.a.createElement(F.a,null))),r.a.createElement(w.a,null),r.a.createElement(C.a,null,[{name:"List of Products",to:"/"}].map((function(e,t){return r.a.createElement(S.a,{button:!0,component:o.b,to:e.to,key:e.to,onClick:function(){m(e.name)}},r.a.createElement(z.a,null,t%2===0?r.a.createElement(U.a,null):r.a.createElement(_.a,null)),r.a.createElement(T.a,{primary:e.name}))})))),r.a.createElement("main",{className:Object(h.a)(e.content,Object(s.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(Pe,null)))}var Oe=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.DELETE:return b({},e,{product:e.product.filter((function(e){return e.id!==t.id}))});case m.SELECT_LINK:return b({},e,{aboutProduct:e.product.find((function(e){return e.id===t.id}))});case m.ADD_NEW_PRODUCT:return b({},e,{product:[].concat(Object(p.a)(e.product),[t.addNewProduct])});case m.UPDATE_PRODUCT:var a=t.upProd;return b({},e,{product:Object(p.a)(e.product.map((function(e){return e.id!==a.id?e:a})))});default:return e}}));c.a.render(r.a.createElement(o.a,null,r.a.createElement((function(){return r.a.createElement(l.a,{store:Oe},r.a.createElement(ye,null))}),null)),document.getElementById("root"))},94:function(e,t,a){e.exports=a(106)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.d21e24cc.chunk.js.map