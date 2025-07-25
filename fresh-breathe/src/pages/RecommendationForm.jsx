import React, {useState} from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard'

const RecommendationForm  = () => {
    const[form,setForm] = useState([]);
    const[loading,setLoading] = useState(false);
    const[plants,setPlants] = useState([])
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const handleSubmit = async e=> {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.get('http://localhost:5000/api/plants/recommend',{
                params: {
                    light: form.light,
                    spaceRequired: form.spaceRequried,
                    aqiImprovement: form.aqiImprovement
                }
            });
            setPlants(res.data);
            
        }
        catch(err){
            console.log('Error fetching recommended plants: ',err);
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2e7d32' }}>🌿 Find the Perfect Plant for Your Space</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ margin: '10px 0' }}>
          <label>Light Requirement: </label>
          <select name="light" value={form.light} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div style={{ margin: '10px 0' }}>
          <label>Space Available: </label>
          <select name="spaceRequired" value={form.spaceRequired} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div style={{ margin: '10px 0' }}>
          <label>AQI Improvement: </label>
          <select name="aqiImprovement" value={form.aqiImprovement} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Finding Plants...' : 'Suggest Plants'}
        </button>
      </form>

      {/* Show recommendations */}
      {plants.length > 0 && (
        <div>
          <h3>🪴 Recommended Plants:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plants.map((plant, index) => (
              <PlantCard key={index} plant={plant} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationForm;

