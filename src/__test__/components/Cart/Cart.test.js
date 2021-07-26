import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { mockData } from '../../../__mocks__/data';
import { Cart, Component } from '../../../components/Cart/Cart';

describe('<Cart />', () => {
  test('Cart is rendering', () => {
    const cart = mount(
      <ProviderMock>
        <Cart />
      </ProviderMock>
    );
    expect(cart.length).toEqual(1);
  })

  test('Cart should render total price', () => {
    const cart = shallow(
      <Component cartProducts={mockData}/>
    )
    expect(cart.find('p').text()).toEqual(`Total a pagar: $${new Intl.NumberFormat().format(mockData[0].price)}`)
  })

  test('Cart should render not items message', () => {
    const cart = shallow(
      <Component cartProducts={[]}/>
    )
    expect(cart.find('p').hasClass('no-items__description')).toBeTruthy();
  })
})