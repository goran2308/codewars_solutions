function getCount(str) {
  var vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount === null ? 0 : vowelsCount.length;
}



console.log(getCount("abracadabra"), 5)
console.log(getCount("goran"), 2)