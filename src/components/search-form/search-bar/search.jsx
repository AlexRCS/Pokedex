import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InfoCard from '../../cards/info-cards/info-card';

import './search.css';

function Search() {
  const [searchData, setSearchData] = useState(null);
  const [value, setValue] = useState('');
  const [showInfoCard, setShowInfoCard] = useState(false)
  const [searchList, setSearchList] = useState([])
  const filterListRef = useRef()

  const fetchList = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
      setSearchList(response.data.results)
    } catch (error) {
      console.error('problema no fetchList', error)
    }
  }
  
  useEffect(() => {
    const handleClickOut = (event) => {
      if (filterListRef.current && !filterListRef.current.contains(event.target)) {
        setValue('');
      }
    };
  
    document.addEventListener('mousedown', handleClickOut);
    return () => document.removeEventListener('mousedown', handleClickOut);
  }, []);

  const fetchData = async (search) => {
    if (!search) return;

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      setSearchData({
        name: response.data.name,
        type: response.data.types.map((t) => t.type.name),
        move: response.data.moves.map((m) => m.move.name),
        ability: response.data.abilities.map((a) => a.ability.name),
        image: response.data.sprites.other['official-artwork'].front_default,
      });
      setShowInfoCard(true)
    } catch (error) {
      console.error('problema n fetch api', error);
      setSearchData(null);
      setShowInfoCard(false);
    }
  };


  const filteredPokemons = searchList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      fetchData(value.trim())
      setValue('')
    }
  };

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit} ref={filterListRef}>
        <div className="search-bar">
          <input className="search-line" type="text" placeholder="Pikachu" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="search-icon" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          {value.length > 2 && (
          <ul className='filter-search'>{filteredPokemons.map((pokemon) => (
            <li key={pokemon.name} onClick={() => { setValue(pokemon.name).fetchData(pokemon.name) }}>{pokemon.name}</li>))}
          </ul>
        )}
        </div>
      </form>
      {showInfoCard && searchData && (<InfoCard infoCard={searchData} setInfoCard={setShowInfoCard} />)}
    </div>
  );
}

export default Search;