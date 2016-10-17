
$('.user-click').click(function (event) {
    event.preventDefault(event);
    
    if ( $('.user-nav').is(':visible') ) {
        $('.user-nav').hide();
    } else {
        $('.user-nav').show();
    }

});

$('.close').click(function (event) {
    console.log('hi');
    $('.alert-icon').addClass('hidden');
    $('.alert').hide();
})