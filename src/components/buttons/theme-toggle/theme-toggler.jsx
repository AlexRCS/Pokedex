import './theme-toggler.css'
import { useThemeContext } from '../../../contexts/themeContext'

function ThemeToggler() {

    const {theme, handleToggle} = useThemeContext()

    return (
        <div>
            <button className={`theme-btn ${theme}`} onClick={handleToggle}><i className={`fa-solid fa-circle-half-stroke ${theme}`}></i></button>
        </div>
    )
}

export default ThemeToggler