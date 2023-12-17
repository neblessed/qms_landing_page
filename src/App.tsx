import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TryIt from './pages/free-trial/TryIt';
import HomePage from './pages/home/Home';
import FeaturesPage from './pages/features/Features';
import { RouteUrl } from './enums/RouteUrl';
import VerificationPage from './pages/verification_code/Verification';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteUrl.HOME} Component={HomePage} />
        <Route path={RouteUrl.FREE_TRIAL} Component={TryIt} />
        <Route path={RouteUrl.FEATURES} Component={FeaturesPage} />
        <Route path={RouteUrl.TEAM} Component={FeaturesPage} />
        <Route path={RouteUrl.PRICING} Component={FeaturesPage} />
        <Route path={RouteUrl.COMPANY} Component={FeaturesPage} />
        <Route path="/verification" Component={VerificationPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
