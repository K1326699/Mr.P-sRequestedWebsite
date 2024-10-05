var blink_speed = 1; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingDiv');
    var ele2 = document.getElementById('myBlinkingDivs');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    ele2.style.visibility = (ele2.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

var blink_speed = 9999; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var elee = document.getElementById('wind');
    elee.style.visibility = (elee.style.backgroundImage == 'hidden' ? '' : 'hidden');
}, blink_speed);

function blarg() {
    const audio = new Audio('/siren.wav');
        audio.play();
}

function other() {
    setTimeout(blarg, 1000);
    setTimeout(blarg, 100);
    setTimeout(blarg, 2000);
    setTimeout(blarg, 10);
    setTimeout(blarg, 1);
    setTimeout(blarg, 10000);
    setTimeout(blarg, 1000);
    setTimeout(blarg, 100);
    setTimeout(blarg, 2000);
    setTimeout(blarg, 10);
    setTimeout(blarg, 1);
    setTimeout(blarg, 10000);
    setTimeout(blarg, 1000);
    setTimeout(blarg, 100);
    setTimeout(blarg, 2000);
    setTimeout(blarg, 10);
    setTimeout(blarg, 1);
    setTimeout(blarg, 10000);
    setTimeout(blarg, 1000);
    setTimeout(blarg, 100);
    setTimeout(blarg, 2000);
    setTimeout(blarg, 10);
    setTimeout(blarg, 1);
    setTimeout(blarg, 10000);
}