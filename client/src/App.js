import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard, Home, Marketplace, Stat } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="marketsplace" element={<Marketplace />}/>
        <Route path="stat" element={<Stat />}/>
      </Routes>
    </div>
  );
}

export default App;
