import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { mockData } from '../../../__mocks__/data';
import { Card } from '../../../components/UI/Card/Card';
import { Carousel } from '../../../components/UI/Carousel/Carousel';

describe('<Carousel />', () => {
  test('Carousel is rendering', () => {
    const carousel = mount(
      <ProviderMock>
        <Carousel>
          <Card product={mockData[0]}/>
          <Card product={mockData[0]}/>
          <Card product={mockData[0]}/>
          <Card product={mockData[0]}/>
        </Carousel>
      </ProviderMock>
    );
    carousel.find('.prev-arrow-button').simulate('click');
    carousel.find('.next-arrow-button').simulate('click');
    expect(carousel.length).toEqual(1);
  })
})