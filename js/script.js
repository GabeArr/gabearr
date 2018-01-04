function getLength() {
	window.alert("hi")
	for (i = 0; i < arguments.length; i++) {
		var myPath = document.getElementById(arguments[i])
		var length = myPath.getTotalLength();
		window.alert(arguments[i] + ' ' + length)
  }
}
