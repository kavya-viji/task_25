var input = document.createElement("input");
input.setAttribute("id","input");
input.placeholder="Enter the Range:";
input.style.height="40px";
input.style.width="20%";
input.style.backgroundColor="thistle";
input.style.border=" groove ";
input.style.borderWidth="10px"
input.style.borderColor="peachpuff"
document.body.appendChild(input);

var button = document.createElement("button");
button.setAttribute("id","button");
button.innerHTML="Click";
button.style.height="40px";
button.style.width="10%";
button.style.backgroundColor="plum";
button.style.border="groove ";
button.style.borderWidth="10px"
button.style.borderColor="peachpuff"
document.body.appendChild(button);


button.onclick=function()
{
	var r = parseInt(document.getElementById("input").value);
	
	for(i=2;i<=r;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
	  {
		document.write(i+"<br>");
	  }
	}
	 document.body.style.backgroundColor="pink";
	 document.body.style.textAlign="center";
	 document.body.style.border="groove ";
	 document.body.style.borderWidth="15px"
	 document.body.style.borderColor="purple"
}	
 document.body.style.backgroundColor="lightcyan";
 document.body.style.textAlign="center";
 