import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import { CartLayout } from '../../layout/CartLayout';

describe('<CartLayout />', () => {
  test('Cart layout is rendering', () => {
    const cartLayout = mount(
      <ProviderMock>
        <CartLayout>
          <h3>Card layout</h3>
        </CartLayout>
      </ProviderMock>
    );
    expect(cartLayout.length).toEqual(1);
  })
})