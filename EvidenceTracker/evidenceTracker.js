/* 
   1 = EMF level 5
   2 = Spirit Box
   3 = Fingerprints
   4 = Ghost Orbs 
   5 = Ghost Writings
   6 = Freezing Temps
*/

// ghost info definitions
const ghostInfos = [
    { name : "spirit", evidences : [2,3,5], description: "<b>Spiritbox + Fingerprints + Writings</b><br />No strengths. <span class='weakness'>Smudge sticks will pacify it for a while.</span>"},
    { name : "wraith", evidences : [2,3,6], description: "<b>Spiritbox + Fingerprints + Freezing temps</b><br />Floats, footsteps rare. <span class='weakness'>Has toxicity to salt.</span>"},
    { name : "phantom", evidences : [1,4,6], description: "<b>EMF Level 5 + Orbs + Freezing temps</b><br />Seeing it drops sanity fast. <span class='weakness'>Taking its photo makes it hide for a while.</span>"},
    { name : "poltergeist", evidences : [2,3,4], description: "<b>Spiritbox + Fingerprints + Orbs</b><br />Can throw objects around. <span class='weakness'>Ineffective in empty rooms.</span>"},
    { name : "banshee", evidences : [1,3,6], description: "<b>EMF Level 5 + Fingerprints + Freezing temps</b><br />Targets lone individuals. <span class='weakness'>Fears crucifix & less aggressive near them.</span>"},
    { name : "jinn", evidences : [1,2,4], description: "<b>EMF Level 5 + Spiritbox + Orbs</b><br />Travels fast if victim is far. <span class='weakness'>Kill electricity to stop its powers.</span>"},
    { name : "mare", evidences : [2,4,6], description: "<b>Spiritbox + Orbs + Freezing temps</b><br />More chances to attack in darkness. <span class='weakness'>Turn lights on to reduce aggression.</span>"},
    { name : "revenant", evidences : [1,3,5], description: "<b>EMF Level 5 + Fingerprints + Writings</b><br />Travels fast when hunting. <span class='weakness'>Moves slowly if it can't see humans.</span>"},
    { name : "shade", evidences : [1,4,5], description: "<b>EMF Level 5 + Orbs + Writings</b><br />Shy/hard to find. Less activity around groups. <span class='weakness'>Can't hunt if multiple people around.</span>"},
    { name : "demon", evidences : [2,5,6], description: "<b>Spiritbox + Writings + Freezing temps</b><br />Very aggressive. Attacks often. <span class='weakness'>Ouija board use won't affect sanity.</span>"},
    { name : "yurei", evidences : [4,5,6], description: "<b>Orbs + Writings + Freezing temps</b><br />Strong effect on sanity. <span class='weakness'>Smudging its room contains it to that room for a while.</span>"},
    { name : "oni", evidences : [1,2,5], description: "<b>EMF Level 5 + Spiritbox + Writings</b><br />More active with people nearby. <span class='weakness'>High activity makes it easier to find and identify.</span>"},
];

maxEvidenceID = 0;

// Do not touch v
function getGhostInfoMatches(present, notPresent) {
    return Object.values(_.pickBy(_.omitBy(ghostInfos,ghost =>
            ghost.evidences.some(r=> notPresent.indexOf(r) >= 0)
        ), ghost =>
            present.every(r=> ghost.evidences.indexOf(r) >= 0)
    ))
}

function getRemainingEvidenceIds(present, notPresent) {
    return _.difference(_.flatMap(getGhostInfoMatches(present, notPresent), gi=> gi.evidences), present)
}
// Do not touch ^

let evidenceArray = [];

function toggleEvidence(evidence) {    

    console.clear();
    //console.log("Evidence: " + evidence);
    // if that evidence doesn't exist in the array (-1)
    if (evidence) {
        if(evidenceArray.indexOf(evidence) === -1){
            evidenceArray.push(evidence);
        } else {
            evidenceArray.splice(evidenceArray.indexOf(evidence), 1);
        }
    }   

    // get ghost matches according to entered evidence
    document.getElementById("possibleGhosts").innerHTML = "";

    if (evidenceArray.length == 0) {
        document.getElementById("possibleGhosts").innerHTML = "<br /><p>We need tangible evidence. I should check rooms with an EMF reader for activity, or a thermometer for sub-zero temperatures.</p>";
    } else {
        getGhostInfoMatches(evidenceArray,[]).forEach(ghostInfo => { // getGhostMatches([foundEvidence], [missingEvidence])
        document.getElementById("possibleGhosts").innerHTML += '<li>' + ghostInfo.name + '</li> <p>' + ghostInfo.description;
        })
    }

    document.getElementById("emf").style.backgroundImage = "url('btnsDisabled/emf.png')";
    document.getElementById("spiritbox").style.backgroundImage = "url('btnsDisabled/spiritbox.png')";
    document.getElementById("fingerprints").style.backgroundImage = "url('btnsDisabled/fingerprints.png')";
    document.getElementById("ghostorbs").style.backgroundImage = "url('btnsDisabled/ghostorbs.png')";
    document.getElementById("ghostwritings").style.backgroundImage = "url('btnsDisabled/ghostwritings.png')";
    document.getElementById("freezingtemperatures").style.backgroundImage = "url('btnsDisabled/freezingtemperatures.png')";
                    
    getRemainingEvidenceIds(evidenceArray,[]).forEach(evidenceId => {
        document.getElementById(getEvidenceByID(evidenceId)).style.backgroundImage = "url('btnsUnchecked/" + getEvidenceByID(evidenceId) + ".png')"; // enabled button (possible evidence)
    })

    for (var i = 0; i < evidenceArray.length; i++){
        document.getElementById(getEvidenceByID(evidenceArray[i])).style.backgroundImage = "url('btnsChecked/" + getEvidenceByID(evidenceArray[i]) + ".png')"; // selected button
    }
    
    for (var j = 1; j < maxEvidenceID+1; j++) {
        var element = document.getElementById(getEvidenceByID(j));

        if (element.style.backgroundImage.includes("Disabled")) {
            //console.log(element + ": is disabled!");
            element.onclick = false;
            element.classList.remove("enabled");
        } else {
            element.onclick = getClickFunction(j);
            
            if (!element.classList.contains("enabled")) {
                element.classList.add("enabled");
            }
        }
        

        //console.log("j: " + j + ", " + element);
        
    }
}

function clearEvidence() {
    evidenceArray = [];
    toggleEvidence(null);
}

function getClickFunction(id){
    switch(id) {
        case 1:
            return function() { toggleEvidence(1) };
            break;
        case 2:
            return function() { toggleEvidence(2) };
            break;
        case 3:
            return function() { toggleEvidence(3) };
            break;
        case 4:
            return function() { toggleEvidence(4) };
            break;
        case 5:
            return function() { toggleEvidence(5) };
            break;
        case 6:
            return function() { toggleEvidence(6) };
            break;
        default:
            return "error";
    }
}

function getEvidenceByID(id){
    switch(id) {
        case 1:
            return "emf";
            break;
        case 2:
            return "spiritbox";
            break;
        case 3:
            return "fingerprints";
            break;
        case 4:
            return "ghostorbs";
            break;
        case 5:
            return "ghostwritings";
            break;
        case 6:
            return "freezingtemperatures";
            break;
        default:
            return "error";
    }
}

function findMaxEvidenceID() {
    ghostInfos.forEach(function(item, index) {
        for (i = 0; i < item.evidences.length; i++) {
            if (item.evidences[i] > maxEvidenceID) {
                maxEvidenceID = item.evidences[i];
            }
        }
    });
}
