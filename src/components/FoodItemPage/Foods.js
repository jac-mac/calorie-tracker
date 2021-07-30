import './Foods.css';
import FoodsList from './Food/FoodsList'
import AppBar from './AppBar/AppBar'
import Graph from './Graph/Graph'
import NewFoodForm from './Food/NewFoodForm'
import AddButton from './AddButton'
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

// DUMMY_DATA.forEach((element) => {console.log(element.name)})

function App() {

  const [foods, setFoods] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFat, setTotalFat] = useState(0)
  const [showForm, setShowForm] = useState(true)

  const scrollAndShowForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    if(showForm) {
      setShowForm(false)
      return
    }
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

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
  
  if(showForm) {
    return (
      <div className='App'>
          <AppBar data={macro_data}/>
          <Graph data={macro_data} />
          <div className='ur-mom'>
            <div className='middle-content'>
                <NewFoodForm addNewFood={addFoodItem} closeOnClick={closeForm}/>
                <FoodsList food={foods} />
                {/* <Graph data={macro_data} /> */}
            </div>
          </div>
          <AddButton onClick={scrollAndShowForm}/>
      </div>
    );
  }

  else {
    return (
      <div className='App'>
          <AppBar data={macro_data}/>
          <Graph data={macro_data} />
          <div className='ur-mom'>
            <div className='middle-content'>
                <FoodsList food={foods} />
            </div>
          </div>
          <AddButton onClick={scrollAndShowForm}/>
      </div>
    );
  }
}

export default App;
