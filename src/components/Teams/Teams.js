import Card from '../Card'
import './Teams.css'
import hexToRgba from 'hex-to-rgba';


export const Teams = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input 
                input type='color' 
                className='input-cor' value={time.cor} 
                onChange={evento => {mudarCor(evento.target.value, time.id);}} 
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'> 
                {colaboradores.map((colaborador, indice) => {
                    return <Card 
                        key={indice}
                        colaborador={colaborador}
                        corDeFundo={time.cor} 
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />
                })}            
            </div>
        </section>
    )    
}