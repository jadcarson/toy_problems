function nestedWordCount(wordList) {
  var bigWord = {};
  var amount = 0;
  var theWord = '';
  for (var i = 0; i < wordList.length; i++) {
    bigWord[wordList[i]] = 0;
  }
  for (var key in bigWord) {
    for (var key2 in bigWord) {
      if (key.indexOf(key2) !== -1)
        bigWord[key]++
    }

  }
  for (var key3 in bigWord) {
    if (bigWord[key3] > amount) {
      amount = bigWord[key3]
      theWord = key3
    }

  }
  return theWord
}
module.exports = {nestedWordCount}