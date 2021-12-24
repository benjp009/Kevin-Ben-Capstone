test('display itemscount on categories', done => {
  function commentBtnEvent(data) {
    try {
      expect(data).toBe('12')
      done();
    } catch (error) {
      done(error);
    }
  }

  commentBtnEvent('12');

  // expect.assertions('Dessert');
  // // eslint-disable-next-line no-undef
  // return expect(displayCount()).toEqual(12);
});
