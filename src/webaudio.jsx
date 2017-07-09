import React from 'react';
import {vibrator} from './navibra.js';
import {Oscillator} from './oscillator.jsx';

export default class WebAudio extends React.Component {
    render() {
        vibrator();
        return (<div>
            <h1>It works</h1>
            <Oscillator />
        </div>);
    }
}   