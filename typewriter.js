const sentence = "hello there from lighthouse labs";
const typewriter = function(sentence) {
  let delay = 50;
  for (const char of sentence) {
    if (char === char[sentence.length - 1]){
      process.stdout.write("\n");
    } else {  
    setTimeout(() => {
      process.stdout.write(char)
    }, delay);
    delay += 50;
    }
  }
};
typewriter(sentence);


// if (char === char[sentence.length -1 && char !== " "]) {
//   process.stdout.write("\n");


// for (let i = 0; i < sentence.length; i++)