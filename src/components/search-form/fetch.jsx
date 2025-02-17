import { useEffect } from 'react'
import axios from 'axios'


function Fetch({ pokedexData, setPokedexData }) {


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


}

export default Fetch
