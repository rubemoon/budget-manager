import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const Income: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const { addIncome } = useBudget();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addIncome({ id: Date.now().toString(), amount, description, type: 'income', date: new Date().toISOString() });
    setAmount(0);
    setDescription('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Income</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default Income;