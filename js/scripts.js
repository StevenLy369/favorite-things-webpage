$(document).ready(function () {
  $("#faves").submit(function (event) {
    event.preventDefault();

    var faveArray = [($('input#faveOne').val()), ($('input#faveTwo').val()), ($('input#faveThree').val()), ($('input#faveFour').val()), ($('input#faveFive').val())]

    var topThree = [];

    topThree.push(faveArray[1], faveArray[0], faveArray[2]);



    $("#favesList").append('<li>' + topThree[0] + '</li>');
    $("#favesList").append('<li>' + topThree[1] + '</li>');
    $("#favesList").append('<li>' + topThree[2] + '</li>');



  });



});