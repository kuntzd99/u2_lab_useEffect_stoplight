import React from 'react';

const RaceCar = (props) => {
  return (
    <div style={{
      backgroundImage: `url(${props.url})`,
      backgroundSize: 'cover',
    }}>
    </div>
  )
};

export default RaceCar;