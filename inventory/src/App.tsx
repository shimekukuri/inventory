import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './pages/test/Test';
import upcScanner from './pages/upcScanner/UpcScan';

function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-secondary">
      <div className="h-16 shadow-2xl bg-primary flex items-center justify-center font-extrabold">
        ACCESS PHARMACIES INVENTORY TOOL
      </div>

      <Routes>
        <Route path="upcScanner" Component={upcScanner}></Route>
        <Route path="test" Component={Test} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
