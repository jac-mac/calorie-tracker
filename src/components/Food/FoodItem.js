import './FoodItem.css'
export default function FoodItem(props) {
    return (
        <div className='food-item'>
            <div className='food-item__base'>
                <h2>{props.name}</h2>
                <span>{props.calories} calories</span>
            </div>
            <div className='macro-container'>
                <div className='protein-count'>
                    <h3>Protein</h3>
                    {props.protein}g
                </div>
                <div className='carbs-count'>
                    <h3>Carbs</h3>
                    {props.carbs}g
                </div>
                <div className='fat-count'>
                    <h3>Fat</h3>
                    {props.fat}g
                </div>
            </div>

        </div>
    )
}