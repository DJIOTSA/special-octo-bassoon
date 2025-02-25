const { classifyNumber } = require("../utils/mathUtils");
const { fetchFunFact } = require("../services/numbersAPI");

const classifyNumberAPI = async (req, res) => {
  let { number } = req.query;

  // Check if number is provided
  if (!number) {
    return res.status(200).json({
      number: "undefined",
      error: true,
    });
  }

  
  // Preserve the original value before casting
  const originalNumber = number;
  number = number.trim();

  // Ensure the input contains only valid integer characters
  if (!/^-?\d+$/.test(number)) {
    return res.status(400).json({
      number: originalNumber,
      error: true,
    });
  }

  // // Check for negative numbers
  // if (number < 0) {
  //   return res.status(400).json({
  //     number: originalNumber,
  //     error: true,
  //   });
  // }

  // Convert to integer
  const num = parseInt(number, 10);

  // Proceed with classification and fetching fun facts
  const properties = classifyNumber(num);
  const funFact = await fetchFunFact(num);

  res.status(200).json({
    number: num,
    is_prime: properties.isPrime,
    is_perfect: properties.isPerfect,
    properties: properties.properties,
    digit_sum: properties.digitSum,
    fun_fact: funFact,
  });
};

module.exports = { classifyNumberAPI };
