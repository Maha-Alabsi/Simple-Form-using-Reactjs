import React from "react";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckInput from "./CheckInput";
import DisplayInfo from "./DisplayInfo";
function FormContent(props) {
  return (
    <main>
      <form>
        <TextInput props={props} />
        <br />
        <RadioInput props={props} />
        <br />
        <SelectInput props={props} />
        <br />
        <CheckInput props={props} />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <DisplayInfo props={props} />
    </main>
  );
}

export default FormContent;
