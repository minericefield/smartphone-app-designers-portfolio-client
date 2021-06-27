module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/__tests__/**/*.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    "node_modules/smartphone-app-designers-portfolio-api-docs/client/*.ts"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
}
