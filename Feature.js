$ = function(id) {
	return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display = 'block';
}

var hide = function(id) {
	$(id).style.display = 'none';
}

if($('.cd-popup').hasClass('is-visible')) {
	$('.popup-background').addClass('visible');
}
else if(!$('.cd-popup').hasClass('is-visible')) {
	$('.popup-background').removeClass('visible');
}

// Trying to get popup to fade rest//
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});