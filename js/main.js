jQuery(function ($) {
   var $redSect = $('.red-section'),
       $drone = $('.drone'),
       $redSecwidth = $redSect.width() - $drone.width() / 2;
    console.log($redSecwidth);

    $drone.css('right', $redSect.outerWidth() - $drone.width() / 2);

    $(window).resize(function () {
        $redSecwidth = $redSect.outerWidth();
        $drone.css('right', $redSecwidth - $drone.width() / 2);
    });
});