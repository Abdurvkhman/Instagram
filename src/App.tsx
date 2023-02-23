import './css/styles.css';
import { Routes, Route } from 'react-router-dom'
import Autorize from './pages/Autorize';
import Home from './pages/Home';
import { useAppSelector } from './hooks/hook';

function App() {
  const {isAdmin} = useAppSelector(state => state.autorize)

  return (
    <div className="App">
        <Routes>
          {isAdmin ? (
            
            <Route path='/home' element={<Home/>}/>
          ) : (
            <Route path='/' element={<Autorize/>}/>
          )}
          
        </Routes>
    </div>
  );
}

export default App;