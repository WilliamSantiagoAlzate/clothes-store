import { getTotalToPay } from '../../helpers/getTotalToPay';

describe('getTotalToPay', () => {
  test('Get total value to pay', () => {
    const products = [
      { price: 10 },
      { price: 15 },
      { price: 20 },
    ];
    expect(getTotalToPay(products)).toEqual(45);
  });
  test('Get 0 for empty array', () => {
    const products = [];
    expect(getTotalToPay(products)).toEqual(0);
  });
});