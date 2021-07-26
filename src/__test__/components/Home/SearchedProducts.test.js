import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { mockData } from '../../../__mocks__/data';
import { SearchedProducts, Component } from '../../../components/Home/SearchedProducts/SearchedProducts';

describe('<SearchedProducts />', () => {
  test('Searched products is rendering', () => {
    const searchedProducts = mount(
      <ProviderMock>
        <SearchedProducts />
      </ProviderMock>
    );
    expect(searchedProducts.length).toEqual(1);
  })

  test('Searched products should render the card', () => {
    const searchedProducts = shallow(
      <Component searchedProducts={mockData} />
    )
    expect(searchedProducts.find('.card__container').hasClass('card__container')).toBeTruthy();
  })

  test('Searched products should render the spinner', () => {
    const searchedProducts = shallow(
      <Component loadingSearchedProducts={true} />
    )
    expect(searchedProducts.find('Spinner').props()).toEqual({color: "black"});
  })
})