import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { mockData } from '../../../__mocks__/data';
import { Card } from '../../../components/UI/Card/Card';

describe('<Card />', () => {
  test('Card is rendering', () => {
    const card = mount(
      <ProviderMock>
        <Card product={mockData[0]}/>
      </ProviderMock>
    );
    card.find('button').simulate('click');
    expect(card.length).toEqual(1);
  })

  test('Card should show remove button', () => {
    const card = mount(
      <ProviderMock>
        <Card product={mockData[0]} showRemoveButton={true} />
      </ProviderMock>
    );
    const button = card.find('button');
    button.simulate('click');
    expect(button.hasClass('card__button--remove')).toBeTruthy();
  })
})