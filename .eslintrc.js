module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        tsconfigRootDir: __dirname,
        project: "tsconfig.json",
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-indent": [
            "error",
            "tab"
        ],
        "react/jsx-indent-props": [
            "error",
            "tab"
        ],
        "indent": [
            "error",
            "tab"
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: ['.js', '.jsx', '.tsx']
            }
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "no-shadow": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "import/extensions": "off",
        "no-underscore-dangle": "off",
        "react/button-has-type": [
            2,
            {
                "button": true,
                "submit": true,
                "reset": true
            }
        ],
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ]
    },
    "globals": {
        "__IS_DEV__": true,
    }
}
