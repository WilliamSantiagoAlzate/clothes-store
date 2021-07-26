import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Spinner } from '../../../components/UI/Spinner/Spinner';

describe('<Spinner />', () => {
  test('Spinner is rendering', () => {
    const spinner = mount(
      <ProviderMock>
        <Spinner />
      </ProviderMock>
    );
    expect(spinner.length).toEqual(1);
  })
})