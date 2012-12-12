var imagePath = "http://github.com/danleech/simple-icons/raw/master/icons/";
var imageFileType = "-2048.png";

var icons = [
{name: '500px', colour: '#444444'},
{name: 'aboutme', colour: '#00405D'},
{name: 'amazon', colour: '#FF9900'},
{name: 'android', colour: '#A4C639'},
{name: 'appdotnet', colour: '#898D90'},
{name: 'apple', colour: '#B9BFC1'},
{name: 'aws', colour: '#FF9900'},
{name: 'behance', colour: '#1769FF'},
{name: 'blogger', colour: '#F57D00'},
{name: 'digg', colour: '#14589E'},
{name: 'dribbble', colour: '#EA4C89'},
{name: 'dropbox', colour: '#2281CF'},
{name: 'email', colour: '#666666'},
{name: 'eventstore', colour: '#6BA300'},
{name: 'evernote', colour: '#7AC142'},
{name: 'facebook', colour: '#3B5998'},
{name: 'foursquare', colour: '#2398C9'},
{name: 'github', colour: '#4183C4'},
{name: 'goodreads', colour: '#5A471B'},
{name: 'googleplus', colour: '#D14836'},
{name: 'instagram', colour: '#3F729B'},
{name: 'lastfm', colour: '#D51007'},
{name: 'linkedin', colour: '#007FB1'},
{name: 'orkut', colour: '#ED2590'},
{name: 'path', colour: '#E41F11'},
{name: 'pinboard', colour: '#0000FF'},
{name: 'posterous', colour: '#FFDD68'},
{name: 'rss', colour: '#FF8300'},
{name: 'simpleicons', colour: '#BF1813'},
{name: 'skype', colour: '#00AFF0'},
{name: 'soundcloud', colour: '#FF6600'},
{name: 'spotify', colour: '#80B719'},
{name: 'stumbleupon', colour: '#EB4924'},
{name: 'treehouse', colour: '#7FA24C'},
{name: 'tumblr', colour: '#2C4762'},
{name: 'twitter', colour: '#39A9E0'},
{name: 'vimeo', colour: '#44BBFF'},
{name: 'wordpress', colour: '#21759B'},
{name: 'yahoo', colour: '#731A8B'},
{name: 'youtube', colour: '#CD332D'}

];

function resize() {
	var previewHeight = $(window).height() - 80;
	var iconPreviewHeight = previewHeight + 'px';
	$('.icon-preview').css('height', previewHeight);
}

function randomPreview() {
	
	var icon = icons[Math.floor(Math.random() * icons.length)];
	var image = icon.name;
	var colour = icon.colour;
		// 
		// var image = 'simpleicons';
		// var colour = '#BF1813';
	image = imagePath + image + '/' + image + imageFileType;
	$('#preview').hide();
	$('#preview').html('<img class="icon-preview" src=' + image + '>');
	$('body').css('background', colour).delay(2000);
	$('#preview').show();
	resize();
}

$(document).ready(function() {
	randomPreview();
	resize();
	$(window).resize(function() {
		resize();
	});
	
	$('#preview').click(function() {
		randomPreview();
	})
});