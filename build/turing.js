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
      var injectedDependencies = [], i;
      for (i = 0; i < dependencies.length; i ++) {
        injectedDependencies.push(turing._modules[dependencies[i]]);
      }
      turing._modules[moduleName] = fn.apply(context, injectedDependencies); 
  };

  // 初始化define
  turing.define('global', [], function() {
    return global;
  });

  // 将define赋值给全局
  if (!global.define) {
    global.define = turing.define;
  }


  // 初始化turing对象
  if (global.turing) {
    throw new Error('turing: top-level turing object already exists!');
  }
  else {
    global.turing = turing;
  }

})(typeof window === 'undefined' ? this : window);
/**
 * 全局入口点
 *
 * @class  turing.main
 */
define('turing', ['global'], function(global) {
  return global.turing;
});
/**
 * 传统面向对象模拟支持
 *
 * @class  turing.oo
 */

define('turing.oo', ['turing'], function(turing) {
});