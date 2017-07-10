import React from 'react';
import {vibrator} from './navibra.js';
import {Oscillator} from './oscillator.jsx';

export default class WebAudio extends React.Component {
    render() {
        vibrator();
        return (<div>
            <h1>Sweep that frequency!</h1>
            <Oscillator />
        </div>);
    }
}   