import React from 'react';

const PlantCard = ({plant}) => {
    return(
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            margin: '10px',
            width: '250px',
            boxshadow: '2px 2px 12px rgba(0,0,0,0.1)'
        }}>
            <h3>{plant.CommonName} <small>({plant.SuggestedHindiNickname})</small></h3>
                  <p><strong>Light:</strong> {plant.Light}</p>
                  <p><strong>Space Required:</strong> {plant.SpaceRequired}</p>
                  <p><strong>AQI Improvement:</strong> {plant.AQIImprovement}</p>
        </div>
    )
}
export default PlantCard