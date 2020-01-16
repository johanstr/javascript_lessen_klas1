var imgTag;
var btnTag;

imgTag = document.getElementsByTagName('img')[0];
btnTag = document.getElementsByTagName('button')[0];

imgTag.addEventListener('mouseover', function() {
    imgTag.src = "img/call_of_duty_puss.jpg";
});

btnTag.addEventListener('click', function() {
    imgTag.src = "img/steam_logo.png";
});

