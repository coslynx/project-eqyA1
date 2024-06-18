const axios = require('axios');

const API_URL = 'https://lesbian-porno-api.com';

async function fetchLesbianPornoContent() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching lesbian porno content:', error);
    return null;
  }
}

async function searchLesbianPorno(query) {
  try {
    const response = await axios.get(`${API_URL}/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for lesbian porno:', error);
    return null;
  }
}

async function getLesbianPornoDetails(videoId) {
  try {
    const response = await axios.get(`${API_URL}/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting lesbian porno details:', error);
    return null;
  }
}

module.exports = {
  fetchLesbianPornoContent,
  searchLesbianPorno,
  getLesbianPornoDetails,
};