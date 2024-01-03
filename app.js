let str = prompt("Enter the string");

function uniquechar() {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    let currchar = str[i];
    if (unique.indexOf(currchar) == -1) {
      unique = unique + currchar;
    }
  }
  console.log(`The unique characters are ${unique}`);
  return unique;
}

uniquechar(str);
