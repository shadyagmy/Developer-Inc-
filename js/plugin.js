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
        cursorborderradius: "9px",
        scrollspeed: 70
    });

    $('.carousel').carousel({
        interval: 8000,
        pause: "hover"
    });
    

});


//adjusting navbarToggle backgroundColor while open and closed
$(window).on("load resize scroll", function () {
    //change navbar links style while click
    if ($(window).innerWidth() > 767) {

        $(".navbar-default .navbar-nav>li").click(function () {
            $(this).addClass("activeLink").siblings().removeClass("activeLink");
            $(this).children().addClass("activeAncor");
            $(this).siblings().children().removeClass("activeAncor");
        });

        if (window.location.href.indexOf("index") > 0) {
            $("#Home").addClass("activeLink").siblings().removeClass("activeLink");
            $("#Home").children().addClass("activeAncor");
            $("#Home").siblings().children().removeClass("activeAncor");

        } else if (window.location.href.indexOf("about") > 0) {
            $("#About").addClass("activeLink").siblings().removeClass("activeLink");
            $("#About").children().addClass("activeAncor");
            $("#About").siblings().children().removeClass("activeAncor");

        } else if (window.location.href.indexOf("FAQ") > 0) {
            $("#FAQ").addClass("activeLink").siblings().removeClass("activeLink");
            $("#FAQ").children().addClass("activeAncor");
            $("#FAQ").siblings().children().removeClass("activeAncor");
        }
    }

    if ($(window).innerWidth() < 767) {

        var collapsedAttr = document.getElementById("bs-example-navbar-collapse-1");
        var iconBars = document.querySelectorAll(".navbar-default .navbar-toggle .icon-bar");
        var navbarToggle = document.getElementById("navbar-toggle");

        navbarToggle.onclick = function () {
            if (!collapsedAttr.classList.contains("in")) {
                navbarToggle.style.backgroundColor = "#F8F8F8";
                for (var i = 0; i < iconBars.length; i++) {
                    iconBars[i].style.backgroundColor = "#F1630E";
                }
            } else {
                navbarToggle.style.backgroundColor = "#F1630E";
                for (var i = 0; i < iconBars.length; i++) {
                    iconBars[i].style.backgroundColor = "#dcdcde";
                }
            }

            if (window.location.href.indexOf("index") > 0) {
                $("#Home").children().addClass("activeAncor");
                $("#Home").siblings().children().removeClass("activeAncor");

            } else if (window.location.href.indexOf("about") > 0) {
                $("#About").children().addClass("activeAncor");
                $("#About").siblings().children().removeClass("activeAncor");

            } else if (window.location.href.indexOf("FAQ") > 0) {
                $("#FAQ").children().addClass("activeAncor");
                $("#FAQ").siblings().children().removeClass("activeAncor");
            }
        }
    }
})


$("#contact").on("click", function () {
    $("html,body").animate({
        scrollTop: ($(".contact-us").offset().top - 20)
    }, 900);
});

$("#map").on("click", function () {
    $("html,body").animate({
        scrollTop: ($("#Footer").offset().top - 20)
    }, 900);
});

