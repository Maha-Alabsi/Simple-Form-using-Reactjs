import React from "react";

export default function Select(props) {
  return (
    <div>
      <select
        name="location"
        value={props.props.data.location}
        onChange={props.props.handleChange}
      >
        <option value="">Choose your location</option>
        <option value="amman">Amman</option>
        <option value="irbid">Irbid</option>
        <option value="salt">Salt</option>
        <option value="jerash">Jerash</option>
      </select>
    </div>
  );
}
