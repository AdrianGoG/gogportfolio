//==============VARIABLES KEYS==============//
var esc = document.getElementById('esc');
var fone = document.getElementById('fone');
var ftwo = document.getElementById('ftwo');
var fthree = document.getElementById('fthree');
var ffor = document.getElementById('ffor');
var ffive = document.getElementById('ffive');
var fsix = document.getElementById('fsix');
var fseven = document.getElementById('fseven');
var feight = document.getElementById('feight');
var fnine = document.getElementById('fnine');
var ften = document.getElementById('ften');
var feleven = document.getElementById('feleven');
var ftwelve = document.getElementById('ftwelve');
var prtsc = document.getElementById('prtsc');
var scrlk = document.getElementById('scrlk');
var pause = document.getElementById('pause');
var tilda = document.getElementById('tilda');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var forr = document.getElementById('forr');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var minus = document.getElementById('minus');
var equal = document.getElementById('equal');
var backspace = document.getElementById('backspace');
var tab = document.getElementById('tab');
var qk = document.getElementById('qk');
var wk = document.getElementById('wk');
var ek = document.getElementById('ek');
var rk = document.getElementById('rk');
var tk = document.getElementById('tk');
var yk = document.getElementById('yk');
var uk = document.getElementById('uk');
var ik = document.getElementById('ik');
var ok = document.getElementById('ok');
var pk = document.getElementById('pk');
var paral = document.getElementById('paral');
var parar = document.getElementById('parar');
var lines = document.getElementById('lines');
var del = document.getElementById('del');
var end = document.getElementById('end');
var pgdn = document.getElementById('pgdn');
var cplk = document.getElementById('cplk');
var ak = document.getElementById('ak');
var sk = document.getElementById('sk');
var dk = document.getElementById('dk');
var fk = document.getElementById('fk');
var gk = document.getElementById('gk');
var hk = document.getElementById('hk');
var jk = document.getElementById('jk');
var kk = document.getElementById('kk');
var lk = document.getElementById('lk');
var points = document.getElementById('points');
var dots = document.getElementById('dots');
var enter = document.getElementById('enter');
var shift = document.getElementById('shift');
var zk = document.getElementById('zk');
var xk = document.getElementById('xk');
var ck = document.getElementById('ck');
var vk = document.getElementById('vk');
var bk = document.getElementById('bk');
var nk = document.getElementById('nk');
var mk = document.getElementById('mk');
var smallk = document.getElementById('smallk');
var bigk = document.getElementById('bigk');
var quest = document.getElementById('quest');
var shiftwo = document.getElementById('shiftwo');
var ctrl = document.getElementById('ctrl');
var windows = document.getElementById('windows');
var alt = document.getElementById('alt');
var space = document.getElementById('space');
var altwo = document.getElementById('altwo');
var fn = document.getElementById('fn');
var prnt = document.getElementById('prnt');
var ctrltwo = document.getElementById('ctrltwo');

//varLOG
var wlog = document.getElementById('log');
//====================END VARIABLES==================//

