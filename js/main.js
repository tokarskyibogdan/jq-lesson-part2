jQuery(function ($) {
   var $redSect = $('.red-section'),
       $drone = $('.drone');

    $drone.css('right', $redSect.outerWidth() - $drone.width() / 2);
    $drone.css('top', $redSect.outerHeight()/2 - $drone.height() / 2);

    $(window).resize(function () {
        $redSecWidth = $redSect.outerWidth();
        $redSecHeight = $redSect.outerHeight();
        $drone.css('right', $redSecWidth - $drone.width() / 2);
        $drone.css('top', $redSecHeight/2 - $drone.height() / 2);
    });

    $('.ng-show-text').on('click', function () {
        $('.ng-toggle-text').toggleClass('d-inline-block');
        $(this).text($('.ng-toggle-text').is(':visible') ? 'view less' : 'view more');
        $('.ng-title').toggleClass('h2');
    });

    $('.nf-show-text').on('click', function () {
        $('.nf-toggle-text').toggleClass('d-inline-block');
        $(this).text($('.nf-toggle-text').is(':visible') ? 'view less' : 'view more');
        $('.nf-title').toggleClass('h2');
    });

    $('.j-show-text').on('click', function () {
        $('.j-toggle-text').toggleClass('d-inline-block');
        $(this).text($('.j-toggle-text').is(':visible') ? 'view less' : 'view more');
        $('.j-title').toggleClass('h2');
        $('.journey-section').toggleClass('padding-top');
    });

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

    $('.slider-dots li').on('click', function () {
        $('.slider-content li').css('display', 'none');
        $('.slider-dots li').css('color', '#e1e1e1');
        $(this).css('color', 'red');
    });

    $('.slider-dots li:first-child').on('click', function () {
        $('.slider-content li:first-child').slideDown(500);
    });

    $('.slider-dots li:nth-child(2)').on('click', function () {
        $('.slider-content li:nth-child(2)').slideDown(500);
    });

    $('.slider-dots li:nth-child(3)').on('click', function () {
        $('.slider-content li:nth-child(3)').slideDown(500);
    });

    $('.slider-dots li:last-child').on('click', function () {
        $('.slider-content li:last-child').slideDown(500);
    });
});

