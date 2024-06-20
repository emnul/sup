const sup = document.querySelector('object[data="sup.svg"]');
const colorList = [
   "#FF0000",
   "#00FF00",
   "#0000FF",
   "#FFFF00",
   "#00FFFF",
   "#FF00FF",
   "#FFA500",
   "#D3D3D3",
];

/**
 * Query SVG element only when finished loading
 */
sup.addEventListener("load", function () {
   document.querySelector("button").addEventListener("click", changeColor);
});

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function changeColor() {
   const innerDocument = sup.contentDocument;
   const text = innerDocument.getElementById("text1");
   const color = colorList[getRandomInt(colorList.length)];
   text.setAttribute("fill", color);
   sup.style.borderColor = color;
}
