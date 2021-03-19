import React from "react";

export default function DisplayInfo(props) {
  return (
    <div>
      <h1>Enter information</h1>
      <div>
        Your name:{props.props.data.firstName} {props.props.data.lastName}
      </div>
      <div>Your age:{props.props.data.age}</div>
      <div>Your location:{props.props.data.location}</div>
      <div>Your gender:{props.props.data.gender}</div>
    </div>
  );
}
