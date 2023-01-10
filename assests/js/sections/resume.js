// Create Elements for Resume Secrtion
const resume_section   = document.createElement('section');
const resume_division  = document.createElement('div');
const resume_image     = document.createElement('img');

// Build Section Element
add_attributes(resume_section, ["id", "resume"]);

// Build Division Element
add_attributes(resume_division, ["id", "container", "class", "animate-items animate__animated animate__fadeInUp"]);

// Build Image Element
add_attributes(resume_image, ["class", "box-blue-extra-lightshadow", "src", "./images/BriansResumeFullStack.png"]);

// Append elements together in the body.
resume_division.appendChild(resume_image);
resume_section.appendChild(resume_division);
document.body.appendChild(resume_section);
