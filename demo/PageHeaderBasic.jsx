/**
 * PageHeader Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Tabs, { TabPane } from 'uxcore-tabs';
import Crumb from 'uxcore-crumb';
import PageHeader from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const tab = (
      <Tabs defaultActiveKey="2" type="open">
        <TabPane tab="页签" key="1">选项一</TabPane>
        <TabPane tab="页签二" key="2">选项二</TabPane>
        <TabPane tab="页签三" key="3">选项三</TabPane>
      </Tabs>
    );
    const crumb = (
      <Crumb className="crumb-style crumb-root">
        <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
        <Crumb.Item href="#">管理平台</Crumb.Item>
        <Crumb.Item href="#">流程管理</Crumb.Item>
        <Crumb.Item className="crumb-item-style">编辑流程信息</Crumb.Item>
      </Crumb>
    );
    const logo = (
      <img role="presentation" className="demo-logo" src="https://img.alicdn.com/tfs/TB1do1Oi46I8KJjy0FgXXXXzVXa-200-200.jpg" />
    );
    const title = (
      <div className="demo-title">标题</div>
    );
    const action = (
      <div className="demo-action">操作</div>
    );
    const content = (
      <div className="demo-content">内容</div>
    );
    const extraContent = (
      <div className="demo-extra-content">额外内容</div>
    );
    const headerProps = {
      // tab,
      crumb,
      title,
      action,
      logo,
      content,
      // extraContent,
      // containerWidth: '80%',
    };
    return (
      <div>
        <PageHeader {...headerProps} />
      </div>
    );
  }
}

export default Demo;
