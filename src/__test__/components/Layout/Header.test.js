import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Header } from '../../../components/Layout/Header/Header';

describe('<Header />', () => {
  test('Header is rendering', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    header.find('button').at(0).simulate('click');
    expect(header.length).toEqual(1);
  })
})