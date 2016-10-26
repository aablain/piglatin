function wordShifter(inputOne) {
  var vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var consonantArray = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
  var suffixAy = "ay"
  var splitSentence = inputOne.split(" ");
  var finalSentence =[];

 debugger;
  splitSentence.map(function(inputTwo){
    debugger;
  var splitWord = inputTwo.split("");
  if (splitWord[0] === ("q" || "Q") && splitWord[1] === ("u" || "U")) {
    var firstQ = splitWord.shift();
    var firstU = splitWord.shift();
    var changedArray = splitWord.push(firstQ);
    var changedArray = splitWord.push(firstU);
  }

  for (index=0; index < splitWord.length; index++) {
    consonantArray.map(function(comparison){
    if (comparison === splitWord[0]) {
      var firstItem = splitWord.shift();
      var changedArray = splitWord.push(firstItem);


      if (splitWord[0] === ("q" || "Q") && splitWord[1] === ("u" || "U")) {
        var firstQ = splitWord.shift();
        var firstU = splitWord.shift();
        var changedArray = splitWord.push(firstQ);
        var changedArray = splitWord.push(firstU);
      }
    }
  });
};


    vowelArray.map(function(comparison){
    if (comparison === splitWord[0]) {
      splitWord.push(suffixAy);
      }
    });

  var joiner = splitWord.join("");
  finalSentence.push(joiner)
});

  var joinAgain = finalSentence.join(" ");
  return joinAgain;
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
