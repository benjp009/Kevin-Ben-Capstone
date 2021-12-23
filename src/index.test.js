
it('display itemscount on categories', () => {
  expect.assertions('Dessert');
  return expect(displayCount()).toEqual(12);
})
