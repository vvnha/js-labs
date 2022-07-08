export function isSubArray(arr2, arr1) {
  if (!Array.isArray(arr2) || arr2?.length < 0) return false;

  if (!Array.isArray(arr1) || arr1?.length < 0) return false;

  // Create a Frequency Table using STL
  let frequency = new Array();

  // Increase the frequency of each element
  // in the frequency table.
  // mean => [,1,,1,,,,1,,,,1,,1,,,,,,,,1] with index [11, 1, 13, 21, 3, 7 ]
  for (let i = 0; i < arr1.length; i++) {
    frequency[arr1[i]] = frequency[arr1[i]] !== undefined ? frequency[arr1[i]] + 1 : 1;
  }

  // Decrease the frequency if the
  // element was found in the frequency
  // table with the frequency more than 0.
  // else return 0 and if loop is
  // completed return 1.
  for (let i = 0; i < arr2.length; i++) {
    if (typeof frequency[arr2[i]] !== 'number') return false;
    //   if (frequency[arr2[i]] > 0) frequency[arr2[i]]-1;
    //   else return false;
  }
  return true;
}

export function isSubArrayv2(arr2, arr1) {
  if (!Array.isArray(arr2) || arr2?.length < 0) return false;

  if (!Array.isArray(arr1) || arr1?.length < 0) return false;

  for (let i = 0; i < arr2.length; i++) {
    let matchNumber = false;

    for (let y = 0; y < arr1.length; y++) {
      if (arr2[i] === arr1[y]) matchNumber = true;
    }

    if (matchNumber === false) return false;
  }
  return true;
}
