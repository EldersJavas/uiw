/**
 * Overlay 组件
 * ---------------
 * 动画库 react-transition-group 文档
 * 老的文档
 * https://facebook.github.io/react/docs/animation.html
 * 新的文档
 * https://reactcommunity.org/react-transition-group/
 * 动画效果
 * https://daneden.github.io/animate.css/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classnames from 'classnames';
import Portal from './Portal';
import './style/index.less';

const noop = () => undefined;

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMount: false,
    }
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  overlayWillClose() {
    const { prefixCls } = this.props;
    document.removeEventListener("mousedown", this.handleDocumentClick);
    document.body.classList.remove(`${prefixCls}-open`);
  }
  handleDocumentClick = (e) => {
    const { maskClosable, hasBackdrop, isOpen, onClose } = this.props;
    if (isOpen && maskClosable && hasBackdrop) {
      onClose(hasBackdrop, e);
    }
  }
  overlayWillOpen() {
    const { prefixCls, maskClosable, hasBackdrop } = this.props;
    this.setState({ isMount: true });
    if (this.props.hasBackdrop) {
      // add a class to the body to prevent scrolling of content below the overlay
      document.body.classList.add(`${prefixCls}-open`);
    }

    if (maskClosable && !hasBackdrop) {
      document.addEventListener("mousedown", this.handleDocumentClick);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen && !this.props.isOpen) {
      this.overlayWillClose();
    } else if (!prevProps.isOpen && this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  handleBackdropMouseDown(e) {
    const { backdropProps, maskClosable, hasBackdrop, onClose } = this.props;
    if (maskClosable) {
      onClose(hasBackdrop, e);
    }
    backdropProps.onMouseDown && backdropProps.onMouseDown(e);
  }
  onClosed(e) {
    const { onClosed } = this.props;
    this.setState({ isMount: false }, onClosed.bind(this, e));
  }
  maybeRenderChild(child) {
    const { prefixCls } = this.props;
    if (child == null) {
      return null;
    }
    const decoratedChild =
      typeof child === "object" ? (
        React.cloneElement(child, {
          className: classnames(child.props.className, `${prefixCls}-content`),
          tabIndex: 0,
        })
      ) : <span className={`${prefixCls}-content`}>{child}</span>;

    const { onOpening, onOpened, onClosing, /*onClosed, */transitionDuration, transitionName } = this.props;
    return (
      <CSSTransition
        classNames={transitionName}
        onEntering={onOpening}
        onEntered={onOpened}
        onExiting={onClosing}
        onExited={this.onClosed.bind(this)}
        timeout={transitionDuration}
      >
        {decoratedChild}
      </CSSTransition>
    );
  }
  maybeRenderBackdrop() {
    const {
      prefixCls,
      backdropClassName,
      backdropProps,
      hasBackdrop,
      isOpen,
      transitionDuration,
      transitionName,
    } = this.props;
    if (hasBackdrop && isOpen) {
      return (
        <CSSTransition classNames={transitionName} key="__backdrop" timeout={transitionDuration}>
          <div
            {...backdropProps}
            className={classnames(`${prefixCls}-backdrop`, backdropClassName, backdropProps.className)}
            onMouseDown={this.handleBackdropMouseDown.bind(this)}
            tabIndex={this.props.maskClosable ? 0 : null}
          />
        </CSSTransition>
      );
    } else {
      return null;
    }
  }
  handleKeyDown() {}
  render() {
    const { prefixCls, className, style, isOpen, usePortal, children } = this.props;
    const childrenWithTransitions = isOpen ? React.Children.map(children, this.maybeRenderChild.bind(this)) : [];
    childrenWithTransitions.unshift(this.maybeRenderBackdrop());
    const cls = classnames(prefixCls, className, { open: this.state.isMount, [`${prefixCls}-inline`]: !usePortal });

    const TransitionGroupComp = (
      <TransitionGroup
        appear={true}
        style={style}
        className={cls}
        component="div"
        onKeyDown={this.handleKeyDown}
        ref={this.container}
      >
        {childrenWithTransitions}
      </TransitionGroup>
    )
    if (usePortal) {
      return (
        <Portal className={this.props.portalClassName} container={this.props.portalContainer}>
          {TransitionGroupComp}
        </Portal>
      );
    } else {
      return TransitionGroupComp;
    }
  }
}

Overlay.propTypes = {
  prefixCls: PropTypes.string,
  isOpen: PropTypes.bool,
  usePortal: PropTypes.bool,
  maskClosable: PropTypes.bool,
  backdropProps: PropTypes.object,
  hasBackdrop: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  transitionName: PropTypes.string,
  transitionDuration: PropTypes.number,
  onOpening: PropTypes.func,
  onOpened: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
};

Overlay.defaultProps = {
  prefixCls: 'w-overlay',
  isOpen: false,
  usePortal: true,
  maskClosable: true,
  backdropProps: {},
  hasBackdrop: true,
  unmountOnExit: false, // 设置 true 销毁根节点
  transitionDuration: 300,
  transitionName: 'w-overlay',
  onOpening: noop,
  onOpened: noop,
  onClosing: noop,
  onClosed: noop,
};
