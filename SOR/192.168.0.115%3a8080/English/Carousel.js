var id = 0;
var names = [];
var dis = [];
var image = [];
var link = [];

$(document).ready(function(){
   /* $.getJSON('English.json',function(data)
    {
        console.log("Working");
        console.log(data);
    })*/
    
	
	$.ajax({
		url: 'English.json',
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
		}
	});
});