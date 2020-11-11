module.exports = function tiny(string) {
  // 测试上传
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
