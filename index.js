const transformReactJsx = require("babel-plugin-transform-react-jsx");

module.exports = () => {
  return {
    plugins: [
      [ transformReactJsx, { "pragma": "Tegridy.createComponent" }],
      require("babel-plugin-syntax-jsx"),
    ]
  }
};