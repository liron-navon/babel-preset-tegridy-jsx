# babel-preset-tegridy-jsx
Babel preset to transform JSX into `Tegridy.createComponent` calls.

### Install

Via NPM

```javascript
npm install babel-preset-tegridy-jsx --save-dev
```

or Yarn

```javascript
yarn add babel-preset-tegridy-jsx --dev
```

### Usage

Make or update your .babelrc config file with the preset:

```javascript
{
  "presets": [
    "tegridy-jsx"
  ]
}
```

Via package.json

```javascript
   ...
   "babel": {
     "presets": [
       "es2015",
       "tegridy-jsx"
     ],
     "plugins": [
     ]
   },
   ...
```
