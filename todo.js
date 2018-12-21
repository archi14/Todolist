var btn = document.getElementById("btn");
var txtbox = document.getElementById("box");
var data= document.getElementById("data");
var cross=0;
var value;
btn.addEventListener('click',function(){

	value=txtbox.value;
	console.log(value);
	addtodo(value);

});	

function addtodo(value)
{
	var htmlstring="<div id="+ cross.toString()+ " class=\"well\">" +value+ "<i style='margin-left:1000px;' onclick=\"removecross("+ cross.toString()+ ")\" class=\"glyphicon glyphicon-remove\"></i><div>";
	data.insertAdjacentHTML("beforeend",htmlstring);
	cross++;
}

function removecross(c)
{
	//console.log("ae");
	child=document.getElementById(c);
	data.removeChild(child);
	
}
