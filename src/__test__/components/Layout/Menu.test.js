import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Menu } from '../../../components/Layout/Menu/Menu';

describe('<Menu />', () => {
  test('Menu is rendering', () => {
    const menu = mount(
      <ProviderMock>
        <Menu />
      </ProviderMock>
    );
    menu.find('button').simulate('click');
    expect(menu.length).toEqual(1);
  })
})