const spinChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 100;
for (const char of spinChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}