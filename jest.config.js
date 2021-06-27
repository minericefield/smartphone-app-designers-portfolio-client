module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/__tests__/**/*.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
