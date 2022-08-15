import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-900 to-gray-600">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projectDetails/:index' element={<ProjectDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;