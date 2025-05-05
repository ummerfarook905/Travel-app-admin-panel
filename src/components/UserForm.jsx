import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleSave,
    setEditingUser,
    filteredUsers
  } = useUsers();

  const [formData, setFormData] = React.useState({
    id: '',
    name: '',
    joinedOn: '',
    updatedOn: '',
    contact: { phone: '', email: '' },
    password: '',
    isAdmin: ''
  });

  useEffect(() => {
    if (id) {
      const userToEdit = filteredUsers.find(user => user.id === `#${id}`);
      if (userToEdit) {
        setFormData({
          id: userToEdit.id,
          name: userToEdit.name,
          joinedOn: userToEdit.joinedOn,
          updatedOn: userToEdit.updatedOn,
          contact: {
            phone: userToEdit.contact?.phone || '',
            email: userToEdit.contact?.email || ''
          },
          password: '',
          isAdmin: userToEdit.isAdmin || ''
        });
      }
    } else {
      setFormData({
        id: '',
        name: '',
        joinedOn: new Date().toISOString().split('T')[0],
        updatedOn: new Date().toISOString().split('T')[0],
        contact: { phone: '', email: '' },
        password: '',
        isAdmin: ''
      });
    }
  }, [id, filteredUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('contact.')) {
      const contactField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        contact: {
          ...prev.contact,
          [contactField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newUserData = {
      ...formData,
      id: formData.id || `#${Date.now()}`, // generate ID if not in edit mode
      joinedOn: formData.joinedOn || new Date().toISOString().split('T')[0],
      updatedOn: new Date().toISOString().split('T')[0],
    };
  
    handleSave(newUserData);
    navigate('/users');
  };
  

  const handleClose = () => {
    setEditingUser(null);
    navigate('/users');
  };

  return (
    <div className="min-h-screen bg-[#f3f5ff] flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl w-full max-w-4xl shadow-lg border">
        {/* Header */}
        <div className="bg-[#00493E] rounded-t-xl p-4">
          <h2 className="text-white font-semibold text-lg">New User Details</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00493E] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              name="contact.phone"
              value={formData.contact.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00493E] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              name="contact.email"
              type="email"
              value={formData.contact.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00493E] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00493E] outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Is Admin</label>
            <input
              name="isAdmin"
              placeholder="Yes or No"
              value={formData.isAdmin}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00493E] outline-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center gap-4 mt-4">
  <button
    type="submit"
    className="px-6 py-2.5 bg-[#00493E] text-white rounded-full hover:bg-[#00382C] transition"
  >
    Submit
  </button>
  <button
    type="button"
    onClick={handleClose}
    className="px-6 py-2.5 border border-[#00493E] text-[#00493E] rounded-full hover:bg-gray-100 transition"
  >
    Cancel
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default UserForm;
