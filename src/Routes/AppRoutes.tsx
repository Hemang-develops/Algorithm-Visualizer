import { Route, Routes } from 'react-router'
import SelectionSort from '../Components/Sorting/SelectionSort/SelectionSort'
import Home from '../Components/Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='sorting/selectionSort' element={<SelectionSort />} />
    </Routes>
  )
}

export default AppRoutes;