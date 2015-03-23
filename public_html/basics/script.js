/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {

	// self-excuting function
	// Locates one or more DOM elements
	// REplaces DOM elements
	var contactLinks = {
		github: 'https://github.com/stevo5o',
		gmail: 'stevo.joc@gmail.com',
		linkedin: 'ie.linkedin.com/in/stejoconnor',
		googleplus: 'https://plus.google.com/u/0/+SteJOConnor'
	};

	var contact = function() {
		var output = '<ul>',
			myList = document.querySelectorAll('.contacticons');

		for (var key in arguments[0]) {
			output += '<li><a href="' + contactLinks[key] + '">' +
				'<img src="img/' + key + '.svg" alt="icon for ' + key + '">' +
				'</a></li>';
		};

		output += '</ul>';

		for (var i = myList.length - 1; i >= 0; i--) {
			myList[i].innerHTML = output;
		};

	}(contactLinks);


}()); // end anon func