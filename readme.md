# react-native-mix-svg

### 1.将*.svg文件至于react-native-mix-svg/assets/SVG文件夹下
```
│
└─ assets ─
         │─ SVG
               │─ *.svg
```
### 2.node运行脚本执行xml->string转换
```shell
node *./lib/getSvg.js
```

## DEMO
```js
import React, { Component } from 'react';
import { View } from 'react-native';
import Svg from './react-native-mix-svg/';

export default class SvgDemo extends Component {
  render () {
    return (
      <View>
        <Svg icon="timer" size="200" color={} style={} />
        <Svg icon={require('./react-native-mix-svg/assets/SVG/ufo.svg')} />
        <Svg icon={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }} />
      </View>
    );
  }
}
```


