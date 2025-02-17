import './card.css'

function Card({ pokedexData, onCardClick }) {


    const handleClick = (e) => {
        e.preventDefault()
        onCardClick(pokedexData)
    }

    return (
        <>
            <section className='card' onClick={handleClick}>

                <img className='card-img' src={pokedexData.image} alt="pokemon image" />
                <h1 className='pokemon-name'>{pokedexData.name}</h1>
                <div className='pokemon-type'>
                    {Array.isArray(pokedexData.type) && pokedexData.type.map((type, index) => (
                        <h3 key={index}>{type}</h3>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Card
