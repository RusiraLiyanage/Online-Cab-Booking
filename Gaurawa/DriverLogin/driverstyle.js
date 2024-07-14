function checkpassword(){
	var a = document.getElementById("name").value;
	var b = document.getElementById("name1").value;
	
	if(a==b){
		alert("password match");
		return true;
	}
	else
	{
		alert("password mismatch");
		return false;
	}
}