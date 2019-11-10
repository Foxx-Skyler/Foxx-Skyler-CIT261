var x = 1;

function changeColor() {
    var wText = document.getElementById("weatherh1");
    
    if (x < 2) {
        wText.style.color = "darkblue";
        x++;
    } else if (x < 3) {
        wText.style.color = "black";
        x++;
    } else {
        wText.style.color = "darkred";
        x = 1;
    }
    
}

function playHeavyR() {
    
    var hr = document.getElementById("HeavyRain");
    if (hr.style.display == "none") {
        hr.style.display = "block";
    } else {
        hr.style.display = "none";
    }
}

function playSnow() {
    var sf = document.getElementById("Snowfall");
    if (sf.style.display == "none") {
        sf.style.display = "block";
    } else {
        sf.style.display = "none";
    }
}

function playFire() {
    var rf = document.getElementById("RainFire");
    if (rf.style.display == "none") {
        rf.style.display = "block";
    } else {
        rf.style.display = "none";
    }
}
