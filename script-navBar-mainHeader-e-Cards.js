//---------------------------- NavBar Animation -----------------------

//---------------------------- Section of Constants -------------------
const body = document.querySelector("body");
const firstDivFirstIcon = document.querySelector(".icons").firstElementChild; // log in icon
const secondDivFirstIcon = firstDivFirstIcon.nextElementSibling; //question icon
const headerDiv = document.querySelector(".headerDiv");
const NavBar = document.querySelector(".navBar");
console.log(NavBar);
const icons = document.querySelector(".icons");
const divFatherRed = document.createElement("div"); //FIRST FATHER  div for first icon " Do "
const divRedIconOne = document.createElement("div"); // first icon red
const divRedIconTwo = document.createElement("div"); //second icon red
//-----------------------------------------------------------------------
const divFatherRedTwo = document.createElement("div"); //SECOND FATHER div for second icon " ? "
const divInfFatherRedTwo = document.createElement("div"); // left container of icon three and four
const divInfTwoFatherRedTwo = document.createElement("div"); //right container of icon five and six
const divRedIconThree = document.createElement("div"); //third icon red
const divRedIconFour = document.createElement("div"); //fourth icon red
const divRedIconFive = document.createElement("div"); //fifth icon red
const divRedIconSix = document.createElement("div"); // sixth icon red
//------------------------------------------------------------------------
const divTest = document.createElement("div"); //div test of the first icon
const divTestTwo = document.createElement("div"); // div test of the second icon
const h3divRedOne = document.createElement("h3");
const h3divRedTwo = document.createElement("h3");
const h3divRedThree = document.createElement("h3");
const h3divRedFour = document.createElement("h3");
const h3divRedFive = document.createElement("h3");
const h3divRedSix = document.createElement("h3");
const h3HelpTopFather = document.createElement("h3");
const h3BottomRedFather = document.createElement("h3");
const divX = document.createElement("div");

//---------------------------- END Section of Constants -------------------
//Headerdiv style ------
headerDiv.style.minHeight = "40px";
//END headerDiv style ------
//---------------------------- Style of H3 of div one and two --------------
//--------------------------------------------------------------------------
h3divRedOne.textContent = "Accedi";
h3divRedOne.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
h3divRedTwo.textContent = "Crea Account";
h3divRedTwo.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
h3divRedThree.textContent = "Verifica i dati di accesso a Origin";
h3divRedThree.classList.add("h3RedDiv");

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
h3divRedFour.textContent = "Come riscattare un codice";
h3divRedFour.classList.add("h3RedDiv");

//---------------------------------------------------------------------------
h3divRedFive.textContent = "Collega Origin al mio ID PSN";
h3divRedFive.classList.add("h3RedDiv");

//---------------------------------------------------------------------------

h3divRedSix.textContent = "Non riesco a giocare online";
h3divRedSix.classList.add("h3RedDiv");

//----------------------------------------------------------------------------

h3HelpTopFather.textContent = "Ti serve aiuto?";
h3HelpTopFather.classList.add("h3HelpTop");

h3BottomRedFather.innerHTML =
  'Non hai trovato ciò che cerchi? Vai su <a href ="" style="text-decoration:none; color:red">Aiuto EA</a>,<a href="" style="text-decoration:none; color:red"> Answers HQ </a>oder die <a href ="" style="text-decoration:none; color:red">Forum EA</a>.';
h3BottomRedFather.classList.add("h3BottomFather");

//--------------------- END Style of H3 of div one and two ---------------------

divTest.classList.add("divTestStyle");

divTestTwo.classList.add("divTestStyle");
//------------------------------------------------------------------------------

divInfFatherRedTwo.classList.add("divInFathersStyle");
divInfTwoFatherRedTwo.classList.add("divInFathersStyle");

//------------------------------------------------------------------------------

//---------------------------- Working on img svg ------------------------------

const svgXicon = document.createElement("img"); // x icon//
svgXicon.src = "design-system/other-icons/x.svg";

//---------------------------- First icons of first svg FIRST DIV --------------
const svgSignIn = document.createElement("img"); //sign in icon //
svgSignIn.src = "design-system/other-icons/eaglobalnav-iconsignin.svg";
svgSignIn.style.width = "36px";

const svgRegisterIcon = document.createElement("img"); //register icon //
svgRegisterIcon.src = "design-system/other-icons/eaglobalnav-iconregister.svg";
svgRegisterIcon.style.width = "36px";

//---------------------------- END First icons of first svg ---------------------

const verifyDataIconOrigin = document.createElement("img"); // Origin icon //
verifyDataIconOrigin.src =
  "design-system/other-icons/eaglobalnav-iconorigin.svg";
verifyDataIconOrigin.style.width = "36px";

const iconOriginCode = document.createElement("img"); // Origin code icon //
iconOriginCode.src = "design-system/other-icons/eaglobalnav-iconorigincode.svg";
iconOriginCode.style.width = "36px";

