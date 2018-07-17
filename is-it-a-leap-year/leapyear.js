$("#clicky").click(function() {
  let year = $("#yearEntry").val();
  $("#text").css("color", "black");
  if (!isNaN(year) && year % 1 === 0 && year !== "") {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          $("#text").text(year + " is a leap year")
        } else {
          $("#text").text(year + " is not a leap year")
        }
      } else {
        $("#text").text(year + " is a leap year")
      }
    } else {
      $("#text").text(year + " is not a leap year")
    }
  } else {
    $("#text").text("Please enter a valid year");
    $("#text").css("color", "red");
  }
  $("#yearEntry").val = ' ';
})
