/**
 * PageHeader Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Steps, { Step } from 'uxcore-steps';
import PageHeader from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const content = (
      <Steps current={2} type="bottom-desc">
        <Step key={0} title={'步骤一'} description="描述文案" />
        <Step key={1} title={'步骤二'} description="描述文案" />
        <Step key={2} title={'步骤三'} description="描述文案" />
        <Step key={3} title={'步骤四'} description="描述文案" />
      </Steps>
    );
    const headerProps = {
      title: '预付申请单',
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
