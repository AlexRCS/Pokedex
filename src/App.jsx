import { useState } from 'react'
import { useThemeContext } from './contexts/themeContext'
import styled from 'styled-components'
import './App.css'
import { useNavigate } from 'react-router-dom'

import PokeData from './components/pokedex-data'
import Search from './components/search-form/search-bar/search'
import ShowMore from './components/buttons/show-more/show-more-button'
import ThemeToggler from './components/buttons/theme-toggle/theme-toggler'
import SelectType from './components/search-form/select-type/select-type'
import PokedexLogo from './assets/PokedexLogo.png'


const App = () => {

  const { theme } = useThemeContext()

  const [cardsCounter, setCardsCounter] = useState(10)

  const navigate = useNavigate()

  const handleTitleClick = () => {
    navigate(`/`)
    window.location.reload()
  };

  return (
    <>
      <section className={`home-container-${theme}`}>
        <div className='title-theme'>
          <Title onClick={handleTitleClick}><img src={PokedexLogo}/></Title>
          <ThemeToggler />
          <SelectType />
        </div>
        <Search />
        <section className='cards'>
          {Array.from({ length: cardsCounter }).map((_, index) => (
            <PokeData key={index} />
          ))}
        </section>
        <ShowMore cardsCounter={cardsCounter} setCardsCounter={setCardsCounter} />
      </section >
    </>
  )
}

const Title = styled.h1`
cursor: pointer;
margin: 0;
`
//Utilizei o Styled-components apenas nesse trecho pois não vi muita funcionalidade dele no restante do codigo e geraria muita poluição!


export default App
