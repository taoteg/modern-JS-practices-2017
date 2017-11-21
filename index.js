// imports.
// var moment = require('moment');
// Use ES2015 imports.
import moment from 'moment';

// index.js
console.log("Hello from JavaScript!");

// Use moment.js.
console.log(moment().startOf('day').fromNow());

// Using babel to transpile.
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
