export const findLastUrl = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  let lastUrl = undefined;

  for (let i = 0; i < strList.length; i++) {
    const str = strList[i];

    const [protocol, domain] = str.split('://');

    const hasDomain =
      (domain?.indexOf('.com') > -1 && domain?.length - 4 >= 3) ||
      (domain?.indexOf('.vn') > -1 && domain?.length - 3 >= 3) ||
      (domain?.indexOf('.com.vn') > -1 && domain?.length - 7 >= 3);

    const hasProtocol =
      protocol === 'http' || protocol === 'https' || protocol === 'ws' || protocol === 'wss';

    if (hasProtocol && hasDomain) lastUrl = str;
  }

  return lastUrl;
};

export const findLastUrlv2 = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  let lastUrl = undefined;

  for (let i = 0; i < strList.length; i++) {
    const str = strList[i];

    const [protocol, domain] = str.split('://');

    const hasDomain =
      (domain?.endsWith('.com') && domain?.length - 4 >= 3) ||
      (domain?.endsWith('.vn') && domain?.length - 3 >= 3) ||
      (domain?.endsWith('.com.vn') && domain?.length - 7 >= 3);

    const hasProtocol =
      protocol.startsWith('http') ||
      protocol.startsWith('https') ||
      protocol.startsWith('ws') ||
      protocol.startsWith('wss');

    if (hasProtocol && hasDomain) lastUrl = str;
  }

  return lastUrl;
};

export const findLastUrlv3 = (strList) => {
  if (!Array.isArray(strList) || strList?.length <= 0) return undefined;

  return strList.reduce((lastUrl, str) => {
    const [protocol, domain] = str.split('://');

    const hasDomain =
      (domain?.endsWith('.com') && domain?.length - 4 >= 3) ||
      (domain?.endsWith('.vn') && domain?.length - 3 >= 3) ||
      (domain?.endsWith('.com.vn') && domain?.length - 7 >= 3);

    const hasProtocol =
      protocol.startsWith('http') ||
      protocol.startsWith('https') ||
      protocol.startsWith('ws') ||
      protocol.startsWith('wss');

    lastUrl = hasProtocol && hasDomain ? str : lastUrl;
  }, undefined);
};
