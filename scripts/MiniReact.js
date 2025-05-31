// mini reactを作成していきます
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child : createTextElement(child))
    }
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodevalue: text,
      children: []
    }
  }
}

function render(element, container) {
  const dom = element.type == "TEXT_ELEMENT"
    // nodeValueを返さなければ文字が出力されないのでは
    ? document.createTextNode(element.props.nodevalue)
    : document.createElement(element.type)

  const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach(child =>
    render(child, dom))
  container.appendChild(dom)
}

export const MiniReact = {
  createElement,
  render
}

