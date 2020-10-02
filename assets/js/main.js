$(document).ready(function(){
	var  mn = $(".navbar");
	    mns = "navbar-fixed-top";
	    hdr = $('.site-header').outerHeight();
	    console.log(hdr);

	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr ) {
	  	console.log('Over!')
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});
});