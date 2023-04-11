function lettersOccurence(obj) {
    if (typeof obj !== 'string' && typeof obj !== 'number') {
      return {};
    }
    
    const occurences = {};
    
    for (let i = 0; i < obj.length; i++) {
      const letter = obj[i];
      if (letter.match(/[a-z,A-Z, ,1-9]/i)) {
        occurences[letter] = (occurences[letter] || 0) + 1;
      }
    }
    
    return occurences;
  }

module.exports = lettersOccurence;

console.log(lettersOccurence('')); // {}

console.log(lettersOccurence('Hello World')); // { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

console.log(lettersOccurence('hruio rehiorg hre hgr orehg h oirhegrhhoigrh')); // { h: 10, r: 9, u: 1, i: 4, o: 5, ' ': 6, e: 4, g: 5 }

console.log(lettersOccurence("occtyazZaXqWxRdBts6fCx6c3Jj8HgeK9x4qRy3SYiVvCKkqBT")); // { 3: 2, 4: 1, 6: 2, 8: 1, 9: 1, o: 1, c: 3, t: 2, y: 2, a: 2, z: 1, Z: 1, X: 1, q: 3, W: 1, x: 3, R: 2, d: 1, B: 2, s: 1, f: 1, C: 2, J: 1, j: 1, H: 1, g: 1, e: 1, K: 2, S: 1, Y: 1, i: 1, V: 1, v: 1, k: 1, T: 1,}

console.log(lettersOccurence(65466632)); // { '2': 1, '3': 1, '4': 1, '5': 1, '6': 4 }

console.log(lettersOccurence(null)); // {}

console.log(lettersOccurence(NaN)); // {}

console.log(lettersOccurence(undefined)); // {}