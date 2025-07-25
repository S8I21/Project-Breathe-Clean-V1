const mongoose = require('mongoose');

const plantSchema  = new mongoose.Schema({
    BotanicalName: String,
    commonName: String,
    SuggestedHindiNickname: String,
    AirPurifying: String,
    Light: String,
    Water: String,
    Indoor_Outdoors: String,
    Toxins_Remove: String,
    Maintainence: String,
    SpaceRequired: String,
    AQIImprovement: String,
    OriginCountry: String,


})
module.exports = mongoose.model('Plant', plantSchema, 'Fresh-Breathe');