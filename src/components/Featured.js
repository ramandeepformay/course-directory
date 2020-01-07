import React from 'react';

function capital(data){
  return data.charAt(0).toUpperCase() + data.substring(1);
}
const Featured = (props) => {
  const teacher= capital(props.match.params.name);
  // `${capital(props.match.params.fname)} ${capital(props.match.params.lname)}`;
  const topic =capital(props.match.params.topic);
  
  return (
    <div className="main-content">
      <h2>{teacher} </h2>
      <p>Introducing <strong>{teacher}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;