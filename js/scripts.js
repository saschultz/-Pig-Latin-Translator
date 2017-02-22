// ORIGINAL PROGRAM
// $(document).ready(function(){
//   $("#formOne").submit(function(){
//       var userInput = $("#userinput").val();
//       var splitString = userInput.split("");
//       var firstLetterVowel = splitString[0]
//       var firstLetterConsonant = splitString[0]
//       if (firstLetterVowel === "a" || firstLetterVowel === "e" || firstLetterVowel === "i" || firstLetterVowel === "o" || firstLetterVowel === "u"){
//         splitString.push("ay");
//       }
//       else if (firstLetterConsonant === "b" || firstLetterConsonant === "c" || firstLetterConsonant === "d" || firstLetterConsonant === "f" || firstLetterConsonant === "g" || firstLetterConsonant === "h" || firstLetterConsonant === "j" || firstLetterConsonant === "k" || firstLetterConsonant === "l"){
//         splitString.push(splitString[0]);
//         splitString.splice(0, 1)
//         splitString.push("ay");
//         console.log(splitString);
//       } else if (firstLetterConsonant === "m" || firstLetterConsonant === "n" || firstLetterConsonant === "p" || firstLetterConsonant === "q" || firstLetterConsonant === "r" || firstLetterConsonant === "s" || firstLetterConsonant === "t" || firstLetterConsonant === "v" || firstLetterConsonant === "w" || firstLetterConsonant === "x" || firstLetterConsonant === "y"){
//         splitString.push(splitString[0]);
//         splitString.splice(0, 1)
//         splitString.push("ay");
//         console.log(splitString);
//       } else if (firstLetterConsonant === "z"){
//         splitString.push(splitString[0]);
//         splitString.splice(0, 1)
//         splitString.push("ay");
//         console.log(splitString);
//       }else{
//
//       }
//       var join = splitString.join("");
//       console.log(join);
//     $("#result").text(join);
//     $("#result").show();
//
//     event.preventDefault();
//   })
// })
// SUBSTRING CONCATENATION
// var myString = "sentence";
// var ay = "ay";
//
// var pigLatin = myString.substring(1) + myString.substring(0,1) + "ay";
//
// console.log(pigLatin);

// VOWEL CONSONANT ARRAY PROGRAM (SECOND PROGRAM)
$(document).ready(function(){
  $("#formOne").submit(function(event){
    var sentence = $("#userinput").val();
    var splitSentence = sentence.split("");
    var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var vowel = ['a', 'e', 'i', 'o','u'];


    var containsVowel = function(sentence, aeiou) {
      // for (var i = 0; i < array.length; i++)
      for( var i = 0; i < aeiou.length; i++ ){
        if (sentence[0] === aeiou[i]) {
          splitSentence = splitSentence.join("") + "ay";
          // console.log(splitSentence);
        }
      }
    }

    var containsConsonant = function(array, obj) {
      for (var i = 0; i < obj.length; i++) {
        // for( var v = 0; v < obj.length; v++ )
        if (array[0] === obj[i]) {
          // splitSentence.push(splitSentence[0]);
          // splitSentence.splice(0, 1)
          // splitSentence.push("ay");
          console.log(containsConsonant);
        }
      }
      // return false;
    }

    console.log(containsVowel(splitSentence, vowel));
        // console.log(containsVowel(splitSentence, consonant));
    // console.log(join);
    // var join = splitSentence.join("");
    $("#result").text(splitSentence);
    $("#result").show();
  event.preventDefault();
  })
})
