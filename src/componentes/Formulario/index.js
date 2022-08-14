import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [imagem, setImagem] = useState('')
    const [ambiente, setAmbiente] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aPlantaCadastrada({
            nome,
            especie,
            imagem,
            ambiente
        })
        setNome('')
        setEspecie('')
        setImagem('')
        setAmbiente('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>PREENCHA OS DADOS PARA CRIAR O CARD DA PLANTA</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome popular da planta"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Espécie"
                    placeholder="Digite a espécie da planta"
                    valor={especie}
                    aoAlterado={valor => setEspecie(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Ambiente"
                    itens={props.ambientes}
                    valor={ambiente}
                    aoAlterado={valor => setAmbiente(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario