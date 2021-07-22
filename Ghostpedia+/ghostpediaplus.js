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
    "Zero",
    "Negative"
];

const written = [
    "--",
    "Symbol/picture writing",
    "Textual writing",
    "Wall writing",
    "Wall drawing"
];

const audios = [
    "--",
    "Spirit box EVP",
    "Spirit box radio",
    "Voice in the house"
];

const ghostCategories = [
    {name: "None",
     description: ""},
    {name: "Poltergeist", 
     description: "The Poltergeist is extremely fond of playing and handling a lot objects in its vicinity. But be careful, it doesn't like the presence of other people, especially if they manipulate objects.",
     emf_evidence: [{ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:0}, {ev:2, ex:2}, {ev:2, ex:0}, {ev:3, ex:3}, {ev:3, ex:0}, {ev:4, ex:3}, {ev:4, ex:0}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:0}, {ev:2, ex:5}, {ev:2, ex:0}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:6}, {ev:3, ex:6}, {ev:3, ex:0}, {ev:4, ex:9}, {ev:4, ex:0}],
     audio_evidence: [{ev:1, ex:8}, {ev:1, ex:0}, {ev:2, ex:0}, {ev:2, ex:7}, {ev:3, ex:0}, {ev:3, ex:8}]
    },
    {name: "Shadow",
     description: "This category of entity loves to hide in the shadow. It is not particularly afraid of light but will try to extiguish surrounding lights if possible. By its consistency, it is rather dark or black when it appears.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:2}, {ev:2, ex:2}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:2}, {ev:2, ex:2}, {ev:3, ex:2}, {ev:4, ex:2}, {ev:4, ex:3}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:2}, {ev:2, ex:4}, {ev:2, ex:2}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:2}, {ev:2, ex:6}, {ev:2, ex:2}, {ev:3, ex:6}, {ev:3, ex:2}, {ev:4, ex:9}, {ev:4, ex:2}],
     audio_evidence: [{ev:1, ex:8}, {ex:1, ex:2}, {ev:2, ex:7}, {ev:2, ex:2}, {ev:3, ex:8}, {ev:3, ex:2}]
    }, 
    {name: "Revenant",
     description: "The Revenant is an entity that clings to the physical world. It has the particularity of not being able to stand up due to a lack of occult energy. It will crawl to grab you and steal your vital essence.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:7}, {ev:2, ex:1}, {ev:2, ex:7}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:7}, {ev:2, ex:2}, {ev:2, ex:7}, {ev:3, ex:2}, {ev:3, ex:7}, {ev:4, ex:3}, {ev:4, ex:7}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:7}, {ev:2, ex:5}, {ev:2, ex:7}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:7}, {ev:2, ex:6}, {ev:2, ex:7}, {ev:3, ex:6}, {ev:3, ex:7}, {ev:4, ex:9}, {ev:4, ex:7}],
     audio_evidence: [{ev:1, ex:8}, {ev:1, ex:7}, {ev:2, ex:8}, {ev:3, ex:8}, {ev:3, ex:7}]
    },
    {name: "Daemon",
     description: "This demonic and aggressive entity will watch you around every corner, waiting for the best time to pounce on you. The demon can laugh at your impending death and its laughter is the best way to identify it.",
     emf_evidence: [{ev:1, ex:0}, {ev:1, ex:8}, {ev:2, ex:1}, {ev:2, ex:8}],
     entity_evidence: [{ev:1, ex:3}, {ev:1, ex:8}, {ev:2, ex:2}, {ev:2, ex:8}, {ev:3, ex:2}, {ev:3, ex:8}, {ev:4, ex:3}, {ev:4, ex:8}],
     temp_evidence: [{ev:1, ex:4}, {ev:1, ex:8}, {ev:2, ex:5}, {ev:2, ex:8}],
     written_evidence: [{ev:1, ex:9}, {ev:1, ex:8}, {ev:2, ex:6}, {ev:2, ex:8}, {ev:3, ex:6}, {ev:3, ex:8}, {ev:4, ex:9}, {ev:4, ex:8}],
     audio_evidence: [{ev:1, ex:8}, {ev:2, ex:8}, {ev:2, ex:7}, {ev:3, ex:8}]
    }, 
    {name: "Child",
     description: "This category of entity is easily identifiable by its childlike appearance. It is formed from the soul of a child who escaped limbo after losing their life in a monstrous and mysterious way.",
     emf_evidence: [{ev:1, ex:0}, {ev:2, ex:1}],
     entity_evidence: [{ev:1, ex:3}, {ev:2, ex:2}, {ev:3, ex:2}, {ev:4, ex:3}],
     temp_evidence: [{ev:1, ex:4}, {ev:2, ex:5}],
     written_evidence: [{ev:1, ex:9}, {ev:2, ex:6}, {ev:3, ex:6}, {ev:3, ex:9}],
     audio_evidence: [{ev:1, ex:8}, {ev:2, ex:7}, {ev:3, ex:8}]
    }
];

const exorcisms = [
    {name: "ENTITY_NEUTRINO_GUN", description: "Shoot the entity with neutrino-gun."}, // 0
    {name: "ENTITY_SALT", description: "Use a salt crystal with the salt shotgun or by directly throwing it. You can throw the crystal directly at the entity or put it on the ground so that it can walk on it."}, // 1
    {name: "ENTITY_FLASH", description: "Do a flash close to the entity with the instant camera."}, // 2
    {name: "ENTITY_TIGER_EYE", description: "Bring the entity close to a tiger-eye stone."}, // 3
    {name: "ENTITY_INCENSE_STICK", description: "Use an incense stick close to the entity."}, // 4
    {name: "ACTIVATE_INCENSE_STICK", description: "Activate an incense stick in the entity haunting room until it finishes. This room contains many orbs visible by camera."}, // 5
    {name: "NEUTRALIZE_SUMMON_PENTACLE", description: "Neutralize the summoning pentacle with a bottle of holy water. To do this, find it with a camera then make it visible with the flash of an instant camera."}, // 6
    {name: "OBJECT_CURSED_HAUNT", description: "Destroy the haunt of a cursed object with the neutrino-gun, the latter emits a powerful OCC value measurable with the MEL."}, // 7
    {name: "RECITE_EXORCISM", description: "Recite the exorcism of the exorcism book without interruption several times."}, // 8
    {name: "THROW_HOLY_WATER", description: "Throw the holy water on the entity."} // 9
];

var currentEMF = 0;
var currentEntityScan = 0;
var currentTemp = 0;
var currentWriting = 0;
var currentAudio = 0;
var currentCategory = 0;

var exorcismSteps = [];

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
            element.innerHTML += "<li>" + exorcisms[exorcismSteps[i]].description + "</li>";
            /*
            element.innerHTML += "<input type=\"checkbox\" class=\"large\" id=\"step" + i + "\" name=\"step" + i + "\" value=\"\">";
            element.innerHTML += "<label for=\"step" + i + "\">" + exorcisms[exorcismSteps[i]].description + "</label><br>";
            */
        }
    }
}