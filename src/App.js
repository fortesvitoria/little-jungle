import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Ambiente from './componentes/Ambiente';
import Rodape from './componentes/Rodape';


function App() {

  const ambientes = [

    {
      nome: 'Sol pleno',
      corPrimaria: ' rgba(241, 175, 52, 0.671)',
      corSecundaria: 'rgba(241, 239, 202, 0.671)',
    },


    {
      nome: 'Meia-sombra',
      corPrimaria: 'rgba(28, 100, 62, 0.788)',
      corSecundaria: 'rgba(205, 236, 220, 0.61)',
    },


  ]

  const [plantas, setPlantas] = useState([])

  const aNovaPlantaAdicionada = (planta) => {
    setPlantas([...plantas, planta])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario ambientes={ambientes.map(ambiente => ambiente.nome)} aPlantaCadastrada={planta => aNovaPlantaAdicionada(planta)} />

      {ambientes.map(ambiente => <Ambiente
        key={ambiente.nome}
        nome={ambiente.nome}
        corPrimaria={ambiente.corPrimaria}
        corSecundaria={ambiente.corSecundaria}
        plantas={plantas.filter(planta => planta.ambiente === ambiente.nome)}
      />)}


      <Rodape />
    </div>
  );
}

export default App;
