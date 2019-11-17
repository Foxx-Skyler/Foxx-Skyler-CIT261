function conditionFunction(x){
    var time = new Date().getHours();
    if (time < 20) {
        disText = "Hello!";
        }
        else {
        disText = "Goodbye!";
        }
    document.getElementById('displayTime').innerHTML = disText;
}