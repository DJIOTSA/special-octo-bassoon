const axios = require("axios");

/**
 * Fetches a fun fact about a number from the Numbers API.
 * @param {number} num - The number to fetch a fun fact for.
 * @returns {string} - A fun fact about the number or a fallback message.
 */
const fetchFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}`);
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
};
//localhost:3000/api/classify-number?number=42
http: module.exports = { fetchFunFact };
