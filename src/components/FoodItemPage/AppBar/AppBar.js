import './AppBar.css'
import { useState } from 'react'
export default function AppBar(props) {

    const [totalCalories, setTotalCalories] = useState(0)
    const [totalProtein, setTotalProtein] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalFat, setTotalFat] = useState(0)

    return (
        <div className='appbar'>
            <div className='title'>
                <h2>Totals</h2>
            </div>
            <div className='totals'>
                <h3>Calories: {props.data.calories}</h3>
                <h3>Protein: {props.data.protein}</h3>
                <h3>Carbs: {props.data.carbs}</h3>
                <h3>Fat: {props.data.fat}</h3>
            </div>
        </div>
    )
}