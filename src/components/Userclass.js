import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2
    }
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (<div className="card ">
      <div className="card-body">
        <h3>{'count ' + count + ',' + count2}</h3>
        <h5 className="card-title">User: {name}(class)</h5>
        <p className="card-content">Location: {location}</p>
        <button className="btn btn-primary " onClick={() => {
          this.setState({ count: this.state.count + 1, })
        }}>Add</button>
      </div>
    </div>)
  }
}
export default Userclass;