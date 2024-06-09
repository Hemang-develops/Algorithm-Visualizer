import { useNavigate } from "react-router-dom"
import AlgorithmIcon from '../../assets/Icons/AlgorithmIcon'
import { useState } from "react"
import './styles.css'

const Header = () => {
    const [toggleListItem, setToggleListItem] = useState(false);
    const navigate = useNavigate();

  return (
    <header>
        <nav className="navbar">
            <span className="navIcon" onClick={() => navigate('/')}>
                <span className="logo"><AlgorithmIcon /></span>
                Algorithm Visualizer
            </span>
            <ul className="flex justify-between">
                <li className="m-2 p-2 rounded-md">
                <button type="button" className="text-white bg-indigo-500
                hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-900" onClick={() => setToggleListItem(!toggleListItem)}>
                        Algorithms
                    </button>
                </li>
                <li className="m-2 p-2 rounded-md">
                <button type="button" className="text-white bg-indigo-500
                hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-900">About Us</button>
                </li>
                <li className="m-2 p-2 rounded-md"><button type="button" className="text-white bg-indigo-500
                hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-900">
                    Contact
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header