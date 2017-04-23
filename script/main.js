/**
 * Created by matt on 19.04.17.
 */
//**********************************/
//*** MENU SECTION *************/

var isMenu = false;

var hideMenu = function(){
    $('header>section>i').toggleClass("rotate180");


    if (!isMenu){
        $('#menu').toggleClass("rotate");

        setTimeout(function() {
            $('#menu').toggleClass("expand");
        },100);

        setTimeout(function() {
            if (isMenu)
                $('.menu-container').fadeIn();
        },300);


        isMenu = true;
    }
    else{
        $('.menu-container').fadeOut();
        isMenu = false;

        setTimeout(function(){
            $('#menu').toggleClass("expand");
            setTimeout(function(){
                $('#menu').toggleClass("rotate");
            }, 100);
        },200);

    }
};


$('.fa').on("click", hideMenu);

$('.menu-hidden').on("click", function(){
    if (!isMenu)
        hideMenu();
});


$('.menu-container > p').on("click", hideMenu);

//**********************************/
//*** SCROLL SECTION *************/


/*
var isScrolling = false;

var myScrollEvent =  function(up){
    if (isScrolling) return;
    console.log("scroll event!");


    var scroll = $(window).scrollTop();
    var hasClosest = false;
    var closest = 0;
    var speed = 2000;
    var margin = 100;


    $.each($('body > section'),function(id){
        var offset  = $(this).offset().top;

        if (offset >= (scroll - margin) && !hasClosest){
            closest = id;
            hasClosest = true;
            return;
        }

    });

    if (!hasClosest)
        closest = $('body > section').length-1;

    var closestUp = closest -1;
    if (closestUp < 0)
        closestUp = 0;

    isScrolling = true;


    if (up)
    {
        $('html, body').animate({
            scrollTop: $("body>section").eq(closestUp).offset().top + margin
        }, speed, function() {
            isScrolling = false;
        });
    }
    else
    {
        $('html, body').animate({
            scrollTop: $("body>section").eq(closest).offset().top + margin
        }, speed, function() {
            isScrolling = false;
        });
    }


};




var oldPosition = $(window).scrollTop();

$(window).scroll(function(){

    var newPosition = $(window).scrollTop();

    if (!isScrolling){
        if (oldPosition - newPosition >0){
            myScrollEvent(true);
        }
        else{
            myScrollEvent(false);
        }
    }



    oldPosition = newPosition;
});


$('.scrollDown').on("click", function(){
    console.log("click");
    isScrolling = true;
    $('html, body').animate({
        scrollTop: $("#costam").offset().top
    }, 300, function(){
        isScrolling = false;
    });
})
//**********************************/
