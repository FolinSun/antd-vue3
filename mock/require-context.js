/**
 * 去 /mock/modules 文件夹（不包含子目录）下面的找所有文件名以 .js 结尾的文件能被 require 的文件
 * @param {*} directory 需要检索的目录
 * @param {*} recursive 是否检索子目录
 * @param {*} regExp 匹配文件的正则表达式
 * @returns 
 */

module.exports = function (directory, recursive, regExp) {
  const dir = require('node-dir');
  const path = require('path');

  // 默认情况下假设绝对路径
  let basepath = directory;

  if (directory[0] === '.') {
    // Relative path
    // 拼成绝对路径
    basepath = path.join(__dirname, directory);
  } else if (!path.isAbsolute(directory)) {
    // Module path
    basepath = require.resolve(directory);
  }

  // 获取所有js文件
  const keys = dir
    .files(basepath, {
      sync: true, // 是否同步迭代目录及其子目录的文件
      recursive: recursive || false,
    })
    .filter(function (file) {
      return file.match(regExp || /\.(json|js)$/);
    })
    .map(function (file) {
      return path.join('.', file.slice(basepath.length + 1));
    });

  var context = function (key) {
    return require(context.resolve(key));
  };

  context.resolve = function (key) {
    return path.join(directory, key);
  };

  context.keys = function () {
    return keys;
  };
  
  return context;
};
