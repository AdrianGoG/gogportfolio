//===========SCROLL & RESPONSIVE MENU=================//
$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
//==========END SCROLL & RESPONSIVE MENU============//

//========START MODAL FUNCTION HOME PAGE============//
document.getElementById('click').onclick = function(){

  
  operationsett();

}

  function operationsett(){

    // Get the modal
    var modalsett = document.getElementById("myModalprof");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    var span = document.getElementById("closesett");

// When the user clicks on the button, open the modal
    
    modalsett.style.display = "block";

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modalsett.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modalsett) {
    modalsett.style.display = "none";
  }
}
}


document.getElementById('button').onclick = function(ev){

  ev.preventDefault();
  operation();

}

  function operation(){

    var modal = document.getElementById("myModal");

    var span = document.getElementById("close");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}

document.getElementById('buttontwo').onclick = function(ev){

  ev.preventDefault();
  operationtwo();

}

  function operationtwo(){

   
    var modaltwo = document.getElementById("myModaltwo");

    var span = document.getElementById("closetwo");
  
    modaltwo.style.display = "block";

    span.onclick = function() {
    modaltwo.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modaltwo) {
    modaltwo.style.display = "none";
  }
} 
}

document.getElementById('buttonthree').onclick = function(ev){

  ev.preventDefault();
  operationthree();

}

  function operationthree(){

    var modalthree = document.getElementById("myModalthree");

    var span = document.getElementById("closethree");
    
    modalthree.style.display = "block";

    span.onclick = function() {
    modalthree.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modalthree) {
    modalthree.style.display = "none";
  }
} 
}


document.getElementById('buttonfor').onclick = function(ev){

  ev.preventDefault();
  operationfor();

}

  function operationfor(){

    var modalfor = document.getElementById("myModalfor");

    var span = document.getElementById("closefor");

    modalfor.style.display = "block";

    span.onclick = function() {
    modalfor.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modalfor) {
    modalfor.style.display = "none";
  }
} 
}



document.getElementById('buttonfive').onclick = function(ev){

  ev.preventDefault();
  operationfive();

}

  function operationfive(){

    var modalfive = document.getElementById("myModalfive");

    var span = document.getElementById("closefive");
    
    modalfive.style.display = "block";

    span.onclick = function() {
    modalfive.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modalfive) {
    modalfive.style.display = "none";
  }
} 
}


document.getElementById('buttonsix').onclick = function(ev){

  ev.preventDefault();
  operationsix();

}

  function operationsix(){

    var modalsix = document.getElementById("myModalsix");

    var span = document.getElementById("closesix");

    modalsix.style.display = "block";

    span.onclick = function() {
    modalsix.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modalsix) {
    modalsix.style.display = "none";
  }
} 
}
//============END MODAL FUNCTIONS EDUCATION PAGE============//
//==========END MODAL FUNCTION HOME PAGE============//

//==============START FUNCTION DARK MODE============//
document.getElementById('drk').onclick = function() {
    
    darkmodesystem();
}

var clicked = false;
var clickedtwo = false;
function darkmodesystem(){

    if (!clicked) {

        clicked = true;
        document.body.style.background = '#6699ff';
        document.getElementById('theme').style.background = '#3377ff';
        //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#00264d";
        y[i].style.color = "white";
        } 
        //===============================================//
        document.getElementById('boton').style.backgroundColor = '#00264d';

    } else {

        clicked = false;
        document.body.style.background = '#111';
        document.getElementById('theme').style.background = '#1a1a1a';
       //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#333";
        y[i].style.color = "white";
        } 
       //==============================================//
        document.getElementById('boton').style.backgroundColor = '#333';
    }

    if (!clickedtwo) {

        clickedtwo = true;
        document.body.style.background = '#6699ff';
        document.getElementById('theme').style.background = '#3377ff';
        //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#00264d";
        y[i].style.color = "white";
        } 
        //===============================================//
        document.getElementById('buxu').style.background = 'red';
        document.getElementById('buxutwo').style.background = '#002266';
        document.getElementById('buxuthr').style.background = '#002266';
        document.getElementById('buxufor').style.background = '#002266';
        document.getElementById('butonel').style.background = 'red';

    } else {

        clickedtwo = false;
        document.body.style.background = '#111';
        document.getElementById('theme').style.background = '#1a1a1a';
       //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#333";
        y[i].style.color = "white";
        } 
       //==============================================//
       document.getElementById('buxu').style.background = '#222';
       document.getElementById('buxutwo').style.background = '#222';
       document.getElementById('buxuthr').style.background = '#222';
       document.getElementById('buxufor').style.background = '#222';
    
}
}


