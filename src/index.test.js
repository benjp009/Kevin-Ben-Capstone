it('display itemscount on categories', () => {
  expect.assertions('Dessert');
  // eslint-disable-next-line no-undef
  return expect(displayCount()).toEqual(12);
});
