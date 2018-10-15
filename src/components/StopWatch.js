import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elaspedTime: 0,
    previousTime: 0

  }
  handleStopWatch = () => {
    this.setState( prevState => ({
      isRunning: !this.state.isRunning
    }));
    if (!this.state.isRunning){
      this.setState({
        previousTime: Date.now()
      })
    }
  }
  handleReset = () => {
    this.setState({elaspedTime: 0})
  }
  tick = () => {
   // console.log('Time keeps on ticking, ticking, ticking, into the future');
   if (this.state.isRunning){
     const now = Date.now();
     this.setState( prevState => ({
       previousTime: now,
       elaspedTime: prevState.elaspedTime + (now - prevState.previousTime)
     }))
   }
  }
  componentDidMount(){
    this.intervalID = setInterval(()=>this.tick(), 100);
  }
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
  render(){
    const seconds = Math.floor(this.state.elaspedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default StopWatch;
