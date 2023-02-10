$(document).ready(function() {
	$('.header__icon-burger').click(function(){
        $('.header__icon-burger').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
	});
});