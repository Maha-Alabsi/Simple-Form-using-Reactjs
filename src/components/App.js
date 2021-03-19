import "./../css/App.css";
import React from "react";

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//         firstName:"",
//         lastName:"",
//         text:"",
//         isChecked:false,
//         isgender:"",
//         favColor:"blue"
//     }
//     this.handleChange=this.handleChange.bind(this);
//     // this.handleLastChange=this.handleLastChange.bind(this);
//   }

//   // handleChange(event){
//   //    this.setState({
//   //      [event.target.name]: event.target.value
//   //     })
//   // }

//   handleChange(event){
//     const {name, value,type,checked} = event.target;
//     type ==="checkbox"? this.setState({[name]:checked})  : this.setState({
//       [name]: value,
//      })
//  }
// //   handleLastChange(event){
// //     this.setState({
// //       lastName: event.target.value
// //      })
// //  }
//   render(){
//   return (
//    <form onSubmit={this.handleSubmit}>
//      <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
//      <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
//      <h1>{this.state.firstName} {this.state.lastName}</h1>
//      <textarea name="text" value={this.state.text} onChange={this.handleChange}/>
//      <h2>{this.state.text}</h2>
//      <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}/>
//      <br/>
//      <label>
//      <input type="radio" name="isgender" value="male" checked={this.state.isgender==="male"} onChange={this.handleChange}/>
//      Male
//      </label>
//      <label>
//      <input type="radio" name="isgender" value="female"  checked={this.state.isgender==="female"} onChange={this.handleChange}/>
//      Female
//      </label>
//      <h1>{this.state.isgender}</h1>
//      <select value={this.state.favColor}
//      onChange={this.handleChange}
//      name="favColor"
//      >
//        <option value="blue">Blue</option>
//        <option value="green">Green</option>
//        <option value="red">Red</option>
//        <option value="yellow">Yellow</option>
//        <option value="orange">Orange</option>
//      </select>
//      <h3>Your favorite color is {this.state.favColor}</h3>
//    </form>
//   );
// }
// }

class App extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    let checkName = this.state.isChecked ? "checked" : "unchecked";
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleSubmit}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleSubmit}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleSubmit}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleSubmit}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleSubmit}
            />
            Female
          </label>
          <br />
          <select
            name="location"
            value={this.state.location}
            onChange={this.handleSubmit}
          >
            <option value="">Choose your location</option>
            <option value="amman">Amman</option>
            <option value="irbid">Irbid</option>
            <option value="salt">Salt</option>
            <option value="jerash">Jerash</option>
          </select>
          <br />
          <label>
            <input
              name="isChecked"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleSubmit}
            />
            {checkName}
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h1>Enter information</h1>
        <div>
          Your name:{this.state.firstName} {this.state.lastName}
        </div>
        <div>Your age:{this.state.age}</div>
        <div>Your location:{this.state.location}</div>
        <div>Your gender:{this.state.gender}</div>
      </main>
    );
  }
}

export default App;
