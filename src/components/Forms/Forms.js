import './Forms.css'
import TextField from '../TextField'
import DropDownMenu from '../DropDownMenu'
import Button from '../Button'
import { useState } from 'react'


export const Forms = (props) => {

    const callBack = (event) => {
        event.preventDefault()
        props.aoCadastrar({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem, 
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCargo('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className='forms'>
            <form onSubmit={callBack}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio = {true} label="Nome" placeholder="Digite seu nome:"/>
                <TextField valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo:"/>
                <TextField valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem:"/>
                <DropDownMenu valor={time} aoAlterado={valor => setTime(valor)} obrigatorio = {true} label="Times: " itens={props.times} />
                <Button>Criar Crad</Button>
            </form>
        </section>
    )
}

