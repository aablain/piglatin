function wordShifter(inputOne) {
  var vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var consonantArray = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
  var suffixAy = "ay"
  var splitWord = inputOne.split("");

  for (index=0; index < splitWord.length; index++) {
    consonantArray.map(function(comparison){
    if (comparison === splitWord[0]) {
      var firstItem = splitWord.shift();
      var changedArray = splitWord.push(firstItem);
    }
  });
};

    vowelArray.map(function(comparison){
    if (comparison === splitWord[0]) {
      splitWord.push(suffixAy);
      }
    });

  var joiner = splitWord.join("");
  return joiner;
};



// user interface logic
$(document).ready(function() {
  $("form#pigLatinForm").submit(function(event) {
    event.preventDefault();
    debugger;
    var wordInput = $("input#pigLatin").val();
    var wordOutput = wordShifter(wordInput);
    var result = wordShifter(wordInput);
    $(".converted").text(result);

    $("#result").show();
  });
});
