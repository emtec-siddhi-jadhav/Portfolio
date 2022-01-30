function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pass").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter email");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 12)
		{
			alert("Password min length is 6 and max length is 12.");
		}
		else
		{
			window.location = "MyPortfolio.html";
			
		}
	}
