//---------------------------- NavBar Animation -------------------------------
const firstDivFirstIcon = document.querySelector(".icons").firstElementChild;
const headerDiv = document.querySelector(".headerDiv");
const icons = document.querySelector(".icons");
const divFatherRed = document.createElement("div");
const divRedIconOne = document.createElement("div");
const divRedIconTwo = document.createElement("div");
const divTest = document.createElement("div");
divTest.style.position = "absolute";
divTest.style.top = "0";
divTest.style.left = "0";
divTest.style.right = "0";
divTest.style.bottom = "0";
divTest.style.display = "flex";
divTest.style.justifyContent = "center";
divTest.style.alignItems = "center";
const svgSignIn = document.createElement("img");
svgSignIn.src = "/design-system/other-icons/eaglobalnav-iconsignin.svg";
const svgRegisterIcon = document.createElement("img");
svgRegisterIcon.src = "/design-system/other-icons/eaglobalnav-iconregister.svg";
divFatherRed.style.display = "flex";
divFatherRed.style.justifyContent = "space-between";
divFatherRed.style.alignItems = "center";
divFatherRed.style.height = "200px";
// divFatherRed.style.position = "absolute";
divFatherRed.style.width = "330px";
divFatherRed.style.opacity = "1";
// divFatherRed.style.top = "150px";
// divFatherRed.style.right = "800px";
// divFatherRed.style.backgroundColor = "orange";
// divRedIconOne.style.backgroundColor = "blue";
divRedIconOne.style.height = "36px";
divRedIconOne.style.width = "36px";
divRedIconOne.style.position = "relative";
divRedIconOne.style.display = "flex";
// divRedIconTwo.style.backgroundColor = "blue";
divRedIconTwo.style.height = "36px";
divRedIconTwo.style.width = "36px";
divRedIconTwo.style.position = "relative";
divRedIconTwo.style.display = "flex";
divRedIconOne.appendChild(svgSignIn);
divRedIconTwo.appendChild(svgRegisterIcon);
headerDiv.style.minHeight = "40px";

function expanse() {
  // debugger;
  if (headerDiv.style.minHeight === "40px") {
    headerDiv.style.minHeight = "450px";
    headerDiv.style.alignItems = "unset";
    icons.style.marginTop = "10px";
    headerDiv.style.transition = "ease-in-out 0.3s";
    headerDiv.appendChild(divTest);
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
  }
}

firstDivFirstIcon.addEventListener("click", expanse);

// firstIcon.addEventListener("click", () => {
//   firstDivFirstIcon;
// });
//---------------------------- End NavBar Animation -------------------------------

//---------------------------- Arrows NavBar -------------------------------
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
