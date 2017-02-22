$(document).ready(function(){
  $("#formOne").submit(function(){

    var userInput = $("#pigLatin").val();
    var pigLatin = function(text){
      $("#result").text(userInput);
    }
    pigLatin(userInput);









    $("#result").show();

    event.preventDefault();
  })
})
