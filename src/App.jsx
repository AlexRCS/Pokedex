import { useState } from 'react'
import './App.css'

import PokeData from './components/pokedex-data'
import Search from './components/search-form/search'
import ShowMore from './components/buttons/show-more-button'


const App = () => {

  const [cardsCounter, setCardsCounter] = useState(10)


  return (
    <>
      <section className='home-container'>
        <h1>Pokemon</h1>
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

export default App
