/* DOMcelementer */

/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
let rFig = document.querySelector("#redFigure");
console.log(rFig);
let yFig = document.querySelector("#yellowFigure");
console.log(yFig);

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
rFig.style.backgroundColor = "blue";
yFig.style.backgroundColor = "blue";

/*
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her
let opg2 = document.querySelector("#opgaveTwo");
let h2 = document.createElement("h2");
let p = document.createElement("p");

h2.innerText = "Opgave 2.1 løsning";
p.innerText = "Jeg har løst opgave 2.1";

opg2.appendChild(h2);
opg2.appendChild(p);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
console.log(document.querySelectorAll(".purpleFigures"));

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
let pFigs = document.querySelectorAll(".purpleFigures");
let newArray = Array.from(pFigs);
newArray.map((e) => {
  e.style.backgroundColor = "red";
});

/* opgave 3.3
Brug myLiveList til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/

// din kode her
newArray.map((e) => {
  e.children[0].innerText = "RED";
});

/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
*/

const myData = {
  name: "tiger",
  image: "assets/img/standard_tiger.jpg",
  description:
    "En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.",
};

// din kode her
let myDataS = document.querySelector("#opgaveFour");
let dh2 = document.createElement("h2");
dh2.innerText = myData.name;

let dFig = document.createElement("figure");
let dimg = document.createElement("img");
dimg.src = myData.image;
dimg.alt = "Faarlig kat";

let dp2 = document.createElement("p");
dp2.innerText = myData.description;

myDataS.appendChild(dh2);
dFig.appendChild(dimg);
myDataS.appendChild(dFig);
myDataS.appendChild(dp2);
