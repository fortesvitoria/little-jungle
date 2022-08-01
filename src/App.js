import {useState} from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Ambiente from './componentes/Ambiente';
import Rodape from './componentes/Rodape';


function App() {

  const ambientes = [

    {
      nome: 'Sol pleno',
      corPrimaria: '#BDA34E',
      corSecundaria: '#e0d6b8',
    },
    {
      nome: 'Meia-sombra',
      corPrimaria: '#5E9459',
      corSecundaria: '#bfddbc',
    },
    

  ]

  const [plantas, setPlantas] = useState ([])

  const aNovaPlantaAdicionada = (planta) => {
    setPlantas([...plantas, planta])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario ambientes={ambientes.map(ambiente => ambiente.nome)} aPlantaCadastrada={planta => aNovaPlantaAdicionada(planta)}/>

     {ambientes.map (ambiente => <Ambiente 
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
