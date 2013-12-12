#!/usr/bin/env node

(function(optimist) {
  'use strict';

  var chars = ['0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9',
               'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
               'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
               'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
               'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
               'Y', 'Z'],
      charsLength = chars.length,
      passwordLength = parseInt(optimist.argv.len, 10),
      password = [];

  if (!passwordLength) {
    console.log('You must inform the password length using --len.\nExample: ./sPassword --len=64');
  } else {
    for (var index = 0; index < passwordLength; index++) {
      password.push(chars[Math.floor(Math.random() * charsLength)]);
    }

    console.log(password.join(''));
  }
})(require('optimist'));
