module.exports = {
  plugins: [
    'prettier-plugin-organize-attributes',
    '@prettier/plugin-php',
    '@destination/prettier-plugin-twig',
    'prettier-plugin-organize-imports',
    'prettier-plugin-css-order'
  ],
  singleQuote: true,
  singleAttributePerLine: true,
  attributeGroups: [
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$CODE_GUIDE',
    '$DEFAULT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT'
  ],
  braceStyle: '1tbs',
  overrides: [
    {
      files: ['**/*.scss', '**/*.css'],
      options: {
        singleQuote: false,
        printWidth: 100
      }
    },
    {
      files: ['**/*.html'],
      options: {
        singleQuote: false,
        printWidth: 120
      }
    },
    {
      files: ['**/*.twig'],
      options: {
        singleQuote: false,
        tabWidth: 4
      }
    }
  ]
}
