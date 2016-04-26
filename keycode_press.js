(function($){
	'use strict';
	var keycode = $('.keycode');

	$('.btn').on('click', function(e){
		var key_code = $(this).data('key');
		$('.keycode').text(key_code);
		$('input').focus();
	});
	$('input').focus();
	$('body').on('click', function(){
		$('input').focus();
	});
	$('input').on('keydown', function(e){
		event = e.keyCode || e.which;
		keycode.text(event);
		$('li').each(function(index, el) {
			if($(this).data('key') === event){
				$(this).addClass('btn_active');
			}
		});
		setTimeout(function(){
			$('li').removeClass('btn_active');
		},200);
		return false;
	});
	var activeColor;
	$('.box').on('click', function(){
		$('body').removeClass('keyboard_' + activeColor);
		
		var color = $(this).data('color');
		activeColor = color;

		$('body').addClass('keyboard_' + color);
	});
})(jQuery);