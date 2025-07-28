// src/api/api.js
import axios from 'axios';

export const getRecommendedPlants = async (light, spaceRequired, aqiImprovement) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}`, {
      params: {
        light,
        spaceRequired,
        aqiImprovement
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error in API call:', error);
    throw error;
  }
};
