import './AppBar.css'
export default function AppBar(props) {

    const total_calories = props.food[0].calories + props.food[1].calories + props.food[2].calories;
    const total_protein = props.food[0].protein + props.food[1].protein + props.food[2].protein;
    const total_carbs = props.food[0].carbs + props.food[1].carbs + props.food[2].carbs;
    const total_fat = props.food[0].fat + props.food[1].fat + props.food[2].fat;
    return (
        <div className='appbar'>
            <div className='title'>
                <h2>Totals</h2>
            </div>
            <div className='totals'>
                <h3>Calories: {total_calories}</h3>
                <h3>Protein: {total_protein}</h3>
                <h3>Carbs: {total_carbs}</h3>
                <h3>Fat: {total_fat}</h3>
            </div>
        </div>
    )
}