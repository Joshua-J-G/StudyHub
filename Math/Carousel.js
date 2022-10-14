var id = 0;
var names = [];
var dis = [];
var image = [];
var link = [];


var currentcontext = 0;

var title;
var discription;


var centerimage;

var rightimage;
var leftimage;

var rightboarder;
var leftboarder;

var rightarrow= document.getElementById("leftarrow");
var leftarrow = document.getElementById("rightarrow");

const webpage = "";
const page = ""

var select = document.getElementById("select");
function UpdateUi()
{
	console.log(title);
	console.log(names[currentcontext]);
	title.innerHTML = names[currentcontext];
	discription.innerHTML = dis[currentcontext];

	if(currentcontext == 0)
	{
		leftboarder.style.visibility = 'hidden';
		leftimage.style.visibility = 'hidden';
	}else
	{
		leftboarder.style.visibility = 'visible';
		leftimage.style.visibility = 'visible';
		leftimage.src = webpage + image[currentcontext - 1]; 
	}

	if(currentcontext == id)
	{
		rightboarder.style.visibility = 'hidden';
		rightimage.style.visibility = 'hidden';
	}else
	{
		rightboarder.style.visibility = 'visible';
		rightimage.style.visibility = 'visible';
		rightimage.src = webpage + image[currentcontext + 1]; 
	}
	
	centerimage.src = webpage + image[currentcontext];
}



$(document).ready(function(){
   /* $.getJSON('English.json',function(data)
    {
        console.log("Working");
        console.log(data);
    })*/
    
	
	$.ajax({
		url: 'Math.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data)
		{
			$(data.Sectors).each(function(index,value)
			{
				
				id = index;
				names.push(value.name);
				dis.push(value.discription);
				image.push(value.image);
				link.push(value.link);
			});
			console.log(names);
			title = document.getElementsByClassName("Filename")[0];
			discription = document.getElementsByClassName("Discription")[0];

			centerimage = document.getElementById("CenterImage");

			rightimage = document.getElementById("RightImage");
			rightboarder = document.getElementById("RightBack");

			leftboarder=document.getElementById("LeftBack");
			leftimage = document.getElementById("LeftImage");

			
			UpdateUi();
		}
	});


	rightarrow.onclick = function()
	{
		if(currentcontext != 0)
		{
			currentcontext--;
		}
		UpdateUi();
	}

	leftarrow.onclick = function()
	{
		if(currentcontext != id)
		{
			currentcontext++;
		}
		UpdateUi();
	}

	select.onclick = function()
	{
		console.log("changeing Webpage");
		document.location.href = page + link[currentcontext];
	}

});
