import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import { MainLayout } from '../../layout/MainLayout';

describe('<MainLayout />', () => {
  test('Main layout is rendering', () => {
    const mainLayout = mount(
      <ProviderMock>
        <MainLayout>
          <h3>Main layout</h3>
        </MainLayout>
      </ProviderMock>
    );
    expect(mainLayout.length).toEqual(1);
  })
})