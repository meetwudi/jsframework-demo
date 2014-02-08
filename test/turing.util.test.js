describe('turing.util', function() {
  it('should be able to extend object', function() {
    var obj = {a: 1};
    turing.extend(obj, {b: 2});
    obj.a.should.eql(1);
    obj.b.should.eql(2);
  });
});