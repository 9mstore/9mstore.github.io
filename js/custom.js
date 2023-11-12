$(function () {

    "use strict";

    //lightbox js
    $('.venobox').venobox();

    //overview part js
    $('.over-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        nextArrow: '.arrow-right',
        prevArrow: '.arrow-left',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    // screenshot js    
    $('.kc-wrap').KillerCarousel({
        width: 800,
        spacing3d: 120,
        spacing2d: 120,
        showShadow: true,
        showReflection: true,
        infiniteLoop: true,
        autoScale: 75,
    });
    //testimonial part js
    $('.testimonial-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 600,
        dots: false,
        arrows: false,
        asNavFor: '.testimonial-main-img',

    });

    $('.testimonial-main-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: false,
        asNavFor: '.testimonial-main',
    });

    //preloader part js
    $(window).on('load', function () {
        $('.main-preloader').delay(1000).fadeOut(1000);
    });

    // smooth scroll js
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        if (scrolling >= 100) {
            $(sticky).addClass("nav-bg");
        } else {
            $(sticky).removeClass("nav-bg");
        }
        if (scrolling >= 50) {
            $('.backtotop').fadeIn(500);
        } else {
            $('.backtotop').fadeOut(500);
        }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a , .scroll-down a , .backtotop a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    //scorllspy js
    $('body').scrollspy({
        target: ".navbar",
        offset: 50,
    });
});
