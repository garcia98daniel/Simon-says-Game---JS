let lvl = 5;

function start(){
	var colorSequence = [];

	for (var i = 0; i < lvl; i++) {
		colorSequence.push(generate_random_number());
	}
	showing_simons_colors(colorSequence);
	console.log(colorSequence);
}

function generate_random_number(){
	let randomNumber = Math.floor((Math.random() * 5) + 1);
	return randomNumber;
}

function showing_simons_colors(colors){

	for (let i=0; i<colors.length; i++) { 
   		change_color(colors[i]); 

   		setTimeout(function(){
     		reset_color();
	  	},4000 * i);
	}  
}

function change_color(div) {
	const blueLight = document.querySelector(".cube_1");
	const redLight = document.querySelector(".cube_2");
	const greenLight = document.querySelector(".cube_3");
	const aquaLight = document.querySelector(".cube_4");
	const yellowLight = document.querySelector(".center_cube");

	  setTimeout(function() { 
	      	switch (div) {
				  case 1:
				  		blueLight.style.backgroundColor="blue";
						console.log(div+"blue");

				  	   break;
				  case 2:
				  		redLight.style.backgroundColor="red";
						console.log(div+"red");

				  	   break;
				  case 3:
				  		greenLight.style.backgroundColor="#00bd00";
						console.log(div+"green");

				  	   break;
				  case 4:
				  		aquaLight.style.backgroundColor="#00e2ff";
						console.log(div+"agua");

				  	   break;
				  case 5:
				  		yellowLight.style.backgroundColor="yellow";
						console.log(div+"yellow");

				  	   break;
				  default:
				  	   break;
			}
	  }, 1000 * div); 
	}

function reset_color (){
	const blueLight = document.querySelector(".cube_1");
	const redLight = document.querySelector(".cube_2");
	const greenLight = document.querySelector(".cube_3");
	const aquaLight = document.querySelector(".cube_4");
	const yellowLight = document.querySelector(".center_cube");
	
	blueLight.style.backgroundColor="darkblue";
	redLight.style.backgroundColor="darkred";
	greenLight.style.backgroundColor="#015a01";
	aquaLight.style.backgroundColor="#007180";
	yellowLight.style.backgroundColor="#81811d";

}