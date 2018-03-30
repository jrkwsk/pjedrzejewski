$(document).ready(function () {
    
    $('.play').click(function () {
        var $this = $(this),
            audio = $this.siblings('audio')[0];

        if (audio.paused == false) {
            audio.pause();
            audio.currentTime = 0;
            $this.removeClass('playing');

        } else {
            audio.play();
            $this.addClass('playing');
        }
    });



});