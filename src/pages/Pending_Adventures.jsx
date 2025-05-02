import { useNavigate } from "react-router-dom";
import Table from "../components/Table";

const Pending_Adventures = () => {
  const navigate = useNavigate();
  
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' }
  ];
  
  const data = [
    {
      name: 'Kayaking',
      id: '#ADV12345',
      joined: 'March 25, 2021',
      updated: 'March 28, 2021',
      location: 'Lake Tahoe, California',
      phone: '+1 234 567 890',
      email: 'kayaking@example.com',
      username: 'kayakPro',
      description: 'Explore the crystal-clear waters of Lake Tahoe with expert kayaking guides.',
      price: '45',
      coverImage: "https://images.unsplash.com/photo-1501785888041-af3e28568cce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Lake+Tahoe,CA&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CLake+Tahoe,CA&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Kayaking
        "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Lake
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"  // Paddles
      ]
    },
    {
      name: 'Paragliding',
      id: '#ADV67890',
      joined: 'April 10, 2021',
      updated: 'April 15, 2021',
      location: 'Varkala, Kerala',
      phone: '+91 98765 43210',
      email: 'paraglide@adventure.com',
      username: 'skyRider',
      description: 'Fly high above the coast of Varkala and enjoy an adrenaline rush like no other!',
      price: '60',
      coverImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Varkala,Kerala&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CVarkala,Kerala&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Paragliding
        "https://images.unsplash.com/photo-1505228395891-9a51e5e8bf86?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Cliff view
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"  // Sunset
      ]
    },
    {
      name: 'Mountain Hiking',
      id: '#ADV24680',
      joined: 'May 5, 2021',
      updated: 'May 10, 2021',
      location: 'Swiss Alps, Switzerland',
      phone: '+41 123 456 789',
      email: 'hiking@alps.com',
      username: 'alpineExplorer',
      description: 'Challenging hikes through breathtaking alpine landscapes with experienced guides.',
      price: '75',
      coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Swiss+Alps&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CSwiss+Alps&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Mountains
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", // Hiking trail
        "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"  // Summit
      ]
    }
  ];

  const handleApprove = (adventure) => {
    console.log('Approving:', adventure);
    // API call to approve adventure
    // alert(`Adventure ${adventure.id} approved!`);
    // Then refresh data or update local state
  };

  const handleReject = (adventure) => {
    console.log('Rejecting:', adventure);
    // API call to reject adventure
    // alert(`Adventure ${adventure.id} rejected!`);
    // Then refresh data or update local state
  };

  const handleViewDetails = (adventure) => {
    const urlId = adventure.id.replace('#', '');
    navigate(`/pending-adventures/${urlId}`, { 
      state: { adventure } 
    });
  };

  // Define custom actions for pending adventures
  const actions = [
    {
      label: 'Approve',
      variant: 'success',
      handler: handleApprove
    },
    {
      label: 'Reject',
      variant: 'danger',
      handler: handleReject
    },
    {
      label: 'View Details',
      handler: handleViewDetails
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Table 
        headers={headers}
        rows={data}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default Pending_Adventures;