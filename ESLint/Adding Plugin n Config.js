ESLint Configuration vs Plugin:

Sharing with ESLint: Just share the configuration file (file extension: eslint-config-*)
In npm site, search for eslint-config- and you 1600 results which you can use

Plugins contain custom rules and also contain config (file extension: eslint-plugin-*)
In .eslintrc.json
      plugins : ["react"],
      rules : {
        "react/no-danger" : "error" //this will activate the no-danger rule in react plugin
        "no-alert" : "error"
        }
In npm site, search for eslint-plugin- and you find 500 results which you can use




 "extends": "eslint:recommended", //imports all the recommended rules of esling
    "rules": { //following are the override rules over recommended
        "indent": [
            "error",
            4
        ],
