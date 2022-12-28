// Create Elements for Resume Secrtion
const contact_section               = document.createElement('section');
const contact_division_container    = document.createElement('div');
const contact_division_row          = document.createElement('div');
const contact_division_info_left    = document.createElement('div');
const contact_division_info_right   = document.createElement('div');
const contact_division_icons        = document.createElement('div');
const contact_heading               = document.createElement('h1');

const contact_form                  = document.createElement('form');
const contact_form_input            = document.createElement('input');
const contact_form_textarea         = document.createElement('textarea');
const contact_form_button           = document.createElement('button');

const a_mailto              = document.createElement('a');
const i_mailto              = document.createElement('i');

const a_telephone           = document.createElement('a');
const i_telephone           = document.createElement('i');

const a_github              = document.createElement('a');
const i_github              = document.createElement('i');

const a_linkedin            = document.createElement('a');
const i_linkedin            = document.createElement('i');

// Build Section Element
contact_section.id = "contact";

// Build LEFT-SIDE Division Element
contact_division_container.classList.add("container");
contact_division_row.classList.add("row");
contact_division_info_left.classList.add("contact-left");
contact_division_info_left.classList.add("animate-items");
contact_division_info_left.classList.add("animate__animated");
contact_division_info_left.classList.add("animate__fadeInLeft");
contact_heading.classList.add("sub-title");
contact_heading.textContent = "Contact Me";
contact_division_icons.classList.add("social-icons");

// Create MAIL-TO element.
update_element(a_mailto, null, "mailto:bzoulko@gmail.com", "Email", "", "", "");
update_element(i_mailto, ["fas", "fa-paper-plane"], "", "", "", "", "");
a_mailto.appendChild(i_mailto);
a_mailto.innerHTML += "&#160;bzoulko@gmail.com";

// Create TELEPHONE element.
update_element(a_telephone, null, "Tel: 1-909-835-8703", "Telephone", "", "", "");
update_element(i_telephone, ["fas", "fa-phone-square-alt"], "", "", "", "", "");
a_telephone.appendChild(i_telephone);
a_telephone.innerHTML += "&#160;1 (909) 835-8703";

// Create GITHUB element.
update_element(a_github, null, "https://github.com/bzoulko", "GitHub", "", "noreferrer", "_blank");
update_element(i_github, ["fa-brands", "fa-github"], "", "", "", "", "");
a_github.appendChild(i_github);
a_github.innerHTML += "&#160;GitHub";

// Create LINKED-IN element.
update_element(a_linkedin, null, "https://www.linkedin.com/in/brian-zoulko-753810240/", "LinkedIn", "", "noreferrer", "_blank");
update_element(i_linkedin, ["fab", "fa-linkedin"], "", "", "", "", "");
a_linkedin.appendChild(i_linkedin);
a_linkedin.innerHTML += "&#160;LinkedIn";

// Append LEFT-SIDE elements together.
contact_division_icons.appendChild(a_mailto);
contact_division_icons.innerHTML += "<br>";
contact_division_icons.appendChild(a_telephone);
contact_division_icons.innerHTML += "<br>";
contact_division_icons.appendChild(a_github);
contact_division_icons.innerHTML += "<br>";
contact_division_icons.appendChild(a_linkedin);
contact_division_icons.innerHTML += "<br>";

contact_division_info_left.appendChild(contact_division_icons);
contact_division_info_left.appendChild(contact_heading);
contact_division_row.appendChild(contact_division_info_left);

// Append RIGHT-SIDE elements together.
// contact_division_icons.appendChild(a_mailto);
// contact_division_icons.appendChild(a_telephone);
// contact_division_icons.appendChild(a_github);
// contact_division_icons.appendChild(a_linkedin);
// contact_division_info_left.appendChild(contact_division_icons);
// contact_division_info_left.appendChild(contact_heading);
// contact_division_row.appendChild(contact_division_info_left);

// Append elements together on page.
contact_division_container.appendChild(contact_division_row);
contact_section.appendChild(contact_division_container);
document.body.appendChild(contact_section);



// <!-- ***************************** -->
// <!-- *   C O N T A C T  Section  * -->
// <!-- ***************************** -->
// <section id="contact">
//     <div class="container">

//         <!-- My contact screen for sending me a direct message. -->
//         <div class="row">

//             <!-- Contact info. LEFT-SIDE of page. -->
//             <div class="contact-left animate-items animate__animated animate__fadeInLeft">
//                 <h1 class="sub-title">Contact Me</h1>
//                 <div class="social-icons">
//                     <a href="mailto:bzoulko@gmail.com" title="Email"><i
//                             class="fas fa-paper-plane"></i>&#160;bzoulko@gmail.com</a><br>
//                     <a href="Tel: 1-909-835-8703" title="Telephone"><i class="fas fa-phone-square-alt"></i>&#160;1
//                         (909) 835-8703</a><br>
//                     <a rel="noreferrer" href="https://github.com/bzoulko" target="_blank" title="GitHub"><i
//                             class="fa-brands fa-github"></i>&#160;GitHub</a><br>
//                     <a rel="noreferrer" href="https://www.linkedin.com/in/brian-zoulko-753810240/" target="_blank"
//                         title="LinkedIn"><i class="fab fa-linkedin"></i>&#160;LinkedIn</a><br>
//                 </div>
//             </div>

//             <!-- Contact info. RIGHT-SIDE of page - Form input section to receive response for web-site visitors. -->
//             <div class="contact-right animate-items animate__animated animate__fadeInRight">                    
//                 <form name="submit-to-google-sheet">

//                     <input class="inputField form-fields" type="text" name="Name" placeholder="Your Name" required />
//                     <input class="inputField form-fields" type="email" name="Email" placeholder="Your Email" required />
//                     <textarea class="inputField form-fields" name="Message" rows="6" placeholder="Your Message" required></textarea>

//                     <button type="submit" id="button" class="ready btn ext-btn form-fields">

//                         <div class="message submitMessage">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12.2">
//                             <polyline stroke="currentColor" points="2,7.1 6.5,11.1 11,7.1 "/>
//                             <line stroke="currentColor" x1="6.5" y1="1.2" x2="6.5" y2="10.3"/>
//                             </svg> <span class="button-text">Submit</span>
//                         </div>
                        
//                         <div class="message loadingMessage">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
//                             <circle class="loadingCircle" cx="2.2" cy="10" r="1.6"/>
//                             <circle class="loadingCircle" cx="9.5" cy="10" r="1.6"/>
//                             <circle class="loadingCircle" cx="16.8" cy="10" r="1.6"/>
//                             </svg>
//                         </div>
                        
//                         <div class="message successMessage">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
//                             <polyline stroke="currentColor" points="1.4,5.8 5.1,9.5 11.6,2.1 "/>
//                             </svg> <span class="button-text">Success</span>
//                         </div>

//                     </button>
                          
//                 </form>
//                 <canvas id="canvas"></canvas>

//                 <!-- <span id="msg"></span> -->
//             </div>
//         </div>

//     </div>
// </section>
