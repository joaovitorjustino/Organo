import './Forms.css'
import TextField from '../TextField'
import DropDownMenu from '../DropDownMenu'
import Button from '../Button'
import { useState } from 'react'



export const Forms = ({aoCadastrar, times, cadastrarTime}) => {

    const callBack = (event) => {
        event.preventDefault()
        aoCadastrar({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem, 
            time: time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCargo('')
    }

    const callBackTime = (event) => {
        event.preventDefault() 
        cadastrarTime({ 
            nome: nomeTime, 
            cor: corTime
        })
        setNomeTime('')
        setCorTime('')
    }


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    return (
        <section className='forms'>
            <form onSubmit={callBack}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio = {true} label="Nome" placeholder="Digite seu nome:"/>
                <TextField valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo:"/>
                <TextField valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem:"/>
                <DropDownMenu valor={time} aoAlterado={valor => setTime(valor)} obrigatorio = {true} label="Times: " itens={times} />
                <Button>Criar Crad</Button>
            </form>
            <form onSubmit={callBackTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <TextField valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio = {true} label="Nome" placeholder="Digite o nome do time:"/>
                <TextField valor={corTime} aoAlterado={valor => setCorTime(valor)} obrigatorio = {true} label="Cor" type='color' placeholder="Digite a cor do time:"/>
                <Button>Criar um Time</Button>
            </form>
        </section>
    )
}

