// Ghost Info Defs
const ghostInfos = [
    { name: "spirit", evidences: [1, 2, 5], description: "No strengths. <span class='weakness'>A Spirit can be temporarily stopped by burning smudge sticks near them.</span>", hunt_threshold: "50%", unique: "When a Spirit is smudged it will prevent the spirit from hunting again for 180 seconds, instead of the normal 90 seconds for most other ghost types (60 seconds for Demon)." },
    { name: "wraith", evidences: [1, 2, 7], description: "Wraiths almost never touch the ground, meaning it can't be tracked by UV footsteps. <span class='weakness'>Wraiths have a toxic reaction to salt.</span>", hunt_threshold: "50%", unique: "Wraith will never step in salt, therefore not be able to leave green UV footsteps. Wraith can teleport silently to a player outside of a ghost event. When it does so, it will leave an EMF reading at the player location then walk back to it's room. After teleporting, Wraith can interact with objects, do ghost events, or even hunt before going back to it's room. Wraith can be found pretty far from it's favorite room. FACT: Wraiths cannot walk through walls or teleport during a hunt." },
    { name: "phantom", evidences: [2, 3, 7], description: "Looking at a Phantom will drop your sanity considerably faster. <span class='weakness'>Taking a photo of the Phantom will make it temporarily disappear.</span>", hunt_threshold: "50%", unique: "Phantom will disappear immediately after taking a photo of it during a ghost event, and often continue making noise while invisible. The ghost will not show up in the actual photo. When hunting it will be more invisible while flashing than other ghosts. Phantoms like to follow players around. To help keep the phantom near its room, have all party members stick together. This will make evidence and objectives easier to get." },
    { name: "poltergeist", evidences: [2, 3, 5], description: "Poltergeists can throw multiple objects at once, and with great force. <span class='weakness'>With nothing to throw, Poltergeists become powerless.</span>", hunt_threshold: "50%", unique: "The Poltergeist has a chance to throw many objects at once, greatly decreasing player sanity by 2% per item thrown. Poltergeist also throws objects more often than other ghosts both normally and during the hunt. It has a 100% chance to throw an object nearby during a hunt every .5 seconds, compared to 50% for other ghosts. In the Apocalypse update, Polty was given the Oni ability to throw things harder. It can now throw things at a power of 2-6 compared to 0-3 for all other ghosts. To determine Poltergeist, make piles of multiple items and see if it throws all at once." },
    { name: "banshee", evidences: [3, 4, 7], description: "Banshee will weaken their target before striking. <span class='weakness'>Banshee's can sometimes be heard screaming with a parabolic microphone.</span>", hunt_threshold: "50% (based off target's sanity, ignores average sanity)", unique: "The Banshee will only target one player for the duration of the run as long as that player is alive and inside the house. If the target is outside the house, the banshee will hunt normally. If the player dies, Banshee will select a new target.    Banshee tells- Ignores non targets during the hunt. Has a unique Parabolic sound. Increased chance for singing ghost events. Ignores average sanity and can hunt when target is at or below 50%. This means that under the right circumstances, Banshee can hunt at 87% group sanity if it's target is at 50% and all other members are at 100%. Will often stalk its target while wandering. Example of unique parabolic mic sounds below. If the target is above 50% sanity, whether inside the house or not, the banshee cannot hunt." },
    { name: "jinn", evidences: [1, 3, 6], description: "A Jinn will travel at a faster speed if its victim is far away. <span class='weakness'>Turning off the location's power source will prevent the Jinn from using its ability.</span>", hunt_threshold: "50%", unique: "When targeting a player during a hunt, the Jinn is faster when power is on. When it gets within 3m of the player, the Jinn will slow down. Jinn also has the ability to zap 25% sanity instantly when near the player and the breaker is on. It will give EMF reading at the breaker when using its sanity drain ability. Turing off the breaker will disable both of these abilities." },
    { name: "mare", evidences: [2, 4, 5], description: "A Mare will have an increased chance to attack in the dark. <span class='weakness'>Turning the lights on around the Mare will lower its chance to attack.</span>", hunt_threshold: "Mare can hunt at 60% if the lights are off, but not until 40% if the lights (near the mare) are on.", unique: "Mare likes to turn lights off. They cannot turn lights on at the switch. Mare has a higher chance for breaking light event. It wanders more if lights are on in it's room. Mare has a chance to immediately switch off a light that has been turned on. To check for mare in NM mode, pay attention to light switching. Bait it by turning on lights and seeing if it will instantly turn them off." },
    { name: "revenant", evidences: [4, 5, 6], description: "A Revenant will travel at a significantly faster speed when hunting their prey. <span class='weakness'>Hiding from the Revenant will cause it to move very slowly.</span>", hunt_threshold: "50%", unique: "Revenant will be very slow when not targeting a player (1m/s). When it gains line of sight of a player however, it will instantly speed up to 3m/s. Very distinct, slow footsteps when not targeting a player. The best way to determine if you have a revenant is through the hunt." },
    { name: "shade", evidences: [1, 5, 6], description: "Shades are much harder to find. <span class='weakness'>A Shade will not enter a hunt if there are multiple people nearby.</span>", hunt_threshold: "35%", unique: "Shade has lowered activity overall.  Will more often show up in shadow form for ghost events. Less likely to show full ghost model. Ghost event chance increases the lower the average sanity gets. Will not throw objects if you are in the same room as the ghost. Boring ghost? Probably a Shade." },
    { name: "demon", evidences: [3, 5, 6], description: "Demons will initiate hunts more often than other ghosts. <span class='weakness'>Demons fear the crucifix and will be aggressive near one. Crucix range is 5 meters.</span>", hunt_threshold: "Demon can hunt at 70% naturally, with a rare chance to hunt at any sanity.", unique: "Demon minimum cooldown between hunts is 20 seconds compared to the 25 second cooldown for all other ghosts. Smudging a demon outside of a hunt will only prevent it from hunting for 60 seconds compared to the usual 90 seconds for other ghosts (180 for spirit). Crucifix will prevent the hunt at a 5m radius for demons, instead of 3m for all other ghosts. Demon no longer has reduced sanity drain when using cursed objects." },
    { name: "yurei", evidences: [4, 6, 7], description: "Yureis have been known to have a stronger effect on people's sanity. <span class='weakness'>Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.</span>", hunt_threshold: "50%", unique: "Yurei has the ability to zap 15% sanity if nearby. If it uses its ability, it will also fully close a door in its room as a sign to check your sanity. When smudged, Yurei will be trapped in its room for a period of time. Yurei is not the only ghost that can close the door in the same fashion. All ghosts can do this, but Yurei does it more often as it also accompanies its sanity drain ability." },
    { name: "oni", evidences: [1, 6, 7], description: "Oni are much more active whilst people are nearby and will drain their sanity faster when manifesting. <span class='weakness'>Oni disappear less often while hunting their prey.</span>", hunt_threshold: "50%", unique: "Oni cannot do the 'ghost mist' ghost event and has a higher chance to show actual full form during ghost events. (not shadow or stealth). Always pay attention to which ghost events you get. NEW Oni will now drain double the sanity when a ghost event hits you. Will now flash less during a hunt causing it to be visible for longer." },
    { name: "yokai", evidences: [2, 4, 7], description: "Talking near a Yokai will anger it, increasing the chance of an attack. <span class='weakness'>When hunting, a Yokai can only hear voices close to it.</span>", hunt_threshold: "50% normally with a chance to hunt up to 80% when players nearby are talking.", unique: "During a hunt, Yokai cannot detect your voice OR sense your equipment further than 2.5m away.  You can get much closer to the yokai with the music box before it will break. Ghost activity is increased when talking near a Yokai." },
    { name: "hantu", evidences: [3, 4, 6], description: "Lower temperatures allow the Hantu to move at faster speeds. <span class='weakness'>Hantus move slower in warmer areas.</span>", hunt_threshold: "50%", unique: "The lower the temps in the room, the quicker the Hantu will be. No Line of Sight speed increase. Hantu cannot turn the breaker on and has an increased chance to turn off the breaker. Hantu will always have freezing temps in Nightmare mode." },
    { name: "myling", evidences: [1, 3, 5], description: "A Myling is known to be quieter when hunting. <span class='weakness'>Mylings more frequently make paranormal sounds.</span>", hunt_threshold: "50%", unique: "Myling can sneak up on you during a hunt! It can only be heard during the hunt at a range of 12 meters or less. This now includes both footsteps AND vocal hunt noises. All other ghosts can be heard up to 20 meters away. Myling can respond more frequently through the parabolic microphone." },
    { name: "goryo", evidences: [1, 3, 7], description: "A Goryo will usually only show itself on camera if there are no people nearby. <span class='weakness'>They are rarely seen far from their place of death.</span>", hunt_threshold: "50%", unique: "Goryo DOTS evidence can only be seen through the video camera. DOTS will not show if a player is in the same room. DOTS will always be one of the 2 evidences given for Goryo in Nightmare mode. Goryo will not leave its room as often as other ghosts. If you see DOTS without the use of a video camera, you can rule out Goryo." },
    { name: "onryo", evidences: [2, 4, 6], description: "Extinquishing a flame can cause an Onryo to attack. <span class='weakness'>When threatened, this ghost will be less likely to hunt.</span>", hunt_threshold: "Hunts normally at 60% with a chance to hunt at 100% when extinguishing flames.", unique: "Onryo cannot hunt within 4 meters of a flame, however if it blows 3 flames and there are no other flames within a 4m radius to prevent it from hunting, it will trigger a hunt at any sanity." },
    { name: "the twins", evidences: [1, 2, 6], description: "Either Twin can be angered and initiate an attack on their prey. <span class='weakness'>The Twins will often interact with the environment at the same time.</span>", hunt_threshold: "50%", unique: "The twin ghost can interact with multiple objects in different rooms at the same time. Think of it as one ranged and one melee interaction together. It can hunt from either the melee location or the ranged location. When hunting from the ranged location, the hunt speed slightly faster (110%), and the melee location hunt speed is slightly slower (90%) than normal ghost speed. The Twins is only one ghost on the map. It can only trigger motion sensors and salt etc in it's physical (melee) location." },
    { name: "raiju", evidences: [1, 4, 7], description: "A Raiju can siphon power from nearby electrical devices making it faster. <span class='weakness'>Raiju are constantly disrupting electronic equipment when attacking, making it easier to track.</span>", hunt_threshold: "50% normally. 65% when near active electronics.", unique: "Raiju will be very fast around powered player equipment. To benefit from the speed increase, Raiju needs to be within 6m of any powered piece of equipment on small maps. 8m on medium maps, and 10m on large maps.  Head cams are the only powered equipment that do not affect Raiju speeds.  When hunting, electronics will malfunction at 15m for Raiju, as opposed to 10m for every other ghost. To slow the Raiju down, turn off all electronics that you brought into the house." },
    { name: "obake", evidences: [1, 3, 4], description: "When interacting with the environment, an Obake will rarely leave a trace. <span class='weakness'>Sometimes this ghost will shapeshift, leaving behind unique evidence.</span>", hunt_threshold: "50%", unique: "Obake is a subtle ghost with little to go by. All tells are with it's ultraviolet. It is the only ghost that can produce 6 fingered ultraviolet in addition to all other normal prints. While ultraviolet will always be one of the 2 evidences on NM mode, it still has a 25% chance to not leave one when touching something. Obake can cut the duration of all remaining ultraviolet in half if it uses it's ability. If Obake is suspected, pay close attention to FP. Obake has a chance to leave 6 fingered prints." },
    { name: "the mimic", evidences: [2, 3, 4, 6], description: "We're unsure what this ghost is capable of. Exercise caution! <span class='weakness'>Several reports have noted ghost orb sightings near Mimics.</span>", hunt_threshold: "The Mimic can hunt following the rules for whichever ghost it is mimicking at the time.", unique: "The Mimic will copy the behavior of any ghost type both during the hunt as well as outside of the hunt. In Nightmare mode, the Mimic will show 2 of it's 3 evidence in addition to orbs. In all other modes, the mimic will show all 3 evidence, plus orbs. Evidence is the easiest way to determine if you have a mimic however often you may notice some of the more obvious traits of the ghosts it mimics. It will change what ghost it mimics every 30 seconds to 2 minutes  and can change several times a round.  Mimic cannot change behaviors mid hunt." },
    { name: "moroi", evidences: [2, 5, 6], description: "The weaker their victims, the stronger the Moroi becomes. <span class='weakness'>Moroi suffers from hyperosmia, weakening them for longer periods.</span>", hunt_threshold: "50%", unique: "Moroi will curse a player who gets spirit box or parabolic mic response with double the passive sanity drain. Lights and Candles do not stop the cursed sanity drain. When outside the house the curse is paused. Taking sanity pills will remove the curse. Smudging during the hunt will blind the Moroi for 12 seconds. Moroi is faster the lower your sanity is, varying from 1.5 m/s at its slowest up to 2.25 m/s at its fastest. Test...if you get a spirit box response, grab a candle and head into the house. If sanity still drains, it's a Moroi. Always has sprit box in Nightmare." },
    { name: "deogen", evidences: [2, 5, 7], description: "Deogen constantly sense the living. You can run but you can't hide. <span class='weakness'>Deogen require a lot of energy to form and will move very slowly when approaching its victim.</span>", hunt_threshold: "40%", unique: "You can run, but you cannot hide! Deogen knows where you are at all times. Hunts at 40% sanity. Super fast when far away, but super slow when close to it's target. Can change targets mid hunt. No line of sight acceleration. Has a unique spirit box sound. Decreased spirit box range for unique sound. Always has spirit box on nightmare mode. Increased chance for DOTS/writing." },
    { name: "thaye", evidences: [4, 5, 7], description: "Upon entering the location, Thaye will become active, defensive and agile. <span class='weakness'>Thaye will weaken over time, making them weaker, slower and less aggressive.</span>", hunt_threshold: "75% scaling to a minimum 15% after aging.", unique: "Thaye ages as time goes on if there is a player nearby. Starting very active and aging to a very slow, inactive ghost. Hunting threshold, activity, speed, and ghost event chance will all decrease the longer you are near the ghost. Starting hunt threshold is 75% dropping all the way down to a minimum of 15%. Thaye lower its speed when it ages. Starting at 2.7m/s and lowering to a minimum of 1m/s    Each age lowers the speed by 0.175m/s. No Line of sight acceleration. Increased chance for DOTS/Writing. When asking 'How old are you' on the ouija board, the Thaye will respond differently depending on it's age." }

];

