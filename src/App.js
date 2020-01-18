import React from 'react';
import './App.scss';
import CarouselApp from './components/CarouselApp';
//import CampaignApp from './components/CampaignApp';
//import Loading from './components/Loading';

function App() {
  return (
    <React.Fragment>
      
      {
        <div className="content-container">
          <CarouselApp />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
