import React from 'react';
import { useBudget } from '../context/BudgetContext';

const ExpenseList: React.FC<{ onEdit: (id: string) => void }> = ({ onEdit }) => {
  const { expenses, removeExpense } = useBudget();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{expense.description}</p>
                <p className="text-red-500 font-bold">${expense.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => onEdit(expense.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
