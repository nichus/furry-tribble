// ==UserScript==
// @name         Paranoia | BlueBird from American Express
// @namespace    http://icebergh.us/
// @version      0.5.1
// @description  Converts the text field intended to contain the answer to your security question, and converts it to a password field, so your answer is hidden
// @author       Orien Vandenbergh
// @match        https://secure.bluebird.com/*
// @grant        none
// ==/UserScript==

_tm = (typeof _tm !== 'undefined') ? _tm : {};
_tm.bluebird = {
    element: null,
    bootstrap: function() {
        _tm.bluebird.element = document.getElementById('SecurityAnswer');
        if (_tm.bluebird.element === null) {
            setTimeout(_tm.bluebird.bootstrap, 500);
        } else {
            _tm.bluebird.element.setAttribute('type','password');
        }
    }
};
_tm.bluebird.bootstrap();
