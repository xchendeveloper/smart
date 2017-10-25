//https://github.com/dcousens/is-sorted

function defaultComparator (a, b) {
  return a - b
}

module.exports = function checksort (array, comparator) {


  comparator = comparator || defaultComparator

  for (var i = 1; i < array.length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}
//[3,2,1]

//++i先自加，后运算