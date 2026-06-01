import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Components
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import ServiceDetails from './components/ServiceDetails'; 
import ServiceDetailsCard from './components/ServiceDetailsCard'; // NEW
import ServiceDetailsCardPage from "./components/ServiceDetailsCardPage";
// Global style to hide scrollbar but keep scrolling
const GlobalStyle = createGlobalStyle`
  html {
    overflow: auto;
  }
  
  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll; /* Always show vertical scrollbar to prevent layout shift */
    margin: 0;
    font-family: sans-serif;
  }
  
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Page content with top padding to avoid overlap */}
        <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          {/* ADD THIS */}
          <Route path="/services/:slug" element={<ServiceDetails />}/>
          <Route path="/services-card/:slug" element={<ServiceDetailsCardPage />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}