/**
 * Core of turing.js
 *
 * @class  turing
 */

(function(global){
  var turing = {
    VERSION: '0.0.0'
  };

  turing._modules = {};

  /**
   * AMD模块载入
   *
   * @method  define
   * @for turing
   * @param  {String}   moduleName
   * @param  {String[]}   dependencies
   * @param  {Function} fn
   */
  turing.define = function(moduleName, dependencies, fn) {
    if (!! global.define) {
      global.define(moduleName, dependencies, fn);
    }
    else {
      var injectedDependencies = [], i;
      for (i = 0; i < dependencies.length; i ++) {
        injectedDependencies.push(turing._modules[dependencies[i]]);
      }
      // 任何模块执行时的上下文应该为undefined
      turing._modules[moduleName] = fn.apply(undefined, injectedDependencies); 
    }
  }

  if (global.turing) {
    throw new Error('turing: top-level turing object already exists!');
  }
  else {
    global.turing = turing;
  }

})(typeof window === 'undefined' ? this : window);