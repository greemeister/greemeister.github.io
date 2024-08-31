// Ghost Info Defs
const ghostInfos = [
    { name: "iblis", evidences: [3, 5, 7], description: "If it decides to hunt, it may be impossible to escape as it knows your location. <span class='weakness'>It moves more slowly if it is close to its target.</span>", unique: "Iblis is known to be a type of ghost that can sence and see where its prey is, even from a distance. If you are close enough to the Iblis, you can hear it use works that other ghosts won't." },
    { name: "revenant", evidences: [2, 3, 4], description: "They're a very unstable and unpredictable ghost. <span class='weakness'>If it decides to stay calm, it may make it easier for you to find it.</span>", unique: "A Revenant is known to be a very dangerous, unpredictable ghost. Regardless of your sanity, it can hunt you down if it feels like it." },
    { name: "deogen", evidences: [2, 5, 6], description: "They will be much more aggressive when hunting their chosen target. <span class='weakness'>Less aggressive if its prey is not nearby.</span>", unique: "Deogen are known to have no interest in anything other than the prey in its sights." },
    { name: "poltergeist", evidences: [2, 5, 7], description: "They can throw many things at once and can quickly lower your sanity. <span class='weakness'>They will calm down when there is nothing left to throw.</span>", unique: "A Poltergeist is known as a ghost that likes to play with its environment. It can throw objects to lower your sanity." },
    { name: "agash", evidences: [2, 4, 6], description: "It moves much faster in cold environments. <span class='weakness'>Its movement may slow down in a warmer environment.</span>", unique: "Agash is a ghost that feeds on cold environments. If an Agash decides to hunt, you will be able to see its breath." },
    { name: "jinn", evidences: [1, 4, 5], description: "Because a Jinn is a very active ghost, it is prone to hunting. <span class='weakness'>Because a Jinn is very active, it reveals itself quickly.</span>", unique: "Jinns are known to be more active than other ghosts. It has been observed that they're more active if someone is nearby." },
    { name: "shade", evidences: [3, 6, 7], description: "They're more aggressive in the dark. <span class='weakness'>A brightly lit environment will weaken the Shade.</span>", unique: "Shades are known as a ghost that are hypersensitive to light. They dislike being in brightly lit environments and always prefers the light to be off." },
    { name: "hantu", evidences: [3, 4, 7], description: "Talking to a Hantu makes you easier prey for it. <span class='weakness'>If it curses you by talking to you, you can remove the curse with sanity pills.</span>", unique: "Hantus are known as ghosts that play with people's minds through their speech. If you somehow manage to talk to one, it will play with your sanity, making you more vulnerable." },
    { name: "onryo", evidences: [1, 2, 3], description: "They will be much more aggressive if there are others with their chosen one. <span class='weakness'>They will not harm the person they fall in love with.</span>", unique: "Unlike other ghosts, Onryos are known to be jealous. They can choose one person, fall in love with them and attack anyone else." },
    { name: "wraith", evidences: [1, 2, 6], description: "It is highly likely to hunt with awake. Talking to the spirit box, using UV light and candles with awaken it. Fulu will not work while it's hunting. <span class='weakness'>It won't be active while asleep. Using a fulu will make it fall asleep.</span>", unique: "Wraith is known as a type of ghost that is very fond of its sleep. It doesn't like to be woken up. If you awaken a wraith, you will have to suffer the consequences." },
    { name: "oni", evidences: [1, 2, 4], description: "It is known to be very fast. <span class='weakness'>No data.</span>", unique: "The Oni has a special ability that can quickly reduce the sanity of those close to it. It is a very dangerous ghost. If it wants to, it can quickly play with your sanity and decide to kill you." },
    { name: "myling", evidences: [4, 6, 7], description: "If there is no fire around it, it will be aggressive. <span class='weakness'>If there is a fire around it, it will put it out first before hunting.</span>", unique: "We still haven't figured out how Myling is related to fire but it is known to have an affinity for fire. We have observed that it is calmer in environments with fire nearby." },
    { name: "thaye", evidences: [2, 3, 7], description: "A Thaye has been known to be much more aggressive and fast when they are young. <span class='weakness'>A Thaye will move much slower and be less aggressive if they are older.</span>", unique: "The Thaye is known as a ghost who can distort the concept of time. As a Thaye ages quickly, it is impossible to know their exactly age." },
    { name: "goryo", evidences: [1, 2, 5], description: "Goryo does not interact with ESG if someone is nearby. <span class='weakness'>No data.</span>", unique: "A Goryo doesn't interact with ESGs if someone is nearby. Since it's a very rare type of ghost, we don't have much information other than that." },
    { name: "raiju", evidences: [4, 5, 6], description: "Lonely targets are very good prety for Raijus. <span class='weakness'>Traveling in packs will make the Raiju more passive.</span>", unique: "A Raiju is a ghost known to draw strength from solitude. Being alone may mean that you are easier prey for it. Raijus interact less when prey are in a group." },
    { name: "demon", evidences: [3, 4, 6], description: "If it decides to kill someone, it will be very hard to stop it. <span class='weakness'>As long as you don't make it angry, the Demon usually won't hunt you.</span>", unique: "Demons are known as normally calm and collected ghosts. They have a lower prety drive than other types of ghosts but if you manage to anger a Demon, it will not stop until it kills you." },
    { name: "mare", evidences: [1, 3, 4], description: "Difficult to detect. <span class='weakness'>If there is someone nearby, it will not want to hunt.</span>", unique: "A Mare is a type of ghost that likes to talk, though it has been observed to be less active than other ghosts." },
    { name: "yokai", evidences: [1, 3, 7], description: "It will be very active between 6-8 and 10-12 o'clock. It will hunt at least once between 8-10 o'clock. <span class='weakness'>It will be calmer at hours outside the range stated in the strength section.</span>", unique: "It is known as a ghost that is extremely sensitive to the concept of time. It is very punctual. Time is everything for Yokai." },
    { name: "naamah", evidences: [3, 5, 6], description: "With its slyness, it can steal the tools on the ground as well as the ones you hold in your hand. <span class='weakness'>If the lights are on, it will turn them off before stealing the tools. If the tools are in the salt barrier, it won't be able to steam them.</span>", unique: "It is known to be a thief ghost. It has been observed that it behaves calmly to avoid attracting attention and prefers to stay in the dark. It is seen that it relocates the tools." },
    { name: "gul", evidences: [2, 4, 7], description: "The can get angry and hunt if you swear. <span class='weakness'>It will be calmer if you don't talk too much.</span>", unique: "The Gul is known as a ghost who listens to the conversations between people. The words you choose are important to it." },
    { name: "abaddon", evidences: [1, 4, 7], description: "Selects targets that cannot defend themselves. <span class='weakness'>Has a strong chance to ignore you during a hunt when holding a crucifix.</span>", unique: "The Abaddon is widely regarded as the most cunning type of ghost. They will not hunt their prey if they are defending themselves but will usually hunt the defenseless." },
    { name: "boogey", evidences: [1, 5, 7], description: "It will drain your sanity very quickly if you use EMF, ESG and spirit box in its room. <span class='weakness'>If there is a light that's turned off nearby, it will try to turn it on. Any light nearby Boogey won't break.</span>", unique: "It is one of the most dangerous ghosts to find. It does not want to be found so it has developed its own defense system. It has been observed that it draws power from items that create paranormal fields. It is thought Boogey does not like the lights to be off. If you dare to find it, you risk death." },
    { name: "guipo", evidences: [5, 6, 7], description: "It can trigger fake hunts to deceive you. Fake hunts will drain your sanity quickly. When it gets bored of playing games, it will try to kill you. <span class='weakness'>If it has decided to kill you, its speed will decrease to normal. It will move fast in their fake hunts. If he's playing games with you, you're safe.</span>", unique: "It is known as a ghost that loves to play games and can change its speed depending on the situation. It might want to play games with people. There is no danger when it's playing games but if it get bored, it means you are in trouble. It has been observed that Guipos play with their victims from 6 to 8 minutes before deciding to kill them." },
    { name: "yurei", evidences: [1, 5, 6], description: "You are more likely to be hunted when traveling in groups. <span class='weakness'>It may weaken itself if alone.</span>", unique: "The Yurei is a ghost that prefers feeding small amounts of energy off multiple people at once so that it can grow stronger without being noticed immediately." }
];

const maxNumOfEvidences = ghostInfos[0].evidences.length;
const ecn_enabled = "enabled";
const ecn_excluded = "excluded";
const ecn_tagged = "tagged";
const last_updated = "08/30/24"
const demonologist_server_version = "1.4.0"

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
    document.getElementById("update-wrapper").innerHTML = "Last updated: " + last_updated + "<br>Demonologist Server: v" + demonologist_server_version;

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
    console.log(elementTypeCache);

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
