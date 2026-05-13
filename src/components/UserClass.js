import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "User",
        location: "Location",
        url: "",
        avatar_url: "",
      },
    };
    // console.log(`${this.props.name} Child constructor`);
  }

  async componentDidMount() {
    // console.log(`${this.props.name} Child component did mount`);

    const data = await fetch("https://api.github.com/users/mohammadrafeeshaik");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log(`${this.props.name} Child component did update`);
  }

  componentWillUnmount() {
    // console.log(`${this.props.name} Child component will unmount`);
  }

  render() {
    const { count } = this.state;
    const { name, location, url, avatar_url } = this.state.userInfo;

    // console.log(`${this.props.name} Child render`);

    return (
      <div className="card">
        <div>
          <img
            src={avatar_url}
            alt=""
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
          <h2>
            UserName: {name} ({url})
          </h2>
          <h3>Location: {location}</h3>
        </div>
        <p>{count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement count
        </button>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment count
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset count
        </button>
      </div>
    );
  }
}

export default UserClass;
