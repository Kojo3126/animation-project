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
	var randomInfo= ["Olafur Eliasson, The weather project, 2003 Eliasson created this piece with the intent of bringing a part of his home city of London to New York. This artwork was made with different weather factors such as wind, rain, and sun in mind. This piece is an attempt to convey the way weather shapes cities and how people experience weather in cities.  In this project he decided to direct attention away from information cards in front of the exhibition, so that the viewers can experience the work unscathed. " ,  "Rachel Harrison, Huffy Howler, 2004 Rachel Harrison intended to make a found-object sculpture representing the concept of the equestrian statue from ancient imperial states. Harrison includes black purses full of rocks, a bike with a flat front tire, and an aluminum pole holding up synthetic sheepskin with a printed photograph of Mel Gibson hanging over the sheepskin. The sculpture has many layers of meaning which Harrison leaves up to the imagination of viewers. Huffy Howler is currently located within the Walker Art Center in Minneapolis, Minnesota" ,
	" Kehinde Wiley, Napoleon Leading the Army over the Alps, 2005 Napoleon Leading the Army over the Alps, located in the Brooklyn Museum is Kehinde Wiley’s recreation of a painting by Jacques-Louis David in which he depicted Napoleon’s victory over the Austrians.  In Wiley’s painting he replaces Napoleon with an African American man in order to encourage viewers to think about the biases art has historically and how race plays a part in  “masterpiece” art. In the words of Wiley himself, this painting is “about the world that we live in. Black men live in the world. My choice is to include them."
     , " Kara Walker, A Subtlety, 2014 A Subtlety (aka the Marvelous Sugar Baby) is a piece of installation art by American artist Kara Walker. The art’s central piece is a white sculpture depicting a woman with African features in the shape of a sphinx but also includes fifteen other sculptures. The piece was installed in the Domino Sugar Factory in the Williamsburg neighborhood of Brooklyn from May through July 2014. The exhibition sparked conversations about the show’s audience, the gentrification of Brooklyn and the work’s themes of race, sexuality, oppression, labor and the ephemeral. "]; 
	var randomNumber = Math.floor(Math.random() * 4) + 1;
    var imgName =  randomNumber + ".jpg";
    var quote = randomInfo[randomNumber]
    document.getElementById("art").src= imgName;
    document.getElementById("artDescription").textContent= quote;

 });


document.querySelector('.tradclass').addEventListener('click', function(){
	var randomImage =["5.jpg", "6.jpg", "7.jpg" , "8.jpg" ];
	var randomNumber = Math.floor(Math.random() * 4) + 5;
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName
 });

document.querySelector('.mosaics').addEventListener('click', function(){
	var randomImage =["9.jpg", "10.jpg", "11.jpg" , "12.jpg" ];
	var randomNumber = Math.floor(Math.random() * 4) + 9;
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName
 });

document.querySelector('.photographs').addEventListener('click', function(){
	var randomImage =["13.jpg", "14.jpg", "15.jpg" , "16.jpg" ];
	var randomNumber = Math.floor(Math.random() * 4) + 13;
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName
 });
