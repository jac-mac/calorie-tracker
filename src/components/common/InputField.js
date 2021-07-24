import './InputField.css'

export default function InputField(props) {
    return (
        <div>
            <label for={props.id}>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} onChange={props.onChange} value={props.value} id={props.id} autocomplete='off' required></input>
        </div>
    )
}