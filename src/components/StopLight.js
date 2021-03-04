import React from 'react';

const StopLight = ({lights, setLights}) => {
  return (
    <div className="action-area">
      <h1>Stoplight useEffect</h1>
      <div className="stoplight-container">
        <div className="stoplight">
          <div className={lights.red ? 'red' : undefined}></div>
          <div className={lights.yellow ? 'yellow' : undefined}></div>
          <div className={lights.green ? 'green' : undefined}></div> 
        </div>
        <div>
          <button 
          className="countdown"
          onClick={() => {
            switch(true) {
              case lights.green && lights.yellow && lights.red:
                setLights({red: false, yellow: false, green: false});
                break;
              case lights.yellow && lights.red:
                setLights({...lights, green: true});
                break;
              case lights.red:
                setLights({...lights, yellow: true});
                break;
              default:
                setLights({...lights, red: true})
            }
          }}
          >
            {lights.red && lights.yellow && lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
};

export default StopLight;