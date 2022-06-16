import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard, Home, Feed, Stat, Profile } from './pages';
import { Header, Footer, Overview, Wallet, Market, Setting } from './components';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="market" element={<Market />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="feed" element={<Feed />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="stat" element={<Stat />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
