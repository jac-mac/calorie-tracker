import FoodItem from './FoodItem'
import './FoodsList.css'
export default function FoodsList (props) {
    return (
        <div className='food-container'>
            {props.food.map((foodItem) => (
                <FoodItem 
                    key={foodItem.id}
                    name={foodItem.name}
                    calories={foodItem.calories}
                    protein={foodItem.protein}
                    carbs={foodItem.carbs}
                    fat={foodItem.fat}
                />
            ))}
        </div>
    )
}