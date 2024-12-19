/* import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// Importing images
import mounteverest from './assets/mounteverest.jpg';
import kanchangunja from './assets/kanchangunja.jpg';
import lotshe from './assets/lotshe.jpg';
import makalu from './assets/makalu.jpg';
import chooyu from './assets/chooyu.jpg';
import dhaulagiri from './assets/dhaulagiri.jpg';
import manaslu from './assets/manaslu.jpg';
import annapurna1 from './assets/annapurna1.jpg';
import gyachungkang from './assets/gyachungkang.jpg';
import Annapurnaii from './assets/Annapurnaii.jpg';

// JSON Data
const mountains = [
  { id: 1, name: 'MT. Everest', elevation: '8,849m', image: mounteverest },
  { id: 2, name: 'MT. Kanchangunja', elevation: '8,586m', image: kanchangunja },
  { id: 3, name: 'MT. Lhotse', elevation: '8,516m', image: lotshe },
  { id: 4, name: 'MT. Makalu', elevation: '8,485m', image: makalu },
  { id: 5, name: 'MT. Cho Oyu', elevation: '8,201m', image: chooyu },
  { id: 6, name: 'MT. Dhaulagiri', elevation: '8,167m', image: dhaulagiri },
  { id: 7, name: 'MT. Manaslu', elevation: '8,163m', image: manaslu },
  { id: 8, name: 'MT. Annapurna I', elevation: '8,091m', image: annapurna1 },
  { id: 9, name: 'MT. Gyachung Kang', elevation: '7,952m', image: gyachungkang },
  { id: 10, name: 'MT. Annapurna II', elevation: '7,937m', image: Annapurnaii },
];

const Frontend = () => {
   
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MOUNTAINS</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">LET'S EXPLORE MOUNTAINS</h1>
        <p className="lead">TOP 10 MOUNTAINS OF NEPAL</p>
      </div>

      
      <div className="container mt-4">
        <div className="row">
          {mountains.map((mountain) => (
            <div key={mountain.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={mountain.image}
                  alt={mountain.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{mountain.name}</h5>
                  <p className="card-text">Elevation: {mountain.elevation}</p>
                  <button className="btn btn-primary" onClick={handleButton}>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Frontend;
 */
///from chatgpt
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// Importing images
import mounteverest from './assets/mounteverest.jpg';
import Kanchangunja from './assets/kanchangunja.jpg';
import lotshe from './assets/lotshe.jpg';
import makalu from './assets/makalu.jpg';
import chooyu from './assets/chooyu.jpg';
import dhaulagiri from './assets/dhaulagiri.jpg';
import manaslu from './assets/manaslu.jpg';
import annapurna1 from './assets/annapurna1.jpg';
import gyachungkang from './assets/gyachungkang.jpg';
import Annapurnaii from './assets/Annapurnaii.jpg';

// JSON Data
const mountains = [
  { id: 1, name: 'MT. Everest', elevation: '8,849m', image: mounteverest, description: 'Mount Everest is the highest mountain in the world.' },
  { id: 2, name: 'MT. Kanchangunja', elevation: '8,586m', image: Kanchangunja, description:'The main peak of Kangchenjunga is the second highest mountain in Nepal after Mount Everest. Three of the five peaks - Main, Central and South - are on the border between North Sikkim and Nepal.' },
  { id: 3, name: 'MT. Lhotse', elevation: '8,516m', image: lotshe, description:'The Lhotse is the third-highest peak in Nepal and the fourth-highest peak in the world, rising 8,816 meters above sea level and located in the Khumbu region.' },
  { id: 4, name: 'MT. Makalu', elevation: '8,485m', image: makalu,description:'Makalu is located in the Mahalangur Himalayan range, on the border between Nepal and Tibet. Its known for its four-sided pyramid shape and is considered one of the most dangerous mountains in Nepal. The first ascent of Makalu was in 1955 by Lionel Terray and Jean Couszy.'},
  { id: 5, name: 'MT. Cho Oyu', elevation: '8,188m', image: chooyu, description:'Oyu means "Turquoise Goddess" in Tibetan. The mountain is the westernmost major peak of the Khumbu sub-section of the Mahalangur Himalaya 20 km west of Mount Everest.' },
  { id: 6, name: 'MT. Dhaulagiri', elevation: '8,167m', image: dhaulagiri, description:'Dhaulagiri, located in Nepal, is the seventh highest mountain in the world at 8,167 metres (26,795 ft) above sea level, and the highest mountain within the borders of a single country. It was first climbed on 13 May 1960 by a Swiss-Austrian-Nepali expedition.' },
  { id: 7, name: 'MT. Manaslu', elevation: '8,163m', image: manaslu , description:'Mt. Manaslu lies in northern Nepal and 64 km east of Annapurna. It is the eighth-highest mountain in the world at 8163 metres above sea level.'},
  { id: 8, name: 'MT. Annapurna I', elevation: '8,091m', image: annapurna1 , description:'Mount Annapurna I is the tenth highest mountainin the world at 8,091 metres (26,545 ft). It is in the Annapurna massif of Nepal Himalayas.'},
  { id: 9, name: 'MT. Gyachung Kang', elevation: '7,952m', image: gyachungkang, description:'Gyachung Kang is a mountain in the Mahalangur Himal section of the Himalayas and is the highest peak between Cho Oyu and Mount Everest. It lies on the border between Nepal and China.' },
  { id: 10, name: 'MT. Annapurna II', elevation: '7,937m', image: Annapurnaii, description:'Annapurna II is the second-highest mountain of the Annapurna range located in Nepal, and the eastern anchor of the range. In terms of elevation, isolation and prominence, Annapurna II does not rank far behind Annapurna I Main, which serves as the western anchor.' },
];

const Frontend = () => {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleButton = (mountain) => {
    setSelectedMountain(mountain);
  };

  const closePopup = () => {
    setSelectedMountain(null);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MOUNTAINS</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">LET'S EXPLORE MOUNTAINS</h1>
        <p className="lead">TOP 10 MOUNTAINS OF NEPAL</p>
      </div>

      {/* Mountain Grid */}
      <div className="container mt-4">
        <div className="row">
          {mountains.map((mountain) => (
            <div key={mountain.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={mountain.image}
                  alt={mountain.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{mountain.name}</h5>
                  <p className="card-text">Elevation: {mountain.elevation}</p>
                  <button className="btn btn-primary" onClick={() => handleButton(mountain)}>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMountain && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div className="popup-content" style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            textAlign: 'center',
            position: 'relative',
          }}>
            <h4>{selectedMountain.name}</h4>
            <img
              src={selectedMountain.image}
              alt={selectedMountain.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }}
            />
            <p>{selectedMountain.description || 'Description not available.'}</p>
            <button className="btn btn-secondary" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Frontend;
