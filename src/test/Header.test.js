import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header/Header';

describe('Header Tests', () => {
  let wrapper;
  let mockButtons;
  let mockDisplayCards;
  let mockFavorites;
  let mockButton;

  beforeEach(() => {
    mockButtons = [{name: 'people', active: false},
                    {name: 'planets', active: false},
                    {name: 'vehicles', active: false},
                    {name: 'favorites', active: false}]
    mockFavorites = [];
    mockButton = {name: 'planets', active: false};
    mockDisplayCards = jest.fn();
    wrapper = shallow(<Header 
                        buttons={mockButtons} 
                        displayCards={mockDisplayCards}
                        favorites={mockFavorites}
                      />);
  })

  it('should match the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render four buttons', () => {
    const actual = wrapper.find('.button').length;
    const expected = 4;
    expect(expected).toEqual(actual);
  })

  it('buttons should call displayCards when clicked', () => {
    const activeButton = wrapper.find('.button1');
    activeButton.simulate('click');

    expect(mockDisplayCards).toHaveBeenCalledWith(mockButton.name)
  })

  it('should have a class of active when pressed', () => {
    const activeButton = wrapper.find('.button1');

    activeButton.simulate('click');

    const expected = 1;
    const actual = activeButton.find('.active').length;

    expect(expected).toEqual(actual);
  })
})