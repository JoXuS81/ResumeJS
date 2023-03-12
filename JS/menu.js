/* 

Table of Contents
    Variables
    Click on Chocolate Menu

*/


// Variables
const Header = document.querySelector ("header");
const Html = document.querySelector ("html");
const iconActive = document.querySelector (".menuChocolate.active i");
const menuIcon = document.querySelector (".menuChocolate");
const mobileMenu = document.querySelector (".mobileMenu");
const screenHeight = window.matchMedia('(max-height:650px)');


menuIcon.addEventListener("click", () => 
{
    $(mobileMenu).css("transition", "left 2s");
    Header.classList.toggle("changeMenu");
    Header.classList.toggle("changeMenuScroll");
    Html.classList.toggle("bodyAdd");
    if (screenHeight.matches) {
        Header.classList.toggle("changeMenuSmall");
    }
});


// Transform Menu after Click 
$(document).ready(function() 
{
    $(".mobileLink").on("click", function() 
    {
        $("header").removeClass("changeMenu");
        Header.classList.toggle("changeMenuScroll");
        Html.classList.toggle("bodyAdd");
    });
}); 


// Transform Navbar on Small Screens
/*if (screenHeight.matches) {
        $(".stickyMenu").css("background", "blue");
}*/