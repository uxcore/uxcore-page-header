/**
 * PageHeader Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import ButtonGroup from 'uxcore-button-group';
import Button from 'uxcore-button';
import Form, { FormRow, SelectFormField, OtherFormField } from 'uxcore-form';
import PageHeader from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const content = (
      <Form verticalAlign>
        <FormRow>
          <SelectFormField jsxname="test1" jsxlabel="筛选条件" />
          <SelectFormField jsxname="test2" jsxlabel="筛选条件" />
          <SelectFormField jsxname="test3" jsxlabel="筛选条件" />
          <SelectFormField jsxname="test4" jsxlabel="筛选条件" />
        </FormRow>
        <FormRow>
          <SelectFormField jsxname="test5" jsxlabel="筛选条件" />
          <OtherFormField jsxflex={3} className="demofilter-other">
            <div className="demofilter-other-item">
              <ButtonGroup separated>
                <Button>查询</Button>
                <Button type="secondary">重置</Button>
              </ButtonGroup>
              <a href="#" className="demofilter-other-link">高级筛选</a>
            </div>
          </OtherFormField>
        </FormRow>
      </Form>
    );
    const headerProps = {
      title: '查询筛选',
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
