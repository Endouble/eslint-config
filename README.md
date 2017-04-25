# eslint
> Endouble's Javascript ESLint configuration, based on [AirBnB's](https://github.com/airbnb/javascript)

## Install and Usage

### Complete setup
> For transpiled Javascript (using Babel) that runs on a browser

#### 1. Installing
Make sure you have Node (>=6) installed

```bash
npm install eslint eslint-plugin-import babel-eslint babel-preset-es2015 @endouble.com/eslint-config-endouble --save-dev
# or
yarn add --dev eslint eslint-plugin-import babel-eslint babel-preset-es2015 @endouble.com/eslint-config-endouble
```

#### 2. Using
Create an `.eslintrc.json` file at the root of your project and add the following configuration:

```json
{
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": "@endouble.com/eslint-config-endouble"
}
```

### Simple setup
> For vanilla Javascript code

#### 1. Installing
Make sure you have Node (>=6) installed

```bash
npm install eslint eslint-plugin-import @endouble.com/eslint-config-endouble --save-dev
# or
yarn add --dev eslint eslint-plugin-import @endouble.com/eslint-config-endouble
```

#### 2. Using
Create an `.eslintrc.json` file at the root of your project and add the following configuration:

```json
{
    "extends": "@endouble.com/eslint-config-endouble"
}
```

## Rules
Please refer to [AirBnB's Styleguide](https://github.com/airbnb/javascript) for more information about the linter's
rules.

### Custom rules
> This rules overwrite the ones inherited from AirBnB Styleguide

| rule | setting |
|------|---------|
| indent | 4 spaces |
| max-len | 120 characters |

## Tests
```bash
npm test
# or
yarn test
```

## Maintainers
[Renan Couto](https://github.com/renancouto)

## License
MIT
