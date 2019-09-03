//init functions
$(document).ready(function() {
    loadOut();
    menuOpen();
});

//functions start here

function loadOut() {
    setTimeout(function(){
  $('.loading-screen').addClass('loaded');
}, 2000);
}

function menuOpen() {
    $(".nav-bar__menu-icon").on("click", function() {
        $(this).toggleClass("open");
        console.log("clicked");
    });
}
