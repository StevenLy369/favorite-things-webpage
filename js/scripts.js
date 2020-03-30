$(document).ready(function () {
  $("#faves").submit(function (event) {
    event.preventDefault();

    var faveArray = [($('input#faveOne').val()), ($('input#faveTwo').val()), ($('input#faveThree').val()), ($('input#faveFour').val()), ($('input#faveFive').val())]

    alert(faveArray);

  });



});