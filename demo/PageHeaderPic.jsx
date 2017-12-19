/**
 * PageHeader Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Icon from 'uxcore-icon';
import PageHeader from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const content = (
      <div>
        <div>
          使用乐高提供的应用搭建编辑器和丰富组件，快速开发应用并部署上线。
使用乐高提供的应用搭建编辑器和丰富组件。
        </div>
        <div className="demo-pic-links">
          <div className="demo-pic-link"><Icon name="shu" /><a href="#">用户文档</a></div>
          <div className="demo-pic-link"><Icon name="yiwencopy" /><a href="#">帮助中心</a></div>
          <div className="demo-pic-link"><Icon name="pinglun" /><a href="#">获得支持</a></div>
        </div>
      </div>
    );
    const extraContent = (
      <img style={{ width: 289 }} role="presentation" src="https://img.alicdn.com/tfs/TB11jH2i_TI8KJjSsphXXcFppXa-578-256.png" />
    );
    const headerProps = {
      title: '欢迎使用乐高',
      content,
      extraContent,
    };
    return (
      <div>
        <PageHeader {...headerProps} />
      </div>
    );
  }
}

export default Demo;
