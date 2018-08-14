$("#clicky").click(function() {
  var format = $("option:selected").val();
  var temp = Number($("#temp").val());
  if (format === "fahrenheit") {
    var answer = (temp - 32) * (5/9);
    $("#answer").removeClass("hidden").text(temp + " Fahrenheit = " + answer + " Celsius");
  } else {
    var answer = (temp * (9/5)) + 32;
    $("#answer").removeClass("hidden").text(temp + " Celsius = " + answer + " Fahrenheit");
  }
})
