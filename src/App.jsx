import { useState } from 'react';

import Perfil from './components/Perfil'
import ReposList from './components/ReposList';

import './global.css'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {nomeUsuario.length > 4 ? (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      ) : (
        <div className="container home">
          <h1>Bem vindo ao buscador de perfis do github</h1>
          <div className='userForm'>
            <label className='userFormLabel'>Digite o nome do perfil que deseja buscar</label>
            <input className='enterUser' type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
            <button className='userBtn'>Buscar perfil</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App;