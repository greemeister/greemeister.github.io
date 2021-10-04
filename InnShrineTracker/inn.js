const select_info = [
    {name: "blank", value: ""},
    {name: "backyard", value: "Backyard"},
    {name: "bathroom", value: "Bathroom"},
    {name: "cave", value: "Cave"},
    {name: "dining", value: "Dining Room"},
    {name: "laundry", value: "Laundry"},
    {name: "kitchen", value: "Kitchen"},
    {name: "onsen", value: "Onsen"},
    {name: "reading", value: "Reading Room"},
    {name: "rec", value: "Recreation Room"},
    {name: "one", value: "Room #1"},
    {name: "two", value: "Room #2"},
    {name: "three", value: "Room #3"},
    {name: "four", value: "Room #4"},
    {name: "five", value: "Room #5"},
    {name: "six", value: "Room #6"},
    {name: "seven", value: "Room #7"},
    {name: "eight", value: "Room #8"},
    {name: "storage", value: "Storage (Upstairs)"}
];

const shrine_symbols = [
                        "ouroboros",
                        "skull",
                        "pyramid",
                        "pentagram",
                        "hourglass",
                        "goat",
                        "eye",
                        "dagger",
                        "cross",
                        "flame"
];

const maps = [
              "TheInnFirstFloor",
              "TheInnSecondFloor"
];

const exclude_options = new Set();
var cachedImages = [];

function initializeHandlers() {
    $('#reset').on('click', function() {
        $('.flip-card-inner').removeClass('burned');
        $('.roomselect').val("blank");

        //Only call the change for one roomselect and not all since we want to clear the disabled flag
        $('.roomselect').first().change();
    });

    $(document).ready(function() {
        for (var i = 0; i < shrine_symbols.length; i++) {
            cachedImages[shrine_symbols[i]] = new Image();
            cachedImages[shrine_symbols[i]].src = 'img/' + shrine_symbols[i] + '.png';
        }
        
        for (var i = 0; i < maps.length; i++) {
            cachedImages[maps[i]] = new Image();
            cachedImages[maps[i]].src = 'img/' + maps[i] + '.png';
        }

        const step = 5;
        var row = 1;

        containerBody = $('#container');

        for (var i = 0; i < shrine_symbols.length; i += step) {
            var markup = "<div id=\"container__row_" + row + "\" class=\"container__row\">";

            for (var c = i, max = c + step; c < max; c++) {
                markup += "<div id=\"container__row__col_" + ((c % step) + 1) + "\" class=\"container__column\">";
                markup += "<ul class=\"container__column__symbol\">";
                markup += "<li>";
                markup += "<div class=\"flip-card\">";
                markup += "<div class=\"flip-card-inner\">";
                markup += "<div class=\"flip-card-front\">";
                markup += "<img class=\"shrine-img\" src=" + cachedImages[shrine_symbols[c]].src + " alt=\"" + shrine_symbols[c] + "\">";
                markup += "</div>"
                markup += "<div class=\"flip-card-back\">";
                markup += "<img class=\"shrine-img\" src=" + cachedImages[shrine_symbols[c]].src + " alt=\"" + shrine_symbols[c] + "\">";
                markup += "</div>";
                markup += "</div></div>";
                markup += "</li>";
                markup += "<li>";
                markup += "<div class=\"box\">";
                markup += "<select name =\"" + shrine_symbols[c] + "_room\" id=\"" + shrine_symbols[c] + "_room\" class=\"roomselect\"></select>";
                markup += "</div>";
                markup += "</li>";
                markup += "</ul>";
                markup += "</div>";
            }

            markup += "</div>";
            containerBody.append(markup);
            row++;
        }

        initializeSelects();

        $('.roomselect').change(function() {
            exclude_options.clear();
    
            var selects = document.getElementsByClassName('roomselect');
    
            for (var i = 0; i < selects.length; i++) {
                if (selects.item(i).value == "blank")
                    continue;
    
                exclude_options.add(selects.item(i).value);
            }
    
            var opts = document.getElementsByClassName('opt');
    
            for (var i = 0; i < opts.length; i++) {
                opts.item(i).disabled = exclude_options.has(opts.item(i).value);
            }
        });

        $('.flip-card-inner').on('click', function() {
            $(this).toggleClass('burned');
        });

        $('#firstfloormap').on('click', function() {
            $('#full-image').attr("src", cachedImages[maps[0]].src);
            $('#image-viewer').show();
        });

        $('#secondfloormap').on('click', function() {
            $('#full-image').attr("src", cachedImages[maps[1]].src);
            $('#image-viewer').show();
        });

        $("#image-viewer .close").on('click', function() {
            if ( $('#image-viewer').is(":visible") ) {
                $('#image-viewer').hide();
            }
        });

        $(document).keyup(function(e) {
            if (e.key == "Escape") {
                $("#image-viewer .close").click();
            }
        });
    });
}

function initializeSelects() {
    var selects = document.getElementsByClassName('roomselect');

    $('.roomselect').children().remove();

    for (var i = 0, len = selects.length|0; i < len; i=i+1|0) {
        select_info.forEach(sel => {
                var opt = document.createElement('option');
                opt.classList = 'opt';
                opt.value = sel.name;
                opt.innerHTML = sel.value;
                selects[i].appendChild(opt);
        });
    };
}

initializeHandlers();
