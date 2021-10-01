console.log("hollow world")
var currentDay = $('#currentDay');
var btnNine = $('#nine-am');
var nameInputEla = $('#skill-name-a');
var nameInputElb = $('#skill-name-b');
var nameInputElc = $('#skill-name-c');
var nameInputEld = $('#skill-name-d');
var nameInputEle = $('#skill-name-e');
var nameInputElf = $('#skill-name-f');
var nameInputElg = $('#skill-name-g');
var nameInputElh = $('#skill-name-h');
var nameInputEli = $('#skill-name-i');
// var dateInputEl = $('#datepicker');
// var skillsListEl = $('#skills-list');
var formEla = $('#skills-form-a');
var formElb = $('#skills-form-b');
var formElc = $('#skills-form-c');
var formEld = $('#skills-form-d');
var formEle = $('#skills-form-e');
var formElf = $('#skills-form-f');
var formElg = $('#skills-form-g');
var formElh = $('#skills-form-h');
var formEli = $('#skills-form-i');


//Form submit actions
var handleFormSubmita = function (event) {
    event.preventDefault();


    var nameInputa = nameInputEla.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputa) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputa);
    localStorage.setItem('nameInputa', JSON.stringify(nameInputa));
};

var handleFormSubmitb = function (event) {
    event.preventDefault();


    var nameInputb = nameInputElb.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputb) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputb);
    localStorage.setItem('nameInputb', JSON.stringify(nameInputb));
};

var handleFormSubmitc = function (event) {
    event.preventDefault();


    var nameInputc = nameInputElc.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputc) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputc);
    localStorage.setItem('nameInputc', JSON.stringify(nameInputc));
};

var handleFormSubmitd = function (event) {
    event.preventDefault();


    var nameInputd = nameInputEld.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputd) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputd);
    localStorage.setItem('nameInputd', JSON.stringify(nameInputd));
};

var handleFormSubmite = function (event) {
    event.preventDefault();


    var nameInpute = nameInputEle.val();
    // var dateInput = dateInputEl.val();

    if (!nameInpute) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInpute);
    localStorage.setItem('nameInpute', JSON.stringify(nameInpute));
};

var handleFormSubmitf = function (event) {
    event.preventDefault();


    var nameInputf = nameInputElf.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputf) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputf);
    localStorage.setItem('nameInputf', JSON.stringify(nameInputf));
};

var handleFormSubmitg = function (event) {
    event.preventDefault();


    var nameInputg = nameInputElg.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputg) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputg);
    localStorage.setItem('nameInputg', JSON.stringify(nameInputg));
};

var handleFormSubmith = function (event) {
    event.preventDefault();


    var nameInputh = nameInputElh.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputh) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputh);
    localStorage.setItem('nameInputh', JSON.stringify(nameInputh));
};

var handleFormSubmiti = function (event) {
    event.preventDefault();


    var nameInputi = nameInputEli.val();
    // var dateInput = dateInputEl.val();

    if (!nameInputi) {
        console.log('You need to fill out the form!');
        alert("You need to fill out the form!")
        return;
    }
    console.log(nameInputi);
    localStorage.setItem('nameInputi', JSON.stringify(nameInputi));
};

formEla.on('submit', handleFormSubmita);
formElb.on('submit', handleFormSubmitb);
formElc.on('submit', handleFormSubmitc);
formEld.on('submit', handleFormSubmitd);
formEle.on('submit', handleFormSubmite);
formElf.on('submit', handleFormSubmitf);
formElg.on('submit', handleFormSubmitg);
formElh.on('submit', handleFormSubmith);
formEli.on('submit', handleFormSubmiti);

//track time for jumbotron
function time() {
    var ticker = moment().format('MM DD, YYYY [at] hh:mm:ss a')
    currentDay.text(ticker)
}

time();


btnNine.on('submit', handleToDoSubmit);

//variables to iterate thru IDs to target items
var todoIds = ["skill-name-a", "skill-name-b", "skill-name-c", "skill-name-d", "skill-name-e", "skill-name-f", "skill-name-g", "skill-name-h", "skill-name-i",]
var todoIdsCol = ["#skill-name-a", "#skill-name-b", "#skill-name-c", "#skill-name-d", "#skill-name-e", "#skill-name-f", "#skill-name-g", "#skill-name-h", "#skill-name-i",]
var localStoreId = ["nameInputa", "nameInputb", "nameInputc", "nameInputd", "nameInpute", "nameInputf", "nameInputg", "nameInputh", "nameInputi",]


var timeSlots = [09, 10, 11, 12, 13, 14, 15, 16, 17];
// Testing array for color coding based on current time
// var timeSlots = [12, 13, 14, 15, 16, 17, 18, 19, 20];

//Change input field colors based on current time
function colorCode() {
    for (let i = 0; i < todoIdsCol.length; i++) {
        console.log(todoIdsCol.length);
        console.log(todoIdsCol[i]);
        skillName = todoIdsCol[i];
        console.log(skillName + "this should be the skill-name-a or something")
        timeSlot = timeSlots[i]
        console.log(timeSlot + " these are the timeslots iterating")
        var currentHour = moment().format('HH')
        console.log(currentHour + " this is the current hour")
        if (currentHour > timeSlot) {
            $(skillName).css({ "background-color": "lightblue", "color": "white" });
            console.log("lightblue")
        } else if (currentHour == timeSlot) {
            $(skillName).css({ "background-color": "red" });
        } else {
            $(skillName).css({ "background-color": "green" });}
        }
}
colorCode();


//Persist data entered into Schedule
function renderLastUpdate() {
    // Use JSON.parse() to convert text to JavaScript object
    for (let i = 0; i < todoIds.length; i++) {
        console.log(todoIds.length);
        console.log(todoIds[i]);
        currentTodo = todoIds[i];
        var lastUpdate = localStorage.getItem(localStoreId[i]);
        console.log("currentTodo" + currentTodo);
        console.log(lastUpdate + "====");
        if (lastUpdate !== null) {
            document.getElementById(currentTodo).placeholder = lastUpdate;
        } else {
            return;
        }
    };
};


function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastUpdate();
}
init();


