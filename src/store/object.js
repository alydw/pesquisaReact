import {action} from 'easy-peasy';



export const store2 = {Nome:'',
Streaming:'',
Radio:'',
Radio2:'',
Generos:[],

setNome:action((state, payload) => {state.Nome = payload}),
setStreaming:action((state, payload) => {state.Streaming = payload}),
setRadio:action((state, payload) => {state.Radio = payload}),
setRadio2:action((state, payload) => {state.Radio2 = payload}),
setGeneros:action((state, payload) => {state.Generos = payload})
}

