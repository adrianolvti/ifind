import React from 'react';

function FinancialStatements({ filteredCompanies }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Demonstrativos Financeiros</h2>
      <p className="text-gray-600 mb-4">Consulte dados financeiros de mais de 50.000 empresas.</p>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialStatements;