// Inspired by https://github.com/airbnb/javascript

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'plugins': ['jsx-a11y', 'react', 'jquery', 'dollar-sign'],
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'generators': true,
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'array-callback-return': 'warn',
    'block-spacing': ['warn', 'always'],
    'consistent-this': ['error', '_this'],
    'dot-location': ['warn', 'property'],
    'eqeqeq': ['warn', 'allow-null'],
    'indent': ['warn', 2, {
      SwitchCase: 1
    }],
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'keyword-spacing': 'warn',
    'computed-property-spacing': ['warn', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['warn', {
      code: 120,
      ignoreUrls: true
    }],
    'new-cap': ['warn', { newIsCap: true, capIsNew: false }],
    'quotes': ['error', 'single'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'error',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'error',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'error',
    'no-spaced-func': 'error',
    'no-ex-assign': 'error',
    'no-negated-in-lhs': 'error',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'error',
    'no-trailing-spaces': 'warn',
    'no-multi-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'error',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
    'no-iterator': 'error',
    'no-mixed-requires': [0],
    'no-underscore-dangle': [0],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'error',
    'no-mixed-operators': ['warn', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'error',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': [
      'warn',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-multiple-empty-lines': ['warn', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-return-assign': 'off',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-unexpected-multiline': 'warn',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': ['warn', {allowShortCircuit: true, allowTernary: true}],
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-with': 'error',
    'no-whitespace-before-property': 'error',
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': ['error', 'before', {'overrides': {'&&': 'ignore'}}],
    'rest-spread-spacing': ['warn', 'never'],
    'require-yield': 'warn',
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'camelcase': 'warn',
    'strict': [0],
    'semi': ['warn', 'always'],
    'no-new': [0],
    'space-unary-ops': ['warn', {
      overrides: {
        '!': true,
        '!!': true
      }
    }],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/img-has-alt': 'error',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/require-render-return': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/no-is-mounted': 'error', // deprecated
    'react/no-deprecated': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/no-string-refs': 'error', // string identifier is considered legacy in the official documentation
    'react/jsx-wrap-multilines': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false
    }], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md

    // buggy eslint-plugin-react v5.2.2
    // 'react/sort-comp': ['warn', {
    //   'order': [
    //     'static-methods',
    //     'lifecycle',
    //     '/^on.+$/',
    //     '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
    //     'everything-else',
    //     '/^render.+$/',
    //     'render'
    //   ],
    //   'groups': {
    //     'lifecycle': [
    //       'displayName',
    //       'propTypes',
    //       'contextTypes',
    //       'childContextTypes',
    //       'mixins',
    //       'statics',
    //       'defaultProps',
    //       'constructor',
    //       'getDefaultProps',
    //       'getInitialState',
    //       'state',
    //       'getChildContext',
    //       'componentWillMount',
    //       'componentDidMount',
    //       'componentWillReceiveProps',
    //       'shouldComponentUpdate',
    //       'componentWillUpdate',
    //       'componentDidUpdate',
    //       'componentWillUnmount'
    //     ]
    //   }
    // }]

    'jquery/no-animate': 'error',
    'dollar-sign/dollar-sign': ['warn', 'ignoreProperties']
  },
  'globals': {
    '$': true,
    'jQuery': true,
    'window': true,
    'document': true,
    'google': true,
    'Backbone': true,
    'vent': true,
    '_': true,
    'Modernizr': true,
    'Image': true,
    'navigator': true,
    'Snap': true,
    'mina': true,
    'TweenLite': true,
    'TweenMax': true,
    'Power1': true,
    'Power2': true,
    'Power3': true,
    'Power4': true,
    'ga': true,
    'Expo': true,
    'Circ': true
  }
};
