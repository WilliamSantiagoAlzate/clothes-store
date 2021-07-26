import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { SearchInput } from '../../../components/UI/SearchInput/SearchInput';

describe('<SearchInput />', () => {
  test('SearchInput is rendering', () => {
    const searchInput = mount(
      <ProviderMock>
        <SearchInput />
      </ProviderMock>
    );
    searchInput.find('form').simulate('submit');
    expect(searchInput.length).toEqual(1);
  })

  test('Input should change', () => {
    const searchInput = mount(
      <ProviderMock>
        <SearchInput />
      </ProviderMock>
    );
    searchInput.find('input').simulate('change', { target: { value: 'zapatos' } });
    searchInput.find('form').simulate('submit');
    expect(searchInput.find('input').instance().value).toEqual('zapatos');
  })
})