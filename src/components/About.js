import User from "./User";
import Userclass from "./Userclass";

const About = () => {
  return (
    <section>
      <h2>About Us</h2>
      <User name={'mohit jain'} location={'Jaipur'} />
      <Userclass name={'rahul jain'} location={'agra'} />
    </section>
  )
}
export default About;