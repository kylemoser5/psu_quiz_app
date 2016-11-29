var currentQuestion = 0, test, test_status, question, 
choice, choices, chA, chB, chC, chD, correct = 0, incorrect=0;

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

function beginQuiz () {
	_("begin_quiz").innerHTML = "This Penn State quiz app tests your knowledge of PSU football.  See how many questions you can get correct!";
	_("begin_quiz").innerHTML += "<button onclick='renderQuestion()'>Begin Quiz</button>";
}

function renderQuestion () {
	test = _("test");
	// once the quiz is finished a roar.mp3 will sound and you will get your score
	_("begin_quiz").innerHTML = " ";
	_("test_status").innerHTML = "Question "+(currentQuestion+1)+" of "+questions.length;
	_("correct_answers").innerHTML = "(" + correct + " correct, " + incorrect + " incorrect)";
	if (currentQuestion >= questions.length) {
		var audio = new Audio('roar.mp3');
		audio.play();
		test.innerHTML = "<h3>You got "+correct+" correct out of "+questions.length;
		_("test_status").innerHTML = "We Are!!!!";
		document.getElementById("restart").classList.remove("hide");
		_("restart").innerHTML = "<button class='show' onclick='restartQuiz()'>Restart Quiz</button>";
		currentQuestion=0;
		score=0;
		return false;
	} 
	question = questions[currentQuestion][0];
	chA = questions[currentQuestion][1];
	chB = questions[currentQuestion][2];
	chC = questions[currentQuestion][3];
	chD = questions[currentQuestion][4];
	test.innerHTML= "<h3>"+question+"</h3>";
	test.innerHTML+="<input type='radio' name='choices' value='A' required>"+chA+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='B' required>"+chB+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='C' required>"+chC+"<br>";
	test.innerHTML+="<input type='radio' name='choices' value='D' required>"+chD+"<br><br>";
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
	if (choice !== questions[currentQuestion][5]) {
		incorrect++;
	}

	if (choice == undefined){
		alert('you need to answer the question')
	}
	else {
		currentQuestion++;
		renderQuestion();
		}
	}

function restartQuiz() {
	_("test_status").innerHTML = " ";
	_("test").innerHTML = " ";
	_("correct_answers").innerHTML = " ";
	document.getElementById("restart").classList.add("hide");
	currentQuestion = 0;
	correct = 0;
	incorrect = 0;
	beginQuiz();

}

console.log(beginQuiz());











