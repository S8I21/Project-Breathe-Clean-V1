const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

//GET all plant data
router.get('/',async(req,res)=> {
    try{
        const plants = await Plant.find();
        res.json(plants);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});



router.get('/recommend', async (req, res) => {
  try {
    const { light, spaceRequired, aqiImprovement } = req.query;

    console.log('📥 Query:', { light, spaceRequired, aqiImprovement });

    const allPlants = await Plant.find();
    console.log('🌱 Total Plants in DB:', allPlants.length);

    const scoredPlants = allPlants.map(plant => {
      console.log('🔍 Comparing Plant:', {
        plantLight: plant.Light,
        plantSpace: plant.SpaceRequired,
        plantAQI: plant.AQIImprovement
      });

      let score = 0;
      if (plant.Light?.toLowerCase() === light?.toLowerCase()) score++;
      if (plant.SpaceRequired?.toLowerCase() === spaceRequired?.toLowerCase()) score++;
      if (plant.AQIImprovement?.toLowerCase() === aqiImprovement?.toLowerCase()) score++;

      return { ...plant._doc, score };
    });

    const sortedPlants = scoredPlants.sort((a, b) => b.score - a.score);
    const topPlants = sortedPlants.slice(0, 12);

    console.log('✅ Recommended Plants:', topPlants);

    if (topPlants.length === 0) {
      return res.status(404).json({ message: 'No matching plants found' });
    }

    res.json(topPlants);
  } catch (err) {
    console.error('❌ Error in /recommend route:', err.message);
    res.status(500).json({ error: err.message });
  }
});




module.exports = router;