/**
 * PageHeader Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PageHeader extends React.Component {
  static defaultProps = {
    prefixCls: 'kuma-page-header',
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    tab: PropTypes.node,
    crumb: PropTypes.node,
    logo: PropTypes.node,
    title: PropTypes.node,
    content: PropTypes.node,
    action: PropTypes.node,
    extraContent: PropTypes.node,
  };

  static displayName = 'PageHeader';

  hasLogo() {
    const { logo } = this.props;
    return !!logo;
  }

  hasTop() {
    const { title, action } = this.props;
    return !!(title || action);
  }

  hasBottom() {
    const { content, extraContent } = this.props;
    return !!(content || extraContent);
  }

  hasLeft() {
    const { content, title } = this.props;
    return !!(content || title);
  }

  renderLogo() {
    const { logo, prefixCls } = this.props;
    if (this.hasLogo()) {
      return (
        <div className={`${prefixCls}-box-item ${prefixCls}-box-item-logo`}>
          {logo}
        </div>
      );
    }
    return null;
  }

  renderTop() {
    const { prefixCls, title, action } = this.props;
    if (this.hasTop()) {
      return (
        <div
          className={classnames(`${prefixCls}-main-item ${prefixCls}-main-item-top`, {
            [`${prefixCls}-main-item__has-left`]: this.hasLeft(),
          })}
        >
          {title ? <h1 className={`${prefixCls}-title`}>{title}</h1> : null}
          {action ? <div className={`${prefixCls}-action`}>{action}</div> : null}
        </div>
      );
    }
    return null;
  }

  renderBottom() {
    const { prefixCls, content, extraContent } = this.props;
    if (this.hasBottom()) {
      return (
        <div
          className={classnames(`${prefixCls}-main-item ${prefixCls}-main-item-bottom`, {
            [`${prefixCls}-main-item__has-left`]: this.hasLeft(),
          })}
        >
          {content ? <div className={`${prefixCls}-content`}>{content}</div> : null}
          {extraContent ? <div className={`${prefixCls}-extra-content`}>{extraContent}</div> : null}
        </div>
      );
    }
    return null;
  }

  renderMain() {
    const { prefixCls } = this.props;
    if (this.hasTop() || this.hasBottom()) {
      return (
        <div
          className={classnames(`${prefixCls}-box-item ${prefixCls}-box-item-main`, {
            [`${prefixCls}-box-item-main__with-logo`]: this.hasLogo(),
          })}
        >
          {this.renderTop()}
          {this.renderBottom()}
        </div>
      );
    }
    return null;
  }

  renderContent() {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}-box`}>
        {this.renderLogo()}
        {this.renderMain()}
      </div>
    );
  }

  render() {
    const { tab, crumb, prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        {crumb}
        {this.renderContent()}
        {tab}
      </div>
    );
  }
}

export default PageHeader;

