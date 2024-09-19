import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

const IncomeCrud: React.FC = () => {
  const { addIncome, updateIncome, incomes } = useBudget();
  const [editingIncomeId, setEditingIncomeId] = useState<string | null>(null);

  const handleAddIncome = (amount: number, description: string) => {
    addIncome({ id: Date.now().toString(), amount, description, type: 'income', date: new Date().toISOString() });
  };

  const handleUpdateIncome = (amount: number, description: string) => {
    if (editingIncomeId) {
      updateIncome(editingIncomeId, { amount, description, date: new Date().toISOString() });
      setEditingIncomeId(null);
    }
  };

  const handleEdit = (id: string) => {
    setEditingIncomeId(id);
  };

  const incomeToEdit = incomes.find((income) => income.id === editingIncomeId);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Income</h1>

      {/* Show the form for adding/editing */}
      <IncomeForm
        initialAmount={incomeToEdit ? incomeToEdit.amount : 0}
        initialDescription={incomeToEdit ? incomeToEdit.description : ''}
        onSubmit={editingIncomeId ? handleUpdateIncome : handleAddIncome}
      />

      {/* List of incomes */}
      <IncomeList onEdit={handleEdit} />
    </div>
  );
};

export default IncomeCrud;
