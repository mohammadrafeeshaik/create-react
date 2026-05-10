import { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        {/* <User
        name={"Rafee Functional Component"}
        location={"Hyderabad Function"}
      /> */}
        <UserClass
          name={"Rafee Class Component"}
          location={"Hyderabad Class"}
        />
        <UserClass
          name={"Rashida Class Component"}
          location={"Hyderabad Class"}
        />
      </div>
    );
  }
}

export default About;
