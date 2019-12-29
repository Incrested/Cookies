# Cookies
Cookies is a JavaScript-based cookie analyzer and creator. It's purpose is to increase the efficiency of making cookies and reading them.

### Install
To install, simply add this code to your <head> tag:
```html
  <script src="https://cdn.doamatto.xyz/cookies/latest.js"></script>
```

An example of Cookies would be:
```html
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
