import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/dataTable.css';

import { SlIcon, SlSelect, SlOption } from '@shoelace-style/shoelace/dist/react';
import DataTableSectionOne from './DataTableSectionOne';

interface DataRow {
  COLUNA: string;
  VALORES: string;
}

const DataTable = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [selectedFundo, setSelectedFundo] = useState<string>('CONSTANCIA_ABSOLUTO_FIM');

  // Função para buscar dados
  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/data`);
      console.log(response.data);

      if (Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar dados', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [selectedFundo]);

  return (
    <div>
      <div className="filter-container">
        <div className="filter-content">
          <h5 style={{ fontSize: '18px', fontWeight: 'lighter' }}>Filtrar por fundo:</h5>
          <SlSelect
            className="select-box"
            name="type"
            value={selectedFundo}
            size="medium"
            onSlChange={(e) => {
              const value = (e.target as HTMLSelectElement).value;
              setSelectedFundo(value);
            }}
          >
            <SlOption value="CONSTANCIA_ABSOLUTO_FIM">
              <SlIcon slot="prefix" name=""></SlIcon>
              CONSTANCIA ABSOLUTO FIM
            </SlOption>
            <SlOption value="FIA_CONSTANCIA_CAMBOINHAS">
              <SlIcon slot="prefix" name=""></SlIcon>
              FIA CONSTANCIA CAMBOINHAS
            </SlOption>
          </SlSelect>
        </div>
      </div>

      <div className="data-table-container">
        <h2>SUMÁRIO DA REMUNERAÇÃO DE PRESTADORES DE SERVIÇO</h2>
        <div className="content">
          <div className="data-table">
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
      <DataTableSectionOne data={data} />
    </div>
  );
};

export default DataTable;
