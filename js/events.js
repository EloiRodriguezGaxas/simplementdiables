$(document).ready(function () {
    console.log("Retrieve events");
    $.get("https://www.googleapis.com/calendar/v3/calendars/simplementd@gmail.com/events", 
        function(data){
           console.log(data);
        }
     );
})