//---------------------------- NavBar Animation -------------------------------

//---------------------------- End NavBar Animation -------------------------------

//---------------------------- Arrows NavBar -------------------------------
let childrenOfDivLinks = document.querySelector(".divLinks").children;

for (let i = 0; i < childrenOfDivLinks.length; i++) {
  // debugger;
  let curtain = document.createElement("div");
  curtain.style.position = "absolute";
  if (i % 2) {
    curtain.style.bottom = "-300px";
  } else {
    curtain.style.top = "50px";
  }
  curtain.style.left = "-25px";
  curtain.style.height = "0";
  curtain.style.borderRadius = "4px";
  curtain.style.width = "250px";
  curtain.style.backgroundColor = "red";
  curtain.style.zIndex = "3";
  curtain.style.opacity = "0";
  curtain.style.transition = "ease .5s";
  if (childrenOfDivLinks[i].children.length == 1) {
    childrenOfDivLinks[i].appendChild(curtain);
  }
  childrenOfDivLinks[i].addEventListener("mouseover", () => {
    curtain.style.opacity = "1";
    curtain.style.height = "300px";

    let imgs = childrenOfDivLinks[i].lastElementChild.previousElementSibling;
    console.log(imgs);

    imgs.style.transform = "rotateX(180deg)";
    imgs.style.transition = "linear 0.4s";
    imgs.style.fill = "#ff6161";
    childrenOfDivLinks[i].style.cursor = "default";
    childrenOfDivLinks[i].style.color = "#ff6161";
    childrenOfDivLinks[i].style.position = "relative";
  });

  childrenOfDivLinks[i].addEventListener("mouseout", () => {
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
