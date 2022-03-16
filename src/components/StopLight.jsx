const StopLight = (props) => {
  console.log(props.lights)

  return (
    <div className="action-area">
      <h1>Stoplight useEffect</h1>
      <div className="stoplight-container">
        <div className="stoplight">
          <div className={props.lights.red ? 'red' : undefined}></div>
          <div className={props.lights.yellow ? 'yellow' : undefined}></div>
          <div className={props.lights.green ? 'green' : undefined}></div>
        </div>
        <div>
          <button
            className="countdown"
            onClick={() => {
              if (props.lights.red === true && 
                props.lights.yellow === true && 
                props.lights.green === true) {
                  props.setLights({red: false, yellow: false, green: false})
              } else if (props.lights.red === true && 
                props.lights.yellow === true && 
                props.lights.green === false) {
                  props.setLights({red: true, yellow: true, green: true})
              } else if (props.lights.red === true && 
                props.lights.yellow === false && 
                props.lights.green === false) {
                  props.setLights({red: true, yellow: true, green: false})
              } else if (props.lights.red === false && 
                props.lights.yellow === false && 
                props.lights.green === false) {
                  props.setLights({red: true, yellow: false, green: false})
                }
            }}
          >
          {props.lights.red && props.lights.yellow && props.lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight
