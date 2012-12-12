$(document).ready(function() {
	var previewHeight = $(window).height() - 60;
	var iconPreviewHeight = previewHeight + 'px';
	var image = "https://github.com/danleech/simple-icons/raw/master/icons/simpleicons/simpleicons-2048.png";
	var backgroundImage = 'url(' + image + ')';
	var colour = '#BF1813';
	$('#preview').html('<img class="icon-preview" src=' + image + '>');
	$('.icon-preview').css('height', previewHeight);
	$('body').css('background', colour);
	
	$(window).resize(function() {
		var previewHeight = $(window).height() - 60;
		var iconPreviewHeight = previewHeight + 'px';
	$('.icon-preview').css('height', previewHeight);
	});
});