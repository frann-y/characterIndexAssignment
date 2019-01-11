function countIndex(words) {
  var letters = {};
  var words = words.toLowerCase().split('');

  for (i = 0; i < words.length; i++) {
    if (!letters[words[i]]){
      letters[words[i]] = [i]
    }
    else {
    letters[words[i]].push(i)
    }
  }
  delete letters[" "];
  return letters;
}

console.log(countIndex('Lighthouse in the house'))
