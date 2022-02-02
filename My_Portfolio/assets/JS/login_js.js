function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pass").value;
		//var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='1803037@ritindia.edu' && pwd=='rit12345')
		{
			window.location = "MyPortfolio.html";
		}
		else if(uname!='1803037@ritindia.edu'){
			document.getElementById('email_error').innerHTML="Please enter a valid mail";  
		}
		else if(pwd!='rit12345'){
			document.getElementById('pass_error').innerHTML="Please enter a correct password";  
		}
		
		else
		{
			
			alert("Wrong Credentials");
		}
	}
