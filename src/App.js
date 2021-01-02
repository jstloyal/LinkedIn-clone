import React from 'react';
import './App.css';
import Feed from './components/Body/Feed/Feed';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
