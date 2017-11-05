# Cookies
Cookies is a JavaScript-based cookie analyzer and creator. It's purpose is to increase the efficiency of making cookies and reading them.

### Install
To install, simply add this code to your <head> tag:
```
  <script src="https://raw.githubusercontent.com/Incrested/Cookies/master/cookies.js"></script>
```

An example of Cookies would be:
```
<script>
	function cookieCheck() {
		var user=getCookie("cookiename");
		if(user != "") {
			alert("Welcome back, " + user);
		} else {
			user = prompt("Please enter your name:","");
			if(user != "" && user != null) {
				setCookie("cookiename", user, 30);
			}
		}
	}
</script>
```