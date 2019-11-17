function loopFunction(){
    var x = "";
    for (i = 0; i < 30; i++) {
        x += i + "<br>";
    }
        document.getElementById("loopDiv").innerHTML = x;
}