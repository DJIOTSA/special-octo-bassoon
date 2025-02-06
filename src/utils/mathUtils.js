/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Checks if a number is perfect.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is perfect, false otherwise.
 */
const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

/**
 * Checks if a number is an Armstrong number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is an Armstrong number, false otherwise.
 */
const isArmstrong = (num) => {
  const digits = String(num).split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
};

/**
 * Calculates the sum of the digits of a number.
 * @param {number} num - The number to calculate the digit sum for.
 * @returns {number} - The sum of the digits.
 */
const getDigitSum = (num) => {
  return String(num)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
};

/**
 * Classifies a number and returns its properties.
 * @param {number} num - The number to classify.
 * @returns {object} - An object containing the number's properties.
 */
const classifyNumber = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  return {
    isPrime: isPrime(num),
    isPerfect: isPerfect(num),
    properties,
    digitSum: getDigitSum(num),
  };
};

module.exports = { classifyNumber };
