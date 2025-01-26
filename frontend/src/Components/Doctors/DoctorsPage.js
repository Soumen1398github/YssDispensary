// // DoctorsList.js
// import React, { useState, useEffect } from 'react';
// import DoctorCard from './DoctorCard';

// const DoctorsList = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [newDoctorData, setNewDoctorData] = useState({
//     name: '',
//     specialization: '',
//     image: '',
//     socials: []
//   });
//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await fetch('./doc.json');
//       const data = await response.json();
//       setDoctors(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDoctorData({ ...newDoctorData, [name]: value });
//   };

//   const handleAddDoctor = (e) => {
//     e.preventDefault();
//     setShowAddForm(true);
//   };

//   const handleModifyDoctor = (index) => {
//     setSelectedDoctorIndex(index);
//     const selectedDoctor = doctors[index];
//     setNewDoctorData(selectedDoctor);
//     setShowAddForm(true);
//   };

//   const handleDeleteDoctor = (index) => {
//     const updatedDoctors = [...doctors];
//     updatedDoctors.splice(index, 1);
//     setDoctors(updatedDoctors);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (selectedDoctorIndex === null) {
//       setDoctors([...doctors, newDoctorData]);
//     } else {
//       const updatedDoctors = [...doctors];
//       updatedDoctors[selectedDoctorIndex] = newDoctorData;
//       setDoctors(updatedDoctors);
//       setSelectedDoctorIndex(null);
//     }
//     setNewDoctorData({
//       name: '',
//       specialization: '',
//       image: '',
//       socials: []
//     });
//     setShowAddForm(false);
//   };

//   return (
//     <div>
//       <div className="doctors__grid1">
//         {doctors.map((doctor, index) => (
//           <div key={index}>
//             <DoctorCard doctor={doctor} />
//             <button onClick={() => handleModifyDoctor(index)}>Modify</button>
//             <button onClick={() => handleDeleteDoctor(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleAddDoctor}>Add Doctor</button>
//       {showAddForm && (
//         <form onSubmit={handleFormSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={newDoctorData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="specialization"
//             placeholder="Specialization"
//             value={newDoctorData.specialization}
//             onChange={handleInputChange}
//           />
//           <input
//             type=''
//             name="image"
//             placeholder="Image URL"
//             value={newDoctorData.image}
//             onChange={handleInputChange}
//           />
//           <button type="submit">Add/Update Doctor</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default DoctorsList;
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://your-backend-url/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="doctors__grid1">
      {doctors.map((doctor) => (
        <div className="doctors__card1" key={doctor.id}>
          <div className="doctors__card__image1">
            <img src={doctor.image} alt="doctor" />
          </div>
          <h4>{doctor.name}</h4>
          <p>{doctor.specialty}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorsPage;



