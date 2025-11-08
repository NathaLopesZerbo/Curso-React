import { useState, useEffect } from "react";
import './style.css'
export default function App() {
  //usf
  const [nutri, setNutri] = useState([]);

  //uef
  // useEffect(() => {
  //   function loadingApi(){
  //     let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
  //     fetch(url)
  //     .then( (r) => r.json())
  //     .then( (json) => {
  //       setNutri(json);
  //     })
     
  //   }
  //   loadingApi()
  // }, []);

useEffect(() => {
  async function loadingApi() {
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    const response = await fetch(url)
    console.log('response', response);
    const data = await response.json()
    console.log('data', data)
    setNutri(data);
  }
  loadingApi()
}, []);


 return (
   <div className="container">
      <header className="header">
        <strong>React Nutri</strong>
       </header>

        {nutri.map((item) => {
          return(
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="imagem" />
              <p className="subtitulo">{item.subtitulo}</p>
              <a href={item.capa} className="botao">ACESSAR</a>
            </article>
          )
        })}
     
   </div>
 );
}
