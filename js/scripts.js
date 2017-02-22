



$(document).ready(function(){
  $("#formOne").submit(function(){
      var userInput = $("#userinput").val();
      var splitString = userInput.split("");
      var firstLetterVowel = splitString[0]
      var firstLetterConsonant = splitString[0]
      if (firstLetterVowel === "a" || firstLetterVowel === "e" || firstLetterVowel === "i" || firstLetterVowel === "o" || firstLetterVowel === "u"){
        splitString.push("ay");
      }
      else if (firstLetterConsonant === "b" || firstLetterConsonant === "c" || firstLetterConsonant === "d" || firstLetterConsonant === "f" || firstLetterConsonant === "g" || firstLetterConsonant === "h" || firstLetterConsonant === "j" || firstLetterConsonant === "k" || firstLetterConsonant === "l"){
        splitString.push(splitString[0]);
        splitString.splice(0, 1)
        splitString.push("ay");
        console.log(splitString);
      } else if (firstLetterConsonant === "m" || firstLetterConsonant === "n" || firstLetterConsonant === "p" || firstLetterConsonant === "q" || firstLetterConsonant === "r" || firstLetterConsonant === "s" || firstLetterConsonant === "t" || firstLetterConsonant === "v" || firstLetterConsonant === "w" || firstLetterConsonant === "x" || firstLetterConsonant === "y"){
        splitString.push(splitString[0]);
        splitString.splice(0, 1)
        splitString.push("ay");
        console.log(splitString);
      } else if (firstLetterConsonant === "z"){
        splitString.push(splitString[0]);
        splitString.splice(0, 1)
        splitString.push("ay");
        console.log(splitString);
      }else{

      }
      var join = splitString.join("");
      console.log(join);
    $("#result").text(join);
    $("#result").show();

    event.preventDefault();
  })
})

// "ay".push
