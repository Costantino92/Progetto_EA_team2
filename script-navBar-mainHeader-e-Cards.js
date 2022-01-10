//---------------------------- NavBar Animation -------------------------------

//---------------------------- Section of Constants ---------------------------
const body = document.querySelector("body");
const firstDivFirstIcon = document.querySelector(".icons").firstElementChild; // log in icon
const secondDivFirstIcon = firstDivFirstIcon.nextElementSibling; //question icon
const headerDiv = document.querySelector(".headerDiv");
const icons = document.querySelector(".icons");
const divFatherRed = document.createElement("div"); //FIRST FATHER  div for first icon " Do "
const divRedIconOne = document.createElement("div"); // first icon red
const divRedIconTwo = document.createElement("div"); //second icon red
//--------------------------------------------------------------------------------//
const divFatherRedTwo = document.createElement("div"); //SECOND FATHER div for second icon " ? "
const divInfFatherRedTwo = document.createElement("div"); // left container of icon three and four
const divInfTwoFatherRedTwo = document.createElement("div"); //right container of icon five and six
const divRedIconThree = document.createElement("div"); //third icon red
const divRedIconFour = document.createElement("div"); //fourth icon red
const divRedIconFive = document.createElement("div"); //fifth icon red
const divRedIconSix = document.createElement("div"); // sixth icon red
//--------------------------------------------------------------------------------//
const divTest = document.createElement("div"); //div test of the first icon
const divTestTwo = document.createElement("div"); // div test of the second icon
const h3divRedOne = document.createElement("h3");
const divX = document.createElement("div");
const h3divRedTwo = document.createElement("h3");
//---------------------------- END Section of Constants -------------------------
//Headerdiv style ------
headerDiv.style.minHeight = "40px";
//END headerDiv style ------
//---------------------------- Style of H3 of div one and two -------------------------

h3divRedOne.textContent = "Accedi";
h3divRedOne.style.fontSize = "1rem";
h3divRedOne.style.fontWeight = "300";
h3divRedOne.style.paddingTop = "10px";
h3divRedTwo.textContent = "Crea Account";
h3divRedTwo.style.fontSize = "1rem";
h3divRedTwo.style.fontWeight = "300";
h3divRedTwo.style.paddingTop = "10px";

//---------------------------- END Style of H3 of div one and two -------------------------

divTest.style.position = "absolute";
divTest.style.top = "0";
divTest.style.left = "0";
divTest.style.right = "0";
divTest.style.bottom = "0";
divTest.style.display = "flex";
divTest.style.justifyContent = "center";
divTest.style.alignItems = "center";

divTestTwo.style.position = "absolute";
divTestTwo.style.top = "0";
divTestTwo.style.left = "0";
divTestTwo.style.right = "0";
divTestTwo.style.bottom = "0";
divTestTwo.style.display = "flex";
divTestTwo.style.justifyContent = "center";
divTestTwo.style.alignItems = "center";
//-------------------------------------------------------------------------------------------

divInfFatherRedTwo.style.height = "200px";
divInfFatherRedTwo.style.width = "200px";
divInfFatherRedTwo.style.backgroundColor = "orange";
divInfFatherRedTwo.style.display = "flex";
divInfFatherRedTwo.style.flexDirection = "column";
divInfFatherRedTwo.style.justifyContent = "space-evenly";
divInfFatherRedTwo.style.alignItems = "center";

divInfTwoFatherRedTwo.style.height = "200px";
divInfTwoFatherRedTwo.style.width = "200px";
divInfTwoFatherRedTwo.style.backgroundColor = "orange";

//--------------------------------------------------------------------------------------------

//---------------------------- Working on img svg -------------------------------

const svgXicon = document.createElement("img"); // x icon//
svgXicon.src = "design-system/other-icons/x.svg";

//---------------------------- First icons of first svg FIRST DIV -------------------------------
const svgSignIn = document.createElement("img"); //sign in icon //
svgSignIn.src = "design-system/other-icons/eaglobalnav-iconsignin.svg";
svgSignIn.style.width = "36px";

const svgRegisterIcon = document.createElement("img"); //register icon //
svgRegisterIcon.src = "design-system/other-icons/eaglobalnav-iconregister.svg";
svgRegisterIcon.style.width = "36px";

//---------------------------- END First icons of first svg -------------------------------

const verifyDataIconOrigin = document.createElement("img"); // Origin icon //
verifyDataIconOrigin.src =
  "design-system/other-icons/eaglobalnav-iconorigin.svg";
verifyDataIconOrigin.style.width = "36px";

const iconOriginCode = document.createElement("img"); // Origin code icon //
iconOriginCode.src = "design-system/other-icons/eaglobalnav-iconorigincode.svg";
iconOriginCode.style.width = "36px";

const originWarning = document.createElement("img"); //Warning icon //
originWarning.src = "design-system/other-icons/eaglobalnav-iconalert.svg";

const iconLinkOrigin = document.createElement("img"); // Links icon //
iconLinkOrigin.src = "design-system/other-icons/eaglobalnav-iconlink.svg";

//---------------------------- END Working on img svg ----------------------------

divFatherRed.style.display = "flex";
divFatherRed.style.justifyContent = "space-between";
divFatherRed.style.alignItems = "center";
divFatherRed.style.height = "200px";
// divFatherRed.style.backgroundColor = "yellow";
divFatherRed.style.width = "360px";
divFatherRed.style.opacity = "1";

