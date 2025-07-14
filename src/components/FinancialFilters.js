import React, { useState } from 'react';

function FinancialFilters({ onFilter }) {
  const [filters, setFilters] = useState({
    porte: "",
    crescimento: "",
    endividamento: "",
    margemEBITDA: "",
    taxaCrescimento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Filtros Financeiros</h2>
      <p className="text-gray-600 mb-4">Encontre empresas perfeitas para sua análise com filtros detalhados.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          Porte:
          <input
            type="text"
            name="porte"
            value={filters.porte}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Grande"
          />
        </label>
        <label className="flex flex-col">
          Crescimento:
          <input
            type="text"
            name="crescimento"
            value={filters.crescimento}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 10%"
          />
        </label>
        <label className="flex flex-col">
          Endividamento:
          <input
            type="text"
            name="endividamento"
            value={filters.endividamento}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 20%"
          />
        </label>
        <label className="flex flex-col">
          Margem EBITDA:
          <input
            type="text"
            name="margemEBITDA"
            value={filters.margemEBITDA}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 15%"
          />
        </label>
        <label className="flex flex-col">
          Taxa de Crescimento:
          <input
            type="text"
            name="taxaCrescimento"
            value={filters.taxaCrescimento}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 5%"
          />
        </label>
      </div>
    </div>
  );
}

export default FinancialFilters;