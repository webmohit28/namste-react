import User from "./User";
import Userclass from "./Userclass";
import React from 'react';

class About extends React.Component {

  constructor(props) {
    super(props);
    //console.log('parent constructor');
    this.state = {
      userInfo: {
        name: 'jain',
        location: 'agra',
        avatar_url: ''
      }
    }
  }



  async componentDidMount() {
    // console.log('parent componentDidMount');
    const data = await fetch('https://api.github.com/users/webmohit28');
    const json = await data.json();
    this.setState({ userInfo: json })
    console.log(json);
  }

  render() {
    //console.log('parent render');
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <section>
        <h2>About Us</h2>
        {/* <User name={'mohit jain'} location={'Jaipur'} /> */}
        <Userclass name={name} location={location} avatarurl={avatar_url} />
      </section>
    )

  }

}

// const About = () => {
//   return (
//     <section>
//       <h2>About Us</h2>
//       <User name={'mohit jain'} location={'Jaipur'} />
//       <Userclass name={'rahul jain'} location={'agra'} />
//     </section>
//   )
// }

export default About;