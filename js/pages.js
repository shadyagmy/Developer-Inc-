/*global window, document,$*/
$(document).ready(function () {
    //to top button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 700) {
            $(".to-top").fadeIn(1000);
        } else {
            $(".to-top").fadeOut(1000);
        }
    });
    if ($(window).scrollTop() >= 700) {
            $(".to-top").fadeIn(1000);
        } else {
            $(".to-top").fadeOut(1000);
        }
    
    $(".to-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    //nice scroll function
    $("body").niceScroll({
        cursorcolor: "#F1630E",
        cursorwidth: "9px",
        cursorborder: "none",
        cursorborderradius: "10px",
        scrollspeed: 70
    });

    //change navbar links style while click
    $(".navbar-default .navbar-nav>li").click(function () {
        $(this).addClass("activeLink").siblings().removeClass("activeLink");
        $(this).children().addClass("activeAncor");
        $(this).siblings().children().removeClass("activeAncor");
    });
    
    if (window.location.href.indexOf("about")>0){
        $("#About").addClass("activeLink").siblings().removeClass("activeLink");
        $("#About").children().addClass("activeAncor");
        $("#About").siblings().children().removeClass("activeAncor");
    }else if (window.location.href.indexOf("FAQ")>0){
        $("#FAQ").addClass("activeLink").siblings().removeClass("activeLink");
        $("#FAQ").children().addClass("activeAncor");
        $("#FAQ").siblings().children().removeClass("activeAncor");
    }else if (window.location.href.indexOf("home")>0){
        $("#home").addClass("activeLink").siblings().removeClass("activeLink");
        $("#home").children().addClass("activeAncor");
        $("#home").siblings().children().removeClass("activeAncor");
    }
    
    
    
    
    

});
