  var video = document.getElementById("myVideo");
  var seekBar = document.getElementById("seekBar");

  function forward10Seconds() {
    video.currentTime += 10;
  }

  function backward10Seconds() {
    video.currentTime -= 10;
  }

  function playVideo() {
    video.play();
  }

  function pauseVideo() {
    video.pause();
  }

  function stopVideo() {
    video.pause();
    video.currentTime = 0;
  }

  function updateSeekBar() {
    var newTime = video.duration * (seekBar.value / 100);
    video.currentTime = newTime;
  }

  function toggleFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  video.addEventListener("timeupdate", function() {
    var value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
  });