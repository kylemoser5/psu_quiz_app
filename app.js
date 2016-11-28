var currentQuestion = 0, test, test_status, question, 
choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
	["How many wins, all-time, does Penn State have?", "863", "450", "680", "951", "A"],
	["When was the last time Penn State was crowned as Big Ten Champions?", "2010", "1995", "2008", "2005", "C"],
	["In what year was the construction of Beaver Stadium completed?", "1970", "1920", "1959", "1958", "C"],
	["How many bowl games has Penn State played in total?", "65", "45", "35", "70", "B"],
	["What team did Penn State beat to earn its first ever win?", "Lehigh", "Notre Dame", "Brown", "Bucknell", "A"],
	["Who is Penn State's all-time leading rusher?", "Curt Warner", "Larry Johnson, Jr.", "Evan Royster", "Kijana Carter", "C"],
	["Which team did Penn State beat to earn James Franklin his first win as Head Coach?", "Central Florida", "Akron", "Kent State", "Buffalo", "A"],
	["In what year did Penn State play in its first ever Rose Bowl game?", "1950", "1986", "1923", "1995", "C"],
	["What were Penn State's original colors?", "Black & White", "Black & Blue", "Black & Yellow", "Black & Pink", "D"],
	["How many times has Beaver Stadium been expanded since its original construction?", "5", "6", "7", "3", "B"]
];

function _(x) {
	return document.getElementById(x);
}

function renderQuestion () {
	test = _("test");
	if (currentQuestion >= questions.length) {
		var audio = new Audio('roar.mp3');
		audio.play();
		test.innerHTML = "<h3>You got "+correct+" correct out of "+questions.length;
		_("test_status").innerHTML = "We Are!!!!";
		_("restart").innerHTML = "<button onclick='restartQuiz()'>Restart Quiz</button>";
		currentQuestion=0;
		score=0;
		return false;
	}

	_("test_status").innerHTML = "Question "+(currentQuestion+1)+" of "+questions.length;
	question = questions[currentQuestion][0];
	chA = questions[currentQuestion][1];
	chB = questions[currentQuestion][2];
	chC = questions[currentQuestion][3];
	chD = questions[currentQuestion][4];
	test.innerHTML= "<h3>"+question+"</h3>";
	test.innerHTML+="<input type='radio' name='choices' value='A'>"+chA+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='B'>"+chB+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='C'>"+chC+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='D'>"+chD+"<br><br>";
	test.innerHTML+="<button onclick='checkAnswer()'>Next Question</button>";
}

function checkAnswer() {
	choices = document.getElementsByName('choices');
	for (var i=0; i<choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[currentQuestion][5]) {
		correct++;
	}

	currentQuestion++;
	renderQuestion();
}

function restartQuiz() {
	currentQuestion = 0;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);











