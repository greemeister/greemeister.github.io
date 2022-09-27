// Ghost Info Defs
const ghostInfos = [
    { name : "spirit", evidences : [1,2,5], description: "No strengths. <span class='weakness'>A Spirit can be temporarily stopped by burning smudge sticks near them.</span>"},
    { name : "wraith", evidences : [1,2,7], description: "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps. <span class='weakness'>Wraiths have a toxic reaction to salt.</span>"},
    { name : "phantom", evidences : [2,3,7], description: "Looking at a Phantom will drop your sanity considerably faster. <span class='weakness'>Taking a photo of the Phantom will make it temporarily disappear.</span>"},
    { name : "poltergeist", evidences : [2,3,5], description: "Poltergeists can throw multiple objects at once. <span class='weakness'>With nothing to throw, Poltergeists become powerless.</span>"},
    { name : "banshee", evidences : [3,4,7], description: "A Banshee will only target one person at a time. <span class='weakness'>Banshees fear the crucifix and will be less aggressive near one.</span>"},
    { name : "jinn", evidences : [1,3,6], description: "A Jinn will travel at a faster speed if its victim is far away. <span class='weakness'>Turning off the location's power source will prevent the Jinn from using its ability.</span>"},
    { name : "mare", evidences : [2,4,5], description: "A Mare will have an increased chance to attack in the dark. <span class='weakness'>Turning the lights on around the Mare will lower its chance to attack.</span>"},
    { name : "revenant", evidences : [4,5,6], description: "A Revenant will travel at a significantly faster speed when hunting their prey. <span class='weakness'>Hiding from the Revenant will cause it to move very slowly.</span>"},
    { name : "shade", evidences : [1,5,6], description: "Shades are much harder to find. <span class='weakness'>A Shade will not enter a hunt if there are multiple people nearby.</span>"},
    { name : "demon", evidences : [3,5,6], description: "Demons will initiate hunts more often than other ghosts. <span class='weakness'>Demons will drain less of your sanity when you use a cursed possession.</span>"},
    { name : "yurei", evidences : [4,6,7], description: "Yureis have been known to have a stronger effect on people's sanity. <span class='weakness'>Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.</span>"},
    { name : "oni", evidences : [1,6,7], description: "Onis are more active when people are nearby and have been seen moving objects at great speed. <span class='weakness'>Onis are very active, making them easier to find.</span>"},
    { name : "yokai", evidences : [2,4,7], description: "Talking near a Yokai will anger it, increasing the chance of an attack. <span class='weakness'>When hunting, a Yokai can only hear voices close to it.</span>"},
    { name : "hantu", evidences : [3,4,6], description: "Lower temperatures allow the Hantu to move at faster speeds. <span class='weakness'>Hantus move slower in warmer areas.</span>"},
    { name : "myling", evidences: [1,3,5], description: "A Myling is known to be quieter when hunting. <span class='weakness'>Mylings more frequently make paranormal sounds.</span>"},
    { name : "goryo", evidences: [1,3,7], description: "A Goryo will usually only show itself on camera if there are no people nearby. <span class='weakness'>They are rarely seen far from their place of death.</span>"},
    { name : "onryo", evidences: [2,4,6], description: "Extinquishing a flame can cause an Onryo to attack. <span class='weakness'>When threatened, this ghost will be less likely to hunt.</span>"},
    { name : "the twins", evidences: [1,2,6], description: "Either Twin can be angered and initiate an attack on their prey. <span class='weakness'>The Twins will often interact with the environment at the same time.</span>"},
    { name : "raiju", evidences: [1,4,7], description: "A Raiju can siphon power from nearby electrical devices making it faster. <span class='weakness'>Raiju are constantly disrupting electronic equipment when attacking, making it easier to track.</span>"},
    { name : "obake", evidences: [1,3,4], description: "When interacting with the environment, an Obake will rarely leave a trace <span class='weakness'>Sometimes this ghost will shapeshift, leaving behind unique evidence.</span>"},
    { name : "the mimic", evidences: [2,3,4,6], description: "Unsure what this ghost is capable of. Exercise caution! <span class='weakness'>Several reports have noted ghost orb sightings near Mimics.</span>"},
    { name : "moroi", evidences: [2,5,6], description: "The weaker their victims, the stronger the Moroi becomes. <span class='weakness'>Moroi suffers from hyperosmia, weakening them for longer periods</span>"},
    { name : "deogen", evidences: [2,5,7], description: "Deogen constantly sense the living. You can run but you can't hide. <span class='weakness'>Deogen require a lot of energy to form and will move very slowly</span>"},
    { name : "thaye", evidences: [4,5,7], description: "Upon entering the location, Thaye will become active, defensive and agile. <span class='weakness'>Thaye will weaken over time, making them weaker, slower and less aggressive</span>"}

];

const maxNumOfEvidences = ghostInfos[0].evidences.length;
const ecn_enabled = "enabled";
const ecn_excluded = "excluded";
const ecn_tagged = "tagged";
const last_updated = "09/27/22"
const phasmophobia_server_version = "0.7.0.0"

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

function handleExcludeClick(cb) {
    excludeMode = cb.checked;

    if (excludeMode)
        excludeModeImage = cachedImages["excludeMode"].checked.src;
    else 
        excludeModeImage = cachedImages["excludeMode"].unchecked.src;
    
    document.getElementById("excludeLatch").style.backgroundImage = toUrl(excludeModeImage);
}

function initializeTracker() {
    // Set last update and phasmo version text
    document.getElementById("update-wrapper").innerHTML = "Last updated: " + last_updated + "<br>Phasmophobia Server: v" + phasmophobia_server_version;

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
        // Stopwatch onClick handlers
        var seconds = 0;
        var minutes = 0;
        var milliseconds = 0;
        var appendSeconds = document.getElementById('stopwatch-seconds');
        var appendMinutes = document.getElementById('stopwatch-minutes');
        var appendMilliseconds = document.getElementById('stopwatch-milliseconds');
        var stopwatch = document.getElementById('stopwatch');
        var stopwatchReset = document.getElementById('stopwatch-reset');
        var interval = null;

        function pad(num, size) {
            num = num.toString();
            while (num.length < size) num = "0" + num;
            return num;
        }

        function startStopWatch() {
            milliseconds += 25;

            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;

                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;

                    if (minutes >= 60) {
                        minutes = 0;
                        seconds = 0;
                    }

                    appendMinutes.innerHTML = pad(minutes, 2);
                }
                appendSeconds.innerHTML = pad(seconds, 2);
            }

            appendMilliseconds.innerHTML = pad(milliseconds, 3);
        }

        stopwatch.onclick = function() {
            if (interval === null) {
                interval = setInterval(startStopWatch, 25);
            } else {
                clearInterval(interval);
                interval = null;
            }
        }

        stopwatchReset.onclick = function() {
            if (interval !== null) {
                clearInterval(interval);
                interval = null;
            }
            seconds = 0;
            minutes = 0;
            milliseconds = 0;
            appendSeconds.innerHTML = pad(seconds, 2);
            appendMinutes.innerHTML = pad(minutes, 2);
            appendMilliseconds.innerHTML = pad(milliseconds, 3);
        }
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
        document.getElementById("possibleGhosts").innerHTML += '<li>' + ghostInfo.name + '</li><p><b>' + 
                                getEvidencePossibilities(ghostInfo) + '</b><br />' + ghostInfo.description + '</p>';
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
