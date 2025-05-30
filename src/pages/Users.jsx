import { useEffect } from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import Table from "../components/Table";
import { useUsers } from '../context/UserContext';
import Button from '../components/Button';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import ConfirmationDialog from '../components/ConfirmationDialog';

const Users = () => {
  const {
    filteredUsers,
    handleDelete,
    handleUpdate,
    openUserForm,
    setSearchQuery,
    searchQuery,
    showConfirmDialog,
    debouncedSearch,
    confirmDelete,
    setShowConfirmDialog,
  } = useUsers();

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joinedOn', label: 'Joined on' },
    { key: 'updatedOn', label: 'Updated On' },
    { key: 'contact', label: 'Contact' },
  ];

  const modifiedUsers = filteredUsers.map(user => ({
    ...user,
  contact: (
  <div className="flex items-center gap-3">
    <div className="bg-green-100 rounded-full p-2">
  <HiOutlinePhone className=' text-[#00493E]'/>
    </div>
    <div className="bg-green-100 rounded-full p-2">
  <HiOutlineMail className=' text-[#00493E]'/>
    </div>
  </div>
)
}));

  const actions = [
    {
      label: 'Update',
      handler: (user) => handleUpdate(user.id)
    },
    {
      label: 'Delete',
      variant: 'danger',
      handler: (user) => handleDelete(user.id)
    }
  ];
  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery, debouncedSearch]);
  const handleSearch = (val) => {
    setSearchQuery(val);
  };
  return (
    <div className="p-8 max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center mb-6">
          <div className="w-full md:flex-1 md:max-w-xl">
           <SearchBar
              placeholder="Search users..."
              onSearch={handleSearch}
            />
          </div>
          <Button 
            variant="primary" 
            onClick={() => openUserForm(false)}
            className="w-full md:w-auto text-white bg-[#00493E] border border-[#00493E] rounded-[50px] hover:bg-[#00493E]/150 transition-all px-6 py-2.5 shadow-sm flex justify-center md:justify-around items-center cursor-pointer"
          >
            <FiPlus className="w-5 h-5 mr-2" />New User
          </Button>
        </div>
      {modifiedUsers.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No users found</p>
        </div>
      ) : (
        <Table 
          headers={headers}
          rows={modifiedUsers}
          actions={actions}
          nameAsLink={true}
          onNameClick={(user) => handleUpdate(user.id)}
        />
      )}
       {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <ConfirmationDialog
            message="Are you sure you want to delete this user?"
            onConfirm={confirmDelete}
            onCancel={() => setShowConfirmDialog(false)}
          />
        )}

    </div>
  );
};

export default Users;
