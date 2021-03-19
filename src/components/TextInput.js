import React from "react";

export default function TextInput(props) {
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.props.data.firstName}
        onChange={props.props.handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.props.data.lastName}
        onChange={props.props.handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={props.props.data.age}
        onChange={props.props.handleChange}
      />
    </div>
  );
}
