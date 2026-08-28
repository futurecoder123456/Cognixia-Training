import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import {
  PageWrapper,
  PageHeader,
  Title,
  Banner,
  TableWrapper,
  Table,
  DeleteButton,
  EmptyState,
} from './AdminDashboardPage.styled';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const isAdminToken = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);

    const claim =
      decoded.role ??
      decoded.roles ??
      decoded.authorities ??
      decoded.scope;

    const values = Array.isArray(claim) ? claim : [claim];

    return values.some((value) =>
      String(value).toUpperCase().includes('ADMIN')
    );
  } catch {
    return false;
  }
};

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');

    if (!token || !isAdminToken(token)) {
      navigate('/dashboard');
      return;
    }

    const fetchUsers = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401 || response.status === 403) {
          navigate('/dashboard');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to load users.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setError('Failed to load customers. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleDelete = async (id, username) => {
    if (!window.confirm(`Delete customer "${username}"?`)) {
      return;
    }

    const token = localStorage.getItem('jwt_token');

    setNotice('');
    setError('');
    setDeletingId(id);

    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        window.alert('Only admins can delete customers.');
        return;
      }

      if (!response.ok && response.status !== 204) {
        throw new Error('Failed to delete customer.');
      }

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      setNotice(`Customer "${username}" was deleted.`);
    } catch (error) {
      console.error(error);
      setError('Failed to delete customer. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <PageWrapper>
        <Title>Admin Dashboard</Title>
        <p>Loading customers...</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHeader>
        <Title>Admin Dashboard</Title>
      </PageHeader>

      {error && (
        <Banner data-variant="error">
          {error}
        </Banner>
      )}

      {notice && (
        <Banner data-variant="success">
          {notice}
        </Banner>
      )}

      {users.length === 0 ? (
        <EmptyState>
          No customers found.
        </EmptyState>
      ) : (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.accountType}</td>
                  <td>${user.balance}</td>
                  <td>{user.role}</td>

                  <td>
                    <DeleteButton
                      type="button"
                      disabled={deletingId === user.id}
                      onClick={() =>
                        handleDelete(user.id, user.username)
                      }
                    >
                      {deletingId === user.id
                        ? 'Deleting...'
                        : 'Delete'}
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </PageWrapper>
  );
};

export default AdminDashboardPage;