$(document).ready(function () {

  $(function () {
    $.material.init();
  });
$(window).on("load", function(){ $(".twentytwenty-container").twentytwenty(); });

  $('.more').readmore({
    speed: 75,
    lessLink: '<a href="#">Read less <span class="glyphicon glyphicon-chevron-up"></span></a>',
    moreLink: '<a href="#">Read more <span class="glyphicon glyphicon-chevron-down"></span></a>',
    collapsedHeight: 30,
    marginHeight: 10
  });



  $('form').on('DOMNodeInserted', function (e) {
    $('form input[type="text"], form input[type="email"], form input[type="tel"], form textarea').parent().addClass('form-group label-floating');

    $('form select').parent().addClass('form-group');

    $('form .mktoLabel').addClass('control-label');

    $('form input[type="text"], form input[type="email"], form input[type="tel"], form select, form textarea').addClass('form-control');

    $('form .mktoRequired').prop('required', true)

    $('form .mktoButton').addClass('btn dg_primary btn_solid').removeClass('mktoButton').append('<div class="ripple-container"></div>');

    $('form select').prev().prev().addClass('control-label');


    $('form input[type="checkbox"]').parent().addClass('checkbox').parent();


  })

  $('form').on('focus', 'input', function (e) {
    $(this).parent().addClass('is-focused');
  });
  $('form').on('focus', 'textarea', function (e) {
    $(this).parent().addClass('is-focused');
  });

  $('form').on('blur', 'input', function (e) {
    $(this).parent().removeClass('is-focused');
    if ($(this).val() != '') {
      $(this).parent().addClass('is-filled');
    } else {
      $(this).parent().removeClass('is-filled');
    }
  });


  $('form').on('blur', 'textarea', function (e) {
    $(this).parent().removeClass('is-focused');
    if ($(this).val() != '') {
      $(this).parent().addClass('is-filled');
    } else {
      $(this).parent().removeClass('is-filled');
    }
  });

});
