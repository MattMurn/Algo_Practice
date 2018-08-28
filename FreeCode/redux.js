// const INCREMENT = 'INCREMENT'; // define a constant for increment action types
// const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

// const counterReducer = (state=0, action) => {
//     switch(action.type){
//         case INCREMENT:
//             state =+ 1;
//             return state;
//             break;
//         case DECREMENT:
//             state =- 1;
//             return state;
//         default:
//             return state; 
//     }
// }; // define the counter reducer which will increment or decrement the state based on the action it receives

// const incAction = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }; // define an action creator for incrementing

// const decAction = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }; // define an action creator for decrementing

// const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers



let state = [0,1,2,3,4,5]
let newState = [...state];
newState.splice(3,1);
console.log(newState)
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1).concat();

console.log(removed)



class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    handleChange = (e) => {
      this.setState({input:e.target.name})
    }
    submitMessage = () => {
      this.setState({messages: [...messages, this.state.input]})
    }
    // add handleChange() and submitMessage() methods here
  
    render() {
      return (
<div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} name='input'/> 
        <button onClick={this.submitMessage}>
          button 
        </button>
        <ul>
        {this.state.messages.map((msg, i)=> {
          <li> {msg} </li>
  })}
  </ul>
</div>
      )
    }
  };