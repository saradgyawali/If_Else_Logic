window.onload = function() {
//When the button is clicked
	document.getElementById("pressEnter").onclick = function() {

//Grabs the value from the input and sets it to variable enteredNum
		var enteredNum = document.getElementById("numEnter").value;


//Math.random() returns value from 0-1
		var generatedNum = Math.random();

		generatedNum = generatedNum * 6;

//Math.floor returns the  value rounded down to its nearest integer
		generatedNum = Math.floor(generatedNum);

		
//Checks if enteredNum equals to generatedNum
		if (enteredNum == generatedNum) {
			alert("YOU GOT IT! The number generated was " + generatedNum);
			console.log(generatedNum);
		}
		else {
			alert("Try Again! The number generated was " + generatedNum);
		}
	}

}