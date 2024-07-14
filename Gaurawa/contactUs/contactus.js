function checkbox(){
	if(document.getElementById("check").checked)
	{
		document.getElementById("button").disabled = false;
	}
	else
	{
		document.getElementById("button").disabled = true;
	}
}