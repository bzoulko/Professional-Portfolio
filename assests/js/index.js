// Global Variables for javascript routines.
var hBackgroundSize = 0;
var tabLinks        = document.getElementsByClassName("tab-links");
var tabContents     = document.getElementsByClassName("tab-contents");
var animateItems    = document.getElementsByClassName("animate-items");
var sideMenu        = document.getElementById("sidemenu");



/**
 * About Skils, Experiance, and Education LINKs.
 * @param {*} tabName 
 */
function openTab(tabName) {

    // Remove active link tab from class list.
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    // Remove active tab from class list.
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    // Reset current target by adding active-link and active-tab back to the class list.
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


/**
 * Determine how the animation should be on the page based on the (=)Open or (X)Close on the Navigation Bar.
 * @param {*} option 
 */
function PopUpMenu(option) {
    let width = window.innerWidth;
    sideMenu.style.right = (option === 'close' ? "-200px" : "0px");

    for (animateItem of animateItems) {
        
        // Process the close side menu bar.
        if (option === 'close') 
            animateItem.classList.add("animate__animated");
        else {
        
            // Only open the side menu bar when screen size requires it.
            if (width <= 1160) 
                animateItem.classList.remove("animate__animated");  

        }
    }
}


/**
 * Show the passed Id elements and all
 * others to prevent viewing.
 * @param {*} Id 
 */
function page(Id) {
    
    // All valid ID's for the html Page.
    const Ids = ['home-footer','about','work','contact','resume'];
    let navPage = document.getElementById('home');

    // console.log("ismobile: ", isMobile());

    // Loop through each ID and display the page selected via passing argument
    // giving the html the look and feel of separate web pages.
    Ids.forEach(tagId => {

        // Capture the ID section then apply the display view properties.
        let page = document.getElementById(tagId);
        if (Id === tagId) {
            // show the section being viewed.
            page.style.display = (tagId === "resume" ? "flex" : "block");

            // Only hold background size when it's not '0px' to ensure all screen sizes
            // maintain the right size when applied.
            if (navPage.style.backgroundSize != "0px") hBackgroundSize = navPage.style.backgroundSize;

            // Maintain the position for the home and (show or hide) background image when
            // (on or off) the home page.
            if (Id === "home-footer") {
                // Show the Home Page.
                navPage.style.height = "100vh";
                navPage.style.backgroundSize = hBackgroundSize;
            } else {
                // Maintain home position and hide background image... Not on Home Page.
                navPage.style.height = "10vh";
                navPage.style.backgroundSize = "0px";                
            }

        } else {
            // Hide the section not being viewed.
            page.style.display = "none";
        }

    });

}


/**
 * Detect when the device is a mobile unit based on REGEX algorithum.
 * @returns (TRUE/FALSE)
 */
function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};