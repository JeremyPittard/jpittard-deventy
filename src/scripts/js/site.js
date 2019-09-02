//init functions
$(document).ready(function() {
    loadOut();
    menuOpen();
});

//functions start here

function loadOut() {
    console.lot("loaded");
}

function menuOpen() {
    $(".nav-bar__menu-icon").on("click", function() {
        $(this).toggleClass("open");
        console.log("clicked");
    });
}
