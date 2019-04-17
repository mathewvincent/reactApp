import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person';
import Person2 from './Component/Person2';



class App extends Component {

  state ={
    person:[
    {name:"Abin",age:24, sex:"male",pass:false},
    {name:"Alice", age:21, sex:"female",pass:true},
    {name:"Sara",age:32,sex:"female",pass:false}
  ]
  };
  statech=()=>{
    alert("State is changed");
    this.setState({
      person:[
       {name:"Jack",age:44, sex:"male",pass:false},
       {name:"Hannah",age:17, sex:"female",pass:true},
       {name:"Ana",age:82, sex:"female",pass:true}
      ]

    })
  };

  myfun=()=>{
    if(this.state.person[0].pass===true){
        document.getElementById('ex').innerHTML=`${this.state.person[0].name} has passed the Exam.`;
      }
      else if(this.state.person[0].pass===false){
        document.getElementById('ex').innerHTML=`${this.state.person[0].name} has failed the Exam.`;
      }
    if(this.state.person[1].pass===true){
        document.getElementById('ey').innerHTML=`${this.state.person[1].name} has passed the Exam.`;
      }
      else if(this.state.person[1].pass===false){
        document.getElementById('ey').innerHTML=`${this.state.person[1].name} has failed the Exam.`;
      }
    if(this.state.person[2].pass===true){
        document.getElementById('ez').innerHTML=`${this.state.person[2].name} has passed the Exam.`;
        }
      else if(this.state.person[2].pass===false){
        document.getElementById('ez').innerHTML=`${this.state.person[2].name} has failed the Exam.`;
      }


    console.log("myfun works");
  };

  myfun1=()=>{
    document.getElementById('ex').innerHTML=`${this.state.person[0].name} is  ${this.state.person[0].age} years old.`;
    document.getElementById('ey').innerHTML=`${this.state.person[1].name} is  ${this.state.person[1].age} years old.`;
    document.getElementById('ez').innerHTML=`${this.state.person[2].name} is  ${this.state.person[2].age} years old.`;
    
    console.log("myfun1 works");
  };

  myfun2=()=>{
    document.getElementById('ex').innerHTML=`${this.state.person[0].name} is  ${this.state.person[0].sex}.`;
    document.getElementById('ey').innerHTML=`${this.state.person[1].name} is  ${this.state.person[1].sex}.`;
    document.getElementById('ez').innerHTML=`${this.state.person[2].name} is  ${this.state.person[2].sex}.`;
    
    console.log("myfun1 works");
  };
  myfun3=()=>{
    console.log("myfun3 works");
    document.getElementById('ev').innerHTML="Press the first button "
  }

  myfun4=()=>{
    console.log("myfun4 works");
    document.getElementById('ev').innerHTML="";
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
           Welcome To My React Page
          </p>
          

          <Person2 />
          <Person name="Bob" breed="dog" >I am child</Person>  
          <Person name="Tom" breed="cat" />
          <Person name="Nemo" breed="fish" />
          <br></br><br></br><br></br>
          <p id="ev"></p>
          <button  id="btn"  name="button" onClick={this.myfun} onMouseOver={this.myfun1} onMouseOut={this.myfun2}>
            Click Me</button>
        </header> 
      <button onClick={this.statech}>Change the State</button>
      <div onMouseOver={this.myfun3} onMouseOut={this.myfun4}>
      
      <p id="ex">{this.state.person[0].name} is {this.state.person[0].sex}</p>
      <p id="ey">{this.state.person[1].name} is {this.state.person[1].sex}</p>
      <p id="ez">{this.state.person[2].name} is {this.state.person[2].sex}</p>
      
      </div>
      </div>
    );
  }
}
export default App;