import React from 'react';

const DoctorCard = ({ doctor, onEdit, onDelete }) => (
  <div className="doctors__card1">
    <div className="doctors__card__image1">
      <img src={doctor.image} alt={doctor.name} />
    </div>
    <h4>{doctor.name}</h4>
    <p>{doctor.specialization}</p>
    <div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  </div>
);

export default DoctorCard;



