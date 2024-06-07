import './App.css';
import AlgorithmIcon from '../public/AlgorithmIcon';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  return (
    <>
    <div className="heading">
      <AlgorithmIcon />
      <h1>Algorithm Visualizer</h1>
    </div>
    <AppRoutes />
    </>
  )
}

export default App;