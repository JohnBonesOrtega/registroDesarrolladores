import React ,{useState}from 'react';
import Listado from './Components/Listado'
import Formulario from './Components/DeveloperEdit';
import DeveloperContext from './State';
import './App.css';

function App() {
  const [developers, setDevelopers] = useState([])
  const [developerEdit, setDeveloperEdit] = useState();
  return (
    <DeveloperContext.Provider
      value={{developers, setDevelopers: developers => setDevelopers(developers), developerEdit, setDeveloperEdit: developer => setDeveloperEdit(developer)}}
    >
      <div className="App">
        <header className="App-header">
          <p>
            Desarrolladores
        </p>
        </header>
        <div className="App-body">
          <Formulario />
          <Listado />
        </div>
      </div>
    </DeveloperContext.Provider>
  );
}

export default App;
