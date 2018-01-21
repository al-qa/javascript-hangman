var guess = 0;
var secretWords = ["halo", "cod", "madden"];

function validateInput()
{
var letter = document.getElementById("letter").value;
//<!-- document.getElementById("guess").innerHTML=""; -->


  while(guess < 6){
    if (letter == "h")
    {
    return document.getElementById("h").innerHTML="H";
    }
    if (letter == "a")
    {
    return document.getElementById("a").innerHTML="A";
    }
    if (letter == "l")
    {
    return document.getElementById("l").innerHTML="L";
    }
    if (letter == "o")
    {
    return document.getElementById("o").innerHTML="O";
    }

    guess++;


    if(guess == 6)
    {
      var youLoseh1 = document.createElement("h1");
      var youLoseNode = document.createTextNode("YOU LOSE!!");
      youLoseh1.appendChild(youLoseNode);
      var youLoseDiv = document.getElementById('youLose');
      youLoseDiv.appendChild(youLoseh1);
    }

    updateImage();
    return;
  }
}


function updateImage()
{
  switch (guess)
  {
  case 1: document.getElementById("pic").src="images/hangman1.png";break;
  case 2: document.getElementById("pic").src="images/hangman2.png";break;
  case 3: document.getElementById("pic").src="images/hangman3.png";break;
  case 4: document.getElementById("pic").src="images/hangman4.png";break;
  case 5: document.getElementById("pic").src="images/hangman5.png";break;
  case 6: document.getElementById("pic").src="images/hangman6.png";break;
  }
return;
}


/*
//This code in not complete! It counts 6 times even if you get an answer correct
//It set to check ehat ever input has been selected and check it against the secretWord
//its not been setup to the code as far as showing in the html yet
//I'm only trying to get the logic together for now did add it

var secretWords = ["halo", "cod", "madden"];
var random = Math.random()*2;

var round = Math.round(random);
var selectedWord =  "halo";  //secretWords[round];

//var guess = "h";
var letter;
var input = "";

var count = 0;

while(count < 6){
   letter = prompt("Enter letter: ");

   checkGuess(letter);
   if(input == selectedWord){
      console.log("You Win!!");
   }
   count++;

   wrongAnswers(count);
}

function wrongAnswers(chance){
   if(chance == 6){
      return console.log("You lose");
   }
}

function checkGuess(guess){
      var n = selectedWord.indexOf(guess);

      if(n == -1){
         return console.log("wrong");
      }else{
         input += selectedWord.charAt(n);
         return console.log(input);
      }
}


*/
