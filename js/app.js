var images = ["url('./css/assets/trollFace1.jpg')", "url('./css/assets/trollFace2.png')", "url('./css/assets/trollFace3.png')", "url('./css/assets/trollFace4.jpg')"];
var clicks = 0;

function background(card) {
  document.getElementById(card).style.backgroundImage = images[Math.floor(Math.random() * images.length)];
  
  clicks += 1;
  console.log(clicks);
  
  var firstPic;
  var firstCard;
  var secondPic;
  var secondCard;

  if (clicks === 1) {
    firstPic = document.getElementById(card).style.backgroundImage;
    firstCard = 'card';
    console.log(firstPic);
    console.log(firstCard);
  }

  if (clicks === 2) {
    secondPic = document.getElementById(card).style.backgroundImage;
    secondCard = 'card';
    console.log(secondPic);
    console.log(secondCard);
  }

  if (firstPic === secondPic) {
    document.getElementById(firstCard).style.display = "none";
    document.getElementById(secondCard).style.display = "none";
  }

//  if (document.getElementById(card).style.backgroundImage == images[0]) {
 //   console.log("image[1]", images[0]);
  //  images.splice(0, 1);
 // } else if (document.getElementById(card).style.backgroundImage == images[1]) {
  //  console.log("image[2]", images[1]);
  //  images.splice(1, 1);
 // } else if (document.getElementById(card).style.backgroundImage == images[2]) {
 //   console.log("image[3]", images[2]);
 //   images.splice(2, 1);
 // } else if (document.getElementById(card).style.backgroundImage == images[3]) {
 //   console.log("image[4]", images[3]);
 //   images.splice(3, 1);
 // }
}

function flipBack(box) {
  console.log("executed flipBack")
  if (clicks === 2) {
    document.getElementById(box).style.backgroundImage == "url(./assets/cardBack.jpg)";
  }
}


//function noRepeat(a) {
  //console.log("executed noRepeat");

 

  