import React from 'react';
import { useContext, useState } from 'react';
import MyContext from '../context/Context';

const UserManagement = () => {
  const store = useContext(MyContext);
  const { users, setUsers } = store;  // Destructure from store
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    id: users.length + 1,
    userName: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleEditChange = (event, userId) => {
    const updatedUsers = users.map(user => 
      user.id === userId 
        ? { ...user, [event.target.name]: event.target.value }
        : user
    );
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({
      id: users.length + 2,
      userName: "",
      email: "",
      password: "",
      role: "user",
    });
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEdit = (userId) => {
    setEditingUser(userId);
  };

  const handleSaveEdit = (userId) => {
    setEditingUser(null);
  };

  return (
    <div className="user-management">
      <h1>ניהול משתמשים</h1>
      
      <div className="add-user-form">
        <h2>הוסף משתמש חדש</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>שם משתמש:</label>
            <input type="text" name="userName" value={newUser.userName} onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label>אימייל:</label>
            <input type="email" name="email" value={newUser.email} onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label>סיסמא:</label>
            <input type="password" name="password" value={newUser.password} onChange={handleChange} />
          </div>
          
          <button type="submit">הוסף משתמש</button>
        </form>
      </div>

      <div className="users-list">
        <h2>רשימת משתמשים</h2>
        <table>
          <thead>
            <tr>
              <th>שם משתמש</th>
              <th>אימייל</th>
              <th>תפקיד</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      name="userName"
                      value={user.userName}
                      onChange={(e) => handleEditChange(e, user.id)}
                    />
                  ) : (
                    user.userName
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={(e) => handleEditChange(e, user.id)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>{user.role}</td>
                <td>
                  {editingUser === user.id ? (
                    <button onClick={() => handleSaveEdit(user.id)}>שמור</button>
                  ) : (
                    <button onClick={() => handleEdit(user.id)}>ערוך</button>
                  )}
                  <button onClick={() => handleDelete(user.id)}>מחק</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
