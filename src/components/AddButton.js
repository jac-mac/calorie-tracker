import './AddButton.css'
export default function AddButton(props) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className='show-form' onClick={props.onClick}>
            <text className= 'plus-sign'>+</text>
        </button>
    )
}