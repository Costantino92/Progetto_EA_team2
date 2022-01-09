//---------------------------- NavBar Animation -------------------------------

//---------------------------- Section of Constants ---------------------------
const firstDivFirstIcon = document.querySelector(".icons").firstElementChild;
const headerDiv = document.querySelector(".headerDiv");
const icons = document.querySelector(".icons");
const divFatherRed = document.createElement("div");
const divRedIconOne = document.createElement("div");
const divRedIconTwo = document.createElement("div");
const divTest = document.createElement("div");
const h3divRedOne = document.createElement("h3");
const divX = document.createElement("div");
h3divRedOne.textContent = "Accedi";
h3divRedOne.style.fontSize = "1rem";
h3divRedOne.style.fontWeight = "300";
h3divRedOne.style.paddingTop = "10px";
const h3divRedTwo = document.createElement("h3");
h3divRedTwo.textContent = "Crea Account";
h3divRedTwo.style.fontSize = "1rem";
h3divRedTwo.style.fontWeight = "300";
h3divRedTwo.style.paddingTop = "10px";
//---------------------------- END Section of Constants -------------------------

divTest.style.position = "absolute";
divTest.style.top = "0";
divTest.style.left = "0";
divTest.style.right = "0";
divTest.style.bottom = "0";
divTest.style.display = "flex";
divTest.style.justifyContent = "center";
divTest.style.alignItems = "center";
//---------------------------- Working on img svg -------------------------------
const svgXicon = document.createElement("img");
svgXicon.src = "design-system/other-icons/x.svg";
const svgSignIn = document.createElement("img");
svgSignIn.style.width = "36px";
svgSignIn.src = "design-system/other-icons/eaglobalnav-iconsignin.svg";
const svgRegisterIcon = document.createElement("img");
svgRegisterIcon.style.width = "36px";
svgRegisterIcon.src = "design-system/other-icons/eaglobalnav-iconregister.svg";

//---------------------------- END Working on img svg ----------------------------

divFatherRed.style.display = "flex";
divFatherRed.style.justifyContent = "space-between";
divFatherRed.style.alignItems = "center";
divFatherRed.style.height = "200px";
// divFatherRed.style.position = "absolute";
divFatherRed.style.width = "360px";
divFatherRed.style.opacity = "1";

//----------------------------  first red icon -----------------------------------
// divRedIconOne.style.backgroundColor = "blue";
divRedIconOne.style.position = "relative";
divRedIconOne.style.display = "flex";
divRedIconOne.style.alignItems = "center";
divRedIconOne.style.flexDirection = "column";
divRedIconOne.style.color = "white";
divRedIconOne.style.cursor = "pointer";
//---------------------------- END  first red icon --------------------------------

divX.style.height = "30px";
divX.style.width = "30px";
// divX.style.backgroundColor = "red";
divX.style.display = "flex";
divX.style.justifyContent = "center";
divX.style.alignItems = "center";
divX.style.position = "relative";
divX.style.right = "60px";
divX.style.top = "90px";

//----------------------------  second red icon -----------------------------------
// divRedIconTwo.style.backgroundColor = "blue";
divRedIconTwo.style.position = "relative";
divRedIconTwo.style.display = "flex";
divRedIconTwo.style.flexDirection = "column";
divRedIconTwo.style.alignItems = "center";
divRedIconTwo.style.color = "white";
divRedIconTwo.style.cursor = "pointer";

//---------------------------- END second red icon ---------------------------------

//----------------------------  x icon ---------------------------------------------

//---------------------------- END x icon ------------------------------------------

//----------------------------  section of appendChilds ----------------------------

divRedIconOne.appendChild(svgSignIn);
divRedIconTwo.appendChild(svgRegisterIcon);
divRedIconOne.appendChild(h3divRedOne);
divRedIconTwo.appendChild(h3divRedTwo);
divX.appendChild(svgXicon);

//---------------------------- END section of appendChilds --------------------------

headerDiv.style.minHeight = "40px";
console.log(divX);
function expanse() {
  // debugger;
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTest);
    headerDiv.appendChild(divX);
    divTest.appendChild(divFatherRed);
    divFatherRed.appendChild(divRedIconOne);
    divFatherRed.appendChild(divRedIconTwo);
    icons.style.zIndex = "3";
    divFatherRed.style.opacity = "1";
  } else {
    headerDiv.style.minHeight = "40px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    divFatherRed.style.transition = "linear 0.3s";
    divFatherRed.style.opacity = "0";
    headerDiv.style.backgroundColor = "#101010";
    headerDiv.removeChild(divX);
  }
}

//---------------------------- AddEventListener -------------------------------------

firstDivFirstIcon.addEventListener("click", expanse);

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
