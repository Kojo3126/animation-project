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



document.querySelector('.contemporary').addEventListener('click', function(){
	var randomImage =["1.jpg", "2.jpg", "3.jpg" , "4.jpg" ];
	var randomNumber = Math.floor(Math.random() * 4) + 1;
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName
 });


document.querySelector('.tradclass').addEventListener('click', function(){
	var randomImage =["5.jpg", "6.jpg", "7.jpg" , "8.jpg" ];
	var randomNumber = Math.floor(Math.random() * 8) + 5;
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName
 });





