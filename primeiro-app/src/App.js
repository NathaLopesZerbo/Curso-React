import { useState } from 'react';

export default function App() {
  const [aluno, setAluno] = useState('Nathã')
  
  function handleChanceName(nome){
    setAluno(nome)
  }
  
 return (
   <div>
      <h1>Bem Vindo ao primeiro Projeto</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChanceName('Teste') }>Mudar Nome</button>
      <br />
   </div>
 );
}
