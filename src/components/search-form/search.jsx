import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from '../card/info-card';

import './search.css';

function Search() {
  const [searchData, setSearchData] = useState(null);
  const [value, setValue] = useState('');
  const [showInfoCard, setShowInfoCard] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!value) return;

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
        setSearchData({
          name: response.data.name,
          type: response.data.types.map((t) => t.type.name),
          move: response.data.moves.map((m) => m.move.name),
          ability: response.data.abilities.map((a) => a.ability.name),
          image: response.data.sprites.other['official-artwork'].front_default,
        });
        setShowInfoCard(true)
      } catch (error) {
        console.error(error);
        setShowInfoCard(false)
      }
    };

    fetchData();
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value.trim());
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input className="search-line" type="text" placeholder="Pikachu" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="search-icon" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
      {showInfoCard && searchData && (<InfoCard infoCard={searchData} setInfoCard={setShowInfoCard} />)}
    </div>
  );
}

export default Search;