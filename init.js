/*
 *  Copyright (c) Codiad & Amit Kumar Khare (inkimagine.com), distributed
 *  as-is and without warranty under the MIT License. See
 *  [root]/license.txt for more. This information must remain intact.
 */

(function(global, $) {

	// Define core
	var codiad = global.codiad,
		scripts = document.getElementsByTagName('script'),
		path = scripts[scripts.length - 1].src.split('?')[0],
		curpath = path.split('/').slice(0, -1).join('/') + '/';

	// Instantiates plugin
	$(function() {
		codiad.peaceMode.init();
	});

	codiad.peaceMode = {

		// Allows relative `this.path` linkage
		path: curpath,

		init: function() {
			$.loadScript(this.path + "bigscreen.min.js");
			$.loadScript(this.path + "peace.mode.js");
		},

		/**
		 * 
		 * This is where the core functionality goes, any call, references,
		 * script-loads, etc...
		 *  document.getElementById('button').addEventListener('click', function() {
		        if (BigScreen.enabled) {
		            BigScreen.toggle();
		        }
		        else {
		            // fallback for browsers that don't support full screen
		        }
		    }, false); 
		 */


		toggle: function() {
			//alert('Hello World');
			if (BigScreen.enabled) {
				BigScreen.toggle();
			}
		}
	};

})(this, jQuery);
