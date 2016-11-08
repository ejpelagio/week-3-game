function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max) + min;
}

var index = getRandomArbitrary(0,4); 

var javascriptwordbank = JSON.parse(wordlist);     

console.log("My index is " + index + " element is " 
	+  javascriptwordbank[index].word)


