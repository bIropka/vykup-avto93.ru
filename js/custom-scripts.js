$(document).ready(function () {

    /******************************
     ********* main page ***********
     ******************************/

    $('.custom-select .current-value').click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    $('.form-order .custom-select ul li').click(function() {
        $(this).parent().slideUp();
        $(this).parent().siblings('.current-value').removeClass('active');
        var value = $(this).html();
        $(this).parent().siblings('.current-value').html(value);
        $(this).parent().next().find('input').val(value);
    });

});
