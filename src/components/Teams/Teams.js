import Card from '../Card'
import './Teams.css'

export const Teams = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaboradores => <Card corDeFundo={props.corPrimaria} key={colaboradores.nome} nome={colaboradores.nome} cargo={colaboradores.cargo} imagem={colaboradores.imagem}/>)}
            </div>
        </section>
        : ''
    )
   
}