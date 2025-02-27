import { useEffect, useRef } from 'react'
import CloseButton from '../../buttons/close-btn/close-button';
import { useThemeContext } from '../../../contexts/themeContext';

import './info-card.css'


function InfoCard({ infoCard, setInfoCard }) {

  const { theme } = useThemeContext()

  const infoCardRef = useRef()

  useEffect(() => {
    const handleClickOut = (event) => {

      if (infoCardRef?.current && !infoCardRef.current.contains(event.target)) {
        setInfoCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOut);

    return () => document.removeEventListener('mousedown', handleClickOut);
  }, [!infoCard]);

  return (
    <>
      {infoCard && (
        <div className='transparent-shield'>
          <section className='info-card' ref={infoCardRef} >
            <CloseButton setInfoCard={setInfoCard} />
            <div className={`info-name-img ${theme}`} >
              <img className='info-img' src={infoCard.gif ? infoCard.gif : infoCard.image ? infoCard.image : "imagem não disponivel"} alt="pokemon image" />
              <h1 className='info-name'>{infoCard.name}</h1>
              <div className='info-type'>
                {Array.isArray(infoCard.type) && infoCard.type.map((type, index) => (
                  <h5 key={index}>{type}</h5>
                ))}
              </div>
            </div>
            <div className={`info-lists ${theme}`}>
              <ul className='info-abilities'>
                <h3>Abilities</h3>
                {Array.isArray(infoCard.ability) && infoCard.ability.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
              </ul>
              <div className='info-moves'>
                <h3>Moves</h3>
                {Array.isArray(infoCard.move) && (() => {
                  const columnsLength = Math.ceil(infoCard.move.length / 3)

                  const columns = infoCard.move.reduce((acc, move, index) => {
                    const columnIndex = Math.floor(index / columnsLength)
                    if (!acc[columnIndex]) acc[columnIndex] = []
                    acc[columnIndex].push(move)
                    return acc
                  }, [])
                  return columns.map((moves, colIndex) => (
                    <ul key={colIndex}>
                      {moves.map((move, moveIndex) => (
                        <li key={moveIndex}>{move}</li>
                      ))}
                    </ul>
                  ))

                })()}
              </div>
            </div>
          </section >
        </div>
      )
      }
    </>
  )
}

export default InfoCard
