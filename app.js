$(document).ready(function() {

  $("#myText").keyup(function(event) {
    var text = $("#myText").val();
    $("#myButton").text("Donate $" + text);
  });

})