divFatherRedTwo.style.display = "flex";
divFatherRedTwo.style.justifyContent = "space-evenly";
divFatherRedTwo.style.alignItems = "center";
divFatherRedTwo.style.height = "250px";
divFatherRedTwo.style.backgroundColor = "yellow";
divFatherRedTwo.style.width = "600px";
divFatherRedTwo.style.opacity = "1";

//----------------------------  first red icon -----------------------------------
// divRedIconOne.style.backgroundColor = "blue";
divRedIconOne.style.position = "relative";
divRedIconOne.style.display = "flex";
divRedIconOne.style.alignItems = "center";
divRedIconOne.style.flexDirection = "column";
divRedIconOne.style.color = "white";
divRedIconOne.style.cursor = "pointer";
//---------------------------- END  first red icon --------------------------------

//----------------------------  second red icon -----------------------------------

divRedIconTwo.style.position = "relative";
divRedIconTwo.style.display = "flex";
divRedIconTwo.style.flexDirection = "column";
divRedIconTwo.style.alignItems = "center";
divRedIconTwo.style.color = "white";
divRedIconTwo.style.cursor = "pointer";

//---------------------------- END second red icon ---------------------------------

//----------------------------  Third red icon -----------------------------------

divRedIconThree.style.position = "relative";
divRedIconThree.style.display = "flex";
divRedIconThree.style.flexDirection = "column";
divRedIconThree.style.alignItems = "center";
divRedIconThree.style.color = "white";
divRedIconThree.style.cursor = "pointer";

//---------------------------- END Third red icon ---------------------------------
//----------------------------  Fourth red icon -----------------------------------

divRedIconFour.style.position = "relative";
divRedIconFour.style.display = "flex";
divRedIconFour.style.flexDirection = "column";
divRedIconFour.style.alignItems = "center";
divRedIconFour.style.color = "white";
divRedIconFour.style.cursor = "pointer";

//---------------------------- END Fourth red icon ---------------------------------

//---------------------------- DivX style -------------------------

divX.style.height = "30px";
divX.style.display = "flex";
divX.style.justifyContent = "center";
divX.style.alignItems = "center";
divX.style.cursor = "pointer";
divX.style.position = "absolute";
divX.style.top = "70px";
divX.style.right = "40px";

//---------------------------- END DivX style -------------------------

//----------------------------  section of appendChilds ----------------------------

divRedIconOne.appendChild(svgSignIn);
divRedIconOne.appendChild(h3divRedOne);
divRedIconTwo.appendChild(svgRegisterIcon);
divRedIconTwo.appendChild(h3divRedTwo);
divRedIconThree.appendChild(verifyDataIconOrigin);
divRedIconFour.appendChild(iconOriginCode);
// divRedIconThree.appendChild(h3divRedTwo);
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
    divFatherRed.style.opacity = "1";
    body.style.overflowY = "hidden";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
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
    divFatherRedTwo.appendChild(divInfFatherRedTwo);
    divFatherRedTwo.appendChild(divInfTwoFatherRedTwo);
    divInfFatherRedTwo.appendChild(divRedIconThree);
    divInfFatherRedTwo.appendChild(divRedIconFour);
    // divFatherRedTwo.appendChild(divRedIconTwo);
    icons.style.zIndex = "3";
    divFatherRedTwo.style.opacity = "1";
    body.style.overflowY = "hidden";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRedTwo.style.transition = "linear 0.3s";
    divFatherRedTwo.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
  }
}

//---------------------------- AddEventListener -------------------------------------

//---------------------------- AddEventListener of the first icon -------------------------------------

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
//---------------------------- END AddEventListener of the first icon -------------------------------------
//---------------------------- AddEventListener of the second icon -------------------------------------

secondDivFirstIcon.addEventListener("click", expanseTwo); // expanse eventListener first if else //

//---------------------------- END AddEventListener of the second icon -------------------------------------

//---------------------------- AddEventListener of the X icon -------------------------------------

divX.addEventListener("click", () => {
  // x icon eventListener second if //
  if (headerDiv.style.minHeight === "450px") {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    body.style.overflowY = "unset";
    icons.removeChild(divX);
  }
});
//----------------------------END AddEventListener of the X icon -------------------------------------

//----------------------------END  AddEventListener ----------------------------------

//---------------------------- End NavBar Animation ----------------------------------

//---------------------------- Arrows NavBar -----------------------------------------
let childrenOfDivLinks = document.querySelector(".divLinks").children;

for (let i = 0; i < childrenOfDivLinks.length; i++) {
  childrenOfDivLinks[i].addEventListener("mouseover", () => {
    let imgs = childrenOfDivLinks[i].lastChild.previousSibling;

    imgs.style.transform = "rotateX(180deg)";
    imgs.style.transition = "linear 0.4s";
    imgs.style.fill = "#ff6161";
    childrenOfDivLinks[i].style.cursor = "default";
    childrenOfDivLinks[i].style.color = "#ff6161";
  });

  childrenOfDivLinks[i].addEventListener("mouseout", () => {
    let imgs = childrenOfDivLinks[i].lastChild.previousSibling;

    imgs.style.transform = "rotateX(0deg)";
    imgs.style.transition = "linear 0.4s";
    childrenOfDivLinks[i].style.color = "black";
    imgs.style.fill = "unset";
  });
}

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
