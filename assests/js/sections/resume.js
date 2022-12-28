// Create Elements for Resume Secrtion
const resume_section   = document.createElement('section');
const resume_division  = document.createElement('div');
const resume_image     = document.createElement('img');

// Build Section Element
resume_section.id = "resume";

// Build Division Element
resume_division.classList.add("container");
resume_division.classList.add("animate-items");
resume_division.classList.add("animate__animated");
resume_division.classList.add("animate__fadeInUp");

// Build Image Element
resume_image.classList.add("box-blue-extra-lightshadow");
resume_image.src = "./images/BriansResumeFullStack.png";

// Append elements together in the body.
resume_division.appendChild(resume_image);
resume_section.appendChild(resume_division);
document.body.appendChild(resume_section);
