import React from "react";

export default function RadioInput(props) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.props.data.gender === "male"}
          onChange={props.props.handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.props.data.gender === "female"}
          onChange={props.props.handleChange}
        />
        Female
      </label>
    </div>
  );
}
