
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecommendationForm from './pages/RecommendationForm'
function App() {
 return(
    <div>
        <h1 style = {{textAlign: 'center',marginTop:'20px',color: '#2e7d32'}}>
            Breathe Clean - Plant Recommender
        </h1>
        <RecommendationForm/>
    </div>
 )
}

export default App
