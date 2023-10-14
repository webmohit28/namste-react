import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [showitem, setShowitem] = useState(1);

  return (<div className="card ">
    <div className="card-body">
      <h3>{'count ' + showitem}</h3>
      <h5 className="card-title">User: {name}(fun)</h5>
      <p className="card-content">Location: {location}</p>
      <button className="btn btn-primary " onClick={() => {
        setShowitem(showitem + 1)
      }}>Add</button>
    </div>
  </div>)
}

export default User;