import './NewFoodForm.css'
import InputField from '../common/InputField'
import { useState } from 'react'

export default function NewFoodForm(props) {

    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState(0)
    const [foodProtein, setFoodProtein] = useState(0)
    const [foodCarbs, setFoodCarbs] = useState(0)
    const [foodFat, setFoodFat] = useState(0)

    const submitHandler = (event) => {
        event.preventDefault()
    }

    const nameChangeHandler = (e) => {
        setFoodName(e.target.value)
    }

    const calorieChangeHandler = (e) => {
        setFoodCalories(e.target.value)
    }

    const proteinChangeHandler = (e) => {
        setFoodProtein(e.target.value)
    }

    const carbsChangeHandler = (e) => {
        setFoodCarbs(e.target.value)
    }

    const fatChangeHandler = (e) => {
        setFoodFat(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-base'>
                    <InputField placeholder='Name of food' type='text' onChange={nameChangeHandler}/>
                    <InputField placeholder='Calories' type='number' onChange={calorieChangeHandler}/>
                </div>
                <div className='form-macros'>
                    <InputField placeholder='Protein Amount (g)' type='number' onChange={proteinChangeHandler}/>
                    <InputField placeholder='Carbs Amount (g)' type='number' onChange={carbsChangeHandler}/>
                    <InputField placeholder='Fat Amount (g)' type='number' onChange={fatChangeHandler}/>
                </div>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
}