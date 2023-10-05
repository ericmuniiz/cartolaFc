import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Home() {

  const [times, setTimes] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch("https://api.cartola.globo.com/clubes");
      const data = await response.json();

      setTimes(data);
      console.log(data);

    }

    fetchData()

  }, [])



  return (
    <>
    <div>
      <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png" id='img_cartola' />
    </div>
    
    <div className='container'>
      {times && (
        <>
        
           {Object.values(times).map((e) => (
            <>
            {/* Esse Object.values é pra poder fazer o map dar certo, o map não tava deixando, ele não conseguia dar map no JSON, então esse negócio transfroma em Array */}
            
              
              <Link to={`/Jogadores/${e.id}`} key={e.id}>
                <div className='times_e_jogadores'>
                <div>
                  <img src={e.escudos["45x45"]}/>
                </div>
                <div className='nomeDoTime'>
                <h2>{e.nome}</h2>
                <p>{e.apelido}</p>
                </div>
                </div>
               
              </Link>
              
            
            
            </>
          ))}
        </>
      )}
   
    </div>
    </>


  )
}

export default Home
