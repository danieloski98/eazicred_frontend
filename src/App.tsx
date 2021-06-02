import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Navigation from './navigation'

function App() {
    const location = useLocation()
    return (
        <React.Fragment>
            {!location.pathname.includes('/dashboard') && <Navbar/>}
            <Navigation />
            {!location.pathname.includes('/dashboard') && <Footer/>}
        </React.Fragment>
    );
}

export default App;
