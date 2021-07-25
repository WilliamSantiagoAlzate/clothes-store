export const getTotalToPay = (products) => {
  let total = 0;

  products.forEach(product => {
    total = total + product.price
  })

  return total;
}