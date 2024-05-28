import './TextField.css'

export const TextField = (props) => {
    
    const placeholderText = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="text-camp">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderText} />
        </div>
    )
}
