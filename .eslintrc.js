module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: ['babel', 'react', 'jsx-a11y', 'prettier'],
    rules: {
        'prettier/prettier': [
            2,
            {
                trailingComma: 'none',
                printWidth: 100,
                singleQuote: true,
                tabWidth: 4,
                endOfLine: 'auto'
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/static-property-placement': 0,
        'react/forbid-prop-types': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-events': 0
    }
};
