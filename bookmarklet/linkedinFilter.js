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

			if (window.console) {
				console.log('LinkedIn filter & sort init');
			}

			//load stylesheet
			$('head').append('<link rel="stylesheet" href="linkedinFilter.css" type="text/css" />');

			// html
			var container = "<div class='linked-interest container ph20' role='toolbar'></div>",
				loadMore = "<button id='li-load' class='button button-primary-small'>Load 100+ profiles</button>",
				heading = "<h4 class='visually-hidden'>Filter & Sort</h4>",
				spinner = "<div class='li-container'><div class='li-group'><div class='big-square'><div class='li-square .li-group li-first'></div><div class='li-square li-second'></div><div class='li-square li-third'></div><div class='li-square li-fourth'></div></div><div class='li-text'>loading</div></div></div>",
				search = "<input type='text' class='li-search search' placeholder='Filter by keyword' aria-label='filter by keyword' disabled='true'/><button class='li-clear' disabled='true'><svg width='12' height='12' version='1.1' xmlns='http://www.w3.org/2000/svg'><title>Clear search</title><line x1='1' y1='11' x2='11' y2='1' stroke='black' stroke-width='2'/><line x1='1' y1='1' x2='11' y2='11' stroke='black' stroke-width='2'/></svg></button>",
				connection = "<button class='li-connection sort button button-secondary-small' data-sort='li-connection-count' disabled='true'>Sort by # connections</button>";


			$(container).insertBefore('.mn-pymk-list__cards');
			$('.linked-interest').append(heading, loadMore, search, connection);
			$('body').append(spinner);

			// list.js
			var listjs = "https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js";
			$.getScript( listjs, function() {
				$('.mn-pymk-list').parent().attr('id', 'listjs-container');
				var options = {
					valueNames: ['li-connection-count', 'mn-person-info__name', 'mn-person-info__occupation'],
					listClass: 'mn-pymk-list__cards'
				};
				var userList = new List('listjs-container', options);

				// find connections in string, create element for filtering and trigger on each DOM insertion of profile card
				$.initialize(".mn-pymk-list__card", function () {
					var $this = $(this);
					var $txt = $this.find('.member-insights__count').text();
					var num = $txt.replace(/[^0-9]/g, '');
					var $count = $this.find("li-count");
					if (!$count.length) {
						$("<span class='visually-hidden li-connection-count'>" + num + "</span>").appendTo($this);
					}

					// if a search term is applied, respect it on ajax updates
					var $search = $('.li-search').val();
					if ($search) {
						window.setTimeout(function () {
							userList.search($search);
						}, 500);

					}

					// reindex list
					userList.reIndex();

				});
			});
				
			// load more profiles
			$("#li-load").on("click", function () {
				(function (count) {
					$('.li-container').show();
					if (count < 11) {
						window.scrollTo(0, document.body.scrollHeight);
						var caller = arguments.callee;
						window.setTimeout(function () {
							caller(count + 1);
						}, 500);
					} else {
						window.scrollTo(0, 0);
						$('.li-container').delay(1000).fadeOut();
						$('#li-load').focus();
					}

					// enabled search & filter
					$('.li-search, .li-connection, .li-clear ').attr('disabled', false);

				})(0);

				$('.li-search').val('');
				userList.search();

			});

			// clear search
			$('.li-clear').on('click', function () {
				$('.li-search').val('');
				userList.search();
			});


		})();
	}

})();