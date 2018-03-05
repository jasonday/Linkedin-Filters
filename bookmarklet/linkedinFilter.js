// Bookmarklet Container from Smashing Magazine
// http://coding.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/

(function () {

	// the minimum version of jQuery we want
	var v = '1.6.4';

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var script = document.createElement('script');
		script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';
		script.onload = script.onreadystatechange = function () {
			if ((!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {

				initLinkedIn();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(script);
	} else {
		initLinkedIn();
	}

	function initLinkedIn() {
		(window.linkedinfilter = function () {

			//$('head').append('<link rel="stylesheet" href="" type="text/css" />');


		})();
	}

})();