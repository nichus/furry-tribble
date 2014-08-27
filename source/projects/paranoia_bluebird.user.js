{"version":"0.6.8","preferences":{"isEnabled":"true","isDebugging":"false"},"modules":[{"name":"Paranoia | BlueBird from American Express","author":"Orien Vandenbergh","includes":"https://secure.bluebird.com*","version":"1.0.0","isEnabled":true,"options":[{"description":"Change Security Answer to a Password","isEnabled":true,"tab":"All Settings","section":"Change Security Question to Password Field","type":"checkbox","fields":[],"head":{"js":["_min.bbsecure = {","    element: null,","    bootstrap: function () {","        _min.bbsecure.element = document.getElementById(\"SecurityAnswer\");","        if (_min.bbsecure.element === null) {","            setTimeout(_min.bbsecure.bootstrap, 500);","        } else {","            _min.bbsecure.element.setAttribute('type','password');","        }","    }","};","_min.bbsecure.bootstrap();"]},"load":{},"screen":"data:image/png;base64,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"}],"about":["This is just a simple plugin that converts the","cleartext input for the Security Question on","the BlueBird Login screen into a password field","so that the answer is obscured"],"index":1}]}
