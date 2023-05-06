let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// const result = re.exec("ll hellolll World");
// exec returns array with info

// const result = re.test("ll Hellolll World");
// test is for exact match. return boolean

// const result = str.match(re);
// match is similar to exec

// const result = str.search(re);
// search returns index of the first match. If no match is found, it returns -1

// const result = str.replace(re, "hi");
// replaces search term and returns new text

// Metacharacter Symbols

re = /^h/i; // Must start with
re = /world$/i; // Must ends with
re = /^world$/i; // Must start and ends with
re = /w.rld/i; // Dot(.) works as ONE wild card
re = /w*rld/i; // Star(*) works as any number of wild card
re = /gre?a?y/i; // e and i is optional
re = /gre?a?y\?/i; // e and i is optional

// Brackets [] -Character Sets
re = /gr[ae]y/i; // Must be a or e
re = /[^gf]ray/i; // Must be anything except g and r
re = /^[gf]ray/i; // Must start with  g or r
re = /[A-Z]ray/; // Matches uppercase letters
re = /[a-z]ray/; // Matches lowercase letters
re = /[A-Za-z]ray/; // Matches uppercase & lowercase letters
re = /[0-9]/; // Matches numbers
re = /[0-9][0-9]/; // Matches numbers

// Braces {} - Quantifiers

re = /Hel{2}o/i; // "l" must occur 2 number of times
re = /Hel{2,4}o/i; // "l" must occur 2 to 4 number of times
re = /Hel{2,}o/i; // "l" must occur at least 2 times

//  Parenthesis () - Grouping

re = /([0-9]x){3}/; // 0 to 9 and x should occer 3X times. Prenthesis is for grouping

// Shorthand Character classes
re = /\w/; // Word Character. Matcheds any leters, numbers and underscore
re = /\w+/; // Word Character. Matcheds any leters, numbers and underscore. PLUS means once or more
re = /\W/; // Non word characters
re = /\d/; // match any digit
re = /\d+/; // match any digit, ONE or more times
re = /\D/; // match anything other than digit
re = /\s/; // match white-space character
re = /\S/; // match NON-white-space character
re = /Hell\b/i; // Word boundary. Will only match Hell not Hello
re = /x(?=y)/; // Matches x followed by y
re = /x(?!y)/; // Matches x if not followed by y

// String to match
const str = "Hello welcome to Hell xx";

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't match ${re.source}`);
  }
}

reTest(re, str);
