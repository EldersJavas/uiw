import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface WarpProps {
  defaultTheme: {
    /** 字体大小-默认 **/
    fontSizeDefault: string;
    /** 行高-默认 **/
    lineHeightDefault: number;
    /** 背景颜色-基础-active **/
    borderColorBaseActive: string;
    /** 圆角颜色-基础 **/
    borderColorBase: string;
    /** 背景色-基础 **/
    backgroundColorBase: string;
    /** 字体颜色-基础 **/
    colorBase: string;
    /** 上边框颜色-组件 **/
    borderTopColorCardFooter: string;
    /** 字体颜色-组件 **/
    colorCardFooter: string;
  };
}

const Warp = styled.div<WarpProps>`
  background: ${(props) => props.theme.backgroundColorBase};
  border-radius: 5px;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightDefault')};
  position: relative;
  transition: all 0.3s;
  &.w-card-bordered {
    border: 1px solid ${(props) => props.theme.borderColorBase};
  }
  &:not(.w-card-no-hover):hover,
  &.active {
    box-shadow: 0 1px 6px ${(props) => getThemeVariantValue(props, 'borderColorBaseActive')};
    border-color: ${(props) => getThemeVariantValue(props, 'borderColorBaseActive')};
  }
  .w-card-head {
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    border-radius: 2px 2px 0 0;
    zoom: 1;
  }
  .w-card-head + .w-card-body {
    border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorBase')};
  }
  .w-card-head-title {
    font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    color: ${(props) => getThemeVariantValue(props, 'colorBase')};
    font-weight: 500;
    display: inline-block;
  }
  .w-card-extra {
    position: absolute;
    right: 16px;
    top: 0;
  }
  .w-card-body {
    padding: 14px;
  }
  .w-card-body + .w-card-footer {
    border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderTopColorCardFooter')};
  }
  .w-card-footer {
    padding: 8px 10px;
    color: ${(props) => getThemeVariantValue(props, 'colorCardFooter')};
    a {
      color: ${(props) => getThemeVariantValue(props, 'colorCardFooter')};
    }
  }
`;

Warp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    lineHeightDefault: 1.5,
    borderColorBaseActive: '#CCCCCC',
    borderColorBase: '#e9e9e9',
    backgroundColorBase: '#fff',
    colorBase: '#393e48',
    borderTopColorCardFooter: '#F2F2F2',
    colorCardFooter: '#999999',
  },
};

export default Warp;
