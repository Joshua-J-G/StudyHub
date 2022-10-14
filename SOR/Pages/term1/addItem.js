// JavaScript Document

var data;

var submit = document.getElementById("select");
var id;
$(document).ready(function(){
    /* $.getJSON('English.json',function(data)
     {
         console.log("Working");
         console.log(data);
     })*/
     
     
     $.ajax({
         url: 'json/term1.json',
         dataType: 'json',
         type: 'get',
         cache: false,
         success: function(data)
         {
            this.data = data;
            $(data.Sectors).each(function(index,value)
			{
				
				id=index;
            });
         }
        });
    });


submit.onclick = function()
{
    data.Sectors.push(id: id++,)

}