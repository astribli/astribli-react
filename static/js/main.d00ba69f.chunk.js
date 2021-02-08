(this["webpackJsonpastribli-react"]=this["webpackJsonpastribli-react"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),n=a.n(i),s=a(4),r=a.n(s),l=(a(11),a(2));function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}var d=function(e){var t=e.categories,a=void 0===t?[]:t,n=e.setCurrentCategory,s=e.contactSelected,r=e.currentCategory,l=e.setContactSelected;return Object(i.useEffect)((function(){document.title=j(r.name)}),[r]),Object(c.jsxs)("header",{className:"flex-row px-1",children:[Object(c.jsx)("h2",{children:Object(c.jsx)("a",{"data-testid":"link",href:"/",children:"AJ Stribling"})}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"flex-row",children:[Object(c.jsx)("li",{className:"mx-2",children:Object(c.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return l(!1)},children:"About me"})}),Object(c.jsx)("li",{className:"mx-2 ".concat(s&&"navActive"),children:Object(c.jsx)("span",{onClick:function(){return l(!0)},children:"Contact"})}),a.map((function(e){return Object(c.jsx)("li",{className:"mx-1 ".concat(r.name===e.name&&!s&&"navActive"),children:Object(c.jsx)("span",{onClick:function(){n(e),l(!1)},children:j(e.name)})},e.name)}))]})})]})};var o=function(){return Object(c.jsxs)("section",{className:"my-5",children:[Object(c.jsx)("h1",{id:"about",children:"About Me"}),Object(c.jsxs)("div",{className:"my-2",children:[Object(c.jsx)("p",{children:"My name is AJ Stribling and I was born and raised in Crawfordsville, IN. By day you will see me as a Leasing Specialist in property management. By night you may see me with a camera in my hand. I am passionate about the arts and want to put that creativity into web development. Building a career in something I am passionate about is very important to me. From film and photography to coding, I will strive for greatness."}),Object(c.jsx)("p",{children:"I am currently learning about HTML, CSS, Bootstrap, Java, JQuery and APIs. I practice coding daily and I am excited to learn all the main concepts to become a full-stack developer."})]})]})},b=a(5);var h=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(""),r=Object(l.a)(s,2),j=r[0],d=r[1],o=a.name,h=a.email,m=a.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."))};return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{id:"contact",children:"Contact me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),j||(n(Object(b.a)({},e.target.name,e.target.value)),console.log("Form",a))},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:o,onBlur:u})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:u})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:u})]}),j&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:j})}),Object(c.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("address",{children:[Object(c.jsx)("a",{href:"tel:7653661316",children:"765-366-1316"}),Object(c.jsx)("a",{href:"mailto:andrewjstribling@gmail.com",children:"andrewjstribling@gmail.com"}),Object(c.jsxs)("a",{href:"https://github.com/astribli/",children:[" ",Object(c.jsx)("i",{class:"fab fa-github"}),"GitHub"]}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/andrew-stribling-0b301a92/",children:"LinkedIn"})]})})]})},m=a.p+"static/media/GrubbyLogo.eea1bca8.png",u=a.p+"static/media/run-buddy.ad00b081.png",x=a.p+"static/media/digital-marketing-meeting.c672fcf0.jpg";var O=function(){return Object(c.jsxs)("section",{id:"portfolio",children:[Object(c.jsx)("h2",{children:"Portfolio "}),Object(c.jsxs)("div",{class:"work-grid-container",children:[Object(c.jsxs)("a",{href:"https://project-sticky-bandits.github.io/The-Grubby-Gamer/",class:"Sub-My-Food grid-item",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"The Grubby Gamer"}),Object(c.jsx)("img",{src:m,className:"",style:{width:"25%",maxHeight:"350px"},alt:"gamer"})]}),Object(c.jsx)("span",{children:"HTML/CSS/JavaScript/APIs"})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"https://astribli.github.io/run-buddy/",class:"Run-Buddy grid-item",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Run Buddy"}),Object(c.jsx)("img",{src:u,className:"",style:{width:"25%",maxHeight:"350px"},alt:"gamer"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:"HTML/CSS"})})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"https://astribli.github.io/horiseon-challenge1/",class:"Horiseon grid-item",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Horiseon"}),Object(c.jsx)("img",{src:x,className:"",style:{width:"25%",maxHeight:"350px"},alt:"people working"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:"HTML/CSS"})})]})})]})]})},g=a.p+"static/media/Mullet.bc697080.jpg";var p=function(){var e=Object(i.useState)([{name:"Portfolio",description:"photos and project links to my work"}]),t=Object(l.a)(e,1)[0],a=Object(i.useState)(t[0]),n=Object(l.a)(a,2),s=n[0],r=n[1],j=Object(i.useState)(!1),b=Object(l.a)(j,2),m=b[0],u=b[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{categories:t,setCurrentCategory:r,currentCategory:s,contactSelected:m,setContactSelected:u}),Object(c.jsx)("img",{src:g,className:"",style:{width:"25%",maxHeight:"350px"},alt:"cover"}),Object(c.jsx)("main",{children:m?Object(c.jsx)(h,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(O,{currentCategory:s})]})})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),i(e),n(e),s(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.d00ba69f.chunk.js.map