// Hooks / Libs:
import { useState, useEffect, useRef } from 'react';

// JSON:
import jsonProjetos from '../public/projetos.json';

// Assets:
import iconPlay from './assets/play-circle.svg';
import iconStop from './assets/stop-circle.svg';
import iconClock from './assets/clock.svg';

// Estilos:
import './styles/global.css';
import './App.css';


export default function App() {
  const [urlsProjetos, setUrlsProjetos] = useState([]);
  const [indice, setIndice] = useState(0);
  const [play, setPlay] = useState(false);
  const [config, setConfig] = useState(false);

  const intervaloRef = useRef(45000);
  const inputRef = useRef(null);
  const stopRef = useRef(false);


  useEffect(()=> {
    async function carregaUrlProjetos() {  
      let listaUrl = [];   
      inputRef.current.value = (intervaloRef.current)/1000;

      try {
        const response = await jsonProjetos;
        
        for(let projeto of response) {
          listaUrl.push(projeto.url);
        }

        setUrlsProjetos(listaUrl);
        // startAutomatic(); //useCallback
      } 
      catch(erro) {
        console.log('Deu erro:');
        console.log(erro);
      }
    }
    carregaUrlProjetos();
  }, []);

  
  // function changeIndice() {lucas.anjos@bizsys.com.br
  const handleStart = ()=> {
    console.log('INICIO');
    setPlay(true);
    stopRef.current = false;
    
    const intervalId = setInterval(() => {
      if(stopRef.current) {
        console.log('Stop setIntervall');
        clearInterval(intervalId);
        return;
      }
      // Increment the index to move to the next content
      console.log('setIntervall');
      setIndice((prevIndex) => (prevIndex + 1) % urlsProjetos.length);
    }, intervaloRef.current);

    // return () => {
    //   clearInterval(intervalId); // Clean up the interval when the component unmounts
    // };
  };

  const handleStop = ()=> {
    console.log('STOP');
    setPlay(false);
    stopRef.current = true;
  };

  const handleSubmitTime = (e)=> {
    e.preventDefault();

    const newIntervalo = inputRef.current?.value;

    if(newIntervalo != '') {
      console.log('MUDA INTERVALO');
      intervaloRef.current = newIntervalo * 1000;
      setConfig(false);
    }
  }

  // function startAutomatic() {
  // setTimeout(handleStart, 15000);
  // }

  
  return (
    <div className='App'>

      <iframe 
        src={urlsProjetos[indice]}
        loading="eager"
        allowfullscreen="true"
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation">
      </iframe>

      <div className="setTime-container">
        <label htmlFor="toggle" onClick={()=> setConfig(!config)}>
          <img src={iconClock} alt="" />
        </label>
        <input type="checkbox" id="toggle" checked={config} />

        <form id="mostra" onSubmit={handleSubmitTime}>
          <input type="number" placeholder='seg' ref={inputRef} />

          <button>OK</button>
        </form>
      </div>

      <div className="btns-container">
        {!play
        ?
          <button className='btnStart' onClick={handleStart}>
            <img src={iconPlay} alt="" />
          </button>
        :
          <button className='btnStop' onClick={handleStop}>
            <img src={iconStop} alt="" />
          </button>
        }
      </div>
      
    </div>
  )
}