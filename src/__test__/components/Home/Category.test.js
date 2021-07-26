import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Category } from '../../../components/Home/Category/Category';

describe('<Category />', () => {
  test('Category is rendering', () => {
    const category = mount(
      <ProviderMock>
        <Category />
      </ProviderMock>
    );
    expect(category.length).toEqual(1);
  })

  test('Category should render the title', () => {
    const category = shallow(
      <Category title="Title"/>
    )
    expect(category.find('h4').text()).toEqual('Title');
  })
})