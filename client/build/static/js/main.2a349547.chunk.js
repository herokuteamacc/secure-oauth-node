(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(26),a(8)),o=(a(27),a(28),a(19)),m=a(1),u=a(9),i=a.n(u),p=a(12),f=a(7),b=a(10),h=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:""}),c=Object(s.a)(a,2),l=c[0],o=c[1],m=l.email,u=l.password,h=function(e){o(Object(b.a)(Object(b.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(p.a)(i.a.mark((function e(a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:m,password:u},e.next=5,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,localStorage.setItem("token",c.token),t(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"text-center my-5"},"Login"),r.a.createElement("form",{onSubmit:d},r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"form-control my-3",value:m,onChange:function(e){return h(e)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"form-control my-3",value:u,onChange:function(e){return h(e)}}),r.a.createElement("button",{className:"btn btn-success btn-block"},"Submit")))},d=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),c=Object(s.a)(a,2),l=c[0],o=c[1],m=l.email,u=l.password,h=l.firstName,d=l.lastName,g=function(e){o(Object(b.a)(Object(b.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(p.a)(i.a.mark((function e(a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:m,password:u,firstName:h,lastName:d},e.next=5,fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,localStorage.setItem("token",c.token),t(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"text-center my-5"},"Register"),r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"form-control my-3",value:m,onChange:function(e){return g(e)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"form-control my-3",value:u,onChange:function(e){return g(e)}}),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"firstName",className:"form-control my-3",value:h,onChange:function(e){return g(e)}}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"lastName",className:"form-control my-3",value:d,onChange:function(e){return g(e)}}),r.a.createElement("button",{className:"btn btn-success btn-block"},"Submit")))},g=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Dashboard"))};var E=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=function(e){c(e)};return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",render:function(e){return a?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement(h,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(m.b,{exact:!0,path:"/register",render:function(e){return a?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(d,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(m.b,{exact:!0,path:"/dashboard",render:function(e){return a?r.a.createElement(g,Object.assign({},e,{setAuth:l})):r.a.createElement(m.a,{to:"/login"})}})))))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2a349547.chunk.js.map