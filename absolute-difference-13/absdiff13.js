$("#clicky").click(function() {
  var num = Number($("#number").val());
  var answer = 0;
  console.log(num);
  if (num > 13) {
    answer = 2 * Math.abs(num - 13);
  } else {
    answer = 13 - num;
  }
  $("#answerDiv").removeClass("hidden");
  $("#answer").text(answer);
});
