import { flex } from '@mui/system';
import { useState } from 'react';
import handleFetch from '../logic/handleFetch';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    employeeId: '',
    password: '',
  });
  const redirect = useNavigate();

  const handleInput = field => event => {
    const { value } = event.target;
    const inputValue = field === 'employeeId' ? Number(value) : value;
    setFormData(prev => ({ ...prev, [field]: inputValue }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const url = `http://localhost:5000/loging/login`;
    const data = await handleFetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    Cookies.set('token', data?.data);
    if (Cookies.get('token')) {
      redirect('/addmin/ecom/order/search');
    } else {
      redirect('/login');
    }
  };

  return (
    <div className="min-h-screen bg-green-700/20  flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Employee Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="employeeid"
              className="text-gray-700 mb-2 font-medium"
            >
              Employee ID
            </label>
            <input
              type="number"
              id="employeeid"
              placeholder="Enter employee ID"
              value={formData.employeeId}
              onChange={handleInput('employeeId')}
              className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 mb-2 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInput('password')}
              className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
