const select_info = [
    {name: "blank", value: ""},
    {name: "one", value: "1"},
    {name: "two", value: "2"},
    {name: "three", value: "3"},
    {name: "four", value: "4"},
    {name: "five", value: "5"},
    {name: "six", value: "6"},
    {name: "seven", value: "7"},
    {name: "eight", value: "8"},
    {name: "cave", value: "Cave"},
    {name: "storeroom", value: "Storeroom"}
];

const shrine_symbols = [
                        "ouroboros",
                        "skull",
                        "helmet",
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
        $('.roomselect').val("blank");

        //Only call the change for one roomselect and not all since we want to clear the disabled flag
        $('.roomselect').first().change();
    });

    $(document).ready(function() {
        console.log("document is ready");
        tableBody = $('#shrine_table');

        for (var i = 0; i < shrine_symbols.length; i += 2) {
            var markup = "<tr>";

            for (var c = i, max = c + 2; c < max; c++) {
                markup += "<td><img src=\"img/" + shrine_symbols[c] + ".png\" alt=\"" + shrine_symbols[c] + "\" width=100></img></td>";
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
                //console.log(selects.item(i).value);
            }
    
            var opts = document.getElementsByClassName('opt');
            //console.log(opts.length);
    
            for (var i = 0; i < opts.length; i++) {
                opts.item(i).disabled = exclude_options.has(opts.item(i).value);
            }
        });
    });
}

function initializeSelects() {
    var selects = document.getElementsByClassName('roomselect');
    //console.log(selects.item(0).value);
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
