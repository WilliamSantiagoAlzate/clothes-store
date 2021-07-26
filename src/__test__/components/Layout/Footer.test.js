import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Footer } from '../../../components/Layout/Footer/Footer';

describe('<Footer />', () => {
  test('Footer is rendering', () => {
    const footer = mount(
      <ProviderMock>
        <Footer />
      </ProviderMock>
    );
    expect(footer.length).toEqual(1);
  })

  test('Collapse policy button should works', () => {
    const footer = shallow(
      <Footer />
    )
    footer.find('button').at(0).simulate('click');
    expect(footer.find('.footer__list--collapsed').hasClass('footer__list--collapsed')).toBeTruthy();
  })

  test('Collapse about button should works', () => {
    const footer = shallow(
      <Footer />
    )
    footer.find('button').at(1).simulate('click');
    expect(footer.find('.footer__list--collapsed').hasClass('footer__list--collapsed')).toBeTruthy();
  })
})