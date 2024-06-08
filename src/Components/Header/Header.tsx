import { Link, useNavigate } from "react-router-dom"
import AlgorithmIcon from '../../assets/Icons/AlgorithmIcon'
import { useState } from "react"
import './styles.css'

const Header = () => {
    const [toggleListItem, setToggleListItem] = useState(false);
    const navigate = useNavigate();

    const headerList = ['Sorting', 'Array', 'Binary Search', 'Strings', 'LinkedList', 'Recursion', 'Bit Manipulation', 'Stack and Queues', 'Sliding Window & Two Pointer', 'Heaps', 'Greedy Algorithms', 'Binary Trees', 'Binary Search Trees', 'Graphs', 'Dynamic Programming', 'Tries'];


  return (
    <header>
        <nav className="navbar">
            <span className="navIcon" onClick={() => navigate('/')}>
                <span className="logo"><AlgorithmIcon /></span>
                Algorithm Visualizer
            </span>
            <ul className="list">
                <li className="listItem">
                    <button className="listBtn" onClick={() => setToggleListItem(!toggleListItem)}>
                        Sorting
                    </button>
                    { toggleListItem && (<ul className="innerList">
                        <li className="innerListItem">
                            <Link className="innerListLink" to={'sorting/selectionSort'}>Selection Sort</Link>
                        </li>
                    </ul>)}
                    </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header