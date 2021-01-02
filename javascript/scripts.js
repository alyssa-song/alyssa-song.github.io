/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content 
- This allows the user to have multiple dropdowns without any conflict */
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

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});