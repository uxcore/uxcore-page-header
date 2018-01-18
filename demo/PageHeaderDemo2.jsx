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
import ButtonGroup from 'uxcore-button-group';
import Button from 'uxcore-button';
import Form from 'uxcore-form';
import PageHeader from '../src';

const {
  FormRow,
  InputFormField,
} = Form;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const tab = (
      <Tabs defaultActiveKey="2" type="open">
        <TabPane tab="页签" key="1" />
        <TabPane tab="页签二" key="2" />
        <TabPane tab="页签三" key="3" />
      </Tabs>
    );
    const crumb = (
      <Crumb>
        <Crumb.Item href="#">通用模板</Crumb.Item>
        <Crumb.Item href="#">列表页</Crumb.Item>
        <Crumb.Item>基础配置管理</Crumb.Item>
      </Crumb>
    );
    const logo = (
      <img style={{ width: 40, height: 40, marginRight: 16 }} role="presentation" className="demo-logo" src="https://img.alicdn.com/tfs/TB1do1Oi46I8KJjy0FgXXXXzVXa-200-200.jpg" />
    );
    const action = (
      <ButtonGroup separated>
        <Button type="outline">二级按钮</Button>
        <Button type="outline">二级按钮</Button>
        <Button>一级按钮</Button>
      </ButtonGroup>
    );
    const content = (
      <div className="demo2-content">
        <div>
          {logo}
        </div>
        <Form
          className="demo2-form"
          autoAdjustSpacing
          jsxmode="view"
          jsxvalues={{
            test1: 'UED 一组',
            test2: 'UED 一组',
            test3: '阿里巴巴（中国）有限公司',
            test4: '阿里巴巴',
          }}
        >
          <FormRow>
            <InputFormField jsxname="test1" jsxlabel="任职部门" />
            <InputFormField jsxname="test2" jsxlabel="任职部门" />
          </FormRow>
          <FormRow>
            <InputFormField jsxname="test3" jsxlabel="签约公司" />
            <InputFormField jsxname="test4" jsxlabel="签约公司" />
          </FormRow>
        </Form>
      </div>
    );
    const headerProps = {
      tab,
      crumb,
      title: '员工股权系统',
      action,
      // logo,
      content,
    };
    return (
      <div>
        <PageHeader {...headerProps} />
      </div>
    );
  }
}

export default Demo;
