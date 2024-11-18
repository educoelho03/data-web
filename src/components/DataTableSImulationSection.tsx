import React from 'react';

import '../styles/dataTable.css'


// Defina o tipo DataRow corretamente
interface DataRow {
  COLUNA: string;
  VALORES: string;
}

interface DataTableSImulationSectionProps {
  data: DataRow[];
}

const DataTableSectionTwo: React.FC<DataTableSImulationSectionProps> = ({ data }) => {
    return (
    <div>
      <div className="data-table-container">
          <h2>SIMULAÇÃO DE CENÁRIOS EM FUNDOS DE VAREJO</h2>
            <div className='content'>
              <div className='data-table'>
                  <table>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((row, index) => (
                          <tr key={index}>
                            <td className="data-key">{row.COLUNA}</td>
                            <td>{row.VALORES}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={2}>Nenhum dado disponível</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default DataTableSectionTwo;

