
export default [
  {
    "content": "# Button\n\nButton component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.\n\n## Install\n\n```sh\nnpm install @spark-ui/button\n```\n\n## Import\n\n```js\nimport { Button } from \"@spark-ui/button\";\n```\n\n## Props\n\n<PropsTable docgen={docgen[\"Button\"]} />\n\n## Usage\n\n### Default\n\n<CodeEditor code={examples.basic} />\n\n### Variant\n\nUse `variant` prop to set the different look and feels of a button.\n\n<CodeEditor code={examples.variant} />\n\n### Disabled\n\nUse `disable` prop to disable the element.\n\n<CodeEditor code={examples.disabled} />\n\n### Icons\n\nCompose the content of the button using the `Icon` component to add an icon to the left or right.\n\n<CodeEditor code={examples.basic} />\n\n### Intent\n\nUse `intent` prop to set the color intent of a button.\n\n<CodeEditor code={examples.intent} />\n\n### Loading\n\nUse the `isLoading` prop to render the button in loading state.\nThis will prepend a spinner inside the button.\n\nIt preserves the width of your button to avoid content layout shifting.\n\n**a11y tip: use `loadingLabel` to set an accessible aria-label for when the button is in loading state.**\n\n<CodeEditor code={examples.loading} />\n\n#### Loading with text\n\nAlternatively, use `loadingText` if you prefer the loading text to be visible to the user (**Warning: using this might cause layout shifting**)\n\n<CodeEditor code={examples.loadingText} />\n\n### Shapes\n\nUse `shape` prop to set the shape of a button.\n\n<CodeEditor code={examples.shape} />\n\n### Sizes\n\nUse `size` prop to set the size of a button.\n\n<CodeEditor code={examples.size} />\n\n## Advanced usage\n\n### Link\n\nUse `asChild` so that the button takes the html tag and props of its direct child element.\nIn this example, if you need your button to be a link.\n\nThis polymorphic behaviour can be used with any type of HTML element.\n\n<CodeEditor code={examples.link} />\n\n### Toggle\n\nUse `aria-pressed` to transform the button into a toggle button.\n\n<CodeEditor code={examples.toggle} />\n\n## Accessibility\n\nThis component adheres to the [`button` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/button).",
    "title": "Button",
    "_meta": {
      "filePath": "components/button.mdx",
      "fileName": "button.mdx",
      "directory": "components",
      "extension": "mdx",
      "path": "components/button"
    },
    "mdx": "var Component=(()=>{var m=Object.create;var s=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var N=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),x=(i,e)=>{for(var a in e)s(i,a,{get:e[a],enumerable:!0})},t=(i,e,a,o)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let c of g(e))!b.call(i,c)&&c!==a&&s(i,c,{get:()=>e[c],enumerable:!(o=u(e,c))||o.enumerable});return i};var k=(i,e,a)=>(a=i!=null?m(f(i)):{},t(e||!i||!i.__esModule?s(a,\"default\",{value:i,enumerable:!0}):a,i)),y=i=>t(s({},\"__esModule\",{value:!0}),i);var r=N((I,l)=>{l.exports=_jsx_runtime});var v={};x(v,{default:()=>p});var n=k(r());function h(i){let e={a:\"a\",code:\"code\",h1:\"h1\",h2:\"h2\",h3:\"h3\",h4:\"h4\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",...i.components},{CodeEditor:a,PropsTable:o}=e;return a||d(\"CodeEditor\",!0),o||d(\"PropsTable\",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:\"button\",children:\"Button\"}),`\n`,(0,n.jsx)(e.p,{children:\"Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.\"}),`\n`,(0,n.jsxs)(e.h2,{id:\"install\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#install\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Install\"]}),`\n`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:\"language-sh\",children:`npm install @spark-ui/button\n`})}),`\n`,(0,n.jsxs)(e.h2,{id:\"import\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#import\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Import\"]}),`\n`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:\"language-js\",children:`import { Button } from \"@spark-ui/button\";\n`})}),`\n`,(0,n.jsxs)(e.h2,{id:\"props\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#props\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Props\"]}),`\n`,(0,n.jsx)(o,{docgen:docgen.Button}),`\n`,(0,n.jsxs)(e.h2,{id:\"usage\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#usage\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Usage\"]}),`\n`,(0,n.jsxs)(e.h3,{id:\"default\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#default\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Default\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"variant\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#variant\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Variant\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"variant\"}),\" prop to set the different look and feels of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.variant}),`\n`,(0,n.jsxs)(e.h3,{id:\"disabled\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#disabled\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Disabled\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"disable\"}),\" prop to disable the element.\"]}),`\n`,(0,n.jsx)(a,{code:examples.disabled}),`\n`,(0,n.jsxs)(e.h3,{id:\"icons\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#icons\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Icons\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Compose the content of the button using the \",(0,n.jsx)(e.code,{children:\"Icon\"}),\" component to add an icon to the left or right.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"intent\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#intent\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Intent\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"intent\"}),\" prop to set the color intent of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.intent}),`\n`,(0,n.jsxs)(e.h3,{id:\"loading\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#loading\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Loading\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use the \",(0,n.jsx)(e.code,{children:\"isLoading\"}),` prop to render the button in loading state.\nThis will prepend a spinner inside the button.`]}),`\n`,(0,n.jsx)(e.p,{children:\"It preserves the width of your button to avoid content layout shifting.\"}),`\n`,(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.strong,{children:[\"a11y tip: use \",(0,n.jsx)(e.code,{children:\"loadingLabel\"}),\" to set an accessible aria-label for when the button is in loading state.\"]})}),`\n`,(0,n.jsx)(a,{code:examples.loading}),`\n`,(0,n.jsxs)(e.h4,{id:\"loading-with-text\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#loading-with-text\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Loading with text\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Alternatively, use \",(0,n.jsx)(e.code,{children:\"loadingText\"}),\" if you prefer the loading text to be visible to the user (\",(0,n.jsx)(e.strong,{children:\"Warning: using this might cause layout shifting\"}),\")\"]}),`\n`,(0,n.jsx)(a,{code:examples.loadingText}),`\n`,(0,n.jsxs)(e.h3,{id:\"shapes\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#shapes\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Shapes\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"shape\"}),\" prop to set the shape of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.shape}),`\n`,(0,n.jsxs)(e.h3,{id:\"sizes\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#sizes\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Sizes\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"size\"}),\" prop to set the size of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.size}),`\n`,(0,n.jsxs)(e.h2,{id:\"advanced-usage\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#advanced-usage\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Advanced usage\"]}),`\n`,(0,n.jsxs)(e.h3,{id:\"link\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#link\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Link\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"asChild\"}),` so that the button takes the html tag and props of its direct child element.\nIn this example, if you need your button to be a link.`]}),`\n`,(0,n.jsx)(e.p,{children:\"This polymorphic behaviour can be used with any type of HTML element.\"}),`\n`,(0,n.jsx)(a,{code:examples.link}),`\n`,(0,n.jsxs)(e.h3,{id:\"toggle\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#toggle\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Toggle\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"aria-pressed\"}),\" to transform the button into a toggle button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.toggle}),`\n`,(0,n.jsxs)(e.h2,{id:\"accessibility\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#accessibility\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"This component adheres to the \",(0,n.jsxs)(e.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/button\",children:[(0,n.jsx)(e.code,{children:\"button\"}),\" role requirements\"]}),\".\"]})]})}function p(i={}){let{wrapper:e}=i.components||{};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(h,{...i})}):h(i)}function d(i,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+i+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return y(v);})();\n;return Component;",
    "url": "/docs/components/button",
    "slugAsParams": [
      "components",
      "button"
    ],
    "headings": [
      {
        "level": 1,
        "text": "Button",
        "id": "button"
      },
      {
        "level": 2,
        "text": "Install",
        "id": "install"
      },
      {
        "level": 2,
        "text": "Import",
        "id": "import"
      },
      {
        "level": 2,
        "text": "Props",
        "id": "props"
      },
      {
        "level": 2,
        "text": "Usage",
        "id": "usage"
      },
      {
        "level": 3,
        "text": "Default",
        "id": "default"
      },
      {
        "level": 3,
        "text": "Variant",
        "id": "variant"
      },
      {
        "level": 3,
        "text": "Disabled",
        "id": "disabled"
      },
      {
        "level": 3,
        "text": "Icons",
        "id": "icons"
      },
      {
        "level": 3,
        "text": "Intent",
        "id": "intent"
      },
      {
        "level": 3,
        "text": "Loading",
        "id": "loading"
      },
      {
        "level": 4,
        "text": "Loading with text",
        "id": "loading-with-text"
      },
      {
        "level": 3,
        "text": "Shapes",
        "id": "shapes"
      },
      {
        "level": 3,
        "text": "Sizes",
        "id": "sizes"
      },
      {
        "level": 2,
        "text": "Advanced usage",
        "id": "advanced-usage"
      },
      {
        "level": 3,
        "text": "Link",
        "id": "link"
      },
      {
        "level": 3,
        "text": "Toggle",
        "id": "toggle"
      },
      {
        "level": 2,
        "text": "Accessibility",
        "id": "accessibility"
      }
    ],
    "examples": {
      "basic": "\n<Button>Basic</Button>\n",
      "disabled": "\n<Button disabled>Disabled</Button>\n",
      "intent": "\n<div className=\"inline-flex w-full flex-wrap gap-md\">\n  <Button intent=\"main\">\n    main button\n  </Button>\n  <Button intent=\"support\">\n    support button\n  </Button>\n  <Button intent=\"accent\">\n    accent button\n  </Button>\n  <Button intent=\"basic\">\n    basic button\n  </Button>\n  <Button intent=\"success\">\n    success button\n  </Button>\n  <Button intent=\"alert\">\n    alert button\n  </Button>\n  <Button intent=\"danger\">\n    danger button\n  </Button>\n  <Button intent=\"info\">\n    info button\n  </Button>\n  <Button intent=\"neutral\">\n    neutral button\n  </Button>\n  <Button intent=\"surface\">\n    surface button\n  </Button>\n</div>\n",
      "link": "\n<Button asChild>\n  <a href=\"/\">\n    Link\n  </a>\n</Button>\n",
      "loading": "\n<Button isLoading>Button</Button>\n",
      "loadingText": "\n<Button loadingText=\"Loading\" isLoading>Button</Button>\n",
      "shape": "\n<div className=\"flex gap-lg\">\n  <Button shape=\"rounded\">Button</Button>\n  <Button shape=\"square\">Button</Button>\n  <Button shape=\"pill\">Button</Button>\n</div>\n",
      "size": "\n() => {\n  return (\n    <div className=\"flex gap-lg\">\n      <Button size=\"sm\">Button</Button>\n      <Button size=\"md\">Button</Button>\n      <Button size=\"lg\">Button</Button>\n    </div>\n  )\n}\n",
      "toggle": "\n() => {\n  const [pressed, setPressed] = React.useState(false);\n  const toggle = () => setPressed(!pressed);\n\n  return (\n    <Button aria-pressed={pressed} onClick={toggle} design={pressed ? 'filled' : 'outlined'}>\n      Toggle\n      {pressed && (\n        <Icon>\n          <FiCheck />\n        </Icon>\n      )}\n    </Button>\n  )\n}\n",
      "variant": "\n<div className=\"flex flex-wrap gap-md\">\n  <Button variant=\"solid\">\n    Solid\n  </Button>\n  <Button variant=\"outlined\">\n    Outlined\n  </Button>\n  <Button variant=\"ghost\">\n    Ghost\n  </Button>\n  <Button variant=\"contrast\">\n    Contrast\n  </Button>\n</div>\n"
    },
    "docgen": {
      "Button": {
        "tags": {},
        "filePath": "src/button/index.tsx",
        "description": "",
        "displayName": "Button",
        "methods": [],
        "props": {
          "asChild": {
            "defaultValue": null,
            "description": "Change the component to the HTML tag or custom component of the only child.",
            "name": "asChild",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "isLoading": {
            "defaultValue": null,
            "description": "Display a spinner to indicate to the user that the button is loading something after they interacted with it.",
            "name": "isLoading",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "loadingLabel": {
            "defaultValue": null,
            "description": "If your loading state should only display a spinner, it's better to specify a label for it (a11y).",
            "name": "loadingLabel",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "string"
            }
          },
          "loadingText": {
            "defaultValue": null,
            "description": "If your loading state should also display a label, you can use this prop instead of `loadingLabel`.\n**Please note that using this can result in layout shifting when the Button goes from loading state to normal state.**",
            "name": "loadingText",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "string"
            }
          },
          "disabled": {
            "defaultValue": null,
            "description": "",
            "name": "disabled",
            "declarations": [],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "variant": {
            "defaultValue": null,
            "description": "",
            "name": "variant",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"solid\" | \"outlined\" | \"ghost\" | \"contrast\"",
              "value": [
                {
                  "value": "\"solid\""
                },
                {
                  "value": "\"outlined\""
                },
                {
                  "value": "\"ghost\""
                },
                {
                  "value": "\"contrast\""
                }
              ]
            }
          },
          "intent": {
            "defaultValue": null,
            "description": "",
            "name": "intent",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"main\" | \"support\" | \"accent\" | \"basic\" | \"success\" | \"alert\" | \"danger\" | \"info\" | \"neutral\" | \"surface\"",
              "value": [
                {
                  "value": "\"main\""
                },
                {
                  "value": "\"support\""
                },
                {
                  "value": "\"accent\""
                },
                {
                  "value": "\"basic\""
                },
                {
                  "value": "\"success\""
                },
                {
                  "value": "\"alert\""
                },
                {
                  "value": "\"danger\""
                },
                {
                  "value": "\"info\""
                },
                {
                  "value": "\"neutral\""
                },
                {
                  "value": "\"surface\""
                }
              ]
            }
          },
          "size": {
            "defaultValue": {
              "value": "md"
            },
            "description": "",
            "name": "size",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"sm\" | \"md\" | \"lg\"",
              "value": [
                {
                  "value": "\"sm\""
                },
                {
                  "value": "\"md\""
                },
                {
                  "value": "\"lg\""
                }
              ]
            }
          },
          "shape": {
            "defaultValue": null,
            "description": "",
            "name": "shape",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"rounded\" | \"square\" | \"pill\"",
              "value": [
                {
                  "value": "\"rounded\""
                },
                {
                  "value": "\"square\""
                },
                {
                  "value": "\"pill\""
                }
              ]
            }
          }
        }
      }
    }
  },
  {
    "content": "# IconButton\n\nIcon button renders an icon within in a button\n\n## Install\n\n```sh\nnpm install @spark-ui/icon-button\n```\n\n## Import\n\n```tsx\nimport { IconButton } from \"@spark-ui/icon-button\";\n```\n\n## Props\n\n## usage\n\n### Default\n\n<CodeEditor code={examples.basic} />\n\n### Design\n\nUse `design` prop to set the different look and feels of a button.\n\n<CodeEditor code={examples.basic} />\n\n### Disabled\n\nUse `disabled` prop to disable the element.\n\n<CodeEditor code={examples.basic} />\n\n### Intent\n\nUse `intent` prop to set the color intent of a button.\n\n<CodeEditor code={examples.basic} />\n\n### Loading\n\nUse the isLoading prop to render the button in loading state. This will prepend a spinner inside the button.\n\na11y tip: use loadingLabel to set an accessible aria-label for when the button is in loading state.\n\n<CodeEditor code={examples.basic} />\n\n### Shapes\n\nUse `shape` prop to set the shape of a button.\n\n<CodeEditor code={examples.basic} />\n\n### Sizes\n\nUse `size` prop to set the size of a button.\n\n<CodeEditor code={examples.basic} />\n\n## Advanced usage\n\n### Link\n\nUse `asChild` so that the button takes the html tag and props of its direct child element.\nIn this example, if you need your button to be a link.\n\nThis polymorphic behaviour can be used with any type of HTML element.\n\nIf you do decide to change the underlying element type, it is your\nresponsibility to ensure it remains accessible and functional. In the case of\nTooltip.Trigger for example, it must be a focusable element that can respond\nto pointer and keyboard events. If you were to switch it to a div, it would no\nlonger be accessible.\n\n<CodeEditor code={examples.basic} />\n\n### Toggle\n\nUse `aria-pressed` to transform the button into a toggle button.\n\n<CodeEditor code={examples.basic} />\n\n## Accessibility\n\nThis component adheres to the [`button` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/button). In this specific usecase it is strongly recommended to define an accessible name through `aria-label` or `aria-labelledby` attributes.\n\n### Keyboard Interactions\n\n- Space: Activates the button\n- Enter: Activates the button",
    "title": "IconButton",
    "_meta": {
      "filePath": "components/icon-button.mdx",
      "fileName": "icon-button.mdx",
      "directory": "components",
      "extension": "mdx",
      "path": "components/icon-button"
    },
    "mdx": "var Component=(()=>{var p=Object.create;var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var g=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),N=(i,e)=>{for(var a in e)s(i,a,{get:e[a],enumerable:!0})},t=(i,e,a,o)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let c of u(e))!f.call(i,c)&&c!==a&&s(i,c,{get:()=>e[c],enumerable:!(o=m(e,c))||o.enumerable});return i};var k=(i,e,a)=>(a=i!=null?p(b(i)):{},t(e||!i||!i.__esModule?s(a,\"default\",{value:i,enumerable:!0}):a,i)),y=i=>t(s({},\"__esModule\",{value:!0}),i);var r=g((v,l)=>{l.exports=_jsx_runtime});var w={};N(w,{default:()=>h});var n=k(r());function d(i){let e={a:\"a\",code:\"code\",h1:\"h1\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...i.components},{CodeEditor:a}=e;return a||x(\"CodeEditor\",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:\"iconbutton\",children:\"IconButton\"}),`\n`,(0,n.jsx)(e.p,{children:\"Icon button renders an icon within in a button\"}),`\n`,(0,n.jsxs)(e.h2,{id:\"install\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#install\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Install\"]}),`\n`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:\"language-sh\",children:`npm install @spark-ui/icon-button\n`})}),`\n`,(0,n.jsxs)(e.h2,{id:\"import\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#import\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Import\"]}),`\n`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:\"language-tsx\",children:`import { IconButton } from \"@spark-ui/icon-button\";\n`})}),`\n`,(0,n.jsxs)(e.h2,{id:\"props\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#props\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Props\"]}),`\n`,(0,n.jsxs)(e.h2,{id:\"usage\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#usage\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"usage\"]}),`\n`,(0,n.jsxs)(e.h3,{id:\"default\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#default\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Default\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"design\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#design\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Design\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"design\"}),\" prop to set the different look and feels of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"disabled\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#disabled\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Disabled\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"disabled\"}),\" prop to disable the element.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"intent\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#intent\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Intent\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"intent\"}),\" prop to set the color intent of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"loading\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#loading\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Loading\"]}),`\n`,(0,n.jsx)(e.p,{children:\"Use the isLoading prop to render the button in loading state. This will prepend a spinner inside the button.\"}),`\n`,(0,n.jsx)(e.p,{children:\"a11y tip: use loadingLabel to set an accessible aria-label for when the button is in loading state.\"}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"shapes\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#shapes\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Shapes\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"shape\"}),\" prop to set the shape of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"sizes\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#sizes\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Sizes\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"size\"}),\" prop to set the size of a button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h2,{id:\"advanced-usage\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#advanced-usage\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Advanced usage\"]}),`\n`,(0,n.jsxs)(e.h3,{id:\"link\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#link\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Link\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"asChild\"}),` so that the button takes the html tag and props of its direct child element.\nIn this example, if you need your button to be a link.`]}),`\n`,(0,n.jsx)(e.p,{children:\"This polymorphic behaviour can be used with any type of HTML element.\"}),`\n`,(0,n.jsx)(e.p,{children:`If you do decide to change the underlying element type, it is your\nresponsibility to ensure it remains accessible and functional. In the case of\nTooltip.Trigger for example, it must be a focusable element that can respond\nto pointer and keyboard events. If you were to switch it to a div, it would no\nlonger be accessible.`}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h3,{id:\"toggle\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#toggle\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Toggle\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"Use \",(0,n.jsx)(e.code,{children:\"aria-pressed\"}),\" to transform the button into a toggle button.\"]}),`\n`,(0,n.jsx)(a,{code:examples.basic}),`\n`,(0,n.jsxs)(e.h2,{id:\"accessibility\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#accessibility\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),`\n`,(0,n.jsxs)(e.p,{children:[\"This component adheres to the \",(0,n.jsxs)(e.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/button\",children:[(0,n.jsx)(e.code,{children:\"button\"}),\" role requirements\"]}),\". In this specific usecase it is strongly recommended to define an accessible name through \",(0,n.jsx)(e.code,{children:\"aria-label\"}),\" or \",(0,n.jsx)(e.code,{children:\"aria-labelledby\"}),\" attributes.\"]}),`\n`,(0,n.jsxs)(e.h3,{id:\"keyboard-interactions\",children:[(0,n.jsx)(e.a,{className:\"anchor\",href:\"#keyboard-interactions\",children:(0,n.jsx)(e.span,{className:\"icon icon-link\"})}),\"Keyboard Interactions\"]}),`\n`,(0,n.jsxs)(e.ul,{children:[`\n`,(0,n.jsx)(e.li,{children:\"Space: Activates the button\"}),`\n`,(0,n.jsx)(e.li,{children:\"Enter: Activates the button\"}),`\n`]})]})}function h(i={}){let{wrapper:e}=i.components||{};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(d,{...i})}):d(i)}function x(i,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+i+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return y(w);})();\n;return Component;",
    "url": "/docs/components/icon-button",
    "slugAsParams": [
      "components",
      "icon-button"
    ],
    "headings": [
      {
        "level": 1,
        "text": "IconButton",
        "id": "iconbutton"
      },
      {
        "level": 2,
        "text": "Install",
        "id": "install"
      },
      {
        "level": 2,
        "text": "Import",
        "id": "import"
      },
      {
        "level": 2,
        "text": "Props",
        "id": "props"
      },
      {
        "level": 2,
        "text": "usage",
        "id": "usage"
      },
      {
        "level": 3,
        "text": "Default",
        "id": "default"
      },
      {
        "level": 3,
        "text": "Design",
        "id": "design"
      },
      {
        "level": 3,
        "text": "Disabled",
        "id": "disabled"
      },
      {
        "level": 3,
        "text": "Intent",
        "id": "intent"
      },
      {
        "level": 3,
        "text": "Loading",
        "id": "loading"
      },
      {
        "level": 3,
        "text": "Shapes",
        "id": "shapes"
      },
      {
        "level": 3,
        "text": "Sizes",
        "id": "sizes"
      },
      {
        "level": 2,
        "text": "Advanced usage",
        "id": "advanced-usage"
      },
      {
        "level": 3,
        "text": "Link",
        "id": "link"
      },
      {
        "level": 3,
        "text": "Toggle",
        "id": "toggle"
      },
      {
        "level": 2,
        "text": "Accessibility",
        "id": "accessibility"
      },
      {
        "level": 3,
        "text": "Keyboard Interactions",
        "id": "keyboard-interactions"
      }
    ],
    "examples": {
      "basic": "\n<Button>Basic</Button>\n",
      "disabled": "\n<Button disabled>Disabled</Button>\n",
      "sizes": "\n<div className=\"flex gap-lg\">\n  <Button size=\"sm\">Button</Button>\n  <Button size=\"md\">Button</Button>\n  <Button size=\"lg\">Button</Button>\n</div>\n"
    },
    "docgen": {
      "IconButton": {
        "tags": {},
        "filePath": "src/icon-button/index.tsx",
        "description": "",
        "displayName": "IconButton",
        "methods": [],
        "props": {
          "aria-label": {
            "defaultValue": null,
            "description": "Defines a string value that labels the current element.",
            "name": "aria-label",
            "parent": {
              "fileName": "ui/src/icon-button/icon-button.tsx",
              "name": "IconButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/icon-button/icon-button.tsx",
                "name": "IconButtonProps"
              }
            ],
            "required": true,
            "type": {
              "name": "string"
            }
          },
          "disabled": {
            "defaultValue": {
              "value": false
            },
            "description": "",
            "name": "disabled",
            "declarations": [],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "variant": {
            "defaultValue": {
              "value": "solid"
            },
            "description": "",
            "name": "variant",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"solid\" | \"outlined\" | \"ghost\" | \"contrast\"",
              "value": [
                {
                  "value": "\"solid\""
                },
                {
                  "value": "\"outlined\""
                },
                {
                  "value": "\"ghost\""
                },
                {
                  "value": "\"contrast\""
                }
              ]
            }
          },
          "intent": {
            "defaultValue": {
              "value": "main"
            },
            "description": "",
            "name": "intent",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"main\" | \"support\" | \"accent\" | \"basic\" | \"success\" | \"alert\" | \"danger\" | \"info\" | \"neutral\" | \"surface\"",
              "value": [
                {
                  "value": "\"main\""
                },
                {
                  "value": "\"support\""
                },
                {
                  "value": "\"accent\""
                },
                {
                  "value": "\"basic\""
                },
                {
                  "value": "\"success\""
                },
                {
                  "value": "\"alert\""
                },
                {
                  "value": "\"danger\""
                },
                {
                  "value": "\"info\""
                },
                {
                  "value": "\"neutral\""
                },
                {
                  "value": "\"surface\""
                }
              ]
            }
          },
          "size": {
            "defaultValue": {
              "value": "md"
            },
            "description": "",
            "name": "size",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"sm\" | \"md\" | \"lg\"",
              "value": [
                {
                  "value": "\"sm\""
                },
                {
                  "value": "\"md\""
                },
                {
                  "value": "\"lg\""
                }
              ]
            }
          },
          "shape": {
            "defaultValue": {
              "value": "rounded"
            },
            "description": "",
            "name": "shape",
            "declarations": [],
            "required": false,
            "type": {
              "name": "enum",
              "raw": "\"rounded\" | \"square\" | \"pill\"",
              "value": [
                {
                  "value": "\"rounded\""
                },
                {
                  "value": "\"square\""
                },
                {
                  "value": "\"pill\""
                }
              ]
            }
          },
          "asChild": {
            "defaultValue": null,
            "description": "Change the component to the HTML tag or custom component of the only child.",
            "name": "asChild",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "isLoading": {
            "defaultValue": null,
            "description": "Display a spinner to indicate to the user that the button is loading something after they interacted with it.",
            "name": "isLoading",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "boolean"
            }
          },
          "loadingLabel": {
            "defaultValue": null,
            "description": "If your loading state should only display a spinner, it's better to specify a label for it (a11y).",
            "name": "loadingLabel",
            "parent": {
              "fileName": "ui/src/button/button.tsx",
              "name": "ButtonProps"
            },
            "declarations": [
              {
                "fileName": "ui/src/button/button.tsx",
                "name": "ButtonProps"
              }
            ],
            "required": false,
            "type": {
              "name": "string"
            }
          }
        }
      }
    }
  }
]