const originWarning = document.createElement("img"); //Warning icon //
originWarning.src = "design-system/other-icons/eaglobalnav-iconalert.svg";
originWarning.style.width = "36px";

const iconLinkOrigin = document.createElement("img"); // Links icon //
iconLinkOrigin.src = "design-system/other-icons/eaglobalnav-iconlink.svg";
iconLinkOrigin.style.width = "36px";

//---------------------------- END Working on img svg ----------------------------

divFatherRed.classList.add("divFatherRedStyle");

divFatherRedTwo.classList.add("divFatherTwoRedStyle");

divRedIconOne.classList.add("iconsStyleRed");

divRedIconTwo.classList.add("iconsStyleRed");

divRedIconThree.classList.add("iconsStyleRed");

divRedIconFour.classList.add("iconsStyleRed");

divRedIconFive.classList.add("iconsStyleRed");

divRedIconSix.classList.add("iconsStyleRed");

divX.classList.add("divXstyle");

//

//----------------------------  section of appendChilds ----------------------------

divRedIconOne.appendChild(svgSignIn);
divRedIconOne.appendChild(h3divRedOne);
divRedIconTwo.appendChild(svgRegisterIcon);
divRedIconTwo.appendChild(h3divRedTwo);
divRedIconThree.appendChild(verifyDataIconOrigin);
divRedIconFour.appendChild(iconOriginCode);
divRedIconFive.appendChild(iconLinkOrigin);
divRedIconSix.appendChild(originWarning);
divX.appendChild(svgXicon);

//---------------------------- END section of appendChilds --------------------------

function expanse() {
  // debugger;
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTest);
    icons.appendChild(divX);
    divTest.appendChild(divFatherRed);
    divFatherRed.appendChild(divRedIconOne);
    divFatherRed.appendChild(divRedIconTwo);
    icons.style.zIndex = "3";
    // headerDiv.style.zIndex = "3";
    divFatherRed.style.opacity = "1";
    body.style.overflowY = "hidden";
    NavBar.style.position = "unset";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      NavBar.style.position = "fixed";
      headerDiv.removeChild(divTest);
      headerDiv.removeChild(divTestTwo);
    }, 300);
  }
}

function expanseTwo() {
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTestTwo);
    icons.appendChild(divX);
    divTestTwo.appendChild(divFatherRedTwo);
    divFatherRedTwo.appendChild(h3HelpTopFather);
    divFatherRedTwo.appendChild(h3BottomRedFather);
    divFatherRedTwo.appendChild(divInfFatherRedTwo);
    divFatherRedTwo.appendChild(divInfTwoFatherRedTwo);
    divInfFatherRedTwo.appendChild(divRedIconThree);
    divInfFatherRedTwo.appendChild(divRedIconFour);
    divRedIconThree.appendChild(h3divRedThree);
    divRedIconFour.appendChild(h3divRedFour);
    divInfTwoFatherRedTwo.appendChild(divRedIconFive);
    divInfTwoFatherRedTwo.appendChild(divRedIconSix);
    divRedIconFive.appendChild(h3divRedFive);
    divRedIconSix.appendChild(h3divRedSix);
    icons.style.zIndex = "3";
    divFatherRedTwo.style.opacity = "1";
    body.style.overflowY = "hidden";
    NavBar.style.position = "unset";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRedTwo.style.transition = "linear 0.3s";
    divFatherRedTwo.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      NavBar.style.position = "fixed";
      headerDiv.removeChild(divTestTwo);
      headerDiv.removeChild(divTest);
    }, 300);
  }
}

// function scrollingDown() {
//   // headerDiv.style.height = "0";
//   // headerDiv.style.top = "-40px";
//   NavBar.style.transition = "ease-in-out 1s";
//   headerDiv.style.transition = "ease-in-out 1s";
//   NavBar.style.width = "100%";
//   NavBar.style.backgroundColor = "white";
//   NavBar.style.position = "fixed";
//   NavBar.style.top = "0";
// }

// function scrollingOff() {
//   NavBar.style.width = "100%";
//   NavBar.style.backgroundColor = "white";
//   NavBar.style.position = "static";
// }

// window.addEventListener("scroll", scrollingDown);
// window.addEventListener("scroll", scrollingOff);

function scrollDetect() {
  let lastScroll = 0;

  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      headerDiv.style.top = "-40px";
      NavBar.style.transition = "linear 0.3s";
      headerDiv.style.transition = "linear 0.3s";
      NavBar.style.width = "100%";
      NavBar.style.backgroundColor = "white";
      NavBar.style.position = "fixed";
      NavBar.style.top = "0";
    } else {
      lastScroll = currentScroll;
      NavBar.style.top = "40px";
      headerDiv.style.position = "fixed";
      headerDiv.style.top = "0";
    }
  };
}

scrollDetect();

//---------------------------- AddEventListener -------------------------------------

//---------------------------- AddEventListener of the first icon -------------------

