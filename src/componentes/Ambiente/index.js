import Planta from '../Planta'
import './Ambiente.css'

const Ambiente = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.plantas.length > 0) ? <section className='ambiente' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='plantas'>
                {props.plantas.map(planta => <Planta corDeFundo={props.corPrimaria} key={planta.nome} nome={planta.nome} especie={planta.especie} imagem={planta.imagem} />)}
            </div>
        </section>
            : ''
    )
}

export default Ambiente