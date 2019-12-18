//Local Storage

function locStorage(){
    
    const inpName = document.getElementById("inpName");
    const inpAge = document.getElementById("inpAge");
    const inpSpecies = document.getElementById("inpSpecies");
    const inpClass = document.getElementById("inpClass");
    const inpStrength = document.getElementById("inpStren");
    const inpDexterity = document.getElementById("inpDext");
    const inpConstitution = document.getElementById("inpConst");
    const inpIntelligence = document.getElementById("inpIntell");
    
    
    const charName = inpName.value;
    const charAge = inpAge.value;
    const charSpecies = inpSpecies.value;
    const charClass = inpClass.value;
    const charStrength = inpStren.value;
    const charDexterity = inpDext.value;
    const charConstitution = inpConst.value;
    const charIntelligence = inpIntell.value;
    
    localStorage.setItem("charName", charName.value);
    localStorage.setItem("inpName", inpName.value);
    localStorage.setItem("inpAge", inpAge.value);
    localStorage.setItem("inpSpecies", inpSpecies.value);
    localStorage.setItem("inpClass", inpClass.value);
    localStorage.setItem("inpStren", inpStren.value);
    localStorage.setItem("inpDext", inpDext.value);
    localStorage.setItem("inpConst", inpConst.value);
    localStorage.setItem("inpIntell", inpIntell.value);
    
    
    //Handles hiding/showing of different sections of the page
    
    var x = document.getElementById("chaForm");
    var y = document.getElementById("charResults");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    
    //Assigns Local Storage values to the <p> elements in HTML
    
    document.getElementById("ansName").innerHTML += localStorage.getItem("inpName");
    document.getElementById("ansAge").innerHTML += localStorage.getItem("inpAge");
    document.getElementById("ansSpecies").innerHTML += localStorage.getItem("inpSpecies");
    document.getElementById("ansClass").innerHTML += localStorage.getItem("inpClass");
    document.getElementById("ansStren").innerHTML += localStorage.getItem("inpStren");
    document.getElementById("ansDext").innerHTML += localStorage.getItem("inpDext");
    document.getElementById("ansConst").innerHTML += localStorage.getItem("inpConst");
    document.getElementById("ansIntell").innerHTML += localStorage.getItem("inpIntell");
    
    //Console Log to showcase this is being stored
    
    console.log(charName);
    console.log(charAge);
    console.log(charSpecies);
    console.log(charClass);
    console.log(charStrength);
    console.log(charDexterity);
    console.log(charConstitution);
    console.log(charIntelligence);
    
    
    console.log(localStorage);
    
}

function getStorage(){
    
    //Handles hiding/showing of different sections of the page
    
    var x = document.getElementById("chaForm");
    var y = document.getElementById("charResults");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    
    
    //Assigns Local Storage values to the <p> elements in HTML
    
    document.getElementById("ansName").innerHTML += localStorage.getItem("inpName");
    document.getElementById("ansAge").innerHTML += localStorage.getItem("inpAge");
    document.getElementById("ansSpecies").innerHTML += localStorage.getItem("inpSpecies");
    document.getElementById("ansClass").innerHTML += localStorage.getItem("inpClass");
    document.getElementById("ansStren").innerHTML += localStorage.getItem("inpStren");
    document.getElementById("ansDext").innerHTML += localStorage.getItem("inpDext");
    document.getElementById("ansConst").innerHTML += localStorage.getItem("inpConst");
    document.getElementById("ansIntell").innerHTML += localStorage.getItem("inpIntell");
    
    
}
