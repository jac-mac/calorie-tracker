import './NewFoodForm.css'
import InputField from '../common/InputField'
import { useState } from 'react'

export default function NewFoodForm(props) {

    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState('')
    const [foodProtein, setFoodProtein] = useState('')
    const [foodCarbs, setFoodCarbs] = useState('')
    const [foodFat, setFoodFat] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const newFood = {
            id: Math.random(),
            name: foodName,
            calories: foodCalories,
            protein: parseInt(foodProtein),
            carbs: foodCarbs,
            fat: foodFat
        }
        {props.addNewFood(newFood)}
        setFoodName('')
        setFoodCalories('')
        setFoodProtein('')
        setFoodCarbs('')
        setFoodFat('')
    }

    const nameChangeHandler = (e) => {
        setFoodName(e.target.value)
    }

    const calorieChangeHandler = (e) => {
        setFoodCalories(parseFloat(e.target.value))
    }

    const proteinChangeHandler = (e) => {
        setFoodProtein(parseFloat(e.target.value))
    }

    const carbsChangeHandler = (e) => {
        setFoodCarbs(parseFloat(e.target.value))
    }

    const fatChangeHandler = (e) => {
        setFoodFat(parseFloat(e.target.value))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-base'>
                    <InputField placeholder='Name of food' type='text' onChange={nameChangeHandler} value={foodName}/>
                    <InputField placeholder='Calories' type='number' onChange={calorieChangeHandler} value={foodCalories}/>
                </div>
                <div className='form-macros'>
                    <InputField placeholder='Protein Amount (g)' type='number' onChange={proteinChangeHandler} value={foodProtein}/>
                    <InputField placeholder='Carbs Amount (g)' type='number' onChange={carbsChangeHandler} value={foodCarbs}/>
                    <InputField placeholder='Fat Amount (g)' type='number' onChange={fatChangeHandler} value={foodFat}/>
                </div>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
}