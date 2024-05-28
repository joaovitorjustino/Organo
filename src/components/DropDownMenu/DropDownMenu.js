import './DropDownMenu.css'

export const DropDownMenu = (props) => {
    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};