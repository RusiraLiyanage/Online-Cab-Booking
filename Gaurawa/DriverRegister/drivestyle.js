function checkbox(){
	if(document.getElementById("check").checked)
	{
		document.getElementById("btn1").disabled = false;
	}
	else
	{
		document.getElementById("btn1").disabled = true;
	}
}
function validation(){
var a=document.getElementById("pass1").value;
var b=document.getElementById("pass2").value;
if (a==b){
	alert("matched");
	return true;
}
else{
	alert("Dismatched");
	return false;
}
}
		
	