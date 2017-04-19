/**
 * Created by matt on 19.04.17.
 */


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
}


$('.fa').on("click", hideMenu);

$('.menu-hidden').on("click", function(){
    if (!isMenu)
        hideMenu();
});

$('.menu-container > p').on("click", hideMenu);