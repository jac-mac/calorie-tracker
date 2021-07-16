import './Graph.css'
import  { Doughnut } from 'react-chartjs-2'
export default function Graph(props) {

    const data = {
        labels: ['Protein', 'Carbohydrates', 'Fat'],
        datasets: [
          {
            label: '# of Votes',
            // data: [props.data.protein, props.data.carbs, props.data.fat],
            data: [props.data.protein/(props.data.protein+props.data.carbs+props.data.fat)*100, props.data.carbs/(props.data.protein+props.data.carbs+props.data.fat)*100, props.data.fat/(props.data.protein+props.data.carbs+props.data.fat)*100],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
            <Doughnut data={data}
          
            />
        </div>
    )
}