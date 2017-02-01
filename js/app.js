console.log("Sanity Check");

document.getElementById('card1').addEventListener("click", flip1());
document.getElementById('card2').addEventListener("click", flip2());
document.getElementById('card3').addEventListener("click", flip3());
document.getElementById('card4').addEventListener("click", flip4());
document.getElementById('card5').addEventListener("click", flip5());
document.getElementById('card6').addEventListener("click", flip6());
document.getElementById('card7').addEventListener("click", flip7());
document.getElementById('card8').addEventListener("click", flip8());

function flip1() {
  document.getElementById('card1').style.backgroundImage = "url('./assets/trollFace1.jpg')";
}
function flip2() {
  document.getElementById('card2').style.backgroundImage = "url('./assets/trollFace2.png')";
}
function flip3() {
  document.getElementById('card3').style.backgroundImage = "url('./assets/trollFace3.png')";

function flip4() {
  document.getElementById('card4').style.backgroundImage = "url('./assets/trollFace4.jpg')";
}
function flip5() {
  document.getElementById('card5').style.backgroundImage = "url('./assets/trollFace1.jpg')";
}
function flip6() {
  document.getElementById('card6').style.backgroundImage = "url('./assets/trollFace2.png')";
}
function flip7() {
  document.getElementById('card7').style.backgroundImage = "url('./assets/trollFace3.png')";
}
function flip8() {
  document.getElementById('card8').style.backgroundImage = "url('./assets/trollFace4.jpg')";
}