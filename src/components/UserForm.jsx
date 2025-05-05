import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the clean ID from URL
  const {
    editingUser,
    handleSave,
    setEditingUser,
    filteredUsers
  } = useUsers();

  const [formData, setFormData] = React.useState({
    id: '',
    name: '',
    joinedOn: '',
    updatedOn: '',
    contact: { phone: '', email: '' }
  });

  useEffect(() => {
    if (id) {
      // For edit mode - add # back to the ID when looking up the user
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
          }
        });
      }
    } else {
      // For new user mode
      setFormData({
        id: '',
        name: '',
        joinedOn: new Date().toISOString().split('T')[0],
        updatedOn: new Date().toISOString().split('T')[0],
        contact: { phone: '', email: '' }
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
    handleSave(formData);
    navigate('/users');
  };

  const handleClose = () => {
    setEditingUser(null);
    navigate('/users');
  };

  const isEditing = !!id; // Check if we're in edit mode based on URL param

  return (
    <div className="fixed inset-0 bg-gray-100/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">
            {isEditing ? 'Edit User' : 'Create New User'}
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-[#00493E] outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
            <input
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-[#00493E] outline-none transition-all bg-gray-50"
              required
              disabled={isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              name="contact.phone"
              value={formData.contact.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-[#00493E] outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              name="contact.email"
              type="email"
              value={formData.contact.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-[#00493E] outline-none transition-all"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#00493E] text-white hover:bg-[#00382C] rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;