import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Segunda = () => {
    const RadioStore = useStoreState(state => state.Radio);
    const setRadioStore = useStoreActions(state => state.setRadio)
    const Radio2Store = useStoreState(state => state.Radio2);
    const setRadio2Store = useStoreActions(state => state.setRadio2)
    const[radio, setRadio] = useState(RadioStore);
    const[radio2, setRadio2] = useState(Radio2Store);

    function salvar(){
        setRadioStore(radio);
        setRadio2Store(radio2);
      }

    return (
        <div align="center" class="design">
            <h3>Pesquisa Streaming</h3>
            <fieldset>
            <label>
                <br/>
                Você utiliza alguma plataforma de Stream?
                <br/><br/>
                <input type="radio" value="Não" checked={radio === "Não"} onChange={(event) => setRadio(event.target.value)} name="option" /> Não
                <input type="radio" value="Sim" checked={radio === "Sim"} onChange={(event) => setRadio(event.target.value)} name="option" /> Sim
                <br/><br/>
            </label>
            

            {radio === "Sim" &&  
                <label>
                <br/>
                Qual?
                <br/><br/>
                <input type="radio" value="Netflix" checked={radio2 === "Netflix"} onChange={(event) => setRadio2(event.target.value)} name="option2" /> Netflix
                <input type="radio" value="AmazonPrime" checked={radio2 === "AmazonPrime"} onChange={(event) => setRadio2(event.target.value)} name="option2" /> Amazon Prime
                <input type="radio" value="HBO" checked={radio2 === "HBO"} onChange={(event) => setRadio2(event.target.value)} name="option2" /> HBO
                <br/><br/>
            </label>
            }

            <Link to="/"><button> Anterior </button> </Link>
            <Link to="/terceira"><button onClick={salvar}>Próximo </button></Link>
            </fieldset>
        </div>
    );
}

export default Segunda;