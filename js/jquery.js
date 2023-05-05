$(document).ready(function () {

    document.getElementById("openSidebarMenu").onclick = function () {   
        var icon = document.getElementsByClassName("sidebarIconToggle")[0];
        if (icon.style.left !== "115px") {
            icon.style.left = "115px";
            icon.style.width = "150px";
        } else {
            icon.style.left = "5px";
        }
    };
    var lastScroll = 0;
    function onScroll() { 
        var scroll = $(this).scrollTop();
        if (scroll >= lastScroll) {
            document.getElementsByClassName("sidebarIconToggle")[0].style.width = "25px";
        } else {
            document.getElementsByClassName("sidebarIconToggle")[0].style.width = "150px";
        }
        lastScroll = scroll <= 0 ? 0 : scroll;
    }
    $(document.body).on('touchmove', onScroll); // for mobile
    $(window).on('scroll', onScroll);
});


