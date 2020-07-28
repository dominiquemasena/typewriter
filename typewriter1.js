const sentence = "hello there from lighthouse labs";
 let sentenceDelay = 0;
 for (const char of sentence) {
setTimeout(() => {
   
     process.stdout.write(char);
    }, sentenceDelay += 50 )
    
  
 }
 setTimeout(() => {
  console.log("\n");
 }, 1600
)