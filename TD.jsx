import React from "react";
import TodoData from "./TodoData";
import TodoItem from "./TodoItem.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos: TodoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    // console.log("id", id);
    console.log("Index->App ->TodoItem--> handleChange -> ̥id", id);
    this.setState((prevState) => {
      const ModifiedArr = prevState.Todos.map((item) => {
        if (item.Serial === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return { Todos: ModifiedArr };
    });
  }
  render() {
    var NewArray = this.state.Todos.map((element) => (
      <TodoItem
        serial1={element.Serial}
        key={element.Serial}
        title1={element.title}
        compStatus={element.completed}
        newprop={this.handleChange}
      />
    ));

    return (
      <div>
        <h1>my first NewArray array of HArdcoded TodoData</h1>
        {NewArray}

        <h1>my modified array of New Data</h1>
      </div>
    );
  }
}
export default App;

///////////////////////////////////////////////// Conditional rendering Practise 2
// class Counter extends Component {
//   constructor(props) {
//     super();
//     this.state = { logStatus: true };
//     this.changeLogStatus = this.changeLogStatus.bind(this); //important
//   }
//   changeLogStatus() {
//     console.log("my onclick is called");
//     this.setState((prevState) => {
//       return {
//         logStatus: !prevState.logStatus, ////pay attention here// this.state.logStatus: ;
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.logStatus === true ? (
//           <div>
//             <h1>You are logged in</h1>
//             <button onClick={this.changeLogStatus}>Logout </button>
//           </div>
//         ) : (
//           <div>
//             <h1>You are logged out</h1>
//             <button onClick={this.changeLogStatus}>Login </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default Counter;

//////////////////////////////////////////Conditional rendering practise 1

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { isLoading: true };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       });
//     }, 1500);
//     console.log("i,componentDidMount was loaded these many times.");
//   }

// export default Counter;

// function Counter() {
//   isLoading;
//   ComponentDidMount(
//     setTimeout(() => {
//       apiloader();
//     }, 3000)
//   );

//   function apiloader() {
//     return <div></div>;
//   }

//   return <div></div>;
// }

// export default Counter;

////////////////////////////////////////////////learning UseState

// const Counter = () => {
//   const [a, b] = useState(2);
//   const c = useState(2);

//   function increment() {
//     //     console.log(a[0]);
//     //     return <div></div>;
//     //   }
//     b((a) => a + 100);
//   }
//   function decrement() {
//     b((a) => a - 100);
//   }
//   console.log(a);

//   return (
//     <div>
//       <button onClick={increment}>inc</button>
//       <span>{a}</span>
//       <button onClick={decrement}>dec</button>
//     </div>
//   );
// };

// export default Counter;

// import React from "react";
// import TodoData from "./TodoData";
// import TodoItem from "./TodoItem.jsx";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { Todos: TodoData };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     // console.log("id", id);
//     console.log("Index->App ->TodoItem--> handleChange -> ̥id", id);
//     this.setState((prevState) => {
//       const ModifiedArr = prevState.Todos.map((item) => {
//         if (item.Serial === id) {
//           item.completed = !item.completed;
//           // console.log("hi my handlechange is being called",id)
//         }
//         // return {item};
//         return item; //this is what was really Wrong in code earlier!!!
//       });
//       //   return ModifiedArr; //this also works fine as the code in the line below.
//       return { Todos: ModifiedArr }; //this is just a destructured array. refer to the Video by webDevSimplied on Array,Function,Objects Destructuring in ES6.
//     });
//     // console.log("hi my handlechange is being called",id)
//   }

//   render() {
//     var NewArray = this.state.Todos.map((element) => (
//       <TodoItem
//         serial1={element.Serial}
//         key={element.Serial}
//         title1={element.title}
//         compStatus={element.completed}
//         newprop={this.handleChange}
//       />
//     ));
//     console.log(this.state.Todos); //way to check if NewArray is loading..or Todos call works

//     return (
//       <div>
//         <h1>my first NewArray array of HArdcoded TodoData</h1>
//         {NewArray}
//         <h1>my modified array of NEw Data</h1>
//         {/* The no. of times the checklist changed. */}
//       </div>
//     );
//   }
// }
// export default App;
