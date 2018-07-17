document.querySelector('.colbutton').addEventListener('click', function()
	{
    	var x = Math.floor(Math.random() * 255);
    	var y = Math.floor(Math.random() * 255);
    	var z = Math.floor(Math.random() * 255);
    	var Color = "rgb(" + x + "," + y + "," + z + ")";
  
  document.querySelector('html').style.background = Color;
    });

var isInDarkMode = false;

document.querySelector('.nightbutton').addEventListener('click', function() {
	if (isInDarkMode) {
		document.querySelector('html').style.background = "white";
		document.querySelector('html').style.color= "black";
		isInDarkMode = false
	} else {

	document.querySelector('html').style.background = "black";
	document.querySelector('html').style.color = "beige";
	isInDarkMode = true;
}
});