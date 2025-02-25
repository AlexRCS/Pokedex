import { useState, useEffect } from 'react'
import axios from 'axios';

function SelectType() {

    const [types, setTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/type`)
            setTypes(response.data.results)
                .catch((error) => console.error(error));
        };
        fetchData()
    }, [])
    return (
        <div>
            <select className='select-type'>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>{type.name}</option>))}
            </select>
        </div>
    )
}

export default SelectType
