$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/
    if ($(window).width() > '1024'){
        $('.header-contact').css('display', 'block')
    } else {
        $('.header-contact').css('display', 'none')
    }

    $(window).resize(function(){
        if ($(window).width() > '1024'){
            $('.header-contact').css('display', 'block')
        } else {
            $('.header-contact').css('display', 'none')
        }
    });

    /******************************
     ********* main page ***********
     ******************************/

    $('.custom-select .current-value').click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
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
        $('.header-contact').fadeToggle(200);
    });

    $('.mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('nav ul').fadeToggle(200);
    });

});
