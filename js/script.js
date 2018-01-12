function getLength() {
	window.alert("hi")
	for (i = 0; i < arguments.length; i++) {
		var myPath = document.getElementById(arguments[i])
		var length = myPath.getTotalLength();
		window.alert(arguments[i] + ' ' + length)
  }
}

window.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll(".grid-item");

  Array.from(items, function(item) {
    item.addEventListener("click", function() {
      alert(this.classList[1]);
    });
  });
});
