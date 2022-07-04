let movies = [
    {
      name: "Loki",
      des:
        "In Marvel Studios' “Loki,” the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” ",
      image: "images/slider 1.PNG"
    },
    {
      name: "Falcon and the Winter Soldier",
      des:
        "Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.”",
      image: "images/slider 2.PNG"
    },
    {
      name: "Wanda Vision",
      des:
        "The series is a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
      image: "images/slider 3.PNG"
    },
    {
      name: "Luca",
      des:
        "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
      image: "images/slider 5.PNG"
    },
    {
      name: "Raya and the Last Dragon",
      des:
        "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      image: "images/slider 4.PNG"
    }
  ];
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  }
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });