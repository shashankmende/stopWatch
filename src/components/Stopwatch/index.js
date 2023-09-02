import {Component} from 'react'
import './index.css'

let count = 0
class Stopwatch extends Component {
  state = {isTimerRunning: false, time: 0, seconds: 0}

  onClickStartBtn = () => {
    let {time} = this.state
    const {isTimerRunning} = this.state
    this.timerId = setInterval(() => {
      count += 1
      if (count > 59) {
        count = 0
        time += 1
      }
      this.setState({
        time,
        seconds: count,
        isTimerRunning: !isTimerRunning,
      })
    }, 1000)
  }

  onClickStopBtn = () => {
    const {isTimerRunning} = this.state
    this.setState({
      isTimerRunning: !isTimerRunning,
    })
    clearInterval(this.timerId)
  }

  onClickResetBtn = () => {
    this.setState({
      time: 0,
      seconds: 0,
      isTimerRunning: false,
    })
    clearInterval(this.timerId)
  }

  render() {
    let {time, seconds} = this.state
    const {isTimerRunning} = this.state
    if (seconds <= 9) {
      seconds = `0${seconds}`
    }
    if (time <= 9) {
      time = `0${time}`
    }
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <div className="image-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1>Timer</h1>
          </div>
          <h1>
            {time}:{seconds}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="startBtn"
              onClick={this.onClickStartBtn}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stopBtn"
              onClick={this.onClickStopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="resetBtn"
              onClick={this.onClickResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
