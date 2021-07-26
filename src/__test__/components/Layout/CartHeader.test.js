import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { CartHeader } from '../../../components/Layout/CartHeader/CartHeader';

describe('<CartHeader />', () => {
  test('Cart header is rendering', () => {
    const cartHeader = mount(
      <ProviderMock>
        <CartHeader />
      </ProviderMock>
    );
    expect(cartHeader.length).toEqual(1);
  })
})