import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import axios from 'axios';
import { useQuery } from "react-query"




const API = () =>{
    const[axiosdata, setAxiosdata] = useState('');
    const[artista, setArtista] = useState('');
    const[clicar, setClicar] = useState(false);
    
    const Artististapi = () => {
        function dataxios (){
            axios.get(`https://www.vagalume.com.br/${artista}/index.js`).then( api => setAxiosdata(api.data))
            return axiosdata;
        }
        const {data, isLoading} = useQuery('musicas', dataxios)
        return (
            <div>
            {data ? (data.artist.desc): <p>Carregando</p>}
            {data ? (data.artist.albums.item.map(album => <li>{album.desc}</li>)): <p>Carregando</p>}

            </div>
        )
    }

    
    
    
    return (
        
        <div class="design" align="center">
            <h3 align="center"> API música </h3>
            <fieldset>

            
            <p>Encontre o nome dos álbuns de sua banda favorita</p>
            Insira o nome da banda:<input type="text" placeholder="Ex.:U2, Queen..." align="center" value={artista} 
            onChange={event => setArtista(event.target.value)}/>
            <br/>
            <button onClick={( )=> setClicar(!clicar) }>Pesquisar</button>
            <Link to="/quarto"><button>Voltar</button></Link>
            
            {clicar && <Artististapi/>}
            

            </fieldset>
        </div>
        
    )

}


export default API