import React, { useEffect, useState } from 'react';

import './styles/globalStyles.css';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import DataTable from './components/DataTable'; 


function App() {
  return (
    <div>
      <Navbar />
      <PageTitle />
      <DataTable
    </div>
  )
}

export default App;
