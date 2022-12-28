var body = document.body;

// Create Elements for Resume Secrtion
const section   = document.createElement('section');
const division  = document.createElement('div');
const image     = document.createElement('img');

// Build Section Element
section.id = "resume";

// Build Division Element
division.classList.add("container");
division.classList.add("animate-items");
division.classList.add("animate__animated");
division.classList.add("animate__fadeInUp");

// Build Image Element
image.classList.add("box-blue-extra-lightshadow");
image.src = "./images/BriansResumeFullStack.png";

// Append elements together in the body.
division.appendChild(image);
section.appendChild(division);
body.appendChild(section);
