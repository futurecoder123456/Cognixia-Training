import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Token payload may expose the role as "role", "roles", or "authorities", as a string or array.
const isAdminToken = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    const claim = decoded.role ?? decoded.roles ?? decoded.authorities ?? decoded.scope;
    const values = Array.isArray(claim) ? claim : [claim];
    return values.some((value) => String(value).toUpperCase().includes('ADMIN'));
  } catch {
    return false;
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isAdmin = isAdminToken(localStorage.getItem('jwt_token'));

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 401 || response.status === 403) {
          localStorage.clear();
          navigate('/login');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to load users.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to load users.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleDelete = async (id, username) => {
    if (!window.confirm(`Delete user "${username}"?`)) {
      return;
    }

    const token = localStorage.getItem('jwt_token');

    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        localStorage.clear();
        navigate('/login');
        return;
      }

      if (response.status === 403) {
        window.alert('Only admins can delete users.');
        return;
      }

      if (!response.ok && response.status !== 204) {
        throw new Error('Failed to delete user.');
      }

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete user.');
    }
  };

  if (isLoading) {
    return (
      <div className="dashboard-page">
        <h1>Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      {error && <p className="error-message">{error}</p>}

      {!error && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Balance</th>
              <th>Account Type</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.balance}</td>
                <td>{user.accountType}</td>
                {isAdmin && (
                  <td>
                    <button type="button" onClick={() => handleDelete(user.id, user.username)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
