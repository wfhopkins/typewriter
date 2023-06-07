const sentence = "hello there from lighthouse labs";
const typewriter = function(sentence) {
  let delay = 50;
  for (const char of sentence) {
    console.log("char: ", char);
    console.log("delay: ", delay);

    setTimeout(() => {
      process.stdout.write(char)
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    // console.log("itLives!");
    process.stdout.write("\n");
  }, delay);
};
typewriter(sentence);

//delay * (sentence.length - 1)
// if (char === char[sentence.length -1 && char !== " "]) {
//   process.stdout.write("\n");


// for (let i = 0; i < sentence.length; i++)