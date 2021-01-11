// toggles dropdown contacts menu
$(".dropdown-btn").click( function(){
    var dropdown = $(".contact-dropdown");
    if (dropdown.css("display") === "block") {
        dropdown.css("display","none");
        $(".dropdown-btn").html('contact<i class="fa fa-caret-left"></i>');
    } else {
        dropdown.css("display","block");
        $(".dropdown-btn").html('contact<i class="fa fa-caret-down"></i>');
    }
});

// toggles caret for contact dropdown
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// toggles sidebar navigation menu
$(".fa-bars").click( function(){
    var sidenav = $(".sidenav");
    if (sidenav.css("display") === "none") {
        sidenav.fadeIn(200);
        $(this).css("color", "white");
    } else {
        sidenav.fadeOut(200);
        $(this).css("color", "#91be89");
    }
});

// clicking elsewhere will close sidebar navigation menu
$(".main").click(function() {
    var sidenav = $(".sidenav");
    var menu_btn = $(".fa-bars");
    if (menu_btn.css("z-index") === "2" && !sidenav.css("display") != "none") {
        sidenav.fadeOut(200);
        menu_btn.css("color", "#91be89");
    }
});

// hovering over pictures in projects section will show different picture
$(function() {
    $("#website-img")
        .mouseover(function() { 
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/website2.jpg");
            }).fadeTo(100, 1);
        })
        .mouseout(function() {
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/website1.jpg");
            }).fadeTo(100, 1);
        });

    $("#planner-img")
        .mouseover(function() { 
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/planner2.jpg");
            }).fadeTo(100, 1);
        })
        .mouseout(function() {
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/planner1.jpg");
            }).fadeTo(100, 1);
        });

    $("#tetris-img")
        .mouseover(function() { 
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/tetris2.JPG");
            }).fadeTo(100, 1);
        })
        .mouseout(function() {
            $(this).fadeTo(100, 0.5, function() {
                $(this).attr("src", "img/tetris1.JPG");
            }).fadeTo(100, 1);
        });
});

