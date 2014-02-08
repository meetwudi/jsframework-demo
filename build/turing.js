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
 * 工具函数
 *
 * @class  turing.util
 */
define('turing.util', ['turing'], function(turing) {
  /**
   * 将一个对象用另一个对象扩展，遇到冲突报错。
   *
   * @method  turing.extend
   * @param {Object} targetObj 将被扩展的对象
   * @param {Object} sourceObj 将被并入的对象（仅并入其自有属性）
   */
  turing.extend = function(targetObj, sourceObj) {
    if (arguments.length < 3) {
      shouldOverride = false;
    }

    for (var property in sourceObj) {
      if (sourceObj.hasOwnProperty(property)) {
        if (!! targetObj.property) {
          throw new Error('turing: extending failed, property conlicts.');
        }
        targetObj[property] = sourceObj[property];
      }
    }
  }
});
/**
 * 传统面向对象模拟支持
 *
 * @class  turing.oo
 */

define('turing.oo', ['turing'], function(turing) {
  /**
   * 创建新类
   * 
   * @method  turing.createClass
   * @return {Class} 
   * @example
   *      var Dog = turing.createClass({
   *        inherits: Animal, // 继承类
   *        body: {           // 实例属性与方法
   *          
   *        } 
   *      });
   */
  turing.createClass = function(options) {
    
  };
});