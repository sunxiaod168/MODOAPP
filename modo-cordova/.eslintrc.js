module.exports = {
    "env": {
        "browser": true,       
        "es6": true      
    },
    "parserOptions": {
        parser: 'babel-eslint'     
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "plugins": [
        "vue"
      ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
            "error",
            { "vars": "all", "args": "none", "ignoreRestSiblings": false }
        ],
        "vue/no-unused-vars": "error",

    }
};