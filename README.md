# eslint-config-endouble
> Endouble's Javascript ESLint configuration, based on [AirBnB's](https://github.com/airbnb/javascript)

## Install and Usage

### 1. Installing
Make sure you have Node (>=6) installed

```bash
yarn add --dev @endouble.com/eslint-config-endouble
```

### 2. Using
Create an `.eslintrc.json` file at the root of your project and add the following configuration:

#### 2.1. Simple setup
> For vanilla Javascript code

```json
{
    "extends": "@endouble.com/eslint-config-endouble"
}
```

#### 2.2. React setup
> For React based apps

```json
{
    "extends": "@endouble.com/eslint-config-endouble/react"
}
```

### 3. Extra configuration
Add to `package.json` a script to lint your desired files:

```json
{
    "scripts": {
        "lint": "eslint js/*.js"
    }
}
```

## Rules
Please refer to [AirBnB's Styleguide](https://github.com/airbnb/javascript) for more information about the linter's
rules.

### Custom rules
> This rules overwrite the ones inherited from AirBnB Styleguide

| rule | setting |
|------|---------|
| indent | 4 spaces, { SwitchCase: 1 } |
| max-len | 120 characters |
| react/jsx-indent | 4 spaces |
| react/jsx-indent-props | 4 spaces |
| react/jsx-filename-extension | off |
| jsx-a11y/href-no-hash | off |
| jsx-a11y/label-has-for | error, { allowChildren: true } |
| jsx-a11y/anchor-is-valid | error, { specialLink: ['to'] } |
| import/no-extraneous-dependencies | error, { devDependencies: true } |
| import/no-unresolved | error, { commonjs: true, amd: true } |

## Tests
```bash
yarn test
```

## Maintainers
[Renan Couto](https://github.com/renancouto)

## License
MIT
