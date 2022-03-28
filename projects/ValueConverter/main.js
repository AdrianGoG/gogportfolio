function myfunc() {

	var selone = document.getElementById('selone').value;  //Take ID first select with value
	var seltwo = document.getElementById('seltwo').value;  //Take ID twice select with value
	var input = document.getElementById('input').value;    //Take input value

	var result = document.getElementById('rez');		//Take ID for show results


//==========EURO-RON============//
	if(selone === "euro" && seltwo === "ron"){

		result.value = Number(input) * 4.95;

	} else if(selone === "euro" && seltwo === "euro") {

		result.value = Number(input)

	} else if(selone === "ron" && seltwo === "euro") {

		result.value = Number(input) / 4.95;

	} else if(selone === "ron" && seltwo === "ron") {

		result.value = Number(input)
	}
//======END EURO-RON=============//


//=========DOLLAR-EURO==========//


	if(selone === "dollar" && seltwo === "euro"){

		result.value = Number(input) * 0.89;

	} else if(selone === "dollar" && seltwo === "dollar") {

		result.value = Number(input)

	} else if(selone === "euro" && seltwo === "dollar") {

		result.value = Number(input) / 0.89;

	}

//=======END DOLLAR-EURO========//


//==========DOLLAR-RON==========//

if(selone === "dollar" && seltwo === "ron"){

	result.value = Number(input) * 4.40;

}  else if(selone === "ron" && seltwo === "dollar") {

	result.value = Number(input) / 4.40;
}

//======END DOLLAR-RON======//


//===========VALIDATION INPUT===========//

	if(isNaN(input)){
		document.getElementById('error').innerHTML = 'Error! Please insert only numbers!';
	} else {
		document.getElementById('error').innerHTML = '';
	}
//=======END VALIDATION INPUT===========//
}


input.addEventListener('keyup', myfunc);
calc.addEventListener('click', myfunc);