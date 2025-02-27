import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../../contexts/themeContext';
import axios from 'axios';



import './select-type.css'

function SelectType() {
    
    const [types, setCardByType] = useState([])
    const navigate = useNavigate()
    const { theme } = useThemeContext()


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/type`)
            setCardByType(response.data.results)
            try {

            } catch (error) {
                console.error(error.message)
            }
        };
        fetchData()
    }, [])

    const handleChange = (e) => {
        const selectedType = e.target.value;
        if (selectedType) {
            navigate(`/${selectedType}`)
        }
    };

    return (
        <div>
            <select className={`select-type ${theme}`} onChange={handleChange}>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>{type.name}</option>))}
            </select>
        </div >
    )
}



export default SelectType