
export default [
  {
    "content": "## Install\n\n```sh\nnpm install @spark-ui/button\n```\n\n## Import\n\n```js\nimport { Button } from \"@spark-ui/button\";\n```\n\n<CodeEditor code={examples.basic} />",
    "title": "Button",
    "_meta": {
      "filePath": "components/button.mdx",
      "fileName": "button.mdx",
      "directory": "components",
      "extension": "mdx",
      "path": "components/button"
    },
    "mdx": "var Component=(()=>{var p=Object.create;var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),_=(e,n)=>{for(var t in n)a(e,t,{get:n[t],enumerable:!0})},i=(e,n,t,s)=>{if(n&&typeof n==\"object\"||typeof n==\"function\")for(let r of u(n))!x.call(e,r)&&r!==t&&a(e,r,{get:()=>n[r],enumerable:!(s=h(n,r))||s.enumerable});return e};var j=(e,n,t)=>(t=e!=null?p(f(e)):{},i(n||!e||!e.__esModule?a(t,\"default\",{value:e,enumerable:!0}):t,e)),N=e=>i(a({},\"__esModule\",{value:!0}),e);var l=g((E,c)=>{c.exports=_jsx_runtime});var k={};_(k,{default:()=>m});var o=j(l());function d(e){let n={a:\"a\",code:\"code\",h2:\"h2\",pre:\"pre\",span:\"span\",...e.components},{CodeEditor:t}=n;return t||b(\"CodeEditor\",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:\"install\",children:[(0,o.jsx)(n.a,{className:\"anchor\",href:\"#install\",children:(0,o.jsx)(n.span,{className:\"icon icon-link\"})}),\"Install\"]}),`\n`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:\"language-sh\",children:`npm install @spark-ui/button\n`})}),`\n`,(0,o.jsxs)(n.h2,{id:\"import\",children:[(0,o.jsx)(n.a,{className:\"anchor\",href:\"#import\",children:(0,o.jsx)(n.span,{className:\"icon icon-link\"})}),\"Import\"]}),`\n`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:\"language-js\",children:`import { Button } from \"@spark-ui/button\";\n`})}),`\n`,(0,o.jsx)(t,{code:examples.basic})]})}function m(e={}){let{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function b(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return N(k);})();\n;return Component;",
    "category": "components",
    "slug": "button",
    "examples": {
      "basic": "\n<Button>Basic</Button>\n",
      "disabled": "\n<Button disabled>Disabled</Button>\n",
      "sizes": "\n<div className=\"flex gap-lg\">\n  <Button size=\"sm\">Button</Button>\n  <Button size=\"md\">Button</Button>\n  <Button size=\"lg\">Button</Button>\n</div>\n"
    }
  }
]