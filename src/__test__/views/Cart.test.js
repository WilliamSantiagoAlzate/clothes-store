import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import { CartView } from '../../views/Cart';

describe('<CartView />', () => {
  test('Cart view is rendering', () => {
    const cartView = mount(
      <ProviderMock>
        <CartView />
      </ProviderMock>
    );
    expect(cartView.length).toEqual(1);
  })
})