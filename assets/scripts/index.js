'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('../../src/jquery.qrcode.js');
let QrCode = require('qrcode-reader');
let qr = new QrCode();
let text = '';

// generate a qr code
$('#email').on('keyup', function () {
  text = $(this).val();
});
$('#submit').on('click', function () {
  console.log(text);
  $('#qrcodeCanvas').qrcode({
    render: 'canvas',
    text: text,
  });
});

//decode
$('#decode').on('click', function () {
  let img = new Image();
  qr.callback = function (result, err) {
    if (result) {
      $('h1').html(result);
      console.log(result);
    }
  };

  img.src = canvas.toDataURL();
  qr.decode(img.src);
});
