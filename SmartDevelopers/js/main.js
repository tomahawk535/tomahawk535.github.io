$(document).ready(function () {
    $('#coundown').countdown('2021/03/17').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%D</span> дней'
            + '<span>%H</span> часов '
            + '<span>%M</span> минут '
            + '<span>%S</span> секунд'));
    });
});//end ready