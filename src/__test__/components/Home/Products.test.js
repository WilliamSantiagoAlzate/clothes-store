import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { mockData } from '../../../__mocks__/data';
import { Products, Component } from '../../../components/Home/Products/Products';

describe('<Products />', () => {
  test('Products is rendering', () => {
    const products = mount(
      <ProviderMock>
        <Products />
      </ProviderMock>
    );
    expect(products.length).toEqual(1);
  })

  test('Products should render the card', () => {
    const products = shallow(
      <Component products={mockData} />
    )
    expect(products.find('.products__content').hasClass('products__content')).toBeTruthy();
  })
})