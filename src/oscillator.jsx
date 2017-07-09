import React from 'react';

export class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.oscillator = this.audioCtx.createOscillator();
    this.types = ['sine', 'triangle', 'square'];

    this.state = ({
      frequency: 440,
      type: 'sine'
    });

    this.onSelectWaveForm = this.onSelectWaveForm.bind(this);
    this.onChangeFrequency = this.onChangeFrequency.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);

  }
  play() {
    this.oscillator.start();
  }
  stop() {
    this.oscillator.stop();
  }
  render() {

    this.oscillator.type = this.state.type
    this.oscillator.frequency.value = this.state.frequency;
    this.oscillator.connect(this.audioCtx.destination);
    return (<div>
      <input type="number" onChange={this.onChangeFrequency} placeholder="frequency" />
      <ul>
        <select onChange={this.onSelectWaveForm}>
          {
            this.types.map((t) => this.getOscillatorTypeOption(t))
          }
        </select>
        <li>channelCount {this.oscillator.channelCount}</li>
        <li>frequency {this.oscillator.frequency.value}</li>
        <li>numberOfInputs {this.oscillator.numberOfInputs}</li>
        <li>numberOfOutputs {this.oscillator.numberOfOutputs}</li>
      </ul>
      <button onClick={this.play}>play</button>
      <button onClick={this.stop}>stop</button>
    </div>);
  }

  getOscillatorTypeOption(v) {
    return (<option value={v} selected={this.state.type === v}>{v.toUpperCase()}</option>);
  }

  onSelectWaveForm(event) {
    console.log('onSelectWaveForm', event.target.value);
    this.setState({
      type: event.target.value
    });
  }

  onChangeFrequency(event) {
    console.log('onChangeFrequency', event.target.value);
    this.setState({
      frequency: event.target.value
    });
  }
}