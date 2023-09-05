
const user_guesses = 10;

const btn = document.getElementById("subt");
console.log(btn);
const guessed_num = document.getElementById("guessfield");
console.log(guessed_num);
// const random_number = Math.floor(Math.random() * 100)+1;
// console.log(random_number);

btn.addEventListener("click", function(e){
    const random_number = Math.floor(Math.random() * 100)+1;
    console.log(random_number);
    const user_enter_num = guessed_num.value;
    console.log(isNaN(user_enter_num));
    if (isNaN(user_enter_num)){
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "oops, Enter number only"
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = ""
    }else
    {
      if (random_number === user_enter_num){
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "The number is "+ random_number + " and your number is "+ user_enter_num;
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = "Congratulation you have guessed the number"
      } 
      else{
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "The number is "+ random_number + " and your number is "+ user_enter_num;
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = "oops, looks like you failed try again"
      } 
    }
})
