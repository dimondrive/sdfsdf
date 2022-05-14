$(function(){
    $('.menu__open').click(function(){
        $('.header__menu').toggleClass('show-menu')

    })
});
$(function(){
    $('.menu__open').click(function(){
        $('.menu__list1').toggleClass('show-menu')

    })
});
$(function(){
    $('.menu__open').click(function(){
        $('.menu__list2').toggleClass('show-menu')

    })
});

new Swiper ('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView:5,
    loop: true,
    breakpoints: {
        100: {slidesPerView:1, 
        },
        360: {slidesPerView:2, 
        },
        480: {slidesPerView:3,
        },
        970: {slidesPerView:4,
        },
        1087: {slidesPerView:5,
        },
    }
});
