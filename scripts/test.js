import { MiniReact } from "./MiniReact.js"

// test 
// const element = MiniReact.createElement(
//   "div",
//   { id: "foo" },
//   MiniReact.createElement("a", null, "bar"),
//   MiniReact.createElement("b")
// )

// // or 
/** @jsx MiniReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)


// objectが省略されてしまうため、console.dirを用いる
console.dir(element, { depth: null })

