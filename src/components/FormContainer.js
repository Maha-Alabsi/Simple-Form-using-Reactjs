import React from "react";
import FormContent from "./FormContent";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: null,
      gender: "male",
      location: "",
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <FormContent handleChange={this.handleChange} data={this.state} />
      </div>
    );
  }
}

export default FormContainer;
