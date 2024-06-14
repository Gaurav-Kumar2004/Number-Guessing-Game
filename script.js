const max = prompt("Enter the maximum  number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if(guess == "quit")
        {
            console.log("user Quit..");
            break;
        }
    if(guess == random)
        {
            prompt("You are right..No is-" + random);
            break;
        }
    else if(guess < random)
        {
            guess= prompt("Hint : your guess was too small..Try again");
        }
    else if(guess > random)
        {
            guess = prompt("Hint : your guess was too big..Try again")
        }
    
    
    
    
    
    
    
        // else
    // {
    //     guess = prompt("your guess was wrong..Try again")
    // }
}