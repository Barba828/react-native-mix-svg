import React, {Component} from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from '../lib/react-native-svg-uri/index';
import svgs from '../assets/svgs';

export default class MixSvg extends Component {
  render() {
    const {icon, color, size, style} = this.props;
    if (typeof icon === 'string') {
      //string，从js文件里读取xml文本
      let svgXmlData = svgs[icon];
      if (!svgXmlData) {
        throw new Error(`"${icon}"is null`);
      }
      return (
        <SvgUri
          width={size}
          height={size}
          svgXmlData={svgXmlData}
          fill={color}
          style={style}
        />
      );
    } else if (typeof icon === 'object' || typeof icon === 'number') {
      //object，读取uri文件
      //number，读取require文件
      if (Platform.OS === 'android') {
        throw new Error('*.svg is only for ios.Please use PropTypes.string');
      }
      return (
        <SvgUri
          width={size}
          height={size}
          source={icon}
          fill={color}
          style={style}
        />
      );
    }
  }
}

MixSvg.defaultProps = {
  size: 30,
};

/**
 * 使用PropTypes进行类型检查
 */
MixSvg.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
