//init functions
$(document).ready(function() {
    menuOpen();
});

//functions start here

function menuOpen() {
    $(".nav-bar__menu-icon").on("click", function() {
        $(this).toggleClass("open");
        console.log("clicked");
    });
}
