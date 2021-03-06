/* ============================
    Code by Boris Nekezov
    boris.nekezov@gmail.com
============================ */

var scrollTopBtn = $('.scroll-top');

function showHideBth(selector) {
    if ($(this).scrollTop() > 200) {
        if (!selector.hasClass('visible')) {
            selector.addClass('visible');
        }
    } else {
        if (selector.hasClass('visible')) {
            selector.removeClass('visible');
        }
    }
}

function fixScrollMeEffects(){
    if ($(window).width() < 768) {
        $('.animateme')
            .removeAttr('data-translatex data-scale data-rotatez')
            .attr('data-translatey',200);

    }
}

fixScrollMeEffects();


// Add scrollspy to <body>
$('body').scrollspy({
    target: ".navbar",
    offset: 100
});

// Add smooth scrolling on all links inside the navbar
$("#mainMenu a, .scroll-to-top, .feature a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 600, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });

    } // End if

});

$(document).ready(function() {

    // Scroll To Top Button
    showHideBth(scrollTopBtn);
    fixScrollMeEffects();

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        fixScrollMeEffects();
        showHideBth(scrollTopBtn);
    });

    //Click event to scroll to top
    $('.scroll-top, .scroll-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    //Click learn more show text delete learn more
    $('.learn-more').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).removeClass('hidden');
        $(this).remove();
    });

    $('.advisors').on('click', function(e){
        $(this).css('visibility','hidden');
    });

});

plyr.setup();

var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 5,
    txt = "Upcoming Public Presale: July 1st (08:00 a.m. GMT)", x = 0, i = 0;

ctx.font = "25px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
