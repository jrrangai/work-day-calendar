// the current day is displayed at the top of the calendar
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

var hoursOfOpperation = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
]
var currentHour = moment().format('H');

console.log(moment().format('H'));
// Do I create the task outside the busincessHours function or within
    // Do I create it and then the business hours function runs it? 
    // Should the button.on be inside the business hours function or a new one
// How do I load locally stored data
// Audit the tasks to show past, present, and future

// I am presented with time blocks for standard business hours
function businessHours() {
    for (i = 0; i < hoursOfOpperation.length; i++) {
        // Hours
        var timeRow = $('<div>').addClass('row time-block');
        var hour = $('<p>').addClass('hour col-lg-3').text(hoursOfOpperation[i]);
        var text = localStorage.getItem(hoursOfOpperation[i]);
        // Description (text)
        var taskDescription = $('<textarea>').text(text);
        // button
        var miltaryHour = i + 9;
        if (currentHour > miltaryHour) {
            taskDescription.addClass('description col-lg-7 past')
        } else if (currentHour < miltaryHour) {
            taskDescription.addClass('description col-lg-7 future')
        } else {
            taskDescription.addClass('description col-lg-7 present')
        };

        var button = $('<button>').addClass('saveBtn col-lg-2');

        timeRow.append(hour, taskDescription, button)
        $('#timeblock').append(timeRow)

        button.on("click", function (event) {
            event.preventDefault();
            var indexHour = $(this).siblings()[0];
            indexHour = $(indexHour).text();
            console.log(indexHour);
            var textDescription = $(this).siblings()[1];
            textDescription = $(textDescription).val();
            localStorage.setItem(indexHour, textDescription);
            // get items from local storage and put value line 22
        })
    }
}
// each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block, THEN I can enter an event

// the text for that event is saved in local storage
    // save tasks, 

// WHEN I refresh the page, THEN the saved events persist
    // load tasks

businessHours();
