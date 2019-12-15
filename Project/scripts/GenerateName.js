function generateName(){
    
    document.getElementById('randoDice').style.animationPlayState = "running";
    
    var spinStop;
    spinStop = setTimeout(stopDice, 1000);
    
    var randomNumber = Math.floor(Math.random() * 6);
    
	var nameList = ["Roger","Joseph","Marcus","Arthur","Trover","Terra","Matthew"];
    
    //Elves can live up to 700. Gnomes can live up to 400. Dwarves up to 350. Orcs live up to 35. Half-Orc up to 70.
    
    var ageListHuman = Math.floor(Math.random() * 70) + 18;
    var ageListOrc = Math.floor(Math.random() * 30) + 9;
    var ageListDwarf = Math.floor(Math.random() * 350) + 30;
    var ageListHalfling = Math.floor(Math.random() * 150) + 20;
    var ageListElf = Math.floor(Math.random() * 700) + 25;
    
    var strengthList = Math.floor(Math.random() * 14) + 7;
    var dexterityList = Math.floor(Math.random() * 14) + 5;
    var constitutionList = Math.floor(Math.random() * 14) + 5;
    var intelligenceList = Math.floor(Math.random() * 14) + 5;
    
    var speciesList = ["Human","Half-Elf","Elf","Dark Elf","Halfling","Dwarf","Gnome","Orc","Half-Orc"];
    
    var classList = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
    
    var Charname = nameList[randomNumber];
    var Charspecies = speciesList[randomNumber];
    var Charclass = classList[randomNumber];
    
    
    // document.getElementById('inpName').innerHTML = nameList[randomNumber];
    
    var name = document.getElementById('inpName');
    name.value = Charname;
    
    var species = document.getElementById('inpSpecies');
    species.value = Charspecies;
    
    var age = document.getElementById('inpAge');
    if (species.value === "Human") {
        age.value = ageListHuman;
    } else if (species.value === "Half-Orc") {
        age.value = ageListHuman;
    } else if (species.value === "Orc") {
        age.value = ageListOrc;
    } else if (species.value === "Halfling") {
        age.value = ageListHalfling;
    } else if (species.value === "Dwarf") {
        age.value = ageListDwarf;
    } else if (species.value === "Gnome") {
        age.value = ageListDwarf;
    } else {
        age.value = ageListElf;
    }

    var classValue = document.getElementById('inpClass');
    classValue.value = Charclass;
    
    var strengthValue = document.getElementById('inpStren');
    strengthValue.value = strengthList;
    
    var dexterityValue = document.getElementById('inpDext');
    dexterityValue.value = dexterityList;
    
    var constitutionValue = document.getElementById('inpConst');
    constitutionValue.value = constitutionList;
    
    var intelligenceValue = document.getElementById('inpIntell');
    intelligenceValue.value = intelligenceList;
    
}

function stopDice(){
  document.getElementById('randoDice').style.animationPlayState = "initial";
  document.getElementById('randoDice').style.animationPlayState = "paused";
}
