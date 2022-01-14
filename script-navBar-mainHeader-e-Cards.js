//---------------------------- NavBar Animation -------------------------------

//---------------------------- End NavBar Animation -------------------------------

//---------------------------- Arrows NavBar -------------------------------
let childrenOfDivLinks = document.querySelector(".divLinks").children;
let giochiList = [
  "ESPLORA I GIOCHI",
  "Ultimi giochi",
  "Prossimamente",
  "EA SPORTS",
  "Giochi gratuiti",
  "Libreria dei giochi",
  "PIATTAFORME",
  "PC",
  "Playstation 5",
  "Xbox Series X",
  "Nintendo Switch",
  "Cellulari",
];
let altreEsperienzeList = [
  "EA Play",
  "Origin",
  "Competizioni videoludiche",
  "Diretta di EA Play",
];
let informazioniList = [
  "Societa",
  "EA Studi",
  "La nostra tecnologia",
  "EA Partners",
  "Notizie",
  "Inside EA",
];
let impegniList = [
  "Gioco positivo",
  "Diversità e inclusione",
  "Sensibilizzazione della comunità",
  "Persone e cultura",
  "Ambiente",
];
let risorseList = [
  "Aiuto",
  "Forum",
  "Lavora con noi",
  "Filtro famiglia",
  "Accessibilita",
  "Stampa",
  "Investitori",
  "Test di gioco",
];
let listsNavBar = [
  giochiList,
  altreEsperienzeList,
  informazioniList,
  impegniList,
  risorseList,
];
for (let i = 0; i < childrenOfDivLinks.length; i++) {
  // debugger;
  let curtain = document.createElement("div");
  curtain.style.color = "black";
  curtain.style.position = "absolute";
  curtain.style.top = "60px";
  curtain.style.left = "-25px";
  curtain.style.height = "0";
  curtain.style.borderRadius = "4px";
  curtain.style.width = "min-content";
  curtain.style.backgroundColor = "white";
  curtain.style.zIndex = "3";
  curtain.style.opacity = "0";
  curtain.style.transition = "ease .5s";
  curtain.style.display = "flex";
  curtain.style.flexDirection = "column";
  if (childrenOfDivLinks[i].children.length == 1) {
    childrenOfDivLinks[i].appendChild(curtain);
  }
  childrenOfDivLinks[i].addEventListener("mouseover", () => {
    curtain.style.opacity = "1";
    curtain.style.height = "300px";
    // console.log([...childrenOfDivLinks].indexOf(childrenOfDivLinks[i]));
    if ([...childrenOfDivLinks].indexOf(childrenOfDivLinks[i]) == 0) {
      // debugger;
      if (curtain.children.length < 1) {
        curtain.style.flexDirection = "row";
        // curtain.style.gap = "50px";
        let divCurtainContentLeft = document.createElement("div");
        divCurtainContentLeft.height = "max-content";
        divCurtainContentLeft.width = "max-content";
        divCurtainContentLeft.marginLeft = "100px";
        let divCurtainContentRight = document.createElement("div");
        divCurtainContentRight.height = "max-content";
        divCurtainContentRight.width = "max-content";

        listsNavBar[i].forEach((el) => {
          if (listsNavBar[i].indexOf(el) < 6) {
            let divContent = document.createElement("div");
            divContent.textContent = el;

            divContent.onmouseover = () => {
              divContent.style.color = "red";
              divContent.onmouseout = () => {
                divContent.style.color = "black";
              };
            };
            divContent.marginLeft = "50px";
            divCurtainContentLeft.appendChild(divContent);
            curtain.appendChild(divCurtainContentLeft);
            divCurtainContentLeft.style.display = "flex";
            divCurtainContentLeft.style.flexDirection = "column";
          } else {
            let divContent = document.createElement("div");
            divContent.textContent = el;
            divContent.onmouseover = () => {
              divContent.style.color = "red";
              divContent.onmouseout = () => {
                divContent.style.color = "black";
              };
            };
            divCurtainContentRight.appendChild(divContent);
            curtain.appendChild(divCurtainContentRight);
            divCurtainContentRight.style.display = "flex";
            divCurtainContentRight.style.flexDirection = "column";
          }
        });
      }
    } else {
      if (curtain.children.length < 1) {
        listsNavBar[i].forEach((el) => {
          let divCurtain = document.createElement("div");
          divCurtain.textContent = el;
          divCurtain.onmouseover = () => {
            divCurtain.style.color = "red";
            divCurtain.onmouseout = () => {
              divCurtain.style.color = "black";
            };
          };
          curtain.appendChild(divCurtain);
        });
      }
    }

    let imgs = childrenOfDivLinks[i].lastElementChild.previousElementSibling;
    // console.log(imgs);

    imgs.style.transform = "rotateX(180deg)";
    imgs.style.transition = "linear 0.4s";
    imgs.style.fill = "#ff6161";
    childrenOfDivLinks[i].style.cursor = "default";
    childrenOfDivLinks[i].style.color = "#ff6161";
    childrenOfDivLinks[i].style.position = "relative";
  });

  childrenOfDivLinks[i].addEventListener("mouseout", () => {
    // debugger;
    let imgs = childrenOfDivLinks[i].lastChild.previousElementSibling;

    imgs.style.transform = "rotateX(0deg)";
    imgs.style.transition = "linear 0.4s";
    childrenOfDivLinks[i].style.color = "black";
    imgs.style.fill = "unset";

    curtain.style.height = "0";
    curtain.style.transition = "ease .5s";
    curtain.style.opacity = "0";
  });
}

//---------------------------- NavBar Curtain -----------------------------

//---------------------------- End NavBar Curtain-----------------------------
//---------------------------- End Arrows NavBar -----------------------------

//---------------------------- Cards Animation -------------------------------

let divBgImg = document.querySelector(".bgImg");
let btnTwo = document.querySelector(".bttn-two");

divBgImg.addEventListener("mouseover", () => {
  divBgImg.firstElementChild.style.transform = "translateY(-200px) scale(1.3)";
  divBgImg.firstElementChild.style.transition = "ease 0.5s";
  btnTwo.style.opacity = "1";
});

divBgImg.addEventListener("mouseout", () => {
  divBgImg.firstElementChild.style.transform = "translateY(0px) scale(1.3)";
  divBgImg.firstElementChild.style.transition = "ease 0.5s";
  btnTwo.style.opacity = "0";
});

const battlefieldCard = document.querySelectorAll(".battleFieldCard");

for (let i = 0; i < battlefieldCard.length; i++) {
  const battlefieldLogo = document.querySelectorAll(".battleFieldLogo");
  const gradientColor = document.querySelectorAll(".gradientColor");

  battlefieldCard[i].addEventListener("mouseover", animCard);
  battlefieldCard[i].addEventListener("mouseout", disAnimCard);

  function animCard() {
    battlefieldLogo[i].style.transform = "translateY(-60px)";
    battlefieldLogo[i].style.transition = "all 300ms ease-out;";
    gradientColor[i].style.opacity = "1";
    gradientColor[i].style.color = "white";
  }

  function disAnimCard() {
    battlefieldLogo[i].style.transform = "translateY(0)";
    battlefieldLogo[i].style.transition = "all 300ms ease-out;";
    gradientColor[i].style.opacity = "0";
  }
}

//---------------------------- End Cards Animation -------------------------------
