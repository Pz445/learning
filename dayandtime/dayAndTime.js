
var dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];



$("#clicky").click(function() {
  var now = new Date();
  var dayIndex = now.getDay();
  var currentHour = now.getHours();
  var currentMinute = now.getMinutes();
  var dayName = dayArray[dayIndex];
  $("#dayName").text(dayName);
  $("#time").text(currentHour + ":" + currentMinute);
});
