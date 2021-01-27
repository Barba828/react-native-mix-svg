# react-native-mix-svg

## DEMO

```js
import React, { Component } from "react";
import { View } from "react-native";
import SvgIcon from "./react-native-mix-svg/";

export default class SvgDemo extends Component {
  render() {
    return (
      <View>
        <Svg icon="story" size={24} color="#444444" style={{}} />
        <Svg icon={require("./react-native-mix-svg/assets/SVG/ufo.svg")} />
        <Svg
          icon={{
            uri:
              "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg",
          }}
        />
      </View>
    );
  }
}
```

### 参数

| 属性  |           简介            |
| ----- | :-----------------------: |
| icon  | 图标名称（\*.svg 文件名） |
| size  |         图标大小          |
| color |           颜色            |
| style |           样式            |

## 使用

1. 克隆项目到本地

2. 安装 svg 支持

```sh
yarn react-native-svg
or
npm install react-native-svg --save
```

## 新增 SVG 图标

1. 将\*.svg 文件至于 react-native-mix-svg/assets/SVG 文件夹下

```
│
└─ assets ─
         │─ SVG
               │─ *.svg
```

2. node 运行脚本将\*.svg 转化为 icon 对象

```sh
node ./lib/getSvg.js
```
