/* JavaScript optimization
string - your name
int - number of judges
string - names of four other people separated by spaces

take input name, alphabetize ...
    let's use javascript (for now)

use formula Time = ceil(P / J) × 30
P = position of input in the alphabetical list (1st, 2nd, 3rd …).
J = number of judges.
ceil(P / J) tells you which “batch” you fall into.

Each batch takes 30 minutes, so multiply by 30 to get the finish time
> court("Jules", 3, "Adam Betty Frank Mike")
60

> court("Zane", 1, "Mark Hank Ana Vivian")
150
*/

//takes inputs name(string) and names(unsorted array)
//push name into array, use sort()
const alphabetize1 = (name, unsortedNames) => {
  unsortedNames.push(name);
  return unsortedNames.sort();
};

//takes input names(unsorted array)
//use quick sort
const alphabetize2 = () => {};

console.time("alphabetize1");
console.log(
  alphabetize1("Sophia", ["Manon", "Daniela", "Megan", "Lara", "Yoonchae"])
);
console.timeEnd("alphabetize1");
console.log("-----------------------------");

console.time("alphabetize2");
console.log(
  alphabetize2("Sophia", ["Manon", "Daniela", "Megan", "Lara", "Yoonchae"])
);
console.timeEnd("alphabetize2");
