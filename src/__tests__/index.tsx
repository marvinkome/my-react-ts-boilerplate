import { shallow } from 'enzyme';
import * as React from 'react';
import { App } from '../app';

describe('App tests', () => {
    it('renders', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper).toMatchSnapshot();
    });
});
