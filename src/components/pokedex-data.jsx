import { useState } from 'react'

import Fetch from './search-form/fetch'
import Card from './card/card'
import InfoCard from './card/info-card'

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

    return (
        <>
            <Fetch pokedexData={pokedexData} setPokedexData={setPokedexData} />
            <Card pokedexData={pokedexData} onCardClick={setInfoCard}/>
            <InfoCard infoCard={infoCard} setInfoCard={setInfoCard} />
        </>
    )

}

export default PokeData
