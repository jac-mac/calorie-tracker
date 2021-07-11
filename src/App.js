import './App.css';
import FoodsList from './components/FoodsList'
import AppBar from './components/AppBar'

function App() {
  const foods = [{
      id: 1,
      name: 'Chicken Breast',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6
    },
    {
      id: 2,
      name: 'Jasmine Rice',
      calories: 170,
      protein: 3.8,
      carbs: 32.1,
      fat: 2.5
    },
    {
      id: 3,
      name: 'Chickpeas',
      calories: 364,
      protein: 19,
      carbs: 61,
      fat: 6
    }
  ]
  return (
    <div className="App">
        <AppBar food={foods}/>
        <FoodsList food={foods} />
    </div>
  );
}

export default App;
