import './TextField.css'

export const TextField = (props) => {
    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className={`text-camp camp-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={`${props.placeholder}`} 
            />
        </div>
    )
}
