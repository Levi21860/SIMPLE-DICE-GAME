var randnum1= Math.floor(Math.random()*6)+1;
var randnum2= Math.floor(Math.random()*6)+1;
var src1="./images/dice"+randnum1+".png";
var src2="./images/dice"+randnum2+".png";
document.querySelectorAll("img")[0].setAttribute("src",src1);
document.querySelectorAll("img")[1].setAttribute("src",src2);
if (randnum1>randnum2){
    document.querySelector("h1").innerText = "PLAYER 1 WINS!";

}
else if(randnum1<randnum2){
    document.querySelector("h1").innerText="PLAYER 2 WINS!";

}
else{
    document.querySelector("h1").innerText="DRAW!";
}