import React from 'react';
import UserPosts from '../UserPosts';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('Check User Posts Component Renders', () => {
    const component = shallow(<UserPosts />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})