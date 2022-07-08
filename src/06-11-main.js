export function sumDigits(n) {
  if (n.toString().length !== 3) return -1;

  const hundreds = Math.trunc(n / 100);
  const tens = Math.trunc((n % 100) / 10);
  const digits = n % 10;

  return hundreds + tens + digits;
}

// console.log(sumDigits(235));

export function getFullName(firstName, lastName = '') {
  if (firstName === '') return lastName;
  if (lastName === '') return firstName;

  const firstNameStr = firstName.trim();
  const lastNameStr = lastName.trim();

  const newFirstName = `${firstNameStr[0].toUpperCase()}${firstNameStr
    .slice(1)
    .toLowerCase()}`.trim();
  const newLastName = `${lastNameStr[0].toUpperCase()}${lastNameStr.slice(1).toLowerCase()}`.trim();
  return `${newFirstName} ${newLastName}`;
}

// console.log(getFullName('john', 'pHAm'));

// console.log('httpS'.replace('S', ''));
// console.log('say hello'.replace('i', '').replace('a', ''));
// const letter = 'A';

// if (letter.toUpperCase() === letter) {
//   console.log('✅ letter is uppercase');
// } else {
//   console.log('⛔️ letter is lowercase');
// }
