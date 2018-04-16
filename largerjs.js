var images = document.getElementsByClassName("image");
var bimages = document.getElementsByClassName("bImages");
var imagesLength = images.length;

for( var i = 0; i < imagesLength; ++i)
{

	(function(){
		var ii = i;
		setTimeout(function(){
		images[ii].addEventListener("click", function(){
		largerPresent(ii); 
	});
	},0);
	})();
	
}

function largerPresent(smallerimageNum)
{
	console.log("ran");
	for(var i = 0; i < imagesLength; ++i)
	{
		bimages[i].style.display = "none";
	}

	bimages[smallerimageNum].style.display = "initial";
	
	
}








