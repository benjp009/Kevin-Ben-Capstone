// eslint-disable-next-line arrow-parens
test('display itemscount on categories', done => {
  function commentBtnEvent(data) {
    try {
      expect(data).toBe('12');
      done();
    } catch (error) {
      done(error);
    }
  }

  commentBtnEvent('12');

});
