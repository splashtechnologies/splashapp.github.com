/* hide .lrhidden for 2 seconds */
window.setInterval(function() { $('.lrhidden').css('display', 'block !important');},2000);
/* end hide .lrhidden for 2 seconds */

/* input focus */
var tempInput = 'email@address.com';
$('#notify form input[type="text"]').focus(function() {
	if ( $(this).attr('value') == tempInput) {
		$(this).attr('value', '');
	}
	//$('#notify form input[type="submit"]').animate({'opacity': 1}, 200);
})
$('#notify form input[type="text"]').blur(function() {
	if ( $(this).attr('value') == '') {
		$(this).attr('value', tempInput);
	}
})
/* end input focus */

var windowSize = $(document).width();

if (windowSize > 480) {
	var bgImage = 'img/bg.jpg';
	var img = '<img src="' + bgImage + '"/>';
	$(img).load(function() {
		$('#bg').css('background', 'url(img/bg.jpg) 50% 0 no-repeat');
		$('#bg').animate({'opacity': 1}, 200);
		$('#iphone').animate({'top': '25px'}, 400, function() {
			$('#logo').animate({'top': '100px', 'opacity': 1}, 100, function() {
				$('#tagline').animate({'top': '250px', 'opacity': 1}, 100, function() {
					$('#notify').animate({'top': '605px', 'opacity': 1}, 100, function() {
						$('#footer').animate({'opacity': 1}, 100);
						});		
					});
				});
			});
		});
} else {
	console.log('mobile');
	var bgImage = 'img/mobile-bg.jpg';
	var img = '<img src="' + bgImage + '"/>';
	
	/* fix input display */
	$('#notify form input[type="submit"]').attr('value', 'Go');
	$('#notify form input[type="submit"]').css('left', windowSize - 79 + 'px');
	$('#notify form input[type="text"]').css('width', (windowSize - 70) +  'px');
	/* end fix input display */
	
	/* fix display of iphone */
	$('#iphone').css('width', windowSize - 30 + 'px');
	/* end fix display of iphone */
	
	$(img).load(function() {
		$('#bg').css('background-size', '100%').css('background-image', 'url(img/mobile-bg.jpg)');
		$('#bg').animate({'opacity': 1}, 200);
		$('#logo').animate({'top': '23px', 'opacity': 1}, 100, function() {
				$('#tagline').animate({'top': '95px', 'opacity': 1}, 100, function() {
					$('#notify').animate({'top': '280px', 'opacity': 1}, 100, function() {
						$('#iphone').animate({'opacity': 1, 'top': '390px'}, 200);
						});		
					});
				});
			});
}