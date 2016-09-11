'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('../../src/jquery.qrcode.js');
let text = '';
$('#email').on('keyup', function () {
  text = $(this).val();
});
$('#submit').on('click', function () {
  console.log('hi');
  console.log(text);
  $('#qrcodeTable').qrcode({
    render: 'table',
    text: text,
  });
});
