describe('turing.core', function() {
  it('should be able to use define to load AMD-Style module', function() {
    turing.define('test-module-first', [], function() {
      return {
        value: 1
      };
    });

    turing.define('test-module-second', ['test-module-first'], function(testModuleFirst) {
      testModuleFirst.value.should.eql(1);
    });
  });
});