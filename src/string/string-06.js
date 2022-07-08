export const getDisplayedAddress = (address) => {
  if (address === {}) return '';

  const keyList = Object.keys(address);
  let addressString = '';

  if ('street' in address) {
    if ('number' in address) addressString = `${address['number']} ${address['street']}`;
    else addressString = `${address['street']}`;
  }

  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    if (!(key === 'number' || key === 'street'))
      addressString = `${addressString}, ${address[key]}`;
  }

  return addressString;
};
