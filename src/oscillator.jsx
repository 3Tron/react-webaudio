import React from 'react';

export class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.oscillator = this.audioCtx.createOscillator();
    this.types = ['sine', 'triangle', 'square'];

    this.state = ({
      frequency: 0,
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
        <input type="number" onChange={this.onChangeFrequency} value={this.state.frequency} min='0' step='10' />
        <button onClick={this.play}>play</button>
        <button onClick={this.stop}>stop</button>
      </div>
      {/*<div><canvas id="myCanvas" width="256" height="256" /></div>*/}
    </div>);
  }

  getOscillatorTypeOption(v) {
    return (<option value={v} selected={this.state.type === v}>{v.toUpperCase()}</option>);
  }

  onSelectWaveForm(event) {
    //console.log('onSelectWaveForm', event.target.value);
    this.setState({
      type: event.target.value
    });
  }

  onChangeFrequency(event) {
    //console.log('onChangeFrequency', event.target.value);
    this.setState({
      frequency: event.target.value
    }, this.drawSinus());
  }

  drawSinus() {
    /*
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let width = 256;
    let height = 256;
    ctx.clearRect(0, 0, c.width, c.height);
    for (var x = 0; x < width; x += 20) {
      ctx.moveTo(x + 5, height / 2);
      ctx.lineTo(x, height / 2);
    }
    ctx.moveTo(0, height / 2);
    let cycle = (width / 2) / this.state.frequency;
    for (var x = 0; x <= width / 2; x += 1) {
      let t = Math.sin(x * Math.PI / cycle);
      console.log(t);
      var y = (height / 2) - (t * 120);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  */}
}