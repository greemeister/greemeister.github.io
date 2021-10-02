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
                        "bull",
                        "eye",
                        "sword",
                        "cross",
                        "flame"
                       ];

const exclude_options = new Set();

function initializeHandlers() {
    $('#reset').on('click', function() {
        $('.shrine_img').removeClass('burned');
        $('.roomselect').val("blank");

        //Only call the change for one roomselect and not all since we want to clear the disabled flag
        $('.roomselect').first().change();
    });

    $(document).ready(function() {
        tableBody = $('#shrine_table');

        for (var i = 0; i < shrine_symbols.length; i += 2) {
            var markup = "<tr>";

            for (var c = i, max = c + 2; c < max; c++) {
                markup += "<td><img class=\"cursor-pointer shrine_img\" src=\"img/" + shrine_symbols[c] + ".png\" alt=\"" + shrine_symbols[c] + "\" width=100></img></td>";
                markup += "<td>";
                markup += "<select name =\"" + shrine_symbols[c] + "_room\" id=\"" + shrine_symbols[c] + "_room\" class=\"roomselect\"></select>";
                markup += "</td>";
            }

            markup += "</tr>";
            tableBody.append(markup);
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

        $('.shrine_img').on('click', function() {
            $(this).toggleClass('burned');
        });

        $('#firstfloormap').on('click', function() {
            $('#full-image').attr("src", "img/TheInnFirstFloor.png");
            $('#image-viewer').show();
        });

        $('#secondfloormap').on('click', function() {
            $('#full-image').attr("src", "img/TheInnSecondFloor.png");
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
        var optgroup = document.createElement('optgroup');

        select_info.forEach(sel => {
                var opt = document.createElement('option');
                opt.classList = 'opt';
                opt.value = sel.name;
                opt.innerHTML = sel.value;
                optgroup.appendChild(opt);
        });

        selects[i].appendChild(optgroup);
    };
}

initializeHandlers();
