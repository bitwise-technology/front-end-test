import Header from '../../components/Header';
import React from 'react'
import { shallow } from 'enzyme';

describe('<Header />', () => {
    test('should render a text inside the header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('.greeting-message' )).toHaveLength(1)
    })
    
})

