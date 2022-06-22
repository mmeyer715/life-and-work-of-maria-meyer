import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function AppContainer() {
    // default page set to about me component
    const [currentPage, setCurrentPage] = useState('About');
    
    // conditionally render page based on user selection
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        return <Resume />

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </>
    );
}