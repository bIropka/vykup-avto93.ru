$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    var headerContact = $('.header-contact');

    if ($(window).width() > '1024'){
        headerContact.css('display', 'block');
        $('nav ul').css('display', 'block');
    } else {
        headerContact.css('display', 'none');
        $('nav ul').css('display', 'none');
    }

    $(window).resize(function(){
        if ($(window).width() > '1024'){
            headerContact.css('display', 'block');
            $('nav ul').css('display', 'block');
        } else {
            headerContact.css('display', 'none');
            $('nav ul').css('display', 'none');
        }
    });

    $(document).click(function() {

        $target = $(event.target);

            if (!$target.closest($('.custom-select')).length){
                $('.custom-select .current-value').removeClass('active');
                $('.custom-select ul').slideUp();
            }

    });

    /******************************
     ********* main page ***********
     ******************************/

    $('.user-phone').click(function() {
        $(this).focus();
    });

    $('.custom-select .current-value').click(function() {
        if ($(this).hasClass('active')) {
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
        } else {
            $('.custom-select .current-value').removeClass('active');
            $('.custom-select ul').slideUp();
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        }

    });

    $('.custom-select ul li').click(function() {
        $(this).parent().slideUp();
        $(this).parent().siblings('.current-value').removeClass('active');
        var value = $(this).html();
        $(this).parent().siblings('.current-value').html(value);
        $(this).parent().next().find('input').val(value);
    });

    $('.mobile-contacts').click(function() {
        $(this).toggleClass('active');
        headerContact.fadeToggle(200);
    });

    $('.mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('nav ul').fadeToggle(200);
    });

    jQuery(function($){
        $('.user-phone').mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    });

    var show = true;
    var countbox = ".statistics";
    $(window).on("scroll load resize", function() {

        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if (w_top + w_height * 0.8 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

            var space_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

            $('#number-cars').animateNumber(
                {
                    number: 8000,
                    numberStep: space_separator_number_step
                }, 1500
            );

            $('#number-years').animateNumber(
                {
                    number: 10,
                    numberStep: space_separator_number_step
                }, 1000
            );

            $('#number-money').animateNumber(
                {
                    number: 499520000,
                    numberStep: space_separator_number_step
                }, 2000
            );

            show = false;
        }
    });

});
