var sentence = prompt("Enter your sentence.");

var firstLetter = function(sentence) {
  var firstCapital = sentence.charAt(0);
  var first = firstCapital.toUpperCase();
  return first;
};

var lastLetter = function (sentence) {
  return sentence.length;
};

var capLast = function () {
  var last = sentence.charAt(sentence.length - 1);
  var capital = last.toUpperCase();
  return capital;
 }



alert(capLast(lastLetter));
