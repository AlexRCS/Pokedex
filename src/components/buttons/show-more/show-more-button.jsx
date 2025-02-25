import './show-more-button.css'
import { useThemeContext } from '../../../contexts/themeContext'

function ShowMore({ cardsCounter, setCardsCounter }) {
    const { theme } = useThemeContext()

    const handleShow = ((e) => {
        e.preventDefault()
        setCardsCounter(cardsCounter + 10)
        console.log(cardsCounter)
    })


    return (
        <>
            <button className={`show-more ${theme}`} onClick={handleShow}> Show More Pokémons </button>
        </>
    )
}

export default ShowMore
