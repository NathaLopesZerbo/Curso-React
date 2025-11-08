import { useState, useEffect } from 'react';

//Getter/Setter
export default function App() {
  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([
    'teste'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  function handleRegister(e){
    e.preventDefault();

    //Spread Operator = Renderizar oq já está na listagem
    setTarefas([...tarefas, input])
    setInput('');
  }

 return (
   <div>
    <h1>Cadastre-se</h1>
     <form onSubmit={handleRegister}>
        <label>Nome da Tarefa: </label>
        <br />
          <input 
            placeholder='Digite sua Tarefa:' 
            value={input}
            onChange={ (e) => setInput(e.target.value) }
          />
        <br />
        <button type='submit'>Registar</button>
     </form>

     <br />

     <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}> {tarefa}</li>
        ))}
     </ul>

   </div>
 );
}
