import './close-button.css'

function CloseButton({ setInfoCard }) {

    const handleClose = ((e) => {
        e.preventDefault()
        setInfoCard(null)
    })

    return (
        <div>
            <button className='close-info' onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default CloseButton
