$('.menu--tab--link').on('click', function(event) {
	event.preventDefault();
	
	let active = '#' + $('#modal__menu .tab-pane.active').attr('id');
	$(active).removeClass('active');
	
	let href = $(this).attr('href');
	$(href).addClass('active');
})