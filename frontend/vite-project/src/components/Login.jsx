
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login({ onLogin })  {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();


async function handleSubmit(event) {
  event.preventDefault();
  setError('');

  if (email.trim() === '' || password.trim() === '') {
    setError('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    setError('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    setError('Password must be at least 6 characters.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

 if (response.ok) {
  onLogin();
  navigate('/dashboard');
} else {
  setError(data.message);
}
  } catch (error) {
    setError('Cannot connect to the server. Please try again.');
  }
}

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700">
            Learnify
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome back! Sign in to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Welcome to your learning journey!
        </p>

      </div>
    </div>
  )
}

export default Login
