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

var excludeEvidence = false;
var maxElementTypeID = 0;

var elementTypeCache = [
    {id: "VOID", description: "DO NOT USE!"}
];

var evidenceArray = [];
var excludeEvidenceArray = [];
var cachedImages = [];

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 17) {
        if (!excludeEvidence) {
            excludeEvidence = true;
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 17) {
        if (excludeEvidence) {
            excludeEvidence = false;
        }
    }
});

function clearEvidence(e) {
    evidenceArray = [];
    excludeEvidenceArray = [];
    
    for (let i = 1; i <= maxElementTypeID; i++) {
        manageEvidenceArray(evidenceArray, i, "remove");
        manageEvidenceArray(excludeEvidenceArray, i, "remove");
    }

    toggleEvidence(null);
}

function getEvidenceByID(id) {
    if (id < 0 || id > maxElementTypeID) {
        return "error";
    }

    return elementTypeCache[id].id;
}

function getEvidenceByName(evidence) {
    for (let i = 1; i <= maxElementTypeID; i++) {
        if (elementTypeCache[i].id === evidence) {
            return i;
        }
    }

    return 0;
}

function getEvidencePossibilities(gi) {
    let res = "";

    for (let i = 0; i < gi.evidences.length; i++) {
        res = res + elementTypeCache[gi.evidences[i]].description;

        if (i < (gi.evidences.length - 1)) {
            res = res + " + ";
        }
    }

    return res;
}

function getGhostInfoMatches(present, notPresent, exclude) {
    let matches = (_.pickBy(_.omitBy(ghostInfos,ghost =>
            ghost.evidences.some(r=> notPresent.indexOf(r) >= 0)
        ), ghost =>
            present.every(r=> ghost.evidences.indexOf(r) >= 0)
    ));

    return Object.values(_.omitBy(matches, m => 
        m.evidences.some(r => exclude.indexOf(r) >= 0)
    ));
}

function getRemainingEvidenceIds(present, notPresent, exclude) {
    return _.difference(_.flatMap(getGhostInfoMatches(present, notPresent, exclude), gi=> gi.evidences), present);
}

function initializeTracker() {
    // Build our element cache (THIS MUST BE FIRST IN THE INITIALIZATION PROCESS!!!)
    (function () {
        var goo = document.getElementById('evidence');
        
        for (let i = 0; i < goo.children.length; i++) {
            if (goo.children[i].nodeName.toLowerCase() === "div") {
                elementTypeCache.push({id: goo.children[i].attributes.getNamedItem("id").value,
                                       description: goo.children[i].attributes.getNamedItem("description").value
                                      });
            }
        }

        maxElementTypeID = elementTypeCache.length - 1;
    })();

    // Initialize image cache
    (function () {
        for (let i = 1; i <= maxElementTypeID; i++) {
            let evidenceStr = getEvidenceByID(i);
            cachedImages[evidenceStr] = {checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image()};

            cachedImages[evidenceStr].checked.src = 'btnsChecked/' + evidenceStr + '.png';
            cachedImages[evidenceStr].disabled.src = 'btnsDisabled/' + evidenceStr + '.png';
            cachedImages[evidenceStr].excluded.src = 'btnsExcluded/' + evidenceStr + '.png';
            cachedImages[evidenceStr].unchecked.src = 'btnsUnchecked/' + evidenceStr + '.png';
        }
    })();

    // Initialize the onClick handlers
    (function () {
        for (let i = 1; i <= maxElementTypeID; i++) {
            document.getElementById(getEvidenceByID(i)).onclick = onClickHandler;
        }

        document.getElementById("clear").onclick = clearEvidence;
    })();

    // Initialize the possible ghost text ul element
    initPossibleGhostText();
}

function initPossibleGhostText() {
    document.getElementById("possibleGhosts").innerHTML = "<br /><p>We need tangible evidence! Check areas with tools to gather information and evidence.</p>";
}

function manageEvidenceArray(arr, evidence, action="add") {
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

function onClickHandler(e) {
    let evidenceId = getEvidenceByName(e.srcElement.id);
    
    if (evidenceId > 0) {
        toggleEvidence(evidenceId);
    }
}

function toggleEvidence(evidence) {
    console.clear();
    evidenceUsed = [];

    if (evidence) {
        let arr = evidenceArray;
        let arr2 = excludeEvidenceArray;

        if (excludeEvidence) {
            arr = excludeEvidenceArray;
            arr2 = evidenceArray;
        }

        // Make sure to remove the evidence from the "other" array first
        if (arr2.indexOf(evidence) !== -1) {
            manageEvidenceArray(arr2, evidence, "remove");
        }

        if (arr.indexOf(evidence) === -1) {
            if ((getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).length > 1) || (arr === evidenceArray)) {
                manageEvidenceArray(arr, evidence, "add");
            }

        } else {
            manageEvidenceArray(arr, evidence, "remove");
        }
    }

    // grab ghost matches according to selected evidence
    document.getElementById("possibleGhosts").innerHTML = "";

    if (evidenceArray.length == 0) {
        initPossibleGhostText();        
    } else {
        getGhostInfoMatches(evidenceArray, [], excludeEvidenceArray).forEach(ghostInfo => {
        document.getElementById("possibleGhosts").innerHTML += '<li>' + ghostInfo.name + '</li><p><b>' + 
                                getEvidencePossibilities(ghostInfo) + '</b><br />' + ghostInfo.description + '</p>';
        })
    }
             
    getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).forEach(evidenceId => {
        evidenceUsed.push(evidenceId);
        document.getElementById(getEvidenceByID(evidenceId)).style.backgroundImage = toUrl(cachedImages[getEvidenceByID(evidenceId)].unchecked.src);
    })

    for (let i = 0; i < evidenceArray.length; i++) {
        evidenceUsed.push(evidenceArray[i]);
        document.getElementById(getEvidenceByID(evidenceArray[i])).style.backgroundImage = toUrl(cachedImages[getEvidenceByID(evidenceArray[i])].checked.src);
    }

    for (let i = 0; i < excludeEvidenceArray.length; i++) {
        evidenceUsed.push(excludeEvidenceArray[i]);
        document.getElementById(getEvidenceByID(excludeEvidenceArray[i])).style.backgroundImage = toUrl(cachedImages[getEvidenceByID(excludeEvidenceArray[i])].excluded.src);
    }

    for (let i = 1; i <= maxElementTypeID; i++) {
        if (!evidenceUsed.includes(i)) {
            document.getElementById(elementTypeCache[i].id).style.backgroundImage = toUrl(cachedImages[elementTypeCache[i].id].disabled.src);
        }
    }
    
    for (let i = 1; i <= maxElementTypeID; i++) {
        let element = document.getElementById(getEvidenceByID(i));

        if (element.style.backgroundImage.includes("Disabled")) {
            element.onclick = false;
            element.classList.remove(ecn_enabled);
        } else {
            if (element.onclick != onClickHandler) {
                element.onclick = onClickHandler;
            }
            
            if (!element.classList.contains(ecn_enabled)) {
                element.classList.add(ecn_enabled);
            }
        }    
    }
}

function toUrl(str) {
    return "url(" + str + ")";
}