/**
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * */
const UNITS_DIGIT = [
  '',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
];
const TENS_DIGIT = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const HUNDREDS_DIGIT = [
  '',
  'C',
  'CC',
  'CCC',
  'CD',
  'D',
  'DC',
  'DCC',
  'DCCC',
  'CM',
];
const THOUSANDS_DIGIT = ['', 'M', 'MM', 'MMM'];
const intToRoman = (num: number): string => {
  const thousandsDigitIndex = Math.floor(num / 1000);
  const hundredsDigitIndex = Math.floor((num % 1000) / 100);
  const tensDigitIndex = Math.floor((num % 100) / 10);
  const unitsDigitIndex = Math.floor(num % 10);

  return `${THOUSANDS_DIGIT[thousandsDigitIndex]}${HUNDREDS_DIGIT[hundredsDigitIndex]}${TENS_DIGIT[tensDigitIndex]}${UNITS_DIGIT[unitsDigitIndex]}`;
};

export default intToRoman;
