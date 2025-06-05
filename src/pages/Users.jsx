import { useEffect, useState } from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import Table from "../components/Table";
import { useUsers } from '../context/UserContext';
import Button from '../components/Button';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import ConfirmationDialog from '../components/ConfirmationDialog';
import SearchInput from '../components/SearchInput';
import useDebounceSearch from '../hooks/useDebounceSearch';
import useDebouncedFilter from '../hooks/useDebounceFilter';
import useConfirmDialog from '../hooks/useConfirmDialog';
import { deleteUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Users = ({ handleUpdate, openUserForm }) => {  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
console.log("users passed to component:",users);
  const [searchQuery, setSearchQuery]= useState('');
  // const [showConfirmDialog, setShowConfirmDialog] = useState(false);
 
  const [userToDelete, setUserToDelete] = useState(null);
const {
  isOpen:showConfirmDialog,
  openDialog,
  closeDialog,
  onConfirm: confirmDelete,

}= useConfirmDialog();
  const handleDelete = (id) => {
    dispatch(deleteUser(id)); 
    closeDialog();
  };

  const filterFn =(user,query)=>{
    return user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.id.toLowerCase().includes(query.toLowerCase()) ||
            user.joinedOn.toLowerCase().includes(query.toLowerCase()) ||
            user.updatedOn.toLowerCase().includes(query.toLowerCase());
  }

const filteredUsers =useDebouncedFilter(users,searchQuery,filterFn);
console.log("Filtered users:", filteredUsers);

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joinedOn', label: 'Joined on' },
    { key: 'updatedOn', label: 'Updated On' },
    { key: 'contact', label: 'Contact' },
  ];

const modifiedUsers = (filteredUsers || []).map(user => ({
    ...user,
  contact: (
  <div className="flex items-center gap-3">
    <div className="relative group bg-green-100 rounded-full p-2 cursor-pointer">
  <HiOutlinePhone className=' text-[#00493E]'/>
   <div  style={{background:'black'}}className="absolute top-full mt-1 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs rounded px-2 py-1 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                    whitespace-nowrap z-50 pointer-events-none">
      {user.contact.phone || "No phone"}
    </div>
    </div>
    <div className="relative group bg-green-100 rounded-full p-2 cursor-pointer">
  <HiOutlineMail className=' text-[#00493E]'/>
   <div style={{background:'black'}}className="absolute top-full mt-1 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs rounded px-2 py-1 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                    whitespace-nowrap z-50 pointer-events-none">
      {user.contact?.email || "No email"}
    </div>
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
  handler: (user) => openDialog(() => handleDelete(user.id))  
    }
];
  
  return (
    <div className="p-8 max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center mb-6">
          <div className="w-full md:flex-1 md:max-w-xl">
           {/* <SearchBar
              placeholder="Search users..."
              onSearch={handleSearch}
            /> */}
          <SearchInput onSearch={setSearchQuery} placeholder="Search users..." />          </div>
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
          renderedData={modifiedUsers}
          actions={actions}
          nameAsLink={true}
          onNameClick={(user) => handleUpdate(user.id)}
          
           pagination={{
    enabled: true,
    itemsPerPage: 2,
    position: 'top', // or 'bottom'
  }}
        />
      )}
       {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <ConfirmationDialog
            message="Are you sure you want to delete this user?"
            onConfirm={confirmDelete}
            onCancel={closeDialog}
          />
        )}

    </div>
  );
};

export default Users;
