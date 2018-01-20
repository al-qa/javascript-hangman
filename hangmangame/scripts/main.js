var guess = 0;

function validateInput()
{
var letter = document.getElementById("letter").value;
<!-- document.getElementById("guess").innerHTML=""; -->


  while(guess < 6){
    if (letter == "h")
    {
    document.getElementById("h").innerHTML="H";
    return;
    }
    if (letter == "a")
    {
    document.getElementById("a").innerHTML="A";
    return;
    }
    if (letter == "l")
    {
    document.getElementById("l").innerHTML="L";
    return;
    }
    if (letter == "o")
    {
    document.getElementById("o").innerHTML="O";
    return;
    }


    guess++;

    if(guess == 6)
    {
      var ulose = document.createElement("h1");
      var node = document.createTextNode("YOU LOSE!!");
      ulose.appendChild(node);
      var element = document.getElementById('youLose');
      element.appendChild(ulose);
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
