// Ghost Info Defs
const ghostInfos = [
    { name : "onryo", evidences : [1,5,7], description: "The Onryo is an exceptionally aggressive ghost who will willingly make their presence known. They are capable of affecting your sanity with whispers, making a considerable impact on your sanity level."},
    { name : "mononoke", evidences : [1,2,10], description: "The Mononoke is driven by wrath. With each of their actions marked by pronounced hatred."},
    { name : "caoineag", evidences : [2,4,8], description: "Whoever a Coaineag has marked will be the next to die. With their whispers, these entities foreshadow inevitable death."},
    { name : "djinn", evidences : [1,5,6], description: "Ancient spirits that rarely abandon their habitat and are incredibly hostile towards whoever invades their area. They love the light and often play with electrical appliances."},
    { name : "doppler", evidences : [7,8,9], description: "They say if you stare into the mirror, your disfigured twin with stare back. The twin, also called the Doppelgänger drains their victim's vital power acquiring his/her strength."},
    { name : "myling", evidences : [1,6,10], description: "The Myling is the most communicative ghost and will try to draw your attention by all means."},
    { name : "revenant", evidences : [3,4,10], description: "The Revenant is one of the most dangerous ghosts. They are relatively calm if you don't agitate them and is often difficult to identify. Once they start hunting, very little will stop him. The exceptionally abominable entity will show his presence often."},
    { name : "shiryo", evidences : [1,2,3], description: "The Shiryo will do their best to show you that you don't have long to live. They are known to be extremely aggressive."},
    { name : "shinigami", evidences : [2,7,10], description: "The Shinigami are drawn toward death and they're always near places of death."},
    { name : "poltergeist", evidences : [5,6,8], description: "Poltergeists are exceptionally active ghosts and like playing with objects around their victims to frighten them."},
    { name : "dibbuk", evidences : [4,9,10], description: "The ghosts rarely kill their victims themselves, driving them to suicide instead. If the Dibbuk marks you as a victim, your sanity will plummet."},
    { name : "obake", evidences : [3,5,9], description: "An Obake often appears as a misty haze but it can assume a human shape if necessary. This type of ghost can often control the entire house."},
    { name : "piru", evidences : [3,4,5], description: "The Piro are usually quiet. They can easily be infuriated by invading their privacy whichs leads to immediate retaliation."},
    { name : "amonjaku", evidences : [6,7,8], description: "The demons are capable of provoking evil. The Amonjaku will disturb your presence and choose the best time to attack."},
    { name : "kijo", evidences: [1,5,8], description: "The Kijo is ashamed of their ugliness which causes gathering evidence to be difficult. When the Kijo decides to show their face, it's usually to hunt."},
    { name : "oni", evidences: [2,8,9], description: "These wrathful demons, capable of assuming human form, are relatively passive. If you hear loud stomping then you better run."},
    { name : "mogwai", evidences: [6,7,10], description: "The Mogwai is capable of freezing the water with their icy aura. These demons are very communicative and love learning various signs."},
    { name : "mara", evidences: [3,9,10], description: "The Mara is any hunter's worst nightmare. Its appearance alone is enough to cause great fear. This entity loves darkness and will try all means to keep it dark."},
    { name : "pishachi", evidences: [4,5,7], description: "The Pishachi are insidious and will do their best to confuse you with frequent false signs."},
    { name : "reiki", evidences: [1,3,7], description: "The demonic entities are hard to banish and will constantly disrupt your ritual. While in the meantime, they are prone to kill."}
];

/*
    1 - EMF 5
    2 - Spirit Box
    3 - Ectoplasm
    4 - Ghost Orbs
    5 - Ghost Writing
    6 - Freezing Temps
    7 - Laser Projection
    8 - Haze
    9 - Infrared Motion Sensor
    10 - Voice Recorder
*/

const maxNumOfEvidences = ghostInfos[0].evidences.length;
const ecn_enabled = "enabled";
const ecn_excluded = "excluded";
const ecn_tagged = "tagged";
const last_updated = "08/14/22"
const ghostexile_version = "1.0.9.0"

var excludeEvidence = false;
var excludeMode = false;
var maxElementTypeID = 0;
var recObj = null;
var speechStatusElement = null;

var elementTypeCache = [
    {id: "VOID", description: "DO NOT USE!"}
];

var evidenceArray = [];
var excludeEvidenceArray = [];
var cachedImages = [];

