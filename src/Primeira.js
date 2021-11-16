import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const Primeira = () =>{
    const NomeStore = useStoreState(state => state.Nome);
    const StreamingStore = useStoreState(state => state.Streaming);
    const setNomeStore = useStoreActions(state => state.setNome);
    const setStreamingStore = useStoreActions(state => state.setStreaming);
    const[nome, setNome] = useState(NomeStore);
    const[texto, setTexto] = useState(StreamingStore);

    const salvar = () => {
      setNomeStore(nome);
      setStreamingStore(texto);
    }

    return (
<div align="center" class="design">
      <h3>Pesquisa Streaming</h3>
      <form>
      <fieldset>
       <label>
        Nome: 
     <input type="text" name="name" value={nome} onChange={(event) => setNome(event.target.value)} />
       </label>
       <br/>
       <br/>
       <label>
         O que você acha sobre as plataformas de Streamings atuais?
       <br/>
       <br/>
       <textarea value={texto} onChange={(event) => setTexto(event.target.value)} placeholder=" Digite aqui...">
      </textarea>
      </label>
      <br/>
      <br/>
          
            <Link to="/segunda" ><button onClick={salvar}>Próximo</button></Link>
            </fieldset>
      </form>
    </div>
    );
}

export default Primeira;