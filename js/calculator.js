
var textbox = document.getElementById("textBox");
var operator;
var firstNumber;

document.getElementById("one").onclick = function(){
	onNumberButtonClicked("1")
}

document.getElementById("two").onclick = function(){
	onNumberButtonClicked("2")
}


document.getElementById("three").onclick = function(){
	onNumberButtonClicked("3")
}

document.getElementById("four").onclick = function(){
	onNumberButtonClicked("4")
}

document.getElementById("five").onclick = function(){
	onNumberButtonClicked("5")
}

document.getElementById("six").onclick = function(){
	onNumberButtonClicked("6")
}

document.getElementById("add").onclick = function(){
	onOperatorClicked("+")
}

  
document.getElementById("equals").onclick = function(){
	onEqualToClicked()
}


function onNumberButtonClicked(x){
	var currentInnerHtmlText = textbox.innerHTML;
	textbox.innerHTML = currentInnerHtmlText+x
}

function onOperatorClicked(y){
	var currentInnerHtmlText = textbox.innerHTML; 
	firstNumber = currentInnerHtmlText;
	operator = y
	textbox.innerHTML = ""
}
function onEqualToClicked(){
		var currentInnerHtmlText = textbox.innerHTML; 
		secondNumber = currentInnerHtmlText;
	switch (operator){


		case "+":
		var answer  =  Number(firstNumber) + Number(secondNumber);
		textbox.innerHTML = answer;
		break;



		case "-":
		var answer  =  Number(firstNumber) - Number(secondNumber);
		textbox.innerHTML = answer;
		break


		default:
		break;
	}

}