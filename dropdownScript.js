$('.input-group input').keydown(function(e){
	if(e.which == 9){ // tab
		e.preventDefault();
		$(this).parent().find('.dropdown-toggle').click();
		$(this).parent().find('.dropdown-menu a:first').focus();
	}
});

$('.dropdown-menu a').keydown(function(e){
	switch(e.which){
		case 36: // home
    	e.preventDefault();
    	$(this).closest('.dropdown-menu').find('a:first').focus();
      break;
		case 35: // end
    	e.preventDefault();
    	$(this).closest('.dropdown-menu').find('a:last').focus();
      break;
  }
});
