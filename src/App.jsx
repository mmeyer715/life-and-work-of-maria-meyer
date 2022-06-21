import './App.css';
import React from 'react';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div>
     <AppContainer />
    </div>
  );
}

export default App;
// break down into components from original portfolio
// header needs to include nav

// TODO
// title corresponding to  the current section is highlighted
// Onclick, the nav tabs shouldn't reload page
// A single Header component that appears on multiple pages
// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

// When porfolio loads, about me title and section selected by default
// Must include recent photo and short bio in about me

// In porfolio section, 6 images and links to applications and github repo
// A single Project component that will be used multiple times in the Portfolio section

// Contact section with form including name, email and message
// If field is left blank, need notification that the field is required
// Validation on Email and notification if not correct

// Resume section with link to downloadable resume and list of proficiencies

// A single Footer component that appears on multiple pages
// Footer to  include icon links to GitHub  and LinkedIn profiles