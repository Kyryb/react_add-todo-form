(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(2),s=a(4),c=a(9),o=a(1),l=(a(14),a(8)),d=a.n(l),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo,a=u.find((function(e){return e.id===t.userId}));if(void 0===a)throw new TypeError("User not found");return Object(m.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:a}),Object(m.jsx)("div",{children:t.id})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],f=function(){var e={id:0,title:"",completed:!1,userId:0},t=/^[a-zA-Z0-9\u0400-\u04FF\s]*$/,a=Object(o.useState)(O),n=Object(s.a)(a,2),i=n[0],l=n[1],d=Object(o.useState)(e),j=Object(s.a)(d,2),b=j[0],f=j[1],p=Object(o.useState)(!1),x=Object(s.a)(p,2),v=x[0],y=x[1],I=Object(o.useState)(!1),S=Object(s.a)(I,2),N=S[0],g=S[1],C=function(e,a){switch(a){default:return;case"title":var n=t.test(e.target.value)?e.target.value:b.title;return f((function(e){return Object(r.a)(Object(r.a)({},e),{},{title:n})})),void y(!1);case"userId":f((function(t){return Object(r.a)(Object(r.a)({},t),{},{userId:+e.target.value})})),g(!1)}};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(t){t.preventDefault();var a,n=Object(r.a)(Object(r.a)({},b),{},{id:(a=i,Math.max.apply(Math,Object(c.a)(a.map((function(e){return e.id}))))+1),title:b.title.trim()});y(!n.title),g(!n.userId),n.title&&n.userId&&(l((function(e){return e.concat(n)})),f(e))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Enter a title: "}),Object(m.jsx)("input",{id:"title",name:"title",placeholder:"Please enter a title",type:"text","data-cy":"titleInput",value:b.title,onChange:function(e){return C(e,"title")}}),v&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Choose a user: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",value:b.userId,onChange:function(e){return C(e,"userId")},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),u.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:i})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.00c7431f.chunk.js.map