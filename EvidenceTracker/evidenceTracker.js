// Evidence Type Defs
const evidenceTypes = [
    "Unknown",
    "EMF Level 5",
    "Spirit Box",
    "Fingerprints",
    "Ghost Orb",
    "Ghost Writing",
    "Freezing Temps"
];

// Ghost Info Defs
const ghostInfos = [
    { name : "spirit", evidences : [2,3,5], description: "No strengths. <span class='weakness'>Smudge sticks will pacify it for a while.</span>"},
    { name : "wraith", evidences : [2,3,6], description: "Floats, footsteps rare. <span class='weakness'>Has toxicity to salt.</span>"},
    { name : "phantom", evidences : [1,4,6], description: "Seeing it drops sanity fast. <span class='weakness'>Taking its photo makes it hide for a while.</span>"},
    { name : "poltergeist", evidences : [2,3,4], description: "Can throw objects around. <span class='weakness'>Ineffective in empty rooms.</span>"},
    { name : "banshee", evidences : [1,3,6], description: "Targets lone individuals. <span class='weakness'>Fears crucifix & less aggressive near them.</span>"},
    { name : "jinn", evidences : [1,2,4], description: "Travels fast if victim is far. <span class='weakness'>Kill electricity to stop its powers.</span>"},
    { name : "mare", evidences : [2,4,6], description: "More chances to attack in darkness. <span class='weakness'>Turn lights on to reduce aggression.</span>"},
    { name : "revenant", evidences : [1,3,5], description: "Travels fast when hunting. <span class='weakness'>Moves slowly if it can't see humans.</span>"},
    { name : "shade", evidences : [1,4,5], description: "Shy/hard to find. Less activity around groups. <span class='weakness'>Can't hunt if multiple people around.</span>"},
    { name : "demon", evidences : [2,5,6], description: "Very aggressive. Attacks often. <span class='weakness'>Ouija board use won't affect sanity.</span>"},
    { name : "yurei", evidences : [4,5,6], description: "Strong effect on sanity. <span class='weakness'>Smudging its room contains it to that room for a while.</span>"},
    { name : "oni", evidences : [1,2,5], description: "More active with people nearby. <span class='weakness'>High activity makes it easier to find and identify.</span>"},
];

const maxNumOfEvidences = ghostInfos[0].evidences.length;
const ecn_enabled = "enabled";
const ecn_excluded = "excluded";
const ecn_tagged = "tagged";

var maxEvidenceID = 0;
var excludeEvidence = false;
var evidenceArray = [];
var excludeEvidenceArray = [];

function getGhostInfoMatches(present, notPresent, exclude) {
    let matches = (_.pickBy(_.omitBy(ghostInfos,ghost =>
            ghost.evidences.some(r=> notPresent.indexOf(r) >= 0)
        ), ghost =>
            present.every(r=> ghost.evidences.indexOf(r) >= 0)
    ));

    return Object.values(_.omitBy(matches, m => 
        m.evidences.some(r => exclude.indexOf(r) >= 0)
    ));
    /*return Object.values(_.pickBy(_.omitBy(ghostInfos,ghost =>
            ghost.evidences.some(r=> notPresent.indexOf(r) >= 0)
        ), ghost =>
            present.every(r=> ghost.evidences.indexOf(r) >= 0)
    ));*/
}

function getRemainingEvidenceIds(present, notPresent, exclude) {
    return _.difference(_.flatMap(getGhostInfoMatches(present, notPresent, exclude), gi=> gi.evidences), present);
}

function getEvidencePossibilities(gi) {
    let res = "";

    for (i = 0; i < gi.evidences.length; i++) {
        res = res + evidenceTypes[gi.evidences[i]];

        if (i < (gi.evidences.length - 1)) {
            res = res + " + ";
        }
    }

    return res;
}

function modifyEvidenceClass(evidence, classname, action="add") {
    let element = document.getElementById(getEvidenceByID(evidence));

    action = action.toLowerCase();
    
    if (action !== "add") {
        element.classList.remove(classname);
    } else {
        if (!element.classList.contains(classname)) {
            element.classList.add(classname);
        }
    }
}

function evidenceToArray(arr, evidence, action="add") {
    let classname = "";
    
    action = action.toLowerCase();

    if (arr === excludeEvidenceArray) {
        classname = ecn_excluded;
    } else if (arr === evidenceArray) {
        classname = ecn_tagged;
    }

    if (action !== "add") {
        if (Array.isArray(arr) && arr.indexOf(evidence) !== -1) {
            arr.splice(arr.indexOf(evidence), 1);
        }
    } else if (!Array.isArray(arr) || arr.indexOf(evidence) === -1) {
        if (arr.length < maxNumOfEvidences) {
            arr.push(evidence);
        } else {
            return;
        }
    } else {
        return;
    }

    modifyEvidenceClass(evidence, classname, action);
}

