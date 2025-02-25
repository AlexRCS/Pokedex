import { useState, useEffect } from 'react'
import axios from 'axios';

import Card from './cards/card/card';
import InfoCard from './cards/info-cards/info-card'

function PokeData() {
    
    const [infoCard, setInfoCard] = useState(null)

    const [pokedexData, setPokedexData] = useState({
        id: `${Math.floor(Math.random() * 1025)}`,
        name: '',
        ability: [],
        move: [],
        type: [],
        image: '',
    })


        useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedexData.id}`)
                    .catch((error) => console.error(error));
                setPokedexData((prevData) => ({
                    ...prevData,
                    name: response.data.name,
                    type: response.data.types.map((t) => t.type.name),
                    move: response.data.moves.map((m) => m.move.name),
                    ability: response.data.abilities.map((a) => a.ability.name),
                    image: response.data.sprites.other['official-artwork'].front_default,
                }))
                console.log(response.data)
            }
            if (pokedexData.id <= 1025) { fetchData() }
            else {
                console.log('pokemon não encontrdo')
            }
        }, [pokedexData.id]);



    return (
        <>
            <Card pokedexData={pokedexData} onCardClick={setInfoCard} />
            <InfoCard infoCard={infoCard} setInfoCard={setInfoCard} />
        </>
    )

}

export default PokeData
