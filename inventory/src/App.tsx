import { Route, Routes } from 'react-router-dom';
import './App.css';
import upcScanner from './pages/upcScanner/UpcScan';

function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-secondary">
      <div className="h-16 shadow-2xl bg-primary flex items-center justify-center font-extrabold">
        ACCESS PHARMACIES INVENTORY TOOL
      </div>
      <Routes>
        <Route path="upcScanner" Component={upcScanner}></Route>
      </Routes>
    </div>
  );
}

export default App;
