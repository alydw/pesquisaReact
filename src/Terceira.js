import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const Terceira = () => {
    const GenerosStore = useStoreState(state => state.Generos);
    const setGenerosStore = useStoreActions(state => state.setGeneros)
    const[generos, setGeneros] = useState(GenerosStore)

    function salvar(genero){
        if(generos.includes(genero)){
            setGeneros(generos.filter(generoa => generoa!== genero))
        } else {
            setGeneros([...generos, genero])
        }
    }

    function salvar2(){
        setGenerosStore(generos);
      }

    console.log(generos)
    return (
        <div align="center" class="design">
            <h3>Pesquisa Streaming</h3>
            <fieldset>
            <label>
                Quais seus gêneros favoritos?
                <br/><br/>
            
            Ação <input type="checkbox" checked={generos.includes("Ação")} value="acao" onClick={() => salvar("Ação")}/>
            <br/>
            Terror <input type="checkbox" checked={generos.includes("Terror")} value="terror" onClick={() => salvar("Terror")} />
            <br/>
            Ficção <input type="checkbox" checked={generos.includes("Ficção")} value="ficcao" onClick={() => salvar("Ficção")} />
            <br/>
            Comédia <input type="checkbox" checked={generos.includes("Comédia")} value="comedia"  onClick={() => salvar("Comédia")} />
            <br/>
            Romance <input type="checkbox" checked={generos.includes("Romance")} value="romance" onClick={() => salvar("Romance")} />
            <br/>
            </label>
            <br/><br/>
            <Link to="/segunda"><button onClick={salvar2}>Anterior</button></Link>
            <Link to="/quarto"><button onClick={salvar2}>Próximo</button></Link>
            </fieldset>
        </div>
    );
}

export default Terceira;