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

// the current day is displayed at the top of the calendar

// I am presented with time blocks for standard business hours
function businessHours() {
    for (i = 0; i < hoursOfOpperation.length; i++) {
        var timeRow = $('<div>').addClass('row time-block')
        var hour = $('<p>').addClass('hour').text(hoursOfOpperation[i])
        timeRow.append(hour)
        $('#timeblock').append(timeRow)
    }
}
// each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block, THEN I can enter an event

// the text for that event is saved in local storage
    // save tasks, 

// WHEN I refresh the page, THEN the saved events persist
    // load tasks

businessHours()