function merge(arr1, arr2) {
  const newArr = [];
  let j = 0;
  for (let i = 0; i <= arr1.length; i) {
    if (arr1[i] === undefined) {
      newArr.push(...arr2.slice(j));
      break;
    }
    if (arr2[j] === undefined) {
      newArr.push(...arr1.slice(i));
      break;
    }
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftSide = mergeSort(arr.slice(0, mid));
  const rightSide = mergeSort(arr.slice(mid));
  return merge(leftSide, rightSide);
}

module.exports = { merge, mergeSort };
