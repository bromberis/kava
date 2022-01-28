let photos = [
  {
    title: "Every day is a coffee day",
    src: "img/coffee-1.jpg",
  },
  {
    title: "Given enough coffee I could run the world",
    src: "img/coffee-2.jpg",
  },
  {
    title: "Don't touch my coffee",
    src: "img/coffee-3.jpg",
  },
  {
    title: "Would you like some coffee or something?",
    src: "img/coffee-4.jpg",
  },
  {
    title: "He stood and gulped the rest of his coffee",
    src: "img/coffee-5.jpg",
  },
  {
    title: "You're the guy I met in the coffee shop",
    src: "img/coffee-6.jpg",
  },
  {
    title: "He mopped coffee off the table",
    src: "img/coffee-7.jpg",
  },
  {
    title: "In coffee we trust",
    src: "img/coffee-8.jpg",
  },
  {
    title: "Insert coffee to begin",
    src: "img/coffee-9.jpg",
  },

  {
    title: "Coffee first",
    src: "img/coffee-10.jpg",
  },
];

let img = document.querySelector("img");
let caption = document.querySelector("h3");
let button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 10) + 1;
  img.src = photos[random].src;
  caption.textContent = photos[random].title;

  confetti({
    particleCount: 300,
    spread: 180,
    startVelocity: 60,
    colors: ["#000000", "#000001", "#CCB5B1", "#B02B18", "#3C5032"],
  });
});

// confetti
