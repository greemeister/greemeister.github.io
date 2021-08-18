const emfs = [
    "--",
    "EMF Level 5",
    "EMF Level 3/4"
];

const entity_scans = [
    "--",
    "1N_L120",
    "9P_350",
    "DX_E900",
    "9P_NONE"
];

const temps = [
    "--",
    "Temp: Zero",
    "Temp: Negative"
];

const written = [
    "--",
    "Book: Drawing",
    "Book: Writing",
    "Surface: Writing",
    "Surface: Drawing"
];

const audios = [
    "--",
    "Spirit-box: EVP",
    "Spirit-box: Radio",
    "Ghostly Voice On-Site"
];

const ghostCategories = [
    {name: "None",
     description: ""},
    {name: "Poltergeist", 
     description: "The Poltergeist is extremely fond of playing and handling a lot objects in its vicinity. Be careful, it doesn't like the presence of other people, especially if they move objects around.",
     emf_evidence: [{ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:0}, {ev:2, ex:2}, {ev:2, ex:0}, {ev:3, ex:2}, {ev:3, ex:0}, {ev:4, ex:3}, {ev:4, ex:0}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:0}, {ev:2, ex:5}, {ev:2, ex:0}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:6}, {ev:3, ex:6}, {ev:3, ex:0}, {ev:4, ex:9}, {ev:4, ex:0}],
     audio_evidence: [{ev:1, ex:8}, {ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:7}, {ev:3, ex:0}, {ev:3, ex:8}]
    },
    {name: "Shadow",
     description: "This category of entity loves to hide in the shadows. It is not particularly afraid of light but will try to turn off surrounding lights if possible. Due to the density of its form, it is rather dark or even black when it appears.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:2}, {ev:2, ex:2}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:2}, {ev:2, ex:2}, {ev:3, ex:2}, {ev:4, ex:2}, {ev:4, ex:3}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:2}, {ev:2, ex:5}, {ev:2, ex:2}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:2}, {ev:2, ex:6}, {ev:2, ex:2}, {ev:3, ex:6}, {ev:3, ex:2}, {ev:4, ex:9}, {ev:4, ex:2}],
     audio_evidence: [{ev:1, ex:8}, {ex:1, ex:2}, {ev:2, ex:7}, {ev:2, ex:2}, {ev:3, ex:8}, {ev:3, ex:2}]
    }, 
    {name: "Revenant",
     description: "The Revenant is an entity that clings to the physical world. It is generally unable to stand up due to a lack of occult energy and can always be seen crawling to grab you and steal your life force.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:7}, {ev:2, ex:1}, {ev:2, ex:7}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:7}, {ev:2, ex:2}, {ev:2, ex:7}, {ev:3, ex:2}, {ev:3, ex:7}, {ev:4, ex:3}, {ev:4, ex:7}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:7}, {ev:2, ex:5}, {ev:2, ex:7}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:7}, {ev:2, ex:6}, {ev:2, ex:7}, {ev:3, ex:6}, {ev:3, ex:7}, {ev:4, ex:9}, {ev:4, ex:7}],
     audio_evidence: [{ev:1, ex:8}, {ev:1, ex:7}, {ev:2, ex:7}, {ev:3, ex:8}, {ev:3, ex:7}]
    },
    {name: "Demon",
     description: "This demonic and aggressive entity will watch you around every corner, waiting for the best time to launch its attack. The demon can laugh at your impending doom and its laughter is the best way to identify it.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:8}, {ev:2, ex:1}, {ev:2, ex:8}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:8}, {ev:2, ex:2}, {ev:2, ex:8}, {ev:3, ex:2}, {ev:3, ex:8}, {ev:4, ex:3}, {ev:4, ex:8}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:8}, {ev:2, ex:5}, {ev:2, ex:8}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:8}, {ev:2, ex:6}, {ev:2, ex:8}, {ev:3, ex:6}, {ev:3, ex:8}, {ev:4, ex:9}, {ev:4, ex:8}],
     audio_evidence: [{ev:1, ex:8}, {ev:2, ex:8}, {ev:2, ex:7}, {ev:3, ex:8}]
    }, 
    {name: "Child",
     description: "This category of entity is easily identifiable by its childlike appearance. It is formed from the soul of a child who escaped limbo after losing their life in a brutal and devastating way.",
     emf_evidence: [{ev:1, ex:0}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:2, ex:2}, {ev:3, ex:2}, {ev:4, ex:3}],
     temp_evidence: [{ev:1, ex:4}, {ev:2, ex:5}],
     written_evidence: [{ev:1, ex:9}, {ev:2, ex:6}, {ev:3, ex:6}, {ev:4, ex:9}],
     audio_evidence: [{ev:1, ex:8}, {ev:2, ex:7}, {ev:3, ex:8}]
    }
];

