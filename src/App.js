import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Teams from './components/Teams';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),      
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),      
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    { 
      id: uuidv4(),     
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {      
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const [colaboradores, setColaborador] = useState([])

  const aoNovoCadastro = (colaborador) => {
    setColaborador([...colaboradores, {...colaborador, id: uuidv4()}])
  }

  function DeletarColaborador(id) {
    setColaborador(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function MudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaborador(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }


  return (
    <div className="App">
      <Banner />
      <Forms 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} 
      aoCadastrar = {colaborador => aoNovoCadastro(colaborador)}
      />
      <section className="times">
        {times.map((time, indice) =>
                      <Teams
                        aoFavoritar={resolverFavorito}
                        mudarCor={MudarCorDoTime}
                        key={indice}
                        time={time}
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                        aoDeletar={DeletarColaborador}
                      />
                  )}
      </section>
      <Footer />
      
    </div> 
  );
}

export default App;
