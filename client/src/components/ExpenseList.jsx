import React from 'react';
import { Tag, Calendar } from 'lucide-react';

const ExpenseList = ({ expenses }) => {
    if (expenses.length === 0) {
        return (
            <div className="card" style={{ marginTop: '2rem' }}>
                <div className="empty-state">
                    No expenses recorded yet. Start by adding one above!
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ marginTop: '2rem' }}>
            <ul className="expense-list">
                {expenses.map((expense) => (
                    <li key={expense.id} className="expense-item">
                        <div className="expense-info">
                            <h3>{expense.description}</h3>
                            <div className="expense-meta">
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Tag size={14} /> {expense.category}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Calendar size={14} /> {new Date(expense.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <div className="expense-amount">
                            ฿{expense.amount.toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
