(function(global){
  var turing = {
    VERSION: '0.0.0'
  };

  turing._modules = {};

  /**
   * AMD模块载入
   * @param  {string}   module
   * @param  {array}   dependencies
   * @param  {Function} fn
   * @return {module} 返回的模块
   */
  turing.define = function(module, dependencies, fn) {
    if (!! global.define) {
      return global.define(module, dependencies, fn);
    }
    else {
      var injectedDependencies = [], i;
      for (i = 0; i < dependencies.length; i ++) {
        if (! turing._modules[dependencies[i]]) {
          throw new Error('turing: dependency does not exists');
        }
        injectedDependencies.push(turing._modules[dependencies[i]]);
      }
      fn.apply(undefined, injectedDependencies);
    }
  }

  if (global.turing) {
    throw new Error('turing: top-level turing object already exists!');
  }
  else {
    global.turing = turing;
  }

})(typeof window === 'undefined' ? this : window);