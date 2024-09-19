import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import DashboardLayout from '../components/DashboardLayout';
import SummaryCard from '../components/SummaryCard';
import { calculatePercentageChange, determineChangeType } from '../utils/calculateChange';
import IncomeExpenseTable from '../components/IncomeExpenseTable';
import Modal from '../components/Modal';
import IncomeForm from '../components/IncomeForm';

const Dashboard: React.FC = () => {
  const { incomes, expenses } = useBudget();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate total income, expenses, and balance
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = totalIncome - totalExpenses;

  // For now, using hardcoded previous week values as placeholders
  const previousWeekIncome = 500; 
  const previousWeekExpenses = 400;
  const previousWeekBalance = previousWeekIncome - previousWeekExpenses;

  const handleSubmit = (amount: number, description: string) => {
    // Handle form submission logic
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="flex-grow p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gerenciador de Orçamentos e Despesas</h1>

        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SummaryCard
            title="Total Income"
            value={totalIncome}
            change={calculatePercentageChange(totalIncome, previousWeekIncome)}
            changeType={determineChangeType(totalIncome, previousWeekIncome)}
            lastWeekValue={previousWeekIncome}
            iconColor="bg-gray-500"
          />
          <SummaryCard
            title="Total Expenses"
            value={totalExpenses}
            change={calculatePercentageChange(totalExpenses, previousWeekExpenses)}
            changeType={determineChangeType(totalExpenses, previousWeekExpenses)}
            lastWeekValue={previousWeekExpenses}
            iconColor="bg-green-500"
          />
          <SummaryCard
            title="Balance"
            value={balance}
            change={calculatePercentageChange(balance, previousWeekBalance)}
            changeType={determineChangeType(balance, previousWeekBalance)}
            lastWeekValue={previousWeekBalance}
            iconColor={balance >= 0 ? 'bg-green-500' : 'bg-red-500'}
          />
        </div>

        <IncomeExpenseTable />

        {/* Modal for add/edit */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Transaction">
          <IncomeForm
            initialAmount={0}
            initialDescription=""
            onSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;