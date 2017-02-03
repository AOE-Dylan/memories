console.log("Sanity Check");

function background(card) {
  var images = ["url('./css/assets/trollFace1.jpg')", "url('./css/assets/trollFace2.png')", "url('./css/assets/trollFace3.png')", "url('./css/assets/trollFace4.jpg')"];
  document.getElementById(card).style.backgroundImage = images[Math.floor((Math.random() * 4))];
}

