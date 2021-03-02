import React, {useState, useEffect} from 'react';
import RaceCar from './RaceCar';
const BASE_URL = 'https://res.cloudinary.com/ahonore42/image/upload';
const imgUrls = [
  `${BASE_URL}/v1614648086/ga/bluehatchback_rxbnn7.png`,
  `${BASE_URL}/v1614648099/ga/greencoupe_hr19ae.png`,
];

const Highway = ({lights}) => {
  const[racing, setRacing] = useState('cars');
  const startRace = () => (lights.green) ? setRacing('cars race') : setRacing('cars');

  useEffect(() => {
    startRace()
  }, [lights.green]);

  return (
    <div className="highway">
      <div className={racing}>
        {imgUrls.map((url, idx) => <RaceCar key={`car${idx}`} url={url}/>)}
      </div>
    </div>
  )
};

export default Highway;