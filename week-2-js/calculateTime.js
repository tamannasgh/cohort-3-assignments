function calculateTime(n) {
  const startTime = performance.now();
  let sum = 0;
  for(let i = 0; i < n; i++) {
    sum += i;
  }
  const endTime = performance.now();

  return endTime - startTime;

}

console.log(calculateTime(1000));
