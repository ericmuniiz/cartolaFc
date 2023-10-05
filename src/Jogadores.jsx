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
            {jogadores && (
                <>
                    <div>
                        <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png" id='img_cartola' />
                    </div>
                        <div className="container">


                        <h1>Jogadores do {jogadores.clubes[id].nome}</h1>
                        {jogadores.atletas.map((e) => (
                            <>
                                {/* Esse Object.values é pra poder fazer o map dar certo, o map não tava deixando, ele não conseguia dar map no JSON, então esse negócio transfroma em Array */}

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