var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}



var sideMenu = document.getElementById("sidemenu");

function showMenu() {
    sideMenu.style.right = "0px";
    sideMenu.style.backdropFilter = "blur(20px)";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
    sideMenu.style.backdropFilter = "blur(0px)";
}

