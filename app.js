class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: "00"
    };
  }
  render() {
    return (
      <div>
        <SessionController /> <BreakController />
        <p>
          {this.state.minutes}:{this.state.seconds}
        </p>
      </div>
    );
  }
}
const BreakController = props => {
  return (
    <div className="containerBreak">
      <h3 id="break-label">Break Length</h3>)
    </div>
  );
};

const SessionController = props => {
  return (
    <div className="containerSession">
      <h3 id="session-label">Session Length</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
