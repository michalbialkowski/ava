$('#trigger__twarz').on('mouseover', function() {
	$('#menu__cialo').collapse('hide');
	$('#menu__twarz').collapse('show');
});

$('#trigger__cialo').on('mouseover', function() {
	$('#menu__twarz').collapse('hide');
	$('#menu__cialo').collapse('show');
});

$('header').mouseleave(function() {
	hidemenus();
});

$('header .hidemenus').on('mouseover', function() {
	hidemenus();
});



function hidemenus() {
	$('#menu__twarz').collapse('hide');
	$('#menu__cialo').collapse('hide');
}