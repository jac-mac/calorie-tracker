import './InputField.css'

export default function InputField(props) {
    return (
        <div style={{display: 'inline'}}>
            <input placeholder={props.placeholder} type={props.type} onChange={props.onChange} value={props.value} id={props.id} required></input>
            <label for={props.id}>{props.placeholder}</label>
        </div>
    )
}