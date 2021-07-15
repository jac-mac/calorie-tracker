import './App.css';
import FoodsList from './components/Food/FoodsList'
import AppBar from './components/AppBar/AppBar'
import Graph from './components/Graph/Graph'
import NewFoodForm from './components/Food/NewFoodForm'
import { useState } from 'react'

const DUMMY_DATA = [{
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

DUMMY_DATA.forEach((element) => {console.log(element.name)})

function App() {

  const [foods, setFoods] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFat, setTotalFat] = useState(0)

  const addFoodItem = (food) => {
    setFoods((prevFoods) => {
      return [food, ...prevFoods]
    })

    setTotalCalories((prevCaloriesAmount) => {
      return prevCaloriesAmount += food.calories
    })

    setTotalProtein((prevProteinAmount) => { 
      return prevProteinAmount += food.protein
    })

    setTotalCarbs((prevCarbsAmount) => { 
      return prevCarbsAmount += food.carbs
    })

    setTotalFat((prevFatAmount) => { 
      return prevFatAmount += food.fat
    })

    console.log(totalProtein)
  }

  const macro_data = {
    calories: totalCalories,
    protein: totalProtein,
    carbs: totalCarbs,
    fat: totalFat
  }
  

  return (
    <div className="App">
        <AppBar data={macro_data}/>
        <NewFoodForm addNewFood={addFoodItem}/>
        <div className='content'>
          <FoodsList food={foods} />
          <Graph data={macro_data}/>
        </div>
    </div>
  );
}

export default App;
