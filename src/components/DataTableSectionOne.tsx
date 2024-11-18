// DataTableSectionOne.tsx
import React from 'react';

import DataTableSectionTwo from './DataTableSectionTwo'; 
import '../styles/dataTable.css'

// Defina o tipo DataRow corretamente
interface DataRow {
  COLUNA: string;
  VALORES: string;
}

interface DataTableSectionOneProps {
  data: DataRow[];
}

const DataTableSectionOne: React.FC<DataTableSectionOneProps> = ({ data }) => {
  return (
    <div>
      <div className="data-table-container">
        <h2>SEÇÃO I - CARACTERÍSTICAS DA SUBCLASSE</h2>
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
      <DataTableSectionTwo data={data}/>
    </div>
  );
};

export default DataTableSectionOne;
