import React from "react";

export default function CheckInput(props) {
  let checkName = props.props.data.isChecked ? "checked" : "unchecked";
  return (
    <div>
      <label>
        <input
          name="isChecked"
          type="checkbox"
          checked={props.props.data.isChecked}
          onChange={props.props.handleChange}
        />
        {checkName}
      </label>
    </div>
  );
}
