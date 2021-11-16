import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const Quarto = () => {
    const NomeStore = useStoreState(state => state.Nome);
    const setNomeStore = useStoreActions(state => state.setNome)
    const StreamingStore = useStoreState(state => state.Streaming);
    const setStreamingStore = useStoreActions(state => state.setStreaming)
    const RadioStore = useStoreState(state => state.Radio);
    const setRadioStore = useStoreActions(state => state.setRadio)
    const Radio2Store = useStoreState(state => state.Radio2);
    const setRadio2Store = useStoreActions(state => state.setRadio2)
    const GenerosStore = useStoreState(state => state.Generos);
    const setGenerosStore = useStoreActions(state => state.setGeneros);
   

   function limpar () {
    setRadioStore('');
    setRadio2Store('');
    setNomeStore('');
    setStreamingStore('');
    setGenerosStore([]);
   }

    return (
        <div align="center">
            <h3> Respostas da Pesquisa </h3>
            <fieldset>
           <label>
               Nome: <br/> {NomeStore}; <br/><br/>
               O que você acha sobre as plataformas de Streamings atuais?<br/> {StreamingStore}; <br/><br/>
               Você utiliza alguma plataforma de Stream?<br/>{RadioStore}; <br/><br/>
               Qual? <br/>{Radio2Store}; <br/><br/>
               Quais seus gêneros favoritos? {GenerosStore.map(genero => <li>{genero}</li>)} <br />
           </label>
           <br/>
           <Link to="/terceira"><button> Anterior </button></Link>
           <Link to="/"><button onClick={limpar}>Nova Pesquisa</button></Link>
           </fieldset>
        </div>

        
    )
}

export default Quarto;