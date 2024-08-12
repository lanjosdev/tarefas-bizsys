// Funcionalidades / Hooks / Libs:
import { useState, useEffect, useRef } from 'react';
import { PROJETOS_GET_ALL } from '../../API/requestAPI';

// Assets:


// Estilos:
import './style.css';


export default function Admin() {


//   useEffect(()=> {
//     async function carregaUrlProjetos() {  
//       let listaUrl = [];   
//       inputRef.current.value = (intervaloRef.current)/1000;

//       //=> Carrega urls
//       try {
//         const response = await PROJETOS_GET_ALL();
//         console.log(response);
        
//         for(let projeto of response) {
//           listaUrl.push(projeto.url);
//         }

//         setUrlsProjetos(listaUrl);
//         // startAutomatic(); //useCallback
//       } 
//       catch(erro) {
//         console.log('Deu erro: ', erro);
//       }
//     }
//     carregaUrlProjetos();
//   }, []);


  
    return (
        <div className='Admin'>

            <main className="grid">
                <header>
                    <h1>LOGO</h1>
                    <p>Abaixo você pode adicionar, editar e remover os links (url) de cada projeto do ActiveCollab.</p>
                </header>

                <div className='content-admin'>
                    <form className="add-admin">
                        <label>
                        <input type="text" placeholder='Digite aqui'/>
                        </label>

                        <button className='btn btn-primary'>
                        <ion-icon name="search-outline"></ion-icon>
                        {/* AQUI VAI SER ADD LINK */}
                        </button>
                    </form>
        
                </div>
            </main>
            
        </div>
    )
}