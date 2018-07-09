import React from 'react';
import { shallow } from 'enzyme';
import Scroll from '../Scroll';

describe('Scroll Test', () => {

  it('should match the snapshot', () => {
    const mockScroll = {scrollText: 'crawl',
                        title: 'title',
                        releaseDate: 'year'};
    const wrapper = shallow(<Scroll scroll={mockScroll}/>);

    expect(wrapper).toMatchSnapshot()
  });
});