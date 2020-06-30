let positions = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;
for (let postion of positions) {
  setTimeout(() => {
    process.stdout.write(`\r${postion}`)
  }, delay += 200)
}


