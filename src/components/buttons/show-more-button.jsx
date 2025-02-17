import './show-more-button.css'


function ShowMore({ cardsCounter, setCardsCounter }) {

    const handleShow = ((e) => {
        e.preventDefault()
        setCardsCounter(cardsCounter + 10)
        console.log(cardsCounter)
    })


    return (
        <>
            <button className='show-more' onClick={handleShow}> Show More Pokémons </button>
        </>
    )
}

export default ShowMore
