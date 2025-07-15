import React from 'react';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

function FinancialStatements({ filteredCompanies }) {
  // Função para download do PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Demonstrativos Financeiros', 10, 10);
    let y = 20;
    filteredCompanies.forEach(company => {
      doc.text(
        `${company.name} - Porte: ${company.porte}, Crescimento: ${company.crescimento}, Endividamento: ${company.endividamento}, Margem EBITDA: ${company.margemEBITDA}, Taxa de Crescimento: ${company.taxaCrescimento}, Ramo: ${company.ramo}`,
        10,
        y
      );
      y += 10;
    });
    doc.save('demonstrativos_financeiros.pdf');
  };

  // Função para download do XLS
  const downloadXLS = () => {
    // Mapeia os dados para excluir o "id" e renomear as chaves
    const formattedCompanies = filteredCompanies.map(({ id, ...company }) => ({
      'Nome': company.name,
      'Porte': company.porte,
      'Crescimento': company.crescimento,
      'Endividamento': company.endividamento,
      'Margem EBITDA': company.margemEBITDA,
      'Taxa de Crescimento': company.taxaCrescimento,
      'Ramo/Segmento': company.ramo,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedCompanies);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Demonstrativos');
    XLSX.writeFile(workbook, 'demonstrativos_financeiros.xlsx');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Demonstrativos Financeiros</h2>
      <p className="text-gray-600 mb-4">Consulte dados financeiros de mais de 50.000 empresas.</p>
      {/* Botões de download à direita */}
      <div className="flex justify-end mb-4">
        {/* <button
          onClick={downloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
        >
          Download PDF
        </button> */}
        <button
          onClick={downloadXLS}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download XLS
        </button>
      </div>
      {/* Tabela de demonstrativos */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Nome</th>
              <th className="p-2">Porte</th>
              <th className="p-2">Crescimento</th>
              <th className="p-2">Endividamento</th>
              <th className="p-2">Margem EBITDA</th>
              <th className="p-2">Taxa de Crescimento</th>
              <th className="p-2">Ramo/Segmento</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map(company => (
              <tr key={company.id} className="border-t">
                <td className="p-2">{company.name}</td>
                <td className="p-2">{company.porte}</td>
                <td className="p-2">{company.crescimento}</td>
                <td className="p-2">{company.endividamento}</td>
                <td className="p-2">{company.margemEBITDA}</td>
                <td className="p-2">{company.taxaCrescimento}</td>
                <td className="p-2">{company.ramo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialStatements;