import Table from "../components/Table";

const Pending_Adventures = () => {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'action', label: 'Action' }
  ];
  
  const data = [
    { 
      name: 'Kayaking', 
      id: '#ADV12345', 
      joined: 'March 25, 2021', 
      updated: 'March 28, 2021', 
      location: 'Lake Tahoe, California' 
    },
    { 
        name: 'XXXXXX', 
        id: '#ADV123423', 
        joined: 'March 25, 2021', 
        updated: 'March 28, 2021', 
        location: 'Lake Tahoe, California' 
      },
      { 
        name: 'YYYYYY', 
        id: '#ADV12390', 
        joined: 'March 25, 2021', 
        updated: 'March 28, 2021', 
        location: 'Lake Tahoe, California' 
      },
      { 
        name: 'ZZZZZZZ', 
        id: '#ADV12389', 
        joined: 'March 25, 2021', 
        updated: 'March 28, 2021', 
        location: 'Lake Tahoe, California' 
      },
    // ... more adventures
  ];

  const handleEdit = (adventure) => {
    console.log('Editing:', adventure);
    // Your edit logic here
  };

  const handleDelete = (adventure) => {
    console.log('Deleting:', adventure);
    // Your delete logic here
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Table 
        headers={headers}
        rows={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        nameAsLink={true}
      />
    </div>
  );
};

export default Pending_Adventures;