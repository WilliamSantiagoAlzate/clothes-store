import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import { HomeView, View } from '../../views/Home';

describe('<HomeView />', () => {
  test('Home view is rendering', () => {
    const homeView = mount(
      <ProviderMock>
        <HomeView />
      </ProviderMock>
    );
    expect(homeView.length).toEqual(1);
  })

  test('Should show searched products section', () => {
    const homeView = shallow(
      <View showSearchedProcutsSection={true}/>
    );
    expect(homeView.find('.cart__button-container').hasClass('cart__button-container')).toBeTruthy();
  })
})