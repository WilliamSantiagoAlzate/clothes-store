import { storeFn } from '../../../redux/store/index';

it('Should create store', () => {
  expect(storeFn()).toBeTruthy();
});