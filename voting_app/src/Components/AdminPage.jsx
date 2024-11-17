import { useUserContext } from './Context';
const AdminPage = () => {
  const { user, vote, logout } = useUserContext();

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Users and Their Votes</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user}</td>
            <td>{vote || 'No vote yet'}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminPage;
