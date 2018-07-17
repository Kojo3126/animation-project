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

var randomImage =["img1.jpeg", "img2.jpeg", "img3.jpeg" , "img4.jpeg" ];

function randomImg(){
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var imgName = "img1" + randomNumber + ".jpg";
    document.getElementById("img1").src= "https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FDRo8CDUwkjWHmSF6AoC-Vw%252FThe_weather_project_111160.jpg&width=1200&quality=80" + "/" + img1 ;
 }