// Exorcism types
const exorcisms = [
    {name: "ENTITY_NEUTRINO_GUN", description: "Shoot the entity with Neutrino-Gun."}, // 0
    {name: "ENTITY_SALT", description: "Fire Salt Crystals with a Salt Shotfgun at the entity. You can even throw salt directly at the entity or place it on the ground to be walked over like a trap."}, // 1
    {name: "ENTITY_FLASH", description: "Flash the entity with an Instant Camera at close range."}, // 2
    {name: "ENTITY_TIGER_EYE", description: "Bring a Tiger Eye stone into contact with the entity."}, // 3
    {name: "ENTITY_INCENSE_STICK", description: "Bring a burning Incense Stick into contact with the entity."}, // 4
    {name: "ACTIVATE_INCENSE_STICK", description: "Burn an Incense Stick in the Dread Room. The Dread Room will contain several ghost orbs that are only visible to cameras."}, // 5
    {name: "NEUTRALIZE_SUMMON_PENTACLE", description: "Destroy the Summoning Pentagram with a bottle of Holy Water. To do this, locate it with a camera then make it visible with the flash of an Instant Camera."}, // 6
    {name: "OBJECT_CURSED_HAUNT", description: "Destroy the power of the corrupt object with the Neutrino-Gun. A corrupt object will emit an extremely powerful OCC value (measurable with the MEL). Note: this is different from a standard cursed object."}, // 7
    {name: "RECITE_EXORCISM", description: "Recite an Exorcism Book within the haunted location."}, // 8
    {name: "THROW_HOLY_WATER", description: "Throw Holy Water on the entity."} // 9
];

var currentEMF = 0;
var currentEntityScan = 0;
var currentTemp = 0;
var currentWriting = 0;
var currentAudio = 0;
var currentCategory = 0;

var exorcismSteps = [];

var CookieManager = Cookies.noConflict()

function cleanupAllCookies() {
    exorcisms.forEach(function(exorcism) {
        CookieManager.remove(exorcism.name);
    });
}

function initializeGhostpedia() {
    currentEMF = 0;
    currentEntityScan = 0;
    currentTemp = 0;
    currentWriting = 0;
    currentAudio = 0;
    currentCategory = 0;

    var element = document.getElementById("evidence-emf-selection");
    element.innerHTML = emfs[currentEMF];

    element = document.getElementById("evidence-entity-scan-selection");
    element.innerHTML = entity_scans[currentEntityScan];

    element = document.getElementById("evidence-temp-selection");
    element.innerHTML = temps[currentTemp];

    element = document.getElementById("evidence-written-selection");
    element.innerHTML = written[currentWriting];

    element = document.getElementById("evidence-audio-selection");
    element.innerHTML = audios[currentAudio];

    element = document.getElementById("category-selection");
    element.innerHTML = ghostCategories[currentCategory].name;
    element = document.getElementById("category-description");
    element.innerHTML = ghostCategories[currentCategory].description;

    document.getElementById("evidence-emf-left-selector").onclick = onClickSelector;
    document.getElementById("evidence-emf-right-selector").onclick = onClickSelector;

    document.getElementById("evidence-entity-scan-left-selector").onclick = onClickSelector;
    document.getElementById("evidence-entity-scan-right-selector").onclick = onClickSelector;

    document.getElementById("evidence-temp-left-selector").onclick = onClickSelector;
    document.getElementById("evidence-temp-right-selector").onclick = onClickSelector;

    document.getElementById("evidence-written-left-selector").onclick = onClickSelector;
    document.getElementById("evidence-written-right-selector").onclick = onClickSelector;

    document.getElementById("evidence-audio-left-selector").onclick = onClickSelector;
    document.getElementById("evidence-audio-right-selector").onclick = onClickSelector;

    document.getElementById("category-left-selector").onclick = onClickCategorySelector;
    document.getElementById("category-right-selector").onclick = onClickCategorySelector;

    document.getElementById("title").onclick = onClickClear;

    cleanupAllCookies();
}

function onClickCategorySelector(e, alt=undefined) {
    var name;

    if (alt == undefined) {
        name = e.srcElement.id;
    } else {
        name = alt;
    }

    if (name.includes("left")) {
        currentCategory = currentCategory - 1;
        if (currentCategory < 0) {
            currentCategory = ghostCategories.length - 1;
        }
    } else if (name.includes("right")){
        currentCategory = currentCategory + 1;

        if (currentCategory >= ghostCategories.length) {
            currentCategory = 0;
        }
    }

    document.getElementById("category-selection").innerHTML = ghostCategories[currentCategory].name;
    document.getElementById("category-description").innerHTML = ghostCategories[currentCategory].description;

    refreshExorcisms();
}

function onClickClear(e) {
    currentCategory = currentEMF = currentTemp = currentAudio = currentWriting = currentEntityScan = currentGhost = 0;
    
    onClickSelector("", "evidence-emf-selection");
    onClickSelector("", "evidence-temp-selection");
    onClickSelector("", "evidence-audio-selection");
    onClickSelector("", "evidence-written-selection");
    onClickSelector("", "evidence-entity-scan-selection");
    onClickCategorySelector("", "");
    cleanupAllCookies();
}

