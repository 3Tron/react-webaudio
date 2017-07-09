export const test = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  const audioCtx = new AudioContext();

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.context;
  oscillator.numberOfInputs;
  oscillator.numberOfOutputs;
  oscillator.channelCount;
  console.log(oscillator);
};
