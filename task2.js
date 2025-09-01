/* JavaScript optimization
string - your name, unsortedNames
int - number of judges
string - names of four other people separated by spaces

take input name, alphabetize ...
    let's use javascript sort (--faster)

Each batch takes 30 minutes, so multiply by 30 to get the finish time
> court("Jules", 3, "Adam Betty Frank Mike")
60

> court("Zane", 1, "Mark Hank Ana Vivian")
150
*/

//use js sort()
const alphabetize1 = (name, unsortedNames) => {
  unsortedNames.push(name);
  return unsortedNames.sort();
};

//use quick sort
const alphabetize2 = (name, unsortedNames) => {
  function partition(names, start, end) {
    // For random pivot use => names[Math.floor(Math.random() * (end - start + 1) + start)];
    // middle pivot
    const pivotVal = names[Math.floor((start + end) / 2)];

    while (start <= end) {
      while (names[start] < pivotVal) {
        start++;
      }
      while (names[end] > pivotVal) {
        end--;
      }
      if (start <= end) {
        // swap
        let temp = names[start];
        names[start] = names[end];
        names[end] = temp;
        start++;
        end--;
      }
    }
    return start;
  }

  function quickSort(names, startIndex = 0, endIndex = names.length - 1) {
    if (startIndex >= endIndex) return names;
    const index = partition(names, startIndex, endIndex);
    quickSort(names, startIndex, index - 1);
    quickSort(names, index, endIndex);

    return names;
  }

  unsortedNames.push(name);
  return quickSort(unsortedNames);
};

// console.time("alphabetize1");
// alphabetize1("Sophia", ["Manon", "Daniela", "Megan", "Lara", "Yoonchae"]);
// console.timeEnd("alphabetize1");

// console.time("alphabetize2");
// alphabetize2("Sophia", ["Manon", "Daniela", "Megan", "Lara", "Yoonchae"]);
// console.timeEnd("alphabetize2");

// use formula Time = ceil(P / J) × 30
// P = position of input in the alphabetical list (1st, 2nd, 3rd …).
// J = number of judges.
// ceil(P / J) tells you which “batch” you fall into.

// const court2 = (name, judgesCount, unsortedNames) => {
//   const unsortedNamesArr = unsortedNames.split(" ");

//   const sorted = alphabetize2(name, unsortedNamesArr);

//   const p = sorted.indexOf(name) + 1; // +1 makes it 1-based

//   return Math.ceil(p / judgesCount) * 30;
// };

// console.time("court2");
// court2("Jules", 3, "Adam Betty Frank Mike");
// console.timeEnd("court2");

// ===================================================
// use floor
// const court3 = (name, judgesCount, unsortedNames) => {
//   const unsortedNamesArr = unsortedNames.split(" ");

//   const sorted = alphabetize1(name, unsortedNamesArr);

//   const p = sorted.indexOf(name) + 1; // +1 makes it 1-based

//   return Math.floor((p + judgesCount - 1) / judgesCount) * 30;
// };

// console.time("court3");
// court3("Jules", 3, "Adam Betty Frank Mike");
// console.timeEnd("court3");

const court1 = (name, judgesCount, unsortedNames) => {
  const unsortedNamesArr = unsortedNames.split(" ");

  const sorted = alphabetize1(name, unsortedNamesArr);

  const p = sorted.indexOf(name) + 1; // +1 makes it 1-based

  return Math.ceil(p / judgesCount) * 30;
};

console.time("court1");
court1("Jules", 3, "Adam Betty Frank Mike Manon Daniela Megan Lara Yoonchae");
console.timeEnd("court1");

// const court4 = (name, judgesCount, unsortedNames) => {
//   function myIndexOf(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         return i; // return the index as soon as we find it
//       }
//     }
//     return -1; // not found
//   }

//   const unsortedNamesArr = unsortedNames.split(" ");

//   const sorted = alphabetize1(name, unsortedNamesArr);

//   const p = myIndexOf(sorted, name) + 1; // +1 makes it 1-based

//   return Math.ceil(p / judgesCount) * 30;
// };

// console.time("court4");
// court4("Jules", 3, "Adam Betty Frank Mike Manon Daniela Megan Lara Yoonchae");
// console.timeEnd("court4");
