import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard, Home, Feed, Stat, Profile } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="feed" element={<Feed />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="stat" element={<Stat />}/>
      </Routes>
    </div>
  );
}

export default App;
