window.onload = function()
    {
        document.getElementById('findNameBtn').addEventListener('click', lookForName);
    };

function lookForName() 
{ 
    var myName = "Naomi";  
    var timesFound = [];  
    var text = document.getElementById("inputNameBox").value 


    for (var i = 0; i < text.length; i++) 
        {  if (text[i] === "n") 
            {  for (var n = i; n < (myName.length + i); n++) 
                {  timesFound.push(text[n]);   }   
            }  
        }  

    if (timesFound.length === 0) 
        { alert("Your name wasn't found!");  } 
            else {  alert(timesFound);  }
}