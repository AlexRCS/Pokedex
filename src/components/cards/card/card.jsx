    import { useThemeContext } from '../../../contexts/themeContext'

    import './card.css'


    function Card({ pokedexData, onCardClick }) {

        const { theme } = useThemeContext()

        const handleClick = (e) => {
            e.preventDefault()
            onCardClick(pokedexData)
        }

        return (
            <>
                <section className={`card ${theme}`} onClick={handleClick}>

                    <img className={`card-img ${theme}`} src={pokedexData.image} alt="pokemon image" />
                    <h1 className={`pokemon-name ${theme}`}>{pokedexData.name}</h1>
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
