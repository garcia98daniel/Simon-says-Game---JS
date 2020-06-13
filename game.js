let lvl ;
let playerColorsChosen;
let colorSequence ;
window.onload = function() {
  	inicializar();
};

function inicializar(level = 3){
	lvl=level;
	const nivel = document.querySelector(".level");
	nivel.innerHTML=lvl-2;
	btnStart.innerHTML="Your turn";
	playerColorsChosen = [];
	colorSequence = [];
}

function start(){
	const cubo = document.querySelectorAll(".cube").forEach(cubo => {
	  cubo.addEventListener('click', event => {
    	playerTurn(event.target.getAttribute('name'));
  	  })
	})

	const btnStart = document.querySelector(".btn_start");

	 colorSequence = [];

	for (let i = 0; i < lvl; i++) {
		let color = generate_random_number();

		setTimeout(function(){
     		showing_simons_colors(color);
	  	},1500 * i);

		colorSequence.push(color);
	}
	
	setTimeout(function(){//restablecemos el boton
		btnStart.style.transform = "scale(1)";
		btnStart.style.borderColor  = "black";
		btnStart.style.color  = "black";
		btnStart.innerHTML="Your turn";
	},1500 * lvl);

	// console.log(colorSequence);
}

function generate_random_number(){
	let randomNumber = Math.floor((Math.random() * 5) + 1);
	return randomNumber;
}

function showing_simons_colors(color){

   		change_color(color); 

   		setTimeout(function(){
     		reset_color();
	  	},1500 );
	  
}

function change_color(div) {
	const blueLight = document.querySelector(".cube_1");
	const redLight = document.querySelector(".cube_2");
	const greenLight = document.querySelector(".cube_3");
	const aquaLight = document.querySelector(".cube_4");
	const yellowLight = document.querySelector(".center_cube");

	const btnStart = document.querySelector(".btn_start");
	  setTimeout(function() { 
	      	switch (div) {
				  case 1:
				  		blueLight.style.backgroundColor="blue";
						btnStart.style.background  = "blue";
						// console.log(div+"blue");

				  	   break;
				  case 2:
				  		redLight.style.backgroundColor="red";
						btnStart.style.background  = "red";

						// console.log(div+"red");

				  	   break;
				  case 3:
				  		greenLight.style.backgroundColor="#00bd00";
						btnStart.style.background  = "#00bd00";

						// console.log(div+"green");

				  	   break;
				  case 4:
				  		aquaLight.style.backgroundColor="#00e2ff";
						btnStart.style.background  = "#00e2ff";
						// console.log(div+"agua");

				  	   break;
				  case 5:
				  		yellowLight.style.backgroundColor="yellow";
						btnStart.style.background  = "yellow";
						// console.log(div+"yellow");

				  	   break;
				  default:
						// console.log(div+"default");
				  	   break;
			}
	  }, 300); 
	}

function reset_color (){
	const blueLight = document.querySelector(".cube_1");
	const redLight = document.querySelector(".cube_2");
	const greenLight = document.querySelector(".cube_3");
	const aquaLight = document.querySelector(".cube_4");
	const yellowLight = document.querySelector(".center_cube");
	const btnStart = document.querySelector(".btn_start");

	btnStart.style.background  = "transparent";

	
	blueLight.style.backgroundColor="darkblue";
	redLight.style.backgroundColor="darkred";
	greenLight.style.backgroundColor="#015a01";
	aquaLight.style.backgroundColor="#007180";
	yellowLight.style.backgroundColor="#81811d";

}

function playerTurn(light) {
	let lightLocal = parseInt(light);
	playerColorsChosen.push(lightLocal);
	change_color(lightLocal); 
	setTimeout(function(){
     		reset_color();
	},700 );
	// console.log(playerColorsChosen);

	
	if(win()==1){
		alert("ganaste");
		lvl++;
		inicializar(lvl);
	}else if(win()==0){
		alert("perdiste");
		inicializar();
	}
}

const win = () => {

		for (let i = 0; i < playerColorsChosen.length; i++) {
			if(colorSequence[i] !== playerColorsChosen[i]){
				// console.log("for")
				return 0;
			}
		}

	if(playerColorsChosen.length > colorSequence.length ){
			// console.log("if2")
		return 0;
	}

	if(playerColorsChosen.length < colorSequence.length ){
		return -1;
	}

	return 1;
};