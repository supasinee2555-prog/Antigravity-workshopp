import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getExpenses = async () => {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data;
};

export const createExpense = async (expense) => {
    const response = await axios.post(`${API_URL}/expenses`, expense);
    return response.data;
};
