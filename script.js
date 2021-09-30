console.log("hollow world")
var currentDay = $('#currentDay');
var btnNine = $('#nine-am');
var nameInputEla = $('#skill-name-a');
var nameInputElb = $('#skill-name-b');
var nameInputElc = $('#skill-name-c');
var dateInputEl = $('#datepicker');
// var skillsListEl = $('#skills-list');
var formEla = $('#skills-form-a');
var formElb = $('#skills-form-b');
var formElc = $('#skills-form-c');


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
    // console.log(dateInput);

    // printSkills(nameInput, dateInput);

    // resets form
    // nameInputEl.val('');
    // dateInputEl.val('');
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

formEla.on('submit', handleFormSubmita);
formElb.on('submit', handleFormSubmitb);
formElc.on('submit', handleFormSubmitc);


function time() {
    var ticker = moment().format('MM DD, YYYY [at] hh:mm:ss a')
    currentDay.text(ticker)
}

time();

function handleToDoSubmit(event) {
    event.preventDefault();
    var nineAmTodo = $('input[name="nine-am-input]').val();
    console.log(nineAmTodo);

}

btnNine.on('submit', handleToDoSubmit);