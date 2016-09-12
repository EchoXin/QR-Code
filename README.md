# QR Code Research
##Introduction

###Background
QR code -- Quick Response Code

Invented by Denso Wave in 1994, Japan.
First designed for the automotive industry to track vehicles.

Now, QR codes have become common in consumer advertising. Typically, a smartphone is used as a QR code scanner, displaying the code and converting it to some useful form (such as a standard URL for a website).

###Advantages
Easy to use: camera scanning is much easier and faster than typing

Even though the QR code may be damaged, information still can be taken out of it.
![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/QR_Code_Damaged.jpg/282px-QR_Code_Damaged.jpg)


##Working code

###generate a qr code

require('jquery.qrcode.js');
$('#email').on('keyup', function () {
  text = $(this).val();
});
$('#submit').on('click', function () {
  $('#qrcodeTable').qrcode({
    render: 'canvas',
    text: text,
  });
});

[other option](http://www.hashbangcode.com/blog/easy-qr-code-generation-google-charts-api)

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $('textarea#inputtext').keydown(function(e) {
    $('img#qrcode').attr('src', 'https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=' + $('textarea#inputtext').val() + '&choe=UTF-8');
  });
});
</script>

###decode a qr code

let QrCode = require('qrcode-reader');
let qr = new QrCode();

$('#decode').on('click', function () {
  let img = new Image();
  qr.callback = function (result, err) {
    if (result) {
      $('h1').html(result);
    }
  };
  img.src = canvas.toDataURL();
  qr.decode(img.src);
});


##Next Step

Use camera to scan a qr code

Create Api to store the data from qr code

## Resources:

[QR code](https://en.wikipedia.org/wiki/QR_code)

QRCode Reader: [jsqrcode](https://github.com/edi9999/jsqrcode)

QRCode Generator: [jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)