//====================TEST KEYBOARD==============//
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode === 27) {
      esc.style.backgroundColor = 'darkorchid';
      wlog.innerHTML += 'You pressed ESC key' + '<br>';
      evt.preventDefault();
  } else if(evt.keyCode === 112){
    fone.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F1 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 113){
    ftwo.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F2 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 114){
    fthree.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F3 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 115){
    ffor.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F4 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 116){
    ffive.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F5 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 117){
    fsix.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F6 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 118){
    fseven.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F7 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 119){
    feight.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F8 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 120){
    fnine.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F9 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 121){
    ften.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F10 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 122){
    feleven.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F11 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 123){
    ftwelve.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F12 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode == 44){
    prtsc.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed PRTSC key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 145){
    scrlk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed SCRLK key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 19){
    pause.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed PAUSE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 192){
    tilda.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed TILDE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 49){
    one.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 1 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 50){
    two.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 2 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 51){
    three.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 3 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 52){
    forr.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 4 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 53){
    five.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 5 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 54){
    six.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 6 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 55){
    seven.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 7 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 56){
    eight.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 8 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 57){
    nine.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 9 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 48){
    zero.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 0 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 173){
    minus.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed - _ key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 61){
    equal.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed = + key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 8){
    backspace.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed BACKSPACE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 45){
    insert.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed INSERT key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 36){
    home.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed HOME key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 33){
    pgup.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed PGUP key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 9){
    tab.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed TAB key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 81){
    qk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed Q key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 87){
    wk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed W key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 69){
    ek.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed E key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 82){
    rk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed R key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 84){
    tk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed T key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 89){
    yk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed Y key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 85){
    uk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed U key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 73){
    ik.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed I key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 79){
    ok.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed O key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 80){
    pk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed P key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 219){
    paral.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed [{ key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 221){
    parar.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ]} key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 220){
    lines.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed LINES key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 46){
    del.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed DELETE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 35){
    end.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed END key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 34){
    pgdn.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed PGDN key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 20){
    cplk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed CAPSLOCK key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 65){
    ak.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed A key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 83){
    sk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed S key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 68){
    dk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed D key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 70){
    fk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed F key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 71){
    gk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed G key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 72){
    hk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed H key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 74){
    jk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed J key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 75){
    kk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed K key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 76){
    lk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed L key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 59){
    points.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed POINTS key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 222){
    dots.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed DOTS key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 13){
    enter.style.backgroundColor = 'darkorchid';
    enterr.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ENTER key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 16){
    shift.style.backgroundColor = 'darkorchid';
    shiftwo.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed SHIFT key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 90){
    zk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed Z key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 88){
    xk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed X key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 67){
    ck.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed C key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 86){
    vk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed V key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 66){
    bk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed B key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 78){
    nk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed N key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 77){
    mk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed M key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 188){
    smallk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed < key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 190){
    bigk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed > key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 191){
    quest.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ? key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 17){
    ctrl.style.backgroundColor = 'darkorchid';
    ctrltwo.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed CTRL key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 91){
    windows.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed WINDOWS key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 18){
    alt.style.backgroundColor = 'darkorchid';
    altwo.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ALT key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 32){
    space.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed SPACE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 93){
    prnt.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed PAGE key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 144){
    numlk.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed NUMLOCK key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 39){
    aright.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ▶️ key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 40){
    adown.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 🔽 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 38){
    aup.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 🔼 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 37){
    aleft.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed ◀️ key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 111){
    bar.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed SLASH key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 106){
    star.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed * key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 109){
    menos.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed - key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 107){
    plas.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed + key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 110){
    poiint.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed . key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 105){
    neein.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 9 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 104){
    eeight.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 8 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 103){
    seeven.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 7 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 102){
    siix.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 6 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 101){
    fiive.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 5 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 100){
    foor.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 4 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 99){
    thhree.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 3 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 98){
    twwo.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 2 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 97){
    onne.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 1 key' + '<br>';
    evt.preventDefault();
  } else if(evt.keyCode === 96){
    zeero.style.backgroundColor = 'darkorchid';
    wlog.innerHTML += 'You pressed 0 key' + '<br>';
    evt.preventDefault();
  } 

};
//=============END TESTING KEYBOARD====================//


//===============TESTING MOUSE=======================//
//===VARIABLES===//
var clk = document.getElementById('clkleft');
var clktwo = document.getElementById('clkmid');
var clkthree = document.getElementById('clkright');

//===END VARIABLES===//

$("#myId").mousedown(function(ev){
  if(ev.which === 1){
      clk.style.backgroundColor = 'darkorchid';
      wlog.innerHTML += 'You pressed Left click' + '<br>';
  } else if(ev.which === 2){
      clktwo.style.backgroundColor = 'darkorchid';
      wlog.innerHTML += 'You pressed Middle click' + '<br>';
  } else if(ev.which === 3){
      clkthree.style.backgroundColor = 'darkorchid';
      wlog.innerHTML += 'You pressed Right click' + '<br>';
      ev.preventDefault();
  }
});


//Click right prevent default to open menu
window.addEventListener("contextmenu", e => e.preventDefault());
//==================END TESTING MOUSE================//