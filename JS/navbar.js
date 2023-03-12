/* 

Table of Contents
    Click on Buttons
    Add Toggle for Chocolate Menu

*/


$(window).on('scroll', function() {
    var aboutPosition = $('#aboutAnchor').offset().top - 10;
    var headerPosition = $('#header').offset().top;
    var scrollPos = window.pageYOffset;
    if(scrollPos >= aboutPosition) {
        $(".iconAbout").css("color", "#ff3539");
    }
    else 
    {
        $(".iconAbout").css("color", "#ffffff");
    }
    if(scrollPos >= headerPosition && scrollPos < aboutPosition) 
    {
        $(".iconHome").css("color", "#ff3539");
    }
    else 
    {
        $(".iconHome").css("color", "#ffffff");
    }
});