function letterCount(s) {
  let hash = {};
  s.split('').forEach((letter) => {
    hash[letter] ? hash[letter]++ : (hash[letter] = 1);
  });

  return hash;
}

console.log(letterCount('codewarddddssssss'));
