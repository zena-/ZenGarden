$(function() {

	'use strict';
	var window_height = $(window).height(),
       content_height = window_height - 130;

    $('#banner').height(content_height);


  //////////// popover ///////////

  $('.pop').popover(function(){
    $('button').trigger('click');
  });

  $('.dropdown-toggle').dropdown();

    ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-link').slideToggle();
  });
  
});