do{
      var choice = prompt("Rock, paper, scissors, choose your weapon! Type it in lowercase");

     if(choice == "rock"){
     alert("I chose paper, I win");
     }
     else if(choice == "paper"){
     alert("I chose scissors, I win");
     }
     else if(choice == "scissors"){
     alert("I chose rock, I win");
     }
     else{
     alert("Not an option");
      }
        var playAgain = prompt("type 'yes' to try again");
}
while(playAgain == "yes")