firstDivFirstIcon.addEventListener("click", expanse); // expanse eventListener first if else //

divRedIconOne.addEventListener("mouseover", () => {
  divRedIconOne.style.transform = "translateY(-6px)";
  divRedIconOne.style.transition = "all 150ms ease-out";
});
divRedIconOne.addEventListener("mouseout", () => {
  divRedIconOne.style.transform = "translateY(0)";
});

divRedIconTwo.addEventListener("mouseover", () => {
  divRedIconTwo.style.transform = "translateY(-6px)";
  divRedIconTwo.style.transition = "all 150ms ease-out";
});
divRedIconTwo.addEventListener("mouseout", () => {
  divRedIconTwo.style.transform = "translateY(0)";
});

divRedIconThree.addEventListener("mouseover", () => {
  divRedIconThree.style.transform = "translateY(-6px)";
  divRedIconThree.style.transition = "all 150ms ease-out";
});
divRedIconThree.addEventListener("mouseout", () => {
  divRedIconThree.style.transform = "translateY(0)";
});

divRedIconFour.addEventListener("mouseover", () => {
  divRedIconFour.style.transform = "translateY(-6px)";
  divRedIconFour.style.transition = "all 150ms ease-out";
});
divRedIconFour.addEventListener("mouseout", () => {
  divRedIconFour.style.transform = "translateY(0)";
});

divRedIconFive.addEventListener("mouseover", () => {
  divRedIconFive.style.transform = "translateY(-6px)";
  divRedIconFive.style.transition = "all 150ms ease-out";
});
divRedIconFive.addEventListener("mouseout", () => {
  divRedIconFive.style.transform = "translateY(0)";
});

divRedIconSix.addEventListener("mouseover", () => {
  divRedIconSix.style.transform = "translateY(-6px)";
  divRedIconSix.style.transition = "all 150ms ease-out";
});
divRedIconSix.addEventListener("mouseout", () => {
  divRedIconSix.style.transform = "translateY(0)";
});
//---------------------------- END AddEventListener of the first icon ----------------
//---------------------------- AddEventListener of the second icon -------------------

secondDivFirstIcon.addEventListener("click", expanseTwo); // expanse eventListener first if else //

//---------------------------- END AddEventListener of the second icon ---------------

//---------------------------- AddEventListener of the X icon ------------------------

divX.addEventListener("click", () => {
  // x icon eventListener second if //
  if (headerDiv.style.minHeight === "450px") {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    divFatherRedTwo.style.transition = "linear 0.3s";
    divFatherRedTwo.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
    setTimeout(() => {
      headerDiv.removeChild(divTestTwo);
    }, 300);
    setTimeout(() => {
      headerDiv.removeChild(divTest);
    }, 300);
  }
});
//----------------------------END AddEventListener of the X icon ---------------------

//----------------------------END  AddEventListener ----------------------------------

//---------------------------- End NavBar Animation ----------------------------------

//---------------------------- Arrows NavBar -----------------------------------------
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
  let curtain = document.createElement("div");

  curtain.classList.add("curtainEA");
  if (childrenOfDivLinks[i].children.length == 1) {
    childrenOfDivLinks[i].appendChild(curtain);
  }
  childrenOfDivLinks[i].addEventListener("mouseover", () => {
    curtain.style.opacity = "1";
    curtain.style.transform = "scaleY(1)";
    if ([...childrenOfDivLinks].indexOf(childrenOfDivLinks[i]) == 0) {
      curtain.style.paddingTop = "40px";
      curtain.style.paddingBottom = "40px";
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
            divContent.style.padding = "10px 0";

            if (listsNavBar[i].indexOf(el) == 0) {
              divContent.style.fontWeight = "900";
              divContent.style.borderBottom = "2px solid lightgrey";
              divContent.style.marginBottom = "20px";
            }

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
            divContent.style.padding = "10px 0";

            if (listsNavBar[i].indexOf(el) == 6) {
              divContent.style.fontWeight = "900";
              divContent.style.borderBottom = "2px solid lightgrey";
              divContent.style.marginBottom = "20px";
            }
          }
        });
      }
    } else {
      if (curtain.children.length < 1) {
        listsNavBar[i].forEach((el) => {
          let divCurtain = document.createElement("div");
          divCurtain.textContent = el;
          divCurtain.style.padding = "10px 0";
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

    // curtain.style.height = "0";
    curtain.style.transition = "ease .2s";
    curtain.style.transform = "scaleY(0)";
    // curtain.style.opacity = "0";
    // curtain.children.style.opacity = "0";
    // curtain.children.style.zIndex = "-3";
  });
}

//---------------------------- NavBar Curtain -----------------------------

//---------------------------- End NavBar Curtain-----------------------------
//---------------------------- End Arrows NavBar -----------------------------
//---------------------------- End Arrows NavBar -------------------------------------

//---------------------------- Cards Animation ---------------------------------------

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

//---------------------------- End Cards Animation ------------------------------------
