require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const plantRoutes = require('./routes/plants');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.get('/',(req,res)=>{
  console.log("API is running!!!");
});

app.use(cors({
  origin: ['http://localhost:5173','https://fresh-clean-breathe.netlify.app/']
}));
app.use(express.json());
app.use('/api/plants', plantRoutes);

// ✅ Connect to MongoDB FIRST, then start server
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'Breadth_Clean',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
