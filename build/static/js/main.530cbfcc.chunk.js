(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);a(79);var n=a(1),l=a.n(n),r=a(27),c=a.n(r),o=(a(84),a(85),a(9)),s=a.n(o),i=a(19),m=a(12),u=a(7),d=a(11),p=a(13),E=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),E=o[0],b=o[1],f=Object(p.f)(),h=function(){var e=Object(m.a)(s.a.mark(function e(t){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/login",{method:"post",body:JSON.stringify(Object(i.a)({email:a,password:a},"password",E)),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,console.log(l),"yes"===l.responseServer?(f.push("/dashboard"),console.log("Successfully Login")):console.log("user no exist"),r(""),b("");case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{show:!0,dialogClassName:"primaryModal",className:"mx-auto",size:"md",centered:!0},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mx-auto"},l.a.createElement("h1",{className:"h1-title"},"Please sign in"),l.a.createElement("div",{className:"dropdown-menu-right"},l.a.createElement("form",{className:"px-4 py-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",value:a,onChange:function(e){return r(e.target.value)},className:"form-control",id:"exampleDropdownFormEmail1",placeholder:"email@service.com"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",value:E,onChange:function(e){return b(e.target.value)},className:"form-control",id:"exampleDropdownFormPassword1",placeholder:"Password"})),l.a.createElement("div",{className:"form-group h1-title"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"dropdownCheck"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"dropdownCheck"},"Remember me"))),l.a.createElement("button",{type:"submit",onClick:h,className:"btn button-color btn-block"},"Sign in"),l.a.createElement("p",{className:"text-center font-italic font-weight-light"},"By clicking Sign In, you agree to our Terms."),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item text-center font-italic",href:"./Registration"},"No Acount? Sign up"),l.a.createElement("a",{className:"dropdown-item text-center font-italic",href:"#"},"Forgot password?")))))))},b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),E=o[0],b=o[1],f=Object(n.useState)(""),h=Object(u.a)(f,2),v=h[0],g=h[1],N=Object(n.useState)(""),y=Object(u.a)(N,2),O=y[0],x=y[1],j=Object(n.useState)(""),k=Object(u.a)(j,2),C=k[0],w=k[1],S=Object(n.useState)(""),A=Object(u.a)(S,2),I=A[0],P=A[1],F=Object(n.useState)(""),D=Object(u.a)(F,2),G=D[0],H=D[1],L=Object(n.useState)(""),T=Object(u.a)(L,2),V=T[0],B=T[1],M=(Object(p.f)(),function(){var e=Object(m.a)(s.a.mark(function e(){var t,n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/registration",{method:"post",body:JSON.stringify((t={name:a,last:E,company:v,address:O,city:C,province:I,email:G,password:a},Object(i.a)(t,"last",E),Object(i.a)(t,"company",v),Object(i.a)(t,"address",O),Object(i.a)(t,"city",C),Object(i.a)(t,"province",I),Object(i.a)(t,"email",G),Object(i.a)(t,"password",V),t)),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:l=e.sent,console.log(l);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}());return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{show:!0,dialogClassName:"primaryModal",className:"mx-auto",centered:!0,size:"lg"},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mx-auto"},l.a.createElement("h1",{className:"h1-title"},"Create your account"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom01"},"First name"),l.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},className:"form-control",id:"validationCustom01",placeholder:"Mark",required:!0})),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom02"},"Last name"),l.a.createElement("input",{type:"text",value:E,onChange:function(e){return b(e.target.value)},className:"form-control",id:"validationCustom02",placeholder:"Otto",required:!0}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom03"},"Company Name"),l.a.createElement("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)},className:"form-control",id:"validationCustom03",placeholder:"Quick Inventory",required:!0})),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom05"},"Address"),l.a.createElement("input",{type:"text",value:O,onChange:function(e){return x(e.target.value)},className:"form-control",id:"validationCustom05",placeholder:"123 Street Ave",required:!0}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom03"},"City"),l.a.createElement("input",{type:"text",value:C,onChange:function(e){return w(e.target.value)},className:"form-control",id:"validationCustom03",placeholder:"City",required:!0})),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom05"},"Province/State"),l.a.createElement("input",{type:"text",value:I,onChange:function(e){return P(e.target.value)},className:"form-control",id:"validationCustom05",placeholder:"Province/State",required:!0}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom03"},"Email"),l.a.createElement("input",{type:"text",value:G,onChange:function(e){return H(e.target.value)},className:"form-control",id:"validationCustom03",placeholder:"email@service.com",required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid email.")),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("label",{for:"validationCustom05"},"Password"),l.a.createElement("input",{type:"password",value:V,onChange:function(e){return B(e.target.value)},className:"form-control",id:"validationCustom05",placeholder:"Password",required:!0}),l.a.createElement("small",{id:"passwordHelpBlock",className:"form-text text-muted"},"Your password must be 8-20 characters long, contain letters and numbers."),l.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid password"))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"invalidCheck",required:!0}),l.a.createElement("label",{className:"form-check-label",for:"invalidCheck"},"Agree to terms and conditions"),l.a.createElement("div",{className:"invalid-feedback"},"You must agree before submitting.")))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{type:"submit",onClick:function(){return M()},className:"btn button-color marginBtn"},"Create an Account")))))))},f=a(68),h=a.n(f),v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-custom"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("span",{className:"navbar-brand mb-0 h1"},l.a.createElement("img",{src:h.a,alt:"",width:"35",height:"35",className:"d-inline-block align-top"}),"Quick Inventory"),l.a.createElement("form",{className:"d-flex"},l.a.createElement("a",{className:"btn button-color btn-block",href:"/login"},"Sign In")))))},g=a(28),N=a(47),y=a.n(N),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{id:"carouseArea"},l.a.createElement(g.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:y.a,alt:"First slide"}),l.a.createElement(g.a.Caption,null,l.a.createElement("h3",null,"No need to buy hardware"),l.a.createElement("p",null,"Add products to the inventory system by barcode, image recognition, and OCR with the Mobile Application"))),l.a.createElement(g.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:y.a,alt:"Second slide"}),l.a.createElement(g.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(g.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:y.a,alt:"Third slide"}),l.a.createElement(g.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex bd-highlight"},l.a.createElement("div",{className:"p-2 flex-fill bd-highlight"},l.a.createElement("h5",null,"Products"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Web Application"),l.a.createElement("li",{className:"list-group-item"},"Mobile Application"))),l.a.createElement("div",{className:"p-2 flex-fill bd-highlight"},l.a.createElement("h5",null,"Features"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Scan products with App"),l.a.createElement("li",{className:"list-group-item"},"Inventory Tracking"),l.a.createElement("li",{className:"list-group-item"},"Invoice and Reports"),l.a.createElement("li",{className:"list-group-item"},"Set Alarms and Notifications"),l.a.createElement("li",{className:"list-group-item"},"Upload Companay Logo"))),l.a.createElement("div",{className:"p-2 flex-fill bd-highlight"},l.a.createElement("h5",null,"Learn & Support"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"How to get App"),l.a.createElement("li",{className:"list-group-item"},"Getting Started"),l.a.createElement("li",{className:"list-group-item"},"Account Settings"),l.a.createElement("li",{className:"list-group-item"},"FAQ"),l.a.createElement("li",{className:"list-group-item"},"About")))))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v,null)),l.a.createElement("div",{className:"backgroundHome"},l.a.createElement(O,null)),l.a.createElement("div",null,l.a.createElement(x,null)))},k=a(69),C=a(6),w=a(24),S=function(e){var t=e.handleSubmit,a=e.data,r=e.flag,c=Object(n.useState)(!1),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(){i(!1)};return l.a.createElement(C.a,{onSubmit:t},l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Barcode"),l.a.createElement(C.a.Control,{type:"text",name:"barcode",value:a.barcode})),l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Name"),l.a.createElement(C.a.Control,{type:"text",name:"name",defaultValue:a.name})),l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Quantity"),l.a.createElement(C.a.Control,{type:"number",name:"quantity",defaultValue:a.quantity}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Price"),l.a.createElement(C.a.Control,{type:"number",name:"price",step:.01,precision:2,defaultValue:a.price})),l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Weight"),l.a.createElement(C.a.Control,{type:"number",name:"weight",step:.1,precision:2,defaultValue:a.weight})),l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Min. Stock"),l.a.createElement(C.a.Control,{type:"number",name:"minStock",defaultValue:a.minStock}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Description"),l.a.createElement(C.a.Control,{as:"textarea",row:3,name:"description",defaultValue:a.description}))),l.a.createElement(w.a,{onClick:function(){r&&i(!0)},variant:"primary",type:"submit",className:"btn button-color marginBtn"},"Submit"),l.a.createElement(d.a,{show:s,onHide:m,size:"sm"},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mainBackModalProduct"},l.a.createElement("p",null,"Product has been added!"),l.a.createElement(w.a,{variant:"primary",className:"btn button-color marginBtn",onClick:m},"Ok")))))},A=function(){var e=function(){var e=Object(m.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.target),(n=Object.fromEntries(a.entries())).alarm=!1,e.next=6,fetch("/addProduct",{method:"post",body:JSON.stringify({data:n}),headers:{"Content-Type":"application/json"}});case 6:e.sent,t.target.reset();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rightSection"},l.a.createElement(S,{handleSubmit:e,data:{},flag:!0})))},I=a(29),P=function(){return l.a.createElement("div",{className:"rightSection"},l.a.createElement("h1",null,"Dashboard"))},F=a(26),D=a(10),G=a(14),H=a.n(G),L=function(e){var t=e.product,a=e.listProducts,r=e.setListProducts,c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],p=o[1],E=function(){H.a.put("/updateProduct/",{payload:t}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},b=function(){var e=Object(m.a)(s.a.mark(function e(a){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=new FormData(a.target),(l=Object.fromEntries(n.entries())).alarm=t.data.alarm,t.data=l,console.log(l.quantity+" "+l.minStock),1*l.quantity<=1*l.minStock&&l.alarm&&H.a.post("/emailOOS/",{payload:t}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),E();case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t.data.barcode),l.a.createElement("td",null,t.data.name),l.a.createElement("td",{className:"center-text"},t.data.quantity),l.a.createElement("td",{className:"center-text"},t.data.minStock),l.a.createElement("td",{className:"center-text"},"$",t.data.price),l.a.createElement("td",{className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:function(){p(!0)}},l.a.createElement("i",null,l.a.createElement(D.d,null)))),l.a.createElement("td",{className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:function(){r(a.filter(function(e){return e._id!==t._id})),H.a.delete("/deleteProduct/".concat(t._id)).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},l.a.createElement("i",null,l.a.createElement(D.m,null)))),l.a.createElement("td",{className:"center-text",style:{backgroundColor:t.data.alarm?"red":void 0}},l.a.createElement("button",{className:"button-icon",onClick:function(){r(a.map(function(e){return e.data.barcode===t.data.barcode?(e.data.alarm=!e.data.alarm,e):e})),E()}},l.a.createElement("i",null,l.a.createElement(D.a,null))))),l.a.createElement(d.a,{show:i,onHide:function(){p(!1)},size:"lg"},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mainBackModalProduct"},l.a.createElement(S,{handleSubmit:b,data:t.data,flag:!1})))))},T=a(46),V=a(121);var B,M,R,J,q,K=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({name:"",path:""}),o=Object(u.a)(c,2),s=(o[0],o[1],Object(n.useState)(0)),i=Object(u.a)(s,2),m=i[0],d=i[1],p=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement("div",{className:"file-upload"},l.a.createElement("input",{type:"file",ref:p,onChange:function(e){d(0);var t=e.target.files[0];console.log(t),r(t)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}),l.a.createElement("div",{className:"progessBar",style:{width:m}},m),l.a.createElement("button",{onClick:function(){var e=new FormData;e.append("file",a),H.a.post("/upload",e,{onUploadProgress:function(e){var t=Math.round(e.loaded/e.total*100)+"%";d(t)}}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},className:"upbutton"},"Upload"),l.a.createElement("hr",null)))},z=[{label:"Barcode",key:"barcode"},{label:"Name",key:"name"},{label:"Quantity",key:"quantity"},{label:"Price",key:"price"},{label:"Weight",key:"weight"},{label:"Min Stock",key:"minStock"},{label:"Description",key:"description"}],U=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],p=o[1],E=Object(n.useState)(!1),b=Object(u.a)(E,2),f=b[0],h=b[1];Object(n.useEffect)(Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,H.a.get("/products");case 4:a=e.sent,r(a.data),a.data.map(function(e){t.push(e.data)}),p(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])})),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rightSection"},l.a.createElement("h1",null,"All Products"),l.a.createElement("h5",null,l.a.createElement(D.g,null),l.a.createElement("a",{onClick:function(){h(!0)}}," IMPORT \xa0\xa0"),l.a.createElement(D.e,null),l.a.createElement(d.a,{show:f,onHide:function(){h(!1)},size:"lg"},l.a.createElement(d.a.Body,null,l.a.createElement(K,null))),l.a.createElement(T.CSVLink,{data:i,headers:z,filename:"Inventory"+Object(V.a)(new Date,"MM-dd-yyyy HH:MM:SS")+".csv"},"EXPORT")),l.a.createElement(F.a,{responsive:"sm",style:{backgroundColor:"#1f1f1f"},className:"p-text"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Barcode"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{className:"center-text"},"Quantity"),l.a.createElement("th",{className:"center-text "},"Min Stock"),l.a.createElement("th",{className:"center-text"},"Price"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"Action"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"Alarms"))),l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement(L,{key:e._id,product:e,listProducts:a,setListProducts:r})})))))},Q=a(30),Z=a(31),W=a(70),Y=a(38),X=[{title:"Dashboard",path:"/dashboard",icon:l.a.createElement(W.a,null)},{title:"Inventory",icon:l.a.createElement(D.c,null),iconClosed:l.a.createElement(Y.a,null),iconOpened:l.a.createElement(Y.b,null),subNav:[{title:"List Products",path:"/inventory",icon:l.a.createElement(D.b,null),cName:"sub-nav"},{title:"Add",path:"/addProduct",icon:l.a.createElement(D.j,null),cName:"sub-nav"}]},{title:"Orders",icon:l.a.createElement(D.l,null),iconClosed:l.a.createElement(Y.a,null),iconOpened:l.a.createElement(Y.b,null),subNav:[{title:"List Orders",path:"/orders",icon:l.a.createElement(D.b,null),cName:"sub-nav"},{title:"Add",path:"/addOrder",icon:l.a.createElement(D.j,null),cName:"sub-nav"}]},{title:"Invoices",path:"/invoices",icon:l.a.createElement(D.h,null)},{title:"Set Alarms",path:"/messages",icon:l.a.createElement(D.a,null)},{title:"Suppliers",path:"/suppliers",icon:l.a.createElement(D.i,null)},{title:"Sign out",path:"/",icon:l.a.createElement(D.k,null)}],_=Object(Z.a)(I.b)(B||(B=Object(Q.a)(["\n  display: flex;\n  color: white;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  list-style: none;\n  height: 60px;\n  text-decoration: none;\n  font-size: 18px;\n\n  &:hover {\n    color:#FF6E40;\n    border-left: 4px solid #FF6E40;\n    cursor: pointer;\n    text-decoration:none;\n    font-size: 18px;\n  }\n"]))),$=Z.a.span(M||(M=Object(Q.a)(["\n  margin-left: 16px;\n"]))),ee=Object(Z.a)(I.b)(R||(R=Object(Q.a)(["\n  background: #1f1f1f;\n  height: 60px;\n  padding-left: 3rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-size: 18px;\n\n  &:hover {\n    color:#FF6E40;\n    cursor: pointer;\n    text-decoration:none;\n    font-size: 18px;\n  }\n"]))),te=function(e){var t=e.item,a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,{to:t.path,onClick:t.subNav&&function(){return o(!c)}},l.a.createElement("div",null,t.icon,l.a.createElement($,null,t.title)),l.a.createElement("div",null,t.subNav&&c?t.iconOpened:t.subNav?t.iconClosed:null)),c&&t.subNav.map(function(e,t){return l.a.createElement(ee,{to:e.path,key:t},e.icon,l.a.createElement($,null,e.title))}))},ae=a(0),ne=a(74),le=a.n(ne),re=Z.a.nav(J||(J=Object(Q.a)(["\n  background: #1f1f1f;\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 350ms;\n  z-index: 10;\n"])),function(e){return e.sidebar?"0":"-100%"}),ce=Z.a.div(q||(q=Object(Q.a)(["\n  width: 100%;\n"]))),oe=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0];t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.b.Provider,{value:{color:"#fff"}},l.a.createElement(re,{sidebar:a},l.a.createElement(ce,null,l.a.createElement("p",null),l.a.createElement("img",{src:le.a,alt:"",width:"200",height:"50",className:"d-inline-block align-top"}),l.a.createElement("p",null),X.map(function(e,t){return l.a.createElement(te,{item:e,key:t})})))))},se=function(e){var t=e.order,a=e.listOrders,r=e.setListOrders,c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],p=o[1],E=function(){p(!1)},b=function(){var e=Object(m.a)(s.a.mark(function e(){var n,l,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(a.map(function(e){return e.data.orderId===t.data.orderId?(e.data.status="Completed",e):e})),f(),n=[],l=Object.fromEntries(n.entries()),e.next=6,H.a.get("lastInvoiceId");case 6:return c=e.sent,l.invoiceId=c.data,l.order=t.data,l.company={invoiceDate:Object(V.a)(new Date,"yyyy-MM-dd"),Company:"Quick Inventory"},e.next=12,fetch("/addInvoice",{method:"post",body:JSON.stringify({data:l}),headers:{"Content-Type":"application/json"}});case 12:e.sent;case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){H.a.put("/updateOrder/",{payload:t}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",{style:{backgroundColor:"Completed"===t.data.status?"green":""}},l.a.createElement("td",null,t.data.orderId),l.a.createElement("td",null,t.data.status),l.a.createElement("td",null,t.data.customer),l.a.createElement("td",{className:"center-text"},t.data.total),l.a.createElement("td",{className:"center-text"},t.data.orderDate),l.a.createElement("td",{colSpan:"2",className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:function(){r(a.filter(function(e){return e._id!==t._id})),H.a.delete("/deleteOrder/".concat(t._id)).then(function(e){}).catch(function(e){})}},l.a.createElement("i",null,l.a.createElement(D.m,null)))),l.a.createElement("td",{colSpan:"2",className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:"Completed"===t.data.status?function(){p(!0)}:b},l.a.createElement("i",null,l.a.createElement(D.n,null))))),l.a.createElement(d.a,{show:i,onHide:E,size:"sm"},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mainBackModalProduct"},l.a.createElement("p",null,"Invoice has been already created"),l.a.createElement(w.a,{variant:"primary",className:"btn button-color marginBtn",onClick:E},"Ok")))))},ie=[{label:"Order ID",key:"orderId"},{label:"Status",key:"status"},{label:"Customer",key:"customer"},{label:"Amount",key:"amount"},{label:"Date",key:"orderDate"}],me=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],p=o[1],E=Object(n.useState)(!1),b=Object(u.a)(E,2),f=b[0],h=b[1];Object(n.useEffect)(Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,H.a.get("/orders");case 4:a=e.sent,r(a.data),a.data.map(function(e){t.push(e.data)}),p(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])})),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rightSection"},l.a.createElement("h1",null,"All Orders"),l.a.createElement("h5",null,l.a.createElement(D.g,null),l.a.createElement("a",{onClick:function(){h(!0)}}," IMPORT \xa0\xa0"),l.a.createElement(D.e,null),l.a.createElement(d.a,{show:f,onHide:function(){h(!1)},size:"lg"},l.a.createElement(d.a.Body,null,l.a.createElement(K,null))),l.a.createElement(T.CSVLink,{data:i,headers:ie,filename:"Orders"+Object(V.a)(new Date,"MM-dd-yyyy HH:MM:SS")+".csv"},"EXPORT")),l.a.createElement(F.a,{responsive:"sm",style:{backgroundColor:"#1f1f1f"},className:"p-text"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Order Id"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",{className:"center-text "},"Amount"),l.a.createElement("th",{className:"center-text"},"Date"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"Remove"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"Create Invoice"))),l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement(se,{key:e._id,order:e,listOrders:a,setListOrders:r})})))))},ue=a(76),de=a(75),pe=function(e){var t=e.product,a=e.prodAdded,n=e.setProdAdded;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t.barcode),l.a.createElement("td",null,t.name),l.a.createElement("td",{className:"center-text"},t.price),l.a.createElement("td",{className:"center-text"},l.a.createElement("input",{type:"number",defaultValue:t.quantity,style:{backgroundColor:"#1f1f1f",width:"20%",color:"white",textAlign:"center"},onChange:function(e){var l=(t.price*e.target.value).toFixed(2);n(a.map(function(a){return a.barcode===t.barcode?Object(de.a)({},a,{quantity:e.target.value,total:l}):a}))}})),l.a.createElement("td",{className:"center-text"},"$",t.total),l.a.createElement("td",{className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:function(e){e.preventDefault(),n(a.filter(function(e){return e.barcode!==t.barcode}))}},l.a.createElement("i",null,l.a.createElement(D.m,null))))))},Ee=function(e){var t=e.prodAdded,a=e.setProdAdded;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{responsive:"sm",style:{backgroundColor:"#1f1f1f"},className:"p-text"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Barcode"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{className:"center-text"},"Cost"),l.a.createElement("th",{className:"center-text "},"Quantity"),l.a.createElement("th",{className:"center-text"},"Total"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"Remove"))),l.a.createElement("tbody",null,t.map(function(e){return l.a.createElement(pe,{key:e._id,product:e,prodAdded:t,setProdAdded:a})}))))},be=function(e){var t=e.handleSubmit,a=e.data,r=e.flag,c=e.listProducts,o=e.setListProducts,s=e.prodAdded,i=e.setProdAdded,m=e.orderId,p=Object(n.useState)(!1),E=Object(u.a)(p,2),b=E[0],f=E[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),g=v[0],N=v[1],y=function(){f(!1)};return l.a.createElement(C.a,{onSubmit:t},l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Order ID"),l.a.createElement(C.a.Control,{type:"text",name:"orderId",defaultValue:m})),l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Date"),l.a.createElement(C.a.Control,{type:"date",name:"orderDate",value:void 0===a.orderDate?Object(V.a)(new Date,"yyyy-MM-dd"):a.orderDate}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Customer"),l.a.createElement(C.a.Control,{type:"text",name:"customer",defaultValue:a.customer}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:k.a},l.a.createElement(C.a.Label,null,"Note (Optional)"),l.a.createElement(C.a.Control,{as:"textarea",row:3,name:"note",defaultValue:a.note}))),l.a.createElement(C.a.Row,{className:"align-items-center"},l.a.createElement(k.a,{xs:"md",className:"my-1"},l.a.createElement(C.a.Control,{as:"select",placeholder:"Select",className:"mr-sm-2",onChange:function(e){var t=e.nativeEvent.target.selectedIndex,a=e.nativeEvent.target[t].text,n=e.target.value.split(",");N({name:a,barcode:n[0],price:n[1],quantity:1,total:n[1]}),o(c.filter(function(e){return e.barcode!==n[0]}))}},l.a.createElement("option",{key:"090909",value:"0"},"Select product",""),c.map(function(e,t){return l.a.createElement("option",{key:t,value:Array(e.data.barcode,e.data.price)},e.data.name)}))),l.a.createElement(k.a,{xs:"auto",className:"my-1"},l.a.createElement(w.a,{className:"btn button-color marginBtn",variant:"outline-secondary",onClick:function(){i([].concat(Object(ue.a)(s),[g]))}},"Add"))),l.a.createElement("hr",{className:"hrStyling"}),l.a.createElement("div",{style:{marginTop:"1%"}},l.a.createElement(Ee,{prodAdded:s,setProdAdded:i})),l.a.createElement(w.a,{onClick:function(){r&&f(!0)},variant:"primary",type:"submit",className:"btn button-color marginBtn"},"Create Order"),l.a.createElement(d.a,{show:b,onHide:y,size:"sm"},l.a.createElement(d.a.Body,null,l.a.createElement("div",{className:"mainBackModalProduct"},l.a.createElement("p",null,"Order has been created!"),l.a.createElement(w.a,{variant:"primary",className:"btn button-color marginBtn",onClick:y},"Ok")))))},fe=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],d=o[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),b=E[0],f=E[1],h=function(){var e=Object(m.a)(s.a.mark(function e(t){var a,n,l,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.target),(n=Object.fromEntries(a.entries())).status="In Progress",n.products=i,l=i.reduce(function(e,t){return e+parseFloat(t.total)},0),n.total=l.toFixed(2),console.log(n),e.next=10,fetch("/addOrder",{method:"post",body:JSON.stringify({data:n}),headers:{"Content-Type":"application/json"}});case 10:r=e.sent,console.log(r.response),t.target.reset(),d([]),v();case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("/products");case 3:t=e.sent,r(t.data),v(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),[]);var v=function(){var e=Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("/lastOrderId");case 3:t=e.sent,f(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rightSection"},l.a.createElement(be,{handleSubmit:h,data:{},flag:!0,listProducts:a,setListProducts:r,prodAdded:i,setProdAdded:d,orderId:b})))},he=function(e){var t=e.invoice;e.listInvoices;console.log("invoice:",t);var a=function(){var e=Object(m.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:H.a.post("/createPdf/",{payload:t}).then(function(e){console.log(e),window.open(e.data.path,"_blank")}).catch(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t.data.invoiceId),l.a.createElement("td",null,t.data.order.customer),l.a.createElement("td",{className:"center-text"},t.data.order.orderDate),l.a.createElement("td",{className:"center-text"},t.data.company.invoiceDate),l.a.createElement("td",{className:"center-text"},t.data.order.total),l.a.createElement("td",{className:"center-text"},l.a.createElement("button",{className:"button-icon",onClick:a},l.a.createElement("i",null,l.a.createElement(D.f,null))))))},ve=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,H.a.get("/invoices");case 4:a=e.sent,r(a.data),a.data.map(function(e){t.push(e.data)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])})),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rightSection"},l.a.createElement("h1",null,"Invoices"),l.a.createElement(F.a,{responsive:"sm",style:{backgroundColor:"#1f1f1f"},className:"p-text"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Invoice Id"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",{className:"center-text"},"Order Date"),l.a.createElement("th",{className:"center-text"},"Invoice Date"),l.a.createElement("th",{className:"center-text"},"Amount"),l.a.createElement("th",{colSpan:"2",className:"center-text"},"See PDF"))),l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement(he,{key:e._id,invoice:e,listInvoices:a})})))))};var ge=function(){return l.a.createElement(I.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:j}),l.a.createElement(p.a,{path:"/login",component:E}),l.a.createElement(p.a,{path:"/registration",component:b}),l.a.createElement("div",null,l.a.createElement(oe,null),l.a.createElement(p.a,{path:"/dashboard",component:P}),l.a.createElement(p.a,{path:"/addProduct",component:A}),l.a.createElement(p.a,{path:"/inventory",component:U}),l.a.createElement(p.a,{path:"/orders",component:me}),l.a.createElement(p.a,{path:"/addOrder",component:fe}),l.a.createElement(p.a,{path:"/invoices",component:ve}))))},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};a(118);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),Ne()},47:function(e,t,a){e.exports=a.p+"static/media/barcodeMobile.8b4322c1.jpeg"},68:function(e,t){e.exports="data:image/jpeg;base64,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"},74:function(e,t,a){e.exports=a.p+"static/media/logoName.430f5f74.JPG"},78:function(e,t,a){e.exports=a(119)},84:function(e,t,a){},85:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.530cbfcc.chunk.js.map