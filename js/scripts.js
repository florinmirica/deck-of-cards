$(document).ready(function(){
  var cards = [];
  var suits = ["clubs", "diamonds", "hearts", "spades"];
  var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  values.forEach(function(value){
    var deckOne = (value + " of ");
    values.forEach(function(value){
      var deckFull = (value + " " + deckOne)
      $("#result").append(deckFull + "<p></p>");
    })


  });

});
