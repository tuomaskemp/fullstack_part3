(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),a=n(6),u=n(3),o=n(1),i=n(0),d=function(e){var t=e.submitHandler,n=e.filterValue,c=e.contactsToDisplay;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"filter shown with"}),Object(i.jsx)("form",{onSubmit:t,children:Object(i.jsx)("input",{value:n,onChange:c})})]})},s=function(e){var t=e.submitHandler,n=e.name,c=e.number,r=e.nameChangeHandler,a=e.numberChangeHandler;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var t=e.list,n=e.handleDelete;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:n(e),children:"delete"})]},e.name)}))})},b=function(e){var t=e.msg,n=e.type;if(!t)return null;var c={backgroundColor:"#5cb85c",width:"400px",padding:"10px",borderRadius:"8px",color:"white"};return"error"===n&&(c.backgroundColor="#d9534f"),Object(i.jsx)("div",{style:c,children:Object(i.jsx)("p",{children:t})})},f=n(4),j=n.n(f),h="/api/persons",m={getAll:function(){return j.a.get(h).then((function(e){return e.data}))},create:function(e){return j.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return j.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},del:function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}},p=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),f=Object(u.a)(r,2),j=f[0],h=f[1],p=Object(o.useState)(""),O=Object(u.a)(p,2),v=O[0],x=O[1],y=Object(o.useState)(0),g=Object(u.a)(y,2),C=g[0],w=g[1],D=Object(o.useState)([]),H=Object(u.a)(D,2),S=H[0],k=H[1],T=Object(o.useState)({}),A=Object(u.a)(T,2),E=A[0],I=A[1];Object(o.useEffect)((function(){m.getAll().then((function(e){c(e),k(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{msg:E.body,type:E.type}),Object(i.jsx)(d,{submitHandler:function(e){e.preventDefault();var t=n.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())}));k(t)},filterValue:v,contactsToDisplay:function(e){e.preventDefault(),x(e.target.value)}}),Object(i.jsx)(s,{submitHandler:function(e){e.preventDefault();var t,r={name:j,number:C},u=n.find((function(e){return e.name===r.name}));u?function(e){if(window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))){var t=Object(a.a)(Object(a.a)({},e),{},{number:C});m.update(e.id,t).then((function(t){var r=n.map((function(n){return n.id!==e.id?n:t}));c(r),k(r),w(0),I({body:"Contact updated successfully",type:""}),setTimeout((function(){I({})}),3e3)})).catch((function(t){I({body:"Information of ".concat(e.name," has already been removed from server"),type:"error"}),setTimeout((function(){I({})}),3e3)}))}}(u):(t=r,m.create(t).then((function(e){c(n.concat(e)),k(n.concat(e)),h(""),I({body:"Contact added successfully",type:""}),setTimeout((function(){I({})}),3e3)})).catch((function(e){I({body:e.response.data.error,type:"error"}),setTimeout((function(){I({})}),3e3)})))},name:j,number:C,nameChangeHandler:function(e){e.preventDefault(),h(e.target.value)},numberChangeHandler:function(e){e.preventDefault(),w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{list:S,handleDelete:function(e){return function(){var t=n.filter((function(t){return t.id!==e.id}));window.confirm("Delete ".concat(e.name,"?"))&&m.del(e.id).then((function(e){c(t),k(t),I({body:"Contact deleted successfully",type:""}),setTimeout((function(){I({})}),3e3)}))}}})]})};r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b9ab5392.chunk.js.map