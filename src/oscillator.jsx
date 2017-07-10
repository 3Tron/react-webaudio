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
      type: this.types[0]
    });

    this.onSelectWaveForm = this.onSelectWaveForm.bind(this);
    this.onChangeFrequency = this.onChangeFrequency.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  play() {
    this.oscillator = this.audioCtx.createOscillator();
    this.setState({ 'dummy': Math.random() });
    this.oscillator.start();
  }

  stop() {
    this.oscillator.stop();
  }

  componentDidMount() {
    this.drawSinus();
  }

  render() {
    this.oscillator.type = this.state.type;
    this.oscillator.frequency.value = this.state.frequency;
    this.oscillator.connect(this.audioCtx.destination);
    return (<div>
      <div id="input">
        <select onChange={this.onSelectWaveForm}>{this.types.map((t) => this.getOscillatorTypeOption(t))}</select>
        <input type="number" onChange={this.onChangeFrequency} value={this.state.frequency} min='0' max='192000' step='10' />
        <button onClick={this.play}>play</button>
        <button onClick={this.stop}>stop</button>
      </div>
    </div>);
  }

  getOscillatorTypeOption(v) {
    return (<option value={v} selected={this.state.type === v}>{v.toUpperCase()}</option>);
  }

  onSelectWaveForm(event) {
    this.setState({
      type: event.target.value
    });
  }

  onChangeFrequency(event) {
    this.setState({
      frequency: event.target.value
    });
  }
}
