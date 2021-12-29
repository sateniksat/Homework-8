function ingExtractor(input) {
  let testRegex = /.ing/;
  let affix="ing";
  let matches = [];
  let wordList=[];
  if (testRegex.test(input)) {
    // wordList[index].match(/(\w)*(\w)+ing/)
    wordList = input.split(/[ ,.;/]+/);
    for(let index in wordList){
        if(wordList[index].match(/(\w)*ing/) && wordList[index].length>affix.length+1){
        matches.push(wordList[index]);
        }
    }
  }
  return matches;
}
console.log(ingExtractor("coming bringing Letting sing"));
console.log(ingExtractor("going Ping, king sHrink dOing"));
console.log(ingExtractor("zing went ring, ding wing SINk"));
