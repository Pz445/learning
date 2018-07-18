var years = [];
function findSundays () {
  for (var i = 2014; i <=2050; i++) {
    let newYearsDay = new Date(i, 0, 1);
    if (newYearsDay.getDay() === 0) {
      years.push(newYearsDay.getFullYear());
    }
  }
};

var count = 0;

$("#clicky").click(function () {
  findSundays();
  if (count === 1) {
    years = [];
    $("ul").html("");
    count = 0;
  } else if (count === 0) {
    for (var i = 0; i < years.length; i++) {
      let newString = "<li>" + years[i] + "</li>";
      $("ul").append(newString);
    };
    count++
  };
});
