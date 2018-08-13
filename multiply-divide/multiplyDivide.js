$("#multiply").click(function () {
  var num1 = Number($("#num1").val());
  var num2 = Number($("#num2").val());
  var answer = num1 * num2;
  $("#answer").removeClass("hidden");
  $("#answerText").removeClass("hidden").text("Answer:  " + answer);
});

$("#divide").click(function () {
  var num1 = Number($("#num1").val());
  var num2 = Number($("#num2").val());
  var answer = num1 / num2;
  if (num2 === 0) {
    $("#answer").removeClass("hidden");
    $("#answerText").removeClass("hidden").text("CANNOT DIVIDE BY ZERO!");
  } else {
    $("#answer").removeClass("hidden");
    $("#answerText").removeClass("hidden").text("Answer:  " + answer);
  }
});
