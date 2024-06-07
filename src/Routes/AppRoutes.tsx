import { Route, Routes } from 'react-router'
import App from '../App'
import SelectionSort from '../Components/Sorting/SelectionSort/SelectionSort'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<App />} />
        <Route path='sorting/selectionSort' element={<SelectionSort />} />
    </Routes>
  )
}

export default AppRoutes