module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb",
      "plugin:prettier/recommended",
      "plugin:css-modules/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "css-modules"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "prettier/prettier": ["error", { "printWidth": 120 }],
    }
};