document.getElementById('drk').onclick = function() {
    
    darkmodesystem();
}

var clicked = false;
var clickedtwo = false;
function darkmodesystem(){

    if (!clicked) {

        clicked = true;
        document.body.style.background = '#6699ff';
        document.getElementById('theme').style.background = '#3377ff';
        //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#00264d";
        y[i].style.color = "white";
        } 
        //===============================================//

    } else {

        clicked = false;
        document.body.style.background = '#111';
        document.getElementById('theme').style.background = '#1a1a1a';
       //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#333";
        y[i].style.color = "white";
        } 
       //==============================================//
       
    }
    }

    document.getElementById('drk').onclick = function() {
    
    darkmodesystem();
}

var clicked = false;
function darkmodesystem(){

    if (!clicked) {

        clicked = true;
        document.body.style.background = '#6699ff';
        document.getElementById('theme').style.background = '#3377ff';
        //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#00264d";
        y[i].style.color = "white";
        } 
        //===============================================//
        document.getElementById('buxu').style.background = '#00264d';
        document.getElementById('buxutwo').style.background = '#00264d';
        document.getElementById('buxuthr').style.background = '#00264d';
        document.getElementById('buxufor').style.background = '#00264d';
        document.getElementById('butonel').style.background = '#00264d';

        document.getElementById('iconone').style.color = '#00264d';
        document.getElementById('icontwo').style.color = '#00264d';
        document.getElementById('iconthree').style.color = '#00264d';
        document.getElementById('iconfor').style.color = '#00264d';
        document.getElementById('biti').style.backgroundColor = '#00264d';
        document.getElementById('boton').style.backgroundColor = '#00264d';
        document.getElementById('socialone').style.backgroundColor = '#00264d';
        document.getElementById('socialtwo').style.backgroundColor = '#00264d';
        document.getElementById('socialthree').style.backgroundColor = '#00264d';
    } else {

        clicked = false;
        document.body.style.background = '#111';
        document.getElementById('theme').style.background = '#1a1a1a';
       //===============================================//
        var y = document.getElementsByTagName('a');
        var i;
        for (i = 1; i < y.length; i++) {
        y[i].style.backgroundColor = "#333";
        y[i].style.color = "white";
        } 
       //==============================================//
        document.getElementById('buxu').style.background = '#222';
        document.getElementById('buxutwo').style.background = '#222';
        document.getElementById('buxuthr').style.background = '#222';
        document.getElementById('buxufor').style.background = '#222';
        document.getElementById('butonel').style.background = '#333';
        
        document.getElementById('iconone').style.color = '#008000';
        document.getElementById('icontwo').style.color = '#008000';
        document.getElementById('iconthree').style.color = '#008000';
        document.getElementById('iconfor').style.color = '#008000';
        document.getElementById('biti').style.backgroundColor = '#333';
        document.getElementById('boton').style.backgroundColor = '#333';
        document.getElementById('socialone').style.backgroundColor = '#333';
        document.getElementById('socialtwo').style.backgroundColor = '#333';
        document.getElementById('socialthree').style.backgroundColor = '#333';      
    }   
}



//================END FUNCTION DARK MODE============//



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





document.getElementById('detailsone').onclick = function(ev){

  ev.preventDefault();
  detailsfuncone();

}

  function detailsfuncone(){

    var modal = document.getElementById("modaldetailsone");

    var span = document.getElementById("closedetailsone");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}

document.getElementById('detailstwo').onclick = function(ev){

  ev.preventDefault();
  detailsfunctwo();

}

  function detailsfunctwo(){

    var modal = document.getElementById("modaldetailstwo");

    var span = document.getElementById("closedetailstwo");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}


document.getElementById('detailsthree').onclick = function(ev){

  ev.preventDefault();
  detailsfuncthree();

}

  function detailsfuncthree(){

    var modal = document.getElementById("modaldetailsthree");

    var span = document.getElementById("closedetailsthree");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}



document.getElementById('detailsfive').onclick = function(ev){

  ev.preventDefault();
  detailsfuncfive();

}

  function detailsfuncfive(){

    var modal = document.getElementById("modaldetailsfive");

    var span = document.getElementById("closedetailsfive");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}


document.getElementById('detailsix').onclick = function(ev){

  ev.preventDefault();
  detailsfuncsix();

}

  function detailsfuncsix(){

    var modal = document.getElementById("modaldetailsix");

    var span = document.getElementById("closedetailsix");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}


document.getElementById('detailseight').onclick = function(ev){

  ev.preventDefault();
  detailsfuncseight();

}

  function detailsfuncseight(){

    var modal = document.getElementById("modaldetaileight");

    var span = document.getElementById("closedetailseight");

    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}