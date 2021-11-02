document.getElementById('dark').onclick = function(ev) {

	ev.preventDefault;
	darkmodesystem();
}

var clicked = false;

function darkmodesystem() {

	if (!clicked) {

		clicked = true;
		document.body.style.transition = "all 2s";
		document.body.style.backgroundColor = "black";
		document.getElementById('content').style.color = 'white';
		document.getElementById('content').style.borderColor = 'white';
		document.getElementById('content2').style.color = 'white';
		document.getElementById('content2').style.borderColor = 'white';
		document.getElementsByTagName("h1")[0].style.color = 'white';
		
	} else {

		clicked = false;
		document.body.style.transition = "all 2s";
		document.body.style.backgroundColor = "white";
		document.getElementById('content').style.color = 'black';
		document.getElementById('content').style.borderColor = 'black';	
		document.getElementById('content2').style.color = 'black';
		document.getElementById('content2').style.borderColor = 'black';
		document.getElementsByTagName("h1")[0].style.color = 'black';
	}
}
