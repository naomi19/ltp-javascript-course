window.onload = function()
{
    document.getElementById('consoleButton').addEventListener('click', firstResponse);
    document.getElementById('browserButton').addEventListener('click', secondResponse);
    document.getElementById('myButton').addEventListener('click', response)
};

function firstResponse(e)
{
    console.log("Thanks for clicking the console button")
}

function secondResponse(e)
{
    document.write("Thanks for clicking the browser button")
}

function response(e)
{
    alert("Hello there!")
}