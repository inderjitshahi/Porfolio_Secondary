

/**********  Mouse Cirlcle  ******************/
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
  mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
};

/**********  Mouse Cirlcle Ends   ******************/

/*******Animate Circles  ************************/
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");
let mX = 0;
let mY = 0;
const z = 100;
animateCircles = (e, x, y) => {
  //mouse moved left
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left = `-${z}px`;
  }
  //moved upward
  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }

  mX = e.clientX;
  mY = e.clientY;
};
/*******End of Animate Circles  *****************/

/**************  main button  ****************/
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((mainBtn) => {
  let ripple;
  mainBtn.addEventListener("mouseenter", (e) => {
    // console.log(e.target.getBoundingClientRect());
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    mainBtn.prepend(ripple);
  });
  mainBtn.addEventListener("mouseleave", () => {
    mainBtn.removeChild(ripple);
  });
});


/************navigation ***************************/
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  menuIcon.classList.add("show-menu-icon");
  navbar.classList.add("hide-navbar");
  //window is scrolled up 
  if (window.scrollY === 0) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
  }
});
menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("show-menu-icon");
  navbar.classList.remove("hide-navbar");
});
/************End of navigation ********************/


/************** End of   main button  ****************/

document.body.addEventListener("mousemove", (e) => {
  // e is the mouse Object, clienX gives the postion of mouse
  let x = e.clientX;
  let y = e.clientY;
  mouseCircleFn(x, y);
  animateCircles(e, x, y);
});

// when mouse leave the page, the circle and dot should disappear
document.body.addEventListener("mouseleave", () => {
  mouseCircle.style.opacity = "0";
  mouseDot.style.opacity = "0";
});

/***********About me text *******************/
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent =
  "Coder, Developer and Educator, Respect Mistakes and learn from Mistakes, aimed to learn forever!!! Want to know more about me? just Contact. :)";

Array.from(aboutMeTextContent).forEach((charecter) => {
  const span = document.createElement("span");
  span.textContent = charecter;
  aboutMeText.appendChild(span); //you mistake as "span" instead span
  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnime  5s infinite";
  });
});


/***********End of About me text *******************/



/**********  Projects ******************************/
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20
      }px`;
  });
  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });
});
/********** End of  Projects *********************/


/***************** Services    ********************/

document.querySelectorAll(".service-btn").forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault();

    const serviceText = service.nextElementSibling;

    serviceText.classList.toggle("change");

    const rightPosition = serviceText.classList.contains("change")
      ? `calc(100%-${getComputedStyle(service.firstElementChild).width})`
      : 0;

    service.firstElementChild.style.right = rightPosition;
  });
});

/****************** End of Services ************/


/****************** Contact Form ***************/

const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });
  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let's Talk";
      formHeading.style.opacity = "1";
    }, 300);
  });
});

/****************** End of Contact Form ************/

/****************** Start Slide Show *********************/

const slideshow = document.querySelector(".slideshow");

setInterval(() => {

  const thirdIcon = slideshow.children[3];
  thirdIcon.classList.add("light");
  thirdIcon.previousElementSibling.classList.remove("light");

  const firstIcon = slideshow.children[0];
  firstIcon.classList.add("faded-out"); //this transition need time for .5s, so wait for .5s uisng setTimeout
  setTimeout(() => {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);

}, 3000);

/****************** End of Slide Show ************/
setTimeout(() => {
  console.log("start1");
  setTimeout(()=>{
    console.log("start2");
  },1000)
}, 1000);