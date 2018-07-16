let str = "w3resource";
let strArr = str.split("");
let count = 0;
// function rotate() {
//   var move = strArr.splice(strArr.length - 1, 1);
//   strArr.unshift(move[0]);
//   $("#start").text(strArr.join(''));
//   count++;
//   console.log(count);
//   if (count <= str.length) {
//     window.clearInterval(timer);
//   }
// }

$("#clicky").click(function() {
  let timer = setInterval(rotate, 1000);
  function rotate() {
    var move = strArr.splice(strArr.length - 1, 1);
    strArr.unshift(move[0]);
    $("#start").text(strArr.join(''));
    count++;
    if (count === str.length) {
      window.clearInterval(timer);
      count = 0;
    }
  }
});

// $("#clicky").click(function() {
//
// })
