function playBirthdaySong() {
  var audio = document.getElementById("birthdaySong");
  
  // Check if the audio is paused or has ended, then play it.
  if (audio.paused || audio.ended) {
    audio.play();
  } else {
    // If it's already playing, pause and reset to the beginning.
    audio.pause();
    audio.currentTime = 0;
  }
}