document.addEventListener("keydown", function(event) {
    if (event.key === 'Control') {
        if (!excludeEvidence) {
            excludeEvidence = true;
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === 'Control') {
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

    res = "<div class=\"ghost-evidence-text\">"
    for (let i = 0; i < gi.evidences.length; i++) {
        res = res + elementTypeCache[gi.evidences[i]].description;

        if (i < (gi.evidences.length - 1)) {
            res = res + " + ";
        }
    }
    res += "</div>"
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

function handleExcludeClick(cb) {
    excludeMode = cb.checked;

    if (excludeMode)
        excludeModeImage = cachedImages["excludeMode"].checked.src;
    else 
        excludeModeImage = cachedImages["excludeMode"].unchecked.src;
    
    document.getElementById("excludeLatch").style.backgroundImage = toUrl(excludeModeImage);
}

function initializeTracker() {
    // Set last update and version text
    document.getElementById("update-wrapper").innerHTML = "Last updated: " + last_updated + "<br>Ghost Exile: v" + ghostexile_version;

    // Build our element cache (THIS MUST BE FIRST IN THE INITIALIZATION PROCESS!!!)
    (function () {
        let ew = Array.from(document.querySelectorAll('.evidence-wrapper'));

        ew.forEach(wrapper => {
            let evidence = wrapper.getElementsByClassName('checkbox-text');
            let desc = "";

            (evidence && evidence.length > 0) ? desc = evidence[0].innerHTML : "";

            elementTypeCache.push({id: wrapper.id, description: desc});
        });
        
        maxElementTypeID = elementTypeCache.length - 1;
    })();

    // Initialize image cache
    (function () {
        for (let i = 1; i <= maxElementTypeID; i++) {
            let evidenceStr = getEvidenceByID(i);
            cachedImages[evidenceStr] = {checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image()};

            cachedImages[evidenceStr].checked.src = 'checkboxes/checked/' + parseInt(i) + '.png';
            cachedImages[evidenceStr].excluded.src = 'checkboxes/excluded/' + parseInt(i) + '.png';
            cachedImages[evidenceStr].unchecked.src = 'checkboxes/unchecked/' + parseInt(i) + '.png';
        }

        let evidenceStr = "excludeMode";
        cachedImages[evidenceStr] = {checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image()};
        cachedImages[evidenceStr].unchecked.src = 'checkboxes/unchecked/6.png';
        cachedImages[evidenceStr].checked.src = 'checkboxes/checked/6.png';
    })();

    // Initialize the onClick handlers
    (function () {
        for (let i = 1; i <= maxElementTypeID; i++) {
            document.getElementById(getEvidenceByID(i)).onclick = onClickHandler;
        }

        document.getElementById("clear-button").onclick = clearEvidence;
    })();

    // Initialize the possible ghost text ul element
    initPossibleGhostText();

    let element = document.getElementById("exclude_remark_wrapper");

    if (element.onclick != onExcludeClickHandler) {
        element.onclick = onExcludeClickHandler;
    }
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
    let evidenceId = getEvidenceByName(e.srcElement.parentNode.id.replace(/_[a-zA-Z0-9]*/,''));
    
    if (evidenceId > 0) {
        toggleEvidence(evidenceId);
    }
}

function onExcludeClickHandler(e) {
    excludeMode = !excludeMode;

    if (excludeMode)
        excludeModeImage = cachedImages["excludeMode"].checked.src;
    else 
        excludeModeImage = cachedImages["excludeMode"].unchecked.src;
    
    document.getElementById("exclude_evidence_checkbox").setAttribute('src',excludeModeImage);
}

function toggleEvidence(evidence) {
    console.clear();
    let evidenceUsed = [];

    if (evidence) {
        let arr = evidenceArray;
        let arr2 = excludeEvidenceArray;

        if (excludeEvidence || excludeMode) {
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
        document.getElementById("possibleGhosts").innerHTML += '<li>' + ghostInfo.name + '</li><p>' + 
                                getEvidencePossibilities(ghostInfo) + 
                                "<div class=\"ghost-description\">" + ghostInfo.description + '</div>' + '</p><br>';
        })
    }
             
    getRemainingEvidenceIds(evidenceArray, [], excludeEvidenceArray).forEach(evidenceId => {
        evidenceUsed.push(evidenceId);
        document.getElementById(getEvidenceByID(evidenceId) + "_checkbox").setAttribute('src', cachedImages[getEvidenceByID(evidenceId)].unchecked.src);
    })

    for (let i = 0; i < evidenceArray.length; i++) {
        evidenceUsed.push(evidenceArray[i]);
        document.getElementById(getEvidenceByID(evidenceArray[i]) + "_checkbox").setAttribute('src', cachedImages[getEvidenceByID(evidenceArray[i])].checked.src);
    }

    for (let i = 0; i < excludeEvidenceArray.length; i++) {
        evidenceUsed.push(excludeEvidenceArray[i]);
        document.getElementById(getEvidenceByID(excludeEvidenceArray[i]) + "_checkbox").setAttribute('src', cachedImages[getEvidenceByID(excludeEvidenceArray[i])].excluded.src);
    }
    
    for (let i = 1; i <= maxElementTypeID; i++) {
        let element = document.getElementById(getEvidenceByID(i));
        let envelope = document.getElementById(getEvidenceByID(i) + '_envelope');

        if (!evidenceUsed.includes(i)) {
            element.onclick = false;
            element.classList.remove(ecn_enabled);
            envelope.classList.remove(ecn_enabled);

            document.getElementById(getEvidenceByID(i) + "_checkbox").setAttribute('src', cachedImages[getEvidenceByID(i)].unchecked.src);
        } else {
            if (element.onclick != onClickHandler) {
                element.onclick = onClickHandler;
            }
            
            if (!element.classList.contains(ecn_enabled)) {
                element.classList.add(ecn_enabled);
                envelope.classList.add(ecn_enabled);
            }
        }    
    }
}

function toUrl(str) {
    return "url(" + str + ")";
}

document.addEventListener("DOMContentLoaded", initializeTracker);
