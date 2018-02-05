window.onload = function()
{
    document.getElementById('confirmButton').addEventListener('click', runConfirm);
    
    function runConfirm()
    {
        var name = prompt("What is your name?")
        var message
        if(confirm("Press a button!") == true)
        {
            message = name + "you pressed OK!";
        } else{
            message = name + "you pressed Cancel!";
        }
        
        document.getElementById('text').innerHTML = message;
    }
    
    
}