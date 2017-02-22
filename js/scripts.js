



$(document).ready(function(){
  $("#formOne").submit(function(){

    var userInput = $("#userinput").val();
    // var transform = function(text){


      var splitString = userInput.split("");
      var firstLetter = splitString[0]
      if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u"){
        splitString.push("ay");
      }

      var join = splitString.join("");
      console.log(join);
    // }
    // transform(userInput);


    $("#result").text(join);
    $("#result").show();

    event.preventDefault();
  })
})

// "ay".push
