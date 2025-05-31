import { MiniReact } from "../scripts/MiniReact.js";

/** @jsx MiniReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
    <div>表示できた</div>
    <button onClick={() => alert("button")}>ボタン</button>
  </div>
)

const container = document.getElementById("root")
MiniReact.render(element, container)

