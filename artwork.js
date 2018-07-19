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
    var quote = randomInfo[randomNumber - 1]
    document.getElementById("art").src= imgName;
    document.getElementById("artDescription").textContent= quote;


 });


document.querySelector('.tradclass').addEventListener('click', function(){
	var randomImage =["5.jpg", "6.jpg", "7.jpg" , "8.jpg" ];
	var randomInfo= ["Leonardo Da Vinci, Mona Lisa, 1503–19  The Mona Lisa is an oil painting by Italian painter, sculptor, architect and engineer Leonardo da Vinci and is arguably the world’s most famous painting. It was painted in Florence sometime between 1503 and 1519 but now hangs in the Louvre in Paris where it is an object of pilgrimage for enthusiasts all over the world. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination. " , "Johannes Vermeer, Girl with a Pearl Earring, 1665 Girl with a Pearl Earring is an oil painting by Dutch artist Johannes Vermeer that depicts an imaginary young woman in an exotic dress and a very large pearl earring. She is in a dark shallow space, an intimate setting that draws any viewer’s attention exclusively towards her. Unlike many of Vermeer’s subjects, she isn’t concentrating on a daily chore and instead is caught in a fleeting moment as she turns her head over her shoulder and meets the viewer’s gaze with her eyes wide and lips open as if she were about to speak. Today, the work permanently resides in the Mauritshuis museum in the The Haque."
	, " Vincent Van Gogh, The Starry Night, 1889 The Starry Night is an oil-on-canvas painting by Dutch artist Vincent Van Gogh. The inspiration behind the painting was the “morning star” he saw from his window at an asylum in Southern France (where he was being treated for his psychological disorders). The sun, on the upper right corner, was created to be the “light” of the painting with its use of radiant white and yellow color painted in concentric circles. It is Van Gogh’s only nocturne in the series of views from his bedroom window. The Starry Night is located at the Museum of Modern Art in New York City."  ,  
"Eugène Delacroix, Liberty Leading the People, 1830 Liberty Leading the People is a painting by Eugène Delacroix, the leader of the Romantic school in French painting. It commemorates the July Revolution of 1830 that overthrew King Charles X of France. It depicts a woman leading the people forward over a barricade and bodies of the fallen, holding the flag of the French Revolution in one hand and a musket with the other. The fighters are shown to be from a mixture of social classes, from the bourgeoisie (young man in a top hat) to the urban worker (boy holding pistols). Liberty Leading the People left a legacy to multiple groups of people, including possibly inspiring Victor Hugo’s famous novel Les Misérables. It was also used for the band Coldplay’s 2008 album cover Viva la Vida, with the words written in white. The painting is now located in the Louvre, in Paris, France."];
	var randomNumber = Math.floor(Math.random() * 4) + 5;
	var quote = randomInfo[randomNumber -1]
    var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName;
    document.getElementById("artDescription").textContent= quote;

 });

document.querySelector('.photographs').addEventListener('click', function(){
	var randomInfo= ["Earthrise by William Anders December 24, 1968 dated the first manned mission to orbit the moon. At the beginning of the fourth of 10 orbits, their spacecraft emerged from the far side of the moon when a view of the Earth filled one of the hatch windows. The astronauts, Frank Borman, Jim Lovell and Bill Anders, took the shot and it was our first full-color view of our planet which helped launch the environmental movement. " 
	, "Raising the Flag on Iwo Jima by Joe Rosenthal. Raising the Flag on Iwo Jima is an iconic photograph captured by Associated Press photographer Joe Rosenthal on February 23, 1945. The picture depicts six United States Marines raising a U.S. flag on top of Mount Suribachi, during the battle of Iwo Jima, in World War II. Rosenthal’s photo became one of the most recognizable images of war and embraced as a symbol of unity in the long-fought war. " ,
	"The Falling Man by Richard Drew The Falling Man was a photo taken by Richard Drew in the moments after the September 11 attacks. It’s a photo of one man’s distinct escape from the burning, collapsing building that serves as a symbol of individuality. On this day of mass tragedy, Falling Man is one of the only widely seen pictures that shows someone dying. The true power of Falling Man is less about who its subject was since his identity is still unknown, but more about what he became: a makeshift unknown soldier in an often unknown and uncertain war, suspended forever in history.", 
	"Migrant Mother was a photo taken in 1936 by Dorothea Lange during the Great Depression. Florence Thompson was the subject of this. In the photo, her children are cowering behind her for protection, hiding their faces, the Migrant Mother gazing distractedly into the distance. She is on her own. There is no help, no protection, and nothing over the horizon but work, want, and wondering."];
	var randomImage =["13.jpg", "14.jpg", "15.jpg" , "16.jpg" ];
	var randomNumber = Math.floor(Math.random() * 4) + 13;
	 var quote = randomInfo[randomNumber -1]
     var imgName =  randomNumber + ".jpg";
    document.getElementById("art").src= imgName;
     document.getElementById("artDescription").textContent= quote;

 });

document.querySelector('.mosaics').addEventListener('click', function(){
	var randomImage =["9.jpg", "10.jpg", "11.jpg" , "12.jpg" ];
	var randomInfo= ["Secret Between You and Me by artist Atsuko Laskaris. " , " Autumn Landscape " , 
	"Winter’s Beauty by Laura Rendlen" ," Secret Mosaic Staircase"];
	var randomNumber = Math.floor(Math.random() * 4) + 9;
    var imgName =  randomNumber + ".jpg";
    var quote = randomInfo[randomNumber - 1]
    document.getElementById("art").src= imgName;
    document.getElementById("artDescription").textContent= quote;

 });
