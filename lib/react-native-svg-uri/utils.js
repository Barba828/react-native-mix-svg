export const camelCase = (value) =>
  value.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

/**
 * 转驼峰命名
 * @param {*} param0
 */
export const camelCaseNodeName = ({ nodeName, nodeValue }) => ({
  nodeName: camelCase(nodeName),
  nodeValue,
});

export const removePixelsFromNodeValue = ({ nodeName, nodeValue }) => ({
  nodeName,
  nodeValue: nodeValue.replace("px", ""),
});

export const transformStyle = (nodeName, nodeValue, fillProp) => {
  if (nodeName === "style") {
    return nodeValue.split(";").reduce((acc, attribute) => {
      const [property, value] = attribute.split(":");
      if (property == "") {
        return acc;
      } else {
        return {
          ...acc,
          [camelCase(property)]:
            fillProp && property === "fill" ? fillProp : value,
        };
      }
    }, {});
  }
  return null;
};

export const getEnabledAttributes = (enabledAttributes) => ({ nodeName }) =>
  enabledAttributes.includes(nodeName);

/**
 * 移除children空字符串
 * @param {*} children
 */
export const trimElementChilden = (children) => {
  for (child of children) {
    if (typeof child === "string") {
      if (child.trim().length === 0)
        children.splice(children.indexOf(child), 1);
    }
  }
};
