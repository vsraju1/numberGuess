
const user_guesses = 10;

const btn = document.getElementById("subt");
console.log(btn);
const guessed_num = document.getElementById("guessfield");
console.log(guessed_num);
const random_number = Math.floor(Math.random() * 100)+1;
console.log(random_number);

btn.addEventListener("click", function(e){
    const user_enter_num = guessed_num.value;
    console.log(isNaN(user_enter_num));
    if (isNaN(user_enter_num)){
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "oops, Enter number only"
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = ""
    }else
    {
      if (random_number === user_enter_num){
        document.getElementById("prev_guess").innerHTML = user_enter_num;
      } 
      else{
        document.getElementById("prev_guess").innerHTML = user_enter_num;
      } 
    }
})
