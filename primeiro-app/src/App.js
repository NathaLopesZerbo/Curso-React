import { useState } from 'react';

//Getter/Setter
export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({})

  function handleRegister(e){
    e.preventDefault();

    alert('Usuario Registrado !');

    setUser({
      nome: nome,
      idade: idade,
      email: email
    });

  }

 return (
   <div>
    <h1>Cadastre-se</h1>
     <form onSubmit={handleRegister}>
        <label>Nome: </label>
        <br />
          <input 
            placeholder='Digite seu Nome:' 
            value={nome}
            onChange={ (e) => setNome(e.target.value) }
          />
        <br />

        <label>Email:</label>
        <br />
          <input 
            placeholder='Digite seu Email:' 
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        <br />

       <label>Idade: </label>
       <br />
          <input 
            placeholder='Digite seu Idade:' 
            value={idade}
            onChange={ (e) => setIdade(e.target.value) }
          />
        <br />
        <button type='submit'>Registar</button>
     </form>

     <br />
     <div>
        <span>Bem Vindo:{user.nome}</span> <br />
        <span>Idade:{user.idade}</span> <br />
        <span>Email:{user.email}</span> <br />
     </div>
   </div>
 );
}
