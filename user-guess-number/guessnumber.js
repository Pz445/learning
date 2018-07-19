'use strict';

$("#clicky").click(function() {
  let guess = $("input").val();
  let num = Math.floor((Math.random() * 10) + 1);
  let str1 = `
    <h3>Sorry, you guessed incorrectly</h3>
    <h3>You guessed ${guess}</h3>
    <h3>The random number was ${num}</h3><hr>
  `;
  let str2 = `<h3>Congratulations! You guessed correctly!</h3>
    <h3>The number was ${guess}</h3><hr>`;
  if (guess == num) {
    $("form").after(str2);
  } else {
    $("form").after(str1);
  }
});
