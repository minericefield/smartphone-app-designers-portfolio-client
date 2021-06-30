module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'ignorePseudoElements': ['v-deep']
      }
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        'ignoreFontFamilies': 'element-icons'
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': ['include', 'mixin', 'each']
      }
    ],
    'no-empty-source': null
  }
}
