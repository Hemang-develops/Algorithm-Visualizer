import { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const unsortedArr = [2, 1, 3, 62, 10, 0, 9];
const SelectionSort = () => {
    const [arr, setArr] = useState([2, 1, 3, 62, 10, 0, 9]);
    const [selectedItem, setSelectedItem] = useState(-1)
    const [prevSelectedItem, setPrevSelectedItem] = useState<number>();
    const [isSwapping, setIsSwapping] = useState(false);

    const handleSort = async () => {
      for (let i = 0; i < arr.length; i++) {
        setPrevSelectedItem(i) // Update current step for visualization

        for (let j = i; j < arr.length; j++) {
          setSelectedItem(j) // Update current step (both i and j for comparison)
          await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second for visualization
          if (arr[j] < arr[i]) {
            await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second for visualization
            setIsSwapping(true);
            const temp = arr[i]
            setIsSwapping(true)
            arr[i] = arr[j]
            setIsSwapping(true)
            arr[j] = temp
            setArr([...arr]) // Update array state to trigger re-render
          }
        setIsSwapping(false)
        }
      }
      setSelectedItem(-1)
      setPrevSelectedItem(-1)
    }

    const handleRefresh = () => {
        setSelectedItem(-1);
        setPrevSelectedItem(-1);
        setArr(unsortedArr);
    }

    return (
        <div className='selectionSortContainer'>
            <h2 className="heading">Selection Sort</h2>
            <ul className="arrowList">{
                arr.length > 0 && arr.map((item, index) => {
                        if(index === prevSelectedItem || index === selectedItem){
                            return <><li className='arrowItem'><FontAwesomeIcon icon={faArrowDown} size='2xl' /></li>{
                          index < arr.length - 1 && (
                            <span className='hidarrow'>
                              <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                          )
                        }</>
                        } else if(index !== prevSelectedItem || index !== selectedItem) {
                            return (<><li className="arrowItem"></li>{
                          index < arr.length - 1 && (
                            <span className='hidarrow'>
                              <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                          )
                        }</>)
                        }
                        {
                          index < arr.length - 1 && (
                            <span className='arrow'>
                              <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                          )
                        }
                })
            }
            </ul>
            <ul className='listUL'>{
                arr.length > 0 &&
                    arr.map((item, index) => (
                        <>
                            <li key={index} className={`listitem ${index === selectedItem ? 'selectedItem' : ''} ${index === prevSelectedItem ? 'preSelectedItem' : ''}`}>
                            {item.toString()}
                            </li>
                            {index < (arr.length - 1) && <span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>}
                        </>
                    ))}
                {
                    arr.length === 0 && <p>Empty Array cannot be sorted.</p>
                }
            </ul>
            {isSwapping && <p>Swapping selected elements</p>}
            <button className='sortBtn' onClick={()=>handleSort()}>Sort</button>
            <button className='refreshBtn' onClick={()=>handleRefresh()}>Refresh</button>
        </div>
    )
}

export default SelectionSort
