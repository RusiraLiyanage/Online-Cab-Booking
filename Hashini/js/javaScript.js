function enableButton()
{
	
	if (document.getElementById("check").checked)
		
		document.getElementById("submitButton").disabled=false;
	else
		document.getElementById("submitButton").disabled=true;

}


function validation(){
var a= document.getElementById("psw").value;
var b= document.getElementById("confirmPsw").value;

if (a == b){
	alert("matched");
	return true;
	}
else {
	alert("mismatched");
	return false;
}
}


