import React from 'react';

export class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.oscillator = this.audioCtx.createOscillator();
    this.types = ['sine', 'triangle', 'square'];

    this.state = ({
      frequency: 40,
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
    this.oscillator.type = this.state.type
    this.oscillator.frequency.value = this.state.frequency;
    this.oscillator.connect(this.audioCtx.destination);
    return (<div>
      <div id="input">
        <select onChange={this.onSelectWaveForm}>
          {
            this.types.map((t) => this.getOscillatorTypeOption(t))
          }
        </select>

        <input type="number" onChange={this.onChangeFrequency} placeholder="frequency" min='0' step='1' />

        <button onClick={this.play}>play</button>
        <button onClick={this.stop}>stop</button>
      </div>
      <div>
        <canvas id="myCanvas" width="360" height="360" />
      </div>
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
    this.drawSinus();
    console.log('onChangeFrequency', event.target.value);
    this.setState({
      frequency: event.target.value
    });
  }

  drawSinus() {
    var c = document.getElementById("myCanvas");
    c.style.backgroundColor = 'darkgrey';
    c.style.border = '1px solid #d3d3d3';
    c.style.stroke = 'black';
    c.style.strokeWidth = '1px';
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < 360; i += 20) {
      console.log(i);
      ctx.moveTo(i + 5, 180);
      ctx.lineTo(i, 180);

    }
    ctx.stroke();

    var counter = 0, x = 0, y = 180;


    //100 iterations
    var increase = 90 / 180 * Math.PI * this.state.frequency;
    for (i = 0; i <= 360; i += 10) {

      ctx.moveTo(x, y);
      x = i;
      y = 180 - Math.sin(counter) * 120;
      counter += increase;

      ctx.lineTo(x, y);
      ctx.stroke();
      //alert( " x : " + x + " y : " + y + " increase : " + counter ) ;
    }
  }
}