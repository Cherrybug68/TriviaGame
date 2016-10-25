"use strict";

// pos = position variable...what question they are on
var counter = null;

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var start = false;

// last item in array is the answer
var questions = [
	["Where is the headquarters of the Coca-Cola Company", "Detroit, MI", "Charlotte, NC", "Miami, Fl", "Atlanta, GA", "D"],
	["In what year was Coca-Cola founded?", "1871", "1892", "1915", "1923", "B"],
	["On May 15, 1950, Coca-Cola became the first consumer product to appear on the cover of what magazine?", "News Week", "U.S. News & World Report", "Time", "The Saturday Evening Post", "C"],
	["Who was the inventor of Coca-Cola?", "John Styth Pemberton", "E. H. Bloodworth", "A. O. Murphy", "J.C. Mayfield", "A"],
	["What beverage was Coca-Cola's first attempt to develop a diet soft drink?", "Diet Coke", "Tab", "Coke Light", "Diet Sprite", "B"],
	["What does 'Coca-Cola' translated into Chinese mean?", "'To Enjoy'", "'The Real Thing'", "'Cola of Kings'", "'To Make Mouth Happy'", "D"],
	["How many artistic creations did Norman Rockwell paint for Coca-Cola's advertising?", "6", "7", "8", "9", "A"],
	["How much did Asa Griggs Candler pay for the rights to make Coca-Cola in 1888?", "1,000", "1,750", "2,300", "2,500", "C"],
	["In what year, did Coca-Cola make it's biggest marketing blunder with the introduction of 'New Coke'?", "1984", "1985", "1986", "1987", "B"],
	["Where was the iconic 1970 I'd Like to Teach the World to Sing commercial filmed?", "Madera, California", "Inverness, Scottland", "London, England", "Rome, Italy", "B"],
];

	var count = 10;

// Timer Function
function renderTimer (){

	counter = setInterval(timer, 1000);


}

	function timer (){
		count -= 1;
		if (count < 1) {
			clearInterval(counter);
			count = 10;
			checkAnswer();
			return false;
		}
		document.getElementById("timer").innerHTML=count + " secs";
	}

// Writes the questions and multiple choice answers to the screen
function renderQuestion() {
	renderTimer();

	test = document.getElementById("test");

	if (pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		document.getElementById("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
	}

	// displays text at top of page saying "Question x of y"...x = the question number and y being the total number of questions you have in your array.
	document.getElementById("test_status").innerHTML = "Question " + (pos+1)+" of "+questions.length;

	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];


	// writes question to the screen
	test.innerHTML = "<h3>"+question+"</h3>";

	// writes answers to the screen with radio buttons. Need to use += so that it will append to the data that was started on the line above
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";

	// creates a "Submit Answer" button. and runs a function that will check the answer when the button is clicked
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

	if (timer == 0) {
		console.log(timer);
		test.getElembenById('button').click();
	}
}


// function to check the answer
function checkAnswer(){

	clearInterval(counter);

	// captures the choice (what user selects) selected from the choices (the array of the possible answers)
	choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++){
		if(choices[i].checked){
		choice = choices[i].value;
		}
	}

	// checks to see if choice (what user selected) matches the answer (last item in the questions array)
	if (choice == questions[pos][5]) {
		// adds one to the correct answer tally
		answer.innerHTML += "You are correct! The answer was " + questions[pos][5];
		correct++;
	}
	else
		answer.innerHTML += "Sorry! The answer was " + questions[pos][5];

	// increment the position of what question they are on
	pos++;

	// renders next question
	renderQuestion();
}

// // runs the function "renderQuestion" after page loads
window.addEventListener("load", renderQuestion);


