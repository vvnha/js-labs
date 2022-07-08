export const findFirstEmail = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  for (let i = 0; i < strList.length; i++) {
    const str = strList[i];

    const aIndex = str.indexOf('@');

    const hasDomain =
      (str.indexOf('.com') === str.length - 4 && str.indexOf('.com') - aIndex >= 3) ||
      (str.indexOf('.vn') === str.length - 3 && str.indexOf('.vn') - aIndex >= 3) ||
      (str.indexOf('.com.vn') === str.length - 7 && str.indexOf('.com.vn') - aIndex >= 3);

    if (aIndex >= 3 && hasDomain) return str;
  }

  return undefined;
};

export const findFirstEmailv2 = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  for (let i = 0; i < strList.length; i++) {
    const str = strList[i];

    const aIndex = str.indexOf('@');

    const Y = str.split('@')[1];

    const hasDomain =
      (str.endsWith('.com') && Y.length - 4 >= 3) ||
      (str.endsWith('.vn') && Y.length - 3 >= 3) ||
      (str.endsWith('.com.vn') && Y.length - 7 >= 3);

    if (aIndex >= 3 && hasDomain) return str;
  }

  return undefined;
};

// export const findFirstEmailv3 = (strList) => {
//   if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

//   return strList.reduce((firstEmail, str) => {
//     const aIndex = str.indexOf('@');
//     const Y = str.split('@')[1];

//     const hasDomain =
//       (str.endsWith('.com') && Y.length - 4 >= 3) ||
//       (str.endsWith('.vn') && Y.length - 3 >= 3) ||
//       (str.endsWith('.com.vn') && Y.length - 7 >= 3);
//     firstEmail = aIndex >= 3 && hasDomain ? str : firstEmail;
//     return firstEmail;
//   }, undefined);
// };

export const findFirstEmailv3 = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  return strList.find((str) => {
    const aIndex = str.indexOf('@');
    const Y = str.split('@')[1];

    const hasDomain =
      (str.endsWith('.com') && Y.length - 4 >= 3) ||
      (str.endsWith('.vn') && Y.length - 3 >= 3) ||
      (str.endsWith('.com.vn') && Y.length - 7 >= 3);

    return aIndex >= 3 && hasDomain;
  });
};
