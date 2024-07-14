function checkPassword()
{
	var a=document.getElementById("pass").value;
	var b=document.getElementById("repass").value;

		if(a==b)
		{
			alert("Registration Complete!");
			return true;
		}
		else
		{
			alert("Password Mismatch!");
			return false;
		}
}