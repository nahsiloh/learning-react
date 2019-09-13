//vanilla javascript
// const app = document.querySelector("#app");
// app.textContent = "Hello";

// const h3 = document.createElement("h3");
// h3.textContent = "Hello World!";

// app.appendChild(h3);

// jQuery
//("<tags>") = creates a tag
//("tags") = searches through HTML for this tag
// const h1 = $("<h1>").text("Hello, world 2!");
// $("#app").append(h1);

//React
// const h2 = React.createElement("h2", null, "Hello, world");
// ReactDOM.render(h2, app);

// const itemOne = React.createElement("li", null, "My first item");

// const ol = React.createElement("ol", null, itemOne);
// const ol = (
//   <ol>
//     <li>item 1</li>
//     <li>item 2</li>
//   </ol>
// );

// ReactDOM.render(ol, app);

const root = document.querySelector("#app");

// const hi = <h1>Hello, World</h1>;

// function App() {
//   let counter = 0;
//   const incrementCounter = {
//     counter += 1;
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick= {incrementCounter()}>+</button>
//     </div>
//   );
// }

// ReactDOM.render(<App />, root);

function Child(props) {
  return (
    <h1>
      Hi my name is {props.name} and I am {props.age}
    </h1>
  );
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      aliceAge: 9,
      bobAge: 12
    };
  }

  changeAge() {
    const newAge = Math.floor(Math.random() * 10);
    this.setState({ aliceAge: newAge });
  }

  render() {
    return (
      <div>
        <Child name="Alice" age={this.state.aliceAge} />
        <Child name="Bob" age={this.state.bobAge} />
        <button onClick={() => this.changeAge()}>
          Click to change Alice's age
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, root);
