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

const exclude_options = new Set();

function initializeHandlers() {/*
    $('.roomselect').change(function() {
        if ($(this).val() != "blank") {
            console.log($(this).val());
        }

        if (!exclude_options.has($(this).val)) {
            console.log('adding');
            exclude_options.add($(this).val);
        }

        initializeSelects();
    });*/

    $('#reset').on('click', function() {
        $('.roomselect').val("blank");
    });
}

function initializeSelects(select) {
    var selects = document.getElementsByClassName('roomselect');
    
    $('.roomselect').children().remove();

    for (var i = 0, len = selects.length|0; i < len; i=i+1|0) {
        var optgroup = document.createElement('optgroup');

        select_info.forEach(sel => {
            if (!exclude_options.has(sel.name)) {
                var opt = document.createElement('option');
                opt.classList = 'opt';
                opt.value = sel.name;
                opt.innerHTML = sel.value;
                optgroup.appendChild(opt);
            }
        });

        selects[i].appendChild(optgroup);
    };
}

initializeHandlers();
initializeSelects();