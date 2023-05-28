var contenairImage = document.getElementById("imgcont");
var buttonGauche = document.getElementById("direc1");
var buttonDroit = document.getElementById("direc2");

var images = [
  "/img/strawhatt_minimalist_festival_logo_with_a_tree_in_the_desert_317cf379-a0aa-48ea-9585-3e7322a37c2d.png",
  "/img/strawhatt_minimalist_logo_with_a_tree_in_the_desert_348636ea-ae6f-4341-9418-c264640531c0.png",
  "/img/strawhatt_minimalist_logo_with_a_tree_in_the_desert_higth_quali_d8860e68-4b91-46fd-9e9d-b5b41a07e1f6.png",
  "/img/strawhatt_minimalist_logo_with_a_tree_in_the_desert_higth_quali_dd5e75a4-f8ec-4302-8034-1dfcc39c4a24.png",
  "/img/strawhatt_minimalist_logo_with_a_tree_in_the_desert_higth_quali_ec482462-653e-46b1-bf1f-e0b66d84a093.png"
];

var i = 0; // Variable pour suivre l'index de l'image actuelle

function nextImage() {
    console.log(images.length)
  if (i < images.length - 1) { // Vérifier si nous sommes à la dernière image
    i++;
  } else {
    i = 0; // Revenir à la première image
  }
  contenairImage.style.backgroundImage = `url(${images[i]})`;
}

function previousImage() {
  if (i > 0) { // Vérifier si nous sommes à la première image
    i--;
  } else {
    i = images.length - 1; // Aller à la dernière image
  }
  contenairImage.style.backgroundImage = `url(${images[i]})`;
}

buttonGauche.addEventListener('click', previousImage);
buttonDroit.addEventListener('click', nextImage);
