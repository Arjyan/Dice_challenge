 
 
 //below code is for entering player details.

let player1=prompt("Enter player 1 name");
let capitalA= player1.slice(0,1).toUpperCase();
let capitalA1=player1.slice(1,player1.length).toLowerCase();
document.querySelectorAll(".dice p")[0].innerHTML=capitalA + capitalA1;

let player2=prompt("Enter player 2 name");
let capitalB= player2.slice(0,1).toUpperCase();
let capitalB1=player2.slice(1,player2.length).toLowerCase();
document.querySelectorAll(".dice p")[1].innerHTML=capitalB + capitalB1;

function diceGame(){
    // This below code is for random number generation for first dice.
let random1=Math.random();
let roundOff1=Math.floor(random1 * 6);
let randomNumber1=roundOff1 ;
//below line is for generating random number for the second dice.
let randomNumber2=Math.floor(Math.random()*6);

//this below code is for setting the the random images.
var imageArray = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];
var finalImg1=imageArray[randomNumber1];
var finalImg2=imageArray[randomNumber2];

document.querySelectorAll("img")[0].setAttribute("src",finalImg1);
document.querySelectorAll("img")[1].setAttribute("src",finalImg2);

//bellow is the conditional statement for the user output
document.querySelector("button").innerHTML="click to play again";

if(randomNumber1>randomNumber2){
                document.querySelector("h1").innerHTML= capitalA + capitalA1 +" wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent= capitalB + capitalB1+ " wins";
}
else{
    document.querySelector("h1").textContent="Nobody wins";
}


}










