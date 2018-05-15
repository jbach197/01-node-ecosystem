'use strict';


const arithmetic = require('../../lib/arithmetic.js');
const assert = require('assert');

let message = '';


message = arithmetic.add(1, 2);
assert.strictEqual(message, 3, 'Does not match');

message = arithmetic.sub(1, 2);
assert.strictEqual(message, 1, 'Does not match');