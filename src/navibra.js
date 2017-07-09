export const vibrator = () => {
  try {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate ||
        navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
      navigator.vibrate(200);
      console.log('vibration API supported');
    }
  } catch (err) {
    console.log('no vibrator');
  }
};