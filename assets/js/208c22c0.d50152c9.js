"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3671],{10884:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","source":"@site/tutorial/tutorial-extras/manage-docs-versions.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/manage-docs-versions","permalink":"/chatbot-workshop/tutorial/tutorial-extras/manage-docs-versions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Tutorial - Extras","permalink":"/chatbot-workshop/tutorial/category/tutorial---extras"},"next":{"title":"Translate your site","permalink":"/chatbot-workshop/tutorial/tutorial-extras/translate-your-site"}}');var r=o(74848),i=o(28453);const d={sidebar_position:1},t="Manage Docs Versions",a={},c=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"})}),"\n",(0,r.jsx)(s.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,r.jsx)(s.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,r.jsx)(s.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm run docusaurus workshop:version 1.0\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"docs"})," folder is copied into ",(0,r.jsx)(s.code,{children:"versioned_docs/version-1.0"})," and ",(0,r.jsx)(s.code,{children:"versions.json"})," is created."]}),"\n",(0,r.jsx)(s.p,{children:"Your docs now have 2 versions:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"1.0"})," at ",(0,r.jsx)(s.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"current"})," at ",(0,r.jsx)(s.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,r.jsx)(s.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,r.jsx)(s.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,r.jsxs)(s.p,{children:["Modify the ",(0,r.jsx)(s.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docs Version Dropdown",src:o(96617).A+"",width:"370",height:"302"})}),"\n",(0,r.jsx)(s.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,r.jsx)(s.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,r.jsx)(s.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"docs/hello.md"})," updates ",(0,r.jsx)(s.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},96617:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);