
import TMDbLogo from './assets/TMDb.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('./login')
    }

    return (
        <div className='App'>
            <div>
                <img src={TMDbLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Welcome!</h1>
            <div className="button">
                <button onClick={handleClick}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Home