function onClickSelector(e, alt=undefined) {
    var name;

    if (alt == undefined) {
        name = e.srcElement.id;
    } else {
        name = alt;
    }

    if (name.includes("emf")) {
        if (name.includes("left")) {
            currentEMF = currentEMF - 1;
            if (currentEMF < 0) {
                currentEMF = emfs.length - 1;
            }
        } else if (name.includes("right")) {
            currentEMF = currentEMF + 1;

            if (currentEMF >= emfs.length) {
                currentEMF = 0;
            }
        }

        document.getElementById("evidence-emf-selection").innerHTML = emfs[currentEMF];
    } else if (name.includes("entity-scan")) {
        if (name.includes("left")) {
            currentEntityScan = currentEntityScan - 1;
            if (currentEntityScan < 0) {
                currentEntityScan = entity_scans.length - 1;
            }
        } else if (name.includes("right")) {
            currentEntityScan = currentEntityScan + 1;

            if (currentEntityScan >= entity_scans.length) {
                currentEntityScan = 0;
            }
        }

        document.getElementById("evidence-entity-scan-selection").innerHTML = entity_scans[currentEntityScan];
    } else if (name.includes("temp")) {
        if (name.includes("left")) {
            currentTemp = currentTemp - 1;
            if (currentTemp < 0) {
                currentTemp = temps.length - 1;
            }
        } else if (name.includes("right")) {
            currentTemp = currentTemp + 1;

            if (currentTemp >= temps.length) {
                currentTemp = 0;
            }
        }

        document.getElementById("evidence-temp-selection").innerHTML = temps[currentTemp];
    } else if (name.includes("written")) {
        if (name.includes("left")) {
            currentWriting = currentWriting - 1;
            if (currentWriting < 0) {
                currentWriting = written.length - 1;
            }
        } else if (name.includes("right")) {
            currentWriting = currentWriting + 1;

            if (currentWriting >= written.length) {
                currentWriting = 0;
            }
        }

        document.getElementById("evidence-written-selection").innerHTML = written[currentWriting];
    } else if (name.includes("audio")) {
        if (name.includes("left")) {
            currentAudio = currentAudio - 1;
            if (currentAudio < 0) {
                currentAudio = audios.length - 1;
            }
        } else if (name.includes("right")) {
            currentAudio = currentAudio + 1;

            if (currentAudio >= audios.length) {
                currentAudio = 0;
            }
        }

        document.getElementById("evidence-audio-selection").innerHTML = audios[currentAudio];
    }

    refreshExorcisms();
}

function refreshExorcisms() {
    var element = document.getElementById("possible-exorcism-steps");

    exorcismSteps = [];
    element.innerHTML = "";

    if (currentCategory != 0) {
        var currentGhost = ghostCategories[currentCategory];

        for (let i = 0; i < currentGhost.emf_evidence.length; i++) {
            if ((currentEMF == currentGhost.emf_evidence[i].ev) && (exorcismSteps.indexOf(currentGhost.emf_evidence[i].ex) == -1)) {
                exorcismSteps.push(currentGhost.emf_evidence[i].ex);
            }
        }

        for (let i = 0; i < currentGhost.entity_evidence.length; i++) {
            if ((currentEntityScan == currentGhost.entity_evidence[i].ev) && (exorcismSteps.indexOf(currentGhost.entity_evidence[i].ex) == -1)) {
                exorcismSteps.push(currentGhost.entity_evidence[i].ex);
            }
        }

        for (let i = 0; i < currentGhost.temp_evidence.length; i++) {
            if ((currentTemp == currentGhost.temp_evidence[i].ev) && (exorcismSteps.indexOf(currentGhost.temp_evidence[i].ex) == -1)) {
                exorcismSteps.push(currentGhost.temp_evidence[i].ex);
            }
        }

        for (let i = 0; i < currentGhost.written_evidence.length; i++) {
            if ((currentWriting == currentGhost.written_evidence[i].ev) && (exorcismSteps.indexOf(currentGhost.written_evidence[i].ex) == -1)) {
                exorcismSteps.push(currentGhost.written_evidence[i].ex);
            }
        }

        for (let i = 0; i < currentGhost.audio_evidence.length; i++) {
            if ((currentAudio == currentGhost.audio_evidence[i].ev) && (exorcismSteps.indexOf(currentGhost.audio_evidence[i].ex) == -1)) {
                exorcismSteps.push(currentGhost.audio_evidence[i].ex);
            }
        }

        for (let i = 0; i < exorcismSteps.length; i++) {
            //element.innerHTML += "<li>" + exorcisms[exorcismSteps[i]].description + "</li>";
            
            element.innerHTML += "<input type=\"checkbox\" class=\"large\" id=\"" + exorcisms[exorcismSteps[i]].name + "\" name=\"" + exorcisms[exorcismSteps[i]].name + "\" value=\"\">";
            element.innerHTML += "<label for=\"" + exorcisms[exorcismSteps[i]].name + "\" class=\"strikethrough\">" + exorcisms[exorcismSteps[i]].description + "</label><br>";
        }

        var checkboxes = document.querySelectorAll("input[type=checkbox]");

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                if (checkbox.checked)
                    CookieManager.set(checkbox.name, '1');
                else
                    CookieManager.remove(checkbox.name);
            })

            var cookie = CookieManager.get(checkbox.name);

            if (cookie != undefined)
                checkbox.checked = true;
        });
    }
}