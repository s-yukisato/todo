(this["webpackJsonptodo-remark"]=this["webpackJsonptodo-remark"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(8),a=o.n(s),i=(o(14),o(4)),l=(o(15),o(9)),d=o(2),r=o.n(d),u=o(0),j=function(t){var e=t.inputText,o=t.setInputText,c=t.todos,n=t.setTodos,s=t.setStatus;return Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:e,className:"todo-input",onChange:function(t){o(t.target.value)},type:"text"}),Object(u.jsx)("button",{className:"todo-button",onClick:function(t){t.preventDefault(),n([].concat(Object(l.a)(c),[{text:e,completed:!1,id:1e3*Math.random()}]))},type:"submit",children:Object(u.jsx)(r.a,{name:"add"})}),Object(u.jsx)("div",{className:"select",children:Object(u.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"completed",children:"Completed"}),Object(u.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},b=o(7),m=function(t){var e=t.text,o=t.todo,c=t.todos,n=t.setTodos;return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)("button",{onClick:function(){n(c.map((function(t){return t.id===o.id?Object(b.a)(Object(b.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:o.completed?Object(u.jsx)(r.a,{name:"checkmark"}):Object(u.jsx)(r.a,{name:"crop-outline"})}),Object(u.jsx)("button",{onClick:function(){n(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(u.jsx)(r.a,{name:"trash-outline"})})]})]})},O=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(u.jsx)("div",{className:"todo-container",children:Object(u.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(u.jsx)(m,{text:t.text,todo:t,todos:e,setTodos:o},t.id)}))})})},f=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(i.a)(s,2),l=a[0],d=a[1],r=Object(c.useState)("all"),b=Object(i.a)(r,2),m=b[0],f=b[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),h=x[0],v=x[1];Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){g(),N()}),[l,m]);var g=function(){switch(m){case"completed":v(l.filter((function(t){return t.completed})));break;case"uncompleted":v(l.filter((function(t){return!t.completed})));break;default:v(l)}},N=function(){localStorage.setItem("todos",JSON.stringify(l))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));d(t)}};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Happy Todolist !!!"})}),Object(u.jsx)(j,{inputText:o,setInputText:n,todos:l,setTodos:d,setStatus:f}),Object(u.jsx)(O,{filteredTodos:h,todos:l,setTodos:d})]})})},p=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.3cfd6df4.chunk.js.map