function toggleEvidence(evidence) {
    console.clear();
    //console.log("Evidence: " + evidence);

    if (evidence) {
        let arr = evidenceArray;
        let arr2 = excludeEvidenceArray;

        if (excludeEvidence) {
            arr = excludeEvidenceArray;
            arr2 = evidenceArray;
        }

        // Make sure to remove the evidence from the "other" array first
        if (arr2.indexOf(evidence) !== -1) {
            evidenceToArray(arr2, evidence, "remove");
        }

        if (arr.indexOf(evidence) === -1) {
            if ((getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).length > 1) || (arr === evidenceArray)) {
                /*getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).forEach (e => {
                    console.log("e: " + getEvidenceByID(e));
                })*/
                evidenceToArray(arr, evidence, "add");
            }

        } else {
            evidenceToArray(arr, evidence, "remove");
        }
    }

    // grab ghost matches according to selected evidence
    document.getElementById("possibleGhosts").innerHTML = "";

    if (evidenceArray.length == 0) {
        document.getElementById("possibleGhosts").innerHTML = "<br /><p>We need tangible evidence! Check areas with tools to gather information and evidence.</p>";
    } else {
        getGhostInfoMatches(evidenceArray, [], excludeEvidenceArray).forEach(ghostInfo => { // getGhostMatches([foundEvidence], [missingEvidence])
        document.getElementById("possibleGhosts").innerHTML += '<li>' + ghostInfo.name + '</li> <p><b>' + 
                                getEvidencePossibilities(ghostInfo) + '</b><br />' + ghostInfo.description + '</p>';
        })
    }

    document.getElementById("emf").style.backgroundImage = "url('btnsDisabled/emf.png')";
    document.getElementById("spiritbox").style.backgroundImage = "url('btnsDisabled/spiritbox.png')";
    document.getElementById("fingerprints").style.backgroundImage = "url('btnsDisabled/fingerprints.png')";
    document.getElementById("ghostorb").style.backgroundImage = "url('btnsDisabled/ghostorb.png')";
    document.getElementById("ghostwriting").style.backgroundImage = "url('btnsDisabled/ghostwriting.png')";
    document.getElementById("freezingtemperatures").style.backgroundImage = "url('btnsDisabled/freezingtemperatures.png')";
                    
    getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).forEach(evidenceId => {
        document.getElementById(getEvidenceByID(evidenceId)).style.backgroundImage = "url('btnsUnchecked/" + getEvidenceByID(evidenceId) + ".png')";
    })

    for (let i = 0; i < evidenceArray.length; i++) {
        document.getElementById(getEvidenceByID(evidenceArray[i])).style.backgroundImage = "url('btnsChecked/" + getEvidenceByID(evidenceArray[i]) + ".png')";
    }

    for (let i = 0; i < excludeEvidenceArray.length; i++) {
        document.getElementById(getEvidenceByID(excludeEvidenceArray[i])).style.backgroundImage = "url('btnsExcluded/" + getEvidenceByID(excludeEvidenceArray[i]) + ".png')";
    }
    
    for (let j = 1; j < maxEvidenceID+1; j++) {
        let element = document.getElementById(getEvidenceByID(j));

        if (element.style.backgroundImage.includes("Disabled")) {
            //console.log(element + ": is disabled!");
            element.onclick = false;
            element.classList.remove(ecn_enabled);
        } else {
            element.onclick = getClickFunction(j);
            
            if (!element.classList.contains(ecn_enabled)) {
                element.classList.add(ecn_enabled);
            }
        }    

        //console.log("j: " + j + ", " + element);
    }
}

function clearEvidence() {
    evidenceArray = [];
    excludeEvidenceArray = [];
    
    for (let i = 1; i < maxEvidenceID+1; i++) {
        evidenceToArray(evidenceArray, i, "remove");
        evidenceToArray(excludeEvidenceArray, i, "remove");
    }

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
            return "ghostorb";
            break;
        case 5:
            return "ghostwriting";
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
        for (let i = 0; i < item.evidences.length; i++) {
            if (item.evidences[i] > maxEvidenceID) {
                maxEvidenceID = item.evidences[i];
            }
        }
    });
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 17) {
        if (!excludeEvidence) {
            excludeEvidence = true;
            //window.alert("keydown");
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 17) {
        if (excludeEvidence) {
            excludeEvidence = false;
            //window.alert("keyup");
        }
    }
});
