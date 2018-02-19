window.onload = function()
{
    var sentence = "the quick brown fox jumped over the lazy dog";
    
    function capWord(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    alert(capWord(sentence));
}