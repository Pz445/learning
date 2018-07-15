$("#clicky").click(function() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  $("#dateName").text(month + "/" + day + "/" + year);
});
