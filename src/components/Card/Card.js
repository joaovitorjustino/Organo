import { AiFillCloseCircle, AiFillLike, AiOutlineLike  } from "react-icons/ai";
import './Card.css'

export const Card = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }
    
    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return(
        <div className='colaborador' >
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)}
            /> 
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem}  alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favorito'>
                    {colaborador.favorito 
                    ? <AiFillLike size={25} {...propsfavorito} color="#C2BC05"/> 
                    : <AiOutlineLike size={25} {...propsfavorito}/> 
                    }
                </div>
            </div>
        </div>
    )
}
