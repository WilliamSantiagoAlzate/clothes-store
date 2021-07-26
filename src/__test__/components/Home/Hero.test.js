import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Hero } from '../../../components/Home/Hero/Hero';

describe('<Hero />', () => {
  test('Hero is rendering', () => {
    const hero = mount(
      <ProviderMock>
        <Hero />
      </ProviderMock>
    );
    expect(hero.length).toEqual(1);
  })
})