function daysUntilChristmas () {
  let currentDate = new Date();
  let christmas = new Date("2018/12/25")
  let milliDiff = Math.abs(christmas - currentDate);
  let daysUntil = Math.floor(milliDiff/(1000*60*60*24));
  return daysUntil;
};

$("#clicky").click(function() {
  $("#answer").removeClass("hidden");
  $("#days").text(daysUntilChristmas());
});
