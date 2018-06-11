'use strict';


const arithmetic = require('../../lib/arithmetic.js');
const assert = require('assert');

let message = '';

message = arithmetic.add();
assert.strictEqual(message, null, 'At least two parameters required');

message = arithmetic.add(1, 'A');
assert.strictEqual(message, null, 'Both parameters must be numbers');

message = arithmetic.add(1, 2);
assert.strictEqual(message, 3, 'Does not match');

message = arithmetic.sub();
assert.strictEqual(message, null, 'At least two parameters required');

message = arithmetic.sub(1, 'A');
assert.strictEqual(message, null, 'Both parameters must be numbers');

message = arithmetic.sub(1, 2);
assert.strictEqual(message, 1, 'Does not match');