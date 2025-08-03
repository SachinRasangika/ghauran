import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MainBanner from './components/MainBanner/MainBanner';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <MainBanner />
      {/* Other components can go here */}
    </div>
  );
}

export default App;