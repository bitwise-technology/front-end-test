import Header from '../../components/Header';
import React from 'react'
import { shallow } from 'enzyme';

describe('<Header />', () => {
    test('should render a logo inside the header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('.header__brand')).toHaveLength(1)
    })
    
})

