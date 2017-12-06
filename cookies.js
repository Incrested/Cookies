try {
	function fetchCookies(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(i);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length)
		}
	}
	}
} catch(err) {
	if(cname === "undefined") {
		console.log("Cookie Name was Not Provided.");
	} else {
		console.log("Missing Error Handler. Make an issue at https://github.com/Incrested/Cookies/issues/new");
}

try {
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expire = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
} catch(err) {
	if(cname === "undefined") {
		console.log("Cookie Name was Not Provided.");
	} else if(cvalue === "undefined") {
		console.log("Cookie Value was Not Provided.");
	} else if(exdays === "undefined") {
		console.log("Cookie Expiration Date was Not Provided.");
	} else {
		console.log("Missing Error Handler. Make an issue at https://github.com/Incrested/Cookies/issues/new");
	}
}

function editCookie(cname,cvalue) {
    cookieTemp = (document.cookie.match(/^(?:.*;)?\s*cname\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    if(!cookieTemp === undefined) {
      console.log("Cookie Not Found.")
    } else {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expire = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue +";" + expires + ";path=/";
    }
}
