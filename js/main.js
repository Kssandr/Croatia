$(function(){

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/Shape_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/Shape_right.svg" alt=""></button>'
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });


    

});