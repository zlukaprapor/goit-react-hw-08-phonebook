"use strict";(self.webpackChunkreactstart=self.webpackChunkreactstart||[]).push([[489],{6489:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),a=n(2791),l=n(2978),o=n(1566),i=n(3329),u={form:{width:320,margin:"auto"},label:{display:"flex",flexDirection:"column",marginBottom:15}};function s(){var e=(0,l.I0)(),t=(0,a.useState)(""),n=(0,r.Z)(t,2),s=n[0],c=n[1],f=(0,a.useState)(""),d=(0,r.Z)(f,2),m=d[0],h=d[1],p=(0,l.v9)(o.um.getErrorLogin),y=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return c(r);case"password":return h(r);default:return}};return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Sign in to Phonebook"}),p&&(0,i.jsx)("p",{children:p}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(o.r5.logIn({email:s,password:m})),c(""),h("")},style:u.form,autoComplete:"off",children:[(0,i.jsxs)("label",{style:u.label,children:["Email",(0,i.jsx)("input",{type:"email",name:"email",value:s,onChange:y})]}),(0,i.jsxs)("label",{style:u.label,children:["Password",(0,i.jsx)("input",{type:"password",name:"password",value:m,onChange:y})]}),(0,i.jsx)("button",{type:"submit",children:"Sign in"})]})]})}},885:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(u){i=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=489.d57dc8e2.chunk.js.map