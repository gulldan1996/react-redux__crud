(this["webpackJsonpreact-app-gor"]=this["webpackJsonpreact-app-gor"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=a(14),l=(a(98),a(23)),u=a(46),p=a(43),s=a(15),m={DELETE_PRODUCT:"deleteProduct",SELECT_LINK:"selectLink",ADD_NEW_PRODUCT:"addNewProduct",UPDATE_PRODUCT:"updateProduct"};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={product:[{id:1,price:"449",name:"iPhone 8",description:{text:"Retina HD display",size:"4.7"},createData:"22.10.2015"},{id:2,price:"549",name:"iPhone 8 Plus",description:{text:"Retina HD display",size:"5.5"},createData:"04.12.2015"},{id:3,price:"699",name:"iPhone 11",description:{text:"Liquid Retina HD display",size:"6.1"},createData:"05.01.2018"},{id:4,price:"999",name:"iPhone Pro",description:{text:"Super Retina XDR display",size:"5.8"},createData:"13.04.2018"},{id:5,price:"1099",name:"iPhone Pro Max",description:{text:"Super Retina XDR display",size:"6.5"},createData:"21.06.2018"}],aboutProduct:null};var g=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.DELETE_PRODUCT:var a=t.id;return b({},e,{product:e.product.filter((function(e){return e.id!==a}))});case m.SELECT_LINK:var n=t.id;return b({},e,{aboutProduct:e.product.find((function(e){return e.id===n}))});case m.ADD_NEW_PRODUCT:var r=t.addNewProduct;return b({},e,{product:[].concat(Object(p.a)(e.product),[r])});case m.UPDATE_PRODUCT:var i=t.upProd;return b({},e,{product:Object(p.a)(e.product.map((function(e){return e.id!==i.id?e:i})))});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=a(65),h=a(3),P=a(132);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=Object(P.a)((function(e){return{root:{display:"flex"},drawerHeader:y({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),D=a(30),j=a(135),N=a(137),w=a(138),x=a(55),C=function(e){return e.product},S=function(e){return e.aboutProduct},T=function(e){return e.product.map((function(e){return{id:e}}))},z=Object(P.a)({container:{display:"flex",flexDirection:"row",flexWrap:"wrap"},card:{minWidth:275,maxWidth:300,marginBottom:15,marginRight:25},title:{fontSize:14},pos:{marginBottom:12}}),_=Object(l.b)((function(e){return{product:C(e)}}),(function(e){return{deleteProduct:function(t){return e(function(e){return{type:m.DELETE_PRODUCT,id:e}}(t))},selectLink:function(t){return e(function(e){return{type:m.SELECT_LINK,id:e}}(t))}}}))((function(e){var t=z(),a=e.product,n=e.deleteProduct,i=e.selectLink;return r.a.createElement("div",{className:t.container},0!==a.length?a.map((function(e){var a=e.name,c=e.id;return r.a.createElement("div",{key:c},r.a.createElement(j.a,{className:t.card},r.a.createElement(N.a,{className:t.title},r.a.createElement(x.a,null,a)),r.a.createElement(w.a,{onClick:function(){return n(c)}},"Delete"),r.a.createElement(w.a,{component:o.b,to:"EditProduct/".concat(c),onClick:function(){return i(c)}},"Edit"),r.a.createElement(w.a,{component:o.b,to:"ViewProduct/".concat(c),onClick:function(){return i(c)}},"View Detail")))})):r.a.createElement(j.a,null,r.a.createElement(N.a,{className:t.title},r.a.createElement(x.a,null,"You have not product"))))})),k=a(139),L=Object(P.a)({card:{minWidth:275,maxWidth:400,margin:"0 auto",marginTop:50},content:{width:"100%",display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),R=Object(l.b)((function(e){return{aboutProduct:S(e)}}))((function(e){var t=e.aboutProduct,a=L();if(!t)return r.a.createElement(D.a,{to:"/"});var n=t.name,i=t.price,c=t.createData,l=t.description,u=l.text,p=l.size;return r.a.createElement(j.a,{className:a.card},r.a.createElement(N.a,null,r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Name product:"),r.a.createElement("span",null,n)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Price:"),r.a.createElement("span",null,i,"$")),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Date to get product"),r.a.createElement("span",null,c)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"About Display"),r.a.createElement("span",null,u)),r.a.createElement(x.a,{className:a.content},r.a.createElement("span",null,"Display Size:"),r.a.createElement("span",null,p))),r.a.createElement(k.a,null,r.a.createElement(w.a,{component:o.b,to:"/",type:"button"},"Go to List of Product")))})),U=a(49),A=a(50),B=a(53),I=a(51),F=a(54),W=a(151),H=Object(P.a)((function(e){return{textField:{marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(3),width:250},dense:{marginTop:19},menu:{width:200},button:{width:210,margin:"0 auto"},card:{minWidth:275,maxWidth:350,paddingBottom:20,margin:"0 auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})),X=function(e){var t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize,o=e.handleInputChange,l=e.handleUpdateProduct,u=H();return r.a.createElement("form",null,r.a.createElement(j.a,{className:u.card},r.a.createElement(N.a,null,r.a.createElement(W.a,{label:"Name",type:"text",className:u.textField,value:t,name:"inputName",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"Price",type:"number",className:u.textField,value:a,name:"inputPrice",margin:"normal",onChange:o}),r.a.createElement(W.a,{type:"date",className:u.textField,value:n,name:"inputCreate",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"About Display",type:"textArea",className:u.textField,value:i,name:"inputText",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"Display Size",type:"number",className:u.textField,value:c,name:"inputSize",margin:"normal",onChange:o})),r.a.createElement(k.a,null,r.a.createElement(w.a,{type:"submit",variant:"contained",onClick:l,className:u.button},"Change product"))))},V=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(B.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1,inputName:"",inputPrice:"",inputCreate:"",inputText:"",inputSize:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleUpdateProduct=function(e){e.preventDefault();var t=a.state,n=t.inputName,r=t.inputPrice,i=t.inputCreate,c=t.id,o=t.inputText,l=t.inputSize;(0,a.props.updateProduct)({id:c,name:n,price:r,createData:i,description:{text:o,size:l}}),a.setState({redirect:!0})},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){if(this.props.aboutProduct){var e=this.props.aboutProduct,t=e.name,a=e.price,n=e.createData,r=e.description,i=e.id;this.setState({inputName:t,inputPrice:a,inputCreate:n,inputText:r.text,inputSize:r.size,id:i})}}},{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(D.a,{to:"/"});if(!this.props.aboutProduct)return r.a.createElement(D.a,{to:"/"});var e=this.state,t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize;return r.a.createElement("div",null,r.a.createElement(X,{inputName:t,inputPrice:a,inputCreate:n,inputText:i,inputSize:c,handleInputChange:this.handleInputChange,handleUpdateProduct:this.handleUpdateProduct}))}}]),t}(n.Component),M=Object(l.b)((function(e){return{aboutProduct:S(e)}}),(function(e){return{updateProduct:function(t){return e(function(e){return{type:m.UPDATE_PRODUCT,upProd:e}}(t))}}}))(V),K=Object(P.a)((function(e){return{textField:{marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(3),width:250},dense:{marginTop:19},menu:{width:200},button:{width:210,margin:"0 auto"},card:{minWidth:275,maxWidth:350,paddingBottom:20,margin:"0 auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function G(e){var t=e.inputName,a=e.inputPrice,n=e.inputCreate,i=e.inputText,c=e.inputSize,o=e.handleInputChange,l=e.handleSubmit,u=K();return r.a.createElement("form",null,r.a.createElement(j.a,{className:u.card},r.a.createElement(N.a,null,r.a.createElement(W.a,{label:"Name",type:"text",className:u.textField,value:t,name:"inputName",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"Price",type:"number",className:u.textField,value:a,name:"inputPrice",margin:"normal",onChange:o}),r.a.createElement(W.a,{type:"date",className:u.textField,value:n,name:"inputCreate",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"About Display",type:"textArea",className:u.textField,value:i,name:"inputText",margin:"normal",onChange:o}),r.a.createElement(W.a,{label:"Display Size",type:"number",className:u.textField,value:c,name:"inputSize",margin:"normal",onChange:o})),r.a.createElement(k.a,null,r.a.createElement(w.a,{type:"submit",variant:"contained",onClick:l,className:u.button},"Add product"))))}var J=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(B.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={inputName:"",inputPrice:"",createData:"",inputText:"",inputSize:"",redirect:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.inputName,r=t.inputPrice,i=t.createData,c=t.inputText,o=t.inputSize,l=a.props,u=l.idProduct;(0,l.addNewProduct)({id:Math.max.apply(Math,Object(p.a)(u))+1,name:n,price:r,createData:i,description:{text:c,size:o}}),a.setState({inputName:"",inputPrice:"",createData:"",inputText:"",inputSize:"",redirect:!0})},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputName,a=e.inputPrice,n=e.createData,i=e.text,c=e.size,o=this.handleSubmit,l=this.handleInputChange;return this.state.redirect?r.a.createElement(D.a,{to:"/"}):r.a.createElement(G,{inputName:t,inputPrice:a,createData:n,text:i,size:c,handleSubmit:o,handleInputChange:l})}}]),t}(n.Component),q=Object(l.b)((function(e){return{aboutProduct:S(e),idProduct:T(e)}}),(function(e){return{addNewProduct:function(t){return e((a=t,{type:m.ADD_NEW_PRODUCT,addNewProduct:a}));var a}}}))(J),Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/",exact:!0,component:_}),r.a.createElement(D.b,{path:"/EditProduct",component:M}),r.a.createElement(D.b,{path:"/ViewProduct",component:R}),r.a.createElement(D.b,{path:"/AddNewProduct",component:q})))},$=a(143),Q=a(144),Z=a(145),ee=a(154),te=a(146),ae=a(75),ne=a.n(ae),re=a(77),ie=a.n(re),ce=Object(P.a)((function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(.5),right:e.spacing(3)}}})),oe=function(e){var t=e.name,a=e.handleDrawerOpen,n=e.open,i=ce();return r.a.createElement($.a,{position:"fixed",className:Object(h.a)(i.appBar,Object(s.a)({},i.appBarShift,n))},r.a.createElement(Q.a,null,r.a.createElement(Z.a,{color:"inherit","aria-label":"open drawer",onClick:a,edge:"start",className:Object(h.a)(i.menuButton,n&&i.hide)},r.a.createElement(ne.a,null)),r.a.createElement(x.a,{variant:"h6",noWrap:!0},t),r.a.createElement(ee.a,{title:"Add","aria-label":"add",component:o.b,to:"/AddNewProduct"},r.a.createElement(te.a,{color:"secondary",className:i.absolute},r.a.createElement(ie.a,null)))))},le=a(13),ue=a(153),pe=a(147),se=a(142),me=a(148),de=a(149),be=a(150),fe=a(78),ge=a.n(fe),Ee=a(79),he=a.n(Ee),Pe=a(80),Oe=a.n(Pe),ye=a(81),ve=a.n(ye);function De(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?De(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):De(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ne=Object(P.a)((function(e){return{hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:je({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}})),we=function(e){var t=Object(le.a)(),a=Ne(),n=e.open,i=e.handleDrawerClose,c=e.handlerNamePages;return r.a.createElement(ue.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(Z.a,{onClick:i},"ltr"===t.direction?r.a.createElement(ge.a,null):r.a.createElement(he.a,null))),r.a.createElement(pe.a,null),r.a.createElement(se.a,null,[{name:"List of Products",to:"/"}].map((function(e,t){return r.a.createElement(me.a,{button:!0,component:o.b,to:e.to,key:e.to,onClick:function(){return c(e,t)}},r.a.createElement(de.a,null,t%2===0?r.a.createElement(Oe.a,null):r.a.createElement(ve.a,null)),r.a.createElement(be.a,{primary:e.name}))}))))};function xe(){var e=v(),t=r.a.useState(!1),a=Object(E.a)(t,2),n=a[0],i=a[1],c=r.a.useState("List of Products"),o=Object(E.a)(c,2),l=o[0],u=o[1];return r.a.createElement("div",{className:e.root},r.a.createElement(oe,{name:l,handleDrawerOpen:function(){i(!0)},open:n}),r.a.createElement(we,{open:n,handleDrawerClose:function(){i(!1)},handlerNamePages:function(e){u(e.name)}}),r.a.createElement("main",{className:Object(h.a)(e.content,Object(s.a)({},e.contentShift,n))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(Y,null)))}c.a.render(r.a.createElement(o.a,null,r.a.createElement((function(){return r.a.createElement(l.a,{store:g},r.a.createElement(xe,null))}),null)),document.getElementById("root"))},93:function(e,t,a){e.exports=a(105)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.82cdf856.chunk.js.map