export const fillPath = (path, params) => {
  if (path === '') return '';

  const keyList = Object.keys(params);

  if (keyList.length === 0) return path;

  const pathArray = path.split('/').filter((x) => x !== '');
  let result = '';

  for (let i = 0; i < pathArray.length; i++) {
    const element = pathArray[i];
    if (element.slice(1) in params && element.startsWith(':'))
      result += `/${params[element.slice(1)]}`;
    else result += `/${element}`;
  }
  return result;
};

export const fillPathv2 = (path, params) => {
  if (path === '') return '';

  const keyList = Object.keys(params);

  if (keyList.length === 0) return path;

  let result = path;

  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    result = result.replace(`:${key}`, params[key]);
  }

  return result;
};

export const fillPathv3 = (path, params) => {
  if (path === '') return '';

  const keyList = Object.keys(params);

  if (keyList.length === 0) return path;

  let result = path;

  return result
    .split('/')
    .filter((x) => x !== '')
    .reduce((newPath, element) => {
      if (element.slice(1) in params && element.startsWith(':'))
        newPath += `/${params[element.slice(1)]}`;
      else newPath += `/${element}`;
      return newPath;
    }, '');
};
