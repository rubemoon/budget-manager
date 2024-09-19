import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import Modal from './Modal';

interface TableRowProps {
  id: string;
  amount: number;
  description: string;
  type: 'income' | 'expense';
  date: string;
  onEdit: (id: string, type: 'income' | 'expense') => void;
  onDelete: (id: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ id, amount, description, type, date, onEdit, onDelete }) => (
  <tr className={`border-b ${type === 'income' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'} rounded-lg`}>
    <td className="px-4 py-2 rounded-l-lg">{description}</td>
    <td className="px-4 py-2">{type === 'income' ? '+' : '-'}${amount.toFixed(2)}</td>
    <td className="px-4 py-2">{new Date(date).toLocaleDateString()}</td>
    <td className="px-4 py-2 rounded-r-lg">
      <button onClick={() => onEdit(id, type)} className="text-blue-500 dark:text-blue-300 mr-2">Edit</button>
      <button onClick={() => onDelete(id)} className="text-red-500 dark:text-red-300">Delete</button>
    </td>
  </tr>
);

const IncomeExpenseTable: React.FC = () => {
  const { incomes, expenses, addIncome, updateIncome, addExpense, updateExpense, removeIncome, removeExpense } = useBudget();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<{
    id?: string;
    type: 'income' | 'expense';
    amount: number;
    description: string;
  } | null>(null);

  const handleEdit = (id: string, type: 'income' | 'expense') => {
    const transaction = (type === 'income' ? incomes : expenses).find(item => item.id === id);
    if (transaction) {
      setEditingTransaction({
        id: transaction.id,
        type,
        amount: transaction.amount,
        description: transaction.description,
      });
      setIsModalOpen(true);
    }
  };

  const handleAdd = (type: 'income' | 'expense') => {
    setEditingTransaction({
      id: undefined,
      type,
      amount: 0,
      description: '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, type: 'income' | 'expense') => {
    if (type === 'income') {
      removeIncome(id);
    } else {
      removeExpense(id);
    }
  };

  const handleSubmit = (amount: number, description: string) => {
    if (editingTransaction?.id) {
      // Update existing transaction
      if (editingTransaction.type === 'income') {
        updateIncome(editingTransaction.id, { amount, description });
      } else {
        updateExpense(editingTransaction.id, { amount, description });
      }
    } else {
      // Add new transaction
      if (editingTransaction?.type === 'income') {
        addIncome({ id: Date.now().toString(), amount, description, type: 'income', date: new Date().toISOString() });
      } else {
        addExpense({ id: Date.now().toString(), amount, description, type: 'expense', date: new Date().toISOString() });
      }
    }
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  const allTransactions = [...incomes, ...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Income and Expenses</h1>
      <div className="mb-4">
        <button onClick={() => handleAdd('income')} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Add Income</button>
        <button onClick={() => handleAdd('expense')} className="bg-red-500 text-white px-4 py-2 rounded">Add Expense</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300">
              <th className="px-4 py-2 rounded-tl-lg">Description</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allTransactions.length > 0 ? (
              allTransactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  id={transaction.id}
                  amount={transaction.amount}
                  description={transaction.description}
                  type={transaction.type}
                  date={transaction.date}
                  onEdit={handleEdit}
                  onDelete={() => handleDelete(transaction.id, transaction.type)}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500 dark:text-gray-400">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for add/edit */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingTransaction?.id ? 'Edit Transaction' : 'Add Transaction'}>
        {editingTransaction ? (
          editingTransaction.type === 'income' ? (
            <IncomeForm
              initialAmount={editingTransaction.amount}
              initialDescription={editingTransaction.description}
              onSubmit={handleSubmit}
            />
          ) : (
            <ExpenseForm
              initialAmount={editingTransaction.amount}
              initialDescription={editingTransaction.description}
              onSubmit={handleSubmit}
            />
          )
        ) : (
          <div>Please select a transaction to edit or add a new one.</div>
        )}
      </Modal>
    </div>
  );
};

export default IncomeExpenseTable;