'use strict';


const greetings = require('../../lib/greet.js');
const assert = require('assert');

let message = '';

message = greetings.greet();
assert.strictEqual(message, null, 'At least one parameter required');

message = greetings.greet(5);
assert.strictEqual(message, null, 'Numbers are not allowed');

message = greetings.greet('Jen');
assert.strictEqual(message, 'Hello, Jen', 'Does not match');

