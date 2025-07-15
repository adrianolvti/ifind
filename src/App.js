import React, { useState } from 'react';
import FinancialFilters from './components/FinancialFilters';
import FinancialStatements from './components/FinancialStatements';
import './index.css';

// Dados Mockados com campo "ramo" adicionado
const mockCompanies = [
  { id: 1, name: "Empresa A", porte: "Grande", crescimento: "10%", endividamento: "20%", margemEBITDA: "15%", taxaCrescimento: "5%", ramo: "Tecnologia" },
  { id: 2, name: "Empresa B", porte: "Média", crescimento: "5%", endividamento: "10%", margemEBITDA: "10%", taxaCrescimento: "3%", ramo: "Industrial" },
  { id: 3, name: "Empresa C", porte: "Pequena", crescimento: "8%", endividamento: "15%", margemEBITDA: "12%", taxaCrescimento: "4%", ramo: "Saúde" },
];

function App() {
  const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies);

  const handleFilter = (filters) => {
    const filtered = mockCompanies.filter(company => {
      return (
        (!filters.porte || company.porte.toLowerCase().includes(filters.porte.toLowerCase())) &&
        (!filters.crescimento || company.crescimento.includes(filters.crescimento)) &&
        (!filters.endividamento || company.endividamento.includes(filters.endividamento)) &&
        (!filters.margemEBITDA || company.margemEBITDA.includes(filters.margemEBITDA)) &&
        (!filters.taxaCrescimento || company.taxaCrescimento.includes(filters.taxaCrescimento)) &&
        (!filters.ramo || company.ramo.toLowerCase().includes(filters.ramo.toLowerCase()))
      );
    });
    setFilteredCompanies(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">iFind - Análise Financeira</h1>
      <FinancialFilters onFilter={handleFilter} />
      <FinancialStatements filteredCompanies={filteredCompanies} />
    </div>
  );
}

export default App;