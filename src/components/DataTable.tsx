import React, { useEffect, useState } from 'react';
import axios from 'axios';


const DataTable = () => {
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

    return(
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Coluna</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.COLUNA}</td>  {/* Exibe o valor da coluna */}
                <td>{row.VALORES}</td> {/* Exibe o valor da coluna "VALORES" */}
              </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Nenhum dado disponível</td> {/* Exibe mensagem quando não há dados */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default DataTable;