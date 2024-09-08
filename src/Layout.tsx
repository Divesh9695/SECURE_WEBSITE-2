import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Box from './box'; // Renamed 'box' to 'Box'

const Layout: React.FC = () => {
  return (
    <div>
      <Box /> {/* Capitalized the component name */}
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