const maxNumOfEvidences = ghostInfos[0].evidences.length;
const ecn_enabled = "enabled";
const ecn_excluded = "excluded";
const ecn_tagged = "tagged";
const last_updated = "04/18/25"
const phasmophobia_server_version = "0.12.1.0"

var excludeEvidence = false;
var excludeMode = false;
var showAllGhosts = false;
var maxElementTypeID = 0;
var recObj = null;
var speechStatusElement = null;
var ghostExclusiveMap = null;

var elementTypeCache = [
    { id: "VOID", description: "DO NOT USE!" }
];

var evidenceArray = [];
var excludeEvidenceArray = [];
var cachedImages = [];

document.addEventListener("keydown", function (event) {
    if (event.key === 'Control') {
        if (!excludeEvidence) {
            excludeEvidence = true;
        }
    }
});

document.addEventListener("keyup", function (event) {
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

    ghostExclusiveMap.clear();
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
    let matches = (_.pickBy(_.omitBy(ghostInfos, ghost =>
        ghost.evidences.some(r => notPresent.indexOf(r) >= 0)
    ), ghost =>
        present.every(r => ghost.evidences.indexOf(r) >= 0)
    ));

    return Object.values(_.omitBy(matches, m =>
        m.evidences.some(r => exclude.indexOf(r) >= 0)
    ));
}

function getRemainingEvidenceIds(present, notPresent, exclude) {
    return _.difference(_.flatMap(getGhostInfoMatches(present, notPresent, exclude), gi => gi.evidences), present);
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

            elementTypeCache.push({ id: wrapper.id, description: desc });
        });

        maxElementTypeID = elementTypeCache.length - 1;
    })();

    // Initialize image cache
    (function () {
        for (let i = 1; i <= maxElementTypeID; i++) {
            let evidenceStr = getEvidenceByID(i);
            cachedImages[evidenceStr] = { checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image() };

            cachedImages[evidenceStr].checked.src = 'checkboxes/checked/' + parseInt(i) + '.png';
            cachedImages[evidenceStr].excluded.src = 'checkboxes/excluded/' + parseInt(i) + '.png';
            cachedImages[evidenceStr].unchecked.src = 'checkboxes/unchecked/' + parseInt(i) + '.png';
        }

        let evidenceStr = "excludeMode";
        cachedImages[evidenceStr] = { checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image() };
        cachedImages[evidenceStr].unchecked.src = 'checkboxes/unchecked/6.png';
        cachedImages[evidenceStr].checked.src = 'checkboxes/checked/6.png';

        evidenceStr = "showAllGhosts";
        cachedImages[evidenceStr] = { checked: new Image(), disabled: new Image(), excluded: new Image(), unchecked: new Image() };
        cachedImages[evidenceStr].unchecked.src = 'checkboxes/unchecked/4.png';
        cachedImages[evidenceStr].checked.src = 'checkboxes/checked/4.png';
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

        stopwatch.onclick = function () {
            if (interval === null) {
                interval = setInterval(startStopWatch, 25);
            } else {
                clearInterval(interval);
                interval = null;
            }
        }

        stopwatchReset.onclick = function () {
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

    let show_ghosts_element = document.getElementById("show_all_ghosts_wrapper");

    if (show_ghosts_element.onclick != onShowGhostsClickHandler) {
        show_ghosts_element.onclick = onShowGhostsClickHandler;
    }

    ghostExclusiveMap = new Map();
}

function initPossibleGhostText() {
    document.getElementById("possibleGhosts").innerHTML = "<br /><p>We need tangible evidence! Check areas with tools to gather information and evidence.</p>";
}

function manageEvidenceArray(arr, evidence, action = "add") {
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

function modifyEvidenceClass(evidence, classname, action = "add") {
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
    let evidenceId = getEvidenceByName(e.srcElement.parentNode.id.replace(/_[a-zA-Z0-9]*/, ''));

    if (evidenceId > 0) {
        toggleEvidence(evidenceId);
    }
}

function onExcludeClickHandler(e) {
    excludeMode = !excludeMode;
    let excludeModeImage

    if (excludeMode)
        excludeModeImage = cachedImages["excludeMode"].checked.src;
    else
        excludeModeImage = cachedImages["excludeMode"].unchecked.src;

    document.getElementById("exclude_evidence_checkbox").setAttribute('src', excludeModeImage);
}

function onShowGhostsClickHandler(e) {
    showAllGhosts = !showAllGhosts;
    let showAllGhostsImage

    if (showAllGhosts)
        showAllGhostsImage = cachedImages["showAllGhosts"].checked.src;
    else
        showAllGhostsImage = cachedImages["showAllGhosts"].unchecked.src;

    document.getElementById("show_all_ghosts_checkbox").setAttribute('src', showAllGhostsImage);
    toggleEvidence(null);
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

    if (evidenceArray.length == 0 && excludeEvidenceArray.length == 0 && !showAllGhosts) {
        initPossibleGhostText();
    } else {
        getGhostInfoMatches(evidenceArray, [], excludeEvidenceArray).forEach(ghostInfo => {
            newDiv = document.createElement("div");
            newDiv.classList.add("ghostentry");
            newDiv.id = "ge_" + ghostInfo.name;

            newEntry = '<li><span class="tooltip">' + ghostInfo.name +
                '<span class="tooltiptext">' +
                '<div class="huntThreshold">Hunts at: ' + ghostInfo.hunt_threshold + '</div>' +
                '<div class="unique">Unique/Hidden Powers: ' + ghostInfo.unique + '</div>' +
                '</span>' +
                '</span></li>' +
                '<p><b>' + getEvidencePossibilities(ghostInfo) + '</b><br />' + ghostInfo.description + '</p>';

            newDiv.innerHTML = newEntry;
            document.getElementById("possibleGhosts").appendChild(newDiv);
            newDiv.onclick = toggleGhost
        });

        const ghostEntries = document.querySelectorAll(".ghostentry");
        ghostEntries.forEach((ghostEntry) => {
            if (ghostExclusiveMap.has(ghostEntry.id)) {
                newEvent = new Event("click");
                newEvent.override = true;
                ghostEntry.dispatchEvent(newEvent);
            }
        });
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

function toggleGhost(e) {
    // Rewind ancestry back to parent div element
    element = e.srcElement;
    while (element.nodeName.toLowerCase() != 'div') {
        element = element.parentElement;
    }
    total_count = document.querySelectorAll(".ghostentry").length;
    exclude_count = document.querySelectorAll("#possibleGhosts ." + ecn_excluded).length;

    override = false;
    if (typeof e.override !== 'undefined')
        override = e.override;

    if ((override && total_count > 1) || (!override && ((total_count - 1) > exclude_count || (element.classList.contains(ecn_excluded))))) {
        if (override) {
            if (ghostExclusiveMap.has(element.id)) {
                element.classList.add(ecn_excluded);
            }
        } else {
            if (element.classList.contains(ecn_excluded)) {
                if (ghostExclusiveMap.has(element.id))
                    ghostExclusiveMap.delete(element.id);
                element.classList.remove(ecn_excluded);
            } else {
                if (!ghostExclusiveMap.has(element.id))
                    ghostExclusiveMap.set(element.id, true);
                element.classList.add(ecn_excluded);
            }
        }
    }
}

function toUrl(str) {
    return "url(" + str + ")";
}

document.addEventListener("DOMContentLoaded", initializeTracker);
