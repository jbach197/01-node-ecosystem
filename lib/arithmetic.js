'use strict';

module.exports = exports = {};

exports.add = (num1, num2) => {
    if(typeof num1 !== Number || typeof num2 !== Number) {return null;}
        return [num1 + num2];
};

exports.sub = (num1, num2) => {
   if(typeof num1 !== number || typeof num2 !== number) {return null;}
      return num2 - num1;
};