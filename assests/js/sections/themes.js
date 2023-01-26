// Create Elements for Theme Secrtion
const theme_section        = document.createElement('section');
const theme_div_bkgnd      = document.createElement('div');
const theme_img_moon       = document.createElement('img');
const theme_div_stars      = document.createElement('div');
const theme_div_twinkling  = document.createElement('div');
const theme_div_clouds     = document.createElement('div');

/* <section id="theme">
<div class="background-container">
    <div class="moon"></div>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
</div>
</section> */

// Build Section Element
add_attributes(theme_section, ["id", "theme"]);

// Build Division Element
add_attributes(theme_div_bkgnd, ["class", "theme-container"]);

// Build Theme Division Elements
add_attributes(theme_img_moon, ["class", "moon", "src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"]);
add_attributes(theme_div_stars, ["class", "stars"]);
add_attributes(theme_div_twinkling, ["class", "twinkling"]);
add_attributes(theme_div_clouds, ["class", "clouds"]);

// Append elements together in the body.
theme_div_bkgnd.appendChild(theme_img_moon);
theme_div_bkgnd.appendChild(theme_div_stars);
theme_div_bkgnd.appendChild(theme_div_twinkling);
theme_div_bkgnd.appendChild(theme_div_clouds);
theme_section.appendChild(theme_div_bkgnd);
document.body.appendChild(theme_section);
