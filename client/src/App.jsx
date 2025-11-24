import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { getExpenses, createExpense } from './api';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error('Failed to fetch expenses', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (newExpense) => {
    try {
      const created = await createExpense(newExpense);
      setExpenses([created, ...expenses]);
    } catch (error) {
      console.error('Failed to create expense', error);
      alert('Failed to save expense. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8' }}>Loading...</div>
      ) : (
        <ExpenseList expenses={expenses} />
      )}
    </div>
  );
}

export default App;
