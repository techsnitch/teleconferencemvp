import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRegister from './components/PageResister';
import Testimonials from './components/testimonials/Testimonials';
import ShareScreen from './components/sharescreen/ShareScreen';
import Join from './components/join_meeting/join';


ReactDOM.render(
  <React.StrictMode>
    <PageRegister />
    <ShareScreen/>
    <Testimonials/>
    <Join/>
  </React.StrictMode>,
  document.getElementById('root')
);
