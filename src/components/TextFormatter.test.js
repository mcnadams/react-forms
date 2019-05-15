import React from 'react'
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('Text Formatter', () => {
  it('text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
