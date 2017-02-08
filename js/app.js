console.log("Sanity Check");

var images = ["url('./css/assets/trollFace1.jpg')", "url('./css/assets/trollFace2.png')", "url('./css/assets/trollFace3.png')", "url('./css/assets/trollFace4.jpg')"];

function background(card) {
  document.getElementById(card).style.backgroundImage = images[Math.floor(Math.random() * images.length)];
  if (getElementById(card).style.backgroundImage == images[0]) {
    images.splice(0, 1)
  } else if (getElementById(card).style.backgroundImage == images[1]) {
    images.splice(1, 1)
  } else if (getElementById(card).style.backgroundImage == images[2]) {
    images.splice(2, 1)
  } else if (getElementById(card).style.backgroundImage == images[3]) {
    images.splice(3, 1)
  }
}

  

  