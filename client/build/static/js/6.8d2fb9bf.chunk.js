(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[6],{128:function(e,n,a){},129:function(e,n,a){},130:function(e,n,a){},137:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=(a(128),a(46)),i=a(9),o=a(3),c=a.n(o),s=a(47);var u=a(50);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],t=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done)&&(a.push(i.value),!n||a.length!==n);t=!0);}catch(c){r=!0,l=c}finally{try{t||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,n)||Object(u.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a(129);var p=a(44),d=a(12),b=a(13);function f(){var e=Object(d.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(d.a)(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return v=function(){return e},e}var w=Object(b.a)(v(),"black"),y=b.b.div(h()),E=b.b.input(g(),"grey","grey",w),j=b.b.label(f(),"grey",w),O=function(e){var n=e.handleInputChange,a=e.label,t=Object(p.a)(e,["handleInputChange","label"]);return r.a.createElement(y,null,r.a.createElement(E,Object.assign({onChange:n},t)),a?r.a.createElement(j,{className:t.value.length?"shrink":""},a):null)},S=a(43),x=a(23),I=a(19),N=a(14),k=Object(x.g)(Object(I.b)(null,(function(e){return{googleSigninStart:function(){return e(Object(N.c)())},emailSigninStart:function(n,a){return e(Object(N.b)({email:n,password:a}))}}}))((function(e){var n=e.emailSigninStart,a=e.googleSigninStart,o=m(Object(t.useState)({email:"",password:""}),2),u=o[0],p=o[1],d=u.email,b=u.password,f=function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(d,b),p({email:"",password:""});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(e){var n=e.target,a=n.name,t=n.value;p(Object(i.a)({},u,Object(l.a)({},a,t)))};return r.a.createElement("div",{className:"signIn"},r.a.createElement("h2",{className:"signInTitle"},"I already have an account"),r.a.createElement("span",null,"Sign in with email and password"),r.a.createElement("form",{onSubmit:f},r.a.createElement(O,{name:"email",type:"email",value:d,handleInputChange:g,label:"email"}),r.a.createElement(O,{name:"password",type:"password",value:b,handleInputChange:g,label:"password"}),r.a.createElement("div",{className:"signInButtons"},r.a.createElement(S.a,{type:"submit"},"Sign In"),r.a.createElement(S.a,{type:"button",onClick:a,isGoogle:!0},"Google"))))}))),C=(a(130),Object(I.b)(null,(function(e){return{signupStart:function(n){return e(Object(N.j)(n))}}}))((function(e){var n=e.signupStart,a=m(Object(t.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),o=a[0],u=a[1],p=o.displayName,d=o.email,b=o.password,f=o.confirmPassword,g=function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),b===f){e.next=4;break}return alert("Passwords dont match"),e.abrupt("return");case 4:n({displayName:p,email:d,password:b}),u({displayName:"",email:"",password:"",confirmPassword:""});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){var n=e.target,a=n.name,t=n.value;u(Object(i.a)({},o,Object(l.a)({},a,t)))};return r.a.createElement("div",{className:"signUp"},r.a.createElement("h2",{className:"signUpTitle"},"I don't have a account"),r.a.createElement("span",null,"Sign up with email and password"),r.a.createElement("form",{onSubmit:g},r.a.createElement(O,{name:"displayName",type:"text",value:p,handleInputChange:h,label:"Name"}),r.a.createElement(O,{name:"email",type:"email",value:d,handleInputChange:h,label:"email"}),r.a.createElement(O,{name:"password",type:"password",value:b,handleInputChange:h,label:"password"}),r.a.createElement(O,{name:"confirmPassword",type:"password",value:f,handleInputChange:h,label:"Confirm password"}),r.a.createElement("div",{className:"signUnButtons"},r.a.createElement(S.a,{type:"submit"},"Sign Up"))))})));n.default=function(){return r.a.createElement("div",{className:"signInAndSignUpPage"},r.a.createElement(k,null),r.a.createElement(C,null))}}}]);
//# sourceMappingURL=6.8d2fb9bf.chunk.js.map