// Using Heron's formula
$("#clicky").click(function() {
  let a = 5;
  let b = 6;
  let c = 7;
  let s = (a + b + c)/2;
  let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  $("#area").text(area);
});
