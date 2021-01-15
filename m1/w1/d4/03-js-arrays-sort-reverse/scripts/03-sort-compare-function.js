const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

/* 
  arr.sort( function (a, b) {
   // order formula
  })
*/

// if compare function returns -1, `a` is sorted before `b` (leaves `a` and `b` as they are)

// if compare function returns 0, leaves `a` and `b` as they are (nothing changes)

// if compare function return 1, sort `b` to an index lower than `a`  (`b` comes first)

// sort ascending .o:0
function compareAscending(a, b) {
  if (a < b) {
    return -1; /* a is less than b by some ordering criterion */
  }
  if (a > b) {
    return 1; /* a is greater than b by some ordering criterion */
  }
  if (a === b) {
    return 0; /* a is equal to b */
  }
}

// sort descending 0:o.
function compareAscending(a, b) {
  if (a > b) {
    return -1; /* a is bigger than b by some ordering criterion */
  }
  if (a < b) {
    return 1; /* a is smaller than b by some ordering criterion */
  }
  if (a === b) {
    return 0; /* a is equal to b */
  }
}

numbers.sort(function (a, b) {
  if (a > b) {
    return -1; /* a is bigger than b by some ordering criterion */
  }
  if (a < b) {
    return 1; /* a is smaller than b by some ordering criterion */
  }
  if (a === b) {
    return 0; /* a is equal to b */
  }
});

console.log("numbers", numbers);
