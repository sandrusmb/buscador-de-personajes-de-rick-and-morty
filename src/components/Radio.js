import React from "react";

function Radio(props) {
  console.log(props);
  console.log(props.status);

  function handleStatus(ev) {
    props.handleStatus({ value: ev.target.value });
  }

  return (
    <div className="hola">
      <label name="status" htmlFor="Alive">
        Alive
        <input
          id="dead"
          name="Alive"
          type="radio"
          value="Alive"
          checked={props.status === "Alive"}
          onChange={handleStatus}
        />
      </label>
      <label name="status" htmlFor="Dead">
        Dead
        <input
          id="dead"
          name="Dead"
          type="radio"
          value="Dead"
          checked={props.status === "Dead"}
          onChange={handleStatus}
        />
      </label>
      <label name="status" htmlFor="unknown">
        unknown
        <input
          id="unknown"
          name="unknown"
          type="radio"
          value="unknown"
          checked={props.status === "unknown"}
          onChange={handleStatus}
        />
      </label>
    </div>
  );
}

export default Radio;

{
  /* <input 
type="radio" 
onChange={handleCheck} 
name="status" 
value="Alive" 
checked={props.status === "Alive"} /> 

          
<input 
type="radio" 
onChange={handleCheck} 
name="status" 
value="Dead" 
checked={props.status === "Dead"} /> 

<input 
type="radio" 
onChange={handleCheck} 
name="status" 
value="unknown" 
checked={props.status === "unknown"} />  */
}
