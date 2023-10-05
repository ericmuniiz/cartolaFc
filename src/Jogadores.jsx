import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css'


function Jogadores() {

    const [jogadores, setJogadores] = useState();
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://api.cartola.globo.com/atletas/mercado/${id}`);
            const data = await response.json();

            setJogadores(data);
            console.log(data);

        }

        fetchData()

    }, [])




    return (
        <>

            <div>
                <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png" id='img_cartola' />
            </div>
            {jogadores && (
                <>
                    <div className="container">


                        <h1>Jogadores do {jogadores.clubes[id].nome}</h1>
                        
                        {jogadores.atletas && jogadores.atletas.map((e) => (
                            <>
                                <div className='times_e_jogadores'>
                                    <img src={e.foto && e.foto.replace('FORMATO', '220x220')} />
                                    <h3>{e.nome}</h3>
                                </div>


                            </>
                        ))}
                    </div>
                </>

            )}
        </>
    )

}

export default Jogadores;