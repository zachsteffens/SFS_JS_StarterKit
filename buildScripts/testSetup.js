//this file isn't transpiled so it must use CommonJS and ES6

//register babel to transpile before our test run. (transpile the tests before running)
require('babel-register')();

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
