import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from '../components/cards/card/card'
import ShowMore from "../components/buttons/show-more/show-more-button";
import { useThemeContext } from '../contexts/themeContext'
import InfoCard from "../components/cards/info-cards/info-card";
import { useNavigate } from "react-router-dom";
import ThemeToggler from '../components/buttons/theme-toggle/theme-toggler';
import SelectType from "../components/search-form/select-type/select-type";

import './types.css'

function TypesPage() {
    const { type } = useParams();
    const navigate = useNavigate()
    const [pokemonList, setPokemonList] = useState([]);
    const [cardsCounter, setCardsCounter] = useState(10);
    const { theme } = useThemeContext();
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        const fetchByType = async () => {
            if (!type) return;
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
                const pokemonData = response.data.pokemon;

                const pokemonDetails = await Promise.all(
                    pokemonData.map(async (p) => {
                        const pokeResponse = await axios.get(p.pokemon.url);
                        return {
                            name: pokeResponse.data.name,
                            type: pokeResponse.data.types.map((t) => t.type.name),
                            move: pokeResponse.data.moves.map((m) => m.move.name),
                            ability: pokeResponse.data.abilities.map((a) => a.ability.name),
                            image: pokeResponse.data.sprites.other['official-artwork'].front_default,
                        };
                    })
                );
                setPokemonList(pokemonDetails);
            } catch (error) {
                console.error(error);
            }
        };
        fetchByType();
    }, [type]);

    const handleTitleClick = () => {
        navigate(`/`);
    };

    return (
        <>
            <section className={`home-container-${theme}`}>
                <div className='title-theme'>
                    <h1 onClick={handleTitleClick}>Pokémons type: {type.toUpperCase()}</h1>
                    <ThemeToggler />
                    <SelectType />
                </div>
                <section className="cards">
                    {pokemonList.slice(0, cardsCounter).map((pokemon) => (
                        <Card key={pokemon.name} pokedexData={pokemon} onCardClick={setSelectedPokemon} />
                    ))}
                </section>
                <ShowMore cardsCounter={cardsCounter} setCardsCounter={setCardsCounter} />
                {selectedPokemon && (
                    <InfoCard infoCard={selectedPokemon} setInfoCard={setSelectedPokemon} />
                )}
            </section>
        </>
    );
}

export default TypesPage;
