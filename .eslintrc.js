module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    // 一定要放在最后一项
    'plugin:prettier/recommended'
  ],
  globals: {
    /** 避免uni报错 */
    uni: true,
    UniApp: true
  }
}
