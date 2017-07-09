import React from 'react';
import ReactDOM from 'react-dom';
import WebAudio from './webaudio.jsx';

const c = document.createElement('div');
c.id = 'content';
document.body.appendChild(c);

ReactDOM.render(<WebAudio />, c);