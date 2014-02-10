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
    for (var property in sourceObj) {
      if (sourceObj.hasOwnProperty(property)) {
        if (!! targetObj.property) {
          throw new Error('turing: extending failed, property conlicts.');
        }
        targetObj[property] = sourceObj[property];
      }
    }
  };
});