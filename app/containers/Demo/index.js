import React, { Component } from 'react';

import Switch from 'components/Switch';
import DropMenu from 'components/DropMenu';
import RadioGroup from 'components/RadioGroup';
import ChcekBox from 'components/CheckBox';
import Slider from 'components/Slider';

const options = [
  {
    value: 0,
    text: '测试数据',
  },
  {
    value: 1,
    text: '测试2',
  },
  {
    value: 2,
    text: '测试dada大大',
  },
  {
    value: 3,
    text: '测试达大厦',
  },
  {
    value: 4,
    text: '测试我去',
  },
  {
    value: 5,
    text: '测试反攻倒算',
  },
];

class Demo extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Switch />
        <DropMenu
          options={options}
          value={2}
        />
        <RadioGroup
          options={{
            name: 'sex',
            data: [
              {
                value: 'm',
                label: 'nan',
              },
              {
                value: 'f',
                label: 'nv',
              },
             ],
           }}
        />
        <ChcekBox />
        <Slider />
      </div>
    );
  }
}

export default Demo;
