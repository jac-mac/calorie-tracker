import './InputField.css'

export default function InputField(props) {
    return (
        <input placeholder={props.placeholder} type={props.type} onChange={props.onChange} value={props.value}></input>
    )
}