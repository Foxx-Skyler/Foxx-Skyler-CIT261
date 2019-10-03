var x = 1;
var y = 1;

function getAnswer() {
    var para = document.createElement('p');
    para.setAttribute('id', 'para');
    
    var answer = document.createTextNode('');
    if (x < 2) {
        answer = document.createTextNode('6');
    } else if (x < 3) {
        answer = document.createTextNode('23');
    } else {
        answer = document.createTextNode('7');
    }
    para.appendChild(answer);
    
    var element = document.getElementById('card');
    // element.appendChild(para);
    element.appendChild(para);
}

function removeCheat() {
    
    var parent = document.getElementById("body");
    var child = document.getElementById("cheat");
    
    // var self = document.getElementById("removeCheat");
    parent.removeChild(child); //
    // parent.removeChild(self);www
        
}

function newQuestion() {
    x++;
    var para = document.createElement("p");
    para.setAttribute('id', 'question');
    
    if (x < 3) {
        var newText = document.createTextNode("45 - 22 = ");
    } else if (x < 4) {
        newText = document.createTextNode("49 / 7 = ");
    } else {
        newText = document.createTextNode("3 + 3 = ");
        x = 1;
    }
    
    para.appendChild(newText);
    
    var ans = document.getElementById("para");

    var parent = document.getElementById("card");
    var child = document.getElementById("question");
    
    parent.replaceChild(para, child);
    parent.removeChild(ans);
}

//Dark Mode and Light Mode Functionality

function changeColor() {
    var page = document.documentElement;
    
    if (y == 1) {
        
        document.getElementById("card").style.backgroundColor = "black";
        document.getElementById("card").style.color = "white";
        document.getElementById("card").style.borderColor = "white";

        document.getElementById("body").style.backgroundColor = "black";

        document.getElementById("h1").style.color = "red";
        document.getElementById("h2").style.color = "red";
        
        var element = document.getElementById("removeCheat");
        
        if (typeof(element) != 'undefined' && element != null) {
            document.getElementById("removeCheat").style.color = "white";
            document.getElementById("removeCheat").style.backgroundColor = "red";
        }

        document.getElementById("colorchange").style.color = "black";
        document.getElementById("colorchange").style.backgroundColor = "white";
        
        document.createTextNode("LIGHT MODE");
        
        page.style.backgroundImage = "linear-gradient(270deg, rgb(94, 14, 4) 0%, rgb(61, 8, 0) 100%)";
        
        y = 2;
        
    } else {
        
        document.getElementById("card").style.backgroundColor = "#f2f3f4";
        document.getElementById("card").style.color = "#000000";
        document.getElementById("card").style.borderColor = "black";

        document.getElementById("body").style.backgroundColor = "#fff";

        document.getElementById("h1").style.color = "darkred";
        document.getElementById("h2").style.color = "darkred";

        var element = document.getElementById("removeCheat");
        
        if (typeof(element) != 'undefined' && element != null) {
            document.getElementById("removeCheat").style.color = "black";
            document.getElementById("removeCheat").style.backgroundColor = "red";
        }

        document.getElementById("colorchange").style.color = "white";
        document.getElementById("colorchange").style.backgroundColor = "black";
        
        page.style.backgroundImage = "linear-gradient(270deg, rgb(230, 233, 233) 0%, rgb(117, 128, 145) 100%)";
        
        y = 1;
        
    }
    

}





