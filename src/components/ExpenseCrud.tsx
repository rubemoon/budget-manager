import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseCrud: React.FC = () => {
  const { addExpense, updateExpense, expenses } = useBudget();
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);

  const handleAddExpense = (amount: number, description: string) => {
    addExpense({ id: Date.now().toString(), amount, description, type: 'expense', date: new Date().toISOString() });
  };

  const handleUpdateExpense = (amount: number, description: string) => {
    if (editingExpenseId) {
      updateExpense(editingExpenseId, { amount, description, date: new Date().toISOString() });
      setEditingExpenseId(null);
    }
  };

  const handleEdit = (id: string) => {
    setEditingExpenseId(id);
  };

  const expenseToEdit = expenses.find((expense) => expense.id === editingExpenseId);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Expenses</h1>

      {/* Show the form for adding/editing */}
      <ExpenseForm
        initialAmount={expenseToEdit ? expenseToEdit.amount : 0}
        initialDescription={expenseToEdit ? expenseToEdit.description : ''}
        onSubmit={editingExpenseId ? handleUpdateExpense : handleAddExpense}
      />

      {/* List of expenses */}
      <ExpenseList onEdit={handleEdit} />
    </div>
  );
};

export default ExpenseCrud;
