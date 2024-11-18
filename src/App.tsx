import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/globalStyles.css';
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching Data', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <PageTitle />
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Coluna</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.COLUNA}</td> 
                <td>{row.VALORES}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
