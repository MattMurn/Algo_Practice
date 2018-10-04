buildTrie = (...words) => {
    // Implement me! :)
    let final = {};
    console.log(...words.spilt(''))
    words.forEach(el => final[el] = null);
    console.log(final);
  }

  buildTrie('Trie')